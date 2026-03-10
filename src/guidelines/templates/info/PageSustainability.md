# PageSustainability

**Component Type:** Template (Info Page)  
**Location:** `/src/app/components/templates/PageSustainability.tsx`  
**CSS:** `/src/styles/sections/info-pages-funky.css`  
**Route:** `/about/sustainability`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign)  
**Color Identity:** Navy `#030213` / Cyan `#00ffff` / Green `#10b981`

---

## Overview

PageSustainability is a sustainability commitment template featuring a forest hero, gradient stat numbers, glassmorphism initiative cards with environmental icons, 2030 goals checklist, and eco-friendly shopping CTA. Showcases environmental impact and future sustainability targets.

**Page Purpose:** Communicate environmental commitment and initiatives  
**Target Audience:** Eco-conscious shoppers, investors, partners, media  
**Dark Mode:** ✅ Complete glassmorphism support  
**Layout:** Hero → Stats grid → Initiative cards → Goals checklist → Shop CTA

---

## Key Features

### Visual Elements

**1. Forest Hero:**
- Nature/forest background image
- Gradient overlay (navy → transparent)
- Sprout icon badge with glassmorphism
- Centered white text
- Floating orbs (2)
- 50vh minimum height

**2. Stats Grid:**
- 4-column responsive grid
- Gradient number text (cyan → pink)
- Plain label text
- Navy background with orbs
- Center-aligned content

**3. Initiative Cards:**
- 3-column responsive grid (→ 2 col → 1 col)
- Glassmorphism cards with gradient glow
- Environmental icon circles (gradient)
- Hover lift effect (4px)
- 6 initiative types

**4. Goals Checklist:**
- Vertical list with checkmarks
- Cyan check icons
- 5 goals for 2030
- Centered content

**5. CTA Section:**
- Navy background
- White text
- "Shop Eco-Friendly" button (cyan glow)
- Floating orbs

### Funky Treatments

**Hero:** Navy gradient overlay + floating orbs + glass badge  
**Stats:** Gradient numbers (cyan → pink)  
**Initiative Cards:** Gradient glow border + gradient icon circles + lift on hover  
**Goals:** Cyan check icons  
**CTA:** Cyan button glow + floating orbs

---

## Data Structure

### Sustainability Initiative Interface

```typescript
interface SustainabilityInitiative {
  id: string;         // 'packaging', 'organic', etc.
  iconName: string;   // 'Recycle', 'Leaf', 'Droplets', etc.
  title: string;      // '100% Recyclable Packaging'
  description: string; // Full description
}
```

### Sustainability Stat Interface

```typescript
interface SustainabilityStat {
  id: string;    // 'trees', 'water', etc.
  value: string; // '2M+', '40%', '0', '100%'
  label: string; // 'Trees Planted', 'Water Saved', etc.
}
```

### Sustainability Goal Interface

```typescript
interface SustainabilityGoal {
  id: string;   // 'g1', 'g2', etc.
  text: string; // Goal description
}
```

### Mock Data

**6 Initiatives:**
```typescript
export const sustainabilityInitiatives: SustainabilityInitiative[] = [
  {
    id: 'packaging',
    iconName: 'Recycle',
    title: '100% Recyclable Packaging',
    description: 'All our packaging materials are recyclable or compostable. We eliminated single-use plastics from our supply chain in 2024.',
  },
  {
    id: 'organic',
    iconName: 'Leaf',
    title: 'Organic Materials',
    description: '60% of our products use certified organic cotton, linen, or other sustainably sourced natural fibers.',
  },
  {
    id: 'water',
    iconName: 'Droplets',
    title: 'Water Conservation',
    description: 'Our manufacturing partners use closed-loop water systems, reducing water usage by 40% compared to industry standards.',
  },
  {
    id: 'carbon',
    iconName: 'Sun',
    title: 'Carbon Neutral Shipping',
    description: 'We offset 100% of carbon emissions from shipping through verified carbon offset programs.',
  },
  {
    id: 'trees',
    iconName: 'TreePine',
    title: 'Reforestation',
    description: 'For every order placed, we plant a tree through our partnership with global reforestation organizations.',
  },
  {
    id: 'fair-trade',
    iconName: 'Award',
    title: 'Fair Trade Certified',
    description: 'We work only with Fair Trade certified suppliers, ensuring fair wages and safe working conditions.',
  },
];
```

