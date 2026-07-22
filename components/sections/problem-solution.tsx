import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

const problems = [
  "Every decision, big or small, still routes through you",
  "New hires take weeks to become productive because nothing is documented",
  "Your team retypes the same data into three different tools",
  "Growth means more chaos, not more leverage",
];

const solutions = [
  "Clear decision rights and documented processes your team runs without you",
  "A tested SOP library new hires can follow from day one",
  "Connected systems where data moves automatically between tools",
  "An operating system that gets stronger as you scale, not weaker",
];

export function ProblemSolution() {
  return (
    <section className="border-t border-navy-900/[0.06] bg-surface py-24 dark:border-white/[0.06] dark:bg-navy-900">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-signal-600">The gap</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
            Why Growing Businesses Get Stuck?
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <ScrollReveal delay={0.05}>
            <div className="h-full rounded-3xl border border-navy-900/[0.06] bg-white p-8 dark:border-white/[0.06] dark:bg-white/[0.03]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-50 text-signal-600">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink dark:text-white">Where it stalls today</h3>
              <ul className="mt-5 space-y-4">
                {problems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-gray">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="h-full rounded-3xl border border-emerald-600/20 bg-emerald-50/40 p-8 dark:border-emerald-600/20 dark:bg-emerald-600/5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600/10 text-emerald-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink dark:text-white">Where it lands with us</h3>
              <ul className="mt-5 space-y-4">
                {solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink-gray">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
