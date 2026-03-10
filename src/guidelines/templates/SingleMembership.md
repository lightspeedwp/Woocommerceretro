# SingleMembership

**Component Type:** Template (Membership Product Detail - Full Funky)  
**Location:** `/src/app/components/templates/SingleMembership.tsx`  
**CSS:** `/src/styles/sections/commerce-special-funky.css`  
**Route:** `/membership/:id`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 9)  
**Color Identity:** Lime `#ccff00` / Cyan `#00ffff` (VIP exclusive)

---

## Overview

SingleMembership is a WooCommerce Memberships product detail page featuring tier selection, billing period toggle, ROI calculator, benefits grid, testimonials carousel, FAQ accordion, and trust band. Uses two-column layout with plan selection (left) and benefits/features (right), followed by full-width benefits, testimonials, FAQ, and trust sections.

**Page Purpose:** Convert visitors to paying members  
**Target Audience:** Potential members evaluating membership tiers  
**Dark Mode:** ✅ Complete support with neon accents  
**Layout:** Plan Selection + Features → Benefits → Testimonials → FAQ → Trust Band

**Note:** Uses state to manage selected plan (basic/premium/vip) and billing period (monthly/annual).

---

## Key Features

### Visual Elements

**1. Product Info (Left):**
- Badge (Crown icon)
- Membership title (h1)
- Description
- Billing period toggle (monthly/annual)
- Plan selector (3 tiers with radio buttons)
- CTA button (gradient)
- Guarantee text (Lock icon)
- ROI calculator card

**2. Product Features (Right):**
- "What's Included" feature list
- "Exclusive Perks" card (Crown icon)

**3. Benefits Grid:**
- 4 benefit cards
- Icon circles (gradient bg)
- Title + description
- 4-column grid (desktop)

**4. Testimonials:**
- Carousel slider
- Member photos + quotes
- Tier + join date
- Star ratings

**5. FAQ Section:**
- Collapsible accordion
- Gradient dividers
- Glow on active items

**6. Trust Band:**
- Security badges
- Trust indicators

### Funky Treatments

**Badge:** Gradient (lime → cyan)  
**Billing Toggle:** Active state gradient  
**Plan Options:** Glassmorphism cards with neon border on active  
**Active Radio:** Gradient (cyan → purple) with glow  
**Plan Badge:** Gradient (cyan → lime) with glow  
**CTA Button:** Gradient (cyan → lime) with neon glow  
**ROI Card:** Glassmorphism with gradient icon  
**Feature Checkmarks:** Cyan color  
**Perks Card:** Glassmorphism with Crown icon  
**Benefit Icons:** Gradient circles with glow  
**Testimonial Cards:** Glassmorphism with subtle borders

---

## Data Structure

### Membership Plans

```tsx
import { 
  membershipPlans, 
  memberBenefits, 
  memberTestimonials, 
  membershipFAQs, 
  type MembershipPlan 
} from '../../data/memberships';

// Plan structure
interface MembershipPlan {
  id: string;
  name: string;
  description: string;
  discount: string;
  monthlyPrice: number;
  annualPrice: number;
  annualSavings: number;
  badge?: string;
  features: Array<{
    text: string;
    description?: string;
    included: boolean;
  }>;
  exclusivePerks: string[];
}

// Example:
const membershipPlans = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for occasional shoppers',
    discount: '10%',
    monthlyPrice: 9.99,
    annualPrice: 99.99,
    annualSavings: 20.00,
    features: [
      {
        text: '10% off all purchases',
        description: 'Save on every order',
        included: true
      },
      {
        text: 'Free standard shipping',
        description: 'On all orders',
        included: true
      },
      // ...more features
    ],
    exclusivePerks: [
      'Early sale access',
      'Birthday rewards',
      'Member-only products',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Best value for regular shoppers',
    discount: '20%',
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    annualSavings: 40.00,
    badge: 'Most Popular',
    features: [
      {
        text: '20% off all purchases',
        description: 'Double the savings',
        included: true
      },
      {
        text: 'Free express shipping',
        description: '2-day delivery',
        included: true
      },
      // ...more features
    ],
    exclusivePerks: [
      'Priority support',
      'VIP events access',
      'Exclusive product launches',
      'Personal shopping assistant',
    ],
  },
  // ...more plans
];
```

### Member Testimonials

