import { useMemo, useState } from "react";
import { filterProjects, projects, workFilters, type WorkFilterId } from "@/content/site";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Work() {
  const [filter, setFilter] = useState<WorkFilterId>("all");
  const visible = useMemo(() => filterProjects(projects, filter), [filter]);

  return (
    <section id="work" className="border-t border-border py-24 md:py-36">
      <div className="container-page">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="03">Selected Work</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-8 text-[clamp(3rem,8vw,7.5rem)]">
                Selected <span className="accent-serif text-primary">work</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-muted-foreground">
                Pieces marked <span className="text-primary">Concept</span> are demonstration
                projects created to show approach and style.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div
              role="group"
              aria-label="Filter projects by category"
              className="-mx-1 flex flex-wrap gap-2"
            >
              {workFilters.map((f) => {
                const count = filterProjects(projects, f.id).length;
                const isActive = filter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setFilter(f.id)}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300",
                      isActive
                        ? "border-foreground bg-foreground text-background"
                        : "border-border-strong text-muted-foreground hover:border-foreground hover:text-foreground",
                    )}
                  >
                    {f.label}
                    <span className={cn("font-mono text-[0.7rem]", isActive ? "opacity-60" : "text-subtle")}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <ul
          key={filter}
          className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2"
          aria-live="polite"
        >
          {visible.map((p, i) => (
            <li
              key={p.title}
              className={cn(
                "animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700",
                i % 2 === 1 && "md:mt-24",
              )}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <ProjectCard project={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
