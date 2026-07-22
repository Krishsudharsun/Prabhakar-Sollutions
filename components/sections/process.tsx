import { ScrollReveal } from "@/components/scroll-reveal";

const steps = [
  {
    number: "01",
    title: "Discovery call",
    description: "We learn your biggest bottleneck and tell you honestly whether we're the right fit, no pitch if we're not.",
  },
  {
    number: "02",
    title: "Audit & diagnosis",
    description: "We map how work actually moves through your business today and quantify where it breaks down.",
  },
  {
    number: "03",
    title: "System design",
    description: "You get a prioritized, fixed-scope plan ranked by impact, not a binder that sits on a shelf.",
  },
  {
    number: "04",
    title: "Implement",
    description: "Testing with your team and implement it until we recognize that the team functions without the founder.",
  },
  {
    number: "05",
    title: "Handoff & training",
    description: "Your team is trained to run and evolve the system, you own everything, with no lock-in.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">How it works</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
            A fixed five-step process, every time
          </h2>
        </ScrollReveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-6 top-2 bottom-2 hidden w-px bg-navy-900/10 sm:block dark:bg-white/10" />
          <div className="space-y-10">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.05}>
                <div className="relative flex gap-6 sm:pl-0">
                  <div className="relative z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy-900/10 bg-white font-heading text-sm font-bold text-royal-600 sm:flex dark:border-white/10 dark:bg-navy-900">
                    {step.number}
                  </div>
                  <div className="flex-1 rounded-2xl border border-navy-900/[0.06] bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                    <div className="mb-1 font-heading text-xs font-bold text-royal-600 sm:hidden">{step.number}</div>
                    <h3 className="font-heading text-lg font-semibold text-ink dark:text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-gray">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
