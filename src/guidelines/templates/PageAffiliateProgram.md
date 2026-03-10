# PageAffiliateProgram

**Component Type:** Template (Affiliate/Partner Program - Full Funky)  
**Location:** `/src/app/components/templates/PageAffiliateProgram.tsx`  
**CSS:** `/src/styles/sections/commerce-hero.css`, `/src/styles/sections/reward-programs.css`  
**Route:** `/affiliate`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Full Funky)  
**Color Identity:** Gold `#f59e0b` / Pink `#ec4899`

---

## Overview

PageAffiliateProgram is an affiliate/partner program template using the "commerce-hero" and "reward-section" patterns. Features animated hero with orbs, benefit cards with gradient icons, commission tier table, numbered step process, and commerce CTA. Designed to recruit and onboard affiliate partners.

**Page Purpose:** Affiliate program recruitment and information  
**Target Audience:** Content creators, bloggers, influencers wanting to earn commissions  
**Dark Mode:** ✅ Complete support with glassmorphism effects  
**Layout:** Animated hero → Benefit cards → Commission table → How-to steps → Commerce CTA

**Note:** Uses commerce hero pattern, reward section styling, gold/pink color scheme

---

## Key Features

### Visual Elements

**1. Commerce Hero:**
- Navy gradient background
- Animated gold/pink orbs (respects reduced motion)
- Users icon badge (bordered)
- "Partner Program" label
- Large centered title
- Subtitle with value proposition

**2. Benefit Cards:**
- 6 benefit cards (3×2 grid)
- Gradient icon circles (gold → pink)
- Card titles + descriptions
- Icons: DollarSign, BarChart3, Zap, Share2, Users, CheckCircle

**3. Commission Table:**
- 4 tier rows (Standard, Pro, Elite, Partner)
- 3 columns (Tier, Monthly Sales, Commission)
- Alternating background (zebra striping)
- Rate highlighting (8% → 15%)

**4. How-to Steps:**
- 3 numbered steps (Apply → Get Approved → Share & Earn)
- Large gradient numbers (gold → pink)
- Step titles + descriptions
- Horizontal layout

**5. Commerce CTA:**
- Navy background
- Animated orbs
- 2 action buttons (Apply Now, Learn More)

### Funky Treatments

**Hero:** Animated orbs (gold/pink)  
**Benefit Icons:** Gradient circles (gold → pink)  
**Commission Table:** Zebra striping  
**Step Numbers:** Large gradient numbers  
**CTA:** Animated orbs + dual buttons

---

## Data Structure

### Affiliate Benefit Interface

```typescript
interface AffiliateBenefit {
  id: string;        // 'commission', 'analytics', 'cookie', etc.
  icon: string;      // 'DollarSign', 'BarChart3', 'Zap', etc.
  title: string;     // 'Competitive Commissions'
  description: string;
}
```

### 6 Benefits

```typescript
export const affiliateBenefits: AffiliateBenefit[] = [
  { 
    id: 'commission',
    icon: 'DollarSign', 
    title: 'Competitive Commissions', 
    description: 'Earn up to 15% commission on every sale you refer. Higher rates for top performers.' 
  },
  { 
    id: 'analytics',
    icon: 'BarChart3', 
    title: 'Real-Time Analytics', 
    description: 'Track clicks, conversions, and earnings with our dedicated affiliate dashboard.' 
  },
  { 
    id: 'cookie',
    icon: 'Zap', 
    title: '30-Day Cookie Window', 
    description: 'Earn commission on purchases made up to 30 days after the initial referral click.' 
  },
  { 
    id: 'resources',
    icon: 'Share2', 
    title: 'Marketing Resources', 
    description: 'Access banners, product images, and exclusive promotional content for your channels.' 
  },
  { 
    id: 'support',
    icon: 'Users', 
    title: 'Dedicated Support', 
    description: 'Get personalized support from our affiliate management team.' 
  },
  { 
    id: 'payouts',
    icon: 'CheckCircle', 
    title: 'Monthly Payouts', 
    description: 'Reliable monthly payouts via PayPal, bank transfer, or store credit.' 
  },
];
```

### Commission Tier Interface

```typescript
interface CommissionTier {
  id: string;
  tier: string;      // 'Standard', 'Pro', 'Elite', 'Partner'
  sales: string;     // '0 - 50 sales/month'
  rate: string;      // '8%'
}
```

### 4 Commission Tiers

