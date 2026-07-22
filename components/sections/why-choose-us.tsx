import { ShieldCheck, Gauge, Layers } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Implementation, not just strategy",
    description: "We stay until the SOPs are followed and the automations are live, not just documented in a deck.",
  },
  {
    icon: Gauge,
    title: "Fixed scope, fixed price",
    description: "You know the cost and timeline before we start. No hourly billing, no scope creep.",
  },
  {
    icon: Layers,
    title: "Systems that compound",
    description: "Operations, automation, and documentation are designed together, not bolted on separately.",
  },
];

const resultStats = [
  { value: "75%", label: "Up to 75% less time spent onboarding new employees" },
  { value: "2X", label: "Doubling the value of the business" },
  { value: "0", label: "Reducing the number of errors to zero" },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-navy-900/[0.06] bg-navy-900 py-24 text-white dark:border-white/[0.06]">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Why Prabhakar Solutions</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            We're hired to fix it, not just describe it
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-3">
          {reasons.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-heading text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <ScrollReveal delay={0.1} className="mt-16">
        <div className="bg-royal-600 py-14">
          <div className="container">
            <h3 className="text-center font-heading text-xl font-bold uppercase tracking-wide text-white sm:text-2xl">
              Clients report results like...
            </h3>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {resultStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-4 rounded-2xl bg-white/10 px-6 py-8 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-900">
                    <span className="font-heading text-2xl font-bold text-white">
                      <AnimatedCounter value={stat.value} />
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-white/90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
