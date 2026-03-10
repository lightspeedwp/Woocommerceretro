# ArchiveAudio Template

**Component Type:** Template (Blog Archive / Podcast)  
**Location:** `/src/app/components/templates/blog/ArchiveAudio.tsx`  
**CSS:** `/src/styles/sections/blog-format-archives-funky.css`  
**Route:** `/blog/format/audio`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Cyan `#00ffff`

---

## Overview

ArchiveAudio is a podcast/audio post archive featuring a dark gradient hero with background image, glassmorphism badge, and a grid of podcast episode cards with neon play overlays and gradient hover glows.

**WordPress Mapping:** WordPress Audio Post Format Archive / Podcast Landing Page  
**Post Format:** `audio`  
**Dark Mode:** ✅ Complete support  
**Reduced Motion:** ✅ Floating orbs animate (can be disabled)

---

## Key Features

### Visual Treatments

**1. Hero Section:**
- Full-width background image
- Dark gradient overlay (purple → dark → cyan tint)
- Floating blur orbs (pink/cyan)
- Glassmorphism badge
- White text on dark background

**2. Podcast Cards:**
- Gradient glow border on hover (pink → cyan)
- Episode thumbnail with overlay
- Episode number badge (gradient)
- Neon play button overlay
- Listen now link

**3. Funky Elements:**
- Floating orbs with blur(80px)
- Gradient hover glow
- Glassmorphism badge
- Neon play overlay
- Episode badges

---

## Component Structure

### Data Filtering

```tsx
const audioPosts = (posts || []).filter((post) => post.format === 'audio');
```

**Filter Logic:** Only shows posts with `format === 'audio'`

### WPPost Type (Audio Format)

```tsx
interface WPPost {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  link: string;
  format: 'standard' | 'audio' | 'video' | 'gallery' | 'aside';
  format_data?: {
    podcast_episode_number?: number;
    podcast_duration?: string;
    podcast_host?: string;
    // ... other audio-specific fields
  };
}
```

### JSX Hierarchy

```tsx
<Layout>
  <div className="archive-audio">
    
    {/* 1. Hero Section */}
    <section className="archive-audio__hero">
      <img className="archive-audio__hero-bg" />
      <div className="archive-audio__hero-overlay" />
      <div className="archive-audio__orb--1" />
      <div className="archive-audio__orb--2" />
      <Container>
        <div className="archive-audio__hero-content">
          <span className="archive-audio__hero-badge">...</span>
          <h1 className="archive-audio__hero-title">...</h1>
          <p className="archive-audio__hero-subtitle">...</p>
        </div>
      </Container>
    </section>
    
    {/* 2. Divider */}
    <div className="archive-audio__divider" />
    
    {/* 3. Grid Section */}
    <section className="archive-audio__grid-section">
      <Container>
        <div className="archive-audio__grid">
          {audioPosts.map(post => (
            <article className="archive-audio__card">
              <div className="archive-audio__card-glow" />
              <div className="archive-audio__card-inner">
                <div className="archive-audio__thumbnail">...</div>
                <div className="archive-audio__card-body">...</div>
              </div>
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
archive-audio                          /* Container + color identity */

archive-audio__hero                    /* Hero section */
├── archive-audio__hero-bg             /* Background image */
├── archive-audio__hero-overlay        /* Dark gradient overlay */
├── archive-audio__orb                 /* Floating orb */
│   ├── archive-audio__orb--1          /* Pink orb (top-right) */
│   └── archive-audio__orb--2          /* Cyan orb (bottom-left) */
└── archive-audio__hero-content        /* Text content */
    ├── archive-audio__hero-badge      /* Glassmorphism badge */
    ├── archive-audio__hero-title      /* h1 heading */
    └── archive-audio__hero-subtitle   /* Subtitle */

archive-audio__divider                 /* Visual separator */

archive-audio__grid-section            /* Grid container section */
└── archive-audio__grid                /* Podcast cards grid */

archive-audio__card                    /* Single podcast card */
├── archive-audio__card-glow           /* Gradient border glow */
└── archive-audio__card-inner          /* Card content wrapper */
    ├── archive-audio__thumbnail       /* Episode thumbnail */
    │   ├── archive-audio__thumbnail-img /* Image element */
    │   ├── archive-audio__thumbnail-overlay /* Dark overlay */
    │   ├── archive-audio__thumbnail-meta /* Episode info */
    │   │   ├── archive-audio__episode-badge /* "EP #" badge */
    │   │   └── archive-audio__episode-date  /* Date badge */
    │   └── archive-audio__play-overlay /* Play button layer */
    │       └── archive-audio__play-circle /* Play icon */
    └── archive-audio__card-body       /* Card text content */
        ├── archive-audio__card-title  /* h3: Episode title */
        ├── archive-audio__card-excerpt /* Episode description */
        └── archive-audio__card-footer /* Author + link */
            ├── archive-audio__card-author /* Author name */
            └── archive-audio__card-link   /* "Listen Now →" */
```

