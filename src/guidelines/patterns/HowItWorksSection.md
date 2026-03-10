# HowItWorksSection Pattern

**Category**: Content Pattern  
**Type**: Process Explanation  
**Version**: 1.0  
**WordPress Mapping**: Steps Block / Process Pattern / How It Works Pattern

---

## Purpose

The `HowItWorksSection` pattern displays a step-by-step process visualization with numbered steps, icons, titles, and descriptions. Perfect for onboarding flows, subscription explanations, checkout processes, and any multi-step workflow.

---

## Visual Preview

```
┌─────────────────────────────────────────────────────────────┐
│                       How It Works                           │
│          Getting started is simple. Here's what to expect.   │
│                                                               │
│    ┌─────────┐ -------- ┌─────────┐ -------- ┌─────────┐   │
│    │    1    │          │    2    │          │    3    │   │
│    └─────────┘          └─────────┘          └─────────┘   │
│                                                               │
│   Choose Your Plan     Personalize     Receive & Enjoy       │
│   Select frequency     Set preferences Get curated box       │
└─────────────────────────────────────────────────────────────┘
```

---

## When to Use

### ✅ Perfect For:
- Subscription onboarding flows
- Checkout process explanations
- Service delivery steps
- Product usage guides
- Getting started sections
- Multi-step workflows
- Process documentation

### ❌ Avoid When:
- Single-step actions (use CTA instead)
- Complex branching flows (use flowchart)
- Very long processes (>6 steps)
- Non-sequential information

---

## Props API

```typescript
interface HowItWorksStep {
  id: string;              // Unique step identifier
  step: string;            // Step number or label (e.g., "1", "2", "3")
  title: string;           // Step title
  description: string;     // Step description
  icon?: React.ComponentType;  // Optional Phosphor icon component
}

interface HowItWorksSectionProps {
  heading?: string;        // Section heading, default "How It Works"
  description?: string;    // Section description
  steps: HowItWorksStep[]; // Array of process steps (required)
  columns?: 2 | 3 | 4;     // Number of columns, default 3
  showConnectors?: boolean; // Show connecting lines, default true
  showNumbers?: boolean;   // Show step numbers, default true
  numberColor?: string;    // Tailwind color class, default 'bg-purple-600'
  className?: string;      // Additional CSS classes
}
```

---

## Usage Examples

### Basic 3-Step Process

```tsx
import { HowItWorksSection } from '@/components/patterns/HowItWorksSection';

<HowItWorksSection
  heading="How It Works"
  description="Getting started is simple. Here's what to expect."
  steps={[
    {
      id: '1',
      step: '1',
      title: 'Choose Your Plan',
      description: 'Select the subscription frequency that works best for you.',
    },
    {
      id: '2',
      step: '2',
      title: 'Personalize',
      description: 'Tell us about your preferences and style.',
    },
    {
      id: '3',
      step: '3',
      title: 'Receive & Enjoy',
      description: 'Get your curated box delivered right to your door.',
    },
  ]}
  columns={3}
/>
```

### With Icons

```tsx
import { ShoppingCart, Package, Truck } from '@phosphor-icons/react';

<HowItWorksSection
  heading="Simple Shopping Process"
  steps={[
    {
      id: '1',
      step: '1',
      title: 'Browse Products',
      description: 'Explore our curated collection.',
      icon: ShoppingCart,
    },
    {
      id: '2',
      step: '2',
      title: 'Add to Cart',
      description: 'Select your favorite items.',
      icon: Package,
    },
    {
      id: '3',
      step: '3',
      title: 'Fast Delivery',
      description: 'Get it delivered to your door.',
      icon: Truck,
    },
  ]}
  showNumbers={false} // Use icons instead of numbers
/>
```

### 4-Column Layout

```tsx
<HowItWorksSection
  heading="Complete Onboarding Flow"
  description="We've made it simple to get started"
  steps={checkoutSteps}
  columns={4}
  showConnectors={true}
  numberColor="bg-blue-600 dark:bg-blue-500"
/>
```

