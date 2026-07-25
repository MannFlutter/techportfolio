import type { NextConfig } from "next";

/** Keep in sync with `src/lib/basePath.ts` */
const basePath =
  process.env.NODE_ENV === "production" ? "/techportfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
