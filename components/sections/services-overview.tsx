import Link from "next/link";
import { ArrowRight, CheckCircle2, Network } from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";

const capabilities = [
  { label: "SOP Development", slug: "sop-documentation" },
  { label: "AI Automation", slug: "ai-automation" },
  { label: "Workflow Automation", slug: "workflow-automation" },
  { label: "Business Audit", slug: "business-operations-optimization" },
];

export function ServicesOverview() {
  const coreService = getServiceBySlug("business-systemization")!;

  return (
    <section className="py-24">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">What we do</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
            One outcome: a business that runs without you.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.05} className="mt-14">
          <Link
            href={`/services/${coreService.slug}`}
            className="group block rounded-3xl border border-royal-600/25 bg-royal-50/50 p-8 transition-colors hover:border-royal-600/40 dark:border-royal-600/25 dark:bg-royal-600/[0.06] sm:p-12"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-royal-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Core Solution
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-royal-600 dark:bg-navy-900">
                <Network className="h-4 w-4" />
              </div>
            </div>
            <h3 className="mt-5 font-heading text-2xl font-bold text-ink dark:text-white sm:text-3xl">
              {coreService.name}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-gray sm:text-base">
              {coreService.heroSummary}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mt-10">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink-gray/70">
            Included capabilities
          </p>
          <StaggerGroup className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.slug}>
                <Link
                  href={`/services/${cap.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-navy-900/[0.06] bg-white px-4 py-3.5 transition-colors hover:border-royal-600/30 dark:border-white/[0.06] dark:bg-white/[0.03]"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                  <span className="flex-1 text-sm font-medium text-ink dark:text-white">{cap.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ink-gray/40 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </ScrollReveal>
      </div>
    </section>
  );
}
