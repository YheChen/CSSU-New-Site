import Link from "next/link";
import { Mail, MapPin, Github } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { siteConfig, footerNav, socialLinks } from "@/data/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="relative mt-10 border-t border-border bg-background-soft">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-strong to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {siteConfig.fullName} — representing {siteConfig.studentCount} CS
              students at the {siteConfig.university}.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="size-4" />
                {siteConfig.email}
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4" />
                {siteConfig.address}
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1">
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

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title} className="flex flex-col gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-subtle-foreground">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-subtle-foreground">
            © {year} {siteConfig.fullName}, {siteConfig.university}.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/constitution"
              className="text-subtle-foreground transition-colors hover:text-foreground"
            >
              Constitution
            </Link>
            <a
              href={siteConfig.issueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-subtle-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" />
              Report a site issue
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