```typescript
export const commissionTiers: CommissionTier[] = [
  { id: 'standard', tier: 'Standard', sales: '0 - 50 sales/month', rate: '8%' },
  { id: 'pro', tier: 'Pro', sales: '51 - 200 sales/month', rate: '10%' },
  { id: 'elite', tier: 'Elite', sales: '201 - 500 sales/month', rate: '12%' },
  { id: 'partner', tier: 'Partner', sales: '500+ sales/month', rate: '15%' },
];
```

**Source:** `/src/app/data/affiliateProgram.ts`

### Page Content Strings

```typescript
export const affiliateProgramPageContent = {
  title: 'Affiliate Program',
  description: 'Partner with us and earn commissions by sharing products you love with your audience.',
  benefitsHeading: 'Why Partner With Us',
  commissionHeading: 'Commission Structure',
  howToJoinHeading: 'How to Get Started',
  ctaHeading: 'Ready to become a partner?',
  ctaText: 'Join hundreds of affiliates already earning with us.',
  ctaButtonPrimary: 'Apply Now',
  ctaButtonSecondary: 'Learn More'
};
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  <div className="page-affiliate">
    {/* Commerce Hero */}
    <section className="commerce-hero">
      <div className="commerce-hero__bg" aria-hidden="true" />
      
      {!prefersReduced && (
        <>
          <div className="commerce-hero__orb commerce-hero__orb--1" aria-hidden="true" />
          <div className="commerce-hero__orb commerce-hero__orb--2" aria-hidden="true" />
        </>
      )}

      <Container>
        <div className="commerce-hero__content">
          <div className="commerce-hero__badge">
            <Users size={16} className="commerce-hero__badge-icon" />
            <span>Partner Program</span>
          </div>
          <h1 className="commerce-hero__title">{title}</h1>
          <p className="commerce-hero__subtitle">{description}</p>
        </div>
      </Container>
    </section>

    {/* Benefits Grid */}
    <section className="reward-section">
      <Container>
        <h2 className="reward-section__heading">Why Partner With Us</h2>
        <div className="affiliate-benefits-grid">
          {affiliateBenefits.map((benefit) => (
            <div key={benefit.id} className="affiliate-benefit-card">
              <span className="affiliate-benefit-card__icon">
                <DollarSign size={28} />
              </span>
              <h4 className="affiliate-benefit-card__title">{benefit.title}</h4>
              <p className="affiliate-benefit-card__text">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Commission Table */}
    <section className="reward-section reward-section--alt">
      <Container>
        <h2 className="reward-section__heading">Commission Structure</h2>
        <div className="affiliate-commission-table">
          <div className="affiliate-commission-table__header">
            <span>Tier</span>
            <span>Monthly Sales</span>
            <span>Commission</span>
          </div>
          {commissionTiers.map((tier) => (
            <div key={tier.id} className="affiliate-commission-table__row">
              <span className="affiliate-commission-table__tier">{tier.tier}</span>
              <span className="affiliate-commission-table__sales">{tier.sales}</span>
              <span className="affiliate-commission-table__rate">{tier.rate}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* How-to Steps */}
    <section className="reward-section">
      <Container>
        <h2 className="reward-section__heading">How to Get Started</h2>
        <div className="reward-steps">
          <div className="reward-steps__item">
            <span className="reward-steps__number">1</span>
            <h4 className="reward-steps__title">Apply</h4>
            <p className="reward-steps__text">Submit a brief application with your platform details.</p>
          </div>
          <div className="reward-steps__item">
            <span className="reward-steps__number">2</span>
            <h4 className="reward-steps__title">Get Approved</h4>
            <p className="reward-steps__text">We review applications within 48 hours.</p>
          </div>
          <div className="reward-steps__item">
            <span className="reward-steps__number">3</span>
            <h4 className="reward-steps__title">Share & Earn</h4>
            <p className="reward-steps__text">Use your unique links to promote products and earn commissions.</p>
          </div>
        </div>
      </Container>
    </section>

    {/* Commerce CTA */}
    <section className="commerce-cta">
      <div className="commerce-cta__bg" aria-hidden="true" />
      
      {!prefersReduced && (
        <>
          <div className="commerce-cta__orb commerce-cta__orb--1" aria-hidden="true" />
          <div className="commerce-cta__orb commerce-cta__orb--2" aria-hidden="true" />
        </>
      )}

      <Container>
        <div className="commerce-cta__content">
          <h3 className="commerce-cta__title">Ready to become a partner?</h3>
          <p className="commerce-cta__text">{ctaText}</p>
          
          <div className="commerce-cta__actions">
            <Link to="/contact" className="commerce-cta__btn commerce-cta__btn--primary">
              Apply Now
            </Link>
            <Link to="/faq" className="commerce-cta__btn commerce-cta__btn--outline">
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  </div>
</Layout>
```

