"use client";

import { useActionState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Label, FieldError, Honeypot } from "@/components/ui/form-fields";
import { submitContactForm, type ActionState } from "@/lib/actions";

const initialState: ActionState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-600/20 bg-emerald-50 p-10 text-center dark:bg-emerald-600/10">
        <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        <p className="font-heading text-lg font-semibold text-ink dark:text-white">Message sent</p>
        <p className="text-sm text-ink-gray">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <Honeypot />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="Jane Founder" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="jane@company.com" required />
        </div>
      </div>
      <div>
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
      </div>
      <div>
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" name="message" placeholder="Tell us a bit about what's going on..." required />
      </div>
      {state.status === "error" && <FieldError>{state.message}</FieldError>}
      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending..." : "Send message"} <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
