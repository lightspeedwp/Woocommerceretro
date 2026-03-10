# ArchiveVideo Template

**Component Type:** Template (Blog Archive / Video)  
**Location:** `/src/app/components/templates/blog/ArchiveVideo.tsx`  
**CSS:** `/src/styles/sections/blog-format-archives-funky.css`  
**Route:** `/blog/format/video`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Cyan `#00ffff`

---

## Overview

ArchiveVideo is a YouTube-style video archive featuring cinema gradient hero with YouTube subscribe CTA, and a grid of video cards with neon play overlays, duration badges, and spring hover animations.

**WordPress Mapping:** WordPress Video Post Format Archive / YouTube Channel Landing Page  
**Post Format:** `video`  
**Dark Mode:** ✅ Complete support  
**Reduced Motion:** ✅ Floating orbs animate (can be disabled)

---

## Key Features

### Visual Treatments

**1. Hero Section:**
- Cinema background image
- Dark gradient overlay (similar to ArchiveAudio)
- YouTube icon + channel name
- Subscribe CTA button
- Floating orbs (pink/cyan)

**2. Video Cards:**
- YouTube-style thumbnail (16:9)
- Large play icon overlay (48px)
- Duration badge (bottom-right)
- Video title + meta info
- Spring hover lift animation

**3. Funky Elements:**
- Gradient CTA button
- Neon play icon
- Duration badge with clock icon
- Floating orbs with blur(80px)

---

## Component Structure

### Data Filtering

```tsx
const videoPosts = (posts || []).filter((post) => post.format === 'video');
```

**Filter Logic:** Only shows posts with `format === 'video'`

### WPPost Type (Video Format)

```tsx
interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  format: 'standard' | 'audio' | 'video' | 'gallery' | 'aside';
  format_data?: {
    video_duration?: string;     // "10:45"
    video_url?: string;           // YouTube URL
    video_platform?: string;      // "YouTube" | "Vimeo"
  };
  categories: string[];
}
```

### JSX Hierarchy

```tsx
<Layout>
  <div className="archive-video">
    
    {/* 1. Hero Section */}
    <section className="archive-video__hero">
      <img className="archive-video__hero-bg" />
      <div className="archive-video__hero-overlay" />
      <div className="archive-video__orb--1" />
      <div className="archive-video__orb--2" />
      <Container>
        <div className="archive-video__hero-content">
          <div className="archive-video__hero-text">
            <div className="archive-video__hero-badge">
              <Youtube className="archive-video__hero-icon" />
              <h1 className="archive-video__hero-title">...</h1>
            </div>
            <p className="archive-video__hero-subtitle">...</p>
          </div>
          <a className="archive-video__hero-cta">...</a>
        </div>
      </Container>
    </section>
    
    {/* 2. Divider */}
    <div className="archive-video__divider" />
    
    {/* 3. Grid Section */}
    <section className="archive-video__grid-section">
      <Container>
        <div className="archive-video__grid">
          {videoPosts.map(post => (
            <article className="archive-video__card">
              <Link className="archive-video__card-link">
                <div className="archive-video__thumbnail">...</div>
              </Link>
              <div className="archive-video__card-info">...</div>
            </article>
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
archive-video                          /* Container + color identity */

archive-video__hero                    /* Hero section */
├── archive-video__hero-bg             /* Background image */
├── archive-video__hero-overlay        /* Dark gradient overlay */
├── archive-video__orb                 /* Floating orb */
│   ├── archive-video__orb--1          /* Pink orb (top-right) */
│   └── archive-video__orb--2          /* Cyan orb (bottom-left) */
└── archive-video__hero-content        /* Content wrapper */
    ├── archive-video__hero-text       /* Text container */
    │   ├── archive-video__hero-badge  /* YouTube icon + title */
    │   │   ├── archive-video__hero-icon  /* YouTube icon */
    │   │   └── archive-video__hero-title /* h1: Channel name */
    │   └── archive-video__hero-subtitle  /* Description */
    └── archive-video__hero-cta        /* Subscribe button */

archive-video__divider                 /* Visual separator */

archive-video__grid-section            /* Grid container section */
└── archive-video__grid                /* Video cards grid */

archive-video__card                    /* Single video card */
├── archive-video__card-link           /* Thumbnail link */
│   └── archive-video__thumbnail       /* Thumbnail container */
│       ├── archive-video__thumbnail-img  /* Video thumbnail */
│       ├── archive-video__play-icon   /* Play button overlay */
│       └── archive-video__duration    /* Duration badge */
└── archive-video__card-info           /* Video info */
    ├── archive-video__card-title      /* h3: Video title */
    ├── archive-video__card-meta       /* Date + categories */
    │   └── archive-video__card-meta-dot  /* Separator dot */
    └── archive-video__card-excerpt    /* Video description */
```

