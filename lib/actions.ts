"use server";

import {
  contactFormSchema,
  qualificationFormSchema,
  newsletterFormSchema,
} from "@/lib/validations";
import { sendLeadNotification } from "@/lib/email";
import { submitContactToHubSpot, submitQualificationToHubSpot } from "@/lib/crm";
import { getPrisma } from "@/lib/prisma";

export type ActionState = {
  status: "idle" | "success" | "error";
  message?: string;
};

const dbEnabled = Boolean(process.env.DATABASE_URL);

export async function submitContactForm(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Please check the form and try again." };
  }
  const { name, email, phone, message } = parsed.data;

  await Promise.all([
    sendLeadNotification({
      subject: `New contact form submission — ${name}`,
      heading: "New contact form submission",
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Phone", value: phone || "—" },
        { label: "Message", value: message },
      ],
    }),
    submitContactToHubSpot([
      { name: "firstname", value: name },
      { name: "email", value: email },
      { name: "phone", value: phone ?? "" },
      { name: "message", value: message },
    ]),
    dbEnabled
      ? getPrisma()
          .contactSubmission.create({ data: { name, email, phone, message } })
          .catch((e) => console.error("[db] contact submission failed:", e))
      : Promise.resolve(),
  ]);

  return { status: "success", message: "Thanks — we'll get back to you within one business day." };
}

export async function submitQualificationForm(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = qualificationFormSchema.safeParse(raw);

  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Please check the form and try again." };
  }
  const { name, email, phone, company, revenueRange, bottleneck } = parsed.data;

  await Promise.all([
    sendLeadNotification({
      subject: `New discovery call application — ${name}`,
      heading: "New qualified lead",
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Phone", value: phone },
        { label: "Company", value: company || "—" },
        { label: "Revenue range", value: revenueRange },
        { label: "Biggest bottleneck", value: bottleneck },
      ],
    }),
    submitQualificationToHubSpot([
      { name: "firstname", value: name },
      { name: "email", value: email },
      { name: "phone", value: phone },
      { name: "company", value: company ?? "" },
    ]),
    dbEnabled
      ? getPrisma()
          .lead.create({ data: { name, email, phone, company, revenueRange, bottleneck } })
          .catch((e) => console.error("[db] lead creation failed:", e))
      : Promise.resolve(),
  ]);

  return {
    status: "success",
    message: "You're pre-qualified — pick a time on the next screen and we'll see you there.",
  };
}

export async function submitNewsletterForm(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = newsletterFormSchema.safeParse(raw);

  if (!parsed.success) {
    return { status: "error", message: parsed.error.issues[0]?.message ?? "Please enter a valid email." };
  }
  const { email } = parsed.data;

  if (dbEnabled) {
    await getPrisma()
      .newsletterSubscriber.upsert({ where: { email }, update: {}, create: { email } })
      .catch((e) => console.error("[db] newsletter subscribe failed:", e));
  } else {
    console.log("[newsletter:dev-mode] subscribed:", email);
  }

  return { status: "success", message: "You're subscribed — check your inbox for your first download." };
}
