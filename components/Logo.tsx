import paths from "@/components/logo-paths.json";

/**
 * Le vrai logo du restaurant (vectorisé depuis sa photo de profil Instagram, npm run logo) :
 * lettrage manuscrit en arc et deux épis. Le lettrage prend la couleur du texte, les épis le safran.
 */
export function Logo({ className = "h-14 w-auto", label = "La Graine et les Saveurs", wheat = "#D9922E" }: { className?: string; label?: string; wheat?: string }) {
  return (
    <svg viewBox={paths.viewBox} className={className} role="img" aria-label={label}>
      <path fill="currentColor" d={paths.text} />
      <path fill={wheat} d={paths.wheat} />
    </svg>
  );
}

/** Les deux épis seuls (séparateurs, petits rappels). */
export function Wheat({ className = "h-5 w-auto", color = "#D9922E" }: { className?: string; color?: string }) {
  return (
    <svg viewBox={paths.wheatBox} className={className} aria-hidden="true">
      <path fill={color} d={paths.wheat} />
    </svg>
  );
}
