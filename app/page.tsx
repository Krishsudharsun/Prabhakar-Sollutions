import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { Industries } from "@/components/sections/industries";
import { FounderSection } from "@/components/sections/founder";
import { BookingCTA } from "@/components/sections/booking-cta";
import { LeadMagnet } from "@/components/sections/lead-magnet";
import { Faq } from "@/components/sections/faq";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Business Systems for Founders Ready to Scale`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Industries />
      <FounderSection />
      <BookingCTA />
      <LeadMagnet />
      <Faq />
    </>
  );
}
