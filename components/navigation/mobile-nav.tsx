"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { CTAButton } from "@/components/ui/cta-button";
import { mobileNav, socialLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label="Open menu"
          className="grid size-10 place-items-center rounded-full border border-border bg-tint/[0.03] text-foreground transition-colors hover:bg-tint/5 lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm data-[state=open]:animate-overlay-in" />
        <Dialog.Content
          className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col border-l border-border bg-background-soft shadow-2xl outline-none data-[state=open]:animate-drawer-in"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <Logo />
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full border border-border bg-tint/[0.03] text-foreground transition-colors hover:bg-tint/5"
              >
                <X className="size-5" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <ul className="flex flex-col gap-1">
              {mobileNav.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "group flex items-center justify-between rounded-xl px-4 py-3 transition-colors",
                        active ? "bg-tint/[0.06]" : "hover:bg-tint/[0.04]",
                      )}
                    >
                      <span className="flex flex-col">
                        <span
                          className={cn(
                            "text-base font-medium",
                            active ? "text-foreground" : "text-foreground/90",
                          )}
                        >
                          {link.label}
                        </span>
                        {link.description ? (
                          <span className="text-xs text-muted-foreground">
                            {link.description}
                          </span>
                        ) : null}
                      </span>
                      <ArrowUpRight className="size-4 text-subtle-foreground transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-border px-6 py-5">
            <CTAButton
              href="/join"
              className="w-full"
              variant="accent"
            >
              Join the CSSU
            </CTAButton>
            <div className="mt-5 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-full border border-border bg-tint/[0.03] text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
