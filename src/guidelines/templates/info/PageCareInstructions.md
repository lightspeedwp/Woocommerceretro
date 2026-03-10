# PageCareInstructions

**Component Type:** Template (Help/Guide Page - Clean Funky)  
**Location:** `/src/app/components/templates/PageCareInstructions.tsx`  
**CSS:** `/src/styles/sections/legal-pages-funky.css`  
**Route:** `/care-instructions`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Clean Funky)  
**Color Identity:** Navy `#030213` / Cyan `#00ffff` / Pink `#ff00ff`

---

## Overview

PageCareInstructions is a product maintenance guide template using the "legal-pages" CSS pattern. Features minimal hero, general care tips checklist with cyan icons, material-specific care cards with material icons, and contact CTA. Designed to help customers maintain product quality and longevity.

**Page Purpose:** Provide care and maintenance instructions by material type  
**Target Audience:** Product owners, gift givers, quality-conscious shoppers  
**Dark Mode:** ✅ Complete support  
**Layout:** Minimal hero → General tips checklist → Material care cards → Contact CTA

**Note:** Defines the `.legal-care-card` pattern used by PageBuyingGuide

---

## Key Features

### Visual Elements

**1. Minimal Hero:**
- Navy gradient background (no image)
- Sparkles icon badge (bordered)
- "Product Care" label
- Centered white text
- Shorter height (35vh)

**2. General Tips Checklist:**
- 6 general care tips
- ShieldCheck icons (cyan)
- Clean vertical list
- Simple text-based items

**3. Material Care Cards:**
- 5 material-specific guides
- Material icons (Shirt, Wind, Thermometer, etc.)
- Bulleted instruction lists
- Alternate background section
- Vertical stack layout

**4. CTA Section:**
- Navy background
- "Contact Us" button (cyan)
- Help-focused messaging
- Centered content

### Funky Treatments

**Hero:** Navy gradient, bordered badge  
**Checklist Icons:** Cyan ShieldCheck  
**Material Icons:** Cyan with material-specific symbols  
**Card Layout:** Clean white/navy cards  
**CTA:** Cyan primary button

---

## Data Structure

### Care Guide Interface

```typescript
interface CareGuide {
  id: string;          // 'cotton', 'linen', 'wool', etc.
  material: string;    // 'Cotton', 'Wool & Cashmere'
  icon: string;        // 'Shirt', 'Wind', 'Thermometer', etc.
  instructions: string[]; // Array of care steps
}
```

### Mock Data

**5 Material Care Guides:**
```typescript
export const careGuides: CareGuide[] = [
  {
    id: 'cotton',
    material: 'Cotton',
    icon: 'Shirt',
    instructions: [
      'Machine wash cold with like colors.',
      'Tumble dry low or hang to dry for best results.',
      'Iron on medium heat if needed.',
      'Avoid bleach to preserve color.',
    ],
  },
  {
    id: 'linen',
    material: 'Linen',
    icon: 'Wind',
    instructions: [
      'Machine wash in cold water on gentle cycle.',
      'Air dry flat to minimize wrinkles.',
      'Iron while slightly damp for a crisp finish.',
      'Linen softens beautifully with each wash.',
    ],
  },
  {
    id: 'wool',
    material: 'Wool & Cashmere',
    icon: 'Thermometer',
    instructions: [
      'Hand wash in cold water with mild detergent.',
      'Gently press out water — never wring.',
      'Lay flat on a towel to dry.',
      'Store folded with cedar blocks to prevent moths.',
    ],
  },
  {
    id: 'synthetic',
    material: 'Synthetic Fabrics',
    icon: 'ShieldCheck',
    instructions: [
      'Machine wash cold on gentle cycle.',
      'Avoid high heat — tumble dry low.',
      'Remove promptly to reduce wrinkles.',
      'Iron on low heat if necessary.',
    ],
  },
  {
    id: 'leather',
    material: 'Leather & Suede',
    icon: 'Droplets',
    instructions: [
      'Wipe with a damp cloth for surface cleaning.',
      'Apply leather conditioner every 3-6 months.',
      'Store in a dust bag away from direct sunlight.',
      'Avoid water exposure — treat with waterproof spray.',
    ],
  },
];
```

