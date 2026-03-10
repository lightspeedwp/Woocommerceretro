# MegaMenu (Shared Architecture Guideline)

**Component Type:** Template Part (Navigation — Shared Pattern)  
**Location:** `/src/app/components/parts/[Name]MegaMenu.tsx`  
**CSS:** `/src/styles/blocks/navigation/mega-menu.css`  
**Status:** ✅ Production (5 implementations)  
**Version:** 2.6 (Funky Redesign)

---

## Overview

MegaMenus are enhanced navigation dropdowns that provide rich, multi-column content with visual elements, used in the MainHeader desktop navigation. This guideline covers the **shared architecture pattern** used by all 5 mega menu implementations.

### Available MegaMenus

| Component | Path | Content Focus | Grid Layout |
|-----------|------|---------------|-------------|
| `ShopMegaMenu` | `/parts/ShopMegaMenu.tsx` | Products, categories, promos | 4-column |
| `BlogMegaMenu` | `/parts/BlogMegaMenu.tsx` | Post formats, topics, latest posts | 3-column |
| `AboutMegaMenu` | `/parts/AboutMegaMenu.tsx` | Company info, resources, featured pages | 2 sections |
| `ContactMegaMenu` | `/parts/ContactMegaMenu.tsx` | Contact methods, support links, hours | 3 cards + grid |
| `PromotionsMegaMenu` | `/parts/PromotionsMegaMenu.tsx` | Active deals, featured promotions | 2-column |

---

## Shared Architecture

### Component Structure

All MegaMenus follow this consistent pattern:

```tsx
export function [Name]MegaMenu() {
  return (
    <div className="wp-mega-menu">
      {/* 1. Trigger Link */}
      <Link 
        to="/link"
        className="wp-mega-menu__trigger"
        aria-expanded="false"
        aria-haspopup="true"
      >
        Menu Label
        <IconChevronDown size={14} className="wp-mega-menu__trigger-icon" />
      </Link>

      {/* 2. Hover Bridge (prevents menu closing) */}
      <div className="wp-mega-menu__hover-bridge" aria-hidden="true" />

      {/* 3. Dropdown Container */}
      <div className="wp-mega-menu__dropdown [variant-classes]">
        <div className="wp-mega-menu__content [content-variant]">
          {/* Menu-specific content */}
        </div>
      </div>
    </div>
  );
}
```

### Three-Layer Architecture

1. **Trigger Layer** — Top-level navigation link with chevron icon
2. **Bridge Layer** — Invisible hover zone preventing accidental menu close
3. **Dropdown Layer** — Full content panel with multi-column layout

---

## BEM Class Hierarchy

### Base Classes

```
wp-mega-menu                           /* Container (position: static) */
├── wp-mega-menu__trigger              /* Link with chevron */
│   └── wp-mega-menu__trigger-icon     /* ChevronDown icon (rotates on hover) */
├── wp-mega-menu__hover-bridge         /* Invisible gap bridge */
└── wp-mega-menu__dropdown             /* Positioned dropdown container */
    └── wp-mega-menu__content          /* Inner content panel (grid) */
```

### Dropdown Variant Modifiers

```css
/* Positioning variants */
.wp-mega-menu__dropdown--centered      /* Center-aligned (default for non-shop) */
.wp-mega-menu__dropdown--wide          /* 850px width (Promotions) */

/* Content variants (determines grid layout) */
.wp-mega-menu__content--shop           /* 4-column shop layout */
.wp-mega-menu__content--blog-wide      /* 3-column blog layout */
.wp-mega-menu__content--about          /* 2-column + featured cards */
.wp-mega-menu__content--contact        /* Single column with cards */
.wp-mega-menu__content--promotions     /* 2-column (links + deals) */
```

### Common Content Elements

