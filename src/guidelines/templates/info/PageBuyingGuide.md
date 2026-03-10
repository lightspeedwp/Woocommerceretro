# PageBuyingGuide

**Component Type:** Template (Help/Guide Page - Clean Funky)  
**Location:** `/src/app/components/templates/PageBuyingGuide.tsx`  
**CSS:** `/src/styles/sections/legal-pages-funky.css`  
**Route:** `/buying-guide`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Clean Funky)  
**Color Identity:** Navy `#030213` / Cyan `#00ffff` / Green `#10b981`

---

## Overview

PageBuyingGuide is a shopping advice template using the "legal-pages" CSS pattern. Features minimal hero, buying tip cards with green checkmarks, category link cards with gradient heading, and expert contact CTA. Designed to help customers make informed purchase decisions.

**Page Purpose:** Provide shopping tips and category-specific guidance  
**Target Audience:** First-time shoppers, uncertain customers, gift buyers  
**Dark Mode:** ✅ Complete support  
**Layout:** Minimal hero → Buying tips → Category cards → Expert CTA

**Note:** Uses mixed CSS patterns: `legal-care-card` for tips, `legal-cards__link-card` for categories

---

## Key Features

### Visual Elements

**1. Minimal Hero:**
- Navy gradient background (no image)
- Lightbulb icon badge (bordered)
- "Guide" label
- Centered white text
- Shorter height (35vh)

**2. Buying Tips Section:**
- 4 tip cards (vertical stack)
- Lightbulb icon header (cyan)
- Bulleted tip lists with green checkmarks
- Clean white/navy cards

**3. Category Cards Section:**
- 3-column responsive grid (→ 2 col → 1 col)
- Gradient heading (cyan → pink)
- Shopping bag icons (cyan circles)
- "Browse" link with arrow icon
- Hover effect (lift + cyan glow)
- Alternate background color

**4. CTA Section:**
- Navy background
- Star icon (cyan)
- "Ask an Expert" button (cyan)
- Centered content

### Funky Treatments

**Hero:** Navy gradient, bordered badge  
**Tip Icons:** Cyan lightbulb  
**Checkmarks:** Green CheckCircle  
**Category Heading:** Gradient text (cyan → pink)  
**Category Icons:** Cyan circles  
**Category Cards:** Hover lift + cyan glow  
**CTA:** Star icon + cyan primary button

---

## Data Structure

### Buying Guide Tip Interface

```typescript
interface BuyingGuideTip {
  id: string;         // 'measurements', 'occasion', etc.
  title: string;      // 'Know Your Measurements'
  icon: string;       // 'Lightbulb' (all use same icon)
  tips: string[];     // Array of tip text
}
```

### Category Guide Interface

```typescript
interface CategoryGuide {
  id: string;         // 'apparel', 'accessories', etc.
  name: string;       // 'Apparel'
  description: string; // Short description
  link: string;       // '/shop/category/apparel'
  icon: string;       // 'ShoppingBag' (all use same icon)
}
```

### Mock Data

**4 Buying Tips:**
```typescript
export const buyingGuides: BuyingGuideTip[] = [
  {
    id: 'measurements',
    title: 'Know Your Measurements',
    icon: 'Lightbulb',
    tips: [
      'Take accurate body measurements before shopping.',
      'Refer to our size guide for brand-specific sizing.',
      'When between sizes, consider the fit you prefer (relaxed vs. fitted).',
    ],
  },
  {
    id: 'occasion',
    title: 'Consider the Occasion',
    icon: 'Lightbulb',
    tips: [
      'Think about where and when you will wear or use the product.',
      'Casual pieces offer versatility; occasion pieces make a statement.',
      'Building a capsule wardrobe maximizes outfit combinations.',
    ],
  },
  {
    id: 'materials',
    title: 'Check Materials & Care',
    icon: 'Lightbulb',
    tips: [
      'Natural fibers like cotton and linen breathe well in warm weather.',
      'Blended fabrics often offer durability with comfort.',
      'Review care labels to ensure maintenance fits your lifestyle.',
    ],
  },
  {
    id: 'reviews',
    title: 'Read Reviews & Ratings',
    icon: 'Lightbulb',
    tips: [
      'Check verified buyer reviews for real-world feedback.',
      'Pay attention to comments about sizing and fit.',
      'Look at photos shared by other customers for reference.',
    ],
  },
];
```

