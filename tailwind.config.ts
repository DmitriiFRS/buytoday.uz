import type { Config } from "tailwindcss";

const config: Config = {
     content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
     theme: {
          screens: {
               ssm: "350px",
               sm: "400px",
               xs: "480px",
               md: "768px",
               lg: "1024px",
               xl: "1280px",
               minxl: "1180px",
               "2xl": "1536px",
          },
          extend: {
               colors: {
                    primary: {
                         DEFAULT: "hsl(263, 55%, 52%)",
                    },
                    "neutral-black": "#151616",
                    "neutral-gray": "#737373",
                    "neutral-white": "#ffffff",
                    "neutral-stroke": "#E8E8E8",
                    "gray-f3": "#F3F3F3",
               },
               lineHeight: {
                    "150%": "150%",
                    "143%": "143%",
                    "140%": "140%",
                    "133%": "133%",
                    "131%": "131%",
                    "125%": "125%",
                    "119%": "119%",
                    "114%": "114%",
               },
               letterSpacing: {
                    tightest: "-0.02em",
               },
               backgroundImage: {
                    "primary-gradient": "linear-gradient(225deg, #c874a9 0%, #8874c8 100%)",
                    "hero-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%)",
                    "service-tab-gradient": "linear-gradient(225deg, rgba(200, 116, 169, 0.92) 0%, rgba(136, 116, 200, 0.92) 100%)",
                    "linear-gray-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 100%)",
               },
               fontFamily: {
                    raleway: ["Raleway", "sans-serif"],
                    rubik: ["Rubik", "sans-serif"],
               },
          },
     },
     plugins: [],
};
export default config;
