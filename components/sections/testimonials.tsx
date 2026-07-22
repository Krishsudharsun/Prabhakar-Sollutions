import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import { ScrollReveal, StaggerGroup, StaggerItem } from "@/components/scroll-reveal";

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-royal-600">Testimonials</p>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl dark:text-white">
            What founders say after working with us
          </h2>
        </ScrollReveal>

        <StaggerGroup className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="h-full rounded-2xl border border-navy-900/[0.06] bg-white p-7 dark:border-white/[0.06] dark:bg-white/[0.03]">
                <Quote className="h-6 w-6 text-royal-600/30" />
                <blockquote className="mt-4 text-base leading-relaxed text-ink dark:text-white/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-navy-900/[0.06] pt-4 dark:border-white/[0.06]">
                  <div>
                    <p className="text-sm font-semibold text-ink dark:text-white">{t.name}</p>
                    <p className="text-xs text-ink-gray">{t.role}, {t.company}</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                    {t.result}
                  </span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
