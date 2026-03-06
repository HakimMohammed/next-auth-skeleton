import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.shadcnspace.com",
      },
      {
        protocol: "https",
        hostname: "www.keycloak.org",
      }
    ],
  },
};

export default nextConfig;
