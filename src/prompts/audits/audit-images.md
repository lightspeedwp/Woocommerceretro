# Audit Images

**Version:** 1.0
**Created:** 2026-03-16
**Type:** Single Prompt
**Trigger Word:** `audit images`
**Duration:** 15-30 minutes

---

## Objective

Scan the entire codebase for broken, missing, inconsistent, or inaccessible images. Produce a prioritized report of all image issues found.

---

## Prerequisites

Before running this prompt:

1. Read: `/guidelines/Guidelines.md` — verify project rules are current
2. Read: `/guidelines/IMPORTS_GUIDELINES.md` — understand asset import standards
3. Read: `/guidelines/mobile/images.md` — understand mobile image optimization

---

## Execution Steps

### Phase 1: Scan All Image Sources (5-10 min)

**Duration:** 5-10 min

- [ ] Search all `.tsx` files for `<img`, `<ImageWithFallback`, `src=`, `background-image`, and Unsplash URLs
- [ ] Search all `.css` files for `url(` and `background-image` references
- [ ] Identify all `figma:asset` imports and verify they exist
- [ ] Identify all SVG imports from `/imports/` and verify they exist
- [ ] Check for any hardcoded relative image paths that may be broken

### Phase 2: Validate Image URLs (5-10 min)

**Duration:** 5-10 min

- [ ] Check all Unsplash URLs for consistent format (`?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080`)
- [ ] Flag any non-Unsplash external URLs (potential broken links)
- [ ] Flag any `localhost`, `placeholder`, `example.com`, or obviously fake image URLs
- [ ] Check for duplicate images used across different components
- [ ] Verify all product images in data files reference valid URLs
- [ ] Check hero images across all templates for consistency

### Phase 3: Accessibility Audit (3-5 min)

**Duration:** 3-5 min

- [ ] Check all `<img>` and `<ImageWithFallback>` tags have `alt` attributes
- [ ] Flag empty `alt=""` on images that are NOT decorative
- [ ] Flag missing `alt` on images that ARE content-meaningful
- [ ] Verify decorative images have `alt=""` and/or `aria-hidden="true"`
- [ ] Check SVG images for proper `aria-hidden="true"` or accessible labels

### Phase 4: Dark Mode & Theme Consistency (3-5 min)

**Duration:** 3-5 min

- [ ] Check the PlayPocketLogo (SVG) has proper dark mode CSS variable overrides
- [ ] Verify logo is used consistently across all templates (HeaderRetro, FooterRetro)
- [ ] Check for any images with hardcoded light-only backgrounds
- [ ] Flag product images or hero images that may look broken on dark backgrounds
- [ ] Verify image placeholder/skeleton states work in both light and dark modes

### Phase 5: Performance & Optimization (2-3 min)

**Duration:** 2-3 min

- [ ] Flag images without explicit `width`/`height` attributes (layout shift risk)
- [ ] Check for overly large image dimensions (`w=` param > 1080 for non-hero)
- [ ] Flag any `<img>` tags that should use `loading="lazy"`
- [ ] Check for missing `object-fit` on images inside fixed-size containers

---

## Classification

Findings are classified by priority:

| Priority | Criteria |
|----------|----------|
| **P0** | Broken image (404, invalid URL, missing import) — visible to users |
| **P1** | Missing alt text on meaningful images — WCAG violation |
| **P2** | Inconsistent dark/light mode appearance — visual regression |
| **P3** | Performance issue (missing lazy load, oversized, no dimensions) |
| **P4** | Style nit (duplicate image, inconsistent Unsplash params) |

---

## Success Criteria

- [ ] Every `.tsx` file with images has been scanned
- [ ] Every data file with image URLs has been checked
- [ ] All CSS files with `url()` or `background-image` have been reviewed
- [ ] Logo consistency verified across all templates
- [ ] Report written with P0-P4 findings and file locations

---

## Output

**Report location:** `/reports/audits/YYYY-MM-DD_images-audit.md` with `Status: Unprocessed`.
Do NOT create task lists.

---

## Guidelines Referenced

- `/guidelines/Guidelines.md`
- `/guidelines/IMPORTS_GUIDELINES.md`
- `/guidelines/mobile/images.md`
- `/guidelines/development/modern-react-coding-standards.md`
- `/guidelines/design-tokens/Dark-Mode.md`