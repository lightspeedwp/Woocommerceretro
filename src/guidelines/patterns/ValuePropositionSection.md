# ValuePropositionSection Pattern

**Category**: Content Pattern  
**Type**: Value Communication  
**Version**: 1.0  
**WordPress Mapping**: Media & Text Block / Value Proposition Pattern

---

## Purpose

The `ValuePropositionSection` pattern displays a two-column layout showcasing a value proposition with heading, description, feature list, optional media (image/video), and call-to-action button. Perfect for communicating product benefits and brand promises.

---

## Visual Preview

```
┌─────────────────────────────────────────────────────────────┐
│  ┌────────────────────┐    ┌────────────────────┐          │
│  │                    │    │  Our Mission       │          │
│  │   [Image/Video]    │    │                    │          │
│  │                    │    │  Description...    │          │
│  │                    │    │                    │          │
│  │                    │    │  ✓ Feature 1       │          │
│  │                    │    │  ✓ Feature 2       │          │
│  │                    │    │  ✓ Feature 3       │          │
│  │                    │    │                    │          │
│  │                    │    │  [CTA Button]      │          │
│  └────────────────────┘    └────────────────────┘          │
└─────────────────────────────────────────────────────────────┘
```

---

## When to Use

### ✅ Perfect For:
- Homepage value propositions
- Product benefits sections
- About page mission statements
- Service features showcases
- Landing page conversions
- Brand story sections
- Feature explanations

### ❌ Avoid When:
- Multiple value props (use grid instead)
- No visual assets available
- Text-only content (use ContentSection)
- Pricing-focused content (use PricingTable)

---

## Props API

```typescript
interface ValuePropositionFeature {
  id: string;
  text: string;
  icon?: LucideIcon;
}

interface ValuePropositionSectionProps {
  heading: string;                  // Main heading (required)
  subheading?: string;              // Optional eyebrow text
  description: string;              // Main description (required)
  features: ValuePropositionFeature[]; // Feature list (required)
  mediaType?: 'image' | 'video';    // Media type, default 'image'
  mediaSrc?: string;                // Image/video source URL
  mediaAlt?: string;                // Alt text for image
  mediaPosition?: 'left' | 'right'; // Media column position, default 'right'
  cta?: {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'cta' | 'outline';
  };
  className?: string;
}
```

---

## Usage Examples

### Basic with Image (Media Right)

```tsx
import { ValuePropositionSection } from '@/components/patterns/ValuePropositionSection';

<ValuePropositionSection
  heading="Quality Products, Transparent Pricing"
  description="We believe in offering premium products at fair prices. Every item in our collection is carefully selected and tested to meet our high standards."
  features={[
    { id: '1', text: 'Hand-picked by experts' },
    { id: '2', text: '30-day money-back guarantee' },
    { id: '3', text: 'Free shipping on all orders' },
    { id: '4', text: 'Sustainable and ethical sourcing' },
  ]}
  mediaSrc="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop"
  mediaAlt="Team working together"
/>
```

### With Media on Left

```tsx
<ValuePropositionSection
  subheading="Our Story"
  heading="Built on Passion & Purpose"
  description="Founded in 2020, we began with a simple mission: to make high-quality essentials accessible to everyone."
  features={[
    { id: '1', text: 'Over 50,000 happy customers' },
    { id: '2', text: 'Shipped to 15+ countries' },
    { id: '3', text: '98% customer satisfaction rate' },
  ]}
  mediaSrc="/images/about-story.jpg"
  mediaAlt="Company founding story"
  mediaPosition="left"
  cta={{
    label: 'Learn More About Us',
    href: '/about',
    variant: 'cta',
  }}
/>
```

### With Custom Icons

```tsx
import { Check, Star, Trophy as Award } from '@phosphor-icons/react';

<ValuePropositionSection
  heading="Why Choose Us?"
  description="We're committed to delivering exceptional value through quality products and outstanding service."
  features={[
    { id: '1', text: 'Premium quality guaranteed', icon: Award },
    { id: '2', text: '5-star customer reviews', icon: Star },
    { id: '3', text: 'Verified authentic products', icon: Check },
  ]}
  mediaSrc="/images/quality-badge.png"
  mediaAlt="Quality guarantee"
/>
```

### Video Media