**Total BEM Classes:** 21

---

## Section Breakdown

### 1. Hero Section

**Similar to ArchiveAudio hero, with key differences:**

```tsx
<section className="archive-video__hero">
  <img
    src="https://images.unsplash.com/photo-1705107958681-db6d591b57cb?..."
    alt=""
    className="archive-video__hero-bg"
  />
  <div className="archive-video__hero-overlay" aria-hidden="true" />
  <div className="archive-video__orb archive-video__orb--1 funky-animate-float" />
  <div className="archive-video__orb archive-video__orb--2 funky-animate-float" />
  
  <Container>
    <div className="archive-video__hero-content">
      
      {/* Text Section */}
      <div className="archive-video__hero-text">
        <div className="archive-video__hero-badge">
          <Youtube className="archive-video__hero-icon" size={32} />
          <h1 className="archive-video__hero-title">LightSpeed WP Channel</h1>
        </div>
        <p className="archive-video__hero-subtitle">
          Tutorials, guides, and deep dives into modern WordPress development.
        </p>
      </div>
      
      {/* CTA Button */}
      <a
        href="https://www.youtube.com/@lightspeedwp/videos"
        target="_blank"
        rel="noopener noreferrer"
        className="archive-video__hero-cta"
      >
        Subscribe on YouTube
      </a>
      
    </div>
  </Container>
</section>
```

#### Unique Features vs ArchiveAudio

**YouTube Badge (Icon + Title):**
```tsx
<div className="archive-video__hero-badge">
  <Youtube className="archive-video__hero-icon" size={32} />
  <h1 className="archive-video__hero-title">LightSpeed WP Channel</h1>
</div>
```

**Gradient CTA Button:**
```tsx
<a
  href="https://www.youtube.com/@lightspeedwp/videos"
  target="_blank"
  rel="noopener noreferrer"
  className="archive-video__hero-cta"
>
  Subscribe on YouTube
</a>
```

**CTA Styling:**
```css
.archive-video__hero-cta {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--30) var(--wp--preset--spacing--50);
  border-radius: var(--wp--preset--border-radius--md);
  font-weight: var(--wp--preset--font-weight--semibold);
  background: linear-gradient(135deg, 
    var(--wp--preset--color--neon-pink), 
    var(--wp--preset--color--neon-cyan)
  );
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.archive-video__hero-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(255, 0, 255, 0.3);
}
```

**Hero Content Layout:**
```css
.archive-video__hero-content {
  position: relative;
  z-index: 2;
  padding-block: var(--wp--preset--spacing--80);
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--50);
  align-items: flex-start;
}

@media (min-width: 768px) {
  .archive-video__hero-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}
```

**Mobile:** Vertical stack (text above button)  
**Desktop:** Horizontal layout (text left, button right)

---

### 2. Video Grid Section

**Identical structure to ArchiveAudio grid section.**

**Grid Layout:**
```css
.archive-video__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--50);
}

@media (min-width: 640px) {
  .archive-video__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .archive-video__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

---

### 3. Video Card

```tsx
<article className="archive-video__card">
  
  {/* Thumbnail Link */}
  <Link to={post.link} className="archive-video__card-link">
    <div className="archive-video__thumbnail">
      <ImageWithFallback
        src={`https://picsum.photos/seed/video-${post.id}/640/360`}
        alt={post.title.rendered}
        className="archive-video__thumbnail-img"
      />
      
      {/* Play Icon Overlay */}
      <div className="archive-video__play-icon" aria-hidden="true">
        <Play size={48} />
      </div>
      
      {/* Duration Badge */}
      <span className="archive-video__duration">
        <Clock size={10} aria-hidden="true" />
        {post.format_data?.video_duration || '10:00'}
      </span>
    </div>
  </Link>
  
  {/* Video Info */}
  <div className="archive-video__card-info">
    <Link to={post.link}>
      <h3 className="archive-video__card-title">
        {post.title.rendered}
      </h3>
    </Link>
    
    <div className="archive-video__card-meta">
      <span>{new Date(post.date).toLocaleDateString()}</span>
      <span className="archive-video__card-meta-dot">&bull;</span>
      <span>{post.categories.length} Categories</span>
    </div>
    
    <p
      className="archive-video__card-excerpt"
      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
    />
  </div>
  
