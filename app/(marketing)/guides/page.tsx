import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/motion";
import { CTAButton } from "@/components/ui/cta-button";
import { GuideCard } from "@/components/cards/guide-card";
import { guides, faqItems } from "@/data/guides";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Student Guides",
  description:
    "Guides and answers for computer science students at UofT — from the first-year guide to frequently asked questions and curated resources.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <>
      <PageHeader
        label="Student guides"
        title="Find your way around CS"
        description="Practical guides written by students who've been there — covering your first year, common questions, and where to find help."
      />

      <SectionContainer spacing="md" width="wide">
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <StaggerItem key={guide.slug} className="h-full">
              <GuideCard guide={guide} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      <SectionContainer spacing="md" width="default">
        <SectionHeader
          align="center"
          label="FAQ"
          title="Frequently asked questions"
          description="The questions we hear most often. Have another? Just ask."
        />
        <Reveal className="mt-12">
          <FaqAccordion items={faqItems} />
        </Reveal>
        <Reveal className="mt-8 flex justify-center">
          <CTAButton href="/guides/faq" variant="outline">
            View the full FAQ
          </CTAButton>
        </Reveal>
      </SectionContainer>

      <CTASection
        title="Still have questions?"
        description="Drop by the BA2250 lounge, join our Discord, or send us a message — we're happy to help."
        actions={[
          { label: "Contact us", href: "/contact", variant: "default" },
          { label: "Visit the lounge", href: "/ba2250", variant: "outline" },
        ]}
      />
    </>
  );
}
