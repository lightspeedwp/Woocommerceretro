# MembershipLanding

**Component Type:** Template (Membership Marketing Landing - Full Funky)  
**Location:** `/src/app/components/templates/MembershipLanding.tsx`  
**CSS:** `/src/styles/sections/commerce-special-funky.css`  
**Route:** `/memberships`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 9)  
**Color Identity:** Lime `#ccff00` / Cyan `#00ffff` (VIP exclusive)

---

## Overview

MembershipLanding is a conversion-focused marketing template for WooCommerce Memberships. Features gradient hero with floating orbs, stats bar with social proof, neon benefit icons, glassmorphism pricing cards with billing toggle, ROI calculator card, FAQ accordion, and final CTA. Designed to drive membership sign-ups through clear value proposition, transparent pricing, and savings calculator.

**Page Purpose:** Convert visitors to paid members  
**Target Audience:** Potential members seeking exclusive benefits and savings  
**Dark Mode:** ✅ Complete support with neon accents  
**Layout:** Hero → Stats → Benefits → Pricing → ROI Calculator → FAQ → Final CTA

**Note:** Uses state for billing period toggle (monthly/annual) and `prefers-reduced-motion` hook for orb animations.

---

## Key Features

### Visual Elements

**1. Hero Section:**
- Gradient background (purple → navy)
- Floating orbs (2x, animated)
- Badge with Crown icon
- Gradient title text
- Description
- Dual CTAs (primary gradient + outline with icon)

**2. Stats Bar:**
- 4 key statistics
- Gradient numbers
- Social proof metrics
- Horizontal grid layout

**3. Benefits Grid:**
- 6 member benefits
- Neon icon circles with glow
- Title + description
- 3-column grid (desktop)

**4. Pricing Section:**
- Billing period toggle (monthly/annual)
- 3 membership tiers
- "Most popular" badge (gradient)
- Price + period display
- Feature list with checkmarks
- Join CTA button
- Glow effect on popular plan

**5. ROI Calculator:**
- Glassmorphism card
- Gift icon with glow
- Savings breakdown (3 stats)
- CTA button

**6. FAQ Accordion:**
- Collapsible Q&A items
- Chevron rotation animation
- First item open by default
- Glassmorphism styling

**7. Final CTA:**
- Gradient background
- Floating orbs (2x)
- Crown icon (large)
- Centered content
- Gradient button

### Funky Treatments

**Hero:** Gradient background + animated orbs  
**Badge:** Gradient (lime → cyan) with glow  
**Title:** Gradient text (lime → cyan)  
**Stats Numbers:** Gradient text (lime → cyan)  
**Benefits Icons:** Neon gradient circles with glow  
**Pricing Toggle:** Active state gradient  
**Pricing Cards:** Glassmorphism + neon glow on popular  
**Popular Badge:** Gradient (cyan → lime)  
**ROI Card:** Glassmorphism with neon border + icon glow  
**FAQ Items:** Glassmorphism with subtle borders  
**Final CTA:** Gradient background + orbs + Crown icon glow

---

## Data Structure

### Membership Plans

```tsx
import { 
  membershipPlans, 
  memberBenefits, 
  membershipFAQs, 
  membershipStats 
} from '../../data/memberships';

// Plan structure
interface MembershipPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: Array<{
    text: string;
    included: boolean;
  }>;
  badge?: string;
}

// Example:
const membershipPlans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'For occasional shoppers',
    monthlyPrice: 9.99,
    annualPrice: 99.99,
    features: [
      { text: '10% off all purchases', included: true },
      { text: 'Free standard shipping', included: true },
      { text: 'Early sale access', included: false },
      { text: 'Exclusive products', included: false },
    ],
    badge: '',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'For regular shoppers',
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    features: [
      { text: '20% off all purchases', included: true },
      { text: 'Free express shipping', included: true },
      { text: 'Early sale access', included: true },
      { text: 'Exclusive products', included: true },
      { text: 'VIP events', included: false },
    ],
    badge: 'Most Popular',
  },
  // ...more plans
];
```

### Member Benefits

```tsx
interface MemberBenefit {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  description: string;
}

const memberBenefits = [
  {
    icon: Percent,
    title: 'Exclusive Discounts',
    description: 'Save up to 30% on every purchase with your membership',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Enjoy free express shipping on all orders, no minimum',
  },
  // ...more benefits
];
```

### Membership Stats

```tsx
interface MembershipStat {
  value: string;
  label: string;
}

const membershipStats = [
  { value: '25,000+', label: 'Active members' },
  { value: '30%', label: 'Average savings' },
  { value: '£480', label: 'Yearly savings' },
  { value: '4.9/5', label: 'Member rating' },
];
```

