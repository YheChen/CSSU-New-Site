import { PageHeader } from "@/components/layout/page-header";
import { SectionContainer } from "@/components/sections/section-container";
import { SectionHeader } from "@/components/sections/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { Stagger, StaggerItem } from "@/components/ui/motion";
import { EventCard } from "@/components/cards/event-card";
import { events, eventsIntro } from "@/data/events";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Events",
  description:
    "Socials, seminars, networking nights, and more from the Computer Science Student Union at the University of Toronto.",
  path: "/events",
});

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === "upcoming");
  const past = events.filter((e) => e.status === "past");

  return (
    <>
      <PageHeader label="Events" title="Come hang out with us" description={eventsIntro} />

      {/* Upcoming */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader label="Upcoming" title="Save the date" />
        {upcoming.length > 0 ? (
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event) => (
              <StaggerItem key={event.slug} className="h-full">
                <EventCard event={event} />
              </StaggerItem>
            ))}
          </Stagger>
        ) : (
          <p className="mt-8 text-muted-foreground">
            No upcoming events right now — check back soon, or follow us on social
            media to be the first to know.
          </p>
        )}
      </SectionContainer>

      {/* Past */}
      <SectionContainer spacing="md" width="wide">
        <SectionHeader
          label="Past events"
          title="A look back"
          description="A taste of what we've run recently. Seminars are usually recorded and shared afterward."
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {past.map((event) => (
            <StaggerItem key={event.slug} className="h-full">
              <EventCard event={event} />
            </StaggerItem>
          ))}
        </Stagger>
      </SectionContainer>

      <CTASection
        label="Don't miss out"
        title="Stay in the loop"
        description="Follow us on Instagram and join our Discord to hear about every event the moment it's announced."
        actions={[
          {
            label: "Join the Discord",
            href: "https://discord.gg/R9hneMaafD",
            variant: "default",
            external: true,
          },
          { label: "Get in touch", href: "/contact", variant: "outline" },
        ]}
      />
    </>
  );
}
