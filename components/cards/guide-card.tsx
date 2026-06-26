import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { GlassCard } from "@/components/cards/glass-card";
import { Badge } from "@/components/ui/badge";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { Guide } from "@/types";

export function GuideCard({ guide }: { guide: Guide }) {
  const accent = getAccent(guide.accent);
  const Icon = guide.icon;
  const href = guide.href ?? `/guides/${guide.slug}`;

  const inner = (
    <GlassCard interactive className="group flex h-full flex-col p-7">
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "grid size-12 place-items-center rounded-xl border transition-transform duration-500 group-hover:-translate-y-0.5",
            accent.bg,
            accent.border,
            accent.text,
          )}
        >
          <Icon className="size-5" />
        </div>
        <ArrowUpRight className="size-5 text-subtle-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      <Badge className="mt-6 w-fit">{guide.category}</Badge>
      <h3 className="mt-3 text-xl font-semibold text-foreground">
        {guide.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {guide.description}
      </p>
      <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-subtle-foreground">
        <Clock className="size-3.5" />
        {guide.readingTime}
      </div>
    </GlassCard>
  );

  if (guide.external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="h-full">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className="h-full">
      {inner}
    </Link>
  );
}
