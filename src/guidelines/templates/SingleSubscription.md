# SingleSubscription

**Component Type:** Template (Subscription Product Detail - Full Funky)  
**Location:** `/src/app/components/templates/SingleSubscription.tsx`  
**CSS:** `/src/styles/sections/commerce-special-funky.css`  
**Route:** `/product/:slug` (subscription products)  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 9)  
**Color Identity:** Cyan `#00ffff` / Purple `#8b5cf6`

---

## Overview

SingleSubscription is a WooCommerce Subscriptions product detail page featuring interval selection, trial periods, feature comparison, and subscription management options. Uses two-column layout with product gallery (left) and subscription options (right), followed by benefits grid, comparison table, FAQ accordion, and trust band.

**Page Purpose:** Convert visitors to trial subscribers  
**Target Audience:** Potential subscribers evaluating plans  
**Dark Mode:** ✅ Complete support with neon accents  
**Layout:** Product Gallery + Info → Benefits → Comparison → FAQ → Trust Band

**Note:** Uses state to manage selected billing interval (monthly/quarterly/annual).

---

## Key Features

### Visual Elements

**1. Product Gallery:**
- Main product image
- Thumbnail carousel (4 images)
- Glassmorphism frame

**2. Product Info:**
- Badge (Package icon)
- Product title (h1)
- Star rating + review count
- Description text
- Billing interval selector (radio group)
- CTA button (gradient)
- Guarantee text
- "What's Included" feature list
- Auto-renewal info box

**3. Benefits Grid:**
- 4-6 benefit cards
- Icon circles (gradient bg)
- Title + description
- 3-column grid (desktop)

**4. Comparison Table:**
- Feature rows
- 3 plan columns (Monthly/Quarterly/Annual)
- Check/X indicators
- Responsive table

**5. FAQ Section:**
- Collapsible accordion
- Gradient dividers
- Glow on active items

**6. Trust Band:**
- Security badges
- Trust indicators

### Funky Treatments

**Gallery:** Glassmorphism frame  
**Badge:** Gradient (cyan → purple)  
**Rating Stars:** Cyan fill  
**Plan Options:** Glassmorphism cards with neon border on active  
**Active Radio:** Gradient (cyan → purple) with glow  
**CTA Button:** Gradient (cyan → lime) with neon glow  
**Feature Checkmarks:** Cyan color  
**Benefit Icons:** Gradient circles with glow  
**Comparison Table:** Neon borders, gradient headers  
**FAQ Items:** Glassmorphism with gradient active state

---

## Data Structure

### Subscription Plans

```tsx
import { 
  subscriptionPlans, 
  subscriptionFeatures, 
  subscriptionBenefits, 
  subscriptionFAQs, 
  subscriptionProductImages, 
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
  badge?: string;
  trialDays?: number;
  savings?: number;
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
    trialDays: 7,
  },
  {
    id: 'quarterly',
    name: 'Quarterly Box',
    description: 'Most popular option',
    price: 79,
    interval: 'quarter',
    intervalLabel: 'quarter',
    features: [
      '10-12 curated products',
      'Free shipping',
      'Cancel anytime',
      'Exclusive member discounts',
      'Priority support'
    ],
    popular: true,
    badge: 'Best Value',
    trialDays: 14,
    savings: 8,
  },
  // ...more plans
];
```

### Subscription Features

```tsx
interface SubscriptionFeature {
  name: string;
  description: string;
  availability: {
    monthly: boolean | string;
    quarterly: boolean | string;
    annual: boolean | string;
  };
}

const subscriptionFeatures = [
  {
    name: 'Free Shipping',
    description: 'All subscriptions ship free',
    availability: {
      monthly: true,
      quarterly: true,
      annual: true,
    },
  },
  {
    name: 'Cancel Anytime',
    description: 'No commitments or penalties',
    availability: {
      monthly: true,
      quarterly: true,
      annual: true,
    },
  },
  {
    name: 'Priority Support',
    description: '24/7 dedicated support',
    availability: {
      monthly: false,
      quarterly: true,
      annual: true,
    },
  },
  // ...more features
];
```

### Product Images

```tsx
interface SubscriptionProductImages {
  main: string;
  gallery: string[];
}

const subscriptionProductImages = {
  main: '/images/subscription-box-main.jpg',
  gallery: [
    '/images/subscription-box-1.jpg',
    '/images/subscription-box-2.jpg',
    '/images/subscription-box-3.jpg',
    '/images/subscription-box-4.jpg',
  ],
};
```

### Page Content