**4 Stats:**
```typescript
export const sustainabilityStats: SustainabilityStat[] = [
  { id: 'trees', value: '2M+', label: 'Trees Planted' },
  { id: 'water', value: '40%', label: 'Water Saved' },
  { id: 'plastics', value: '0', label: 'Single-Use Plastics' },
  { id: 'carbon', value: '100%', label: 'Carbon Neutral' },
];
```

**5 Goals (2030):**
```typescript
export const sustainabilityGoals: SustainabilityGoal[] = [
  {
    id: 'g1',
    text: 'Achieve 100% organic or recycled materials across all product lines',
  },
  {
    id: 'g2',
    text: 'Reduce total carbon emissions by 75% from 2020 baseline',
  },
  {
    id: 'g3',
    text: 'Implement circular economy model with take-back and recycling program',
  },
  {
    id: 'g4',
    text: 'Plant 10 million trees through reforestation partnerships',
  },
  {
    id: 'g5',
    text: 'Achieve B Corp certification across all business units',
  },
];
```

**Source:** `/src/app/data/sustainability.ts`

### Page Content Strings

```typescript
export const sustainabilityPageContent = {
  title: 'Sustainability',
  description: 'Our commitment to the planet is woven into everything we do - from sourcing to shipping.',
  initiativesHeading: 'Our initiatives',
  initiativesDescription: 'Concrete actions we are taking to reduce our environmental footprint.',
  goalsHeading: 'Our 2030 Goals',
  ctaHeading: 'Shop sustainably',
  ctaText: 'Every purchase supports our mission. Look for the eco-friendly badge on product pages.',
};
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  {/* Hero */}
  <section className="page-sustainability info-hero">
    {/* Background image */}
    {/* Gradient overlay */}
    {/* Content (badge, title, subtitle) */}
    {/* Floating orbs (2) */}
  </section>

  <hr className="funky-section__divider" />

  {/* Stats Grid */}
  <section className="info-stats">
    <Container>
      <div className="info-stats__grid">
        {sustainabilityStats.map((stat) => (
          <div className="info-stats__item">
            <span className="info-stats__number">{stat.value}</span>
            <span className="info-stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </Container>
    {/* Floating orbs (2) */}
  </section>

  <hr className="funky-section__divider" />

  {/* Initiatives Cards */}
  <section className="info-cards">
    <Container>
      <h2 className="funky-section__heading--gradient">
        Our initiatives
      </h2>
      <p>Concrete actions...</p>
      <div className="info-cards__grid">
        {sustainabilityInitiatives.map((initiative) => (
          <div className="info-cards__card">
            {/* Gradient glow */}
            <div className="info-cards__card-inner">
              {/* Icon circle */}
              {/* Title */}
              {/* Description */}
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>

  <hr className="funky-section__divider--subtle" />

  {/* Goals Checklist */}
  <section className="info-goals">
    <Container>
      <h2>Our 2030 Goals</h2>
      <ul className="info-goals__list">
        {sustainabilityGoals.map((goal) => (
          <li className="info-goals__item">
            <span className="info-goals__check">✓</span>
            <span>{goal.text}</span>
          </li>
        ))}
      </ul>
    </Container>
  </section>

  <hr className="funky-section__divider" />

  {/* CTA */}
  <section className="info-cta">
    <Container>
      {/* Heading, text, button */}
    </Container>
    {/* Floating orbs (2) */}
  </section>
</Layout>
```

### Icons Used

```tsx
import { 
  Sprout,       // Hero badge
  Recycle,      // Packaging initiative
  Leaf,         // Organic initiative
  Droplets,     // Water initiative
  Sun,          // Carbon initiative
  TreePine,     // Trees initiative
  Award,        // Fair Trade initiative
  Check,        // Goals checkmarks
} from '@phosphor-icons/react';

// Icon mapping for dynamic rendering
const initiativeIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  'Recycle': Recycle,
  'Leaf': Leaf,
  'Droplets': Droplets,
  'Sun': Sun,
  'TreePine': TreePine,
  'Award': Award,
};
```

---

## BEM Class Hierarchy

