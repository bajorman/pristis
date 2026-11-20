// Sawfish (Pristis) rostrum as a mark: a blade with teeth on both sides.
// The same drawing is saved as public/images/icon.svg for the favicon.
const teeth = [11, 16, 21, 26];

export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="9" fill="var(--navy)" />
      <rect x="6" y="18.5" width="28" height="3" rx="1.5" fill="var(--copper-light)" />
      {teeth.map((x) => (
        <g key={x} fill="var(--copper-light)">
          <path d={`M${x} 18.6 L${x + 1.6} 14.2 L${x + 3.2} 18.6Z`} />
          <path d={`M${x} 21.4 L${x + 1.6} 25.8 L${x + 3.2} 21.4Z`} />
        </g>
      ))}
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl font-semibold ${light ? "text-white" : "text-ink"}`}>
          Pristis
        </span>
        <span
          className={`mt-0.5 text-[0.62rem] font-bold uppercase tracking-[0.28em] ${
            light ? "text-white/60" : "text-muted"
          }`}
        >
          Management
        </span>
      </span>
    </span>
  );
}
