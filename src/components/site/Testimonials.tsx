import { Star } from "lucide-react";
import { testimonials } from "@/content/proof";
import { Reveal } from "./Reveal";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
}

/** Client testimonials. Renders nothing until real entries are added in src/content/proof.ts. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="border-t border-border bg-surface/40 py-24 md:py-36"
    >
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">What they say</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="testimonials-title" className="display mt-6 text-[clamp(2.5rem,5vw,4.25rem)]">
              Trusted by many, <span className="accent-serif gold-text">loved</span> by all.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {testimonials.map((t, i) => (
            <Reveal key={`${t.name}-${i}`} delay={(i % 2) * 100}>
              <figure className="flex h-full flex-col rounded-3xl bg-[oklch(0.955_0.012_85)] p-7 text-[oklch(0.2_0.01_70)] shadow-[0_30px_60px_-30px_oklch(0_0_0/0.7)]">
                <div className="flex gap-1 text-[oklch(0.72_0.11_80)]" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-[oklch(0.3_0.012_70)]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3">
                  <span
                    aria-hidden
                    className="grid size-10 place-items-center rounded-full bg-[oklch(0.2_0.01_70)] font-serif text-base text-[oklch(0.86_0.085_88)]"
                  >
                    {initials(t.name)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium">{t.name}</span>
                    <span className="block text-xs text-[oklch(0.45_0.012_70)]">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