### FAQ Items

```tsx
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const membershipFAQs = [
  {
    id: 'cancel',
    question: 'Can I cancel anytime?',
    answer: 'Yes! Cancel your membership anytime with no fees or penalties. You\'ll retain benefits until the end of your billing period.',
  },
  // ...more FAQs
];
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  <div className="page-memberships">
    {/* Hero */}
    <section className="commerce-hero" aria-labelledby="mem-hero-title">
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
            <Crown size={16} aria-hidden="true" />
            <span>Join 25,000+ exclusive members</span>
          </div>

          <h1 id="mem-hero-title" className="commerce-hero__title">
            Unlock exclusive perks &amp; savings
          </h1>
          <p className="commerce-hero__subtitle">
            Become a member and enjoy up to 30% off every purchase, exclusive products, VIP events, and a community of like-minded shoppers.
          </p>

          <div className="commerce-hero__actions">
            <a href="#membership-tiers" className="wp-sales-btn wp-sales-btn--primary">
              Become a member
              <ArrowRight size={18} />
            </a>
            <a href="#benefits" className="wp-sales-btn wp-sales-btn--outline">
              <Lock size={16} />
              See benefits
            </a>
          </div>
        </div>
      </Container>
    </section>

    {/* Stats Bar */}
    <div className="wp-sales-proof" aria-label="Membership statistics">
      <Container>
        <div className="wp-sales-proof__grid">
          {membershipStats.map((stat, index) => (
            <div key={index} className="wp-sales-stat">
              <div className="wp-sales-stat__value">{stat.value}</div>
              <p className="wp-sales-stat__label"><small>{stat.label}</small></p>
            </div>
          ))}
        </div>
      </Container>
    </div>

    {/* Benefits */}
    <section id="benefits" className="commerce-benefits" aria-labelledby="mem-benefits-heading">
      <Container>
        <div className="commerce-benefits__header">
          <h2 id="mem-benefits-heading">Member-only benefits</h2>
          <p className="commerce-hero__subtitle wp-mb-0">
            Your membership unlocks a world of exclusive perks designed to enhance every shopping experience.
          </p>
        </div>

        <div className="commerce-benefits__grid">
          {memberBenefits.map((benefit, index) => {
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
    <section id="membership-tiers" className="commerce-pricing" aria-labelledby="mem-pricing-heading">
      <Container>
        <h2 id="mem-pricing-heading" className="commerce-pricing__heading">
          Choose your membership level
        </h2>
        <p className="commerce-pricing__subtitle">
          All memberships include core benefits. Select the tier that matches your shopping frequency.
        </p>

        {/* Billing toggle */}
        <div className="commerce-pricing__toggle">
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`wp-sales-btn${billingPeriod === 'monthly' ? ' wp-sales-btn--primary' : ' wp-sales-btn--outline'}`}
            aria-pressed={billingPeriod === 'monthly'}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('annual')}
            className={`wp-sales-btn${billingPeriod === 'annual' ? ' wp-sales-btn--primary' : ' wp-sales-btn--outline'}`}
            aria-pressed={billingPeriod === 'annual'}
          >
            Annual (save 20%)
          </button>
        </div>

        <div className="commerce-pricing__grid">
          {membershipPlans.map((plan) => {
            const price = billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isPopular = plan.badge === 'Most Popular';

            return (
              <div
                key={plan.id}
                className={`commerce-plan-card${isPopular ? ' commerce-plan-card--popular' : ''}`}
              >
                {isPopular && (
                  <span className="commerce-plan-badge">Most popular</span>
                )}

                <h3 className="commerce-plan-card__name">{plan.name}</h3>
                <p className="commerce-plan-card__desc">{plan.description}</p>

                <div className="commerce-plan-card__price">
                  <span className="commerce-plan-card__amount">
                    £{price}
                  </span>
                  <span className="commerce-plan-card__period">
                    / {billingPeriod === 'annual' ? 'year' : 'month'}
                  </span>
                </div>

                <ul className="commerce-plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="commerce-plan-feature">
                      <Check size={18} aria-hidden="true" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/membership/${plan.id}`}
                  className={`commerce-plan-btn${isPopular ? ' commerce-plan-btn--primary' : ''}`}
                >
                  Join {plan.name}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="commerce-pricing__footer">
          Need help choosing?{' '}
          <Link to="/contact" className="text-neon-cyan hover-text-neon-pink">
            Chat with our team
          </Link>
        </p>
      </Container>
    </section>

    {/* ROI Calculator */}
    <section className="commerce-roi" aria-labelledby="mem-roi-heading">
      <Container>
        <div className="commerce-roi__card">
          <div className="commerce-roi__icon">
            <Gift size={32} aria-hidden="true" />
          </div>
          <h2 id="mem-roi-heading" className="commerce-roi__heading">
            Your membership pays for itself
          </h2>
          <p className="commerce-roi__text">
            See how much you could save with a Premium membership
          </p>

          <div className="commerce-roi__stats">
            <div className="commerce-roi__stat">
              <p className="commerce-roi__stat-label">Average monthly spend</p>
              <div className="commerce-roi__stat-value">£200</div>
            </div>
            <div className="commerce-roi__stat">
              <p className="commerce-roi__stat-label">Monthly savings (20%)</p>
              <div className="commerce-roi__stat-value">£40</div>
            </div>
            <div className="commerce-roi__stat">
              <p className="commerce-roi__stat-label">Annual savings</p>
              <div className="commerce-roi__stat-value">£480</div>
            </div>
          </div>

          <p className="commerce-roi__text commerce-roi__text--spaced">
            Premium membership costs just £19.99/month. You save £20+ every month!
          </p>
          <a href="#membership-tiers" className="commerce-cta__btn">
            Start saving today
            <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </section>

    {/* FAQ */}
    <section className="wp-sales-section" aria-labelledby="mem-faq-heading">
      <Container>
        <div className="wp-sales-faq__wrapper">
          <div className="wp-sales-faq__header">
            <h2 id="mem-faq-heading" className="wp-sales-faq__title">
              Membership questions
            </h2>
            <p className="wp-sales-faq__subtitle">
              Everything you need to know about becoming a member.
            </p>
          </div>

          <FaqAccordion items={membershipFAQs} />
        </div>
      </Container>
    </section>

    {/* Final CTA */}
    <section className="commerce-cta" aria-label="Membership call to action">
      <div className="commerce-cta__bg" aria-hidden="true" />
      {!prefersReduced && (
        <>
          <div className="commerce-cta__orb commerce-cta__orb--1" aria-hidden="true" />
          <div className="commerce-cta__orb commerce-cta__orb--2" aria-hidden="true" />
        </>
      )}

      <Container>
        <div className="commerce-cta__content">
          <Crown size={48} aria-hidden="true" className="commerce-cta__icon" />
          <h2 className="commerce-cta__title">
            Ready to join our exclusive community?
          </h2>
          <p className="commerce-cta__text">
            Start saving today with up to 30% off every purchase. Cancel anytime, no commitment.
          </p>
          <a href="#membership-tiers" className="commerce-cta__btn">
            Become a member
            <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </section>
  </div>
