import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        kfFadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kfBannerWidthExpand: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      }
    },
    animation: {
      fadeInUp: 'kfFadeInUp 0.8s ease-out',
      withBannerWidthExpand: 'kfBannerWidthExpand 2s ease-in-out forwards',
    },
  },
  plugins: [],
};
export default config;
