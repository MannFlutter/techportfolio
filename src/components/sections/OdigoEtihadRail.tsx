"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { odigoEtihadSummary, rosIntegration } from "@/lib/data/deployments";
import { getProjectBySlug } from "@/lib/data/projects";
import { MapPinIcon } from "@/components/ui/icons";

const HIGHLIGHTS = [
  rosIntegration,
  "WebSockets, Serial/UART, WebRTC",
  "Voice assistant with indoor map-based route guidance",
  "Live telemetry and robot-operator interfaces",
  "Secure, low-latency communication for production deployment",
] as const;

type Reading = {
  latency: number;
  rate: number;
  jitter: number;
};

const SEED: Reading = { latency: 20, rate: 9.9, jitter: 2.0 };
const TICK_MS = 2500;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-xs tracking-[0.14em] text-text-secondary uppercase">
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-sm leading-relaxed text-text-primary"
        >
          <span
            aria-hidden
            className="mt-2 size-1.5 shrink-0 rounded-full bg-signal"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function OperatorView() {
  const reduceMotion = useReducedMotion();
  const [reading, setReading] = useState<Reading>(SEED);

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setReading((prev) => ({
        latency: clamp(prev.latency + (Math.random() - 0.5) * 4, 16, 28),
        rate: clamp(prev.rate + (Math.random() - 0.5) * 0.5, 8.8, 11.2),
        jitter: clamp(prev.jitter + (Math.random() - 0.5) * 0.6, 1.2, 3.2),
      }));
    }, TICK_MS);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const metrics = [
    {
      label: "round-trip",
      value: reading.latency.toFixed(0),
      unit: "ms",
    },
    {
      label: "telemetry",
      value: reading.rate.toFixed(1),
      unit: "Hz",
    },
    {
      label: "jitter",
      value: reading.jitter.toFixed(1),
      unit: "ms",
    },
  ];

  return (
    <figure className="overflow-hidden rounded-xl border border-signal/20 bg-[#0c0c0e] shadow-[0_0_0_1px_rgba(74,222,128,0.04),0_24px_60px_-32px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-signal/15 bg-signal/[0.04] px-4 py-2.5">
        <p className="font-mono text-[10px] tracking-[0.16em] text-text-secondary uppercase">
          Operator view
        </p>
        <p className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-signal uppercase">
          <span
            aria-hidden
            className="relative inline-flex size-2 items-center justify-center"
          >
            <span className="absolute size-2 animate-ping rounded-full bg-signal/40" />
            <span className="relative size-1.5 rounded-full bg-signal" />
          </span>
          ROS link
        </p>
      </div>

      <div className="grid grid-cols-1 divide-y divide-border/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {metrics.map((metric) => (
          <div key={metric.label} className="px-4 py-4">
            <p className="font-mono text-[10px] tracking-[0.14em] text-text-secondary uppercase">
              {metric.label}
            </p>
            <p className="mt-2 font-display text-2xl font-medium tracking-tight text-text-primary tabular-nums transition-opacity duration-300">
              {metric.value}
              <span className="ml-1 font-mono text-xs font-normal text-text-secondary">
                {metric.unit}
              </span>
            </p>
          </div>
        ))}
      </div>

      <figcaption className="border-t border-border/70 px-4 py-2.5 font-mono text-[10px] leading-relaxed tracking-wide text-text-secondary italic">
        Illustrative simulation of the passenger guidance robot’s telemetry interface.
      </figcaption>
    </figure>
  );
}

/**
 * Full case-study section for the Etihad Rail deployment:
 * voice assistant, indoor navigation, and robot platform.
 */
export function OdigoEtihadRail() {
  const project = getProjectBySlug("odigo-etihad-rail");
  if (!project) return null;

  return (
    <section
      id="odigo-etihad"
      className="relative scroll-mt-20 overflow-hidden border-y border-signal/15 bg-[#08080a]"
      aria-labelledby="odigo-etihad-heading"
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
        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
            Robotics &amp; Connected Systems
          </p>
          <h2
            id="odigo-etihad-heading"
            className="mt-4 font-display text-3xl leading-[1.15] font-medium tracking-tight text-balance text-text-primary sm:text-4xl lg:text-[2.75rem]"
          >
            {project.title}
          </h2>
          <p className="mt-3 font-display text-lg font-medium tracking-tight text-text-secondary sm:text-xl">
            Voice Assistant, Navigation &amp; Robot Platform
          </p>
          <p className="mt-5 max-w-[68ch] text-base leading-relaxed text-text-secondary sm:text-lg">
            {odigoEtihadSummary}
          </p>
        </div>

        {/* Highlights + Operator view */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_minmax(0,26rem)] lg:items-start lg:gap-16">
          <ol className="border-t border-border/70">
            {HIGHLIGHTS.map((item, index) => (
              <li
                key={item}
                className="flex items-baseline gap-5 border-b border-border/70 py-5"
              >
                <span
                  aria-hidden
                  className="font-mono text-[11px] font-medium text-signal/70 tabular-nums"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base leading-relaxed text-text-primary">
                  {item}
                </span>
              </li>
            ))}
          </ol>

          <div className="lg:sticky lg:top-24">
            <OperatorView />
          </div>
        </div>

        {/* Overview */}
        <div className="mt-20 max-w-[70ch] border-t border-border/70 pt-12">
          <SectionHeading>Overview</SectionHeading>
          <p className="mt-5 text-base leading-relaxed text-text-secondary">
            {project.fullDescription}
          </p>
        </div>

        {/* Contribution */}
        <div className="mt-14 max-w-[70ch]">
          <SectionHeading>Contribution</SectionHeading>
          <p className="mt-5 text-base leading-relaxed text-text-secondary">
            {project.responsibilities}
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 max-w-[70ch]">
          <SectionHeading>Features</SectionHeading>
          <BulletList items={project.features} />
        </div>

        {/* Tech stack */}
        <div className="mt-14">
          <SectionHeading>Tech stack</SectionHeading>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <li key={item}><Badge>{item}</Badge></li>
            ))}
          </ul>
        </div>

        {/* Live deployments */}
        <div className="mt-14">
          <SectionHeading>Live deployments</SectionHeading>
          <div className="mt-5">
            <span className="inline-flex max-w-full items-center gap-2 rounded-md border border-signal/25 bg-signal/[0.06] px-3.5 py-2.5 font-mono text-xs leading-relaxed tracking-wide text-text-primary sm:text-[13px]">
              <MapPinIcon className="size-3.5 shrink-0 text-signal" />
              UAE — Etihad Rail, Fujairah Passenger Station
            </span>
          </div>
        </div>

        <div className="mt-14">
          <Link
            href="/work/odigo-etihad-rail"
            className="group inline-flex items-center gap-2 border-b border-signal/30 pb-1 text-sm font-medium text-signal transition-[border-color,opacity] duration-200 ease-signature hover:border-signal hover:opacity-90"
          >
            Read the Etihad Rail case study
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

export default OdigoEtihadRail;
