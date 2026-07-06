import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

type SendLeadEmailInput = {
  subject: string;
  heading: string;
  fields: { label: string; value: string }[];
};

/**
 * Sends an internal notification email whenever a form is submitted.
 * If RESEND_API_KEY isn't configured yet, this logs to the console
 * instead of throwing — so local development and demos work out of
 * the box before real credentials are wired up.
 */
export async function sendLeadNotification({ subject, heading, fields }: SendLeadEmailInput) {
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!resend || !to) {
    console.log(`[email:dev-mode] Would send "${subject}" to notification inbox:`, fields);
    return { ok: true, mode: "dev-log" as const };
  }

  const rows = fields
    .map(
      (f) =>
        `<tr><td style="padding:6px 12px;color:#6B7280;font-family:sans-serif;font-size:14px;">${f.label}</td><td style="padding:6px 12px;font-family:sans-serif;font-size:14px;color:#111827;">${f.value}</td></tr>`
    )
    .join("");

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "ScaleForge <hello@scaleforge.example>",
      to,
      subject,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;">
          <h2 style="color:#0B1220;">${heading}</h2>
          <table style="border-collapse:collapse;width:100%;">${rows}</table>
        </div>
      `,
    });
    return { ok: true, mode: "sent" as const };
  } catch (err) {
    console.error("[email] Failed to send notification:", err);
    return { ok: false, mode: "error" as const };
  }
}
