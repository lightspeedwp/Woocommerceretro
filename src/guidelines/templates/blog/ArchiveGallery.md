# ArchiveGallery Template

**Component Type:** Template (Blog Archive / Gallery)  
**Location:** `/src/app/components/templates/blog/ArchiveGallery.tsx`  
**CSS:** `/src/styles/sections/blog-format-archives-funky.css`  
**Route:** `/blog/format/gallery`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Cyan `#00ffff`

---

## Overview

ArchiveGallery is an Instagram-style photo grid featuring a centered hero with glassmorphism Instagram icon, gradient CTA, and a masonry-like square grid with engagement stat overlays on hover.

**WordPress Mapping:** WordPress Gallery Post Format Archive / Instagram Feed Clone  
**Post Format:** `gallery`  
**Dark Mode:** ✅ Complete support  
**Reduced Motion:** ✅ Floating orbs animate (can be disabled)

---

## Key Features

### Visual Treatments

**1. Hero Section:**
- Colorful abstract background image
- Pink-cyan gradient overlay
- Large glassmorphism Instagram icon (72px circle)
- Instagram handle (@username)
- White "Follow Us" CTA button
- Floating orbs (cyan/pink)

**2. Instagram-Style Grid:**
- Square image tiles (1:1 aspect ratio)
- Tight 4px gap (Instagram-style)
- Engagement overlay on hover (likes + comments)
- Pink neon border glow on hover
- Image zoom on hover

**3. Placeholder Tiles:**
- Empty grid slots filled with Instagram icon placeholders
- Maintains grid structure with few posts

**4. Funky Elements:**
- Glassmorphism circular icon
- Pink-cyan gradient overlay
- White button (reversed from gradient buttons)
- Neon pink border glow
- Engagement stats overlay

---

## Component Structure

### Data Filtering

```tsx
const galleryPosts = (posts || []).filter((post) => post.format === 'gallery');
```

**Filter Logic:** Only shows posts with `format === 'gallery'`

### WPPost Type (Gallery Format)

```tsx
interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  format: 'standard' | 'audio' | 'video' | 'gallery' | 'aside';
  format_data?: {
    gallery_images?: string[];    // Array of image URLs
    gallery_count?: number;        // Number of images
  };
}
```

### JSX Hierarchy

```tsx
<Layout>
  <div className="archive-gallery">
    
    {/* 1. Hero Section */}
    <section className="archive-gallery__hero">
      <img className="archive-gallery__hero-bg" />
      <div className="archive-gallery__hero-overlay" />
      <div className="archive-gallery__orb--1" />
      <div className="archive-gallery__orb--2" />
      <Container>
        <div className="archive-gallery__hero-content">
          <div className="archive-gallery__hero-icon">
            <Instagram size={36} />
          </div>
          <h1 className="archive-gallery__hero-title">@lightspeedwpdev</h1>
          <p className="archive-gallery__hero-subtitle">...</p>
          <a className="archive-gallery__hero-cta">Follow Us</a>
        </div>
      </Container>
    </section>
    
    {/* 2. Grid Section */}
    <section className="archive-gallery__grid-section">
      <Container>
        <div className="archive-gallery__grid">
          
          {/* Gallery items */}
          {galleryPosts.map(post => (
            <Link className="archive-gallery__item">...</Link>
          ))}
          
          {/* Placeholder tiles */}
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div className="archive-gallery__placeholder">...</div>
          ))}
          
        </div>
      </Container>
    </section>
    
  </div>
</Layout>
```

---

## BEM Class Hierarchy

```
archive-gallery                        /* Container + color identity */

archive-gallery__hero                  /* Hero section */
├── archive-gallery__hero-bg           /* Background image */
├── archive-gallery__hero-overlay      /* Pink-cyan gradient */
├── archive-gallery__orb               /* Floating orb */
│   ├── archive-gallery__orb--1        /* Cyan orb (top-right) */
│   └── archive-gallery__orb--2        /* Pink orb (bottom-left) */
└── archive-gallery__hero-content      /* Centered content */
    ├── archive-gallery__hero-icon     /* Instagram icon circle */
    ├── archive-gallery__hero-title    /* h1: @username */
    ├── archive-gallery__hero-subtitle /* Description */
    └── archive-gallery__hero-cta      /* Follow button */

archive-gallery__grid-section          /* Grid container section */
└── archive-gallery__grid              /* Photo grid */
    ├── archive-gallery__item          /* Single photo tile */
    │   ├── archive-gallery__item-img  /* Square image */
    │   └── archive-gallery__item-overlay  /* Hover stats */
    │       └── archive-gallery__item-stat /* Single stat */
    └── archive-gallery__placeholder   /* Empty grid slot */
```

**Total BEM Classes:** 15

---

## Section Breakdown

