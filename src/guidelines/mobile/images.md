# Mobile Image Optimization Guidelines

**Category**: Mobile Design  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Overview

Images are typically the largest assets on mobile devices, directly impacting load time and user experience. Proper image optimization is critical for mobile performance, especially on slower 3G/4G connections.

---

## Core Principles

### 1. Image Size Budget

**Target Goals:**
- **Hero images**: 100-200KB (compressed)
- **Product images**: 30-60KB (compressed)
- **Thumbnails**: 5-15KB (compressed)
- **Icons**: Use SVG when possible (< 5KB)
- **Total page weight**: < 1MB for initial load

### 2. Responsive Image Strategy

Serve appropriately sized images based on device:
- **Mobile (< 640px)**: 640px width images
- **Tablet (640px - 1024px)**: 1024px width images
- **Desktop (> 1024px)**: 1920px width images
- **Retina displays**: 2x versions where needed

---

## Responsive Image Techniques

### Method 1: `srcset` with Pixel Density

Best for fixed-size images (product cards, avatars):

```tsx
<img
  src="product-400.jpg"
  srcSet="
    product-400.jpg 1x,
    product-800.jpg 2x
  "
  alt="Product name"
  width="400"
  height="400"
/>
```

### Method 2: `srcset` with Width Descriptors

Best for fluid images (hero images, full-width banners):

```tsx
<img
  src="hero-800.jpg"
  srcSet="
    hero-400.jpg 400w,
    hero-800.jpg 800w,
    hero-1200.jpg 1200w,
    hero-1600.jpg 1600w
  "
  sizes="100vw"
  alt="Hero image"
/>
```

### Method 3: `<picture>` Element with Art Direction

Best for different crops per viewport:

```tsx
<picture>
  {/* Mobile: Portrait crop */}
  <source
    media="(max-width: 640px)"
    srcSet="hero-mobile-400.jpg 400w, hero-mobile-800.jpg 800w"
    sizes="100vw"
  />
  
  {/* Tablet: Square crop */}
  <source
    media="(max-width: 1024px)"
    srcSet="hero-tablet-800.jpg 800w, hero-tablet-1600.jpg 1600w"
    sizes="100vw"
  />
  
  {/* Desktop: Landscape crop */}
  <source
    srcSet="hero-desktop-1200.jpg 1200w, hero-desktop-2400.jpg 2400w"
    sizes="100vw"
  />
  
  {/* Fallback */}
  <img src="hero-800.jpg" alt="Hero image" />
</picture>
```

---

## Lazy Loading

### Native Lazy Loading

Simple and performant for most use cases:

```tsx
// ✅ Lazy load images below the fold
<img
  src="product.jpg"
  alt="Product name"
  loading="lazy"
  width="400"
  height="400"
/>

// ✅ Eager load above-the-fold images
<img
  src="hero.jpg"
  alt="Hero"
  loading="eager"
  fetchpriority="high"
/>
```

### Lazy Loading Best Practices

```tsx
// Hero image (above fold) - Load immediately
<img
  src="hero.jpg"
  alt="Hero"
  loading="eager"
  fetchpriority="high"
  width="1920"
  height="1080"
/>

// Featured products (above fold) - Load immediately
<img
  src="featured-1.jpg"
  alt="Featured product"
  loading="eager"
  width="400"
  height="400"
/>

// Product grid (below fold) - Lazy load
{products.map(product => (
  <img
    key={product.id}
    src={product.image}
    alt={product.name}
    loading="lazy"
    width="400"
    height="400"
  />
))}
```

### Lazy Loading with Intersection Observer

For advanced control:

```tsx
import { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt, ...props }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '100px' } // Start loading 100px before visible
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={imageSrc || 'placeholder.jpg'}
      alt={alt}
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      {...props}
    />
  );
}
```

---

## Image Formats

### Format Comparison

| Format | Use Case | Pros | Cons | Mobile Support |
|--------|----------|------|------|----------------|
| **WebP** | All images | 25-35% smaller than JPEG | Older browsers | iOS 14+, Android 4+ |
| **AVIF** | Hero images | 50% smaller than JPEG | Limited support | iOS 16+, Android 12+ |
| **JPEG** | Photos | Universal support | Larger files | Universal |
| **PNG** | Transparency | Lossless, transparency | Large files | Universal |
| **SVG** | Icons, logos | Scalable, tiny | Not for photos | Universal |

### Progressive Enhancement with `<picture>`

```tsx
<picture>
  {/* Modern browsers: AVIF */}
  <source type="image/avif" srcSet="image.avif" />
  
  {/* WebP fallback */}
  <source type="image/webp" srcSet="image.webp" />
  
  {/* JPEG fallback */}
  <img src="image.jpg" alt="Description" />
</picture>
```

### React Component for Modern Formats

