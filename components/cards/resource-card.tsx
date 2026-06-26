import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/cards/glass-card";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { ResourceCategory, ResourceLink, AccentColor } from "@/types";

interface ResourceCardProps {
  category: ResourceCategory;
  accent?: AccentColor;
}

export function ResourceCard({ category, accent = "accent" }: ResourceCardProps) {
  const a = getAccent(accent);
  const Icon = category.icon;

  return (
    <GlassCard className="flex h-full flex-col p-7">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-xl border",
            a.bg,
            a.border,
            a.text,
          )}
        >
          <Icon className="size-5" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">
          {category.title}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        {category.description}
      </p>

      <ul className="mt-5 flex flex-col">
        {category.links.map((link) => (
          <li key={link.title}>
            <ResourceRow link={link} />
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}

function ResourceRow({ link }: { link: ResourceLink }) {
  const content = (
    <>
      <span className="flex flex-col">
        <span className="text-sm font-medium text-foreground/90 transition-colors group-hover/row:text-foreground">
          {link.title}
        </span>
        {link.description ? (
          <span className="mt-0.5 text-xs leading-snug text-subtle-foreground">
            {link.description}
          </span>
        ) : null}
      </span>
      {link.external ? (
        <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-subtle-foreground transition-all duration-200 group-hover/row:translate-x-0.5 group-hover/row:text-foreground" />
      ) : (
        <ArrowRight className="mt-0.5 size-4 shrink-0 text-subtle-foreground transition-all duration-200 group-hover/row:translate-x-0.5 group-hover/row:text-foreground" />
      )}
    </>
  );

  const className =
    "group/row flex items-start justify-between gap-3 border-t border-border py-3 first:border-t-0";

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }
  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}
