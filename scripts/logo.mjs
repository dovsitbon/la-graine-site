// Vectorise le vrai logo (photo de profil Instagram : « La graine et les saveurs… » manuscrit en arc, deux épis dorés)
// en deux tracés : le lettrage (blanc sur l'original) et les épis (dorés).
//   npm run logo   →   components/logo-paths.json, public/logo.svg, public/logo-blanc.svg, app/icon.svg (favicon : les épis)
// Quand le restaurant fournira son fichier d'origine, remplacez public/logo.svg et logo-paths.json.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import potrace from "potrace";

const ROOT = path.resolve(import.meta.dirname, "..");
const src = path.join(ROOT, "assets/raw/la-graine_logo.jpg");
const crop = { left: 90, top: 150, width: 830, height: 760 };
const SCALE = 3;

const { data, info } = await sharp(src).extract(crop).resize({ width: crop.width * SCALE }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height;

// Masques : blanc (lettrage) et doré (épis) ; noir = forme, blanc = fond, pour potrace
const mask = (test) => {
  const out = Buffer.alloc(W * H);
  for (let i = 0; i < W * H; i++) {
    const r = data[i * 3], g = data[i * 3 + 1], b = data[i * 3 + 2];
    out[i] = test(r, g, b) ? 0 : 255;
  }
  return sharp(out, { raw: { width: W, height: H, channels: 1 } }).blur(1.2).threshold(128).png().toBuffer();
};
const textMask = await mask((r, g, b) => r > 165 && g > 165 && b > 165 && r - b < 45);
const wheatMask = await mask((r, g, b) => r > 120 && g > 90 && r - b > 45);

const trace = (buf) =>
  new Promise((ok, ko) => potrace.trace(buf, { threshold: 128, turdSize: 320, optTolerance: 0.35 }, (e, s) => (e ? ko(e) : ok(s.match(/ d="([^"]+)"/)[1]))));
const text = await trace(textMask);
const wheat = await trace(wheatMask);

async function bbox(buf) {
  const { data: m, info: i } = await sharp(buf).raw().toBuffer({ resolveWithObject: true });
  let x0 = i.width, y0 = i.height, x1 = 0, y1 = 0;
  for (let y = 0; y < i.height; y++)
    for (let x = 0; x < i.width; x++)
      if (m[(y * i.width + x) * i.channels] < 128) {
        x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
      }
  return [x0, y0, x1, y1];
}
const a = await bbox(textMask), b = await bbox(wheatMask);
const pad = 16;
const vb = [Math.min(a[0], b[0]) - pad, Math.min(a[1], b[1]) - pad, Math.max(a[2], b[2]) - Math.min(a[0], b[0]) + pad * 2, Math.max(a[3], b[3]) - Math.min(a[1], b[1]) + pad * 2].join(" ");
const wb = [b[0] - pad, b[1] - pad, b[2] - b[0] + pad * 2, b[3] - b[1] + pad * 2];

const svg = (ink, gold) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="La graine et les saveurs"><path fill="${ink}" d="${text}"/><path fill="${gold}" d="${wheat}"/></svg>\n`;
await writeFile(path.join(ROOT, "public/logo.svg"), svg("#24305E", "#D9922E"));
await writeFile(path.join(ROOT, "public/logo-blanc.svg"), svg("#FBF5EA", "#E6C27A"));
await writeFile(path.join(ROOT, "components/logo-paths.json"), JSON.stringify({ viewBox: vb, text, wheat, wheatBox: wb.join(" ") }) + "\n");

// Favicon : l'épi de gauche, doré sur bleu nuit comme le logo d'origine (les deux épis côte à côte seraient illisibles en 32 px)
const ear = [wb[0], wb[1], wb[2] / 2, wb[3]];
const side = Math.max(ear[2], ear[3]) * 1.12;
const cx = ear[0] + ear[2] / 2, cy = ear[1] + ear[3] / 2;
await writeFile(
  path.join(ROOT, "app/icon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${cx - side / 2} ${cy - side / 2} ${side} ${side}"><rect x="${cx - side / 2}" y="${cy - side / 2}" width="${side}" height="${side}" rx="${side * 0.18}" fill="#24305E"/><clipPath id="c"><rect x="${cx - side / 2}" y="${cy - side / 2}" width="${side}" height="${side}"/></clipPath><path clip-path="url(#c)" fill="#E6C27A" d="${wheat}"/></svg>\n`,
);
console.log("logo vectorisé", vb, "épis", wb.join(" "));