```
/* Section headings */
.wp-mega-menu__section-title           /* Small caps heading */

/* Link lists */
.wp-mega-menu__list                    /* Unstyled list */
├── .wp-mega-menu__list-item           /* List item */
└── .wp-mega-menu__link                /* Link with hover state */
    ├── .wp-mega-menu__link-icon       /* Icon (optional) */
    ├── .wp-mega-menu__link-title      /* Link text */
    └── .wp-mega-menu__link-description /* Description text (optional) */

/* Featured cards */
.wp-mega-menu__featured-card           /* Visual card with gradient */
├── .wp-mega-menu__featured-background /* Gradient background */
└── .wp-mega-menu__featured-content    /* Text content overlay */
    ├── .wp-mega-menu__featured-title
    ├── .wp-mega-menu__featured-description
    └── .wp-mega-menu__featured-cta    /* "Shop now →" link */

/* Footer section */
.wp-mega-menu__footer                  /* Border-top section */
└── .wp-mega-menu__view-all            /* "View all →" link */
```

---

## Interaction Behavior

### CSS-Only Hover Reveal

**No JavaScript required** — Pure CSS `:hover` state management:

```css
/* Hidden by default */
.wp-mega-menu__dropdown {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(10px);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Revealed on container hover */
.wp-mega-menu:hover .wp-mega-menu__dropdown {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
}
```

### Hover Bridge Technique

The "hover bridge" is a **2rem tall invisible div** between the trigger and dropdown that prevents the menu from closing when the user moves their cursor from the trigger to the dropdown:

```tsx
<div className="wp-mega-menu__hover-bridge" aria-hidden="true" />
```

**Why it's needed:** Without the bridge, moving the cursor from the trigger link to the dropdown content would briefly leave the `.wp-mega-menu` container, causing the `:hover` state to break and the menu to close.

### Trigger Icon Animation

The chevron icon rotates 180° on hover:

```css
.wp-mega-menu:hover .wp-mega-menu__trigger-icon {
  transform: rotate(180deg);
}
```

---

## Layout Patterns

### Shop MegaMenu (4-Column Grid)

```tsx
<div className="wp-mega-menu__content wp-mega-menu__content--shop">
  {/* Column 1: Browse Links */}
  <div className="wp-mega-menu__categories">
    <h4 className="wp-mega-menu__section-title">Browse</h4>
    <ul className="wp-mega-menu__list">...</ul>
  </div>

  {/* Column 2: Categories */}
  <div className="wp-mega-menu__categories">
    <h4 className="wp-mega-menu__section-title">Categories</h4>
    <ul className="wp-mega-menu__list">...</ul>
  </div>

  {/* Column 3: Featured Categories (3 visual cards) */}
  <div className="wp-mega-menu__featured">
    {featuredCategories.map(...)}
  </div>

  {/* Column 4: Promo Highlight */}
  <div className="wp-mega-menu__promo-highlight">
    <Link className="wp-mega-menu__promo-card">...</Link>
  </div>
</div>
```

### Blog MegaMenu (3-Column Grid)

```tsx
<div className="wp-mega-menu__content wp-mega-menu__content--blog-wide">
  {/* Column 1: Formats */}
  <div className="wp-mega-menu__section">
    <h4 className="wp-mega-menu__section-title">Formats</h4>
    <div className="wp-mega-menu__format-list">
      {/* Icon + title + description links */}
    </div>
  </div>

  {/* Column 2: Topics */}
  <div className="wp-mega-menu__section">
    <h4 className="wp-mega-menu__section-title">Topics</h4>
    <div className="wp-mega-menu__format-list">...</div>
  </div>

  {/* Column 3: Latest Posts (3 cards) */}
  <div className="wp-mega-menu__section wp-mega-menu__section--posts">
    <h4 className="wp-mega-menu__section-title">Latest</h4>
    <div className="wp-mega-menu__posts-row">
      {/* Post cards with images */}
    </div>
    <div className="wp-mega-menu__footer">
      <Link className="wp-mega-menu__view-all">View all posts →</Link>
    </div>
  </div>
</div>
```

### About MegaMenu (2 Sections)

