# TestimonialCarousel Pattern

**Pattern Type:** Content Display / Carousel  
**WordPress Equivalent:** Testimonials Block / Carousel Pattern  
**Complexity:** Medium  
**Version:** 1.0  
**Status:** ✅ Production Ready

---

## Overview

TestimonialCarousel is a rotating carousel pattern that displays customer testimonials with auto-rotation, manual navigation controls, and optional ratings. It provides social proof and builds trust by showcasing positive customer experiences.

**Primary Use Cases:**
- Homepage social proof section
- Product landing pages
- Subscription/membership pages
- About page customer quotes
- Post-purchase trust building

---

## Component Structure

```tsx
<TestimonialCarousel>
  ├─ Carousel Container (relative positioning)
  │   ├─ Testimonial Slides (fade transition)
  │   │   ├─ Quote Icon (purple accent)
  │   │   ├─ Quote Text (large, italic)
  │   │   ├─ Author Info
  │   │   │   ├─ Avatar (circular, optional)
  │   │   │   ├─ Author Name (bold)
  │   │   │   ├─ Role/Company (muted)
  │   │   │   └─ Star Rating (optional)
  │   ├─ Navigation Arrows (prev/next, absolute positioned)
  │   └─ Dot Indicators (centered below, clickable)
</TestimonialCarousel>
```

---

## Props Interface

```tsx
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
  rating?: number; // 1-5
}

export interface TestimonialCarouselProps {
  /** Array of testimonial objects */
  testimonials: Testimonial[];
  
  /** Enable auto-rotation */
  autoRotate?: boolean; // default: true
  
  /** Auto-rotation interval in milliseconds */
  rotateInterval?: number; // default: 5000
  
  /** Show dot indicators */
  showDots?: boolean; // default: true
  
  /** Show prev/next arrow buttons */
  showArrows?: boolean; // default: true
  
  /** Additional CSS classes */
  className?: string;
}
```

---

## Usage Examples

### Basic Usage

```tsx
import { TestimonialCarousel } from '@/components/patterns/TestimonialCarousel';

const testimonials = [
  {
    id: '1',
    quote: 'This product completely transformed how I work. Highly recommended!',
    author: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    avatar: '/avatars/sarah.jpg',
    rating: 5
  },
  {
    id: '2',
    quote: 'Outstanding customer service and incredible value.',
    author: 'Michael Chen',
    role: 'Founder',
    company: 'StartupXYZ',
    rating: 5
  }
];

<TestimonialCarousel testimonials={testimonials} />
```

### In a Section Pattern

```tsx
<MutedSection
  heading="What Our Customers Say"
  subheading="Don't just take our word for it"
  content={<TestimonialCarousel testimonials={testimonials} />}
/>
```

### Custom Configuration

```tsx
<TestimonialCarousel
  testimonials={testimonials}
  autoRotate={true}
  rotateInterval={7000}
  showDots={true}
  showArrows={true}
  className="my-8"
/>
```

### Without Auto-Rotation

```tsx
<TestimonialCarousel
  testimonials={testimonials}
  autoRotate={false}
  showDots={true}
  showArrows={true}
/>
```

---

## Features

### Auto-Rotation
- Automatically advances to next testimonial
- Default interval: 5000ms (5 seconds)
- Pauses on hover/focus
- Resumes on mouse leave/blur
- Configurable interval

### Manual Navigation
- **Arrows:** Previous/Next buttons on left/right
- **Dots:** Click to jump to specific slide
- **Keyboard:** Arrow keys for navigation
- **Touch:** Swipe gestures on mobile (future enhancement)

### Visual Elements
- **Quote Icon:** Purple accent color
- **Quote Text:** Large (text-xl/2xl), italic
- **Avatar:** Circular, 64px diameter
- **Rating:** Yellow stars (1-5)
- **Transitions:** Smooth fade between slides

### Accessibility
- ARIA labels on all controls
- ARIA live region for current slide
- Keyboard navigation support
- Focus management
- Screen reader announcements
- Pause on hover for reading

---

## Design Specifications

### Layout
- **Container:** Max-width 4xl (56rem)
- **Min-height:** 300px
- **Padding:** 48px horizontal (responsive)
- **Alignment:** Center

### Typography
- **Quote:** text-xl (mobile) → text-2xl (desktop)
- **Quote:** Italic, line-height relaxed
- **Author:** font-semibold
- **Role/Company:** text-sm, muted color

### Colors
- **Quote Icon:** purple-600 (dark: purple-400)
- **Quote Text:** gray-700 (dark: gray-300)
- **Author:** gray-900 (dark: gray-50)
- **Role:** gray-600 (dark: gray-400)
- **Arrows:** White bg, gray-700 icon (dark: gray-800 bg, gray-300 icon)
- **Dots Active:** purple-600 (dark: purple-400)
- **Dots Inactive:** gray-300 (dark: gray-600)

### Spacing
- **Quote Icon → Text:** 24px (mb-6)
- **Text → Author:** 32px (mb-8)
- **Author Elements:** 12px (gap-3)
- **Dots:** 8px gap (gap-2)
- **Dots → Container:** 32px (mt-8)

---

