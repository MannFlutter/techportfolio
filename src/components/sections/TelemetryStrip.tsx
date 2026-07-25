"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { SignalPulse } from "@/components/ui/SignalPulse";

const SAMPLES = 32;
const TICK_MS = 900;

type Reading = {
  latency: number;
  rate: number;
  jitter: number;
};

/** Deterministic so server and client markup match before the first tick. */
const seedHistory = Array.from({ length: SAMPLES }, (_, i) =>
  24 + Math.sin(i / 2.6) * 5 + Math.cos(i / 5) * 2,
);

const seedReading: Reading = { latency: 24, rate: 10, jitter: 1.8 };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type Noise = { latency: number; rate: number; jitter: number };

/** Noise is generated outside the state updater so the updater stays pure. */
function nextReading(prev: Reading, noise: Noise): Reading {
  return {
    latency: clamp(prev.latency + (noise.latency - 0.5) * 7, 16, 41),
    rate: clamp(prev.rate + (noise.rate - 0.5) * 0.7, 8.6, 11.4),
    jitter: clamp(prev.jitter + (noise.jitter - 0.5) * 0.9, 0.6, 4.1),
  };
}

/**
 * Operator-console styled telemetry readout for the Robotics section.
 * Values are simulated and clearly labelled as such — they illustrate the
 * kind of interface built for Odigo, not a live feed.
 *
 * Reduced motion: values stay at their seeded state, nothing ticks.
 */
export function TelemetryStrip() {
  const reduceMotion = useReducedMotion();
  const [{ reading, history }, setState] = useState({
    reading: seedReading,
    history: seedHistory,
  });

  useEffect(() => {
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      const noise: Noise = {
        latency: Math.random(),
        rate: Math.random(),
        jitter: Math.random(),
      };

      setState((prev) => {
        const next = nextReading(prev.reading, noise);
        return {
          reading: next,
          history: [...prev.history.slice(1), next.latency],
        };
      });
    }, TICK_MS);

    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const metrics = [
    { label: "round-trip", value: reading.latency.toFixed(0), unit: "ms" },
    { label: "telemetry", value: reading.rate.toFixed(1), unit: "Hz" },
    { label: "jitter", value: reading.jitter.toFixed(1), unit: "ms" },
  ];

  return (
    <figure className="overflow-hidden rounded-xl border border-signal/20 bg-[#0c0c0e] shadow-[0_0_0_1px_rgba(74,222,128,0.04),0_24px_60px_-32px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-signal/15 bg-signal/[0.04] px-4 py-2.5">
        <p className="font-mono text-[10px] tracking-[0.16em] text-text-secondary uppercase">
          Operator view
        </p>
        <p className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-signal uppercase">
          <SignalPulse />
          ROS 2 link
        </p>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border/70">
        {metrics.map((metric) => (
          <div key={metric.label} className="px-4 py-4">
            <p className="font-mono text-[10px] tracking-[0.14em] text-text-secondary uppercase">
              {metric.label}
            </p>
            <p className="mt-2 font-display text-2xl font-medium tracking-tight text-text-primary tabular-nums">
              {metric.value}
              <span className="ml-1 font-mono text-xs font-normal text-text-secondary">
                {metric.unit}
              </span>
            </p>
          </div>
        ))}
      </div>

      <div
        aria-hidden
        className="flex h-24 items-end gap-[3px] border-t border-border/70 px-4 pt-5 pb-5"
      >
        {history.map((value, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-[1px] bg-signal/35 transition-[height] duration-700 ease-signature"
            style={{
              height: `${clamp(((value - 12) / 32) * 100, 8, 100)}%`,
              opacity: 0.35 + (index / SAMPLES) * 0.65,
            }}
          />
        ))}
      </div>

      <figcaption className="border-t border-border/70 px-4 py-2.5 font-mono text-[10px] leading-relaxed tracking-wide text-text-secondary">
        Simulated readout — illustrative of the live telemetry interfaces built
        for Odigo.
      </figcaption>
    </figure>
  );
}
