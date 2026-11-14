import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { expertise, site } from "@/content/site";
import heroVisual from "@/assets/hero-visual.jpg";
import { CursorGlow } from "./CursorGlow";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";
import { RiseWord, SplitWords } from "./SplitWords";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" aria-hidden />
      <CursorGlow />

      <div className="container-page relative grid gap-12 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7 xl:col-span-8">
          <Reveal>
            <div className="mb-8 flex items-center gap-3 eyebrow">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {site.role}
            </div>
          </Reveal>

          <h1 className="display text-[clamp(2.6rem,6vw,5.75rem)]">
            <span className="block">
              <SplitWords text="Building Digital Experiences." startDelay={80} />
            </span>
            <span className="block text-muted-foreground">
              <SplitWords text="Automating Possibilities." startDelay={380} />
            </span>
            <span className="block">
              <RiseWord delay={680} className="accent-serif text-primary">
                Creating
              </RiseWord>{" "}
              <SplitWords text="What's Next." startDelay={750} />
            </span>
          </h1>

          <Reveal delay={900}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I help businesses build powerful websites, streamline operations with intelligent
              automation, and create engaging digital content using modern technologies.
            </p>
          </Reveal>

          <Reveal delay={1000} className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <Button asChild variant="hero" size="xl" className="group">
                <a href="#work">
                  Explore My Work{" "}
                  <ArrowDownRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </a>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button asChild variant="line" size="xl" className="group">
                <a href="#contact">
                  Let's Work Together{" "}
                  <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </Button>
            </Magnetic>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5 xl:col-span-4">
          <figure className="animate-float relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl border border-border lg:max-w-none">
            <img
              src={heroVisual}
              alt="Abstract composition of layered glass panels traced with violet light"
              width={1024}
              height={1280}
              className="size-full object-cover"
            />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-md">
              <span className="eyebrow">Design · Build · Automate</span>
              <span className="font-mono text-xs text-primary">2026</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <div className="border-y border-border">
        <ul className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6">
          {expertise.map((item, i) => (
            <li key={item} className="flex items-center gap-6 text-sm text-muted-foreground md:text-base">
              <span className="font-mono text-xs text-subtle">0{i + 1}</span>
              <span className="text-foreground">{item}</span>
              {i < expertise.length - 1 && (
                <span className="hidden h-4 w-px bg-border-strong lg:block" aria-hidden />
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
