import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1220",
          50: "#EEF1F6",
          100: "#D7DEEA",
          400: "#3A4C6B",
          900: "#0B1220",
        },
        royal: {
          DEFAULT: "#2563EB",
          50: "#EFF4FF",
          100: "#DCE8FF",
          400: "#5B8AF0",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        emerald: {
          DEFAULT: "#10B981",
          50: "#ECFDF5",
          400: "#34D399",
          600: "#10B981",
        },
        signal: {
          DEFAULT: "#F97316",
          50: "#FFF4ED",
          400: "#FB923C",
          600: "#F97316",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          dark: "#111827",
        },
        ink: {
          DEFAULT: "#111827",
          gray: "#6B7280",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(37,99,235,0.12), transparent 60%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
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
        "fade-up": "fade-up 0.6s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
