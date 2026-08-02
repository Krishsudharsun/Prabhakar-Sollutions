import Link from "next/link";
import { ArrowRight, Network, ClipboardList, Bot, Workflow, Gauge } from "lucide-react";
import { getServiceBySlug } from "@/lib/data/services";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";

const capabilities = [
  { slug: "business-operations-optimization", icon: Gauge },
  { slug: "sop-documentation", icon: ClipboardList },
  { slug: "ai-automation", icon: Bot },
  { slug: "workflow-automation", icon: Workflow },
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
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-royal-600 dark:bg-surface-dark">
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
          <StaggerGroup className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => {
              const service = getServiceBySlug(cap.slug)!;
              const Icon = cap.icon;
              return (
                <StaggerItem key={cap.slug}>
                  <Link
                    href={`/services/${cap.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-navy-900/[0.06] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-royal-600/30 hover:shadow-lg dark:border-white/[0.08] dark:bg-white/[0.045]"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-50 text-royal-600 dark:bg-royal-600/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 font-heading text-base font-semibold text-ink dark:text-white">
                      {service.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-gray">
                      {service.heroSummary}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </ScrollReveal>
      </div>
    </section>
  );
}
