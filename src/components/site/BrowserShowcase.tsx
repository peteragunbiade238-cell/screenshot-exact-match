import { ArrowUpRight, Lock } from "lucide-react";
import { featured, featuredHost } from "@/content/featured";
import { Reveal } from "./Reveal";

/** Featured project shown in a desktop browser frame with a phone frame overlapping it. */
export function BrowserShowcase() {
  const hasLink = featured.url.trim().length > 0;
  const host = featuredHost();

  return (
    <section aria-labelledby="showcase-title" className="py-24 md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">{featured.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="showcase-title" className="display mt-6 text-[clamp(2.75rem,5vw,4.5rem)]">
              Built like <span className="accent-serif gold-text">this.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {featured.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              {hasLink && (
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-medium text-primary transition-colors hover:text-foreground"
                >
                  {featured.linkLabel} <ArrowUpRight className="size-4" aria-hidden />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              <a
                href="#work"
                className="inline-flex items-center gap-2 border-b border-border-strong pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
              >
                See all work <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-8">
          <div className="relative pb-10 pr-4 sm:pr-8">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
            />

            {/* Desktop frame */}
            <div className="group overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 border-b border-border bg-surface-raised px-4 py-3">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="size-2.5 rounded-full bg-border-strong" />
                  <span className="size-2.5 rounded-full bg-border-strong" />
                  <span className="size-2.5 rounded-full bg-border-strong" />
                </span>
                <span className="mx-auto flex max-w-[60%] items-center gap-2 truncate rounded-full border border-border bg-background/60 px-4 py-1 font-mono text-[0.7rem] text-muted-foreground">
                  <Lock className="size-3 shrink-0" aria-hidden />
                  <span className="truncate">{hasLink ? host : "Concept preview"}</span>
                </span>
                <span className="w-10" aria-hidden />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={featured.desktop.src}
                  alt={featured.desktop.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="w-full animate-pan will-change-transform group-hover:[animation-play-state:paused]"
                />
              </div>
            </div>

            {/* Mobile frame overlapping the bottom-right corner */}
            <div className="absolute bottom-0 right-0 w-[26%] min-w-[5.5rem] max-w-[10.5rem] rounded-[1.6rem] border-2 border-border-strong bg-background p-1.5 shadow-[0_30px_60px_-20px_oklch(0_0_0/0.8)] sm:rounded-[2rem] sm:p-2">
              <div className="relative aspect-[9/19] overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem]">
                <img
                  src={featured.mobile.src}
                  alt={featured.mobile.alt}
                  width={1280}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-top"
                />
              </div>
              <span
                aria-hidden
                className="absolute left-1/2 top-2.5 h-1 w-8 -translate-x-1/2 rounded-full bg-background/80 sm:top-3.5"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
