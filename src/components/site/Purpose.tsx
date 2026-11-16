import { Eye, Target } from "lucide-react";
import { purpose, stats } from "@/content/proof";
import { Reveal } from "./Reveal";

const cards = [
  { ...purpose.vision, Icon: Eye },
  { ...purpose.mission, Icon: Target },
];

/** Headline and optional numbers on the left, light Vision and Mission cards on the right. */
export function Purpose() {
  return (
    <section aria-labelledby="purpose-title" className="border-t border-border py-24 md:py-36">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{purpose.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 id="purpose-title" className="display mt-6 text-[clamp(2.5rem,5vw,4.25rem)]">
              Turning ideas into <span className="accent-serif gold-text">digital experiences</span> that
              drive real results.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">{purpose.body}</p>
          </Reveal>

          {stats.length > 0 && (
            <Reveal delay={240}>
              <dl className="mt-12 grid max-w-md grid-cols-2 gap-x-8 gap-y-8">
                {stats.map((s) => (
                  <div key={s.label} className="border-t border-border pt-4">
                    <dt className="order-2 mt-1 text-sm text-muted-foreground">{s.label}</dt>
                    <dd className="font-serif text-5xl leading-none text-primary">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:content-center">
          {cards.map(({ title, text, Icon }, i) => (
            <Reveal key={title} delay={i * 100}>
              <article className="group h-full rounded-3xl bg-[oklch(0.955_0.012_85)] p-8 text-[oklch(0.2_0.01_70)] shadow-[0_30px_60px_-30px_oklch(0_0_0/0.7)] transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-10">
                <span className="grid size-12 place-items-center rounded-full bg-[oklch(0.2_0.01_70)] text-[oklch(0.86_0.085_88)] transition-transform duration-500 group-hover:rotate-12">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-10 font-serif text-3xl tracking-tight md:text-4xl">{title}</h3>
                <p className="mt-4 leading-relaxed text-[oklch(0.38_0.012_70)]">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