**Total BEM Classes:** 24

---

## Section Breakdown

### 1. Hero Section

```tsx
<section className="archive-audio__hero">
  <img
    src="https://images.unsplash.com/photo-1648522168698-537da0654bb9?..."
    alt=""
    className="archive-audio__hero-bg"
  />
  <div className="archive-audio__hero-overlay" aria-hidden="true" />
  <div className="archive-audio__orb archive-audio__orb--1 funky-animate-float" aria-hidden="true" />
  <div className="archive-audio__orb archive-audio__orb--2 funky-animate-float" aria-hidden="true" />
  
  <Container>
    <div className="archive-audio__hero-content">
      <span className="archive-audio__hero-badge">
        <Mic size={14} aria-hidden="true" />
        Podcast
      </span>
      <h1 className="archive-audio__hero-title">Open Channels Podcast</h1>
      <p className="archive-audio__hero-subtitle">
        Conversations about high-performance WordPress, headless architecture, 
        and the future of the web.
      </p>
    </div>
  </Container>
</section>
```

#### Background Image

```css
.archive-audio__hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
```

**Image:** Dark moody podcast studio photo (Unsplash)

#### Gradient Overlay

```css
.archive-audio__hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    160deg,
    rgba(45, 0, 89, 0.88) 0%,      /* Deep purple */
    rgba(3, 2, 19, 0.92) 50%,       /* Almost black */
    rgba(0, 255, 255, 0.1) 100%     /* Cyan tint */
  );
}
```

**Effect:** Creates dark moody atmosphere while allowing background image to show through subtly.

#### Floating Orbs

```tsx
<div className="archive-audio__orb archive-audio__orb--1 funky-animate-float" />
<div className="archive-audio__orb archive-audio__orb--2 funky-animate-float" />
```

**Pink Orb (Top-Right):**
```css
.archive-audio__orb--1 {
  width: 280px;
  height: 280px;
  background: var(--wp--preset--color--neon-pink);
  opacity: 0.15;
  top: 8%;
  right: -6%;
  animation: funky-float 6s ease-in-out infinite;
}
```

**Cyan Orb (Bottom-Left):**
```css
.archive-audio__orb--2 {
  width: 200px;
  height: 200px;
  background: var(--wp--preset--color--neon-cyan);
  opacity: 0.12;
  bottom: 12%;
  left: -4%;
  animation: funky-float 6s ease-in-out infinite;
  animation-delay: -3s;
}
```

**Mobile Optimization:**
```css
@media (max-width: 767px) {
  .archive-audio__orb {
    opacity: 0.06;  /* Reduced opacity on mobile */
  }
}
```

#### Glassmorphism Badge

```tsx
<span className="archive-audio__hero-badge">
  <Mic size={14} aria-hidden="true" />
  Podcast
</span>
```

**Styling:**
```css
.archive-audio__hero-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  padding: var(--wp--preset--spacing--10) var(--wp--preset--spacing--30);
  border-radius: 999px;
  font-size: var(--wp--preset--font-size--100);  /* 0.75rem */
  font-weight: var(--wp--preset--font-weight--semibold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: white;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin-bottom: var(--wp--preset--spacing--40);
}
```

**Effect:** Semi-transparent pill with frosted glass effect.

#### Hero Text

```css
.archive-audio__hero-title {
  color: white;
  margin: 0 0 var(--wp--preset--spacing--30) 0;
  letter-spacing: var(--wp--preset--letter-spacing--tight);
}

.archive-audio__hero-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--wp--preset--font-size--300);  /* 1.25rem */
  line-height: var(--wp--preset--line-height--relaxed);
  max-width: 34rem;
  margin: 0;
}
```

---

### 2. Divider

```tsx
<div className="archive-audio__divider" aria-hidden="true" />
```

**Purpose:** Visual separator between hero and grid sections.

---

### 3. Podcast Grid Section

```tsx
<section className="archive-audio__grid-section">
  <Container>
    <div className="archive-audio__grid">
      {audioPosts.map((post: WPPost) => (
        <article key={post.id} className="archive-audio__card">
          {/* Card content */}
        </article>
      ))}
    </div>
  </Container>
</section>
```

