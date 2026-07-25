export type SkillCategory = {
  title: string;
  skills: string[];
};

/** Ported from technical_skills.dart — categorized lists, no percentage bars. */
export const technicalSkills: SkillCategory[] = [
  {
    title: "Flutter Development",
    skills: [
      "Advanced UI design (responsive/adaptive screens)",
      "In-App Purchases, Stripe & Razorpay integration",
      "Audio/Video Streaming",
      "Voice & Video Call SDKs: Telnyx, ZegoCloud, Twilio",
    ],
  },
  {
    title: "State Management",
    skills: ["Riverpod", "Provider", "GetX", "BLoC"],
  },
  {
    title: "Local Storage & Databases",
    skills: ["Hive", "Shared Preferences", "Get Storage", "Sqflite", "ObjectBox"],
  },
  {
    title: "API Integration",
    skills: [
      "RESTful APIs using Dio and HTTP",
      "Repository & model-based architecture",
      "Local caching and Postman-based testing",
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
    title: "Authentication",
    skills: [
      "Firebase Authentication",
      "OAuth & social logins: Google, Apple, Facebook, Twitter, LinkedIn",
    ],
  },
  {
    title: "Robotics & Connected Systems",
    skills: [
      "ROS / ROS 2",
      "WebSockets",
      "Serial/UART",
      "WebRTC",
      "Live telemetry interfaces",
    ],
  },
];

/** High-level engineering focus areas for the Expertise section. */
export const engineeringExpertise = [
  "Clean Architecture",
  "Modular codebases",
  "Offline-first strategies",
  "High-performance apps",
  "Profiling & render optimization",
  "Concurrent communication",
  "Production reliability",
] as const;
