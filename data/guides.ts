import {
  HelpCircle,
  Compass,
  LibraryBig,
  HeartPulse,
} from "lucide-react";
import type { Guide, FaqItem, NewsItem } from "@/types";

export const guides: Guide[] = [
  {
    slug: "first-year-guide",
    title: "First Year's Guide to CS",
    description: "Everything you need to know for your first year in CS.",
    category: "Guide",
    readingTime: "8 min read",
    icon: Compass,
    accent: "accent",
    href: "/guides/first-year-guide",
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions",
    description: "Answering your most popular questions about the union.",
    category: "FAQ",
    readingTime: "4 min read",
    icon: HelpCircle,
    accent: "blue",
    href: "/guides/faq",
  },
  {
    slug: "resources",
    title: "Student Resources",
    description: "A curated list of resources for every CS student.",
    category: "Resources",
    readingTime: "Reference",
    icon: LibraryBig,
    accent: "gold",
    href: "/resources",
  },
  {
    slug: "mental-health",
    title: "Mental Health Resources",
    description: "Emergency and ongoing wellbeing support at UofT.",
    category: "Wellbeing",
    readingTime: "Reference",
    icon: HeartPulse,
    accent: "bronze",
    href: "/resources#mental-health",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How do I become a member?",
    answer:
      "Membership is automatic. Faculty of Arts & Science students enrolled in Computer Science or Data Science programs, or in CS Department courses, automatically qualify — provided they've paid their ASSU student fees, as set out in our constitution. There's nothing to sign up for: if you're a CS student here, you're already part of the CSSU.",
  },
  {
    question: "Are events recorded?",
    answer:
      "We attempt to record events when it is both appropriate and consensual. Seminars and talks are typically recorded, while networking sessions and social events generally are not, to keep them comfortable for everyone attending.",
  },
  {
    question:
      "How do I get involved with CS at the university? What about the CSSU?",
    answer:
      "Start by exploring our curated community page listing student groups across all three campuses, and come to CSSU events. To get involved with the union directly, you can volunteer for Office Operations in the BA2250 lounge, join General Council as an associate, or run for an Executive Council position during elections.",
  },
  {
    question: "How can I find internship and work study opportunities?",
    answer:
      "Great resources include CLNx, the Arts & Science Internship Program, and Department of Computer Science initiatives like the Technology Leadership Initiative and the Computer Science Undergrads Quercus. Beyond UofT, LinkedIn job listings and the PittCSC internship lists are excellent places to look.",
  },
];

export interface GuideSection {
  heading: string;
  body: string[];
}

export const firstYearGuide: {
  intro: string;
  githubUrl: string;
  sections: GuideSection[];
} = {
  intro:
    "Starting computer science at UofT is exciting — and a little overwhelming. This guide collects the essentials so you can spend less time figuring out logistics and more time enjoying first year. The full, continuously-updated guide is maintained by the CSSU on GitHub.",
  githubUrl: "https://github.com/cssu",
  sections: [
    {
      heading: "Welcome to CS at UofT",
      body: [
        "You're now part of a community of more than five thousand computer science students at the St. George campus. The CSSU exists to make that community feel smaller and friendlier — through events, the BA2250 lounge, and the people you'll meet along the way.",
        "First year is about exploring. You don't need to have everything figured out. Focus on building good habits, meeting people, and getting comfortable with the tools and resources available to you.",
      ],
    },
    {
      heading: "Getting into the CS program (POSt)",
      body: [
        "At UofT, you apply to your Program of Study (POSt) after completing your first year. For computer science this is a competitive process based on your grades in a set of required first-year courses.",
        "Check the Faculty of Arts & Science Calendar for the current admission requirements, and use CS Courseography to visualize how courses connect. Aim to do well in your foundational courses, but remember that one tough mark is rarely the end of the road — advisors and the department are there to help.",
      ],
    },
    {
      heading: "Choosing your first-year courses",
      body: [
        "Your timetable will typically blend introductory programming, calculus, and linear algebra with a breadth of electives. Use the Arts & Science Timetable to plan, and balance your heavier technical courses with subjects you genuinely enjoy.",
        "Don't overload yourself. A sustainable schedule that leaves room for clubs, rest, and a social life will serve you better than a packed one you can't keep up with.",
      ],
    },
    {
      heading: "Make the most of your resources",
      body: [
        "As a CS student you have access to free industry software through the GitHub Student Developer Pack and OnTheHub, 300 free pages of printing per semester in the Bahen Teaching Labs, and a deep archive of past exams through the library.",
        "Browse the CSSU resources page for the full list — it's one of the highest-value bookmarks you'll make this year.",
      ],
    },
    {
      heading: "Get involved",
      body: [
        "The fastest way to feel at home is to show up. Drop by the BA2250 lounge between classes, come to CSSU socials and seminars, and check out the dozens of student groups on our community page — from UofT Hacks and UTMIST to design teams and competitive programming.",
        "When you're ready to give back, you can volunteer for Office Operations, join General Council, or run for an executive role. Everyone on the team started as a first year once.",
      ],
    },
    {
      heading: "Look after yourself",
      body: [
        "University is a marathon, not a sprint. If you're ever struggling, you are not alone and help is available — from 24/7 counselling lines to academic advising and accessibility services.",
        "Our resources page has a dedicated mental health section. Bookmark it now, before you need it.",
      ],
    },
  ],
};

export const newsItems: NewsItem[] = [
  {
    slug: "first-year-guide",
    title: "First Year's Guide to CS",
    excerpt:
      "New and updated for the incoming class — everything you need to know to start strong in computer science.",
    date: "Updated Jan 2026",
    category: "Guide",
    href: "/guides/first-year-guide",
    accent: "accent",
  },
  {
    slug: "lounge",
    title: "The BA2250 lounge is open",
    excerpt:
      "Snacks, games, study spaces, and very cheap ice cream sandwiches — the community's home base is ready for you.",
    date: "This semester",
    category: "Community",
    href: "/ba2250",
    accent: "bronze",
  },
  {
    slug: "join",
    title: "Join the council",
    excerpt:
      "Office Ops, General Council, and executive roles — there's a place for you on the team.",
    date: "Recruiting now",
    category: "Get Involved",
    href: "/join",
    accent: "blue",
  },
];
