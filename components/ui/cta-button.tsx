import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
  className?: string;
  /** Render an external anchor. */
  external?: boolean;
  /** Trailing icon. Pass null to hide. Defaults to an arrow. */
  icon?: LucideIcon | null;
}

/** Primary call-to-action link styled as a pill button with an animated icon. */
export function CTAButton({
  href,
  children,
  variant = "default",
  size = "default",
  className,
  external = false,
  icon,
}: CTAButtonProps) {
  const Icon = icon === undefined ? ArrowRight : icon;
  const content = (
    <>
      <span>{children}</span>
      {Icon ? (
        <Icon className="size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
      ) : null}
    </>
  );

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn("group/cta", className)}
    >
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link href={href}>{content}</Link>
      )}
    </Button>
  );
}
