import { Reveal } from "@/components/ui/motion";
import { CTAButton } from "@/components/ui/cta-button";
import { SectionContainer } from "@/components/sections/section-container";
import { cn } from "@/lib/utils";

interface CTAAction {
  label: string;
  href: string;
  variant?: "default" | "outline" | "accent" | "subtle";
  external?: boolean;
}

interface CTASectionProps {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  actions: CTAAction[];
  className?: string;
}

/** Full-width call-to-action band with a glowing bordered panel. */
export function CTASection({
  label,
  title,
  description,
  actions,
  className,
}: CTASectionProps) {
  return (
    <SectionContainer spacing="md" width="wide">
      <Reveal>
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl border border-border bg-background-soft px-6 py-16 text-center sm:px-12 sm:py-20",
            className,
          )}
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 glow-accent" />
            <div className="absolute inset-0 bg-dot opacity-40" />
          </div>

          {label ? (
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
              {label}
            </p>
          ) : null}
          <h2 className="mx-auto max-w-2xl text-balance text-section font-semibold tracking-tight text-gradient">
            {title}
          </h2>
          {description ? (
            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {actions.map((action) => (
              <CTAButton
                key={action.href + action.label}
                href={action.href}
                variant={action.variant ?? "default"}
                size="lg"
                external={action.external}
                icon={action.variant === "outline" ? null : undefined}
              >
                {action.label}
              </CTAButton>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
