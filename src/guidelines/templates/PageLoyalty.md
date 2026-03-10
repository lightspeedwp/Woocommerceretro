# PageLoyalty

**Component Type:** Template (Loyalty Dashboard - Funky Redesign)  
**Location:** `/src/app/components/templates/PageLoyalty.tsx`  
**CSS:** `/src/styles/sections/loyalty-funky.css`  
**Route:** `/loyalty`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign)  
**Color Identity:** Gold `#fbbf24` / Cyan `#00ffff` (loyalty/achievement)

---

## Overview

PageLoyalty is a personalized loyalty program dashboard showing the user's current tier, points balance, progress to next tier, recent activity, quick actions, tier benefits, and upgrade opportunities. Features gradient hero with floating orbs, glassmorphism stat cards, animated progress bar, activity timeline, and CTA section. This is the account-facing view of the rewards program (vs. `/rewards` which is the marketing landing).

**Page Purpose:** Display user's loyalty program status and encourage engagement  
**Target Audience:** Logged-in members tracking loyalty points  
**Dark Mode:** ✅ Complete support with neon accents  
**Layout:** Hero → Stats Dashboard → Quick Actions → Recent Activity → Tier Benefits → CTA

**Note:** Uses mock loyalty data and `prefers-reduced-motion` hook for orb animations.

---

## Key Features

### Visual Elements

**1. Hero Section:**
- Gradient background (purple → navy)
- Floating orbs (2x, animated)
- Tier badge with icon
- Personalized greeting (first name)
- Points balance + next tier info
- Dual CTAs (primary gradient + outline)

**2. Stats Dashboard:**
- 4 stat cards in grid
- Points balance (gradient text)
- Progress bar to next tier
- Lifetime points earned
- Current tier with icon

**3. Quick Actions:**
- 4 action cards
- Icon + label + description
- Arrow hover animation
- Glassmorphism cards

**4. Recent Activity:**
- Activity timeline
- Earn/Spend indicators
- Date timestamps
- Points display (+ or -)

**5. Tier Benefits:**
- Current tier benefits list
- Checkmark icons
- Upgrade banner with CTA

**6. Final CTA:**
- Gradient background
- Floating orbs (2x)
- TrendingUp icon
- Dual CTAs

### Funky Treatments

**Hero:** Gradient background + animated orbs  
**Tier Badge:** Gradient (gold → cyan) with icon  
**Hero Title:** Gradient text (gold → cyan)  
**Points Balance:** Gradient text (gold → cyan)  
**Progress Bar:** Animated gradient fill  
**Stat Cards:** Glassmorphism with hover glow  
**Action Cards:** Glassmorphism with arrow animation  
**Activity Icons:** Gold/cyan color based on type  
**Upgrade Banner:** Gradient background with glow  
**Final CTA:** Gradient background + orbs + icon glow

---

## Data Structure

### Loyalty User Data

```tsx
import {
  loyaltyUser,
  tierIcons,
  recentActivity,
  quickActions,
  getLoyaltyProgress,
} from '../../data/loyalty';

// Loyalty user structure
interface LoyaltyUser {
  name: string;
  tier: 'Silver' | 'Gold' | 'Platinum';
  nextTier: 'Gold' | 'Platinum' | 'Diamond';
  points: number;
  lifetimePoints: number;
  nextTierThreshold: number;
  memberSince: string;
}

// Example:
const loyaltyUser = {
  name: 'Sarah Johnson',
  tier: 'Gold',
  nextTier: 'Platinum',
  points: 2850,
  lifetimePoints: 8420,
  nextTierThreshold: 5000,
  memberSince: '2023',
};
```

### Progress Calculation

```tsx
interface LoyaltyProgress {
  progressPct: number;
  pointsRemaining: number;
}

const getLoyaltyProgress = (): LoyaltyProgress => {
  const currentTierMin = 2000; // Gold starts at 2000
  const nextTierMin = 5000;    // Platinum starts at 5000
  const pointsInTier = loyaltyUser.points - currentTierMin;
  const tierRange = nextTierMin - currentTierMin;
  const progressPct = Math.round((pointsInTier / tierRange) * 100);
  const pointsRemaining = nextTierMin - loyaltyUser.points;
  
  return { progressPct, pointsRemaining };
};

// Usage:
const { progressPct, pointsRemaining } = getLoyaltyProgress();
// progressPct = 28, pointsRemaining = 2150
```

### Quick Actions

```tsx
interface QuickAction {
  label: string;
  description: string;
  icon: JSX.Element;
  link: string;
}

const quickActions = [
  {
    label: 'Redeem rewards',
    description: 'Browse available rewards',
    icon: <Gift size={24} />,
    link: '/rewards/redeem',
  },
  {
    label: 'Refer a friend',
    description: 'Earn 500 bonus points',
    icon: <Users size={24} />,
    link: '/rewards/refer',
  },
  // ...more actions
];
```

### Recent Activity

