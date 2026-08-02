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
// small rotated rectangles that echo the reference image's shattered,
// disordered debris without reproducing it directly.
const shards = [
  { x: 6, y: 18, w: 34, h: 5, rot: -18 }, { x: 3, y: 30, w: 22, h: 4, rot: 32 },
  { x: 12, y: 42, w: 40, h: 5, rot: 8 }, { x: 2, y: 55, w: 26, h: 4, rot: -40 },
  { x: 16, y: 65, w: 30, h: 5, rot: 20 }, { x: 8, y: 76, w: 20, h: 4, rot: -12 },
  { x: 20, y: 10, w: 18, h: 4, rot: 55 }, { x: 4, y: 85, w: 24, h: 4, rot: -25 },
];

// Hexagon centers on the "structured" side, echoing the reference
// image's glowing honeycomb network.
const hexes = [
  { x: 74, y: 30 }, { x: 84, y: 22 }, { x: 84, y: 40 }, { x: 94, y: 30 },
  { x: 78, y: 55 }, { x: 88, y: 62 }, { x: 92, y: 47 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-36 sm:pb-28 sm:pt-44">
      <HeroBackdrop />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
              For founders ready to stop being the bottleneck
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-5 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Build a Business That Runs Without You.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
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
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/10 dark:text-white dark:hover:bg-white/10"
              >
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

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* base gradient: near-black navy deepening toward the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(30,41,59,0.9),rgba(15,23,42,1)_65%)]" />

      {/* faint structural grid, like the reference image's schematic lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      {/* glow: cobalt bloom drifting from the "chaos" side toward center */}
      <div className="absolute left-[-10%] top-[10%] h-[420px] w-[420px] rounded-full bg-royal-600/25 blur-[120px]" />

      {/* glow: cyan bloom on the "structured" side, echoing the hexagon light */}
      <div className="absolute right-[-8%] top-[20%] h-[460px] w-[460px] rounded-full bg-emerald/20 blur-[130px]" />

      {/* amber accent glow, tying back to the logo's gold arrow */}
      <div className="absolute right-[10%] bottom-[-10%] h-[280px] w-[280px] rounded-full bg-signal-600/15 blur-[100px]" />

      {/* scattered angular shards — the "before" chaos */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.35]" preserveAspectRatio="none" aria-hidden="true">
        {shards.map((s, i) => (
          <rect
            key={i}
            x={`${s.x}%`}
            y={`${s.y}%`}
            width={s.w}
            height={s.h}
            rx={1}
            fill="#94A3B8"
            transform={`rotate(${s.rot} ${s.x}% ${s.y}%)`}
          />
        ))}
      </svg>

      {/* glowing hexagon lattice — the "after" structure */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {hexes.map((h, i) => (
          <g key={i} opacity={0.5}>
            <polygon
              points={hexPoints(h.x, h.y, 3.2)}
              fill="none"
              stroke="#22D3EE"
              strokeWidth={0.25}
              strokeOpacity={0.6}
            />
          </g>
        ))}
      </svg>

      {/* soft bottom fade so content below the hero stays on the light surface */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy-900" />
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
            stroke="#818CF8"
            strokeOpacity={0.35}
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
            fill="#22D3EE"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 + i * 0.06 }}
          />
        ))}
      </svg>

      <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-8 text-center text-xs font-semibold uppercase tracking-wider text-white/50">
        <span>Chaos</span>
        <span>→</span>
        <span>System</span>
      </div>
    </div>
  );
}
