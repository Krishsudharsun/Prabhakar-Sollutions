import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Call Confirmed",
  description: "Your discovery call is confirmed.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/booking/confirmation" },
};

export default function BookingConfirmationPage() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <CheckCircle2 className="h-8 w-8" />
      </div>
      <h1 className="mt-6 font-heading text-3xl font-bold tracking-tight text-ink dark:text-white">
        You're booked
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-gray">
        Check your inbox for a calendar invite and a short pre-call questionnaire.
        In the meantime, feel free to explore how we work.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/">Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/blog">Read the blog</Link>
        </Button>
      </div>
      <p className="mt-10 text-xs text-ink-gray/70">
        Need to reschedule? Email {siteConfig.email}
      </p>
    </section>
  );
}
