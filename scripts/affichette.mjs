// Affichette A5 imprimable (PDF) avec QR code vers le site, à poser en salle, en vitrine ou sur le comptoir.
//   npm run affichette   →   print/affichette-a5.pdf (+ aperçu print/affichette-a5.png)
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import QRCode from "qrcode";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const site = JSON.parse(await readFile(path.join(ROOT, "data/site.json"), "utf8"));
const url = `${site.url}/fr`;

const hex = (h) => rgb(parseInt(h.slice(1, 3), 16) / 255, parseInt(h.slice(3, 5), 16) / 255, parseInt(h.slice(5, 7), 16) / 255);
const CREAM = hex("#FBF5EA");
const INK = hex("#3B2A20");
const TERRA = hex("#9A4228");
const MUTED = hex("#5E4A3C");
const NUIT = hex("#24305E");
const DOTS = ["#24305E", "#B8583A", "#6E8F6A", "#D9922E"].map(hex);

const pdf = await PDFDocument.create();
pdf.setTitle("La Graine et les Saveurs : affichette A5");
pdf.setAuthor("La Graine et les Saveurs");
const W = 419.53;
const H = 595.28;
const page = pdf.addPage([W, H]);
const serif = await pdf.embedFont(StandardFonts.TimesRoman);
const serifI = await pdf.embedFont(StandardFonts.TimesRomanItalic);
const sans = await pdf.embedFont(StandardFonts.Helvetica);

page.drawRectangle({ x: 0, y: 0, width: W, height: H, color: CREAM });

// Bandeau photo : le couscous au mouton sur l'assiette bleue
const photoH = 210;
const photo = await sharp(path.join(ROOT, "assets/plats/couscous-mouton.jpg")).resize(1260, 630, { fit: "cover", position: "centre" }).jpeg({ quality: 88 }).toBuffer();
page.drawImage(await pdf.embedJpg(photo), { x: 0, y: H - photoH, width: W, height: photoH });

// Logo (le vrai logo vectorisé) rendu en PNG haute définition : pdf-lib gère mal les tracés SVG complexes
const logoPng = await sharp(path.join(ROOT, "public/logo.svg"), { density: 400 }).resize({ width: 900 }).png().toBuffer();
const logo = await pdf.embedPng(logoPng);
const logoW = 104;
const logoH = (logo.height / logo.width) * logoW;
let y = H - photoH - 18 - logoH;
page.drawImage(logo, { x: (W - logoW) / 2, y, width: logoW, height: logoH });

const center = (text, font, size, yy, color = INK) => page.drawText(text, { x: (W - font.widthOfTextAtSize(text, size)) / 2, y: yy, size, font, color });

y -= 30;
center("Réservez votre table en ligne", serif, 21, y);
y -= 18;
center("la carte, les prix, les horaires et la livraison", serifI, 12.5, y, MUTED);

const qrPng = await QRCode.toBuffer(url, { margin: 0, width: 600, color: { dark: "#3B2A20", light: "#FBF5EA" }, errorCorrectionLevel: "M" });
const qrS = 100;
y -= 16 + qrS;
page.drawImage(await pdf.embedPng(qrPng), { x: (W - qrS) / 2, y, width: qrS, height: qrS });
y -= 15;
center(url.replace(/^https?:\/\//, ""), sans, 8, y, TERRA);

// Ligne de points, comme la bordure des assiettes
y -= 16;
const n = 11;
for (let i = 0; i < n; i++) page.drawCircle({ x: W / 2 - ((n - 1) * 9) / 2 + i * 9, y, size: 1.6, color: DOTS[i % 4] });
page.drawLine({ start: { x: W / 2 - 52, y: y + 5 }, end: { x: W / 2 + 52, y: y + 5 }, thickness: 0.4, color: NUIT, opacity: 0.35 });
page.drawLine({ start: { x: W / 2 - 52, y: y - 5 }, end: { x: W / 2 + 52, y: y - 5 }, thickness: 0.4, color: NUIT, opacity: 0.35 });

y -= 20;
center("Couscous maison · Halal · Sans alcool", sans, 8.5, y, MUTED);
y -= 14;
center("Sur place · À emporter · Livraison Uber Eats et Deliveroo", sans, 8.5, y, MUTED);
y -= 16;
center(`${site.address.street}, ${site.address.postalCode} ${site.address.city}  ·  ${site.phone}`, sans, 8.5, y);

await mkdir(path.join(ROOT, "print"), { recursive: true });
const bytes = await pdf.save();
await writeFile(path.join(ROOT, "print/affichette-a5.pdf"), bytes);
console.log("affichette prête :", url, "· bas du texte à", Math.round(y), "pt");
