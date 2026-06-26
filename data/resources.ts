import {
  Sparkles,
  Building2,
  FlaskConical,
  BookOpen,
  GraduationCap,
  Users,
  Code2,
  Clapperboard,
  HeartPulse,
} from "lucide-react";
import type { ResourceCategory } from "@/types";

export const resourceCategories: ResourceCategory[] = [
  {
    id: "cssu",
    title: "CSSU Resources",
    description: "Guides and support made by the union, for the community.",
    icon: Sparkles,
    links: [
      {
        title: "CSSU First Year's Guide to CS",
        href: "/guides/first-year-guide",
        description: "Everything you need to know for your first year in CS.",
      },
      {
        title: "Mental Health Resources",
        href: "/resources#mental-health",
        description: "Emergency and ongoing wellbeing support.",
      },
    ],
  },
  {
    id: "department",
    title: "Department of Computer Science",
    description: "Official resources straight from the department.",
    icon: Building2,
    links: [
      {
        title: "Department Student Resources",
        href: "https://web.cs.toronto.edu/undergraduate/current",
        description:
          "A must-see page for those looking to explore and succeed in computer science.",
        external: true,
      },
      {
        title: "CS Courseography",
        href: "https://courseography.cdf.toronto.edu/graph",
        description: "Visualize the sequence of CSC courses.",
        external: true,
      },
    ],
  },
  {
    id: "teaching-labs",
    title: "Teaching Laboratories",
    description:
      "CS major and specialist students get 300 free pages of printing each semester in Bahen.",
    icon: FlaskConical,
    links: [
      {
        title: "CS Teaching Labs Intro",
        href: "https://www.teach.cs.toronto.edu/resources/introduction-for-new-students-using-the-teach-cs-labs/",
        description: "Introduction for new students using the Teaching Labs.",
        external: true,
      },
      {
        title: "Using Teaching Labs",
        href: "https://www.teach.cs.toronto.edu/using-labs/",
        external: true,
      },
    ],
  },
  {
    id: "faculty",
    title: "Faculty of Arts & Science",
    description: "Academic advising, programs, and timetable planning.",
    icon: BookOpen,
    links: [
      {
        title: "Student Resources",
        href: "https://www.artsci.utoronto.ca/current/academic-advising-and-support/online-resources-students",
        external: true,
      },
      {
        title: "CS Courses & Programs",
        href: "https://artsci.calendar.utoronto.ca/section/Computer-Science",
        external: true,
      },
      {
        title: "Arts & Science Timetable",
        href: "https://ttb.utoronto.ca",
        external: true,
      },
    ],
  },
  {
    id: "uoft",
    title: "University of Toronto",
    description: "Tools and archives available to every UofT student.",
    icon: GraduationCap,
    links: [
      {
        title: "Past Exams Repository",
        href: "https://login.library.utoronto.ca/index.php?url=https://exams.library.utoronto.ca",
        external: true,
      },
      {
        title: "UofT Writing Centres",
        href: "https://writing.utoronto.ca/writing-centres/",
        external: true,
      },
      {
        title: "Free Courses on Coursera",
        href: "https://onlinelearning.utoronto.ca/coursera-sgs/",
        external: true,
      },
      {
        title: "Free Courses on Class Central",
        href: "https://www.classcentral.com/university/utoronto",
        external: true,
      },
      {
        title: "UofTHub",
        href: "https://uofthub.ca/",
        description: "Information about courses.",
        external: true,
      },
    ],
  },
  {
    id: "community",
    title: "Community",
    description: "Find your people across UofT's computer science community.",
    icon: Users,
    links: [
      {
        title: "UofT Discord Student Hub",
        href: "https://discord.gg/2yNfRKXCvq",
        description: "Central hub for various UofT Discord servers.",
        external: true,
      },
      {
        title: "CSSU Discord Server",
        href: "https://discord.gg/R9hneMaafD",
        external: true,
      },
      {
        title: "Unofficial UofT CS Discord",
        href: "https://discord.gg/QrT4w8Qyx2",
        external: true,
      },
      {
        title: "Student Groups on Campus",
        href: "/community",
        description: "Browse recognized clubs across all three campuses.",
      },
    ],
  },
  {
    id: "software",
    title: "Free Software",
    description: "Industry-grade tools, free with your UofT credentials.",
    icon: Code2,
    links: [
      {
        title: "GitHub Student Developer Pack",
        href: "https://education.github.com/pack",
        description: "JetBrains, Azure, and dozens more.",
        external: true,
      },
      {
        title: "OnTheHub",
        href: "https://uoft.onthehub.com/WebStore/Security/Signin.aspx?rurl=%2FWebStore%2FOfferingDetails.aspx%3Fo%3D499fe89c-cb3a-e511-940f-b8ca3a5db7a1",
        description: "Windows Education, Adobe CC, and more.",
        external: true,
      },
      {
        title: "Microsoft Office 365",
        href: "https://www.office.com/",
        description: "Sign in with your UofT email.",
        external: true,
      },
      {
        title: "Zoom",
        href: "https://utoronto.zoom.us/",
        external: true,
      },
      {
        title: "UofT VPN",
        href: "https://isea.utoronto.ca/services/vpn/utorvpn/users/",
        external: true,
      },
    ],
  },
  {
    id: "media",
    title: "Free Media",
    description: "Film and music libraries for a well-earned break.",
    icon: Clapperboard,
    links: [
      {
        title: "UofT Criterion-on-Demand",
        href: "https://mediacommons.library.utoronto.ca/criterion-demand",
        external: true,
      },
      {
        title: "Kanopy",
        href: "https://utoronto.kanopy.com/",
        external: true,
      },
      {
        title: "Naxos Music Library",
        href: "https://login.library.utoronto.ca/index.php?url=http://utoronto.naxosmusiclibrary.com/homepage.asp",
        external: true,
      },
    ],
  },
];

