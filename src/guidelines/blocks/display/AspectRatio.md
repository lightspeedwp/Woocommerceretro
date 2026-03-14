# AspectRatio Block Component

**Component:** `AspectRatio`  
**Category:** Display Blocks  
**Priority:** P2 (Medium Priority)  
**Status:** ✅ Active  
**Version:** 1.0.0  
**Last Updated:** 2026-03-14

---

## Overview

The **AspectRatio** component maintains consistent aspect ratios for media content (images, videos, embeds) using the padding-bottom technique. It creates a responsive container that preserves proportions across all screen sizes, preventing layout shifts and ensuring optimal visual presentation.

**Common use cases:**
- Product images in grids
- Video embeds (16:9, 4:3)
- Featured images in blog posts
- Hero images
- Gallery thumbnails
- Social media embed containers

---

## Component API

### Props

```typescript
interface AspectRatioProps {
  className?: string;        // Additional CSS classes
  ratio?: number;            // Aspect ratio (default: 16/9)
  style?: React.CSSProperties; // Additional inline styles
  children?: React.ReactNode;  // Content (image, video, iframe)
  id?: string;               // HTML id attribute
}
```

### Prop Details

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `className` | `string` | ❌ | `''` | Additional WordPress semantic classes |
| `ratio` | `number` | ❌ | `16 / 9` | Aspect ratio (width/height) |
| `style` | `React.CSSProperties` | ❌ | `{}` | Additional inline styles (use sparingly) |
| `children` | `React.ReactNode` | ❌ | - | Content to render inside aspect ratio container |
| `id` | `string` | ❌ | - | HTML id attribute for anchor linking |

### Common Ratios

```typescript
// Video formats
16 / 9   // Standard widescreen (1.778:1)
4 / 3    // Classic TV (1.333:1)
21 / 9   // Ultra-wide (2.333:1)

// Photo formats
1 / 1    // Square (Instagram)
4 / 5    // Portrait (0.8:1)
3 / 2    // Standard photo (1.5:1)
5 / 4    // Medium format (1.25:1)

// Social media
9 / 16   // Vertical video (Stories, Reels)
2 / 3    // Pinterest portrait (0.667:1)
```

---

## Implementation

### Basic Usage

```tsx
import { AspectRatio } from '@/components/blocks/display/AspectRatio';

// Standard 16:9 video
<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Video Title"
    allow="accelerometer; autoplay; encrypted-media; gyroscope"
    allowFullScreen
  />
</AspectRatio>

// Square product image
<AspectRatio ratio={1}>
  <img
    src="/product-image.jpg"
    alt="Product name"
    loading="lazy"
  />
</AspectRatio>

// Portrait social media embed
<AspectRatio ratio={9 / 16}>
  <div className="social-embed">
    {/* Instagram/TikTok embed */}
  </div>
</AspectRatio>
```

### Product Grid Example

```tsx
// Product card with consistent aspect ratios
const ProductCard = ({ product }) => (
  <div className="wc-block-product-card">
    <AspectRatio ratio={1} className="wc-block-product-card__image-wrapper">
      <img
        src={product.image}
        alt={product.name}
        className="wc-block-product-card__image"
        loading="lazy"
      />
    </AspectRatio>
    <h3 className="wc-block-product-card__title">{product.name}</h3>
    <span className="wc-block-product-card__price">${product.price}</span>
  </div>
);

// Grid of 4 products with identical image heights
<div className="wc-block-products-grid">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
```

### Video Embed Example

```tsx
// YouTube video with 16:9 ratio
<div className="wp-block-video-wrapper">
  <h3>Product Demo Video</h3>
  <AspectRatio ratio={16 / 9}>
    <iframe
      src="https://www.youtube.com/embed/VIDEO_ID"
      title="Product Demo"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </AspectRatio>
</div>
```

### Blog Featured Image Example