```tsx
interface ActivityItem {
  id: string;
  type: 'earn' | 'spend';
  action: string;
  points: number;
  date: string;
  icon: JSX.Element;
}

const recentActivity = [
  {
    id: '1',
    type: 'earn',
    action: 'Purchase completed',
    points: 150,
    date: '2 hours ago',
    icon: <ShoppingBag size={18} />,
  },
  {
    id: '2',
    type: 'spend',
    action: 'Redeemed 10% off coupon',
    points: -500,
    date: '3 days ago',
    icon: <Tag size={18} />,
  },
  // ...more activity
];
```

### Tier Icons

```tsx
const tierIcons = {
  Silver: <Award size={20} className="text-gray-400" />,
  Gold: <Award size={20} className="text-gold" />,
  Platinum: <Crown size={20} className="text-cyan" />,
  Diamond: <Crown size={20} className="text-purple-400" />,
};
```

---

## Component Structure

### Template Pattern

```tsx
<Layout>
  <div className="page-loyalty">
    {/* Hero */}
    <section className="commerce-hero" aria-labelledby="loyalty-title">
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
            {tierIcons[loyaltyUser.tier]}
            <span>{loyaltyUser.tier} member</span>
          </div>

          <h1 id="loyalty-title" className="commerce-hero__title">
            Welcome back, {loyaltyUser.name.split(' ')[0]}
          </h1>

          <p className="commerce-hero__subtitle">
            You have <strong>{loyaltyUser.points.toLocaleString()} points</strong> to spend.
            Keep earning to reach {loyaltyUser.nextTier}!
          </p>

          <div className="commerce-hero__actions">
            <Link to="/shop" className="wp-sales-btn wp-sales-btn--primary">
              Start shopping
              <ArrowRight size={18} />
            </Link>
            <Link to="/rewards" className="wp-sales-btn wp-sales-btn--outline">
              View full program
            </Link>
          </div>
        </div>
      </Container>
    </section>

    {/* Points Dashboard */}
    <section className="loyalty-dashboard" aria-label="Your points overview">
      <Container>
        <div className="loyalty-dashboard__grid">
          {/* Points Balance Card */}
          <div className="loyalty-stat-card loyalty-stat-card--primary">
            <span className="loyalty-stat-card__label">Available points</span>
            <span className="loyalty-stat-card__value">{loyaltyUser.points.toLocaleString()}</span>
            <span className="loyalty-stat-card__subtext">
              ≈ ${(loyaltyUser.points * 0.02).toFixed(0)} value
            </span>
          </div>

          {/* Tier Progress Card */}
          <div className="loyalty-stat-card loyalty-stat-card--progress">
            <span className="loyalty-stat-card__label">Progress to {loyaltyUser.nextTier}</span>
            <div className="loyalty-progress">
              <div className="loyalty-progress__track">
                <div
                  className="loyalty-progress__fill"
                  style={{ width: `${Math.min(progressPct, 100)}%` }}
                  role="progressbar"
                  aria-valuenow={loyaltyUser.points}
                  aria-valuemin={0}
                  aria-valuemax={loyaltyUser.nextTierThreshold}
                  aria-label={`${progressPct}% to ${loyaltyUser.nextTier}`}
                />
              </div>
              <span className="loyalty-progress__label">{pointsRemaining} pts to go</span>
            </div>
          </div>

          {/* Lifetime Points */}
          <div className="loyalty-stat-card">
            <span className="loyalty-stat-card__label">Lifetime earned</span>
            <span className="loyalty-stat-card__value">{loyaltyUser.lifetimePoints.toLocaleString()}</span>
            <span className="loyalty-stat-card__subtext">
              Member since {loyaltyUser.memberSince}
            </span>
          </div>

          {/* Current Tier */}
          <div className="loyalty-stat-card">
            <span className="loyalty-stat-card__label">Current tier</span>
            <span className="loyalty-stat-card__value loyalty-stat-card__value--tier">
              {tierIcons[loyaltyUser.tier]}
              {loyaltyUser.tier}
            </span>
            <span className="loyalty-stat-card__subtext">
              1.5x points multiplier
            </span>
          </div>
        </div>
      </Container>
    </section>

    {/* Quick Actions */}
    <section className="loyalty-actions" aria-label="Quick actions">
      <Container>
        <h2 className="loyalty-section__heading">Quick actions</h2>
        <div className="loyalty-actions__grid">
          {quickActions.map((action) => (
            <Link key={action.label} to={action.link} className="loyalty-action-card">
              <span className="loyalty-action-card__icon" aria-hidden="true">
                {action.icon}
              </span>
              <div className="loyalty-action-card__text">
                <span className="loyalty-action-card__label">{action.label}</span>
                <span className="loyalty-action-card__desc">{action.description}</span>
              </div>
              <ArrowRight size={16} className="loyalty-action-card__arrow" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Container>
    </section>

    {/* Recent Activity */}
    <section className="loyalty-activity" aria-label="Recent activity">
      <Container>
        <h2 className="loyalty-section__heading">Recent activity</h2>
        <div className="loyalty-activity__list">
          {recentActivity.map((item) => (
            <div key={item.id} className="loyalty-activity-row">
              <span className={`loyalty-activity-row__icon loyalty-activity-row__icon--${item.type}`} aria-hidden="true">
                {item.icon}
              </span>
              <div className="loyalty-activity-row__info">
                <span className="loyalty-activity-row__action">{item.action}</span>
                <span className="loyalty-activity-row__date">
                  <Clock size={12} aria-hidden="true" />
                  {item.date}
                </span>
              </div>
              <span className={`loyalty-activity-row__points loyalty-activity-row__points--${item.type}`}>
                {item.type === 'earn' ? '+' : ''}{item.points} pts
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>

    {/* Tier Benefits */}
    <section className="loyalty-tiers" aria-label="Your tier benefits">
      <Container>
        <h2 className="loyalty-section__heading">Your {loyaltyUser.tier} benefits</h2>
        <div className="loyalty-benefits-grid">
          {rewardTiers
            .filter(t => t.name === loyaltyUser.tier)
            .flatMap(t => t.benefits)
            .map((benefit, i) => (
              <div key={i} className="loyalty-benefit-item">
                <CheckCircle size={18} className="loyalty-benefit-item__icon" aria-hidden="true" />
                <span>{benefit}</span>
              </div>
            ))}
        </div>

        <div className="loyalty-upgrade-banner">
          <div className="loyalty-upgrade-banner__content">
            <div className="loyalty-upgrade-banner__text">
              <h3>Unlock {loyaltyUser.nextTier} perks</h3>
              <p>
                Earn {pointsRemaining} more points to upgrade and enjoy{' '}
                {loyaltyUser.nextTier === 'Gold' ? '2x points, free express shipping, and priority support' : 'even more exclusive benefits'}.
              </p>
            </div>
            <Link to="/shop" className="wp-sales-btn wp-sales-btn--primary">
              Shop now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Container>
    </section>

    {/* CTA */}
    <section className="commerce-cta" aria-label="Explore rewards program">
      <div className="commerce-cta__bg" aria-hidden="true" />
      {!prefersReduced && (
        <>
          <div className="commerce-cta__orb commerce-cta__orb--1" aria-hidden="true" />
          <div className="commerce-cta__orb commerce-cta__orb--2" aria-hidden="true" />
        </>
      )}
      <Container>
        <div className="commerce-cta__content">
          <TrendingUp size={32} className="commerce-cta__icon" aria-hidden="true" />
          <h3 className="commerce-cta__title">Want to learn more?</h3>
          <p className="commerce-cta__text">
            Explore the full rewards program with tiers, earning methods, and redemption options.
          </p>
          <div className="commerce-cta__actions">
            <Link to="/rewards" className="commerce-cta__btn commerce-cta__btn--primary">
              View full program
            </Link>
            <Link to="/shop" className="commerce-cta__btn commerce-cta__btn--outline">
              Start earning
            </Link>
          </div>
        </div>
      </Container>
    </section>
  </div>
</Layout>
```

