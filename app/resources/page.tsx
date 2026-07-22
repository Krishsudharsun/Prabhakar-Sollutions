import type { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckSquare, BookOpen, Download, ArrowDownToLine } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { NewsletterGate } from "@/components/forms/newsletter-gate";

export const metadata: Metadata = {
  title: "Free Resources: Templates, Checklists & Guides",
  description: "Free templates, checklists, and ebooks to help founders document, automate, and systemize their business operations.",
  alternates: { canonical: "/resources" },
};

const resources = [
  {
    icon: CheckSquare,
    type: "Checklist",
    title: "The Operations Audit Checklist",
    description: "The 24-point checklist we use internally to find hidden bottlenecks.",
    downloadUrl: "/resources/operations-audit-checklist.pdf",
  },
  { icon: FileText, type: "Template", title: "SOP Documentation Template", description: "The exact template we use to write SOPs that teams actually follow." },
  { icon: BookOpen, type: "Ebook", title: "The Founder's Guide to AI Automation", description: "A practical, non-technical guide to deciding what to automate first." },
  { icon: FileText, type: "Template", title: "Workflow Automation Blueprint", description: "A worksheet for mapping manual handoffs before you automate them." },
];

export default function ResourcesPage() {
  return (
    <section className="pb-24 pt-36">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Resources", url: "/resources" }]} />
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Free resources</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-white">
            Templates and checklists, free
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-gray">
            The same tools we use with paying clients. One email, instant access to
            everything below.
          </p>
        </ScrollReveal>

        <StaggerGroup className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
          {resources.map(({ icon: Icon, type, title, description, downloadUrl }) => (
            <StaggerItem key={title}>
              <div className="flex h-full gap-4 rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-gray/60">{type}</p>
                  <h2 className="mt-1 font-heading text-sm font-semibold text-ink dark:text-white">{title}</h2>
                  <p className="mt-1 text-xs leading-relaxed text-ink-gray">{description}</p>
                  {downloadUrl && (
                    <Link
                      href={downloadUrl}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-royal-600 hover:underline"
                    >
                      <ArrowDownToLine className="h-3.5 w-3.5" /> Download PDF
                    </Link>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <ScrollReveal delay={0.1} className="mx-auto mt-14 max-w-xl">
          <div className="rounded-3xl border border-navy-900/[0.06] bg-white p-8 text-center dark:border-white/[0.06] dark:bg-white/[0.03]">
            <Download className="mx-auto h-6 w-6 text-royal-600" />
            <h2 className="mt-3 font-heading text-lg font-semibold text-ink dark:text-white">
              Get all four resources
            </h2>
            <div className="mt-5">
              <NewsletterGate />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
