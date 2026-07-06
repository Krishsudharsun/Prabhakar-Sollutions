import type { Metadata } from "next";
import { Target, Eye, Heart, Milestone, Award, Briefcase, Linkedin, Mic } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Us — Our Mission, Values & Founder Story",
  description:
    "ScaleForge exists to remove founders as the bottleneck in their own business. Learn our mission, values, and the story behind our founder.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Target, title: "Implementation over ideas", description: "We're measured by what's live and running, not what's documented in a proposal." },
  { icon: Heart, title: "Founder-first thinking", description: "Every recommendation is filtered through: would I want this if it were my company?" },
  { icon: Eye, title: "Radical clarity", description: "Fixed scope, fixed price, honest fit assessments — no vague retainers." },
];

const journey = [
  { year: "[Year]", title: "[Milestone — e.g. how the company started]", description: "[One sentence of detail about this milestone.]" },
  { year: "[Year]", title: "[Milestone — e.g. a key service or capability added]", description: "[One sentence of detail about this milestone.]" },
  { year: "[Year]", title: "[Milestone — e.g. a methodology or process formalized]", description: "[One sentence of detail about this milestone.]" },
  { year: "[Year]", title: "[Milestone — where the company is today]", description: "[One sentence of detail about this milestone.]" },
];

const achievements = [
  { icon: Award, label: "[XX] [projects/audits/engagements completed]" },
  { icon: Briefcase, label: "[Relevant past role or credential]" },
  { icon: Milestone, label: "[Another quantifiable achievement]" },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]} />

      <section className="pb-20 pt-36">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">About us</p>
            <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-white">
              We exist to get founders out of the daily bottleneck
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-gray">
              ScaleForge was built on a simple premise: most operational chaos isn't a
              people problem, it's a systems problem — and it's fixable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="border-t border-navy-900/[0.06] bg-surface py-20 dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-3">
            <ScrollReveal>
              <div className="h-full rounded-2xl border border-navy-900/[0.06] bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <Target className="h-6 w-6 text-royal-600" />
                <h2 className="mt-4 font-heading text-lg font-semibold text-ink dark:text-white">Mission</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-gray">
                  Replace founder-dependent chaos with documented, automated systems —
                  so growth doesn't require the founder in every room.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="h-full rounded-2xl border border-navy-900/[0.06] bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <Eye className="h-6 w-6 text-royal-600" />
                <h2 className="mt-4 font-heading text-lg font-semibold text-ink dark:text-white">Vision</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-gray">
                  A world where small, founder-led businesses operate with the same
                  systemic rigor as companies ten times their size.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="h-full rounded-2xl border border-navy-900/[0.06] bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <Heart className="h-6 w-6 text-royal-600" />
                <h2 className="mt-4 font-heading text-lg font-semibold text-ink dark:text-white">Values</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-gray">
                  Implementation over ideas, founder-first thinking, and radical
                  clarity in every engagement.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <StaggerGroup className="mt-6 grid gap-6 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl border border-navy-900/[0.06] bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                  <Icon className="h-5 w-5 text-emerald-600" />
                  <h3 className="mt-3 font-heading text-base font-semibold text-ink dark:text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-gray">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Journey timeline — genuine chronological sequence */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Our journey</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink dark:text-white">
              From solo consulting to a full methodology
            </h2>
          </ScrollReveal>

          <div className="mx-auto mt-14 max-w-2xl space-y-8">
            {journey.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.05}>
                <div className="flex gap-5">
                  <span className="w-16 shrink-0 font-heading text-lg font-bold text-royal-600">{item.year}</span>
                  <div className="border-l border-navy-900/10 pl-5 dark:border-white/10">
                    <h3 className="font-heading text-base font-semibold text-ink dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-gray">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="speaking" className="border-t border-navy-900/[0.06] bg-surface py-20 dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <ScrollReveal>
              <div className="mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-royal-700 lg:mx-0">
                <div className="flex h-full w-full items-center justify-center font-heading text-6xl font-bold text-white/20">
                  {siteConfig.founder.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 text-ink-gray hover:border-royal-600 hover:text-royal-600 dark:border-white/10" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={siteConfig.social.spotify} target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 text-ink-gray hover:border-royal-600 hover:text-royal-600 dark:border-white/10" aria-label="Podcast">
                  <Mic className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Badge>Meet the founder</Badge>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink dark:text-white">
                {siteConfig.founder.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-royal-600">{siteConfig.founder.role}</p>
              <p className="mt-5 text-sm leading-relaxed text-ink-gray sm:text-base">
                [Add 2–3 sentences on the founder's background before this company —
                relevant past roles, what they built or scaled, and the specific
                experience that shaped how this company operates.]
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-gray sm:text-base">
                [Add a second paragraph — speaking, podcast, or community
                involvement if relevant, or simply more on what they're focused
                on today.]
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {achievements.map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-xl border border-navy-900/[0.06] bg-white p-4 dark:border-white/[0.06] dark:bg-white/[0.03]">
                    <Icon className="h-4 w-4 text-emerald-600" />
                    <p className="mt-2 text-xs leading-snug text-ink-gray">{label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