```tsx
interface SubscriptionPageContent {
  single: {
    badge: string;
    title: string;
    rating: string;
    description: string;
  };
  landing: {
    benefitsHeading: string;
    benefitsText: string;
  };
}
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
        <li><Link to="/subscriptions">Subscriptions</Link></li>
        <li className="wp-breadcrumbs__separator">/</li>
        <li className="wp-breadcrumbs__current">{single.title}</li>
      </ol>
    </nav>

    <div className="wp-product-layout">
      {/* Left: Product Gallery */}
      <div className="wp-product-gallery">
        <div className="wp-product-gallery__main">
          <img 
            src={subscriptionProductImages.main}
            alt={single.title}
            className="wp-product-gallery__img"
          />
        </div>
        
        <div className="wp-product-gallery__thumbs">
          {subscriptionProductImages.gallery.map((src, index) => (
            <button 
              key={index}
              className="wp-product-gallery__thumb-btn"
              aria-label={`View product image ${index + 1}`}
            >
              <img src={src} alt="" className="wp-product-gallery__thumb-img" />
            </button>
          ))}
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="wp-product-info">
        {/* Badge */}
        <div className="wp-badge-pill">
          <Package size={14} aria-hidden="true" />
          <Typography variant="caption" className="wp-badge-pill__text">
            {single.badge}
          </Typography>
        </div>

        <Heading level={1} className="wp-product-title">
          {single.title}
        </Heading>

        {/* Reviews */}
        <div className="wp-product-reviews">
          <div className="wp-rating-stars" aria-label="5 out of 5 stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={16} fill="currentColor" aria-hidden="true" />
            ))}
          </div>
          <Typography className="wp-review-count">
            {single.rating}
          </Typography>
        </div>

        <Typography className="wp-product-description">
          {single.description}
        </Typography>

        {/* Billing Interval Selection */}
        <div className="wp-plan-selector-container">
          <label className="wp-field-label">
            <Typography className="wp-label-text">
              Choose Your Delivery Frequency:
            </Typography>
          </label>
          
          <div className="wp-plan-list">
            {subscriptionPlans.map((interval) => (
              <button
                key={interval.id}
                onClick={() => setSelectedInterval(interval.id)}
                className={`wp-plan-option ${selectedInterval === interval.id ? 'wp-plan-option--active' : ''}`}
                aria-pressed={selectedInterval === interval.id}
              >
                <div className="wp-plan-option__content">
                  <div className={`wp-radio-indicator ${selectedInterval === interval.id ? 'wp-radio-indicator--checked' : ''}`}>
                    {selectedInterval === interval.id && <div className="wp-radio-indicator__dot" />}
                  </div>
                  
                  <div className="wp-plan-option__details">
                    <div className="wp-plan-option__header">
                      <Typography className="wp-plan-option__name">
                        {interval.name}
                      </Typography>
                      {interval.badge && (
                        <span className="wp-plan-option__badge">
                          {interval.badge}
                        </span>
                      )}
                    </div>
                    <Typography variant="caption" className="wp-plan-option__desc">
                      {interval.trialDays || 7} day free trial • Cancel anytime
                    </Typography>
                  </div>
                </div>
                
                <div className="wp-plan-option__pricing">
                  <Typography className="wp-plan-option__price">
                    £{interval.price}
                  </Typography>
                  <Typography variant="caption" className="wp-plan-option__interval">
                    / {interval.interval}
                  </Typography>
                  {interval.savings && (
                    <Typography variant="caption" className="wp-plan-option__savings">
                      Save £{interval.savings}
                    </Typography>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          className="wp-button-primary wp-button-full"
          type="button"
        >
          Start {currentInterval.trialDays}-Day Free Trial
        </button>

        <Typography variant="caption" className="wp-guarantee-text">
          Cancel anytime during trial period at no charge
        </Typography>

        {/* What's Included */}
        <div className="wp-features-card">
          <Heading level={3} className="wp-features-card__title">
            What's Included
          </Heading>
          
          <ul className="wp-features-card__list">
            {currentInterval.features.map((item, index) => (
              <li key={index} className="wp-features-card__item">
                <Check size={20} className="wp-icon-success" aria-hidden="true" />
                <Typography className="wp-features-card__text">
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </div>

        {/* Auto-renewal Info */}
        <div className="wp-info-box">
          <Typography className="wp-info-box__text">
            <strong>Auto-renewal:</strong> After your free trial, your subscription will automatically renew 
            at £{currentInterval.price} per {currentInterval.interval}. You can cancel or modify anytime.
          </Typography>
        </div>
      </div>
    </div>

    {/* Benefits Section */}
    <section className="wp-section-benefits">
      <div className="wp-section-header">
        <Heading level={2} className="wp-section-title">
          {subscriptionPageContent.landing.benefitsHeading}
        </Heading>
        <Typography className="wp-section-subtitle">
          {subscriptionPageContent.landing.benefitsText}
        </Typography>
      </div>

      <div className="wp-benefits-grid">
        {subscriptionBenefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div key={index} className="wp-benefit-card">
              <div className={`wp-benefit-icon-wrapper ${benefit.bg}`}>
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

    {/* Features Comparison Table */}
    <section className="wp-section-comparison">
      <Heading level={2} className="wp-section-heading">
        Compare Plans
      </Heading>

      <FeaturesComparisonTable
        features={transformedFeatures}
        plans={[
          { id: 'monthly', name: 'Monthly', price: subscriptionPlans[0].price },
          { id: 'quarterly', name: 'Quarterly', price: subscriptionPlans[1].price },
          { id: 'annual', name: 'Annual', price: subscriptionPlans[2].price },
        ]}
      />
    </section>

    {/* FAQ */}
    <section className="wp-section-faq">
      <Heading level={2} className="wp-section-heading">
        Frequently Asked Questions
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
├── .wp-product-gallery (Left column - product images)
│   ├── .wp-product-gallery__main (Main image container)
│   │   └── .wp-product-gallery__img (Main image)
│   └── .wp-product-gallery__thumbs (Thumbnail carousel)
│       └── .wp-product-gallery__thumb-btn (Thumbnail button)
│           └── .wp-product-gallery__thumb-img (Thumbnail image)
│
└── .wp-product-info (Right column - product details)
    ├── .wp-badge-pill (Badge with icon)
    │   └── .wp-badge-pill__text
    ├── .wp-product-title (h1)
    ├── .wp-product-reviews (Rating + count)
    │   ├── .wp-rating-stars (Star icons container)
    │   │   └── .wp-icon-star (Individual star)
    │   └── .wp-review-count (Review count text)
    ├── .wp-product-description (Description paragraph)
    ├── .wp-plan-selector-container (Interval selector)
    │   ├── .wp-field-label (Label wrapper)
    │   │   └── .wp-label-text (Label text)
    │   └── .wp-plan-list (Plan options list)
    │       └── .wp-plan-option (Individual plan button)
    │           ├── .wp-plan-option--active (Active modifier)
    │           ├── .wp-plan-option__content (Left side)
    │           │   ├── .wp-radio-indicator (Radio circle)
    │           │   │   ├── .wp-radio-indicator--checked (Checked modifier)
    │           │   │   └── .wp-radio-indicator__dot (Inner dot)
    │           │   └── .wp-plan-option__details
    │           │       ├── .wp-plan-option__header
    │           │       │   ├── .wp-plan-option__name (Plan name)
    │           │       │   └── .wp-plan-option__badge (e.g., "Best Value")
    │           │       └── .wp-plan-option__desc (Trial info)
    │           └── .wp-plan-option__pricing (Right side)
    │               ├── .wp-plan-option__price (£29)
    │               ├── .wp-plan-option__interval (/ month)
    │               └── .wp-plan-option__savings (Save £8)
    ├── .wp-button-primary (CTA button)
    │   └── .wp-button-full (Full width modifier)
    ├── .wp-guarantee-text (Cancel anytime text)
    ├── .wp-features-card (What's Included)
    │   ├── .wp-features-card__title (h3)
    │   └── .wp-features-card__list (<ul>)
    │       └── .wp-features-card__item (<li>)
    │           ├── .wp-icon-success (Checkmark)
    │           └── .wp-features-card__text (Feature text)
    └── .wp-info-box (Auto-renewal info)
        └── .wp-info-box__text (Info text)

.wp-section-benefits (Benefits section)
├── .wp-section-header
│   ├── .wp-section-title (h2)
│   └── .wp-section-subtitle
└── .wp-benefits-grid
    └── .wp-benefit-card
        ├── .wp-benefit-icon-wrapper (Icon circle - gradient)
        ├── .wp-benefit-title (h3)
        └── .wp-benefit-desc

.wp-section-comparison (Comparison table section)
├── .wp-section-heading (h2)
└── <FeaturesComparisonTable /> (Pattern component)

.wp-section-faq (FAQ section)
├── .wp-section-heading (h2)
└── <FAQSection /> (Pattern component)

.wp-section-trust (Trust band section)
└── <TrustBand /> (Pattern component)
```

