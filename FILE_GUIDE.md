# File Guide — What Everything Does & What to Edit

This explains every part of the project in plain English: what each file/folder
does, what language it's written in, and whether it's "frontend" (what
visitors see) or "backend" (logic that runs behind the scenes).

---

## First, the big idea

This is **one Next.js project**, not a separate frontend app + backend server.
That's different from older-style websites where "frontend" and "backend" are
two different codebases talking over an API. Here:

- **Frontend** = anything that draws something on the screen — pages,
  buttons, colors, text, layout. Written in **TSX** (TypeScript + HTML-like
  markup) or **CSS**.
- **Backend** = code that runs on the server, invisible to visitors — mainly
  "what happens when someone submits a form" (send an email, save to a
  database, sync to your CRM). Written in plain **TypeScript (.ts)**, no
  markup. There's no separate server to start — Next.js runs this
  automatically when needed.

One language family (TypeScript) covers almost the entire project. You don't
need to learn a separate backend language.

| File ending | What it means | Frontend or backend? |
|---|---|---|
| `.tsx` | TypeScript + visual markup (JSX) | Frontend — has visible UI |
| `.ts` | Plain TypeScript, no markup | Backend / logic / data |
| `.css` | Stylesheet | Frontend — styling only |
| `.json` | Configuration data | Project settings |
| `schema.prisma` | Database structure definition | Backend — its own small language |

---

## "I want to change X" — quick answers

| I want to... | Edit this file | Language |
|---|---|---|
| Change the company name, tagline, email, phone, socials | `lib/site-config.ts` | TypeScript |
| Edit service descriptions, pricing, FAQs | `lib/data/services.ts` | TypeScript |
| Edit testimonials | `lib/data/testimonials.ts` | TypeScript |
| Edit case studies | `lib/data/case-studies.ts` | TypeScript |
| Edit blog posts | `lib/data/blog-posts.ts` | TypeScript |
| Edit the homepage FAQ | `lib/data/faqs.ts` | TypeScript |
| Change colors | `tailwind.config.ts` | TypeScript |
| Change fonts | `app/layout.tsx` (top of file) | TSX |
| Change the homepage layout/section order | `app/page.tsx` | TSX |
| Change what a specific homepage section looks like | `components/sections/*.tsx` | TSX |
| Change the top navigation menu | `components/layout/navbar.tsx` | TSX |
| Change the footer | `components/layout/footer.tsx` | TSX |
| Change what happens when a form is submitted | `lib/actions.ts` | TypeScript |
| Change the wording/fields on a form | `components/forms/*.tsx` | TSX |
| Add environment variables / API keys | `.env.local` (you create this) | Plain text |
| Change the database structure | `prisma/schema.prisma` | Prisma schema |

---

## Folder-by-folder breakdown

### `app/` — every page on the site (Frontend, mostly)
Next.js uses **folders as URLs**. A folder named `about` containing a
`page.tsx` becomes the page at `/about`. This is the single biggest thing to
understand about this project's structure.

- `app/layout.tsx` — the wrapper around *every* page: navbar, footer, fonts,
  cookie banner, and the `<html>`/`<head>` tags. Edit this for anything that
  should appear on every page.
- `app/globals.css` — the one global stylesheet (base styles, focus outlines,
  reduced-motion handling). You'll rarely need to touch this.
- `app/page.tsx` — the homepage. Just assembles the section components in
  order — the actual content lives in `components/sections/`.
- `app/sitemap.ts` / `app/robots.ts` — auto-generate `sitemap.xml` and
  `robots.txt` for Google. You won't need to edit these; they update
  themselves when you add services or blog posts.
- `app/not-found.tsx` — the 404 "page not found" page.
- `app/services/page.tsx` — the services overview grid.
- `app/services/[slug]/page.tsx` — **one template that generates all 5
  service pages** from the data in `lib/data/services.ts`. The `[slug]` in
  brackets means "fill this in dynamically" — you never create 5 separate
  files, you just add a 6th entry to the data file and a 6th page appears
  automatically.
- `app/about/page.tsx` — the About page (mission/vision/values/founder).
- `app/booking/page.tsx` + `app/booking/confirmation/page.tsx` — the
  Calendly booking page and its "you're booked" confirmation.
- `app/apply/page.tsx` — the lead-qualification form page.
- `app/contact/page.tsx` — the contact page.
- `app/blog/page.tsx` + `app/blog/[slug]/page.tsx` — blog listing, and the
  same "one template, many pages" pattern as services.