#### Grid Layout

```css
.archive-audio__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--50);
}

@media (min-width: 640px) {
  .archive-audio__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .archive-audio__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**Responsive:** 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)

---

### 4. Podcast Card

```tsx
<article className="archive-audio__card">
  <div className="archive-audio__card-glow" aria-hidden="true" />
  <div className="archive-audio__card-inner">
    
    {/* Thumbnail */}
    <div className="archive-audio__thumbnail">
      <ImageWithFallback
        src={`https://picsum.photos/seed/audio-${post.id}/600/380`}
        alt={post.title.rendered}
        className="archive-audio__thumbnail-img"
      />
      <div className="archive-audio__thumbnail-overlay" aria-hidden="true" />
      
      {/* Episode Meta */}
      <div className="archive-audio__thumbnail-meta">
        <span className="archive-audio__episode-badge">
          EP {post.format_data?.podcast_episode_number || '#'}
        </span>
        <span className="archive-audio__episode-date">
          <Calendar size={12} aria-hidden="true" />
          {new Date(post.date).toLocaleDateString()}
        </span>
      </div>
      
      {/* Play Overlay */}
      <div className="archive-audio__play-overlay" aria-hidden="true">
        <div className="archive-audio__play-circle">
          <PlayCircle size={36} />
        </div>
      </div>
    </div>
    
    {/* Body */}
    <div className="archive-audio__card-body">
      <Link to={post.link}>
        <h3 className="archive-audio__card-title">
          {post.title.rendered}
        </h3>
      </Link>
      <p
        className="archive-audio__card-excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
      />
      <div className="archive-audio__card-footer">
        <span className="archive-audio__card-author">
          <User size={14} aria-hidden="true" />
          Ash Shaw
        </span>
        <Link to={post.link} className="archive-audio__card-link">
          Listen Now &rarr;
        </Link>
      </div>
    </div>
    
  </div>
</article>
```

#### Gradient Hover Glow

```css
.archive-audio__card {
  position: relative;
  border-radius: var(--wp--preset--border-radius--lg);
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 0.4s ease;
}

.archive-audio__card-glow {
  position: absolute;
  inset: -1px;  /* Extends 1px beyond card */
  border-radius: inherit;
  z-index: 0;
  opacity: 0;
  background: linear-gradient(135deg, 
    var(--wp--preset--color--neon-pink), 
    var(--wp--preset--color--neon-cyan)
  );
  transition: opacity 0.4s ease;
}

.archive-audio__card:hover .archive-audio__card-glow {
  opacity: 1;  /* Reveals gradient glow on hover */
}

.archive-audio__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(255, 0, 255, 0.2);
}
```

**Effect:** Pink-to-cyan gradient border appears on hover with lift animation.

#### Card Inner

```css
.archive-audio__card-inner {
  position: relative;
  z-index: 1;
  background: var(--wp--preset--color--surface);
  border: 1px solid var(--wp--preset--color--border);
  border-radius: inherit;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.dark .archive-audio__card-inner {
  background: var(--wp--preset--color--surface);
  border-color: rgba(255, 255, 255, 0.08);
}
```

#### Thumbnail Overlay

```css
.archive-audio__thumbnail {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  flex-shrink: 0;
}

.archive-audio__thumbnail-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 1;
}
```

**Effect:** Subtle gradient darkening at bottom for text legibility.

#### Episode Badge (Gradient)

```tsx
<span className="archive-audio__episode-badge">
  EP {post.format_data?.podcast_episode_number || '#'}
</span>
```

**Styling:**
```css
.archive-audio__episode-badge {
  display: inline-flex;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: var(--wp--preset--font-weight--semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: linear-gradient(90deg, 
    var(--wp--preset--color--neon-pink), 
    var(--wp--preset--color--neon-cyan)
  );
  color: white;
}
```

**Data Source:** `post.format_data?.podcast_episode_number`

#### Play Overlay (Hover)

```tsx
<div className="archive-audio__play-overlay" aria-hidden="true">
  <div className="archive-audio__play-circle">
    <PlayCircle size={36} />
  </div>
</div>
```

**Styling:**
```css
.archive-audio__play-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(45, 0, 89, 0.8);
  opacity: 0;
  transition: opacity 0.3s ease;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.archive-audio__card:hover .archive-audio__play-overlay {
  opacity: 1;
}

.archive-audio__play-circle {
  color: var(--wp--preset--color--neon-cyan);
  filter: drop-shadow(0 0 12px rgba(0, 255, 255, 0.6));
}
```

**Effect:** Purple overlay with blurred background + glowing cyan play icon appears on hover.

#### Card Body

```css
.archive-audio__card-body {
  padding: var(--wp--preset--spacing--50);
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--30);
  flex: 1;
}