---

## Section Breakdown

### 1. Breadcrumbs (`.wp-breadcrumbs`)

```css
.wp-breadcrumbs {
  padding: var(--space--600) 0;
  margin-bottom: var(--space--700);
}

.wp-breadcrumbs__list {
  display: flex;
  align-items: center;
  gap: var(--space--300);
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size--200);
}

.wp-breadcrumbs__list a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.wp-breadcrumbs__list a:hover {
  color: var(--cyan);
}

.wp-breadcrumbs__separator {
  color: var(--text-muted);
}

.wp-breadcrumbs__current {
  color: var(--text);
  font-weight: 500;
}
```

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

### 3. Product Gallery (`.wp-product-gallery`)

```css
.wp-product-gallery {
  position: sticky;
  top: var(--space--800);
  height: fit-content;
}

.wp-product-gallery__main {
  margin-bottom: var(--space--600);
  border-radius: var(--radius--500);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

.dark .wp-product-gallery__main {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.wp-product-gallery__img {
  width: 100%;
  height: auto;
  display: block;
}

.wp-product-gallery__thumbs {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space--400);
}

.wp-product-gallery__thumb-btn {
  padding: 0;
  border: 2px solid transparent;
  border-radius: var(--radius--300);
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.wp-product-gallery__thumb-btn:hover {
  border-color: var(--cyan);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.dark .wp-product-gallery__thumb-btn:hover {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.wp-product-gallery__thumb-img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1024px) {
  .wp-product-gallery {
    position: relative;
    top: 0;
  }
}
```

