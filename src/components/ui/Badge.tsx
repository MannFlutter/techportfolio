import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-[11px] tracking-wide text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
