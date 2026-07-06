import Link from "next/link";
import { ArrowRight, Settings2, Bot, FileText, Workflow, Network } from "lucide-react";
import { services } from "@/lib/data/services";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";

const icons = [Settings2, Bot, FileText, Workflow, Network];

export function ServicesOverview() {
  return (
    <section className="py-24">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">What we do</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
            Five services. One outcome: a business that runs without you.
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={service.slug} className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-navy-900/[0.06] bg-white p-7 transition-colors hover:border-royal-600/30 dark:border-white/[0.06] dark:bg-white/[0.03]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-royal-50 text-royal-600 dark:bg-royal-600/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-lg font-semibold text-ink dark:text-white">
                    {service.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-gray">
                    {service.heroSummary}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-royal-600">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
