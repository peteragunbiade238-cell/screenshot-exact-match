import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

// Edit these questions and answers to match how you actually work.
const faqs = [
  {
    q: "Which platform should my website be built on?",
    a: "It depends on your goals, budget and how much you want to edit yourself. I work across Framer, WordPress, Webflow, Wix and Squarespace, and recommend the one that fits you rather than the one that is easiest for me.",
  },
  {
    q: "Can I update the website myself afterwards?",
    a: "Yes. Sites are set up so you can change text, images and pages without touching code, and I can walk you through how.",
  },
  {
    q: "What can be automated in my business?",
    a: "Anything repetitive and rule-based: capturing and following up leads, bookings, notifications, reporting, and routine customer replies handled by AI agents. We start by mapping where your time actually goes.",
  },
  {
    q: "Do you also do AI video and brand design?",
    a: "Yes. Alongside websites and automation I produce AI video, imagery, book covers and brand identities, so everything stays consistent under one roof.",
  },
  {
    q: "How do we get started?",
    a: "Send a short message through the contact form describing what you need. We will talk through your goals and agree a clear scope before any work begins.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border bg-surface/40 py-24 md:py-36">
      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="05">FAQ</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display mt-8 text-[clamp(2.75rem,6vw,5.25rem)]">
              Everything you <span className="accent-serif gold-text">need</span> to know.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-7">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-border py-6 first:border-t">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-serif text-2xl tracking-tight transition-colors hover:text-primary md:text-3xl [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border-strong transition-transform duration-300 group-open:rotate-45">
                  <Plus className="size-4" aria-hidden />
                </span>
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
