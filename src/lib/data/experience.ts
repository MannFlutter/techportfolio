export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  startLabel: string;
  endLabel: string;
  summary: string;
  highlights: string[];
  tech?: string[];
};

/**
 * Experience from personal_info.dart (Kody start: Jan 2022).
 * Spice domain specifics remain placeholder until real detail is provided.
 */
export const experience: ExperienceEntry[] = [
  {
    company: "Kody Technolab Limited",
    role: "Flutter Developer",
    period: "Jan 2022 – Present",
    startLabel: "Jan 2022",
    endLabel: "Present",
    summary:
      "Full-time Flutter developer building high-performance mobile applications across educational, communication, robotics, and real-time data-driven products — from architecture through App Store deployment.",
    highlights: [
      "~1.5 years on the Spice enterprise mobile platform — architecture ownership and delivery",
      "~1 year on Dubai-based robotics clients — the Odigo advertising-robot platform",
      "Led a team of 3 developers: technical ownership, code reviews, sprint planning, and cross-functional delivery",
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
  {
    company: "Saubhagyam Web Pvt. Ltd.",
    role: "Flutter Developer",
    period: "Aug 2020 – Jan 2022",
    startLabel: "Aug 2020",
    endLabel: "Jan 2022",
    summary:
      "Cross-platform Flutter development across the full product lifecycle — from MVP to release — for B2B and B2C products spanning robotics, fintech, and e-learning.",
    highlights: [
      "End-to-end feature delivery on multiple shipping products",
      "Early robotics and real-time systems exposure alongside fintech and e-learning apps",
    ],
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
];

export const experienceTotals = {
  yearsLabel: "5+ years",
  shippedAppsLabel: "25+",
  robotDeploymentsLabel: "10+",
  countriesLabel: "2",
} as const;