export interface MentalHealthResource {
  title: string;
  href?: string;
  phone?: string;
  description?: string;
}

export interface MentalHealthGroup {
  title: string;
  resources: MentalHealthResource[];
}

export const mentalHealthIcon = HeartPulse;

export const mentalHealthIntro =
  "Your wellbeing comes first. If you are feeling desperate, hopeless, or having suicidal thoughts, please seek help immediately. Call 911 if you are at immediate risk.";

export const mentalHealthGroups: MentalHealthGroup[] = [
  {
    title: "24/7 Emergency Counselling",
    resources: [
      {
        title: "U of T My Student Support Program (My SSP)",
        href: "https://mentalhealth.utoronto.ca/my-student-support-program/",
        phone: "1-844-451-9700 · Outside North America: 001-416-380-6578",
      },
      {
        title: "Good2Talk Student Helpline",
        href: "https://good2talk.ca/",
        phone: "1-866-925-5454",
        description:
          "Professional counselling, information, and referrals for mental health, addictions, and wellbeing.",
      },
    ],
  },
  {
    title: "Distress & Accessibility",
    resources: [
      {
        title: "Feeling Distressed (PDF)",
        href: "https://studentlife.utoronto.ca/wp-content/uploads/Feeling-distressed.pdf",
        description:
          "Covers 24/7 emergency, mental health, academic, financial, housing, safety, and equity resources.",
      },
      {
        title: "Accessibility Services",
        href: "https://studentlife.utoronto.ca/department/accessibility-services/",
        phone: "416-978-8060 · accessibility.services@utoronto.ca",
        description:
          "Disability supports, coursework and exam accommodations, and student socials.",
      },
    ],
  },
  {
    title: "Ongoing Support",
    resources: [
      {
        title: "Student Mental Health Website",
        href: "https://mentalhealth.utoronto.ca/",
        description:
          "Search and filter mental health resources across all three campuses.",
      },
    ],
  },
];
