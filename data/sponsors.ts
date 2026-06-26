import { Users, Briefcase, FileText, HeartHandshake } from "lucide-react";
import type { SponsorTierInfo, SponsorBenefit, Partner } from "@/types";

export const sponsorIntro =
  "Partnering with the CSSU connects your organization with one of the largest, most engaged computer science communities in Canada — over 5,000 students at the University of Toronto's St. George campus, consistently ranked the top university in Canada.";

export const sponsorSupporters: Partner[] = [
  { name: "Arts & Science Students' Union", initials: "ASSU" },
  { name: "Department of Computer Science", initials: "DCS" },
  { name: "The Office Store", initials: "BA2250" },
];

export interface SponsoredEvent {
  title: string;
  partner: string;
}

/** Real events from the 2025–2026 sponsorship package. */
export const sponsoredEvents: SponsoredEvent[] = [
  { title: "Resume Review Panel", partner: "Dayforce" },
  { title: "Technical Career Workshop", partner: "Google" },
  { title: "Annual Recruitment Breakfast", partner: "CSSU" },
];

export const sponsorBenefits: SponsorBenefit[] = [
  {
    title: "Reach 5,000+ students",
    description:
      "Get in front of every student enrolled in CS programs and courses at UofT St. George — at career fairs, events, and beyond.",
    icon: Users,
  },
  {
    title: "Recruit top talent",
    description:
      "Meet motivated students and new grads at our career events, with access to a resume book of roughly 350 submissions.",
    icon: FileText,
  },
  {
    title: "Host your own events",
    description:
      "Run exclusive, customized sessions — from technical workshops to interview screenings — tailored to your hiring goals.",
    icon: Briefcase,
  },
  {
    title: "Support the community",
    description:
      "Your partnership directly funds the events, resources, and student lounge the whole CS community relies on.",
    icon: HeartHandshake,
  },
];

export const sponsorTiers: SponsorTierInfo[] = [
  {
    tier: "bronze",
    name: "Bronze",
    price: "$600+",
    blurb: "Get in front of the CS community.",
    accent: "bronze",
    benefits: [
      "Admission to 1 career fair or networking event",
      "Promotion of your company and opportunities to students and new grads at events",
    ],
  },
  {
    tier: "silver",
    name: "Silver",
    price: "$1,000+",
    blurb: "Recruit and grow your brand on campus.",
    accent: "silver",
    featured: true,
    benefits: [
      "All Bronze benefits",
      "Admission to all career events, plus the opportunity to host one exclusive, customized event",
      "Access to our resume book — roughly 350 submissions from students and new grads",
    ],
  },
  {
    tier: "gold",
    name: "Gold",
    price: "$2,250+",
    blurb: "Screen and connect with top candidates.",
    accent: "gold",
    benefits: [
      "All Silver benefits",
      "Dedicated interview rooms at career events for one-on-one student screening",
    ],
  },
  {
    tier: "platinum",
    name: "Platinum",
    price: "$3,000+",
    blurb: "Become a defining partner of the CSSU.",
    accent: "platinum",
    benefits: [
      "All Gold benefits",
      "Opportunity to host multiple exclusive, customized events",
      "Year-round promotion of your company and opportunities to students and new grads",
    ],
  },
];
