# Abubakar, Abdulahi Olayinka — Personal Website

The digital headquarters for Abubakar, Abdulahi Olayinka: Chief Imam, founder of Al-Mafaazat Arabic and
Islamic Training Centre, educator, Islamic Studies scholar and educational researcher based in Lagos,
Nigeria.

Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion and MDX.

---

## 1. What is fully built

- Global layout: sticky navigation with dropdowns, dark/light mode (system-aware, manually toggleable),
  scroll-to-top, skip-to-content link, JSON-LD Person schema, full SEO metadata.
- Homepage: hero with the signature eight-point geometric motif, stats, about preview with timeline,
  expertise grid, articles preview, Islamic Knowledge Centre preview, speaking CTA, testimonials carousel.
- About page: biography, milestones, values.
- Expertise page: all nine areas as detailed cards.
- Research page: filterable portfolio (category filter), citation and download affordances (wire up to
  real PDFs and a citation copy function before launch).
- Articles system: MDX-powered blog. Add a new `.mdx` file to `content/articles/` with frontmatter and it
  appears automatically on `/articles` and at `/articles/[slug]`, with reading time computed automatically.
- Contact page: contact form UI (not yet wired to a backend — see section 4), map placeholder.
- Speaking page: topics list and booking request form UI.
- 404 page, Privacy Policy and Terms pages (placeholder legal text — see section 4).

## 2. What is scaffolded as a template (ready to fill in)

These routes exist, are fully styled and SEO-tagged, but contain placeholder content rather than final
copy: `/knowledge-centre`, `/teaching`, `/sdg-projects`, `/gallery`, `/media`, `/resources`,
`/testimonials`. Each uses the shared `PageHeader` and `ComingSoonGrid` components in
`components/ui/`, so replacing the placeholder cards with real content is a matter of editing the arrays
at the top of each `page.tsx` file.

## 3. Folder structure

```
app/                     Routes (Next.js App Router). One folder per URL segment.
  layout.tsx             Root layout: fonts, metadata, schema, nav, footer, theme provider
  page.tsx                Homepage
  about/ expertise/ contact/ research/ articles/ knowledge-centre/ teaching/
  speaking/ sdg-projects/ gallery/ media/ resources/ testimonials/
  privacy-policy/ terms/  Route folders, each with a page.tsx
  not-found.tsx           Custom 404
  globals.css             Tailwind layers, focus states, reduced-motion handling

components/
  layout/                 Navbar, Footer, ThemeProvider, ThemeToggle, ScrollProgress, BackToTop
  ui/                     Button, Card, SectionHeading, PageHeader, ComingSoonGrid, Reveal, EightPointRose
  home/                   Homepage-only sections (Hero, Stats, ExpertiseGrid, ArticlesPreview, etc.)
  research/               ResearchList (client component with category filtering)

content/
  articles/                One .mdx file per article. Frontmatter: title, excerpt, category, date, tags.

lib/
  data.ts                  Site-wide data: nav links, expertise list, stats, testimonials, socials
  research.ts               Research portfolio entries
  articles.ts                Reads and parses content/articles at build time
  utils.ts                    cn() class merger, readingTime(), formatDate()
```

## 4. Before this goes live

Real contact details, photography and social links have now been added throughout (see section 4a).
What's still intentionally left as a placeholder:

- **Contact and speaking forms** currently submit nowhere. Connect them to a form handler such as
  Formspree, Resend, or a custom Next.js API route (`app/api/contact/route.ts`).
- **Newsletter form** in the footer and homepage needs a provider (Mailchimp, ConvertKit, Buttondown, etc.).
- **Google Maps embed** on the Contact page uses a text-address query, which works but is unpinned and can
  show a "for development purposes only" watermark. For a precise pin and no watermark, get a Google Maps
  Embed API key and swap in a proper embed URL.
- **Privacy Policy and Terms** contain placeholder legal text. Have these reviewed against the Nigeria
  Data Protection Act 2023 before publishing.
- **A group SDG Projects / Gallery photo set** would benefit from more images over time; only the photos
  supplied so far are included.

### 4a. Real content already added

- **Photos**: portrait (hero), graduation, classroom teaching, a candid student selfie, two Markaz group
  photos, three khutbah/podium photos, a Moon TV appearance, the SDG 16 campaign banner graphic, and a
  mosque collage — all in `public/images/`, referenced from Home, About, Teaching, Knowledge Centre,
  Media, SDG Projects and Gallery.
