import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import site from "@/data/site.json";
import avis from "@/data/avis.json";
import carte from "@/data/carte.json";
import { altOf, fill, getDict, isLocale, type Dict, type Locale } from "@/lib/i18n";
import { formatDay } from "@/lib/format";
import { img } from "@/lib/media";
import { pagePath } from "@/lib/pages";
import { homeJsonLd } from "@/lib/jsonld";
import { Reveal } from "@/components/Reveal";
import { OpenStatus } from "@/components/OpenStatus";
import { Menu } from "@/components/Menu";
import { BookingForm } from "@/components/BookingForm";
import { Ramadan } from "@/components/Ramadan";
import { RimDots } from "@/components/RimDots";
import { HoursTable } from "@/components/HoursTable";
import { Illustration, type IllusId } from "@/components/Illustration";
import { ArrowIcon, BasketIcon, BagIcon, DineIcon, PhoneIcon, PinIcon, ScooterIcon, StarIcon, WheelchairIcon } from "@/components/icons";

const photo = (src: string) => img(src);

function Rating({ d, lang, className = "" }: { d: Dict; lang: Locale; className?: string }) {
  return (
    <a href={site.reviewsUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-6 items-center gap-2 hover:text-ink ${className}`}>
      <span className="flex text-safran" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <StarIcon key={i} />
        ))}
      </span>
      <span>
        {fill(d.hero.rating, { value: site.rating.value.toLocaleString(lang === "en" ? "en-GB" : "fr-FR") })} · {fill(d.hero.ratingCount, { count: site.rating.count })}
      </span>
    </a>
  );
}

function SectionHead({ eyebrow, title, lead, center = false }: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-3 text-[2.25rem] md:text-[3rem]">{title}</h2>
      {lead && <p className="lead mt-4">{lead}</p>}
    </div>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang: l } = await params;
  if (!isLocale(l)) notFound();
  const lang: Locale = l;
  const d = getDict(lang);
  const carteHref = pagePath("carte", lang);

  const hero = photo("/media/hero/couscous-mouton-assiette-bleue.jpg");
  const tiles: { id: keyof Dict["tiles"]; tab: string; image?: string; illus?: IllusId }[] = [
    { id: "couscous", tab: "couscous", image: "/media/plats/couscous-legumes.jpg" },
    { id: "tajines", tab: "tajines", illus: "tajine" },
    { id: "grillades", tab: "grillades", image: "/media/plats/brochettes-agneau.jpg" },
    { id: "sandwichs", tab: "sandwichs", illus: "sandwich" },
    { id: "patisseries", tab: "desserts", illus: "patisseries" },
    { id: "the", tab: "boissons", illus: "theiere" },
  ];
  const services = [
    { k: "surPlace", Icon: DineIcon },
    { k: "emporter", Icon: BagIcon },
    { k: "livraison", Icon: ScooterIcon },
    { k: "tgtg", Icon: BasketIcon },
  ] as const;
  const table = photo("/media/hero/table-vue-du-dessus.jpg");
  const house = photo("/media/plats/couscous-legumes.jpg");
  const groupPhoto = photo("/media/salle/table-dressee-mur-bleu.jpg");
  const salle = photo("/media/salle/salle-mur-bleu.jpg");
  const quotes = avis.items as { name: string; date: string; text: Record<Locale, string> }[];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd(lang)) }} />

      {/* 1. Hero : la grande assiette de couscous, texte sur la partie crème */}
      <section className="grid md:min-h-[calc(100svh-7rem)] md:grid-cols-[5fr_6fr]">
        <div className="order-2 flex flex-col justify-center px-6 pt-8 pb-12 md:order-1 md:px-12 md:py-16 lg:px-20">
          <p className="caps text-terracotta-ink">{d.hero.eyebrow}</p>
          <h1 className="display mt-5 text-[2.75rem] md:text-[4rem] xl:text-[4.75rem]">{d.hero.title}</h1>
          <p className="lead mt-5 max-w-md">{d.hero.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${lang}#reserver`} className="btn">
              {d.hero.ctaBook}
            </Link>
            <Link href={carteHref} className="btn-line">
              {d.hero.ctaMenu}
            </Link>
          </div>
          <div className="mt-7 flex flex-col gap-1.5 text-[0.9375rem] text-muted">
            <Rating d={d} lang={lang} />
            <OpenStatus />
          </div>
        </div>
        <div className="relative order-1 h-[42svh] min-h-64 bg-cream-deep md:order-2 md:h-auto">
          <Image src={hero.src} alt={d.hero.imageAlt} fill priority sizes="(min-width: 768px) 55vw, 100vw" quality={80} className="object-cover" />
        </div>
      </section>

      {/* 2. Tuiles de catégories */}
      <section aria-labelledby="tuiles" className="px-6 pt-20 md:px-10 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <h2 id="tuiles" className="display text-[1.75rem] md:text-[2.25rem]">
              {d.tiles.title}
            </h2>
            <RimDots className="hidden md:block" />
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 xl:grid-cols-6">
            {tiles.map((t, i) => {
              const p = t.image ? photo(t.image) : null;
              return (
                <Reveal as="li" key={t.id} delay={i * 0.05}>
                  <Link href={`${carteHref}#${t.tab}`} className="group block">
                    <div className="zoom aspect-square overflow-hidden rounded-3xl">
                      {p ? <Image src={p.src} alt="" width={p.width} height={p.height} sizes="(min-width: 1280px) 15vw, (min-width: 640px) 30vw, 45vw" quality={70} className="h-full w-full object-cover" /> : <Illustration id={t.illus!} className="h-full w-full" />}
                    </div>
                    <p className="mt-3 flex items-center gap-2 text-[1.0625rem] transition-colors group-hover:text-terracotta-ink">
                      {d.tiles[t.id]}
                      <ArrowIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 rtl:-scale-x-100" />
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 3. Bande de services en 4 pictos */}
      <section aria-label={d.services.title} className="px-6 pt-20 md:px-10 md:pt-24">
        <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {services.map(({ k, Icon }) => (
            <li key={k} className="flex flex-col items-start gap-3 bg-cream p-6 md:p-8">
              <Icon className="h-8 w-8 text-terracotta-ink" />
              <p className="display text-[1.25rem]">{d.services[k].title}</p>
              <p className="text-[0.9375rem] text-muted">{d.services[k].text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* 4. La carte, en onglets */}
      <section id="carte" className="scroll-mt-24 px-6 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow={d.carte.eyebrow} title={d.carte.title} lead={d.carte.lead} />
            <p className="flex gap-2 text-[0.875rem]">
              <span className="rounded-full border border-menthe-ink/40 px-3 py-1 text-menthe-ink">{d.carte.halal}</span>
              <span className="rounded-full border border-menthe-ink/40 px-3 py-1 text-menthe-ink">{d.carte.noAlcohol}</span>
            </p>
          </div>
          <div className="mt-10">
            <Menu />
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
            <Link href={carteHref} className="link-line text-[0.9375rem]">
              {d.carte.seeAll}
            </Link>
            <p className="text-[0.8125rem] text-muted">{fill(d.carte.checked, { date: formatDay(carte.checked, lang, { day: "numeric", month: "long", year: "numeric" }) })}</p>
          </div>
        </div>
      </section>

      {/* 5. Le couscous maison : photo + texte + un bouton */}
      <section className="px-6 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-cream-deep md:aspect-square">
            <Image src={table.src} alt={altOf(d, table.src)} width={table.width} height={table.height} sizes="(min-width: 768px) 48vw, 100vw" quality={75} className="h-full w-full object-cover" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">{d.house.eyebrow}</p>
            <h2 className="display mt-3 text-[2.25rem] md:text-[3rem]">{d.house.title}</h2>
            <div className="mt-6 space-y-4">
              {d.house.paragraphs.map((p) => (
                <p key={p} className="lead">
                  {p}
                </p>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-6">
              <Link href={`${carteHref}#couscous`} className="btn-line">
                {d.house.cta}
              </Link>
              <div className="hidden size-20 overflow-hidden rounded-full sm:block">
                <Image src={house.src} alt={d.house.imageAlt} width={house.width} height={house.height} sizes="80px" quality={70} className="h-full w-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Réserver une table */}
      <section id="reserver" className="scroll-mt-20 px-6 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[2fr_3fr] md:gap-16">
          <div>
            <SectionHead eyebrow={d.book.eyebrow} title={d.book.title} lead={d.book.lead} />
            <div className="mt-8 space-y-2 text-[0.9375rem] text-muted">
              <Rating d={d} lang={lang} />
              <OpenStatus />
            </div>
            <a href={`tel:${site.phoneIntl}`} className="btn-line mt-8">
              <PhoneIcon />
              {d.nav.call} · <span dir="ltr">{site.phone}</span>
            </a>
          </div>
          <BookingForm mode="table" />
        </div>
      </section>

      {/* 7. À emporter & livraison */}
      <section id="commander" className="scroll-mt-24 px-6 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHead eyebrow={d.order.eyebrow} title={d.order.title} />
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            <li className="flex flex-col rounded-3xl bg-semoule-soft p-7">
              <BagIcon className="h-8 w-8 text-terracotta-ink" />
              <h3 className="display mt-5 text-[1.5rem]">{d.order.takeaway.title}</h3>
              <p className="mt-2 flex-1 text-muted">{d.order.takeaway.text}</p>
              <a href={`tel:${site.phoneIntl}`} className="btn mt-6 self-start">
                <PhoneIcon />
                {d.order.takeaway.cta}
              </a>
            </li>
            <li className="flex flex-col rounded-3xl bg-semoule-soft p-7">
              <ScooterIcon className="h-8 w-8 text-terracotta-ink" />
              <h3 className="display mt-5 text-[1.5rem]">{d.order.delivery.title}</h3>
              <p className="mt-2 flex-1 text-muted">{d.order.delivery.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a href={site.uberEats} target="_blank" rel="noopener noreferrer" className="btn-line">
                  Uber Eats
                </a>
                <a href={site.deliveroo} target="_blank" rel="noopener noreferrer" className="btn-line">
                  Deliveroo
                </a>
              </div>
            </li>
            <li className="flex flex-col rounded-3xl bg-semoule-soft p-7">
              <BasketIcon className="h-8 w-8 text-terracotta-ink" />
              <h3 className="display mt-5 text-[1.5rem]">{d.order.tgtg.title}</h3>
              <p className="mt-2 flex-1 text-muted">{d.order.tgtg.text}</p>
              <a href={site.tooGoodToGo} target="_blank" rel="noopener noreferrer" className="btn-line mt-6 self-start">
                {d.order.tgtg.cta}
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 8. Groupes et événements, avec formulaire */}
      <section id="groupes" className="scroll-mt-20 px-6 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <SectionHead eyebrow={d.groups.eyebrow} title={d.groups.title} lead={d.groups.lead} />
            <ul className="mt-6 space-y-2">
              {d.groups.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-[1.0625rem]">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl bg-cream-deep">
              <Image src={groupPhoto.src} alt={d.groups.imageAlt} width={groupPhoto.width} height={groupPhoto.height} sizes="(min-width: 768px) 46vw, 100vw" quality={70} className="h-full w-full object-cover" />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.5rem]">{d.book.groupTitle}</h3>
            <p className="mt-2 mb-6 text-muted">{d.book.groupLead}</p>
            <BookingForm mode="group" />
          </div>
        </div>
      </section>

      {/* 9. Ramadan : seulement pendant la période (data/saisons.json) */}
      <div className="pt-24 md:pt-32">
        <Ramadan />
      </div>

      {/* 10. Vos retours */}
      <section aria-labelledby="avis" className="px-6 md:px-10">
        <div className="mx-auto max-w-7xl rounded-3xl bg-cream-deep px-6 py-14 text-center md:py-20">
          <p className="eyebrow">{d.reviews.eyebrow}</p>
          <h2 id="avis" className="display mt-3 text-[2.25rem] md:text-[3rem]">
            {d.reviews.title}
          </h2>
          <p className="display mt-8 text-[4.5rem] leading-none text-terracotta-ink md:text-[6rem]" dir="ltr">
            {site.rating.value.toLocaleString(lang === "en" ? "en-GB" : "fr-FR")}
            <span className="text-[0.4em] text-muted">/5</span>
          </p>
          <span className="mt-4 flex justify-center text-safran" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} className="h-5 w-5" />
            ))}
          </span>
          <p className="mt-4 text-[1.0625rem]">{fill(d.reviews.count, { count: site.rating.count })}</p>
          <p className="mt-1 text-[0.9375rem] text-muted">{fill(d.reviews.ranking, { rank: site.ranking.rank, of: site.ranking.of, source: site.ranking.source })}</p>
          <p className="mt-1 text-[0.8125rem] text-muted">{fill(d.reviews.checked, { date: formatDay(site.rating.checked, lang, { day: "numeric", month: "long", year: "numeric" }) })}</p>
          {quotes.length > 0 && (
            <ul className="mx-auto mt-12 grid max-w-5xl gap-4 text-start md:grid-cols-3">
              {quotes.slice(0, 3).map((q) => (
                <li key={q.name + q.date} className="rounded-2xl bg-cream p-6">
                  <blockquote className="leading-relaxed">« {q.text[lang]} »</blockquote>
                  <p className="mt-4 text-[0.875rem] text-muted">{q.name}</p>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={site.reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn-line">
              {d.reviews.cta}
            </a>
          </div>
        </div>
      </section>

      {/* 11. Infos pratiques */}
      <section id="infos" className="scroll-mt-20 px-6 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <SectionHead eyebrow={d.infos.eyebrow} title={d.infos.title} />
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1.2fr]">
            <dl className="space-y-6 text-[1rem]">
              <div>
                <dt className="flex items-center gap-2 text-terracotta-ink">
                  <PinIcon />
                  {d.infos.address}
                </dt>
                <dd className="mt-1.5" dir="ltr">
                  <span className="block text-start rtl:text-end">
                    {site.address.street}, {site.address.postalCode} {site.address.city}
                  </span>
                </dd>
                <dd>
                  <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="link-line mt-2 inline-block text-[0.9375rem]">
                    {d.infos.directions}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-terracotta-ink">
                  <PhoneIcon />
                  {d.infos.phone}
                </dt>
                <dd className="mt-1.5">
                  <a href={`tel:${site.phoneIntl}`} className="link-line" dir="ltr">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-terracotta-ink">{d.infos.access}</dt>
                <dd className="mt-1.5 text-muted">{d.infos.accessText}</dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-terracotta-ink">
                  <WheelchairIcon />
                  {d.infos.accessibility}
                </dt>
                <dd className="mt-1.5 text-muted">{d.infos.accessibilityText}</dd>
              </div>
            </dl>
            <div>
              <p className="text-terracotta-ink">{d.infos.hours}</p>
              <OpenStatus className="mt-2 text-[0.9375rem] text-muted" />
              <HoursTable lang={lang} d={d} className="mt-3" />
              <p className="mt-4 text-[0.8125rem] text-muted">{d.infos.hoursNote}</p>
            </div>
            <div className="grid gap-4 md:col-span-2 lg:col-span-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream-deep">
                <Image src={salle.src} alt={altOf(d, salle.src)} width={salle.width} height={salle.height} sizes="(min-width: 1024px) 34vw, 100vw" quality={70} className="h-full w-full object-cover" />
              </div>
              <iframe title={d.infos.mapTitle} src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="aspect-[4/3] w-full rounded-3xl border-0 bg-cream-deep grayscale-[30%]" />
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <section aria-labelledby="faq" className="px-6 pt-24 pb-24 md:px-10 md:pt-32 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow">{d.faq.eyebrow}</p>
            <h2 id="faq" className="display mt-3 text-[2.25rem] md:text-[3rem]">
              {d.faq.title}
            </h2>
            <RimDots className="mt-6" count={7} />
          </div>
          <div className="border-t border-line">
            {d.faq.items.map((f) => (
              <details key={f.q} className="border-b border-line">
                <summary className="flex min-h-16 items-center justify-between gap-6 py-4 text-[1.0625rem]">
                  {f.q}
                  <span className="faq-plus shrink-0 text-[1.5rem] leading-none font-light text-terracotta-ink" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="pb-5 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