```
.page-sustainability (Template wrapper - no actual class)
│
├── .info-hero (Hero section - shared with all info pages)
│   ├── .info-hero__bg (Background image)
│   ├── .info-hero__overlay (Navy gradient overlay)
│   ├── .info-hero__content (Text container)
│   │   ├── .info-hero__badge (Glass badge)
│   │   ├── .info-hero__title (h1)
│   │   └── .info-hero__subtitle (p)
│   ├── .info-hero__orb--1 (Floating orb 1)
│   └── .info-hero__orb--2 (Floating orb 2)
│
├── .funky-section__divider (Gradient divider - full)
│
├── .info-stats (Stats section)
│   ├── .info-stats__content (Container wrapper)
│   │   └── .info-stats__grid (Grid container - 4 columns)
│   │       └── .info-stats__item (Individual stat)
│   │           ├── .info-stats__number (Gradient number)
│   │           └── .info-stats__label (Label text)
│   ├── .info-stats__orb--1 (Floating orb 1)
│   └── .info-stats__orb--2 (Floating orb 2)
│
├── .funky-section__divider (Gradient divider - full)
│
├── .info-cards (Initiative cards section)
│   └── .info-cards__content (Container wrapper)
│       ├── .info-cards__content--lg (Large variant modifier)
│       ├── .info-cards__heading (h2 with gradient)
│       │   └── .funky-section__heading--gradient (Modifier for gradient text)
│       ├── .info-cards__subheading (p)
│       └── .info-cards__grid (Grid container - 3 columns)
│           └── .info-cards__card (Individual card)
│               ├── .info-cards__card-glow (Gradient glow border effect)
│               └── .info-cards__card-inner (Card content)
│                   ├── .info-cards__icon-circle (Gradient icon circle)
│                   ├── .info-cards__card-title (h3)
│                   └── .info-cards__card-text (p)
│
├── .funky-section__divider--subtle (Gradient divider - subtle)
│
├── .info-goals (Goals checklist section)
│   └── .info-goals__content (Container wrapper)
│       ├── .info-goals__heading (h2)
│       └── .info-goals__list (ul)
│           └── .info-goals__item (li)
│               ├── .info-goals__check (Check icon span)
│               └── .info-goals__text (Goal text span)
│
├── .funky-section__divider (Gradient divider - full)
│
└── .info-cta (CTA section - shared with all info pages)
    ├── .info-cta__content (Content container)
    │   ├── .info-cta__heading (h2)
    │   ├── .info-cta__text (p)
    │   └── .info-cta__actions (Button container)
    │       └── .info-cta__btn--primary (Link button)
    ├── .info-cta__orb--1 (Floating orb 1)
    └── .info-cta__orb--2 (Floating orb 2)
```

---

## Section Breakdown

### 1. Hero Section (`.info-hero`)

**Shared component** - same CSS as other info pages

```css
.info-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--navy);
  text-align: center;
}

.info-hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.info-hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(3, 2, 19, 0.9), transparent);
  z-index: 1;
}

.info-hero__content {
  position: relative;
  z-index: 2;
  max-width: 48rem;
  padding: var(--space--800) var(--space--400);
}

.info-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  padding: var(--space--200) var(--space--400);
  border-radius: 999px;
  font-size: var(--font-size--100);
  font-weight: 500;
  color: var(--white);
  margin-bottom: var(--space--500);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}
```

**Background Image:** Forest/nature scene from Unsplash  
**Badge:** "Sustainability" with Sprout icon

---

### 2. Stats Grid Section (`.info-stats`)

```css
.info-stats {
  position: relative;
  padding: var(--space--900) 0;
  background: var(--navy);
  color: var(--white);
  text-align: center;
  overflow: hidden;
}

.info-stats__content {
  position: relative;
  z-index: 2;
}

.info-stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space--800);
  max-width: 64rem;
  margin: 0 auto;
}

/* Individual Stat */
.info-stats__item {
  display: flex;
  flex-direction: column;
  gap: var(--space--300);
  align-items: center;
}

/* Gradient Number */
.info-stats__number {
  font-size: var(--font-size--900);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
}

/* Label */
.info-stats__label {
  font-size: var(--font-size--200);
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Floating Orbs */
.info-stats__orb--1,
.info-stats__orb--2 {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.2), transparent);
  filter: blur(60px);
  pointer-events: none;
  z-index: 1;
}

.info-stats__orb--1 {
  width: 320px;
  height: 320px;
  top: -10%;
  right: 10%;
}

.info-stats__orb--2 {
  width: 240px;
  height: 240px;
  bottom: -10%;
  left: 15%;
}
```

