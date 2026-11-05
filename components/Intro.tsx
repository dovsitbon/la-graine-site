"use client";

import { useEffect, useState, type CSSProperties } from "react";

const KEY = "lagraine-intro";

// Grains placés une fois pour toutes (générateur pseudo-aléatoire à graine fixe : même rendu serveur et client)
function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const BASE = 118;
const RX = 62;
const RY = 40;
const GRAINS = (() => {
  const r = rng(7);
  const out: { x: number; y: number; rot: number; s: number; c: string; d: number }[] = [];
  while (out.length < 90) {
    const x = (r() * 2 - 1) * RX;
    const h = r(); // 0 en bas … 1 au sommet du dôme
    const y = BASE - h * RY;
    if ((x / RX) ** 2 + h ** 2 > 1) continue;
    out.push({ x: 100 + x, y, rot: Math.round(r() * 180), s: 1.5 + r() * 0.9, c: r() > 0.35 ? "#E6C27A" : "#D9922E", d: +(0.04 + h * 0.48 + r() * 0.1).toFixed(3) });
  }
  return out;
})();

/**
 * Ouverture (1,5 s, une fois par session), en CSS (globals.css) : fond crème, une pluie de petits grains dorés
 * tombe et forme un dôme de semoule, une fine vapeur monte, « LA GRAINE ET LES SAVEURS » apparaît, fondu sur le hero.
 * Bouton « Passer » ; rien du tout si l'utilisateur préfère réduire les animations.
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      document.documentElement.classList.add("intro-seen");
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-curtain flex flex-col items-center justify-center text-ink" dir="ltr">
      <svg viewBox="0 0 200 140" className="h-40 w-auto md:h-48" aria-hidden="true">
        {GRAINS.map((g, i) => (
          <ellipse
            key={i}
            className="intro-grain"
            cx={g.x}
            cy={g.y}
            rx={g.s}
            ry={g.s * 0.72}
            fill={g.c}
            transform={`rotate(${g.rot} ${g.x} ${g.y})`}
            style={{ "--d": `${g.d}s`, "--fall": `${-(g.y + 12)}px` } as CSSProperties}
          />
        ))}
        <path d="M26 121c22 7 126 7 148 0" fill="none" stroke="#24305E" strokeOpacity="0.4" strokeWidth="1" strokeLinecap="round" />
        {[
          ["M88 72c-5-8 4-12 0-21", 0.72],
          ["M100 70c-5-9 5-13 0-24", 0.8],
          ["M112 72c-5-8 4-12 0-21", 0.88],
        ].map(([d, t]) => (
          <path key={d as string} pathLength={1} className="intro-steam" d={d as string} fill="none" stroke="#9A4228" strokeWidth="1" strokeLinecap="round" style={{ "--d": `${t}s` } as CSSProperties} />
        ))}
      </svg>
      <p className="intro-name mt-6 ps-[0.24em] text-center font-[family-name:var(--font-fraunces)] text-[clamp(1.05rem,4.6vw,1.6rem)] text-ink" translate="no" aria-hidden="true">
        LA GRAINE ET LES SAVEURS
      </p>
      <button
        type="button"
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
          document.documentElement.classList.add("intro-seen");
          setGone(true);
        }}
        className="absolute end-4 bottom-4 min-h-11 px-4 text-[0.9375rem] text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}
