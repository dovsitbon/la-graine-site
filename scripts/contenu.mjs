// Génère CONTENU.md : tous les textes du site en 3 langues (fr, ar, en) et la carte avec les prix, pour validation.
//   npm run contenu
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const load = async (f) => JSON.parse(await readFile(path.join(ROOT, f), "utf8"));
const L = { fr: await load("locales/fr.json"), ar: await load("locales/ar.json"), en: await load("locales/en.json") };
const carte = await load("data/carte.json");
const site = await load("data/site.json");
const horaires = await load("data/horaires.json");
const annonces = await load("data/annonces.json");

const out = [];
const p = (s = "") => out.push(s);
const eur = (n) => (n === null ? "prix en salle" : `${n.toFixed(2).replace(".", ",")} €`);

p("# La Graine et les Saveurs : contenu du site, pour validation");
p();
p("Tous les textes en français, arabe et anglais, et la carte avec les prix. Les points **À VALIDER** sont des hypothèses à confirmer avec le restaurant.");
p("Fichier généré par `npm run contenu` à partir de `locales/*.json` et `data/*.json` : modifiez ces fichiers, pas celui-ci.");
p();
p("## À valider en priorité");
p();
p("- **Nom en arabe** proposé : « " + site.nameAr + " » (traduction littérale « la graine et les saveurs »). Sur le site arabe, le nom reste écrit en français, comme sur l'enseigne.");
p("- **Prix** : relevés sur Uber Eats et Deliveroo le 5 novembre 2026 (le plus bas des deux). Les prix en salle peuvent être différents.");
p("- **Tajines** : absents des applications de livraison. Une ligne « Tajine du jour, prix en salle » est prévue en attendant.");
p("- **Le couscous maison** : « semoule travaillée à la main », légumes (carottes, courgettes, navets, potiron, pois chiches, raisins) déduits des photos et des descriptions Uber Eats/Deliveroo.");
p("- **Horaires** : relevés sur Rankeat, à comparer avec la story « Horaires ».");
p("- **Ramadan** : horaires (17 h 30 – 23 h 30, mercredi → dimanche) et menu ftour (chorba, dattes et lait, couscous ou grillade, pâtisseries, thé) inventés pour la maquette.");
p("- **Offre -10 %** : prête dans `data/annonces.json` mais désactivée tant qu'elle n'est pas confirmée.");
p();

p("## Carte et prix");
p();
for (const c of carte.categories) {
  p(`### ${L.fr.carte.categories[c.id]} · ${L.ar.carte.categories[c.id]} · ${L.en.carte.categories[c.id]}`);
  p();
  p(`_${L.fr.carte.intro[c.id]}_`);
  p();
  p("| Plat (fr) | Description | Prix | عربي | English |");
  p("|---|---|---|---|---|");
  for (const id of c.items) {
    const it = carte.items[id];
    const t = (l) => L[l].carte.items[id];
    p(`| ${t("fr").name}${it.unit ? " (la pièce)" : ""} | ${t("fr").desc} | ${eur(it.price)} | ${t("ar").name} | ${t("en").name} |`);
  }
  p();
}

p("## Horaires (data/horaires.json)");
p();
const days = L.fr.infos.days;
for (let i = 1; i <= 7; i++) {
  const s = horaires.week[String(i)];
  p(`- ${days[i - 1]} : ${s.length ? s.map(([a, b]) => `${a} – ${b}`).join(", ") : "fermé"}`);
}
p();
p("## Bandeau d'annonces (data/annonces.json)");
p();
for (const a of [...annonces.items, annonces.default]) {
  p(`- **${a.id}**${a.from ? ` (${a.from} → ${a.to})` : " (par défaut)"}${a.active === false ? " · désactivée" : ""}`);
  p(`  - fr : ${a.fr}`);
  p(`  - ar : ${a.ar}`);
  p(`  - en : ${a.en}`);
}
p();

// Tous les autres textes, section par section, dans les 3 langues
const SKIP = new Set(["carte.items", "alt"]);
function walk(obj, key) {
  if (SKIP.has(key)) return;
  if (typeof obj === "string") {
    p(`- \`${key}\``);
    for (const l of ["fr", "ar", "en"]) p(`  - ${l} : ${get(L[l], key).replace(/\n/g, " ⏎ ")}`);
    return;
  }
  if (Array.isArray(obj)) return obj.forEach((v, i) => walk(v, `${key}.${i}`));
  for (const k of Object.keys(obj)) walk(obj[k], key ? `${key}.${k}` : k);
}
const get = (o, key) => key.split(".").reduce((x, k) => (x == null ? "" : x[k]), o) ?? "";
p("## Tous les textes du site");
for (const section of Object.keys(L.fr)) {
  p();
  p(`### ${section}`);
  p();
  walk(L.fr[section], section);
}
p();
p("## Textes alternatifs des photos");
p();
for (const k of Object.keys(L.fr.alt)) p(`- \`${k}\` · fr : ${L.fr.alt[k]} · ar : ${L.ar.alt[k]} · en : ${L.en.alt[k]}`);

await writeFile(path.join(ROOT, "CONTENU.md"), out.join("\n") + "\n");
console.log("CONTENU.md :", out.length, "lignes");
