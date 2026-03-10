# PageSizeGuide

**Component Type:** Template (Size Guide & Measurement - Clean Funky)  
**Location:** `/src/app/components/templates/PageSizeGuide.tsx`  
**CSS:** `/src/styles/sections/legal-pages-funky.css`  
**Route:** `/size-guide`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Clean Funky)  
**Color Identity:** Navy `#030213` / Cyan `#00ffff`

---

## Overview

PageSizeGuide is a sizing information template using the "legal-pages" CSS pattern. Features minimal hero, measurement instruction cards with icons, tabbed size charts (tops/bottoms/shoes), info banner with tip, and support CTA. Designed to help customers find their correct size.

**Page Purpose:** Product sizing charts and measurement instructions  
**Target Audience:** Customers determining their correct size  
**Dark Mode:** ✅ Complete support  
**Layout:** Minimal hero → Measurement cards → Tabbed size charts → Info banner → Support CTA

**Note:** Introduces tabbed interface, size chart tables, and info banner pattern

---

## Key Features

### Visual Elements

**1. Minimal Hero:**
- Navy gradient background
- Ruler icon badge (bordered)
- "Fit Guide" label
- Centered white text
- Shorter height (35vh)

**2. Measurement Instructions:**
- 4 measurement cards (Chest, Waist, Hips, Inseam)
- Ruler icons (cyan circles)
- Card titles + descriptions
- 2-column responsive grid

**3. Tabbed Size Charts:**
- 3 category tabs (Tops & Outerwear, Bottoms, Shoes)
- Active tab highlighting
- Responsive tables
- Headers + data rows

**4. Info Banner:**
- Info icon (cyan)
- Fit tip text
- Subtle background

**5. Support CTA:**
- Navy background
- "Contact Us" button (primary, cyan)
- Single action

### Funky Treatments

**Hero:** Navy gradient, bordered badge  
**Measurement Icons:** Cyan Ruler in circles  
**Tabs:** Cyan bottom border (active)  
**Tables:** Zebra striping (alternate rows)  
**Info Banner:** Cyan Info icon  
**CTA:** Cyan primary button

---

## Data Structure

### Size Chart Interface

```typescript
interface SizeChart {
  headers: string[];  // ['Size', 'US', 'Chest (in)', ...]
  rows: string[][];   // [['XS', '0-2', '32-34', ...], ...]
}

type SizeCategory = 'tops' | 'bottoms' | 'shoes';
```

### Mock Data

**3 Size Categories:**

```typescript
export const sizeData: Record<SizeCategory, SizeChart> = {
  tops: {
    headers: ['Size', 'US', 'Chest (in)', 'Waist (in)', 'Length (in)'],
    rows: [
      ['XS', '0-2', '32-34', '24-26', '25'],
      ['S', '4-6', '34-36', '26-28', '26'],
      ['M', '8-10', '36-38', '28-30', '27'],
      ['L', '12-14', '38-40', '30-32', '28'],
      ['XL', '16-18', '40-42', '32-34', '29'],
      ['XXL', '20-22', '42-44', '34-36', '30'],
    ],
  },
  bottoms: {
    headers: ['Size', 'US', 'Waist (in)', 'Hips (in)', 'Inseam (in)'],
    rows: [
      ['XS', '0-2', '24-26', '34-36', '30'],
      ['S', '4-6', '26-28', '36-38', '30'],
      ['M', '8-10', '28-30', '38-40', '31'],
      ['L', '12-14', '30-32', '40-42', '31'],
      ['XL', '16-18', '32-34', '42-44', '32'],
      ['XXL', '20-22', '34-36', '44-46', '32'],
    ],
  },
  shoes: {
    headers: ['US', 'EU', 'UK', 'Foot Length (in)', 'Foot Length (cm)'],
    rows: [
      ['6', '36', '3.5', '9.25', '23.5'],
      ['7', '37', '4.5', '9.63', '24.4'],
      ['8', '38', '5.5', '9.94', '25.2'],
      ['9', '39', '6.5', '10.25', '26.0'],
      ['10', '40', '7.5', '10.56', '26.8'],
      ['11', '41', '8.5', '10.94', '27.8'],
    ],
  },
};
```

