# Parts Guidelines Gaps Task List

**Source:** A6 Parts Coverage Audit (2026-02-21)  
**Status:** ✅ ALL PRIORITY GUIDELINES COMPLETE (P0 + P1 + P2) — Feb 23, 2026  
**Updated:** February 23, 2026 (P2 complete: MegaMenu 1,135 lines, StoreNotices 758 lines)  
**Coverage:** 65% (13/20 components have guidelines — 1 orphan excluded)  
**Cross-Reference:** `/prompts/funky-redesign-orchestrator.md` Appendix C, Phase 2

---

## P0: Critical (Global parts — funky redesign Phase 2)

### T6.1 — `MiniCart.tsx` Guideline + Funky Spec ✅ COMPLETE (Feb 23)

**File:** `/src/app/components/parts/MiniCart.tsx`  
**Guideline:** ✅ CREATED → `/guidelines/parts/MiniCart.md`

**Current Composition:**
```
MiniCart (drawer)
├── Drawer overlay
├── Cart header ("Your Cart" + close button)
├── Cart items list:
│   └── CartItem-like rows (image, title, quantity, price, remove)
├── Cart totals (subtotal, shipping estimate)
└── Checkout CTA button
```

**Funky Redesign Spec:**
- **Glass Panel Drawer:** `funky-glass-panel` on drawer background, `backdrop-filter: blur(16px)`
- **Neon Close Button:** Cyan glow on hover/focus
- **Cart Item Rows:** Subtle glow border on hover, neon remove button
- **Total Highlight:** Gradient accent line on total amount
- **Checkout CTA:** Primary neon glow button
- **Empty State:** Glass panel with gradient cart icon
- **BEM Prefix:** `.wp-mini-cart__*`
- **CSS File:** `/src/styles/blocks/layout/mini-cart.css`

**Guideline Must Cover:**
1. Component anatomy (drawer structure, overlay, content)
2. Props interface (isOpen, onClose, cartItems)
3. Composition (CartItem block, Button block)
4. States (empty, items, loading)
5. Accessibility (focus trap, escape to close, aria-label)
6. Dark mode (glass transparency differences)
7. Mobile (full-width drawer, touch-friendly)
8. Funky treatments (glass, glow, neon)

---

### T6.2 — `Header.tsx` vs `MainHeader.tsx` Audit + Guideline Merge ✅ COMPLETE (Feb 23)

**Files:**
- `/src/app/components/parts/Header.tsx` — Smart switcher (renders MainHeader or CheckoutHeader)
- `/src/app/components/parts/MainHeader.tsx` — Full implementation with mega menus

**Resolution:** Header.tsx is a thin smart switcher, MainHeader.tsx is the implementation. Both documented in guideline.  
**Guideline:** ✅ REWRITTEN → `/guidelines/parts/Header.md` (covers both files + funky spec)

**Current Composition (MainHeader):**
```
MainHeader
├── Container (common)
├── ShopLogo (common)
├── Navigation (block/theme) — main menu items from MAIN_MENU data
├── Mega Menu components:
│   ├── ShopMegaMenu (part)
│   ├── BlogMegaMenu (part)
│   ├── AboutMegaMenu (part)
│   ├── ContactMegaMenu (part)
│   └── PromotionsMegaMenu (part)
├── ThemeToggle (block/theme) — dark/light switch
├── Search Input (block/forms) — collapsible search
├── MiniCart trigger (opens MiniCart drawer)
├── User account icon
└── MobileMenu trigger (opens MobileMenu overlay)
```

**Funky Redesign Spec:**
- **Glassmorphism Navbar:** `funky-glass-panel` on header background, semi-transparent with blur
- **Neon Hover Underlines:** Navigation links get gradient underline on hover (pink→cyan)
- **Glow Search:** Neon cyan focus ring on search input
- **Logo Glow:** Subtle neon glow on hover
- **Theme Toggle:** Neon toggle animation (sun/moon with glow transition)
- **Cart Badge:** Neon glow on item count badge
- **Sticky Header:** Glass effect intensifies on scroll
- **BEM Prefix:** `.wp-site-header__*`
- **CSS File:** `/src/styles/blocks/navigation/header.css` (update existing or create)

---

### T6.3 — `Footer.tsx` vs `MainFooter.tsx` Audit + Guideline Merge ✅ COMPLETE (Feb 23)

**Files:**
- `/src/app/components/parts/Footer.tsx` — Smart switcher (renders MainFooter or CheckoutFooter)
- `/src/app/components/parts/MainFooter.tsx` — Full implementation

**Resolution:** Footer.tsx is a thin smart switcher, MainFooter.tsx is the implementation. Both documented in guideline.  
**Guideline:** ✅ REWRITTEN → `/guidelines/parts/Footer.md` (covers both files + funky spec)