```tsx
interface ModernImageProps {
  src: string; // Base filename without extension
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  className?: string;
}

export function ModernImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className,
}: ModernImageProps) {
  const basePath = src.replace(/\.[^/.]+$/, ''); // Remove extension

  return (
    <picture>
      <source type="image/avif" srcSet={`${basePath}.avif`} />
      <source type="image/webp" srcSet={`${basePath}.webp`} />
      <img
        src={`${basePath}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={className}
      />
    </picture>
  );
}

// Usage
<ModernImage
  src="/images/product-image"
  alt="Product name"
  width={400}
  height={400}
  loading="lazy"
/>
```

---

## Image Sizing Guidelines

### Product Images

```tsx
// Product card in grid (mobile: 2 columns)
<img
  src="product.jpg"
  srcSet="
    product-200.jpg 200w,
    product-400.jpg 400w,
    product-600.jpg 600w
  "
  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
  alt="Product"
  width="400"
  height="400"
  loading="lazy"
/>

// Single product page - main image
<img
  src="product-large.jpg"
  srcSet="
    product-large-600.jpg 600w,
    product-large-800.jpg 800w,
    product-large-1200.jpg 1200w
  "
  sizes="(max-width: 768px) 100vw, 50vw"
  alt="Product detail"
  width="800"
  height="800"
/>
```

### Hero Images

```tsx
<picture>
  {/* Mobile: 640px wide */}
  <source
    media="(max-width: 640px)"
    srcSet="hero-640.jpg 640w, hero-1280.jpg 1280w"
    sizes="100vw"
  />
  
  {/* Tablet: 1024px wide */}
  <source
    media="(max-width: 1024px)"
    srcSet="hero-1024.jpg 1024w, hero-2048.jpg 2048w"
    sizes="100vw"
  />
  
  {/* Desktop: 1920px wide */}
  <source
    srcSet="hero-1920.jpg 1920w, hero-3840.jpg 3840w"
    sizes="100vw"
  />
  
  <img
    src="hero-1920.jpg"
    alt="Hero image"
    loading="eager"
    fetchpriority="high"
    width="1920"
    height="1080"
  />
</picture>
```

### Thumbnails

```tsx
// Small thumbnails (cart, checkout)
<img
  src="thumb-80.jpg"
  srcSet="thumb-80.jpg 1x, thumb-160.jpg 2x"
  alt="Product thumbnail"
  width="80"
  height="80"
  loading="lazy"
/>
```

---

## Aspect Ratios

### Maintain Aspect Ratio to Prevent Layout Shift

```tsx
// ✅ DO: Set width and height
<img
  src="product.jpg"
  alt="Product"
  width="400"
  height="400"
  className="w-full h-auto"
/>

// ❌ DON'T: No dimensions (causes layout shift)
<img
  src="product.jpg"
  alt="Product"
  className="w-full"
/>
```

### Using aspect-ratio (Modern)

```tsx
// Container with aspect ratio
<div className="aspect-square overflow-hidden">
  <img
    src="product.jpg"
    alt="Product"
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>

// Common aspect ratios
<div className="aspect-square">1:1 (Product cards)</div>
<div className="aspect-video">16:9 (Hero banners)</div>
<div className="aspect-[4/3]">4:3 (Traditional photos)</div>
<div className="aspect-[3/4]">3:4 (Portrait)</div>
```

---

## Placeholders & Loading States

### Low-Quality Image Placeholder (LQIP)

```tsx
function ProductImage({ src, alt, lqip }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Low-quality placeholder */}
      <img
        src={lqip}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ filter: 'blur(10px)' }}
      />
      
      {/* Full-quality image */}
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
      />
    </div>
  );
}
```

### Skeleton Placeholder

```tsx
function ImageSkeleton() {
  return (
    <div className="aspect-square bg-gray-200 animate-pulse rounded-lg" />
  );
}

// Usage
{loading ? (
  <ImageSkeleton />
) : (
  <img src={image} alt={alt} loading="lazy" />
)}
```

### Dominant Color Placeholder

```tsx
<div
  className="aspect-square"
  style={{ backgroundColor: product.dominantColor || '#f3f4f6' }}
>
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>
```

---

## Hero Image Best Practices

### Above-the-Fold Hero

```tsx
<picture>
  {/* Mobile-optimized crop */}
  <source
    media="(max-width: 640px)"
    srcSet="hero-mobile-640.jpg 640w, hero-mobile-1280.jpg 1280w"
    sizes="100vw"
    type="image/webp"
  />
  
  {/* Tablet */}
  <source
    media="(max-width: 1024px)"
    srcSet="hero-tablet-1024.jpg 1024w, hero-tablet-2048.jpg 2048w"
    sizes="100vw"
    type="image/webp"
  />
  
  {/* Desktop */}
  <source
    srcSet="hero-desktop-1920.jpg 1920w, hero-desktop-3840.jpg 3840w"
    sizes="100vw"
    type="image/webp"
  />
  
  {/* Fallback JPEG */}
  <img
    src="hero-1920.jpg"
    alt="Welcome to our store"
    width="1920"
    height="1080"
    loading="eager"
    fetchpriority="high"
    className="w-full h-full object-cover"
  />
