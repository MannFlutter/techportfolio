"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import { getProjectBySlug } from "@/lib/data/projects";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { Badge } from "@/components/ui/Badge";
import { RevealText } from "@/components/ui/RevealText";

const featuredSlugs = ["satsang", "bonno"] as const;

export function FeaturedStudies() {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <>
      {featuredSlugs.map((slug, index) => {
        const project = getProjectBySlug(slug);
        if (!project) return null;

        const reversed = index % 2 === 1;

        return (
          <section
            key={slug}
            id={`study-${slug}`}
            className="scroll-mt-20 border-b border-border"
            aria-labelledby={`study-${slug}-heading`}
          >
            <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
              <div
                className={`grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16 ${
                  reversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className="lg:[direction:ltr]">
                  <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
                    Featured Study · {project.category}
                  </p>
                  <RevealText
                    as="h2"
                    id={`study-${slug}-heading`}
                    className="mt-3 font-display text-2xl font-medium tracking-tight text-text-primary sm:text-3xl"
                  >
                    {project.title}
                  </RevealText>
                  <p className="mt-4 max-w-[62ch] text-base leading-relaxed text-text-secondary">
                    {project.shortDescription}
                  </p>

                  <motion.ul
                    initial={animate ? "hidden" : false}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={container}
                    className="mt-7 space-y-2.5"
                  >
                    {project.features.slice(0, 4).map((feature) => (
                      <motion.li
                        key={feature}
                        variants={variants}
                        className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                      >
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
                        />
                        <span className="text-text-primary">{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tag) => (
                      <li key={tag}>
                        <Badge>{tag}</Badge>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/work/${project.slug}`}
                    className="group mt-9 inline-flex items-center gap-2 border-b border-signal/30 pb-1 text-sm font-medium text-signal transition-[border-color,opacity] duration-200 ease-signature hover:border-signal hover:opacity-90"
                  >
                    Read the {project.title} case study
                    <span
                      aria-hidden
                      className="transition-transform duration-200 ease-signature group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </div>

                <motion.div
                  initial={animate ? "hidden" : false}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={variants}
                  className="lg:[direction:ltr]"
                >
                  <div className="grid grid-cols-3 gap-3">
                    {project.screenshots.slice(0, 3).map((src, i) => (
                      <div
                        key={src}
                        className={`overflow-hidden rounded-lg border border-border bg-surface ${
                          i === 1 ? "translate-y-4" : ""
                        }`}
                      >
                        <Image
                          src={src}
                          alt={`${project.title} app screenshot ${i + 1}`}
                          width={280}
                          height={606}
                          className="h-auto w-full object-cover"
                          sizes="(max-width: 1024px) 30vw, 180px"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
