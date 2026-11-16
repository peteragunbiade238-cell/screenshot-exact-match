import { ArrowUpRight, Lock } from "lucide-react";
import workWeb1 from "@/assets/work-web-1.jpg";
import { Reveal } from "./Reveal";

/** A concept project shown inside a browser frame that slowly pans like a scrolling page. */
export function BrowserShowcase() {
  return (
    <section aria-labelledby="showcase-title" className="py-24 md:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">Featured concept</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="showcase-title" className="display mt-6 text-[clamp(2.75rem,5vw,4.5rem)]">
              Built like <span className="accent-serif gold-text">this.</span>
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A calm, image-led site concept for an architecture practice, shown the way a visitor
              would scroll it.
            </p>
            <a
              href="#work"
              className="mt-8 inline-flex items-center gap-2 border-b border-border-strong pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              See all work <ArrowUpRight className="size-4" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-8">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-3xl"
            />
            <div className="group overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 border-b border-border bg-surface-raised px-4 py-3">
                <span className="flex gap-1.5" aria-hidden>
                  <span className="size-2.5 rounded-full bg-border-strong" />
                  <span className="size-2.5 rounded-full bg-border-strong" />
                  <span className="size-2.5 rounded-full bg-border-strong" />
                </span>
                <span className="mx-auto flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1 font-mono text-[0.7rem] text-muted-foreground">
                  <Lock className="size-3" aria-hidden /> Concept preview
                </span>
                <span className="w-10" aria-hidden />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={workWeb1}
                  alt="Concept website for an architecture studio, shown inside a browser window"
                  width={1280}
                  height={960}
                  loading="lazy"
                  decoding="async"
                  className="w-full animate-pan will-change-transform group-hover:[animation-play-state:paused]"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
