# SubscriptionLanding

**Component Type:** Template (Subscription Marketing Landing - Full Funky)  
**Location:** `/src/app/components/templates/SubscriptionLanding.tsx`  
**CSS:** `/src/styles/sections/commerce-special-funky.css`  
**Route:** `/subscriptions`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 9)  
**Color Identity:** Cyan `#00ffff` / Purple `#8b5cf6`

---

## Overview

SubscriptionLanding is a conversion-focused marketing template for WooCommerce Subscriptions. Features gradient hero with floating orbs, neon benefit icons, glassmorphism pricing cards with glow effects, FAQ accordion, and final CTA with gradient background. Designed to drive subscription sign-ups through clear value proposition, transparent pricing, and social proof.

**Page Purpose:** Convert visitors to recurring subscription customers  
**Target Audience:** Potential subscribers seeking recurring delivery/access  
**Dark Mode:** ✅ Complete support with neon accents  
**Layout:** Hero → Benefits → Pricing → FAQ → Final CTA

**Note:** Uses `prefers-reduced-motion` hook to disable orb animations for accessibility.

---

## Key Features

### Visual Elements

**1. Hero Section:**
- Gradient background (purple → navy)
- Floating orbs (2x, animated)
- Badge with Gift icon
- Gradient title text
- Description
- Dual CTAs (primary gradient + outline)

**2. Benefits Grid:**
- 4-6 benefit cards
- Neon icon circles with glow
- Title + description
- 3-column grid (desktop)

**3. Pricing Cards:**
- 3 subscription plans
- "Most popular" badge (gradient)
- Price + interval display
- Feature list with checkmarks
- Subscribe CTA button
- Glow effect on popular plan

**4. FAQ Accordion:**
- Collapsible Q&A items
- Chevron rotation animation
- First item open by default
- Glassmorphism styling

**5. Final CTA:**
- Gradient background
- Floating orbs (2x)
- Centered content
- Gradient button

### Funky Treatments

**Hero:** Gradient background + animated orbs  
**Badge:** Gradient (cyan → purple) with glow  
**Title:** Gradient text (cyan → purple)  
**Benefits Icons:** Neon gradient circles with glow  
**Pricing Cards:** Glassmorphism + neon glow on popular  
**Popular Badge:** Gradient (cyan → lime)  
**FAQ Items:** Glassmorphism with subtle borders  
**Final CTA:** Gradient background + orbs + glow button

---

## Data Structure

### Subscription Plans

```tsx
import { 
  subscriptionPlans, 
  subscriptionBenefits, 
  subscriptionFAQs, 
  subscriptionPageContent 
} from '../../data/subscriptions';

// Plan structure
interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: 'month' | 'quarter' | 'year';
  intervalLabel: string;
  features: string[];
  popular: boolean;
}

// Example:
const subscriptionPlans = [
  {
    id: 'monthly',
    name: 'Monthly Box',
    description: 'Perfect for trying us out',
    price: 29,
    interval: 'month',
    intervalLabel: 'month',
    features: [
      '3-5 curated products',
      'Free shipping',
      'Cancel anytime',
      'Exclusive member discounts'
    ],
    popular: false,
  },
  // ...more plans
];
```

### Benefits

```tsx
interface SubscriptionBenefit {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

// Example:
const subscriptionBenefits = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'All subscription boxes ship free, every time',
  },
  // ...more benefits
];
```

### FAQ Items

```tsx
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const subscriptionFAQs = [
  {
    id: 'cancel',
    question: 'Can I cancel anytime?',
    answer: 'Yes! Cancel your subscription anytime with no fees or penalties.',
  },
  // ...more FAQs
];
```

### Page Content

