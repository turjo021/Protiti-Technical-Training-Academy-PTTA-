import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },

  basePath: isGithubPages ? "/Protiti-Technical-Training-Academy-PTTA-" : "",
  assetPrefix: isGithubPages ? "/Protiti-Technical-Training-Academy-PTTA-/" : "",
};

export default nextConfig;
