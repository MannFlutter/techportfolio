"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import { getGridProjects, hasProjectDetail } from "@/lib/data/projects";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { Badge } from "@/components/ui/Badge";
import { RevealText } from "@/components/ui/RevealText";

export function AllProjectsGrid() {
  const projects = getGridProjects();
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b border-border"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
            Portfolio
          </p>
          <RevealText
            as="h2"
            id="projects-heading"
            className="mt-3 font-display text-2xl font-medium tracking-tight text-text-primary sm:text-3xl"
          >
            All Projects
          </RevealText>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-text-secondary">
            Messaging, EV charging, streaming, marketplaces, and more — selected
            production work beyond the flagship case studies.
          </p>
        </div>

        <motion.ul
          initial={animate ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={container}
          className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.li
              key={project.slug}
              variants={variants}
              className="flex flex-col rounded-lg border border-border bg-surface p-5 transition-[border-color,transform] duration-200 ease-signature hover:-translate-y-0.5 hover:border-signal/35"
            >
              <p className="font-mono text-[11px] tracking-[0.12em] text-text-secondary uppercase">
                {project.category}
              </p>
              <h3 className="mt-2.5 font-display text-lg font-medium tracking-tight text-text-primary">
                {hasProjectDetail(project) ? (
                  <Link
                    href={`/work/${project.slug}`}
                    className="transition-colors duration-200 ease-signature hover:text-signal"
                  >
                    {project.title}
                  </Link>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-text-secondary">
                {project.shortDescription}
              </p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((tag) => (
                  <li key={tag}>
                    <Badge>{tag}</Badge>
                  </li>
                ))}
              </ul>
              {hasProjectDetail(project) ? (
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-signal transition-opacity duration-200 ease-signature hover:opacity-80"
                >
                  View project
                  <span aria-hidden>→</span>
                </Link>
              ) : null}
              {(project.android || project.ios) && (
                <div className="mt-5 flex flex-wrap gap-3 border-t border-border pt-4">
                  {project.android ? (
                    <a
                      href={project.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-text-secondary transition-colors duration-200 ease-signature hover:text-signal"
                    >
                      Play Store
                      <ExternalLink className="size-3" aria-hidden />
                    </a>
                  ) : null}
                  {project.ios ? (
                    <a
                      href={project.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-text-secondary transition-colors duration-200 ease-signature hover:text-signal"
                    >
                      App Store
                      <ExternalLink className="size-3" aria-hidden />
                    </a>
                  ) : null}
                </div>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
