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
 * Slides the card track horizontally as the section scrolls through the
 * viewport normally — no pinning, no scroll-jacking. The page keeps
 * scrolling exactly as it would anywhere else; every section above and
 * below stays static and fully visible in its normal document position.
 * Only the card track's horizontal position is tied to how far the
 * section itself has scrolled past: 0% when it first enters the bottom
 * of the viewport, 100% by the time it exits the top, so the first card
 * starts flush left and the last card ends flush right with no blank
 * space at either end. On touch/small screens this is disabled and the
 * row becomes a natural, native horizontally-swipeable list instead.
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
        const tween = gsap.to(track, {
          x: () => -Math.max(track.scrollWidth - section.offsetWidth, 0),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });

        return () => tween.scrollTrigger?.kill();
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
