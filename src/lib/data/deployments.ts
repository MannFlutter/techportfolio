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
  "Developed the Flutter and Android applications powering the Odigo advertising-robot platform — live across malls in India and Dubai.";