**6 General Tips:**
```typescript
export const generalCareTips: string[] = [
  'Always check the care label before washing.',
  'Turn garments inside out to preserve prints and colors.',
  'Use a mesh laundry bag for delicate items.',
  'Avoid over-drying — remove items while slightly damp.',
  'Store in a cool, dry place away from direct sunlight.',
  'Treat stains immediately for best results.',
];
```

**Source:** `/src/app/data/careInstructions.ts`

### Page Content Strings

```typescript
export const careInstructionsPageContent = {
  title: 'Care Instructions',
  description: 'Keep your products looking their best with our material-specific care guides.',
  tipsHeading: 'General Care Tips',
  guidesHeading: 'Care by Material',
  ctaHeading: 'Questions about product care?',
  ctaText: 'Our team can provide specific care advice for any product.',
  ctaButton: 'Contact Us'
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

  {/* General Tips */}
  <section className="legal-steps">
    <Container>
      <h2>General Care Tips</h2>
      <div className="legal-checklist">
        {generalCareTips.map((tip) => (
          <div className="legal-checklist__item">
            {/* ShieldCheck icon + tip text */}
          </div>
        ))}
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Material Care Cards */}
  <section className="legal-cards legal-cards--alt">
    <Container>
      <h2>Care by Material</h2>
      {careGuides.map((guide) => (
        <div className="legal-care-card">
          <div className="legal-care-card__header">
            {/* Material icon + title */}
          </div>
          <ul className="legal-care-card__list">
            {guide.instructions.map((instruction) => (
              <li className="legal-care-card__item">{instruction}</li>
            ))}
          </ul>
        </div>
      ))}
    </Container>
  </section>

  <hr className="funky-section__divider" />

  {/* CTA */}
  <section className="legal-cta">
    <Container>
      {/* Heading, text, button */}
    </Container>
  </section>
</Layout>
```

### Icons Used

```tsx
import { 
  Sparkles,     // Hero badge
  ShieldCheck,  // General tips + synthetic material
  Shirt,        // Cotton material
  Wind,         // Linen material
  Thermometer,  // Wool material
  Droplets,     // Leather material
} from '@phosphor-icons/react';

// Icon mapping for dynamic rendering
const materialIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  'cotton': Shirt,
  'linen': Wind,
  'wool': Thermometer,
  'synthetic': ShieldCheck,
  'leather': Droplets,
};
```

---

## BEM Class Hierarchy

```
.page-care-instructions (Template wrapper - no actual class)
│
├── .legal-page (Root marker class)
│   └── .legal-hero (Minimal hero)
│       ├── .legal-hero__overlay (Navy gradient)
│       ├── .legal-hero__content (Text container)
│       │   ├── .legal-hero__badge (Sparkles icon badge)
│       │   ├── .legal-hero__title (h1)
│       │   └── .legal-hero__subtitle (p)
│
├── .funky-section__divider--subtle (Subtle divider)
│
├── .legal-steps (General tips section - reuses steps class)
│   └── .legal-cards__content (Content wrapper)
│       ├── .legal-cards__content--md-gap (Medium gap modifier)
│       ├── .legal-steps__heading (h2)
│       └── .legal-checklist (Checklist container)
│           └── .legal-checklist__item (Individual tip)
│               ├── .legal-checklist__icon (ShieldCheck icon)
│               └── span (Tip text)
│
├── .funky-section__divider--subtle (Subtle divider)
│
├── .legal-cards (Material care cards section)
│   ├── .legal-cards--alt (Modifier: alternate background)
│   └── .legal-cards__content (Content wrapper)
│       ├── .legal-cards__heading (h2)
│       └── .legal-care-card (Individual care guide - NEW PATTERN)
│           ├── .legal-care-card__header (Header with icon + title)
│           │   ├── .legal-care-card__icon (Material icon)
│           │   └── .legal-care-card__title (h3)
│           └── .legal-care-card__list (Instruction list - ul)
│               └── .legal-care-card__item (Individual instruction - li)
│
├── .funky-section__divider (Full gradient divider)
│
└── .legal-cta (CTA section)
    └── .legal-cta__content (Content container)
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

**Badge:** "Product Care" with Sparkles icon

---

### 2. General Tips Checklist (`.legal-checklist`)

**New pattern** - Simple checklist with icons

```css
.legal-steps {
  padding: var(--space--800) 0;
  background: var(--surface);
}

