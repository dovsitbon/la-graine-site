/**
 * Dessins au trait (terracotta sur semoule) pour les plats qui n'ont pas encore de photo.
 * Remplacés automatiquement dès qu'une image est indiquée dans data/carte.json.
 */
export type IllusId = "couscous" | "tajine" | "theiere" | "patisseries" | "sandwich" | "croquettes" | "frites" | "tasse" | "verre";

const P: Record<IllusId, string[]> = {
  couscous: ["M14 40h52", "M18 40c0 12 10 18 22 18s22-6 22-18", "M22 40c2-9 9-15 18-15s16 6 18 15", "M33 31l3-3M40 28v-3M47 31l-3-3", "M30 64h20"],
  tajine: ["M14 54h52", "M18 54c0 4 10 7 22 7s22-3 22-7", "M22 53c0-8 8-14 18-28 10 14 18 20 18 28", "M37 22c0-3 6-3 6 0 0 2-3 3-3 3s-3-1-3-3Z"],
  theiere: ["M24 58h30", "M26 58c-4-6-5-14 0-20h26c5 6 4 14 0 20", "M30 38c0-5 4-9 9-9s9 4 9 9", "M39 29v-4", "M52 42c6-1 10-6 12-10", "M26 44c-5 0-7 4-6 8", "M44 20c-2-3 2-5 0-8M50 22c-2-3 2-5 0-8"],
  patisseries: ["M12 54h56", "M16 52c2-8 10-12 14-12s6 6 2 9c-4 3-12 4-16 3Z", "M38 52l7-14 7 14Z", "M41 46h8", "M56 52c0-6 3-10 7-10s5 4 3 7", "M20 46c4-1 8-2 10-4"],
  sandwich: ["M12 46c0-6 6-10 14-10h28c8 0 14 4 14 10", "M12 46c0 4 4 6 10 6h36c6 0 10-2 10-6", "M18 46h44", "M22 40l2-3M32 40l2-3M42 40l2-3M52 40l2-3"],
  croquettes: ["M14 54h52", "M18 50c0-5 4-8 9-8s9 3 9 8-4 6-9 6-9-1-9-6Z", "M36 50c0-5 4-8 9-8s9 3 9 8-4 6-9 6-9-1-9-6Z", "M28 38c0-5 4-8 9-8s9 3 9 8-4 6-9 6-9-1-9-6Z", "M22 48l1-1M41 47l1-1M33 36l1-1"],
  frites: ["M26 34h28l-4 26H30Z", "M30 34l-2-14M36 34v-18M42 34l1-16M48 34l3-12", "M30 44h20"],
  tasse: ["M22 40h28v6c0 8-6 14-14 14s-14-6-14-14Z", "M50 44c5 0 7 3 6 6-1 2-3 3-6 3", "M18 62h40", "M32 34c-2-3 2-5 0-8M40 34c-2-3 2-5 0-8"],
  verre: ["M28 22h24l-3 38H31Z", "M29 32h22", "M46 22l6-8", "M33 42c3 2 9 2 14 0"],
};

export function Illustration({ id, className = "" }: { id: IllusId; className?: string }) {
  return (
    <div className={`zellige flex items-center justify-center bg-semoule-soft ${className}`} aria-hidden="true">
      <svg viewBox="0 0 80 80" className="h-1/2 max-h-28 w-auto" fill="none" stroke="#9A4228" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round">
        {P[id].map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    </div>
  );
}
