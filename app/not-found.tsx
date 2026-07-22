import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-heading text-8xl font-bold text-royal-600/20">404</p>
      <h1 className="mt-4 font-heading text-2xl font-bold text-ink dark:text-white">
        This page moved or never existed
      </h1>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-gray">
        Let's get you back to something useful, the homepage, our services, or
        straight to booking a call.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild>
          <Link href="/"><ArrowLeft className="h-4 w-4" /> Back to home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/apply">Book Your Free Operations Audit</Link>
        </Button>
      </div>
    </section>
  );
}