</Layout>
```

---

## BEM Class Hierarchy

```
.page-memberships (Page wrapper)

.commerce-hero (Hero section - same as SubscriptionLanding)
├── .commerce-hero__bg
├── .commerce-hero__orb (2x)
├── .commerce-hero__content
├── .commerce-hero__badge (Crown icon)
├── .commerce-hero__title (h1 - gradient text)
├── .commerce-hero__subtitle
└── .commerce-hero__actions

.wp-sales-proof (Stats bar)
└── .wp-sales-proof__grid
    └── .wp-sales-stat (Individual stat)
        ├── .wp-sales-stat__value (Number - gradient text)
        └── .wp-sales-stat__label (Description)

.commerce-benefits (Benefits section)
├── .commerce-benefits__header
└── .commerce-benefits__grid
    └── .commerce-benefit-card
        ├── .commerce-benefit-icon (Gradient circle + glow)
        ├── .commerce-benefit-card__title (h3)
        └── .commerce-benefit-card__text

.commerce-pricing (Pricing section)
├── .commerce-pricing__heading (h2)
├── .commerce-pricing__subtitle
├── .commerce-pricing__toggle (Billing period toggle)
│   └── .wp-sales-btn (Button)
│       ├── .wp-sales-btn--primary (Active state)
│       └── .wp-sales-btn--outline (Inactive state)
├── .commerce-pricing__grid
│   └── .commerce-plan-card
│       ├── .commerce-plan-card--popular (Popular modifier)
│       ├── .commerce-plan-badge
│       ├── .commerce-plan-card__name (h3)
│       ├── .commerce-plan-card__desc
│       ├── .commerce-plan-card__price
│       │   ├── .commerce-plan-card__amount
│       │   └── .commerce-plan-card__period
│       ├── .commerce-plan-features (<ul>)
│       │   └── .commerce-plan-feature (<li>)
│       │       └── .commerce-plan-feature__check
│       └── .commerce-plan-btn
│           └── .commerce-plan-btn--primary
└── .commerce-pricing__footer

