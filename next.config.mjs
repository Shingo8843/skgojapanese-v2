import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Enables static export for S3 hosting
  images: {
    // unoptimized: true, // Disables Next.js image optimization (needed for static hosting)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skgo-resources2025.s3.us-west-1.amazonaws.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true, // Ensures all routes have trailing slashes (useful for S3 static hosting)
  turbopack: {
    // Pin the workspace root so Turbopack doesn't infer it from a lockfile outside the repo
    root: __dirname,
  },
};

export default nextConfig;
