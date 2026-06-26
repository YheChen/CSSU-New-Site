import {
  ShoppingBasket,
  CookingPot,
  Gamepad2,
  Library,
  BookMarked,
  type LucideIcon,
} from "lucide-react";

export const loungeIntro =
  "BA2250 is the CSSU student lounge — a place to hang out, network, play games, and ask questions. It's the home base of the computer science community at UofT.";

export interface Amenity {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const amenities: Amenity[] = [
  {
    title: "The Store",
    description:
      "Snacks and beverages by debit, credit (minimum $1), or cash — plus very cheap ice cream sandwiches. A free / loan shelf is available too.",
    icon: ShoppingBasket,
  },
  {
    title: "Kitchenette",
    description:
      "Fridge, sink, microwave, kettle, and basic utensils and tools for whenever you need them.",
    icon: CookingPot,
  },
  {
    title: "Gaming Centre",
    description:
      "An entertainment and gaming centre with a variety of modern, arcade, retro, and party games.",
    icon: Gamepad2,
  },
  {
    title: "Library",
    description:
      "Books on mathematics, algorithms, data structures, programming, and philosophy. Borrow by depositing a UofT or government ID.",
    icon: Library,
  },
  {
    title: "Study Spaces",
    description:
      "Quiet spaces for focused work between lectures, available for student use throughout the day.",
    icon: BookMarked,
  },
];

export const codeOfConduct: string[] = [
  "Maintain respect and inclusivity, and follow the UofT Code of Student Conduct.",
  "Don't remove lounge property without Executive Council permission.",
  "Clean kitchen items after use.",
  "Return gaming controllers properly.",
  "Report any issues to the volunteers on duty.",
  "No sleeping that blocks normal use of the space.",
  "Respect volunteers, and report problems to the CSSU.",
];

export const loungeSchedule =
  "We are still deciding on the schedule — check back later! In the meantime, email us and we'll let you know when the lounge is open.";
