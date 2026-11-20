import { useId } from "react";

// Latin "pristis" was a fast-sailing warship: the mark is a sleek hull with a
// ram at the bow, a sail leaning forward, and its wake on the water. The same
// drawing is saved as public/images/icon.svg for the favicon.
export function LogoMark({ className = "size-9" }: { className?: string }) {
  const clip = useId();
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <rect width="40" height="40" rx="9" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clip})`}>
        <rect width="40" height="40" fill="var(--navy)" />
        <g fill="var(--copper-light)">
          {/* Sail, filled by the wind and leaning forward */}
          <path d="M14.5 23.5 C16 15 21 8.5 30.5 5 C28.2 11 28 17.5 31.5 23.5 Z" />
          {/* Hull with a ram at the bow (right) */}
          <path d="M7 25 H33.5 L39 23 L33.5 28.2 H11.5 Q8 27.3 7 25 Z" />
        </g>
        <g fill="none" stroke="var(--copper-light)" strokeLinecap="round">
          {/* Bow wave */}
          <path d="M33 30 Q35.5 31.2 38.5 30" strokeWidth="1.3" />
          {/* Speed lines behind the stern */}
          <path d="M1 25.5 H5.5 M2.5 28.5 H9 M0.5 31.5 H6" strokeWidth="1.3" opacity="0.6" />
          {/* Wake */}
          <path d="M12 31 Q22 33 33 30" strokeWidth="1.1" opacity="0.45" />
        </g>
      </g>
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
