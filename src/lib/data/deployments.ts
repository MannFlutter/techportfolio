export type DeploymentRegion = {
  region: string;
  sites: string[];
};

/**
 * Live Odigo advertising-robot deployments (India + UAE).
 * Sites reconciled from Odigo-V3 destination lists (name + city only;
 * internal FTR offices and inactive destinations omitted).
 */
export const odigoDeployments: DeploymentRegion[] = [
  {
    region: "India",
    sites: [
      "Wave Mall (Noida)",
      "Spectrum Mall (Noida)",
      "Pacific Jaipur (Jaipur)",
      "Pacific Mall NSP (New Delhi)",
      "Pacific Mall Jasola (New Delhi)",
      "Pacific Mall (Faridabad)",
      "Mall of Faridabad (Faridabad)",
      "DLF Avenue Mall (New Delhi)",
      "Pacific Mall D21 (New Delhi)",
      "WTP Mall (Jaipur)",
      "Mall of Ranchi (Ranchi)",
      "Lulu Mall (Bangalore)",
      "Lulu Mall (Kochi)",
      "LuLu Mall (Thiruvananthapuram)",
      "Lulu Mall (Lucknow)",
      "The Capital Mall (Mumbai)",
      "Pacific Mall (New Delhi)",
      "Crown Mall (Lucknow)",
      "R City Mall (Mumbai)",
      "DLF Mall of India (Noida)",
      "VR Mall (Surat)",
      "Jio World Drive (Mumbai)",
    ],
  },
  {
    region: "Dubai",
    sites: [
      "Lulu Al Dhafra Mall (Abu Dhabi)",
      "Lulu Mazyad Mall (Abu Dhabi)",
      "Lulu Y Tower (Abu Dhabi)",
      "Lulu Madinat Zayed (Abu Dhabi)",
      "Lulu Khalidiyah Mall (Abu Dhabi)",
      "Lulu Baniyas (Abu Dhabi)",
      "Lulu Al Falah (Abu Dhabi)",
      "Lulu WTC (Abu Dhabi)",
      "Lulu Mushrif Mall (Abu Dhabi)",
      "Lulu Al Wahda Mall (Abu Dhabi)",
      "Lulu Al Nadha (Dubai)",
      "Lulu Arabian Center (Dubai)",
      "Lulu Village (Dubai)",
      "Lulu Capital Mall (Dubai)",
      "Lulu Forsan Mall (Dubai)",
      "Silicon Central Mall (Dubai)",
      "Lulu Silicon Central (Dubai)",
      "Lulu Motor City (Dubai)",
      "Lulu Festival City (Dubai)",
      "Lulu Outlet Mall (Dubai)",
      "Outlet Mall Carpet Area (Dubai)",
      "Lulu Al Barsha Mid (Dubai)",
      "Lulu Al Qusais (Dubai)",
      "Lulu Dubai Mall (Dubai)",
      "Lulu Warsan (Dubai)",
      "Lulu Festival Plaza (Dubai)",
      "Burjuman Mall (Bur Dubai)",
    ],
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

