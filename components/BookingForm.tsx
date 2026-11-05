"use client";

import { useMemo, useState, type FormEvent } from "react";
import site from "@/data/site.json";
import { CheckIcon, PhoneIcon } from "@/components/icons";
import { useLocale } from "@/components/providers";
import { fill } from "@/lib/i18n";
import { formatDay, formatTime } from "@/lib/format";
import { useMounted } from "@/lib/useMounted";
import { bookableDays, isEmail, isPhone, OCCASIONS, timesOn, type Occasion } from "@/lib/reservation";

type Mode = "table" | "group";
type Errors = Partial<Record<"date" | "time" | "name" | "phone" | "email", string>>;

/**
 * Demande de réservation : jour (seulement les jours d'ouverture), heure d'arrivée (seulement aux heures d'ouverture),
 * nombre de personnes, groupe, demande particulière, coordonnées. Envoi par e-mail via /api/reservation (Resend).
 * Sans Resend configuré, le client est invité à appeler pour confirmer : aucune demande ne se perd en silence.
 */
export function BookingForm({ mode }: { mode: Mode }) {
  const { lang, d } = useLocale();
  const b = d.book;
  const { groupFrom, maxGuests } = site.reservation;
  const mounted = useMounted();
  const now = useMemo(() => (mounted ? new Date() : null), [mounted]);

  const days = useMemo(() => (now ? bookableDays(now) : []), [now]);
  const [date, setDate] = useState("");
  const [rawTime, setTime] = useState("");
  const [guests, setGuests] = useState(mode === "group" ? groupFrom : 2);
  const [group, setGroup] = useState(mode === "group");
  const [occasion, setOccasion] = useState<Occasion | "">(mode === "group" ? "family" : "");
  const [request, setRequest] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "error">("idle");
  const [done, setDone] = useState<null | { notified: boolean; confirmed: boolean; when: string; name: string }>(null);

  const times = useMemo(() => (date && now ? timesOn(date, now) : []), [date, now]);
  // Une heure choisie qui n'existe plus pour le nouveau jour est simplement ignorée
  const time = times.includes(rawTime) ? rawTime : "";
  const isGroup = group || guests >= groupFrom;
  const guestOptions = Array.from({ length: maxGuests - (mode === "group" ? groupFrom - 1 : 0) }, (_, i) => i + (mode === "group" ? groupFrom : 1));

  async function submit(e: FormEvent) {
    e.preventDefault();
    const err: Errors = {};
    if (!date) err.date = b.errors.date;
    if (!time) err.time = b.errors.time;
    if (!name.trim()) err.name = b.errors.name;
    if (!isPhone(phone)) err.phone = b.errors.phone;
    if (!isEmail(email)) err.email = b.errors.email;
    setErrors(err);
    if (Object.keys(err).length) {
      document.getElementById(`${mode}-${Object.keys(err)[0]}`)?.focus();
      return;
    }
    setState("sending");
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ lang, booking: { date, time, guests, group: isGroup, occasion: isGroup ? occasion : "", request, name, phone, email } }),
      });
      const json = (await res.json()) as { ok: boolean; notified?: boolean; confirmed?: boolean };
      if (!res.ok || !json.ok) throw new Error("server");
      setDone({ notified: !!json.notified, confirmed: !!json.confirmed, name: name.trim(), when: `${formatDay(date, lang)}, ${formatTime(time, lang)}` });
      setState("idle");
    } catch {
      setState("error");
    }
  }

  const call = (
    <a href={`tel:${site.phoneIntl}`} className="btn-line">
      <PhoneIcon />
      <span dir="ltr">{site.phone}</span>
    </a>
  );

  if (done)
    return (
      <div className="fade-in rounded-3xl border border-line bg-[#fffdf8] p-6 md:p-10" role="status" aria-live="polite">
        <span className="flex size-11 items-center justify-center rounded-full bg-menthe text-cream">
          <CheckIcon className="h-5 w-5" />
        </span>
        <h3 className="display mt-5 text-[1.75rem]">{b.done.title}</h3>
        <p className="lead mt-3">{fill(b.done.text, { name: done.name, when: done.when })}</p>
        <p className="mt-3 text-muted">{done.notified ? (done.confirmed ? b.done.mail : "") : b.done.notSent}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {!done.notified && call}
          <button type="button" className="btn-line" onClick={() => setDone(null)}>
            {b.done.again}
          </button>
        </div>
      </div>
    );

  const id = (k: string) => `${mode}-${k}`;
  const fieldErr = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`${id(k)}-err`} className="mt-1.5 text-[0.875rem] text-terracotta-ink">
        {errors[k]}
      </p>
    ) : null;
  const aria = (k: keyof Errors) => ({ "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? `${id(k)}-err` : undefined });

  return (
    <form onSubmit={submit} noValidate className="rounded-3xl border border-line bg-[#fffdf8] p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("date")} className="label">
            {b.date}
          </label>
          <select id={id("date")} className="field" value={date} onChange={(e) => setDate(e.target.value)} {...aria("date")}>
            <option value="">{b.chooseDate}</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {formatDay(day, lang)}
              </option>
            ))}
          </select>
          {fieldErr("date")}
        </div>
        <div>
          <label htmlFor={id("time")} className="label">
            {b.time}
          </label>
          <select id={id("time")} className="field tabular-nums" value={time} onChange={(e) => setTime(e.target.value)} disabled={!date} {...aria("time")}>
            <option value="">{b.chooseTime}</option>
            {times.map((t) => (
              <option key={t} value={t}>
                {formatTime(t, lang)}
              </option>
            ))}
          </select>
          {date && !times.length && <p className="mt-1.5 text-[0.875rem] text-muted">{b.noTimes}</p>}
          {fieldErr("time")}
        </div>
        <div>
          <label htmlFor={id("guests")} className="label">
            {b.guests}
          </label>
          <select id={id("guests")} className="field tabular-nums" value={guests} onChange={(e) => setGuests(Number(e.target.value))}>
            {guestOptions.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        {mode === "table" ? (
          <fieldset>
            <legend className="label">{b.group}</legend>
            <div className="flex gap-2">
              {[true, false].map((v) => (
                <label key={String(v)} className="seg">
                  <input type="radio" name="group" className="sr-only" checked={isGroup === v} onChange={() => setGroup(v)} disabled={!v && guests >= groupFrom} />
                  {v ? b.yes : b.no}
                </label>
              ))}
            </div>
          </fieldset>
        ) : (
          <div>
            <label htmlFor={id("occasion")} className="label">
              {b.occasion}
            </label>
            <select id={id("occasion")} className="field" value={occasion} onChange={(e) => setOccasion(e.target.value as Occasion)}>
              {OCCASIONS.map((o) => (
                <option key={o} value={o}>
                  {b.occasions[o]}
                </option>
              ))}
            </select>
          </div>
        )}
        {mode === "table" && isGroup && (
          <div className="sm:col-span-2">
            <p className="text-[0.875rem] text-muted">{fill(b.groupHint, { n: groupFrom })}</p>
            <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label={b.occasion}>
              {OCCASIONS.map((o) => (
                <label key={o} className="seg">
                  <input type="radio" name="occasion" className="sr-only" checked={occasion === o} onChange={() => setOccasion(o)} />
                  {b.occasions[o]}
                </label>
              ))}
            </div>
          </div>
        )}
        <div className="sm:col-span-2">
          <label htmlFor={id("request")} className="label">
            {b.request}
          </label>
          <textarea id={id("request")} className="field min-h-24" rows={3} placeholder={b.requestPh} value={request} onChange={(e) => setRequest(e.target.value)} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("name")} className="label">
            {b.name}
          </label>
          <input id={id("name")} className="field" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} {...aria("name")} />
          {fieldErr("name")}
        </div>
        <div>
          <label htmlFor={id("phone")} className="label">
            {b.phone}
          </label>
          <input id={id("phone")} className="field" type="tel" inputMode="tel" autoComplete="tel" dir="ltr" value={phone} onChange={(e) => setPhone(e.target.value)} {...aria("phone")} />
          {fieldErr("phone")}
        </div>
        <div>
          <label htmlFor={id("email")} className="label">
            {b.email}
          </label>
          <input id={id("email")} className="field" type="email" inputMode="email" autoComplete="email" dir="ltr" value={email} onChange={(e) => setEmail(e.target.value)} {...aria("email")} />
          {fieldErr("email")}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <button type="submit" className="btn" disabled={state === "sending"}>
          {state === "sending" ? b.sending : mode === "group" ? b.submitGroup : b.submit}
        </button>
        <span className="text-[0.875rem] text-muted">{b.callInstead}</span>
        <a href={`tel:${site.phoneIntl}`} className="link-line text-[0.9375rem]" dir="ltr">
          {site.phone}
        </a>
      </div>
      {state === "error" && (
        <p className="mt-4 text-terracotta-ink" role="alert">
          {b.errors.server}
        </p>
      )}
      <p className="mt-5 text-[0.8125rem] text-muted">{b.privacy}</p>
    </form>
  );
}