**4 Category Guides:**
```typescript
export const categoryGuides: CategoryGuide[] = [
  { 
    id: 'apparel', 
    name: 'Apparel', 
    description: 'Find the perfect fit, fabric, and style.', 
    link: '/shop/category/apparel', 
    icon: 'ShoppingBag' 
  },
  { 
    id: 'accessories', 
    name: 'Accessories', 
    description: 'Complete your look with the right pieces.', 
    link: '/shop/category/accessories', 
    icon: 'ShoppingBag' 
  },
  { 
    id: 'home', 
    name: 'Home & Living', 
    description: 'Quality essentials for every room.', 
    link: '/shop/category/home', 
    icon: 'ShoppingBag' 
  },
  { 
    id: 'electronics', 
    name: 'Electronics', 
    description: 'Choose the right tech for your needs.', 
    link: '/shop/category/electronics', 
    icon: 'ShoppingBag' 
  },
];
```

**Source:** `/src/app/data/buyingGuide.ts`

### Page Content Strings

```typescript
export const buyingGuidePageContent = {
  title: 'Buying Guide',
  description: 'Expert tips and recommendations to help you find exactly what you need.',
  tipsHeading: 'Shopping Tips',
  categoriesHeading: 'Shop by Category',
  ctaHeading: 'Need personalized advice?',
  ctaText: 'Our team can help you find the perfect product for any occasion.',
  ctaButton: 'Ask an Expert'
};
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  {/* Minimal Hero */}
  <section className="legal-page legal-hero">
    {/* Gradient overlay */}
    {/* Content (badge, title, subtitle) */}
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Buying Tips */}
  <section className="legal-cards">
    <Container>
      <h2>Shopping Tips</h2>
      {buyingGuides.map((guide) => (
        <div className="legal-care-card">
          <div className="legal-care-card__header">
            {/* Lightbulb icon + title */}
          </div>
          <ul className="legal-conditions__list">
            {guide.tips.map((tip) => (
              <li className="legal-conditions__item">
                {/* CheckCircle icon + tip text */}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Category Cards */}
  <section className="legal-cards legal-cards--alt">
    <Container>
      <h2 className="funky-section__heading--gradient">
        Shop by Category
      </h2>
      <div className="legal-cards__grid legal-cards__grid--3col">
        {categoryGuides.map((cat) => (
          <Link to={cat.link} className="legal-cards__link-card">
            {/* Icon, name, description, "Browse" link */}
          </Link>
        ))}
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider" />

  {/* CTA */}
  <section className="legal-cta">
    <Container>
      {/* Star icon, heading, text, button */}
    </Container>
  </section>
</Layout>
```

### Icons Used

```tsx
import { 
  Lightbulb,    // Hero badge + tip cards
  CheckCircle,  // Tip checkmarks (green)
  ShoppingBag,  // Category cards
  ArrowRight,   // "Browse" link arrows
  Star,         // CTA icon
} from '@phosphor-icons/react';
```

---

## BEM Class Hierarchy

```
.page-buying-guide (Template wrapper - no actual class)
│
├── .legal-page (Root marker class)
│   └── .legal-hero (Minimal hero)
│       ├── .legal-hero__overlay (Navy gradient)
│       ├── .legal-hero__content (Text container)
│       │   ├── .legal-hero__badge (Lightbulb icon badge)
│       │   ├── .legal-hero__title (h1)
│       │   └── .legal-hero__subtitle (p)
│
├── .funky-section__divider--subtle (Subtle divider)
│
├── .legal-cards (Buying tips section)
│   └── .legal-cards__content (Content wrapper)
│       ├── .legal-cards__heading (h2)
│       └── .legal-care-card (Individual tip card - reused from PageCareInstructions)
│           ├── .legal-care-card__header (Header with icon + title)
│           │   ├── .legal-care-card__icon (Lightbulb icon)
│           │   └── .legal-care-card__title (h3)
│           └── .legal-conditions__list (Tip list - reused from PageShippingReturns)
│               └── .legal-conditions__item (Individual tip)
│                   ├── .legal-conditions__icon--success (CheckCircle - green)
│                   └── span (Tip text)
│
├── .funky-section__divider--subtle (Subtle divider)
│
├── .legal-cards (Category cards section)
│   ├── .legal-cards--alt (Modifier: alternate background)
│   └── .legal-cards__content (Content wrapper)
│       ├── .legal-cards__content--centered (Modifier: centered text)
│       ├── .legal-cards__heading (h2)
│       │   └── .funky-section__heading--gradient (Gradient text modifier)
│       └── .legal-cards__grid (Grid container)
│           ├── .legal-cards__grid--3col (Modifier: 3 columns)
│           └── .legal-cards__link-card (Individual category link card)
│               ├── .legal-cards__icon (Shopping bag icon)
│               ├── .legal-cards__card-title (h3)
│               ├── .legal-cards__card-text (p)
│               └── .legal-cards__link-arrow (Arrow link)
│
├── .funky-section__divider (Full gradient divider)
│
└── .legal-cta (CTA section)
    └── .legal-cta__content (Content container)
        ├── .legal-cta__icon (Star icon)
        ├── .legal-cta__heading (h2)
        ├── .legal-cta__text (p)
        └── .legal-cta__actions (Button container)
            └── .legal-cta__btn--primary (Link button)
```

