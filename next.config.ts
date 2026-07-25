import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/techportfolio",
  assetPrefix: "/techportfolio/",
};

export default nextConfig;