---

## BEM Class Hierarchy

```
.page-loyalty (Page wrapper)

.commerce-hero (Hero section - same as other commerce pages)
├── .commerce-hero__bg
├── .commerce-hero__orb (2x)
├── .commerce-hero__content
├── .commerce-hero__badge (Tier badge with icon - gradient)
├── .commerce-hero__title (h1 - gradient text)
├── .commerce-hero__subtitle
└── .commerce-hero__actions

.loyalty-dashboard (Stats dashboard)
└── .loyalty-dashboard__grid (4-column grid)
    ├── .loyalty-stat-card (Stat card - glassmorphism)
    │   ├── .loyalty-stat-card--primary (Primary variant - points)
    │   ├── .loyalty-stat-card--progress (Progress variant)
    │   ├── .loyalty-stat-card__label (Label text)
    │   ├── .loyalty-stat-card__value (Value - gradient text on primary)
    │   │   └── .loyalty-stat-card__value--tier (With tier icon)
    │   └── .loyalty-stat-card__subtext (Subtext)
    └── .loyalty-progress (Progress bar container)
        ├── .loyalty-progress__track (Track background)
        ├── .loyalty-progress__fill (Animated gradient fill)
        └── .loyalty-progress__label (Points remaining text)

.loyalty-actions (Quick actions section)
├── .loyalty-section__heading (h2)
└── .loyalty-actions__grid (Action cards grid)
    └── .loyalty-action-card (Action card - glassmorphism)
        ├── .loyalty-action-card__icon (Icon wrapper)
        ├── .loyalty-action-card__text
        │   ├── .loyalty-action-card__label (Action label)
        │   └── .loyalty-action-card__desc (Description)
        └── .loyalty-action-card__arrow (Arrow icon)

.loyalty-activity (Recent activity section)
├── .loyalty-section__heading (h2)
└── .loyalty-activity__list
    └── .loyalty-activity-row (Activity item)
        ├── .loyalty-activity-row__icon (Icon - gold/cyan based on type)
        │   ├── .loyalty-activity-row__icon--earn (Earn modifier)
        │   └── .loyalty-activity-row__icon--spend (Spend modifier)
        ├── .loyalty-activity-row__info
        │   ├── .loyalty-activity-row__action (Action description)
        │   └── .loyalty-activity-row__date (Date with clock icon)
        └── .loyalty-activity-row__points (Points value)
            ├── .loyalty-activity-row__points--earn (Earn modifier - gold)
            └── .loyalty-activity-row__points--spend (Spend modifier - cyan)

.loyalty-tiers (Tier benefits section)
├── .loyalty-section__heading (h2)
├── .loyalty-benefits-grid (Benefits grid)
│   └── .loyalty-benefit-item
│       ├── .loyalty-benefit-item__icon (Checkmark - cyan)
│       └── span (Benefit text)
└── .loyalty-upgrade-banner (Upgrade CTA - gradient bg)
    └── .loyalty-upgrade-banner__content
        ├── .loyalty-upgrade-banner__text
        │   ├── h3 (Heading)
        │   └── p (Description)
        └── .wp-sales-btn--primary (CTA button)

.commerce-cta (Final CTA - same as other commerce pages)
├── .commerce-cta__bg
├── .commerce-cta__orb (2x)
├── .commerce-cta__content
├── .commerce-cta__icon (TrendingUp - gold glow)
├── .commerce-cta__title (h3)
├── .commerce-cta__text
└── .commerce-cta__actions
    ├── .commerce-cta__btn--primary
    └── .commerce-cta__btn--outline
```