- `app/podcast/page.tsx`, `app/resources/page.tsx` — those two pages.
- `app/privacy-policy/`, `app/terms/`, `app/cookie-policy/` — legal pages,
  all using the shared `components/legal-layout.tsx` wrapper.

### `components/` — reusable pieces (Frontend)

- `components/ui/` — small generic building blocks: `button.tsx`,
  `card.tsx`, `badge.tsx`, `accordion.tsx`, `form-fields.tsx` (text
  inputs, labels, error messages). Change these to restyle buttons/inputs
  site-wide in one place.
- `components/layout/` — `navbar.tsx` and `footer.tsx`, used on every page
  via `app/layout.tsx`.
- `components/sections/` — one file per homepage section (`hero.tsx`,
  `process.tsx`, `testimonials.tsx`, `faq.tsx`, etc.). The file name tells
  you exactly what it controls.
- `components/forms/` — the three actual forms: `contact-form.tsx`,
  `qualification-form.tsx`, `newsletter-gate.tsx`. These handle what the
  visitor *sees and types*; what happens *after* they hit submit lives in
  `lib/actions.ts` (backend).
- `components/seo/json-ld.tsx` — invisible SEO metadata (structured data for
  Google). You won't need to touch this.
- `components/cookie-consent.tsx` — the cookie banner, and it also controls
  when analytics scripts are allowed to load.
- `components/scroll-reveal.tsx`, `components/animated-counter.tsx` — the
  animation wrappers used throughout. Edit here to change how fade-in/count-up
  animations behave globally.
- `components/calendly-embed.tsx` — the Calendly widget.
- `components/legal-layout.tsx` — shared wrapper for the 3 legal pages.

### `lib/` — content and logic (mixed)

**`lib/data/` is your content — edit this most often.** These files hold
the actual text on the site as structured lists, completely separate from
page layout code:
- `services.ts`, `testimonials.ts`, `case-studies.ts`, `blog-posts.ts`,
  `faqs.ts`

**The rest of `lib/` is backend logic** — code that runs on the server,
never sent to the visitor's browser:
- `lib/actions.ts` — **the most important backend file.** This is what runs
  the instant someone clicks "Submit" on any form: validates the input,
  emails your team, syncs to HubSpot, optionally saves to the database.
- `lib/email.ts` — sends emails via Resend.
- `lib/crm.ts` — sends leads to HubSpot.
- `lib/prisma.ts` — connects to the database (only activates once you set
  `DATABASE_URL`).
- `lib/validations.ts` — the rules for what counts as a "valid" form
  submission (e.g. "email must look like an email").
- `lib/site-config.ts` — company name, contact info, nav links, social
  links. Almost every page pulls from here, so editing it once updates the
  whole site.
- `lib/utils.ts` — small helper functions used throughout.

### `prisma/schema.prisma` — the database blueprint (Backend)
Written in Prisma's own small schema language (not TypeScript). Defines the
shape of the optional database tables (`Lead`, `ContactSubmission`,
`NewsletterSubscriber`). You'd only touch this if you want to store extra
fields from a form.

### Root config files (rarely touched)

| File | Purpose |
|---|---|
| `package.json` | Lists every dependency and the `npm run` commands |
| `tsconfig.json` | TypeScript compiler settings |
| `next.config.ts` | Next.js settings (security headers, image domains) |
| `tailwind.config.ts` | **Color palette and font names live here** |
| `postcss.config.js` | Wiring for Tailwind's CSS processing |
| `.eslintrc.json` | Code style checking rules |
| `.env.example` | Template listing every API key the site can use |
| `.env.local` | *You create this* — your real, private API keys. Never committed to Git. |
| `.gitignore` | Tells Git which files/folders to never track (`node_modules`, `.env.local`, build output) |

---

## A mental model that makes this click

Think of it in three layers:

1. **Content** (`lib/data/*.ts`) — the words and numbers. Edit this like
   filling in a spreadsheet — no HTML/JSX to worry about.
2. **Layout** (`app/**`, `components/**`) — how that content is arranged and
   styled. This is real code (TSX) — go here when content editing isn't
   enough and you need to change structure, add a section, or restyle
   something.
3. **Behavior** (`lib/actions.ts`, `lib/email.ts`, `lib/crm.ts`) — what
   happens when someone interacts with a form. This is the only "backend" in
   the traditional sense, and it's a handful of files, not a separate
   project.

For 90% of day-to-day changes (new testimonial, updated pricing, a tweaked
FAQ answer), you'll only ever touch layer 1.
