"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import type { DeploymentRegion } from "@/lib/data/deployments";
import { useHasMounted } from "@/lib/hooks/useHasMounted";

type DeploymentListProps = {
  regions: DeploymentRegion[];
};

export function DeploymentList({ regions }: DeploymentListProps) {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <motion.div
      initial={animate ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className="grid gap-8 sm:grid-cols-2"
    >
      {regions.map((region) => (
        <motion.div
          key={region.region}
          variants={variants}
          className="rounded-lg border border-border bg-surface p-5 sm:p-6"
        >
          <p className="font-mono text-[11px] tracking-[0.14em] text-signal uppercase">
            {region.region}
          </p>
          <ul className="mt-4 space-y-2.5">
            {region.sites.map((site, index) => (
              <motion.li
                key={site}
                variants={variants}
                custom={index}
                className="flex gap-3 text-sm leading-relaxed text-text-secondary"
              >
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-signal/70"
                />
                <span className="text-text-primary">{site}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