</picture>
```

### Hero with Preload

```tsx
// In <head>
<link
  rel="preload"
  as="image"
  href="hero-mobile-640.webp"
  media="(max-width: 640px)"
  type="image/webp"
/>
<link
  rel="preload"
  as="image"
  href="hero-desktop-1920.webp"
  media="(min-width: 641px)"
  type="image/webp"
/>
```

---

## Background Images (CSS)

### Responsive Background Images

```css
/* Mobile */
.hero {
  background-image: url('hero-mobile-640.jpg');
  background-size: cover;
  background-position: center;
}

/* Tablet */
@media (min-width: 640px) {
  .hero {
    background-image: url('hero-tablet-1024.jpg');
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero {
    background-image: url('hero-desktop-1920.jpg');
  }
}

/* Retina */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .hero {
    background-image: url('hero-mobile-1280.jpg');
  }
}
```

### Modern Format Support with CSS

```css
.hero {
  background-image: url('hero.jpg');
}

/* WebP support */
@supports (background-image: url('hero.webp')) {
  .hero {
    background-image: url('hero.webp');
  }
}

/* AVIF support */
@supports (background-image: url('hero.avif')) {
  .hero {
    background-image: url('hero.avif');
  }
}
```

---

## Common Patterns

### Pattern 1: Product Card Image

```tsx
<div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
  <img
    src={product.image}
    srcSet={`
      ${product.image}?w=200 200w,
      ${product.image}?w=400 400w,
      ${product.image}?w=600 600w
    `}
    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
    alt={product.name}
    width="400"
    height="400"
    loading="lazy"
    className="w-full h-full object-cover hover:scale-105 transition-transform"
  />
</div>
```

### Pattern 2: Product Gallery

```tsx
function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <img
          src={images[selectedImage].large}
          srcSet={`
            ${images[selectedImage].medium} 800w,
            ${images[selectedImage].large} 1200w
          `}
          sizes="(max-width: 768px) 100vw, 50vw"
          alt={`Product view ${selectedImage + 1}`}
          width="800"
          height="800"
          loading="eager"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square rounded overflow-hidden border-2 ${
              index === selectedImage ? 'border-purple-600' : 'border-transparent'
            }`}
          >
            <img
              src={image.thumbnail}
              srcSet={`${image.thumbnail} 1x, ${image.small} 2x`}
              alt={`Thumbnail ${index + 1}`}
              width="100"
              height="100"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
```

### Pattern 3: Image with Fallback

```tsx
function ProductImage({ src, alt }) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? '/placeholder.jpg' : src}
      alt={alt}
      onError={() => setError(true)}
      loading="lazy"
      width="400"
      height="400"
      className="w-full h-full object-cover"
    />
  );
}
```

---

## Performance Testing

### Image Optimization Checklist

- [ ] Images compressed (80-85% quality for JPEG)
- [ ] WebP/AVIF versions generated
- [ ] Responsive image sizes created (at least 3 sizes)
- [ ] `srcset` and `sizes` attributes used
- [ ] Lazy loading enabled for below-fold images
- [ ] Width and height attributes set (prevent layout shift)
- [ ] Hero images preloaded
- [ ] Total image weight < 1MB for initial page load
- [ ] Images served from CDN with compression
- [ ] No images larger than needed for viewport

### Tools

- **ImageOptim** - Desktop image compression
- **Squoosh** - Web-based image optimizer
- **Sharp** - Node.js image processing
- **Cloudinary** - Image CDN with automatic optimization
- **Lighthouse** - Performance auditing
- **WebPageTest** - Real-world testing

---

## Common Mistakes

❌ Not using responsive images (serving 4K images to mobile)  
❌ Missing width/height attributes (causes layout shift)  
❌ Lazy loading hero images (delays LCP)  
❌ Not compressing images (huge file sizes)  
❌ Using PNG for photos (use JPEG/WebP)  
❌ No fallback for modern formats (WebP/AVIF)  
❌ Background images without mobile optimization  
❌ Missing alt text (accessibility issue)  
❌ Not testing on slow 3G connections  
❌ Serving 2x images to non-retina displays

---

## Quick Reference

### Image Optimization Checklist

✅ **Formats**: Use WebP/AVIF with JPEG fallback  
✅ **Responsive**: Provide 3-5 image sizes with `srcset`  
✅ **Lazy loading**: Enable for below-fold images  
✅ **Dimensions**: Always set width and height  
✅ **Compression**: 80-85% quality for photos  
✅ **Size budget**: < 200KB for hero, < 60KB for products  
✅ **Aspect ratio**: Use `aspect-ratio` or padding-bottom  
✅ **Preload**: Preload critical hero images  
✅ **CDN**: Serve from CDN with automatic optimization  
✅ **Alt text**: Descriptive alt text for all images

---

## Resources

- [web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Responsive Images Guide](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Squoosh Image Compressor](https://squoosh.app/)
- [Can I Use - WebP](https://caniuse.com/webp)
- [Can I Use - AVIF](https://caniuse.com/avif)
