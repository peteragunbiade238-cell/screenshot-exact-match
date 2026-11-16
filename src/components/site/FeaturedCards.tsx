import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { featured, featuredHost } from "@/content/featured";
import { projects, services, workFilters, type ServiceId, type WorkFilterId } from "@/content/site";
import { cn } from "@/lib/utils";

const categoryLabel = Object.fromEntries(services.map((s) => [s.id, s.short]));

type CardItem = {
  key: string;
  title: string;
  category: ServiceId;
  description: string;
  tools: string[];
  image?: string;
  mockup?: boolean;
  concept: boolean;
  url: string;
};

// The featured website comes first, then the portfolio projects.
const pool: CardItem[] = [
  {
    key: "featured",
    title: featured.card.title,
    category: "web",
    description: featured.card.description,
    tools: featured.card.tools,
    mockup: true,
    concept: false,
    url: featured.url,
  },
  ...projects.map((p) => ({
    key: p.title,
    title: p.title,
    category: p.category,
    description: p.description,
    tools: p.tools,
    image: p.image,
    concept: p.concept,
    url: p.url,
  })),
];

/** A drawn website preview (browser bar, headline, button, tiles). Pure CSS, no image to load. */
function SiteMockup() {
  const host = featuredHost();
  return (
    <div
      aria-hidden
      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-surface-raised via-background to-surface"
    >
      <div className="flex items-center gap-1.5 border-b border-border bg-background/40 px-3 py-2">
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="size-1.5 rounded-full bg-border-strong" />
        <span className="mx-auto max-w-[70%] truncate rounded-full border border-border px-3 py-0.5 font-mono text-[0.55rem] text-muted-foreground">
          {host || "your-site.com"}
        </span>
      </div>

      <div className="space-y-2.5 p-3">
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-8 rounded-full bg-primary/80" />
          <span className="flex gap-1.5">
            <span className="h-1 w-5 rounded-full bg-muted-foreground/40" />
            <span className="h-1 w-5 rounded-full bg-muted-foreground/40" />
            <span className="h-1 w-5 rounded-full bg-muted-foreground/40" />
          </span>
        </div>

        <div className="space-y-1.5 pt-2">
          <span className="block h-2.5 w-4/5 rounded bg-foreground/85" />
          <span className="block h-2.5 w-3/5 rounded bg-foreground/85" />
          <span className="gold-rule block h-2.5 w-2/5 rounded !bg-primary/80" />
        </div>

        <span className="inline-block h-4 w-16 rounded-full bg-primary/85" />

        <div className="grid grid-cols-3 gap-2">
          <span className="h-9 rounded-md border border-border bg-surface-raised" />
          <span className="h-9 rounded-md border border-border bg-surface-raised" />
          <span className="h-9 rounded-md border border-border bg-surface-raised" />
        </div>
      </div>
    </div>
  );
}

function Card({ item }: { item: CardItem }) {
  const hasLink = item.url.trim().length > 0;

  return (
    <article className="surface-card card-lift group flex h-full flex-col p-3">
      {item.mockup ? (
        <SiteMockup />
      ) : (
        <div className="overflow-hidden rounded-xl border border-border">
          <img
            src={item.image}
            alt={`${item.title} thumbnail`}
            width={1280}
            height={960}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col px-2 pb-2 pt-4">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-border-strong bg-white/[0.04] px-3 py-1 text-xs">
            {categoryLabel[item.category]}
          </span>
          {item.concept && (
            <span className="rounded-full border border-primary/40 px-3 py-1 text-xs text-primary">
              Concept
            </span>
          )}
        </div>

        <h3 className="mt-4 text-base font-medium leading-snug tracking-tight">{item.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-5">
          <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.68rem] text-subtle">
            {item.tools.slice(0, 2).map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {hasLink ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-primary transition-colors hover:text-foreground"
            >
              View Project <ArrowUpRight className="size-3.5" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span className="shrink-0 text-xs text-subtle">Coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}

/** Filter chips plus up to three project cards. Scrolls sideways on phones. */
export function FeaturedCards() {
  const [filter, setFilter] = useState<WorkFilterId>("all");
  const visible = useMemo(
    () => pool.filter((i) => filter === "all" || i.category === filter).slice(0, 3),
    [filter],
  );

  return (
    <div className="relative">
      <div role="group" aria-label="Filter featured work" className="mb-6 flex flex-wrap gap-2">
        {workFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm transition-colors duration-300",
              filter === f.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-white/10 bg-white/[0.04] text-muted-foreground backdrop-blur-md hover:border-primary/40 hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div
        key={filter}
        className="animate-in fade-in-0 slide-in-from-bottom-2 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-2 duration-500 motion-reduce:animate-none md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:py-0"
      >
        {visible.map((item) => (
          <div
            key={item.key}
            className="w-[78%] max-w-[18rem] shrink-0 snap-start md:w-auto md:max-w-none"
          >
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
