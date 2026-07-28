import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (10 characters minimum)"),
  // honeypot — bots fill this in, real users never see it
  company_website: z.string().max(0, "Spam detected").optional(),
});
export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const qualificationFormSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  company: z.string().optional(),
  revenueRange: z.enum([
    "under-500k",
    "500k-2m",
    "2m-10m",
    "10m-plus",
  ], { errorMap: () => ({ message: "Please select your revenue range" }) }),
  bottleneck: z
    .string()
    .min(15, "Please describe your biggest bottleneck (a sentence or two is great)"),
  company_website: z.string().max(0, "Spam detected").optional(),
});
export type QualificationFormValues = z.infer<typeof qualificationFormSchema>;

export const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  company_website: z.string().max(0, "Spam detected").optional(),
});
export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
