# PricingTable Pattern

**Category**: Content Pattern  
**Type**: Pricing & Conversion  
**Version**: 1.0  
**WordPress Mapping**: Pricing Block / Pricing Table Pattern

---

## Purpose

The `PricingTable` pattern displays a responsive 3-column pricing comparison table with monthly/yearly billing toggle, feature lists, and prominent CTAs. Optimized for subscription and SaaS conversion pages.

---

## Visual Preview

```
┌──────────────────────────────────────────────────────────────────┐
│                     Choose Your Perfect Plan                      │
│        All plans include free shipping and flexibility           │
│                                                                    │
│        ( ) Monthly    (●) Yearly (Save 20%)                      │
│                                                                    │
│  ┌──────────┐    ┌───────────────┐    ┌──────────┐             │
│  │  Basic   │    │  MOST POPULAR │    │   Pro    │             │
│  │          │    │     Pro       │    │          │             │
│  │  £9/mo   │    │   £29/mo      │    │  £99/mo  │             │
│  │ [Button] │    │   [Button]    │    │ [Button] │             │
│  │ ✓ 10 GB  │    │ ✓ 100 GB      │    │ ✓ 1 TB   │             │
│  │ ✓ ...    │    │ ✓ ...         │    │ ✓ ...    │             │
│  └──────────┘    └───────────────┘    └──────────┘             │
└──────────────────────────────────────────────────────────────────┘
```

---

## When to Use

### ✅ Perfect For:
- Subscription pricing pages
- Membership tier comparison
- SaaS product packages
- Service level comparison
- Multi-tier product offerings
- Conversion-focused landing pages

### ❌ Avoid When:
- Single pricing tier (use simple CTA)
- More than 4 tiers (consider accordion or tabs)
- Complex custom pricing (use contact form)
- Non-subscription products (use standard product cards)

---

## Props API

```typescript
interface PricingFeature {
  name: string;         // Feature name
  included: boolean;    // Whether included in plan
  description?: string; // Optional tooltip/explanation
}

interface PricingPlan {
  id: string;                    // Unique plan identifier
  name: string;                  // Plan name (Basic, Pro, Enterprise)
  description: string;           // Short plan description
  priceMonthly: number;          // Monthly price
  priceYearly: number;           // Yearly price
  features: PricingFeature[];    // Feature list
  popular?: boolean;             // Mark as "Most Popular"
  cta: {
    label: string;               // Button text
    href?: string;               // Link URL
    onClick?: () => void;        // Click handler
  };
}

interface PricingTableProps {
  plans: PricingPlan[];                    // Array of plans (required)
  showToggle?: boolean;                    // Show billing toggle, default true
  defaultBilling?: 'monthly' | 'yearly';   // Default period, default 'monthly'
  heading?: string;                        // Section heading
  subheading?: string;                     // Section subheading
  className?: string;                      // Additional CSS classes
}
```

---

## Usage Examples

### Basic 3-Tier Pricing

```tsx
import { PricingTable } from '@/components/patterns/PricingTable';

<PricingTable
  heading="Choose Your Perfect Plan"
  subheading="All plans include free shipping and member discounts"
  plans={[
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for individuals',
      priceMonthly: 9.99,
      priceYearly: 99.99,
      features: [
        { name: '10 Projects', included: true },
        { name: '5 GB Storage', included: true },
        { name: 'Email Support', included: true },
        { name: 'Advanced Analytics', included: false },
      ],
      cta: {
        label: 'Get Started',
        href: '/signup?plan=basic',
      },
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Most popular choice',
      priceMonthly: 29.99,
      priceYearly: 299.99,
      popular: true,
      features: [
        { name: 'Unlimited Projects', included: true },
        { name: '50 GB Storage', included: true },
        { name: 'Priority Support', included: true },
        { name: 'Advanced Analytics', included: true },
      ],
      cta: {
        label: 'Get Started',
        href: '/signup?plan=pro',
      },
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large teams',
      priceMonthly: 99.99,
      priceYearly: 999.99,
      features: [
        { name: 'Unlimited Everything', included: true },
        { name: 'Unlimited Storage', included: true },
        { name: 'Dedicated Support', included: true },
        { name: 'Custom Integrations', included: true },
      ],
      cta: {
        label: 'Contact Sales',
        href: '/contact',
      },
    },
  ]}
/>
```