---

## Section Breakdown

### 1. Hero Section (`.commerce-hero`)

Same structure as MembershipLanding/SubscriptionLanding. See those guidelines for CSS.

**Key Differences:**
- Badge icon: Tier icon (Award/Crown)
- Title: Personalized greeting with first name
- Subtitle: Points balance + next tier info

---

### 2. Stats Dashboard (`.loyalty-dashboard`)

```css
.loyalty-dashboard {
  padding: var(--space--1000) 0;
  background: var(--surface);
}

.dark .loyalty-dashboard {
  background: var(--surface-dark);
}

.loyalty-dashboard__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space--700);
}

/* Stat Cards */
.loyalty-stat-card {
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
  padding: var(--space--700);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.dark .loyalty-stat-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.loyalty-stat-card:hover {
  border-color: var(--gold);
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.3);
}

.dark .loyalty-stat-card:hover {
  box-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
}

.loyalty-stat-card__label {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.loyalty-stat-card__value {
  font-size: var(--font-size--800);
  font-weight: 700;
  color: var(--text);
}

/* Primary Card (Points Balance) */
.loyalty-stat-card--primary .loyalty-stat-card__value {
  background: linear-gradient(135deg, var(--gold) 0%, var(--cyan) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.loyalty-stat-card__value--tier {
  display: flex;
  align-items: center;
  gap: var(--space--400);
}

.loyalty-stat-card__subtext {
  font-size: var(--font-size--200);
  color: var(--text-muted);
}

@media (max-width: 640px) {
  .loyalty-dashboard__grid {
    grid-template-columns: 1fr;
  }
  
  .loyalty-stat-card {
    padding: var(--space--600);
  }
  
  .loyalty-stat-card__value {
    font-size: var(--font-size--600);
  }
}
```

**Grid:** Auto-fit (min 240px)  
**Primary Value:** Gradient text (gold → cyan)  
**Hover:** Gold glow

---

### 3. Progress Bar (`.loyalty-progress`)

```css
.loyalty-progress {
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

.loyalty-progress__track {
  width: 100%;
  height: 12px;
  border-radius: var(--radius--full);
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.dark .loyalty-progress__track {
  background: rgba(0, 0, 0, 0.3);
}

.loyalty-progress__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--gold) 0%, var(--cyan) 100%);
  border-radius: var(--radius--full);
  transition: width 0.5s ease;
  box-shadow: 0 0 15px rgba(251, 191, 36, 0.6);
}

.dark .loyalty-progress__fill {
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
}

.loyalty-progress__label {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
  text-align: center;
}
```

**Fill:** Gradient (gold → cyan) with animated width  
**Glow:** Gold shadow  
**Animation:** 0.5s ease transition

---

### 4. Quick Actions (`.loyalty-actions`)

```css
.loyalty-actions {
  padding: var(--space--1000) 0;
}

.loyalty-section__heading {
  margin-bottom: var(--space--700);
  font-size: var(--font-size--600);
  font-weight: 700;
  color: var(--text);
}

.loyalty-actions__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space--600);
}

.loyalty-action-card {
  display: flex;
  align-items: center;
  gap: var(--space--500);
  padding: var(--space--600);
  border-radius: var(--radius--400);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  text-decoration: none;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.dark .loyalty-action-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.loyalty-action-card:hover {
  border-color: var(--cyan);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  transform: translateY(-2px);
}

.dark .loyalty-action-card:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.loyalty-action-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold) 0%, var(--cyan) 100%);
  color: var(--white);
  flex-shrink: 0;
}

.dark .loyalty-action-card__icon {
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
}

.loyalty-action-card__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space--200);
}

.loyalty-action-card__label {
  font-size: var(--font-size--300);
  font-weight: 600;
  color: var(--text);
}

.loyalty-action-card__desc {
  font-size: var(--font-size--200);
  color: var(--text-secondary);
}

.loyalty-action-card__arrow {
  color: var(--text-secondary);
  flex-shrink: 0;
  transition: transform 0.2s;
}

.loyalty-action-card:hover .loyalty-action-card__arrow {
  transform: translateX(4px);
}

@media (max-width: 640px) {
  .loyalty-actions__grid {
    grid-template-columns: 1fr;
  }
}
```

