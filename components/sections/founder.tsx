import { Linkedin, Instagram, Youtube, Mic, Rss, Twitter } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { siteConfig } from "@/lib/site-config";
import { Badge } from "@/components/ui/badge";

const founderSocials = [
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
  { icon: Mic, href: siteConfig.social.spotify, label: "Podcast" },
  { icon: Rss, href: siteConfig.social.substack, label: "Substack" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "X" },
];

export function FounderSection() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid items-center gap-14 rounded-3xl border border-navy-900/[0.06] bg-white p-8 sm:p-14 lg:grid-cols-[0.8fr_1.2fr] dark:border-white/[0.06] dark:bg-white/[0.03]">
          <ScrollReveal>
            <div className="mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 to-royal-700">
              <div className="flex h-full w-full items-center justify-center font-heading text-6xl font-bold text-white/20">
                {siteConfig.founder.name.split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Badge>Founder's note</Badge>
            <h2 className="mt-4 font-heading text-2xl font-bold tracking-tight text-ink sm:text-3xl dark:text-white">
              [Add a one-line founder quote about why this company exists]
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-gray sm:text-base">
              [Add 3–4 sentences of founder story here, what you did before this,
              the specific problem you kept seeing, and why you started the
              company to fix it. Specifics (numbers, past roles, real moments)
              make this section far more credible than general statements.]
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div>
                <p className="font-heading text-lg font-bold text-ink dark:text-white">{siteConfig.founder.name}</p>
                <p className="text-sm text-ink-gray">{siteConfig.founder.role}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {founderSocials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 text-ink-gray hover:border-royal-600 hover:text-royal-600 dark:border-white/10"
                    aria-label={`Founder's ${label}`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