## Responsive Behavior

### Mobile (<640px)
- Single column layout
- Text: text-xl
- Arrows: Positioned closer to content
- Touch-friendly tap targets

### Tablet (640-1024px)
- Text: text-2xl
- Larger padding: 64px horizontal
- More prominent arrows

### Desktop (≥1024px)
- Full layout
- Larger padding
- Wider max-width
- Hover states on all interactive elements

---

## Accessibility Requirements

### ARIA Attributes
```tsx
<div role="region" aria-label="Customer testimonials carousel" aria-live="polite">
  <button aria-label="Previous testimonial">...</button>
  <button aria-label="Next testimonial">...</button>
  <div role="tablist" aria-label="Testimonial slides">
    <button role="tab" aria-selected={active} aria-label="Go to testimonial 1">...</button>
  </div>
  <div className="sr-only" aria-live="polite">
    Showing testimonial {current} of {total}
  </div>
</div>
```

### Keyboard Navigation
- **Left Arrow:** Previous slide
- **Right Arrow:** Next slide
- **Tab:** Navigate to arrows/dots
- **Enter/Space:** Activate focused control
- **Escape:** Stop auto-rotation (future)

### Screen Reader Support
- Announces current slide number
- Announces total slides
- Labels all controls
- Live region updates on slide change

---

## Performance Considerations

- Lazy load avatar images
- Debounce auto-rotation
- Optimize re-renders with React.memo
- Use CSS transitions (hardware accelerated)
- Cleanup intervals on unmount

---

## Content Guidelines

### Quote Text
- **Length:** 100-200 characters ideal
- **Tone:** Authentic, specific, enthusiastic
- **Focus:** Specific benefits, not generic praise
- **Example Good:** "Cut my workflow time by 50% in the first week"
- **Example Bad:** "Great product, love it"

### Author Info
- **Name:** Full name (First Last)
- **Role:** Job title or descriptor
- **Company:** Company name (optional)
- **Avatar:** Professional headshot recommended

### Ratings
- Only include if 4-5 stars
- Consistent across all testimonials
- Consider showing average rating separately

---

## WordPress FSE Alignment

### Block Equivalents
- **Core Block:** `core/testimonial` (if exists)
- **Pattern:** Testimonials carousel pattern
- **Inner Blocks:** Group > Stack > Quote blocks

### Group Block Usage
```tsx
<Group 
  as="section"
  style="muted"
  padding="section"
  width="constrained"
>
  <TestimonialCarousel testimonials={data} />
</Group>
```

---

## Common Patterns

### Homepage Social Proof
```tsx
<MutedSection
  heading="Trusted by Thousands"
  subheading="See what our customers have to say"
  content={<TestimonialCarousel testimonials={topTestimonials} />}
/>
```

### Product Landing Page
```tsx
<ContentSection
  content={
    <>
      <h2 className="text-center mb-12">Real Results from Real Customers</h2>
      <TestimonialCarousel 
        testimonials={productTestimonials}
        autoRotate={true}
      />
    </>
  }
/>
```

### With CTA Below
```tsx
<MutedSection
  content={
    <>
      <TestimonialCarousel testimonials={testimonials} />
      <div className="text-center mt-12">
        <Button variant="cta" size="lg" to="/testimonials">
          Read More Reviews
        </Button>
      </div>
    </>
  }
/>
```

---

## Testing Checklist

- [ ] Auto-rotation works correctly
- [ ] Pauses on hover
- [ ] Resumes after hover
- [ ] Prev/next arrows work
- [ ] Dot indicators work
- [ ] Keyboard navigation works
- [ ] First/last slide loops correctly
- [ ] Single testimonial doesn't show navigation
- [ ] Empty array doesn't render
- [ ] Dark mode styles correct
- [ ] Responsive on all breakpoints
- [ ] ARIA labels present
- [ ] Screen reader announces changes
- [ ] Focus management works
- [ ] No console errors

---

## Future Enhancements

- [ ] Touch/swipe gestures for mobile
- [ ] Vertical slide animation option
- [ ] Pause button for auto-rotation
- [ ] Progress bar showing rotation
- [ ] Multiple testimonials per slide
- [ ] Video testimonials support
- [ ] Lazy load testimonial data
- [ ] Animation on scroll into view
- [ ] Custom transition effects
- [ ] Deep linking to specific testimonial

---

## Related Components

- **MutedSection** - Recommended wrapper with gray background
- **ContentSection** - Alternative wrapper with white background
- **DarkSection** - For dark-themed pages
- **Button** - For "View All Reviews" CTAs

---

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (latest)

---

## Migration Guide

### From Custom Implementation

**Before:**
```tsx
<section className="py-16 bg-gray-50">
  <Container>
    <div className="carousel">
      {/* Custom carousel code */}
    </div>
  </Container>
</section>
```

**After:**
```tsx
<MutedSection
  content={<TestimonialCarousel testimonials={data} />}
/>
```

---

## Version History

- **1.0** (2024-12-27) - Initial release with auto-rotation, arrows, dots, accessibility

---

**Status:** ✅ Production Ready  
**Maintenance:** Active  
**Support:** Full dark mode, accessibility, responsive