**Icon:** Gradient circle (gold → cyan) with glow  
**Hover:** Lift + cyan glow + arrow slide

---

### 5. Recent Activity (`.loyalty-activity`)

```css
.loyalty-activity {
  padding: var(--space--1000) 0;
  background: var(--surface);
}

.dark .loyalty-activity {
  background: var(--surface-dark);
}

.loyalty-activity__list {
  display: flex;
  flex-direction: column;
  gap: var(--space--400);
}

.loyalty-activity-row {
  display: flex;
  align-items: center;
  gap: var(--space--500);
  padding: var(--space--600);
  border-radius: var(--radius--300);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dark .loyalty-activity-row {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.05);
}

.loyalty-activity-row__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
}

.loyalty-activity-row__icon--earn {
  background: rgba(251, 191, 36, 0.15);
  color: var(--gold);
}

.loyalty-activity-row__icon--spend {
  background: rgba(0, 255, 255, 0.15);
  color: var(--cyan);
}

.loyalty-activity-row__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space--200);
}

.loyalty-activity-row__action {
  font-size: var(--font-size--300);
  color: var(--text);
}

.loyalty-activity-row__date {
  display: flex;
  align-items: center;
  gap: var(--space--200);
  font-size: var(--font-size--200);
  color: var(--text-muted);
}

.loyalty-activity-row__points {
  font-size: var(--font-size--400);
  font-weight: 700;
}

.loyalty-activity-row__points--earn {
  color: var(--gold);
}

.loyalty-activity-row__points--spend {
  color: var(--cyan);
}

@media (max-width: 640px) {
  .loyalty-activity-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space--400);
  }
}
```

**Earn Icons:** Gold background + gold text  
**Spend Icons:** Cyan background + cyan text  
**Points:** Gold (earn) / Cyan (spend)

---

### 6. Tier Benefits (`.loyalty-tiers`)

```css
.loyalty-tiers {
  padding: var(--space--1000) 0;
}

.loyalty-benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space--500);
  margin-bottom: var(--space--900);
}

.loyalty-benefit-item {
  display: flex;
  align-items: center;
  gap: var(--space--400);
  padding: var(--space--500);
  border-radius: var(--radius--300);
  background: rgba(255, 255, 255, 0.03);
  font-size: var(--font-size--300);
  color: var(--text);
}

.loyalty-benefit-item__icon {
  color: var(--cyan);
  flex-shrink: 0;
}

/* Upgrade Banner */
.loyalty-upgrade-banner {
  padding: var(--space--800);
  border-radius: var(--radius--500);
  background: linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(0, 255, 255, 0.1) 100%);
  border: 2px solid rgba(251, 191, 36, 0.3);
}

.dark .loyalty-upgrade-banner {
  border-color: rgba(251, 191, 36, 0.4);
  box-shadow: 0 0 30px rgba(251, 191, 36, 0.2);
}

.loyalty-upgrade-banner__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space--700);
}

.loyalty-upgrade-banner__text {
  flex: 1;
}

.loyalty-upgrade-banner__text h3 {
  font-size: var(--font-size--500);
  font-weight: 700;
  color: var(--text);
  margin-bottom: var(--space--400);
}

.loyalty-upgrade-banner__text p {
  font-size: var(--font-size--300);
  color: var(--text-secondary);
  margin: 0;
}

@media (max-width: 640px) {
  .loyalty-benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .loyalty-upgrade-banner__content {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

**Benefits Grid:** Auto-fit (min 280px)  
**Checkmarks:** Cyan color  
**Upgrade Banner:** Gradient background (gold/cyan tint) with gold border + glow

---

### 7. Final CTA (`.commerce-cta`)

Same structure as MembershipLanding/SubscriptionLanding. See those guidelines for CSS.

**Key Differences:**
- Icon: TrendingUp (gold glow)
- Dual CTAs: Primary + Outline

---

## Responsive Behavior

### Mobile (< 640px)

```css
/* Stats: Single column */
.loyalty-dashboard__grid {
  grid-template-columns: 1fr;
}

.loyalty-stat-card {
  padding: var(--space--600);
}

.loyalty-stat-card__value {
  font-size: var(--font-size--600);
}

/* Actions: Single column */
.loyalty-actions__grid {
  grid-template-columns: 1fr;
}

/* Activity: Stack vertically */
.loyalty-activity-row {
  flex-direction: column;
  align-items: flex-start;
}

/* Benefits: Single column */
.loyalty-benefits-grid {
  grid-template-columns: 1fr;
}

