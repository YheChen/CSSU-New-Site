import { FileText, Scale, Vote, ScrollText } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/motion";
import { CTAButton } from "@/components/ui/cta-button";
import { GlassCard } from "@/components/cards/glass-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import type { ValueItem, AccentColor } from "@/types";

export const metadata = createMetadata({
  title: "Constitution",
  description:
    "The CSSU constitution defines the union's structure, rules, and processes — read the full document and learn how we govern ourselves.",
  path: "/constitution",
});

const highlights: ValueItem[] = [
  {
    title: "Structure",
    description:
      "Defines the Executive Council, General Council, and the roles and responsibilities of each portfolio.",
    icon: Scale,
  },
  {
    title: "Elections",
    description:
      "Sets out how executives are elected and how the union is held accountable to its members.",
    icon: Vote,
  },
  {
    title: "Membership",
    description:
      "Establishes who is a member of the union and the rights that membership confers.",
    icon: ScrollText,
  },
];

const accents: AccentColor[] = ["accent", "blue", "gold"];

export default function ConstitutionPage() {
  return (
    <>
      <PageHeader
        label="Governance"
        title="The CSSU Constitution"
        description="Our structure, rules, and processes are detailed in the constitution. It's the foundation of how the union operates and serves its members."
      >
        <CTAButton href={siteConfig.constitutionUrl} external icon={FileText}>
          View the constitution (PDF)
        </CTAButton>
      </PageHeader>

      <SectionContainer spacing="md" width="wide">
        <Stagger className="grid gap-5 md:grid-cols-3">
          {highlights.map((item, i) => (
            <StaggerItem key={item.title} className="h-full">
              <FeatureCard item={item} accent={accents[i]} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      <SectionContainer spacing="sm" width="default">
        <Reveal>
          <GlassCard glass className="flex flex-col items-center gap-6 p-10 text-center sm:p-14">
            <span className="grid size-14 place-items-center rounded-2xl border border-accent/30 bg-accent/10 text-accent">
              <FileText className="size-6" />
            </span>
            <h2 className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Read the full document
            </h2>
            <p className="max-w-md text-muted-foreground">
              The complete constitution is available as a PDF. Have a question
              about governance? We&apos;re always happy to explain.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <CTAButton href={siteConfig.constitutionUrl} external icon={FileText}>
                Open PDF
              </CTAButton>
              <CTAButton href="/contact" variant="outline" icon={null}>
                Ask a question
              </CTAButton>
            </div>
          </GlassCard>
        </Reveal>
      </SectionContainer>

      <CTASection
        title="Want to get involved in governance?"
        description="Run for an executive position or join General Council to help shape the union's direction."
        actions={[
          { label: "Join the team", href: "/join", variant: "default" },
          { label: "Meet the council", href: "/team", variant: "outline" },
        ]}
      />
    </>
  );
}