- **Contact details**: general email (`fursanulbayan@gmail.com`), mosque/Markaz email
  (`markazmafaazat@gmail.com`), a direct phone number and the mosque phone number, a WhatsApp "Message on
  WhatsApp" button, and the full mosque address, all on the Contact page.
- **Social links**: LinkedIn (personal), Facebook and TikTok (via `lib/data.ts`, `socialLinks`). The
  mosque's own LinkedIn company page is stored separately in `mosqueSocialLinks` in `lib/data.ts` and is
  not yet placed on a page. YouTube, Instagram and X were removed rather than left as dead `#` links; add
  them back into `socialLinks` in `lib/data.ts` once those accounts exist.
- **Stats**: 7+ years teaching, 6+ years leading the mosque, 100+ lectures on social media, 100+ students
  taught.

One photo was intentionally left out: a mosque interior shot showing a wall noticeboard with a bank
account number for monthly contributions. Publishing a full account number on a public, globally indexed
website is a common target for impersonation and scam attempts, so it was excluded rather than guessed at.
If you'd like a version of that photo on the site, send a cropped copy that excludes the account details,
or confirm you're comfortable publishing it as is.

## 5. Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The production build (`npm run build`) has already been verified to
compile with zero errors in every route, including the MDX article pipeline and the research filter.

## 6. Deploying

The fastest path is Vercel, built by the same team as Next.js:

1. Push this folder to a GitHub repository.
2. Go to vercel.com, import the repository, and accept the default Next.js build settings.
3. Add a custom domain under Project Settings → Domains once you own one.

No environment variables are required for the current feature set. Once you wire up a form handler or
newsletter provider, their API keys will need to be added as environment variables in Vercel's dashboard,
never committed to the repository.

## 7. Adding content

**A new article**: add `content/articles/your-slug.mdx` with frontmatter matching the existing examples.
It will appear on `/articles` automatically, sorted by date.

**A new research entry**: add an object to the `researchProjects` array in `lib/research.ts`.

**A new expertise area**: add an object to `expertiseAreas` in `lib/data.ts`, and add a matching icon
import in `components/home/ExpertiseGrid.tsx` and `app/expertise/page.tsx` (icons come from
[lucide-react](https://lucide.dev)).

## 8. Design system

- **Colour**: deep emerald (`emerald-900` `#0B3D2E`), soft gold (`gold-500` `#B8935A`), slate grey (Tailwind's
  built-in `slate` scale), warm beige (`beige-50/100`), deep navy (`navy-950`) — defined in
  `tailwind.config.ts`.
- **Type**: Fraunces (display/headings), Public Sans (body), Amiri (Arabic text, RTL), JetBrains Mono
  (stats, labels, eyebrows) — loaded via `next/font/google` in `app/layout.tsx`, so no external font
  requests happen at runtime and there is no layout shift.
- **Signature motif**: the eight-point geometric rose (`components/ui/EightPointRose.tsx`) reads as both a
  classical Islamic geometric pattern and a data/network diagram — used once, in the hero, and again
  (quietly) on the 404 page.
- **Accessibility**: visible keyboard focus rings, `prefers-reduced-motion` respected throughout, skip-to-
  content link, semantic headings.

## 9. Future expansion

The architecture is intentionally modular so these can be added without a rebuild:

- **Online courses / LMS**: add `app/courses/` following the same route pattern; consider a headless LMS
  (e.g. a hosted course platform accessed via API) rather than building one from scratch.
- **Membership portal / student dashboard**: would introduce authentication (NextAuth.js pairs cleanly
  with the App Router) and a database (Postgres via Supabase or Neon are both straightforward with
  Next.js).
- **Book store / donation platform**: Stripe Checkout integrates directly into API routes without needing
  a separate e-commerce platform for a catalogue this size.
- **AI chatbot trained on your articles**: the `content/articles/` MDX files are already structured,
  plain-text source material, ideal for a retrieval-augmented chatbot once there is enough published
  content to draw on.
- **Podcast, mobile app, events/conference registration**: each fits the same `app/<section>/` pattern
  used throughout this codebase.

## 10. Suggested next steps

1. Replace placeholder copy on the scaffolded pages (section 2) with real content — the About and
   Expertise pages are good references for tone.
2. Add 2 to 3 more MDX articles so `/articles` feels populated at launch.
3. Wire up the contact form and newsletter signup.
4. Source or commission a professional portrait photograph.
5. Deploy a staging build on Vercel and review on an actual phone before pointing a domain at it.
