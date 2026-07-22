import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock, DollarSign, TrendingUp, Users } from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ServiceSchema, FaqSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import { AnimatedCounter } from "@/components/animated-counter";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — What It Is, Cost & ROI`,
    description: service.heroSummary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.name, description: service.heroSummary },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <article className="pb-24 pt-36">
      <ServiceSchema name={service.name} description={service.definition} url={`/services/${service.slug}`} />
      <FaqSchema faqs={service.faqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <header className="container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">{service.eyebrow}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-white">
            {service.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-gray">{service.heroSummary}</p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="/apply">Book Your Free Operations Audit <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </header>

      {/* Quick stats bar */}
      <div className="container mt-16">
        <div className="grid grid-cols-3 gap-6 rounded-2xl border border-navy-900/[0.06] bg-white py-8 dark:border-white/[0.06] dark:bg-white/[0.03]">
          {service.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl font-bold text-royal-600 sm:text-3xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-1 px-2 text-[11px] leading-tight text-ink-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-20 max-w-3xl">
        {/* Definition block — GEO-friendly concise summary */}
        <ScrollReveal>
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">
            What is {service.name}?
          </h2>
          <p className="mt-4 rounded-2xl border-l-4 border-royal-600 bg-royal-50/50 p-5 text-base leading-relaxed text-ink dark:bg-royal-600/5 dark:text-white/90">
            {service.definition}
          </p>
        </ScrollReveal>

        {/* Who needs it */}
        <ScrollReveal className="mt-14">
          <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-ink dark:text-white">
            <Users className="h-5 w-5 text-royal-600" /> Who needs {service.shortName}?
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.whoNeedsIt.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed text-ink-gray dark:bg-white/[0.03]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Benefits */}
        <ScrollReveal className="mt-14">
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">Benefits</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <h3 className="font-heading text-base font-semibold text-ink dark:text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-gray">{b.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Process */}
        <ScrollReveal className="mt-14">
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">How the process works</h2>
          <ol className="mt-5 space-y-4">
            {service.process.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal-50 font-heading text-sm font-bold text-royal-600 dark:bg-royal-600/10">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-ink dark:text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-gray">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        {/* Cost, Timeline, ROI */}
        <ScrollReveal className="mt-14 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.03]">
            <DollarSign className="h-5 w-5 text-signal-600" />
            <h3 className="mt-3 font-heading text-sm font-semibold text-ink dark:text-white">Cost</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-gray">{service.cost}</p>
          </div>
          <div className="rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.03]">
            <Clock className="h-5 w-5 text-royal-600" />
            <h3 className="mt-3 font-heading text-sm font-semibold text-ink dark:text-white">Timeline</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-gray">{service.timeline}</p>
          </div>
          <div className="rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.03]">
            <TrendingUp className="h-5 w-5 text-emerald-600" />
            <h3 className="mt-3 font-heading text-sm font-semibold text-ink dark:text-white">ROI</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-gray">{service.roi}</p>
          </div>
        </ScrollReveal>

        {/* Comparison table */}
        <ScrollReveal className="mt-14">
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">How this compares</h2>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-navy-900/[0.06] dark:border-white/[0.06]">
            <table className="w-full min-w-[500px] text-left text-sm">
              <thead className="bg-navy-900/[0.03] dark:bg-white/[0.05]">
                <tr>
                  {service.comparisonTable.headers.map((h) => (
                    <th key={h} className="px-5 py-3 font-heading font-semibold text-ink dark:text-white">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service.comparisonTable.rows.map((row, i) => (
                  <tr key={i} className="border-t border-navy-900/[0.06] dark:border-white/[0.06]">
                    {row.map((cell, j) => (
                      <td key={j} className={cn2(j === 0, "px-5 py-3 text-ink-gray")}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* FAQs */}
        <ScrollReveal className="mt-14">
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="mt-5 w-full">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        {/* Author / last updated — GEO trust signal */}
        <p className="mt-14 border-t border-navy-900/[0.06] pt-6 text-xs text-ink-gray/70 dark:border-white/[0.06]">
          Written by {siteConfig.founder.name}, {siteConfig.founder.role} at {siteConfig.name}. Last
          updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}.
        </p>

        <div className="mt-10 rounded-3xl bg-navy-900 p-8 text-center sm:p-10">
          <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
            Ready to fix this in your business?
          </h2>
          <div className="mt-6 flex justify-center">
            <Button asChild size="lg">
              <Link href="/apply">Book Your Free Operations Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

function cn2(isFirst: boolean, base: string) {
  return isFirst ? `${base} font-medium text-ink dark:text-white` : base;
}