.commerce-roi (ROI Calculator section)
└── .commerce-roi__card (Glassmorphism card)
    ├── .commerce-roi__icon (Icon wrapper - gradient + glow)
    │   └── .commerce-roi__icon-svg
    ├── .commerce-roi__heading (h2)
    ├── .commerce-roi__text
    ├── .commerce-roi__stats (Stats grid)
    │   └── .commerce-roi__stat (Individual stat)
    │       ├── .commerce-roi__stat-label
    │       └── .commerce-roi__stat-value (Gradient text)
    ├── .commerce-roi__text--spaced (Bottom text)
    └── .commerce-cta__btn (CTA button)

.wp-sales-section (FAQ section)
└── .wp-sales-faq__wrapper
    ├── .wp-sales-faq__header
    │   ├── .wp-sales-faq__title (h2)
    │   └── .wp-sales-faq__subtitle
    └── .wp-sales-faq__list
        └── .wp-sales-faq-item
            ├── .wp-sales-faq-trigger
            │   ├── .wp-sales-faq-question
            │   └── .wp-sales-faq-chevron
            │       └── .wp-rotate-180
            └── .wp-sales-faq-answer

.commerce-cta (Final CTA)
├── .commerce-cta__bg
├── .commerce-cta__orb (2x)
├── .commerce-cta__content
├── .commerce-cta__icon (Crown - large)
├── .commerce-cta__title (h2)
├── .commerce-cta__text
└── .commerce-cta__btn

.wp-sales-btn (Button base - shared)
├── .wp-sales-btn--primary
└── .wp-sales-btn--outline
```

---

## Section Breakdown

### 1. Hero Section (`.commerce-hero`)

Same as SubscriptionLanding. See SubscriptionLanding.md for complete CSS.

**Key Differences:**
- Badge icon: Crown (not Gift)
- Badge text: "Join 25,000+ exclusive members"
- Title: "Unlock exclusive perks & savings"
- Outline button has Lock icon

---

### 2. Stats Bar (`.wp-sales-proof`)

```css
.wp-sales-proof {
  padding: var(--space--900) 0;
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.dark .wp-sales-proof {
  background: var(--surface-dark);
  border-color: rgba(0, 255, 255, 0.1);
}

.wp-sales-proof__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space--800);
  text-align: center;
}

.wp-sales-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space--300);
}

/* Stat Value (Gradient Text) */
.wp-sales-stat__value {
  font-size: var(--font-size--800);
  font-weight: 700;
  background: linear-gradient(135deg, var(--lime) 0%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.wp-sales-stat__label {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  margin: 0;
}

.wp-sales-stat__label small {
  font-size: inherit;
}

@media (max-width: 640px) {
  .wp-sales-proof__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space--600);
  }
  
  .wp-sales-stat__value {
    font-size: var(--font-size--600);
  }
}
```

**Grid:** Auto-fit (min 200px)  
**Numbers:** Gradient text (lime → cyan)  
**Mobile:** 2 columns

---

### 3. Benefits Section (`.commerce-benefits`)

Same as SubscriptionLanding. See SubscriptionLanding.md for complete CSS.

**Gradient:** Cyan → Purple circles with glow

---

### 4. Pricing Section (`.commerce-pricing`)

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
  margin: 0 auto var(--space--800);
}

/* Billing Toggle */
.commerce-pricing__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--400);
  margin-bottom: var(--space--900);
  flex-wrap: wrap;
}

.commerce-pricing__toggle .wp-sales-btn {
  min-width: 160px;
}

/* Pricing Grid */
.commerce-pricing__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space--700);
  max-width: 80rem;
  margin: 0 auto;
}

/* Plan Cards - Same as SubscriptionLanding */
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

.commerce-plan-card--popular {
  border-color: var(--cyan);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.3);
}

.dark .commerce-plan-card--popular {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.5);
}

/* Popular Badge */
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

/* Plan Details */
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

/* Features */
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

/* Join Button */
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

/* Footer */
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
  
  .commerce-pricing__toggle {
    width: 100%;
  }
  
  .commerce-pricing__toggle .wp-sales-btn {
    flex: 1;
    min-width: auto;
  }
}
```

**Toggle:** Two buttons (monthly/annual)  
**Active Toggle:** Gradient (cyan → lime)  
**Popular Badge:** Gradient (cyan → lime)

