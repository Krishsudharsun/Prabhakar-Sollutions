import type { Metadata } from "next";
import { Music2, Youtube } from "lucide-react";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Podcast — Conversations on Operations & Scaling",
  description: "Episodes with founders and operators on the operational lessons that don't make it into pitch decks.",
  alternates: { canonical: "/podcast" },
};

// PLACEHOLDER CONTENT — replace with your real episodes once published.
const episodes = [
  { number: 4, title: "[Episode title]", guest: "[Guest name, company]" },
  { number: 3, title: "[Episode title]", guest: "[Guest name, company]" },
  { number: 2, title: "[Episode title]", guest: "[Guest name, company]" },
  { number: 1, title: "[Episode title]", guest: "[Guest name, company]" },
];

export default function PodcastPage() {
  return (
    <section className="pb-24 pt-36">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Podcast", url: "/podcast" }]} />
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Podcast</p>
          <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight text-ink sm:text-5xl dark:text-white">
            The Systemized Founder
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-gray">
            Real conversations with founders about the operational lessons that never
            make it into a pitch deck.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href={siteConfig.social.spotify} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 px-4 py-2 text-sm font-medium text-ink-gray hover:border-royal-600 hover:text-royal-600 dark:border-white/10">
              <Music2 className="h-4 w-4" /> Spotify
            </a>
            <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 px-4 py-2 text-sm font-medium text-ink-gray hover:border-royal-600 hover:text-royal-600 dark:border-white/10">
              <Youtube className="h-4 w-4" /> YouTube
            </a>
          </div>
        </ScrollReveal>

        <StaggerGroup className="mx-auto mt-16 max-w-2xl space-y-4">
          {episodes.map((ep) => (
            <StaggerItem key={ep.number}>
              <div className="flex items-center gap-5 rounded-2xl border border-navy-900/[0.06] bg-white p-5 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-royal-50 font-heading text-sm font-bold text-royal-600 dark:bg-royal-600/10">
                  {String(ep.number).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="font-heading text-sm font-semibold text-ink dark:text-white sm:text-base">{ep.title}</h2>
                  <p className="mt-1 text-xs text-ink-gray sm:text-sm">with {ep.guest}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
