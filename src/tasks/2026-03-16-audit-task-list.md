---
title: "Task list — 2026-03-16 combined audit"
source: "/reports/audits/2026-03-16_theme-css-tokens-styles-data-audit.md"
created: "2026-03-16"
status: "in-progress"
---

# Task list — 2026-03-16 combined audit

## Critical priority

- [x] **T1** Remove stale tokens from theme-light-mode.css (shadow--lift, interactive-bg-hover, accent-100/500/900)
- [x] **T2** Add missing --wp--preset--color--primary to theme-variables.css light mode
- [x] **T3** Add missing --wp--preset--color--info to theme-variables.css light mode
- [x] **T4** Add missing --wp--preset--color--error-muted to theme-variables.css (both modes)
- [x] **T5** Convert non-BEM utility classes in order/ components to proper BEM (wp-text-bold, wp-flex, etc.)
- [x] **T6** Convert non-BEM utility classes in checkout/ components (funky-bold-text, funky-price-text)
- [x] **T7** Convert non-BEM utility classes in FilterSidebar (wp-color-text-inverse)

## Moderate priority

- [x] **T8** Consolidate funky tokens to single source (theme-funky.css) — remove duplicates from theme-light-mode.css and theme-dark-mode.css
- [x] **T9** Replace hardcoded font-size values in section CSS with --wp--preset--font-size--* tokens — Fixed 10 instances across `hero.css` (2), `flash-sale.css` (7), `instagram-feed.css` (1), `comparison-table.css` (2). Remaining ~40 in `front-page-funky.css` are mostly dead code from legacy single product styles. ✅ **COMPLETE**
- [x] **T10** Replace hardcoded spacing values (gap, padding px) in section CSS with --wp--preset--spacing--* tokens — Tokenized 18 instances across 7 files: `collection-row.css` (2), `faq.css` (1), `instagram-feed.css` (2), `social-feed.css` (2), `contact-form.css` (1), `flash-sale.css` (2), `pp-hero.css` (8). Micro-level badge padding (2px–6px) below token scale left as-is. `front-page-funky.css` ~30 instances deferred (legacy dead code). ✅ **COMPLETE**
- [x] **T11** Fix sentence case violations in headings (HowItWorksSection, Sitemap, menus, breadcrumbs)
- [x] **T12** Replace hardcoded colors in archive-cta.css with CSS variables
- [x] **T13** Add --wp--preset--font-size--xs to theme-variables.css (canonical source) ✅

## Low priority

- [x] **T14** Remove orphaned --retro-accent-olive mapping from theme-dark-mode.css
- [ ] **T15** Clean up Tailwind migration comments in CSS files
- [ ] **T16** Define missing tokens: --wp--preset--focus-ring--*, --wp--preset--z-index--modal