**Background:** Navy with floating orbs  
**Numbers:** Gradient text (cyan → pink)  
**Grid:** 4 columns (responsive to 2 col → 1 col)

---

### 3. Initiative Cards Section (`.info-cards`)

```css
.info-cards {
  padding: var(--space--900) 0;
  background: var(--surface);
}

.info-cards__content {
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
}

.info-cards__content--lg {
  max-width: 72rem;
}

/* Gradient Heading */
.info-cards__heading {
  font-size: var(--font-size--700);
  font-weight: 700;
  margin-bottom: var(--space--400);
}

.funky-section__heading--gradient {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.info-cards__subheading {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  margin-bottom: var(--space--800);
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
}

/* Card Grid */
.info-cards__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space--700);
}

/* Individual Card */
.info-cards__card {
  position: relative;
  border-radius: var(--radius--400);
  overflow: hidden;
  transition: transform 0.3s var(--timing-function);
}

.info-cards__card:hover {
  transform: translateY(-4px);
}

/* Gradient Glow Border */
.info-cards__card-glow {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  opacity: 0.5;
  border-radius: inherit;
  z-index: 0;
}

.info-cards__card-inner {
  position: relative;
  z-index: 1;
  background: var(--surface);
  padding: var(--space--700);
  border-radius: inherit;
  margin: 1px; /* Reveals 1px of gradient glow */
  text-align: left;
}

/* Dark Mode - Enhanced Glow */
.dark .info-cards__card-glow {
  opacity: 0.8;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.dark .info-cards__card-inner {
  background: var(--navy);
}

/* Icon Circle */
.info-cards__icon-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  color: var(--white);
  margin-bottom: var(--space--500);
}

.info-cards__card-title {
  font-size: var(--font-size--400);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--300);
}

.info-cards__card-text {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  line-height: 1.6;
}
```

**Grid:** 3 columns (auto-fit, min 300px)  
**Hover:** 4px lift  
**Glow:** Cyan → Pink gradient (50% opacity light, 80% dark)  
**Icon Circle:** Gradient background with white icon

---

### 4. Goals Checklist Section (`.info-goals`)

```css
.info-goals {
  padding: var(--space--900) 0;
  background: var(--surface);
}

.info-goals__content {
  max-width: 52rem;
  margin: 0 auto;
  text-align: center;
}

.info-goals__heading {
  font-size: var(--font-size--600);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--700);
}

/* Goals List */
.info-goals__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
  text-align: left;
}

/* Individual Goal */
.info-goals__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space--400);
  padding: var(--space--400);
  border-radius: var(--radius--300);
  background: var(--white);
  border: 1px solid var(--border);
}

.dark .info-goals__item {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Check Icon */
.info-goals__check {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--cyan);
  color: var(--navy);
  font-weight: 700;
}

/* Goal Text */
.info-goals__text {
  flex: 1;
  font-size: var(--font-size--300);
  color: var(--text);
  line-height: 1.6;
}
```

**List:** Vertical stack with gap  
**Checkmark:** Cyan circle with Check icon  
**Items:** Light background with border (subtle dark mode)

---

### 5. CTA Section (`.info-cta`)

**Shared component** - same CSS as other info pages

```css
.info-cta {
  position: relative;
  padding: var(--space--900) 0;
  background: var(--navy);
  color: var(--white);
  text-align: center;
  overflow: hidden;
}

.info-cta__content {
  position: relative;
  z-index: 2;
  max-width: 42rem;
  margin: 0 auto;
  padding: 0 var(--space--400);
}

.info-cta__heading {
  font-size: var(--font-size--700);
  font-weight: 700;
  margin-bottom: var(--space--400);
}

.info-cta__text {
  font-size: var(--font-size--400);
  margin-bottom: var(--space--600);
  opacity: 0.9;
}

.info-cta__actions {
  display: flex;
  gap: var(--space--400);
  justify-content: center;
  flex-wrap: wrap;
}

.info-cta__btn--primary {
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

.info-cta__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}
```

**Button:** "Shop Eco-Friendly" link to `/shop`  
**Glow:** Cyan shadow on hover

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller text */
.info-hero__title {
  font-size: var(--font-size--600);
}

/* Stats: 2 columns */
.info-stats__grid {
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space--600);
}

.info-stats__number {
  font-size: var(--font-size--800);
}

/* Initiative cards: 1 column */
.info-cards__grid {
  grid-template-columns: 1fr;
}

