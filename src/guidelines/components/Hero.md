# Hero Component

**Type**: Pattern (Reusable Section)  
**Location**: `/components/patterns/Hero.tsx`  
**Category**: Page Headers

---

## Purpose

The Hero is a full-width, visually prominent section typically placed at the top of a page. It combines a large background image or video with headline text and a primary call-to-action (CTA).

**Use Hero for:**
- Homepage banner
- Campaign landing pages
- Product category landing pages
- Seasonal promotions
- Brand storytelling sections

**Do NOT use Hero for:**
- Standard page headers (use PageHeader instead)
- Product detail pages (use product-specific layouts)
- Blog posts (use PostHeader instead)

---

## Component API

### Props Interface

```tsx
interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt?: string;
  video?: string;                    // Video URL (optional)
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  alignment?: 'left' | 'center';     // Default: 'center'
  height?: 'small' | 'medium' | 'large' | 'fullscreen';  // Default: 'large'
  overlay?: 'none' | 'light' | 'dark';  // Default: 'dark'
  textColor?: 'white' | 'black';     // Default: 'white'
  className?: string;
}
```

### Default Props

```tsx
const defaultProps = {
  alignment: 'center',
  height: 'large',
  overlay: 'dark',
  textColor: 'white',
};
```

---

## Usage Examples

### Basic Hero (Center Aligned)

```tsx
import { Hero } from '@/components/patterns/Hero';

<Hero
  title="Discover Premium Audio"
  subtitle="New Collection"
  description="Experience crystal-clear sound with our handpicked selection of premium headphones."
  image="https://example.com/hero.jpg"
  ctaText="Shop Now"
  ctaLink="/shop"
/>
```

### Hero with Two CTAs

```tsx
<Hero
  title="Summer Sale"
  subtitle="Up to 50% Off"
  description="Limited time offer on selected items"
  image="https://example.com/summer-sale.jpg"
  ctaText="Shop Sale"
  ctaLink="/sale"
  secondaryCtaText="View Catalog"
  secondaryCtaLink="/shop"
/>
```

### Left-Aligned Hero

```tsx
<Hero
  title="Welcome to Our Store"
  description="Find everything you need"
  image="https://example.com/hero.jpg"
  alignment="left"
  height="medium"
  ctaText="Get Started"
  ctaLink="/shop"
/>
```

### Video Background Hero

```tsx
<Hero
  title="Innovation in Motion"
  description="See our products in action"
  video="https://example.com/hero-video.mp4"
  image="https://example.com/hero-poster.jpg"  // Fallback image
  ctaText="Explore"
  ctaLink="/products"
  overlay="dark"
/>
```

---

## Implementation

### Full Hero Component

```tsx
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt?: string;
  video?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  alignment?: 'left' | 'center';
  height?: 'small' | 'medium' | 'large' | 'fullscreen';
  overlay?: 'none' | 'light' | 'dark';
  textColor?: 'white' | 'black';
  className?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  image,
  imageAlt = '',
  video,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  alignment = 'center',
  height = 'large',
  overlay = 'dark',
  textColor = 'white',
  className = '',
}: HeroProps) {
  const heightClasses = {
    small: 'h-[400px]',
    medium: 'h-[500px] md:h-[600px]',
    large: 'h-[600px] md:h-[700px] lg:h-[800px]',
    fullscreen: 'h-screen',
  };

  const overlayClasses = {
    none: '',
    light: 'bg-white/30',
    dark: 'bg-black/50',
  };

  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
  };

  return (
    <section 
      className={`relative ${heightClasses[height]} ${className}`}
    >
      {/* Background Image or Video */}
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={image}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Overlay */}
      {overlay !== 'none' && (
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`max-w-3xl ${
              alignment === 'center' ? 'mx-auto' : ''
            } flex flex-col ${alignmentClasses[alignment]} gap-6`}
          >
            {/* Subtitle */}
            {subtitle && (
              <p 
                className={`text-sm md:text-base uppercase tracking-wider font-medium ${
                  textColor === 'white' ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {subtitle}
              </p>
            )}

            {/* Title */}
            <h1 
              className={`${
                textColor === 'white' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p 
                className={`text-lg md:text-xl max-w-2xl ${
                  textColor === 'white' ? 'text-white/90' : 'text-gray-600'
                }`}
              >
                {description}
              </p>
            )}

            {/* CTAs */}
            {(ctaText || secondaryCtaText) && (
              <div className={`flex gap-4 ${
                alignment === 'center' ? 'justify-center' : 'justify-start'
              } flex-wrap`}>
                {ctaText && ctaLink && (
                  <Button
                    as={Link}
                    to={ctaLink}
                    size="large"
                    className="bg-white text-gray-900 hover:bg-gray-100 border-white"
                  >
                    {ctaText}
                  </Button>
                )}
                
                {secondaryCtaText && secondaryCtaLink && (
                  <Button
                    as={Link}
                    to={secondaryCtaLink}
                    variant="secondary"
                    size="large"
                    className={`${
                      textColor === 'white'
                        ? 'border-white text-white hover:bg-white/10'
                        : 'border-gray-900 text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {secondaryCtaText}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator (Optional) */}
      {height === 'fullscreen' && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown 
            size={32} 
            className={textColor === 'white' ? 'text-white' : 'text-gray-900'} 
          />
        </div>
      )}
    </section>
  );
}
```

---

## Height Options

### Visual Height Guide

| Height Option | Mobile | Tablet | Desktop | Best For |
|--------------|--------|--------|---------|----------|
| `small` | 400px | 400px | 400px | Compact banners, category headers |
| `medium` | 500px | 600px | 600px | Standard hero sections |
| `large` | 600px | 700px | 800px | Homepage heroes, major campaigns |
| `fullscreen` | 100vh | 100vh | 100vh | Immersive landing pages |

### Implementation

```tsx
// Small hero for category pages
<Hero height="small" ... />

