# ProductComparison Pattern

**Version:** 1.0
**Type:** Pattern (Product Comparison)
**File:** `/src/app/components/patterns/ProductComparison.tsx`
**BEM:** `.wc-product-comparison__*`

---

## Overview

Side-by-side product comparison table showing specs, features, and pricing for 2-4 products. Highlights the "winner" in each category.

---

## Retro / funky spec

- Glass comparison table
- Glow on winning/best-value column
- Neon checkmark icons for feature presence
- Gradient column header for featured product

---

## Accessibility

- `<table>` with proper `<thead>`, `<tbody>`, `<th scope>`
- `aria-label="Product comparison"` on table
- Checkmarks have `aria-label="Included"` / `"Not included"`

---

**Version:** 1.0 (March 2026)