```tsx
<ValuePropositionSection
  heading="See How It Works"
  description="Watch our 2-minute video to learn how our subscription service delivers value every month."
  features={[
    { id: '1', text: 'Curated monthly boxes' },
    { id: '2', text: 'Cancel anytime, no commitment' },
    { id: '3', text: 'Exclusive member perks' },
  ]}
  mediaType="video"
  mediaSrc="/videos/how-it-works.mp4"
  cta={{
    label: 'Start Your Subscription',
    href: '/subscriptions',
    variant: 'cta',
  }}
/>
```

---

## Layout Behavior

### Responsive Grid

| Breakpoint | Layout | Media Position | Stacking |
|------------|--------|----------------|----------|
| Mobile (<1024px) | Single column | Top (always) | Media → Content |
| Desktop (≥1024px) | 2 columns (50/50) | Configurable | Side by side |

### Content Alignment

- **Text**: Left-aligned
- **Features**: Left-aligned list
- **Media**: Fills container, object-cover
- **Gap**: 48px between columns (desktop)

---

## Content Guidelines

### Heading
- **Character Limit**: 40-60 characters
- **Best Practices**: 
  - Benefit-focused, not feature-focused
  - Clear and direct
  - Example: "Quality Products, Transparent Pricing"

### Subheading (Optional)
- **Character Limit**: 20-30 characters
- **Best Practices**: 
  - Context setter or category label
  - Example: "Our Mission", "Why Choose Us"

### Description
- **Character Limit**: 150-250 characters
- **Best Practices**: 
  - 2-3 sentences explaining the value
  - Focus on customer benefits
  - Avoid jargon and marketing fluff
  - Tell a story

### Features
- **Optimal Number**: 3-5 features
- **Character Limit per Feature**: 30-50 characters
- **Best Practices**:
  - Specific benefits, not vague claims
  - Start with verbs when possible
  - Use numbers when applicable
  - Prioritize by importance

### Media
- **Image Dimensions**: 4:3 or 16:9 aspect ratio
- **Video**: Keep under 2 minutes
- **Quality**: High-resolution, professional
- **Alt Text**: Descriptive, not "image of..."

### CTA
- **Label**: Action-oriented (5-20 characters)
- **Examples**: "Learn More", "Get Started", "Shop Now"

---

## Visual Design

### Layout Structure

```
Desktop (≥1024px):
┌─────────────────────────────────────────┐
│ [Media - 50%]    [Content - 50%]        │
│                  - Subheading           │
│                  - Heading (H2)         │
│                  - Description          │
│                  - Features List        │
│                  - CTA Button           │
└─────────────────────────────────────────┘

Mobile (<1024px):
┌─────────────────────────────────────────┐
│            [Media - 100%]               │
│                                         │
│            [Content - 100%]             │
│            - Subheading                 │
│            - Heading (H2)               │
│            - Description                │
│            - Features List              │
│            - CTA Button                 │
└─────────────────────────────────────────┘
```

### Typography

- **Subheading**: Caption variant, purple accent
- **Heading**: H2, large, bold
- **Description**: Body text, gray-600
- **Features**: Body text with checkmark icons

### Feature Icons

- **Default**: Check icon (✓)
- **Custom**: Any Lucide icon
- **Size**: 20px
- **Color**: `text-purple-600 dark:text-purple-400`

### Media Styling

- **Aspect Ratio**: 4:3 (aspect-[4/3])
- **Rounded**: rounded-2xl
- **Object Fit**: cover
- **Background**: gray-200 (loading state)

---

## Dark Mode Support

### Light Mode
- Background: Transparent (inherits from parent)
- Text: gray-900 (headings), gray-600 (body)
- Icons: purple-600
- Media background: gray-200

### Dark Mode
- Background: Transparent (inherits from parent)
- Text: gray-50 (headings), gray-400 (body)
- Icons: purple-400
- Media background: gray-800

---

## Accessibility

### Semantic HTML

```html
<section>
  <div> <!-- Two-column grid -->
    <div> <!-- Media column -->
      <img alt="Descriptive alt text" />
    </div>
    <div> <!-- Content column -->
      <p>Subheading</p>
      <h2>Main Heading</h2>
      <p>Description</p>
      <ul>
        <li>
          <Check aria-hidden="true" />
          <span>Feature text</span>
        </li>
      </ul>
      <a>CTA Button</a>
    </div>
  </div>
</section>
```

### ARIA Labels

- Feature icons: `aria-hidden="true"` (text provides meaning)
- Video: Include captions/subtitles
- Images: Descriptive alt text (required)

### Keyboard Navigation

- CTA button: Standard tab/enter behavior
- No keyboard traps
- Logical tab order (top to bottom)

### Color Contrast

- All text: 4.5:1 minimum (WCAG AA)
- Headings: 7:1 (WCAG AAA)
- Feature icons: Decorative, text provides meaning

---

## Use Cases

### Homepage Value Proposition

```tsx
<ValuePropositionSection
  heading="Premium Products, Fair Prices"
  description="We believe everyone deserves access to quality. That's why we source directly from manufacturers and pass the savings to you."
  features={brandValues}
  mediaSrc="/images/hero-products.jpg"
  mediaAlt="Product collection"
  cta={{ label: 'Shop Now', href: '/shop' }}
/>
```

### About Page Mission

```tsx
<ValuePropositionSection
  subheading="Our Mission"
  heading="Building a Better Future"
  description="We're on a mission to make sustainable shopping easy and accessible."
  features={missionPoints}
  mediaSrc="/images/sustainability.jpg"
  mediaAlt="Sustainable practices"
  mediaPosition="left"
/>
```

### Product Benefits

```tsx
<ValuePropositionSection
  heading="Why Our Product Stands Out"
  description="Engineered with precision and tested rigorously to exceed industry standards."
  features={productBenefits}
  mediaSrc="/videos/product-demo.mp4"
  mediaType="video"
  cta={{ label: 'See It In Action', href: '/demo' }}
/>
```

---

## Templates Using This Pattern

| Template | Usage Context |
|----------|---------------|
| **FrontPage** | Homepage value proposition |
| **PageAbout** | Company mission and story |
| **SubscriptionLanding** | Subscription benefits |
| **ProductLanding** | Product feature highlights |

---

## Related Patterns

- **[Hero](Hero.md)** - Above-the-fold introduction
- **[HowItWorksSection](HowItWorksSection.md)** - Step-by-step processes
- **[StatsSection](StatsSection.md)** - Numerical proof points
- **[FAQSection](FAQSection.md)** - Answer common questions

---

## Performance

- **Bundle Size**: ~2KB
- **Dependencies**: Lucide React (icons), Check icon default
- **Rendering**: Static, no client state
- **Images**: Use lazy loading for below-fold placements

---

## Migration Guide

### From Inline Two-Column Layout

**Before:**
```tsx
<section className="py-16">
  <Container>
    <div className="grid md:grid-cols-2 gap-12">
      <img src="..." alt="..." />
      <div>
        <h2>Heading</h2>
        <p>Description</p>
        <ul>
          <li>✓ Feature 1</li>
          <li>✓ Feature 2</li>
        </ul>
        <button>CTA</button>
      </div>
    </div>
  </Container>
</section>
```

**After:**
```tsx
<ValuePropositionSection
  heading="Heading"
  description="Description"
  features={features}
  mediaSrc="..."
  mediaAlt="..."
  cta={{ label: 'CTA', href: '...' }}
/>
```

**Code Reduction**: ~65% fewer lines

---

## Testing Checklist

### Visual Testing

- [ ] Two-column layout on desktop
- [ ] Stacked layout on mobile
- [ ] Media displays correctly (image or video)
- [ ] Feature list renders with icons
- [ ] CTA button appears and is clickable
- [ ] Dark mode displays correctly

### Content Testing

- [ ] Heading and description display
- [ ] Subheading appears when provided
- [ ] All features render
- [ ] Custom icons display correctly
- [ ] Media position (left/right) works

### Accessibility Testing

- [ ] Image has alt text
- [ ] Semantic heading structure
- [ ] Screen reader announces content correctly
- [ ] Keyboard navigation works
- [ ] Color contrast meets WCAG 2.1 AA

---

## Support

For questions or issues with this pattern, refer to:
- [Pattern Architecture Overview](/guidelines/overview-patterns.md)
- [Writing Guidelines](/guidelines/WRITING_GUIDELINES.md)