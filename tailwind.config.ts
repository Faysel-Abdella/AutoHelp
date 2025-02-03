import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        background: "hsl(var(--background))",
        secondaryBackground: "var(--secondary-background)",
        foreground: "hsl(var(--foreground))",
        mainBlue: "var(--primary-blue)",
        mainGray: "var(--primary-gray)",
        lavenderLight: "var(--lavender-light)",
        lavenderLighter: "var(--lavender-lighter)",
      },
      backgroundImage: {
        mainGradient: "var(--main-gradient)",
      },
      dropShadow: {
        main: "var(--primary-drop-shadow)",
        secondary: "var(--secondary-drop-shadow)",
        card: "var(--card-drop-shadow)",
        statistics: "var(--statistics-drop-shadow)",
        dataCard: "var(--data-card-drop-shadow)",
        step: "var(--step-drop-shadow)",
        bonus: "var(--bonus-drop-shadow)",
      },
      borderColor: {
        main: "var(--main-border)",
        secondary: "var(--secondary-border)",
        card: "var(--main-card)",
      },
      borderWidth: {
        light: "var(--border-light)",
      },
      borderRadius: {
        large: "var(--radius-large)",
        larger: "var(--radius-larger)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