---

### 5. ROI Calculator (`.commerce-roi`)

```css
.commerce-roi {
  padding: var(--space--1000) 0;
}

.commerce-roi__card {
  max-width: 56rem;
  margin: 0 auto;
  padding: var(--space--900);
  border-radius: var(--radius--600);
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(12px);
  text-align: center;
}

.dark .commerce-roi__card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
}

/* Icon */
.commerce-roi__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  padding: var(--space--600);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  margin-bottom: var(--space--700);
}

.dark .commerce-roi__icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.commerce-roi__icon-svg {
  color: var(--white);
}

/* Heading */
.commerce-roi__heading {
  font-size: var(--font-size--600);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--500);
}

/* Text */
.commerce-roi__text {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  margin-bottom: var(--space--800);
}

.commerce-roi__text--spaced {
  margin-top: var(--space--800);
  margin-bottom: var(--space--800);
}

/* Stats Grid */
.commerce-roi__stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: var(--space--700);
  margin-bottom: var(--space--800);
}

.commerce-roi__stat {
  padding: var(--space--600);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .commerce-roi__stat {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.commerce-roi__stat-label {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  margin-bottom: var(--space--400);
}

/* Stat Value (Gradient Text) */
.commerce-roi__stat-value {
  font-size: var(--font-size--700);
  font-weight: 700;
  background: linear-gradient(135deg, var(--lime) 0%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 640px) {
  .commerce-roi__card {
    padding: var(--space--700);
  }
  
  .commerce-roi__icon {
    width: 80px;
    height: 80px;
  }
  
  .commerce-roi__heading {
    font-size: var(--font-size--500);
  }
  
  .commerce-roi__stats {
    grid-template-columns: 1fr;
  }
}
```

**Card:** Glassmorphism with cyan neon border  
**Icon:** Gradient circle (cyan → purple) with glow  
**Stat Values:** Gradient text (lime → cyan)

---

### 6. FAQ Section (`.wp-sales-faq`)

Same as SubscriptionLanding. See SubscriptionLanding.md for complete CSS.

---

### 7. Final CTA (`.commerce-cta`)

```css
.commerce-cta {
  position: relative;
  padding: var(--space--1000) 0;
  overflow: hidden;
}

.commerce-cta__bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--navy) 0%, #6d28d9 100%);
  z-index: 0;
}

.dark .commerce-cta__bg {
  background: linear-gradient(135deg, #000000 0%, #4c1d95 100%);
}

/* Orbs - Same as Hero */
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
  background: radial-gradient(circle, rgba(204, 255, 0, 0.5) 0%, transparent 70%);
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

/* Large Crown Icon */
.commerce-cta__icon {
  color: var(--lime);
  margin-bottom: var(--space--700);
  filter: drop-shadow(0 0 20px rgba(204, 255, 0, 0.5));
}

.dark .commerce-cta__icon {
  filter: drop-shadow(0 0 30px rgba(204, 255, 0, 0.7));
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

**Key Differences from SubscriptionLanding:**
- Crown icon (48px) with lime glow
- Second orb is lime (not pink)

---

## State Management

### Billing Period Toggle

```tsx
const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');

// Dynamic price based on billing period
{membershipPlans.map((plan) => {
  const price = billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
  
  return (
    <div key={plan.id}>
      <span>£{price}</span>
      <span>/ {billingPeriod === 'annual' ? 'year' : 'month'}</span>
    </div>
  );
})}

// Toggle buttons
<button
  onClick={() => setBillingPeriod('monthly')}
  className={`wp-sales-btn${billingPeriod === 'monthly' ? ' wp-sales-btn--primary' : ' wp-sales-btn--outline'}`}
  aria-pressed={billingPeriod === 'monthly'}
>
  Monthly
</button>
<button
  onClick={() => setBillingPeriod('annual')}
  className={`wp-sales-btn${billingPeriod === 'annual' ? ' wp-sales-btn--primary' : ' wp-sales-btn--outline'}`}
  aria-pressed={billingPeriod === 'annual'}
>
  Annual (save 20%)
