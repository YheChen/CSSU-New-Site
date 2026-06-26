import {
  Sparkles,
  Network,
  Rocket,
  Smile,
} from "lucide-react";
import type {
  OpenPosition,
  ProcessStep,
  TimelineItem,
  FaqItem,
  ValueItem,
} from "@/types";

export const joinIntro =
  "The CSSU is built by students, for students. Whether you want to plan events, design our brand, build our tech, or advocate for your peers, there's a place for you on the team — no prior experience required.";

export const openPositions: OpenPosition[] = [
  {
    title: "Academic Associate",
    team: "Academic",
    commitment: "~3 hrs / week",
    summary:
      "Help curate academic resources and run study events that support students across every CS course.",
    responsibilities: [
      "Build and maintain academic resources",
      "Support seminars and study sessions",
      "Gather student feedback on courses",
    ],
    accent: "accent",
  },
  {
    title: "Social Associate",
    team: "Social",
    commitment: "~3 hrs / week",
    summary:
      "Plan and run the socials, game nights, and mixers that bring the CS community together.",
    responsibilities: [
      "Brainstorm and plan social events",
      "Run events on the day",
      "Help grow event attendance",
    ],
    accent: "blue",
  },
  {
    title: "Marketing Associate",
    team: "Marketing",
    commitment: "~3 hrs / week",
    summary:
      "Shape how the community sees the CSSU through design, social media, and communications.",
    responsibilities: [
      "Design graphics and social posts",
      "Help manage our channels",
      "Keep our brand consistent",
    ],
    accent: "gold",
  },
  {
    title: "External Associate",
    team: "External",
    commitment: "~3 hrs / week",
    summary:
      "Build relationships with student groups, sponsors, and industry partners.",
    responsibilities: [
      "Reach out to partners and sponsors",
      "Coordinate collaborations",
      "Support networking events",
    ],
    accent: "bronze",
  },
  {
    title: "Tech Team Developer",
    team: "Tech",
    commitment: "Flexible",
    summary:
      "Build and maintain the tools and websites that power the union — including this one.",
    responsibilities: [
      "Ship features for CSSU projects",
      "Maintain the website and infrastructure",
      "Collaborate over GitHub",
    ],
    accent: "silver",
  },
  {
    title: "Office Operations Volunteer",
    team: "Staff",
    commitment: "1–2 shifts / week",
    summary:
      "Keep the BA2250 lounge running and be a friendly face for everyone who drops by.",
    responsibilities: [
      "Staff the lounge during open hours",
      "Help students and answer questions",
      "Keep the space welcoming and tidy",
    ],
    accent: "accent",
  },
];

export const joinBenefits: ValueItem[] = [
  {
    title: "Build real experience",
    description:
      "Take ownership of events, projects, and initiatives that thousands of students see.",
    icon: Rocket,
  },
  {
    title: "Grow your network",
    description:
      "Work alongside a passionate team and connect with peers, alumni, and industry.",
    icon: Network,
  },
  {
    title: "Shape the community",
    description:
      "Your ideas directly influence how the CS experience feels at UofT.",
    icon: Sparkles,
  },
  {
    title: "Make friends",
    description:
      "The best reason of all — the people you'll meet on the team often become close friends.",
    icon: Smile,
  },
];

export const applicationProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Apply",
    description:
      "Submit the application form and tell us which team you'd like to join and why.",
  },
  {
    step: "02",
    title: "Chat",
    description:
      "Have a short, friendly conversation with the VP leading the team you applied for.",
  },
  {
    step: "03",
    title: "Onboard",
    description:
      "Meet the team, get set up with everything you need, and dive into your first project.",
  },
];

export const joinTimeline: TimelineItem[] = [
  {
    date: "Early September",
    title: "Applications open",
    description: "General Council recruitment opens at the start of the term.",
  },
  {
    date: "Mid September",
    title: "Application deadline",
    description: "Submit your application before the posted deadline.",
  },
  {
    date: "Late September",
    title: "Conversations",
    description: "Shortlisted applicants chat with the relevant VP.",
  },
  {
    date: "Early October",
    title: "Onboarding",
    description: "New associates meet their teams and get started.",
  },
];

export const joinFaq: FaqItem[] = [
  {
    question: "Do I need prior experience?",
    answer:
      "Not at all. We care far more about enthusiasm and reliability than experience. Most of our team learned everything on the job — that's the point.",
  },
  {
    question: "How much time does it take?",
    answer:
      "Most associate roles are a few hours a week, and we always work around your course load. You set expectations with your team lead.",
  },
  {
    question: "Who can apply?",
    answer:
      "Any UofT student in the CS community is welcome to apply. If you're a CS or Data Science student, you're already a member of the union.",
  },
  {
    question: "When can I apply?",
    answer:
      "General Council recruitment runs at the start of each term. Office Operations volunteers are welcomed on a rolling basis — reach out any time.",
  },
];