.archive-audio__card-title {
  margin: 0;
  color: var(--wp--preset--color--foreground);
  transition: color 0.2s ease;
}

.archive-audio__card-title:hover {
  color: var(--wp--preset--color--neon-pink);
}

.archive-audio__card-excerpt {
  color: var(--wp--preset--color--text-secondary);
  line-height: var(--wp--preset--line-height--relaxed);
  flex: 1;
}
```

#### Card Footer

```css
.archive-audio__card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--wp--preset--spacing--20);
  margin-top: auto;
}

.archive-audio__card-author {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  font-size: var(--wp--preset--font-size--100);
  color: var(--wp--preset--color--text-secondary);
}

.archive-audio__card-link {
  font-size: var(--wp--preset--font-size--100);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--neon-cyan);
  text-decoration: none;
  transition: color 0.2s ease;
}

.archive-audio__card-link:hover {
  color: var(--wp--preset--color--neon-pink);
}
```

---

## Color System

### Page-Level Variables

```css
.archive-audio {
  --page-primary: #2d0059;    /* Deep purple */
  --page-secondary: #ff00ff;  /* Neon pink */
  --page-accent: #00ffff;     /* Neon cyan */
}
```

**Used in:**
- Hero gradient overlay
- Floating orbs
- Play overlay background
- Episode badge gradient
- Card hover glow

---

## Responsive Behavior

### Mobile (< 640px)

**Grid:** 1 column
```css
.archive-audio__grid {
  grid-template-columns: 1fr;
}
```

**Orbs:** Reduced opacity (0.06 instead of 0.15)

**Hero:** Reduced padding

### Tablet (640px - 1023px)

**Grid:** 2 columns
```css
.archive-audio__grid {
  grid-template-columns: repeat(2, 1fr);
}
```

### Desktop (≥ 1024px)

**Grid:** 3 columns
```css
.archive-audio__grid {
  grid-template-columns: repeat(3, 1fr);
}
```

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Grid section bg | `--background` | `--background` (same) |
| Card inner bg | `--surface` | `--surface` |
| Card border | `--border` | `rgba(255,255,255,0.08)` |
| Episode badge | Pink → Cyan gradient | Same |
| Play overlay | Purple + blur | Same |
| Hero text | White | White (already on dark) |

**Note:** Hero is already dark-themed, so minimal dark mode changes needed.

---

## Accessibility

### ARIA Attributes

**Decorative Elements:**
```tsx
<div className="archive-audio__hero-overlay" aria-hidden="true" />
<div className="archive-audio__orb" aria-hidden="true" />
<div className="archive-audio__play-overlay" aria-hidden="true" />
```

**Background Image:**
```tsx
<img alt="" className="archive-audio__hero-bg" />
```
- Empty `alt` (decorative background)

**Icons:**
```tsx
<Mic size={14} aria-hidden="true" />
<Calendar size={12} aria-hidden="true" />
<User size={14} aria-hidden="true" />
```

### Semantic HTML

```tsx
<article className="archive-audio__card">  {/* Each podcast is <article> */}
  <h3 className="archive-audio__card-title">  {/* Episode title is heading */}
    {post.title.rendered}
  </h3>
  <time dateTime={post.date}>  {/* Semantic date */}
    {new Date(post.date).toLocaleDateString()}
  </time>
</article>
```

### Keyboard Navigation

- ✅ Tab to episode title links
- ✅ Tab to "Listen Now" links
- ✅ Enter/Space activates links
- ✅ Focus visible on all links

---

## Data Integration

### Post Format Filtering

```tsx
const audioPosts = (posts || []).filter((post) => post.format === 'audio');
```

**Expected Data:**
- `post.format` must be `'audio'`
- `post.format_data?.podcast_episode_number` for episode badges
- `post.title.rendered` for episode title
- `post.excerpt.rendered` for description (HTML)
- `post.date` for publish date
- `post.link` for episode permalink

### Empty State

**If no audio posts:**
```tsx
{audioPosts.length === 0 ? (
  <div className="archive-audio__empty">
    <p>No podcast episodes yet. Check back soon!</p>
  </div>
) : (
  <div className="archive-audio__grid">...</div>
)}
```

---

## Usage

### Import and Render

```tsx
import { ArchiveAudio } from './templates/blog/ArchiveAudio';

