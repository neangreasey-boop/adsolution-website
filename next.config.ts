import type { NextConfig } from "next";

/**
 * Static export — produces a fully static site in `/out` that deploys
 * directly to Cloudflare Pages (no server runtime required). The contact
 * form is handled by a Cloudflare Pages Function in `/functions/api/contact.ts`.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Static export cannot use the Next.js image optimizer; Cloudflare
    // serves the files directly. Keep assets pre-optimized in /public.
    unoptimized: true,
  },
};

export default nextConfig;