.legal-cards__content--md-gap {
  margin-bottom: var(--space--600);
}

.legal-steps__heading {
  font-size: var(--font-size--600);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--600);
  text-align: center;
}

/* Checklist Container */
.legal-checklist {
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
  max-width: 48rem;
  margin: 0 auto;
}

/* Individual Checklist Item */
.legal-checklist__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space--400);
  padding: var(--space--400);
  border-radius: var(--radius--300);
  background: var(--white);
  border: 1px solid var(--border);
}

.dark .legal-checklist__item {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Shield Icon */
.legal-checklist__icon {
  flex-shrink: 0;
  color: var(--cyan);
  margin-top: 2px; /* Align with text */
}

.legal-checklist__item span {
  flex: 1;
  font-size: var(--font-size--200);
  color: var(--text);
}
```

**Layout:** Vertical stack with cyan icons  
**Icons:** ShieldCheck in cyan

---

### 3. Material Care Cards (`.legal-care-card`)

**Defines pattern reused by PageBuyingGuide**

```css
.legal-cards {
  padding: var(--space--800) 0;
  background: var(--surface);
}

.legal-cards--alt {
  background: var(--surface-alt); /* Slightly different shade */
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

/* Care Card (NEW PATTERN - reused by PageBuyingGuide) */
.legal-care-card {
  margin-bottom: var(--space--600);
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: var(--white);
  border: 1px solid var(--border);
}

.legal-care-card:last-child {
  margin-bottom: 0;
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

/* Instruction List */
.legal-care-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space--300);
}

/* Individual Instruction */
.legal-care-card__item {
  position: relative;
  padding-left: var(--space--500);
  font-size: var(--font-size--200);
  color: var(--text);
  line-height: 1.6;
}

.legal-care-card__item::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--cyan);
  font-weight: 700;
}
```

**Layout:** Vertical stack of 5 cards  
**Icons:** Material-specific (Shirt, Wind, Thermometer, ShieldCheck, Droplets)  
**Bullets:** Cyan dots via ::before pseudo-element

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

**Button:** "Contact Us" link to `/contact`

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller text */
.legal-hero__title {
  font-size: var(--font-size--600);
}

/* Checklist: Less padding */
.legal-checklist__item {
  padding: var(--space--300);
}

/* Care cards: Less padding */
.legal-care-card {
  padding: var(--space--600);
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
/* No specific tablet changes - desktop layout maintained */
```

### Desktop (> 1024px)

```css
/* All elements at full size */
```

**Key Responsive Feature:** Padding adjustments for mobile

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Background** | Navy gradient | Navy gradient |
| **Hero Text** | White `#ffffff` | White `#ffffff` |
| **Hero Badge** | Cyan border + text | Cyan border + text |
| **Checklist Item BG** | White `#ffffff` | `rgba(255,255,255,0.03)` |
| **Checklist Border** | `var(--border)` `#e5e7eb` | `rgba(255,255,255,0.1)` |
| **ShieldCheck Icon** | Cyan `#00ffff` | Cyan `#00ffff` |
| **Care Card BG** | White `#ffffff` | Navy `#030213` |
| **Care Card Border** | `var(--border)` | `rgba(0,255,255,0.2)` |
| **Material Icons** | Cyan `#00ffff` | Cyan `#00ffff` |
| **Bullet Dots** | Cyan `#00ffff` | Cyan `#00ffff` |
| **CTA Background** | Navy `#030213` | Navy `#030213` |

### Dark Mode Enhancements

```css
/* Checklist items */
.dark .legal-checklist__item {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Care cards */
.dark .legal-care-card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}
```

**Key Principle:** Subtle backgrounds, cyan accents consistent

---