```tsx
<div className="wp-mega-menu__content wp-mega-menu__content--about">
  {/* Top: 2-column grid (About + Resources) */}
  <div className="wp-mega-menu__two-column-section">
    <div className="wp-mega-menu__column">
      <h4 className="wp-mega-menu__section-title">About Us</h4>
      <ul className="wp-mega-menu__list">
        {/* Links with icons + descriptions */}
      </ul>
    </div>
    <div className="wp-mega-menu__column">
      <h4 className="wp-mega-menu__section-title">Resources</h4>
      <ul className="wp-mega-menu__list">...</ul>
    </div>
  </div>

  {/* Bottom: Featured Cards (3 image cards) */}
  <div className="wp-mega-menu__featured-section">
    <h4 className="wp-mega-menu__section-title">Featured</h4>
    <div className="wp-mega-menu__featured-cards">
      {/* 3 image cards with gradient overlays */}
    </div>
  </div>
</div>
```

### Contact MegaMenu (Cards + Grid)

```tsx
<div className="wp-mega-menu__content wp-mega-menu__content--contact">
  {/* Header */}
  <div className="wp-mega-menu__header">
    <h4 className="wp-mega-menu__header-title">Get In Touch</h4>
    <p className="wp-mega-menu__header-description">...</p>
  </div>

  {/* 3 Contact Method Cards */}
  <div className="wp-mega-menu__contact-methods">
    {/* Large cards with icons, badges, descriptions */}
  </div>

  {/* Support Links Grid */}
  <div className="wp-mega-menu__section wp-mega-menu__section--bordered">
    <h4 className="wp-mega-menu__section-title">Quick Links</h4>
    <div className="wp-mega-menu__support-grid">...</div>
  </div>

  {/* Support Hours Banner */}
  <div className="wp-mega-menu__hours-banner">...</div>
</div>
```

### Promotions MegaMenu (2-Column)

```tsx
<div className="wp-mega-menu__content wp-mega-menu__content--promotions">
  {/* Column 1: Active Promotions List */}
  <div className="wp-mega-menu__column">
    <h4 className="wp-mega-menu__section-title">Active Promotions</h4>
    <ul className="wp-mega-menu__list">
      {/* Links with icons + badges */}
    </ul>
  </div>

  {/* Column 2: Featured Deals (3 image cards) */}
  <div className="wp-mega-menu__column">
    <h4 className="wp-mega-menu__section-title">Featured Deals</h4>
    <div className="wp-mega-menu__deals-grid">
      {/* 3 deal cards with gradients */}
    </div>
  </div>
</div>
```

---

## Visual Components

### Featured Cards (Gradient Backgrounds)

Used in Shop, About, and Promotions menus:

```tsx
<Link 
  to={link}
  className={`wp-mega-menu__featured-card wp-mega-menu__featured-card--${variant}`}
>
  <div className="wp-mega-menu__featured-background" />
  <div className="wp-mega-menu__featured-content">
    <h5 className="wp-mega-menu__featured-title">{title}</h5>
    <p className="wp-mega-menu__featured-description">{description}</p>
    <span className="wp-mega-menu__featured-cta">
      Shop now <span aria-hidden="true">→</span>
    </span>
  </div>
</Link>
```

**Gradient Variants:**

```css
/* Shop categories */
.wp-mega-menu__featured-card--clothing { /* Pink/Purple gradient */ }
.wp-mega-menu__featured-card--accessories { /* Blue gradient */ }
.wp-mega-menu__featured-card--home { /* Orange gradient */ }

/* Promotions deals */
.wp-mega-menu__deal-card--winter { /* Blue/Cyan gradient */ }
.wp-mega-menu__deal-card--bogo { /* Purple/Pink gradient */ }
.wp-mega-menu__deal-card--flash { /* Red/Orange gradient */ }
```

### Image Cards (Photo + Overlay)

Used in About and Blog menus:

```tsx
<Link to={link} className="wp-mega-menu__image-card wp-mega-menu__image-card--{variant}">
  <img 
    src={image} 
    alt={title} 
    className="wp-mega-menu__image-card-bg"
  />
  <div className="wp-mega-menu__image-card-overlay" />
  <div className="wp-mega-menu__image-card-content">
    <h5 className="wp-mega-menu__image-card-title">{title}</h5>
    <p className="wp-mega-menu__image-card-description">{description}</p>
  </div>
</Link>
```

