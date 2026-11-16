import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { expertise, site } from "@/content/site";
import heroVisual from "@/assets/hero-visual.jpg";
import mockupImage from "@/assets/work-web-2.jpg";
import { CursorGlow } from "./CursorGlow";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";
import { RotatingBadge } from "./RotatingBadge";
import { RiseWord, SplitWords } from "./SplitWords";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-25 [mask-image:radial-gradient(ellipse_at_top,black_15%,transparent_68%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 -top-40 size-[44rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <CursorGlow />

      <div className="container-page relative grid gap-14 pb-20 lg:grid-cols-12 lg:gap-10 lg:pb-28">
        <div className="lg:col-span-7 xl:col-span-8">
          <Reveal>
            <div className="mb-9 flex items-center gap-4 eyebrow">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              {site.role}
              <span className="gold-rule hidden w-24 sm:block" aria-hidden />
            </div>
          </Reveal>

          <h1 className="display text-[clamp(3rem,7.4vw,6.75rem)]">
            <span className="block">
              <SplitWords text="Building Digital Experiences." startDelay={80} />
            </span>
            <span className="block text-muted-foreground">
              <SplitWords text="Automating Possibilities." startDelay={380} />
            </span>
            <span className="block">
              <RiseWord delay={680} className="accent-serif gold-text">
                Creating
              </RiseWord>{" "}
              <SplitWords text="What's Next." startDelay={750} />
            </span>
          </h1>

          <Reveal delay={900}>
            <p className="mt-9 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I help businesses build powerful websites, streamline operations with intelligent
              automation, and create engaging digital content using modern technologies.
            </p>
          </Reveal>

          <Reveal delay={1000} className="mt-11 flex flex-wrap gap-3">
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
          <div className="animate-float relative mx-auto max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-t-full rounded-b-[2.25rem] border border-primary/30"
            />
            <figure className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-3xl border border-border">
              <img
                src={heroVisual}
                alt="Abstract composition of layered glass panels traced with violet light"
                width={1024}
                height={1280}
                className="size-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-primary/5"
              />
              <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-md">
                <span className="eyebrow">Design · Build · Automate</span>
                <span className="font-serif text-lg italic text-primary">2026</span>
              </figcaption>
            </figure>
            <RotatingBadge className="absolute -left-4 top-1/3 lg:-left-14" />

            {/* Tilted browser card floating over the image, a decorative project preview. */}
            <div
              aria-hidden
              className="absolute -right-4 bottom-24 w-[58%] rotate-[-6deg] overflow-hidden rounded-xl border border-border-strong bg-surface p-1 shadow-[0_30px_60px_-20px_oklch(0_0_0/0.8)] lg:-right-12"
            >
              <div className="flex gap-1 px-1.5 pb-1 pt-0.5">
                <span className="size-1.5 rounded-full bg-border-strong" />
                <span className="size-1.5 rounded-full bg-border-strong" />
                <span className="size-1.5 rounded-full bg-border-strong" />
              </div>
              <img
                src={mockupImage}
                alt=""
                width={1280}
                height={960}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="gold-rule" aria-hidden />
      <div className="border-b border-border">
        <ul className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-7">
          {expertise.map((item, i) => (
            <li key={item} className="flex items-center gap-6 text-sm text-muted-foreground md:text-base">
              <span className="font-serif text-lg italic text-primary">0{i + 1}</span>
              <span className="text-foreground">{item}</span>
              {i < expertise.length - 1 && (
                <span className="hidden text-xs text-primary/60 lg:block" aria-hidden>
                  ✦
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
