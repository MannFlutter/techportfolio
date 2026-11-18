import { odigoDeploymentScale, rosIntegration } from "./deployments";

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

export const experience: ExperienceEntry[] = [
  {
    company: "Kody Technolab Limited",
    role: "Senior Mobile & Real time system Lead",
    period: "Jan 2022 – Present",
    durationLabel: "~4.9 years",
    startLabel: "Jan 2022",
    endLabel: "Present",
    summary:
      "Flutter development across educational, communication, and real-time data-driven products — architecture through App Store deployment.",
    highlights: [
      "Designed and shipped 15+ Flutter apps across enterprise, fintech, communication, education, and robotics.",
      "Improved rendering performance by approximately 30% and delivered 10+ production releases.",
      "Drove end-to-end engineering ownership, translating product requirements into scalable mobile architectures and reliable production releases.",
      `Developed mobile applications for the advertising-robot platform, with ${rosIntegration} and real-time communication with robot hardware. Measured approximately 24 ms operator-app-to-robot round-trip latency with under 2 ms jitter at 10 Hz.`,
      "Managed a team of three engineers, establishing engineering best practices through code reviews, sprint planning, mentoring, and collaborative delivery.",
    ],
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      rosIntegration,
      "WebSockets",
      "Socket.IO",
      "WebRTC",
      "Riverpod",
    ],
  },
  {
    company: "Saubhagyam Web Pvt. Ltd.",
    role: "Flutter Software Engineer",
    period: "Aug 2020 – Jan 2022",
    durationLabel: "~1.5 years",
    startLabel: "Aug 2020",
    endLabel: "Jan 2022",
    summary:
      "Cross-platform Flutter development across the full product lifecycle — MVP to release — for B2B and B2C products spanning robotics, fintech, and e-learning.",
    highlights: ["Delivered 10+ apps from MVP development through release."],
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
];

export const experienceTotals = {
  yearsLabel: "6+ years",
  shippedAppsLabel: "25+",
  robotDeploymentsLabel: odigoDeploymentScale.robots,
  countriesLabel: "2",
} as const;
