export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  durationLabel: string;
  startLabel: string;
  endLabel: string;
  summary: string;
  highlights: string[];
  tech?: string[];
};

/**
 * Source of truth: personal_info.dart (Saubhagyam Aug 2020–Jan 2022,
 * Kody Jan 2022–Present). Ordered oldest first.
 * Spice domain specifics stay unstated until confirmed.
 */
export const experience: ExperienceEntry[] = [
  {
    company: "Saubhagyam Web Pvt. Ltd.",
    role: "Flutter Developer",
    period: "Aug 2020 – Jan 2022",
    durationLabel: "~1.5 years",
    startLabel: "Aug 2020",
    endLabel: "Jan 2022",
    summary:
      "Cross-platform Flutter development across the full product lifecycle — MVP to release — for B2B and B2C products spanning robotics, fintech, and e-learning.",
    highlights: [],
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
  {
    company: "Kody Technolab Limited",
    role: "Flutter Developer",
    period: "Jan 2022 – Present",
    durationLabel: "~4.5 years",
    startLabel: "Jan 2022",
    endLabel: "Present",
    summary:
      "Flutter development across educational, communication, and real-time data-driven products — architecture through App Store deployment.",
    highlights: [
      "Designed, architected, and shipped high-performance Flutter applications serving enterprise, fintech, communication, education, and robotics domains.",
      "Drove end-to-end engineering ownership, translating product requirements into scalable mobile architectures and reliable production releases.",
      "Developed the mobile applications for the Odigo robotics platform, integrating ROS, real-time communication protocols, and hardware interfaces to support live commercial deployments.",
      "Managed a team of three engineers, establishing engineering best practices through code reviews, sprint planning, mentoring, and collaborative delivery.",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "ROS",
      "WebSockets",
      "WebRTC",
      "Riverpod",
    ],
  },
];

export const experienceTotals = {
  yearsLabel: "5+ years",
  shippedAppsLabel: "25+",
  robotDeploymentsLabel: "100+",
  countriesLabel: "2",
} as const;
