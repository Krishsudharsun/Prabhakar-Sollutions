import { ShieldCheck, Gauge, Layers, Users } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";
import { AnimatedCounter } from "@/components/animated-counter";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Implementation, not just strategy",
    description: "We stay until the SOPs are followed and the automations are live — not just documented in a deck.",
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
  {
    icon: Users,
    title: "Built for your team to run",
    description: "Everything is documented and handed off so your team owns it — no dependency on us afterward.",
  },
];

const stats = [
  { value: "[XX]+", label: "[stat — e.g. audits completed]" },
  { value: "[XX]+", label: "[stat — e.g. businesses systemized]" },
  { value: "[XX]%", label: "[stat — e.g. avg. time recovered]" },
  { value: "[X.X]", label: "[stat — e.g. avg. client satisfaction /5]" },
];

export function WhyChooseUs() {
  return (
    <section className="border-t border-navy-900/[0.06] bg-navy-900 py-24 text-white dark:border-white/[0.06]">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Why ScaleForge</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            We're hired to fix it, not just describe it
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-2 text-xs leading-snug text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
