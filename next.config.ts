import type { NextConfig } from "next";

/** Keep in sync with `src/lib/basePath.ts` */
const basePath =
  process.env.NODE_ENV === "production" ? "/techportfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  // Allow HMR when opening the site via LAN IP (e.g. phone/tablet on Wi‑Fi).
  allowedDevOrigins: ["192.168.1.4"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