</article>
```

#### Thumbnail Container

```css
.archive-video__thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;  /* YouTube standard */
  overflow: hidden;
  border-radius: var(--wp--preset--border-radius--md);
  background: var(--wp--preset--color--surface);
}

.archive-video__thumbnail-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.archive-video__card:hover .archive-video__thumbnail-img {
  transform: scale(1.05);  /* Subtle zoom on hover */
}
```

#### Play Icon Overlay

```css
.archive-video__play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.5));
  opacity: 0.9;
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 2;
}

.archive-video__card:hover .archive-video__play-icon {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.1);
  color: var(--wp--preset--color--neon-cyan);
  filter: drop-shadow(0 0 16px rgba(0, 255, 255, 0.6));
}
```

**Effect:** White play icon becomes neon cyan with glow on hover.

#### Duration Badge

```css
.archive-video__duration {
  position: absolute;
  bottom: var(--wp--preset--spacing--20);
  right: var(--wp--preset--spacing--20);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: var(--wp--preset--border-radius--sm);
  font-size: 11px;
  font-weight: var(--wp--preset--font-weight--semibold);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  z-index: 2;
}
```

**Data Source:** `post.format_data?.video_duration || '10:00'`

#### Card Info

```css
.archive-video__card-info {
  padding: var(--wp--preset--spacing--40);
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--20);
}

.archive-video__card-title {
  margin: 0;
  color: var(--wp--preset--color--foreground);
  line-height: var(--wp--preset--line-height--snug);
  transition: color 0.2s ease;
}

.archive-video__card-title:hover {
  color: var(--wp--preset--color--neon-pink);
}

.archive-video__card-meta {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  font-size: var(--wp--preset--font-size--100);
  color: var(--wp--preset--color--text-secondary);
}

.archive-video__card-meta-dot {
  opacity: 0.5;
}

.archive-video__card-excerpt {
  color: var(--wp--preset--color--text-secondary);
  font-size: var(--wp--preset--font-size--200);
  line-height: var(--wp--preset--line-height--relaxed);
}
```

#### Spring Hover Animation

```css
.archive-video__card {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),  /* Spring easing */
              box-shadow 0.4s ease;
}

.archive-video__card:hover {
  transform: translateY(-6px);  /* Stronger lift than audio cards */
  box-shadow: 0 12px 40px rgba(255, 0, 255, 0.15);
}
```

**Effect:** "Bouncy" lift animation on hover (spring easing curve).

---

## Responsive Behavior

### Mobile (< 640px)

**Grid:** 1 column  
**Hero:** Vertical layout (text above button)  
**Orbs:** Reduced opacity

### Tablet (640px - 1023px)

**Grid:** 2 columns  
**Hero:** Horizontal layout (text left, button right)

### Desktop (≥ 1024px)

**Grid:** 3 columns

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| CTA button | Pink → Cyan gradient | Same |
| Play icon (hover) | Neon cyan | Same |
| Duration badge | Black 80% opacity | Same |
| Card background | `--surface` | `--surface` |
| Card border | `--border` | `rgba(255,255,255,0.08)` |

**Note:** Video format uses same dark color scheme as audio format.

---

## Accessibility

### ARIA Attributes

**External Link (YouTube CTA):**
```tsx
<a
  href="https://www.youtube.com/@lightspeedwp/videos"
  target="_blank"
  rel="noopener noreferrer"  /* Security best practice */
  className="archive-video__hero-cta"
>
  Subscribe on YouTube
</a>
```

**Decorative Elements:**
```tsx
<div className="archive-video__play-icon" aria-hidden="true">
<span className="archive-video__duration">...</span>
<span className="archive-video__card-meta-dot" aria-hidden="true">&bull;</span>
```

### Semantic HTML

```tsx
<article className="archive-video__card">
  <h3 className="archive-video__card-title">Video Title</h3>
  <time dateTime={post.date}>{...}</time>
