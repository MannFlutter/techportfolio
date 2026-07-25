"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import { engineeringExpertise, technicalSkills } from "@/lib/data/skills";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { Badge } from "@/components/ui/Badge";
import { RevealText } from "@/components/ui/RevealText";

export function Expertise() {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <section
      id="expertise"
      className="scroll-mt-20 border-b border-border bg-surface/25"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
            Expertise
          </p>
          <RevealText
            as="h2"
            id="expertise-heading"
            className="mt-3 font-display text-2xl font-medium tracking-tight text-text-primary sm:text-3xl"
          >
            Engineering focus
          </RevealText>
          <p className="mt-4 max-w-[70ch] text-base leading-relaxed text-text-secondary">
            The tools I reach for most, grouped by where they do the work.
          </p>
        </div>

        <motion.ul
          initial={animate ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-10 flex flex-wrap gap-2"
        >
          {engineeringExpertise.map((item) => (
            <motion.li key={item} variants={variants}>
              <Badge className="border-signal/25 bg-signal-muted text-signal">
                {item}
              </Badge>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial={animate ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {technicalSkills.map((category) => (
            <motion.div
              key={category.title}
              variants={variants}
              className="rounded-lg border border-border bg-surface p-5"
            >
              <h3 className="font-display text-base font-medium tracking-tight text-text-primary">
                {category.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm leading-relaxed text-text-secondary"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
