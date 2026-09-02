# ADSolution — Official Website

Production website for **ADSolution** (Advertising + Digital + Solution) — https://adsolution.men

Built with **Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS v4 · Lucide icons**, deployed to **Cloudflare Pages** with a Pages Function for the contact form.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

| Script              | What it does                                                        |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Local development server with hot reload                            |
| `npm run build`     | Production build → static site in `/out`                            |
| `npm run start`     | Serve the production build locally (`/out`)                         |
| `npm run lint`      | ESLint                                                              |
| `npm run typecheck` | TypeScript check                                                    |
| `npm run preview`   | Run the static site **plus** the contact Pages Function locally     |
| `npm run deploy`    | Build and deploy to Cloudflare Pages via Wrangler (direct upload)   |

> The contact form posts to `/api/contact`, which only exists on Cloudflare Pages (or `npm run preview`). In plain `next dev` the form shows a friendly error with the email fallback — that is expected.

---

## Project structure

```
adsolution/
├── app/                        # Routes (App Router)
│   ├── layout.tsx              # Root layout: fonts, metadata, Navbar/Footer, JSON-LD
│   ├── globals.css             # Design system (Tailwind v4 @theme tokens, animations)
│   ├── page.tsx                # Home
│   ├── services/page.tsx
│   ├── about/page.tsx
│   ├── portfolio/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── terms-of-service/page.tsx
│   ├── not-found.tsx           # 404
│   ├── sitemap.ts              # → /sitemap.xml
│   ├── robots.ts               # → /robots.txt
│   └── fonts/                  # Self-hosted Inter + Manrope (variable, SIL OFL)
├── components/
│   ├── ui/                     # Button, Container, SectionHeader, Reveal, Logo,
│   │                           # PageHeader, LegalPage, SocialIcon
│   ├── layout/                 # Navbar (desktop + mobile drawer), Footer
│   └── sections/               # Hero, HeroVisual, ValueSection, ServicesSection,
│                               # ServiceCard, WorkflowSection, ProcessTimeline,
│                               # PortfolioGrid, PortfolioCard, CTASection, ContactForm
├── lib/
│   ├── site.ts                 # Site config: name, URL, email, nav, socials
│   ├── utils.ts                # cn() helper
│   └── data/                   # Structured content (services, values, founder, process, portfolio)
├── functions/
│   └── api/contact.ts          # Cloudflare Pages Function: emails contact inquiries
├── public/
│   ├── _headers                # Cloudflare security + cache headers
│   ├── og-image.png            # Open Graph / Twitter card image (1200×630)
│   ├── founder/                # Founder photo (neang-reasey.jpg / .webp)
│   ├── icon.svg, favicon.ico, apple-touch-icon.png, site.webmanifest
├── next.config.ts              # output: "export", trailingSlash, unoptimized images
├── wrangler.toml               # Cloudflare Pages settings
├── .env.example                # Environment variables reference
└── DEPLOYMENT.md               # Cloudflare deployment + DNS guide
```

### Editing content

All repeated content lives in `lib/`:

- `lib/site.ts` — brand name, domain, email, phones, address, navigation, **social links**
- `lib/data/founder.ts` — founder profile, skills and quote
- `lib/data/services.ts` — the six services and their bullet lists
- `lib/data/values.ts` — trust pillars (home), core values, mission and vision (about)
- `lib/data/process.ts` — "How We Work" steps and the "Attention → Action" workflow
- `lib/data/portfolio.ts` — portfolio projects (**currently placeholders**)

---

## Placeholders / items still to provide

| Item | Where | Notes |
| --- | --- | --- |
| **Logo** | `components/ui/Logo.tsx` | An inline SVG mark + wordmark is used. Replace with the official logo (instructions in the file). Also update `public/icon.svg`, `favicon.ico`, `apple-touch-icon.png`, `og-image.png`. |
| **Portfolio projects** | `lib/data/portfolio.ts` | The list is empty on purpose. While empty, `/portfolio` shows the "What We Can Do" capabilities section. Add real, approved projects (with images in `/public/portfolio/`) to switch to the project grid. |
| **Extra social channels** | `lib/site.ts` → `socials` | Only Facebook and Instagram are listed. Add LinkedIn / TikTok / Telegram only when a real profile exists. |
| **Contact form email** | Cloudflare Pages env vars | `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` — see DEPLOYMENT.md. |
| **Legal pages** | `app/privacy-policy`, `app/terms-of-service` | Generic templates — review with a legal advisor. |
| **Response time** | `app/contact/page.tsx` | "Usually within 1–2 business days" — adjust to reality. |
| **Budget ranges** | `components/sections/ContactForm.tsx` → `budgetOptions` | Adjust to your pricing. |

No fake clients, testimonials, statistics, awards or results are included anywhere.

## Design system

- **Colors** (`app/globals.css` → `@theme`): `brand-*` electric/royal blue scale, `navy-*` deep navy, `charcoal-*`, plus semantic `ink`, `muted`, `line`, `surface`.
- **Type**: Manrope (display/headings), Inter (body). Self-hosted variable fonts, no external requests.
- **Motion**: `Reveal` component (IntersectionObserver → CSS transition), hero entrance, hover micro-interactions. All respect `prefers-reduced-motion`.
- **Layout**: `Container` (max 1280px), 12-column grids, mobile-first breakpoints (`sm` 640 · `md` 768 · `lg` 1024 · `xl` 1280).

## Deployment

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for Cloudflare Pages setup, environment variables and the DNS records to add (without touching the existing Email Routing records).
