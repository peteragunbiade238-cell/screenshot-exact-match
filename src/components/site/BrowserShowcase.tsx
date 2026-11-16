import { ArrowUpRight } from "lucide-react";
import { featured } from "@/content/featured";
import { FeaturedCards } from "./FeaturedCards";
import { Reveal } from "./Reveal";

/** Featured section: heading and link on the left, filterable project cards on the right. */
export function BrowserShowcase() {
  const hasLink = featured.url.trim().length > 0;

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
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-primary/5 blur-3xl"
            />
            <FeaturedCards />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