**Hover Effects:**
- Image scales 1.1x
- Overlay opacity increases
- Content remains stable

### Post Cards (Blog Menu)

Small preview cards with images:

```tsx
<Link to={post.link} className="wp-mega-menu__post-card">
  <div className="wp-mega-menu__post-image">
    <img src={imageUrl} alt={title} className="wp-mega-menu__post-img" />
    {isVideo && (
      <div className="wp-mega-menu__post-format-badge">
        <IconVideo size={12} />
      </div>
    )}
  </div>
  <span className="wp-mega-menu__post-category">{format}</span>
  <h5 className="wp-mega-menu__post-title">{title}</h5>
</Link>
```

### Contact Cards (Contact Menu)

Large method cards with icons:

```tsx
<Link to={method.href} className="wp-mega-menu__contact-card wp-mega-menu__contact-card--{variant}">
  <div className="wp-mega-menu__contact-card-header">
    <div className="wp-mega-menu__contact-icon">{icon}</div>
    {badge && (
      <span className="wp-mega-menu__contact-badge">
        <span className="wp-mega-menu__contact-badge-dot"></span>
        {badge}
      </span>
    )}
  </div>
  <div className="wp-mega-menu__contact-card-body">
    <h5 className="wp-mega-menu__contact-card-title">{title}</h5>
    <p className="wp-mega-menu__contact-card-description">{description}</p>
    <p className="wp-mega-menu__contact-card-detail">{detail}</p>
  </div>
  <div className="wp-mega-menu__contact-card-cta">
    <span>Get Started</span>
    <span aria-hidden="true">→</span>
  </div>
</Link>
```

---

## Funky Redesign Specifications

### Glass Panel Background (All Menus)

```css
.wp-mega-menu__content {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .wp-mega-menu__content {
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Neon Interactive Elements

**Trigger Link Hover:**
```css
.wp-mega-menu__trigger:hover {
  color: var(--funky-interactive-color); /* Cyan glow */
}
```

**Link Hover Glow:**
```css
.wp-mega-menu__link:hover {
  color: var(--funky-interactive-color);
  background: var(--funky-interactive-bg);
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2); /* Subtle glow */
}
```

**Featured Card Hover:**
```css
.wp-mega-menu__featured-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); /* Neon glow */
}
```

### Gradient Accents

All featured cards and deal cards use vibrant gradients with neon edge glow on hover:

```css
.wp-mega-menu__featured-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 2px;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.wp-mega-menu__featured-card:hover::before {
  opacity: 0.6; /* Neon border glow */
}
```

### Spring Animation on Open

```css
.wp-mega-menu__dropdown {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); /* Spring easing */
}
```

**Animation sequence:**
1. Slide down (`translateY: 10px → 0`)
2. Fade in (`opacity: 0 → 1`)
3. Spring settle (slight overshoot feel from cubic-bezier)

---

## Accessibility

### ARIA Attributes

```tsx
<Link
  className="wp-mega-menu__trigger"
  aria-expanded="false"      // Should be "true" when menu is open (requires JS)
  aria-haspopup="true"       // Indicates submenu presence
>
  Menu Label
</Link>

<div 
  className="wp-mega-menu__hover-bridge" 
  aria-hidden="true"         // Hidden from screen readers
/>
```

**Note:** Current implementation uses CSS-only hover, so `aria-expanded` is static. For full a11y compliance, a JavaScript version would toggle this attribute.

### Keyboard Navigation

**Current limitations:**
- CSS-only `:hover` means **no keyboard access** to dropdown content
- Focus moves through triggers but cannot open menus

**Recommended enhancement:**
```tsx
const [isOpen, setIsOpen] = useState(false);

<Link
  onMouseEnter={() => setIsOpen(true)}
  onMouseLeave={() => setIsOpen(false)}
  onFocus={() => setIsOpen(true)}
  onBlur={(e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  }}
  aria-expanded={isOpen}