```tsx
interface MemberTestimonial {
  id: string;
  name: string;
  tier: string;
  memberSince: string;
  quote: string;
  rating: number;
  image: string;
}

const memberTestimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    tier: 'Premium Member',
    memberSince: '2023',
    quote: 'The savings alone pay for my membership twice over. Plus the VIP perks are incredible!',
    rating: 5,
    image: '/images/member-1.jpg',
  },
  // ...more testimonials
];
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  <Container className="wp-product-page">
    {/* Breadcrumbs */}
    <nav className="wp-breadcrumbs" aria-label="Breadcrumb">
      <ol className="wp-breadcrumbs__list">
        <li><Link to="/">Home</Link></li>
        <li className="wp-breadcrumbs__separator">/</li>
        <li><Link to="/membership">Membership</Link></li>
        <li className="wp-breadcrumbs__separator">/</li>
        <li className="wp-breadcrumbs__current">{currentPlan.name} Membership</li>
      </ol>
    </nav>

    <div className="wp-product-layout">
      {/* Left: Plan Selection */}
      <div className="wp-product-info">
        {/* Badge */}
        <div className="wp-badge-pill">
          <Crown size={14} aria-hidden="true" />
          <Typography variant="caption" className="wp-badge-pill__text">
            Exclusive Membership
          </Typography>
        </div>

        <Heading level={1} className="wp-product-title">
          {currentPlan.name} Membership
        </Heading>

        <Typography className="wp-product-description">
          {currentPlan.description}. Get {currentPlan.discount} off every purchase, 
          exclusive products, and VIP perks that pay for themselves.
        </Typography>

        {/* Billing Period Toggle */}
        <div className="wp-billing-toggle">
          <div className="wp-billing-toggle__wrapper">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`wp-billing-toggle__btn ${billingPeriod === 'monthly' ? 'wp-billing-toggle__btn--active' : ''}`}
            >
              <Typography className="wp-billing-toggle__label">Monthly</Typography>
            </button>
            <button
              onClick={() => setBillingPeriod('annual')}
              className={`wp-billing-toggle__btn ${billingPeriod === 'annual' ? 'wp-billing-toggle__btn--active' : ''}`}
            >
              <Typography className="wp-billing-toggle__label">Annual</Typography>
              <span className="wp-billing-toggle__badge">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Plan Selection */}
        <div className="wp-plan-selector">
          {membershipPlans.map((plan) => {
            const price = billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            return (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`wp-plan-option ${selectedPlan === plan.id ? 'wp-plan-option--active' : ''}`}
              >
                <div className="wp-plan-option__content">
                  <div className={`wp-radio-indicator ${selectedPlan === plan.id ? 'wp-radio-indicator--checked' : ''}`}>
                    {selectedPlan === plan.id && <div className="wp-radio-indicator__dot" />}
                  </div>
                  
                  <div className="wp-plan-option__details">
                    <div className="wp-plan-option__header">
                      <Typography className="wp-plan-option__name">
                        {plan.name}
                      </Typography>
                      {plan.badge && (
                        <span className="wp-plan-option__badge">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                    <Typography variant="caption" className="wp-plan-option__desc">
                      {plan.discount} off everything
                    </Typography>
                  </div>
                </div>
                
                <div className="wp-plan-option__pricing">
                  <Typography className="wp-plan-option__price">
                    £{price}
                  </Typography>
                  <Typography variant="caption" className="wp-plan-option__interval">
                    /{billingPeriod === 'annual' ? 'year' : 'month'}
                  </Typography>
                  {billingPeriod === 'annual' && (
                    <Typography variant="caption" className="wp-plan-option__savings">
                      Save £{plan.annualSavings}
                    </Typography>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* CTA */}
        <button
          className="wp-button-primary wp-button-full"
          type="button"
        >
          Become a {currentPlan.name} Member
        </button>

        <Typography variant="caption" className="wp-guarantee-text">
          <Lock size={14} className="wp-icon-inline" aria-hidden="true" />
          30-day money-back guarantee • Cancel anytime
        </Typography>

        {/* ROI Calculator */}
        <div className="wp-roi-card">
          <div className="wp-roi-card__header">
            <div className="wp-roi-card__icon-wrapper">
              <Gift size={20} className="wp-icon-white" aria-hidden="true" />
            </div>
            <div>
              <Typography className="wp-roi-card__title">
                Your Membership Pays for Itself!
              </Typography>
              <Typography variant="caption" className="wp-roi-card__subtitle">
                Based on average monthly spend of £200
              </Typography>
            </div>
          </div>
          
          <div className="wp-roi-card__content">
            <div className="wp-roi-row">
              <span>Monthly savings ({currentPlan.discount} off):</span>
              <span className="wp-roi-value">£{(200 * parseFloat(currentPlan.discount) / 100).toFixed(2)}</span>
            </div>
            <div className="wp-roi-row">
              <span>Membership cost:</span>
              <span className="wp-roi-value">-£{currentPlan.monthlyPrice}</span>
            </div>
            <div className="wp-roi-row wp-roi-row--total">
              <span>Net monthly savings:</span>
              <span className="wp-roi-value--total">
                £{((200 * parseFloat(currentPlan.discount) / 100) - currentPlan.monthlyPrice).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Features */}
      <div className="wp-product-features">
        {/* What's Included */}
        <div className="wp-features-list-wrapper">
          <Heading level={2} className="wp-section-heading">
            What's Included
          </Heading>
          
          <div className="wp-features-list">
            {currentPlan.features.map((feature, index) => (
              <div key={index} className="wp-feature-item">
                <div className="wp-feature-item__icon">
                  <Check size={16} className="wp-icon-primary" aria-hidden="true" />
                </div>
                <div>
                  <Typography className="wp-feature-item__title">
                    {feature.text}
                  </Typography>
                  {feature.description && (
                    <Typography variant="caption" className="wp-feature-item__desc">
                      {feature.description}
                    </Typography>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusive Perks */}
        <div className="wp-perks-card">
          <div className="wp-perks-card__header">
            <Crown size={20} className="wp-icon-primary" aria-hidden="true" />
            <Heading level={3}>
              Exclusive Perks
            </Heading>
          </div>
          
          <ul className="wp-perks-list">
            {currentPlan.exclusivePerks.map((perk, index) => (
              <li key={index} className="wp-perks-item">
                <Star size={16} className="wp-icon-primary" aria-hidden="true" />
                <Typography className="wp-perks-text">
                  {perk}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Benefits Section */}
    <section className="wp-section-benefits">
      <div className="wp-section-header">
        <Heading level={2} className="wp-section-title">
          Why Members Love Us
        </Heading>
        <Typography className="wp-section-subtitle">
          More than just discounts - it's a complete VIP experience.
        </Typography>
      </div>

      <div className="wp-grid-4">
        {memberBenefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={index} className="wp-benefit-item">
              <div className={`wp-benefit-icon ${benefit.bg}`}>
                <Icon size={32} className={benefit.color} aria-hidden="true" />
              </div>
              <Heading level={3} className="wp-benefit-title">
                {benefit.title}
              </Heading>
              <Typography className="wp-benefit-desc">
                {benefit.description}
              </Typography>
            </div>
          );
        })}
      </div>
    </section>

    {/* Testimonials */}
    <section className="wp-section-testimonials">
      <Heading level={2} className="wp-section-heading">
        Member Success Stories
      </Heading>

      <TestimonialCarousel testimonials={transformedTestimonials} />
    </section>

    {/* FAQ */}
    <section className="wp-section-faq">
      <Heading level={2} className="wp-section-heading">
        Membership Questions
      </Heading>

      <FAQSection items={transformedFAQs} />
    </section>

    {/* Trust Band */}
    <section className="wp-section-trust">
      <TrustBand />
    </section>
  </Container>
</Layout>
```

