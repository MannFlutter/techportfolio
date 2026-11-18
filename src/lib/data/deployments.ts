export const odigoDeploymentScale = {
  robots: "100+",
  // TODO(manthan): Update the site count once the probable duplicates below are verified.
  sites: "45+",
  regions: "India and the UAE",
} as const;

export const odigoScaleSummary = `${odigoDeploymentScale.robots} robots across ${odigoDeploymentScale.sites} sites in ${odigoDeploymentScale.regions}`;
export const rosMigrationStatus = "ROS 2 migration in progress";
export const rosProductionStatus = `ROS in production; ${rosMigrationStatus}`;
export const rosIntegration = `ROS integration (${rosMigrationStatus})`;

export const odigoPerformance = [
  { label: "Round-trip latency", value: "~24 ms" },
  { label: "Jitter", value: "<2 ms" },
  { label: "Telemetry rate", value: "10 Hz" },
] as const;

// TODO(manthan): Confirm the network type used for the operator-app-to-robot latency measurement.
// TODO(manthan): Confirm the sample size used to average the latency measurement.
export const odigoMeasurementNote =
  "Measured operator-app-to-robot round trip at 10Hz telemetry. Network type and sample size are pending confirmation.";

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
      // TODO(manthan): Identify the specific Pacific Mall (New Delhi) and dedupe against the named Pacific locations.
      "Pacific Mall (New Delhi)",
      "Crown Mall (Lucknow)",
      "R City Mall (Mumbai)",
      "DLF Mall of India (Noida)",
      "VR Mall (Surat)",
      "Jio World Drive (Mumbai)",
    ],
  },
  {
    region: "UAE",
    sites: [
      "Lulu Al Dhafra Mall (Abu Dhabi)",
      "Lulu Mazyad Mall (Abu Dhabi)",
      "Lulu Y Tower (Abu Dhabi)",
      "Lulu Madinat Zayed (Abu Dhabi)",
      "Lulu Khalidiyah Mall (Abu Dhabi)",
      "Lulu Baniyas (Abu Dhabi)",
      "Lulu Al Falah",
      "Lulu WTC (Abu Dhabi)",
      "Lulu Mushrif Mall (Abu Dhabi)",
      "Lulu Al Wahda Mall (Abu Dhabi)",
      "Lulu Al Nadha (Dubai)",
      "Lulu Arabian Center (Dubai)",
      "Lulu Village (Dubai)",
      // TODO(manthan): Verify the emirate for Lulu Capital Mall, Lulu Forsan Mall, and Lulu Al Falah.
      "Lulu Capital Mall",
      "Lulu Forsan Mall",
      // TODO(manthan): Verify whether Silicon Central Mall and Lulu Silicon Central refer to one site, then dedupe.
      "Silicon Central Mall (Dubai)",
      "Lulu Silicon Central (Dubai)",
      "Lulu Motor City (Dubai)",
      "Lulu Festival City (Dubai)",
      // TODO(manthan): Verify whether Lulu Outlet Mall and Outlet Mall Carpet Area refer to one site, then dedupe.
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
  rosIntegration,
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

