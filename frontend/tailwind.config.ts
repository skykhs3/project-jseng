import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        hyphen: "'- '",
      },
      keyframes: {
        kfFadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kfBannerWidthExpand: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        kfSlideUpDown: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
        kfSlide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    animation: {
      fadeInUp: "kfFadeInUp 1s ease-out forwards",
      withBannerWidthExpand: "kfBannerWidthExpand 2s ease-in-out forwards",
      withArrowSlideUpDown: "kfSlideUpDown 2s infinite ease-in-out",
      horizontalSlide: "kfSlide 45s linear infinite forwards", //1개 7.5초
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".webkit-backdrop-blur-16px": {
          "-webkit-backdrop-filter": "blur(16px)",
          "backdrop-filter": "blur(16px)", // Optional: Include standard property for broader compatibility
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },

    function ({ addUtilities }: { addUtilities: any }) {
      const delayUtilities = {
        ".animate-delay-300ms": {
          "animation-delay": "300ms",
        },
        ".animate-delay-1300ms": {
          "animation-delay": "1300ms",
        },
        ".animate-delay-1s": {
          "animation-delay": "1s",
        },
      };

      addUtilities(delayUtilities, ["responsive", "hover"]);
    },
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".translate-z-0": {
          transform: "translateZ(0)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
