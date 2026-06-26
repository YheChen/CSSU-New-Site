import { Github } from "lucide-react";
import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { CTASection } from "@/components/sections/cta-section";
import { Reveal } from "@/components/ui/motion";
import { CTAButton } from "@/components/ui/cta-button";
import { firstYearGuide } from "@/data/guides";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "First Year's Guide to CS",
  description:
    "Everything you need to know for your first year in computer science at the University of Toronto — from the CS POSt to courses, resources, and wellbeing.",
  path: "/guides/first-year-guide",
});

export default function FirstYearGuidePage() {
  return (
    <>
      <PageHeader
        label="Guide · 8 min read"
        title="First Year's Guide to CS"
        description={firstYearGuide.intro}
      >
        <CTAButton
          href={firstYearGuide.githubUrl}
          external
          icon={Github}
          variant="outline"
        >
          Read the full guide on GitHub
        </CTAButton>
      </PageHeader>

      <SectionContainer spacing="md" width="narrow">
        <article className="flex flex-col gap-12">
          {firstYearGuide.sections.map((section, i) => (
            <Reveal as="section" key={section.heading}>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-accent">
                  {`0${i + 1}`}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
                {section.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {section.body.map((paragraph, j) => (
                  <p
                    key={j}
                    className="text-pretty leading-relaxed text-muted-foreground"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </article>
      </SectionContainer>

      <CTASection
        title="Welcome to the community"
        description="You've got this. Come say hi at the lounge, and explore everything the CSSU has to offer."
        actions={[
          { label: "Explore resources", href: "/resources", variant: "default" },
          { label: "Visit the lounge", href: "/ba2250", variant: "outline" },
        ]}
      />
    </>
  );
}
