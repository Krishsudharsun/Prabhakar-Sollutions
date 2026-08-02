import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal-layout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects, uses, and protects your data.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 5, 2026">
      <p>
        This Privacy Policy explains how {siteConfig.name} ("we", "us") collects, uses,
        and protects information when you visit {siteConfig.url} or interact with our
        services.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Information we collect</h2>
      <p>
        We collect information you provide directly, such as your name, email, phone
        number, and company details submitted through contact or application forms,
        and information collected automatically through cookies and analytics tools,
        including pages visited, time on site, and general location.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">How we use it</h2>
      <p>
        We use collected information to respond to inquiries, schedule discovery
        calls, send resources you've requested, improve our website, and, where you've
        consented, for marketing communications. We do not sell your personal
        information to third parties.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Third-party services</h2>
      <p>
        We use third-party tools including Google Analytics, Microsoft Clarity, Meta
        Pixel, LinkedIn Insight Tag, HubSpot CRM, Calendly, and Resend to operate this
        site and communicate with you. Each provider processes data under its own
        privacy policy.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Your rights</h2>
      <p>
        Depending on your location, you may have the right to access, correct, or
        delete your personal information, and to opt out of marketing communications
        at any time. Contact us at {siteConfig.email} to exercise these rights.
      </p>

      <h2 className="font-heading text-lg font-semibold text-ink dark:text-white">Contact</h2>
      <p>Questions about this policy can be sent to {siteConfig.email}.</p>
    </LegalLayout>
  );
}
