import { Building2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/motion";
import { GlassCard } from "@/components/cards/glass-card";
import { Badge } from "@/components/ui/badge";
import {
  communityIntro,
  universityEntities,
  partnerGroups,
} from "@/data/community";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Community",
  description:
    "Explore the wider CS community at UofT — partner departments and the student-run groups recognized across all three campuses.",
  path: "/community",
});

export default function CommunityPage() {
  return (
    <>
      <PageHeader
        label="Community"
        title="The wider CS community"
        description={communityIntro}
      />

      {/* University entities */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          label="University partners"
          title="Departments & unions we work with"
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {universityEntities.map((entity) => (
            <StaggerItem key={entity.abbreviation} className="h-full">
              <GlassCard interactive className="flex h-full items-center gap-4 p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-xs font-semibold text-accent">
                  {entity.abbreviation}
                </span>
                <span className="text-sm text-foreground/90">{entity.name}</span>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* Student groups */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          label="Student groups"
          title="Clubs across all three campuses"
          description="Student-run groups recognized by the University on the Student Organization Portal. Want your group listed? Reach out on Discord or email us."
        />
        <div className="mt-12 flex flex-col gap-5">
          {partnerGroups.map((group) => (
            <Reveal key={group.campus}>
              <GlassCard className="p-7 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-blue/30 bg-blue/10 text-blue">
                    <Building2 className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {group.campus}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {group.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.organizations.map((org) => (
                    <Badge key={org} variant="outline">
                      {org}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </SectionContainer>

      <CTASection
        label="Get listed"
        title="Run a CS student group?"
        description={`We'd love to feature you. Email us at ${siteConfig.executiveEmail} or reach out on Discord to be added to the list.`}
        actions={[
          {
            label: "Join our Discord",
            href: "https://discord.gg/R9hneMaafD",
            variant: "default",
            external: true,
          },
          { label: "Contact us", href: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
