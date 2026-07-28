"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Each step gets its own accent gradient so the five cards read as a
// sequence rather than five identical grey boxes.
const stepTheme = [
  { from: "#4F46E5", to: "#818CF8" }, // royal
  { from: "#06B6D4", to: "#22D3EE" }, // emerald/cyan
  { from: "#F59E0B", to: "#FBBF24" }, // signal/amber
  { from: "#4F46E5", to: "#06B6D4" }, // royal -> cyan
  { from: "#0F172A", to: "#4F46E5" }, // navy -> royal
];

interface MethodologyCardProps {
  index: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export function MethodologyCard({ index, icon, title, description }: MethodologyCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const theme = stepTheme[index % stepTheme.length];

  // Track this card's own position in the viewport and use it to drive
  // a gentle parallax offset on the illustration only.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-5 overflow-hidden rounded-2xl border border-navy-900/[0.06] bg-white dark:border-white/[0.08] dark:bg-white/[0.045] sm:flex-row sm:items-stretch"
    >
      {/* Illustration / image area with parallax */}
      <div className="relative h-32 shrink-0 overflow-hidden sm:h-auto sm:w-40">
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id={`step-grad-${index}`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={theme.from} />
              <stop offset="100%" stopColor={theme.to} />
            </linearGradient>
          </defs>
          <rect width="200" height="200" fill={`url(#step-grad-${index})`} />
          <circle cx="160" cy="30" r="70" fill="white" fillOpacity="0.08" />
          <circle cx="20" cy="180" r="50" fill="white" fillOpacity="0.08" />
        </svg>

        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
            {icon}
          </span>
        </motion.div>

        <span className="absolute bottom-2 right-3 font-heading text-4xl font-bold text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Text content */}
      <div className="flex flex-1 items-center p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-royal-600">Step {index + 1}</p>
          <h3 className="mt-0.5 font-heading text-base font-semibold text-ink dark:text-white">{title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-gray">{description}</p>
        </div>
      </div>
    </div>
  );
}