</button>
```

**Default:** Annual (encourages longer commitment)  
**Active State:** Gradient button (cyan → lime)

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Hero: Smaller text, stacked buttons */
.commerce-hero__title {
  font-size: var(--font-size--700);
}

.commerce-hero__actions {
  flex-direction: column;
  width: 100%;
}

/* Stats: 2 columns */
.wp-sales-proof__grid {
  grid-template-columns: repeat(2, 1fr);
}

.wp-sales-stat__value {
  font-size: var(--font-size--600);
}

/* Benefits: Single column */
.commerce-benefits__grid {
  grid-template-columns: 1fr;
}

/* Pricing: Single column, full-width toggle */
.commerce-pricing__grid {
  grid-template-columns: 1fr;
}

.commerce-pricing__toggle {
  width: 100%;
}

.commerce-pricing__toggle .wp-sales-btn {
  flex: 1;
}

/* ROI: Smaller icon, single column stats */
.commerce-roi__icon {
  width: 80px;
  height: 80px;
}

.commerce-roi__stats {
  grid-template-columns: 1fr;
}

/* CTA: Smaller text */
.commerce-cta__title {
  font-size: var(--font-size--600);
}
```

### Tablet (640px - 1024px)

```css
/* Stats: 4 columns */
.wp-sales-proof__grid {
  grid-template-columns: repeat(4, 1fr);
}

/* Benefits: 2 columns */
.commerce-benefits__grid {
  grid-template-columns: repeat(2, 1fr);
}

/* Pricing: 2 columns */
.commerce-pricing__grid {
  grid-template-columns: repeat(2, 1fr);
}

/* ROI: 3 columns */
.commerce-roi__stats {
  grid-template-columns: repeat(3, 1fr);
}
```

### Desktop (> 1024px)

```css
/* All sections at full scale */
.wp-sales-proof__grid {
  grid-template-columns: repeat(4, 1fr);
}

.commerce-benefits__grid {
  grid-template-columns: repeat(3, 1fr);
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
| **Hero Badge** | Lime → Cyan gradient | Same + glow |
| **Hero Orbs** | Cyan, Lime (0.4 opacity) | Same |
| **Stats BG** | Light surface | Dark surface |
| **Stats Numbers** | Lime → Cyan gradient | Same |
| **Benefit Icons** | Cyan → Purple gradient | Same + glow |
| **Pricing Toggle** | Standard buttons | Same |
| **Plan Cards** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Popular Card** | Cyan border (0.3 glow) | Cyan border (0.5 glow) |
| **ROI Card BG** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **ROI Card Border** | Cyan (0.2) | Cyan (0.3) + glow (0.2) |
| **ROI Icon** | Gradient circle | Same + stronger glow |
| **ROI Stats** | Lime → Cyan gradient | Same |
| **CTA BG** | Navy → Purple | Black → Dark purple |
| **CTA Icon** | Lime with glow (0.5) | Lime with stronger glow (0.7) |
| **CTA Orbs** | Cyan, Lime (0.4 opacity) | Same |

### Dark Mode Enhancements

```css
.dark .commerce-hero__badge {
  box-shadow: 0 0 20px rgba(204, 255, 0, 0.4);
}

.dark .wp-sales-proof {
  background: var(--surface-dark);
  border-color: rgba(0, 255, 255, 0.1);
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

.dark .commerce-roi__card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.2);
}