>
```

### Focus Management

**Focus-visible rings:**
```css
.wp-mega-menu__trigger:focus-visible {
  outline: 2px solid var(--funky-interactive-focus);
  outline-offset: 2px;
  border-radius: var(--wp--preset--border-radius--sm);
}
```

**Interactive elements:**
- All links have visible focus states
- Icon-only buttons need `aria-label`
- Card elements have focus indicators

---

## Dark Mode

### Color Tokens

All menus use semantic color tokens that adapt automatically:

```css
/* Light mode defaults */
--wp--preset--color--foreground: #1a1a1a;
--wp--preset--color--background: #ffffff;
--wp--preset--color--surface: #f9f9f9;
--wp--preset--color--border: #e5e7eb;
--wp--preset--color--muted-foreground: #6b7280;

/* Dark mode overrides (via [data-theme="dark"]) */
[data-theme="dark"] {
  --wp--preset--color--foreground: #f9fafb;
  --wp--preset--color--background: #0f0f0f;
  --wp--preset--color--surface: #1a1a1a;
  --wp--preset--color--border: #374151;
  --wp--preset--color--muted-foreground: #9ca3af;
}
```

### Funky Colors (Dark Mode)

```css
[data-theme="dark"] {
  --funky-interactive-color: #00ffff; /* Cyan */
  --funky-interactive-bg: rgba(0, 255, 255, 0.1);
  --funky-interactive-focus: #00ffff;
}
```

### Glass Effect Differences

**Light mode:** More transparent, lighter blur
```css
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(16px);
```

**Dark mode:** More opaque, heavier blur
```css
background: rgba(26, 26, 26, 0.95);
backdrop-filter: blur(20px);
```

---

## Responsive Behavior

### Desktop-Only Component

MegaMenus are **hidden on mobile** (< 1024px):

```css
@media (max-width: 1023px) {
  .wp-mega-menu {
    display: none;
  }
}
```

**Mobile navigation uses `MobileMenu.tsx`** instead (full-screen overlay).

### Grid Breakpoints

**Within desktop view (> 1024px):**

```css
/* Shop: 4-column → 2-column */
@media (max-width: 1280px) {
  .wp-mega-menu__content--shop {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* About: 2-column → 1-column */
@media (max-width: 1180px) {
  .wp-mega-menu__two-column-section {
    grid-template-columns: 1fr;
  }
}

/* Featured cards: 3-column → 2-column → 1-column */
@media (max-width: 900px) {
  .wp-mega-menu__featured-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .wp-mega-menu__featured-cards {
    grid-template-columns: 1fr;
  }
}
```

---

## Performance Considerations

### CSS-Only Interaction

**Pros:**
- Zero JavaScript overhead
- Instant response to hover
- No event listener memory

**Cons:**
- No keyboard access
- No mobile support
- Limited animation control

### Image Optimization

Featured cards and image cards use Unsplash URLs with optimization params:

```tsx
image: "https://images.unsplash.com/photo-...?q=80&w=600&auto=format&fit=crop"
```

**Optimization flags:**
- `q=80` — 80% quality (good balance)
- `w=600` — 600px width (sufficient for cards)
- `auto=format` — WebP/AVIF when supported
- `fit=crop` — Cropped to aspect ratio

### Layout Shift Prevention

**Fixed aspect ratios on cards:**
```css
.wp-mega-menu__image-card {
  aspect-ratio: 1.3333; /* 4:3 ratio */
}

.wp-mega-menu__post-image {
  aspect-ratio: 16 / 9;
}
```

**Fixed heights on featured cards:**
```css
.wp-mega-menu__featured-card {
  height: 7rem; /* 112px - prevents shift */
}
```

---

## Common Patterns

### Icon + Title + Description Link

```tsx
<Link to={link.href} className="wp-mega-menu__link wp-mega-menu__link--with-description">
  <span className="wp-mega-menu__link-icon">
    {link.icon}
  </span>
  <div className="wp-mega-menu__link-content">
    <div className="wp-mega-menu__link-title">{link.title}</div>
    <div className="wp-mega-menu__link-description">{link.description}</div>
  </div>
</Link>
```

### Badge Pattern (Hot, New, Sale)

```tsx
<Link className="wp-mega-menu__link">
  <span>{title}</span>
  {badge && (
    <span className={`wp-mega-menu__badge wp-mega-menu__badge--${variant}`}>
      {badge}
    </span>
  )}
</Link>
```

**Badge Variants:**
```css
.wp-mega-menu__badge--hot        /* Red background */
.wp-mega-menu__badge--new        /* Purple background */
.wp-mega-menu__badge--discount   /* Orange background */
.wp-mega-menu__badge--clearance  /* Yellow background */
```

### View All Footer Link

```tsx
<div className="wp-mega-menu__footer">
  <Link to="/all" className="wp-mega-menu__view-all">
    View all {category}
    <ArrowRight size={14} />
  </Link>
</div>
```

**Hover animation:** Arrow gap increases from 0.5rem → 0.75rem

---

## Data Patterns

### Static Data Arrays

All menus use static data arrays defined in the component file:

```tsx
const categoryLinks = [
  { title: "Electronics", href: "/shop/category/electronics" },
  { title: "Clothing", href: "/shop/category/clothing" },
  // ...
];

const featuredCategories = [
  {
    title: "Clothing",
    description: "Discover the latest trends",
    href: "/shop/category/clothing",
    gradient: "clothing"
  },
  // ...
];
```

**Exception:** BlogMegaMenu imports dynamic data:
```tsx
import { posts, mediaItems } from '../../data/posts';

const recentPosts = posts.slice(0, 3);
```

### Gradient Variant Mapping

Featured cards use string-based gradient variants:

```tsx
const categories = [
  { title: "Clothing", gradient: "clothing" }, // → .wp-mega-menu__featured-card--clothing
  { title: "Accessories", gradient: "accessories" }, // → .wp-mega-menu__featured-card--accessories
  { title: "Home", gradient: "home" }, // → .wp-mega-menu__featured-card--home
];
```

CSS classes are generated dynamically:
```tsx
className={`wp-mega-menu__featured-card wp-mega-menu__featured-card--${category.gradient}`}
```

---

## WordPress Block Theme Mapping

### Block Equivalents

| MegaMenu Component | WordPress Block | Conversion Notes |
|--------------------|-----------------|------------------|
| Entire component | Navigation Submenu | Multi-column submenu with images |
| `__trigger` | Navigation Link | Top-level menu item |
| `__dropdown` | Group Block | Container for submenu content |
| `__content` | Columns Block | Multi-column layout |
| `__list` | List Block | Navigation item list |
| `__featured-card` | Cover Block | Image + gradient overlay + text |
| `__image-card` | Media & Text | Image with text overlay |

### Template Part Export

When converting to WordPress, each MegaMenu becomes a reusable template part:

```
/wp-content/themes/funky-woocommerce/parts/navigation/
├── shop-megamenu.html
├── blog-megamenu.html
├── about-megamenu.html
├── contact-megamenu.html
└── promotions-megamenu.html
```

Referenced in header template:
```html
<!-- wp:navigation {"ref":shop-megamenu} /-->
```

---

## Testing Checklist

### Visual Testing
- [ ] Menu opens on hover (trigger link)
- [ ] Menu stays open when cursor moves to dropdown
- [ ] Menu closes when cursor leaves container
- [ ] Hover bridge prevents accidental close
- [ ] Chevron icon rotates on hover
- [ ] All links have hover states
- [ ] Featured cards scale on hover
- [ ] Images load correctly
- [ ] Gradients display correctly

### Dark Mode Testing
- [ ] Background has glass effect
- [ ] Text is readable (proper contrast)
- [ ] Borders are visible
- [ ] Icons are visible
- [ ] Hover states work
- [ ] Gradients adapt to dark theme
- [ ] Neon glow effects visible

### Responsive Testing
- [ ] Hidden on mobile (< 1024px)
- [ ] Grid adapts at breakpoints (desktop only)
- [ ] No horizontal scroll
- [ ] Content doesn't overflow dropdown
- [ ] Images don't cause layout shift

### Accessibility Testing
- [ ] Focus visible on trigger link
- [ ] Focus visible on all links within dropdown
- [ ] `aria-haspopup` present on trigger
- [ ] `aria-expanded` reflects state (if using JS)
- [ ] Hover bridge hidden from screen readers
- [ ] All images have alt text
- [ ] Icon-only buttons have aria-label

---

## Common Issues & Solutions

### Issue: Menu closes when moving cursor to dropdown

**Cause:** No hover bridge, or bridge height too small

**Solution:** Ensure bridge is 2rem tall:
```css
.wp-mega-menu__hover-bridge {
  height: 2rem; /* Not 0.5rem or 1rem */
}
```

### Issue: Dropdown not centered

**Cause:** Missing `left: 50%` and `translateX(-50%)`

**Solution:**
```css
.wp-mega-menu__dropdown--centered {
  left: 50%;
  transform: translateX(-50%) translateY(10px);
}
```

### Issue: Images causing layout shift

**Cause:** No aspect-ratio or fixed height

**Solution:** Add aspect-ratio:
```css
.wp-mega-menu__image-card {
  aspect-ratio: 1.3333;
}
```

### Issue: Gradient not visible in dark mode

**Cause:** Dark background competing with gradient

**Solution:** Increase gradient opacity:
```css
[data-theme="dark"] .wp-mega-menu__featured-background {
  opacity: 0.9; /* Stronger visibility */
}
```

### Issue: Text unreadable on gradient backgrounds

**Cause:** Insufficient contrast between text and gradient

**Solution:** Use white text with slight shadow:
```css
.wp-mega-menu__featured-title {
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
```

---

## Future Enhancements

### JavaScript-Powered Version

For full a11y compliance:

```tsx
const [isOpen, setIsOpen] = useState(false);
const menuRef = useRef<HTMLDivElement>(null);

// Click outside to close
useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isOpen]);

// Keyboard support
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') setIsOpen(false);
  if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen);
};
```

### Mobile Drawer Variant

Transform mega menu into mobile drawer:

```tsx
{isMobile ? (
  <Sheet open={isOpen} onOpenChange={setIsOpen}>
    <SheetTrigger>{label}</SheetTrigger>
    <SheetContent side="bottom">
      {/* Mega menu content in drawer */}
    </SheetContent>
  </Sheet>
) : (
  <div className="wp-mega-menu">
    {/* Desktop mega menu */}
  </div>
)}
```

### Animation Library Integration

Use Framer Motion for spring animations:

```tsx
import { motion, AnimatePresence } from 'motion/react';

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
    >
      {/* Dropdown content */}
    </motion.div>
  )}