### Without Billing Toggle

```tsx
<PricingTable
  heading="Subscription Plans"
  plans={subscriptionPlans}
  showToggle={false}
/>
```

### With Default Yearly Billing

```tsx
<PricingTable
  heading="Annual Plans"
  subheading="Save 20% with annual billing"
  plans={pricingPlans}
  defaultBilling="yearly"
/>
```

---

## Layout Behavior

### Responsive Grid

| Breakpoint | Columns | Behavior |
|------------|---------|----------|
| Mobile (<768px) | 1 | Stacked vertically, popular first |
| Tablet (768-1024px) | 2-3 | Grid with wrapping |
| Desktop (≥1024px) | 3 | Equal-width columns, max 1280px |

### Popular Plan Styling

- **Badge**: "Most Popular" label at top
- **Border**: Purple accent (`border-purple-600`)
- **Elevation**: Increased shadow (`shadow-xl`)
- **Button**: Primary variant (more prominent)
- **Order**: Center position on desktop

---

## Content Guidelines

### Heading
- **Character Limit**: 30-50 characters
- **Best Practices**: 
  - Action-oriented ("Choose Your Plan", "Select Your Tier")
  - Avoid generic "Pricing"
  - Create urgency if applicable

### Subheading
- **Character Limit**: 80-120 characters
- **Best Practices**: 
  - Highlight key benefit or guarantee
  - Mention money-back guarantee or flexibility
  - Example: "All plans include free shipping and can be canceled anytime"

### Plan Names
- **Character Limit**: 10-20 characters
- **Best Practices**: 
  - Clear tier indicators (Basic, Pro, Enterprise)
  - Or descriptive (Starter, Professional, Business)
  - Avoid ambiguous names

### Plan Descriptions
- **Character Limit**: 20-40 characters
- **Best Practices**: 
  - Target audience ("For individuals", "For teams")
  - Key differentiator ("Most flexible", "Best value")
  - Keep concise

### Pricing
- **Format**: `£XX.XX/month` or `£XX.XX/year`
- **Consistency**: Use same currency symbol across all plans
- **Clarity**: Show original vs. discounted if applicable

### Features
- **Optimal Number**: 4-6 features per plan
- **Character Limit per Feature**: 30-50 characters
- **Best Practices**:
  - Most important features first
  - Use specific numbers (not "Unlimited" if avoidable)
  - Align features across plans for comparison
  - Use `included: false` for X icons

### CTA Buttons
- **Primary Plan**: "Get Started", "Start Free Trial"
- **Premium Plan**: "Subscribe Now", "Upgrade"
- **Enterprise Plan**: "Contact Sales", "Custom Quote"

---

## Visual Design

### Card Styling

**Standard Plan:**
- Background: `bg-white dark:bg-gray-900`
- Border: `border-2 border-gray-200 dark:border-gray-700`
- Padding: `p-8`
- Rounded: `rounded-2xl`

**Popular Plan:**
- Background: `bg-white dark:bg-gray-900`
- Border: `border-2 border-purple-600 dark:border-purple-400`
- Shadow: `shadow-xl`
- Badge: `bg-purple-600 dark:bg-purple-500`

### Typography

- **Plan Name**: H3, bold
- **Description**: Small, gray-600
- **Price**: 4xl, bold, primary color
- **Features**: Body text, check/x icons

### Icons

- **Included**: Green check ✓ (`text-green-600 dark:text-green-400`)
- **Not Included**: Red X ✗ (`text-red-600 dark:text-red-400`)
- **Size**: 20px

### Billing Toggle

- **Active**: Purple background, white text
- **Inactive**: Gray background, gray text
- **Transition**: Smooth 150ms
- **Mobile**: Full width below heading

---

## Dark Mode Support

### Light Mode
- Cards: White background, gray border
- Text: Gray-900 (headings), Gray-600 (descriptions)
- Popular border: Purple-600
- Features: Green-600/Red-600

### Dark Mode
- Cards: Gray-900 background, gray-700 border
- Text: Gray-50 (headings), Gray-400 (descriptions)
- Popular border: Purple-400
- Features: Green-400/Red-400

---

## Accessibility

### Semantic HTML

