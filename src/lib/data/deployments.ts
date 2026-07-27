export type DeploymentRegion = {
  region: string;
  sites: string[];
};

/**
 * Live Odigo advertising-robot deployments (India + Dubai).
 */
export const odigoDeployments: DeploymentRegion[] = [
  {
    region: "India",
    sites: [
      "Jio World Drive (Bandra)",
      "Lulu Mall Lucknow",
      "Lulu Mall Trivandrum",
      "Pacific Mall",
      "R City Mall",
      "DLF Mall",
      "Additional commercial sites",
    ],
  },
  {
    region: "Dubai",
    sites: ["BurJuman", "Additional commercial sites"],
  },
];

export const odigoCapabilities = [
  "ROS and ROS 2 integration",
  "WebSockets, Serial/UART, WebRTC",
  "Live telemetry and robot-operator interfaces",
  "Secure, low-latency communication for production deployment",
] as const;

export const odigoSummary =
  "Developed the Flutter and Android applications powering the Odigo advertising-robot platform.";

export const odigoEtihadDeployments: DeploymentRegion[] = [
  {
    region: "UAE",
    sites: ["Etihad Rail — Fujairah Passenger Station"],
  },
];

export const odigoEtihadSummary =
  "Developed the Flutter and Android applications powering the Odigo advertising-and-guidance robot deployed at Etihad Rail's Fujairah passenger station — the UAE's first AI robot deployment at a national railway station.";

