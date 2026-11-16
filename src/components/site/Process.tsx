import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

// Edit this copy to describe your own process.
const steps = [
  {
    title: "Discover",
    text: "We start with your goals, your audience and what success looks like, before anything is designed or built.",
  },
  {
    title: "Design",
    text: "Layouts, visual direction and workflow maps shaped around your brand, so you can react to something real early.",
  },
  {
    title: "Build",
    text: "Websites built on the platform that fits you, and automations connected to the tools you already use.",
  },
  {
    title: "Launch & support",
    text: "Everything tested and connected, then handed over clearly so you can run it with confidence.",
  },
];

export function Process() {
  return (
    <section id="process" className="border-t border-border py-24 md:py-36">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <Reveal>
            <SectionLabel index="04">Process</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-8 text-[clamp(2.75rem,6vw,5.25rem)]">
              From brief to <span className="accent-serif gold-text">live</span>, in four clear steps.
            </h2>
          </Reveal>
        </div>

        <ol className="lg:col-span-7">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <li className="group grid grid-cols-[auto_1fr] gap-x-8 border-t border-border py-9 transition-colors duration-500 last:border-b hover:bg-primary/[0.03] md:gap-x-12 md:py-11">
                <span className="font-serif text-5xl italic leading-none text-primary transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-1 md:text-6xl">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-3xl tracking-tight md:text-4xl">{s.title}</h3>
                  <p className="mt-3 max-w-lg text-muted-foreground">{s.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
