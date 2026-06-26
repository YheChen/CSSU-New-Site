import type { PartnerGroup, UniversityEntity } from "@/types";

export const communityIntro =
  "Beyond the union, the CS community at UofT is vast. We collaborate with departments and partner organizations, and we maintain a curated list of student-run groups recognized on the University's Student Organization Portal. Want your group listed? Reach out on Discord or email executive@cssu.ca.";

export const universityEntities: UniversityEntity[] = [
  { abbreviation: "ASSU", name: "Arts & Science Students' Union" },
  {
    abbreviation: "BCBSA",
    name: "Bioinformatics & Computational Biology Student Association",
  },
  { abbreviation: "CSSU", name: "Computer Science Student Union" },
  { abbreviation: "DCS", name: "Department of Computer Science" },
  {
    abbreviation: "DCSIL",
    name: "Department of Computer Science Innovation Lab",
  },
];

export const partnerGroups: PartnerGroup[] = [
  {
    campus: "St. George (UTSG)",
    description: "Clubs and design teams based at the downtown campus.",
    organizations: [
      "UTADA",
      "UofT AI",
      "aUToronto",
      "UofT Blueprint",
      "UofTCTF",
      "UTCG",
      "CSSA",
      "DSC UTSG",
      "UTGDDC",
      "UofT Hacks",
      "UTMIST",
      "NeuroTechUofT",
      "UTQC",
      "UTRA",
      "UTWD",
      "WHWC",
      "WICS",
    ],
  },
  {
    campus: "Mississauga (UTM)",
    description: "Computer science and data groups at the Mississauga campus.",
    organizations: ["CSSC", "DSC UTM", "MCSS", "UTM Robotics", "UTMSAM", "WiSC"],
  },
  {
    campus: "Scarborough (UTSC)",
    description: "Recognized clubs at the Scarborough campus.",
    organizations: ["AMACSS", "CSEC"],
  },
];
