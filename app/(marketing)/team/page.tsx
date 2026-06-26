import { Users2 } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { GlassCard } from "@/components/cards/glass-card";
import { ExecutiveCard } from "@/components/cards/executive-card";
import { Badge } from "@/components/ui/badge";
import { executives, councilGroups, academicYear } from "@/data/team";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Team",
  description:
    "Meet the CSSU Executive Council and General Council — the students serving the computer science community at the University of Toronto.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        label={`Executive Council ${academicYear}`}
        title="Meet the council"
        description="A team of students working year-round to build community, create opportunities, and advocate for computer science at UofT."
      />

      {/* Executives */}
      <SectionContainer spacing="md" width="wide">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {executives.map((exec) => (
            <StaggerItem key={exec.name} className="h-full">
              <ExecutiveCard exec={exec} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      {/* General Council */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          align="center"
          label="General Council"
          title="The associates who make it happen"
          description="Beyond the executives, dozens of associates power every portfolio — from academics and social to marketing, finance, and tech."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {councilGroups.map((group) => (
            <StaggerItem key={group.team} className="h-full">
              <GlassCard interactive className="flex h-full flex-col p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-foreground">
                    {group.team}
                  </h3>
                  <span className="grid size-9 place-items-center rounded-full border border-border bg-tint/[0.02] text-muted-foreground">
                    <Users2 className="size-4" />
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.members.map((member) => (
                    <Badge key={member}>{member}</Badge>
                  ))}
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      <CTASection
        label="Join the team"
        title="There's a seat for you"
        description="Applications for General Council open each term, and Office Operations volunteers are always welcome."
        actions={[
          { label: "See open positions", href: "/join", variant: "default" },
          { label: "Contact us", href: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