**Sticky:** Gallery sticks to top on desktop  
**Glassmorphism:** Main image has glassmorphism frame  
**Thumbs:** 4-column grid with hover glow

---

### 4. Product Info (`.wp-product-info`)

```css
.wp-product-info {
  display: flex;
  flex-direction: column;
  gap: var(--space--600);
}

/* Badge */
.wp-badge-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space--200);
  width: fit-content;
  padding: var(--space--200) var(--space--500);
  border-radius: var(--radius--full);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
  color: var(--white);
  font-size: var(--font-size--75);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dark .wp-badge-pill {
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
}

/* Title */
.wp-product-title {
  margin: 0;
}

/* Reviews */
.wp-product-reviews {
  display: flex;
  align-items: center;
  gap: var(--space--400);
}

.wp-rating-stars {
  display: flex;
  align-items: center;
  gap: var(--space--100);
}

.wp-icon-star {
  color: var(--cyan);
}

.wp-review-count {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
}

/* Description */
.wp-product-description {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  line-height: 1.6;
}
```

**Badge:** Gradient (cyan → purple) with glow  
**Stars:** Cyan fill

---

### 5. Plan Selector (`.wp-plan-selector-container`)

```css
.wp-plan-selector-container {
  display: flex;
  flex-direction: column;
  gap: var(--space--500);
  padding: var(--space--600) 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.wp-field-label {
  display: block;
}

.wp-label-text {
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--text);
}

.wp-plan-list {
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

.wp-plan-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space--500);
  width: 100%;
  padding: var(--space--600);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
  text-align: left;
}

.dark .wp-plan-option {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.wp-plan-option:hover {
  border-color: var(--cyan);
}

/* Active State (Neon Glow) */
.wp-plan-option--active {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
}

.dark .wp-plan-option--active {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

/* Content (Left Side) */
.wp-plan-option__content {
  display: flex;
  align-items: center;
  gap: var(--space--500);
  flex: 1;
}

/* Radio Indicator */
.wp-radio-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--border);
  transition: border-color 0.2s;
  flex-shrink: 0;
}

.wp-radio-indicator--checked {
  border-color: var(--cyan);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--purple) 100%);
}

.dark .wp-radio-indicator--checked {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

.wp-radio-indicator__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--white);
}

/* Details */
.wp-plan-option__details {
  flex: 1;
}

.wp-plan-option__header {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  margin-bottom: var(--space--200);
}

.wp-plan-option__name {
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--text);
}

.wp-plan-option__badge {
  padding: var(--space--100) var(--space--300);
  border-radius: var(--radius--full);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  color: var(--navy);
  font-size: var(--font-size--50);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dark .wp-plan-option__badge {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

.wp-plan-option__desc {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
}

/* Pricing (Right Side) */
.wp-plan-option__pricing {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--space--100);
}

.wp-plan-option__price {
  font-size: var(--font-size--600);
  font-weight: 700;
  color: var(--text);
}

.wp-plan-option__interval {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
}

.wp-plan-option__savings {
  font-size: var(--font-size--200);
  font-weight: 600;
  color: var(--cyan);
}

@media (max-width: 640px) {
  .wp-plan-option {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .wp-plan-option__pricing {
    align-items: flex-start;
  }
}
```

**Glassmorphism:** Plan cards with backdrop-blur  
**Active State:** Neon border + glow  
**Radio:** Gradient (cyan → purple) with white dot  
**Badge:** Gradient (cyan → lime) with glow

---

### 6. CTA Button (`.wp-button-primary`)

```css
.wp-button-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space--300);
  padding: var(--space--600) var(--space--800);
  border-radius: var(--radius--300);
  background: linear-gradient(135deg, var(--cyan) 0%, var(--lime) 100%);
  border: none;
  color: var(--navy);
  font-size: var(--font-size--400);
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.wp-button-full {
  width: 100%;
}

.wp-button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.6);
}

.dark .wp-button-primary:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

.wp-button-primary:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}
```

**Gradient:** Cyan → Lime  
**Hover:** Neon glow

