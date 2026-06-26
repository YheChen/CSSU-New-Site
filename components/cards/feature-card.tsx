import { GlassCard } from "@/components/cards/glass-card";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { ValueItem, AccentColor } from "@/types";

interface FeatureCardProps {
  item: ValueItem;
  accent?: AccentColor;
  /** Numeric index label (e.g. "01"). */
  index?: string;
}

/** Icon + title + description card used for values, benefits, and features. */
export function FeatureCard({ item, accent = "accent", index }: FeatureCardProps) {
  const a = getAccent(accent);
  const Icon = item.icon;

  return (
    <GlassCard interactive className="group flex h-full flex-col p-7">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            "grid size-12 place-items-center rounded-xl border transition-transform duration-500 group-hover:-translate-y-0.5",
            a.bg,
            a.border,
            a.text,
          )}
        >
          <Icon className="size-5" />
        </div>
        {index ? (
          <span className="font-mono text-sm text-subtle-foreground">
            {index}
          </span>
        ) : null}
      </div>
      <h3 className="mt-6 text-lg font-semibold text-foreground">
        {item.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>
    </GlassCard>
  );
}
