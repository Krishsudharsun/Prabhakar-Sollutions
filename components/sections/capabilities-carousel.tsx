"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ArrowRight, Gauge, ClipboardList, Bot, Workflow } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Icon components can't cross the server → client boundary as props
// (they're functions, not serializable data), so the mapping lives
// here and is looked up by slug instead.
const iconBySlug: Record<string, React.ComponentType<{ className?: string }>> = {
  "business-operations-optimization": Gauge,
  "sop-documentation": ClipboardList,
  "ai-automation": Bot,
  "workflow-automation": Workflow,
};

type Capability = {
  slug: string;
  name: string;
  summary: string;
};

/**
 * Pins the section — centered in the viewport — and translates the card
 * track horizontally as the user scrolls vertically, so cards appear to
 * move right-to-left while staying in the same vertical position (rather
 * than jumping to sit flush under the navbar). The extra scroll distance
 * created by the pin is set to exactly the track's overflow width, so the
 * animation starts with the first card flush at the left edge and ends
 * with the last card flush at the right edge — no blank space before or
 * after. On touch/small screens the pin is disabled and the row becomes a
 * natural, native horizontally-swipeable list instead (scroll-jacking a
 * few cards on mobile doesn't feel good).
 */
export function CapabilitiesCarousel({ capabilities }: { capabilities: Capability[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const section = sectionRef.current;
      const track = trackRef.current;
      if (!section || !track) return;

      const ctx = gsap.context(() => {
        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "center center",
          end: () => `+=${Math.max(track.scrollWidth - section.offsetWidth, 0)}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          animation: gsap.to(track, {
            x: () => -Math.max(track.scrollWidth - section.offsetWidth, 0),
            ease: "none",
          }),
        });

        return () => trigger.kill();
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [capabilities.length]);

  return (
    <div ref={sectionRef} className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:snap-none lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {capabilities.map((cap) => {
          const Icon = iconBySlug[cap.slug];
          return (
            <Link
              key={cap.slug}
              href={`/services/${cap.slug}`}
              className="group flex w-[82vw] shrink-0 snap-start flex-col rounded-2xl border border-navy-900/[0.06] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-royal-600/30 hover:shadow-lg dark:border-white/[0.08] dark:bg-white/[0.045] sm:w-[380px]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-50 text-royal-600 dark:bg-royal-600/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold text-ink dark:text-white">
                {cap.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-gray">{cap.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
