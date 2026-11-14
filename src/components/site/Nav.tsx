import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, site } from "@/content/site";
import { cn } from "@/lib/utils";

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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled || open
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20" aria-label="Main">
        <a href="#home" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span
            className="grid size-8 place-items-center rounded-full border border-border-strong font-mono text-[0.7rem] tracking-wider transition-colors group-hover:border-primary group-hover:text-primary"
            aria-hidden
          >
            {site.name
              .split(" ")
              .map((w) => w[0])
              .join("")}
          </span>
          <span className="text-sm font-medium tracking-tight">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-border bg-surface/60 p-1 backdrop-blur md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={cn(
                  "block rounded-full px-4 py-1.5 text-sm transition-colors",
                  active === item.href
                    ? "bg-surface-raised text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button asChild variant="accent" size="pill" className="hidden sm:inline-flex">
            <a href="#contact">Let's Talk</a>
          </Button>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-border-strong md:hidden"
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
        <div id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t border-border md:hidden">
          <ul className="container-page flex flex-col py-6">
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-border">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-5 text-3xl font-medium tracking-tight"
                >
                  {item.label}
                  <span className="font-mono text-xs text-subtle">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="container-page">
            <Button asChild variant="accent" size="xl" className="w-full">
              <a href="#contact" onClick={() => setOpen(false)}>
                Let's Talk
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