## Accessibility

### Semantic HTML

```tsx
{/* Hero: section + h1 */}
<section className="legal-hero">
  <h1 className="legal-hero__title">{careInstructionsPageContent.title}</h1>
</section>

{/* Tips: section + h2 */}
<section className="legal-steps">
  <h2 className="legal-steps__heading">{careInstructionsPageContent.tipsHeading}</h2>
  <div className="legal-checklist">
    {/* Checklist items */}
  </div>
</section>

{/* Material guides: section + h2 + h3 + ul/li */}
<section className="legal-cards">
  <h2 className="legal-cards__heading">{careInstructionsPageContent.guidesHeading}</h2>
  {careGuides.map((guide) => (
    <div className="legal-care-card">
      <h3 className="legal-care-card__title">{guide.material}</h3>
      <ul className="legal-care-card__list">
        <li className="legal-care-card__item">{/* Instruction */}</li>
      </ul>
    </div>
  ))}
</section>
```

### ARIA Attributes

```tsx
{/* Tips section with aria-label */}
<section className="legal-steps" aria-label="General care tips">
  {/* Content */}
</section>

{/* Material guides with aria-label */}
<section className="legal-cards" aria-label="Care instructions by material">
  {/* Content */}
</section>

{/* Icons decorative */}
<ShieldCheck size={16} aria-hidden="true" />
<Shirt size={24} aria-hidden="true" />
```

### Keyboard Navigation