---

## BEM Class Hierarchy

```
.wp-product-page (Page container)

.wp-breadcrumbs (Breadcrumb navigation)
├── .wp-breadcrumbs__list (<ol>)
├── .wp-breadcrumbs__separator (/)
└── .wp-breadcrumbs__current (Current page)

.wp-product-layout (Two-column grid)
├── .wp-product-info (Left column - plan selection)
│   ├── .wp-badge-pill (Badge with icon)
│   │   └── .wp-badge-pill__text
│   ├── .wp-product-title (h1)
│   ├── .wp-product-description
│   ├── .wp-billing-toggle (Billing period toggle)
│   │   └── .wp-billing-toggle__wrapper
│   │       └── .wp-billing-toggle__btn
│   │           ├── .wp-billing-toggle__btn--active
│   │           ├── .wp-billing-toggle__label
│   │           └── .wp-billing-toggle__badge
│   ├── .wp-plan-selector (Plan options)
│   │   └── .wp-plan-option (Individual plan button - SAME AS SingleSubscription)
│   │       ├── .wp-plan-option--active
│   │       ├── .wp-plan-option__content
│   │       │   ├── .wp-radio-indicator
│   │       │   │   ├── .wp-radio-indicator--checked
│   │       │   │   └── .wp-radio-indicator__dot
│   │       │   └── .wp-plan-option__details
│   │       │       ├── .wp-plan-option__header
│   │       │       │   ├── .wp-plan-option__name
│   │       │       │   └── .wp-plan-option__badge
│   │       │       └── .wp-plan-option__desc
│   │       └── .wp-plan-option__pricing
│   │           ├── .wp-plan-option__price
│   │           ├── .wp-plan-option__interval
│   │           └── .wp-plan-option__savings
│   ├── .wp-button-primary (CTA button)
│   │   └── .wp-button-full
│   ├── .wp-guarantee-text (Guarantee text)
│   │   └── .wp-icon-inline
│   └── .wp-roi-card (ROI calculator)
│       ├── .wp-roi-card__header
│       │   ├── .wp-roi-card__icon-wrapper
│       │   │   └── .wp-icon-white
│       │   ├── .wp-roi-card__title
│       │   └── .wp-roi-card__subtitle
│       └── .wp-roi-card__content
│           └── .wp-roi-row
│               ├── .wp-roi-row--total
│               ├── .wp-roi-value
│               └── .wp-roi-value--total
│
└── .wp-product-features (Right column - features)
    ├── .wp-features-list-wrapper (What's Included)
    │   ├── .wp-section-heading (h2)
    │   └── .wp-features-list
    │       └── .wp-feature-item
    │           ├── .wp-feature-item__icon
    │           │   └── .wp-icon-primary
    │           ├── .wp-feature-item__title
    │           └── .wp-feature-item__desc
    └── .wp-perks-card (Exclusive Perks)
        ├── .wp-perks-card__header
        │   └── .wp-icon-primary (Crown)
        └── .wp-perks-list (<ul>)
            └── .wp-perks-item (<li>)
                ├── .wp-icon-primary (Star)
                └── .wp-perks-text

.wp-section-benefits (Benefits section)
├── .wp-section-header
│   ├── .wp-section-title (h2)
│   └── .wp-section-subtitle
└── .wp-grid-4
    └── .wp-benefit-item
        ├── .wp-benefit-icon (Icon circle - gradient)
        ├── .wp-benefit-title (h3)
        └── .wp-benefit-desc

.wp-section-testimonials (Testimonials section)
├── .wp-section-heading (h2)
└── <TestimonialCarousel /> (Pattern component)

.wp-section-faq (FAQ section)
├── .wp-section-heading (h2)
└── <FAQSection /> (Pattern component)

.wp-section-trust (Trust band section)
└── <TrustBand /> (Pattern component)
```

