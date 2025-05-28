import type { NextConfig } from "next";
import { IS_GITHUB_PAGES, BASE_PATH } from "./utils/constants";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  ...(IS_GITHUB_PAGES
    ? {
        basePath: BASE_PATH,
        assetPrefix: `${BASE_PATH}/`,
      }
    : {}),
};

export default nextConfig;
