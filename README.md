# Flowspace — Product Landing Page

**CodeNova Frontend Development · Task 3**

A responsive landing page for **Flowspace**, a fictional productivity and team-planning platform. Built with semantic HTML5, modular CSS3 and vanilla JavaScript (no framework or build tools).

## Features

- High-impact hero with headline, subtitle, and two CTAs (Pricing and How It Works).
- Three responsive feature cards with custom CSS illustrations and benefit-focused copy.
- Three pricing tiers and an interactive monthly/yearly toggle. The annual rates shown are **monthly equivalents** for annual billing (Starter $0; Studio $15/month vs $12/month equivalent; Collective $29/month vs $23/month equivalent).
- FAQ accordion with button controls, `aria-expanded`, `aria-controls`, labelled answer regions, and one-open-at-a-time behaviour.
- Sticky navigation with animated mobile drawer and anchor scrolling.
- Keyboard-visible focus states, skip link, semantic landmarks, reduced-motion support.

## Run locally

1. Open this folder in VS Code.
2. Right-click `index.html` → **Open with Live Server** (or open `index.html` directly in a browser; this project does not fetch external JSON).
3. Test all links, pricing switch, FAQ, and mobile menu.

## Design system

- **Typography:** DM Sans for UI/body/headings; DM Serif Display italic for editorial emphasis. Web fonts are requested from Google Fonts; fallback fonts are provided if offline.
- **Colour palette:** Cream `#f7f4ec` (page), Ink `#242538` (text), Purple `#6556a8` (primary actions), Lavender `#ded9fa`, Coral `#f2b7a3`, Mint `#d9e9d7` (feature backgrounds).
- **Layout:** Max-width 1180px `.wrap`, responsive CSS Grid and Flexbox, 24px card corners, ample whitespace, consistent 75–118px section spacing.
- **Components:** `.btn` button variants, `.feature-card`, `.price-card`, `.faq-item`, `.nav-links`, `.section-heading`.
- **Breakpoints:** 980px (tablet) and 700px/380px (mobile). Navigation changes to a collapsible drawer at 700px.
- **Interactions:** `script.js` handles mobile navigation, billing switch and accordion. All interactions are frontend-only.

## Architecture

- `index.html` — semantic page structure and content.
- `style.css` — tokens, layout, component styles, responsive rules.
- `script.js` — vanilla JavaScript interactions.
- `SUBMISSION_CHECKLIST.md` — verification and GitHub Pages steps.

## Notes on demo functionality

Flowspace is **fictional**. Prices, plan names and features are illustrative. No backend, signup, checkout or payment system is provided. Pricing CTAs lead to the FAQ section rather than pretending to offer a real checkout. They are labelled “Explore” to avoid implying account creation. The actual assignment is to build a landing page, not a SaaS backend.

## Accessibility and QA

The FAQ buttons use native buttons and WAI-ARIA state attributes; content is hidden when collapsed. Navigation and pricing controls are keyboard-accessible. Verify contrast, no horizontal overflow, and keyboard focus in a real browser before submission. Suggested viewport widths: 375px, 768px, 1280px.

## Deployment

Upload all files to the **root** of a public GitHub repository. In GitHub **Settings → Pages**, choose **Deploy from a branch**, branch **main**, folder **/(root)**. Wait for the live site link and test it. See `SUBMISSION_CHECKLIST.md`.
