# TemplateSingleGallery

**Component Type:** Template (Blog Single Post / Gallery Format)  
**Location:** `/src/app/components/templates/TemplateSingleGallery.tsx`  
**CSS:** `/src/styles/sections/blog-funky.css` (Section 13)  
**Route:** `/blog/:slug/gallery`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Cyan `#00ffff`

---

## Overview

TemplateSingleGallery is an Instagram-style photo gallery template featuring a gradient icon header, responsive masonry grid, neon pink hover glow, image zoom effects, dark glassmorphism lightbox, and optional Instagram CTA.

**WordPress Mapping:** WordPress Gallery Post Format  
**Post Format:** `gallery`  
**Dark Mode:** ✅ Complete support  
**Lightbox:** ✅ Full-screen image viewer with keyboard support

---

## Key Features

### Visual Elements

**1. Centered Header:**
- Gradient icon circle (pink → cyan)
- Title + Meta (date, photo count)
- Description text
- Subtle surface background

**2. Responsive Grid:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Square aspect ratio (1:1)

**3. Image Hover Effects:**
- Neon pink border glow
- 6% image zoom
- Dark overlay with Maximize icon
- Smooth transitions (300-500ms)

**4. Instagram Integration:**
- Gradient CTA button (pink → cyan)
- Lift effect on hover
- Opens in new tab

**5. Lightbox Modal:**
- Dark glassmorphism background (95% opacity)
- Full-screen image view
- Close button with cyan hover
- Click outside to close

### Funky Treatments

**Icon Circle:** Pink → Cyan gradient background  
**Image Border:** Neon pink glow on hover  
**Image Zoom:** 6% scale on hover  
**Instagram Button:** Pink → Cyan gradient + lift + pink glow  
**Lightbox Background:** Dark glassmorphism (95% opacity)

---

## Component Structure

### Data Access

```tsx
const { slug } = useParams<{ slug: string }>();
const post = getPostBySlug(slug || '');

const galleryImages =
  post.format_data?.gallery_images?.map((id: number) => getMediaSource(id)) || [];
const instagramLink = post.format_data?.instagram_link;
```

**Format Data Fields:**
- `gallery_images` — Array of media IDs
- `instagram_link` — Instagram post/profile URL (optional)

### State Management

```tsx
const [lightboxOpen, setLightboxOpen] = useState(false);
const [activeImage, setActiveImage] = useState<string>('');
```

### JSX Hierarchy

```tsx
<Layout>
  <article>
    
    {/* 1. Header */}
    <section className="single-gallery__header">
      <Container>
        <div className="single-gallery__icon">
          <Grid size={24} />
        </div>
        <h1>{post.title.rendered}</h1>
        <div className="single-gallery__meta">
          <span>{date}</span>
          <span aria-hidden="true">&bull;</span>
          <span>{galleryImages.length} photos</span>
        </div>
        <div className="single-gallery__desc"
             dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Container>
    </section>
    
    {/* 2. Gallery Grid */}
    <section className="single-gallery__grid">
      <Container>
        <div className="single-gallery__grid-inner">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="single-gallery__item"
              onClick={() => {
                setActiveImage(src);
                setLightboxOpen(true);
              }}
              role="button"
              tabIndex={0}
              aria-label={`View image ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveImage(src);
                  setLightboxOpen(true);
                }
              }}
            >
              <img src={src} alt={`Gallery image ${index + 1}`} />
              <div className="single-gallery__overlay" aria-hidden="true">
                <Maximize2 size={32} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Instagram CTA */}
        {instagramLink && (
          <div className="single-gallery__instagram">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="single-gallery__instagram-link"
            >
              <Instagram size={20} />
              View on Instagram
            </a>
          </div>
        )}
      </Container>
    </section>
    
  </article>
  
  {/* 3. Lightbox Modal */}
  {lightboxOpen && (
    <div
      className="single-gallery__lightbox"
      onClick={() => setLightboxOpen(false)}
      role="dialog"
      aria-label="Image lightbox"
    >
      <button
        className="single-gallery__lightbox-close"
        onClick={() => setLightboxOpen(false)}
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>
      <img src={activeImage} alt="Full-size view" />
    </div>
  )}
</Layout>
```

---

## BEM Class Hierarchy

```
single-gallery__header                 /* Centered header section */
├── single-gallery__icon               /* Gradient icon circle */
├── single-gallery__meta              /* Date + Photo count */
└── single-gallery__desc              /* Description text */

single-gallery__grid                   /* Gallery section */
├── single-gallery__grid-inner        /* CSS Grid container */
│   └── single-gallery__item          /* Image wrapper */
│       ├── img                       /* Gallery image */
│       └── single-gallery__overlay   /* Hover overlay */
└── single-gallery__instagram         /* Instagram CTA */
    └── single-gallery__instagram-link /* Gradient button */