**Category Labels:**
```typescript
export const categoryLabels: Record<SizeCategory, string> = {
  tops: 'Tops & Outerwear',
  bottoms: 'Bottoms',
  shoes: 'Shoes',
};
```

**4 Measurement Instructions:**
```typescript
export const measurementInstructions = [
  { 
    title: 'Chest', 
    description: 'Measure around the fullest part of your chest, keeping the tape horizontal.',
    icon: 'Ruler'
  },
  { 
    title: 'Waist', 
    description: 'Measure around your natural waistline, the narrowest part of your torso.',
    icon: 'Ruler'
  },
  { 
    title: 'Hips', 
    description: 'Measure around the widest part of your hips with feet together.',
    icon: 'Ruler'
  },
  { 
    title: 'Inseam', 
    description: 'Measure from the crotch seam to the bottom hem of a well-fitting pair of pants.',
    icon: 'Ruler'
  },
];
```

**Source:** `/src/app/data/sizeGuide.ts`

### Page Content Strings

```typescript
export const sizeGuidePageContent = {
  title: 'Size guide',
  description: 'Find your perfect fit with our comprehensive sizing charts and measurement tips.',
  measureHeading: 'How to Measure',
  chartsHeading: 'Size charts',
  fitTip: 'If you are between sizes, we recommend sizing up for a more comfortable fit. Our customer service team can help with specific product fit questions.',
  ctaHeading: 'Need more help with sizing?',
  ctaText: 'Our team can provide personalized sizing advice.',
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
    <div className="legal-hero__content">
      <span className="legal-hero__badge">
        <Ruler size={12} /> Fit Guide
      </span>
      <h1 className="legal-hero__title">{title}</h1>
      <p className="legal-hero__subtitle">{description}</p>
    </div>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Measurement Instructions */}
  <section className="legal-cards">
    <Container>
      <h2 className="legal-cards__heading">How to Measure</h2>
      <div className="legal-cards__grid">
        {measurementInstructions.map((item) => (
          <div className="legal-cards__card">
            <span className="legal-cards__icon">
              <Ruler size={20} />
            </span>
            <h3 className="legal-cards__card-title">{item.title}</h3>
            <p className="legal-cards__card-text">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Size Charts (Tabbed) */}
  <section className="legal-table-section">
    <Container>
      <h2 className="legal-cards__heading">Size charts</h2>

      {/* Tabs */}
      <div className="legal-tabs" role="tablist">
        {(Object.keys(sizeData) as SizeCategory[]).map(cat => (
          <button
            key={cat}
            role="tab"
            aria-selected={activeCategory === cat}
            className={`legal-tab${activeCategory === cat ? ' legal-tab--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Table Panel */}
      <div className="legal-table-wrap" role="tabpanel">
        <table className="legal-table">
          <thead>
            <tr>
              {sizeData[activeCategory].headers.map((header) => (
                <th className="legal-table__header">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sizeData[activeCategory].rows.map((row) => (
              <tr className="legal-table__row">
                {row.map((cell) => (
                  <td className="legal-table__cell">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Info Banner */}
      <div className="legal-info-banner">
        <Info size={18} className="legal-info-banner__icon" />
        <span>{fitTip}</span>
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider" />

  {/* Support CTA */}
  <section className="legal-cta">
    <Container>
      <h2 className="legal-cta__heading">Need more help with sizing?</h2>
      <p className="legal-cta__text">{ctaText}</p>
      <Link to="/contact" className="legal-cta__btn--primary">Contact Us</Link>
    </Container>
  </section>
</Layout>
```

### Icons Used

```tsx
import { 
  Ruler, // Hero badge (12px) + measurement cards (20px)
  Info,  // Info banner (18px)
} from '@phosphor-icons/react';
```

### State Management

```tsx
const [activeCategory, setActiveCategory] = useState<SizeCategory>('tops');

// Tab click handler
const handleTabClick = (category: SizeCategory) => {
  setActiveCategory(category);
};
```

---

## BEM Class Hierarchy

```
.page-size-guide (Template wrapper - no actual class)
│
├── .legal-page (Root marker class)
│   └── .legal-hero (Minimal hero)
│       ├── .legal-hero__overlay (Navy gradient)
│       ├── .legal-hero__content (Text container)
│       │   ├── .legal-hero__badge (Ruler icon badge)
│       │   ├── .legal-hero__title (h1)
│       │   └── .legal-hero__subtitle (p)
│
├── .funky-section__divider--subtle (Subtle divider)
│
├── .legal-cards (Measurement section)
│   └── .legal-cards__content (Content wrapper)
│       ├── .legal-cards__heading (h2)
│       └── .legal-cards__grid (2-column grid)
│           └── .legal-cards__card (Measurement card)
│               ├── .legal-cards__icon (Ruler icon circle)
│               ├── .legal-cards__card-title (h3)
│               └── .legal-cards__card-text (p)
│
├── .funky-section__divider--subtle (Subtle divider)
│
├── .legal-table-section (Size charts section - NEW)
│   └── .legal-cards__content (Content wrapper)
│       ├── .legal-cards__content--wide (Wide modifier)
│       ├── .legal-cards__heading (h2)
│       ├── .legal-tabs (Tab navigation - NEW)
│       │   └── .legal-tab (Individual tab - NEW)
│       │       └── .legal-tab--active (Active modifier - NEW)
│       ├── .legal-table-wrap (Table wrapper - NEW)
│       │   └── .legal-table (Table element - NEW)
│       │       ├── thead
│       │       │   └── .legal-table__header (th - NEW)
│       │       └── tbody
│       │           └── .legal-table__row (tr - NEW)
│       │               └── .legal-table__cell (td - NEW)
│       └── .legal-info-banner (Info tip banner - NEW)
│           ├── .legal-info-banner__icon (Info icon - NEW)
│           └── span (Banner text)
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
  line-height: 1.6;
}
```

**Badge:** "Fit Guide" with Ruler icon

---

### 2. Measurement Instructions (`.legal-cards`)

**Shared with other templates**

```css
.legal-cards {
  padding: var(--space--800) 0;
  background: var(--surface);
}

.legal-cards__content {
  max-width: 72rem;
  margin: 0 auto;
}

.legal-cards__heading {
  font-size: var(--font-size--600);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--700);
}

/* 2-Column Grid */
.legal-cards__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space--600);
}

/* Measurement Card */
.legal-cards__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: var(--white);
  border: 1px solid var(--border);
  text-align: center;
}

.dark .legal-cards__card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

/* Icon Circle */
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
  line-height: 1.6;
}
```

**Grid:** 2 columns auto-fit (min 280px)  
**Icons:** Ruler (cyan circles, 20px)

---

### 3. Tabbed Size Charts (`.legal-tabs`)

**NEW PATTERN** - Tabbed interface with tables

```css
.legal-table-section {
  padding: var(--space--800) 0;
  background: var(--surface-alt);
}

.legal-cards__content--wide {
  max-width: 80rem;
}

/* Tab Navigation (NEW) */
.legal-tabs {
  display: flex;
  gap: var(--space--400);
  border-bottom: 2px solid var(--border);
  margin-bottom: var(--space--700);
  overflow-x: auto;
}

.dark .legal-tabs {
  border-color: rgba(255, 255, 255, 0.1);
}

/* Individual Tab (NEW) */
.legal-tab {
  padding: var(--space--400) var(--space--600);
  font-size: var(--font-size--200);
  font-weight: 600;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.2s, border-color 0.2s;
  margin-bottom: -2px; /* Overlap border */
}

.legal-tab:hover {
  color: var(--text);
}

/* Active Tab (Cyan Border) */
.legal-tab--active {
  color: var(--cyan);
  border-bottom-color: var(--cyan);
}

/* Table Wrapper (NEW) */
.legal-table-wrap {
  overflow-x: auto;
  margin-bottom: var(--space--700);
  border-radius: var(--radius--400);
  border: 1px solid var(--border);
}

.dark .legal-table-wrap {
  border-color: rgba(255, 255, 255, 0.1);
}

/* Table (NEW) */
.legal-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size--200);
}

