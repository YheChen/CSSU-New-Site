import { Reveal } from "@/components/ui/motion";
import { SectionLabel } from "@/components/sections/section-label";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

/** Reusable section heading: eyebrow label + title + optional description. */
export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered && "items-center text-center",
        className,
      )}
    >
      {label ? (
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
      ) : null}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance text-section font-semibold tracking-tight text-gradient",
            centered && "mx-auto max-w-3xl",
            titleClassName,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "text-pretty text-lg leading-relaxed text-muted-foreground",
              centered ? "mx-auto max-w-2xl" : "max-w-2xl",
            )}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