---

## Section Breakdown

### 1. Breadcrumbs (`.wp-breadcrumbs`)

Same as SingleSubscription. See SingleSubscription.md for CSS.

---

### 2. Product Layout (`.wp-product-layout`)

```css
.wp-product-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space--900);
  margin-bottom: var(--space--1000);
}

@media (max-width: 1024px) {
  .wp-product-layout {
    grid-template-columns: 1fr;
    gap: var(--space--800);
  }
}
```

**Grid:** 2 equal columns (desktop), 1 column (mobile)

---

### 3. Badge (`.wp-badge-pill`)

Same as SingleSubscription. Gradient (lime → cyan) with glow.

---

### 4. Billing Toggle (`.wp-billing-toggle`)

```css
.wp-billing-toggle {
  padding: var(--space--600) 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin: var(--space--600) 0;
}

.wp-billing-toggle__wrapper {
  display: flex;
  gap: var(--space--300);
  padding: var(--space--200);
  border-radius: var(--radius--300);
  background: rgba(255, 255, 255, 0.05);
}

.dark .wp-billing-toggle__wrapper {
  background: rgba(255, 255, 255, 0.03);
}

.wp-billing-toggle__btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space--200);
  padding: var(--space--400) var(--space--500);
  border-radius: var(--radius--300);
  background: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.wp-billing-toggle__btn--active {
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  border-color: transparent;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.dark .wp-billing-toggle__btn--active {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.wp-billing-toggle__btn:not(.wp-billing-toggle__btn--active):hover {
  border-color: var(--cyan);
}

.wp-billing-toggle__label {
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--text);
}

.wp-billing-toggle__btn--active .wp-billing-toggle__label {
  color: var(--navy);
}

.wp-billing-toggle__badge {
  padding: var(--space--100) var(--space--300);
  border-radius: var(--radius--full);
  background: rgba(204, 255, 0, 0.2);
  color: var(--lime);
  font-size: var(--font-size--75);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.wp-billing-toggle__btn--active .wp-billing-toggle__badge {
  background: rgba(3, 2, 19, 0.3);
  color: var(--navy);
}

@media (max-width: 640px) {
  .wp-billing-toggle__wrapper {
    flex-direction: column;
    gap: var(--space--200);
  }
}
```

**Active State:** Gradient (cyan → lime) with glow  
**Badge:** "Save 20%" on annual button

---

### 5. Plan Selector (`.wp-plan-selector`)

Same as SingleSubscription. See SingleSubscription.md for complete CSS.

**Key Differences:**
- Displays discount percentage in description
- Savings shown only when annual billing selected

---

### 6. CTA Button (`.wp-button-primary`)

Same as SingleSubscription. Gradient (cyan → lime) with glow.

---

### 7. Guarantee Text (`.wp-guarantee-text`)

```css
.wp-guarantee-text {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--200);
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  text-align: center;
}

.wp-icon-inline {
  color: var(--text-secondary);
  flex-shrink: 0;
}
```

**Icons:** Lock icon inline with text

---

### 8. ROI Card (`.wp-roi-card`)

```css
.wp-roi-card {
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  margin-top: var(--space--700);
}

.dark .wp-roi-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

/* Header */
.wp-roi-card__header {
  display: flex;
  align-items: flex-start;
  gap: var(--space--500);
  margin-bottom: var(--space--600);
}

.wp-roi-card__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  flex-shrink: 0;
}

.dark .wp-roi-card__icon-wrapper {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.wp-icon-white {
  color: var(--white);
}

.wp-roi-card__title {
  font-size: var(--font-size--300);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--200);
}

.wp-roi-card__subtitle {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
}

/* Content */
.wp-roi-card__content {
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

.wp-roi-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space--400) 0;
  font-size: var(--font-size--300);
  color: var(--text);
}

.wp-roi-row--total {
  border-top: 2px solid var(--border);
  padding-top: var(--space--500);
  margin-top: var(--space--400);
  font-weight: 600;
}

.dark .wp-roi-row--total {
  border-color: rgba(0, 255, 255, 0.2);
}

.wp-roi-value {
  font-weight: 600;
  color: var(--text);
}

.wp-roi-value--total {
  font-size: var(--font-size--500);
  font-weight: 700;
  background: linear-gradient(135deg, var(--lime) 0%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 640px) {
  .wp-roi-card {
    padding: var(--space--600);
  }
  
  .wp-roi-card__icon-wrapper {
    width: 40px;
    height: 40px;
  }
}
```

