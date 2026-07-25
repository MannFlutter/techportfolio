"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  fadeUp,
  reducedMotionVariants,
  staggerContainer,
} from "@/lib/animations/motionVariants";
import { personal } from "@/lib/data/personal";
import { useHasMounted } from "@/lib/hooks/useHasMounted";
import { RevealText } from "@/components/ui/RevealText";

export function About() {
  const reduceMotion = useReducedMotion();
  const mounted = useHasMounted();
  const animate = !reduceMotion && mounted;
  const variants = animate ? fadeUp : reducedMotionVariants;
  const container = animate ? staggerContainer : { hidden: {}, visible: {} };

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-border"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,240px)_1fr] lg:gap-16 lg:py-28">
        <motion.div
          initial={animate ? "hidden" : false}
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants}
          className="relative mx-auto w-full max-w-[220px] lg:mx-0 lg:max-w-none"
        >
          <div className="overflow-hidden rounded-lg border border-border bg-surface">
            <Image
              src={personal.profileImage}
              alt={`${personal.name} — profile photo`}
              width={480}
              height={600}
              className="aspect-[4/5] h-auto w-full object-cover"
              sizes="(max-width: 1024px) 220px, 240px"
              priority
            />
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.12em] text-text-secondary uppercase">
            {personal.location}
          </p>
        </motion.div>

        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
            About
          </p>
          <RevealText
            as="h2"
            id="about-heading"
            className="mt-3 font-display text-2xl font-medium tracking-tight text-text-primary sm:text-3xl"
          >
            {personal.title}
          </RevealText>

          <motion.div
            initial={animate ? "hidden" : false}
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={container}
            className="mt-8 space-y-5"
          >
            {personal.about.map((paragraph) => (
              <motion.p
                key={paragraph.slice(0, 32)}
                variants={variants}
                className="max-w-[70ch] text-base leading-relaxed text-text-secondary"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