### Without Connectors (Mobile-Friendly)

```tsx
<HowItWorksSection
  heading="Quick Start Guide"
  steps={guideSteps}
  columns={2}
  showConnectors={false}
  className="bg-gray-50 dark:bg-gray-950"
/>
```

---

## Layout Behavior

### Responsive Grid

| Breakpoint | Columns | Connectors | Gap |
|------------|---------|------------|-----|
| Mobile (<640px) | 1 | Hidden | 48px vertical |
| Tablet (640-1024px) | 2 | Hidden | 48px |
| Desktop (≥1024px) | 3-4 (configurable) | Visible | 48px |

### Content Alignment

- **All Content**: Center-aligned
- **Step Numbers**: Centered above title
- **Connectors**: Horizontal dashed lines (desktop only)
- **Max Width**: 1200px (5xl container)

---

## Content Guidelines

### Heading
- **Character Limit**: 30-50 characters
- **Best Practices**: 
  - Use action-oriented language ("How It Works", "Get Started")
  - Keep it simple and direct
  - Default to "How It Works" if no custom heading needed

### Description
- **Character Limit**: 80-120 characters
- **Best Practices**: 
  - Briefly introduce the process
  - Set expectations
  - Optional but recommended

### Steps

#### Optimal Number of Steps
- **Ideal**: 3 steps (classic pattern)
- **Good**: 4 steps
- **Maximum**: 6 steps (beyond this, consider splitting)
- **Minimum**: 2 steps

#### Step Titles
- **Character Limit**: 15-30 characters
- **Best Practices**:
  - Action-oriented verbs
  - 2-4 words
  - Clear and specific
  - Example: "Choose Your Plan", "Personalize", "Receive & Enjoy"

#### Step Descriptions
- **Character Limit**: 60-100 characters
- **Best Practices**:
  - Concise explanation of the step
  - 10-20 words
  - Avoid jargon
  - Focus on user benefit

---

## Visual Design

### Step Number Badges

- **Size**: 80px × 80px (w-20 h-20)
- **Shape**: Circular
- **Default Color**: Purple (`bg-purple-600 dark:bg-purple-500`)
- **Text**: 3xl font size, bold weight, white color
- **Customizable**: Pass custom color via `numberColor` prop

### Connectors

- **Type**: Dashed border line
- **Width**: 2px
- **Color**: `border-gray-300 dark:border-gray-700`
- **Position**: Horizontal between steps
- **Visibility**: Desktop only (hidden on mobile/tablet)

### Spacing

- **Section Padding**: `py-20` (5rem vertical)
- **Header Bottom Margin**: `mb-16` (4rem)
- **Step Gap**: `gap-12` (3rem)
- **Badge Bottom Margin**: `mb-6` (1.5rem)
- **Title Bottom Margin**: `mb-3` (0.75rem)

---

## Dark Mode Support

The pattern has full dark mode support with automatic color adjustments:

### Light Mode
- Background: `bg-white`
- Text: `text-gray-900` (headings), `text-gray-600` (descriptions)
- Connectors: `border-gray-300`
- Number Badge: `bg-purple-600`

### Dark Mode
- Background: `bg-gray-900`
- Text: `text-gray-50` (headings), `text-gray-400` (descriptions)
- Connectors: `border-gray-700`
- Number Badge: `bg-purple-500`

---

## Accessibility

### Semantic HTML

```html
<section>
  <div> <!-- Header -->
    <h2>How It Works</h2>
    <p>Description</p>
  </div>
  <div> <!-- Steps Grid -->
    <div> <!-- Step 1 -->
      <div aria-hidden="true">1</div> <!-- Number Badge -->
      <h3>Step Title</h3>
      <p>Step Description</p>
    </div>
    <!-- More steps -->
  </div>
</section>
```

### ARIA Labels

- Step numbers use `aria-hidden="true"` (decorative)
- Connector lines use `aria-hidden="true"` (decorative)
- Semantic heading structure (H2 → H3)
- Clear text hierarchy

### Keyboard Navigation

- No interactive elements (informational pattern)
- Readable by screen readers
- Logical tab order if combined with CTAs

### Color Contrast

- All text meets WCAG 2.1 AA standards
- Number badges: 4.5:1 minimum contrast
- Descriptions: 4.5:1 against background

---

## Templates Using This Pattern

| Template | Usage Context |
|----------|---------------|
| **SubscriptionLanding** | Subscription onboarding flow |
| **MembershipLanding** | Membership signup process |
| **PageCheckout** | Checkout step explanation |
| **PageAbout** | Company process explanation |

---

## Related Patterns

- **[ValuePropositionSection](ValuePropositionSection.md)** - Feature-focused benefits
- **[FAQSection](FAQSection.md)** - Answer common questions
- **[Hero](Hero.md)** - Above-the-fold introduction
- **[StatsSection](StatsSection.md)** - Numerical proof points

---

## Performance

- **Bundle Size**: ~2KB (lightweight)
- **Dependencies**: Lucide React (icons only if used)
- **Rendering**: Static, no client-side state
- **Mobile Performance**: CSS-only connectors, no JavaScript

---

## Migration Guide

### From Inline Steps to HowItWorksSection

**Before:**
```tsx
<section className="py-20">
  <Container>
    <h2>How It Works</h2>
    <div className="grid md:grid-cols-3 gap-12">
      <div className="text-center">
        <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
          1
        </div>
        <h3>Choose Your Plan</h3>
        <p>Select frequency...</p>
      </div>
      {/* Repeat for each step */}
    </div>
  </Container>
</section>
```

**After:**
```tsx
<HowItWorksSection
  heading="How It Works"
  steps={[
    {
      id: '1',
      step: '1',
      title: 'Choose Your Plan',
      description: 'Select frequency...',
    },
    // More steps
  ]}
/>
```

**Code Reduction**: ~60% fewer lines

---

## Testing Checklist

### Visual Testing

- [ ] Steps display in correct grid layout (1/2/3/4 columns)
- [ ] Number badges are centered and properly sized
- [ ] Connectors appear on desktop, hidden on mobile
- [ ] Text is readable in both light and dark modes
- [ ] Responsive behavior works across all breakpoints

### Content Testing

- [ ] Heading displays correctly
- [ ] Description appears when provided
- [ ] All steps render with title and description
- [ ] Icons display when provided (instead of numbers)
- [ ] Custom colors apply correctly

### Accessibility Testing

- [ ] Semantic heading structure (H2 → H3)
- [ ] Screen reader announces content correctly
- [ ] Color contrast meets WCAG 2.1 AA
- [ ] No keyboard traps
- [ ] Focus visible on any interactive elements

---

## Examples in Production

### E-Commerce Onboarding
```tsx
<HowItWorksSection
  heading="Start Shopping in 3 Easy Steps"
  steps={[
    { id: '1', step: '1', title: 'Browse', description: 'Explore our collection' },
    { id: '2', step: '2', title: 'Select', description: 'Add items to cart' },
    { id: '3', step: '3', title: 'Checkout', description: 'Complete your purchase' },
  ]}
/>
```

### Subscription Service
```tsx
<HowItWorksSection
  heading="How Subscription Works"
  description="Simple, flexible, and transparent"
  steps={subscriptionSteps}
  columns={3}
  numberColor="bg-green-600 dark:bg-green-500"
/>
```

### Service Delivery
```tsx
<HowItWorksSection
  heading="Our Process"
  steps={deliverySteps}
  columns={4}
  showConnectors={true}
  className="bg-gray-50 dark:bg-gray-950"
/>
```

---

## Support

For questions or issues with this pattern, refer to:
- [Pattern Architecture Overview](/guidelines/overview-patterns.md)
- [Writing Guidelines](/guidelines/WRITING_GUIDELINES.md)