```tsx
// Blog post featured image
<article className="wp-block-post">
  <AspectRatio ratio={3 / 2} className="wp-block-post__featured-image">
    <img
      src={post.featuredImage}
      alt={post.title}
      loading="lazy"
    />
  </AspectRatio>
  <h2 className="wp-block-post__title">{post.title}</h2>
  <div className="wp-block-post__excerpt">{post.excerpt}</div>
</article>
```

---

## BEM Class Structure

### Component Classes

```html
<!-- Root container -->
<div class="wp-block-aspect-ratio funky-aspect-ratio">
  <!-- Inner wrapper (absolute positioned) -->
  <div class="wp-block-aspect-ratio__inner">
    <img src="..." alt="..." />
  </div>
</div>
```

### Class Naming Convention

| Class | Purpose | Applied To |
|-------|---------|------------|
| `wp-block-aspect-ratio` | Root container (WordPress standard) | Container `<div>` |
| `funky-aspect-ratio` | Theme-specific styling hook | Container `<div>` |
| `wp-block-aspect-ratio__inner` | Absolutely positioned wrapper | Inner `<div>` |

---

## Styling

### CSS Architecture

**File:** `/src/styles/blocks/display/aspect-ratio.css`

```css
/* ========================================
   ASPECT RATIO
   ======================================== */

.wp-block-aspect-ratio {
  position: relative;
  width: 100%;
}

.wp-block-aspect-ratio > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### Retro Theme Enhancements (Optional)

Add retro styling for funky theme:

```css
/* Retro pixelated border variant */
.funky-aspect-ratio--retro {
  border: 3px solid var(--color-ink);
  box-shadow: 4px 4px 0 var(--color-ink);
  background-color: var(--color-paper-deep);
}

.dark .funky-aspect-ratio--retro {
  border-color: var(--retro-color-neon-cyan);
  box-shadow: 
    0 0 10px rgba(0, 255, 255, 0.3),
    4px 4px 0 rgba(0, 255, 255, 0.4);
}

/* Scanline CRT effect for video embeds */
.funky-aspect-ratio--crt::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15),
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 1;
}
```

### Object Fit Variants

```css
/* Cover (default) - fills container, crops if needed */
.wp-block-aspect-ratio > * {
  object-fit: cover;
}

/* Contain - fits entire content, may have letterboxing */
.wp-block-aspect-ratio--contain > * {
  object-fit: contain;
}

/* Fill - stretches to fill (may distort) */
.wp-block-aspect-ratio--fill > * {
  object-fit: fill;
}
```

---

## Dark Mode Support

### Automatic Adaptation

AspectRatio inherits dark mode from parent containers:

```tsx
// Dark mode handled by parent product card
<div className="wc-block-product-card">
  <AspectRatio ratio={1}>
    <img src={product.image} alt={product.name} />
  </AspectRatio>
</div>
```

### Retro Theme Dark Mode

```css
/* Light mode border */
.funky-aspect-ratio {
  border: 2px solid var(--color-ink);
}

/* Dark mode neon border */
.dark .funky-aspect-ratio {
  border-color: var(--retro-color-neon-cyan);
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}
```

---

## Accessibility

### Image Alt Text (Required)

```tsx
// ✅ CORRECT - Descriptive alt text
<AspectRatio ratio={1}>
  <img
    src="/product.jpg"
    alt="Blue ceramic coffee mug with handle"
  />
</AspectRatio>

// ❌ WRONG - Missing or poor alt text
<AspectRatio ratio={1}>
  <img src="/product.jpg" alt="product" />
</AspectRatio>
```

### Video Accessibility

```tsx
// ✅ CORRECT - Title and transcript provided
<AspectRatio ratio={16 / 9}>
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="How to Use Our Product - Step by Step Tutorial"
    allowFullScreen
  />
</AspectRatio>
<div className="video-transcript">
  <h4>Video Transcript</h4>
  <p>Full transcript of video content...</p>
</div>
```

### Focus Management

```tsx
// Ensure interactive content inside is keyboard accessible
<AspectRatio ratio={16 / 9}>
  <div className="interactive-embed">
    <button aria-label="Play video">▶</button>
    <button aria-label="Pause video">⏸</button>
  </div>