</AnimatePresence>
```

### Analytics Integration

Track menu interactions:

```tsx
const handleMenuOpen = () => {
  // Google Analytics
  window.gtag?.('event', 'mega_menu_open', {
    menu_name: 'shop',
    trigger_location: 'header'
  });
};

const handleLinkClick = (linkTitle: string) => {
  window.gtag?.('event', 'mega_menu_link_click', {
    menu_name: 'shop',
    link_title: linkTitle
  });
};
```

---

## Related Components

- **MainHeader** (`/src/app/components/parts/MainHeader.tsx`) — Parent component that renders all MegaMenus
- **Navigation** (`/src/app/components/blocks/theme/Navigation.tsx`) — Renders menu structure and imports MegaMenus
- **MobileMenu** (`/src/app/components/parts/MobileMenu.tsx`) — Mobile alternative (full-screen overlay)

---

## References

- **CSS File:** `/src/styles/blocks/navigation/mega-menu.css` (1415 lines)
- **Component Files:**
  - `/src/app/components/parts/ShopMegaMenu.tsx`
  - `/src/app/components/parts/BlogMegaMenu.tsx`
  - `/src/app/components/parts/AboutMegaMenu.tsx`
  - `/src/app/components/parts/ContactMegaMenu.tsx`
  - `/src/app/components/parts/PromotionsMegaMenu.tsx`
- **Data Files:**
  - `/src/app/data/posts.ts` (BlogMegaMenu data source)
- **Design System:** `/guidelines/design-tokens/Funky-Woocommerce-Design-System.md`
- **Header Guideline:** `/guidelines/parts/Header.md`

---

**Status:** ✅ Production-ready (CSS-only hover implementation)  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign)
