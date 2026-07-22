import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of ${siteConfig.name}'s website and services.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="July 5, 2026">
      <p>
        These Terms of Service govern your use of {siteConfig.url} and any services
        described on it. By using this site, you agree to these terms.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Use of this site</h2>
      <p>
        This website is provided for informational purposes about {siteConfig.name}'s
        consulting services. You agree not to misuse the site, attempt unauthorized
        access to our systems, or use automated tools to scrape content without
        permission.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Services engagements</h2>
      <p>
        Any consulting engagement is governed by a separate signed agreement between
        {" "}{siteConfig.name} and the client, which takes precedence over general
        statements made on this website, including pricing, timelines, and scope
        described on service pages.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Intellectual property</h2>
      <p>
        All content on this site, including text, graphics, and downloadable
        resources, is owned by {siteConfig.name} unless otherwise noted, and may not
        be reproduced without permission.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Limitation of liability</h2>
      <p>
        This website is provided "as is" without warranties of any kind. {siteConfig.name}
        {" "}is not liable for any indirect or consequential damages arising from your
        use of this site.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Contact</h2>
      <p>Questions about these terms can be sent to {siteConfig.email}.</p>
    </LegalLayout>
  );
}
