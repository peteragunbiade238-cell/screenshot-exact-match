import aboutImage from "@/assets/about-studio.jpg";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const capabilities = [
  { title: "Website development", detail: "From Figma to a live, fast site" },
  { title: "Intelligent automation", detail: "Workflows and AI agents that save hours" },
  { title: "AI content creation", detail: "Video, imagery and voice at speed" },
  { title: "Digital brand development", detail: "Identities, books and marketing assets" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2rem] border border-primary/30"
            />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src={aboutImage}
                alt="A creative studio desk with a website wireframe, brand sketches and a book cover proof"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] size-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] hover:scale-[1.03]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-primary/5"
              />
            </div>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:pt-6">
          <Reveal>
            <SectionLabel index="01">About</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-8 text-[clamp(2.75rem,6vw,5.25rem)]">
              Creativity <span className="accent-serif gold-text">meets</span> Technology.
            </h2>
          </Reveal>
          <Reveal delay={160} className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a digital solutions specialist passionate about combining design, technology and
              problem-solving to help businesses grow.
            </p>
            <p>
              My expertise spans website development, intelligent automation, AI-powered content
              creation and digital brand development. I focus on transforming ideas into practical,
              functional and visually compelling solutions.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <ul className="mt-12 grid border-t border-border sm:grid-cols-2">
              {capabilities.map((c, i) => (
                <li
                  key={c.title}
                  className="group flex gap-4 border-b border-border py-7 transition-colors duration-500 hover:bg-primary/[0.03] sm:odd:pr-6 sm:even:border-l sm:even:pl-6"
                >
                  <span className="font-serif text-2xl italic leading-none text-primary">0{i + 1}</span>
                  <div>
                    <p className="font-medium tracking-tight transition-colors group-hover:text-primary">
                      {c.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
