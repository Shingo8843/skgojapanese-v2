/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "skgo-resources2025.s3.us-west-1.amazonaws.com",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  