// In router
{
  path: 'blog/format/audio',
  element: <ArchiveAudio />
}
```

### Routes

- `/blog/format/audio` — Audio post archive
- Alternative: `/podcasts` (alias)

### SEO Considerations

**Title:** "Open Channels Podcast | [Site Name]"  
**Meta Description:** "Conversations about high-performance WordPress, headless architecture, and the future of the web."  
**Schema Markup:** `PodcastSeries` schema with episodes

---

## Related Components

- **ArchiveVideo** (`/src/app/components/templates/blog/ArchiveVideo.tsx`) — Similar grid pattern for video posts
- **ArchiveGallery** (`/src/app/components/templates/blog/ArchiveGallery.tsx`) — Gallery post archive
- **TemplateSingleAudio** — Single audio post template
- **Layout** (`/src/app/components/parts/Layout.tsx`) — Page wrapper
- **Container** (`/src/app/components/common/Container.tsx`) — Max-width constraint

---

## Common Issues

### Issue: No posts showing in grid

**Cause:** No posts have `format === 'audio'`

**Solution:** Ensure mock data includes audio posts:
```tsx
{
  id: 1,
  format: 'audio',  // Must be 'audio'
  format_data: {
    podcast_episode_number: 42,
    podcast_duration: '45:30',
  },
  // ... other fields
}
```

### Issue: Episode badges show "#" instead of numbers

**Cause:** `format_data.podcast_episode_number` missing

**Solution:** Add episode numbers to post data:
```tsx
format_data: {
  podcast_episode_number: 1,
}
```

### Issue: Play overlay not appearing on hover

**Cause:** Missing hover state CSS or z-index conflict

**Solution:** Verify CSS includes:
```css
.archive-audio__card:hover .archive-audio__play-overlay {
  opacity: 1;
}
```

### Issue: Orbs not visible in dark mode

**Cause:** Opacity too low or color blending

**Solution:** Adjust opacity:
```css
.archive-audio__orb {
  opacity: 0.15;  /* Increase from 0.12 */
}
```

---

## Testing Checklist

### Visual Testing
- [ ] Hero background image displays
- [ ] Hero gradient overlay visible
- [ ] Floating orbs visible and blurred
- [ ] Glassmorphism badge semi-transparent
- [ ] Podcast cards display correctly
- [ ] Episode badges have gradient
- [ ] Thumbnails load
- [ ] Grid responsive layout

### Interaction Testing
- [ ] Episode title links navigate
- [ ] "Listen Now" links navigate
- [ ] Play overlay appears on hover
- [ ] Card lifts on hover
- [ ] Gradient glow appears on hover
- [ ] Title changes color on hover

### Animation Testing
- [ ] Orbs float smoothly
- [ ] Card hover transitions smooth
- [ ] Play overlay fades in
- [ ] Gradient glow transitions

### Responsive Testing
- [ ] Mobile: 1 column grid
- [ ] Tablet: 2 column grid
- [ ] Desktop: 3 column grid
- [ ] Orbs reduced on mobile
- [ ] Hero text readable on all sizes

### Dark Mode Testing
- [ ] Hero still dark
- [ ] Cards visible
- [ ] Borders visible
- [ ] Text readable
- [ ] Gradient glows work

### Accessibility Testing
- [ ] Decorative elements hidden from SR
- [ ] Episode titles are headings
- [ ] Links keyboard accessible
- [ ] Focus visible
- [ ] Image alt text appropriate

---

## Future Enhancements

### 1. Audio Player Integration

Add inline audio player:
```tsx
<audio controls src={post.format_data?.podcast_audio_url}>
  Your browser doesn't support audio playback.
</audio>
```

### 2. Filter by Category

Add category filter:
```tsx
const [category, setCategory] = useState('all');
const filteredPosts = category === 'all' 
  ? audioPosts 
  : audioPosts.filter(p => p.categories.includes(category));
```

### 3. Duration Display

Show episode duration:
```tsx
<span className="archive-audio__duration">
  {post.format_data?.podcast_duration}
</span>
```

### 4. Host Information

Display podcast host:
```tsx
<span className="archive-audio__host">
  Hosted by {post.format_data?.podcast_host}
</span>
```

### 5. RSS Feed Link

Add podcast RSS feed:
```tsx
<a href="/feed/podcast" className="archive-audio__rss">
  Subscribe via RSS
</a>
```

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After podcast engagement analytics
