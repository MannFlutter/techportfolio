"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import { heroStats, personal } from "@/lib/data/personal";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { ScrollToHash } from "@/components/ui/ScrollToHash";
import { SignalPulse } from "@/components/ui/SignalPulse";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent-muted),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-5 py-20 sm:px-8 sm:py-28">
        <motion.div
          initial={animate ? "hidden" : false}
          animate="visible"
          variants={container}
          className="max-w-3xl"
        >
          <motion.p
            variants={variants}
            className="mb-5 font-mono text-xs tracking-[0.14em] text-signal uppercase"
          >
            {personal.heroEyebrow}
          </motion.p>

          <motion.p
            variants={variants}
            className="font-display text-lg font-medium tracking-tight text-text-primary sm:text-xl"
          >
            {personal.name}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={variants}
            className="mt-3 font-display text-3xl leading-[1.15] font-medium tracking-tight text-balance text-text-primary sm:text-4xl lg:text-5xl"
          >
            {personal.heroHeadline}
          </motion.h1>

          <motion.p
            variants={variants}
            className="mt-6 max-w-[65ch] text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            {personal.heroSubhead}
          </motion.p>

          <motion.dl
            variants={variants}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4"
          >
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface px-4 py-4 sm:px-5 sm:py-5"
              >
                <dt className="font-mono text-[10px] tracking-[0.12em] text-text-secondary uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 flex items-center gap-2 font-display text-xl font-medium tracking-tight text-text-primary sm:text-2xl">
                  {stat.value}
                  {stat.live ? <SignalPulse /> : null}
                </dd>
              </div>
            ))}
          </motion.dl>

          <motion.div
            variants={variants}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <ScrollToHash
              href="#work"
              className="inline-flex h-11 items-center rounded-md bg-signal px-5 text-sm font-medium text-primary-foreground transition-[opacity,transform] duration-200 ease-signature hover:opacity-90 active:translate-y-px"
            >
              View work
            </ScrollToHash>
            <a
              href={personal.resumePath}
              download
              className="inline-flex h-11 items-center rounded-md border border-border bg-surface px-5 text-sm font-medium text-text-primary transition-[border-color,color,transform] duration-200 ease-signature hover:border-signal/40 hover:text-signal active:translate-y-px"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
