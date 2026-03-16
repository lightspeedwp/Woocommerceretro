---
title: "WooCommerce Prototype — Guidelines Hub"
version: "3.0.0"
updated: "2026-03-15"
scope: "Brand-agnostic, WooCommerce-first prototype with WordPress FSE architecture"
philosophy: "Shop-first, neutral aesthetics, WCAG 2.1 AA, Full Site Editing parity"
---

# WooCommerce Prototype — Guidelines Hub

This is the central navigation file for all project standards. It defines the project vision, links to all sub-guidelines, and documents the critical rules that every file must follow.

For version history, see `/CHANGELOG.md`.
For repository documentation standards, see `/guidelines/Core-Repository-Guidelines.md`.

---

## 1. Project Vision

- **Shop-First:** Commerce experience (cart, checkout, product discovery) is the priority.
- **Brand-Neutral:** Foundation layer that accepts any brand identity via tokens.
- **Block-Aligned:** Every component maps to a WordPress Block, Pattern, or Template Part.
- **Accessible:** WCAG 2.1 AA/AAA compliance is non-negotiable.
- **Dark Mode First:** Every component MUST support dark mode from day one.

---

## 2. Critical Rules (MANDATORY)

### 2.1 No Tailwind CSS

- No utility classes (`flex`, `p-4`, `text-center`) in component `className` attributes.
- No inline `style={{}}` attributes (rare exceptions for animation/dynamic values).
- All styling uses WordPress/WooCommerce semantic BEM class names.
- All CSS lives in `/src/styles/` and is imported via `/styles/globals.css`.
- See: `/guidelines/development/modern-react-coding-standards.md` Section 9.

### 2.2 Dark Mode via CSS Variables

- Dark mode is toggled via `.dark` class on `<html>`.
- Components use CSS variables that automatically adapt; no `dark:` prefix classes.
- Every component must be tested in both light and dark modes.
- See: `/guidelines/design-tokens/Dark-Mode.md`.

### 2.3 Typography Components

- All headings must use `<Heading level="N">` or `<Typography variant="hN">`.
- No plain `<h1>`-`<h6>` tags with manual sizing.
- No overriding Typography component sizes with `text-4xl`, etc.
- See: `/guidelines/design-tokens/Typography.md`.

### 2.4 Accessibility

- Semantic HTML (`<article>`, `<nav>`, `<main>`, `<footer>`).
- All interactive elements: minimum 44x44px touch targets.
- `aria-label` on icon-only buttons, `aria-expanded` on toggles.
- Color contrast: 4.5:1 minimum (AA), 7:1 target (AAA).
- Respect `prefers-reduced-motion`. See: `/guidelines/REDUCED_MOTION_GUIDELINES.md`.

### 2.5 WordPress CSS Variables

All styling must use WordPress `--wp--preset--*` variables (70+ available):

- **Typography:** `--wp--preset--font-size--*`, `--wp--preset--font-family--*`
- **Spacing:** `--wp--preset--spacing--*`, `--wp--style--block-gap`
- **Colors:** `--wp--preset--color--*`
- **Layout:** `--wp--preset--layout--*`

See: `/src/styles/theme-variables.css` for complete reference.

---

## 3. Protected Files

These files and directories must NEVER be deleted:

| Path | Reason |
|------|--------|
| `/ATTRIBUTIONS.md` | License attributions (root) |
| `/README.md` | Project overview (root) |
| `/CHANGELOG.md` | Version history (root) |
| `/styles/globals-minimal.css` | Active CSS entry point |
| `/styles/globals.css` | Full CSS entry point (280 @imports) |
| `/src/styles/*.css` | 9 root CSS files (tokens, base styles) |
| `/src/styles/blocks/**/*.css` | 130+ block CSS files |
| `/src/styles/sections/*.css` | 42 section CSS files |
| `/src/app/components/figma/` | Figma Make system components |
| `/guidelines/Guidelines.md` | This file |
| `/tasks/task-list.md` | Master task list |
| `/tasks/*-task-list.md` | Domain task lists (14 protected — mark complete, never delete) |

---

## 4. File Organization

### 4.1 Root Directory

Only these `.md` files are allowed in the project root:

- `ATTRIBUTIONS.md` — License attributions
- `README.md` — Project overview
- `CHANGELOG.md` — Version history

All other documentation goes in designated folders. See Section 5.

### 4.2 Source Code

All application code is in `/src/app/`. See: `/guidelines/overview-components.md`.

| Directory | Purpose | Import Alias |
|-----------|---------|-------------|
| `/src/app/templates/` | Page templates (28) | `@/templates/` |
| `/src/app/components/parts/` | Global parts (24) | `@/components/parts/` |
| `/src/app/components/patterns/` | Reusable sections (~50) | `@/components/patterns/` |
| `/src/app/components/blocks/` | Functional blocks (~100) | `@/components/blocks/` |
| `/src/app/components/common/` | Shared utilities (17) | `@/components/common/` |
| `/src/app/contexts/` | React contexts (5) | `@/contexts/` |
| `/src/app/hooks/` | Custom hooks (4) | `@/hooks/` |
| `/src/app/data/` | Mock data (14) | `@/data/` |

See: `/guidelines/PATH_ALIAS_STRATEGY.md` for complete alias configuration.

### 4.3 CSS Architecture

- **Entry point:** `/styles/globals.css` (auto-loaded by Figma Make)
- **Source files:** `/src/styles/**/*.css` (imported via @import chain)
- **New block styles:** Create in `/src/styles/blocks/[category]/`, add @import
- **New section styles:** Create in `/src/styles/sections/`, add @import

See: `/guidelines/development/css-optimization-guidelines.md`.

---

## 5. Documentation Folders

| Folder | Contents | Rules |
|--------|----------|-------|
| `/guidelines/` | Project standards | Use templates from `/guidelines/_templates/` |
| `/prompts/` | AI prompt files | Single prompts in root, orchestrators in subfolders |
| `/reports/` | Audit reports, findings | Date-prefixed: `YYYY-MM-DD_description.md` |
| `/tasks/` | Task lists, action items | Master list: `/tasks/task-list.md` |
| `/scripts/` | Shell and Python scripts | Follow script guidelines |
| `/docs/` | Quick references, guides | General documentation |

See: `/guidelines/Core-Repository-Guidelines.md` for complete rules.

---

## 6. Workflow Commands

### Workflow Triggers

| Trigger | Purpose | Duration |
|---------|---------|----------|
| `cleanup` | Project maintenance | 20-30 min |
| `continue` | Execute next task | 10-20 min |
| `optimize` | Performance scan | 20-40 min |
| `status` | Status summary | 5-10 min |
| `document` | Update guidelines | 15-30 min |
| `update guidelines` | Refresh guidelines with current frontmatter | 15-30 min |
| `cleanup guidelines` | Merge duplicates, delete outdated guidelines | 20-40 min |
| `process reports` | Convert audit reports to task lists | 15-30 min |
| `fix routes` | Validate and repair all routes, links, and nav data | 20-40 min |

### Audit Triggers

| Trigger | Purpose | Duration |
|---------|---------|----------|
| `audit` | Run ALL 9 audits (reports only) | 30-60 min |
| `audit routes` | Route/template alignment | 5-10 min |
| `audit sitemap` | Sitemap vs routes sync | 5-10 min |
| `audit tokens` | Design token consistency | 5-10 min |
| `audit css` | CSS architecture health | 5-10 min |
| `audit a11y` | WCAG AA accessibility | 10-20 min |
| `audit data` | Data file sizes and types | 5-10 min |
| `audit responsive` | Responsive patterns | 5-10 min |
| `audit styles` | Hardcoded style detection | 5-10 min |
| `audit guidelines` | Guideline compliance | 5-10 min |

### Combo Triggers

| Trigger | Purpose |
|---------|---------|
| `audit && process reports` | Full pipeline: audit everything, then create task lists |
| `cleanup && continue` | Maintenance, then execute next task |

See: `/guidelines/PROMPT-TRIGGERS.md` for full details.

### 6.1 Prompt-Report-Task Sequence

All AI-generated work follows this strict order:

1. **Update guidelines first** — Verify referenced guidelines are current before auditing.
2. **Run prompt, create report** — Single prompts produce one report; orchestrators produce one per sub-prompt.
3. **Create task list last** — Only after all reports are finalized.

| Type | Prompt Location | Report Location | Task List |
|------|----------------|-----------------|-----------|
| Single | `/prompts/[name].md` | `/reports/[category]/YYYY-MM-DD_*.md` | `/tasks/[name]-task-list.md` |
| Orchestrator | `/prompts/[name]/` | `/reports/[name]/` | `/tasks/[name]-task-list.md` |

### 6.2 File Size Limits

| File Type | Max Lines | Action When Over |
|-----------|-----------|-----------------|
| `.tsx` component | 300 | Split into sub-components |
| `.css` stylesheet | 200 | Split by BEM block |
| `.ts` data file | 250 | Split by data category |
| `.md` guideline | 500 | Split into sub-guidelines |

---

## 7. Sub-Guidelines Directory

### Architecture

| File | Covers |
|------|--------|
| `overview-components.md` | Component types, relationships, diagram |
| `overview-templates.md` | Page template architecture |
| `overview-parts.md` | Global parts (Header, Footer, MiniCart) |
| `overview-patterns.md` | Reusable section patterns |
| `overview-blocks.md` | Functional block components |
| `overview-sections.md` | Section styling, WordPress alignment |
| `overview-icons.md` | Icon system |

### Design Tokens

| File | Covers |
|------|--------|
| `design-tokens/Colors.md` | Color palette, semantic tokens |
| `design-tokens/Typography.md` | Font hierarchy, fluid scaling, Heading/Typography components |
| `design-tokens/Spacing.md` | Spacing scale, layout guidelines |
| `design-tokens/Dark-Mode.md` | Dark mode implementation, CSS variable system |
| `design-tokens/Funky-Theme.md` | Funky theme tokens |

### Development Standards

| File | Covers |
|------|--------|
| `development/modern-react-coding-standards.md` | React/TS standards, BEM naming, ESLint rules |
| `development/modern-react-quick-reference.md` | Cheat sheet for daily development |
| `development/css-optimization-guidelines.md` | CSS performance, memory optimization |
| `development/css-optimization-quick-reference.md` | Quick CSS optimization lookup |

### Styling

| File | Covers |
|------|--------|
| `styles/section-styles.md` | Section presets, light/dark modes |
| `styles/layout-grid.md` | Grid and flexbox utility classes |
| `components/SectionPresets.md` | WordPress BEM section class patterns |

### Navigation & Routing

| File | Covers |
|------|--------|
| `NAVIGATION_QUICK_REFERENCE.md` | Navigation architecture, sitemap-centric design |
| `ROUTING_GUIDE.md` | React Router configuration, route structure |
| `PATH_ALIAS_STRATEGY.md` | Import path aliases |

### Interactions & Accessibility

| File | Covers |
|------|--------|
| `interactions/animations.md` | Animation standards, duration, easing |
| `interactions/focus-management.md` | Focus trapping, keyboard navigation |
| `REDUCED_MOTION_GUIDELINES.md` | prefers-reduced-motion compliance |
| `responsive/breakpoints.md` | Breakpoint strategy, mobile-first |
| `responsive/navigation.md` | Responsive navigation patterns |

### Process

| File | Covers |
|------|--------|
| `Core-Repository-Guidelines.md` | Documentation standards, Markdown hierarchy |
| `WRITING_GUIDELINES.md` | How to write guidelines |
| `REPORTING_GUIDELINES.md` | Report structure standards |
| `PROMPT_GENERATION_GUIDELINES.md` | AI prompt creation standards |
| `PROMPT-TRIGGERS.md` | Trigger words, audit system, workflow automation |
| `PLANNING_GUIDELINES.md` | Task planning standards |
| `IMPORTS_GUIDELINES.md` | Asset import standards |

### Mobile

| File | Covers |
|------|--------|
| `mobile/buttons.md` | Touch targets, sizing |
| `mobile/spacing.md` | Mobile spacing, clamp() |
| `mobile/typography.md` | Mobile readability |
| `mobile/forms.md` | Mobile form optimization |
| `mobile/images.md` | Mobile image optimization |
| `mobile/animations.md` | Mobile animation performance |
| `mobile/performance.md` | Mobile performance targets |

### Templates for New Files

All templates are in `/guidelines/_templates/`. See `/guidelines/_templates.md` for usage guide.

---

## 8. Decision Tree

**Creating a new component?**
1. Read this file (architecture overview)
2. Read the relevant `overview-*.md` file
3. Read `design-tokens/Colors.md`, `Typography.md`, `Spacing.md`, `Dark-Mode.md`
4. Read component-specific guideline if it exists (in `blocks/`, `patterns/`, `parts/`)
5. Read `mobile/` guidelines for responsive behavior

**Styling a component?**
1. Read `development/modern-react-coding-standards.md` Section 9
2. Read `styles/section-styles.md` and `components/SectionPresets.md`
3. Reference `TAILWIND_TO_WORDPRESS_QUICK_REFERENCE.md` for migration

**Optimizing CSS?**
1. Read `development/css-optimization-guidelines.md`
2. Quick start: `development/css-optimization-quick-reference.md`

**Writing documentation?**
1. Read `WRITING_GUIDELINES.md` and `Core-Repository-Guidelines.md`
2. Use template from `/guidelines/_templates/`

**Creating a prompt?**
1. Read `PROMPT_GENERATION_GUIDELINES.md`
2. Use template: `/guidelines/_templates/prompt-template.md`

---

**Version:** 3.0.0
**Last Updated:** March 15, 2026
**Lines:** ~380 (reduced from ~4,200)
**Full changelog:** `/CHANGELOG.md`