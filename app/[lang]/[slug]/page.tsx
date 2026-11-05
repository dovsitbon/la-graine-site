import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import carte from "@/data/carte.json";
import { fill, getDict, isLocale, locales, type Dict, type Locale } from "@/lib/i18n";
import { formatDay } from "@/lib/format";
import { PAGE_IDS, pageOfSlug, pagePath, SLUGS, type PageId } from "@/lib/pages";
import { pageJsonLd } from "@/lib/jsonld";
import { Menu } from "@/components/Menu";
import { OpenStatus } from "@/components/OpenStatus";
import { RimDots } from "@/components/RimDots";
import { PhoneIcon } from "@/components/icons";

export function generateStaticParams() {
  return locales.flatMap((lang) => PAGE_IDS.map((id) => ({ lang, slug: SLUGS[id][lang] })));
}
export const dynamicParams = false;

function resolve(lang: string, slug: string): { lang: Locale; id: PageId } | null {
  if (!isLocale(lang)) return null;
  const id = pageOfSlug(slug, lang);
  return id ? { lang, id } : null;
}

export async function generateMetadata({ params }: PageProps<"/[lang]/[slug]">): Promise<Metadata> {
  const { lang: l, slug } = await params;
  const r = resolve(l, slug);
  if (!r) return {};
  const d = getDict(r.lang);
  const p = d.pages[r.id];
  const description = "metaDescription" in p ? p.metaDescription : d.meta.description;
  return {
    title: p.metaTitle,
    description,
    alternates: {
      canonical: pagePath(r.id, r.lang),
      languages: { ...Object.fromEntries(locales.map((x) => [x, pagePath(r.id, x)])), "x-default": pagePath(r.id, "fr") },
    },
    openGraph: { title: p.metaTitle, description, url: pagePath(r.id, r.lang), images: [{ url: "/og.jpg", width: 1200, height: 630 }] },
    robots: r.id === "legal" ? { index: false, follow: true } : undefined,
  };
}

function Carte({ lang, d }: { lang: Locale; d: Dict }) {
  return (
    <div className="px-6 pt-14 pb-24 md:px-10 md:pt-20 md:pb-32">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">{d.carte.eyebrow}</p>
            <h1 className="display mt-3 text-[2.75rem] md:text-[4rem]">{d.carte.title}</h1>
            <p className="lead mt-4">{d.carte.lead}</p>
            <OpenStatus className="mt-4 text-[0.9375rem] text-muted" />
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="flex gap-2 text-[0.875rem]">
              <span className="rounded-full border border-menthe-ink/40 px-3 py-1 text-menthe-ink">{d.carte.halal}</span>
              <span className="rounded-full border border-menthe-ink/40 px-3 py-1 text-menthe-ink">{d.carte.noAlcohol}</span>
            </p>
            <RimDots />
          </div>
        </header>
        <div className="mt-12">
          <Menu headingLevel={2} />
        </div>
        <p className="mt-8 text-[0.8125rem] text-muted">{fill(d.carte.checked, { date: formatDay(carte.checked, lang, { day: "numeric", month: "long", year: "numeric" }) })}</p>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href={`/${lang}#reserver`} className="btn">
            {d.hero.ctaBook}
          </Link>
          <Link href={`/${lang}#commander`} className="btn-line">
            {d.nav.order}
          </Link>
          <a href={`tel:${site.phoneIntl}`} className="btn-line">
            <PhoneIcon />
            <span dir="ltr">{site.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function Legal({ d }: { d: Dict }) {
  const p = d.pages.legal;
  const pending = <em className="text-muted not-italic">{p.pending}</em>;
  const blocks: [string, React.ReactNode][] = [
    [p.editor, p.editorText],
    [p.company, site.legal.company || pending],
    [p.siret, site.legal.siret || pending],
    [p.host, site.legal.host],
    [p.data, p.dataText],
    [p.cookies, p.cookiesText],
    [p.photos, p.photosText],
  ];
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="display text-[2.75rem] md:text-[3.5rem]">{p.title}</h1>
      {blocks.map(([title, body]) => (
        <section key={title} className="mt-10">
          <h2 className="text-terracotta-ink">{title}</h2>
          <p className="mt-2 leading-relaxed">{body}</p>
        </section>
      ))}
    </div>
  );
}

export default async function Page({ params }: PageProps<"/[lang]/[slug]">) {
  const { lang: l, slug } = await params;
  const r = resolve(l, slug);
  if (!r) notFound();
  const d = getDict(r.lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd(r.lang, r.id)) }} />
      {r.id === "carte" && <Carte lang={r.lang} d={d} />}
      {r.id === "legal" && <Legal d={d} />}
    </>
  );
}
