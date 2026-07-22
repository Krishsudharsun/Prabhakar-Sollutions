"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Animates a numeric value counting up when it scrolls into view.
 * Non-numeric characters (%, x, +, k, wks...) are preserved as a suffix.
 */
export function AnimatedCounter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }
    const [, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const counter = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: target,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: () => {
          el.textContent = `${counter.val.toFixed(decimals)}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