### 1. Hero Section

```tsx
<section className="archive-gallery__hero">
  <img
    src="https://images.unsplash.com/photo-1767669673363-6bffdd320e14?..."
    alt=""
    className="archive-gallery__hero-bg"
  />
  <div className="archive-gallery__hero-overlay" aria-hidden="true" />
  <div className="archive-gallery__orb archive-gallery__orb--1 funky-animate-float" />
  <div className="archive-gallery__orb archive-gallery__orb--2 funky-animate-float" />
  
  <Container>
    <div className="archive-gallery__hero-content">
      
      {/* Glassmorphism Instagram Icon */}
      <div className="archive-gallery__hero-icon">
        <Instagram size={36} aria-hidden="true" />
      </div>
      
      {/* Instagram Handle */}
      <h1 className="archive-gallery__hero-title">@lightspeedwpdev</h1>
      
      {/* Description */}
      <p className="archive-gallery__hero-subtitle">
        Behind the scenes, office vibes, and design inspiration from our team.
      </p>
      
      {/* Follow Button */}
      <a
        href="https://www.instagram.com/lightspeedwpdev"
        target="_blank"
        rel="noopener noreferrer"
        className="archive-gallery__hero-cta"
      >
        Follow Us
      </a>
      
    </div>
  </Container>
</section>
```

#### Hero Layout

```css
.archive-gallery__hero {
  position: relative;
  overflow: hidden;
  padding-block: var(--wp--preset--spacing--100);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 767px) {
  .archive-gallery__hero {
    padding-block: var(--wp--preset--spacing--80);
  }
}
```

**Centered Content:**
```css
.archive-gallery__hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--wp--preset--spacing--40);
}
```

#### Gradient Overlay

```css
.archive-gallery__hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.75) 0%,      /* Pink */
    rgba(45, 0, 89, 0.85) 50%,       /* Deep purple */
    rgba(0, 255, 255, 0.5) 100%      /* Cyan */
  );
}
```

**Effect:** Vibrant pink-to-cyan gradient creates Instagram-like colorful vibe.

#### Glassmorphism Icon

```tsx
<div className="archive-gallery__hero-icon">
  <Instagram size={36} aria-hidden="true" />
</div>
```

**Styling:**
```css
.archive-gallery__hero-icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: white;
}
```

**Effect:** Large circular frosted glass icon container.

#### White CTA Button

```css
.archive-gallery__hero-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--50);
  border-radius: 999px;
  font-weight: var(--wp--preset--font-weight--semibold);
  text-decoration: none;
  background: white;
  color: #2d0059;  /* Dark purple text */
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.archive-gallery__hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(255, 255, 255, 0.25);
}
```

**Design Choice:** White button on colorful background (reversed from typical gradient buttons).

#### Floating Orbs

**Cyan Orb (Top-Right):**
```css
.archive-gallery__orb--1 {
  width: 300px;
  height: 300px;
  background: var(--wp--preset--color--neon-cyan);
  opacity: 0.15;
  top: 5%;
  right: -8%;
  animation: funky-float 6s ease-in-out infinite;
}
```

**Pink Orb (Bottom-Left):**
```css
.archive-gallery__orb--2 {
  width: 220px;
  height: 220px;
  background: var(--wp--preset--color--neon-pink);
  opacity: 0.12;
  bottom: 10%;
  left: -6%;
  animation: funky-float 6s ease-in-out infinite;
  animation-delay: -3s;
}
```

---

### 2. Gallery Grid Section

```tsx
<section className="archive-gallery__grid-section">
  <Container>
    <div className="archive-gallery__grid">
      
      {/* Gallery Posts */}
      {galleryPosts.map((post: WPPost) => (
        <Link key={post.id} to={post.link} className="archive-gallery__item">
          <ImageWithFallback
            src={`https://picsum.photos/seed/gallery-${post.id}/600/600`}
            alt={post.title.rendered}
            className="archive-gallery__item-img"
          />
          <div className="archive-gallery__item-overlay" aria-hidden="true">
            <span className="archive-gallery__item-stat">
              <Heart size={20} /> 124
            </span>
            <span className="archive-gallery__item-stat">
              <MessageCircle size={20} /> 18
            </span>
          </div>
        </Link>
      ))}
      
      {/* Placeholder Tiles */}
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={`placeholder-${i}`} className="archive-gallery__placeholder">
          <Instagram size={32} aria-hidden="true" />
        </div>
      ))}
      
    </div>
  </Container>
</section>
```

#### Grid Layout (Instagram-Style)

```css
.archive-gallery__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;  /* Very tight gap like Instagram */
}

