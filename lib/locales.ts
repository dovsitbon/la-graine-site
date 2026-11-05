// Langues du site, sans les textes : importable côté client sans embarquer les dictionnaires.
export const locales = ["fr", "ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const isLocale = (v: string): v is Locale => (locales as readonly string[]).includes(v);
export const dirOf = (l: Locale) => (l === "ar" ? "rtl" : "ltr");

export const ogLocale: Record<Locale, string> = { fr: "fr_FR", ar: "ar_MA", en: "en_GB" };
// Chiffres latins en arabe (usage courant au Maghreb et en France) : prix et heures lisibles par tous
export const intlLocale: Record<Locale, string> = { fr: "fr-FR", ar: "ar-MA-u-nu-latn", en: "en-GB" };
