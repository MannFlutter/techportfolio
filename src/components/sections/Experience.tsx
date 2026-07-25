"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import { earlyFoundations, experience } from "@/lib/data/experience";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { Badge } from "@/components/ui/Badge";
import { RevealText } from "@/components/ui/RevealText";

export function Experience() {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-border"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
              Experience
            </p>
            <RevealText
              as="h2"
              id="experience-heading"
              className="mt-3 font-display text-2xl font-medium tracking-tight text-text-primary sm:text-3xl"
            >
              From e-learning MVPs to robots live in malls.
            </RevealText>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
            Ordered oldest first — 5+ years total, moving from MVP delivery to
            enterprise ownership to robotics.
          </p>
        </div>

        <motion.div
          initial={animate ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-14 rounded-lg border border-border/70 bg-surface/40 p-5 sm:p-6"
        >
          <p className="font-mono text-[10px] tracking-[0.14em] text-text-secondary uppercase">
            Early foundations
          </p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 sm:gap-6">
            {earlyFoundations.map((item) => (
              <motion.li key={item.title} variants={variants}>
                <p className="font-mono text-[11px] text-signal tabular-nums">
                  {item.year}
                </p>
                <p className="mt-1.5 font-display text-sm font-medium tracking-tight text-text-primary">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                  {item.note}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.ol
          initial={animate ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mt-4 space-y-0"
        >
          {experience.map((role) => (
            <motion.li
              key={role.company}
              variants={variants}
              className="grid gap-6 border-t border-border py-10 md:grid-cols-[160px_1fr] md:gap-10 lg:grid-cols-[200px_1fr]"
            >
              <div className="font-mono text-xs tracking-wide text-text-secondary">
                <p className="text-signal">{role.period}</p>
                <p className="mt-2 tabular-nums">{role.durationLabel}</p>
                <p className="mt-2 text-text-secondary">{role.role}</p>
              </div>

              <div>
                <h3 className="font-display text-xl font-medium tracking-tight text-text-primary">
                  {role.company}
                </h3>
                <p className="mt-3 max-w-[70ch] text-base leading-relaxed text-text-secondary">
                  {role.summary}
                </p>

                {role.highlights.length > 0 ? (
                  <ul className="mt-5 space-y-2.5">
                    {role.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                      >
                        <span
                          aria-hidden
                          className="mt-2 size-1 shrink-0 rounded-full bg-signal"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {role.tech && role.tech.length > 0 ? (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {role.tech.map((tag) => (
                      <li key={tag}>
                        <Badge>{tag}</Badge>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