@media (min-width: 640px) {
  .archive-gallery__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Mobile:** 2 columns (tight grid)  
**Desktop:** 3 columns

**Note:** No 1-column mobile layout (Instagram maintains grid even on small screens).

#### Gallery Item

```css
.archive-gallery__item {
  position: relative;
  aspect-ratio: 1;  /* Perfect square */
  overflow: hidden;
  cursor: pointer;
  background: var(--wp--preset--color--surface);
  border: 1px solid transparent;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.dark .archive-gallery__item {
  background: rgba(255, 255, 255, 0.03);
}
```

#### Neon Border Glow (Hover)

```css
.archive-gallery__item:hover {
  border-color: var(--wp--preset--color--neon-pink);
  box-shadow: 0 0 24px rgba(255, 0, 255, 0.12);
}

.dark .archive-gallery__item:hover {
  box-shadow: 0 0 24px rgba(255, 0, 255, 0.25);  /* Brighter in dark mode */
}
```

**Effect:** Pink neon border + glow appears on hover.

#### Image Zoom

```css
.archive-gallery__item-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.archive-gallery__item:hover .archive-gallery__item-img {
  transform: scale(1.06);
}
```

**Effect:** Subtle zoom on hover (slower transition than other templates).

#### Engagement Overlay (Instagram-Style)

```css
.archive-gallery__item-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--wp--preset--spacing--40);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
  z-index: 1;
}

.archive-gallery__item:hover .archive-gallery__item-overlay {
  opacity: 1;
  background: rgba(3, 2, 19, 0.45);  /* Semi-transparent dark overlay */
}
```

**Stats:**
```css
.archive-gallery__item-stat {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  font-weight: var(--wp--preset--font-weight--bold);
  font-size: var(--wp--preset--font-size--200);  /* 1rem */
  color: white;
}
```

**Effect:** Shows likes + comments count on hover (Instagram-style interaction).

---

### 3. Placeholder Tiles

```tsx
{[1, 2, 3, 4, 5, 6].map((i) => (
  <div key={`placeholder-${i}`} className="archive-gallery__placeholder">
    <Instagram size={32} aria-hidden="true" />
  </div>
))}
```

**Styling:**
```css
.archive-gallery__placeholder {
  aspect-ratio: 1;
  background: var(--wp--preset--color--surface);
  border: 1px dashed var(--wp--preset--color--border-light);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--wp--preset--color--text-secondary);
  opacity: 0.3;
}

.dark .archive-gallery__placeholder {
  background: rgba(255, 255, 255, 0.02);
  border-color: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.2);
}
```

**Purpose:** Fills empty grid slots to maintain Instagram-like grid structure when there are few posts.

---

## Responsive Behavior

### Mobile (< 640px)

**Grid:** 2 columns (Instagram mobile pattern)  
**Gap:** 4px (very tight)  
**Hero:** Full padding  
**Orbs:** Reduced opacity

### Desktop (≥ 640px)

**Grid:** 3 columns  
**Gap:** 4px (maintained)  
**Hero:** Full padding

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Hero overlay | Pink → Cyan gradient | Same (already vibrant) |
| CTA button | White bg | Same (white stands out) |
| Grid item bg | `--surface` | `rgba(255,255,255,0.03)` |
| Grid item glow | Pink 0.12 opacity | Pink 0.25 opacity (brighter) |
| Placeholder | Light gray | Very subtle white |
| Engagement overlay | Dark overlay | Same |

---

## Accessibility

### ARIA Attributes

**Decorative Elements:**
```tsx
<div className="archive-gallery__hero-icon">
  <Instagram size={36} aria-hidden="true" />
</div>

<div className="archive-gallery__item-overlay" aria-hidden="true">
  {/* Stats are decorative, actual content in title */}
</div>

<div className="archive-gallery__placeholder">
  <Instagram size={32} aria-hidden="true" />
</div>
```

**External Link:**
```tsx
<a
  href="https://www.instagram.com/lightspeedwpdev"
  target="_blank"
  rel="noopener noreferrer"
  className="archive-gallery__hero-cta"
>
  Follow Us
</a>
```

### Semantic HTML

```tsx
<section className="archive-gallery__hero">
  <h1 className="archive-gallery__hero-title">@lightspeedwpdev</h1>
</section>

<Link to={post.link} className="archive-gallery__item">
  <ImageWithFallback alt={post.title.rendered} />
</Link>
```

**Note:** Engagement stats are decorative (aria-hidden). Real engagement data would be in post meta.

### Keyboard Navigation

- ✅ Tab to Instagram CTA
- ✅ Tab through gallery items
- ✅ Enter/Space activates links
- ✅ Focus visible on all items

---

## Data Integration

### Post Format Filtering

```tsx
const galleryPosts = (posts || []).filter((post) => post.format === 'gallery');
```

**Expected Data:**
- `post.format` must be `'gallery'`
- `post.format_data?.gallery_images` for image URLs (optional)
- `post.format_data?.gallery_count` for image count (optional)
- `post.title.rendered` for image title
- `post.link` for gallery permalink

### Engagement Stats

**Current:** Hardcoded mock data (124 likes, 18 comments)

**Production:**
```tsx
<span className="archive-gallery__item-stat">
  <Heart size={20} /> {post.format_data?.likes_count || 0}
</span>
<span className="archive-gallery__item-stat">
  <MessageCircle size={20} /> {post.format_data?.comments_count || 0}
</span>
```

---

## Usage

### Import and Render

```tsx
import { ArchiveGallery } from './templates/blog/ArchiveGallery';

// In router
{
  path: 'blog/format/gallery',
  element: <ArchiveGallery />
}
```

### Routes

- `/blog/format/gallery` — Gallery post archive
- Alternative: `/gallery` or `/photos` (aliases)

### SEO Considerations

**Title:** "@lightspeedwpdev | [Site Name]"  
**Meta Description:** "Behind the scenes, office vibes, and design inspiration from our team."  
**Schema Markup:** `ImageGallery` schema

---

## Related Components

- **ArchiveAudio** (`/src/app/components/templates/blog/ArchiveAudio.tsx`) — Podcast archive
- **ArchiveVideo** (`/src/app/components/templates/blog/ArchiveVideo.tsx`) — Video archive
- **TemplateSingleGallery** — Single gallery post template

---

## Common Issues

### Issue: No images showing in grid

**Cause:** No posts have `format === 'gallery'`

**Solution:** Ensure mock data includes gallery posts:
```tsx
{
  id: 1,
  format: 'gallery',
  format_data: {
    gallery_images: ['url1', 'url2', 'url3'],
    gallery_count: 3,
  },
}
```

### Issue: Grid has large gaps (not Instagram-style)

**Cause:** Wrong gap value in CSS

**Solution:** Verify gap is 4px:
```css
.archive-gallery__grid {
  gap: 4px;  /* NOT var(--spacing-*) */
}
```

### Issue: Engagement stats always visible

**Cause:** Missing hover state CSS

**Solution:** Verify overlay starts hidden:
```css
.archive-gallery__item-overlay {
  opacity: 0;
}
```

### Issue: Images not square

**Cause:** Missing aspect-ratio

**Solution:** Ensure aspect-ratio is set:
```css
.archive-gallery__item {
  aspect-ratio: 1;
}
```

---

## Testing Checklist

### Visual Testing
- [ ] Hero gradient displays correctly
- [ ] Instagram icon in circle
- [ ] Grid has tight 4px gaps
- [ ] All images are perfect squares
- [ ] Placeholder tiles visible
- [ ] 2 columns on mobile, 3 on desktop

### Interaction Testing
- [ ] Instagram CTA opens new tab
- [ ] Gallery items navigate to post
- [ ] Engagement overlay appears on hover
- [ ] Pink glow appears on hover
- [ ] Image zooms on hover

### Animation Testing
- [ ] Image zoom smooth (0.5s)
- [ ] Overlay fade smooth
- [ ] Border glow smooth
- [ ] Orbs float

### Responsive Testing
- [ ] Mobile: 2 columns maintained
- [ ] Desktop: 3 columns
- [ ] Hero centered on all sizes
- [ ] Tight gaps maintained

### Dark Mode Testing
- [ ] Hero gradient vibrant
- [ ] White button visible
- [ ] Grid items visible
- [ ] Glow brighter in dark mode
- [ ] Placeholders subtle

### Accessibility Testing
- [ ] Instagram link has noopener
- [ ] Images have alt text
- [ ] Gallery items keyboard accessible
- [ ] Focus visible
- [ ] Decorative elements hidden from SR

---

## Future Enhancements

### 1. Real Instagram Integration

Fetch real Instagram posts via API:
```tsx
const fetchInstagram = async () => {
  const response = await fetch('/api/instagram/feed');
  const data = await response.json();
  return data.posts;
};
```

### 2. Infinite Scroll

Add lazy loading:
```tsx
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

const { items, loadMore, hasMore } = useInfiniteScroll(galleryPosts);
```

### 3. Lightbox Gallery

Open full-size images:
```tsx
import { Lightbox } from '@/components/blocks/Lightbox';

<Lightbox images={post.format_data?.gallery_images} />
```

### 4. Filter by Tag

Add hashtag filtering:
```tsx
const [tag, setTag] = useState('all');
const filteredPosts = tag === 'all' 
  ? galleryPosts 
  : galleryPosts.filter(p => p.tags.includes(tag));
```

### 5. Save to Collection

Add save functionality:
```tsx
<button 
  onClick={() => saveToCollection(post.id)}
  className="archive-gallery__save"
>
  <Bookmark size={20} />
</button>
```

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After Instagram integration analysis