/* Upgrade: Stack vertically */
.loyalty-upgrade-banner__content {
  flex-direction: column;
  align-items: flex-start;
}
```

### Tablet (640px - 1024px)

```css
/* Stats: 2 columns */
.loyalty-dashboard__grid {
  grid-template-columns: repeat(2, 1fr);
}

/* Actions: 2 columns */
.loyalty-actions__grid {
  grid-template-columns: repeat(2, 1fr);
}

/* Benefits: 2 columns */
.loyalty-benefits-grid {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (> 1024px)

```css
/* Stats: 4 columns */
.loyalty-dashboard__grid {
  grid-template-columns: repeat(4, 1fr);
}

/* Actions: Auto-fit */
.loyalty-actions__grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

/* Benefits: Auto-fit */
.loyalty-benefits-grid {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

---

## Dark Mode

### Light Mode vs Dark Mode Comparison

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| **Hero Badge** | Gold → Cyan gradient | Same + glow |
| **Hero Title** | Gold → Cyan gradient | Same |
| **Stats BG** | Light surface | Dark surface |
| **Stat Cards** | `rgba(255,255,255,0.05)` | `rgba(255,255,255,0.03)` |
| **Card Hover** | Gold border (0.3 glow) | Gold border (0.5 glow) |
| **Primary Value** | Gold → Cyan gradient | Same |
| **Progress Track** | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.3)` |
| **Progress Fill** | Gradient + gold glow (0.6) | Gradient + gold glow (0.8) |
| **Action Icons** | Gradient circles | Same + glow (0.4) |
| **Activity BG** | Light surface | Dark surface |
| **Earn Icons** | Gold bg + text | Same |
| **Spend Icons** | Cyan bg + text | Same |
| **Upgrade Banner** | Gradient tint + gold border (0.3) | Same + glow (0.2) |
| **CTA Icon** | TrendingUp gold | Same + stronger glow |

### Dark Mode Enhancements

```css
.dark .loyalty-dashboard {
  background: var(--surface-dark);
}

.dark .loyalty-stat-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .loyalty-stat-card:hover {
  box-shadow: 0 0 30px rgba(251, 191, 36, 0.5);
}

.dark .loyalty-progress__track {
  background: rgba(0, 0, 0, 0.3);
}

.dark .loyalty-progress__fill {
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.8);
}

.dark .loyalty-action-card {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.1);
}

.dark .loyalty-action-card:hover {
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}

.dark .loyalty-action-card__icon {
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.4);
}

.dark .loyalty-activity {
  background: var(--surface-dark);
}

.dark .loyalty-activity-row {
  background: rgba(255, 255, 255, 0.03);
  border-color: rgba(0, 255, 255, 0.05);
}

.dark .loyalty-upgrade-banner {
  border-color: rgba(251, 191, 36, 0.4);
  box-shadow: 0 0 30px rgba(251, 191, 36, 0.2);
}
```

---

## Accessibility

### Semantic HTML

```tsx
<main className="page-loyalty">
  <section className="commerce-hero" aria-labelledby="loyalty-title">
    <h1 id="loyalty-title">Welcome back, Sarah</h1>
    {/* Hero content */}
  </section>
  
  <section className="loyalty-dashboard" aria-label="Your points overview">
    <div className="loyalty-dashboard__grid">
      <div className="loyalty-stat-card">
        <span>Available points</span>
        <span>2,850</span>
        <span>≈ $57 value</span>
      </div>
      
      <div className="loyalty-stat-card">
        <span>Progress to Platinum</span>
        <div className="loyalty-progress">
          <div className="loyalty-progress__track">
            <div
              className="loyalty-progress__fill"
              role="progressbar"
              aria-valuenow={2850}
              aria-valuemin={0}
              aria-valuemax={5000}
              aria-label="28% to Platinum"
            />
          </div>
          <span>2,150 pts to go</span>
        </div>
      </div>
    </div>
  </section>
  
  <section className="loyalty-actions" aria-label="Quick actions">
    <h2>Quick actions</h2>
    <div className="loyalty-actions__grid">
      <a href="/rewards/redeem">
        <span aria-hidden="true"><Gift /></span>
        <div>
          <span>Redeem rewards</span>
          <span>Browse available rewards</span>
        </div>
        <ArrowRight aria-hidden="true" />
      </a>
    </div>
  </section>
  
  <section className="loyalty-activity" aria-label="Recent activity">
    <h2>Recent activity</h2>
    <div className="loyalty-activity__list">
      <div className="loyalty-activity-row">
        <span aria-hidden="true"><ShoppingBag /></span>
        <div>
          <span>Purchase completed</span>
          <span>
            <Clock aria-hidden="true" />
            2 hours ago
          </span>
        </div>
        <span>+150 pts</span>
      </div>
    </div>
  </section>
  
  <section className="loyalty-tiers" aria-label="Your tier benefits">
    <h2>Your Gold benefits</h2>
    <div className="loyalty-benefits-grid">
      <div className="loyalty-benefit-item">
        <CheckCircle aria-hidden="true" />
        <span>1.5x points multiplier</span>
      </div>
    </div>
  </section>
</main>
```

### ARIA Attributes

```tsx
{/* Sections */}
<section aria-labelledby="loyalty-title">
  <h1 id="loyalty-title">Welcome back</h1>
</section>

<section aria-label="Your points overview">
  {/* Stats */}
</section>

{/* Progress bar */}
<div
  role="progressbar"
  aria-valuenow={loyaltyUser.points}
  aria-valuemin={0}
  aria-valuemax={loyaltyUser.nextTierThreshold}
  aria-label={`${progressPct}% to ${loyaltyUser.nextTier}`}
/>

{/* Decorative icons */}
<Award aria-hidden="true" />
<ArrowRight aria-hidden="true" />
<Clock aria-hidden="true" />
<CheckCircle aria-hidden="true" />
<TrendingUp aria-hidden="true" />
```

### Keyboard Navigation

- **Tab Order:** Hero CTAs → Stat cards → Action cards → Activity items → Benefits → Upgrade CTA → Final CTAs
- **Action Cards:** Enter/Space to navigate
- **Progress Bar:** Not interactive, but has aria-label for screen readers

### Focus States

```css
.wp-sales-btn:focus-visible,
.loyalty-action-card:focus-visible,
.commerce-cta__btn:focus-visible {
  outline: 2px solid var(--gold);
  outline-offset: 2px;
}
```

### Color Contrast

| Element | Foreground | Background | Ratio | Standard |
|---------|-----------|------------|-------|----------|
| Hero Title (Gradient) | Gold/Cyan | Navy bg | N/A | Decorative ✅ |
| Stats Label | `#6b7280` | Card bg | 4.5:1+ | AA ✅ |
| Stats Value | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| Primary Value (Gradient) | Gold/Cyan | Card bg | N/A | Decorative ✅ |
| Action Label | `#1a1a1a` / `#f9fafb` | Card bg | 10.0:1+ | AAA ✅ |
| Activity Action | `#1a1a1a` / `#f9fafb` | Row bg | 10.0:1+ | AAA ✅ |
| Earn Points | Gold `#fbbf24` | Row bg | 4.5:1+ | AA ✅ |
| Spend Points | Cyan `#00ffff` | Row bg | 4.5:1+ | AA ✅ |

**All text meets WCAG 2.1 AA standards minimum**

---

## Production Enhancements

### 1. Real-time Points Updates

```tsx
useEffect(() => {
  const subscription = supabase
    .from('loyalty_transactions')
    .on('INSERT', (payload) => {
      setLoyaltyUser(prev => ({
        ...prev,
        points: prev.points + payload.new.points,
      }));
      toast.success(`+${payload.new.points} points earned!`);
    })
    .subscribe();
  
  return () => {
    subscription.unsubscribe();
  };
}, []);
```

### 2. Points History Export

```tsx
const handleExportHistory = async () => {
  const csv = [
    ['Date', 'Action', 'Points', 'Balance'].join(','),
    ...activityHistory.map(a => [
      a.date,
      a.action,
      a.points,
      a.balance
    ].join(','))
  ].join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'loyalty-history.csv';
  a.click();
};
```

### 3. Redeem Points Modal

```tsx
const [redeemModal, setRedeemModal] = useState(false);

<button onClick={() => setRedeemModal(true)}>
  Redeem Points
</button>

{redeemModal && (
  <Modal onClose={() => setRedeemModal(false)}>
    <RedeemPointsForm
      availablePoints={loyaltyUser.points}
      onRedeem={(points, reward) => {
        // Handle redemption
      }}
    />
  </Modal>
)}
```

### 4. Tier Progress Notifications

```tsx
useEffect(() => {
  const progress = (loyaltyUser.points / loyaltyUser.nextTierThreshold) * 100;
  
  if (progress >= 75 && !notificationShown) {
    toast.info(`You're ${100 - Math.round(progress)}% away from ${loyaltyUser.nextTier}!`);
    setNotificationShown(true);
  }
}, [loyaltyUser.points]);
```

### 5. Referral Link Generator

```tsx
const [referralLink, setReferralLink] = useState('');

useEffect(() => {
  const link = `${window.location.origin}/join?ref=${userId}`;
  setReferralLink(link);
}, [userId]);

const handleCopyReferral = () => {
  navigator.clipboard.writeText(referralLink);
  toast.success('Referral link copied!');
};
```

### 6. Points Expiry Warning

```tsx
{expiringPoints > 0 && (
  <div className="loyalty-warning">
    <AlertTriangle size={18} />
    <span>
      {expiringPoints} points expiring in 30 days
    </span>
    <button onClick={() => navigate('/rewards/redeem')}>
      Use now
    </button>
  </div>
)}
```

### 7. Activity Filters

```tsx
const [activityFilter, setActivityFilter] = useState<'all' | 'earn' | 'spend'>('all');

const filteredActivity = activityFilter === 'all'
  ? recentActivity
  : recentActivity.filter(a => a.type === activityFilter);

<select value={activityFilter} onChange={(e) => setActivityFilter(e.target.value)}>
  <option value="all">All Activity</option>
  <option value="earn">Points Earned</option>
  <option value="spend">Points Spent</option>
</select>
```

### 8. Analytics Tracking

```tsx
useEffect(() => {
  analytics.track('Loyalty Dashboard Viewed', {
    tier: loyaltyUser.tier,
    points_balance: loyaltyUser.points,
    lifetime_points: loyaltyUser.lifetimePoints,
    progress_to_next: progressPct,
  });
}, []);

