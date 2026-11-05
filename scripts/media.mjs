// Classe les photos Instagram (assets/raw/) dans assets/<catégorie>/ avec des noms lisibles,
// puis les prépare pour le web dans public/media/<catégorie>/ (next/image sert ensuite AVIF/WebP à la bonne taille).
//   npm run media
//
// Il n'y a que 6 photos : les plats de grillades sont recadrés dans la grande photo de table vue du dessus (02).
// Pour ajouter vos photos prises sur place : déposez le fichier dans assets/<catégorie>/, ajoutez une ligne dans PICKS
// (source, catégorie, nom), relancez npm run media, puis indiquez le chemin /media/<catégorie>/<nom>.jpg dans data/carte.json.
// La couverture de reel (01) n'est pas reprise : c'est la même assiette que 04, avec un titre incrusté.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const raw = (n) => `raw/la-graine_${n}.jpg`;

// [source (dans assets/), catégorie, nom, recadrage éventuel { left, top, width, height }]
const PICKS = [
  [raw("06_C0Z4EOViFmS"), "hero", "couscous-mouton-assiette-bleue"],
  [raw("02_DBpUGN7CpX6"), "hero", "table-vue-du-dessus"],

  [raw("06_C0Z4EOViFmS"), "plats", "couscous-mouton"],
  [raw("04_DBpRq6-CXV5"), "plats", "couscous-legumes"],
  [raw("02_DBpUGN7CpX6"), "plats", "table-couscous-grillades"],
  [raw("02_DBpUGN7CpX6"), "plats", "merguez-grillees", { left: 1010, top: 1100, width: 430, height: 340 }],
  [raw("02_DBpUGN7CpX6"), "plats", "brochettes-agneau", { left: 940, top: 430, width: 350, height: 290 }],
  [raw("02_DBpUGN7CpX6"), "plats", "cotes-agneau", { left: 250, top: 270, width: 320, height: 260 }],
  [raw("02_DBpUGN7CpX6"), "plats", "poulet-roti", { left: 530, top: 300, width: 420, height: 500 }],
  [raw("03_DBpTJ3JiVBp"), "plats", "cherbette", { left: 290, top: 880, width: 340, height: 440 }],

  [raw("03_DBpTJ3JiVBp"), "salle", "table-dressee-mur-bleu"],
  [raw("05_C0u0YTBN8YW"), "salle", "salle-mur-bleu"],
];

const sizes = {};
for (const [src, cat, name, crop] of PICKS) {
  const file = path.join(ROOT, "assets", src);
  await mkdir(path.join(ROOT, "assets", cat), { recursive: true });
  await mkdir(path.join(ROOT, "public/media", cat), { recursive: true });
  let pipe = sharp(file).rotate();
  if (crop) pipe = pipe.extract(crop);
  const buf = await pipe.toBuffer();
  await sharp(buf).jpeg({ quality: 92 }).toFile(path.join(ROOT, "assets", cat, `${name}.jpg`));
  const max = cat === "hero" ? 2000 : 1600;
  const info = await sharp(buf)
    .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(ROOT, "public/media", cat, `${name}.jpg`));
  sizes[`/media/${cat}/${name}.jpg`] = [info.width, info.height];
}
// Emplacements prévus pour les photos à prendre sur place
for (const dir of ["galerie", "a-photographier/plats", "a-photographier/salle", "a-photographier/facade"]) await mkdir(path.join(ROOT, "assets", dir), { recursive: true });

// Image de partage (Open Graph) 1200 × 630 : le couscous sur l'assiette bleue, à droite, texte sur crème
const dish = await sharp(path.join(ROOT, "assets", raw("06_C0Z4EOViFmS"))).rotate().resize(560, 630, { fit: "cover", position: "centre" }).toBuffer();
const text = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="640" height="630">
  <text x="64" y="208" font-family="Georgia, serif" font-size="25" letter-spacing="5" fill="#9A4228">COUSCOUS MAISON · HALAL · AMIENS</text>
  <text x="64" y="290" font-family="Georgia, serif" font-size="58" fill="#3B2A20">Le couscous</text>
  <text x="64" y="356" font-family="Georgia, serif" font-size="58" fill="#3B2A20">comme à la maison</text>
  <text x="64" y="440" font-family="Arial, sans-serif" font-size="22" fill="#5A4636">La Graine et les Saveurs</text>
  <text x="64" y="474" font-family="Arial, sans-serif" font-size="22" fill="#5A4636">7 rue Saint-Jacques, Amiens</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#FBF5EA" } })
  .composite([
    { input: dish, left: 640, top: 0 },
    { input: text, left: 0, top: 0 },
  ])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile(path.join(ROOT, "public/og.jpg"));

await writeFile(path.join(ROOT, "data/media-sizes.json"), JSON.stringify(sizes, null, 1) + "\n");
console.log(`${PICKS.length} images prêtes`);
