import type { Metadata } from "next";
import {
  Target, Eye, Milestone, Award, Briefcase,
  Linkedin, Mic, Instagram, Youtube, Twitter, Rss,
  Hammer, Heart, Layers, ShieldCheck, Search, Wrench, FileText, Bot, TrendingUp,
} from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "About Us: Our Mission, Values & Founder Story",
  description:
    "Prabhakar Solutions exists to remove founders as the bottleneck in their own business. Learn our mission, values, and the story behind our founder.",
  alternates: { canonical: "/about" },
};

const differentiators = [
  { icon: Hammer, title: "Implementation Over Ideas", description: "Ideas don't change businesses. Execution does. Every recommendation we make is designed to be implemented, not admired." },
  { icon: Heart, title: "Founder First", description: "\"If this were our business, would we actually do it?\" If the answer is no, we don't recommend it." },
  { icon: Eye, title: "Radical Clarity", description: "No vague retainers. No endless consulting hours. No hidden costs. Clear scope. Clear timelines. Clear outcomes." },
  { icon: Layers, title: "Systems Before Software", description: "Technology doesn't solve operational problems. Good systems do. We never recommend software until we've designed the right process." },
  { icon: ShieldCheck, title: "Build to Last", description: "We don't build temporary fixes. We build operating systems that continue improving long after the engagement ends." },
];

const methodologySteps = [
  { icon: Search, title: "Identify the Operational Bottleneck", description: "Discover where founder dependency is limiting growth." },
  { icon: Wrench, title: "Design the Right System", description: "Define roles, responsibilities, workflows, and decision paths." },
  { icon: FileText, title: "Document Everything", description: "Create SOPs, process documentation, and operational playbooks." },
  { icon: Bot, title: "Automate Repetitive Work", description: "Use AI and workflow automation to eliminate unnecessary manual tasks." },
  { icon: TrendingUp, title: "Train, Measure & Improve", description: "Ensure your team can confidently run and continuously improve the system without relying on the founder." },
];

const journey = [
  { year: "[Year]", title: "[Milestone: e.g. how the company started]", description: "[One sentence of detail about this milestone.]" },
  { year: "[Year]", title: "[Milestone: e.g. a key service or capability added]", description: "[One sentence of detail about this milestone.]" },
  { year: "[Year]", title: "[Milestone: e.g. a methodology or process formalized]", description: "[One sentence of detail about this milestone.]" },
  { year: "[Year]", title: "[Milestone: where the company is today]", description: "[One sentence of detail about this milestone.]" },
];

const achievements = [
  { icon: Award, label: "[XX] [projects/audits/engagements completed]" },
  { icon: Briefcase, label: "[Relevant past role or credential]" },
  { icon: Milestone, label: "[Another quantifiable achievement]" },
];

const founderSocials = [
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: Mic, href: siteConfig.social.spotify, label: "Podcast" },
  { icon: Rss, href: siteConfig.social.substack, label: "Substack" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "X" },
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
              We Build Businesses That Can Scale Without Their Founder.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-gray">
              Most businesses don't stop growing because they lack ambition. They stop
              growing because every important decision, approval, and process still
              depends on the founder.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-gray">
              At {siteConfig.longName}, we help ambitious founders replace operational
              chaos with scalable systems, documented processes, AI automation, and
              workflows that allow their business to grow with confidence, not constant
              firefighting.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="border-t border-navy-900/[0.06] bg-surface py-20 dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2">
            <ScrollReveal>
              <div className="h-full rounded-2xl border border-navy-900/[0.06] bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <Target className="h-6 w-6 text-royal-600" />
                <h2 className="mt-4 font-heading text-lg font-semibold text-ink dark:text-white">Mission</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-gray">
                  Build Businesses That Run on Systems, Not Heroics.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <div className="h-full rounded-2xl border border-navy-900/[0.06] bg-white p-6 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <Eye className="h-6 w-6 text-royal-600" />
                <h2 className="mt-4 font-heading text-lg font-semibold text-ink dark:text-white">Vision</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-gray">
                  Every Growing Business Should Operate Like an Enterprise.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-20">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Why we exist</p>
            <p className="mt-5 text-lg leading-relaxed text-ink-gray">
              Founders build businesses to create impact, not to manage daily operations.
              We help replace founder dependent chaos with scalable systems, processes,
              and automation so businesses can grow without relying on the founder for
              every decision.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="border-t border-navy-900/[0.06] bg-surface py-20 dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">What makes us different</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink dark:text-white">
              We Don't Just Recommend Systems. We Build Them.
            </h2>
            <p className="mt-3 text-base text-ink-gray">We stay until the systems are operating inside your business.</p>
          </ScrollReveal>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(({ icon: Icon, title, description }) => (
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

      {/* Journey timeline, genuine chronological sequence */}
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

      {/* Our Methodology */}
      <section className="border-t border-navy-900/[0.06] bg-surface py-20 dark:border-white/[0.06] dark:bg-navy-900">
        <div className="container">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Our methodology</p>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink dark:text-white">
              The Business Process Systemization Framework&trade;
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-gray">
              Instead of overwhelming businesses with dozens of disconnected
              improvements, we focus on building one complete operational system.
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-14 max-w-2xl space-y-4">
            {methodologySteps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.05}>
                <div className="flex gap-4 rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.03]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-royal-50 text-royal-600 dark:bg-royal-600/10">
                    <step.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-royal-600">Step {i + 1}</p>
                    <h3 className="mt-0.5 font-heading text-base font-semibold text-ink dark:text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-gray">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section id="speaking" className="py-20">
        <div className="container">
          <div className="grid items-start gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <ScrollReveal>
              <div className="mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-royal-700 lg:mx-0">
                <div className="flex h-full w-full items-center justify-center font-heading text-6xl font-bold text-white/20">
                  {siteConfig.founder.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {founderSocials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 text-ink-gray hover:border-royal-600 hover:text-royal-600 dark:border-white/10"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Badge>Meet the founder</Badge>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-ink dark:text-white">
                {siteConfig.founder.name}
              </h2>
              <p className="mt-1 text-sm font-medium text-royal-600">{siteConfig.founder.role}</p>
              <p className="mt-5 text-sm leading-relaxed text-ink-gray sm:text-base">
                [Add 2–3 sentences on the founder's background before this company,
                relevant past roles, what they built or scaled, and the specific
                experience that shaped how this company operates.]
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-gray sm:text-base">
                [Add a second paragraph, speaking, podcast, or community
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