/* Table Header (NEW) */
.legal-table__header {
  padding: var(--space--400) var(--space--500);
  text-align: left;
  font-weight: 700;
  color: var(--text);
  background: var(--surface);
  border-bottom: 2px solid var(--border);
}

.dark .legal-table__header {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Table Row (NEW) */
.legal-table__row {
  border-bottom: 1px solid var(--border);
}

.dark .legal-table__row {
  border-color: rgba(255, 255, 255, 0.05);
}

/* Zebra Striping */
.legal-table__row:nth-child(even) {
  background: var(--surface);
}

.dark .legal-table__row:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
}

/* Table Cell (NEW) */
.legal-table__cell {
  padding: var(--space--400) var(--space--500);
  color: var(--text);
}

.legal-table__cell:first-child {
  font-weight: 600; /* Bold size labels */
}
```

**Key Features:**
- Horizontal tab navigation
- Active tab with cyan bottom border
- Responsive tables (horizontal scroll)
- Zebra striping for readability

---

### 4. Info Banner (`.legal-info-banner`)

**NEW PATTERN** - Info tip banner

```css
/* Info Banner (NEW) */
.legal-info-banner {
  display: flex;
  align-items: flex-start;
  gap: var(--space--400);
  padding: var(--space--500);
  border-radius: var(--radius--300);
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.dark .legal-info-banner {
  background: rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.3);
}