</AspectRatio>
```

---

## Responsive Behavior

### Mobile Optimization

```css
/* Smaller ratio on mobile for vertical space */
@media (max-width: 767px) {
  .wp-block-aspect-ratio--mobile-portrait {
    padding-bottom: 125%; /* 4:5 ratio */
  }
}

/* Standard ratio on desktop */
@media (min-width: 768px) {
  .wp-block-aspect-ratio--mobile-portrait {
    padding-bottom: 66.67%; /* 3:2 ratio */
  }
}
```

### Adaptive Ratios

```tsx
// Different ratios for mobile vs desktop
const ProductImage = ({ image, alt }) => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const ratio = isMobile ? 4 / 5 : 1; // Portrait mobile, square desktop

  return (
    <AspectRatio ratio={ratio}>
      <img src={image} alt={alt} loading="lazy" />
    </AspectRatio>
  );
};
```

---

## Performance Optimization

### Lazy Loading Images

```tsx
// Always use loading="lazy" for below-fold images
<AspectRatio ratio={1}>
  <img
    src="/product.jpg"
    alt="Product name"
    loading="lazy"
    decoding="async"
  />
</AspectRatio>
```

### Placeholder Pattern

```tsx
// Show placeholder while image loads
const [imageLoaded, setImageLoaded] = useState(false);

<AspectRatio ratio={1} className="product-image-wrapper">
  {!imageLoaded && (
    <div className="image-placeholder" aria-hidden="true">
      <Skeleton />
    </div>
  )}
  <img
    src={product.image}
    alt={product.name}
    loading="lazy"
    onLoad={() => setImageLoaded(true)}
    style={{ opacity: imageLoaded ? 1 : 0 }}
  />
</AspectRatio>
```

### Prevent Layout Shift

```tsx
// AspectRatio prevents Cumulative Layout Shift (CLS)
// by reserving space before content loads

// ❌ BAD - Causes layout shift
<img src="/product.jpg" alt="Product" />

// ✅ GOOD - Reserves space, no layout shift
<AspectRatio ratio={1}>
  <img src="/product.jpg" alt="Product" />
</AspectRatio>
```

---

## Common Patterns

### Pattern 1: Product Gallery Grid

```tsx
<div className="wc-block-products-grid">
  {products.map((product) => (
    <Link key={product.id} to={`/product/${product.slug}`}>
      <AspectRatio ratio={1} className="product-thumbnail">
        <img
          src={product.thumbnail}
          alt={product.name}
          loading="lazy"
        />
      </AspectRatio>
      <h3>{product.name}</h3>
      <span>${product.price}</span>
    </Link>
  ))}
</div>
```

### Pattern 2: Blog Post Featured Images

```tsx
<article className="wp-block-post">
  <AspectRatio ratio={16 / 9} className="post-featured-image">
    <img
      src={post.featuredImage}
      alt={post.title}
      loading="lazy"
    />
  </AspectRatio>
  <div className="post-content">
    <h2>{post.title}</h2>
    <p>{post.excerpt}</p>
  </div>
</article>
```

### Pattern 3: Video Testimonials

```tsx
<div className="testimonial-video">
  <AspectRatio ratio={16 / 9}>
    <video
      src="/testimonials/customer-1.mp4"
      controls
      poster="/testimonials/customer-1-poster.jpg"
      aria-label="Customer testimonial video"
    >
      <track
        kind="captions"
        src="/testimonials/customer-1-captions.vtt"
        srcLang="en"
        label="English"
      />
    </video>
  </AspectRatio>
  <p className="testimonial-caption">Sarah J. - Verified Customer</p>
</div>
```

### Pattern 4: Instagram-Style Grid

```tsx
// Square grid like Instagram
<div className="social-media-grid">
  {posts.map((post) => (
    <AspectRatio key={post.id} ratio={1}>
      <img
        src={post.image}
        alt={post.caption}
        loading="lazy"
      />
      <div className="overlay">
        <Heart size={24} /> {post.likes}
      </div>
    </AspectRatio>
  ))}
