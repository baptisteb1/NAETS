import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Nom du repo GitHub — adapte si différent
  basePath: "/NAETS",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
