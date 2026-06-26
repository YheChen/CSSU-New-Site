import { Mail, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { Reveal } from "@/components/ui/motion";
import { GlassCard } from "@/components/cards/glass-card";
import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig, socialLinks } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with the Computer Science Student Union — email us, find our office in BA2250, or connect on social media.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Get in touch"
        description="Questions, ideas, or feedback — we'd love to hear from you. Reach out and we'll get back to you as soon as we can."
      />

      <SectionContainer spacing="md" width="wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          {/* Info */}
          <div className="flex flex-col gap-4">
            <Reveal>
              <ContactDetail
                icon={<Mail className="size-5" />}
                label="Email"
                accent="accent"
              >
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {siteConfig.email}
                </a>
              </ContactDetail>
            </Reveal>
            <Reveal delay={0.05}>
              <ContactDetail
                icon={<MapPin className="size-5" />}
                label="Office"
                accent="blue"
              >
                {siteConfig.address}, {siteConfig.university}
              </ContactDetail>
            </Reveal>
            <Reveal delay={0.1}>
              <ContactDetail
                icon={<Clock className="size-5" />}
                label="Office hours"
                accent="gold"
              >
                Drop by the BA2250 lounge — hours are posted each term. Email us
                and we&apos;ll let you know when we&apos;re open.
              </ContactDetail>
            </Reveal>

            <Reveal delay={0.15}>
              <GlassCard className="p-6">
                <h3 className="text-sm font-medium text-foreground/90">
                  Follow along
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-tint/[0.02] px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-border-strong hover:text-foreground"
                    >
                      <social.icon className="size-4" />
                      {social.label}
                    </a>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <GlassCard className="p-7 sm:p-9">
              <h2 className="text-xl font-semibold text-foreground">
                Send us a message
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill out the form and we&apos;ll be in touch.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </SectionContainer>
    </>
  );
}

function ContactDetail({
  icon,
  label,
  accent,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  accent: "accent" | "blue" | "gold";
  children: React.ReactNode;
}) {
  const tone = {
    accent: "border-accent/30 bg-accent/10 text-accent",
    blue: "border-blue/30 bg-blue/10 text-blue",
    gold: "border-gold/30 bg-gold/10 text-gold",
  }[accent];

  return (
    <GlassCard className="flex items-start gap-4 p-6">
      <span className={`grid size-11 shrink-0 place-items-center rounded-xl border ${tone}`}>
        {icon}
      </span>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-subtle-foreground">
          {label}
        </span>
        <span className="text-sm leading-relaxed text-foreground/90">
          {children}
        </span>
      </div>
    </GlassCard>
  );
}