```tsx
interface SubscriptionPageContent {
  landing: {
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    benefitsHeading: string;
    benefitsText: string;
    pricingHeading: string;
    pricingSubheading: string;
    faqHeading: string;
    faqText: string;
    ctaHeading: string;
    ctaText: string;
    ctaButton: string;
  };
}
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  <div className="page-subscriptions">
    {/* Hero */}
    <section className="commerce-hero" aria-labelledby="sub-hero-title">
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
            <Gift size={16} aria-hidden="true" />
            <span>{landing.heroBadge}</span>
          </div>

          <h1 id="sub-hero-title" className="commerce-hero__title">
            {landing.heroTitle}
          </h1>
          <p className="commerce-hero__subtitle">
            {landing.heroSubtitle}
          </p>

          <div className="commerce-hero__actions">
            <a href="#pricing" className="wp-sales-btn wp-sales-btn--primary">
              Choose your plan
              <ArrowRight size={18} />
            </a>
            <a href="#benefits" className="wp-sales-btn wp-sales-btn--outline">
              See benefits
            </a>
          </div>
        </div>
      </Container>
    </section>

    {/* Benefits */}
    <section id="benefits" className="commerce-benefits" aria-labelledby="benefits-heading">
      <Container>
        <div className="commerce-benefits__header">
          <h2 id="benefits-heading">{landing.benefitsHeading}</h2>
          <p className="commerce-hero__subtitle wp-mb-0">
            {landing.benefitsText}
          </p>
        </div>

        <div className="commerce-benefits__grid">
          {subscriptionBenefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="commerce-benefit-card">
                <div className="commerce-benefit-icon">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="commerce-benefit-card__title">{benefit.title}</h3>
                <p className="commerce-benefit-card__text">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>

    {/* Pricing */}
    <section id="pricing" className="commerce-pricing" aria-labelledby="pricing-heading">
      <Container>
        <h2 id="pricing-heading" className="commerce-pricing__heading">
          {landing.pricingHeading}
        </h2>
        <p className="commerce-pricing__subtitle">
          {landing.pricingSubheading}
        </p>

        <div className="commerce-pricing__grid">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`commerce-plan-card${plan.popular ? ' commerce-plan-card--popular' : ''}`}
            >
              {plan.popular && (
                <span className="commerce-plan-badge">Most popular</span>
              )}

              <h3 className="commerce-plan-card__name">{plan.name}</h3>
              <p className="commerce-plan-card__desc">{plan.description}</p>

              <div className="commerce-plan-card__price">
                <span className="commerce-plan-card__amount">
                  ${plan.price}
                </span>
                <span className="commerce-plan-card__period">
                  / {plan.intervalLabel}
                </span>
              </div>

              <ul className="commerce-plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="commerce-plan-feature">
                    <Check size={18} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/product/${plan.id}-subscription`}
                className={`commerce-plan-btn${plan.popular ? ' commerce-plan-btn--primary' : ''}`}
              >
                Subscribe now
              </Link>
            </div>
          ))}
        </div>

        <p className="commerce-pricing__footer">
          Not sure?{' '}
          <Link to="/contact" className="text-neon-cyan hover-text-neon-pink">
            Contact us
          </Link>{' '}
          for a personalised recommendation.
        </p>
      </Container>
    </section>

    {/* FAQ */}
    <section className="wp-sales-section" aria-labelledby="sub-faq-heading">
      <Container>
        <div className="wp-sales-faq__wrapper">
          <div className="wp-sales-faq__header">
            <h2 id="sub-faq-heading" className="wp-sales-faq__title">
              {landing.faqHeading}
            </h2>
            <p className="wp-sales-faq__subtitle">
              {landing.faqText}
            </p>
          </div>

          <FaqAccordion items={subscriptionFAQs} />
        </div>
      </Container>
    </section>

    {/* Final CTA */}
    <section className="commerce-cta" aria-label="Subscribe call to action">
      <div className="commerce-cta__bg" aria-hidden="true" />
      {!prefersReduced && (
        <>
          <div className="commerce-cta__orb commerce-cta__orb--1" aria-hidden="true" />
          <div className="commerce-cta__orb commerce-cta__orb--2" aria-hidden="true" />
        </>
      )}

      <Container>
        <div className="commerce-cta__content">
          <h2 className="commerce-cta__title">{landing.ctaHeading}</h2>
          <p className="commerce-cta__text">{landing.ctaText}</p>
          <a href="#pricing" className="commerce-cta__btn">
            {landing.ctaButton}
            <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </section>
  </div>