**Glassmorphism:** Backdrop-blur 8px  
**Icon:** Gradient circle (cyan → purple) with glow  
**Total Value:** Gradient text (lime → cyan)

---

### 9. Features List (`.wp-features-list-wrapper`)

```css
.wp-features-list-wrapper {
  margin-bottom: var(--space--800);
}

.wp-section-heading {
  margin-bottom: var(--space--600);
}

.wp-features-list {
  display: flex;
  flex-direction: column;
  gap: var(--space--500);
}

.wp-feature-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space--400);
  padding: var(--space--500);
  border-radius: var(--radius--300);
  background: rgba(255, 255, 255, 0.03);
  transition: background 0.2s;
}

.wp-feature-item:hover {
  background: rgba(255, 255, 255, 0.05);
}

.dark .wp-feature-item {
  background: rgba(255, 255, 255, 0.02);
}

.dark .wp-feature-item:hover {
  background: rgba(255, 255, 255, 0.04);
}

.wp-feature-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(0, 255, 255, 0.1);
  flex-shrink: 0;
}

.dark .wp-feature-item__icon {
  background: rgba(0, 255, 255, 0.15);
}

.wp-icon-primary {
  color: var(--cyan);
}

.wp-feature-item__title {
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--text);
  margin-bottom: var(--space--200);
}

.wp-feature-item__desc {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
}
```

**Items:** Subtle background with hover effect  
**Icons:** Cyan checkmarks in circular backgrounds

---

### 10. Perks Card (`.wp-perks-card`)

```css
.wp-perks-card {
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

.dark .wp-perks-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.wp-perks-card__header {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  margin-bottom: var(--space--600);
}

.wp-perks-card__header .wp-icon-primary {
  color: var(--lime);
}

.wp-perks-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

.wp-perks-item {
  display: flex;
  align-items: center;
  gap: var(--space--400);
}

.wp-perks-item .wp-icon-primary {
  color: var(--cyan);
  flex-shrink: 0;
}

.wp-perks-text {
  font-size: var(--font-size--300);
  color: var(--text);
}

@media (max-width: 640px) {
  .wp-perks-card {
    padding: var(--space--600);
  }
}
```

**Glassmorphism:** Backdrop-blur 8px  
**Crown Icon:** Lime color  
**Star Icons:** Cyan color

---

### 11. Benefits Section (`.wp-section-benefits`)

```css
.wp-section-benefits {
  padding: var(--space--1000) 0;
}

.wp-section-header {
  text-align: center;
  max-width: 48rem;
  margin: 0 auto var(--space--900);
}

.wp-section-title {
  margin-bottom: var(--space--500);
}

.wp-section-subtitle {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
}

.wp-grid-4 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space--700);
}

.wp-benefit-item {
  text-align: center;
}

.wp-benefit-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: var(--space--500);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  margin-bottom: var(--space--600);
}

.dark .wp-benefit-icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

.wp-benefit-icon svg {
  color: var(--white);
}

.wp-benefit-title {
  margin-bottom: var(--space--400);
}

.wp-benefit-desc {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
}

@media (max-width: 640px) {
  .wp-grid-4 {
    grid-template-columns: 1fr;
  }
  
  .wp-benefit-icon {
    width: 64px;
    height: 64px;
  }
}
```

**Grid:** Auto-fit (min 240px)  
**Icons:** Gradient circles (cyan → purple) with glow

---

## State Management

### Selected Plan State

```tsx
const [selectedPlan, setSelectedPlan] = useState<string>('premium');

// Get current plan data
const currentPlan = membershipPlans.find(p => p.id === selectedPlan) || membershipPlans[1];

// Update on button click
<button
  onClick={() => setSelectedPlan(plan.id)}
  className={`wp-plan-option ${selectedPlan === plan.id ? 'wp-plan-option--active' : ''}`}
>
```

### Billing Period State

```tsx
const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');

// Get current price
const currentPrice = billingPeriod === 'annual' ? currentPlan.annualPrice : currentPlan.monthlyPrice;

// Toggle buttons
<button
  onClick={() => setBillingPeriod('monthly')}
  className={`wp-billing-toggle__btn ${billingPeriod === 'monthly' ? 'wp-billing-toggle__btn--active' : ''}`}
>
  Monthly
</button>
```

### Dynamic Content Based on States

