import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Settings2, Bot, FileText, Workflow, Network } from "lucide-react";
import { services } from "@/lib/data/services";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

const icons = [Settings2, Bot, FileText, Workflow, Network];

export const metadata: Metadata = {
  title: "Services — Operations, AI Automation & Systemization",
  description:
    "Five services designed to remove founder bottlenecks: Business Operations Optimization, AI Automation, SOP Documentation, Workflow Automation, and Business Systemization.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <section className="pb-24 pt-36">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Services", url: "/services" }]} />
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Services</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-white">
            Everything a scaling business needs to stop depending on you
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-gray">
            Each service works standalone or combined into a full systemization
            engagement — priced fixed, scoped clearly, built with your team.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-navy-900/[0.06] bg-white p-8 transition-colors hover:border-royal-600/30 dark:border-white/[0.06] dark:bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal-50 text-royal-600 dark:bg-royal-600/10">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-ink-gray/60">
                      {service.eyebrow}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-ink dark:text-white">{service.name}</h2>
                  <p className="flex-1 text-sm leading-relaxed text-ink-gray">{service.heroSummary}</p>
                  <div className="flex items-center justify-between border-t border-navy-900/[0.06] pt-4 text-sm dark:border-white/[0.06]">
                    <span className="text-ink-gray">Timeline: {service.timeline.split(".")[0]}</span>
                    <span className="inline-flex items-center gap-1.5 font-semibold text-royal-600">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
