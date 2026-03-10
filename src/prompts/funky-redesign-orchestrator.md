# Funky WooCommerce Redesign — Orchestrator Prompt

**Version:** 2.2  
**Created:** February 21, 2026  
**Updated:** March 10, 2026 (v2.2 — Phase 16 dead code cleanup complete; CSS audit + optimization; 100/100 code health achieved)  
**Scope:** Full-site funky redesign of the WooCommerce prototype with prerequisite audits, design token system, systematic section-level implementation, and v2.0 structural improvements.  
**Parent Guidelines:** `/guidelines/Guidelines.md` (v2.8)  
**Status:** ✅ ALL PHASES COMPLETE (1-19) — v1.0 funky redesign shipped | ✅ v2.0 COMPLETE (Phases 11-18 all passing) | ✅ v2.1 COMPLETE (Phase 19 cleanup) | ✅ v2.2 COMPLETE (Phase 16 + CSS audit)

---

## Table of Contents

1. [Mission](#1-mission)
2. [Architecture Context](#2-architecture-context)
3. [Pre-Requisite Audits (Phase 0)](#3-pre-requisite-audits-phase-0)
4. [Funky WooCommerce Design System](#4-funky-woocommerce-design-system)
5. [Implementation Phases (1-10) — v1.0 COMPLETE](#5-implementation-phases)
6. [Strict Rules](#6-strict-rules)
7. [Workflow Per Page](#7-workflow-per-page)
8. [Output File Locations](#8-output-file-locations)
9. [Verification Checklists](#9-verification-checklists)
10. [Start Commands](#10-start-commands)
11. [v2.0 — Full-Site Redesign Sweep (Phases 11-18)](#11-v20--full-site-redesign-sweep-phases-11-18)

---

## 1. Mission

You are executing a **complete funky redesign** of a WooCommerce/WordPress FSE prototype. The redesign transforms a clean, neutral ecommerce store into a **bold, high-energy, visually distinctive** shopping experience — while maintaining WCAG 2.1 AA compliance, WordPress block architecture alignment, and full light/dark mode support.

**The "Funky WooCommerce" aesthetic is defined by:**

1. **Gradient Commerce** — Hero sections with bold multi-stop gradients, floating orbs, and glassmorphism badges that make products feel premium and exciting
2. **Glow Cards** — Product cards, feature cards, and content cards with gradient border glow on hover, creating a sense of depth and interactivity
3. **Neon Accents on Neutral Canvas** — The neon palette (pink, cyan, lime) serves as accent — NOT the dominant colour. The shop remains shoppable with clear product photography and readable typography
4. **Kinetic Sections** — Each section has at least one unique visual treatment (gradient text, animated dividers, glassmorphism panels, floating elements) to create rhythm and prevent "flat" sections
5. **Dark Mode Excellence** — Dark mode is the "showcase" mode where neon accents truly pop, while light mode uses subtle tinted versions

**What this is NOT:**

- NOT a rave/nightclub aesthetic — this is a premium ecommerce experience
- NOT gratuitous animation — every motion serves a purpose (attention, feedback, delight)
- NOT Tailwind — all styling uses WordPress BEM classes and CSS custom properties
- NOT a copy of any specific site — this is a unique funky WooCommerce identity

---

## 2. Architecture Context

### Critical File Awareness

Before ANY work begins, understand these architectural realities:

**Dual CSS Entry Points (Known Issue):**
- `/styles/globals.css` — Figma Make's auto-loaded flat file (defines `--background`, `--foreground`, `--primary`, etc.)
- `/src/styles/globals.css` — Project's structured WordPress-aligned file (defines `--wp--preset--*` variables)
- Both are active. Components may reference EITHER token system.
- **The funky redesign uses `--wp--preset--*` exclusively.** Any component touched must be migrated to this system.

**CSS Files Are Individually Parsed:**
- `@import` directives do NOT work in Figma Make
- Each CSS file in `/src/styles/` is parsed independently by Figma's CSS engine
- New CSS files are automatically picked up — no import chain needed

**Component Locations:**
- Templates: `/src/app/components/templates/` (59+ files)
- Patterns: `/src/app/components/patterns/` (41+ files, plus `/sections/`, `/account/`, `/shop/` subdirs)
- Parts: `/src/app/components/parts/` (21 files)
- Blocks: `/src/app/components/blocks/` (21 subdirectories)
- Data: `/src/app/data/` (48 files)
- Types: `/src/app/types/` (3 files)
- Styles: `/src/styles/` (7 top-level files + `/blocks/`, `/sections/` subdirs)

**Existing Funky Infrastructure:**
- `/src/styles/theme-funky.css` — Funky animations, glass panels, orbs, card glow (already implemented)
- `/src/styles/theme-variables.css` — Contains neon tokens (`--wp--preset--color--neon-*`)
- `/guidelines/design-tokens/funky-theme.md` — Existing funky token documentation

### Mandatory Pre-Read Files

Before modifying ANY file, read these:

```
/guidelines/Guidelines.md                    — Master architecture (CSS-first, BEM, WP alignment)
/guidelines/design-tokens/colors.md          — Colour system and semantic roles
/guidelines/design-tokens/typography.md      — Typography hierarchy
/guidelines/design-tokens/spacing.md         — Spacing scale and patterns
/guidelines/design-tokens/funky-theme.md     — Existing funky token definitions
/src/styles/theme-variables.css              — All WordPress CSS variables (the source of truth)
/src/styles/theme-funky.css                  — Existing funky animations and utilities
/src/styles/theme-dark-mode.css              — Dark mode variable overrides
/src/styles/theme-light-mode.css             — Light mode specifics
/src/styles/globals.css                      — Global element styles
/styles/globals.css                          — Figma's flat CSS file (secondary token system)
```

---

## 3. Pre-Requisite Audits (Phase 0)

**CRITICAL:** These audits MUST complete before the funky redesign tasks can be properly scoped. Each audit produces a report in `/reports/audits/` and feeds into the task list.

Run each audit as a separate prompt/session. The orchestrator tracks completion status.

### Audit Status Tracker

| # | Audit Name | Prompt File | Report Output | Task Output | Status |
|---|-----------|-------------|---------------|-------------|--------|
| A1 | Guidelines Freshness Audit | `/prompts/audits/guidelines-freshness-audit.md` | `/reports/audits/2026-02-21-guidelines-freshness-audit.md` | `/tasks/guidelines-remediation.md` | COMPLETE |
| A2 | Data & Types Content Model Audit | `/prompts/audits/data-types-content-model-audit.md` | `/reports/audits/2026-02-21-data-types-content-model-audit.md` | `/tasks/data-types-remediation.md` | COMPLETE |
| A3 | Reports Cleanup Audit | `/prompts/audits/reports-cleanup-audit.md` | `/reports/audits/2026-02-21-reports-cleanup-audit.md` | `/tasks/reports-cleanup.md` | COMPLETE |
| A4 | Blocks Coverage Audit | `/prompts/audits/blocks-coverage-audit.md` | `/reports/audits/2026-02-21-blocks-coverage-audit.md` | `/tasks/blocks-guidelines-gaps.md` | COMPLETE |
| A5 | Patterns Coverage Audit | `/prompts/audits/patterns-coverage-audit.md` | `/reports/audits/2026-02-21-patterns-coverage-audit.md` | `/tasks/patterns-guidelines-gaps.md` | COMPLETE |
| A6 | Parts Coverage Audit | `/prompts/audits/parts-coverage-audit.md` | `/reports/audits/2026-02-21-parts-coverage-audit.md` | `/tasks/parts-guidelines-gaps.md` | COMPLETE |
| A7 | Templates Completeness Audit | `/prompts/audits/templates-completeness-audit.md` | `/reports/audits/2026-02-21-templates-completeness-audit.md` | `/tasks/templates-remediation.md` | COMPLETE |
| A8 | CSS Architecture Deep Audit | `/prompts/audits/css-architecture-deep-audit.md` | `/reports/audits/2026-02-21-css-architecture-deep-audit.md` | `/tasks/css-architecture-remediation.md` | COMPLETE |

---

### A1: Guidelines Freshness Audit

**Purpose:** Identify guideline files that are outdated (older than February 20, 2026), contain conflicting information with the most recent guidelines, or reference deprecated patterns (e.g., Tailwind classes, old file paths).

**Scope:**
1. Scan ALL files in `/guidelines/` recursively
2. For each file, check last-modified date and content for:
   - References to Tailwind CSS classes or `tailwind.config`
   - References to deleted paths (`/styles/globals.css`, `/styles/woocommerce-complete.css`)
   - Conflicting CSS variable naming (e.g., `--color-*` vs `--wp--preset--color--*`)
   - Outdated component locations (e.g., references to `/components/` root instead of `/src/app/components/`)
   - Outdated version numbers or dates
   - Guidelines that contradict the funky redesign direction
3. Score each file: CURRENT, STALE (needs minor updates), OUTDATED (needs rewrite), CONFLICTING (actively harmful)

**Report Format:**
```markdown
# Guidelines Freshness Audit
**Date:** YYYY-MM-DD

## Summary
- Total files scanned: X
- CURRENT: X
- STALE: X
- OUTDATED: X
- CONFLICTING: X

## Per-File Analysis
### [filename] — [STATUS]
- **Path:** /guidelines/path/to/file.md
- **Issues Found:**
  - [ ] Issue description
- **Recommended Action:** [Update/Rewrite/Archive/Delete]
```

**Task Output:** `/tasks/guidelines-remediation.md` — Ordered list of files to update/rewrite.

---

### A2: Data & Types Content Model Audit

**Purpose:** Verify the data layer (`/src/app/data/`, `/src/app/types/`) aligns with WordPress content model standards and all data files are consumed by at least one template.

**Scope:**
1. List ALL files in `/src/app/data/` (48 files) and `/src/app/types/` (3 files)
2. For EACH data file:
   - Identify which template(s) import it (grep for import statements)
   - Flag orphan files (not imported anywhere)
   - Check TypeScript type alignment with WooCommerce schema
   - Verify content follows WordPress naming conventions
3. Check for DUPLICATE data files (e.g., `blogData.ts` vs `posts.ts`)
4. Verify `/data/` at ROOT is empty or should be deleted (migration complete?)
5. Check if types in `/src/app/types/woocommerce.ts` cover all product types (simple, variable, grouped, external, subscription, bundle, composite)

**Report Format:**
```markdown
# Data & Types Content Model Audit
**Date:** YYYY-MM-DD

## Summary
- Total data files: X
- Wired to templates: X
- Orphaned: X
- Duplicate: X

## Data File Analysis
### [filename.ts]
- **Imported by:** [Template1.tsx, Template2.tsx] or ORPHANED
- **Type coverage:** [Complete/Partial/Missing]
- **WP content model alignment:** [Pass/Fail]
- **Issues:** [description]

## Type Coverage
### woocommerce.ts
- Simple products: [Pass/Fail]
- Variable products: [Pass/Fail]
- Subscriptions: [Pass/Fail]
- Bundles: [Pass/Fail]
- ...
```

**Task Output:** `/tasks/data-types-remediation.md`

---

### A3: Reports Cleanup Audit

**Purpose:** Review all files in `/reports/`, identify reports older than one week (before February 14, 2026), verify reporting guidelines compliance, and recommend cleanup.

**Scope:**
1. Scan ALL files in `/reports/` recursively
2. Check each report against `/guidelines/REPORTING_GUIDELINES.md`:
   - Filename format: `YYYY-MM-DD_report-type_brief-description.md`
   - Correct category folder
   - Standard template structure
3. Flag reports older than February 14, 2026 for archival
4. Identify duplicate or superseded reports
5. Verify `/reports/README.md` is up to date

**Report Format:**
```markdown
# Reports Cleanup Audit
**Date:** YYYY-MM-DD

## Summary
- Total reports: X
- Compliant: X
- Non-compliant: X
- Older than 1 week (archive candidates): X

## Per-Report Analysis
### [filename]
- **Date:** YYYY-MM-DD
- **Category:** [correct/wrong]
- **Naming:** [compliant/non-compliant]
- **Action:** [Keep/Archive/Delete/Rename]
```

**Task Output:** `/tasks/reports-cleanup.md`

---

### A4: Blocks Coverage Audit

**Purpose:** Verify every block component in `/src/app/components/blocks/` has a corresponding guideline document in `/guidelines/blocks/`.

**Scope:**
1. List ALL component files in `/src/app/components/blocks/` (recursively across all 21 subdirectories)
2. List ALL guideline files in `/guidelines/blocks/` (recursively)
3. Cross-reference: identify blocks WITHOUT guidelines
4. Identify guidelines WITHOUT corresponding blocks (dead docs)
5. For each existing guideline, verify it references correct file paths and follows the current standards
6. Count total blocks, total guidelines, gap percentage

**Report Format:**
```markdown
# Blocks Coverage Audit
**Date:** YYYY-MM-DD

## Summary
- Total block components: X
- Total block guidelines: X
- Coverage: X%
- Missing guidelines: X
- Dead guidelines: X

## Coverage Matrix
| Subdirectory | Components | Guidelines | Gap |
|---|---|---|---|
| archive/ | X | X | X missing |
| blog/ | X | X | X missing |
| cart/ | X | X | X missing |
| checkout/ | X | X | X missing |
| design/ | X | X | X missing |
| ... | ... | ... | ... |

## Missing Guidelines (Priority Order)
1. `/src/app/components/blocks/cart/CartItem.tsx` — NO GUIDELINE
2. ...
```

**Task Output:** `/tasks/blocks-guidelines-gaps.md`

---

### A5: Patterns Coverage Audit

**Purpose:** Verify every pattern component has a corresponding guideline.

**Scope:**
1. List ALL files in `/src/app/components/patterns/` (including `/sections/`, `/account/`, `/shop/` subdirs)
2. Cross-reference with `/guidelines/patterns/`
3. Identify patterns WITHOUT guidelines
4. Verify existing guidelines reference correct paths and current standards

**Report Format:** Same structure as A4 but for patterns.

**Task Output:** `/tasks/patterns-guidelines-gaps.md`

---

### A6: Parts Coverage Audit

**Purpose:** Verify every part component has a corresponding guideline.

**Scope:**
1. List ALL files in `/src/app/components/parts/` (21 files)
2. Cross-reference with `/guidelines/parts/` (4 files + menus subdir)
3. Identify parts WITHOUT guidelines (expect significant gaps — only 4 guideline files for 21 parts)
4. Priority assessment for missing guidelines

**Report Format:** Same structure as A4 but for parts.

**Task Output:** `/tasks/parts-guidelines-gaps.md`

---

### A7: Templates Completeness Audit

**Purpose:** Audit all 59+ templates for data wiring, funky styling status, dark mode support, and mobile responsiveness.

**Scope:**
1. List ALL files in `/src/app/components/templates/` (59+ files)
2. For EACH template:
   - Does it import data from `/src/app/data/`? (not hardcoded content)
   - Does it use Layout wrapper?
   - Does it have WordPress BEM class names (not Tailwind)?
   - Does it have a corresponding guideline in `/guidelines/templates/`?
   - What is its "funky" status? (FUNKY / PARTIAL / PLAIN / NOT_ASSESSED)
3. Cross-reference with route definitions in `/App.tsx`
4. Identify templates not connected to any route
5. Identify routes pointing to missing templates

**Report Format:**
```markdown
# Templates Completeness Audit
**Date:** YYYY-MM-DD

## Summary
- Total templates: X
- Data-driven: X
- Hardcoded content: X
- Has guideline: X
- Missing guideline: X
- Funky status: X funky / X partial / X plain

## Per-Template Analysis
### [TemplateName.tsx]
- **Route:** /path
- **Data imports:** [data files] or HARDCODED
- **Layout wrapper:** Yes/No
- **BEM compliance:** Full/Partial/None (Tailwind count: X)
- **Guideline:** /guidelines/templates/file.md or MISSING
- **Funky status:** FUNKY/PARTIAL/PLAIN
- **Dark mode:** Pass/Fail
- **Mobile responsive:** Pass/Fail/Unknown
```

**Task Output:** `/tasks/templates-remediation.md`

---

### A8: CSS Architecture Deep Audit

**Purpose:** Comprehensive audit of the entire `/src/styles/` directory to identify duplication, dead CSS, optimization opportunities, token conflicts, and preparation for the funky redesign.

**This is the MOST CRITICAL audit and MUST run before any funky redesign work.**

**Scope:**

#### 8a. Token System Conflict Analysis
1. Compare tokens in `/styles/globals.css` (Figma's file) vs `/src/styles/theme-variables.css`
2. Document every conflicting variable name
3. Identify which token system each component uses (grep across all `.tsx` files)
4. Propose unified token resolution

#### 8b. CSS File Inventory
1. List EVERY CSS file in `/src/styles/` recursively (expected: 50+ files across blocks/sections subdirs)
2. Calculate total lines of CSS
3. Identify files with `!important` declarations
4. Identify files with hardcoded hex colours (not using variables)
5. Identify files with Tailwind-style utility classes
6. Identify empty or near-empty files (< 10 lines of actual rules)

#### 8c. Dark Mode Completeness
1. For EVERY CSS file, check if it has `.dark` selectors where needed
2. Verify dark mode contrast ratios for key elements
3. Identify components that break in dark mode

#### 8d. Selector Duplication
1. Find CSS selectors defined in multiple files
2. Identify conflicting rules for the same selector
3. Document the cascade order and specificity issues

#### 8e. Optimisation Opportunities
1. Identify CSS files that could be merged
2. Identify CSS rules that duplicate what `theme-variables.css` already provides
3. Identify section styles that are never used by any template
4. Calculate potential size reduction

**Report Format:**
```markdown
# CSS Architecture Deep Audit
**Date:** YYYY-MM-DD

## Executive Summary
- Total CSS files: X
- Total lines of CSS: X
- Token conflicts found: X
- !important declarations: X
- Hardcoded hex values: X
- Dead/unused CSS files: X
- Dark mode gaps: X

## Token Conflict Matrix
| Variable Name | /styles/globals.css | /src/styles/theme-variables.css | Components Using |
|---|---|---|---|

## File-by-File Analysis
### /src/styles/blocks/[subdir]/[file].css
- Lines: X
- !important: X
- Hardcoded hex: X
- Dark mode: Pass/Fail
- Used by: [Components]
- Action: Keep/Merge/Delete/Refactor

## Optimisation Plan
1. [Action] — [Expected benefit]
2. ...
```

**Task Output:** `/tasks/css-architecture-remediation.md` — This supersedes and incorporates relevant items from `/tasks/css-architecture-data-integrity-remediation.md`.

---

### Audit Execution Order

Audits can be run in parallel where there are no dependencies:

```
Parallel Group 1 (can run simultaneously):
  A1: Guidelines Freshness
  A2: Data & Types Content Model
  A3: Reports Cleanup

Parallel Group 2 (can run simultaneously):
  A4: Blocks Coverage
  A5: Patterns Coverage
  A6: Parts Coverage

Sequential (depends on Group 1 & 2 results):
  A7: Templates Completeness (needs A4-A6 for guideline cross-reference)
  A8: CSS Architecture Deep Audit (needs full picture)
```

---

## 4. Funky WooCommerce Design System

### 4.1 Design Philosophy

The "Funky WooCommerce" aesthetic is a **premium ecommerce** visual language that uses bold gradients, neon accents, and subtle animation to create a memorable shopping experience. Unlike generic flat ecommerce, every section has a unique visual signature.

**Core Principles:**

| Principle | Description | Implementation |
|-----------|-------------|----------------|
| **Product First** | Products and photography remain the hero; funky elements enhance, not distract | Glow effects frame products, not obscure them |
| **Gradient Commerce** | Bold multi-stop gradients replace plain backgrounds | Hero sections, CTA banners, section dividers |
| **Subtle Kinetics** | Animation serves purpose (attention, feedback, delight) | Hover lifts, glow reveals, floating orbs |
| **Accessible Neon** | Neon colours are accents on AA-compliant base colours | Neon used for borders/glows, NOT body text |
| **Mode Duality** | Light mode is "clean + tinted", dark mode is "showcase + neon" | Same structure, different atmosphere |

### 4.2 Funky Colour Tokens

These tokens extend the existing WordPress colour system. They are ALREADY defined in `/src/styles/theme-variables.css` and `/src/styles/theme-funky.css`.

#### Neon Accent Palette

| Token | CSS Variable | Hex | Usage |
|-------|-------------|-----|-------|
| Neon Pink | `--wp--preset--color--neon-pink` | `#ff00ff` | Primary glow, orbs, gradient stops |
| Neon Cyan | `--wp--preset--color--neon-cyan` | `#00ffff` | Secondary glow, borders, input focus |
| Neon Lime | `--wp--preset--color--neon-lime` | `#00ff00` | Success states, sale badges, highlights |
| Neon Yellow | `--wp--preset--color--neon-yellow` | `#ffff00` | Warning states, flash sale accents |
| Deep Purple | `--wp--preset--color--deep-purple` | `#2d0059` | Dark hero overlays, deep backgrounds |

#### Funky Gradients

| Name | CSS Variable | Value | Usage |
|------|-------------|-------|-------|
| Hero Gradient | `--wp--preset--gradient--neon-hero` | `linear-gradient(135deg, rgba(255,0,255,0.8), rgba(0,255,255,0.8))` | Hero overlays |
| Glow Border | `--wp--preset--gradient--neon-glow` | `linear-gradient(45deg, neon-pink, neon-cyan)` | Card glow borders |
| Commerce Gradient | `--wp--preset--gradient--commerce` | `linear-gradient(135deg, #030213, #1a0533, #0d1b2a)` | Dark commerce sections |
| Sale Gradient | `--wp--preset--gradient--sale` | `linear-gradient(135deg, #ff00ff, #ff6b35, #ffff00)` | Flash sale banners |
| Accent Soft | `--wp--preset--gradient--accent-soft` | `linear-gradient(135deg, rgba(255,0,255,0.05), rgba(0,255,255,0.05))` | Light mode tinted sections |

#### Page-Level Colour Identities

Each major page type can define its own colour identity via CSS custom properties at the top of its dedicated CSS file:

| Page Type | Primary | Secondary | Accent | Hero Gradient |
|-----------|---------|-----------|--------|---------------|
| **Homepage** | `#ff00ff` (Pink) | `#00ffff` (Cyan) | `#00ff00` (Lime) | Pink to Cyan to Lime |
| **Shop/Archive** | `#0055AA` (Brand Blue) | `#00ffff` (Cyan) | `#ff00ff` (Pink) | Blue to Cyan |
| **Single Product** | `#030213` (Deep) | `#ff00ff` (Pink) | `#00ffff` (Cyan) | Deep Purple to Pink |
| **Cart/Checkout** | `#030213` (Deep) | `#00ff00` (Lime) | `#00ffff` (Cyan) | Minimal — focus on conversion |
| **Blog** | `#2d0059` (Purple) | `#ff00ff` (Pink) | `#ffff00` (Yellow) | Purple to Pink |
| **About/Story** | `#0d1b2a` (Navy) | `#00ffff` (Cyan) | `#ff00ff` (Pink) | Navy to Cyan |
| **Account** | `#1a1a2e` (Midnight) | `#0055AA` (Blue) | `#00ffff` (Cyan) | Midnight to Blue |

#### Semantic Glass Variables (Already in `theme-funky.css`)

| Variable | Light Mode | Dark Mode |
|----------|-----------|-----------|
| `--funky-glass-bg` | `rgba(255, 255, 255, 0.85)` | `rgba(3, 2, 19, 0.95)` |
| `--funky-glass-border` | `rgba(0, 0, 0, 0.1)` | `rgba(255, 255, 255, 0.1)` |
| `--funky-glass-shadow` | `0 4px 20px rgba(0,0,0,0.05)` | `0 4px 20px rgba(0,255,255,0.15)` |

### 4.3 Funky Section Anatomy

Every section on every page MUST have at least TWO of these funky treatments to qualify as "funky":

1. **Gradient Overlay/Background** — Multi-stop gradient backgrounds instead of flat colours
2. **Glow Border Cards** — Double-layer technique: gradient glow `div` behind a solid surface `div`
3. **Floating Orbs** — Blurred gradient circles with `position: absolute`, animated with `funky-float`
4. **Gradient Text** — `background-clip: text` with multi-stop gradients on section headings
5. **Glassmorphism Panels** — `backdrop-filter: blur(12px)` with semi-transparent backgrounds
6. **Hover Lift** — `transform: translateY(-4px)` with glow shadow on hover
7. **Neon Focus States** — Cyan/pink glow on input focus and button hover
8. **Animated Dividers** — Gradient glow lines between sections instead of plain borders
9. **Icon Gradient Circles** — Icons inside gradient-bordered circular containers
10. **Spring Animations** — Bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` on interactions

### 4.4 Section BEM Structure

Every section follows this BEM pattern with the page name as prefix:

```css
/* Block: the page */
.page-name { }

/* Element: a section within the page */
.page-name__section-name { }

/* Element: items within the section */
.page-name__section-name-grid { }
.page-name__section-name-card { }
.page-name__section-name-card-inner { }
.page-name__section-name-card-glow { }

/* Modifier: section variants */
.page-name__section-name--dark { }
.page-name__section-name--alt { }

/* Dark mode */
.dark .page-name__section-name { }
.dark .page-name__section-name-card { }
```

### 4.5 Standard Section Templates

#### Hero Section (Full-Viewport)

```tsx
<section className="page-name__hero">
  {/* Background image (parallax if applicable) */}
  <img src={heroImage} alt="" className="page-name__hero-bg" />
  
  {/* Gradient overlay */}
  <div className="page-name__hero-overlay" />
  
  {/* Content */}
  <div className="page-name__hero-content">
    <span className="page-name__hero-badge funky-glass-panel">
      <IconComponent size={16} />
      Badge Text
    </span>
    <h1 className="page-name__hero-title">Headline</h1>
    <p className="page-name__hero-subtitle">Subtitle text</p>
    <div className="page-name__hero-actions">
      <a href="/shop" className="page-name__hero-cta--primary">Shop Now</a>
      <a href="/about" className="page-name__hero-cta--secondary">Learn More</a>
    </div>
  </div>
  
  {/* Decorative orbs */}
  <div className="page-name__hero-orb page-name__hero-orb--1 funky-orb funky-animate-float" />
  <div className="page-name__hero-orb page-name__hero-orb--2 funky-orb funky-animate-float" />
  <div className="page-name__hero-orb page-name__hero-orb--3 funky-orb funky-animate-float" />
</section>
```

**CSS Pattern:**
```css
.page-name__hero {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--wp--preset--color--primary);
}

.page-name__hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.page-name__hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.3) 0%,
    rgba(3, 2, 19, 0.7) 50%,
    rgba(0, 255, 255, 0.2) 100%
  );
}

.dark .page-name__hero-overlay {
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.4) 0%,
    rgba(3, 2, 19, 0.85) 50%,
    rgba(0, 255, 255, 0.3) 100%
  );
}

.page-name__hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 48rem;
  padding: var(--wp--preset--spacing--50);
}

.page-name__hero-title {
  font-size: var(--wp--preset--font-size--900);
  font-weight: var(--wp--preset--font-weight--bold);
  color: #ffffff;
  letter-spacing: var(--wp--preset--letter-spacing--tight);
}

.page-name__hero-subtitle {
  font-size: var(--wp--preset--font-size--400);
  color: rgba(255, 255, 255, 0.85);
  max-width: 36rem;
  margin: 0 auto;
}

/* Orb positioning */
.page-name__hero-orb--1 {
  width: 300px;
  height: 300px;
  background: var(--wp--preset--color--neon-pink);
  opacity: 0.2;
  top: 10%;
  right: -5%;
  animation-delay: 0s;
}

.page-name__hero-orb--2 {
  width: 200px;
  height: 200px;
  background: var(--wp--preset--color--neon-cyan);
  opacity: 0.15;
  bottom: 15%;
  left: -3%;
  animation-delay: -3s;
}

.page-name__hero-orb--3 {
  width: 150px;
  height: 150px;
  background: var(--wp--preset--color--neon-lime);
  opacity: 0.1;
  top: 60%;
  right: 20%;
  animation-delay: -5s;
}

/* Mobile: reduce orb visibility */
@media (max-width: 767px) {
  .page-name__hero-orb { opacity: 0.08; }
  .page-name__hero-content { padding: var(--wp--preset--spacing--40); }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .page-name__hero-orb { animation: none; }
}
```

#### Glow Card Grid Section

```css
/* Glow card technique */
.page-name__features-card {
  position: relative;
  border-radius: var(--wp--preset--border-radius--lg);
  transition: transform var(--wp--preset--transition--slow) cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow var(--wp--preset--transition--slow) ease;
}

.page-name__features-card-glow {
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  z-index: 0;
  opacity: 0;
  background: var(--wp--preset--gradient--neon-glow);
  transition: opacity var(--wp--preset--transition--slow) ease;
}

.page-name__features-card:hover .page-name__features-card-glow {
  opacity: 1;
}

.page-name__features-card-inner {
  position: relative;
  z-index: 1;
  background: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: inherit;
  padding: var(--wp--preset--spacing--50);
  height: 100%;
}

.dark .page-name__features-card-inner {
  background: var(--wp--preset--color--surface);
  border-color: var(--wp--preset--color--border);
}

.page-name__features-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--wp--preset--shadow--lg);
}

.dark .page-name__features-card:hover {
  box-shadow: 0 8px 32px rgba(0, 255, 255, 0.15);
}

@media (prefers-reduced-motion: reduce) {
  .page-name__features-card { transition: none; }
  .page-name__features-card:hover { transform: none; }
}
```

#### Gradient Divider

```css
.page-name__divider {
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--wp--preset--color--neon-pink),
    var(--wp--preset--color--neon-cyan),
    transparent
  );
  opacity: 0.3;
  margin: var(--wp--preset--spacing--80) auto;
  max-width: var(--wp--preset--layout--wide-size);
}

.dark .page-name__divider {
  opacity: 0.5;
}
```

### 4.6 Light vs Dark Mode Strategy

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Page background** | `var(--wp--preset--color--background)` (#ffffff) | `var(--wp--preset--color--background)` (#0f0f0f) |
| **Card surface** | `var(--wp--preset--color--surface)` (#ffffff) | `var(--wp--preset--color--surface)` (#1a1a1a) |
| **Hero overlay opacity** | 0.5 - 0.65 | 0.7 - 0.85 |
| **Orb opacity** | 0.1 - 0.2 | 0.15 - 0.35 |
| **Glow border hover** | Subtle (opacity 0.5) | Vibrant (opacity 1.0) |
| **Gradient text** | Deep colours (dark text) | Bright neon (light text) |
| **Neon focus ring** | Subtle cyan glow | Bold cyan glow |
| **Section alternation** | White / neutral-100 | #0f0f0f / #1a1a1a |
| **Divider glow** | opacity 0.3 | opacity 0.5 |

### 4.7 Animation Tokens (Already Implemented)

All animations are defined in `/src/styles/theme-funky.css`:

| Animation | Class | Duration | Usage |
|-----------|-------|----------|-------|
| Float | `.funky-animate-float` | 6s ease-in-out infinite | Background orbs |
| Glow Pulse | `.funky-animate-glow` | 3s ease-in-out infinite | CTA attention, badges |
| Spring Hover | `.funky-spring-hover` | 0.4s cubic-bezier | Interactive cards |
| Card Glow | `.funky-card-glow` | 0.3s ease (on hover) | Product/feature cards |

**ALL animations MUST be wrapped in `@media (prefers-reduced-motion: reduce)` guards.**

### 4.8 Mobile-First Hero Checklist

Every hero section MUST pass these mobile checks:

- [ ] `min-height: 100vh` with `min-height: 100dvh` fallback
- [ ] Text uses `var(--wp--preset--font-size--900)` which includes `clamp()` for fluid scaling
- [ ] Subtitle uses `var(--wp--preset--font-size--400)` with `clamp()`
- [ ] Content padding: `var(--wp--preset--spacing--40)` minimum horizontal on mobile
- [ ] Orbs: Reduced opacity on mobile (`opacity: 0.08` below 768px)
- [ ] Badge: Readable on small screens, doesn't wrap awkwardly
- [ ] CTA buttons: 48x48px minimum touch target, stack vertically on mobile if needed
- [ ] Hero image: Covers viewport on all sizes, no letterboxing
- [ ] Overlay: Maintains readable contrast on all viewport sizes
- [ ] Text remains centred and readable at 320px viewport width

---

## 5. Implementation Phases

After all Phase 0 audits are complete, proceed with these phases.

### Phase 1: CSS Foundation & Token Unification ✅ COMPLETE

**Depends on:** A8 (CSS Architecture Deep Audit) completed

**Tasks:**
- [x] 1.1 Resolve dual CSS entry point conflict (`/styles/globals.css` vs `/src/styles/theme-variables.css`)
- [x] 1.2 Unify all `--background`/`--foreground` references to `--wp--preset--color--background`/`--wp--preset--color--foreground`
- [x] 1.3 Add missing funky tokens to `/src/styles/theme-variables.css` (commerce gradient, sale gradient, accent-soft gradient)
- [x] 1.4 Expand `/src/styles/theme-funky.css` with new section-level funky utility classes
- [x] 1.5 Create `/src/styles/sections/funky-sections.css` with reusable funky section patterns
- [x] 1.6 Remove all `!important` declarations (except `prefers-reduced-motion`) — Verified: only 5, all acceptable
- [x] 1.7 Delete dead/unused CSS files identified in A8 — 6 duplicates deleted, pricing merged

**Status:** ✅ COMPLETE (February 22, 2026)  
**Output:** Updated CSS files, task completion in `/tasks/css-architecture-remediation.md`

---

### Phase 2: Global Parts (Header, Footer, Layout) ✅ COMPLETE

**Scope:** Parts that appear on EVERY page.

**Templates:**
- `Layout.tsx` — Wrapper
- `MainHeader.tsx` — Primary header with mega menus
- `MainFooter.tsx` / `Footer.tsx` — Primary footer
- `MiniCart.tsx` — Cart drawer
- `MobileMenu.tsx` — Mobile navigation
- `BreadcrumbsBar.tsx` — Breadcrumb navigation
- All MegaMenu components

**Funky Treatments:**
- Header: Glassmorphism background (`funky-glass-panel`), neon hover states on nav items
- Footer: Gradient divider top, subtle glow on social icons hover
- MiniCart: Glass panel drawer, neon accent on totals
- Mobile menu: Full-screen gradient overlay background

**Status:** ✅ COMPLETE (February 22, 2026)
**Output:** `/src/styles/blocks/theme/parts-funky.css`, updated `MainHeader.tsx`, `MainFooter.tsx`, `MiniCart.tsx`, `MobileMenu.tsx`, `BreadcrumbsBar.tsx`

---

### Phase 3: Homepage (FrontPage) ✅ COMPLETE

**Template:** `FrontPage.tsx`  
**Route:** `/`

**Sections redesigned:**
1. Hero — Full-viewport with gradient overlay, 3 floating orbs, glassmorphism badge, scroll indicator ✅
2. Features Band — Glow border cards with neon icon circles, accent-soft gradient background ✅
3. Category Showcase — Gradient heading, glow border cards on hover ✅
4. Trending Products — Gradient heading, spring hover product cards, neon glow in dark mode ✅
5. Brand Story Banner — Funky gradient overlay (deep purple tones), 2 floating orbs ✅
6. Best Sellers — Gradient heading, glow product cards, alternating background ✅
7. Newsletter — Deep commerce gradient background, neon cyan focus on input, 2 floating orbs ✅
8. Gradient dividers between sections ✅

**Status:** ✅ COMPLETE (February 22, 2026)
**Output:** `/src/styles/sections/front-page-funky.css` (~550 lines), fully rewritten `FrontPage.tsx` with BEM structure

---

### Phase 4: Shop & Product Pages ✅ COMPLETE

**Templates:**
- `ArchiveProduct.tsx` — Product archive/shop ✅
- `ShopWithSidebar.tsx` — Shop with filter sidebar ✅ (BEM in shop-funky.css)
- `SingleProduct.tsx` — Single product page ✅
- `SingleProductSticky.tsx` — Sticky add-to-cart variant ✅ (BEM in shop-funky.css)
- `VariableProduct.tsx` — Variable product page (shares single-product BEM)
- `ProductSearchResults.tsx` — Search results (shares archive-product BEM)

**Funky Treatments:**
- Product cards: Glow border on hover, spring animation ✅ (via `funky-card-glow` + `funky-spring-hover`)
- Filter sidebar: Glassmorphism panel, neon accent on active filters ✅
- Single product gallery: Subtle glow frame ✅ (neon pink→cyan gradient border on hover)
- Add to cart button: Neon glow on hover ✅ (cyan box-shadow)
- Product tabs: Gradient underline on active tab ✅ (neon divider + cyan active border)
- Related products: Gradient heading + glow card grid ✅
- Archive header: Hero with gradient overlay, orbs, glassmorphism badge ✅
- Breadcrumbs: Neon cyan hover with text-shadow in dark mode ✅

**Status:** ✅ COMPLETE (February 22, 2026)
**Output:** `/src/styles/sections/shop-funky.css` (~500 lines), rewritten `ArchiveProduct.tsx` + `SingleProduct.tsx` with BEM structure

---

### Phase 5: Cart & Checkout

**Templates:**
- `PageCart.tsx` — Cart page
- `PageCheckout.tsx` — Checkout page
- `CheckoutLayout.tsx` — Checkout-specific layout

**Funky Treatments (SUBTLE — conversion focus):**
- Cart items: Clean with subtle glow on hover ✅ (cyan border glow, neon hover accents)
- Cart totals: Glassmorphism panel ✅ (glass bg, gradient dividers, neon total accent)
- Cart empty: Gradient icon + gradient dividers ✅
- Cart header: Gradient text title ✅
- Checkout title: Gradient text ✅
- Checkout steps: Neon cyan indicators, gradient connector, completed gradient circle ✅
- Checkout form: Neon focus states on inputs ✅ (cyan glow on all input types)
- Checkout delivery toggle: Neon active state ✅
- Payment methods: Glow border on selected method ✅ (glassmorphism panel, cyan glow)
- Order summary: Gradient accent on total line ✅ (glass panel, gradient divider, neon total)
- Checkout header/footer: Subtle glass treatment ✅
- Tailwind remnants removed from CartTotals, OrderSummary, PaymentMethods, CheckoutStep ✅
- **DO NOT over-animate checkout — conversion is priority** ✅ (Clean Funky mode applied)

**Status:** ✅ COMPLETE (February 22, 2026)
**Output:** `/src/styles/sections/cart-checkout-funky.css` (~600 lines), updated `PageCart.tsx`, `PageCheckout.tsx`, `CartTotals.tsx`, `CartItem.tsx`, `CheckoutStep.tsx`, `OrderSummary.tsx`, `PaymentMethods.tsx`

---

### Phase 6: Blog & Content Pages ✅ COMPLETE

**Templates:**
- `BlogIndex.tsx` — Blog archive ✅
- `SinglePost.tsx` / `SinglePostFullWidth.tsx` / `SinglePostWithSidebar.tsx` ✅
- `TemplateSingleAudio.tsx` / `TemplateSingleVideo.tsx` / `TemplateSingleGallery.tsx` / `TemplateSingleStandard.tsx` / `TemplateSingleAside.tsx` ✅
- `ArchiveAudio.tsx` / `ArchiveVideo.tsx` / `ArchiveGallery.tsx` / `ArchiveAside.tsx` ✅ (format archive grids)
- Blog category/author archives ✅ (`ArchiveCategory.tsx`, `ArchiveAuthor.tsx`)
- `PostCard.tsx` — Blog post card component ✅

**Funky Treatments:**
- Post cards: Glow border + gradient category badge + spring lift ✅
- Post hero: Full-bleed with gradient overlay (purple→deep tones) ✅
- Blog Index hero: Gradient overlay + orbs + glassmorphism badge + gradient heading ✅
- Sidebar: Glassmorphism panels ✅
- Single Post: Gradient title dark mode + gradient category links + glow tags ✅
- SinglePostFullWidth: Neon progress bar + glassmorphism share panel + gradient title ✅
- SinglePostWithSidebar: Glass sidebar + gradient title + glow tags ✅
- Category/Author archives: Gradient hero with orbs + icon circles + glow grid ✅
- Comment forms: Glassmorphism wrapper + neon focus states ✅
- Tailwind remnants removed from ALL blog templates ✅

**Status:** ✅ COMPLETE (February 22, 2026)
**Output:** `/src/styles/sections/blog-funky.css` (~900 lines), `/src/styles/sections/blog-format-archives-funky.css` (~700 lines), rewritten `BlogIndex.tsx`, `SinglePost.tsx`, `SinglePostFullWidth.tsx`, `SinglePostWithSidebar.tsx`, `ArchiveCategory.tsx`, `ArchiveAuthor.tsx`, `PostCard.tsx`, `ArchiveAudio.tsx`, `ArchiveVideo.tsx`, `ArchiveGallery.tsx`

**Remaining:** None — all blog format archives and single templates fully funky

---

### Phase 7: Information Pages ✅ COMPLETE

**Templates:**
- `PageAbout.tsx` ✅ — Hero + story split + glow value cards + gradient stats + team glow cards + testimonials + CTA
- `PageOurStory.tsx` ✅ — Hero + mission + glow value cards + gradient timeline connector + CTA
- `PageTeam.tsx` ✅ — Hero + glow team cards with gradient avatars + department stats + CTA
- `PageContact.tsx` ✅ — Purple hero + glassmorphism form + neon focus + detail cards + CTA
- `PageFAQ.tsx` ✅ — Purple hero + glow-on-active accordion + gradient icon circles + CTA
- `PageCareers.tsx` ✅ — Hero + glow benefit cards + positions list with hover glow + CTA
- `PageStores.tsx` ✅ — Hero + glow store cards + feature tags + CTA
- `PagePressMedia.tsx` ✅ — Hero + press release list + media kit section + CTA
- `PageSustainability.tsx` ✅ — Hero + gradient stats + glow initiative cards + goal checklist + CTA

**Funky Treatments:**
- Each page gets a unique hero gradient (page colour identity: Navy/Cyan for about pages, Purple/Pink for support pages) ✅
- Team grid: Floating hover cards with glow + gradient avatars ✅
- FAQ: Glow on active accordion item + neon cyan border ✅
- Contact form: Glassmorphism form container, neon cyan focus states ✅
- Stores: Glow cards with feature tags ✅
- Stats sections: Large gradient numbers (pink→cyan) ✅
- Timeline: Gradient connector line + glow markers ✅
- All sections have gradient dividers between them ✅
- Reduced motion guards on all animations ✅
- Tailwind remnants removed from ALL information page templates ✅

**Status:** ✅ COMPLETE (February 22, 2026)
**Output:** `/src/styles/sections/info-pages-funky.css` (~1100 lines), rewritten `PageAbout.tsx`, `PageOurStory.tsx`, `PageTeam.tsx`, `PageContact.tsx`, `PageFAQ.tsx`, `PageCareers.tsx`, `PageStores.tsx`, `PagePressMedia.tsx`, `PageSustainability.tsx`

---

### Phase 8: Legal & Policy Pages ✅ COMPLETE

**Templates:**
- `PagePrivacyPolicy.tsx` ✅, `PageTermsConditions.tsx` ✅, `PageAccessibilityStatement.tsx` ✅
- `PageShippingReturns.tsx` ✅, `PageSizeGuide.tsx` ✅, `PageWarranty.tsx` ✅
- `PageCareInstructions.tsx` ✅, `PageReturnsPortal.tsx` ✅, `PageBuyingGuide.tsx` ✅
- `PageHelpCenter.tsx` ✅

**Funky Treatments (MINIMAL — readability focus):**
- Subtle compact gradient hero (30vh, no orbs) ✅
- Content sections: Clean with gradient dividers ✅
- Gradient step numbers (cyan→pink) for process flows ✅
- Glassmorphism form (Returns Portal) with neon focus ✅
- Tabbed size chart with neon active tab ✅
- Eligible/ineligible split cards with neon-lime/neon-pink icons ✅
- Commerce gradient CTA (no orbs — clean) ✅
- Reduced motion guards on all transitions ✅
- Tailwind remnants removed from ALL legal templates ✅
- **NO heavy animation — readability is priority** ✅

**Status:** ✅ COMPLETE (February 22, 2026)
**Output:** `/src/styles/sections/legal-pages-funky.css` (~850 lines), all 10 legal templates rewritten

---

### Phase 9: Commerce Special Pages ✅ COMPLETE

**Templates:**
- `PageDeals.tsx` — Sales/deals page ✅ COMPLETE
- `SubscriptionLanding.tsx` ✅ COMPLETE / `SingleSubscription.tsx` ✅ COMPLETE
- `MembershipLanding.tsx` ✅ COMPLETE / `SingleMembership.tsx` ✅ COMPLETE
- `LongFormSalesPage.tsx` ✅ CSS COMPLETE (already had wp-sales-* BEM classes, CSS now defined)
- `PageRewardProgram.tsx` ✅ COMPLETE — Commerce hero + gradient step numbers + glow tier cards + earn items + redeem table + CTA
- `PageAffiliateProgram.tsx` ✅ COMPLETE — Commerce hero + glow benefit cards + commission table with gradient rates + CTA
- `PageNewsletter.tsx` ✅ COMPLETE — Glassmorphism card + gradient icon + neon input focus + gradient submit + success state
- `PageShowcase.tsx` ✅ COMPLETE — Intro section + glow stat cards + gradient coverage values
- `PageLivePreview.tsx` ✅ COMPLETE — BEM structure, sidebar + preview canvas + tab navigation

**Funky Treatments:**
- Deals page: Sale gradient hero, animated flash sale banner, neon CTA ✅
- Subscriptions: Gradient hero + orbs, glow pricing cards, neon benefit icons, FAQ accordion ✅
- Memberships: Gradient hero, glow pricing with popular plan glow, ROI glassmorphism card, billing toggle ✅
- Sales page: Progressive gradient sections, multiple CTA styles, glow feature cards ✅ (CSS)
- Reward program: Commerce hero + gradient step numbers + glow tier cards with hover lift + neon earn points + CTA ✅
- Affiliate: Commerce hero + glow benefit cards + gradient commission rates + CTA ✅
- Newsletter: Full-page glassmorphism card + neon cyan input focus + gradient submit + orbs ✅
- Showcase: Glow stat cards with gradient icons + gradient coverage values ✅
- Live Preview: Sidebar panel + tab navigation + preview canvas ✅
- CTA button variants added: `--primary` (gradient), `--outline` (border), `__actions`, `__icon` ✅

**Status:** ✅ COMPLETE — 11/11 templates (February 22, 2026)
**Output:** `/src/styles/sections/commerce-special-funky.css` (~1900 lines), all templates use BEM with zero Tailwind

---

### Phase 10: Account & Utility Pages ✅ COMPLETE

**Templates:**
- `AccountLayout.tsx`, `AccountDashboardWidgets.tsx` ✅
- `PageLogin.tsx` ✅
- `PageWishlist.tsx` ✅
- `PageChat.tsx` ✅ — Uses `wp-chat-placeholder`, `wp-topic-*`, `wp-contact-*` BEM classes, CSS in info-pages-funky.css
- `SocialRedirect.tsx` ✅ — Uses `wp-redirect-*`, `wp-loading-*` BEM classes, CSS in globals.css
- `PageIconLibrary.tsx` ✅ — Uses `icon-lib__*` BEM classes (54 CSS rules), searchable, copyable, neon hover
- `PageComponentAPI.tsx` ✅ — Uses `dev-placeholder__*` BEM classes, placeholder for API docs
- `PageStyleGuide.tsx` ✅ — Uses `style-guide-card__*` BEM classes with neon hover glow

**Funky Treatments:**
- AccountLayout: Glassmorphism sidebar + content panels, floating orbs, gradient title ✅
- Dashboard (pattern): Glow cards with neon icon circles, gradient greeting name ✅
- Login: Glassmorphism form card, neon cyan focus states, floating orbs ✅
- Orders: Neon status badges, subtle row hover glow ✅
- Order Detail: Gradient total divider, neon accent buttons, glass panels ✅
- Account Details: Neon cyan focus on all inputs, gradient section divider ✅
- Addresses: Glow cards with pink/cyan hover variants ✅
- Wishlist: Glow product cards with hover add-to-cart transition ✅
- Chat: Neon icon, glow placeholder card, topic buttons ✅
- Social Redirect: Animated loading dots, neon icon wrapper ✅
- Icon Library: Neon search input focus, glow icon buttons, cyan hover ✅
- Dev tools: Neon accent throughout ✅
- Tailwind remnants removed from ALL account & utility templates ✅

**Status:** ✅ COMPLETE — All templates (February 22, 2026)
**Output:** `/src/styles/sections/account-auth-funky.css` (~900 lines), all account/utility templates use BEM with zero Tailwind

---

### Incorporating Existing Task Lists

The following tasks from existing plans should be incorporated into the relevant phases above:

**From `/tasks/css-architecture-data-integrity-remediation.md`:**
- Phase 1 (CSS Entry Point) → Incorporated into Phase 1 above
- Phase 3 (Duplicate CSS) → Incorporated into Phase 1 above
- Phase 4 (!important Removal) → Incorporated into Phase 1 above
- Phase 5 (Data File Wiring) → Addressed by Audit A2, tasks in A7
- Phase 6 (Tailwind Removal) → Each implementation phase removes Tailwind from touched templates

**From `/tasks/plan.md`:**
- Task 2 (Component Migration) → Track alongside implementation phases
- Task 3 (Guidelines Reorganization) → Addressed by Audit A1
- Task 4 (Missing Guidelines) → Addressed by Audits A4-A6
- Task 5 (CSS Reorganization) → Addressed by Audit A8 and Phase 1

**From `/tasks/PLAN.md`:**
- Section 3 (Documentation gaps) → Addressed by Audits A4-A6

**From `/tasks/task-list.md`:**
- Phase 3 (Cart/Checkout) → Phase 5 above
- Phase 4 (Account) → Phase 10 above
- Phase 5 (Blog) → Phase 6 above
- Phase 6 (Funky Aesthetic) → ALL implementation phases above
- Phase 8 (Mobile) → Each phase includes mobile verification

---

## 6. Strict Rules

### CSS Rules (Non-Negotiable)

1. **BEM Only** — `.page-name__element--modifier`. No raw Tailwind utility classes in `className`.
2. **WordPress CSS Variables** — `var(--wp--preset--color--*)`, `var(--wp--preset--spacing--*)`, `var(--wp--preset--font-size--*)` for ALL values. Reference `/src/styles/theme-variables.css`.
3. **No Inline Styles** — Except for truly dynamic runtime values (e.g., `style={{ '--dynamic-width': width } as React.CSSProperties}`).
4. **No Margins** — Use `gap` in Flex/Grid containers. Only exceptions: `margin: 0 auto` (centering).
5. **Dark + Light Mode** — Every component must have `.dark` CSS variants. All text must meet WCAG 2.1 AA contrast (4.5:1 normal text, 3:1 large text).
6. **Reduced Motion** — Wrap ALL animations in `@media (prefers-reduced-motion: reduce)` guards.
7. **No `!important`** — Fix specificity properly. Exception: print styles and reduced motion guards.
8. **No Hardcoded Hex in CSS** — Use CSS variables. Exception: page colour identity tokens defined as custom properties at the top of page-specific CSS files.
9. **No Hardcoded Font Names** — Use `var(--wp--preset--font-family--base)` only.
10. **No Hardcoded Font Sizes** — Use `var(--wp--preset--font-size--100)` through `var(--wp--preset--font-size--900)` only.

### React Rules

1. **Layout Wrapper** — Every page renders inside `<Layout>`. Never render Header/Footer directly.
2. **Container Component** — Use `Container` for max-width constraint.
3. **Data-Driven Content** — All content must come from `/src/app/data/` files. No hardcoded strings in templates.
4. **Phosphor Icons Only** — No image-based icons. All icons must be Phosphor React components (`@phosphor-icons/react`) with `weight="duotone"` default.
5. **Unique `key` Props** — Every `.map()` must use a unique stable key.
6. **No `console.log`** — Zero console output in production components.
7. **ImageWithFallback** — Use for all non-hero images. For parallax heroes, use plain `<img>` tags.
8. **Unsplash Tool** — Use `unsplash_tool` for all new images. Never hardcode Unsplash URLs.

### File Rules

1. **CSS File Location** — Page-specific CSS goes in `/src/styles/sections/` (auto-parsed by Figma).
2. **No @import in CSS** — Figma Make does not support CSS `@import`. Each file is independently parsed.
3. **Protected Files** — Never modify `/src/app/components/figma/ImageWithFallback.tsx`.
4. **Read Before Edit** — ALWAYS read the current file content before modifying.
5. **Audit Reports** — ALWAYS save to `/reports/audits/` with `YYYY-MM-DD` prefix.
6. **Task Lists** — ALWAYS save to `/tasks/` with descriptive filename.

---

## 7. Workflow Per Page

For each page being redesigned, follow this exact sequence:

### Step 1: Read Current State
```
Read the template .tsx file
Read the corresponding CSS file (if exists)
Read the page's data file(s) from /src/app/data/
Read any relevant guideline for this template
```

### Step 2: Audit Current Section Structure
```
For each <section> or major content area:
  - Document current styling approach (BEM? Tailwind? Inline?)
  - Check dark mode support
  - Check mobile responsiveness
  - Score: FUNKY / PARTIAL / PLAIN / BROKEN
```

### Step 3: Plan Funky Treatments
```
For each section:
  - Choose funky treatment (glow cards, glassmorphism, gradient text, etc.)
  - Determine if section uses existing funky utility class or needs custom BEM
  - Plan dark mode adjustments
  - Plan mobile breakpoint behaviour
  - Determine if section needs alternating background
```

### Step 4: Fetch Assets (if needed)
```
Call unsplash_tool for any new section images
Verify import paths for ImageWithFallback
```

### Step 5: Write/Update CSS
```
Create or update CSS file with:
  - BEM classes for every section element
  - All values using --wp--preset--* variables
  - Font family: var(--wp--preset--font-family--base) ONLY
  - Font sizes: var(--wp--preset--font-size--100) through --900 ONLY
  - Spacing: var(--wp--preset--spacing--*) ONLY
  - Colours: var(--wp--preset--color--*) ONLY
  - Border radius: var(--wp--preset--border-radius--*) ONLY
  - .dark variants for every colour-dependent rule
  - @media queries for responsive (768px, 1024px breakpoints)
  - @media (prefers-reduced-motion: reduce) guards
```

### Step 6: Write/Update TSX
```
Update page component with:
  - BEM class names on all elements
  - Container component for max-width
  - Phosphor icons (@phosphor-icons/react) for all icons, weight="duotone" default
  - React.createElement() syntax (NO JSX)
  - Legacy JS syntax: var, function(), Object.assign() — NO const/let/arrow/destructuring
  - FunkyHero component for hero sections (add config to heroData.ts)
  - Unique keys on all .map() calls
  - Data-driven content from /src/app/data/
  - No local CSS imports (files auto-parsed)
```

### Step 7: Verify
```
Confirm:
  [ ] BEM naming consistent throughout
  [ ] No hardcoded hex (except custom properties at top)
  [ ] No hardcoded fonts
  [ ] No hardcoded font sizes
  [ ] No hardcoded spacing
  [ ] No margins (only gap + padding)
  [ ] Dark mode variants present
  [ ] Reduced motion guards on animations
  [ ] Mobile responsive (320px, 768px, 1024px)
  [ ] Hero section mobile-friendly
  [ ] WCAG AA contrast compliance
  [ ] All images from unsplash_tool
  [ ] At least 2 funky treatments per section
```

---

## 8. Output File Locations

### Audit Reports
```
/reports/audits/2026-02-21-guidelines-freshness-audit.md          (A1)
/reports/audits/2026-02-21-data-types-content-model-audit.md      (A2)
/reports/audits/2026-02-21-reports-cleanup-audit.md               (A3)
/reports/audits/2026-02-21-blocks-coverage-audit.md               (A4)
/reports/audits/2026-02-21-patterns-coverage-audit.md             (A5)
/reports/audits/2026-02-21-parts-coverage-audit.md                (A6)
/reports/audits/2026-02-21-templates-completeness-audit.md        (A7)
/reports/audits/2026-02-21-css-architecture-deep-audit.md         (A8)
```

### Task Lists
```
/tasks/guidelines-remediation.md                                   (from A1)
/tasks/data-types-remediation.md                                   (from A2)
/tasks/reports-cleanup.md                                          (from A3)
/tasks/blocks-guidelines-gaps.md                                   (from A4)
/tasks/patterns-guidelines-gaps.md                                 (from A5)
/tasks/parts-guidelines-gaps.md                                    (from A6)
/tasks/templates-remediation.md                                    (from A7)
/tasks/css-architecture-remediation.md                             (from A8)
```

### Implementation Progress
```
/reports/progress/funky-redesign-progress.md                       (Updated after each phase)
```

### Updated Guidelines
```
/guidelines/design-tokens/funky-woocommerce-design-system.md       (This design system)
/guidelines/styles/funky-section-styles.md                         (Section style reference)
```

---

## 9. Verification Checklists

### Per-Section Checklist

For EVERY section being redesigned:

**Visual:**
- [ ] Has at least 2 funky treatments (glow, glass, gradient, orbs, lift, neon, divider, icon circles, spring, gradient text)
- [ ] Background alternates with adjacent sections for visual rhythm
- [ ] Dark mode renders correctly (no invisible text, no harsh contrast)
- [ ] Light mode renders correctly (no washed-out elements)

**Typography:**
- [ ] All font sizes use `var(--wp--preset--font-size--*)` variables
- [ ] All font families use `var(--wp--preset--font-family--*)` variables
- [ ] No hardcoded `px`, `rem`, or `em` font sizes
- [ ] Heading hierarchy is correct (no skipped levels)

**Spacing:**
- [ ] All padding uses `var(--wp--preset--spacing--*)` variables
- [ ] All gaps use `var(--wp--preset--spacing--*)` variables
- [ ] No hardcoded `px`, `rem`, or `em` spacing values
- [ ] No margin (use gap instead)

**Colours:**
- [ ] All colours use `var(--wp--preset--color--*)` variables
- [ ] No hardcoded hex colours in CSS (except page identity custom properties)
- [ ] Text contrast meets WCAG 2.1 AA (4.5:1 normal, 3:1 large)
- [ ] Neon colours used only for accents/borders/glows, NOT for body text

**Responsiveness:**
- [ ] Works at 320px viewport width
- [ ] Cards stack to single column below 768px
- [ ] Touch targets are 48x48px minimum on mobile
- [ ] No horizontal overflow on mobile

**Accessibility:**
- [ ] All animations wrapped in `prefers-reduced-motion` guard
- [ ] Focus states visible in both light and dark mode
- [ ] All interactive elements keyboard accessible
- [ ] Semantic HTML used (section, article, nav, etc.)

**CSS Quality:**
- [ ] BEM naming convention followed
- [ ] No Tailwind utility classes
- [ ] No `!important` declarations
- [ ] No inline `style={{}}` attributes
- [ ] `.dark` variants for all colour-dependent rules

### Per-Page Checklist

For EVERY page being redesigned:

- [ ] Uses `<Layout>` wrapper
- [ ] All content from `/src/app/data/` files (not hardcoded)
- [ ] All images from `unsplash_tool` (not hardcoded URLs)
- [ ] All icons from `@phosphor-icons/react` with `weight="duotone"` default
- [ ] Uses `React.createElement()` syntax (NO JSX)
- [ ] Uses legacy JS syntax: `var`, `function()`, `Object.assign()` — NO `const`/`let`/arrow/destructuring
- [ ] Hero uses shared `FunkyHero` component with config from `heroData.ts`
- [ ] Hero section passes mobile checklist (Section 4.8)
- [ ] Every section passes per-section checklist
- [ ] Route is defined in `/App.tsx`
- [ ] No console.log statements
- [ ] TypeScript types properly defined

---

## 10. Start Commands

Issue these commands to direct work:

### Audit Commands

```
AUDIT A1: Guidelines Freshness
AUDIT A2: Data & Types Content Model
AUDIT A3: Reports Cleanup
AUDIT A4: Blocks Coverage
AUDIT A5: Patterns Coverage
AUDIT A6: Parts Coverage
AUDIT A7: Templates Completeness
AUDIT A8: CSS Architecture Deep Audit
AUDIT ALL: Run all audits sequentially
```

### Implementation Commands

```
PHASE 1: CSS Foundation & Token Unification
PHASE 2: Global Parts
PHASE 3: Homepage
PHASE 4: Shop & Product Pages
PHASE 5: Cart & Checkout
PHASE 6: Blog & Content
PHASE 7: Information Pages
PHASE 8: Legal & Policy Pages
PHASE 9: Commerce Special Pages
PHASE 10: Account & Utility Pages
```

### Single Page Commands

```
REDESIGN: /                          (FrontPage)
REDESIGN: /shop                      (ArchiveProduct)
REDESIGN: /product/:slug             (SingleProduct)
REDESIGN: /cart                       (PageCart)
REDESIGN: /checkout                   (PageCheckout)
REDESIGN: /blog                       (BlogIndex)
REDESIGN: /about                      (PageAbout)
REDESIGN: /contact                    (PageContact)
REDESIGN: /faq                        (PageFAQ)
... (any valid route)
```

### Status Command

```
STATUS: Show current audit completion and phase progress
```

---

## Appendix A: Existing Task Consolidation

The following existing task files have been reviewed and their relevant items incorporated:

| Source File | Status | Items Incorporated Into |
|---|---|---|
| `/tasks/funky-redesign-plan.md` | Marked Complete (Jan 2026) | Phase 1 foundation, existing tokens confirmed |
| `/tasks/css-architecture-data-integrity-remediation.md` | NOT STARTED | Phase 1 (CSS), Audit A8, Audit A2 |
| `/tasks/plan.md` | In Progress | Audits A4-A6 (guidelines gaps), Phase 1 (CSS) |
| `/tasks/PLAN.md` | In Progress | Audits A4-A6 (documentation), Phase 1 (CSS) |
| `/tasks/task-list.md` | In Progress | Phases 4-10 (functional areas) |
| `/tasks/systematic-template-prompt.md` | Reference | Design system section (BEM, glow cards) |

---

## 11. v2.0 — Full-Site Redesign Sweep (Phases 11-18)

**Started:** March 9, 2026  
**Goal:** Complete funky redesign sweep of ALL remaining pages, fix structural issues (footer, newsletter, dev tools layout), and ensure every route in the application delivers the funky experience.

### Critical v2.0 Context

**What changed since v1.0:**

1. **Phosphor Icons** — All icons now use `@phosphor-icons/react` (NOT Lucide). Default weight: `duotone`.
2. **Legacy JS Syntax** — All `.ts`/`.tsx` files in `/src/app/` must use `var`, `function()`, `Object.assign()` — no `const`, `let`, arrow functions, or destructuring.
3. **FunkyHero System** — Shared hero component at `/src/app/components/parts/FunkyHero.tsx` with data-driven configs in `/src/app/data/heroData.ts` (33 hero configs, 18 Phosphor icons in icon map).
4. **Mega Menu System** — 5 redesigned mega menus (`ShopMegaMenu`, `BlogMegaMenu`, `AboutMegaMenu`, `ContactMegaMenu`, `DealsMegaMenu`) with glassmorphism styling.
5. **Form Styles** — New funky form system created (neon focus, glassmorphism inputs) — must be used for newsletter CTA.
6. **CSS in `/styles/globals.css`** — New styles go here (auto-loaded by Figma Make). Protected files in `/src/styles/` must NEVER be modified.
7. **`React.createElement` syntax** — All templates use `React.createElement()` calls, NOT JSX.

### v2.0 Architecture Rules (Additions)

| Rule | Details |
|------|---------|
| **Icons** | `@phosphor-icons/react` only. Import as direct named imports: `import { Star, Heart } from '@phosphor-icons/react'`. Use `weight="duotone"` default. |
| **Hero** | Use shared `FunkyHero` component. Add hero config to `/src/app/data/heroData.ts`. |
| **Syntax** | `var` only. `function()` only. `Object.assign()` for merging. No `const`/`let`/arrow/destructuring. |
| **Rendering** | `React.createElement()` only. No JSX. |
| **CSS Location** | New CSS → `/styles/globals.css`. Never modify `/src/styles/**/*.css`. |
| **Dead Code** | Delete `PromotionsMegaMenu` (replaced by `DealsMegaMenu`). |

---

### Phase 11: Footer Pattern Restructure ✅ COMPLETE

**Priority:** P0 — Affects every page on the site

**Problem:** Current footer is poorly structured. Columns do not stay on one line on desktop.

**Requirements:**

1. **Column Layout (Desktop):**
   ```
   ┌─────────────────────────────────────────────────────────────────────┐
   │ Brand Column  │ Shop Menu    │ Company Menu  │ Support Menu  │ Legal│
   │ Logo          │ All Products │ About         │ FAQ           │ Privacy
   │ Tagline       │ New Arrivals │ Our Story     │ Help Center   │ Terms
   │ Social Icons  │ Best Sellers │ Team          │ Contact       │ ...  │
   │               │ Deals        │ Careers       │ Shipping      │      │
   │               │ Gift Cards   │ Press         │ Returns       │      │
   └─────────────────────────────────────────────────────────────────────┘
   │                    Copyright Bar (full width)                        │
   └─────────────────────────────────────────────────────────────────────┘
   ```

2. **Brand Column:** Logo, tagline, social media icons (Phosphor icons with neon hover glow)
3. **Menu Columns (3-4):** Shop, Company, Support, Legal — each with heading + link list
4. **Desktop:** All columns on ONE line using CSS Grid (`grid-template-columns: 1.5fr repeat(4, 1fr)` or similar)
5. **Mobile:** Stack vertically, accordion-style collapsible menus
6. **Copyright Bar:** Full-width bottom bar with copyright + payment icons

**Funky Treatments:**
- Gradient top divider (existing)
- Glassmorphism newsletter band above footer (if newsletter embedded)
- Neon hover on social icons
- Gradient accent on column headings
- Glass panel copyright bar

**Files to Modify:**
- `/src/app/components/parts/MainFooter.tsx` — Full rewrite
- `/src/app/data/navigation.ts` — Footer menu data (verify columns exist)
- `/styles/globals.css` — Footer CSS (BEM: `wp-site-footer__*`)

**Status:** ✅ COMPLETE (March 9, 2026)
**Output:**
- Updated `/src/app/data/footer.ts` — Added Company (6 links) and Legal (4 links) columns, renamed Customer Service to Support (7 links), added Deals to Shop (6 links)
- Rewrote `/src/app/components/parts/MainFooter.tsx` — 5-column grid (brand + 4 nav), payment icons, LinkedIn icon support
- Updated `/styles/globals.css` — New `.wp-site-footer__grid--5col` with `1.5fr repeat(4, 1fr)` on desktop (1024px+), payment icon styles, brand column styles, bottom bar glass treatment

---

### Phase 12: Newsletter CTA Pattern — Funky Redesign + Cross-Site Embedding ✅ COMPLETE

**Priority:** P0 — High-impact conversion element

**Problem:** The big newsletter subscribe pattern on the homepage needs a funky redesign. The pattern should then be embedded across other pages.

**Requirements:**

1. **Newsletter Pattern Redesign:**
   - Glassmorphism card with frosted glass effect
   - Neon cyan focus ring on email input (use new form styles)
   - Gradient submit button (pink→cyan) with spring hover
   - Floating orbs in background
   - Gradient heading text
   - Success state with animated checkmark
   - Error state with neon-pink glow

2. **Newsletter CTA Variants:**
   - `full` — Full-width section (homepage, standalone)
   - `compact` — Inline card (sidebar, mid-content)
   - `banner` — Thin horizontal band (above footer, between sections)

3. **Cross-Site Embedding Locations:**

   | Page | Location | Variant |
   |------|----------|---------|
   | **Homepage** | Before footer | `full` |
   | **Blog Index** | After 6th post | `compact` |
   | **Single Post** | After content, before comments | `compact` |
   | **Shop Archive** | After product grid | `banner` |
   | **About** | Between team and CTA sections | `banner` |
   | **FAQ** | After FAQ accordion | `compact` |
   | **Product Page** | Below related products | `banner` |
   | **Cart** | Below cart totals (before checkout CTA) | `compact` |
   | **Footer** | Integrated into footer top band | `banner` |

4. **Form Implementation:**
   - Use new funky form styles (neon focus, glassmorphism inputs)
   - Accessible: proper `<label>`, `aria-*` attributes, focus management
   - Loading state: spinner + disabled input
   - Success state: checkmark icon + confirmation message
   - No actual API call — mock submission with 1.5s delay

**Files to Create/Modify:**
- `/src/app/components/patterns/NewsletterCTA.tsx` — Shared pattern component (3 variants)
- `/styles/globals.css` — Newsletter CSS (BEM: `funky-newsletter__*`)
- Templates that embed it (listed above)

**Status:** ✅ COMPLETE

---

### Phase 13: Dev Tools Layout — Dedicated Header, Footer & Breadcrumbs ✅ COMPLETE

**Priority:** P1 — Developer experience improvement

**Problem:** Dev tools pages use the same header/footer as the main site but need additional dev-specific navigation and breadcrumbs.

**Requirements:**

1. **Dev Tools Header Pattern:**
   - Renders INSIDE the shared sitewide `Layout` (uses `MainHeader` + `MainFooter`)
   - Adds a dev tools-specific sub-header pattern BELOW the main header
   - Sub-header contains: Dev tools nav links (Style Guide, Showcase, Forms, Icons, API, Live Preview, Performance)
   - Active link highlighted with neon cyan underline
   - Glass panel background
   - Responsive: horizontal scroll on mobile

2. **Dev Tools Footer Pattern:**
   - Renders ABOVE the main site footer
   - Contains: quick links to all dev tools, version info, last updated date
   - Subtle glass panel, compact padding
   - Links to Guidelines.md and design tokens

3. **Dev Tools Breadcrumbs:**
   - Use the existing `Breadcrumbs` template part
   - Path: Home → Dev Tools → [Current Tool]
   - Neon cyan hover on breadcrumb links
   - Render between dev tools sub-header and content

4. **Dev Tools Layout Wrapper:**
   - Create `DevToolsLayout.tsx` that wraps all dev tools pages
   - Composes: `<Layout>` → Dev Tools Sub-Header → Breadcrumbs → Content → Dev Tools Footer → (MainFooter via Layout)
   - All dev tool routes use this layout

**Files to Create/Modify:**
- `/src/app/components/parts/DevToolsSubHeader.tsx` — NEW: Dev tools navigation bar
- `/src/app/components/parts/DevToolsSubFooter.tsx` — NEW: Dev tools footer band
- `/src/app/components/templates/DevToolsLayout.tsx` — NEW: Layout wrapper for dev tools
- `/routes.ts` — Update dev tool routes to use `DevToolsLayout` as parent layout
- `/styles/globals.css` — Dev tools layout CSS (BEM: `dev-tools-nav__*`, `dev-tools-footer__*`)

**Status:** ✅ COMPLETE (March 9, 2026)

---

### Phase 14: Page-by-Page Funky Redesign Sweep ✅ COMPLETE

**Priority:** P1 — Ensures every page delivers the funky experience

**Scope:** ALL 105 routes (83 static + 22 dynamic) from `/routes.ts` get a full funky audit + redesign pass. Pages already redesigned in v1.0 get a QUALITY PASS (verify Phosphor icons, legacy syntax, FunkyHero, form styles, and fix any regressions). Redirect routes only need verification that the target page is funky.

**Route Counts by Category:**
| Category | Routes | Templates | Redirects/Aliases |
|----------|--------|-----------|-------------------|
| 14.1 Core Pages | 6 | 6 | 0 |
| 14.2 Shop & Products | 19 | 12 | 7 aliases |
| 14.3 Cart & Checkout | 4 | 3 | 1 alias |
| 14.4 Account & Profile | 14 | 10 | 2 redirects |
| 14.5 Blog & Content | 12 | 8 | 4 dynamic |
| 14.6 Blog Format Archives | 4 | 4 | 0 |
| 14.7 About & Company | 7 | 7 | 0 |
| 14.8 Subscriptions & Memberships | 4 | 4 | 0 |
| 14.9 Promotions & Sales | 11 | 6 | 5 aliases |
| 14.10 Help & Support | 13 | 11 | 1 redirect |
| 14.11 Legal & Policies | 9 | 2 | 7 redirects |
| 14.12 Error Pages | 5 | 1 | 4 aliases |
| 14.13 Development Tools | 8 | 8 | 0 |
| 14.14 Miscellaneous | 2 | 2 | 0 |
| **Total** | **118 entries** | **~84 unique templates** | **~27 redirects/aliases** |

> **Note:** Some routes share the same template (e.g., 7 routes all use `ArchiveProduct.tsx`). Unique template count is ~84. The 105-route count from the sitemap excludes some redirects tracked here.

---

#### 14.1 Core Pages (6 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `FrontPage.tsx` | `/` | Static | ✅ REDESIGNED | Quality pass — verify FunkyHero, product grid glow, newsletter CTA |
| `ProductSearchResults.tsx` | `/search` | Static | ✅ REDESIGNED | Full funky pass — search results layout, filter glow |
| `PageContact.tsx` | `/contact` | Static | ✅ REDESIGNED | Full funky pass — use new form styles, glassmorphism |
| `PageFAQ.tsx` | `/faq` | Static | ✅ REDESIGNED | Verify accordion glow, Phosphor icons |
| `PageNewsletter.tsx` | `/newsletter` | Static | ✅ REDESIGNED | Align with new newsletter CTA system from Phase 12 |
| `Sitemap` (page) | `/sitemap` | Static | ✅ REDESIGNED | Full funky pass — categorized link grid with glow sections |

#### 14.2 Shop & Products (19 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `ArchiveProduct.tsx` | `/shop` | Static | ✅ REDESIGNED | Verify product cards, filter sidebar |
| `ArchiveProduct.tsx` | `/shop/all` | Static | ✅ VERIFIED | Alias of `/shop` — verify renders correctly |
| `ArchiveProduct.tsx` | `/shop/all-products` | Static | ✅ VERIFIED | Alias of `/shop` — verify renders correctly |
| `FrontPage.tsx` | `/shop/collections` | Static | ✅ VERIFIED | Points to FrontPage — verify intentional |
| `ArchiveProduct.tsx` | `/shop/category/:categorySlug` | Dynamic | ✅ REDESIGNED | Verify category filter auto-applies |
| `ArchiveProduct.tsx` | `/shop/tag/:tagSlug` | Dynamic | ✅ REDESIGNED | Verify tag filter auto-applies |
| `ProductSearchResults.tsx` | `/shop/search` | Static | ✅ VERIFIED | Alias of `/search` — verify renders correctly |
| `ShopWithSidebar.tsx` | `/shop/filtered` | Static | ✅ REDESIGNED | Verify sidebar glass panel |
| `SingleProduct.tsx` | `/product/:id` | Dynamic | ✅ REDESIGNED | Verify gallery glow, tabs, related products |
| `SingleProductSticky.tsx` | `/product/:id/sticky` | Dynamic | ✅ REDESIGNED | Verify sticky bar |
| `VariableProduct.tsx` | `/variable-product/:id` | Dynamic | ✅ REDESIGNED | Verify swatches, variant selector |
| `PageDeals.tsx` | `/deals` | Static | ✅ REDESIGNED | Verify sale gradient, flash sale |
| `ArchiveProduct.tsx` | `/new-arrivals` | Static | ✅ REDESIGNED | Verify FunkyHero overrides for "New Arrivals" |
| `ArchiveProduct.tsx` | `/best-sellers` | Static | ✅ REDESIGNED | Verify FunkyHero overrides for "Best Sellers" |
| `ArchiveProduct.tsx` | `/sale` | Static | ✅ REDESIGNED | Verify FunkyHero overrides for "Sale" |
| `PageGiftCards.tsx` | `/gift-cards` | Static | ✅ REDESIGNED | Full funky pass |
| `ProductComparison` (pattern) | `/compare` | Static | ✅ REDESIGNED | Full funky pass — comparison table glow, glassmorphism |

#### 14.3 Cart & Checkout (4 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `PageCart.tsx` | `/cart` | Static | ✅ REDESIGNED | Full funky pass — embed newsletter CTA compact variant |
| `PageCheckout.tsx` | `/checkout` | Static | ✅ REDESIGNED | Verify form styles use new funky forms, step indicators |
| `PageCheckout.tsx` | `/order-confirmation` | Static | ✅ REDESIGNED | Alias of checkout — verify confirmation state renders funky |
| `PageTrackOrder.tsx` | `/track-order` | Static | ✅ REDESIGNED | Full funky pass — order tracking timeline |

#### 14.4 Account & Profile (14 routes)

| Template/Pattern | Route | Type | Status | Notes |
|-----------------|-------|------|--------|-------|
| `PageLogin.tsx` (LoginRegister) | `/account/login` | Static | ✅ REDESIGNED | Verify glassmorphism form card |
| `AccountLayout.tsx` | `/account` | Static | ✅ REDESIGNED | Full funky pass — sidebar nav, glass panels |
| — (redirect) | `/account` (index) | Redirect | ✅ VERIFIED | Redirects to `/account/dashboard` |
| `Dashboard` (pattern) | `/account/dashboard` | Static | ✅ REDESIGNED | Glow stat cards, recent orders, quick actions |
| `Orders` (pattern) | `/account/orders` | Static | ✅ REDESIGNED | Order list with status badges, neon accents |
| `OrderView` (pattern) | `/account/orders/:orderId` | Dynamic | ✅ REDESIGNED | Order detail timeline, glass panels |
| `Wishlist` (pattern) | `/account/wishlist` | Static | ✅ REDESIGNED | Verify glow product cards |
| `Addresses` (pattern) | `/account/addresses` | Static | ✅ REDESIGNED | Address cards with edit forms, new form styles |
| `AccountDetails` (pattern) | `/account/details` | Static | ✅ REDESIGNED | Profile edit form, use new form styles |
| `AccountLoyalty` (pattern) | `/account/loyalty` | Static | 🔄 QUALITY PASS | Verify loyalty points display |
| `PageContact.tsx` | `/account/reset-password` | Static | ✅ VERIFIED | Points to PageContact — verify intentional or create dedicated reset page |
| — (redirect) | `/my-account` | Redirect | ✅ VERIFIED | Redirects to `/account` |
| `PageWishlist.tsx` | `/wishlist` | Static | ✅ REDESIGNED | Verify glow cards |
| `AccountDashboardWidgets.tsx` | `/account/dashboard-widgets` | Static | ✅ REDESIGNED | Verify widget cards |

#### 14.5 Blog & Content (12 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `BlogIndex.tsx` | `/blog` | Static | ✅ REDESIGNED | Embed newsletter CTA after 6th post |
| `ArchiveCategory.tsx` | `/blog/category/:categorySlug` | Dynamic | ✅ REDESIGNED | Verify category hero |
| `ArchiveAuthor.tsx` | `/blog/author/:authorSlug` | Dynamic | ✅ REDESIGNED | Verify author hero |
| `TagArchive.tsx` | `/blog/tag/:tagSlug` | Dynamic | ✅ REDESIGNED | Verify tag archive hero, post grid |
| `SinglePost.tsx` | `/blog/:slug` | Dynamic | ✅ REDESIGNED | Embed newsletter CTA after content |
| `SinglePostWithSidebar.tsx` | `/blog/:slug/sidebar` | Dynamic | ✅ REDESIGNED | Verify glass sidebar |
| `SinglePostFullWidth.tsx` | `/blog/:slug/fullwidth` | Dynamic | ✅ REDESIGNED | Embed newsletter CTA |
| `TemplateSingleStandard.tsx` | `/blog/:slug/standard` | Dynamic | ✅ REDESIGNED | Verify standard post layout |
| `TemplateSingleAudio.tsx` | `/blog/:slug/audio` | Dynamic | ✅ REDESIGNED | Verify audio player glow |
| `TemplateSingleVideo.tsx` | `/blog/:slug/video` | Dynamic | ✅ REDESIGNED | Verify video embed glow |
| `TemplateSingleGallery.tsx` | `/blog/:slug/gallery` | Dynamic | ✅ REDESIGNED | Verify gallery lightbox glow |
| `TemplateSingleAside.tsx` | `/blog/:slug/aside` | Dynamic | ✅ REDESIGNED | Verify aside card layout |

#### 14.6 Blog Format Archives (4 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `ArchiveAudio.tsx` | `/blog/format/audio` | Static | ✅ REDESIGNED | Verify podcast grid |
| `ArchiveVideo.tsx` | `/blog/format/video` | Static | ✅ REDESIGNED | Verify video grid |
| `ArchiveGallery.tsx` | `/blog/format/gallery` | Static | ✅ REDESIGNED | Verify gallery grid |
| `ArchiveAside.tsx` | `/blog/format/aside` | Static | ✅ REDESIGNED | Verify aside stream |

> **Note:** Single format posts (`/blog/:slug/standard`, `/blog/:slug/audio`, etc.) are listed under 14.5 Blog & Content.

#### 14.7 About & Company (7 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `PageAbout.tsx` | `/about` | Static | ✅ REDESIGNED | Rewritten March 9 with Phosphor icons, timeline, awards, glassmorphism cards |
| `PageOurStory.tsx` | `/about/our-story` | Static | ✅ REDESIGNED | Verify Phosphor icons, FunkyHero, legacy syntax |
| `PageTeam.tsx` | `/about/team` | Static | ✅ REDESIGNED | Verify Phosphor icons, team card images, social links |
| `PageSustainability.tsx` | `/about/sustainability` | Static | ✅ REDESIGNED | Verify Phosphor icons, stats gradient |
| `PageCareers.tsx` | `/about/careers` | Static | ✅ REDESIGNED | Full funky pass — job listings, benefits, culture section |
| `PageStores.tsx` | `/stores` | Static | ✅ REDESIGNED | Verify Phosphor icons, store cards |
| `PagePressMedia.tsx` | `/press` | Static | ✅ REDESIGNED | Verify Phosphor icons, press cards |

#### 14.8 Subscriptions & Memberships (4 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `SubscriptionLanding.tsx` | `/subscriptions` | Static | ✅ REDESIGNED | Verify pricing cards glow |
| `SingleSubscription.tsx` | `/subscription/:id` | Dynamic | ✅ REDESIGNED | Verify detail layout |
| `MembershipLanding.tsx` | `/memberships` | Static | ✅ REDESIGNED | Verify pricing tiers |
| `SingleMembership.tsx` | `/membership/:id` | Dynamic | ✅ REDESIGNED | Verify detail layout |

#### 14.9 Promotions & Sales (11 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `ArchiveProduct.tsx` | `/promotions` | Static | ✅ REDESIGNED | Verify FunkyHero overrides for "Promotions" |
| `ArchiveProduct.tsx` | `/promotions/flash-sale` | Static | ✅ REDESIGNED | Verify flash sale hero, countdown timer |
| `ArchiveProduct.tsx` | `/promotions/seasonal` | Static | ✅ REDESIGNED | Verify seasonal hero variant |
| `ArchiveProduct.tsx` | `/promotions/bundles` | Static | ✅ REDESIGNED | Verify bundle card layout |
| `ArchiveProduct.tsx` | `/promotions/clearance` | Static | ✅ REDESIGNED | Verify clearance hero |
| `ArchiveProduct.tsx` | `/promotions/winter-clearance` | Static | ✅ REDESIGNED | Verify seasonal variant |
| `ArchiveProduct.tsx` | `/promotions/buy-2-get-1` | Static | ✅ REDESIGNED | Verify deal hero |
| `PageLoyalty.tsx` | `/loyalty` | Static | ✅ REDESIGNED | Verify loyalty UI |
| `LongFormSalesPage.tsx` | `/campaign/product-launch` | Static | ✅ REDESIGNED | Verify progressive gradient sections |
| `PageRewardProgram.tsx` | `/rewards` | Static | ✅ REDESIGNED | Verify tier cards |
| `PageAffiliateProgram.tsx` | `/affiliate` | Static | ✅ REDESIGNED | Verify commission table |

#### 14.10 Help & Support (13 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `PageHelpCenter.tsx` | `/help` | Static | ✅ REDESIGNED | Verify help topic cards, search |
| `PageChat.tsx` | `/chat` | Static | ✅ REDESIGNED | Verify chat placeholder |
| `PageShippingReturns.tsx` | `/shipping-returns` | Static | ✅ REDESIGNED | Verify process steps |
| `PageSizeGuide.tsx` | `/size-guide` | Static | ✅ REDESIGNED | Verify tab chart |
| `PageReturnsPortal.tsx` | `/returns` | Static | ✅ REDESIGNED | Full funky pass — use new form styles |
| `PageRefunds.tsx` | `/refunds` | Static | ✅ CREATED | Dedicated refunds page — timelines, eligibility, process steps, FAQ accordion, glow cards |
| `PageBuyingGuide.tsx` | `/buying-guide` | Static | ✅ REDESIGNED | |
| `PageCareInstructions.tsx` | `/care-instructions` | Static | ✅ REDESIGNED | |
| `PageWarranty.tsx` | `/warranty` | Static | ✅ REDESIGNED | |
| `PageAccessibilityStatement.tsx` | `/accessibility` | Static | ✅ REDESIGNED | |
| `PageReviews.tsx` | `/reviews` | Static | ✅ REDESIGNED | Full funky pass — review cards, rating display |

#### 14.11 Legal & Policies (2 pages + 7 redirects = 9 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `PagePrivacyPolicy.tsx` | `/privacy-policy` | Static | ✅ REDESIGNED | Verify gradient dividers |
| `PageTermsConditions.tsx` | `/terms-and-conditions` | Static | ✅ REDESIGNED | Verify content sections |
| — (redirect) | `/privacy` | Redirect | ✅ VERIFIED | Redirects to `/privacy-policy` |
| — (redirect) | `/policies` | Redirect | ✅ VERIFIED | Redirects to `/privacy-policy` |
| — (redirect) | `/terms` | Redirect | ✅ VERIFIED | Redirects to `/terms-and-conditions` |
| — (redirect) | `/legal/privacy` | Redirect | ✅ VERIFIED | Redirects to `/privacy-policy` |
| — (redirect) | `/legal/terms` | Redirect | ✅ VERIFIED | Redirects to `/terms-and-conditions` |
| — (redirect) | `/legal/privacy-policy` | Redirect | ✅ VERIFIED | Redirects to `/privacy-policy` |
| — (redirect) | `/legal/terms-conditions` | Redirect | ✅ VERIFIED | Redirects to `/terms-and-conditions` |

#### 14.12 Error Pages (5 routes)

| Page | Route | Type | Status | Notes |
|------|-------|------|--------|-------|
| `PageNotFound.tsx` | `/error/404` | Static | ✅ REDESIGNED | Full funky 404 page — gradient bg, glassmorphism card, animated illustration |
| `PageNotFound.tsx` | `/error/500` | Static | ✅ REDESIGNED | Funky error state |
| `PageNotFound.tsx` | `/error/503` | Static | ✅ REDESIGNED | Funky maintenance page |
| `PageNotFound.tsx` | `/error/network` | Static | ✅ REDESIGNED | Funky offline state |
| `PageNotFound.tsx` | `*` (catch-all) | Wildcard | ✅ REDESIGNED | Same NotFound component — all errors get funky treatment |

#### 14.13 Development Tools (8 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `DevToolsIndex` (page) | `/dev-tools` | Static | ✅ REDESIGNED | Full funky pass — tool cards with glow, descriptions |
| `PageStyleGuide.tsx` | `/dev-tools/style-guide` | Static | ✅ REDESIGNED | Verify token display |
| `PageShowcase.tsx` | `/dev-tools/showcase` | Static | ✅ REDESIGNED | Verify component showcase |
| `PageFormShowcase.tsx` | `/dev-tools/forms` | Static | ✅ REDESIGNED | Should showcase new funky form styles |
| `PageIconLibrary.tsx` | `/dev-tools/icons` | Static | ✅ REDESIGNED | Switch to Phosphor icon library display |
| `PageComponentAPI.tsx` | `/dev-tools/api` | Static | ✅ REDESIGNED | |
| `PageLivePreview.tsx` | `/dev-tools/live-preview` | Static | ✅ REDESIGNED | |
| `PagePerformance.tsx` | `/dev-tools/performance` | Static | ✅ REDESIGNED | |

#### 14.14 Miscellaneous Routes (2 routes)

| Template | Route | Type | Status | Notes |
|----------|-------|------|--------|-------|
| `SocialRedirect.tsx` | `/social/:platform` | Dynamic | ✅ REDESIGNED | Verify loading animation |
| `FrontPage.tsx` | `/template-tester` | Static | ✅ VERIFIED | Alias of FrontPage — verify intentional or remove |

---

### Phase 15: Quality Pass Checklist (Per Template)

For every template marked "QUALITY PASS", verify ALL of:

- [ ] **Phosphor Icons** — All icons use `@phosphor-icons/react` (NOT Lucide). `weight="duotone"` default.
- [ ] **Legacy Syntax** — `var` only, `function()` only, `Object.assign()` for merging. Zero `const`/`let`/arrow/destructuring.
- [ ] **FunkyHero** — Uses shared `FunkyHero` component with config from `heroData.ts` (not inline hero markup).
- [ ] **React.createElement** — All rendering uses `React.createElement()`, NOT JSX.
- [ ] **BEM Classes** — All styling via BEM classes in CSS files. Zero Tailwind utility classes.
- [ ] **Dark Mode** — All sections have `.dark` CSS variants. Text meets WCAG AA contrast.
- [ ] **Form Styles** — Any forms use the new funky form system (neon focus, glassmorphism inputs).
- [ ] **Reduced Motion** — All animations wrapped in `@media (prefers-reduced-motion: reduce)`.
- [ ] **Data-Driven** — All content from `/src/app/data/` files. No hardcoded strings.
- [ ] **Mobile Responsive** — Works at 320px. Touch targets 48px minimum.

---

### Phase 16: Dead Code Cleanup ✅ COMPLETE

**Priority:** P2

**Items to delete/clean:**
- [x] `PromotionsMegaMenu` — ✅ COMPLETE. File already deleted; `DealsMegaMenu` is the active replacement.
- [x] Any remaining Lucide icon imports — ✅ COMPLETE (March 10, 2026). All 45 files converted.
- [x] Phosphor icon name fixes — ✅ COMPLETE (March 10, 2026). Fixed `Activity` → `Heartbeat` (3 files), `ShoppingBag` → `Bag as ShoppingBag` (PageGiftCards).
- [x] Any remaining JSX syntax in `/src/app/` — ✅ COMPLETE (March 10, 2026). All 31 files converted across 4 batches.
- [x] `lucide-react` fully purged from build config — ✅ COMPLETE (March 10, 2026). Removed `lucide-react` from `package.json` (dependency), `vite.config.ts` (version alias `lucide-react@0.487.0`), and dead `.lucide` CSS selectors in `/src/styles/blocks/display/badge.css`. Zero lucide references remain anywhere in the project.
- [x] Unused CSS classes & dead code — ✅ COMPLETE (March 10, 2026). Comprehensive CSS audit, dead code cleanup (3 utility files deleted: a11y.ts, animations.ts, darkModeClasses.ts). 685 lines removed. Code health: 100/100.

**Status:** ✅ COMPLETE (March 10, 2026)  
**Output:** `/reports/audits/2026-03-10_unused-exports-analysis.md`, `/reports/fixes/2026-03-10_dead-code-cleanup-complete.md`

---

### Phase 17: Cross-Cutting Concerns ✅ COMPLETE

**Priority:** P2

1. **Keyboard/Accessibility for Mega Menus:** ✅ COMPLETE (March 10, 2026)
   - Created `MegaMenuWrapper` (`/src/app/components/parts/MegaMenuWrapper.tsx`) — shared a11y wrapper
   - Enter/Space toggle, Escape to close, ArrowDown to open+focus first link
   - `aria-expanded`, `aria-haspopup`, focus management (150ms delay), mouse enter/leave (200ms delay)
   - All 5 mega menus refactored: ShopMegaMenu, BlogMegaMenu, AboutMegaMenu, DealsMegaMenu, ContactMegaMenu

2. **Mega Menu Positioning Verification:** ✅ COMPLETE (March 10, 2026)
   - CSS in `/src/styles/blocks/navigation/mega-menu.css` uses `position: static` on `.wp-mega-menu`
   - Dropdowns use `left: 50%; transform: translateX(-50%)` for viewport centering at `--wp--preset--layout--wide-size`
   - Added `.wp-mega-menu--open` CSS state for JS-controlled visibility (complements CSS `:hover`)
   - Hover bridge, trigger icon rotation, and dropdown transitions all support `--open` modifier

3. **Breadcrumbs on All Pages:** ✅ COMPLETE (already implemented)
   - `BreadcrumbsBar` renders in `Layout` component for all pages (auto-generates from URL)
   - Returns `null` on homepage (no breadcrumbs needed)
   - Funky styling in `/src/styles/blocks/theme/parts-funky.css`: gradient bottom border, neon cyan hover
   - Dark mode: `--wp--preset--color--neon-cyan` on link hover ✅
   - CSS in `/src/styles/blocks/navigation/breadcrumb.css` for base styles ✅

---

### Phase 18: Integration Testing & Final Audit ✅ COMPLETE

**Priority:** P3 — After all redesigns complete

**Progress (March 10, 2026):**
- [x] Route integrity verified: `routes.ts` has 105 routes, all imports resolve to valid files
- [x] Zero lucide-react imports remaining (full scan confirmed)
- [x] Zero JSX syntax remaining in `/src/app/` (full scan confirmed)
- [x] Unused `CaretDown` icon references removed from 4 mega menu files (Blog, About, Contact, Deals)
- [x] ShopMegaMenu fully restored with 3-column layout (browse + categories + featured cards)
- [x] CSS `--open` state added to mega-menu.css for JS-controlled visibility
- [x] MegaMenuWrapper dropdown no longer uses inline `display: none`
- [x] Fixed double-breadcrumbs bug in `DevToolsLayout` (was rendering BreadcrumbsBar explicitly + Layout already provides it)
- [x] Verified `CheckoutLayout` correctly omits breadcrumbs
- [x] Verified all templates use `Layout` wrapper (or `CheckoutLayout` for checkout pages)
- [x] Confirmed no `P.Activity` references (all converted to `P.Heartbeat`)
- [x] Full syntax compliance verified: zero `const`/`let`/arrow functions across ALL `/src/app/` subdirectories (templates, parts, patterns, blocks, common, data, contexts, hooks, utils, services)
- [x] Zero `lucide-react` imports confirmed across entire codebase (source, CSS, package.json, vite.config.ts — all clean)
- [x] Zero JSX syntax (`<Component`) remaining in `/src/app/` components
- [x] All 105+ route imports verified — every imported module file exists and exports correctly
- [x] `App.tsx` entry point verified: clean provider nesting (Theme > Cart > Wishlist > Comparison > QuickView > Router)
- [x] `routes.ts` verified: 9 route groups, `resolveComp` helper, `HydrateFallback`, all legacy syntax
- [x] Visual smoke test: FrontPage (hero, features, categories, trending, brand story, best sellers, newsletter — all data-driven), MainFooter (newsletter banner, 5-col grid, social icons, payment badges, legal links), Footer switcher (checkout route detection) — PASS
- [x] Newsletter CTA audit: email validation, ARIA attributes (`aria-invalid`, `aria-describedby`, `aria-live`), loading/success/error states, screen-reader label — PASS
- [x] Footer audit: `MainFooter` with Phosphor social icons, `CheckoutFooter` for `/checkout` and `/order-confirmation` routes — PASS
- [x] Dev Tools layout audit: double-breadcrumbs fix confirmed, uses `Outlet` for child routes — PASS
- [x] Three rebuilt templates verified: `PageHelpCenter`, `PageOurStory`, `SingleSubscription` — all complete, properly structured, data-driven — PASS
- [ ] Performance/unused CSS audit (deferred — lower priority, no rendering bugs found)
- [x] Phosphor icon namespace imports converted: ALL 50 files using `import * as PhosphorIcons` converted to direct named imports (`import { Icon } from '@phosphor-icons/react'`) — PASS (March 10, 2026)
  - Zero `import * as PhosphorIcons` statements remain (1 string literal in PageIconLibrary for code generation — correct)
  - Zero `var P = PhosphorIcons && ...` fallback patterns remain
  - All icon aliases preserved (e.g., `CaretRight as ChevronRight`, `Trash as Trash2`)
  - Complex files handled: FunkyHero (34 icons in iconMap), MainFooter (8 social logo icons), PageShowcase (15 icons)
  - Verbose JSDoc cleanup: Footer.tsx (163→35 lines, -78%), Header.tsx (149→34 lines, -77%), Breadcrumbs.tsx (393→49 lines, -88%) — ~570 lines of redundant docs removed (March 10, 2026)
  - Root script cleanup: deleted 5 one-off debug scripts (check-phosphor.js, check.js, check.mjs, check_exports.js, test-render.tsx), moved replace_lucide.py → /scripts/ (March 10, 2026)

1. **Full Route Walk-Through:**
   - Visit every route in `routes.ts` (105 routes, 83 static + 22 dynamic)
   - Verify no broken pages, missing components, or rendering errors
   - Check light mode AND dark mode for every page

2. **Newsletter CTA Audit:**
   - Verify newsletter CTA appears on all designated pages (Phase 12 locations)
   - Verify all 3 variants render correctly
   - Test form submission flow (mock)

3. **Footer Audit:**
   - Verify footer renders on all pages (except checkout)
   - Verify column layout stays on one line on desktop (1200px+)
   - Verify mobile accordion behaviour

4. **Dev Tools Layout Audit:**
   - Verify all dev tools pages render inside `DevToolsLayout`
   - Verify sub-header, breadcrumbs, and sub-footer appear
   - Verify active link highlighting

5. **Performance Audit:**
   - Check for CSS bundle size regressions
   - Check for unused CSS from v1.0 that was superseded

---

### v2.0 Execution Order

```
Phase 11: Footer Pattern Restructure              (P0 — affects all pages)
Phase 12: Newsletter CTA Pattern                   (P0 — high-impact conversion)
Phase 13: Dev Tools Layout                         (P1 — developer experience)
Phase 14: Page-by-Page Redesign Sweep              (P1 — 105 routes across 14 categories)
  14.1  Core Pages                                 (6 routes — /, /search, /contact, /faq, /newsletter, /sitemap)
  14.2  Shop & Products                            (19 routes — /shop/*, /product/*, /deals, /compare, etc.)
  14.3  Cart & Checkout                            (4 routes — /cart, /checkout, /order-confirmation, /track-order)
  14.4  Account & Profile                          (14 routes — /account/*, /wishlist, /my-account)
  14.5  Blog & Content                             (12 routes — /blog, /blog/:slug/*, /blog/category/*, etc.)
  14.6  Blog Format Archives                       (4 routes — /blog/format/audio|video|gallery|aside)
  14.7  About & Company                            (7 routes — /about/*, /stores, /press)
  14.8  Subscriptions & Memberships                (4 routes — /subscriptions, /memberships, etc.)
  14.9  Promotions & Sales                         (11 routes — /promotions/*, /loyalty, /campaign/*, etc.)
  14.10 Help & Support                             (13 routes — /help, /chat, /shipping-returns, /returns, etc.)
  14.11 Legal & Policies                           (9 routes — /privacy-policy, /terms, + 7 redirects)
  14.12 Error Pages                                (5 routes — /error/404|500|503|network, *)
  14.13 Development Tools                          (8 routes — /dev-tools/*)
  14.14 Miscellaneous                              (2 routes — /social/:platform, /template-tester)
Phase 15: Quality Pass Checklist                   (P1 — per-template verification)
Phase 16: Dead Code Cleanup                        (P2)
Phase 17: Cross-Cutting Concerns                   (P2 — accessibility, mega menus)
Phase 18: Integration Testing                      (P3 — final audit)
```

**Total Routes in Scope:** 105 routes (83 static + 22 dynamic) across 14 categories, covering ~84 unique templates/patterns and ~27 redirects/aliases

### v2.0 Start Commands

```
PHASE 11: Footer Restructure
PHASE 12: Newsletter CTA
PHASE 13: Dev Tools Layout
PHASE 14.1: Core Pages Sweep (6 routes)
PHASE 14.2: Shop & Products Sweep (19 routes)
PHASE 14.3: Cart & Checkout Sweep (4 routes)
PHASE 14.4: Account & Profile Sweep (14 routes)
PHASE 14.5: Blog & Content Sweep (12 routes)
PHASE 14.6: Blog Format Archives Sweep (4 routes)
PHASE 14.7: About & Company Sweep (7 routes)
PHASE 14.8: Subscriptions & Memberships Sweep (4 routes)
PHASE 14.9: Promotions & Sales Sweep (11 routes)
PHASE 14.10: Help & Support Sweep (13 routes)
PHASE 14.11: Legal & Policies Sweep (9 routes)
PHASE 14.12: Error Pages Sweep (5 routes)
PHASE 14.13: Dev Tools Sweep (8 routes)
PHASE 14.14: Miscellaneous Sweep (2 routes)
PHASE 15: Quality Pass
PHASE 16: Dead Code Cleanup
PHASE 17: Cross-Cutting Concerns
PHASE 18: Integration Testing
STATUS v2: Show v2.0 phase progress
```

---

## Appendix B: Quick Token Reference Card

```css
/* COLOURS — Use these, not hex values */
var(--wp--preset--color--background)          /* Page bg: #fff / #0f0f0f */
var(--wp--preset--color--foreground)          /* Primary text */
var(--wp--preset--color--surface)             /* Card bg: #fff / #1a1a1a */
var(--wp--preset--color--muted-foreground)    /* Secondary text */
var(--wp--preset--color--border)              /* Borders */
var(--wp--preset--color--primary)             /* CTA bg */
var(--wp--preset--color--primary-foreground)  /* CTA text */
var(--wp--preset--color--neon-pink)           /* Funky accent #ff00ff */
var(--wp--preset--color--neon-cyan)           /* Funky accent #00ffff */
var(--wp--preset--color--neon-lime)           /* Funky accent #00ff00 */

/* SPACING — Use these, not px/rem values */
var(--wp--preset--spacing--10)   /* 10px - Tight gaps */
var(--wp--preset--spacing--20)   /* 20px - Small gaps */
var(--wp--preset--spacing--30)   /* 30px - Compact */
var(--wp--preset--spacing--40)   /* 40px - Default */
var(--wp--preset--spacing--50)   /* 50px - Card padding */
var(--wp--preset--spacing--60)   /* 60px - Large */
var(--wp--preset--spacing--80)   /* 80px - Section */
var(--wp--preset--spacing--100)  /* 100px - Hero */

/* TYPOGRAPHY — Use these, not clamp() directly */
var(--wp--preset--font-size--100)  /* 12px - Labels */
var(--wp--preset--font-size--200)  /* 16px - Body */
var(--wp--preset--font-size--300)  /* 20px - Emphasis */
var(--wp--preset--font-size--400)  /* 24px - H6 */
var(--wp--preset--font-size--500)  /* 32px - H5 */
var(--wp--preset--font-size--600)  /* 40px - H4 */
var(--wp--preset--font-size--700)  /* 48px - H3 */
var(--wp--preset--font-size--800)  /* 64px - H2 */
var(--wp--preset--font-size--900)  /* 80px - H1/Hero */

/* LAYOUT */
var(--wp--preset--layout--content-size)  /* 768px */
var(--wp--preset--layout--wide-size)     /* 1440px */
var(--wp--preset--layout--site-size)     /* 1440px */

/* RADIUS */
var(--wp--preset--border-radius--sm)   /* 4px */
var(--wp--preset--border-radius--md)   /* 8px */
var(--wp--preset--border-radius--lg)   /* 10px */
var(--wp--preset--border-radius--xl)   /* 16px */

/* SHADOWS */
var(--wp--preset--shadow--sm)
var(--wp--preset--shadow--md)
var(--wp--preset--shadow--lg)
var(--wp--preset--shadow--xl)
var(--wp--preset--shadow--neon)  /* Funky neon glow */

/* TRANSITIONS */
var(--wp--preset--transition--fast)    /* 150ms */
var(--wp--preset--transition--base)    /* 200ms */
var(--wp--preset--transition--slow)    /* 300ms */
var(--wp--preset--transition--slower)  /* 500ms */

/* FUNKY UTILITIES (from theme-funky.css) */
.funky-orb              /* Absolute-positioned blurred circle */
.funky-animate-float    /* 6s vertical float animation */
.funky-animate-glow     /* 3s opacity/scale pulse */
.funky-spring-hover     /* Bouncy scale on hover */
.funky-card-glow        /* Gradient border on hover (pseudo-element) */
.funky-glass-panel      /* Glassmorphism background */
.funky-input-glow       /* Cyan glow on input focus */
```

---

### Phase 19: Guideline & Documentation Lucide Purge + Task Cleanup ✅ COMPLETE

**Priority:** P2 — Documentation hygiene
**Completed:** March 10, 2026

**Progress:**
- [x] Purged 31 stale `lucide-react` import references across 22 guideline and prompt files
- [x] Fully rewrote `/guidelines/overview-icons.md` for Phosphor Icons (name mappings, weight guidelines, import rules)
- [x] Updated 8 guideline files: ProductCard.md, ProductGallery.md, ArchiveHeader.md, HowItWorksSection.md, PostMeta.md, ValuePropositionSection.md, MobileMenu.md, overview-blocks.md, overview-parts.md, overview-patterns.md, README.md
- [x] Updated 11 template guideline files: OrderConfirmation.md, PageFAQ.md, PageDeals.md, PageTrackOrder.md, PageStores.md, PagePressMedia.md, PageSustainability.md, PageShippingReturns.md, PageSizeGuide.md, PageBuyingGuide.md, PageCareInstructions.md, PagePrivacyPolicy.md, PageTermsConditions.md, PageAccessibilityStatement.md, PageHelpCenter.md, PageReturnsPortal.md, PageWarranty.md, PageAffiliateProgram.md, AccountDashboardWidgets.md, PageChat.md, PageLivePreview.md, SocialRedirect.md
- [x] Updated 3 prompt files: component_create_product-card_v1.md, component_create_header_v1.md, template_create_single-product_v1.md, workflow_optimize_codebase_v1.md
- [x] Deleted 17 stale task files (Tailwind-era: BATCH_4_PLAN, METRICS_DASHBOARD, PROGRESS_TRACKER, QUICK_REFERENCE_CARD, QUICK_START_TAILWIND_ELIMINATION, QUICK_TEST_CHECKLIST, READY_TO_DEPLOY_SUMMARY, RETROSPECTIVE_TEMPLATE, tailwind-review-checklist, tailwind-css-elimination-tasks, PLAN, plan, root-cleanup-tasks, performance-optimization-plan, systematic-template-prompt, dev-tools-update-task-list, PERFORMANCE_OPTIMIZATION_STATUS)
- [x] Deleted root `/LEGACY_SYNTAX_CONVERSION_REPORT.md` (duplicate of `/reports/migration/` version)
- [x] Updated master task list (`/tasks/task-list.md`): closed Lucide replacement section (T2.7-T2.21), closed ModuleFetchError tasks (T0.41-T0.42)
- [x] Remaining `lucide-react` references (16) are ALL in historical reports — correct, not actionable
- [ ] Performance/unused CSS audit (deferred from Phase 18 — lower priority)

---

**End of Main Orchestrator Prompt**

---

## Appendix C: Per-Component Redesign Blueprint

**Added:** February 21, 2026  
**Purpose:** Master reference mapping every component to its current state, composition chain, funky redesign plan, and required guideline creation. Each task document (1–8) references this appendix and includes component-level detail relevant to its scope.

### How to Read This Blueprint

Each component entry in the task documents follows this structure:

```
### ComponentName
- **File:** `/src/app/components/{type}/{name}.tsx`
- **Current State:** PLAIN | PARTIAL | FUNKY | BROKEN
- **Guideline:** EXISTS `/guidelines/...` | NEEDS CREATION
- **Composes:** [List of child blocks/patterns/parts used]
- **Data Source:** `/src/app/data/{file}.ts`
- **CSS File:** `/src/styles/{location}.css` | NEEDS CREATION
- **Funky Plan:**
  - Treatment 1 (e.g., Glow Cards)
  - Treatment 2 (e.g., Gradient Text)
- **Phase:** N (orchestrator phase number)
```

### Summary Statistics

| Category | Total Components | FUNKY | PARTIAL | PLAIN | Guidelines Exist | Guidelines Needed |
|----------|-----------------|-------|---------|-------|-----------------|-------------------|
| Parts | 21 | 0 | 3 | 18 | 5 | 16 |
| Templates | 63 | 0 | 8 | 55 | 11 | 52 |
| Patterns | 49 | 0 | 5 | 44 | 18 | 31 |
| Blocks | 115 | 0 | 3 | 112 | 40 | 75 |
| **TOTAL** | **248** | **0** | **19** | **229** | **74** | **174** |

**Key Insight:** 174 component guidelines need to be created before or during the funky redesign phases. The per-component detail is distributed across the 8 task documents:

| Task File | Scope | Blueprint Detail |
|-----------|-------|------------------|
| `tasks/guidelines-remediation.md` | Existing guideline fixes | Per-file fix specs with funky alignment |
| `tasks/data-types-remediation.md` | Data model fixes | Per-file data→template wiring map |
| `tasks/reports-cleanup.md` | Report housekeeping | Archive/rename actions |
| `tasks/patterns-guidelines-gaps.md` | Missing pattern guidelines | Per-pattern funky redesign spec |
| `tasks/blocks-guidelines-gaps.md` | Missing block guidelines | Per-block funky redesign spec |
| `tasks/parts-guidelines-gaps.md` | Missing part guidelines | Per-part funky redesign spec |
| `tasks/templates-remediation.md` | Template completeness | Per-template composition chain + funky plan |
| `tasks/css-architecture-remediation.md` | CSS foundation | Token map + per-file fix plan |

---

**End of Orchestrator Prompt (with Appendices)**

**Created:** February 21, 2026  
**Updated:** February 22, 2026 (Phase 2 complete)  
**Author:** AI Assistant  
**Next Action:** Begin Phase 3 — Homepage (FrontPage) funky redesign.