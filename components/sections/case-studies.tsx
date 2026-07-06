import { caseStudies } from "@/lib/data/case-studies";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";

export function CaseStudies() {
  return (
    <section id="case-studies" className="border-t border-navy-900/[0.06] bg-surface py-24 dark:border-white/[0.06] dark:bg-navy-900">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-signal-600">Case studies</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
            Real engagements, real numbers
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.slug}>
              <article className="flex h-full flex-col rounded-2xl border border-navy-900/[0.06] bg-white p-7 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <Badge variant="outline">{cs.industry}</Badge>
                <h3 className="mt-4 font-heading text-lg font-semibold text-ink dark:text-white">{cs.client}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-gray">{cs.challenge}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-gray">{cs.solution}</p>
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-navy-900/[0.06] pt-5 dark:border-white/[0.06]">
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-heading text-xl font-bold text-emerald-600">{r.metric}</p>
                      <p className="mt-1 text-[11px] leading-tight text-ink-gray">{r.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