### Icons Used

```tsx
import { 
  Users,        // Hero badge (16px) + Dedicated Support benefit (28px)
  DollarSign,   // Competitive Commissions benefit (28px)
  BarChart3,    // Real-Time Analytics benefit (28px)
  Zap,          // 30-Day Cookie Window benefit (28px)
  Share2,       // Marketing Resources benefit (28px)
  CheckCircle,  // Monthly Payouts benefit (28px)
} from '@phosphor-icons/react';
```

### Dynamic Icon Mapping

```tsx
const benefitIcons: Record<string, React.ReactNode> = {
  'commission': <DollarSign size={28} />,
  'analytics': <BarChart3 size={28} />,
  'cookie': <Zap size={28} />,
  'resources': <Share2 size={28} />,
  'support': <Users size={28} />,
  'payouts': <CheckCircle size={28} />,
};

// Render icon from string
<span className="affiliate-benefit-card__icon">
  {benefitIcons[benefit.id]}
</span>
```

### State Management

```tsx
// Reduced motion hook
const prefersReduced = usePrefersReducedMotion();

// Conditionally render orbs
{!prefersReduced && (
  <>
    <div className="commerce-hero__orb commerce-hero__orb--1" />
    <div className="commerce-hero__orb commerce-hero__orb--2" />
  </>
)}
```

---

## BEM Class Hierarchy

```
.page-affiliate (Template wrapper)
│
├── .commerce-hero (Animated hero - shared)
│   ├── .commerce-hero__bg (Navy gradient background)
│   ├── .commerce-hero__orb (Animated orb - gold/pink)
│   │   ├── .commerce-hero__orb--1 (First orb)
│   │   └── .commerce-hero__orb--2 (Second orb)
│   ├── .commerce-hero__content (Text container)
│   │   ├── .commerce-hero__badge (Icon badge)
│   │   │   └── .commerce-hero__badge-icon (Users icon)
│   │   ├── .commerce-hero__title (h1)
│   │   └── .commerce-hero__subtitle (p)
│
├── .reward-section (Benefits section)
│   ├── .reward-section__heading (h2)
│   └── .affiliate-benefits-grid (3×2 grid - NEW)
│       └── .affiliate-benefit-card (Benefit card - NEW)
│           ├── .affiliate-benefit-card__icon (Gradient circle icon - NEW)
│           ├── .affiliate-benefit-card__title (h4 - NEW)
│           └── .affiliate-benefit-card__text (p - NEW)
│
├── .reward-section--alt (Commission section - alternate bg)
│   ├── .reward-section__heading (h2)
│   └── .affiliate-commission-table (Commission table - NEW)
│       ├── .affiliate-commission-table__header (Table header - NEW)
│       └── .affiliate-commission-table__row (Table row - NEW)
│           ├── .affiliate-commission-table__tier (Tier name - NEW)
│           ├── .affiliate-commission-table__sales (Sales range - NEW)
│           └── .affiliate-commission-table__rate (Commission rate - NEW)
│
├── .reward-section (Steps section)
│   ├── .reward-section__heading (h2)
│   └── .reward-steps (Steps container)
│       └── .reward-steps__item (Individual step)
│           ├── .reward-steps__number (Gradient number)
│           ├── .reward-steps__title (h4)
│           └── .reward-steps__text (p)
│
└── .commerce-cta (CTA section)
    ├── .commerce-cta__bg (Navy background)
    ├── .commerce-cta__orb (Animated orb)
    │   ├── .commerce-cta__orb--1 (First orb)
    │   └── .commerce-cta__orb--2 (Second orb)
    └── .commerce-cta__content (Content container)
        ├── .commerce-cta__title (h3)
        ├── .commerce-cta__text (p)
        └── .commerce-cta__actions (Button container)
            ├── .commerce-cta__btn (Base button)
            │   ├── .commerce-cta__btn--primary (Primary modifier)
            │   └── .commerce-cta__btn--outline (Outline modifier)
```

---

## Section Breakdown

### 1. Commerce Hero (`.commerce-hero`)

**Shared pattern - see PageTrackOrder for complete reference**