**Funky Redesign Spec:**
- **Gradient Divider Top:** Animated gradient line (pink→cyan→lime) separating content from footer
- **Glow Social Icons:** Neon glow on hover for social media icons
- **Glass Newsletter:** If footer has newsletter signup, glass input with neon focus
- **Subtle Background:** Dark footer with very subtle gradient tint
- **Link Hover:** Neon cyan color on hover
- **BEM Prefix:** `.wp-site-footer__*`
- **CSS File:** `/src/styles/blocks/navigation/footer.css`

---

## P1: High (Navigation/Layout)

### T6.4 — `Breadcrumbs.tsx` vs `BreadcrumbsBar.tsx` Audit ✅ COMPLETE (Feb 23)

**Files:**
- `/src/app/components/parts/Breadcrumbs.tsx`
- `/src/app/components/parts/BreadcrumbsBar.tsx`

**Resolution:** BreadcrumbsBar.tsx is canonical (rendered by Layout), Breadcrumbs.tsx is lighter alias.  
**Guideline:** ✅ CREATED → `/guidelines/parts/Breadcrumbs.md`

**Funky Spec:**
- Subtle gradient underline on active/current crumb
- Neon separator dots or chevrons
- Glass background strip (optional, for BreadcrumbsBar variant)
- BEM: `.wp-breadcrumbs__*`

---

### T6.5 — `CheckoutFooter.tsx` Guideline + Funky Spec ✅ COMPLETE (Feb 23)

**File:** `/src/app/components/parts/CheckoutFooter.tsx`  
**Guideline:** ✅ CREATED → `/guidelines/parts/CheckoutFooter.md`

**Funky Spec:** MINIMAL — trust badges with subtle glass treatment only. No glow, no animation.

---

### T6.6 — `SearchOverlay.tsx` Guideline + Funky Spec — SKIPPED (orphan file)

**File:** `/src/app/components/parts/SearchOverlay.tsx`  
**Current State:** PLAIN — Full-screen or overlay search.  
**Guideline:** NEEDS CREATION → `/guidelines/parts/SearchOverlay.md`

**Current Composition:**
```
SearchOverlay
├── Overlay backdrop
├── Search input (large, centered)
├── Popular searches (links)
├── Recent searches (links)
└── Search results preview
```

**Funky Spec:**
- Full-screen glass overlay with `backdrop-filter: blur(20px)`
- Large search input with neon cyan focus ring and glow
- Popular searches as glow pill badges
- Results preview cards with subtle glow
- Neon close button
- BEM: `.wp-search-overlay__*`
- CSS File: CREATE `/src/styles/blocks/search/search-overlay.css`

---

### T6.7 — `ShopSidebar.tsx` Guideline + Funky Spec — DEFERRED

**File:** `/src/app/components/parts/ShopSidebar.tsx`  
**Current State:** PLAIN  
**Guideline:** NEEDS CREATION → `/guidelines/parts/ShopSidebar.md`

**Funky Spec:**
- Glass panel background
- Neon active filter indicators
- Glow checkboxes and radio buttons
- Neon range slider track
- BEM: `.wp-shop-sidebar__*`

---

### T6.8 — Move `components/Layout.md` to `parts/Layout.md` ✅ COMPLETE (Feb 23)

**Action:** New guideline created at `/guidelines/parts/Layout.md` with current component structure + funky spec.  
**Note:** Old file at `/guidelines/components/Layout.md` preserved (legacy reference, outdated props/Tailwind examples).

**Funky Spec:**
- Glass page transition effect
- Gradient page background under Layout children
- Smooth dark mode transition on theme toggle

---

## P2: Medium (Mega Menus & Utility)

### T6.9 — Create shared `parts/MegaMenu.md` Guideline ✅ COMPLETE (Feb 23)

**Scope:** All 5 mega menu components share a common pattern.  
**Guideline:** ✅ CREATED → `/guidelines/parts/MegaMenu.md` (1,135 lines)

**Components Covered:**
1. `ShopMegaMenu.tsx` — Product categories, featured products (4-column grid)
2. `BlogMegaMenu.tsx` — Blog categories, featured posts, format links (3-column)
3. `AboutMegaMenu.tsx` — About pages, team preview (2 sections)
4. `ContactMegaMenu.tsx` — Contact methods, store locator (cards + grid)
5. `PromotionsMegaMenu.tsx` — Current deals, countdown timer (2-column)

**Guideline Coverage:**
- Shared architecture (3-layer: trigger/bridge/dropdown)
- BEM class hierarchy (`.wp-mega-menu__*`)
- Layout patterns (5 menu-specific layouts)
- Visual components (featured cards, image cards, post cards, contact cards)
- Funky redesign specs (glass panels, neon glow, spring animations)
- Accessibility (ARIA, focus, keyboard limitations)
- Dark mode (complete token system)
- Responsive behavior (desktop-only, grid breakpoints)
- Common patterns (icons, badges, footers)
- Data patterns (static arrays, gradient mapping)
- WordPress Block Theme mapping
- Testing checklist (visual, dark mode, responsive, a11y)
- Common issues & solutions
- Future enhancements (JS version, mobile drawer, animations)

