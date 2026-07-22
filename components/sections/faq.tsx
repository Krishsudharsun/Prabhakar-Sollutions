import { ScrollReveal } from "@/components/scroll-reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { generalFaqs } from "@/lib/data/faqs";
import { FaqSchema } from "@/components/seo/json-ld";

export function Faq() {
  return (
    <section className="py-24">
      <FaqSchema faqs={generalFaqs} />
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
            Questions founders ask before booking a call
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-14 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {generalFaqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