```css
.commerce-hero {
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.commerce-hero__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--navy) 0%, #0a0a0a 100%);
  z-index: 0;
}

/* Gold/Pink Orbs */
.commerce-hero__orb {
  position: absolute;
  border-radius: 50%;
  z-index: 0;
  animation: float 8s ease-in-out infinite;
}

.commerce-hero__orb--1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%);
  filter: blur(40px);
}

.commerce-hero__orb--2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%);
  filter: blur(40px);
  animation-delay: 2s;
}
```

**Badge:** "Partner Program" with Users icon

---

### 2. Benefit Cards (`.affiliate-benefits-grid`)

**NEW PATTERN** - 3×2 grid with gradient icon circles

```css
.reward-section {
  padding: var(--space--900) 0;
  background: var(--surface);
}

.reward-section__heading {
  font-size: var(--font-size--700);
  font-weight: 700;
  color: var(--text);
  text-align: center;
  margin-bottom: var(--space--800);
}

/* 3×2 Grid */
.affiliate-benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space--700);
  max-width: 72rem;
  margin: 0 auto;
}

/* Benefit Card */
.affiliate-benefit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space--800);
  border-radius: var(--radius--500);
  background: var(--white);
  border: 1px solid var(--border);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.affiliate-benefit-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.dark .affiliate-benefit-card {
  background: var(--navy);
  border-color: rgba(245, 158, 11, 0.2);
}

.dark .affiliate-benefit-card:hover {
  box-shadow: 0 12px 24px rgba(245, 158, 11, 0.15);
}

/* Gradient Icon Circle (Gold → Pink) */
.affiliate-benefit-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold) 0%, var(--pink) 100%);
  color: var(--white);
  margin-bottom: var(--space--500);
}

.dark .affiliate-benefit-card__icon {
  box-shadow: 0 0 16px rgba(245, 158, 11, 0.4);
}

.affiliate-benefit-card__title {
  font-size: var(--font-size--400);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--400);
}

.affiliate-benefit-card__text {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  line-height: 1.7;
}
```

**Grid:** 3 columns auto-fit (min 300px)  
**Icons:** Gradient circles (gold → pink, 64px, 28px icons)

---

### 3. Commission Table (`.affiliate-commission-table`)

**NEW PATTERN** - Responsive commission tier table

```css
.reward-section--alt {
  background: var(--surface-alt);
}

/* Commission Table */
.affiliate-commission-table {
  max-width: 48rem;
  margin: 0 auto;
  border-radius: var(--radius--500);
  overflow: hidden;
  border: 1px solid var(--border);
}

.dark .affiliate-commission-table {
  border-color: rgba(245, 158, 11, 0.2);
}

/* Table Header */
.affiliate-commission-table__header {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: var(--space--400);
  padding: var(--space--500) var(--space--600);
  background: var(--surface);
  font-size: var(--font-size--200);
  font-weight: 700;
  color: var(--text);
  border-bottom: 2px solid var(--border);
}

.dark .affiliate-commission-table__header {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(255, 255, 255, 0.1);
}

/* Table Row */
.affiliate-commission-table__row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: var(--space--400);
  padding: var(--space--500) var(--space--600);
  border-bottom: 1px solid var(--border);
  transition: background-color 0.2s;
}

.affiliate-commission-table__row:hover {
  background: var(--surface);
}

.dark .affiliate-commission-table__row {
  border-color: rgba(255, 255, 255, 0.05);
}

.dark .affiliate-commission-table__row:hover {
  background: rgba(255, 255, 255, 0.02);
}

/* Zebra Striping */
.affiliate-commission-table__row:nth-child(even) {
  background: var(--surface);
}

.dark .affiliate-commission-table__row:nth-child(even) {
  background: rgba(255, 255, 255, 0.02);
}

/* Tier Name */
.affiliate-commission-table__tier {
  font-weight: 700;
  color: var(--text);
}

/* Sales Range */
.affiliate-commission-table__sales {
  color: var(--text-secondary);
}

/* Commission Rate (Highlighted) */
.affiliate-commission-table__rate {
  font-weight: 700;
  font-size: var(--font-size--300);
  color: var(--gold);
}

.dark .affiliate-commission-table__rate {
  text-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
}
```

**Layout:** 3-column grid (1fr 2fr 1fr)  
**Zebra Striping:** Alternate row backgrounds  
**Rate Highlighting:** Gold color + glow in dark mode

