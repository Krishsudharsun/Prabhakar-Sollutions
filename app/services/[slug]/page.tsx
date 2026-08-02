import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  ClipboardCheck,
  Users,
  Sparkles,
  Compass,
  ListChecks,
} from "lucide-react";
import { services, getServiceBySlug } from "@/lib/data/services";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ServiceSchema, BreadcrumbSchema } from "@/components/seo/json-ld";
import { AnimatedCounter } from "@/components/animated-counter";
import { siteConfig } from "@/lib/site-config";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} — What It Is & How It Works`,
    description: service.heroSummary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.name, description: service.heroSummary },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <article className="pb-24 pt-36">
      <ServiceSchema name={service.name} description={service.definition} url={`/services/${service.slug}`} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.name, url: `/services/${service.slug}` },
        ]}
      />

      {/* Hero */}
      <header className="container">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">{service.eyebrow}</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-white">
            {service.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-gray">{service.heroSummary}</p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="/apply">Book Your Free Operations Audit <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </ScrollReveal>
      </header>

      {/* Quick stats bar */}
      <div className="container mt-16">
        <div className="grid grid-cols-3 gap-6 rounded-2xl border border-navy-900/[0.06] bg-white py-8 dark:border-white/[0.08] dark:bg-white/[0.045]">
          {service.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl font-bold text-royal-600 sm:text-3xl">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-1 px-2 text-[11px] leading-tight text-ink-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-20 max-w-5xl">
        {/* Mission statement — subheadline + intro */}
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl dark:text-white">
            {service.subheadline}
          </h2>
          {service.introParagraphs.map((p, i) => (
            <p
              key={i}
              className={
                p.length < 60
                  ? "mt-2 text-base font-medium text-ink-gray"
                  : "mt-4 text-base leading-relaxed text-ink-gray"
              }
            >
              {p}
            </p>
          ))}
          <div className="mt-7 flex justify-center">
            <Button asChild size="lg">
              <Link href="/apply">Book Your Free Operations Audit <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </ScrollReveal>

        {/* Typical Engagement feature cards */}
        <ScrollReveal className="mt-16">
          <h2 className="text-center font-heading text-xl font-bold text-ink dark:text-white">
            Typical Engagement
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {service.engagementFeatures.map((f, i) => {
              const Icon = [Clock, Layers, ClipboardCheck][i % 3];
              return (
                <div
                  key={f.title}
                  className="rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.08] dark:bg-white/[0.045]"
                >
                  <Icon className="h-5 w-5 text-royal-600" />
                  <h3 className="mt-3 font-heading text-sm font-semibold text-ink dark:text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-gray">{f.description}</p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Definition block — GEO-friendly concise summary, plus expanded explanation */}
        <ScrollReveal className="mt-14">
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">
            What is {service.name}?
          </h2>
          <p className="mt-4 rounded-2xl border-l-4 border-royal-600 bg-royal-50/50 p-5 text-base leading-relaxed text-ink dark:bg-royal-600/5 dark:text-white/90">
            {service.definition}
          </p>
          {service.whatIsExpanded.map((p, i) => (
            <p key={i} className="mt-4 text-base leading-relaxed text-ink-gray">
              {p}
            </p>
          ))}
        </ScrollReveal>

        {/* Who needs it */}
        <ScrollReveal className="mt-14">
          <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-ink dark:text-white">
            <Users className="h-5 w-5 text-royal-600" /> Who Is This For?
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.whoNeedsIt.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed text-ink-gray dark:bg-white/[0.045]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Benefits */}
        <ScrollReveal className="mt-14">
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">{service.benefitsHeading}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.08] dark:bg-white/[0.045]">
                <h3 className="font-heading text-base font-semibold text-ink dark:text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-gray">{b.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Process / Framework */}
        <ScrollReveal className="mt-14">
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">{service.processHeading}</h2>
          <ol className="mt-5 space-y-4">
            {service.process.map((step, i) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.08] dark:bg-white/[0.045]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal-50 font-heading text-sm font-bold text-royal-600 dark:bg-royal-600/10">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-ink dark:text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-gray">{step.description}</p>
                  {step.bullets && (
                    <ul className="mt-3 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-ink-gray">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-royal-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {step.note && <p className="mt-3 text-sm italic text-ink-gray/80">{step.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        {/* What can we automate */}
        {service.whatCanWeAutomate && (
          <ScrollReveal className="mt-14">
            <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-ink dark:text-white">
              <Sparkles className="h-5 w-5 text-royal-600" /> What Can We Automate?
            </h2>
            {service.whatCanWeAutomate.intro && (
              <p className="mt-3 text-sm leading-relaxed text-ink-gray">{service.whatCanWeAutomate.intro}</p>
            )}
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.whatCanWeAutomate.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-ink-gray dark:bg-white/[0.045]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
            {service.whatCanWeAutomate.closing && (
              <p className="mt-4 text-sm leading-relaxed text-ink-gray">{service.whatCanWeAutomate.closing}</p>
            )}
          </ScrollReveal>
        )}

        {/* What makes our approach different */}
        {service.whatMakesDifferent && (
          <ScrollReveal className="mt-14">
            <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">
              What Makes Our Approach Different?
            </h2>
            <div className="mt-4 space-y-2">
              {service.whatMakesDifferent.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-gray">
                  {p}
                </p>
              ))}
            </div>
            <p className="mt-4 font-heading text-sm font-semibold text-ink dark:text-white">
              {service.whatMakesDifferent.leadIn}
            </p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {service.whatMakesDifferent.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed text-ink-gray dark:bg-white/[0.045]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {b}
                </li>
              ))}
            </ul>
            {service.whatMakesDifferent.closing && (
              <p className="mt-4 text-base font-medium text-ink dark:text-white">{service.whatMakesDifferent.closing}</p>
            )}
          </ScrollReveal>
        )}

        {/* What do we evaluate */}
        {service.whatDoWeEvaluate && (
          <ScrollReveal className="mt-14">
            <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-ink dark:text-white">
              <Compass className="h-5 w-5 text-royal-600" /> What Do We Evaluate?
            </h2>
            {service.whatDoWeEvaluate.intro && (
              <p className="mt-3 text-sm leading-relaxed text-ink-gray">{service.whatDoWeEvaluate.intro}</p>
            )}
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.whatDoWeEvaluate.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-ink-gray dark:bg-white/[0.045]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
            {service.whatDoWeEvaluate.closing && (
              <p className="mt-4 text-sm leading-relaxed text-ink-gray">{service.whatDoWeEvaluate.closing}</p>
            )}
          </ScrollReveal>
        )}

        {/* What's included */}
        {service.whatsIncluded && (
          <ScrollReveal className="mt-14">
            <h2 className="flex items-center gap-2 font-heading text-2xl font-bold text-ink dark:text-white">
              <ListChecks className="h-5 w-5 text-royal-600" /> What's Included
            </h2>
            {service.whatsIncluded.intro && (
              <p className="mt-3 text-sm leading-relaxed text-ink-gray">{service.whatsIncluded.intro}</p>
            )}
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {service.whatsIncluded.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-ink-gray dark:bg-white/[0.045]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
            {service.whatsIncluded.closing && (
              <p className="mt-4 text-sm leading-relaxed text-ink-gray">{service.whatsIncluded.closing}</p>
            )}
          </ScrollReveal>
        )}

        {/* Engagement */}
        <ScrollReveal className="mt-14 rounded-2xl border border-navy-900/[0.06] bg-white p-6 dark:border-white/[0.08] dark:bg-white/[0.045] sm:p-8">
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">Engagement</h2>
          <p className="mt-3 text-base leading-relaxed text-ink-gray">{service.engagement.summary}</p>

          {service.engagement.dependencies && (
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.engagement.dependencies.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-sm text-ink-gray">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-royal-600" />
                  {d}
                </li>
              ))}
            </ul>
          )}

          {service.engagement.deliverables && (
            <>
              <p className="mt-5 font-heading text-sm font-semibold text-ink dark:text-white">You'll receive:</p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {service.engagement.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 rounded-xl bg-navy-900/[0.03] px-4 py-3 text-sm leading-relaxed text-ink-gray dark:bg-white/[0.06]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    {d}
                  </li>
                ))}
              </ul>
            </>
          )}

          {service.engagement.closingNotes?.map((n, i) => (
            <p key={i} className="mt-4 text-sm leading-relaxed text-ink-gray">
              {n}
            </p>
          ))}
        </ScrollReveal>

        {/* Business outcomes */}
        <ScrollReveal className="mt-14">
          <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">{service.outcomesHeading}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {service.businessOutcomes.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 text-sm leading-relaxed text-ink-gray dark:bg-white/[0.045]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                {item}
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Comparison table */}
        {service.comparisonTable && (
          <ScrollReveal className="mt-14">
            <h2 className="font-heading text-2xl font-bold text-ink dark:text-white">{service.comparisonTable.caption}</h2>
            <div className="mt-5 overflow-x-auto rounded-2xl border border-navy-900/[0.06] dark:border-white/[0.08]">
              <table className="w-full min-w-[500px] text-left text-sm">
                <thead className="bg-navy-900/[0.03] dark:bg-white/[0.05]">
                  <tr>
                    {service.comparisonTable.headers.map((h) => (
                      <th key={h} className="px-5 py-3 font-heading font-semibold text-ink dark:text-white">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {service.comparisonTable.rows.map((row, i) => (
                    <tr key={i} className="border-t border-navy-900/[0.06] dark:border-white/[0.08]">
                      {row.map((cell, j) => (
                        <td key={j} className={cellClass(j === 0)}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        )}

        {/* Author / last updated — GEO trust signal */}
        <p className="mt-14 border-t border-navy-900/[0.06] pt-6 text-xs text-ink-gray/70 dark:border-white/[0.08]">
          Written by {siteConfig.founder.name}, {siteConfig.founder.role} at {siteConfig.name}. Last
          updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}.
        </p>

        {service.finalCTA ? (
          <div className="mt-10 rounded-3xl bg-navy-900 p-8 text-center sm:p-10">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">{service.finalCTA.heading}</h2>
            <div className="mx-auto mt-4 max-w-2xl space-y-3">
              {service.finalCTA.paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-white/70">
                  {boldFreeAudit(p)}
                </p>
              ))}
            </div>
            <div className="mt-7 flex justify-center">
              <Button asChild size="lg">
                <Link href="/apply">Book Your Free Operations Audit</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-3xl bg-navy-900 p-8 text-center sm:p-10">
            <h2 className="font-heading text-xl font-bold text-white sm:text-2xl">
              Ready to fix this in your business?
            </h2>
            <div className="mt-6 flex justify-center">
              <Button asChild size="lg">
                <Link href="/apply">Book Your Free Operations Audit</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

function cellClass(isFirst: boolean) {
  const base = "px-5 py-3 text-ink-gray";
  return isFirst ? `${base} font-medium text-ink dark:text-white` : base;
}

function boldFreeAudit(text: string) {
  const marker = "Free Operations Audit";
  const idx = text.indexOf(marker);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <strong className="font-semibold text-white">{marker}</strong>
      {text.slice(idx + marker.length)}
    </>
  );
}
