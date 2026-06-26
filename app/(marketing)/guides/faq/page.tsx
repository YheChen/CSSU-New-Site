import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { CTASection } from "@/components/sections/cta-section";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Reveal } from "@/components/ui/motion";
import { faqItems } from "@/data/guides";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQ",
  description:
    "Answering the most popular questions about the CSSU — membership, events, getting involved, and finding internships.",
  path: "/guides/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        label="FAQ"
        title="Frequently asked questions"
        description="Answering your most popular questions about the union and getting involved."
      />

      <SectionContainer spacing="md" width="default">
        <Reveal>
          <FaqAccordion items={faqItems} />
        </Reveal>
      </SectionContainer>

      <CTASection
        title="Didn't find your answer?"
        description={`We're always happy to help — email us at ${siteConfig.email} or reach out on Discord.`}
        actions={[
          { label: "Contact us", href: "/contact", variant: "default" },
          { label: "Browse resources", href: "/resources", variant: "outline" },
        ]}
      />
    </>
  );
}