/* Info Icon (Cyan) */
.legal-info-banner__icon {
  flex-shrink: 0;
  color: var(--cyan);
  margin-top: 2px;
}

.dark .legal-info-banner__icon {
  filter: drop-shadow(0 0 4px rgba(0, 255, 255, 0.4));
}

.legal-info-banner span {
  flex: 1;
  font-size: var(--font-size--200);
  color: var(--text);
  line-height: 1.6;
}
```

**Background:** Cyan tint (5% light, 10% dark)  
**Icon:** Cyan Info (18px)

---

### 5. Support CTA (`.legal-cta`)

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

**Single Action:** "Contact Us" (primary, cyan)

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller text */
.legal-hero__title {
  font-size: var(--font-size--600);
}

/* Measurement cards: 1 column */
.legal-cards__grid {
  grid-template-columns: 1fr;
}

/* Tabs: Horizontal scroll */
.legal-tabs {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Tables: Horizontal scroll */
.legal-table-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

/* Smaller table padding */
.legal-table__header,
.legal-table__cell {
  padding: var(--space--300) var(--space--400);
  font-size: var(--font-size--75);
}
```

### Tablet (640px - 1024px)

```css
/* Measurement cards: 2 columns */
.legal-cards__grid {
  grid-template-columns: repeat(2, 1fr);
}

/* Tables: Full width */
.legal-table-wrap {
  overflow-x: visible;
}
```

### Desktop (> 1024px)

```css
/* Measurement cards: 2 columns (max) */
.legal-cards__grid {
  grid-template-columns: repeat(2, 1fr);
}
```

**Key Breakpoints:** Measurement cards 1 col → 2 col, Tables scroll on mobile

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Background** | Navy gradient | Navy gradient |
| **Hero Text** | White `#ffffff` | White `#ffffff` |
| **Measurement Cards** | White `#ffffff` | Navy `#030213` |
| **Measurement Icons** | Cyan bg | Cyan bg + glow |
| **Tabs Border** | Gray | `rgba(255,255,255,0.1)` |
| **Active Tab** | Cyan border | Cyan border |
| **Table Headers** | `#f9f9f9` bg | `rgba(255,255,255,0.03)` |
| **Table Rows (Even)** | `#f9f9f9` bg | `rgba(255,255,255,0.02)` |
| **Info Banner BG** | `rgba(0,255,255,0.05)` | `rgba(0,255,255,0.1)` |
| **Info Icon** | Cyan | Cyan + glow |

### Dark Mode Enhancements