</div>
```

---

## Edge Cases & Troubleshooting

### Issue 1: Content Overflowing Container

**Problem:**
```tsx
// Content not fitting inside aspect ratio
<AspectRatio ratio={16 / 9}>
  <div className="large-content">
    {/* Content taller than container */}
  </div>
</AspectRatio>
```

**Solution:**
```css
/* Ensure child content respects container bounds */
.wp-block-aspect-ratio > * {
  overflow: hidden; /* Hide overflow */
  max-height: 100%;
}
```

### Issue 2: Image Not Centered

**Problem:** Image not centered vertically/horizontally

**Solution:**
```css
.wp-block-aspect-ratio > img {
  object-fit: cover;
  object-position: center center; /* Center the image */
}
```

### Issue 3: Ratio Not Updating Dynamically

**Problem:** Changing `ratio` prop doesn't update padding

**Solution:**
```tsx
// Use key prop to force re-render when ratio changes
<AspectRatio key={ratio} ratio={ratio}>
  <img src={image} alt={alt} />
</AspectRatio>
```

---

## Testing

### Visual Testing Checklist

- [ ] **Square ratio (1:1)** - Perfect square on all screens
- [ ] **Widescreen (16:9)** - Standard video format
- [ ] **Portrait (9:16)** - Vertical video format
- [ ] **Custom ratios** - 4:3, 21:9, 3:2, etc.
- [ ] **Image scaling** - No distortion or stretching
- [ ] **Content overflow** - Hidden correctly
- [ ] **Dark mode** - Borders and backgrounds adapt
- [ ] **Responsive** - Maintains ratio on all screen sizes

### Accessibility Testing

- [ ] Images have descriptive alt text
- [ ] Videos have titles and transcripts
- [ ] Interactive content keyboard accessible
- [ ] Focus indicators visible
- [ ] Screen reader announces content type

### Performance Testing

- [ ] Images lazy load below fold
- [ ] No Cumulative Layout Shift (CLS)
- [ ] Placeholders show while loading
- [ ] Smooth transitions (no jank)

---

## Browser Compatibility

### Supported Browsers

- ✅ Chrome/Edge 90+ (Full support)
- ✅ Firefox 88+ (Full support)
- ✅ Safari 14+ (Full support)
- ✅ iOS Safari 14+ (Full support)
- ✅ Android Chrome 90+ (Full support)

### Known Issues

**None** - Padding-bottom technique has universal browser support.

---

## Migration Notes

### From Inline Width/Height

**Before:**
```tsx
// Fixed dimensions (not responsive)
<img src="/product.jpg" width={400} height={400} alt="Product" />
```

**After:**
```tsx
// Responsive aspect ratio
<AspectRatio ratio={1}>
  <img src="/product.jpg" alt="Product" loading="lazy" />
</AspectRatio>
```

### From CSS Aspect Ratio Property

**Before:**
```css
/* Modern CSS (limited browser support) */
.image-wrapper {
  aspect-ratio: 16 / 9;
}
```

**After:**
```tsx
// Universal browser support with padding technique
<AspectRatio ratio={16 / 9}>
  <img src="/image.jpg" alt="..." />
</AspectRatio>
```

---

## Related Components

- **Image Block** - Standalone images with captions
- **Gallery Block** - Multiple images in grid/masonry
- **Video Block** - Self-hosted or embedded videos
- **ProductCard** - Product grid items
- **PostCard** - Blog post previews

---

## References

- **WordPress Aspect Ratio Block:** [wordpress.org/aspect-ratio](https://developer.wordpress.org/block-editor/reference-guides/core-blocks/#aspect-ratio)
- **CSS Aspect Ratio Technique:** Padding-bottom percentage method
- **WCAG Image Guidelines:** Alt text requirements
- **Component Location:** `/src/app/components/blocks/display/AspectRatio.tsx`
- **Styles Location:** `/src/styles/blocks/display/aspect-ratio.css`

---

**Version:** 1.0.0  
**Last Updated:** 2026-03-14  
**Status:** ✅ Complete  
**Category:** P2 Display Blocks (Medium Priority)
