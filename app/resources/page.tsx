import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { NewsletterGate } from "@/components/forms/newsletter-gate";

export const metadata: Metadata = {
  title: "Free Resources: Templates, Checklists & Guides",
  description: "Free templates, checklists, and ebooks to help founders document, automate, and systemize their business operations.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <section className="pb-24 pt-36">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }]} />
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Free resources</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-white">
            Templates and checklists, free
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-gray">
            The same tools we use with paying clients, coming soon.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05} className="mx-auto mt-14 max-w-xl">
          <div className="flex flex-col items-center rounded-2xl border border-navy-900/[0.06] bg-white p-10 text-center dark:border-white/[0.08] dark:bg-white/[0.045]">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-royal-50 text-royal-600 dark:bg-royal-600/10">
              <Sparkles className="h-6 w-6" />
            </div>
            <h2 className="mt-5 font-heading text-lg font-semibold text-ink dark:text-white">
              Coming Soon
            </h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-gray">
              We're preparing valuable business process resources, guides, templates, and
              implementation materials. Check back soon.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mx-auto mt-8 max-w-xl">
          <div className="rounded-3xl border border-navy-900/[0.06] bg-white p-8 text-center dark:border-white/[0.08] dark:bg-white/[0.045]">
            <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">
              Get notified when resources launch
            </h2>
            <div className="mt-5">
              <NewsletterGate />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
