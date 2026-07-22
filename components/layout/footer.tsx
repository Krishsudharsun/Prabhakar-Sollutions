import Link from "next/link";
import { Linkedin, Youtube, Twitter, Music2, Instagram, Rss } from "lucide-react";
import { siteConfig, footerNav } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-navy-900/[0.06] bg-white dark:border-white/[0.06] dark:bg-navy-900">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-heading text-lg font-bold text-ink dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-sm text-white dark:bg-white dark:text-navy-900">
                S
              </span>
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-gray">
              {siteConfig.tagline}.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: Youtube, href: siteConfig.social.youtube, label: "YouTube" },
                { icon: Music2, href: siteConfig.social.spotify, label: "Spotify" },
                { icon: Rss, href: siteConfig.social.substack, label: "Substack" },
                { icon: Twitter, href: siteConfig.social.twitter, label: "X" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-navy-900/10 text-ink-gray transition-colors hover:border-royal-600 hover:text-royal-600 dark:border-white/10 dark:text-white/60"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-ink dark:text-white">Services</h4>
            <ul className="mt-4 space-y-3">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-gray hover:text-royal-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-ink dark:text-white">Company</h4>
            <ul className="mt-4 space-y-3">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-gray hover:text-royal-600">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold text-ink dark:text-white">Get in touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-ink-gray">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li>{siteConfig.businessHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-navy-900/[0.06] pt-8 text-xs text-ink-gray sm:flex-row dark:border-white/[0.06]">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-royal-600">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
