import type { AccentColor } from "@/types";

export interface AccentClasses {
  /** Accent-colored text. */
  text: string;
  /** Soft tinted background for icon chips. */
  bg: string;
  /** Soft tinted border. */
  border: string;
  /** Solid accent background (dots, bars). */
  solid: string;
  /** Soft radial glow shadow. */
  glow: string;
  /** Gradient start token for overlays (`from-...`). */
  gradientFrom: string;
}

export const accentClasses: Record<AccentColor, AccentClasses> = {
  accent: {
    text: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/30",
    solid: "bg-accent",
    glow: "shadow-[0_0_70px_-25px_var(--color-accent)]",
    gradientFrom: "from-accent/25",
  },
  bronze: {
    text: "text-bronze",
    bg: "bg-bronze/10",
    border: "border-bronze/30",
    solid: "bg-bronze",
    glow: "shadow-[0_0_70px_-25px_var(--color-bronze)]",
    gradientFrom: "from-bronze/25",
  },
  silver: {
    text: "text-silver",
    bg: "bg-silver/10",
    border: "border-silver/30",
    solid: "bg-silver",
    glow: "shadow-[0_0_70px_-25px_var(--color-silver)]",
    gradientFrom: "from-silver/25",
  },
  gold: {
    text: "text-gold",
    bg: "bg-gold/10",
    border: "border-gold/30",
    solid: "bg-gold",
    glow: "shadow-[0_0_70px_-25px_var(--color-gold)]",
    gradientFrom: "from-gold/25",
  },
  platinum: {
    text: "text-platinum",
    bg: "bg-platinum/10",
    border: "border-platinum/30",
    solid: "bg-platinum",
    glow: "shadow-[0_0_70px_-25px_var(--color-platinum)]",
    gradientFrom: "from-platinum/25",
  },
  blue: {
    text: "text-blue",
    bg: "bg-blue/10",
    border: "border-blue/30",
    solid: "bg-blue",
    glow: "shadow-[0_0_70px_-25px_var(--color-blue)]",
    gradientFrom: "from-blue/25",
  },
};

export function getAccent(accent: AccentColor): AccentClasses {
  return accentClasses[accent];
}
