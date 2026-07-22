import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `How ${siteConfig.name} uses cookies and similar technologies.`,
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" updated="July 5, 2026">
      <p>
        This Cookie Policy explains how {siteConfig.name} uses cookies and similar
        technologies on {siteConfig.url}.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">What are cookies</h2>
      <p>
        Cookies are small text files stored on your device that help websites
        remember information about your visit.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Cookies we use</h2>
      <p>
        <strong>Essential cookies</strong> keep the site functioning, such as
        remembering your cookie consent choice. <strong>Analytics cookies</strong>{" "}
        (Google Analytics, Microsoft Clarity) help us understand how visitors use the
        site. <strong>Advertising cookies</strong> (Meta Pixel, LinkedIn Insight Tag)
        help us measure the effectiveness of our marketing. Analytics and advertising
        cookies only load after you accept our cookie banner.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Managing cookies</h2>
      <p>
        You can decline non-essential cookies using the banner shown on your first
        visit, or clear cookies at any time through your browser settings.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Contact</h2>
      <p>Questions about this policy can be sent to {siteConfig.email}.</p>
    </LegalLayout>
  );
}
