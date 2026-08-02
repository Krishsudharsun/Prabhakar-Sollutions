import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { generalFaqs } from "@/lib/data/faqs";
import { FaqSchema } from "@/components/seo/json-ld";

const sidebarChecklist = [
  "Free Operations Audit",
  "30-Minute Strategy Call",
  "No Sales Pressure",
  "Actionable Recommendations",
];

export function Faq() {
  return (
    <section className="relative overflow-hidden pb-24 pt-36">
      <FaqSchema faqs={generalFaqs} />

      {/* Subtle background decoration, matches the same treatment used on the booking CTA */}
      <div className="pointer-events-none absolute inset-0 bg-radial-fade opacity-60" />

      <div className="container relative">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[3fr_7fr] lg:gap-16">
          {/* Sticky sidebar */}
          <ScrollReveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">FAQ</p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
              Still Have Questions?
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-gray sm:text-base">
              Our team is happy to answer your questions and help determine whether
              we're the right fit for your business.
            </p>

            <div className="mt-7 space-y-3">
              {sidebarChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-medium text-ink dark:text-white/90">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {item}
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="mt-8 w-full sm:w-auto">
              <Link href="/apply">
                Book Free Audit <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>

          {/* Accordion */}
          <ScrollReveal delay={0.1}>
            <Accordion type="single" collapsible className="space-y-4">
              {generalFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-navy-900/[0.06] bg-white transition-colors hover:border-royal-600/30 dark:border-white/[0.08] dark:bg-white/[0.045] dark:hover:bg-white/[0.06]"
                >
                  <AccordionItem value={`item-${i}`} className="border-none">
                    <AccordionTrigger className="px-6 py-6">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">{faq.answer}</AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