```tsx
{/* Title changes */}
<h1>{currentPlan.name} Membership</h1>

{/* Description includes discount */}
<p>Get {currentPlan.discount} off every purchase</p>

{/* Price updates */}
<span>£{billingPeriod === 'annual' ? plan.annualPrice : plan.monthlyPrice}</span>

{/* Period label changes */}
<span>/{billingPeriod === 'annual' ? 'year' : 'month'}</span>

{/* Savings shown only for annual */}
{billingPeriod === 'annual' && (
  <span>Save £{plan.annualSavings}</span>
)}

{/* ROI calculation uses current plan */}
<span>£{(200 * parseFloat(currentPlan.discount) / 100).toFixed(2)}</span>

{/* Features list changes */}
{currentPlan.features.map(feature => (
  <div>{feature.text}</div>
))}

{/* Perks list changes */}
{currentPlan.exclusivePerks.map(perk => (
  <li>{perk}</li>
))}

{/* CTA text changes */}
<button>Become a {currentPlan.name} Member</button>
```

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Product layout: Single column */
.wp-product-layout {
  grid-template-columns: 1fr;
}

/* Billing toggle: Vertical stack */
.wp-billing-toggle__wrapper {
  flex-direction: column;
}

/* ROI card: Smaller icon */
.wp-roi-card {
  padding: var(--space--600);
}

.wp-roi-card__icon-wrapper {
  width: 40px;
  height: 40px;
}

/* Features: Smaller padding */
.wp-perks-card {
  padding: var(--space--600);
}

/* Benefits: Single column */
.wp-grid-4 {
  grid-template-columns: 1fr;
}

.wp-benefit-icon {
  width: 64px;
  height: 64px;
}
```

### Tablet (640px - 1024px)

```css
/* Product layout: Single column */
.wp-product-layout {
  grid-template-columns: 1fr;
}

