# ScaleForge — Premium Business Website

A conversion-focused marketing site for a business operations / AI automation
consultancy, built with Next.js 15, React 19, and TypeScript.

---

## 1. Quick start

```bash
npm install
cp .env.example .env.local   # fill in what you have — everything is optional at first
npm run dev
```

Open http://localhost:3000. The site is fully functional out of the box —
forms log submissions to the console and every integration below no-ops
gracefully until you add real credentials.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

---

## 2. What's included

| Area | Implementation |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS, hand-built shadcn/Radix-style primitives |
| Animation | Framer Motion (scroll reveals, page transitions), GSAP (animated counters) |
| Forms | React Hook Form patterns + Zod validation + Next.js Server Actions |
| Pages | Home, Services (hub + 5 dynamic pages), About, Booking, Apply, Contact, Blog (+ posts), Podcast, Resources, Privacy/Terms/Cookies, 404 |
| SEO | Per-page metadata, Open Graph, Twitter Cards, canonical URLs, `sitemap.xml`, `robots.txt`, JSON-LD (Organization, LocalBusiness, Service, FAQ, Breadcrumb, Article) |
| Compliance | Cookie consent banner that gates analytics from loading until accepted |

---

## 3. Wiring up real integrations

Every third-party service is **optional and additive** — the site works before
any of these are configured, so you can launch and connect services one at a
time. All variables live in `.env.local` (copy from `.env.example`).

### Email (Resend) — recommended first step
1. Create an account at resend.com and verify your sending domain.
2. Set `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `LEAD_NOTIFICATION_EMAIL`.
3. Until this is set, form submissions are logged to your server console
   instead of emailed — useful for local testing.

### CRM (HubSpot)
1. Create a free HubSpot account → Marketing → Forms, and create two forms
   (Contact, Discovery Call Application) to get their **Form GUIDs**.
2. Find your **Portal ID** under Account Settings.
3. Set `HUBSPOT_PORTAL_ID`, `HUBSPOT_CONTACT_FORM_GUID`, `HUBSPOT_QUALIFICATION_FORM_GUID`.
4. *(GoHighLevel alternative: swap the fetch call in `lib/crm.ts` for GHL's API — the form validation and email flow don't need to change.)*

### Booking (Calendly)
1. Set `NEXT_PUBLIC_CALENDLY_URL` to your event link (e.g. `https://calendly.com/you/discovery-call`).
2. The embed appears automatically on `/booking` and after a successful `/apply` submission. Until set, a friendly placeholder is shown instead of a broken widget.

### Database (Supabase Postgres + Prisma) — optional
Only needed if you want form submissions stored in your own database *in
addition to* email + CRM.
1. Create a Supabase project, copy the connection string.
2. Set `DATABASE_URL` in `.env.local`.
3. Run:
   ```bash
   npx prisma migrate dev --name init
   ```
4. That's it — `lib/actions.ts` automatically starts writing to the `Lead`,
   `ContactSubmission`, and `NewsletterSubscriber` tables once `DATABASE_URL`
   is present. No code changes needed.

### Analytics & pixels
Each script only loads **after a visitor accepts cookies**, and only if its
ID is set:
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — Google Analytics 4
- `NEXT_PUBLIC_CLARITY_PROJECT_ID` — Microsoft Clarity
- `NEXT_PUBLIC_META_PIXEL_ID` — Meta Pixel
- `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` — LinkedIn Insight Tag
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — Search Console ownership verification meta tag

