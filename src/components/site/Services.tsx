import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ServiceGlyph } from "./ServiceGlyph";

export const SELECT_SERVICE_EVENT = "portfolio:select-service";

function enquire(title: string) {
  window.dispatchEvent(new CustomEvent(SELECT_SERVICE_EVENT, { detail: title }));
}

// Bento spans so each category gets its own shape on large screens.
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-surface/40 py-24 md:py-36">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel index="02">Services</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-8 text-[clamp(2.5rem,5.5vw,4.75rem)]">
                Four disciplines, <span className="accent-serif text-primary">one</span> partner.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Pick a single service or combine them — a new website with automated lead follow-up
              and launch video, for example.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-12">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 80} className={cn(spans[i])}>
              <article className="surface-card group flex h-full flex-col p-6 transition-colors duration-500 hover:border-border-strong md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-xs text-primary">{s.index}</span>
                  <div className="h-24 w-40 opacity-80 transition-opacity duration-500 group-hover:opacity-100 md:h-28 md:w-48">
                    <ServiceGlyph id={s.id} />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-medium tracking-tight md:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-lg text-muted-foreground">{s.description}</p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1 text-[0.8rem] text-muted-foreground transition-colors group-hover:border-border-strong"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <a
                    href="#contact"
                    onClick={() => enquire(s.title)}
                    className="inline-flex items-center gap-2 border-b border-border-strong pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                  >
                    Enquire about {s.short.toLowerCase()}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
