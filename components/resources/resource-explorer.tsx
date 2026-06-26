"use client";

import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ResourceCard } from "@/components/cards/resource-card";
import { resourceCategories } from "@/data/resources";
import { cn } from "@/lib/utils";
import type { AccentColor } from "@/types";

const accentCycle: AccentColor[] = [
  "accent",
  "blue",
  "gold",
  "bronze",
  "silver",
  "accent",
  "blue",
  "gold",
];

function accentFor(index: number): AccentColor {
  return accentCycle[index % accentCycle.length] ?? "accent";
}

export function ResourceExplorer() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<string>("all");

  const normalized = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return resourceCategories
      .filter((cat) => active === "all" || cat.id === active)
      .map((cat) => {
        if (!normalized) return cat;
        const links = cat.links.filter(
          (link) =>
            link.title.toLowerCase().includes(normalized) ||
            link.description?.toLowerCase().includes(normalized) ||
            cat.title.toLowerCase().includes(normalized),
        );
        return { ...cat, links };
      })
      .filter((cat) => cat.links.length > 0);
  }, [active, normalized]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-5">
        <div className="relative max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-subtle-foreground" />
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search resources…"
            aria-label="Search resources"
            className="pl-11"
          />
        </div>

        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Resource categories">
          <FilterPill
            label="All"
            active={active === "all"}
            onClick={() => setActive("all")}
          />
          {resourceCategories.map((cat) => (
            <FilterPill
              key={cat.id}
              label={cat.title}
              active={active === cat.id}
              onClick={() => setActive(cat.id)}
            />
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cat) => {
            const originalIndex = resourceCategories.findIndex(
              (c) => c.id === cat.id,
            );
            return (
              <ResourceCard
                key={cat.id}
                category={cat}
                accent={accentFor(originalIndex)}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-tint/[0.02] py-16 text-center">
          <SearchX className="size-7 text-subtle-foreground" />
          <p className="text-muted-foreground">
            No resources match &ldquo;{query}&rdquo;.
          </p>
        </div>
      )}
    </div>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm transition-colors",
        active
          ? "border-transparent bg-foreground text-background"
          : "border-border bg-tint/[0.02] text-muted-foreground hover:border-border-strong hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
