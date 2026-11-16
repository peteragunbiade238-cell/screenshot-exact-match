import { ArrowUpRight } from "lucide-react";
import { services, type Project } from "@/content/site";

const categoryLabel = Object.fromEntries(services.map((s) => [s.id, s.short]));

export function ProjectCard({ project }: { project: Project }) {
  const hasLink = project.url.trim().length > 0;

  return (
    <article className="group flex h-full flex-col">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface transition-[border-color,box-shadow,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-1 group-hover:border-primary/40 group-hover:shadow-[0_30px_60px_-30px_color-mix(in_oklch,var(--primary)_45%,transparent)] motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <img
          src={project.image}
          alt={`${project.title} thumbnail`}
          width={1280}
          height={960}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-30"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full border border-border bg-background/75 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] backdrop-blur-md">
            {categoryLabel[project.category]}
          </span>
          {project.concept && (
            <span className="rounded-full border border-primary/40 bg-background/75 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-primary backdrop-blur-md">
              Concept
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <h3 className="font-serif text-3xl tracking-tight md:text-4xl">{project.title}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-subtle">
          {project.tools.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          {hasLink ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-b border-border-strong pb-1 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              View Project <ArrowUpRight className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 pb-1 text-sm text-subtle">
              View Project · Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
