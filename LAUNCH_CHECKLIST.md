# Launch Checklist — Prabhakar Solutions

Everything below needs a real answer before this goes live. Nothing here
requires code changes on your end — just gather the information and either
send it back or fill it in yourself following the file references.

---

## 1. Company details
*(all live in `lib/site-config.ts`)*

- [ ] Legal/business name (confirm "Prabhakar Solutions" is correct, including spelling)
- [ ] Support email address (currently placeholder `hello@yourcompany.com`)
- [ ] Phone number
- [ ] Business hours (e.g. "Mon–Fri, 9:00 AM – 6:00 PM IST")
- [ ] Business address — city, state/region, country (used for Google's LocalBusiness listing)
- [ ] Final domain name (e.g. `prabhakarsolutions.com`) — needed for `NEXT_PUBLIC_SITE_URL`

## 2. Founder / About page
*(live in `lib/site-config.ts` + `app/about/page.tsx`)*

- [ ] Founder's real name and title
- [ ] Real founder photo (replace the placeholder initials block)
- [ ] Real founder bio / story (2–3 paragraphs — currently a bracketed placeholder)
- [ ] Real achievements/credentials (currently placeholders)
- [ ] Real company journey/timeline (currently placeholder years and milestones)
- [ ] Real LinkedIn profile URL
- [ ] Real podcast URL (Spotify/YouTube), or remove the podcast page if you're not running one yet

## 3. Social & external links
*(live in `lib/site-config.ts`)*

- [ ] LinkedIn company page URL
- [ ] YouTube channel URL
- [ ] Spotify show URL
- [ ] X/Twitter handle URL
- [ ] Remove any of the above from the footer/about page if you don't have that platform yet, rather than linking a placeholder

## 4. Proof content — testimonials & case studies
*(live in `lib/data/testimonials.ts` and `lib/data/case-studies.ts`)*

These are currently clearly-marked placeholders (`[Client Name]`, `[XX]%`, etc.) on purpose — **do not publish fabricated
client quotes or results.** For each one, either:
- [ ] Replace with a real client name, quote, and permission to use it, **or**
- [ ] Remove that testimonial/case study entirely if you don't have real ones yet (a shorter, honest section beats a padded, fake one)

Same applies to:
- [ ] The stat counters on the homepage ("Why Prabhakar Solutions" section)
- [ ] The 3 stat callouts on each of the 5 service pages
- [ ] The "ROI" paragraph on each service page (currently bracketed placeholder text)

## 5. Pricing
*(live in `lib/data/services.ts`, `cost` field per service)*

- [ ] Confirm or replace the illustrative price ranges for all 5 services
- [ ] Confirm the timeline estimates per service are realistic for how you actually work

## 6. Blog & podcast content
- [ ] Decide: keep the 3 example blog posts as real published content, rewrite them, or replace with your own (`lib/data/blog-posts.ts`)
- [ ] Decide: keep, replace, or remove the 4 placeholder podcast episodes (`app/podcast/page.tsx`)

## 7. Legal pages
*(live in `app/privacy-policy/`, `app/terms/`, `app/cookie-policy/`)*

- [ ] Have Privacy Policy, Terms of Service, and Cookie Policy reviewed by a real lawyer or a service like Termly/Rocket Lawyer before launch — the current text is a reasonable starting template, not legal advice
- [ ] Confirm the third-party tools actually listed in the Privacy Policy match what you end up connecting (Section 8 below)

## 8. Assets
- [ ] Open Graph share image, 1200×630px, saved as `/public/og-image.png` (shown when the site is shared on social media / iMessage)
- [ ] Favicon (`/public/favicon.ico` or equivalent)
- [ ] Founder photo (see Section 2)

## 9. Integrations — set these in `.env.local` (and in Vercel's environment variable settings when you deploy)

| Service | What you need | Required to launch? |
|---|---|---|
| **Resend** (email) | API key + a verified sending domain | Recommended — otherwise form submissions only log to the server console |
| **HubSpot** (CRM) | Portal ID + 2 Form GUIDs (Contact, Discovery Call) | Optional |
| **Calendly** (booking) | Your real event link | Recommended — the booking page shows a placeholder until this is set |
| **Supabase** (database) | Connection string, if you want submissions stored in your own DB | Optional |
| **Google Analytics 4** | Measurement ID | Optional |
| **Microsoft Clarity** | Project ID | Optional |
| **Meta Pixel** | Pixel ID | Optional |
| **LinkedIn Insight Tag** | Partner ID | Optional |
| **Google Search Console** | Site verification code | Recommended, free, takes 2 minutes |

Full step-by-step for each is in `README.md`, Section 3.

## 10. Domain & hosting
- [ ] Domain purchased and ready
- [ ] Vercel account created, repo connected
- [ ] Domain DNS pointed at Cloudflare, proxy (orange cloud) enabled, "Always Use HTTPS" turned on

## 11. Final QA pass (do this after everything above is filled in)
- [ ] Submit the contact form and confirm you receive the email
- [ ] Submit the `/apply` qualification form and confirm the Calendly widget appears
- [ ] Click every link in the navbar and footer — nothing should 404
- [ ] Check the site on an actual phone, not just a resized browser window
- [ ] Run Lighthouse in Chrome DevTools (aim for the 100/100/100/100 target from the original brief)
- [ ] Submit the sitemap (`yourdomain.com/sitemap.xml`) in Google Search Console

---

**Priority order if you want to launch in stages:** Sections 1–2 (company + founder info) and Section 9's Resend + Calendly rows are the minimum for a functional, honest launch. Everything else can follow once you have real data for it.