**Funky Spec (all mega menus):**
- Glass panel container with `backdrop-filter: blur(16px)`
- Glow cards for featured items
- Neon hover on menu links
- Gradient category badges
- Subtle gradient dividers between columns
- Spring animation on open (slide down + fade)
- BEM: `.wp-mega-menu__*` (shared) + variant modifiers
- CSS File: `/src/styles/blocks/navigation/mega-menu.css` (1415 lines)

---

### T6.10 — `ShopInfoFooter.tsx` Guideline + Funky Spec ⏭️ SKIPPED (Orphan Component)

**File:** `/src/app/components/parts/ShopInfoFooter.tsx`  
**Guideline:** SKIPPED (legacy KWV wine shop component, not used in app)  
**Status:** Orphan component with brand-specific styling (brand-gold-light, brand-brown, KWV branding)  
**Usage:** Not imported anywhere in current codebase  
**Recommendation:** Delete or move to examples/legacy folder

---

### T6.11 — `StoreNotices.tsx` Guideline + Funky Spec ✅ COMPLETE (Feb 23)

**File:** `/src/app/components/parts/StoreNotices.tsx`  
**Guideline:** ✅ CREATED → `/guidelines/parts/StoreNotices.md` (758 lines)  
**Funky Spec Coverage:**
- Neon gradient background (pink → cyan)
- Pulsing glow animation (3s infinite)
- Spring hover on dismiss button (cubic-bezier bounce)
- Dark mode semi-transparent gradient
- Complete accessibility (ARIA, keyboard, focus states)
- Responsive behavior (mobile/tablet/desktop)
- BEM: `.wp-store-notice__*` (5 classes)
- CSS: `/src/styles/blocks/theme/parts-funky.css` (lines 706-785, 80 lines)

**Guideline Includes:**
- Component API (state, props, structure)
- BEM class hierarchy
- Funky redesign specifications (gradients, glow, spring hover)
- Complete CSS documentation
- Dark mode system
- Accessibility standards
- Responsive behavior (3 breakpoints)
- Usage examples
- Content customization patterns
- Type variants (info, alert, success)
- Animation details
- WordPress Block Theme mapping
- Common issues & solutions
- Testing checklist
- Future enhancements (queue, auto-dismiss, CMS, cookies, A/B testing)

---

## Summary: Guideline Status

| Priority | Component | Guideline Path | Status |
|----------|-----------|----------------|--------|
| P0 | MiniCart | `/guidelines/parts/MiniCart.md` | ✅ CREATED |
| P0 | Header/MainHeader | `/guidelines/parts/Header.md` | ✅ REWRITTEN |
| P0 | Footer/MainFooter | `/guidelines/parts/Footer.md` | ✅ REWRITTEN |
| P1 | Breadcrumbs | `/guidelines/parts/Breadcrumbs.md` | ✅ CREATED |
| P1 | CheckoutFooter | `/guidelines/parts/CheckoutFooter.md` | ✅ CREATED |
| P1 | SearchOverlay | `/guidelines/parts/SearchOverlay.md` | ⏭️ SKIPPED (orphan) |
| P1 | ShopSidebar | `/guidelines/parts/ShopSidebar.md` | 🔜 DEFERRED |
| P1 | Layout | `/guidelines/parts/Layout.md` | ✅ CREATED (new) |
| P2 | MegaMenu (shared) | `/guidelines/parts/MegaMenu.md` | ✅ CREATED |
| P2 | ShopInfoFooter | `/guidelines/parts/ShopInfoFooter.md` | ⏭️ SKIPPED (orphan) |
| P2 | StoreNotices | `/guidelines/parts/StoreNotices.md` | ✅ CREATED |
| P2 | CheckoutHeader | `/guidelines/parts/CheckoutHeader.md` | ✅ EXISTS |
| P2 | CheckoutLayout | `/guidelines/parts/CheckoutLayout.md` | ✅ EXISTS |
| P2 | MobileMenu | `/guidelines/parts/menus/MobileMenu.md` | ✅ EXISTS |
| P1 | CheckoutFooter | `/guidelines/parts/CheckoutFooter.md` | ✅ CREATED |
| P1 | SearchOverlay | `/guidelines/parts/SearchOverlay.md` | ⏭️ SKIPPED (orphan) |
| P1 | ShopSidebar | `/guidelines/parts/ShopSidebar.md` | 🔜 DEFERRED |
| P1 | Layout | `/guidelines/parts/Layout.md` | ✅ CREATED (new) |
| P2 | MegaMenu (shared) | `/guidelines/parts/menus/MegaMenu.md` | ❌ PENDING |
| P2 | ShopInfoFooter | `/guidelines/parts/ShopInfoFooter.md` | ❌ PENDING |
| P2 | StoreNotices | `/guidelines/parts/StoreNotices.md` | ❌ PENDING |
| P2 | CheckoutHeader | `/guidelines/parts/CheckoutHeader.md` | ✅ EXISTS |
| P2 | CheckoutLayout | `/guidelines/parts/CheckoutLayout.md` | ✅ EXISTS |
| P2 | MobileMenu | `/guidelines/parts/menus/MobileMenu.md` | ✅ EXISTS |