import { ASCII_LOGO } from "@/data/ascii-logo";
import { cn } from "@/lib/utils";

export type AsciiPosition =
  | "right"
  | "left"
  | "top-right"
  | "bottom-left"
  | "center";

export type AsciiIntensity = "subtle" | "normal" | "strong";

interface AsciiBackdropProps {
  position?: AsciiPosition;
  intensity?: AsciiIntensity;
  className?: string;
}

// Vertically centered so the (near-square) logo is never clipped top/bottom;
// nudged inward from the edge so the full mark stays on-screen.
const positions: Record<AsciiPosition, string> = {
  right: "top-1/2 right-0 -translate-y-1/2 -translate-x-[3%]",
  left: "top-1/2 left-0 -translate-y-1/2 translate-x-[3%]",
  "top-right": "top-1/2 right-0 -translate-y-1/2 -translate-x-[3%]",
  "bottom-left": "top-1/2 left-0 -translate-y-1/2 translate-x-[3%]",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const intensities: Record<AsciiIntensity, string> = {
  subtle: "opacity-[0.09] light:opacity-[0.11]",
  normal: "opacity-[0.15] light:opacity-[0.18]",
  strong: "opacity-[0.22] light:opacity-[0.26]",
};

/**
 * Very large, low-contrast ASCII rendering of the CSSU logo, used as decorative
 * branding behind a section. Non-interactive, behind all content, and faded at
 * the section edges so it blends in and out as you scroll. Adapts to the active
 * theme via the `tint` token (light gray on dark, dark gray on light).
 */
export function AsciiBackdrop({
  position = "right",
  intensity = "normal",
  className,
}: AsciiBackdropProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden mask-fade-y [container-type:size]",
        className,
      )}
    >
      <pre
        className={cn(
          "absolute m-0 whitespace-pre font-mono leading-[1.05] tracking-tight text-tint",
          // Sized to the section's own height (container-query units) so the full
          // ~square logo fits; capped by width on narrow screens and an absolute max.
          "text-[min(0.78cqh,1.28cqw,0.72rem)]",
          intensities[intensity],
          positions[position],
        )}
      >
        {ASCII_LOGO}
      </pre>
    </div>
  );
}