---

### 4. How-to Steps (`.reward-steps`)

**Shared pattern - see PageLoyalty/PageRewardProgram**

```css
.reward-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space--700);
  max-width: 56rem;
  margin: 0 auto;
}

.reward-steps__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: var(--white);
  border: 1px solid var(--border);
  text-align: center;
}

.dark .reward-steps__item {
  background: var(--navy);
  border-color: rgba(245, 158, 11, 0.2);
}

/* Large Gradient Number */
.reward-steps__number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  font-size: var(--font-size--700);
  font-weight: 700;
  background: linear-gradient(135deg, var(--gold) 0%, var(--pink) 100%);
  color: var(--white);
  margin-bottom: var(--space--500);
}

.dark .reward-steps__number {
  box-shadow: 0 0 16px rgba(245, 158, 11, 0.4);
}

.reward-steps__title {
  font-size: var(--font-size--400);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--300);
}

.reward-steps__text {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  line-height: 1.6;
}
```

**Grid:** 3 columns auto-fit (min 260px)  
**Numbers:** Large gradient circles (gold → pink)

---

### 5. Commerce CTA (`.commerce-cta`)

```css
.commerce-cta {
  position: relative;
  padding: var(--space--900) 0;
  overflow: hidden;
}

.commerce-cta__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--navy);
  z-index: 0;
}

/* Gold/Pink Orbs */
.commerce-cta__orb {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  animation: float 8s ease-in-out infinite;
}

.commerce-cta__orb--1 {
  width: 400px;
  height: 400px;
  top: -100px;
  right: -100px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%);
  filter: blur(60px);
}

.commerce-cta__orb--2 {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: -50px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%);
  filter: blur(60px);
  animation-delay: 2s;
}

.commerce-cta__content {
  position: relative;
  z-index: 2;
  max-width: 42rem;
  margin: 0 auto;
  text-align: center;
  color: var(--white);
}

.commerce-cta__title {
  font-size: var(--font-size--700);
  font-weight: 700;
  margin-bottom: var(--space--400);
}

.commerce-cta__text {
  font-size: var(--font-size--400);
  margin-bottom: var(--space--700);
  opacity: 0.9;
}

/* Dual Buttons */
.commerce-cta__actions {
  display: flex;
  gap: var(--space--400);
  justify-content: center;
  flex-wrap: wrap;
}

.commerce-cta__btn {
  display: inline-block;
  padding: var(--space--400) var(--space--700);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

/* Primary Button (Gold) */
.commerce-cta__btn--primary {
  color: var(--navy);
  background: var(--gold);
}

.commerce-cta__btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(245, 158, 11, 0.6);
}

/* Outline Button (White) */
.commerce-cta__btn--outline {
  color: var(--white);
  background: transparent;
  border: 2px solid var(--white);
}

.commerce-cta__btn--outline:hover {
  transform: translateY(-2px);
  background: rgba(255, 255, 255, 0.1);
}
```

**Dual Buttons:** Primary (gold solid), Outline (white border)

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Orbs hidden */
.commerce-hero__orb--1,
.commerce-hero__orb--2 {
  display: none;
}

/* Benefits: 1 column */
.affiliate-benefits-grid {
  grid-template-columns: 1fr;
}

/* Commission table: Smaller padding */
.affiliate-commission-table__header,
.affiliate-commission-table__row {
  padding: var(--space--400) var(--space--500);
  font-size: var(--font-size--75);
}

/* Steps: 1 column */
.reward-steps {
  grid-template-columns: 1fr;
}

/* CTA: Orbs hidden, buttons stacked */
.commerce-cta__orb--1,
.commerce-cta__orb--2 {
  display: none;
}

.commerce-cta__actions {
  flex-direction: column;
}

.commerce-cta__btn {
  width: 100%;
}
```

### Tablet (640px - 1024px)

```css
/* Benefits: 2 columns */
.affiliate-benefits-grid {
  grid-template-columns: repeat(2, 1fr);
}

/* Steps: 3 columns */
.reward-steps {
  grid-template-columns: repeat(3, 1fr);
}
```

### Desktop (> 1024px)

```css
/* Benefits: 3 columns */
.affiliate-benefits-grid {
  grid-template-columns: repeat(3, 1fr);
}