### Spam protection
- Every form includes a honeypot field (`components/ui/form-fields.tsx`) that silently rejects simple bots.
- For stronger protection, add Cloudflare Turnstile: create a site key, set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY`, and drop the Turnstile widget into `contact-form.tsx` / `qualification-form.tsx` (their docs: developers.cloudflare.com/turnstile).

### CMS (Sanity) — for the blog
The blog currently reads from `lib/data/blog-posts.ts` so it works without
any CMS account. To move to Sanity later:
1. Create a Sanity project, set `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET`.
2. Install `next-sanity`, define a `post` schema matching the `BlogPost` type in `lib/data/blog-posts.ts`.
3. Replace `getPostBySlug` / `blogPosts` imports in `app/blog/**` with Sanity client queries — the page components themselves don't need to change shape.

### Hosting (Vercel) + Cloudflare
1. Push this repo to GitHub, import it into Vercel, add your environment variables in the Vercel dashboard.
2. Point your domain's DNS to Cloudflare, enable the orange-cloud proxy for DDoS/WAF protection, and enable "Always Use HTTPS."

---

## 4. SEO documentation

- **Per-page metadata**: every route exports a `metadata` object (or `generateMetadata` for dynamic routes) with title, description, and canonical URL. Title template is set once in `app/layout.tsx`.
- **Sitemap**: auto-generated at `/sitemap.xml` from `app/sitemap.ts` — includes every static route, all 5 service pages, and all blog posts. New services/posts are picked up automatically.
- **Robots**: `/robots.txt` generated from `app/robots.ts`.
- **Structured data** (`components/seo/json-ld.tsx`): Organization + LocalBusiness on every page (root layout), plus Service/FAQ/Breadcrumb/Article schema on the relevant pages.
- **AEO structure**: each service page (`app/services/[slug]/page.tsx`) answers What is it → Who needs it → Benefits → Process → Cost → Timeline → ROI → Comparison → FAQs, in strict H1→H2→H3 order.
- **GEO (AI-search) signals**: definition blocks, comparison tables, stats, author byline, and "last updated" date are present on every service and blog page so AI answer engines have clean, quotable summaries.

To finish 100/100 Lighthouse SEO once deployed: add a real `/public/og-image.png` (1200×630), replace the placeholder founder photo blocks with real images using `next/image`, and submit the sitemap in Google Search Console.

---

## 5. Admin documentation (day-to-day content updates)

No CMS login is required for most content — it lives in typed data files so
it's easy to find and safe to edit (TypeScript will flag mistakes):

| To change... | Edit this file |
|---|---|
| Services (copy, pricing, FAQs) | `lib/data/services.ts` |
| Testimonials & client logos | `lib/data/testimonials.ts` |
| Case studies | `lib/data/case-studies.ts` |
| Blog posts | `lib/data/blog-posts.ts` |
| Homepage FAQ | `lib/data/faqs.ts` |
| Company info, nav links, socials | `lib/site-config.ts` |
| Colors / fonts | `tailwind.config.ts`, `app/layout.tsx` |

After editing a data file, redeploy (Vercel redeploys automatically on `git push`).

---

## 6. API / server actions documentation

All form submissions go through **Next.js Server Actions** in `lib/actions.ts`
— there is no separate REST API to maintain.

| Action | Trigger | What it does |
|---|---|---|
| `submitContactForm` | `/contact` form | Validates with Zod → emails your team via Resend → syncs to HubSpot → (optional) saves to `ContactSubmission` table |
| `submitQualificationForm` | `/apply` form | Same as above, saves to `Lead` table, then reveals the Calendly embed |
| `submitNewsletterForm` | Resources page / homepage lead magnet | Validates email → (optional) upserts into `NewsletterSubscriber` table |

Each action returns `{ status: "success" | "error", message }`, consumed via
React 19's `useActionState` hook in the form components — no client-side
fetch code needed.

---

## 7. Project structure

```
app/                  Routes (App Router)
  services/[slug]/    Dynamic service pages (AEO structure)
  blog/[slug]/        Dynamic blog posts
components/
  ui/                 Button, Card, Input, Accordion, Badge (shadcn-style)
  layout/             Navbar, Footer
  sections/           Homepage sections (Hero, Process, FAQ, etc.)
  forms/              Contact, Qualification, Newsletter forms
  seo/                JSON-LD schema components
lib/
  data/               Services, testimonials, case studies, blog posts (editable content)
  actions.ts          Server Actions (form handling)
  email.ts            Resend wrapper
  crm.ts              HubSpot wrapper
  prisma.ts           Optional DB client
  validations.ts      Zod schemas
prisma/schema.prisma  Optional Postgres schema (Lead, ContactSubmission, NewsletterSubscriber)
```

---

## 8. Deployment checklist

- [ ] Add real environment variables in Vercel project settings
- [ ] Replace placeholder founder avatar with a real photo (`components/sections/founder.tsx`, `app/about/page.tsx`)
- [ ] Add `/public/og-image.png` (1200×630)
- [ ] Update `NEXT_PUBLIC_SITE_URL` to your real domain
- [ ] Connect Calendly, HubSpot, Resend (see section 3)
- [ ] Point domain DNS to Cloudflare, enable proxy + "Always Use HTTPS"
- [ ] Submit `/sitemap.xml` in Google Search Console
- [ ] Run Lighthouse in Chrome DevTools and address any environment-specific findings (fonts/images are already optimized by Next.js)
