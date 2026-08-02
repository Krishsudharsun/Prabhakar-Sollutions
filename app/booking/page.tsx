import type { Metadata } from "next";
import { ScrollReveal } from "@/components/scroll-reveal";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { BreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Book a Discovery Call",
  description: "Book a free 30-minute discovery call to diagnose your biggest operational bottleneck.",
  alternates: { canonical: "/booking" },
};

export default function BookingPage() {
  return (
    <section className="pb-24 pt-36">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Booking", url: "/booking" }]} />
      <div className="container">
        <ScrollReveal className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Discovery call</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink dark:text-white">
            Pick a time that works for you
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-gray">
            30 minutes, no pressure. We'll ask about your biggest bottleneck and tell
            you honestly whether we're a fit.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <CalendlyEmbed />
        </ScrollReveal>
      </div>
    </section>
  );
}
