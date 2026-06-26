import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/cards/glass-card";
import { Badge } from "@/components/ui/badge";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { NewsItem } from "@/types";

export function NewsCard({ item }: { item: NewsItem }) {
  const accent = getAccent(item.accent);

  return (
    <Link href={item.href} className="group h-full">
      <GlassCard interactive className="flex h-full flex-col p-7">
        <div className="flex items-center justify-between">
          <Badge>{item.category}</Badge>
          <span className="text-xs text-subtle-foreground">{item.date}</span>
        </div>
        <h3 className="mt-5 text-xl font-semibold text-foreground">
          {item.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
          {item.excerpt}
        </p>
        <span
          className={cn(
            "mt-6 inline-flex items-center gap-1.5 text-sm font-medium",
            accent.text,
          )}
        >
          Read more
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </GlassCard>
    </Link>
  );
}
