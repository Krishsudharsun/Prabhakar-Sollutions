import Link from "next/link";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

interface BookingCTAProps {
  heading?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
}

export function BookingCTA({
  heading = "See exactly where your operations are leaking time",
  description = "Book a free 30-minute discovery call. We'll diagnose your biggest bottleneck and tell you honestly whether we can help, no pressure, no generic pitch.",
  buttonLabel = "Book Your Free Operations Audit",
  href = "/apply",
}: BookingCTAProps) {
  return (
    <section className="py-16">
      <div className="container">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-20 text-center sm:px-16 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />
            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-emerald-400">
                <CalendarCheck className="h-7 w-7" />
              </div>
              <h2 className="mx-auto mt-7 max-w-2xl font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {heading}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
                {description}
              </p>
              <div className="mt-10 flex justify-center">
                <Button asChild size="lg">
                  <Link href={href}>
                    {buttonLabel} <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
