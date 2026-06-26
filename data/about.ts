import { Users, Briefcase, GraduationCap, Megaphone } from "lucide-react";
import type { ValueItem, StatItem } from "@/types";

export const missionStatement =
  "We are a student-governed body that receives funding from the Arts & Science Students' Union, the Department of Computer Science, and our union store. Everything we do is in service of the computer science community at the University of Toronto.";

export const objectives: ValueItem[] = [
  {
    title: "Social Activities",
    description:
      "Organizing social events to help students make friends in their program and form networks of mutual support.",
    icon: Users,
  },
  {
    title: "Professional Development",
    description:
      "Offering networking and professional skill development opportunities to prepare students for their careers.",
    icon: Briefcase,
  },
  {
    title: "Academic Opportunities",
    description:
      "Presenting resources and opportunities to help students embed themselves in the world of academic computer science.",
    icon: GraduationCap,
  },
  {
    title: "Undergrad & Department Liaison",
    description:
      "Empowering students in their studies and advocating for their interests at the departmental, faculty, and university levels.",
    icon: Megaphone,
  },
];

export const stats: StatItem[] = [
  { value: "5,000+", label: "CS students represented" },
  { value: "9", label: "Executive portfolios" },
  { value: "40+", label: "General council members" },
  { value: "24/7", label: "Student community" },
];