single-gallery__lightbox               /* Modal overlay */
├── single-gallery__lightbox-close    /* Close button */
└── img                               /* Full-size image */
```

**Total BEM Classes:** 10

---

## Section Breakdown

### 1. Header Section

**Container:**
```css
.single-gallery__header {
  padding-block: var(--wp--preset--spacing--70);
  text-align: center;
  background: var(--wp--preset--color--surface);
  border-bottom: 1px solid var(--wp--preset--color--border-light);
}

.dark .single-gallery__header {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.08);
}
```

**Gradient Icon Circle:**
```css
.single-gallery__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-bottom: var(--wp--preset--spacing--40);
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.12),  /* Pink */
    rgba(0, 255, 255, 0.12)   /* Cyan */
  );
  color: var(--wp--preset--color--neon-pink);
}

.dark .single-gallery__icon {
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.2),
    rgba(0, 255, 255, 0.2)
  );
}
```

**JSX:**
```tsx
<div className="single-gallery__icon">
  <Grid size={24} />
</div>
```

**Effect:** Circle with gradient background + pink Grid icon.

---

**Meta Row:**
```css
.single-gallery__meta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--wp--preset--spacing--30);
  color: var(--wp--preset--color--text-secondary);
  font-size: var(--wp--preset--font-size--small);
  margin-bottom: var(--wp--preset--spacing--50);
}

.dark .single-gallery__meta {
  color: rgba(255, 255, 255, 0.5);
}
```

**JSX:**
```tsx
<div className="single-gallery__meta">
  <span>{new Date(post.date).toLocaleDateString()}</span>
  <span aria-hidden="true">&bull;</span>
  <span>{galleryImages.length} photos</span>
</div>
```

**Effect:** Date • Photo count in subtle gray.

---

**Description:**
```css
.single-gallery__desc {
  max-width: 42rem;  /* 672px */
  margin-inline: auto;
  color: var(--wp--preset--color--text-secondary);
  line-height: var(--wp--preset--line-height--relaxed);
}

.dark .single-gallery__desc {
  color: rgba(255, 255, 255, 0.6);
}
```

---

### 2. Gallery Grid

**Section:**
```css
.single-gallery__grid {
  padding-block: var(--wp--preset--spacing--80);
}
```

**Grid Container (Responsive):**
```css
.single-gallery__grid-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--40);
}

@media (min-width: 640px) {
  .single-gallery__grid-inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .single-gallery__grid-inner {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Breakpoints:**
- Mobile: 1 column
- ≥640px: 2 columns
- ≥1024px: 3 columns

---

### 3. Gallery Item (Square with Hover Effects)

**Item Container:**
```css
.single-gallery__item {
  position: relative;
  aspect-ratio: 1;  /* Perfect square */
  border-radius: var(--wp--preset--border-radius--lg, 12px);
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
```

**Hover State (Neon Pink Glow):**
```css
.single-gallery__item:hover {
  border-color: var(--wp--preset--color--neon-pink);
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.12);
}

.dark .single-gallery__item:hover {
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.2);  /* Stronger in dark mode */
}
```

**Effect:** Pink neon glow around image border.

---

**Image (Zoom on Hover):**
```css
.single-gallery__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.single-gallery__item:hover img {
  transform: scale(1.06);  /* 6% zoom */
}
```

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .single-gallery__item:hover img {
    transform: none;
  }
}
```

---

**Overlay (Dark with Maximize Icon):**
```css
.single-gallery__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  transition: background 0.3s ease;
  opacity: 0;
}

.single-gallery__item:hover .single-gallery__overlay {
  background: rgba(0, 0, 0, 0.3);  /* Dark overlay */
  opacity: 1;
}

.single-gallery__overlay svg {
  color: white;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
}
```

**Effect:** Dark overlay fades in with white Maximize icon on hover.

---

### 4. Keyboard Accessibility

**Interactive Item:**
```tsx
<div
  className="single-gallery__item"
  onClick={() => {
    setActiveImage(src);
    setLightboxOpen(true);
  }}
  role="button"
  tabIndex={0}
  aria-label={`View image ${index + 1}`}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setActiveImage(src);
      setLightboxOpen(true);
    }
  }}
>
  ...
</div>
```

**Support:** Tab navigation + Enter/Space to open lightbox.

---

### 5. Instagram CTA (Pink → Cyan Gradient)

**Container:**
```css
.single-gallery__instagram {
  text-align: center;
  margin-top: var(--wp--preset--spacing--70);
}
```

**Link Button:**
```css
.single-gallery__instagram-link {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--50);
  border-radius: var(--wp--preset--border-radius--md, 8px);
  border: none;
  cursor: pointer;
  font-weight: var(--wp--preset--font-weight--semibold);
  color: white;
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-pink),
    var(--wp--preset--color--neon-cyan)
  );
  transition: box-shadow 0.25s ease, transform 0.25s ease;
  text-decoration: none;
}

