# Motor Accident Line

Next.js website for **Motor Accident Line** (`motor-accident-line.co.uk`), a trading name of **Venture Marketing North West Ltd** (FCA FRN 838123).

Built as a Next.js App Router app with `output: 'export'`, so it builds to fully static HTML, CSS and JS files that can be hosted on any static host (Vercel, Cloudflare Pages, Netlify, S3, GitHub Pages, etc.) with no Node server required.

## Quick start

```bash
# 1. Install Node 20+ (or use the .nvmrc)
nvm use   # if you have nvm installed

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
# → open http://localhost:3000

# 4. Build for production (writes static files to ./out)
npm run build

# 5. (Optional) preview the production build
npx serve out
```

## Project structure

```
.
├── app/
│   ├── layout.tsx            # Root <html> shell + global metadata
│   ├── globals.css           # All styles (homepage + policy pages)
│   ├── page.tsx              # Homepage
│   ├── sitemap.ts            # → /sitemap.xml
│   ├── robots.ts             # → /robots.txt
│   ├── privacy/page.tsx      # → /privacy/
│   ├── terms/page.tsx        # → /terms/
│   ├── complaints/page.tsx   # → /complaints/
│   └── cookies/page.tsx      # → /cookies/
├── components/
│   ├── Header.tsx            # Header with home/policy variants
│   ├── Footer.tsx            # Footer with home/policy variants
│   ├── PolicyPage.tsx        # Wrapper for the 4 policy pages
│   ├── PhoneButton.tsx       # Reusable phone CTA
│   └── Icons.tsx             # All inline SVG icons
├── lib/
│   └── brand.ts              # ⚠ Single source of truth — see below
├── next.config.mjs           # output: 'export' → static build
├── package.json
└── tsconfig.json
```

## Brand constants — `lib/brand.ts`

**All identity, regulatory and contact details live in `lib/brand.ts`.** Update the file once and the change propagates across every page (titles, meta descriptions, footers, sitemaps, structured data, etc.).

Fields:

| Field                | Current value                                              |
|----------------------|------------------------------------------------------------|
| Trading name         | Motor Accident Line                                        |
| Domain               | motor-accident-line.co.uk                                  |
| Legal entity         | Venture Marketing North West Ltd                           |
| Company number       | 10608067                                                   |
| Registered office    | 4 Hattersley Court, Ormskirk, England, L39 2AY             |
| FCA FRN              | 838123                                                     |
| ICO registration     | ZC009231                                                   |
| Phone                | 0303 003 2160                                              |
| General email        | enquiries@motor-accident-line.co.uk                        |
| Complaints email     | info@vmnw.co.uk                                            |

If any of these change, update `lib/brand.ts`, then run `npm run build` and redeploy.

## Deploying

The build produces a fully static `out/` directory. Drop it on any static host:

- **Cloudflare Pages / Vercel / Netlify** — connect the Git repo and they'll detect Next.js automatically. Build command: `npm run build`. Output directory: `out`.
- **S3 + CloudFront** — sync `out/` to a bucket configured for static website hosting.
- **GitHub Pages** — push the contents of `out/` to a `gh-pages` branch.

Because every route gets its own folder with `index.html` (thanks to `trailingSlash: true`), URLs work without any special server config.

## Outstanding compliance items (not code)

The site code is in good shape. The following still need to be actioned outside the codebase before launch:

1. **Verify FRN 838123 covers the "Personal Injury" claim sector** on register.fca.org.uk. If it doesn't, the website's content needs to change (because lead generation for motor accident claims is in the Personal Injury sector, not the Financial Services sector).
2. **Register "Motor Accident Line" as a trading name on the FCA register** via FCA Connect. Until this is done, consumers searching the FS Register won't find the brand — which the FCA treats as a clone-firm warning signal.
3. **Provision the `enquiries@motor-accident-line.co.uk` and `info@vmnw.co.uk` mailboxes** and make sure someone monitors them.
4. **Confirm the WHOIS for `motor-accident-line.co.uk` is registered to Venture Marketing North West Ltd** (not a personal name or proxy).
5. **Deploy a real cookie banner.** The Cookie Policy mentions one — install something like [Klaro](https://klaro.org) or [Cookie Consent by Orest Bida](https://cookieconsent.orestbida.com). Both are open-source and lightweight.
6. **Compliance officer / specialist CMC solicitor review** of all four policy documents before going live. They are sensible first-draft templates, not legal advice.
7. **Internal CMCOB policies** (Business Continuity, Financial Promotions, Information Security, Training, TCF/Conduct Risk, Complaints, AML) — the DD doc shows these were marked "No" — they need to exist as internal documents.

## Performance notes

- `output: 'export'` produces fully static files — no Node server at runtime, sub-100ms TTFB on any CDN.
- All SVG icons are inline React components — no icon-library dependency, no extra HTTP request.
- System font stack — no web fonts to download.
- Native `<details>`/`<summary>` for FAQ accordions — no JavaScript needed.
- Built bundle is tiny because there's no client-side state, no data fetching, and no rich interactions.

Run `npx serve out` after `npm run build` and check the network tab — the homepage hits well under 100KB on the wire.