const handleActionClick = (action: string) => {
  analytics.track('Loyalty Action Clicked', {
    action: action,
    tier: loyaltyUser.tier,
  });
};
```

### 9. Tier Comparison Table

```tsx
<section className="loyalty-comparison">
  <h2>Compare all tiers</h2>
  <table>
    <thead>
      <tr>
        <th>Benefit</th>
        <th>Silver</th>
        <th>Gold</th>
        <th>Platinum</th>
      </tr>
    </thead>
    <tbody>
      {tierBenefits.map(benefit => (
        <tr key={benefit.name}>
          <td>{benefit.name}</td>
          <td>{benefit.silver ? <Check /> : <X />}</td>
          <td>{benefit.gold ? <Check /> : <X />}</td>
          <td>{benefit.platinum ? <Check /> : <X />}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>
```

### 10. Gamification Badges

```tsx
const [badges, setBadges] = useState<Badge[]>([]);

<section className="loyalty-badges">
  <h2>Your Achievements</h2>
  <div className="loyalty-badges__grid">
    {badges.map(badge => (
      <div key={badge.id} className="loyalty-badge">
        <div className="loyalty-badge__icon">
          {badge.icon}
        </div>
        <div className="loyalty-badge__name">{badge.name}</div>
        <div className="loyalty-badge__date">
          Earned {badge.earnedDate}
        </div>
      </div>
    ))}
  </div>
</section>
```

---

## Testing Checklist

### Visual Testing

- [ ] Hero gradient visible
- [ ] Hero badge with tier icon
- [ ] Hero orbs animate (if motion allowed)
- [ ] Stats dashboard displays (4 cards)
- [ ] Points value has gradient text
- [ ] Progress bar displays
- [ ] Progress fill animated
- [ ] Quick actions grid displays (4 cards)
- [ ] Action icons have gradient circles
- [ ] Activity list displays
- [ ] Earn/spend icons colored correctly
- [ ] Benefits grid displays
- [ ] Upgrade banner displays
- [ ] Final CTA displays
- [ ] CTA icon has gold glow

### Interaction Testing

- [ ] Hero "Start shopping" navigates
- [ ] Hero "View full program" navigates
- [ ] Action cards navigate
- [ ] Action arrows slide on hover
- [ ] Upgrade banner CTA navigates
- [ ] Final CTA buttons navigate

### State Testing

- [ ] Progress percentage calculated correctly
- [ ] Points remaining calculated correctly
- [ ] Tier benefits filtered correctly
- [ ] Activity items display in order

### Responsive Testing

- [ ] Mobile: Stats single column
- [ ] Mobile: Actions single column
- [ ] Mobile: Activity stacks vertically
- [ ] Mobile: Benefits single column
- [ ] Mobile: Upgrade banner stacks
- [ ] Tablet: Stats 2 columns
- [ ] Tablet: Actions 2 columns
- [ ] Tablet: Benefits 2 columns
- [ ] Desktop: Stats 4 columns
- [ ] Desktop: All grids auto-fit

### Dark Mode Testing

- [ ] Hero badge glow visible
- [ ] Stats cards glassmorphism visible
- [ ] Card hover gold glow stronger
- [ ] Progress fill gold glow stronger
- [ ] Action icons glow visible
- [ ] Activity backgrounds visible
- [ ] Upgrade banner glow visible
- [ ] CTA icon glow stronger
- [ ] All text meets contrast standards

### Accessibility Testing

- [ ] Heading hierarchy correct (h1 → h2 → h3)
- [ ] Hero has aria-labelledby
- [ ] Stats section has aria-label
- [ ] Progress bar has role="progressbar"
- [ ] Progress bar has aria-valuenow/min/max
- [ ] Actions section has aria-label
- [ ] Activity section has aria-label
- [ ] Benefits section has aria-label
- [ ] Decorative icons have aria-hidden
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Keyboard navigation works
- [ ] Screen reader friendly
- [ ] Color contrast meets WCAG AA

---

## Related Templates

- **PageRewardProgram** — Marketing landing for rewards
- **AccountDashboardWidgets** — Account dashboard widgets
- **PageWishlist** — Wishlist management

### Shared CSS

- `.loyalty-funky.css` — Loyalty dashboard styles
- `.commerce-hero` — Gradient hero with orbs
- `.commerce-cta` — Final CTA section

### Shared Data

- `/data/loyalty.ts` — Loyalty user data
- `/data/rewardProgram.ts` — Reward tiers

---

**Last Updated:** February 24, 2026  
**Template Status:** ✅ Production Ready
