import { Check } from "lucide-react";
import { GlassCard } from "@/components/cards/glass-card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import type { SponsorTierInfo } from "@/types";

export function SponsorCard({ tier }: { tier: SponsorTierInfo }) {
  const accent = getAccent(tier.accent);

  return (
    <GlassCard
      interactive
      glass={tier.featured}
      className={cn(
        "flex h-full flex-col p-7",
        tier.featured && cn("border-2", accent.border, accent.glow),
      )}
    >
      {tier.featured ? (
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b to-transparent opacity-60",
            accent.gradientFrom,
          )}
        />
      ) : null}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className={cn("size-2.5 rounded-full", accent.solid)} />
          <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
        </div>
        {tier.featured ? <Badge variant="accent">Most popular</Badge> : null}
      </div>

      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="text-4xl font-semibold tracking-tight text-foreground">
          {tier.price}
        </span>
        <span className="text-sm text-muted-foreground">/ year</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{tier.blurb}</p>

      <ul className="mt-7 flex flex-1 flex-col gap-3.5">
        {tier.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-sm">
            <span
              className={cn(
                "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                accent.bg,
                accent.text,
              )}
            >
              <Check className="size-3" strokeWidth={3} />
            </span>
            <span className="text-foreground/90">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <CTAButton
          href="/sponsorship#inquiry"
          variant={tier.featured ? "default" : "subtle"}
          className="w-full"
          icon={null}
        >
          Become a {tier.name} sponsor
        </CTAButton>
      </div>
    </GlassCard>
  );
}
