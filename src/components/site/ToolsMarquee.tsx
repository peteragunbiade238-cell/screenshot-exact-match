import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

// Platform and tool names already listed under Services in src/content/site.ts.
const rows = [
  {
    items: ["Framer", "WordPress", "Webflow", "Wix", "Squarespace", "Figma", "Elementor", "WooCommerce"],
    reverse: false,
    speed: "55s",
  },
  {
    items: ["n8n", "Make.com", "Zapier", "OpenAI", "Gemini", "Claude", "GoHighLevel", "Vapi", "Retell AI"],
    reverse: true,
    speed: "62s",
  },
];

function Row({ items, reverse, speed }: (typeof rows)[number]) {
  // Two copies so the -50% translate loops seamlessly.
  const loop = [...items, ...items];
  return (
    <div className="marquee-mask group overflow-hidden">
      <ul
        className={cn(
          "flex w-max items-center will-change-transform group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
        style={{ animationDuration: speed }}
      >
        {loop.map((name, i) => (
          <li
            key={`${name}-${i}`}
            aria-hidden={i >= items.length || undefined}
            className="flex items-center gap-8 pr-8"
          >
            <span className="font-serif text-3xl text-muted-foreground transition-colors hover:text-foreground md:text-4xl">
              {name}
            </span>
            <span aria-hidden className="text-xs text-primary/60">
              ✦
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ToolsMarquee() {
  return (
    <section aria-label="Platforms and tools" className="border-b border-border py-14 md:py-16">
      <Reveal>
        <p className="eyebrow mb-9 text-center">Platforms &amp; tools I build with</p>
      </Reveal>
      <div className="space-y-5">
        {rows.map((row) => (
          <Row key={row.items[0]} {...row} />
        ))}
      </div>
    </section>
  );
}
