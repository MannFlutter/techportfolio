import { cn } from "@/lib/utils";

/**
 * The site's recurring visual motif, used sparingly (4 places total):
 * the live-deployments stat, the Robotics section header, the telemetry
 * console status, and the divider entering Robotics.
 *
 * Animation is disabled by the global `prefers-reduced-motion` rule in
 * globals.css, leaving a static dot / hairline.
 */
export function SignalPulse({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("relative inline-flex size-1.5 shrink-0", className)}
    >
      <span className="signal-ring absolute inset-0 rounded-full bg-signal" />
      <span className="relative inline-flex size-1.5 rounded-full bg-signal" />
    </span>
  );
}

/** Hairline divider with a pulse travelling across it. */
export function SignalDivider({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("relative h-px w-full bg-border", className)}>
      <span className="signal-sweep absolute inset-y-0 left-0 block w-24 bg-gradient-to-r from-transparent via-signal to-transparent" />
    </div>
  );
}
