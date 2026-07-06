"use client";

import { useActionState } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input, FieldError, Honeypot } from "@/components/ui/form-fields";
import { submitNewsletterForm, type ActionState } from "@/lib/actions";

const initialState: ActionState = { status: "idle" };

export function LeadMagnet() {
  const [state, formAction, pending] = useActionState(submitNewsletterForm, initialState);

  return (
    <section className="border-t border-navy-900/[0.06] bg-surface py-24 dark:border-white/[0.06] dark:bg-navy-900">
      <div className="container">
        <ScrollReveal>
          <div className="mx-auto grid max-w-4xl items-center gap-10 rounded-3xl border border-navy-900/[0.06] bg-white p-8 sm:p-12 lg:grid-cols-[1fr_1fr] dark:border-white/[0.06] dark:bg-white/[0.03]">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Download className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-heading text-2xl font-bold tracking-tight text-ink dark:text-white">
                The Operations Audit Checklist
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-gray">
                The exact 24-point checklist we use to find hidden bottlenecks before
                every engagement. Free, no call required.
              </p>
            </div>

            <div>
              {state.status === "success" ? (
                <div className="flex items-center gap-3 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-700">
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  {state.message}
                </div>
              ) : (
                <form action={formAction} className="space-y-3">
                  <Honeypot />
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      aria-label="Email address"
                    />
                    <Button type="submit" disabled={pending} className="shrink-0">
                      {pending ? "Sending..." : "Get the checklist"}
                    </Button>
                  </div>
                  {state.status === "error" && <FieldError>{state.message}</FieldError>}
                  <p className="text-xs text-ink-gray/70">
                    No spam. Unsubscribe anytime. See our{" "}
                    <a href="/privacy-policy" className="underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