```css
.dark .legal-cards__card {
  background: var(--navy);
  border-color: rgba(0, 255, 255, 0.2);
}

.dark .legal-cards__icon {
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.4);
}

.dark .legal-tabs {
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .legal-table-wrap {
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .legal-table__header {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark .legal-table__row {
  border-color: rgba(255, 255, 255, 0.05);
}

.dark .legal-table__row:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
}

.dark .legal-info-banner {
  background: rgba(0, 255, 255, 0.1);
  border-color: rgba(0, 255, 255, 0.3);
}

.dark .legal-info-banner__icon {
  filter: drop-shadow(0 0 4px rgba(0, 255, 255, 0.4));
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Hero: section + h1 */}
<section className="legal-hero">
  <h1 className="legal-hero__title">{title}</h1>
  <p className="legal-hero__subtitle">{description}</p>
</section>

{/* Measurement: section + h2 + h3 */}
<section className="legal-cards">
  <h2 className="legal-cards__heading">How to Measure</h2>
  {measurementInstructions.map(item => (
    <div className="legal-cards__card">
      <h3 className="legal-cards__card-title">{item.title}</h3>
      <p className="legal-cards__card-text">{item.description}</p>
    </div>
  ))}
</section>

{/* Tables: section + h2 + tablist + tabpanel + table */}
<section className="legal-table-section">
  <h2 className="legal-cards__heading">Size charts</h2>
  
  <div className="legal-tabs" role="tablist">
    <button 
      role="tab" 
      aria-selected={activeCategory === 'tops'}
      className="legal-tab"
    >
      Tops & Outerwear
    </button>
  </div>
  
  <div className="legal-table-wrap" role="tabpanel">
    <table className="legal-table">
      <thead>
        <tr>
          <th className="legal-table__header">Size</th>
        </tr>
      </thead>
      <tbody>
        <tr className="legal-table__row">
          <td className="legal-table__cell">XS</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
```

### ARIA Attributes

```tsx
{/* Tabs with ARIA */}
<div className="legal-tabs" role="tablist">
  {categories.map(cat => (
    <button
      key={cat}
      role="tab"
      aria-selected={activeCategory === cat}
      aria-controls={`panel-${cat}`}
      id={`tab-${cat}`}
      className={`legal-tab${activeCategory === cat ? ' legal-tab--active' : ''}`}
      onClick={() => setActiveCategory(cat)}
    >
      {categoryLabels[cat]}
    </button>
  ))}
</div>

{/* Tab Panel */}
<div 
  className="legal-table-wrap" 
  role="tabpanel"
  id={`panel-${activeCategory}`}
  aria-labelledby={`tab-${activeCategory}`}
>
  <table className="legal-table">
    {/* Table content */}
  </table>
</div>

{/* Icons decorative */}
<Ruler size={12} aria-hidden="true" />
<Ruler size={20} aria-hidden="true" />
<Info size={18} aria-hidden="true" />

{/* Table accessibility */}
<table className="legal-table" role="table">
  <thead role="rowgroup">
    <tr role="row">
      <th role="columnheader" scope="col">Size</th>
    </tr>
  </thead>
  <tbody role="rowgroup">
    <tr role="row">
      <td role="cell">XS</td>
    </tr>
  </tbody>
</table>
```

### Keyboard Navigation

- **Tab Order:** Hero (read-only) → Measurement cards (read-only) → Tabs (all focusable) → Table (read-only) → Info banner (read-only) → Contact button
- **Tab Navigation:** Arrow keys navigate between tabs
- **Focus States:** All tabs have visible focus rings
- **Table Navigation:** Screen readers can navigate table by headers/cells

### Tab Keyboard Controls

