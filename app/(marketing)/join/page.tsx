import { Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/cards/glass-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { AsciiBackdrop } from "@/components/sections/ascii-backdrop";
import {
  joinIntro,
  openPositions,
  joinBenefits,
  applicationProcess,
  joinTimeline,
  joinFaq,
} from "@/data/join";
import { getAccent } from "@/lib/accent";
import { cn } from "@/lib/utils";
import { createMetadata } from "@/lib/seo";
import type { AccentColor } from "@/types";

export const metadata = createMetadata({
  title: "Join Us",
  description:
    "Join the CSSU. Explore open positions across our teams, learn how to apply, and become part of the council serving UofT's CS community.",
  path: "/join",
});

const benefitAccents: AccentColor[] = ["accent", "blue", "gold", "bronze"];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        ascii
        asciiPosition="top-right"
        label="Join the team"
        title="Help shape CS at UofT"
        description={joinIntro}
      >
        <CTAButton href="/contact">Apply now</CTAButton>
        <CTAButton href="#positions" variant="outline" icon={null}>
          See open roles
        </CTAButton>
      </PageHeader>

      {/* Benefits */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          align="center"
          label="Why join"
          title="More than a line on your resume"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {joinBenefits.map((benefit, i) => (
            <StaggerItem key={benefit.title} className="h-full">
              <FeatureCard item={benefit} accent={benefitAccents[i]} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Open positions */}
      <SectionContainer id="positions" spacing="md" width="wide">
        <AsciiBackdrop position="right" intensity="subtle" />
        <SectionHeader
          label="Open positions"
          title="Find your team"
          description="General Council associate roles open each term. No prior experience required — just bring your enthusiasm."
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {openPositions.map((position) => {
            const accent = getAccent(position.accent);
            return (
              <StaggerItem key={position.title} className="h-full">
                <GlassCard interactive className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between gap-3">
                    <Badge className={cn(accent.bg, accent.border, accent.text)}>
                      {position.team}
                    </Badge>
                    <span className="inline-flex items-center gap-1.5 text-xs text-subtle-foreground">
                      <Clock className="size-3.5" />
                      {position.commitment}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {position.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {position.summary}
                  </p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5 text-sm text-muted-foreground">
                    {position.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2.5">
                        <span
                          className={cn(
                            "mt-1.5 size-1.5 shrink-0 rounded-full",
                            accent.solid,
                          )}
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                  <CTAButton
                    href="/contact"
                    variant="subtle"
                    className="mt-6 w-fit"
                  >
                    Apply
                  </CTAButton>
                </GlassCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </SectionContainer>

      {/* Process */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          align="center"
          label="How it works"
          title="A simple, friendly process"
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {applicationProcess.map((step) => (
            <StaggerItem key={step.step} className="h-full">
              <GlassCard className="flex h-full flex-col gap-4 p-8">
                <span className="font-mono text-3xl font-semibold text-accent">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Timeline */}
      <SectionContainer spacing="md" width="default">
        <SectionHeader
          label="Timeline"
          title="What to expect, and when"
          description="Recruitment runs at the start of each term. Office Operations volunteers are welcomed on a rolling basis."
        />
        <div className="mt-12">
          <ol className="relative flex flex-col gap-8 border-l border-border pl-8">
            {joinTimeline.map((item) => (
              <Reveal as="li" key={item.title} className="relative">
                <span className="absolute -left-[2.35rem] top-1 grid size-5 place-items-center rounded-full border border-accent/40 bg-background">
                  <span className="size-2 rounded-full bg-accent" />
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  {item.date}
                </span>
                <h3 className="mt-1.5 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </SectionContainer>

      {/* FAQ */}
      <SectionContainer spacing="md" width="default">
        <SectionHeader align="center" label="FAQ" title="Questions, answered" />
        <Reveal className="mt-12">
          <FaqAccordion items={joinFaq} />
        </Reveal>
      </SectionContainer>

      <CTASection
        label="Ready to apply?"
        title="We'd love to have you"
        description="Office Ops, General Council, or executive roles — take the first step and reach out today."
        actions={[
          { label: "Apply now", href: "/contact", variant: "default" },
          { label: "Meet the team", href: "/team", variant: "outline" },
        ]}
      />
    </>
  );
}