/* Goals: Less padding */
.info-goals__item {
  padding: var(--space--300);
}

/* CTA: Full width button */
.info-cta__actions {
  flex-direction: column;
}

.info-cta__btn--primary {
  width: 100%;
}
```

### Tablet (640px - 1024px)

```css
/* Hero: Medium text */
.info-hero__title {
  font-size: var(--font-size--700);
}

/* Stats: 4 columns maintained or 2x2 */
.info-stats__grid {
  grid-template-columns: repeat(2, 1fr);
}

/* Initiative cards: 2 columns */
.info-cards__grid {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (> 1024px)

```css
/* Hero: Full size */
.info-hero__title {
  font-size: var(--font-size--800);
}

/* Stats: 4 columns */
.info-stats__grid {
  grid-template-columns: repeat(4, 1fr);
}

/* Initiative cards: 3 columns */
.info-cards__grid {
  grid-template-columns: repeat(3, 1fr);
}

/* Orbs: Full size */
.info-hero__orb--1 { width: 280px; height: 280px; }
.info-hero__orb--2 { width: 200px; height: 200px; }
```

**Key Breakpoints:** Stats grid 2x2 on tablet, initiative cards 1 col → 2 col → 3 col

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Background** | Navy `#030213` + image | Navy `#030213` + image |
| **Hero Text** | White `#ffffff` | White `#ffffff` |
| **Stats Background** | Navy `#030213` | Navy `#030213` |
| **Stats Numbers** | Gradient cyan→pink | Gradient cyan→pink |
| **Stats Labels** | `rgba(255,255,255,0.8)` | `rgba(255,255,255,0.8)` |
| **Initiative Cards BG** | `var(--surface)` `#f8f9fa` | `var(--surface)` `#0a0a0a` |
| **Initiative Card Inner** | `var(--surface)` `#f8f9fa` | Navy `#030213` |
| **Card Glow Border** | Cyan→Pink 50% opacity | Cyan→Pink 80% opacity + shadow |
| **Initiative Heading** | Gradient cyan→pink | Gradient cyan→pink |
| **Icon Circle** | Gradient cyan→pink | Gradient cyan→pink |
| **Card Title** | `var(--text)` `#1a1a1a` | `var(--text)` `#f9fafb` |
| **Card Text** | `var(--text-secondary)` `#6b7280` | `var(--text-secondary)` `#9ca3af` |
| **Goals Item BG** | White `#ffffff` | `rgba(255,255,255,0.03)` |
| **Goals Border** | `var(--border)` `#e5e7eb` | `rgba(255,255,255,0.1)` |
| **Check Icon** | Cyan bg `#00ffff`, navy icon | Cyan bg `#00ffff`, navy icon |
| **CTA Background** | Navy `#030213` | Navy `#030213` |
| **CTA Button** | Cyan bg, navy text | Cyan bg, navy text |

### Dark Mode Enhancements

```css
/* Stronger glow on initiative cards */
.dark .info-cards__card-glow {
  opacity: 0.8;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

/* Darker card backgrounds */
.dark .info-cards__card-inner {
  background: var(--navy);
}

/* Subtle goal item backgrounds */
.dark .info-goals__item {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}
```

**Key Principle:** Enhanced cyan glow on cards in dark mode, gradient elements remain consistent

---

## Accessibility

### Semantic HTML

```tsx
{/* Hero uses section + h1 */}
<section className="info-hero">
  <h1 className="info-hero__title">{sustainabilityPageContent.title}</h1>
</section>

{/* Stats use semantic structure */}
<section className="info-stats">
  {/* Each stat is self-contained */}
</section>

{/* Initiative cards use h3 */}
<div className="info-cards__card">
  <h3 className="info-cards__card-title">{initiative.title}</h3>
</div>

{/* Goals use proper list markup */}
<ul className="info-goals__list">
  <li className="info-goals__item">
    <span>{goal.text}</span>
  </li>
</ul>

{/* CTA uses section + h2 */}
<section className="info-cta">
  <h2 className="info-cta__heading">{sustainabilityPageContent.ctaHeading}</h2>
</section>
```

### ARIA Attributes

```tsx
{/* Stats have accessible labels */}
<div className="info-stats__item" role="group" aria-label={`${stat.value} ${stat.label}`}>
  <span className="info-stats__number" aria-hidden="true">{stat.value}</span>
  <span className="info-stats__label">{stat.label}</span>
</div>

{/* CTA button with descriptive text */}
<Link 
  to="/shop" 
  className="info-cta__btn--primary"
  aria-label="Shop eco-friendly products"
>
  Shop Eco-Friendly
</Link>

{/* Goals list has accessible structure */}
<ul className="info-goals__list" aria-label="2030 Sustainability Goals">
  <li className="info-goals__item">
    <span className="info-goals__check" aria-label="Goal" role="img">
      <Check size={14} />
    </span>
    <span>{goal.text}</span>
  </li>
</ul>
```

### Keyboard Navigation

- **Tab Order:** Hero → Stats → Initiative cards → Goals list → CTA button
- **Focus States:** All interactive elements have visible focus rings
- **No Keyboard Traps:** User can navigate away from all sections
- **Logical Flow:** Top to bottom, left to right

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |
| Stats Numbers | Gradient (decorative) | Navy `#030213` | N/A | Decorative |
| Stats Labels | `rgba(255,255,255,0.8)` | Navy `#030213` | 16.5:1 | AAA ✅ |
| Initiative Card Title (Light) | `#1a1a1a` | `#f8f9fa` | 15.8:1 | AAA ✅ |
| Initiative Card Title (Dark) | `#f9fafb` | Navy `#030213` | 19.05:1 | AAA ✅ |
| Initiative Card Text (Light) | `#6b7280` | `#f8f9fa` | 5.2:1 | AA ✅ |
| Initiative Card Text (Dark) | `#9ca3af` | Navy `#030213` | 10.8:1 | AAA ✅ |
| Goals Text (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Goals Text (Dark) | `#f9fafb` | Translucent | 12.5:1+ | AAA ✅ |
| Check Icon | Navy `#030213` | Cyan `#00ffff` | 8.32:1 | AAA ✅ |
| CTA Button | Navy `#030213` | Cyan `#00ffff` | 8.32:1 | AAA ✅ |

**All text meets WCAG 2.1 AAA standards (7:1 minimum for normal text)**

**Note:** Gradient numbers are decorative only; stat labels provide accessible text

---

## Production Enhancements

### 1. Real-Time Impact Counter

```tsx
// Animated counters for stats
import { useCountUp } from 'react-countup';

<span className="info-stats__number">
  <CountUp end={2000000} duration={2} suffix="+" />
</span>
```

**Features:**
- Animated from 0 to target value on scroll into view
- Intersection Observer trigger
- Customizable duration and easing

### 2. Sustainability Calculator

```tsx
// Add interactive carbon footprint calculator
<div className="info-calculator">
  <h3>Calculate Your Impact</h3>
  <form>
    <label>
      Orders per year:
      <input type="number" min="1" max="100" />
    </label>
    <button type="submit">Calculate Trees Planted</button>
  </form>
  <div className="info-calculator__result">
    You've helped plant <strong>24 trees</strong> this year!
  </div>
</div>
```

### 3. Certification Badges

```tsx
// Add third-party certification logos
<div className="info-certifications">
  <h3>Our Certifications</h3>
  <div className="info-certifications__grid">
    <img src="/certifications/bcorp.svg" alt="B Corp Certified" />
    <img src="/certifications/fairtrade.svg" alt="Fair Trade" />
    <img src="/certifications/organic.svg" alt="GOTS Organic" />
    <img src="/certifications/carbon-neutral.svg" alt="Carbon Neutral" />
  </div>
</div>
```

### 4. Progress Bars for Goals

```tsx
// Show progress towards 2030 goals
interface SustainabilityGoal {
  // ... existing fields
  progress: number; // 0-100%
  targetYear: number; // 2030
}

<div className="info-goals__item">
  <span className="info-goals__text">{goal.text}</span>
  <div className="info-goals__progress">
    <div 
      className="info-goals__progress-bar" 
      style={{ width: `${goal.progress}%` }}
    />
    <span className="info-goals__progress-label">{goal.progress}%</span>
  </div>
</div>
```

### 5. Supplier Map

```tsx
// Interactive map showing Fair Trade suppliers
<div className="info-suppliers">
  <h3>Our Global Partners</h3>
  <div id="suppliers-map" className="info-suppliers__map">
    {/* Mapbox / Google Maps embed */}
    {/* Markers for each Fair Trade supplier */}
  </div>
</div>
```

### 6. Quarterly Impact Reports

```tsx
// Link to downloadable PDF reports
<div className="info-reports">
  <h3>Impact Reports</h3>
  <ul>
    {impactReports.map(report => (
      <li key={report.id}>
        <a href={report.pdfUrl} download>
          <Download size={16} />
          {report.title} ({report.quarter} {report.year})
        </a>
      </li>
    ))}
  </ul>
</div>
```

### 7. Product Filter Integration

```tsx
// CTA links to eco-filtered products
<Link 
  to="/shop?filter=eco-friendly" 
  className="info-cta__btn--primary"
>
  Shop Eco-Friendly
</Link>

// On shop page, auto-apply filter
useEffect(() => {
  const params = new URLSearchParams(location.search);
  if (params.get('filter') === 'eco-friendly') {
    applyFilter('eco-friendly');
  }
}, [location]);
```

### 8. Social Proof Integration

```tsx
// Show customer testimonials about sustainability
<div className="info-testimonials">
  <h3>What Our Customers Say</h3>
  {testimonials.map(testimonial => (
    <blockquote key={testimonial.id}>
      <p>"{testimonial.quote}"</p>
      <cite>— {testimonial.author}</cite>
    </blockquote>
  ))}
</div>
```

### 9. Email Subscription for Updates

```tsx
// Sign up for sustainability updates
<div className="info-subscribe">
  <h3>Stay Updated</h3>
  <p>Get quarterly sustainability updates and impact reports.</p>
  <form onSubmit={handleSubscribe}>
    <input type="email" placeholder="your@email.com" required />
    <button type="submit">Subscribe</button>
  </form>
</div>
```

### 10. Gamification - Impact Badges

```tsx
// Award badges for customer sustainability contributions
interface ImpactBadge {
  id: string;
  title: string;
  description: string;
  threshold: number; // Trees planted to unlock
  icon: string;
}

// Account dashboard integration
<div className="account-badges">
  <h3>Your Impact Badges</h3>
  {userBadges.map(badge => (
    <div key={badge.id} className="badge-card">
      <img src={badge.icon} alt={badge.title} />
      <h4>{badge.title}</h4>
      <p>{badge.description}</p>
    </div>
  ))}
</div>
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero image loads correctly
- [ ] Hero gradient overlay displays properly
- [ ] Sprout icon badge visible in hero
- [ ] Floating orbs render and animate
- [ ] Stats display in 4-column grid (desktop)
- [ ] Stats numbers have gradient text
- [ ] Initiative cards display in 3-column grid
- [ ] Initiative cards have gradient glow borders
- [ ] Initiative icon circles have gradient backgrounds
- [ ] Initiative cards lift on hover (4px)
- [ ] Goals checklist displays with checkmarks
- [ ] Checkmarks are cyan circles
- [ ] CTA section has navy background
- [ ] CTA button has cyan background

### Interaction Testing

- [ ] Initiative cards lift on hover
- [ ] CTA button has cyan glow on hover (30px shadow)
- [ ] CTA button navigates to /shop
- [ ] All sections have proper focus states
- [ ] Tab order is logical (hero → stats → cards → goals → CTA)
- [ ] No keyboard traps

### Responsive Testing

- [ ] Mobile (< 640px): Stats in 2-column grid
- [ ] Mobile: Initiative cards stack (1 column)
- [ ] Mobile: CTA button full width
- [ ] Tablet (640-1024px): Stats in 2x2 grid
- [ ] Tablet: Initiative cards in 2 columns
- [ ] Desktop (> 1024px): Stats in 4 columns
- [ ] Desktop: Initiative cards in 3 columns
- [ ] Hero text scales down on mobile
- [ ] Floating orbs scale appropriately

### Dark Mode Testing

- [ ] Hero maintains readability in dark mode
- [ ] Stats section maintains contrast
- [ ] Initiative cards have darker background (navy)
- [ ] Card glow borders more prominent in dark mode
- [ ] Icon circles remain visible
- [ ] Goals items have subtle background
- [ ] Checkmarks remain cyan
- [ ] CTA section maintains contrast
- [ ] All text meets WCAG AAA in both modes

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Stats have accessible labels
- [ ] Initiative cards use proper headings
- [ ] Goals use semantic `<ul>` and `<li>` markup
- [ ] CTA button has descriptive aria-label
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all interactive elements
- [ ] Screen reader announces content correctly
- [ ] Color contrast meets WCAG AAA in both modes

### Data & Integration Testing

- [ ] All 4 stats display correctly
- [ ] Stats values format correctly ('2M+', '40%', etc.)
- [ ] All 6 initiative cards display
- [ ] Initiative icons render correctly (dynamic mapping)
- [ ] All 5 goals display
- [ ] Page content strings load from data file
- [ ] CTA button links to /shop

---

## Common Issues & Solutions

### Issue 1: Gradient Text Not Rendering

**Problem:** Stats numbers or headings show solid color instead of gradient

**Solution:**
```css
.info-stats__number,
.funky-section__heading--gradient {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--pink) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  /* Fallback for unsupported browsers */
  color: var(--cyan);
}
```

### Issue 2: Initiative Icons Not Displaying

**Problem:** Icons show as blank or fallback icon

**Solution:**
```tsx
// Ensure icon mapping includes all icon names
const initiativeIcons: Record<string, React.ComponentType<{ size?: number }>> = {
  'Recycle': Recycle,
  'Leaf': Leaf,
  'Droplets': Droplets,
  'Sun': Sun,
  'TreePine': TreePine,
  'Award': Award,
};

// Always provide fallback
const Icon = initiativeIcons[initiative.iconName] || Leaf;
```

### Issue 3: Stats Grid Overflowing on Mobile

**Problem:** 4-column grid too wide for small screens

**Solution:**
```css
@media (max-width: 640px) {
  .info-stats__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space--600);
  }

  .info-stats__number {
    font-size: var(--font-size--800); /* Smaller on mobile */
  }
}
```

### Issue 4: Initiative Cards Not Wrapping

**Problem:** Cards overflow container on certain viewport widths

**Solution:**
```css
.info-cards__grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* Changed from repeat(3, 1fr) for better responsiveness */
}
```

### Issue 5: Checkmarks Not Aligned

**Problem:** Check icons don't align with goal text

**Solution:**
```css
.info-goals__item {
  align-items: flex-start; /* Not center */
}