- **Tab Order:** Hero → Checklist items (read-only) → Material cards (read-only) → CTA button
- **Focus States:** CTA button has visible focus ring
- **Read-Only Content:** Tips and instructions are informational only

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |
| Hero Badge | Cyan `#00ffff` | Navy `#030213` | 8.32:1 | AAA ✅ |
| Checklist Text (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Checklist Text (Dark) | `#f9fafb` | Translucent | 12.5:1+ | AAA ✅ |
| Care Card Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Care Card Title (Dark) | `#f9fafb` | Navy `#030213` | 19.05:1 | AAA ✅ |
| Care Instructions (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Care Instructions (Dark) | `#f9fafb` | Navy `#030213` | 19.05:1 | AAA ✅ |
| CTA Button | Navy `#030213` | Cyan `#00ffff` | 8.32:1 | AAA ✅ |

**All text meets WCAG 2.1 AAA standards**

---

## Production Enhancements

### 1. Care Symbol Legend

```tsx
// Add universal care symbol guide
<div className="legal-care-symbols">
  <h3>Care Label Symbols</h3>
  <div className="legal-care-symbols__grid">
    {careSymbols.map(symbol => (
      <div className="legal-care-symbols__item">
        <img src={symbol.image} alt={symbol.name} />
        <span>{symbol.name}</span>
      </div>
    ))}
  </div>
</div>
```

### 2. Material Filter

```tsx
// Filter materials by type
const [filter, setFilter] = useState<string | null>(null);

<div className="legal-material-filter">
  <button onClick={() => setFilter(null)}>All Materials</button>
  <button onClick={() => setFilter('natural')}>Natural</button>
  <button onClick={() => setFilter('synthetic')}>Synthetic</button>
  <button onClick={() => setFilter('leather')}>Leather</button>
</div>

const filtered = filter 
  ? careGuides.filter(g => g.category === filter)
  : careGuides;
```

### 3. Stain Removal Guide

```tsx
// Add stain-specific instructions
<div className="legal-stain-guide">
  <h3>Stain Removal Tips</h3>
  {stainTypes.map(stain => (
    <div className="legal-stain-guide__item">
      <h4>{stain.type}</h4>
      <p>{stain.treatment}</p>
    </div>
  ))}
</div>
```

### 4. Video Tutorials

```tsx
// Embed care instruction videos
<div className="legal-care-card">
  <div className="legal-care-card__header">
    <h3>{guide.material}</h3>
  </div>
  
  {guide.videoUrl && (
    <div className="legal-care-card__video">
      <iframe 
        src={guide.videoUrl}
        title={`How to care for ${guide.material}`}
        allowFullScreen
      />
    </div>
  )}
  
  <ul className="legal-care-card__list">
    {/* Instructions */}
  </ul>
</div>
```

### 5. Product-Specific Care

```tsx
// Link from product pages with product ID
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const productId = params.get('product');
  if (productId) {
    // Highlight relevant material guide
    scrollToMaterial(getMaterialForProduct(productId));
  }
}, [location]);
```

### 6. Printable Care Guide

```tsx
// Add print version
<button onClick={() => window.print()}>
  <Printer size={16} /> Print Care Guide
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

### 7. Seasonal Care Tips

```tsx
// Show seasonal storage advice
const [season, setSeason] = useState(getCurrentSeason());

<div className="legal-seasonal-tips">
  <h3>{season} Storage Tips</h3>
  {seasonalTips[season].map(tip => (
    <div className="legal-checklist__item">
      <ShieldCheck size={16} />
      <span>{tip}</span>
    </div>
  ))}
</div>
```

### 8. Care Frequency Tracker

```tsx
// Remind users when care is due
<div className="legal-care-tracker">
  <h3>Care Schedule</h3>
  <div className="legal-care-tracker__items">
    <div className="legal-care-tracker__item">
      <span>Leather conditioning</span>
      <span className="legal-care-tracker__due">Due in 2 weeks</span>
    </div>
  </div>
</div>
```

### 9. Professional Cleaning Locator

```tsx
// Find nearby professional cleaners
<div className="legal-professional-care">
  <h3>Need Professional Care?</h3>
  <input 
    type="text" 
    placeholder="Enter ZIP code"
    onChange={(e) => findCleaners(e.target.value)}
  />
  <div className="legal-professional-care__results">
    {/* Display nearby cleaners */}
  </div>
</div>
```

### 10. Downloadable PDF

```tsx
// Generate PDF care guide
<button onClick={() => downloadCarePDF()}>
  <Download size={16} /> Download Care Guide
</button>

// Generate PDF with material-specific pages
function downloadCarePDF() {
  const pdf = generatePDF(careGuides);
  pdf.download('care-instructions.pdf');
}
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero displays correctly (navy gradient)
- [ ] Hero badge shows Sparkles icon with cyan border
- [ ] General tips display in checklist format
- [ ] ShieldCheck icons are cyan
- [ ] All 5 material cards display
- [ ] Material icons match material types
- [ ] Instruction bullets are cyan dots
- [ ] CTA has navy background
- [ ] CTA button is cyan

### Interaction Testing

- [ ] "Contact Us" button navigates to /contact
- [ ] All content is read-only (no interactions needed)
- [ ] Tab order is logical
- [ ] CTA button has visible focus state

### Responsive Testing

- [ ] Mobile: Checklist items adjust padding
- [ ] Mobile: Care cards adjust padding
- [ ] Mobile: CTA button full width
- [ ] Desktop: All elements at full size

### Dark Mode Testing

- [ ] Hero maintains readability
- [ ] Checklist items have subtle background
- [ ] ShieldCheck icons remain cyan
- [ ] Care cards have navy background
- [ ] Material icons remain cyan
- [ ] Bullet dots remain cyan
- [ ] All text meets WCAG AAA

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Tips use semantic structure
- [ ] Material guides use `<ul>`/`<li>` markup
- [ ] Icons decorative (aria-hidden)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicator visible on CTA button
- [ ] Color contrast meets WCAG AAA

### Data & Integration Testing

- [ ] All 6 general tips display
- [ ] All 5 material guides display
- [ ] Material icons render correctly (dynamic mapping)
- [ ] Page content strings load from data file
- [ ] CTA button links to /contact

---

## Related Templates

- **PageBuyingGuide** — Reuses `.legal-care-card` pattern
- **PageShippingReturns** — Similar legal-* structure
- **PageSizeGuide** — Similar help/guide pattern

### Shared CSS

- `.legal-hero` — Minimal hero
- `.legal-cards` — Card layouts
- `.legal-care-card` — Care instruction cards (NEW - defined here)
- `.legal-checklist` — Simple checklist (NEW - defined here)
- `.legal-cta` — CTA section

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready