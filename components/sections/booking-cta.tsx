import Link from "next/link";
import { ArrowUpRight, CalendarCheck } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";

export function BookingCTA() {
  return (
    <section className="py-24">
      <div className="container">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />
            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-400">
                <CalendarCheck className="h-6 w-6" />
              </div>
              <h2 className="mx-auto mt-6 max-w-xl font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                See exactly where your operations are leaking time
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/60 sm:text-base">
                Book a free 30-minute discovery call. We'll diagnose your biggest
                bottleneck and tell you honestly whether we can help — no pressure, no
                generic pitch.
              </p>
              <div className="mt-9 flex justify-center">
                <Button asChild size="lg">
                  <Link href="/apply">
                    Book your free call <ArrowUpRight className="h-4 w-4" />
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
