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
import { SignalPulse } from "@/components/ui/SignalPulse";
import { TelemetryStrip } from "@/components/sections/TelemetryStrip";

export function RoboticsShowcase() {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <section
      id="robotics"
      className="relative scroll-mt-20 overflow-hidden border-y border-signal/15 bg-[#08080a]"
      aria-labelledby="robotics-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_15%_0%,var(--accent-muted),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "96px 100%",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] text-signal uppercase">
            <SignalPulse />
            Robotics &amp; Connected Systems
          </p>
          <RevealText
            as="h2"
            id="robotics-heading"
            className="mt-4 font-display text-3xl leading-[1.15] font-medium tracking-tight text-balance text-text-primary sm:text-4xl lg:text-[2.75rem]"
          >
            Odigo advertising-robot platform
          </RevealText>
          <p className="mt-5 max-w-[62ch] text-base leading-relaxed text-text-secondary sm:text-lg">
            {odigoSummary} Live across malls in India and Dubai.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-start lg:gap-16">
          <motion.ol
            initial={animate ? "hidden" : false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="border-t border-border/70"
          >
            {odigoCapabilities.map((item, index) => (
              <motion.li
                key={item}
                variants={variants}
                className="flex items-baseline gap-5 border-b border-border/70 py-5"
              >
                <span
                  aria-hidden
                  className="font-mono text-[11px] text-signal/70 tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-text-primary">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ol>

          <motion.div
            initial={animate ? "hidden" : false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants}
            className="lg:sticky lg:top-24"
          >
            <TelemetryStrip />
          </motion.div>
        </div>

        <div className="mt-20">
          <p className="font-mono text-xs tracking-[0.14em] text-text-secondary uppercase">
            Live deployments
          </p>
          <div className="mt-8">
            <DeploymentList regions={odigoDeployments} variant="console" />
          </div>
        </div>

        <div className="mt-14">
          <Link
            href="/work/odigo"
            className="group inline-flex items-center gap-2 border-b border-signal/30 pb-1 text-sm font-medium text-signal transition-[border-color,opacity] duration-200 ease-signature hover:border-signal hover:opacity-90"
          >
            Read the Odigo case study
            <span
              aria-hidden
              className="transition-transform duration-200 ease-signature group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
