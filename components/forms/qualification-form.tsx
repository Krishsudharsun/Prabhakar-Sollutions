"use client";

import { useActionState, useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label, FieldError, Honeypot } from "@/components/ui/form-fields";
import { submitQualificationForm, type ActionState } from "@/lib/actions";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { cn } from "@/lib/utils";

const initialState: ActionState = { status: "idle" };

const revenueOptions = [
  { value: "under-500k", label: "Under $500K / year" },
  { value: "500k-2m", label: "$500K – $2M / year" },
  { value: "2m-10m", label: "$2M – $10M / year" },
  { value: "10m-plus", label: "$10M+ / year" },
];

export function QualificationForm() {
  const [state, formAction, pending] = useActionState(submitQualificationForm, initialState);
  const [revenue, setRevenue] = useState<string>("");

  if (state.status === "success") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-3 rounded-2xl border border-emerald-600/20 bg-emerald-50 p-5 text-emerald-700 dark:bg-emerald-600/10">
          <CheckCircle2 className="h-6 w-6 shrink-0" />
          <p className="text-sm font-medium">{state.message}</p>
        </div>
        <CalendlyEmbed />
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="q-name">Full name</Label>
          <Input id="q-name" name="name" placeholder="Jane Founder" required />
        </div>
        <div>
          <Label htmlFor="q-email">Email</Label>
          <Input id="q-email" name="email" type="email" placeholder="jane@company.com" required />
        </div>
        <div>
          <Label htmlFor="q-phone">Phone</Label>
          <Input id="q-phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
        </div>
        <div>
          <Label htmlFor="q-company">Company (optional)</Label>
          <Input id="q-company" name="company" placeholder="Your company name" />
        </div>
      </div>

      <div>
        <Label>Annual revenue range</Label>
        <input type="hidden" name="revenueRange" value={revenue} />
        <div className="grid grid-cols-2 gap-3">
          {revenueOptions.map((opt) => (
            <button
              type="button"
              key={opt.value}
              onClick={() => setRevenue(opt.value)}
              className={cn(
                "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors",
                revenue === opt.value
                  ? "border-royal-600 bg-royal-50 text-royal-700 dark:bg-royal-600/10"
                  : "border-navy-900/10 text-ink-gray hover:border-navy-900/25 dark:border-white/10"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <Label htmlFor="q-bottleneck">What's your single biggest operational bottleneck right now?</Label>
        <Textarea
          id="q-bottleneck"
          name="bottleneck"
          placeholder="e.g. Every customer refund needs my personal approval, and it's a two-day delay every time..."
          required
        />
      </div>

      {state.status === "error" && <FieldError>{state.message}</FieldError>}

      <Button type="submit" size="lg" disabled={pending} className="w-full">
        {pending ? "Checking eligibility..." : "See if we're a fit"} <ArrowRight className="h-4 w-4" />
      </Button>
      <p className="text-center text-xs text-ink-gray/70">
        Takes 60 seconds. We personally review every application.
      </p>
    </form>
  );
}
