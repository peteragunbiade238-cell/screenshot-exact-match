import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "./Magnetic";
import { Reveal } from "./Reveal";

export function CtaBand() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden border-t border-border py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="container-page relative text-center">
        <Reveal>
          <h2 id="cta-title" className="display mx-auto max-w-4xl text-[clamp(2.75rem,7vw,6rem)]">
            Ready to build something that <span className="accent-serif gold-text">works</span> as hard
            as you do?
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Tell me what you are working on, whether a new site, a workflow to automate or a brand to
            shape, and we will work out the right next step.
          </p>
        </Reveal>
        <Reveal delay={200} className="mt-11 flex justify-center">
          <Magnetic>
            <Button asChild variant="hero" size="xl" className="group">
              <a href="#contact">
                Start a project{" "}
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
