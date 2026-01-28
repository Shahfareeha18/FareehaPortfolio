import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": ["@svgr/webpack"],
    },
  },
};

export default nextConfig;
