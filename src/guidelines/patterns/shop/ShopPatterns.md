# Shop patterns

**Version:** 1.0
**Type:** Pattern (Shop Page Sub-sections)
**Directory:** `/src/app/components/patterns/shop/`
**CSS:** `/src/styles/sections/sweep-shop-pages.css`
**BEM:** `.wp-shop-*` (WooCommerce shop namespace)

---

## Overview

Nine shop-specific section patterns used within `ArchiveProductRetro` and shop landing pages. Each handles a distinct section of the shop experience.

---

## Components

### ShopHero

**File:** `ShopHero.tsx` | **BEM:** `.wp-shop-hero__*`

```
ShopHero
├── Background treatment (gradient)
├── Content container
│   ├── Badge / tagline
│   ├── Heading
│   ├── Description
│   ├── CTA buttons (shop now + view offers)
│   └── Scroll down arrow
```

**Retro spec:** Blue→cyan gradient background, floating orbs, glass badge, spring animation on CTA hover.

---

### CategoryTilesGrid

**File:** `CategoryTilesGrid.tsx` | **BEM:** `.wp-shop-category-tiles__*`

Grid of category tiles with image, name, and product count. Links to category archive pages.

**Retro spec:** Glow tiles on hover, gradient overlay on images, spring lift.

---

### ShopCategorySlider

**File:** `ShopCategorySlider.tsx` | **BEM:** `.wp-shop-category-slider__*`

Horizontal scrolling category chips/pills for quick category navigation.

**Retro spec:** Glow active chip, neon navigation arrows.

---

### ShopBrandGrid

**File:** `ShopBrandGrid.tsx` | **BEM:** `.wp-shop-brand-grid__*`

Brand logo grid specific to shop pages. Similar to `BrandLogoGrid` but with shop-specific layout.

**Retro spec:** Glass brand cards, glow hover effect.

---

### ServiceFeaturesSection

**File:** `ServiceFeaturesSection.tsx` | **BEM:** `.wp-shop-features__*`

Feature/benefit icons strip (free shipping, secure checkout, easy returns). Shop-specific variant of TrustBand.

**Retro spec:** Glass cards, icon gradient circles.

---

### ShopNewsletter

**File:** `ShopNewsletter.tsx` | **BEM:** `.wp-shop-newsletter__*`

Email subscription form embedded within shop page flow.

**Retro spec:** Glass input field, neon focus ring, glow submit button.

---

### ContactFollowSection

**File:** `ContactFollowSection.tsx` | **BEM:** `.wp-shop-contact__*`

Contact information and social media follow links.

**Retro spec:** Glass cards, neon social icon glow on hover.

---

### ShopSocialSection

**File:** `ShopSocialSection.tsx` | **BEM:** `.wp-shop-social__*`

Social media integration section (Instagram feed preview, social proof).

**Retro spec:** Glow social cards, neon overlay on images.

---

### SupportStrip

**File:** `SupportStrip.tsx` | **BEM:** `.wp-shop-support-strip__*`

```
SupportStrip
├── Card container
│   ├── Heading ("Need help choosing?")
│   ├── Description
│   └── Action buttons (contact + FAQ)
```

**Retro spec:** Glass strip background, subtle glow on icons, neon CTA hover.

---

## Shared design rules

- All use `.wp-shop-*` BEM namespace
- Glass card treatment with `backdrop-filter: blur(12px)` where specified
- Glow effects use `var(--color-glow)` / `var(--color-signal)`
- All headings sentence case (exception: all-caps pixel-font display labels)
- Phosphor icons with `aria-hidden="true"` when decorative
- 44x44px minimum touch targets
- Respect `prefers-reduced-motion`

---

## Used in

- `ArchiveProductRetro` (primary shop page)
- Shop landing pages (via route composition)

---

**Version:** 1.0 (March 2026)
