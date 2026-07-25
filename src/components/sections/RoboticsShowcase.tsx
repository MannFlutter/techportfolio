"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import {
  odigoCapabilities,
  odigoDeployments,
  odigoSummary,
} from "@/lib/data/deployments";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { DeploymentList } from "@/components/ui/DeploymentList";
import { RevealText } from "@/components/ui/RevealText";

export function RoboticsShowcase() {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <section
      id="robotics"
      className="scroll-mt-20 border-b border-border"
      aria-labelledby="robotics-heading"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
            Robotics & Connected Systems
          </p>
          <RevealText
            as="h2"
            id="robotics-heading"
            className="mt-3 font-display text-2xl font-medium tracking-tight text-text-primary sm:text-3xl"
          >
            Odigo advertising-robot platform
          </RevealText>
          <p className="mt-5 max-w-[70ch] text-base leading-relaxed text-text-secondary">
            {odigoSummary}
          </p>
        </div>

        <motion.ul
          initial={animate ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-10 grid gap-3 sm:grid-cols-2"
        >
          {odigoCapabilities.map((item) => (
            <motion.li
              key={item}
              variants={variants}
              className="flex gap-3 rounded-lg border border-border bg-surface px-4 py-3.5 text-sm leading-relaxed text-text-primary"
            >
              <span
                aria-hidden
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal"
              />
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-14">
          <p className="mb-6 font-mono text-xs tracking-[0.14em] text-text-secondary uppercase">
            Live deployments
          </p>
          <DeploymentList regions={odigoDeployments} />
        </div>

        <div className="mt-10">
          <Link
            href="/work/odigo"
            className="inline-flex items-center gap-2 text-sm font-medium text-signal transition-opacity duration-200 ease-signature hover:opacity-80"
          >
            Read the Odigo case study
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
