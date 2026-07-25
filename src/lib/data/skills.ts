export type SkillCategory = {
  title: string;
  skills: string[];
};

/**
 * Merged from technical_skills.dart + personal_info.dart `skills`, deduped.
 * Robotics protocols live in the Robotics section, not here.
 * Categorized lists only — no percentage bars or charts.
 */
export const technicalSkills: SkillCategory[] = [
  {
    title: "Flutter Development",
    skills: [
      "Advanced UI design (responsive/adaptive screens)",
      "In-App Purchases, Stripe & Razorpay integration",
      "Audio/video streaming",
      "Voice & video call SDKs: Telnyx, ZegoCloud, Twilio",
    ],
  },
  {
    title: "State Management",
    skills: ["Riverpod", "Provider", "GetX", "BLoC"],
  },
  {
    title: "Storage & Persistence",
    skills: ["Hive", "Sqflite", "ObjectBox", "Get Storage", "Shared Preferences"],
  },
  {
    title: "APIs & Data",
    skills: [
      "REST via Dio and HTTP",
      "GraphQL",
      "Repository & model-based architecture",
      "Local caching, Postman-based testing",
    ],
  },
  {
    title: "Firebase & Auth",
    skills: [
      "Firebase Authentication",
      "Cloud Functions",
      "OAuth & social logins: Google, Apple, Facebook, Twitter, LinkedIn",
    ],
  },
  {
    title: "Maps & Location",
    skills: [
      "Google Maps SDK",
      "Live location tracking",
      "Background geolocation services",
    ],
  },
  {
    title: "Release & CI/CD",
    skills: [
      "Codemagic pipelines",
      "App Store & Play Store releases",
      "Multi-module version compatibility",
    ],
  },
];

/** How the work gets done — the approach, not the tool list. */
export const engineeringExpertise = [
  "Clean Architecture",
  "Modular codebases",
  "Offline-first strategies",
  "High-performance apps",
  "Profiling & render optimization",
  "Concurrent communication",
  "Production reliability",
  "ROS integration",
] as const;
