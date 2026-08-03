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

// Fragmented shard positions on the "chaos" side of the hero backdrop —
// small rotated rectangles evoking scattered, disordered work.
const shards = [
  { x: 6, y: 18, w: 34, h: 5, rot: -18 }, { x: 3, y: 30, w: 22, h: 4, rot: 32 },
  { x: 12, y: 42, w: 40, h: 5, rot: 8 }, { x: 2, y: 55, w: 26, h: 4, rot: -40 },
  { x: 16, y: 65, w: 30, h: 5, rot: 20 }, { x: 8, y: 76, w: 20, h: 4, rot: -12 },
  { x: 20, y: 10, w: 18, h: 4, rot: 55 }, { x: 4, y: 85, w: 24, h: 4, rot: -25 },
];

// Hexagon centers on the "structured" side, echoing a glowing,
// organized network taking shape.
const hexes = [
  { x: 74, y: 30 }, { x: 84, y: 22 }, { x: 84, y: 40 }, { x: 94, y: 30 },
  { x: 78, y: 55 }, { x: 88, y: 62 }, { x: 92, y: 47 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF7F1] pb-20 pt-36 dark:bg-surface-dark sm:pb-28 sm:pt-44">
      <HeroBackdrop />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-signal-600">
              For founders ready to stop being the bottleneck
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-ink dark:text-white sm:text-5xl lg:text-6xl"
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
              <Button asChild size="lg">
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

          <div className="rounded-3xl border border-white/60 bg-white/40 p-8 shadow-xl shadow-signal-600/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
            <ChaosToSystemDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* base gradient: warm ivory deepening to a soft sand tone at the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.9),rgba(243,232,214,0.6)_55%,rgba(243,232,214,0.9)_100%)] dark:hidden" />

      {/* faint structural grid */}
      <div className="absolute inset-0 bg-grid-pattern dark:opacity-[0.15]" />

      {/* glow: warm gold bloom on the "chaos" side */}
      <div className="absolute left-[-8%] top-[8%] h-[420px] w-[420px] rounded-full bg-signal-400/25 blur-[120px]" />

      {/* glow: deeper amber bloom on the "structured" side */}
      <div className="absolute right-[-8%] top-[18%] h-[460px] w-[460px] rounded-full bg-signal-600/15 blur-[130px]" />

      {/* soft charcoal grounding shape for depth and contrast */}
      <div className="absolute bottom-[-15%] left-[20%] h-[320px] w-[320px] rounded-full bg-charcoal-900/[0.05] blur-[110px]" />

      {/* scattered angular shards — the "before" chaos */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.3]" preserveAspectRatio="none" aria-hidden="true">
        {shards.map((s, i) => (
          <rect
            key={i}
            x={`${s.x}%`}
            y={`${s.y}%`}
            width={s.w}
            height={s.h}
            rx={1}
            fill="#A8A29E"
            transform={`rotate(${s.rot} ${s.x}% ${s.y}%)`}
          />
        ))}
      </svg>

      {/* glowing hexagon lattice — the "after" structure */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {hexes.map((h, i) => (
          <g key={i} opacity={0.4}>
            <polygon
              points={hexPoints(h.x, h.y, 3.2)}
              fill="none"
              stroke="#D97706"
              strokeWidth={0.25}
              strokeOpacity={0.6}
            />
          </g>
        ))}
      </svg>

      {/* soft bottom fade so content below the hero blends into the site surface */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-surface dark:to-surface-dark" />
    </div>
  );
}

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle) * 0.7;
    return `${x},${y}`;
  }).join(" ");
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
            stroke="#A8A29E"
            strokeOpacity={0.45}
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
            animate={{ opacity: 0.9, scale: 1 }}
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
            fill="#28282C"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 + i * 0.06 }}
          />
        ))}
      </svg>

    </div>
  );
}