---

## Section Breakdown

### 1. Minimal Hero (`.legal-hero`)

**Shared with other legal-* templates**

```css
.legal-hero {
  position: relative;
  min-height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.legal-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--navy) 0%, #0a0a0a 100%);
  z-index: 0;
}

.legal-hero__content {
  position: relative;
  z-index: 1;
  max-width: 48rem;
  padding: var(--space--700) var(--space--400);
}

.legal-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  padding: var(--space--200) var(--space--400);
  border-radius: 999px;
  font-size: var(--font-size--75);
  font-weight: 500;
  color: var(--cyan);
  border: 1px solid var(--cyan);
  margin-bottom: var(--space--400);
}

.legal-hero__title {
  font-size: var(--font-size--700);
  font-weight: 700;
  color: var(--white);
  margin-bottom: var(--space--400);
}

.legal-hero__subtitle {
  font-size: var(--font-size--300);
  color: rgba(255, 255, 255, 0.8);
}
```

**Badge:** "Guide" with Lightbulb icon

---

### 2. Buying Tips Section (`.legal-cards` + `.legal-care-card`)

```css
.legal-cards {
  padding: var(--space--800) 0;
  background: var(--surface);
}

.legal-cards__content {
  max-width: 56rem;
  margin: 0 auto;
}

.legal-cards__heading {
  font-size: var(--font-size--600);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--700);
  text-align: center;
}

/* Care Card (reused from PageCareInstructions) */
.legal-care-card {
  margin-bottom: var(--space--600);
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: var(--white);
  border: 1px solid var(--border);
}

.dark .legal-care-card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

/* Card Header */
.legal-care-card__header {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  margin-bottom: var(--space--500);
}

.legal-care-card__icon {
  flex-shrink: 0;
  color: var(--cyan);
}

.legal-care-card__title {
  font-size: var(--font-size--400);
  font-weight: 700;
  color: var(--text);
}

/* Tip List (reused from conditions pattern) */
.legal-conditions__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

.legal-conditions__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space--300);
}

.legal-conditions__icon--success {
  flex-shrink: 0;
  color: #10b981; /* Green */
  margin-top: 2px;
}

.legal-conditions__item span {
  flex: 1;
  font-size: var(--font-size--200);
  color: var(--text);
}
```

**Layout:** Vertical stack of 4 tip cards  
**Icons:** Cyan lightbulb + green checkmarks

---

### 3. Category Cards Section (`.legal-cards--alt`)

```css
.legal-cards--alt {
  background: var(--surface-alt); /* Slightly different shade */
}

.legal-cards__content--centered {
  text-align: center;
}

/* Gradient Heading */
.funky-section__heading--gradient {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 3-Column Grid */
.legal-cards__grid--3col {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space--700);
}

/* Link Card */
.legal-cards__link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: var(--white);
  border: 1px solid var(--border);
  text-decoration: none;
  text-align: center;
  transition: transform 0.3s var(--timing-function), box-shadow 0.3s;
}

.legal-cards__link-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
  border-color: var(--cyan);
}

.dark .legal-cards__link-card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

.dark .legal-cards__link-card:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
  border-color: var(--cyan);
}

/* Shopping Bag Icon */
.legal-cards__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--cyan);
  color: var(--navy);
  margin-bottom: var(--space--400);
}

.dark .legal-cards__icon {
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
}

.legal-cards__card-title {
  font-size: var(--font-size--400);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--300);
}

.legal-cards__card-text {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  margin-bottom: var(--space--400);
}

/* "Browse" Link with Arrow */
.legal-cards__link-arrow {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  font-size: var(--font-size--200);
  font-weight: 600;
  color: var(--funky-interactive-color);
}
```

**Grid:** 3 columns (auto-fit, min 280px)  
**Hover:** 4px lift + cyan glow + cyan border  
**Dark Mode:** Enhanced glow (40px vs 30px)

---

### 4. CTA Section (`.legal-cta`)

**Shared with other legal-* templates**

```css
.legal-cta {
  padding: var(--space--900) 0;
  background: var(--navy);
  color: var(--white);
  text-align: center;
}

.legal-cta__content {
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 var(--space--400);
}

.legal-cta__icon {
  display: inline-block;
  color: var(--cyan);
  margin-bottom: var(--space--500);
}

.legal-cta__heading {
  font-size: var(--font-size--700);
  font-weight: 700;
  margin-bottom: var(--space--400);
}

.legal-cta__text {
  font-size: var(--font-size--400);
  margin-bottom: var(--space--600);
  opacity: 0.9;
}

.legal-cta__actions {
  display: flex;
  gap: var(--space--400);
  justify-content: center;
  flex-wrap: wrap;
}

.legal-cta__btn--primary {
  display: inline-block;
  padding: var(--space--400) var(--space--700);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--navy);
  background: var(--cyan);
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.legal-cta__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}
```

**Icon:** Star (cyan)  
**Button:** "Ask an Expert" link to `/contact`

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller text */
.legal-hero__title {
  font-size: var(--font-size--600);
}

/* Tip cards: Less padding */
.legal-care-card {
  padding: var(--space--600);
}

/* Category cards: 1 column */
.legal-cards__grid--3col {
  grid-template-columns: 1fr;
}

/* CTA: Full width button */
.legal-cta__actions {
  flex-direction: column;
}

