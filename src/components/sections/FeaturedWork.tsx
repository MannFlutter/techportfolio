"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import { getFlagshipProjects } from "@/lib/data/projects";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { Badge } from "@/components/ui/Badge";
import { RevealText } from "@/components/ui/RevealText";

export function FeaturedWork() {
  const projects = getFlagshipProjects();
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <section
      id="work"
      className="scroll-mt-20 border-b border-border"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
            Featured Work
          </p>
          <RevealText
            as="h2"
            id="work-heading"
            className="mt-3 font-display text-2xl font-medium tracking-tight text-text-primary sm:text-3xl"
          >
            Flagship case studies
          </RevealText>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-text-secondary">
            Deep dives into the Odigo robotics platform, Satsang, Bonno, and
            other production systems shipped to store.
          </p>
        </div>

        <motion.ul
          initial={animate ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={container}
          className="mt-12 grid gap-4 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.li key={project.slug} variants={variants}>
              <Link
                href={`/work/${project.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-5 transition-[border-color,transform] duration-200 ease-signature hover:-translate-y-0.5 hover:border-signal/40 sm:p-6"
              >
                <p className="font-mono text-[11px] tracking-[0.12em] text-text-secondary uppercase">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-xl font-medium tracking-tight text-text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-text-secondary">
                  {project.shortDescription}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal">
                  View project
                  <span
                    aria-hidden
                    className="transition-transform duration-200 ease-signature group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