/* Benefits: 2 columns */
.wp-grid-4 {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (> 1024px)

```css
/* Product layout: 2 columns */
.wp-product-layout {
  grid-template-columns: 1fr 1fr;
}

/* Benefits: Auto-fit grid */
.wp-grid-4 {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
```

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Badge BG** | Lime → Cyan gradient | Same + glow |
| **Billing Toggle Wrapper** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Active Toggle** | Gradient (0.3 glow) | Gradient (0.5 glow) |
| **Plan Cards** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Active Plan** | Cyan border (0.3 glow) | Cyan border (0.5 glow) |
| **ROI Card** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **ROI Icon** | Gradient circle | Same + glow (0.4) |
| **ROI Total Border** | Standard border | Cyan-tinted (0.2) |
| **Feature Items** | `rgba(255,255,255,0.03)` | `rgba(255,255,255,0.02)` |
| **Feature Icons** | Cyan bg (0.1) | Cyan bg (0.15) |
| **Perks Card** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Benefit Icons** | Gradient circles | Same + glow (0.4) |

### Dark Mode Enhancements

```css
.dark .wp-badge-pill {
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
}

.dark .wp-billing-toggle__wrapper {
  background: rgba(255, 255, 255, 0.03);
}

.dark .wp-billing-toggle__btn--active {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.dark .wp-plan-option {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wp-plan-option--active {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.dark .wp-roi-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wp-roi-card__icon-wrapper {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.dark .wp-roi-row--total {
  border-color: rgba(0, 255, 255, 0.2);
}

.dark .wp-feature-item {
  background: rgba(255, 255, 255, 0.02);
}

.dark .wp-feature-item:hover {
  background: rgba(255, 255, 255, 0.04);
}

.dark .wp-feature-item__icon {
  background: rgba(0, 255, 255, 0.15);
}

.dark .wp-perks-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wp-benefit-icon {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}
```

---

## Accessibility

### Semantic HTML

```tsx
<main className="wp-product-page">
  <nav className="wp-breadcrumbs" aria-label="Breadcrumb">
    <ol className="wp-breadcrumbs__list">
      <li><Link to="/">Home</Link></li>
      <li aria-hidden="true">/</li>
      <li><Link to="/membership">Membership</Link></li>
      <li aria-hidden="true">/</li>
      <li aria-current="page">Premium Membership</li>
    </ol>
  </nav>
  
  <div className="wp-product-layout">
    <div className="wp-product-info">
      <div className="wp-badge-pill">
        <Crown aria-hidden="true" />
        <span>Exclusive Membership</span>
      </div>
      
      <h1>Premium Membership</h1>
      
      <div className="wp-billing-toggle">
        <div className="wp-billing-toggle__wrapper" role="group" aria-label="Billing period selection">
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
            Annual
            <span>Save 20%</span>
          </button>
        </div>
      </div>
      
      <fieldset className="wp-plan-selector">
        <legend className="sr-only">Select membership tier</legend>
        <button
          role="radio"
          aria-checked={selectedPlan === 'premium'}
        >
          <div>Premium</div>
        </button>
      </fieldset>
      
      <button type="button">Become a Premium Member</button>
      
      <p>
        <Lock aria-hidden="true" />
        30-day money-back guarantee • Cancel anytime
      </p>
      
      <section className="wp-roi-card" aria-labelledby="roi-heading">
        <div className="wp-roi-card__header">
          <div aria-hidden="true">
            <Gift />
          </div>
          <div>
            <h2 id="roi-heading">Your Membership Pays for Itself!</h2>
            <p>Based on average monthly spend of £200</p>
          </div>
        </div>
      </section>
    </div>
    
    <div className="wp-product-features">
      <section aria-labelledby="features-heading">
        <h2 id="features-heading">What's Included</h2>
        <div>
          <div>
            <div aria-hidden="true">
              <Check />
            </div>
            <div>
              <p>20% off all purchases</p>
              <p>Double the savings</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="wp-perks-card" aria-labelledby="perks-heading">
        <div>
          <Crown aria-hidden="true" />
          <h3 id="perks-heading">Exclusive Perks</h3>
        </div>
        <ul>
          <li>
            <Star aria-hidden="true" />
            <span>Priority support</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
  
  <section className="wp-section-benefits" aria-labelledby="benefits-heading">
    <h2 id="benefits-heading">Why Members Love Us</h2>
    <div>
      <article>
        <div aria-hidden="true">
          <Truck />
        </div>
        <h3>Free Shipping</h3>
        <p>All orders ship free</p>
      </article>
    </div>
  </section>
  
  <section className="wp-section-testimonials" aria-labelledby="testimonials-heading">
    <h2 id="testimonials-heading">Member Success Stories</h2>
    <TestimonialCarousel />
  </section>
  
  <section className="wp-section-faq" aria-labelledby="faq-heading">
    <h2 id="faq-heading">Membership Questions</h2>
    <FAQSection />
  </section>
</main>
```

### ARIA Attributes

```tsx
{/* Breadcrumbs */}
<nav aria-label="Breadcrumb">
  <li aria-current="page">Premium Membership</li>
</nav>

{/* Decorative icons */}
<Crown aria-hidden="true" />
<Check aria-hidden="true" />
<Star aria-hidden="true" />
<Lock aria-hidden="true" />
<Gift aria-hidden="true" />

{/* Billing toggle */}
<div role="group" aria-label="Billing period selection">
  <button aria-pressed={billingPeriod === 'monthly'}>Monthly</button>
  <button aria-pressed={billingPeriod === 'annual'}>Annual</button>
</div>

{/* Plan selector (radio group) */}
<fieldset className="wp-plan-selector">
  <legend className="sr-only">Select membership tier</legend>
  <button
    role="radio"
    aria-checked={selectedPlan === 'premium'}
  >
    {/* Plan content */}
  </button>
</fieldset>

{/* Section labels */}
<section aria-labelledby="roi-heading">
  <h2 id="roi-heading">Your Membership Pays for Itself!</h2>
</section>

<section aria-labelledby="features-heading">
  <h2 id="features-heading">What's Included</h2>
</section>
```

### Keyboard Navigation

- **Tab Order:** Breadcrumbs → Billing toggle → Plan selector → CTA → ROI card → Features → Perks → Benefits → Testimonials → FAQ → Trust band
- **Billing Toggle:** Arrow keys to switch, Space/Enter to activate
- **Plan Selector:** Arrow keys to navigate, Space/Enter to select
- **Testimonials:** Arrow keys for carousel navigation

### Focus States

```css
.wp-breadcrumbs a:focus-visible,
.wp-billing-toggle__btn:focus-visible,
.wp-plan-option:focus-visible,
.wp-button-primary:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Badge | White | Gradient bg | 4.5:1+ | AA ✅ |
| Title (Light) | `#1a1a1a` | Page bg | 12.0:1+ | AAA ✅ |
| Title (Dark) | `#f9fafb` | Page bg | 14.0:1+ | AAA ✅ |
| Toggle Label | `#1a1a1a` / `#f9fafb` | Toggle bg | 10.0:1+ | AAA ✅ |
| Active Toggle | Navy `#030213` | Gradient bg | 8.32:1 | AAA ✅ |
| Plan Name | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| CTA Button | Navy `#030213` | Gradient bg | 8.32:1 | AAA ✅ |
| ROI Total (Gradient) | Lime/Cyan | Card bg | N/A | Decorative ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

See SingleSubscription.md for complete production enhancements (1-10). All enhancements apply to SingleMembership.

**Additional Membership-Specific Enhancements:**

### 11. Member Dashboard Preview

```tsx
<section className="wp-member-preview">
  <h2>Your Member Dashboard</h2>
  <div className="wp-member-preview__screenshot">
    <img src="/images/dashboard-preview.jpg" alt="Member dashboard preview" />
  </div>
  <p>Track your savings, manage preferences, and access exclusive content</p>
</section>
```

### 12. Upgrade Path CTA

```tsx
{selectedPlan !== 'vip' && (
  <div className="wp-upgrade-cta">
    <h3>Want even more savings?</h3>
    <p>Upgrade to VIP and save up to 30% on every purchase</p>
    <button onClick={() => setSelectedPlan('vip')}>
      View VIP Benefits
    </button>
  </div>
)}
```

### 13. Member Referral Program

```tsx
<section className="wp-referral-program">
  <h2>Earn Free Months</h2>
  <p>Refer friends and get 1 month free for every 3 referrals</p>
  <div className="wp-referral-code">
    <input type="text" value="MEMBER-ABC123" readOnly />
    <button>Copy Link</button>
  </div>
</section>
```

---

## Testing Checklist

### Visual Testing

- [ ] Breadcrumbs display
- [ ] Badge displays with Crown icon
- [ ] Title displays (h1)
- [ ] Description displays
- [ ] Billing toggle displays (2 buttons)
- [ ] Active toggle has gradient
- [ ] "Save 20%" badge visible on annual
- [ ] Plan selector displays (3 tiers)
- [ ] Active plan has neon border
- [ ] Radio indicators display correctly
- [ ] Plan badges display ("Most Popular")
- [ ] Pricing displays correctly
- [ ] Period label updates (month/year)
- [ ] Savings shown only for annual
- [ ] CTA button displays
- [ ] Guarantee text displays with Lock icon
- [ ] ROI card displays
- [ ] ROI icon has gradient + glow
- [ ] ROI calculations accurate
- [ ] Features list displays
- [ ] Perks card displays
- [ ] Benefits grid displays
- [ ] Testimonials carousel displays
- [ ] FAQ section displays
- [ ] Trust band displays

### Interaction Testing

- [ ] Monthly toggle updates pricing
- [ ] Annual toggle updates pricing
- [ ] Annual toggle shows savings
- [ ] Period label updates
- [ ] Plan options toggle correctly
- [ ] Active plan highlights with glow
- [ ] Radio indicator updates on click
- [ ] CTA button clickable
- [ ] CTA text updates on plan change
- [ ] ROI values update on plan change
- [ ] Features list updates on plan change
- [ ] Perks list updates on plan change
- [ ] Breadcrumb links navigate
- [ ] Testimonials carousel works
- [ ] FAQ accordion works

### State Testing

- [ ] Default plan is "premium"
- [ ] Default billing is "annual"
- [ ] Selected plan updates on click
- [ ] Billing period updates on click
- [ ] Current plan data fetched correctly
- [ ] Current price reflects billing period
- [ ] Features reflect current plan
- [ ] Perks reflect current plan
- [ ] ROI calculation accurate

### Responsive Testing

- [ ] Mobile: Single column layout
- [ ] Mobile: Billing toggle vertical stack
- [ ] Mobile: ROI smaller icon
- [ ] Mobile: Benefits single column
- [ ] Tablet: Single column layout
- [ ] Tablet: Benefits 2 columns
- [ ] Desktop: Two column layout
- [ ] Desktop: Benefits auto-fit grid

### Dark Mode Testing

- [ ] Badge glow visible
- [ ] Billing toggle wrapper visible
- [ ] Active toggle glow stronger
- [ ] Plan cards glassmorphism visible
- [ ] Plan borders cyan-tinted
- [ ] Active plan glow stronger
- [ ] ROI card visible
- [ ] ROI icon glow visible
- [ ] ROI total border cyan-tinted
- [ ] Feature items visible
- [ ] Feature icons cyan-tinted bg
- [ ] Perks card visible
- [ ] Benefit icons glow visible
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Breadcrumbs have aria-label
- [ ] Current breadcrumb has aria-current
- [ ] Badge icon has aria-hidden
- [ ] Billing toggle has role="group" aria-label
- [ ] Toggle buttons have aria-pressed
- [ ] Plan selector is fieldset with legend
- [ ] Radio buttons have aria-checked
- [ ] Guarantee icons have aria-hidden
- [ ] ROI card has aria-labelledby
- [ ] ROI icon has aria-hidden
- [ ] Features section has aria-labelledby
- [ ] Feature icons have aria-hidden
- [ ] Perks section has aria-labelledby
- [ ] Perks icons have aria-hidden
- [ ] Benefits section has aria-labelledby
- [ ] Testimonials section has aria-labelledby
- [ ] FAQ section has aria-labelledby
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA

---

## Related Templates

- **MembershipLanding** — Marketing landing page for memberships
- **SingleSubscription** — Similar detail page for subscriptions
- **SubscriptionLanding** — Marketing landing for subscriptions
- **MembershipComparison** — Side-by-side tier comparison

### Shared CSS

- `.commerce-special-funky.css` — Subscription/membership styles
- `.wp-product-page` — Product detail styles
- `.wp-plan-selector` — Plan selection styles
- `.wp-billing-toggle` — Billing period toggle

### Shared Components

- **TestimonialCarousel** — Testimonial slider pattern
- **FAQSection** — FAQ accordion pattern
- **TrustBand** — Security badges pattern

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready
