import site from "@/data/site.json";
import carte from "@/data/carte.json";
import { getDict, locales, type Dict, type Locale } from "@/lib/i18n";
import { weekHours } from "@/lib/hours";
import { pagePath, type PageId } from "@/lib/pages";

const BUSINESS = `${site.url}/#restaurant`;
const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
type Item = { price: number | null };

function menu(lang: Locale) {
  const d = getDict(lang);
  const items = carte.items as Record<string, Item>;
  return {
    "@type": "Menu",
    "@id": `${site.url}${pagePath("carte", lang)}#menu`,
    name: d.pages.carte.title,
    url: `${site.url}${pagePath("carte", lang)}`,
    inLanguage: lang,
    hasMenuSection: carte.categories.map((c) => ({
      "@type": "MenuSection",
      name: d.carte.categories[c.id as keyof Dict["carte"]["categories"]],
      hasMenuItem: c.items.map((id) => {
        const t = d.carte.items[id as keyof Dict["carte"]["items"]];
        const p = items[id].price;
        return {
          "@type": "MenuItem",
          name: t.name,
          ...(t.desc ? { description: t.desc } : {}),
          suitableForDiet: "https://schema.org/HalalDiet",
          ...(p !== null ? { offers: { "@type": "Offer", price: p.toFixed(2), priceCurrency: "EUR" } } : {}),
        };
      }),
    })),
  };
}

function restaurant(lang: Locale) {
  const d = getDict(lang);
  return {
    "@type": "Restaurant",
    "@id": BUSINESS,
    name: site.name,
    alternateName: [site.nameAr, "La graine et les saveurs…"],
    description: d.meta.description,
    url: `${site.url}/${lang}`,
    image: [`${site.url}/og.jpg`, `${site.url}/media/hero/couscous-mouton-assiette-bleue.jpg`, `${site.url}/media/salle/salle-mur-bleu.jpg`],
    logo: `${site.url}/logo.svg`,
    telephone: site.phoneIntl,
    priceRange: "€€",
    servesCuisine: ["Couscous", "Marocaine", "Algérienne", "Méditerranéenne", "Halal"],
    address: { "@type": "PostalAddress", streetAddress: site.address.street, postalCode: site.address.postalCode, addressLocality: site.address.city, addressRegion: site.address.region, addressCountry: site.address.country },
    hasMap: site.mapsUrl,
    openingHoursSpecification: weekHours().flatMap((slots, i) => slots.map(([opens, closes]) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: `https://schema.org/${DAYS[i]}`, opens, closes }))),
    // Note Google relevée à la main le site.rating.checked (2026-11-05) : à mettre à jour de temps en temps dans data/site.json
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.rating.value, reviewCount: site.rating.count, bestRating: 5, worstRating: 1 },
    acceptsReservations: `${site.url}/${lang}#reserver`,
    hasMenu: `${site.url}${pagePath("carte", lang)}`,
    sameAs: [site.instagram, site.uberEats, site.deliveroo],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Wheelchair accessible", value: true },
      { "@type": "LocationFeatureSpecification", name: "Halal", value: true },
      { "@type": "LocationFeatureSpecification", name: "Alcohol-free", value: true },
    ],
    potentialAction: [
      { "@type": "ReserveAction", target: { "@type": "EntryPoint", urlTemplate: `${site.url}/${lang}#reserver`, inLanguage: lang }, result: { "@type": "FoodEstablishmentReservation", name: d.book.title } },
      { "@type": "OrderAction", target: [site.uberEats, site.deliveroo] },
    ],
    knowsLanguage: ["fr", "ar", "en"],
  };
}

/** Données structurées de l'accueil : Restaurant, horaires, note Google, réservation, FAQ. */
export function homeJsonLd(lang: Locale) {
  const d = getDict(lang);
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: [...locales], publisher: { "@id": BUSINESS } },
      restaurant(lang),
      { "@type": "FAQPage", mainEntity: d.faq.items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    ],
  };
}

/** Données structurées d'une page secondaire : la carte (Menu) ou les mentions légales, avec fil d'Ariane. */
export function pageJsonLd(lang: Locale, id: PageId) {
  const d = getDict(lang);
  const url = `${site.url}${pagePath(id, lang)}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      restaurant(lang),
      ...(id === "carte" ? [menu(lang)] : []),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: site.name, item: `${site.url}/${lang}` },
          { "@type": "ListItem", position: 2, name: d.pages[id].title, item: url },
        ],
      },
    ],
  };
}