// Standard hero for homepage
<Hero height="large" ... />

// Fullscreen hero for landing pages
<Hero height="fullscreen" ... />
```

---

## Overlay Options

### Overlay Types

**Dark Overlay (`overlay="dark"`)**
- Use with light/bright images
- Ensures white text is readable
- Adds dramatic, premium feel
- Default option

```tsx
<Hero 
  overlay="dark"   // bg-black/50
  textColor="white"
  image="https://example.com/bright-image.jpg"
/>
```

**Light Overlay (`overlay="light"`)**
- Use with dark images
- Ensures dark text is readable
- Softer, more approachable feel

```tsx
<Hero 
  overlay="light"   // bg-white/30
  textColor="black"
  image="https://example.com/dark-image.jpg"
/>
```

**No Overlay (`overlay="none"`)**
- Use with images that have empty space for text
- Requires careful image selection
- Test readability thoroughly

```tsx
<Hero 
  overlay="none"
  textColor="white"
  image="https://example.com/dark-top-image.jpg"
/>
```

---

## Alignment Patterns

### Center Aligned (Default)

Best for:
- Homepage heroes
- Brand-focused messaging
- Symmetrical layouts
- Formal presentations

```tsx
<Hero
  alignment="center"
  title="Welcome to Our Store"
  description="Discover amazing products"
/>
```

### Left Aligned

Best for:
- Product category pages
- Storytelling sections
- Split layouts with images
- Modern, editorial feel

```tsx
<Hero
  alignment="left"
  title="New Collection"
  description="Explore the latest arrivals"
/>
```

---

## CTA Button Patterns

### Single CTA

```tsx
<Hero
  title="Summer Sale"
  ctaText="Shop Now"
  ctaLink="/sale"
/>
```

### Dual CTAs (Primary + Secondary)

```tsx
<Hero
  title="Discover Premium Audio"
  ctaText="Shop Now"              // Primary - filled button
  ctaLink="/shop"
  secondaryCtaText="Learn More"   // Secondary - outlined button
  secondaryCtaLink="/about"
/>
```

### Button Styling

```tsx
// Primary CTA (inverted colors for visibility)
<Button className="bg-white text-gray-900 hover:bg-gray-100">
  Shop Now
</Button>

// Secondary CTA (outlined)
<Button className="border-white text-white hover:bg-white/10">
  Learn More
</Button>
```

---

## Responsive Behavior

### Text Scaling

```tsx
// Subtitle
<p className="text-sm md:text-base">
  {subtitle}
</p>

// Title (uses default H1 fluid scaling)
<h1>{title}</h1>

// Description
<p className="text-lg md:text-xl">
  {description}
</p>
```

### Container Padding

```tsx
<div className="container mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### Height Adjustments

```tsx
// Large hero scales down on mobile
height="large"  // 600px → 700px → 800px
className="h-[600px] md:h-[700px] lg:h-[800px]"
```

---

## Video Background

### Video Hero Implementation

```tsx
<Hero
  title="Innovation in Motion"
  video="https://example.com/hero.mp4"
  image="https://example.com/poster.jpg"  // Fallback/poster
  overlay="dark"
/>
```

### Video Element

```tsx
<video
  autoPlay      // Start playing automatically
  loop          // Repeat indefinitely
  muted         // Required for autoplay
  playsInline   // Play inline on mobile
  poster={image}  // Show while loading
  className="absolute inset-0 w-full h-full object-cover"
>
  <source src={video} type="video/mp4" />
</video>
```

### Video Best Practices

✅ **DO**:
- Keep videos under 5MB for performance
- Use poster image for loading state
- Provide image fallback for unsupported browsers
- Mute audio (required for autoplay)
- Use subtle, slow-motion videos
- Optimize for mobile (consider disabling on mobile)

❌ **DON'T**:
- Use videos longer than 30 seconds
- Include audio (breaks autoplay)
- Use fast, jarring motion
- Rely on video for critical content
- Forget to test on mobile devices

---

## Accessibility Requirements

### Image Alt Text

