import { odigoMeasurementNote, odigoPerformance } from "@/lib/data/deployments";

export function OdigoPerformance() {
  return (
    <div>
      <p className="font-mono text-xs text-signal">Reported project measurements</p>
      <dl className="mt-3 grid grid-cols-3 gap-2">
        {odigoPerformance.map(({ label, value }) => (
          <div key={label} className="rounded-md border border-border bg-background p-2 sm:p-3">
            <dt className="text-xs leading-snug text-text-secondary">{label}</dt>
            <dd className="mt-1 font-display text-lg font-medium tabular-nums">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-text-secondary">{odigoMeasurementNote}</p>
    </div>
  );
}
