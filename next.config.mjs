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
			{
				protocol: "https",
				hostname: "**buytoday.uz**",
			},
			{
				protocol: "https",
				hostname: "**official-midea**",
			},
		],
	},
};

export default nextConfig;
