import type { ServiceId } from "@/content/site";

/** Minimal line illustrations that give each service its own visual identity. */
export function ServiceGlyph({ id }: { id: ServiceId }) {
  const common = {
    viewBox: "0 0 200 120",
    fill: "none",
    className: "h-full w-full",
    "aria-hidden": true,
  } as const;

  if (id === "web") {
    return (
      <svg {...common}>
        <rect x="20" y="14" width="160" height="92" rx="8" className="stroke-border-strong" strokeWidth="1.2" />
        <line x1="20" y1="30" x2="180" y2="30" className="stroke-border-strong" strokeWidth="1.2" />
        <circle cx="32" cy="22" r="2.5" className="fill-primary" />
        <circle cx="42" cy="22" r="2.5" className="fill-subtle" />
        <circle cx="52" cy="22" r="2.5" className="fill-subtle" />
        <rect x="32" y="42" width="72" height="8" rx="2" className="fill-foreground/80" />
        <rect x="32" y="56" width="52" height="5" rx="2" className="fill-subtle" />
        <rect x="32" y="72" width="30" height="12" rx="6" className="fill-primary" />
        <rect x="116" y="42" width="52" height="52" rx="6" className="stroke-primary" strokeWidth="1.2" strokeDasharray="3 3" />
      </svg>
    );
  }
  if (id === "automation") {
    return (
      <svg {...common}>
        <path d="M44 60 H86 M114 60 C134 60 134 32 156 32 M114 60 C134 60 134 88 156 88" className="stroke-border-strong" strokeWidth="1.2" />
        <path d="M44 60 H86" className="stroke-primary" strokeWidth="1.5" />
        <rect x="20" y="48" width="24" height="24" rx="6" className="stroke-primary fill-primary-soft" strokeWidth="1.2" />
        <rect x="86" y="46" width="28" height="28" rx="7" className="stroke-foreground/70" strokeWidth="1.2" />
        <circle cx="100" cy="60" r="4" className="fill-primary" />
        <rect x="156" y="22" width="22" height="20" rx="6" className="stroke-border-strong" strokeWidth="1.2" />
        <rect x="156" y="78" width="22" height="20" rx="6" className="stroke-border-strong" strokeWidth="1.2" />
        <circle cx="167" cy="32" r="2.5" className="fill-foreground/70" />
        <circle cx="167" cy="88" r="2.5" className="fill-foreground/70" />
      </svg>
    );
  }
  if (id === "ai") {
    return (
      <svg {...common}>
        {[0, 1, 2, 3].map((i) => (
          <rect
            key={i}
            x={22 + i * 40}
            y="22"
            width="34"
            height="48"
            rx="4"
            className={i === 1 ? "stroke-primary fill-primary-soft" : "stroke-border-strong"}
            strokeWidth="1.2"
          />
        ))}
        <path d="M62 40 L74 46 L62 52 Z" className="fill-primary" />
        <line x1="22" y1="88" x2="178" y2="88" className="stroke-border-strong" strokeWidth="1.2" />
        <line x1="22" y1="88" x2="96" y2="88" className="stroke-primary" strokeWidth="1.8" />
        <circle cx="96" cy="88" r="4" className="fill-foreground" />
        {Array.from({ length: 18 }).map((_, i) => (
          <line
            key={i}
            x1={26 + i * 8.6}
            x2={26 + i * 8.6}
            y1={102 - ((i * 7) % 9)}
            y2={102 + ((i * 7) % 9)}
            className="stroke-subtle"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        ))}
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="44" y="14" width="64" height="92" rx="3" className="stroke-border-strong" strokeWidth="1.2" />
      <rect x="50" y="14" width="2" height="92" className="fill-border-strong" />
      <circle cx="84" cy="46" r="16" className="fill-primary" />
      <line x1="62" y1="80" x2="98" y2="80" className="stroke-foreground/70" strokeWidth="1.5" />
      <line x1="62" y1="88" x2="86" y2="88" className="stroke-subtle" strokeWidth="1.5" />
      <rect x="122" y="30" width="42" height="42" rx="21" className="stroke-foreground/70" strokeWidth="1.2" />
      <path d="M134 60 L143 40 L152 60" className="stroke-primary" strokeWidth="1.5" />
      <rect x="122" y="82" width="10" height="10" rx="2" className="fill-foreground/80" />
      <rect x="138" y="82" width="10" height="10" rx="2" className="fill-subtle" />
      <rect x="154" y="82" width="10" height="10" rx="2" className="fill-primary" />
    </svg>
  );
}
