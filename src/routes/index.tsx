import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ToolsMarquee } from "@/components/site/ToolsMarquee";
import { BrowserShowcase } from "@/components/site/BrowserShowcase";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Purpose } from "@/components/site/Purpose";
import { Testimonials } from "@/components/site/Testimonials";
import { Process } from "@/components/site/Process";
import { Faq } from "@/components/site/Faq";
import { CtaBand } from "@/components/site/CtaBand";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Peter Agunbiade — Websites, Automation, AI Creative & Brand Design";
const description =
  "Digital solutions specialist building powerful websites, intelligent business automation, AI-powered video and brand design for growing businesses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <ToolsMarquee />
        {/* cv-auto lets the browser skip rendering off-screen sections until they are near the viewport. */}
        <div className="cv-auto">
          <BrowserShowcase />
        </div>
        <div className="cv-auto">
          <About />
        </div>
        <div className="cv-auto">
          <Services />
        </div>
        <div className="cv-auto">
          <Work />
        </div>
        <div className="cv-auto">
          <Purpose />
        </div>
        {/* Testimonials hides itself until real entries exist, so it is not wrapped in cv-auto. */}
        <Testimonials />
        <div className="cv-auto">
          <Process />
        </div>
        <div className="cv-auto">
          <Faq />
        </div>
        <div className="cv-auto">
          <CtaBand />
        </div>
        <div className="cv-auto">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
