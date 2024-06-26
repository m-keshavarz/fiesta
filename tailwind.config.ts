import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        nutmeg: "#854632",
        raspbery: {
          700: "#7b284f",
        },
        roseWhite: "#fff5fa",
        eggShell: "#f3e6d8",
        gray: {
          200: "#e4ded8",
        },
        wengeBrown: "#5f574e",
        darkCharcoal: "#302d2c",
        inchWorm: "#c5f82a",
        mineShaft: "#333333",
        shark: "#1f1f1f",
        woodsmoke: "#141414",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      fontFamily: {
        youngSerif: "youngSerif",
        outline: "outline",
        inter: ["var(--font-inter)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      transitionDuration: {
        "3000": "3000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
