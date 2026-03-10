# Funky Global Parts - Complete Specification

**Version:** 2.0
**Updated:** February 22, 2026
**Type:** Template Parts
**Category:** Parts
**Status:** Complete
**Phase:** Funky Redesign Phase 2
**Scope:** MainHeader, MainFooter, Breadcrumbs, MobileMenu, Mega Menus (Shop, Blog, Promotions, About, Contact)
**Architecture:** WordPress FSE Template Parts populated with Patterns, assembled with Blocks

---

## 1. Architecture Overview

### WordPress FSE Mapping

| Part (Template Part)  | Contains (Patterns)                       | Assembled From (Blocks)                                 |
|-----------------------|-------------------------------------------|---------------------------------------------------------|
| **MainHeader**        | HeaderBrand, HeaderNav, HeaderActions      | Site-Logo, Navigation, Search, MiniCart, ThemeToggle     |
| **MainFooter**        | FooterBrand, FooterColumns, FooterNewsletter, FooterBottom | Site-Logo, Group, Row, Columns, Paragraph, Button |
| **Breadcrumbs**       | BreadcrumbTrail                           | Home icon, Link, Separator, Current page                |
| **MobileMenu**        | MobileSearch, MobileNav, MobileQuickLinks, MobileContact | Search, Navigation (accordion), Group, Row, Button |
| **ShopMegaMenu**      | MegaCategoryList, MegaFeaturedCards       | Navigation, Group, Columns, Image, Button               |
| **BlogMegaMenu**      | MegaCategoryGrid, MegaFeaturedPosts       | Navigation, Group, Columns, Post-Featured-Image, Row    |
| **AboutMegaMenu**     | MegaAboutLinks, MegaFeaturedCards         | Navigation, Group, Columns, Image, Button               |
| **PromotionsMegaMenu**| MegaDealsList, MegaFeaturedDeals          | Navigation, Group, Columns, Image, Button               |
| **ContactMegaMenu**   | MegaContactMethods, MegaSupportLinks      | Navigation, Group, Columns, Button                      |

### File Structure

```
/src/app/components/parts/
  Header.tsx            # Smart switcher: MainHeader vs CheckoutHeader
  MainHeader.tsx        # Part: imports patterns and blocks
  MainFooter.tsx        # Part: imports patterns and blocks
  Footer.tsx            # Smart switcher: MainFooter vs CheckoutFooter
  Breadcrumbs.tsx       # Part: manual breadcrumbs
  BreadcrumbsBar.tsx    # Part: auto-generated breadcrumbs from route
  MobileMenu.tsx        # Part: full-screen navigation overlay
  MiniCart.tsx           # Part: slide-over cart drawer
  ShopMegaMenu.tsx      # Part: shop navigation dropdown
  BlogMegaMenu.tsx      # Part: blog navigation dropdown
  AboutMegaMenu.tsx     # Part: company navigation dropdown
  PromotionsMegaMenu.tsx # Part: deals navigation dropdown
  ContactMegaMenu.tsx   # Part: contact navigation dropdown
  CheckoutHeader.tsx    # Part: minimal checkout header
  CheckoutFooter.tsx    # Part: minimal checkout footer

/src/styles/blocks/theme/
  header.css            # Base header BEM styles
  footer.css            # Base footer BEM styles
  parts-funky.css       # Funky overrides for ALL parts

/src/styles/blocks/navigation/
  breadcrumb.css        # Base breadcrumb BEM styles
  mobile-menu.css       # Base mobile menu BEM styles
  mega-menu.css         # Base mega menu BEM styles
```

---

## 2. Design Tokens - Per Section

### 2.1 Neon Accent Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--wp--preset--color--neon-pink` | `#ff00ff` | Primary neon accent |
| `--wp--preset--color--neon-cyan` | `#00ffff` | Secondary neon accent |
| `--wp--preset--color--neon-lime` | `#adff2f` | Tertiary neon accent |
| `--wp--preset--color--neon-yellow` | `#ffff00` | Quaternary neon accent |