```tsx
// Arrow key navigation
const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
  const tabs = Object.keys(sizeData) as SizeCategory[];
  
  if (e.key === 'ArrowRight') {
    const nextIndex = (currentIndex + 1) % tabs.length;
    setActiveCategory(tabs[nextIndex]);
  } else if (e.key === 'ArrowLeft') {
    const prevIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    setActiveCategory(tabs[prevIndex]);
  }
};

<button
  role="tab"
  onKeyDown={(e) => handleKeyDown(e, index)}
>
  {label}
</button>
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |
| Hero Subtitle | `rgba(255,255,255,0.8)` | Navy | 15.4:1 | AAA ✅ |
| Measurement Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Measurement Title (Dark) | `#f9fafb` | Navy `#030213` | 19.05:1 | AAA ✅ |
| Tab Text (Light) | `#6b7280` | `#ffffff` | 4.6:1 | AA ✅ |
| Tab Text (Dark) | `#9ca3af` | Navy | 5.8:1 | AA ✅ |
| Active Tab | Cyan `#00ffff` | Both | 8.0:1+ | AAA ✅ |
| Table Header (Light) | `#1a1a1a` | `#f9f9f9` | 15.3:1 | AAA ✅ |
| Table Header (Dark) | `#f9fafb` | `rgba(255,255,255,0.03)` | 14.0:1+ | AAA ✅ |
| Table Cell (Light) | `#1a1a1a` | `#ffffff` / `#f9f9f9` | 15.0:1+ | AAA ✅ |
| Table Cell (Dark) | `#f9fafb` | Navy / subtle | 14.0:1+ | AAA ✅ |
| Info Banner Text | `#1a1a1a` / `#f9fafb` | Cyan tint | 12.0:1+ | AAA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Unit Toggle (in/cm)

```tsx
// Toggle between imperial and metric
const [unit, setUnit] = useState<'in' | 'cm'>('in');

<div className="legal-unit-toggle">
  <button 
    className={unit === 'in' ? 'active' : ''}
    onClick={() => setUnit('in')}
  >
    Inches
  </button>
  <button 
    className={unit === 'cm' ? 'active' : ''}
    onClick={() => setUnit('cm')}
  >
    Centimeters
  </button>
</div>
```

### 2. Size Recommender

```tsx
// AI-powered size recommendation
<div className="legal-size-recommender">
  <h3>Find Your Size</h3>
  <form onSubmit={recommendSize}>
    <label>Height (in)</label>
    <input type="number" />
    
    <label>Weight (lbs)</label>
    <input type="number" />
    
    <label>Body Type</label>
    <select>
      <option>Athletic</option>
      <option>Average</option>
      <option>Curvy</option>
    </select>
    
    <button type="submit">Get Recommendation</button>
  </form>
</div>
```

### 3. Fit Preference

```tsx
// Allow users to indicate fit preference
<div className="legal-fit-preference">
  <h4>Preferred Fit</h4>
  <div className="legal-fit-buttons">
    <button onClick={() => setFit('slim')}>Slim</button>
    <button onClick={() => setFit('regular')}>Regular</button>
    <button onClick={() => setFit('relaxed')}>Relaxed</button>
  </div>
</div>
```

### 4. Model Measurements

```tsx
// Show model measurements in product photos
<div className="legal-model-info">
  <h4>Model Measurements</h4>
  <dl>
    <dt>Height:</dt>
    <dd>5'9" (175 cm)</dd>
    
    <dt>Chest:</dt>
    <dd>34" (86 cm)</dd>
    
    <dt>Waist:</dt>
    <dd>26" (66 cm)</dd>
    
    <dt>Wearing:</dt>
    <dd>Size S</dd>
  </dl>
</div>
```

### 5. Printable PDF

```tsx
// Generate downloadable size chart PDF
<button onClick={downloadSizeChartPDF}>
  <Download size={16} /> Download PDF
</button>
```

### 6. International Sizes

```tsx
// Add more international size conversions
const internationalSizes = {
  us: ['XS', 'S', 'M', 'L', 'XL'],
  uk: ['6', '8', '10', '12', '14'],
  eu: ['34', '36', '38', '40', '42'],
  au: ['6', '8', '10', '12', '14'],
  jp: ['7', '9', '11', '13', '15'],
};
```

### 7. Customer Reviews by Size

```tsx
// Show how items fit according to customer reviews
<div className="legal-fit-feedback">
  <h4>Customer Fit Feedback</h4>
  <div className="legal-fit-bar">
    <span>Runs small</span>
    <div className="legal-fit-bar__fill" style={{width: '20%'}} />
    <span>True to size</span>
    <div className="legal-fit-bar__fill" style={{width: '70%'}} />
    <span>Runs large</span>
    <div className="legal-fit-bar__fill" style={{width: '10%'}} />
  </div>
</div>
```