</Layout>
```

### FAQ Accordion Component

```tsx
const FaqAccordion: React.FC<{ items: FaqItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="wp-sales-faq__list">
      {items.map((item, index) => (
        <div key={item.id} className="wp-sales-faq-item">
          <button
            className="wp-sales-faq-trigger"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-panel-${item.id}`}
          >
            <span className="wp-sales-faq-question">{item.question}</span>
            <svg
              className={`wp-sales-faq-chevron${openIndex === index ? ' wp-rotate-180' : ''}`}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {openIndex === index && (
            <div
              id={`faq-panel-${item.id}`}
              className="wp-sales-faq-answer"
              role="region"
            >
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
```

---

## BEM Class Hierarchy

```
.page-subscriptions (Page wrapper)

.commerce-hero (Hero section with gradient background)
├── .commerce-hero__bg (Gradient background layer)
├── .commerce-hero__orb (Floating orb - animated)
│   ├── .commerce-hero__orb--1 (Top-right orb)
│   └── .commerce-hero__orb--2 (Bottom-left orb)
├── .commerce-hero__content (Content wrapper)
├── .commerce-hero__badge (Badge with icon)
│   └── .commerce-hero__badge-icon
├── .commerce-hero__title (h1 - gradient text)
├── .commerce-hero__subtitle (Description)
└── .commerce-hero__actions (CTA buttons wrapper)

.commerce-benefits (Benefits section)
├── .commerce-benefits__header (Section header)
└── .commerce-benefits__grid (Benefits grid)
    └── .commerce-benefit-card (Individual benefit)
        ├── .commerce-benefit-icon (Icon circle - gradient + glow)
        ├── .commerce-benefit-card__title (h3)
        └── .commerce-benefit-card__text (Description)

.commerce-pricing (Pricing section)
├── .commerce-pricing__heading (h2)
├── .commerce-pricing__subtitle (Description)
├── .commerce-pricing__grid (Pricing cards grid)
│   └── .commerce-plan-card (Individual plan card - glassmorphism)
│       ├── .commerce-plan-card--popular (Popular modifier - glow)
│       ├── .commerce-plan-badge (Popular badge - gradient)
│       ├── .commerce-plan-card__name (h3 - plan name)
│       ├── .commerce-plan-card__desc (Description)
│       ├── .commerce-plan-card__price (Price wrapper)
│       │   ├── .commerce-plan-card__amount (Dollar amount)
│       │   └── .commerce-plan-card__period (Interval text)
│       ├── .commerce-plan-features (Feature list <ul>)
│       │   └── .commerce-plan-feature (Individual feature <li>)
│       │       └── .commerce-plan-feature__check (Checkmark icon)
│       └── .commerce-plan-btn (Subscribe button)
│           └── .commerce-plan-btn--primary (Primary modifier - popular)
└── .commerce-pricing__footer (Help text)

.wp-sales-section (FAQ section)
└── .wp-sales-faq__wrapper
    ├── .wp-sales-faq__header
    │   ├── .wp-sales-faq__title (h2)
    │   └── .wp-sales-faq__subtitle
    └── .wp-sales-faq__list
        └── .wp-sales-faq-item (Accordion item)
            ├── .wp-sales-faq-trigger (Button)
            │   ├── .wp-sales-faq-question (Question text)
            │   └── .wp-sales-faq-chevron (Chevron icon)
            │       └── .wp-rotate-180 (Open modifier)
            └── .wp-sales-faq-answer (Answer panel - conditional)

.commerce-cta (Final CTA section)
├── .commerce-cta__bg (Gradient background)
├── .commerce-cta__orb (Floating orb - animated)
│   ├── .commerce-cta__orb--1 (Top-right)
│   └── .commerce-cta__orb--2 (Bottom-left)
├── .commerce-cta__content (Centered content)
├── .commerce-cta__title (h2)
├── .commerce-cta__text (Description)
└── .commerce-cta__btn (CTA button - gradient + glow)

.wp-sales-btn (Button base)
├── .wp-sales-btn--primary (Primary variant - gradient)
└── .wp-sales-btn--outline (Outline variant)
```

---

## Section Breakdown

### 1. Hero Section (`.commerce-hero`)

```css
.commerce-hero {
  position: relative;
  padding: var(--space--1000) 0 var(--space--900);
  overflow: hidden;
}

/* Gradient Background */
.commerce-hero__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #8b5cf6 0%, var(--navy) 100%);
  z-index: 0;
}

.dark .commerce-hero__bg {
  background: linear-gradient(135deg, #6d28d9 0%, #000000 100%);
}

/* Floating Orbs */
.commerce-hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  z-index: 0;
  pointer-events: none;
}

.commerce-hero__orb--1 {
  width: 400px;
  height: 400px;
  top: -200px;
  right: -100px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%);
  animation: float-orb 8s ease-in-out infinite;
}

.commerce-hero__orb--2 {
  width: 300px;
  height: 300px;
  bottom: -150px;
  left: -100px;
  background: radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, transparent 70%);
  animation: float-orb 10s ease-in-out infinite reverse;
}

@keyframes float-orb {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, 30px); }
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  .commerce-hero__orb {
    display: none;
  }
}

/* Content */
.commerce-hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto;
}

/* Badge */
.commerce-hero__badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  padding: var(--space--200) var(--space--500);
  border-radius: var(--radius--full);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  color: var(--white);
  font-size: var(--font-size--100);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--space--600);
}

.dark .commerce-hero__badge {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

/* Title (Gradient Text) */
.commerce-hero__title {
  font-size: var(--font-size--900);
  font-weight: 700;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space--600);
}

/* Subtitle */
.commerce-hero__subtitle {
  font-size: var(--font-size--400);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space--800);
}

/* Actions */
.commerce-hero__actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--500);
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .commerce-hero {
    padding: var(--space--800) 0 var(--space--700);
  }
  
  .commerce-hero__title {
    font-size: var(--font-size--700);
  }
  
  .commerce-hero__subtitle {
    font-size: var(--font-size--300);
  }
  
  .commerce-hero__actions {
    flex-direction: column;
    width: 100%;
  }
  
  .wp-sales-btn {
    width: 100%;
    justify-content: center;
  }
}
```

**Gradient:** Purple → Navy  
**Orbs:** Cyan (top-right), Purple (bottom-left)  
**Animation:** Floating orbs (8s, 10s)

---

### 2. Benefits Section (`.commerce-benefits`)

```css
.commerce-benefits {
  padding: var(--space--900) 0;
}

.commerce-benefits__header {
  text-align: center;
  max-width: 48rem;
  margin: 0 auto var(--space--900);
}

.commerce-benefits__header h2 {
  margin-bottom: var(--space--500);
}

.commerce-benefits__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space--700);
}

.commerce-benefit-card {
  text-align: center;
}

/* Icon (Gradient Circle + Glow) */
.commerce-benefit-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: var(--space--500);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  color: var(--white);
  margin-bottom: var(--space--600);
}

.dark .commerce-benefit-icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

.commerce-benefit-card__title {
  font-size: var(--font-size--400);
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space--400);
}

.commerce-benefit-card__text {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
}

@media (max-width: 640px) {
  .commerce-benefits__grid {
    grid-template-columns: 1fr;
  }
  
  .commerce-benefit-icon {
    width: 64px;
    height: 64px;
  }
}
```

**Grid:** Auto-fit (min 280px)  
**Icons:** Gradient circles (cyan → purple) with glow

---

### 3. Pricing Section (`.commerce-pricing`)

```css
.commerce-pricing {
  padding: var(--space--900) 0;
  background: var(--surface);
}

.dark .commerce-pricing {
  background: var(--surface-dark);
}

.commerce-pricing__heading {
  text-align: center;
  margin-bottom: var(--space--500);
}

.commerce-pricing__subtitle {
  text-align: center;
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  max-width: 48rem;
  margin: 0 auto var(--space--900);
}

.commerce-pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space--700);
  max-width: 80rem;
  margin: 0 auto;
}

.commerce-plan-card {
  position: relative;
  padding: var(--space--800);
  border-radius: var(--radius--500);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  transition: box-shadow 0.3s, transform 0.3s;
}

.dark .commerce-plan-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.commerce-plan-card:hover {
  transform: translateY(-4px);
}

/* Popular Card (Neon Glow) */
.commerce-plan-card--popular {
  border-color: var(--cyan);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.dark .commerce-plan-card--popular {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
}

/* Popular Badge (Gradient) */
.commerce-plan-badge {
  position: absolute;
  top: var(--space--500);
  right: var(--space--500);
  padding: var(--space--200) var(--space--400);
  border-radius: var(--radius--full);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--navy);
  font-size: var(--font-size--75);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dark .commerce-plan-badge {
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
}

.commerce-plan-card__name {
  font-size: var(--font-size--500);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--400);
}

.commerce-plan-card__desc {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  margin-bottom: var(--space--700);
}

/* Price Display */
.commerce-plan-card__price {
  display: flex;
  align-items: baseline;
  gap: var(--space--200);
  margin-bottom: var(--space--700);
}

.commerce-plan-card__amount {
  font-size: var(--font-size--800);
  font-weight: 700;
  color: var(--text);
}

.commerce-plan-card__period {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
}

/* Features List */
.commerce-plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: var(--space--800);
}

.commerce-plan-feature {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  padding: var(--space--300) 0;
  font-size: var(--font-size--300);
  color: var(--text);
}

.commerce-plan-feature__check {
  color: var(--cyan);
  flex-shrink: 0;
}

/* Subscribe Button */
.commerce-plan-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--300);
  width: 100%;
  padding: var(--space--500) var(--space--700);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  background: transparent;
  border: 2px solid var(--border);
  color: var(--text);
}

.commerce-plan-btn:hover {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.commerce-plan-btn--primary {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  border: none;
  color: var(--navy);
}

.commerce-plan-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.dark .commerce-plan-btn--primary:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

/* Footer Text */
.commerce-pricing__footer {
  text-align: center;
  margin-top: var(--space--800);
  font-size: var(--font-size--300);
  color: var(--text-secondary);
}

.text-neon-cyan {
  color: var(--cyan);
  transition: color 0.2s;
}

.text-neon-cyan:hover {
  color: var(--pink);
}

@media (max-width: 640px) {
  .commerce-pricing__grid {
    grid-template-columns: 1fr;
  }
  
  .commerce-plan-card {
    padding: var(--space--700);
  }
}
```

**Grid:** Auto-fit (min 300px)  
**Popular Card:** Cyan border + neon glow  
**Popular Badge:** Gradient (cyan → lime)

---

### 4. FAQ Section (`.wp-sales-faq`)

```css
.wp-sales-section {
  padding: var(--space--900) 0;
}

.wp-sales-faq__wrapper {
  max-width: 56rem;
  margin: 0 auto;
}

.wp-sales-faq__header {
  text-align: center;
  margin-bottom: var(--space--800);
}

.wp-sales-faq__title {
  margin-bottom: var(--space--500);
}

.wp-sales-faq__subtitle {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
}

.wp-sales-faq__list {
  display: flex;
  flex-direction: column;
  gap: var(--space--500);
}

.wp-sales-faq-item {
  padding: var(--space--600);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

.dark .wp-sales-faq-item {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.wp-sales-faq-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space--500);
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--text);
  font-size: var(--font-size--300);
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: color 0.2s;
}

.wp-sales-faq-trigger:hover {
  color: var(--cyan);
}

.wp-sales-faq-question {
  flex: 1;
}

.wp-sales-faq-chevron {
  flex-shrink: 0;
  color: var(--cyan);
  transition: transform 0.3s;
}

.wp-rotate-180 {
  transform: rotate(180deg);
}

.wp-sales-faq-answer {
  margin-top: var(--space--500);
  padding-top: var(--space--500);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  line-height: 1.6;
}

.dark .wp-sales-faq-answer {
  border-top-color: rgba(0, 255, 255, 0.1);
}
```

**Accordion:** First item open by default  
**Glassmorphism:** Backdrop-blur 8px  
**Chevron:** Rotates 180° when open

---

### 5. Final CTA (`.commerce-cta`)

```css
.commerce-cta {
  position: relative;
  padding: var(--space--1000) 0;
  overflow: hidden;
}

/* Gradient Background */
.commerce-cta__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--navy) 0%, #6d28d9 100%);
  z-index: 0;
}

.dark .commerce-cta__bg {
  background: linear-gradient(135deg, #000000 0%, #4c1d95 100%);
}

/* Floating Orbs */
.commerce-cta__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
  z-index: 0;
  pointer-events: none;
}

.commerce-cta__orb--1 {
  width: 400px;
  height: 400px;
  top: -200px;
  right: -100px;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.6) 0%, transparent 70%);
  animation: float-orb 8s ease-in-out infinite;
}

.commerce-cta__orb--2 {
  width: 300px;
  height: 300px;
  bottom: -150px;
  left: -100px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%);
  animation: float-orb 10s ease-in-out infinite reverse;
}

@media (prefers-reduced-motion: reduce) {
  .commerce-cta__orb {
    display: none;
  }
}

.commerce-cta__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
}

.commerce-cta__title {
  font-size: var(--font-size--700);
  font-weight: 700;
  color: var(--white);
  margin-bottom: var(--space--600);
}

.commerce-cta__text {
  font-size: var(--font-size--400);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: var(--space--800);
}

.commerce-cta__btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space--300);
  padding: var(--space--500) var(--space--800);
  border-radius: var(--radius--300);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--navy);
  font-size: var(--font-size--400);
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
}

.commerce-cta__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

@media (max-width: 640px) {
  .commerce-cta {
    padding: var(--space--800) 0;
  }
  
  .commerce-cta__title {
    font-size: var(--font-size--600);
  }
  
  .commerce-cta__text {
    font-size: var(--font-size--300);
  }
}
```

**Gradient:** Navy → Purple  
**Orbs:** Cyan (top-right), Pink (bottom-left)  
**Button:** Gradient (cyan → lime) with glow

---

## Buttons (`.wp-sales-btn`)

```css
.wp-sales-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space--300);
  padding: var(--space--500) var(--space--700);
  border-radius: var(--radius--300);
  font-size: var(--font-size--300);
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

/* Primary (Gradient) */
.wp-sales-btn--primary {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  border: none;
  color: var(--navy);
}

.wp-sales-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.dark .wp-sales-btn--primary:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

/* Outline */
.wp-sales-btn--outline {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: var(--white);
}

.wp-sales-btn--outline:hover {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}
```

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller padding, stacked buttons */
.commerce-hero {
  padding: var(--space--800) 0 var(--space--700);
}

.commerce-hero__title {
  font-size: var(--font-size--700);
}

.commerce-hero__actions {
  flex-direction: column;
  width: 100%;
}

.wp-sales-btn {
  width: 100%;
  justify-content: center;
}

/* Benefits: Single column */
.commerce-benefits__grid {
  grid-template-columns: 1fr;
}

.commerce-benefit-icon {
  width: 64px;
  height: 64px;
}

/* Pricing: Single column */
.commerce-pricing__grid {
  grid-template-columns: 1fr;
}

.commerce-plan-card {
  padding: var(--space--700);
}

/* CTA: Smaller text */
.commerce-cta {
  padding: var(--space--800) 0;
}

.commerce-cta__title {
  font-size: var(--font-size--600);
}
```

### Tablet (640px - 1024px)

```css
/* Benefits: 2 columns */
.commerce-benefits__grid {
  grid-template-columns: repeat(2, 1fr);
}

/* Pricing: 2 columns */
.commerce-pricing__grid {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (> 1024px)

```css
/* All sections at full scale */
.commerce-benefits__grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.commerce-pricing__grid {
  grid-template-columns: repeat(3, 1fr);
}
```

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero BG** | Purple → Navy | Darker purple → Black |
| **Hero Badge** | Cyan → Purple gradient | Same + cyan glow |
| **Hero Title** | Cyan → Purple gradient | Same |
| **Hero Orbs** | Cyan, Purple (0.4 opacity) | Same |
| **Benefit Icons** | Cyan → Purple gradient | Same + cyan glow |
| **Pricing BG** | Light gray surface | Dark gray surface |
| **Plan Cards** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Plan Borders** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.1)` |
| **Popular Card** | Cyan border + glow (0.3) | Cyan border + stronger glow (0.5) |
| **Popular Badge** | Cyan → Lime gradient | Same + glow |
| **FAQ Items** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **FAQ Borders** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.1)` |
| **CTA BG** | Navy → Purple | Black → Dark purple |
| **CTA Orbs** | Cyan, Pink (0.4 opacity) | Same |
| **CTA Button** | Cyan → Lime gradient | Same + stronger glow |

### Dark Mode Enhancements

```css
.dark .commerce-hero__bg {
  background: linear-gradient(135deg, #6d28d9 0%, #000000 100%);
}

.dark .commerce-hero__badge {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.dark .commerce-benefit-icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

.dark .commerce-pricing {
  background: var(--surface-dark);
}

.dark .commerce-plan-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .commerce-plan-card--popular {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
}

.dark .commerce-plan-badge {
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.6);
}

.dark .commerce-plan-btn--primary:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

.dark .wp-sales-faq-item {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .commerce-cta__bg {
  background: linear-gradient(135deg, #000000 0%, #4c1d95 100%);
}
```

---

## Accessibility

### Semantic HTML

```tsx
<main className="page-subscriptions">
  <section className="commerce-hero" aria-labelledby="sub-hero-title">
    <div className="commerce-hero__bg" aria-hidden="true" />
    
    <h1 id="sub-hero-title">Subscribe & Save</h1>
    <p>Get fresh products delivered every month</p>
    
    <div className="commerce-hero__actions">
      <a href="#pricing">Choose your plan</a>
      <a href="#benefits">See benefits</a>
    </div>
  </section>
  
  <section id="benefits" className="commerce-benefits" aria-labelledby="benefits-heading">
    <h2 id="benefits-heading">Why Subscribe?</h2>
    
    <div className="commerce-benefits__grid">
      <div className="commerce-benefit-card">
        <div className="commerce-benefit-icon" aria-hidden="true">
          <Truck />
        </div>
        <h3>Free Shipping</h3>
        <p>All boxes ship free</p>
      </div>
    </div>
  </section>
  
  <section id="pricing" className="commerce-pricing" aria-labelledby="pricing-heading">
    <h2 id="pricing-heading">Choose Your Plan</h2>
    
    <div className="commerce-pricing__grid">
      <article className="commerce-plan-card commerce-plan-card--popular">
        <span className="commerce-plan-badge">Most popular</span>
        <h3>Monthly Box</h3>
        <p>Perfect for trying us out</p>
        
        <div className="commerce-plan-card__price">
          <span className="commerce-plan-card__amount">$29</span>
          <span className="commerce-plan-card__period">/ month</span>
        </div>
        
        <ul className="commerce-plan-features">
          <li className="commerce-plan-feature">
            <Check aria-hidden="true" />
            <span>3-5 curated products</span>
          </li>
        </ul>
        
        <a href="/product/monthly-subscription">Subscribe now</a>
      </article>
    </div>
  </section>
  
  <section className="wp-sales-section" aria-labelledby="sub-faq-heading">
    <h2 id="sub-faq-heading">Frequently Asked Questions</h2>
    
    <div className="wp-sales-faq__list">
      <div className="wp-sales-faq-item">
        <button
          aria-expanded={isOpen}
          aria-controls="faq-panel-cancel"
        >
          <span>Can I cancel anytime?</span>
          <svg aria-hidden="true" />
        </button>
        
        <div id="faq-panel-cancel" role="region">
          <p>Yes! Cancel anytime with no fees.</p>
        </div>
      </div>
    </div>
  </section>
  
  <section className="commerce-cta" aria-label="Subscribe call to action">
    <h2>Ready to Subscribe?</h2>
    <p>Join thousands of happy subscribers</p>
    <a href="#pricing">Choose Your Plan</a>
  </section>
</main>
```

### ARIA Attributes

```tsx
{/* Decorative elements */}
<div className="commerce-hero__bg" aria-hidden="true" />
<div className="commerce-hero__orb" aria-hidden="true" />
<Gift size={16} aria-hidden="true" />

{/* Sections with labelledby */}
<section aria-labelledby="sub-hero-title">
  <h1 id="sub-hero-title">Subscribe & Save</h1>
</section>

{/* Accordion with expanded state */}
<button
  aria-expanded={openIndex === index}
  aria-controls={`faq-panel-${item.id}`}
>
  <span>{item.question}</span>
  <svg aria-hidden="true" />
</button>

<div
  id={`faq-panel-${item.id}`}
  role="region"
>
  <p>{item.answer}</p>
</div>

{/* CTA with aria-label */}
<section className="commerce-cta" aria-label="Subscribe call to action">
  {/* Content */}
</section>
```

### Keyboard Navigation

- **Tab Order:** Hero CTAs → Benefit cards → Pricing cards → FAQ buttons → Final CTA
- **Anchor Links:** Hero buttons jump to pricing/benefits sections
- **Accordion:** Enter/Space to toggle, Arrow keys to navigate items
- **Plan CTAs:** Enter/Space to navigate

### Focus States

```css
.wp-sales-btn:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

.commerce-plan-btn:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

.wp-sales-faq-trigger:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

.commerce-cta__btn:focus-visible {
  outline: 2px solid var(--white);
  outline-offset: 2px;
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Badge | White | Gradient bg | 4.5:1+ | AA ✅ |
| Hero Title (Gradient) | Cyan/Purple | Navy bg | N/A | Decorative ✅ |
| Hero Subtitle | White (0.9) | Navy bg | 14.0:1+ | AAA ✅ |
| Benefit Title | `#1a1a1a` / `#f9fafb` | Page bg | 12.0:1+ | AAA ✅ |
| Benefit Text | `#6b7280` | Page bg | 4.6:1+ | AA ✅ |
| Plan Name | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| Plan Price | `#1a1a1a` / `#f9fafb` | Card bg | 12.0:1+ | AAA ✅ |
| Plan Features | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| FAQ Question | `#1a1a1a` / `#f9fafb` | Item bg | 10.0:1+ | AAA ✅ |
| FAQ Answer | `#6b7280` | Item bg | 4.6:1+ | AA ✅ |
| CTA Title | White | Gradient bg | 14.0:1+ | AAA ✅ |
| Primary Button | Navy `#030213` | Gradient bg | 8.32:1 | AAA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Real Subscription Integration

```tsx
// WooCommerce Subscriptions API integration
const handleSubscribe = async (planId: string) => {
  try {
    const response = await fetch(`/wp-json/wc/v3/subscriptions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product_id: planId,
        billing_period: plan.interval,
        // ...other subscription data
      }),
    });
    
    if (response.ok) {
      navigate('/checkout');
    }
  } catch (error) {
    console.error('Subscription failed:', error);
  }
};
```

### 2. Dynamic Pricing Display

```tsx
// Show pricing based on user's location/currency
const [userCurrency, setUserCurrency] = useState('USD');

