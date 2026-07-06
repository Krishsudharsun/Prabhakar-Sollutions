import type { Metadata } from "next";
import { Mail, Phone, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { BreadcrumbSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Prabhakar Sollutions team — email, phone, or send us a message directly.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="pb-24 pt-36">
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }]} />
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Contact</p>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
              Have a question first? Reach out directly.
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-ink-gray">
              For discovery calls, use the application form — it's faster. For
              everything else, we're one message away.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-royal-600" />
                <div>
                  <p className="text-sm font-medium text-ink dark:text-white">Email</p>
                  <p className="text-sm text-ink-gray">{siteConfig.email}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-royal-600" />
                <div>
                  <p className="text-sm font-medium text-ink dark:text-white">Phone</p>
                  <p className="text-sm text-ink-gray">{siteConfig.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-royal-600" />
                <div>
                  <p className="text-sm font-medium text-ink dark:text-white">Business hours</p>
                  <p className="text-sm text-ink-gray">{siteConfig.businessHours}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl border border-navy-900/[0.06] bg-white p-6 sm:p-8 dark:border-white/[0.06] dark:bg-white/[0.03]">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