### 2.2 Glassmorphism Tokens

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| `--funky-glass-bg` | `rgba(255,255,255,0.85)` | `rgba(3,2,19,0.85)` |
| `--funky-glass-border` | `rgba(0,0,0,0.06)` | `rgba(0,255,255,0.12)` |
| `--funky-glass-shadow` | `0 4px 30px rgba(0,0,0,0.1)` | `0 4px 30px rgba(0,0,0,0.4)` |
| `--funky-glass-header-border` | `rgba(0,0,0,0.06)` | `rgba(0,255,255,0.12)` |

### 2.3 Header Tokens

| Token                        | Light Mode                          | Dark Mode                           |
|------------------------------|-------------------------------------|-------------------------------------|
| Background                   | `rgba(255,255,255,0.85)` (glass)    | `rgba(3,2,19,0.85)` (glass)        |
| Border                       | `rgba(0,0,0,0.06)`                  | `rgba(0,255,255,0.12)`             |
| Nav link color               | `--foreground`                      | `rgba(255,255,255,0.85)`           |
| Nav link hover               | `--neon-cyan`                       | `--neon-cyan`                       |
| Nav link underline           | `gradient(neon-pink, neon-cyan)`    | `gradient(neon-pink, neon-cyan)`    |
| Action icon color            | `--foreground`                      | `rgba(255,255,255,0.85)`           |
| Action icon hover bg         | `rgba(0,255,255,0.06)`             | `rgba(0,255,255,0.10)`             |
| Search input focus ring      | `--neon-cyan`                       | `--neon-cyan` (brighter glow)       |
| Height (mobile)              | `64px` (4rem)                       | `64px`                              |
| Height (desktop)             | `80px` (5rem)                       | `80px`                              |

### 2.4 Footer Tokens

| Token                        | Light Mode                          | Dark Mode                           |
|------------------------------|-------------------------------------|-------------------------------------|
| Background                   | `--background`                      | `--background`                      |
| Top border                   | `gradient(neon-pink, neon-cyan)` 0.4 | Same at 0.6 opacity                |
| Heading color                | `--foreground`                      | `rgba(255,255,255,0.95)`           |
| Heading underline            | 2rem gradient (pink->cyan, 0.5)    | Same at 0.7 opacity                |
| Link color                   | `--foreground`                      | `rgba(255,255,255,0.7)`            |
| Link hover                   | `--neon-cyan`                       | `--neon-cyan`                       |
| Description color            | `--muted-foreground`                | `rgba(255,255,255,0.5)`            |
| Copyright color              | `--muted-foreground`                | `rgba(255,255,255,0.4)`            |
| Social icon hover            | cyan `drop-shadow(0 0 6px)`        | cyan `drop-shadow(0 0 8px)`        |
| Newsletter input focus       | `--neon-cyan` border + glow         | Same (stronger glow)                |
| Newsletter button            | `gradient(neon-pink, neon-cyan)`    | Same                                |
| Glow orb pink opacity        | 0.06                                | 0.10                                |
| Glow orb cyan opacity        | 0.04                                | 0.08                                |

### 2.5 Breadcrumb Tokens

| Token                        | Light Mode                          | Dark Mode                           |
|------------------------------|-------------------------------------|-------------------------------------|
| Bar background               | `transparent`                       | `transparent`                       |
| Bottom border                | gradient `(cyan 0.15, pink 0.1)`   | gradient `(cyan 0.25, pink 0.15)`  |
| Link color                   | `--muted-foreground`                | `rgba(255,255,255,0.5)`            |
| Link hover                   | `--neon-cyan`                       | `--neon-cyan`                       |
| Current page color           | `--foreground`                      | `rgba(255,255,255,0.9)`            |
| Current page weight          | `--font-weight--medium` (500)       | Same                                |
| Separator color              | `--muted-foreground`                | `rgba(255,255,255,0.25)`           |
| Font size                    | `--font-size--small`                | Same                                |
| Padding                      | `--spacing--40` (top/bottom)        | Same                                |

### 2.6 Mobile Menu Tokens

| Token                        | Light Mode                          | Dark Mode                           |
|------------------------------|-------------------------------------|-------------------------------------|
| Background                   | `gradient(background, surface)`     | `gradient(#030213, #0f0f0f)`        |
| Nav label                    | gradient text (pink->cyan)          | gradient text (pink->cyan->lime)    |
| Section divider              | `gradient cyan 0.15 center`         | `gradient cyan 0.25 center`         |
| Submenu link color           | `--foreground`                      | `rgba(255,255,255,0.75)`           |
| Submenu link hover           | `--neon-cyan`                       | `--neon-cyan`                       |
| Quick links border           | `gradient(neon-pink, neon-cyan)`    | Same                                |
| Quick link hover glow        | `cyan 0.1`                          | `cyan 0.2`                          |
| Search input focus           | `--neon-cyan` ring + glow           | Same (stronger)                     |

### 2.7 Mega Menu Tokens

| Token                        | Light Mode                          | Dark Mode                           |
|------------------------------|-------------------------------------|-------------------------------------|
| Dropdown background          | `--background` (glass)              | `rgba(20,20,30,0.95)` (glass)      |
| Dropdown border              | `--border-light`                    | `rgba(255,255,255,0.08)`           |
| Dropdown shadow              | `0 20px 60px rgba(0,0,0,0.15)`     | `0 20px 60px rgba(0,0,0,0.5)`     |
| Section title                | gradient text (pink->cyan)          | Same                                |
| Link color                   | `--foreground`                      | `rgba(255,255,255,0.85)`           |
| Link hover                   | `--neon-cyan`                       | `--neon-cyan`                       |
| Badge background             | `gradient(neon-pink, neon-cyan)`    | Same                                |
| Featured card hover          | `scale(1.02)` + shadow              | Same + glow                         |

---

## 3. Typography Specification

### Consistent Scale Across All Parts

| Element               | Size Token                    | Weight Token                  | Letter Spacing |
|-----------------------|-------------------------------|-------------------------------|----------------|
| Header nav link       | `--font-size--normal`         | `--font-weight--medium` (500) | `0`            |
| Footer heading        | `--font-size--small`          | `--font-weight--semibold`     | `0.05em`       |
| Footer link           | `--font-size--small`          | `--font-weight--normal`       | `0`            |
| Footer description    | `--font-size--small`          | `--font-weight--normal`       | `0`            |
| Footer copyright      | `--font-size--small`          | `--font-weight--normal`       | `0`            |
| Breadcrumb link       | `--font-size--small`          | `--font-weight--normal`       | `0`            |
| Breadcrumb current    | `--font-size--small`          | `--font-weight--medium`       | `0`            |
| Mobile nav label      | `--font-size--large`          | `--font-weight--semibold`     | `0`            |
| Mobile submenu link   | `--font-size--normal`         | `--font-weight--normal`       | `0`            |
| Mega menu section     | `--font-size--small`          | `--font-weight--semibold`     | `0.05em`       |
| Mega menu link        | `--font-size--normal`         | `--font-weight--normal`       | `0`            |
| Mega menu featured    | `--font-size--normal`         | `--font-weight--semibold`     | `0`            |

---

## 4. Spacing Specification

| Element                | Padding/Margin/Gap                                          |
|------------------------|-------------------------------------------------------------|
| Header inner           | Height: 64px mobile, 80px desktop                           |
| Header actions gap     | `--spacing--20` (8px)                                       |
| Footer main padding    | `clamp(3rem, 6vw, 4rem)` V, `clamp(1rem, 3vw, 3rem)` H    |
| Footer grid gap        | `--spacing--80` mobile, `3rem` desktop                      |
| Footer section gap     | `--spacing--60` between heading and content                  |
| Footer links gap       | `--spacing--30` between link items                           |
| Footer bottom padding  | `--spacing--60`                                             |
| Breadcrumb padding     | `--spacing--40` vertical                                    |
| Breadcrumb item gap    | `--spacing--20`                                             |
| Mobile menu search     | `--spacing--40` padding                                     |
| Mobile menu nav gap    | `--spacing--40` between sections                            |
| Mobile submenu gap     | `--spacing--20` between links                               |
| Mega menu padding      | `--spacing--60`                                             |
| Mega menu list gap     | `--spacing--10`                                             |

---

## 5. Link Validation - All Routes Verified

All links in global parts MUST resolve to a registered route. Reference: `/src/app/routes.tsx`

### Header Navigation Links
- `/` -> FrontPage (Home)
- `/shop` -> ArchiveProduct
- `/blog` -> BlogIndex
- `/about` -> PageAbout
- `/contact` -> PageContact
- `/account` -> AccountLayout

### Footer Links (Shop Column)
- `/shop` -> ArchiveProduct
- `/new-arrivals` -> ArchiveProduct
- `/best-sellers` -> ArchiveProduct
- `/gift-cards` -> FrontPage
- `/sale` -> ArchiveProduct

### Footer Links (Support Column)
- `/about` -> PageAbout
- `/contact` -> PageContact
- `/shipping-returns` -> PageShippingReturns
- `/returns` -> PageReturnsPortal
- `/faq` -> PageFAQ

### Footer Legal Links
- `/privacy-policy` -> PagePrivacyPolicy
- `/terms-and-conditions` -> PageTermsConditions
- `/sitemap` -> Sitemap

### Mobile Menu Links
- Shop: `/shop`, `/new-arrivals`, `/best-sellers`, `/sale`, `/shop/collections`
- Promotions: `/promotions`, `/promotions/flash-sale`, `/promotions/seasonal`, `/promotions/bundles`
- Blog: `/blog`, `/blog/format/audio`, `/blog/format/video`, `/blog/format/gallery`
- About: `/about`, `/about/our-story`, `/about/team`, `/about/careers`, `/stores`
- Quick Links: `/contact`, `/account`, `/cart`, `/wishlist`

### Mega Menu Links
- **ShopMegaMenu:** `/shop`, `/new-arrivals`, `/best-sellers`, `/sale`, `/gift-cards`, `/shop/collections`, `/shop/category/clothing`, `/shop/category/accessories`, `/shop/category/home-living`
- **BlogMegaMenu:** `/blog`, `/blog/format/audio`, `/blog/format/video`, `/blog/format/gallery`, `/blog/format/aside`, `/blog/category/development`
- **AboutMegaMenu:** `/about`, `/about/team`, `/about/sustainability`, `/about/careers`, `/help`, `/faq`, `/shipping-returns`, `/privacy-policy`, `/terms-and-conditions`
- **PromotionsMegaMenu:** `/promotions`, `/promotions/flash-sale`, `/promotions/seasonal`, `/promotions/bundles`, `/promotions/clearance`, `/loyalty`, `/promotions/winter-clearance`, `/promotions/buy-2-get-1`
- **ContactMegaMenu:** `/contact`, `/chat`, `/help`, `/faq`, `/stores`, `/shipping-returns`

### Search Form Target
- MobileMenu: `/shop/search?q=...`
- MainHeader: `/shop/search?q=...`

---

## 6. Dark Mode Rules

1. **No inline `dark:` Tailwind classes** - all dark mode via CSS variables and `.dark` class selectors
2. **All text must have dark mode colors** - no `--foreground` without `.dark` override
3. **All borders must be visible** in dark mode - use `rgba(255,255,255,0.08-0.15)` range
4. **Backgrounds must not be pure black** - use `#030213` or `--background` token
5. **Glow effects increase opacity** in dark mode (more visible against dark backgrounds)
6. **Gradient opacities increase** in dark mode (0.4 -> 0.6 for dividers)

---

## 7. Accessibility Requirements

- **Touch targets:** All interactive elements >= 44x44px
- **Focus visible:** All links and buttons show `outline` on `:focus-visible`
- **ARIA labels:** Icon-only buttons have `aria-label`
- **ARIA expanded:** Accordion toggles have `aria-expanded`
- **ARIA current:** `aria-current="page"` on breadcrumb current page
- **Skip links:** Header provides "Skip to main content"
- **Contrast:** All text meets WCAG 2.1 AA (4.5:1 for normal text)
- **Keyboard:** No keyboard traps; logical tab order
- **Reduced motion:** Respect `prefers-reduced-motion`

---

## 8. CSS Files Reference

| File                                        | Purpose                             |
|---------------------------------------------|-------------------------------------|
| `/src/styles/blocks/theme/header.css`       | Base header BEM styles              |
| `/src/styles/blocks/theme/footer.css`       | Base footer BEM styles              |
| `/src/styles/blocks/theme/parts-funky.css`  | Funky overrides for ALL parts       |
| `/src/styles/blocks/navigation/breadcrumb.css` | Base breadcrumb styles           |
| `/src/styles/blocks/navigation/mobile-menu.css` | Base mobile menu styles         |
| `/src/styles/blocks/navigation/mega-menu.css` | Base mega menu styles             |
| `/src/styles/theme-funky.css`               | Global funky tokens and utilities   |

---

## 9. Component Files Reference

| File                                        | Purpose                             |
|---------------------------------------------|-------------------------------------|
| `/src/app/components/parts/Header.tsx`      | Smart header switcher               |
| `/src/app/components/parts/MainHeader.tsx`  | Full navigation header              |
| `/src/app/components/parts/MainFooter.tsx`  | Full site footer                    |
| `/src/app/components/parts/Footer.tsx`      | Smart footer switcher               |
| `/src/app/components/parts/Breadcrumbs.tsx` | Manual breadcrumb trail             |
| `/src/app/components/parts/BreadcrumbsBar.tsx` | Auto breadcrumbs from route      |
| `/src/app/components/parts/MobileMenu.tsx`  | Full-screen mobile navigation       |
| `/src/app/components/parts/MiniCart.tsx`     | Slide-over cart drawer              |
| `/src/app/components/parts/ShopMegaMenu.tsx` | Shop mega menu dropdown            |
| `/src/app/components/parts/BlogMegaMenu.tsx` | Blog mega menu dropdown            |
| `/src/app/components/parts/AboutMegaMenu.tsx` | About mega menu dropdown          |
| `/src/app/components/parts/PromotionsMegaMenu.tsx` | Promotions mega menu dropdown |
| `/src/app/components/parts/ContactMegaMenu.tsx` | Contact mega menu dropdown      |
| `/src/app/components/parts/CheckoutHeader.tsx` | Minimal checkout header          |
| `/src/app/components/parts/CheckoutFooter.tsx` | Minimal checkout footer          |

---

## Changelog

### v2.0 - 2026-02-22
- Merged `Funky-Global-Parts.md` and `Funky-Global-Parts-Spec.md` into single file
- Fixed broken links: `/terms` -> `/terms-and-conditions`, `/privacy` -> `/privacy-policy`
- Fixed footer data: `/shop/category/gifts` -> `/gift-cards`
- Updated complete link validation against `/src/app/routes.tsx`
- Standardised typography spec across all parts
- Added all mega menu types to architecture table
- Added component files reference table

### v1.2 - 2026-02-22
- Added comprehensive Mega Menu funky CSS overrides to `parts-funky.css`
- Glassmorphism dropdown panel with `backdrop-filter: blur(16px)`
- Gradient text on section titles, neon hover on links
- Updated `prefers-reduced-motion` guard

### v1.0 - 2026-02-22
- Initial funky global parts specification
- All Tailwind removed from all parts
- All links validated against routes
- Guideline naming convention enforced (uppercase first letter)