```html
<section>
  <div> <!-- Header -->
    <h2>Pricing</h2>
    <p>Subheading</p>
    <div role="group" aria-label="Billing frequency"> <!-- Toggle -->
      <button>Monthly</button>
      <button>Yearly</button>
    </div>
  </div>
  <div> <!-- Plans Grid -->
    <article> <!-- Plan Card -->
      <h3>Plan Name</h3>
      <p>Description</p>
      <div>Price</div>
      <ul> <!-- Features -->
        <li>Feature</li>
      </ul>
      <a>CTA Button</a>
    </article>
  </div>
</section>
```

### ARIA Labels

- Toggle: `role="group"`, `aria-label="Billing frequency"`
- Active toggle: `aria-pressed="true"`
- Popular badge: `aria-label="Most popular plan"`
- Feature icons: `aria-hidden="true"` (text provides context)

### Keyboard Navigation

- Toggle buttons: Tab to select, Space/Enter to activate
- CTA buttons: Standard link/button behavior
- Logical tab order: Top to bottom, left to right
- Focus visible: 2px purple ring

### Color Contrast

- All text: 4.5:1 minimum (WCAG AA)
- CTA buttons: 4.5:1 minimum
- Icons: Decorative, text provides meaning

---

## Conversion Optimization

### Best Practices

1. **Highlight Popular Plan**: Use `popular: true` for best-selling tier
2. **Anchor Pricing**: Show most expensive plan last to anchor perception
3. **Feature Parity**: Align features across plans for easy comparison
4. **Clear CTAs**: Use action verbs, make buttons prominent
5. **Trust Signals**: Include money-back guarantee or free trial
6. **Urgency**: Consider adding "Limited time" or savings badges

### A/B Testing Opportunities

- Toggle default (monthly vs. yearly)
- Popular plan position (center vs. left)
- CTA button text ("Get Started" vs. "Start Free Trial")
- Feature list order
- Showing/hiding toggle

---

## Templates Using This Pattern

| Template | Usage Context |
|----------|---------------|
| **SubscriptionLanding** | Subscription tier comparison |
| **MembershipLanding** | Membership level pricing |
| **PagePricing** | Dedicated pricing page |
| **FrontPage** | Homepage pricing section |

---

## Related Patterns

- **[Hero](Hero.md)** - Landing page header
- **[FAQSection](FAQSection.md)** - Answer pricing questions
- **[TestimonialCarousel](TestimonialCarousel.md)** - Social proof
- **[ValuePropositionSection](ValuePropositionSection.md)** - Feature benefits

---

## Performance

- **Bundle Size**: ~3KB
- **Dependencies**: Lucide React (Check, X icons)
- **State**: Minimal (billing toggle only)
- **Re-renders**: Optimized with React.useState

---

## Migration Guide

### From Inline Pricing Cards

**Before:**
```tsx
<section>
  <h2>Pricing</h2>
  <div className="grid md:grid-cols-3 gap-8">
    <div className="border rounded-xl p-8">
      <h3>Basic</h3>
      <p>£9.99/month</p>
      <ul>
        <li>✓ Feature 1</li>
        <li>✓ Feature 2</li>
      </ul>
      <button>Get Started</button>
    </div>
    {/* Repeat for each plan */}
  </div>
</section>
```

**After:**
```tsx
<PricingTable
  heading="Pricing"
  plans={pricingPlans}
/>
```

**Code Reduction**: ~70% fewer lines

---

## Testing Checklist

### Visual Testing

- [ ] 3 plans display in correct grid layout
- [ ] Popular plan has badge and elevated styling
- [ ] Billing toggle switches prices correctly
- [ ] Cards are equal height
- [ ] Responsive behavior works across breakpoints
- [ ] Dark mode displays correctly

### Functional Testing

- [ ] Billing toggle updates all prices
- [ ] CTA buttons link correctly
- [ ] Popular badge only shows on designated plan
- [ ] Features display check/X icons correctly
- [ ] Default billing period applies

### Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader announces plans correctly
- [ ] Focus visible on interactive elements
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] ARIA labels are correct

---

## Support

For questions or issues with this pattern, refer to:
- [Pattern Architecture Overview](/guidelines/overview-patterns.md)
- [Writing Guidelines](/guidelines/WRITING_GUIDELINES.md)