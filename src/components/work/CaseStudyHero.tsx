import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { Badge } from "@/components/ui/Badge";

type CaseStudyHeroProps = {
  project: Project;
};

export function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 pt-28 pb-14 sm:px-8 sm:pt-32 sm:pb-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs tracking-wide text-text-secondary transition-colors duration-200 ease-signature hover:text-signal"
        >
          <span aria-hidden>←</span> Featured work
        </Link>

        <p className="mt-8 font-mono text-xs tracking-[0.14em] text-signal uppercase">
          {project.category}
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight text-balance text-text-primary sm:text-4xl lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-[70ch] text-lg leading-relaxed text-text-secondary">
          {project.shortDescription}
        </p>

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>

        {(project.android || project.ios) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.android ? (
              <a
                href={project.android}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary transition-colors duration-200 ease-signature hover:border-signal/40 hover:text-signal"
              >
                Play Store
              </a>
            ) : null}
            {project.ios ? (
              <a
                href={project.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-md border border-border bg-surface px-4 text-sm font-medium text-text-primary transition-colors duration-200 ease-signature hover:border-signal/40 hover:text-signal"
              >
                App Store
              </a>
            ) : null}
          </div>
        )}
      </div>
    </header>
  );
}