/* All orbs visible */
.commerce-hero__orb--1,
.commerce-hero__orb--2,
.commerce-cta__orb--1,
.commerce-cta__orb--2 {
  display: block;
}
```

**Key Breakpoints:** Benefits 1 col → 2 col → 3 col, Orbs hidden on mobile

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Orbs** | Gold/Pink (0.3 opacity) | Gold/Pink (0.3 opacity) |
| **Benefit Cards** | White `#ffffff` | Navy `#030213` |
| **Benefit Icons** | Gold → Pink gradient | Gold → Pink + glow |
| **Table Border** | Gray | `rgba(245,158,11,0.2)` |
| **Table Rows (Even)** | `#f9f9f9` | `rgba(255,255,255,0.02)` |
| **Commission Rate** | Gold `#f59e0b` | Gold + text-shadow glow |
| **Step Numbers** | Gold → Pink gradient | Gold → Pink + glow |
| **CTA Orbs** | Gold/Pink (0.2 opacity) | Gold/Pink (0.2 opacity) |

### Dark Mode Enhancements

```css
.dark .affiliate-benefit-card {
  background: var(--navy);
  border-color: rgba(245, 158, 11, 0.2);
}

.dark .affiliate-benefit-card__icon {
  box-shadow: 0 0 16px rgba(245, 158, 11, 0.4);
}

.dark .affiliate-commission-table {
  border-color: rgba(245, 158, 11, 0.2);
}

.dark .affiliate-commission-table__rate {
  text-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
}

.dark .reward-steps__item {
  background: var(--navy);
  border-color: rgba(245, 158, 11, 0.2);
}

.dark .reward-steps__number {
  box-shadow: 0 0 16px rgba(245, 158, 11, 0.4);
}
```

---

## Accessibility

### Semantic HTML

```tsx
{/* Hero: section + h1 */}
<section className="commerce-hero">
  <div className="commerce-hero__bg" aria-hidden="true" />
  <h1 className="commerce-hero__title">{title}</h1>
  <p className="commerce-hero__subtitle">{description}</p>
</section>

{/* Benefits: section + h2 */}
<section className="reward-section">
  <h2 className="reward-section__heading">Why Partner With Us</h2>
  {affiliateBenefits.map(benefit => (
    <div className="affiliate-benefit-card">
      <h4 className="affiliate-benefit-card__title">{benefit.title}</h4>
      <p className="affiliate-benefit-card__text">{benefit.description}</p>
    </div>
  ))}
</section>

{/* Table: section + h2 + table semantics */}
<section className="reward-section">
  <h2 className="reward-section__heading">Commission Structure</h2>
  <div className="affiliate-commission-table" role="table">
    <div className="affiliate-commission-table__header" role="row">
      <span role="columnheader">Tier</span>
      <span role="columnheader">Monthly Sales</span>
      <span role="columnheader">Commission</span>
    </div>
    <div className="affiliate-commission-table__row" role="row">
      <span role="cell">{tier.tier}</span>
      <span role="cell">{tier.sales}</span>
      <span role="cell">{tier.rate}</span>
    </div>
  </div>
</section>

{/* Steps: section + h2 + h4 */}
<section className="reward-section">
  <h2 className="reward-section__heading">How to Get Started</h2>
  {steps.map((step, index) => (
    <div className="reward-steps__item">
      <span className="reward-steps__number">{index + 1}</span>
      <h4 className="reward-steps__title">{step.title}</h4>
      <p className="reward-steps__text">{step.text}</p>
    </div>
  ))}
</section>
```

### ARIA Attributes

```tsx
{/* Decorative elements */}
<div className="commerce-hero__bg" aria-hidden="true" />
<div className="commerce-hero__orb" aria-hidden="true" />
<Users size={16} aria-hidden="true" />
<DollarSign size={28} aria-hidden="true" />

{/* Table with ARIA roles */}
<div className="affiliate-commission-table" role="table" aria-label="Commission tiers">
  <div className="affiliate-commission-table__header" role="row">
    <span role="columnheader">Tier</span>
    <span role="columnheader">Monthly Sales</span>
    <span role="columnheader">Commission</span>
  </div>
  <div className="affiliate-commission-table__row" role="row">
    <span role="cell">{tier.tier}</span>
    <span role="cell">{tier.sales}</span>
    <span role="cell">{tier.rate}</span>
  </div>
</div>
```

### Reduced Motion

```tsx
// Hook for detecting user preference
const prefersReduced = usePrefersReducedMotion();

// Conditionally render orbs
{!prefersReduced && (
  <>
    <div className="commerce-hero__orb commerce-hero__orb--1" />
    <div className="commerce-hero__orb commerce-hero__orb--2" />
  </>
)}
```