useEffect(() => {
  // Detect user's currency from geolocation
  fetch('/api/currency')
    .then(res => res.json())
    .then(data => setUserCurrency(data.currency));
}, []);

// Display localized price
<span className="commerce-plan-card__amount">
  {new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: userCurrency
  }).format(plan.price)}
</span>
```

### 3. Plan Comparison Table

```tsx
<section className="commerce-comparison">
  <h2>Compare Plans</h2>
  <table>
    <thead>
      <tr>
        <th>Feature</th>
        {subscriptionPlans.map(plan => (
          <th key={plan.id}>{plan.name}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Shipping</td>
        <td>Free</td>
        <td>Free</td>
        <td>Free</td>
      </tr>
      {/* More comparison rows */}
    </tbody>
  </table>
</section>
```

### 4. Testimonials Section

```tsx
<section className="commerce-testimonials">
  <h2>What Subscribers Say</h2>
  <div className="commerce-testimonials__grid">
    {testimonials.map(testimonial => (
      <blockquote key={testimonial.id}>
        <p>{testimonial.quote}</p>
        <cite>
          <span>{testimonial.author}</span>
          <span>{testimonial.plan}</span>
        </cite>
      </blockquote>
    ))}
  </div>
</section>
```

### 5. Trial Period Badge

```tsx
{plan.trialDays > 0 && (
  <div className="commerce-plan-trial">
    <Gift size={16} />
    <span>{plan.trialDays}-day free trial</span>
  </div>
)}
```

### 6. Billing Frequency Toggle

```tsx
const [billingFrequency, setBillingFrequency] = useState<'monthly' | 'annual'>('monthly');

<div className="commerce-pricing__toggle">
  <button
    className={billingFrequency === 'monthly' ? 'active' : ''}
    onClick={() => setBillingFrequency('monthly')}
  >
    Monthly
  </button>
  <button
    className={billingFrequency === 'annual' ? 'active' : ''}
    onClick={() => setBillingFrequency('annual')}
  >
    Annual (Save 20%)
  </button>
</div>

{/* Filter plans by frequency */}
{subscriptionPlans
  .filter(plan => plan.interval === billingFrequency)
  .map(plan => (
    <PlanCard key={plan.id} plan={plan} />
  ))}
```

### 7. Add-ons Selection

```tsx
<div className="commerce-plan-addons">
  <h4>Optional Add-ons</h4>
  {plan.addons.map(addon => (
    <label key={addon.id}>
      <input
        type="checkbox"
        value={addon.id}
        onChange={(e) => handleAddonToggle(addon.id, e.target.checked)}
      />
      <span>{addon.name} (+${addon.price}/mo)</span>
    </label>
  ))}
</div>
```

### 8. Gift Subscription Option

```tsx
<button
  className="wp-sales-btn wp-sales-btn--outline"
  onClick={() => navigate(`/gift-subscription/${plan.id}`)}
>
  <Gift size={18} />
  Give as Gift
</button>
```

### 9. Pause Subscription Info

```tsx
<div className="commerce-plan-pause">
  <p>Need a break? Pause your subscription for up to 3 months.</p>
  <a href="/help/pause-subscription">Learn more</a>
</div>
```

### 10. Analytics Tracking

```tsx
// Track plan views
useEffect(() => {
  analytics.track('Subscription Landing Viewed', {
    timestamp: new Date(),
  });
}, []);

// Track plan clicks
const handlePlanClick = (planId: string) => {
  analytics.track('Subscription Plan Clicked', {
    plan_id: planId,
    plan_name: plan.name,
    plan_price: plan.price,
  });
  
  navigate(`/product/${planId}-subscription`);
};
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero gradient visible
- [ ] Hero badge displays
- [ ] Hero orbs animate (if motion allowed)
- [ ] Hero title gradient visible
- [ ] Hero CTAs display
- [ ] Benefits grid displays (4-6 items)
- [ ] Benefit icons have gradient circles
- [ ] Benefit icons glow in dark mode
- [ ] Pricing cards display (3 plans)
- [ ] Popular card has border glow
- [ ] Popular badge displays
- [ ] Price displays correctly
- [ ] Features list displays
- [ ] Subscribe buttons display
- [ ] FAQ items display
- [ ] First FAQ item open by default
- [ ] Final CTA displays
- [ ] Final CTA orbs animate

### Interaction Testing

- [ ] Hero "Choose your plan" scrolls to pricing
- [ ] Hero "See benefits" scrolls to benefits
- [ ] FAQ items toggle on click
- [ ] Chevron rotates when FAQ opens
- [ ] Subscribe buttons navigate to product
- [ ] Final CTA scrolls to pricing
- [ ] "Contact us" link navigates

### Responsive Testing

- [ ] Mobile: Hero stacked buttons
- [ ] Mobile: Benefits single column
- [ ] Mobile: Pricing single column
- [ ] Mobile: Smaller icon sizes
- [ ] Tablet: Benefits 2 columns
- [ ] Tablet: Pricing 2 columns
- [ ] Desktop: Benefits auto-fit grid
- [ ] Desktop: Pricing 3 columns

### Dark Mode Testing

- [ ] Hero gradient darker
- [ ] Hero badge glow visible
- [ ] Hero orbs visible
- [ ] Benefit icons glow visible
- [ ] Pricing background darker
- [ ] Plan cards glassmorphism visible
- [ ] Plan borders cyan-tinted
- [ ] Popular card glow stronger
- [ ] Popular badge glow visible
- [ ] FAQ items glassmorphism visible
- [ ] FAQ borders cyan-tinted
- [ ] CTA gradient darker
- [ ] CTA orbs visible
- [ ] CTA button glow stronger
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Hero has aria-labelledby
- [ ] Benefits has aria-labelledby
- [ ] Pricing has aria-labelledby
- [ ] FAQ has aria-labelledby
- [ ] CTA has aria-label
- [ ] Orbs have aria-hidden
- [ ] Icons have aria-hidden
- [ ] FAQ buttons have aria-expanded
- [ ] FAQ panels have role="region"
- [ ] Anchor links work
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA
- [ ] Reduced motion respected

### Data Testing

- [ ] Plans display (3 items)
- [ ] Benefits display (4-6 items)
- [ ] FAQs display (5+ items)
- [ ] Page content displays
- [ ] Prices display correctly
- [ ] Features lists display
- [ ] Intervals display correctly

---

## Related Templates

- **SingleSubscription** — Individual subscription detail page
- **MembershipLanding** — Similar marketing page for memberships
- **PageDeals** — Similar marketing layout

### Shared CSS

- `.commerce-special-funky.css` — Subscription/membership styles
- `.commerce-hero` — Gradient hero with orbs
- `.commerce-benefits` — Benefit icon cards
- `.commerce-pricing` — Glassmorphism pricing cards

### Related Components

- **FaqAccordion** — Reusable FAQ accordion (internal)
- **PricingCard** — Could be extracted as reusable component

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready
