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
};

export default nextConfig;
