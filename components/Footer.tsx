import Link from "next/link";
import site from "@/data/site.json";
import { Logo } from "@/components/Logo";
import { RimDots } from "@/components/RimDots";
import { HoursTable } from "@/components/HoursTable";
import { InstagramIcon } from "@/components/icons";
import { fill, type Dict, type Locale } from "@/lib/i18n";
import { pagePath } from "@/lib/pages";

export function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  const linkCls = "inline-flex min-h-9 items-center transition-colors hover:text-semoule";
  return (
    <footer className="bg-nuit pb-24 text-cream md:pb-0">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.1fr_1fr_1fr] md:px-10 md:py-20">
        <div>
          <Logo className="h-28 w-auto" wheat="#E6C27A" />
          <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-cream/80">{d.footer.tagline}</p>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-4 -ms-1 inline-flex min-h-11 items-center gap-2 text-[0.9375rem] transition-opacity hover:opacity-70">
            <InstagramIcon />
            <span dir="ltr">{site.instagramHandle}</span>
          </a>
        </div>
        <div className="text-[0.9375rem] leading-relaxed">
          <p className="mb-3 text-semoule">{d.infos.address}</p>
          <address className="not-italic" dir="ltr">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
          </address>
          <a href={`tel:${site.phoneIntl}`} className="link-line mt-3 inline-block" dir="ltr">
            {site.phone}
          </a>
          <p className="mt-8 mb-2 text-semoule">{d.footer.delivery}</p>
          <ul>
            <li>
              <a href={site.uberEats} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Uber Eats
              </a>
            </li>
            <li>
              <a href={site.deliveroo} target="_blank" rel="noopener noreferrer" className={linkCls}>
                Deliveroo
              </a>
            </li>
          </ul>
          <ul className="mt-6 text-cream/80">
            <li>
              <Link href={pagePath("carte", lang)} className={linkCls}>
                {d.footer.menu}
              </Link>
            </li>
            <li>
              <Link href={pagePath("legal", lang)} className={linkCls}>
                {d.footer.legal}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-[0.9375rem] text-semoule">{d.infos.hours}</p>
          <HoursTable lang={lang} d={d} />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 border-t border-cream/10 px-6 py-6">
        <RimDots count={9} />
        <p className="text-[0.8125rem] text-cream/70">{fill(d.footer.rights, { year: new Date().getFullYear() })}</p>
      </div>
    </footer>
  );
}
