import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/crystal-cinema-innovation",
  assetPrefix: "/crystal-cinema-innovation/",
};

export default nextConfig;
