# MobileMenu Component

**Category**: Parts (Global Template Part)  
**Location**: `/src/app/components/parts/MobileMenu.tsx`  
**WordPress Mapping**: Mobile navigation overlay  
**Version**: 2.6 (Funky Redesign — Phase 2)

---

## Purpose

Full-screen mobile navigation overlay providing menu access, search, quick links, and contact info for screens below 1024px. Opened via hamburger button in MainHeader.

---

## Structure

```
MobileMenu (overlay)
├── Overlay backdrop (.wp-mobile-menu__overlay)
├── Panel (.wp-mobile-menu__panel)
│   ├── Header:
│   │   ├── Title: "Menu"
│   │   └── Close button (X icon)
│   ├── Search Form:
│   │   └── Search input + submit (→ /shop/search?q=)
│   ├── Quick Links Bar (gradient top border):
│   │   ├── Deals (Tag icon)
│   │   ├── New (Sparkles icon, implied)
│   │   ├── Gift Cards (Gift icon)
│   │   └── Sale (Percent icon)
│   ├── Navigation Sections (collapsible):
│   │   ├── Shop (expandable, ChevronDown)
│   │   │   └── Submenu links
│   │   ├── Blog (expandable)
│   │   │   └── Submenu links
│   │   ├── About (expandable)
│   │   │   └── Submenu links
│   │   └── Contact (expandable)
│   │       └── Submenu links
│   ├── Account Section:
│   │   ├── My Account (User icon)
│   │   └── Wishlist (Heart icon)
│   └── Contact Info:
│       ├── Email (Mail icon)
│       └── Phone (Phone icon)
```

---

## Props

```tsx
interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
```

---

## Internal State

```tsx
const [expandedSection, setExpandedSection] = useState<string | null>(null);
const [searchQuery, setSearchQuery] = useState('');
```

---

## Funky Treatments

| Element | Treatment | CSS Class |
|---------|-----------|-----------|
| Overlay bg | Gradient (180deg, background→surface) | via `parts-funky.css` |
| Quick links bar | Gradient top border (pink→cyan) | via `parts-funky.css` |
| Nav labels | Gradient text (pink→cyan, AA-safe fallback) | via `parts-funky.css` |
| Search focus | Neon outline + glow shadow | via `parts-funky.css` |
| Section dividers | Gradient border-image (cyan→transparent) | via `parts-funky.css` |
| Quick link cards | Neon border + glow on hover | via `parts-funky.css` |
| Nav buttons | Large semibold text, neon hover color | via `parts-funky.css` |
| Submenu links | Neon hover with cyan text-shadow in dark | via `parts-funky.css` |
| Contact links | Small muted text, neon hover | via `parts-funky.css` |
| Dark mode | `rgba(3,2,19,0.98)` overlay | `.dark` selectors |
| Focus rings | AA-compliant on all interactive elements | via `parts-funky.css` |
| Reduced motion | All transitions disabled | `prefers-reduced-motion` |

**CSS Files:**
- Base: `/src/styles/blocks/navigation/mobile-menu.css`
- Funky: `/src/styles/blocks/theme/parts-funky.css`

---

## Accessibility

- **Focus trap:** Focus contained within open menu
- **Escape key:** Closes menu
- **Close button:** `aria-label="Close menu"`
- **Expandable sections:** `aria-expanded` on toggle buttons
- **Route change:** Menu closes automatically via `onOpenChange`
- **Overlay:** Clicking overlay closes menu
- **Touch targets:** All buttons/links meet 44×44px minimum
- **Search form:** Proper form semantics with submit

---

## Dark Mode

Handled via CSS variables:
- Overlay uses very dark semi-transparent gradient
- Text shifts to light variants
- Quick link cards adapt border/background
- All text maintains WCAG AA contrast

---

## Responsive Behavior

| Breakpoint | Behavior |
|-----------|----------|
| Mobile (<1024px) | Full-screen overlay, hamburger trigger visible |
| Desktop (≥1024px) | Hidden — desktop navigation used instead |

---

## Related Parts

- `MainHeader` — Contains the hamburger trigger
- `Navigation` — Desktop equivalent of the navigation
- `MiniCart` — Cart access (separate from MobileMenu)
