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
  odigoDeploymentScale,
  odigoScaleSummary,
  rosProductionStatus,
  odigoSummary,
} from "@/lib/data/deployments";
import { odigoOperatorWorkflows } from "@/lib/data/projects";
import { OdigoPerformance } from "@/components/work/OdigoPerformance";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { DeploymentList } from "@/components/ui/DeploymentList";
import { RevealText } from "@/components/ui/RevealText";
import { SignalPulse } from "@/components/ui/SignalPulse";
import { TelemetryStrip } from "@/components/sections/TelemetryStrip";

const roboticsWork = [
  { slug: "odigo", name: "Odigo", detail: `Advertising robots across ${odigoDeploymentScale.sites} sites (${odigoDeploymentScale.robots} units).` },
  { slug: "odigo-etihad-rail", name: "Etihad Rail Fujairah", detail: "Voice assistant and indoor navigation for the UAE’s first AI robot at a national railway station." },
  { slug: "odigo-clinic", name: "Sccore Diagnostic Hub", detail: "Clinic kiosk on a diagnostic robot." },
];

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
            {odigoSummary} The platform has {odigoScaleSummary}. {rosProductionStatus}.
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
            <div className="mt-4 rounded-xl border border-signal/20 bg-surface p-4">
              <OdigoPerformance />
            </div>
          </motion.div>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-lg font-medium">Operator workflows</h3>
          <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-text-secondary marker:text-signal">
            {odigoOperatorWorkflows.map((workflow) => <li key={workflow}>{workflow}</li>)}
          </ul>
        </div>

        <div className="mt-12 border-y border-signal/20 py-6">
          <h3 className="font-display text-lg font-medium">Selected robotics work</h3>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {roboticsWork.map(({ slug, name, detail }) => (
              <li key={slug} className="border-l border-signal/40 pl-3">
                <Link href={`/work/${slug}`} className="text-sm font-medium text-signal underline-offset-4 hover:underline">
                  {name}
                </Link>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">{detail}</p>
              </li>
            ))}
          </ul>
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
