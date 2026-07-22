"use client";

import Script from "next/script";

export function CalendlyEmbed({ className }: { className?: string }) {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL;

  if (!url) {
    return (
      <div className={className}>
        <div className="flex h-[500px] flex-col items-center justify-center rounded-2xl border border-dashed border-navy-900/15 bg-navy-900/[0.02] p-8 text-center dark:border-white/15 dark:bg-white/[0.02]">
          <p className="font-heading text-sm font-semibold text-ink dark:text-white">
            Calendly isn't connected yet
          </p>
          <p className="mt-2 max-w-xs text-xs text-ink-gray">
            Set <code className="rounded bg-navy-900/5 px-1 py-0.5 dark:bg-white/10">NEXT_PUBLIC_CALENDLY_URL</code> in
            your environment variables to enable live booking here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div
        className="calendly-inline-widget rounded-2xl"
        data-url={url}
        style={{ minWidth: "280px", height: "700px" }}
      />
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </div>
  );
}
