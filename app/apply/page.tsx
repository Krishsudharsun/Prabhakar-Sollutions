import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { QualificationForm } from "@/components/forms/qualification-form";
import { BreadcrumbSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Apply for a Discovery Call",
  description: "Tell us about your business and biggest operational bottleneck to see if we're a fit, then book your free discovery call.",
  alternates: { canonical: "/apply" },
};

const checklist = [
  "You lead a founder-run business doing $500K+ in annual revenue",
  "You're the bottleneck for at least one recurring decision",
  "You're ready to change how things run, not just talk about it",
];

export default function ApplyPage() {
  return (
    <section className="pb-24 pt-36">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Apply", url: "/apply" }]} />
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Apply for a call</p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
              Let's see if we're the right fit
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-gray sm:text-base">
              We only take on engagements we're confident we can deliver results for.
              This quick form helps us prepare for a focused call instead of a generic
              sales pitch.
            </p>

            <div className="mt-8 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-gray/70">
                This is a good fit if:
              </p>
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-ink-gray">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl border border-navy-900/[0.06] bg-white p-6 sm:p-8 dark:border-white/[0.06] dark:bg-white/[0.03]">
              <QualificationForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
