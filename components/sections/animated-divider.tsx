import { cn } from "@/lib/utils";

interface AnimatedDividerProps {
  className?: string;
}

/** Thin horizontal rule with a shimmering, edge-faded gradient. */
export function AnimatedDivider({ className }: AnimatedDividerProps) {
  return (
    <div
      aria-hidden
      className={cn("relative h-px w-full overflow-hidden", className)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <div className="absolute inset-0 animate-[shimmer_2.4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}
