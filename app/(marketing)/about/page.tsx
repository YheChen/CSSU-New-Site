import { FileText, Building2, Users } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { CTAButton } from "@/components/ui/cta-button";
import { GlassCard } from "@/components/cards/glass-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { AsciiBackdrop } from "@/components/sections/ascii-backdrop";
import { objectives, stats, missionStatement } from "@/data/about";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import type { AccentColor } from "@/types";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about the Computer Science Student Union — a student-governed body representing over 5,000 CS students at the University of Toronto.",
  path: "/about",
});

const accents: AccentColor[] = ["accent", "blue", "gold", "bronze"];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        ascii
        asciiPosition="top-right"
        label="About the CSSU"
        title="Built by students, for students"
        description="The Computer Science Student Union represents over 5,000 CS students at the University of Toronto's St. George campus."
      >
        <CTAButton href="/team">Meet the team</CTAButton>
        <CTAButton href="/constitution" variant="outline" icon={null}>
          Read the constitution
        </CTAButton>
      </PageHeader>

      {/* Mission */}
      <SectionContainer spacing="md" width="wide">
        <Stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem
              key={stat.label}
              className="flex flex-col items-center gap-1.5 bg-background-soft px-4 py-8 text-center"
            >
              <span className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Objectives */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          align="center"
          label="Our mission"
          title="Four ways we serve the community"
          description={missionStatement}
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((item, i) => (
            <StaggerItem key={item.title} className="h-full">
              <FeatureCard item={item} accent={accents[i]} index={`0${i + 1}`} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Governance + funding */}
      <SectionContainer spacing="md" width="wide">
        <AsciiBackdrop position="left" intensity="subtle" />
        <div className="grid gap-5 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <GlassCard className="flex h-full flex-col justify-between gap-6 p-8">
              <div>
                <span className="grid size-12 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                  <FileText className="size-5" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-foreground">
                  Governance
                </h3>
                <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  The CSSU&apos;s structure, rules, and processes are detailed in
                  our constitution. We&apos;re led by an elected Executive Council
                  and supported by a general council of associates across every
                  portfolio.
                </p>
              </div>
              <CTAButton href="/constitution" variant="subtle" className="w-fit">
                Read the constitution
              </CTAButton>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.08}>
            <GlassCard className="flex h-full flex-col gap-5 p-8">
              <span className="grid size-12 place-items-center rounded-xl border border-blue/30 bg-blue/10 text-blue">
                <Building2 className="size-5" />
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                How we&apos;re funded
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li className="border-t border-border pt-3 first:border-t-0 first:pt-0">
                  Arts &amp; Science Students&apos; Union
                </li>
                <li className="border-t border-border pt-3">
                  Department of Computer Science
                </li>
                <li className="border-t border-border pt-3">
                  Our union store in BA2250
                </li>
              </ul>
            </GlassCard>
          </Reveal>
        </div>
      </SectionContainer>

      {/* Council teaser */}
      <SectionContainer spacing="md" width="wide">
        <Reveal>
          <GlassCard glass className="flex flex-col items-center gap-6 p-10 text-center sm:p-14">
            <span className="grid size-12 place-items-center rounded-xl border border-border bg-tint/5 text-foreground">
              <Users className="size-5" />
            </span>
            <h3 className="max-w-2xl text-balance text-section font-semibold tracking-tight text-gradient">
              An Executive Council and 40+ associates, all volunteers
            </h3>
            <p className="max-w-xl text-muted-foreground">
              From academics and social to marketing, finance, and the tech team
              that builds this very website — meet the people behind the union.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton href="/team">Meet the team</CTAButton>
              <CTAButton href="/contact" variant="outline" icon={null}>
                Get in touch
              </CTAButton>
            </div>
          </GlassCard>
        </Reveal>
      </SectionContainer>

      <CTASection
        title="Want to be part of it?"
        description={`Email us at ${siteConfig.email} or explore the ways you can get involved with the CSSU.`}
        actions={[
          { label: "Join the CSSU", href: "/join", variant: "default" },
          { label: "Explore the community", href: "/community", variant: "outline" },
        ]}
      />
    </>
  );
}
