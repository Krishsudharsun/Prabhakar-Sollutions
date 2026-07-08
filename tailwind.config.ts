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
        // ── "Slate & Cobalt" — approved palette ─────────────────────────
        // Token names (navy/royal/emerald/signal) kept as-is so every
        // existing component class (text-royal-600 etc.) keeps working —
        // only the hex values changed.
        navy: {
          DEFAULT: "#0F172A",
          50: "#F8FAFC",
          100: "#F1F5F9",
          400: "#475569",
          900: "#0F172A",
        },
        // was royal blue — now cobalt indigo
        royal: {
          DEFAULT: "#4F46E5",
          50: "#EEF2FF",
          100: "#E0E7FF",
          400: "#818CF8",
          600: "#4F46E5",
          700: "#4338CA",
        },
        // was emerald green — now cyan (secondary accent)
        emerald: {
          DEFAULT: "#06B6D4",
          50: "#ECFEFF",
          400: "#22D3EE",
          600: "#0891B2",
        },
        // was orange — now amber (CTA)
        signal: {
          DEFAULT: "#F59E0B",
          50: "#FFFBEB",
          400: "#FBBF24",
          600: "#D97706",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          dark: "#0F172A",
        },
        ink: {
          DEFAULT: "#0F172A",
          gray: "#64748B",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        // Scaled down from the original (xl:1rem/2xl:1.5rem/3xl:2rem) —
        // uniformly large rounding on every single card is one of the
        // clearest "built with an AI tool" tells. This keeps the same
        // hierarchy but much more restrained.
        lg: "0.5rem",
        xl: "0.625rem",
        "2xl": "0.875rem",
        "3xl": "1.25rem",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(79,70,229,0.12), transparent 60%)",
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