```tsx
<img
  src={image}
  alt={imageAlt || ''}  // Descriptive alt text or empty if decorative
  className="..."
/>
```

### Semantic HTML

```tsx
// ✅ Use <section> for hero
<section>
  <h1>{title}</h1>  {/* Page title */}
  <p>{description}</p>
</section>

// ❌ Don't use <div>
<div>
  <div>{title}</div>
</div>
```

### Keyboard Navigation

```tsx
// Ensure CTAs are keyboard accessible
<Link
  to={ctaLink}
  className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent rounded"
>
  {ctaText}
</Link>
```

### Color Contrast

- Dark overlay + white text: ✅ WCAG AAA
- Light overlay + dark text: ✅ WCAG AAA
- No overlay: ⚠️ Test carefully, may fail

### Reduced Motion

```tsx
// Disable animations for users with motion sensitivity
<div className="motion-reduce:animate-none">
  <ChevronDown className="animate-bounce" />
</div>
```

---

## Common Patterns

### Pattern 1: Homepage Hero

```tsx
<Hero
  title="Discover Amazing Products"
  subtitle="Welcome to Our Store"
  description="Shop the latest trends with free shipping on orders over $50"
  image="https://example.com/homepage-hero.jpg"
  height="large"
  alignment="center"
  ctaText="Shop Now"
  ctaLink="/shop"
  secondaryCtaText="Learn More"
  secondaryCtaLink="/about"
/>
```

### Pattern 2: Sale Campaign Hero

```tsx
<Hero
  title="Summer Sale"
  subtitle="Limited Time Offer"
  description="Up to 50% off on selected items"
  image="https://example.com/summer-sale.jpg"
  height="medium"
  overlay="dark"
  ctaText="Shop Sale"
  ctaLink="/sale"
/>
```

### Pattern 3: Category Landing Hero

```tsx
<Hero
  title="Headphones Collection"
  description="Explore our range of premium audio equipment"
  image="https://example.com/headphones-hero.jpg"
  height="small"
  alignment="left"
  ctaText="Browse Collection"
  ctaLink="/shop/headphones"
/>
```

### Pattern 4: Video Hero (Landing Page)

```tsx
<Hero
  title="Experience the Future"
  subtitle="Innovation Meets Design"
  video="https://example.com/product-video.mp4"
  image="https://example.com/video-poster.jpg"
  height="fullscreen"
  overlay="dark"
  ctaText="Get Started"
  ctaLink="/products"
/>
```

---

## Integration with Header

### Transparent Header Overlay

```tsx
<>
  <Header transparent={true} />
  <Hero
    title="Welcome"
    image="https://example.com/hero.jpg"
    overlay="dark"
    textColor="white"
  />
</>
```

### Standard Header (No Overlap)

```tsx
<>
  <Header />
  <Hero
    title="New Collection"
    image="https://example.com/hero.jpg"
  />
</>
```

---

## Performance Optimization

### Image Optimization

```tsx
// Use responsive images
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcSet="hero-desktop.jpg" 
  />
  <source 
    media="(min-width: 640px)" 
    srcSet="hero-tablet.jpg" 
  />
  <img 
    src="hero-mobile.jpg" 
    alt={imageAlt}
    className="..."
  />
</picture>
```

### Lazy Loading

```tsx
// Don't lazy load hero images (above the fold)
<img 
  src={image} 
  alt={imageAlt}
  loading="eager"  // Load immediately
  fetchpriority="high"  // Prioritize loading
/>
```

### Video Optimization

```tsx
// Disable video on mobile for performance
const isMobile = window.innerWidth < 768;

{!isMobile && video ? (
  <video ... />
) : (
  <img src={image} ... />
)}
```

---

## Related Components

- **Header**: Often overlays hero with transparent background
- **PageHeader**: Alternative for simpler page headers
- **CallToAction**: Similar CTA pattern for mid-page sections
- **CategoryHero**: Specialized hero for category pages

---

## Common Mistakes

❌ Using low-resolution images (causes pixelation on large screens)  
❌ Not providing overlay for text readability  
❌ Missing alt text for background images  
❌ CTA buttons too small on mobile  
❌ Hero too tall on mobile (excessive scrolling)  
❌ Text not readable over image  
❌ Missing focus states on CTA buttons  
❌ Video files too large (slow page load)  
❌ Not testing on actual mobile devices  
❌ Multiple H1 tags on page (hero + page content)

---

## Testing Checklist

- [ ] Hero displays correctly on all breakpoints
- [ ] Text is readable over background image
- [ ] CTA buttons are clickable and link correctly
- [ ] Image loads properly (check network throttling)
- [ ] Video plays automatically (if used)
- [ ] Overlay provides sufficient contrast
- [ ] Keyboard navigation works
- [ ] Focus states are visible
- [ ] Mobile height is appropriate (not too tall)
- [ ] Text alignment works on mobile
- [ ] Image alt text is present
- [ ] Page loads quickly (check image/video size)
