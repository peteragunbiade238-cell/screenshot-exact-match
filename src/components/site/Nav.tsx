import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "./ScrollProgress";

// Shared glass recipe: translucent tint, blur + saturation, hairline edge and an inner top highlight.
const glassBar =
  "border-b border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] backdrop-blur-xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.10),0_10px_40px_-20px_rgb(0_0_0/0.7)]";
const glassPill =
  "border border-white/10 bg-white/[0.05] backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.14),0_8px_30px_-12px_rgb(0_0_0/0.65)]";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = navItems
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => !!el);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        glassBar,
        // Slightly denser glass once the page has scrolled under it, for legibility.
        (scrolled || open) && "bg-background/55 from-white/[0.08] to-background/40",
      )}
    >
      {/* Bright edge catching the light along the top of the glass. */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />

      <nav className="container-page flex h-16 items-center justify-between md:h-20" aria-label="Main">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className="grid size-9 place-items-center rounded-full border border-primary/40 bg-primary/5 font-serif text-base italic tracking-wide text-primary shadow-[inset_0_1px_0_0_rgb(255_255_255/0.12)] backdrop-blur-md transition-[background-color,color,transform] duration-500 group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-primary-foreground"
            aria-hidden
          >
            {site.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
          <span className="font-serif text-xl tracking-tight">{site.name}</span>
        </a>

        <ul className={cn("hidden items-center gap-1 rounded-full p-1 md:flex", glassPill)}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={cn(
                  "block rounded-full border px-4 py-1.5 text-sm transition-[color,background-color,border-color] duration-300",
                  active === item.href
                    ? "border-primary/30 bg-primary/15 text-primary shadow-[inset_0_1px_0_0_rgb(255_255_255/0.14)]"
                    : "border-transparent text-muted-foreground hover:border-white/10 hover:bg-white/[0.07] hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="accent"
            size="pill"
            className="hidden bg-primary/10 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.14)] backdrop-blur-md sm:inline-flex"
          >
            <a href="#contact">Let's Talk</a>
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.05] backdrop-blur-md md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t border-white/10 md:hidden">
          <ul className="container-page flex flex-col py-6">
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-white/10">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 font-serif text-4xl tracking-tight"
                >
                  {item.label}
                  <span className="font-serif text-lg italic text-primary">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="container-page">
            <Button asChild variant="hero" size="xl" className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Let's Talk
              </a>
            </Button>
          </div>
        </div>
      )}

      <ScrollProgress />
    </header>
  );
}
