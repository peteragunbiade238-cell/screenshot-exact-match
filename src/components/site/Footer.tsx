import { ArrowUp } from "lucide-react";
import { navItems, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{site.role}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <p className="font-mono text-xs text-subtle">© {new Date().getFullYear()}</p>
          <a
            href="#home"
            aria-label="Back to top"
            className="grid size-10 place-items-center rounded-full border border-border-strong transition-colors hover:border-primary hover:text-primary"
          >
            <ArrowUp className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