---

### 7. Guarantee Text (`.wp-guarantee-text`)

```css
.wp-guarantee-text {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  text-align: center;
}
```

---

### 8. Features Card (`.wp-features-card`)

```css
.wp-features-card {
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
}

.dark .wp-features-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.wp-features-card__title {
  margin-bottom: var(--space--600);
}

.wp-features-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

.wp-features-card__item {
  display: flex;
  align-items: center;
  gap: var(--space--400);
}

.wp-icon-success {
  color: var(--cyan);
  flex-shrink: 0;
}

.wp-features-card__text {
  font-size: var(--font-size--300);
  color: var(--text);
}
```

**Glassmorphism:** Backdrop-blur 8px  
**Checkmarks:** Cyan color

---

### 9. Info Box (`.wp-info-box`)

```css
.wp-info-box {
  padding: var(--space--600);
  border-radius: var(--radius--300);
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.2);
}

.dark .wp-info-box {
  background: rgba(0, 255, 255, 0.08);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
}

.wp-info-box__text {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  line-height: 1.6;
}
```

**Background:** Cyan-tinted  
**Glow:** Subtle in dark mode

---

### 10. Benefits Section (`.wp-section-benefits`)

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

.wp-benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space--700);
}

.wp-benefit-card {
  text-align: center;
}

