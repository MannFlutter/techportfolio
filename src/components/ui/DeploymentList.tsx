"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import type { DeploymentRegion } from "@/lib/data/deployments";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { cn } from "@/lib/utils";

type DeploymentListProps = {
  regions: DeploymentRegion[];
  /** `console` is the Robotics-section treatment; `card` is used elsewhere. */
  variant?: "card" | "console";
};

export function DeploymentList({
  regions,
  variant = "card",
}: DeploymentListProps) {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };
  const isConsole = variant === "console";

  return (
    <motion.div
      initial={animate ? "hidden" : false}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className={cn("grid gap-8 sm:grid-cols-2", isConsole && "gap-x-10 gap-y-8")}
    >
      {regions.map((region) => (
        <motion.div
          key={region.region}
          variants={variants}
          className={cn(
            !isConsole && "rounded-lg border border-border bg-surface p-5 sm:p-6",
          )}
        >
          <div
            className={cn(
              isConsole &&
                "flex items-baseline justify-between border-b border-signal/15 pb-2.5",
            )}
          >
            <p className="font-mono text-[11px] tracking-[0.14em] text-signal uppercase">
              {region.region}
            </p>
            {isConsole ? (
              <p className="font-mono text-[10px] tracking-[0.14em] text-text-secondary uppercase tabular-nums">
                {region.sites.length} sites
              </p>
            ) : null}
          </div>

          <ul className={cn(isConsole ? "mt-1" : "mt-4 space-y-2.5")}>
            {region.sites.map((site, index) => (
              <motion.li
                key={site}
                variants={variants}
                custom={index}
                className={cn(
                  isConsole
                    ? "flex items-baseline gap-4 border-b border-border/60 py-2.5 text-sm text-text-primary last:border-b-0"
                    : "flex gap-3 text-sm leading-relaxed text-text-secondary",
                )}
              >
                {isConsole ? (
                  <span className="font-mono text-[10px] text-text-secondary tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                ) : (
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-signal/70"
                  />
                )}
                <span className="text-text-primary">{site}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}
