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
      "First ~2 years: end-to-end app delivery, architecture to store release",
      "~1.5 years on Spice — enterprise mobile platform, architecture ownership",
      "~1 year on Dubai-based robotics clients — the Odigo platform",
      "Led a team of 3: code review, sprint planning, cross-functional delivery",
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

export type EarlyFoundation = {
  title: string;
  year: string;
  note: string;
};

/** From personal_info.dart academicProjects — condensed, supporting beat only. */
export const earlyFoundations: EarlyFoundation[] = [
  {
    title: "Digital Solar-Based Speed Breaker Visibility System",
    year: "2020–2021",
    note: "Government-funded student innovation project (SOIC/SSIP): a solar-powered digital indicator improving speed-breaker visibility at night — real IoT hardware work years before Odigo.",
  },
  {
    title: "Famito",
    year: "2020–2021",
    note: "Family-focused social networking Android app (Java, Firebase, Google Maps) with real-time location sharing and family-tree profiles.",
  },
];

export const experienceTotals = {
  yearsLabel: "5+ years",
  shippedAppsLabel: "25+",
  robotDeploymentsLabel: "10+",
  countriesLabel: "2",
} as const;
