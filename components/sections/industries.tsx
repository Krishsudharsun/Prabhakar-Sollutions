import { ScrollReveal } from "@/components/scroll-reveal";
import {
  ShoppingBag, Briefcase, HeartPulse, Truck, Code2, GraduationCap,
} from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "E-commerce & DTC" },
  { icon: Briefcase, name: "Agencies & Consultancies" },
  { icon: HeartPulse, name: "Healthcare & Wellness" },
  { icon: Truck, name: "Logistics & Field Services" },
  { icon: Code2, name: "SaaS & Tech Startups" },
  { icon: GraduationCap, name: "Coaching & Education" },
];

export function Industries() {
  return (
    <section className="border-t border-navy-900/[0.06] bg-surface py-24 dark:border-white/[0.06] dark:bg-navy-900">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">Industries</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
            Built for founder-led businesses, whatever you sell
          </h2>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map(({ icon: Icon, name }, i) => (
            <ScrollReveal key={name} delay={i * 0.04}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-navy-900/[0.06] bg-white px-4 py-7 text-center transition-colors hover:border-royal-600/30 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-royal-50 text-royal-600 dark:bg-royal-600/10">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-medium leading-tight text-ink-gray">{name}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
