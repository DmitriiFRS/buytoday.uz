/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "images.ctfassets.net",
         },
         {
            protocol: "http",
            hostname: "**localhost**",
         },
      ],
   },
};

export default nextConfig;
