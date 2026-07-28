import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Faq } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about our business systems and consulting services.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <>
      <div className="pt-24">
        <Faq />
      </div>
    </>
  );
}