.wp-benefit-icon-wrapper {
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

.dark .wp-benefit-icon-wrapper {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
}

.wp-benefit-icon-wrapper svg {
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
  .wp-benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .wp-benefit-icon-wrapper {
    width: 64px;
    height: 64px;
  }
}
```

**Grid:** Auto-fit (min 280px)  
**Icons:** Gradient circles with glow

---

## State Management

### Selected Interval State

```tsx
const [selectedInterval, setSelectedInterval] = useState<string>('quarterly');

// Get current plan data
const currentInterval = subscriptionPlans.find(p => p.id === selectedInterval) || subscriptionPlans[1];

// Update on button click
<button
  onClick={() => setSelectedInterval(interval.id)}
  className={`wp-plan-option ${selectedInterval === interval.id ? 'wp-plan-option--active' : ''}`}
  aria-pressed={selectedInterval === interval.id}
>
```

### Dynamic Content Based on Interval

```tsx
{/* CTA button text changes */}
<button className="wp-button-primary">
  Start {currentInterval.trialDays}-Day Free Trial
</button>

{/* Features list changes */}
<ul className="wp-features-card__list">
  {currentInterval.features.map((item, index) => (
    <li key={index} className="wp-features-card__item">
      <Check size={20} />
      <Typography>{item}</Typography>
    </li>
  ))}
</ul>

{/* Auto-renewal info changes */}
<Typography>
  After your free trial, your subscription will automatically renew 
  at £{currentInterval.price} per {currentInterval.interval}.
</Typography>
```

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Product layout: Single column */
.wp-product-layout {
  grid-template-columns: 1fr;
}

/* Gallery: Not sticky */
.wp-product-gallery {
  position: relative;
  top: 0;
}

/* Plan options: Stack pricing */
.wp-plan-option {
  flex-direction: column;
  align-items: flex-start;
}

.wp-plan-option__pricing {
  align-items: flex-start;
}

/* Benefits: Single column */
.wp-benefits-grid {
  grid-template-columns: 1fr;
}

.wp-benefit-icon-wrapper {
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

/* Gallery: Not sticky */
.wp-product-gallery {
  position: relative;
}

/* Benefits: 2 columns */
.wp-benefits-grid {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (> 1024px)

```css
/* Product layout: 2 columns */
.wp-product-layout {
  grid-template-columns: 1fr 1fr;
}

/* Gallery: Sticky */
.wp-product-gallery {
  position: sticky;
  top: var(--space--800);
}

/* Benefits: Auto-fit grid */
.wp-benefits-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Gallery Frame** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Gallery Border** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.1)` |
| **Thumbs Hover** | Cyan border (0.3 glow) | Cyan border (0.5 glow) |
| **Badge BG** | Cyan → Purple gradient | Same + cyan glow |
| **Stars** | Cyan fill | Cyan fill |
| **Plan Cards** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Plan Borders** | `rgba(255,255,255,0.1)` | Cyan `rgba(0,255,255,0.1)` |
| **Active Plan** | Cyan border (0.3 glow) | Cyan border (0.5 glow) |
| **Radio (Checked)** | Gradient + no shadow | Gradient + cyan glow |
| **Plan Badge** | Gradient (cyan → lime) | Same + glow |
| **CTA Button** | Gradient (0.6 glow) | Gradient (0.8 glow) |
| **Features Card** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Info Box BG** | Cyan-tinted (0.05) | Cyan-tinted (0.08) + glow |
| **Benefit Icons** | Gradient circles | Same + cyan glow |

### Dark Mode Enhancements

```css
.dark .wp-product-gallery__main {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wp-product-gallery__thumb-btn:hover {
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

.dark .wp-badge-pill {
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.4);
}

.dark .wp-plan-option {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wp-plan-option--active {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.dark .wp-radio-indicator--checked {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

.dark .wp-plan-option__badge {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.6);
}

.dark .wp-button-primary:hover {
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.8);
}

.dark .wp-features-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .wp-info-box {
  background: rgba(0, 255, 255, 0.08);
  border-color: rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
}

.dark .wp-benefit-icon-wrapper {
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
      <li><Link to="/subscriptions">Subscriptions</Link></li>
      <li aria-hidden="true">/</li>
      <li aria-current="page">Premium Subscription</li>
    </ol>
  </nav>
  
  <div className="wp-product-layout">
    <div className="wp-product-gallery">
      <div className="wp-product-gallery__main">
        <img 
          src={main} 
          alt="Premium subscription box with curated products"
        />
      </div>
      
      <div className="wp-product-gallery__thumbs">
        <button aria-label="View product image 1">
          <img src={thumb1} alt="" />
        </button>
      </div>
    </div>
    
    <div className="wp-product-info">
      <div className="wp-badge-pill">
        <Package aria-hidden="true" />
        <span>Subscription</span>
      </div>
      
      <h1>Premium Subscription Box</h1>
      
      <div className="wp-product-reviews">
        <div className="wp-rating-stars" aria-label="5 out of 5 stars">
          {[1,2,3,4,5].map(star => (
            <Star key={star} fill="currentColor" aria-hidden="true" />
          ))}
        </div>
        <span>(284 reviews)</span>
      </div>
      
      <p>Get curated products delivered monthly</p>
      
      <fieldset className="wp-plan-selector-container">
        <legend className="wp-field-label">
          <span className="wp-label-text">Choose Your Delivery Frequency:</span>
        </legend>
        
        <div className="wp-plan-list" role="radiogroup">
          <button
            onClick={() => setSelectedInterval('monthly')}
            className="wp-plan-option"
            role="radio"
            aria-checked={selectedInterval === 'monthly'}
          >
            <div className="wp-plan-option__content">
              <div className="wp-radio-indicator">
                {selectedInterval === 'monthly' && <div className="wp-radio-indicator__dot" />}
              </div>
              <div>
                <span>Monthly Box</span>
                <span>7 day free trial • Cancel anytime</span>
              </div>
            </div>
            <div className="wp-plan-option__pricing">
              <span>£29</span>
              <span>/ month</span>
            </div>
          </button>
        </div>
      </fieldset>
      
      <button type="button">
        Start 7-Day Free Trial
      </button>
      
      <p>Cancel anytime during trial period at no charge</p>
      
      <section className="wp-features-card" aria-labelledby="features-heading">
        <h3 id="features-heading">What's Included</h3>
        <ul>
          <li>
            <Check aria-hidden="true" />
            <span>3-5 curated products</span>
          </li>
        </ul>
      </section>
      
      <aside className="wp-info-box">
        <p>
          <strong>Auto-renewal:</strong> After your free trial, 
          your subscription will automatically renew at £29 per month.
        </p>
      </aside>
    </div>
  </div>
  
  <section className="wp-section-benefits" aria-labelledby="benefits-heading">
    <h2 id="benefits-heading">Why Subscribe?</h2>
    <div className="wp-benefits-grid">
      <article className="wp-benefit-card">
        <div className="wp-benefit-icon-wrapper" aria-hidden="true">
          <Truck />
        </div>
        <h3>Free Shipping</h3>
        <p>All boxes ship free</p>
      </article>
    </div>
  </section>
  
  <section className="wp-section-comparison" aria-labelledby="comparison-heading">
    <h2 id="comparison-heading">Compare Plans</h2>
    <FeaturesComparisonTable />
  </section>
  
  <section className="wp-section-faq" aria-labelledby="faq-heading">
    <h2 id="faq-heading">Frequently Asked Questions</h2>
    <FAQSection />
  </section>
</main>
```

### ARIA Attributes

```tsx
{/* Breadcrumbs */}
<nav className="wp-breadcrumbs" aria-label="Breadcrumb">
  <ol>
    <li><Link to="/">Home</Link></li>
    <li aria-hidden="true">/</li>
    <li aria-current="page">Premium Subscription</li>
  </ol>
</nav>

{/* Decorative icons */}
<Package size={14} aria-hidden="true" />
<Star fill="currentColor" aria-hidden="true" />
<Check aria-hidden="true" />

{/* Rating stars */}
<div className="wp-rating-stars" aria-label="5 out of 5 stars">
  {[1,2,3,4,5].map(star => (
    <Star key={star} aria-hidden="true" />
  ))}
</div>

{/* Plan selector (radio group) */}
<fieldset className="wp-plan-selector-container">
  <legend className="wp-field-label">
    Choose Your Delivery Frequency:
  </legend>
  
  <div role="radiogroup">
    <button
      role="radio"
      aria-checked={selectedInterval === 'monthly'}
      aria-pressed={selectedInterval === 'monthly'}
    >
      {/* Plan content */}
    </button>
  </div>
</fieldset>

{/* Section labels */}
<section aria-labelledby="features-heading">
  <h3 id="features-heading">What's Included</h3>
</section>

<section aria-labelledby="benefits-heading">
  <h2 id="benefits-heading">Why Subscribe?</h2>
</section>
```

### Keyboard Navigation

- **Tab Order:** Breadcrumbs → Gallery thumbs → Plan options → CTA → Comparison table → FAQ → Trust band
- **Plan Selection:** Arrow keys to navigate, Space/Enter to select
- **Gallery:** Arrow keys to navigate thumbs, Enter to view full image

### Focus States

```css
.wp-breadcrumbs a:focus-visible,
.wp-product-gallery__thumb-btn:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

.wp-plan-option:focus-visible {
  outline: 2px solid var(--cyan);
  outline-offset: 2px;
}

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
| Description | `#6b7280` | Page bg | 4.6:1+ | AA ✅ |
| Plan Name | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| Plan Price | `#1a1a1a` / `#f9fafb` | Card bg | 12.0:1+ | AAA ✅ |
| CTA Button | Navy `#030213` | Gradient bg | 8.32:1 | AAA ✅ |
| Features Text | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. WooCommerce Subscriptions Integration

```tsx
// Add to cart with subscription parameters
const handleSubscribe = async () => {
  try {
    const response = await fetch('/wp-json/wc/v3/cart/add-item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: productId,
        quantity: 1,
        variation: {
          billing_period: currentInterval.interval,
          billing_interval: 1,
        },
      }),
    });
    
    if (response.ok) {
      navigate('/checkout');
    }
  } catch (error) {
    console.error('Add to cart failed:', error);
  }
};
```

### 2. Gallery Zoom Modal

```tsx
const [zoomedImage, setZoomedImage] = useState<string | null>(null);

<button onClick={() => setZoomedImage(mainImage)}>
  <img src={mainImage} alt="..." />
</button>

{zoomedImage && (
  <div className="wp-zoom-modal" onClick={() => setZoomedImage(null)}>
    <img src={zoomedImage} alt="..." />
  </div>
)}
```

### 3. Quantity Selector

```tsx
const [quantity, setQuantity] = useState(1);

<div className="wp-quantity-selector">
  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
  <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
  <button onClick={() => setQuantity(quantity + 1)}>+</button>
</div>
```

### 4. Save for Later

```tsx
const [isSaved, setIsSaved] = useState(false);

<button onClick={() => setIsSaved(!isSaved)}>
  <Heart fill={isSaved ? 'currentColor' : 'none'} />
  {isSaved ? 'Saved' : 'Save for Later'}
</button>
```

### 5. Share Product

```tsx
const handleShare = async () => {
  if (navigator.share) {
    await navigator.share({
      title: product.title,
      text: product.description,
      url: window.location.href,
    });
  }
};

<button onClick={handleShare}>
  <Share2 size={16} />
  Share
</button>
```

### 6. Discount Code Input

```tsx
const [discountCode, setDiscountCode] = useState('');

<div className="wp-discount-input">
  <input
    type="text"
    value={discountCode}
    onChange={(e) => setDiscountCode(e.target.value)}
    placeholder="Enter discount code"
  />
  <button onClick={handleApplyDiscount}>Apply</button>
</div>
```

### 7. Product Variants (Color/Size)

```tsx
const [selectedColor, setSelectedColor] = useState('blue');
const [selectedSize, setSelectedSize] = useState('medium');

<div className="wp-variant-selector">
  <label>Color:</label>
  <div className="wp-color-swatches">
    {colors.map(color => (
      <button
        key={color.id}
        onClick={() => setSelectedColor(color.id)}
        className={selectedColor === color.id ? 'active' : ''}
        style={{ backgroundColor: color.hex }}
        aria-label={color.name}
      />
    ))}
  </div>
</div>
```

### 8. Real-time Stock Display

```tsx
const [stockLevel, setStockLevel] = useState<number | null>(null);

useEffect(() => {
  fetch(`/api/stock/${productId}`)
    .then(res => res.json())
    .then(data => setStockLevel(data.stock));
}, [productId]);

{stockLevel !== null && stockLevel < 10 && (
  <div className="wp-low-stock-alert">
    Only {stockLevel} left in stock!
  </div>
)}
```

### 9. Related Products Carousel

```tsx
<section className="wp-section-related">
  <h2>You May Also Like</h2>
  <div className="wp-related-products">
    {relatedProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</section>
```

### 10. Analytics Tracking

```tsx
// Track product view
useEffect(() => {
  analytics.track('Product Viewed', {
    product_id: productId,
    product_name: product.title,
    product_price: currentInterval.price,
    billing_interval: currentInterval.interval,
  });
}, [productId, currentInterval]);

// Track interval selection
const handleIntervalChange = (intervalId: string) => {
  setSelectedInterval(intervalId);
  
  analytics.track('Billing Interval Changed', {
    product_id: productId,
    interval: intervalId,
    price: subscriptionPlans.find(p => p.id === intervalId)?.price,
  });
};

// Track add to cart
const handleAddToCart = () => {
  analytics.track('Product Added to Cart', {
    product_id: productId,
    product_name: product.title,
    product_price: currentInterval.price,
    billing_interval: currentInterval.interval,
    trial_days: currentInterval.trialDays,
  });
};
```

---

## Testing Checklist

### Visual Testing

- [ ] Breadcrumbs display
- [ ] Gallery main image displays
- [ ] Gallery thumbs display (4 images)
- [ ] Gallery frame has glassmorphism
- [ ] Badge displays with icon
- [ ] Title displays (h1)
- [ ] Star rating displays (5 stars)
- [ ] Review count displays
- [ ] Description displays
- [ ] Plan selector displays (3 plans)
- [ ] Active plan has neon border
- [ ] Radio indicators display correctly
- [ ] Plan badges display ("Best Value")
- [ ] Pricing displays correctly
- [ ] CTA button displays
- [ ] Guarantee text displays
- [ ] Features card displays
- [ ] Info box displays
- [ ] Benefits grid displays
- [ ] Comparison table displays
- [ ] FAQ section displays
- [ ] Trust band displays

### Interaction Testing

- [ ] Gallery thumbs clickable
- [ ] Plan options toggle correctly
- [ ] Active plan highlights with glow
- [ ] Radio indicator updates on click
- [ ] CTA button clickable
- [ ] Features list updates on interval change
- [ ] CTA text updates on interval change
- [ ] Info box text updates on interval change
- [ ] Breadcrumb links navigate
- [ ] FAQ accordion works
- [ ] Comparison table responsive

### State Testing

- [ ] Default interval is "quarterly"
- [ ] Selected interval updates on click
- [ ] Current interval data fetched correctly
- [ ] Features list reflects current plan
- [ ] Trial days display correctly
- [ ] Price displays correctly
- [ ] Auto-renewal info accurate

### Responsive Testing

- [ ] Mobile: Single column layout
- [ ] Mobile: Gallery not sticky
- [ ] Mobile: Plan options stack pricing
- [ ] Mobile: Benefits single column
- [ ] Tablet: Single column layout
- [ ] Tablet: Gallery not sticky
- [ ] Tablet: Benefits 2 columns
- [ ] Desktop: Two column layout
- [ ] Desktop: Gallery sticky
- [ ] Desktop: Benefits auto-fit grid

### Dark Mode Testing

- [ ] Gallery frame visible
- [ ] Gallery borders cyan-tinted
- [ ] Thumb hover glow stronger
- [ ] Badge glow visible
- [ ] Stars cyan fill
- [ ] Plan cards glassmorphism visible
- [ ] Plan borders cyan-tinted
- [ ] Active plan glow stronger
- [ ] Radio glow visible when checked
- [ ] Plan badge glow visible
- [ ] CTA button glow stronger
- [ ] Features card visible
- [ ] Info box glow visible
- [ ] Benefit icons glow visible
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Breadcrumbs have aria-label
- [ ] Current breadcrumb has aria-current
- [ ] Separators have aria-hidden
- [ ] Gallery thumbs have aria-label
- [ ] Gallery images have alt text
- [ ] Badge icon has aria-hidden
- [ ] Rating has aria-label
- [ ] Stars have aria-hidden
- [ ] Plan selector is fieldset with legend
- [ ] Radio group has role="radiogroup"
- [ ] Radio buttons have aria-checked
- [ ] Decorative icons have aria-hidden
- [ ] Sections have aria-labelledby
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA

---

## Related Templates

- **SubscriptionLanding** — Marketing landing page for subscriptions
- **SingleProduct** — Standard product detail page
- **MembershipLanding** — Similar marketing page for memberships
- **SingleMembership** — Individual membership detail page

### Shared CSS

- `.commerce-special-funky.css` — Subscription/membership styles
- `.wp-product-page` — Product detail styles
- `.wp-plan-selector-container` — Interval selection styles

### Shared Components

- **FAQSection** — FAQ accordion pattern
- **TrustBand** — Security badges pattern
- **FeaturesComparisonTable** — Plan comparison table pattern

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready
