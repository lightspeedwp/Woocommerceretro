# Typography Design Tokens

**Component Type:** Design System  
**Scope:** WordPress theme.json Aligned Typography Scale  
**Related:** [/guidelines/design-tokens/Spacing.md], [/guidelines/design-tokens/Colors.md]  
**Last Updated:** 2026-02-22

---

## Overview

This document defines the typography system for the WooCommerce prototype, aligned with WordPress theme.json standards using **numeric slugs (100-900)** with fluid scaling for responsive design.

**Philosophy:** Fluid typography scales smoothly across viewports. Semantic hierarchy ensures proper document structure. Readability is optimized for all devices.

---

## Font Families

### Primary Font: Inter (Sans-Serif)

**Fallback Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Secondary Font: Merriweather (Serif) [Optional]

**Usage**: Editorial headings, blog post titles. **DO NOT use for product UI.**

---

## WordPress Typography Scale

### Numeric Font Size Slugs (100-900)

| Slug | Size (rem) | Size (px) | Fluid Min | Fluid Max | CSS Variable | Usage |
|------|-----------|-----------|-----------|-----------|--------------|-------|
| `100` | 0.75rem | 12px | 0.65rem | 0.75rem | `--wp--preset--font-size--100` | **Tiny** - Labels, badges, meta |
| `200` | 1rem | 16px | 0.875rem | 1rem | `--wp--preset--font-size--200` | **Base** - Body text |
| `300` | 1.25rem | 20px | 1rem | 1.25rem | `--wp--preset--font-size--300` | **Small** - Emphasized body |
| `400` | 1.5rem | 24px | 1.25rem | 1.5rem | `--wp--preset--font-size--400` | **Medium** - H6 |
| `500` | 2rem | 32px | 1.5rem | 2rem | `--wp--preset--font-size--500` | **Large** - H5 |
| `600` | 2.5rem | 40px | 2rem | 2.5rem | `--wp--preset--font-size--600` | **X-Large** - H4 |
| `700` | 3rem | 48px | 2.5rem | 3rem | `--wp--preset--font-size--700` | **XX-Large** - H3 |
| `800` | 4rem | 64px | 3rem | 4rem | `--wp--preset--font-size--800` | **Huge** - H2 |
| `900` | 5rem | 80px | 3.5rem | 5rem | `--wp--preset--font-size--900` | **Gigantic** - H1 |

---

## Element to Font Size Mapping

### Heading Elements

| Element | Slug | CSS Variable | Size Range | Line Height |
|---------|------|--------------|------------|-------------|
| `<h1>` | `900` | `--wp--preset--font-size--900` | 56px to 80px | 1.1 |
| `<h2>` | `800` | `--wp--preset--font-size--800` | 48px to 64px | 1.2 |
| `<h3>` | `700` | `--wp--preset--font-size--700` | 40px to 48px | 1.3 |
| `<h4>` | `600` | `--wp--preset--font-size--600` | 32px to 40px | 1.4 |
| `<h5>` | `500` | `--wp--preset--font-size--500` | 24px to 32px | 1.4 |
| `<h6>` | `400` | `--wp--preset--font-size--400` | 20px to 24px | 1.4 |

### Body Elements

| Element | Slug | CSS Variable | Size Range | Line Height |
|---------|------|--------------|------------|-------------|
| `<p>` | `200` | `--wp--preset--font-size--200` | 14px to 16px | 1.6 |
| `<small>` | `100` | `--wp--preset--font-size--100` | 10.4px to 12px | 1.5 |

---

## Font Weight Guidelines

| Weight | CSS Value | Usage |
|--------|-----------|-------|
| **Normal** | 400 | Body text, standard paragraphs |
| **Medium** | 500 | H4-H6, emphasized text, labels |
| **Semibold** | 600 | H2-H3, subheadings |
| **Bold** | 700 | H1, important headings, prices |

---

## Typography Hierarchy Rules

### Rule 1: Sentence Case for Headings (MANDATORY)

Capitalize the first letter of the first word and proper nouns only.

### Rule 2: Never Skip Heading Levels

h1 to h2 to h3 -- never skip.

### Rule 3: One H1 Per Page

Each page should have exactly one `<h1>` element.

### Rule 4: Use Semantic HTML

Let the HTML tag define the hierarchy.

---

## Quick Reference

| Size | Slug | rem | px Range | Element | Use Case |
|------|------|-----|----------|---------|----------|
| **Tiny** | `100` | 0.75rem | 10.4px to 12px | `<small>` | Labels, badges |
| **Base** | `200` | 1rem | 14px to 16px | `<p>` | Body text |
| **Small** | `300` | 1.25rem | 16px to 20px | - | Emphasized body |
| **Medium** | `400` | 1.5rem | 20px to 24px | `<h6>` | Minor headings |
| **Large** | `500` | 2rem | 24px to 32px | `<h5>` | Sub-sections |
| **X-Large** | `600` | 2.5rem | 32px to 40px | `<h4>` | Widget titles |
| **XX-Large** | `700` | 3rem | 40px to 48px | `<h3>` | Card titles |
| **Huge** | `800` | 4rem | 48px to 64px | `<h2>` | Section headings |
| **Gigantic** | `900` | 5rem | 56px to 80px | `<h1>` | Hero titles |

---

## Changelog

### v2.1 - 2026-02-22
- Renamed from `typography.md` to `Typography.md` (naming convention enforcement)
- Updated cross-references to use uppercase filenames
