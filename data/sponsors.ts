import { Users, Sparkles, Target, HeartHandshake } from "lucide-react";
import type { SponsorTierInfo, SponsorBenefit, Partner } from "@/types";

export const sponsorIntro =
  "Partnering with the CSSU connects your organization with one of the largest, most engaged computer science communities in Canada — over 5,000 students at the University of Toronto's St. George campus.";

export const sponsorSupporters: Partner[] = [
  { name: "Arts & Science Students' Union", initials: "ASSU" },
  { name: "Department of Computer Science", initials: "DCS" },
  { name: "CS Innovation Lab", initials: "DCSIL" },
  { name: "The Union Store", initials: "BA2250" },
];

export const sponsorBenefits: SponsorBenefit[] = [
  {
    title: "Reach 5,000+ students",
    description:
      "Get in front of the entire CS community through our events, newsletter, social channels, and the BA2250 lounge.",
    icon: Users,
  },
  {
    title: "Build your brand on campus",
    description:
      "Premium placement across our website and at flagship events keeps your organization top of mind all year.",
    icon: Sparkles,
  },
  {
    title: "Recruit top talent",
    description:
      "Run info sessions, tech talks, and recruiting drives that put your roles in front of motivated candidates.",
    icon: Target,
  },
  {
    title: "Support the community",
    description:
      "Your contribution directly funds events, resources, and the student lounge that the whole community relies on.",
    icon: HeartHandshake,
  },
];

export const sponsorTiers: SponsorTierInfo[] = [
  {
    tier: "bronze",
    name: "Bronze",
    price: "$250",
    blurb: "Get on the radar of the CS community.",
    accent: "bronze",
    benefits: [
      "Logo on the CSSU sponsors page",
      "Shout-out in our newsletter",
      "Thank-you across our social channels",
    ],
  },
  {
    tier: "silver",
    name: "Silver",
    price: "$500",
    blurb: "Grow your presence with the community.",
    accent: "silver",
    benefits: [
      "Everything in Bronze",
      "Logo featured at one CSSU event",
      "A dedicated social media post",
      "Share one opportunity with our mailing list",
    ],
  },
  {
    tier: "gold",
    name: "Gold",
    price: "$1,000",
    blurb: "Recruit and build brand affinity on campus.",
    accent: "gold",
    featured: true,
    benefits: [
      "Everything in Silver",
      "Branding at our flagship networking night",
      "A speaking slot or info session",
      "Candidate access for one recruiting term",
    ],
  },
  {
    tier: "platinum",
    name: "Platinum",
    price: "$2,500",
    blurb: "Become a defining partner of the CSSU.",
    accent: "platinum",
    benefits: [
      "Everything in Gold",
      "Title sponsorship of a flagship event",
      "Premium logo placement on site & in the lounge",
      "Two info sessions or tech talks per year",
      "First access to recruit from 5,000+ students",
    ],
  },
];
