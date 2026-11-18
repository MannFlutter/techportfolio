import { odigoDeploymentScale } from "./deployments";

export type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  durationLabel: string;
  startLabel: string;
  endLabel: string;
  summary: string;
  highlights: { label?: string; detail: string }[];
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
      "I lead mobile and real-time systems development for production robotics and commercial Flutter applications. My work spans operator interfaces, robot communication, passenger guidance, healthcare kiosks, and mobile application releases.",
    highlights: [
      {
        label: "Advertising-robot platform.",
        detail: `Built Flutter and Android operator applications for a platform deployed across ${odigoDeploymentScale.robots} robots at ${odigoDeploymentScale.sites} sites in ${odigoDeploymentScale.regions}. Developed workflows for movement and navigation control, emergency-stop handling, charging, live monitoring, and offline-resilient synchronization.`,
      },
      {
        label: "Robot communication.",
        detail: "Contributed to the Flutter–ROS bridge and worked with ROS 1 and ROS 2 in production. Integrated WebSockets, Socket.IO, WebRTC, and Serial/UART for real-time communication between applications and robot hardware.",
      },
      {
        label: "Passenger guidance at Etihad Rail.",
        detail: "Built a multilingual voice assistant and indoor navigation flow for Fujairah Passenger Station. Passengers could ask for directions and see a route drawn from the robot’s current position to their destination.",
      },
      {
        label: "Healthcare assistant robot.",
        detail: "Built Android kiosk workflows for patient check-in, guided device checkups, offline synchronization, and reports. Integrated a Three.js doctor avatar through Android WebView with procedural poses and English and Hindi lip sync.",
      },
      {
        label: "Mobile engineering and team leadership.",
        detail: "Designed and shipped 15+ Flutter applications across robotics, enterprise, fintech, education, and communication. Led three engineers through code reviews, sprint planning, mentoring, and production releases.",
      },
    ],
    tech: [
      "Flutter",
      "Dart",
      "Android",
      "ROS 1",
      "ROS 2",
      "WebSockets",
      "Socket.IO",
      "WebRTC",
      "Serial/UART",
      "Three.js",
      "Android WebView",
      "iOS",
      "TensorFlow Lite (TFLite)",
      "Camera detection",
      "Object detection",
      "3D models",
      "Raspberry Pi",
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
    highlights: [{ detail: "Delivered 10+ apps from MVP development through release." }],
    tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
  },
];

export const experienceTotals = {
  yearsLabel: "6+ years",
  shippedAppsLabel: "25+",
  robotDeploymentsLabel: odigoDeploymentScale.robots,
  countriesLabel: "2",
} as const;