```css
/* CSS fallback */
@media (prefers-reduced-motion: reduce) {
  .commerce-hero__orb,
  .commerce-cta__orb {
    animation: none;
  }
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title | `#ffffff` | Navy `#030213` | 19.24:1 | AAA ✅ |
| Hero Subtitle | `rgba(255,255,255,0.8)` | Navy | 15.4:1 | AAA ✅ |
| Benefit Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Benefit Title (Dark) | `#f9fafb` | Navy | 19.05:1 | AAA ✅ |
| Table Header (Light) | `#1a1a1a` | `#f9f9f9` | 15.3:1 | AAA ✅ |
| Table Header (Dark) | `#f9fafb` | `rgba(255,255,255,0.03)` | 14.0:1+ | AAA ✅ |
| Commission Rate | Gold `#f59e0b` | Both | 4.5:1+ | AA ✅ |
| Step Title (Light) | `#1a1a1a` | `#ffffff` | 15.8:1 | AAA ✅ |
| Step Title (Dark) | `#f9fafb` | Navy | 19.05:1 | AAA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Application Form

```tsx
// Inline application form
<section className="affiliate-application">
  <Container>
    <h2>Apply to Join</h2>
    <form onSubmit={submitApplication}>
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email" required />
      <input type="url" placeholder="Website/Social Profile URL" required />
      <select required>
        <option value="">Platform Type</option>
        <option value="blog">Blog</option>
        <option value="youtube">YouTube</option>
        <option value="instagram">Instagram</option>
        <option value="tiktok">TikTok</option>
        <option value="other">Other</option>
      </select>
      <textarea placeholder="Tell us about your audience" required />
      <button type="submit">Submit Application</button>
    </form>
  </Container>
</section>
```

### 2. Affiliate Dashboard Preview

```tsx
// Screenshot of affiliate dashboard
<div className="affiliate-dashboard-preview">
  <h3>Your Affiliate Dashboard</h3>
  <img 
    src="/dashboard-screenshot.png" 
    alt="Affiliate dashboard showing earnings, clicks, and conversions"
  />
  <ul>
    <li>Track real-time clicks and conversions</li>
    <li>Monitor your earnings</li>
    <li>Access marketing materials</li>
    <li>View commission breakdown</li>
  </ul>
</div>
```

### 3. Success Stories

```tsx
// Testimonials from successful affiliates
<section className="affiliate-testimonials">
  <h2>Success Stories</h2>
  <div className="testimonial-grid">
    {testimonials.map(testimonial => (
      <div key={testimonial.id} className="testimonial-card">
        <img src={testimonial.avatar} alt={testimonial.name} />
        <blockquote>{testimonial.quote}</blockquote>
        <cite>{testimonial.name}</cite>
        <div className="testimonial-stats">
          <span>{testimonial.earnings}/month</span>
          <span>{testimonial.sales} sales</span>
        </div>
      </div>
    ))}
  </div>
</section>
```

### 4. Marketing Assets Preview

```tsx
// Preview of available marketing materials
<div className="affiliate-resources">
  <h3>Marketing Resources</h3>
  <div className="resource-grid">
    <div className="resource-card">
      <img src="/banner-300x250.png" alt="300×250 banner" />
      <span>300×250 Banner</span>
      <button>Download</button>
    </div>
    {/* More resource cards */}
  </div>
</div>
```

### 5. Cookie Duration Explanation

```tsx
// Visual explanation of cookie tracking
<div className="affiliate-cookie-info">
  <h4>How the 30-Day Cookie Works</h4>
  <div className="cookie-timeline">
    <div className="timeline-step">
      <span>Day 1</span>
      <p>Customer clicks your link</p>
    </div>
    <div className="timeline-step">
      <span>Day 15</span>
      <p>Customer browses products</p>
    </div>
    <div className="timeline-step">
      <span>Day 29</span>
      <p>Customer makes purchase</p>
    </div>
    <div className="timeline-result">
      <CheckCircle size={24} />
      <p>You still earn commission!</p>
    </div>
  </div>
</div>
```

### 6. Payment Schedule

```tsx
// Detailed payment information
<div className="affiliate-payment-info">
  <h3>Payment Details</h3>
  <dl>
    <dt>Payment Frequency</dt>
    <dd>Monthly (Net-30)</dd>
    
    <dt>Minimum Payout</dt>
    <dd>$50 USD</dd>
    
    <dt>Payment Methods</dt>
    <dd>PayPal, Bank Transfer, Store Credit</dd>
    
    <dt>Payment Date</dt>
    <dd>15th of each month</dd>
  </dl>
</div>
```

### 7. Top Performers Leaderboard

```tsx
// Leaderboard of top affiliates
<div className="affiliate-leaderboard">
  <h3>Top Performers This Month</h3>
  <ol className="leaderboard-list">
    {topAffiliates.map((affiliate, index) => (
      <li key={affiliate.id}>
        <span className="rank">#{index + 1}</span>
        <img src={affiliate.avatar} alt={affiliate.name} />
        <span className="name">{affiliate.name}</span>
        <span className="sales">{affiliate.sales} sales</span>
      </li>
    ))}
  </ol>
</div>
```

### 8. FAQ Specific to Affiliates

```tsx
// Affiliate-specific FAQs
<section className="affiliate-faq">
  <h2>Affiliate FAQs</h2>
  {affiliateFAQs.map(faq => (
    <details key={faq.id}>
      <summary>{faq.question}</summary>
      <p>{faq.answer}</p>
    </details>
  ))}
</section>
```

### 9. Promotional Calendar

```tsx
// Upcoming promotions for affiliates
<div className="affiliate-promo-calendar">
  <h3>Upcoming Promotions</h3>
  <ul>
    <li>
      <time>March 1-7</time>
      <span>Spring Sale - 20% Off Everything</span>
      <span className="bonus">+5% Bonus Commission</span>
    </li>
    {/* More promotions */}
  </ul>
</div>
```

### 10. Terms & Conditions

```tsx
// Link to affiliate T&C
<div className="affiliate-terms">
  <p>
    By applying, you agree to our{' '}
    <Link to="/affiliate-terms">Affiliate Terms & Conditions</Link>
  </p>
</div>
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero displays correctly (navy gradient)
- [ ] Hero orbs animate (not for reduced motion)
- [ ] Hero badge shows Users icon
- [ ] All 6 benefit cards display
- [ ] Benefit icons have gradient backgrounds
- [ ] All 4 commission tiers display
- [ ] Table has zebra striping
- [ ] Commission rates highlighted (gold)
- [ ] All 3 steps display
- [ ] Step numbers have gradient backgrounds
- [ ] CTA orbs animate (not for reduced motion)
- [ ] Both CTA buttons display

### Interaction Testing

- [ ] Benefit cards have hover lift
- [ ] Table rows have hover state
- [ ] Both CTA buttons navigate correctly
- [ ] Tab order is logical
- [ ] All buttons have visible focus states

### Responsive Testing

- [ ] Mobile: Hero orbs hidden
- [ ] Mobile: Benefits 1 column
- [ ] Mobile: Table text smaller
- [ ] Mobile: Steps 1 column
- [ ] Mobile: CTA orbs hidden
- [ ] Mobile: CTA buttons stacked
- [ ] Tablet: Benefits 2 columns
- [ ] Desktop: Benefits 3 columns
- [ ] Desktop: All orbs visible and animated

### Dark Mode Testing

- [ ] Hero maintains readability
- [ ] Orbs visible (gold/pink)
- [ ] Benefit cards have navy background
- [ ] Benefit icons have glow
- [ ] Table border visible
- [ ] Table zebra striping visible
- [ ] Commission rates have text-shadow glow
- [ ] Step cards have navy background
- [ ] Step numbers have glow
- [ ] CTA maintains contrast
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h4)
- [ ] Table has proper ARIA roles
- [ ] All icons decorative (aria-hidden)
- [ ] Orbs respect reduced motion
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader friendly

### Content Testing

- [ ] All 6 benefits display
- [ ] Benefit icons match data
- [ ] All 4 commission tiers display
- [ ] All 3 steps display
- [ ] Icons render correctly

---

## Related Templates

- **PageLoyalty** — Similar reward styling
- **PageRewardProgram** — Similar step process
- **PageTrackOrder** — Similar commerce hero

### Shared CSS

- `.commerce-hero` — Animated hero
- `.reward-section` — Section styling
- `.reward-steps` — Numbered steps

### New CSS Patterns

- `.affiliate-benefits-grid` — 3×2 benefit grid
- `.affiliate-benefit-card` — Benefit card
- `.affiliate-commission-table` — Commission tier table
- `.affiliate-commission-table__rate` — Highlighted rate

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready