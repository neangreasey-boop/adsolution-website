# Deploying adsolution.men to Cloudflare

The site is a **static export** (`next build` → `/out`) plus one **Cloudflare Pages Function** (`/functions/api/contact.ts`) for the contact form. This is the simplest, fastest and cheapest Cloudflare architecture: no server, global edge caching, free tier.

---

## 1. Create the Pages project

### Option A — Git integration (recommended)

1. Push this repository to GitHub / GitLab.
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo and use these settings:

   | Setting                | Value                |
   | ---------------------- | -------------------- |
   | Framework preset       | Next.js (Static HTML Export) — or *None* |
   | Build command          | `npm run build`      |
   | Build output directory | `out`                |
   | Root directory         | `/`                  |
   | Node version           | `22` (read from `.node-version`) |

4. Deploy. Every push to the production branch redeploys; other branches get preview URLs.

### Option B — Direct upload from your machine

```bash
npx wrangler login
npm run deploy          # builds and uploads /out (+ /functions) to project "adsolution"
```

---

## 2. Environment variables (contact form)

Pages project → **Settings → Environment variables** (set for *Production* and *Preview*):

| Variable         | Type   | Value                                                  |
| ---------------- | ------ | ------------------------------------------------------ |
| `RESEND_API_KEY` | Secret | API key from https://resend.com                        |
| `CONTACT_TO`     | Text   | `admin@adsolution.men`                                 |
| `CONTACT_FROM`   | Text   | `ADSolution Website <noreply@adsolution.men>`          |

**Resend setup:** add `adsolution.men` as a domain in Resend and add the DNS records it gives you (they are DKIM/SPF records for a *subdomain* such as `resend._domainkey` and a `send` subdomain — they do **not** conflict with Email Routing). Until this is configured, the form returns a friendly error and shows the email address as a fallback; nothing is silently lost.

> Prefer another provider (Formspree, Web3Forms, Brevo…)? Either set `NEXT_PUBLIC_CONTACT_ENDPOINT` to that provider's URL at build time, or edit only the `sendEmail()` function in `functions/api/contact.ts`.

Optional hardening: add [Cloudflare Turnstile](https://developers.cloudflare.com/turnstile/) to the form later; the Function already includes a honeypot and server-side validation.

---

## 3. DNS — add the website records, keep Email Routing intact

Cloudflare Dashboard → **adsolution.men → DNS → Records**.

### Do NOT change these (Email Routing for admin@adsolution.men)

Leave every existing record of these types exactly as they are:

| Type  | Name               | Purpose                                    |
| ----- | ------------------ | ------------------------------------------ |
| `MX`  | `adsolution.men`   | `route1/2/3.mx.cloudflare.net` — inbound mail |
| `TXT` | `adsolution.men`   | `v=spf1 include:_spf.mx.cloudflare.net ~all` |
| `TXT` | `_dmarc`           | DMARC policy (if present)                  |
| `TXT` | `cf2024-1._domainkey` (or similar) | Email Routing DKIM             |

Website hosting only uses `CNAME` records on the root and `www`, which coexist with MX/TXT on the same name. **Never add an `A`/`AAAA`/`CNAME` for the root by hand while Email Routing exists — let Pages create it (step below) so it is set up correctly.**

### Add the custom domains (Pages creates the records for you)

Pages project → **Custom domains → Set up a custom domain**:

1. Add `adsolution.men` → Cloudflare adds a proxied `CNAME adsolution.men → adsolution.pages.dev` (CNAME flattening at the apex is automatic).
2. Add `www.adsolution.men` → adds `CNAME www → adsolution.pages.dev`.

Resulting website records:

| Type    | Name  | Target                | Proxy  |
| ------- | ----- | --------------------- | ------ |
| `CNAME` | `@`   | `adsolution.pages.dev` | Proxied (orange) |
| `CNAME` | `www` | `adsolution.pages.dev` | Proxied (orange) |

If an old `A`/`CNAME` record for `@` or `www` (e.g. from a parking page) exists, Pages will ask you to remove **that record only** — MX and TXT records stay.

### Redirect www → root (optional but recommended)

**Rules → Redirect Rules → Create**: *"www to root"*
- When: Hostname equals `www.adsolution.men`
- Then: Dynamic redirect, expression `concat("https://adsolution.men", http.request.uri.path)`, status 301

---

## 4. Recommended Cloudflare settings

- **SSL/TLS → Overview**: *Full (strict)*.
- **SSL/TLS → Edge Certificates**: *Always Use HTTPS* on, *Automatic HTTPS Rewrites* on, *HSTS* (the site already sends an HSTS header via `public/_headers`).
- **Speed → Optimization**: Brotli on (default). Leave Rocket Loader **off** (it can interfere with hydration).
- **Caching**: nothing required — `public/_headers` sets `immutable` caching for hashed assets.

---

## 5. Verify after deploy

- `https://adsolution.men` loads over HTTPS, `www` redirects to root.
- `https://adsolution.men/sitemap.xml` and `/robots.txt` respond.
- Send a test inquiry from `/contact` → arrives at admin@adsolution.men.
- Send a test email **to** admin@adsolution.men → still forwards (Email Routing untouched).
- Check headers: `curl -I https://adsolution.men` shows `content-security-policy`, `strict-transport-security`, etc.

---

## Security notes

- No secrets are in the repo; `.env*` files are git-ignored. Server secrets live only in Cloudflare (Function env), and only `NEXT_PUBLIC_*` values are exposed to the browser.
- `public/_headers` sets CSP, HSTS, `X-Frame-Options: DENY`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`.
- The contact Function validates and length-limits every field, escapes HTML in the email, uses a honeypot, and never echoes secrets.
- If you add third-party scripts (analytics, Meta Pixel, Turnstile), extend `script-src` / `connect-src` in `public/_headers` accordingly.
