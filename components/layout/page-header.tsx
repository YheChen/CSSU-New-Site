import { Reveal } from "@/components/ui/motion";
import { SectionLabel } from "@/components/sections/section-label";
import {
  AsciiBackdrop,
  type AsciiPosition,
  type AsciiIntensity,
} from "@/components/sections/ascii-backdrop";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  /** Render the decorative ASCII logo behind the header. */
  ascii?: boolean;
  asciiPosition?: AsciiPosition;
  asciiIntensity?: AsciiIntensity;
}

/** Hero band for inner pages: glow backdrop, eyebrow, large title, intro. */
export function PageHeader({
  label,
  title,
  description,
  children,
  align = "center",
  className,
  ascii = false,
  asciiPosition = "top-right",
  asciiIntensity = "normal",
}: PageHeaderProps) {
  const centered = align === "center";
  return (
    <header
      className={cn(
        "relative overflow-hidden px-6 pb-12 pt-36 sm:pt-44 lg:px-8",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] glow-accent opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid mask-fade-b opacity-[0.35]" />
      {ascii ? (
        <AsciiBackdrop position={asciiPosition} intensity={asciiIntensity} />
      ) : null}
      <div
        className={cn(
          "mx-auto flex max-w-4xl flex-col gap-6",
          centered ? "items-center text-center" : "items-start",
        )}
      >
        {label ? (
          <Reveal>
            <SectionLabel>{label}</SectionLabel>
          </Reveal>
        ) : null}
        <Reveal delay={0.05}>
          <h1
            className={cn(
              "text-balance text-display font-semibold tracking-tight text-gradient",
            )}
          >
            {title}
          </h1>
        </Reveal>
        {description ? (
          <Reveal delay={0.1}>
            <p
              className={cn(
                "text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl",
                centered ? "mx-auto max-w-2xl" : "max-w-2xl",
              )}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal delay={0.15}>
            <div className={cn("flex flex-wrap gap-3", centered && "justify-center")}>
              {children}
            </div>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}
