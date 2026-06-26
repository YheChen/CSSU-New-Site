import { CalendarClock, MapPin, ShieldCheck, Camera } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/motion";
import { CTAButton } from "@/components/ui/cta-button";
import { GlassCard } from "@/components/cards/glass-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { amenities, codeOfConduct, loungeIntro, loungeSchedule } from "@/data/lounge";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import type { AccentColor } from "@/types";

export const metadata = createMetadata({
  title: "Student Lounge — BA2250",
  description:
    "BA2250 is the CSSU student lounge in the Bahen Centre — a place to hang out, network, play games, study, and grab a snack.",
  path: "/ba2250",
});

const amenityAccents: AccentColor[] = ["accent", "blue", "gold", "bronze", "silver"];

export default function LoungePage() {
  return (
    <>
      <PageHeader
        label="BA2250 · Bahen Centre"
        title="The CSSU student lounge"
        description={loungeIntro}
      >
        <CTAButton href="#visit">Plan your visit</CTAButton>
        <CTAButton href="/contact" variant="outline" icon={null}>
          Ask a question
        </CTAButton>
      </PageHeader>

      {/* Amenities */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          label="What's inside"
          title="Everything you need between classes"
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, i) => (
            <StaggerItem key={amenity.title} className="h-full">
              <FeatureCard item={amenity} accent={amenityAccents[i]} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Code of conduct + visit */}
      <SectionContainer id="visit" spacing="md" width="wide">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <GlassCard className="flex h-full flex-col p-8">
              <span className="grid size-12 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                Code of conduct
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A few simple rules keep the lounge welcoming for everyone.
              </p>
              <ol className="mt-6 flex flex-col gap-3.5">
                {codeOfConduct.map((rule, i) => (
                  <li key={rule} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-tint/5 font-mono text-[11px] text-muted-foreground">
                      {i + 1}
                    </span>
                    <span className="text-foreground/90">{rule}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 inline-flex items-center gap-2 text-xs text-subtle-foreground">
                <Camera className="size-3.5" />
                A security camera is present in the room.
              </p>
            </GlassCard>
          </Reveal>

          <div className="flex flex-col gap-5">
            <Reveal>
              <GlassCard className="flex flex-col gap-4 p-8">
                <span className="grid size-12 place-items-center rounded-xl border border-blue/30 bg-blue/10 text-blue">
                  <CalendarClock className="size-5" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">Hours</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {loungeSchedule}
                </p>
                <CTAButton
                  href={`mailto:${siteConfig.email}`}
                  external
                  variant="subtle"
                  className="w-fit"
                  icon={null}
                >
                  Email us about hours
                </CTAButton>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.08}>
              <GlassCard className="flex flex-col gap-4 p-8">
                <span className="grid size-12 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                  <MapPin className="size-5" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">Find us</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {siteConfig.address}, University of Toronto St. George campus.
                </p>
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </SectionContainer>

      <CTASection
        title="Come hang out"
        description="Whether you want to study, game, or just say hi — the lounge is the heart of the CS community. We'll see you there."
        actions={[
          { label: "Get involved", href: "/join", variant: "default" },
          { label: "Explore events", href: "/events", variant: "outline" },
        ]}
      />
    </>
  );
}
