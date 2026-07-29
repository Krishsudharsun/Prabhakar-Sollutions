import type { Metadata } from "next";
import { Faq } from "@/components/sections/faq";
import { BookingCTA } from "@/components/sections/booking-cta";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our business systems and consulting services.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <Faq />
      <BookingCTA
        heading="Ready to Improve Your Business Operations?"
        description="Book a free Operations Audit and discover opportunities to streamline your business."
        buttonLabel="Book Free Audit"
      />
    </>
  );
}
