import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          DEFAULT: "#0B3D2E",
          950: "#06231A",
          900: "#0B3D2E",
          800: "#0F4E3B",
          700: "#146B4F",
          600: "#1C8462",
          100: "#E4EEE8",
          50: "#F1F6F3",
        },
        gold: {
          DEFAULT: "#B8935A",
          300: "#E4CD8F",
          400: "#CDAD70",
          500: "#B8935A",
          600: "#9A784A",
        },
        navy: {
          950: "#0B1622",
          900: "#122033",
        },
        beige: {
          50: "#FBF9F4",
          100: "#F4EFE2",
          200: "#EAE2CC",
        },
        ink: "#122019",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        slowspin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(18px)" }, to: { opacity: "1", transform: "translateY(0)" } },
      },
      animation: {
        slowspin: "slowspin 90s linear infinite",
        fadeUp: "fadeUp 0.7s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
