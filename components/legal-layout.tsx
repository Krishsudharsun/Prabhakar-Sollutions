import type { ReactNode } from "react";

export function LegalLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <section className="pb-24 pt-36">
      <div className="container max-w-2xl">
        <h1 className="font-heading text-3xl font-bold tracking-tight text-ink dark:text-white">{title}</h1>
        <p className="mt-2 text-xs text-ink-gray">Last updated: {updated}</p>
        <div className="prose prose-sm mt-10 max-w-none space-y-6 text-sm leading-relaxed text-ink-gray sm:prose-base">
          {children}
        </div>
      </div>
    </section>
  );
}