.single-gallery__instagram-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(255, 0, 255, 0.3);  /* Pink glow */
}
```

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .single-gallery__instagram-link:hover {
    transform: none;
  }
}
```

**JSX:**
```tsx
<a
  href={instagramLink}
  target="_blank"
  rel="noopener noreferrer"
  className="single-gallery__instagram-link"
>
  <Instagram size={20} />
  View on Instagram
</a>
```

**Effect:** Gradient button that lifts with pink glow on hover.

---

### 6. Lightbox Modal

**Overlay:**
```css
.single-gallery__lightbox {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--wp--preset--spacing--40);
  background: rgba(3, 2, 19, 0.95);  /* Dark glassmorphism */
}
```

**Close Button:**
```css
.single-gallery__lightbox-close {
  position: absolute;
  top: var(--wp--preset--spacing--40);
  right: var(--wp--preset--spacing--40);
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: color 0.2s ease;
}

.single-gallery__lightbox-close:hover {
  color: var(--wp--preset--color--neon-cyan);
}
```

**Full-Size Image:**
```css
.single-gallery__lightbox img {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: var(--wp--preset--border-radius--lg, 12px);
}
```

**JSX:**
```tsx
{lightboxOpen && (
  <div
    className="single-gallery__lightbox"
    onClick={() => setLightboxOpen(false)}
    role="dialog"
    aria-label="Image lightbox"
  >
    <button
      className="single-gallery__lightbox-close"
      onClick={() => setLightboxOpen(false)}
      aria-label="Close lightbox"
    >
      <X size={32} />
    </button>
    <img src={activeImage} alt="Full-size view" />
  </div>
)}
```

**Close Methods:**
1. Click close button (X)
2. Click outside image (on dark background)
3. Keyboard: ESC key (would need to add handler)

---

## Responsive Behavior

### Mobile (< 640px)

**Grid:** 1 column  
**Images:** Full width squares  
**Instagram button:** Full width with padding

### Tablet (640px - 1023px)

**Grid:** 2 columns  
**Images:** ~50% width squares  
**Instagram button:** Auto width centered

### Desktop (≥ 1024px)

**Grid:** 3 columns  
**Images:** ~33% width squares  
**Instagram button:** Auto width centered

---

## Dark Mode

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Header bg | `--surface` | `rgba(255,255,255,0.02)` |
| Header border | `--border-light` | `rgba(255,255,255,0.08)` |
| Icon gradient | Pink/Cyan 12% | Pink/Cyan 20% |
| Icon color | Neon pink | Neon pink |
| Meta text | `--text-secondary` | `rgba(255,255,255,0.5)` |
| Description | `--text-secondary` | `rgba(255,255,255,0.6)` |
| Image hover glow | `rgba(255,0,255,0.12)` | `rgba(255,0,255,0.2)` |

---

## Accessibility

### ARIA Attributes

**Gallery Items:**
```tsx
<div
  role="button"
  tabIndex={0}
  aria-label={`View image ${index + 1}`}
>
```

**Lightbox:**
```tsx
<div role="dialog" aria-label="Image lightbox">
  <button aria-label="Close lightbox">
    <X size={32} />
  </button>
</div>
```

**Decorative Elements:**
```tsx
<span aria-hidden="true">&bull;</span>
<div className="single-gallery__overlay" aria-hidden="true">
  <Maximize2 size={32} />
</div>
```

### Keyboard Navigation

**Gallery Items:**
- ✅ Tab to focus item
- ✅ Enter or Space to open lightbox
- ✅ Visual focus indicator (browser default)

**Lightbox:**
- ✅ Close button focusable
- ✅ ESC key support (recommended addition)
- ✅ Focus trap (recommended addition)

### Semantic HTML

```tsx
<article>
  <section className="single-gallery__header">
    <h1>...</h1>
  </section>
  <section className="single-gallery__grid">
    <a href="..." target="_blank" rel="noopener noreferrer">
      View on Instagram
    </a>
  </section>
</article>
```

---

## Production Enhancements

### 1. ESC Key to Close Lightbox

Add escape key handler:

```tsx
useEffect(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setLightboxOpen(false);
    }
  };
  
  if (lightboxOpen) {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }
}, [lightboxOpen]);
```

### 2. Lightbox Navigation (Prev/Next)

Add arrow navigation:

```tsx
const [activeIndex, setActiveIndex] = useState(0);

const goNext = () => {
  setActiveIndex((prev) => (prev + 1) % galleryImages.length);
};

const goPrev = () => {
  setActiveIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
};

// In lightbox:
<button onClick={goPrev}><ChevronLeft /></button>
<button onClick={goNext}><ChevronRight /></button>
```

### 3. Focus Trap in Lightbox

Trap focus within lightbox when open:

```tsx
import { useRef, useEffect } from 'react';

const lightboxRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if (lightboxOpen && lightboxRef.current) {
    const focusableElements = lightboxRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    firstElement?.focus();
    
    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }
}, [lightboxOpen]);
```

### 4. Lazy Loading Images

Load images on demand:

```tsx
<img
  src={src}
  alt={`Gallery image ${index + 1}`}
  loading="lazy"
/>
```

### 5. Image Captions

Add optional captions:

```tsx
const galleryImages = post.format_data?.gallery_images?.map((id: number, i: number) => ({
  src: getMediaSource(id),
  caption: post.format_data?.gallery_captions?.[i]
})) || [];

// In lightbox:
<figcaption>{galleryImages[activeIndex].caption}</figcaption>
```

---

## Testing Checklist

### Visual Testing
- [ ] Header centered with gradient icon
- [ ] Grid responsive (1 → 2 → 3 columns)
- [ ] All images square (1:1 ratio)
- [ ] Pink border glow on hover
- [ ] Image zooms 6% on hover
- [ ] Dark overlay with icon on hover
- [ ] Instagram button gradient (pink → cyan)
- [ ] Lightbox dark background (95% opacity)

### Interaction Testing
- [ ] Click image opens lightbox
- [ ] Lightbox shows correct image
- [ ] Click close button closes lightbox
- [ ] Click outside closes lightbox
- [ ] Instagram link opens in new tab
- [ ] Instagram button lifts on hover
- [ ] Instagram button has pink glow

### Keyboard Testing
- [ ] Tab to gallery items
- [ ] Enter opens lightbox
- [ ] Space opens lightbox
- [ ] Tab to close button in lightbox
- [ ] Enter closes lightbox
- [ ] (Enhancement) ESC closes lightbox

### Responsive Testing
- [ ] Mobile: 1 column grid
- [ ] Tablet: 2 column grid
- [ ] Desktop: 3 column grid
- [ ] Images maintain square ratio
- [ ] Lightbox responsive on all sizes
- [ ] Instagram button centered

### Dark Mode Testing
- [ ] Header background subtle
- [ ] Icon gradient brighter
- [ ] Meta text visible
- [ ] Description text visible
- [ ] Pink glow stronger on hover
- [ ] Lightbox background dark

### Accessibility Testing
- [ ] Gallery items have role="button"
- [ ] Gallery items have aria-label
- [ ] Lightbox has role="dialog"
- [ ] Close button has aria-label
- [ ] Tab order logical
- [ ] Focus visible
- [ ] Reduced motion respected
- [ ] Instagram link has rel="noopener noreferrer"

---

## Common Issues

### Issue: Images not square on some browsers

**Cause:** Missing `aspect-ratio` support

**Solution:** Add fallback:
```css
.single-gallery__item {
  aspect-ratio: 1;
  
  /* Fallback */
  @supports not (aspect-ratio: 1) {
    padding-top: 100%;
    position: relative;
  }
}

.single-gallery__item img {
  @supports not (aspect-ratio: 1) {
    position: absolute;
    inset: 0;
  }
}
```

### Issue: Lightbox not closing on background click

**Cause:** Event propagation to image

**Solution:** Stop propagation on image:
```tsx
<img
  src={activeImage}
  onClick={(e) => e.stopPropagation()}
  alt="Full-size view"
/>
```

### Issue: Pink glow too subtle in light mode

**Cause:** 12% opacity too low

**Solution:** Increase opacity:
```css
.single-gallery__item:hover {
  box-shadow: 0 0 30px rgba(255, 0, 255, 0.2);  /* Was 0.12 */
}
```

### Issue: Zoom effect jarring

**Cause:** 500ms transition too slow

**Solution:** Speed up:
```css
.single-gallery__item img {
  transition: transform 0.3s ease;  /* Was 0.5s */
}
```

---

## Related Templates

- **ArchiveGallery** (`/src/app/components/templates/blog/ArchiveGallery.tsx`) — Gallery archive grid
- **TemplateSingleAudio** (`/src/app/components/templates/TemplateSingleAudio.tsx`) — Audio/podcast format
- **TemplateSingleVideo** (`/src/app/components/templates/TemplateSingleVideo.tsx`) — Video format
- **TemplateSingleStandard** (`/src/app/components/templates/TemplateSingleStandard.tsx`) — Standard format

---

**Status:** ✅ Production-ready (ESC key + focus trap recommended)  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After lightbox navigation implementation
