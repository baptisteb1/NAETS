import type { NextConfig } from "next";

// On GitHub Pages the repo name becomes the sub-path (/NAETS).
// On Vercel (or local dev) the site lives at the root.
// Set NEXT_PUBLIC_BASE_PATH=/NAETS in the GitHub Actions environment to enable it.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