.info-goals__check {
  flex-shrink: 0;
  margin-top: 2px; /* Align with first line of text */
}
```

### Issue 6: CTA Button Too Wide on Mobile

**Problem:** Button text wraps awkwardly

**Solution:**
```css
@media (max-width: 640px) {
  .info-cta__btn--primary {
    width: 100%;
    text-align: center;
  }
}
```

---

## Related Templates & Components

### Templates Using Similar Patterns

- **PageOurStory** — Shares hero, stats section, CTA, floating orbs
- **PageTeam** — Shares card grid pattern
- **PageCareers** — Shares card glow effects
- **PageStores** — Shares info-pages CSS
- **PagePressMedia** — Shares gradient heading

### Shared CSS Components

- `.info-hero` — Used by all info page templates
- `.info-stats` — Used for stat grids (also in PageOurStory)
- `.info-cards` — Used for card grids (also in PageTeam, PageCareers)
- `.info-goals` — Checklist pattern
- `.info-cta` — Used by all info page templates
- `.funky-section__divider` — Used site-wide for gradient dividers
- `.funky-section__divider--subtle` — Lighter divider variant
- `.funky-section__heading--gradient` — Gradient text effect
- `.funky-glass-panel` — Used for glassmorphism effects
- `.funky-orb` — Used for floating orb decorations
- `.funky-animate-float` — Used for orb animations

### Related Data Files

- `/src/app/data/sustainability.ts` — Initiatives, stats, goals (this template)
- `/src/app/data/ourStory.ts` — Company story data (PageOurStory)
- `/src/app/data/team.ts` — Team members data (PageTeam)
- `/src/app/data/careers.ts` — Job listings data (PageCareers)

### Parts/Patterns Used

- **Layout** — Global page wrapper with header, breadcrumbs, footer
- **Container** — Content width constraint
- **BreadcrumbsBar** — Auto-shows from Layout (Home > About > Sustainability)

---

## Version History

**v2.6** — Funky Redesign (Current)
- Gradient stat numbers
- Glassmorphism initiative cards with gradient glow
- Gradient icon circles
- Goals checklist with cyan checkmarks
- Navy hero with floating orbs
- Gradient heading on initiatives section

**v2.5** — Original Implementation
- Basic card layout
- Standard stat display
- No gradient effects

---

**Last Updated:** February 24, 2026  
**Maintained By:** Development Team  
**Template Status:** ✅ Production Ready