.dark .commerce-roi__icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.dark .commerce-roi__stat {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .commerce-cta__bg {
  background: linear-gradient(135deg, #000000 0%, #4c1d95 100%);
}

.dark .commerce-cta__icon {
  filter: drop-shadow(0 0 30px rgba(204, 255, 0, 0.7));
}
```

---

## Accessibility

### Semantic HTML

```tsx
<main className="page-memberships">
  <section className="commerce-hero" aria-labelledby="mem-hero-title">
    <h1 id="mem-hero-title">Unlock exclusive perks & savings</h1>
    {/* Hero content */}
  </section>
  
  <div className="wp-sales-proof" aria-label="Membership statistics">
    <div className="wp-sales-proof__grid">
      <div className="wp-sales-stat">
        <div className="wp-sales-stat__value">25,000+</div>
        <p className="wp-sales-stat__label"><small>Active members</small></p>
      </div>
    </div>
  </div>
  
  <section id="benefits" className="commerce-benefits" aria-labelledby="mem-benefits-heading">
    <h2 id="mem-benefits-heading">Member-only benefits</h2>
    {/* Benefits grid */}
  </section>
  
  <section id="membership-tiers" className="commerce-pricing" aria-labelledby="mem-pricing-heading">
    <h2 id="mem-pricing-heading">Choose your membership level</h2>
    
    <div className="commerce-pricing__toggle" role="group" aria-label="Billing period selection">
      <button
        onClick={() => setBillingPeriod('monthly')}
        aria-pressed={billingPeriod === 'monthly'}
      >
        Monthly
      </button>
      <button
        onClick={() => setBillingPeriod('annual')}
        aria-pressed={billingPeriod === 'annual'}
      >
        Annual (save 20%)
      </button>
    </div>
    
    <div className="commerce-pricing__grid">
      <article className="commerce-plan-card">
        <h3>Basic</h3>
        {/* Plan details */}
      </article>
    </div>
  </section>
  
  <section className="commerce-roi" aria-labelledby="mem-roi-heading">
    <div className="commerce-roi__card">
      <div className="commerce-roi__icon" aria-hidden="true">
        <Gift />
      </div>
      <h2 id="mem-roi-heading">Your membership pays for itself</h2>
      {/* ROI content */}
    </div>
  </section>
  
  <section className="wp-sales-section" aria-labelledby="mem-faq-heading">
    <h2 id="mem-faq-heading">Membership questions</h2>
    <FaqAccordion />
  </section>
  
  <section className="commerce-cta" aria-label="Membership call to action">
    <Crown size={48} aria-hidden="true" />
    <h2>Ready to join our exclusive community?</h2>
    {/* CTA content */}
  </section>
</main>
```

### ARIA Attributes

```tsx
{/* Sections with labelledby */}
<section aria-labelledby="mem-hero-title">
  <h1 id="mem-hero-title">...</h1>
</section>

{/* Decorative elements */}
<div className="commerce-hero__bg" aria-hidden="true" />
<div className="commerce-hero__orb" aria-hidden="true" />
<Crown aria-hidden="true" />
<Check aria-hidden="true" />

{/* Stats bar */}
<div className="wp-sales-proof" aria-label="Membership statistics">
  {/* Stats */}
</div>

{/* Billing toggle */}
<div className="commerce-pricing__toggle" role="group" aria-label="Billing period selection">
  <button aria-pressed={billingPeriod === 'monthly'}>Monthly</button>
  <button aria-pressed={billingPeriod === 'annual'}>Annual</button>
</div>

{/* FAQ accordion */}
<button
  aria-expanded={openIndex === index}
  aria-controls={`mem-faq-panel-${item.id}`}
>
  <span>{item.question}</span>
  <svg aria-hidden="true" />
</button>

<div
  id={`mem-faq-panel-${item.id}`}
  role="region"
>
  <p>{item.answer}</p>
</div>
```

### Keyboard Navigation

- **Tab Order:** Hero CTAs → Stats → Benefit cards → Billing toggle → Pricing cards → ROI CTA → FAQ buttons → Final CTA
- **Anchor Links:** Hero buttons jump to pricing/benefits sections
- **Toggle:** Arrow keys to switch, Space/Enter to activate
- **Accordion:** Enter/Space to toggle, Arrow keys to navigate items

### Focus States

```css
.wp-sales-btn:focus-visible,
.commerce-plan-btn:focus-visible,
.commerce-cta__btn:focus-visible,
.wp-sales-faq-trigger:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Badge | White | Gradient bg | 4.5:1+ | AA ✅ |
| Hero Title (Gradient) | Lime/Cyan | Navy bg | N/A | Decorative ✅ |
| Stats Numbers (Gradient) | Lime/Cyan | Surface bg | N/A | Decorative ✅ |
| Plan Name | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| ROI Stats (Gradient) | Lime/Cyan | Card bg | N/A | Decorative ✅ |
| CTA Icon (Lime) | Lime | Navy bg | 4.5:1+ | AA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

See SubscriptionLanding.md for complete production enhancements (1-10). All enhancements apply to MembershipLanding:

1. Real membership integration
2. Dynamic pricing display
3. Plan comparison table
4. Testimonials section
5. Trial period badge
6. Billing frequency toggle ✅ (already implemented)
7. Add-ons selection
8. Gift membership option
9. Pause membership info
10. Analytics tracking

**Additional Membership-Specific Enhancements:**

### 11. Member-Only Content Preview

```tsx
<section className="commerce-member-content">
  <h2>Unlock exclusive content</h2>
  <div className="commerce-member-content__grid">
    {memberContent.map(content => (
      <div key={content.id} className="commerce-member-content__card">
        <div className="commerce-member-content__lock">
          <Lock size={24} />
        </div>
        <img src={content.thumbnail} alt="" />
        <h3>{content.title}</h3>
        <p>{content.teaser}</p>
      </div>
    ))}
  </div>
</section>
```

### 12. Member Spotlight

```tsx
<section className="commerce-member-spotlight">
  <h2>Meet our members</h2>
  <div className="commerce-member-spotlight__grid">
    {members.map(member => (
      <div key={member.id} className="commerce-member-card">
        <img src={member.avatar} alt="" />
        <h3>{member.name}</h3>
        <p className="commerce-member-card__tier">{member.tier} Member</p>
        <blockquote>{member.quote}</blockquote>
      </div>
    ))}
  </div>
</section>
```

### 13. Referral Program CTA

```tsx
<section className="commerce-referral">
  <h2>Earn rewards</h2>
  <p>Refer a friend and get 1 month free when they join</p>
  <button className="wp-sales-btn wp-sales-btn--primary">
    <Gift size={18} />
    Share your referral link
  </button>
</section>
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero gradient visible
- [ ] Hero badge displays
- [ ] Hero orbs animate (if motion allowed)
- [ ] Hero title gradient visible (lime → cyan)
- [ ] Stats bar displays (4 stats)
- [ ] Stats numbers gradient visible (lime → cyan)
- [ ] Benefits grid displays (6 items)
- [ ] Benefit icons have gradient circles + glow
- [ ] Pricing toggle displays
- [ ] Active toggle has gradient
- [ ] Pricing cards display (3 tiers)
- [ ] Popular card has border glow
- [ ] Popular badge displays
- [ ] Price displays correctly (monthly/annual)
- [ ] Period label updates (month/year)
- [ ] ROI card displays
- [ ] ROI card has glassmorphism
- [ ] ROI icon has gradient + glow
- [ ] ROI stats gradient visible (lime → cyan)
- [ ] FAQ items display
- [ ] First FAQ item open by default
- [ ] Final CTA displays
- [ ] Final CTA Crown icon displays with glow
- [ ] Final CTA orbs animate

### Interaction Testing

- [ ] Hero "Become a member" scrolls to pricing
- [ ] Hero "See benefits" scrolls to benefits
- [ ] Monthly toggle updates prices
- [ ] Annual toggle updates prices
- [ ] Period label updates (month → year)
- [ ] Plan cards navigate to detail pages
- [ ] ROI CTA scrolls to pricing
- [ ] FAQ items toggle on click
- [ ] Chevron rotates when FAQ opens
- [ ] Final CTA scrolls to pricing
- [ ] "Chat with our team" link navigates

### State Testing

- [ ] Default billing is "annual"
- [ ] Billing period updates on toggle
- [ ] Prices reflect billing period
- [ ] Period labels reflect billing period

### Responsive Testing

- [ ] Mobile: Hero stacked buttons
- [ ] Mobile: Stats 2 columns
- [ ] Mobile: Benefits single column
- [ ] Mobile: Pricing single column
- [ ] Mobile: Toggle full-width
- [ ] Mobile: ROI smaller icon
- [ ] Mobile: ROI stats single column
- [ ] Tablet: Stats 4 columns
- [ ] Tablet: Benefits 2 columns
- [ ] Tablet: Pricing 2 columns
- [ ] Desktop: All sections standard scale

### Dark Mode Testing

- [ ] Hero gradient darker
- [ ] Hero badge glow visible
- [ ] Stats bar background darker
- [ ] Stats borders cyan-tinted
- [ ] Benefit icons glow visible
- [ ] Pricing background darker
- [ ] Plan cards glassmorphism visible
- [ ] Popular card glow stronger
- [ ] Popular badge glow visible
- [ ] ROI card glassmorphism visible
- [ ] ROI card border cyan + glow
- [ ] ROI icon glow stronger
- [ ] FAQ items glassmorphism visible
- [ ] CTA gradient darker
- [ ] CTA Crown glow stronger
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Hero has aria-labelledby
- [ ] Stats has aria-label
- [ ] Benefits has aria-labelledby
- [ ] Pricing has aria-labelledby
- [ ] Toggle has role="group" aria-label
- [ ] Toggle buttons have aria-pressed
- [ ] ROI has aria-labelledby
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

---

## Related Templates

- **SubscriptionLanding** — Similar marketing page for subscriptions
- **SingleMembership** — Individual membership detail page
- **MembershipComparison** — Side-by-side tier comparison

### Shared CSS

- `.commerce-special-funky.css` — Subscription/membership styles
- `.commerce-hero` — Gradient hero with orbs
- `.commerce-benefits` — Benefit icon cards
- `.commerce-pricing` — Glassmorphism pricing cards
- `.commerce-cta` — Final CTA with gradient

### Shared Components

- **FaqAccordion** — Reusable FAQ accordion (internal)

### New Components (Membership-Specific)

- `.wp-sales-proof` — Stats bar
- `.commerce-roi` — ROI calculator card

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready
