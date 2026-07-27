import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import {
  odigoCapabilities,
  odigoDeployments,
  odigoEtihadCapabilities,
  odigoEtihadSummary,
  odigoSummary,
} from "@/lib/data/deployments";
import {
  caseStudySlugs,
  getFlagshipProjects,
  getProjectBySlug,
  hasProjectDetail,
  type CaseStudySlug,
} from "@/lib/data/projects";
import { CaseStudyHero } from "@/components/work/CaseStudyHero";
import { CaseStudySection } from "@/components/work/CaseStudySection";
import { ScreenshotShowcase } from "@/components/work/ScreenshotShowcase";
import { DeploymentList } from "@/components/ui/DeploymentList";
import { Badge } from "@/components/ui/Badge";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !hasProjectDetail(project)) {
    return { title: "Case study" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} · Manthan Patel`,
      description: project.shortDescription,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  if (!caseStudySlugs.includes(slug as CaseStudySlug)) {
    notFound();
  }

  const project = getProjectBySlug(slug);
  if (!project || !hasProjectDetail(project)) {
    notFound();
  }

  const others = getFlagshipProjects().filter((p) => p.slug !== project.slug);
  const isOdigo = project.slug === "odigo";
  const isEtihad = project.slug === "odigo-etihad-rail";

  return (
    <article className="pb-20">
      <CaseStudyHero project={project} />

      <CaseStudySection title="Overview">
        <p className="max-w-[70ch] text-base leading-relaxed text-text-secondary">
          {isOdigo
            ? odigoSummary
            : isEtihad
              ? odigoEtihadSummary
              : project.fullDescription}
        </p>
        {isOdigo || isEtihad ? (
          <p className="mt-4 max-w-[70ch] text-base leading-relaxed text-text-secondary">
            {project.fullDescription}
          </p>
        ) : null}
      </CaseStudySection>

      {project.responsibilities ? (
        <CaseStudySection title="Contribution">
          <p className="max-w-[70ch] text-base leading-relaxed text-text-secondary">
            {project.responsibilities}
          </p>
        </CaseStudySection>
      ) : null}

      <CaseStudySection title="Features">
        <ul className="space-y-2.5">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex gap-3 text-sm leading-relaxed text-text-secondary"
            >
              <span
                aria-hidden
                className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
              />
              <span className="text-text-primary">{feature}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Tech stack">
        <ul className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <li key={item}>
              {item.includes("upcoming") ? (
                <span className="inline-flex items-center rounded-md border border-dashed border-signal/40 bg-transparent px-2.5 py-1 font-mono text-[11px] tracking-wide text-signal/80">
                  {item}
                </span>
              ) : (
                <Badge>{item}</Badge>
              )}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      {isOdigo ? (
        <>
          <CaseStudySection title="Capabilities">
            <ul className="space-y-2.5">
              {odigoCapabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-text-primary"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Live deployments">
            <DeploymentList regions={odigoDeployments} />
          </CaseStudySection>
        </>
      ) : null}

      {isEtihad ? (
        <>
          <CaseStudySection title="Capabilities">
            <ul className="space-y-2.5">
              {odigoEtihadCapabilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-text-primary"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </CaseStudySection>
          <CaseStudySection title="Live deployments">
            <span className="inline-flex max-w-full items-center gap-2 rounded-md border border-signal/25 bg-signal/[0.06] px-3.5 py-2.5 font-mono text-xs leading-relaxed tracking-wide text-text-primary sm:text-[13px]">
              <MapPin className="size-3.5 shrink-0 text-signal" aria-hidden />
              UAE — Etihad Rail, Fujairah Passenger Station
            </span>
          </CaseStudySection>
        </>
      ) : null}

      {project.screenshots.length > 0 ? (
        <CaseStudySection title="Screenshots">
          <ScreenshotShowcase
            screenshots={project.screenshots}
            projectTitle={project.title}
          />
        </CaseStudySection>
      ) : null}

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 md:py-16">
          <p className="font-mono text-xs tracking-[0.14em] text-text-secondary uppercase">
            More case studies
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/work/${item.slug}`}
                  className="block rounded-lg border border-border bg-surface p-4 transition-[border-color,transform] duration-200 ease-signature hover:-translate-y-0.5 hover:border-signal/40"
                >
                  <p className="font-mono text-[10px] tracking-wide text-text-secondary uppercase">
                    {item.category}
                  </p>
                  <p className="mt-1.5 font-display text-base font-medium text-text-primary">
                    {item.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