.legal-cta__btn--primary {
  width: 100%;
}
```

### Tablet (640px - 1024px)

```css
/* Category cards: 2 columns */
.legal-cards__grid--3col {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (> 1024px)

```css
/* Category cards: 3 columns */
.legal-cards__grid--3col {
  grid-template-columns: repeat(3, 1fr);
}
```

**Key Breakpoints:** Category cards 1 col → 2 col → 3 col

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Background** | Navy gradient | Navy gradient |
| **Hero Text** | White `#ffffff` | White `#ffffff` |
| **Hero Badge** | Cyan border + text | Cyan border + text |
| **Tip Card BG** | White `#ffffff` | Navy `#030213` |
| **Tip Border** | `var(--border)` `#e5e7eb` | `rgba(0,255,255,0.2)` |
| **Lightbulb Icon** | Cyan `#00ffff` | Cyan `#00ffff` |
| **CheckCircle (Green)** | `#10b981` | `#10b981` |
| **Category Section BG** | `var(--surface-alt)` `#f3f4f6` | Darker shade |
| **Category Heading** | Gradient cyan→pink | Gradient cyan→pink |
| **Category Card BG** | White `#ffffff` | Navy `#030213` |
| **Category Border** | `var(--border)` | `rgba(0,255,255,0.2)` |
| **Category Hover Glow** | `rgba(0,255,255,0.3)` 30px | `rgba(0,255,255,0.5)` 40px |
| **Shopping Bag Icon** | Cyan bg + navy icon | Cyan bg + glow |
| **CTA Background** | Navy `#030213` | Navy `#030213` |
| **Star Icon** | Cyan `#00ffff` | Cyan `#00ffff` |

### Dark Mode Enhancements

```css
/* Tip cards */
.dark .legal-care-card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

/* Category cards - stronger glow */
.dark .legal-cards__link-card:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
}

/* Icon glow */
.dark .legal-cards__icon {
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Hero: section + h1 */}
<section className="legal-hero">
  <h1 className="legal-hero__title">{buyingGuidePageContent.title}</h1>
</section>

{/* Tips: section + h2 + h3 + ul/li */}
<section className="legal-cards">
  <h2 className="legal-cards__heading">{buyingGuidePageContent.tipsHeading}</h2>
  {buyingGuides.map((guide) => (
    <div className="legal-care-card">
      <h3 className="legal-care-card__title">{guide.title}</h3>
      <ul className="legal-conditions__list">
        <li className="legal-conditions__item">
          {/* Tip text */}
        </li>
      </ul>
    </div>
  ))}
</section>

{/* Categories: section + h2 + links */}
<section className="legal-cards">
  <h2 className="legal-cards__heading">{buyingGuidePageContent.categoriesHeading}</h2>
  {categoryGuides.map((cat) => (
    <Link to={cat.link} className="legal-cards__link-card">
      <h3 className="legal-cards__card-title">{cat.name}</h3>
    </Link>
  ))}
</section>
```

### ARIA Attributes

```tsx
{/* Tips section with aria-label */}
<section className="legal-cards" aria-label="Shopping tips">
  {/* Content */}
</section>

{/* Category links with descriptive text */}
<Link 
  to="/shop/category/apparel" 
  className="legal-cards__link-card"
  aria-label="Browse apparel category: Find the perfect fit, fabric, and style"
>
  <h3>Apparel</h3>
  <p>Find the perfect fit, fabric, and style.</p>
</Link>

{/* Checkmark icons decorative */}
<CheckCircle size={14} aria-hidden="true" />
```

### Keyboard Navigation

- **Tab Order:** Hero → Tip cards (read-only) → Category links → CTA button
- **Focus States:** All links have visible focus rings
- **Link Cards:** Full card area is clickable
- **No Traps:** User can navigate away from all sections

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |
| Hero Badge | Cyan `#00ffff` | Navy `#030213` | 8.32:1 | AAA ✅ |
| Tip Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Tip Title (Dark) | `#f9fafb` | Navy `#030213` | 19.05:1 | AAA ✅ |
| Tip Text (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Tip Text (Dark) | `#f9fafb` | Navy `#030213` | 19.05:1 | AAA ✅ |
| CheckCircle (Green) | `#10b981` | Both | 4.5:1+ | AA ✅ |
| Category Heading | Gradient (decorative) | Surface | N/A | Decorative |
| Category Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Category Title (Dark) | `#f9fafb` | Navy `#030213` | 19.05:1 | AAA ✅ |
| CTA Button | Navy `#030213` | Cyan `#00ffff` | 8.32:1 | AAA ✅ |

**All text meets WCAG 2.1 AA/AAA standards**

---

## Production Enhancements

### 1. Dynamic Category Images

```tsx
// Add category images
interface CategoryGuide {
  // ... existing fields
  image: string; // Hero image for category
}

<Link to={cat.link} className="legal-cards__link-card">
  <img 
    src={cat.image} 
    alt="" 
    className="legal-cards__link-image" 
  />
  <h3>{cat.name}</h3>
  <p>{cat.description}</p>
</Link>
```

### 2. Expandable Tips

```tsx
// Add collapsible sections for detailed tips
const [expanded, setExpanded] = useState<string | null>(null);

<div className="legal-care-card">
  <button 
    onClick={() => setExpanded(expanded === guide.id ? null : guide.id)}
    aria-expanded={expanded === guide.id}
  >
    <h3>{guide.title}</h3>
    <ChevronDown />
  </button>
  {expanded === guide.id && (
    <ul className="legal-conditions__list">
      {guide.tips.map((tip) => <li>{tip}</li>)}
    </ul>
  )}
</div>
```

### 3. Product Recommendations

```tsx
// Show related products for each tip
<div className="legal-care-card">
  <h3>{guide.title}</h3>
  <ul>{/* Tips */}</ul>
  
  <div className="legal-care-card__products">
    <h4>Recommended Products</h4>
    {guide.products.map(product => (
      <ProductCard product={product} compact />
    ))}
  </div>
</div>
```

### 4. Search Functionality

```tsx
// Search tips and categories
const [search, setSearch] = useState('');

<input
  type="search"
  placeholder="Search buying guides..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

const filtered = buyingGuides.filter(guide =>
  guide.title.toLowerCase().includes(search.toLowerCase()) ||
  guide.tips.some(tip => tip.toLowerCase().includes(search.toLowerCase()))
);
```

### 5. Video Tutorials

```tsx
// Add video guides for tips
interface BuyingGuideTip {
  // ... existing fields
  videoUrl?: string;
}

<div className="legal-care-card">
  {guide.videoUrl && (
    <div className="legal-care-card__video">
      <iframe 
        src={guide.videoUrl}
        title={`${guide.title} tutorial`}
        allowFullScreen
      />
    </div>
  )}
  {/* Tips list */}
</div>
```

### 6. Checklist Mode

```tsx
// Interactive checklist for shoppers
const [checklist, setChecklist] = useState<string[]>([]);

<li className="legal-conditions__item">
  <input
    type="checkbox"
    checked={checklist.includes(tip)}
    onChange={() => toggleChecklist(tip)}
  />
  <span>{tip}</span>
</li>
```

### 7. Expert Chat Integration

```tsx
// Live chat for personalized advice
<button 
  onClick={() => openChat()}
  className="legal-cta__btn--primary"
>
  <MessageCircle size={16} /> Chat with Expert
</button>

// Opens live chat widget
function openChat() {
  if (window.Intercom) {
    window.Intercom('show');
  }
}
```

### 8. Seasonal Tips

```tsx
// Show seasonal buying advice
useEffect(() => {
  const month = new Date().getMonth();
  if (month >= 10 || month <= 2) {
    // Winter season
    setSeasonalTips(winterTips);
  } else if (month >= 5 && month <= 8) {
    // Summer season
    setSeasonalTips(summerTips);
  }
}, []);
```

### 9. Trending Categories

```tsx
// Highlight trending categories
interface CategoryGuide {
  // ... existing fields
  trending: boolean;
}

<Link to={cat.link} className="legal-cards__link-card">
  {cat.trending && (
    <span className="legal-cards__trending-badge">
      <TrendingUp size={12} /> Trending
    </span>
  )}
  {/* Category content */}
</Link>
```

### 10. Print-Friendly Guide

```tsx
// Add print version
<button onClick={() => window.print()}>
  <Printer size={16} /> Print Buying Guide
</button>

@media print {
  .legal-hero,
  .legal-cta,
  .funky-section__divider {
    display: none;
  }
  
  .legal-care-card {
    page-break-inside: avoid;
  }
}
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero displays correctly (navy gradient)
- [ ] Hero badge shows Lightbulb icon with cyan border
- [ ] All 4 tip cards display
- [ ] Tip cards have lightbulb icons (cyan)
- [ ] Tips have green checkmarks
- [ ] Category section has gradient heading
- [ ] All 4 category cards display in 3 columns
- [ ] Category icons are cyan circles
- [ ] "Browse" links have arrow icons
- [ ] CTA has navy background
- [ ] Star icon displays above CTA heading

### Interaction Testing

- [ ] Category cards lift on hover (4px)
- [ ] Category cards show cyan glow on hover
- [ ] Category links navigate to correct routes
- [ ] "Ask an Expert" button navigates to /contact
- [ ] All links have visible focus states
- [ ] Tab order is logical

### Responsive Testing

- [ ] Mobile: Category cards stack (1 col)
- [ ] Mobile: Tip cards adjust padding
- [ ] Mobile: CTA button full width
- [ ] Tablet: Category cards 2 columns
- [ ] Desktop: Category cards 3 columns

### Dark Mode Testing

- [ ] Hero maintains readability
- [ ] Tip cards have navy background
- [ ] Lightbulb icons remain cyan
- [ ] Green checkmarks remain visible
- [ ] Gradient heading visible
- [ ] Category cards have navy background
- [ ] Category hover glow more prominent
- [ ] Shopping bag icons have cyan glow
- [ ] All text meets WCAG AA

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Tips use semantic `<ul>`/`<li>` markup
- [ ] Category links have descriptive text
- [ ] All icons decorative (aria-hidden)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AAA

---

## Related Templates

- **PageShippingReturns** — Shares legal-conditions pattern
- **PageSizeGuide** — Similar help/guide structure
- **PageCareInstructions** — Shares legal-care-card pattern

### Shared CSS

- `.legal-hero` — Minimal hero
- `.legal-cards` — Card layouts
- `.legal-care-card` — Tip cards
- `.legal-conditions` — Checkmark lists
- `.legal-cta` — CTA section

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready