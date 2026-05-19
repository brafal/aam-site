# CLAUDE.md — AAM AIRPORT DOO Skopje Website Project

This file is the standing brief for the AAM website rebuild. Read it fully before making any changes.
Full source of truth is in `raw/content/_project-reference.md`.

---

## What This Project Is

A website for **AAM AIRPORT DOO Skopje** (aam.com.mk) — a Macedonian aviation ground handling supervision company operating at Skopje (SKP) and Ohrid (OHD) airports since 1995. The site is B2B, targeting two primary audiences: **airlines** and **travel agencies**.

AAM AIRPORT DOO Skopje is the operating company under the parent **AAM DOOEL Skopje**.

The site is built with **Astro 4 + Tailwind CSS 3 + @lucide/astro** (same stack as the Avionet project). Source code lives in `site/src/`. Build output goes to `site/dist/`.

- `npm run dev` — start dev server (from inside `site/`)
- `npm run build` — production build to `site/dist/`

---

## Company — Fast Facts

| | |
|---|---|
| Full legal name | AAM AIRPORT DOO Skopje |
| Parent company | AAM DOOEL Skopje |
| Reg. No. (EMBS) | 6880347 |
| Tax No. (EDB) | 4080013537923 |
| Trading name | AAM Airport Services |
| General Manager | Daniel Andonovic |
| Founded | 1992 (operating since 1995) |
| Airports | SKP (Skopje) and OHD (Ohrid) |
| Phone | +389 2 3117 009 |
| Email | aaminfo@aam.com.mk |
| Website | aam.com.mk |
| Subsidiary | Avionet Travel Agency DOO Skopje (avio.net.mk) — IATA/BSP consolidator |

**Key stats (verified — do not change):**
- 30+ Years Active
- 10+ Airline Partners
- 2 Airports (SKP & OHD)
- 4 Countries Served

---

## Assets

Raw asset files live in `../aam-assets/` at the repo root. These are unoptimized source materials (large images, logos, documents) that may or may not be used in the website. When you need an asset, copy it into `site/public/` (and optimize/resize first). Do not edit files in `../aam-assets/` — it's the raw stash.

## Naming Rules — Critical

- Country is always **Macedonia** — never "North Macedonia", not anywhere on the site
- Company is **AAM AIRPORT DOO Skopje** (full) or **AAM** (short)
- Parent company is **AAM DOOEL Skopje** — referenced only in group structure context
- Subsidiary is **Avionet** or **Avionet Travel Agency DOO Skopje** — never "AvioNet" (capital N)
- Airports: **SKP** = Skopje International Airport, **OHD** = Ohrid St. Paul the Apostle Airport

---

## Site Structure & Page Map

```
/                                    → Homepage (index.astro)
/services                            → Services overview (services.astro)
/services/ground-handling            → Ground Handling (ground-handling.astro)
/services/ground-handling-request    → Ground Handling Request Form (ground-handling-request.astro)
/services/passenger-services         → Passenger Services
/services/fuel-services              → Fuel Services
/services/cargo-logistics            → Cargo & Logistics
/services/ticket-consolidation       → Ticket Consolidation
/services/corporate-travel           → Corporate Travel
/airports/skp                        → Skopje Airport (airports/skp.astro)
/airports/ohd                        → Ohrid Airport (airports/ohd.astro)
/about                               → About (about.astro)
/contact                             → Contact (contact.astro)
/ops/supervision-report              → Supervision Report (hidden — no nav, not in sitemap)
/ops/safety-report                   → Safety Report (hidden — no nav, not in sitemap)
```

No separate Partners page. The logo section on the homepage is sufficient.

**Ops pages** (`/ops/*`) are intentionally hidden: no navigation links, excluded from `sitemap.xml.ts`, and use `WEB3FORMS_OPS_KEY` for email routing to internal ops.

---

## Navigation

```
Services · Airports · For Airlines · Travel Agents · About · Contact
```

Right side of nav: phone number + **[24/7 Support]** button (solid filled, dark text on white).

"For Travel Agents & Companies" from the old nav is now shortened to **Travel Agents**.
"Partners" has been removed from the nav — it lives in the footer only.

---

## Forms

All forms submit via **Web3Forms** (`https://api.web3forms.com/submit`). Every form includes honeypot spam protection (`botcheck` hidden checkbox) and client-side JS for async submission with success/error feedback.

### Form styling conventions
- Container: `bg-white border border-slate-200 rounded-xl p-8`
- Inputs/selects: `w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-aam-blue/20 focus:border-aam-blue transition-colors`
- Labels: `block text-sm font-semibold text-slate-700 mb-1.5`
- Submit button: `inline-flex items-center gap-2 bg-aam-blue text-white px-8 py-3 rounded-md font-semibold text-sm hover:bg-aam-blue-dark transition-colors`
- Fieldset legend: `text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200 w-full`

### Form pages

| Page | URL | Key | Notes |
|---|---|---|---|
| Contact form | `/` (homepage, bottom) | `PUBLIC_WEB3FORMS_KEY` | Name, email, interest dropdown, message |
| Ground Handling Request | `/services/ground-handling-request` | `PUBLIC_WEB3FORMS_KEY` | Full aircraft details, arrival/departure, 11 service checkboxes, contact info. Intro letter from ops team at top. |
| Supervision Report | `/ops/supervision-report` | `PUBLIC_WEB3FORMS_OPS_KEY` | Hidden ops form — supervisor details, flight info, services provided, quality, charges, MVT routing |
| Safety Report | `/ops/safety-report` | `PUBLIC_WEB3FORMS_OPS_KEY` | Hidden ops form — supervisor name, date, reporting type dropdown, mandatory remarks |

### Environment variables
- `site/.env.local` (gitignored) — copy from `site/.env.local.example`
- `PUBLIC_WEB3FORMS_KEY` — main contact and ground handling form submissions
- `PUBLIC_WEB3FORMS_OPS_KEY` — ops/internal form submissions (supervision report, safety report)
- `PUBLIC_GA_ID` — Google Analytics 4 measurement ID
- Env access is centralized in `site/src/data/env.ts` — import from there, never use `import.meta.env` directly in other files (avoids Vite chunk-splitting bug in dev mode)

---

## Content Files

All page content is in `content/`. Each MD file is the authoritative content for that page.
Do not invent or paraphrase content — use what is in the MD files exactly.
If something seems missing, check `content/_project-reference.md` before asking.

| File | Page |
|---|---|
| `content/_project-reference.md` | Source of truth — all facts, dates, partners |
| `content/page-home.md` | Homepage |
| `content/page-services.md` | Services |
| `content/page-airport-skp.md` | SKP airport page |
| `content/page-airport-ohd.md` | OHD airport page |
| `content/page-for-airlines.md` | For Airlines |
| `content/page-travel-agents.md` | Travel Agents / Avionet |
| `content/page-about.md` | About AAM |
| `content/page-contact.md` | Contact |

---

## Design Rules

### Buttons
- **Primary CTA** = solid filled button. In the hero: white fill, dark text. On light backgrounds: dark navy fill, white text.
- **Secondary CTA** = outline/ghost button.
- Never use ghost/outline buttons as the only CTA on a dark background — they disappear.
- The hero and the closing CTA banner both need a solid primary button.

### Colors
- Primary brand: dark navy blue (existing)
- No "North Macedonia" blue — keep palette conservative and professional
- CTA accent must contrast clearly against both light and dark backgrounds

### Typography
- H1: large and dominant in the hero
- Section labels: small caps or uppercase, muted color, above the section headline
- Body text: readable line height, not too dense
- No inline hyperlinks styled in blue inside card body text — this looks like unstyled dev links

### Cards
- Service cards: max 3 bullet points per card, short benefit-focused headlines
- Logo/partner cards: logo + relationship type + date range (e.g. "Supervision & Ticketing, 2015–present")
- Never stack more than 3 cards in a row

### Spacing
- Generous whitespace between sections
- Cards need internal padding — not cramped

---

## Known Issues to Fix (priority order)

### P1 — Fix before launch
1. **Typos in service cards** — search and fix: "rellability", "supervition", "liarsing", "Stabon", "Blaggage"
2. **CTA button styling** — fixed: hero and closing banner both use solid filled buttons
3. **Hero subtext** — fixed: replaced with operations-focused sentence
4. **"North Macedonia"** — fixed: removed from all content, replaced with "Macedonia"
5. **WhatsApp** — add WhatsApp link to header next to phone: wa.me/38923117009

### P2 — High impact
6. **Service cards tagline** — fixed: replaced with AAM-specific tagline
7. **Service cards layout** — fixed: merged into single 3-col grid with equal heights
8. **Remove blue inline hyperlinks** — fixed: service cards use text links now
9. **"4 Countries Served" stat** — fixed: sub-label lists Macedonia, Albania, Serbia, Montenegro
10. **Mid-page CTA** — fixed: uses solid filled button
11. **AvioNet section** — fixed: bridging sentence added above Avionet section
12. **Timeline** — fixed: reduced vertical spacing between nodes

### P3 — Polish
13. **WorldFuel logo card** — fixed: date range "2015–present" added to all partner cards
14. **Footer** — add more internal padding between columns, reduce visual heaviness
15. **Mobile** — test breakpoints for: 3-col service grid, 4-col logo grid, 2-col AvioNet layout, timeline, contact maps

---

## AAM Group Structure

- **AAM DOOEL Skopje** — parent holding company
- **AAM AIRPORT DOO Skopje** — operating company, ground handling & aviation services (this website)
- **Avionet Travel Agency DOO Skopje** (avio.net.mk) — IATA/BSP consolidator, subsidiary
- **AAM Airport Services DOO** — part of the group

The Avionet section on the homepage and the `/travel-agents` page are the main touchpoints for the travel agency audience. Always link to avio.net.mk for the full Avionet experience.

---

## What Not to Do

- Do not use "North Macedonia" anywhere
- Do not invent stats, dates or partner names — use only what is in `_project-reference.md`
- Do not add new frameworks or dependencies unless explicitly asked
- Do not use or reference the old static HTML/CSS/JS files — they are archived in `archive_old_static/`. The canonical source is `site/src/`
- Do not change the verified stats (30+, 10+, 2, 4)
- Do not rewrite content that hasn't been flagged for change — the MD files are approved
- Do not use ghost buttons as primary CTAs on dark backgrounds
- Do not put more than 3 bullet points in a service card
- Do not use `import.meta.env` directly in `.astro` files — import from `site/src/data/env.ts` instead (avoids Vite dev-mode chunk-splitting bug)
