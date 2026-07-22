"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const chaosNodes = [
  { x: 20, y: 30 }, { x: 55, y: 15 }, { x: 85, y: 45 },
  { x: 15, y: 75 }, { x: 60, y: 90 }, { x: 95, y: 20 },
];
const gridNodes = [
  { x: 20, y: 20 }, { x: 60, y: 20 }, { x: 100, y: 20 },
  { x: 20, y: 60 }, { x: 60, y: 60 }, { x: 100, y: 60 },
];

export function Hero() {
  return (
    <section className="pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
              For founders ready to stop being the bottleneck
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl dark:text-white"
            >
              Build a Business That Runs Without You.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-gray"
            >
              We help founders replace operational chaos with documented systems, AI
              automation, and scalable workflows. So the business grows without depending
              on founders every day.
            </motion.p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="h-auto py-5">
                <Link href="/apply">
                  Book Your Free Operations Audit <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <Link href="/#process">
                  <PlayCircle className="h-4 w-4" /> See how it works
                </Link>
              </Button>
            </div>
          </div>

          <ChaosToSystemDiagram />
        </div>
      </div>
    </section>
  );
}

function ChaosToSystemDiagram() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <svg viewBox="0 0 240 220" className="h-full w-full" aria-hidden="true">
        {/* connecting lines from chaos to grid */}
        {chaosNodes.map((node, i) => (
          <motion.line
            key={`line-${i}`}
            x1={node.x}
            y1={node.y}
            x2={gridNodes[i].x + 100}
            y2={gridNodes[i].y}
            stroke="#4F46E5"
            strokeOpacity={0.25}
            strokeWidth={1.5}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.4 + i * 0.06, ease: "easeInOut" }}
          />
        ))}

        {/* chaotic scattered nodes (left = current state) */}
        {chaosNodes.map((node, i) => (
          <motion.circle
            key={`chaos-${i}`}
            cx={node.x}
            cy={node.y}
            r={5}
            fill="#F59E0B"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          />
        ))}

        {/* systemized grid nodes (right = future state) */}
        {gridNodes.map((node, i) => (
          <motion.rect
            key={`grid-${i}`}
            x={node.x + 100 - 9}
            y={node.y - 9}
            width={18}
            height={18}
            rx={5}
            fill="#06B6D4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 + i * 0.06 }}
          />
        ))}
      </svg>

      <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-8 text-center text-xs font-semibold uppercase tracking-wider text-ink-gray/60">
        <span>Chaos</span>
        <span>→</span>
        <span>System</span>
      </div>
    </div>
  );
}
