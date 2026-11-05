/**
 * Le détail signature : la bordure des assiettes tunisiennes de la salle, une ligne de petits points
 * bleu, rouge, vert, jaune entre deux filets. Utilisé comme séparateur, avec parcimonie.
 */
const COLORS = ["#24305E", "#B8583A", "#6E8F6A", "#D9922E"];

export function RimDots({ className = "", count = 13 }: { className?: string; count?: number }) {
  const w = count * 16;
  return (
    <svg viewBox={`0 0 ${w} 16`} className={`h-3 w-auto ${className}`} aria-hidden="true">
      <path d={`M0 2.5H${w}M0 13.5H${w}`} stroke="#24305E" strokeOpacity="0.35" strokeWidth="1" />
      {Array.from({ length: count }, (_, i) => (
        <circle key={i} cx={8 + i * 16} cy={8} r={2.1} fill={COLORS[i % COLORS.length]} />
      ))}
    </svg>
  );
}
