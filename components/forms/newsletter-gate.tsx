"use client";

import { useActionState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, FieldError, Honeypot } from "@/components/ui/form-fields";
import { submitNewsletterForm, type ActionState } from "@/lib/actions";

const initialState: ActionState = { status: "idle" };

export function NewsletterGate() {
  const [state, formAction, pending] = useActionState(submitNewsletterForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-emerald-700">
        <CheckCircle2 className="h-5 w-5" /> {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} className="mx-auto max-w-sm space-y-3">
      <Honeypot />
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input name="email" type="email" placeholder="you@company.com" required aria-label="Email address" />
        <Button type="submit" disabled={pending} className="shrink-0">
          {pending ? "Sending..." : "Send it to me"}
        </Button>
      </div>
      {state.status === "error" && <FieldError>{state.message}</FieldError>}
    </form>
  );
}
