"use client";

import Link from "next/link";
import saisons from "@/data/saisons.json";
import { HoursTable } from "@/components/HoursTable";
import { RimDots } from "@/components/RimDots";
import { useLocale } from "@/components/providers";
import { fill } from "@/lib/i18n";
import { formatDay, isoDay } from "@/lib/format";
import { periodWeek } from "@/lib/hours";
import { useMounted } from "@/lib/useMounted";

const R = saisons.ramadan;

/**
 * Section saisonnière : visible seulement pendant la période de data/saisons.json (ramadan.from → to),
 * ou avec ?apercu=ramadan dans l'adresse pour la montrer au restaurant avant l'heure.
 */
export function Ramadan() {
  const { lang, d } = useLocale();
  const mounted = useMounted();
  if (!mounted) return null;
  const today = isoDay(new Date());
  const preview = new URLSearchParams(location.search).get("apercu") === "ramadan";
  if (!preview && !(R.from <= today && today <= R.to)) return null;
  const show = { started: today >= R.start };
  const r = d.ramadan;
  const week = periodWeek("ramadan-2027");

  return (
    <section id="ramadan" className="zellige mb-24 scroll-mt-24 bg-nuit px-6 py-20 md:mb-32 text-cream md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1.2fr_1fr] md:items-start">
        <div>
          <p className="text-semoule">
            {r.eyebrow}
            {!show.started && <> · {fill(r.soon, { date: formatDay(R.start, lang, { day: "numeric", month: "long" }) })}</>}
          </p>
          <h2 className="display mt-4 text-[2.25rem] md:text-[3.25rem]">{r.title}</h2>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-cream/85">{r.lead}</p>
          <h3 className="mt-10 text-semoule">{r.menuTitle}</h3>
          <ul className="mt-3 space-y-2 text-[1.0625rem]">
            {r.menu.map((m) => (
              <li key={m} className="border-b border-cream/10 pb-2">
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-[0.875rem] text-cream/70">{r.price}</p>
          <Link href={`/${lang}#reserver`} className="btn mt-8 !border-semoule !bg-semoule !text-ink hover:!bg-cream">
            {r.cta}
          </Link>
        </div>
        {week && (
          <div className="rounded-3xl border border-cream/15 p-6 md:p-8">
            <RimDots count={7} />
            <h3 className="mt-5 text-semoule">{r.hoursTitle}</h3>
            <HoursTable lang={lang} d={d} week={week} className="mt-3" />
          </div>
        )}
      </div>
    </section>
  );
}
