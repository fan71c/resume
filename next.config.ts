import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',
    transpilePackages: ['next-mdx-remote'],
  /* config options here */
};

export default nextConfig;