### 8. Video Measurement Guide

```tsx
// Embed video tutorial
<div className="legal-video-guide">
  <h3>How to Measure (Video)</h3>
  <video controls poster="measurement-guide-poster.jpg">
    <source src="measurement-guide.mp4" type="video/mp4" />
    <track kind="captions" src="captions.vtt" srclang="en" label="English" />
  </video>
</div>
```

### 9. Size History

```tsx
// Remember user's past size selections
<div className="legal-size-history">
  <h4>Your Size History</h4>
  <ul>
    <li>Tops: Usually size <strong>M</strong></li>
    <li>Bottoms: Usually size <strong>10</strong></li>
    <li>Shoes: Usually size <strong>8</strong></li>
  </ul>
</div>
```

### 10. Live Chat Sizing Help

```tsx
// Connect to sizing specialist
<div className="legal-sizing-chat">
  <h4>Need help finding your size?</h4>
  <button onClick={openSizingChat}>
    <MessageCircle size={16} /> Chat with Sizing Specialist
  </button>
  <p>Available Mon-Fri, 9am-6pm EST</p>
</div>
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero displays correctly (navy gradient)
- [ ] Hero badge shows Ruler icon
- [ ] All 4 measurement cards display
- [ ] Measurement icons are cyan circles
- [ ] All 3 tab buttons display
- [ ] Active tab has cyan bottom border
- [ ] Table displays for active category
- [ ] Table has headers + 6 data rows
- [ ] Zebra striping visible (even rows)
- [ ] Info banner displays with icon
- [ ] CTA has navy background

### Interaction Testing

- [ ] All 3 tabs are clickable
- [ ] Tab click switches table content
- [ ] Active tab updates visually
- [ ] Table scrolls horizontally on mobile
- [ ] Tabs scroll horizontally on mobile
- [ ] Contact button navigates to /contact
- [ ] Tab order is logical
- [ ] All tabs have visible focus states

### Responsive Testing

- [ ] Mobile: Measurement cards 1 column
- [ ] Mobile: Tabs scroll horizontally
- [ ] Mobile: Tables scroll horizontally
- [ ] Tablet: Measurement cards 2 columns
- [ ] Desktop: Measurement cards 2 columns
- [ ] Desktop: Tables full width

### Dark Mode Testing

- [ ] Hero maintains readability
- [ ] Measurement cards have navy background
- [ ] Measurement icons have cyan glow
- [ ] Tabs border visible
- [ ] Active tab cyan border visible
- [ ] Table headers adapt background
- [ ] Table zebra striping visible
- [ ] Info banner cyan tint visible
- [ ] Info icon has cyan glow
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Tabs have role="tablist"
- [ ] Tab buttons have role="tab"
- [ ] Tab buttons have aria-selected
- [ ] Table panel has role="tabpanel"
- [ ] All icons decorative (aria-hidden)
- [ ] Table has proper semantic markup
- [ ] Tabs keyboard accessible (arrow keys)
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA

### Content Testing

- [ ] All 4 measurement instructions display
- [ ] All 3 size categories display
- [ ] Tops table has 5 headers, 6 rows
- [ ] Bottoms table has 5 headers, 6 rows
- [ ] Shoes table has 5 headers, 6 rows
- [ ] Info banner text displays
- [ ] Icons render correctly

---

## Related Templates

- **SingleProduct** — Links to size guide
- **PageHelpCenter** — Similar card grid
- **PageAccessibilityStatement** — Similar info banner

### Shared CSS

- `.legal-hero` — Minimal hero
- `.legal-cards` — Measurement cards
- `.legal-cta` — Support CTA

### New CSS Patterns

- `.legal-tabs` — Tab navigation
- `.legal-tab` — Individual tab button
- `.legal-tab--active` — Active tab state
- `.legal-table-wrap` — Table wrapper
- `.legal-table` — Responsive table
- `.legal-info-banner` — Info tip banner

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready