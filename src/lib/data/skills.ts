import { rosIntegration } from "./deployments";

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const technicalSkills: SkillCategory[] = [
  {
    title: "Robotics & Real-Time",
    skills: [
      rosIntegration,
      "WebSockets and WebRTC",
      "Serial/UART",
      "Low-latency telemetry",
      "OCPP",
      "Sensor and IoT pipelines",
      // TODO(manthan): Confirm which additional skills apply: C/C++, Python, Linux, Nav2, computer vision, and AMR/AGV.
    ],
  },
  {
    title: "3D & Visualization",
    skills: [
      "3D avatar creation (human characters)",
      "3D vehicle (car) modelling",
      // TODO(manthan): Confirm the 3D tools used, such as Blender, Unity, or Three.js.
      // TODO(manthan): Confirm whether the 3D work ran in real time in Flutter or on mobile.
    ],
  },
  {
    title: "Flutter Development",
    skills: [
      "Native Android (Java) and iOS",
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
  "Test-driven development (TDD)",
  "Agile/Scrum leadership",
] as const;