</article>
```

### Keyboard Navigation

- ✅ Tab to video thumbnail links
- ✅ Tab to video title links
- ✅ Tab to YouTube CTA button
- ✅ Enter/Space activates links
- ✅ Focus visible on all links

---

## Data Integration

### Post Format Filtering

```tsx
const videoPosts = (posts || []).filter((post) => post.format === 'video');
```

**Expected Data:**
- `post.format` must be `'video'`
- `post.format_data?.video_duration` for duration badge
- `post.format_data?.video_url` for video link (optional)
- `post.categories[]` for category count
- `post.title.rendered` for video title
- `post.excerpt.rendered` for description
- `post.date` for publish date
- `post.link` for video permalink

---

## Usage

### Import and Render

```tsx
import { ArchiveVideo } from './templates/blog/ArchiveVideo';

// In router
{
  path: 'blog/format/video',
  element: <ArchiveVideo />
}
```

### Routes

- `/blog/format/video` — Video post archive
- Alternative: `/videos` (alias)

### SEO Considerations

**Title:** "LightSpeed WP Channel | [Site Name]"  
**Meta Description:** "Tutorials, guides, and deep dives into modern WordPress development."  
**Schema Markup:** `VideoObject` schema for each video

---

## Related Components

- **ArchiveAudio** (`/src/app/components/templates/blog/ArchiveAudio.tsx`) — Similar grid pattern for audio posts
- **ArchiveGallery** (`/src/app/components/templates/blog/ArchiveGallery.tsx`) — Gallery post archive
- **TemplateSingleVideo** — Single video post template

---

## Common Issues

### Issue: No videos showing in grid

**Cause:** No posts have `format === 'video'`

**Solution:** Ensure mock data includes video posts:
```tsx
{
  id: 1,
  format: 'video',
  format_data: {
    video_duration: '12:34',
    video_url: 'https://youtube.com/watch?v=...',
  },
}
```

### Issue: Duration badge shows "10:00" for all videos

**Cause:** Missing `format_data.video_duration`

**Solution:** Add duration to post data:
```tsx
format_data: {
  video_duration: '15:42',
}
```

### Issue: Play icon not changing color on hover

**Cause:** Missing hover state CSS

**Solution:** Verify CSS includes:
```css
.archive-video__card:hover .archive-video__play-icon {
  color: var(--wp--preset--color--neon-cyan);
}
```

---

## Testing Checklist

### Visual Testing
- [ ] Hero background image displays
- [ ] YouTube CTA button visible
- [ ] Video cards display correctly
- [ ] Play icons centered
- [ ] Duration badges visible
- [ ] Grid responsive layout

### Interaction Testing
- [ ] Video thumbnail links navigate
- [ ] Video title links navigate
- [ ] YouTube CTA opens new tab
- [ ] Play icon glows on hover
- [ ] Card lifts on hover
- [ ] Thumbnail zooms on hover

### Animation Testing
- [ ] Spring hover animation smooth
- [ ] Play icon transitions smooth
- [ ] Thumbnail zoom smooth
- [ ] CTA button lift on hover

### Responsive Testing
- [ ] Mobile: 1 column, vertical hero
- [ ] Tablet: 2 columns, horizontal hero
- [ ] Desktop: 3 columns

### Dark Mode Testing
- [ ] Hero still dark
- [ ] CTA button gradient works
- [ ] Cards visible
- [ ] Text readable

### Accessibility Testing
- [ ] YouTube link has rel="noopener noreferrer"
- [ ] Video titles are headings
- [ ] Links keyboard accessible
- [ ] Focus visible

---

## Future Enhancements

### 1. Embedded Player

Add inline video player:
```tsx
<iframe
  src={post.format_data?.video_url}
  title={post.title.rendered}
  className="archive-video__player"
/>
```

### 2. View Count

Display video views:
```tsx
<span className="archive-video__views">
  {post.format_data?.video_views} views
</span>
```

### 3. Playlist Support

Group videos by playlist:
```tsx
const playlists = groupBy(videoPosts, 'format_data.playlist_id');
```

### 4. Platform Badge

Show video platform (YouTube/Vimeo):
```tsx
<span className="archive-video__platform">
  {post.format_data?.video_platform}
</span>
```

### 5. Lazy Load Thumbnails

Improve performance:
```tsx
<ImageWithFallback
  loading="lazy"
  src={...}
/>
```

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After video engagement analytics
