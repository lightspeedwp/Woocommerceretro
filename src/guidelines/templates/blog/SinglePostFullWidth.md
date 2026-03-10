# SinglePostFullWidth Template

**Component Type:** Template (Blog Single Post / Full-Width Layout)  
**Location:** `/src/app/components/templates/SinglePostFullWidth.tsx`  
**CSS:** `/src/styles/sections/blog-funky.css`  
**Route:** `/blog/:slug`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Yellow `#ffff00`

---

## Overview

SinglePostFullWidth is a premium longform reading template optimized for content immersion. Features centered layout, floating share panel, reading progress indicator, and reading time estimate.

**WordPress Mapping:** WordPress Single Post Template (Full-Width, No Sidebar)  
**Dark Mode:** ✅ Complete support with gradient title and neon treatments  
**Reading UX:** ✅ Progress bar, reading time, optimal 65ch line length

---

## Key Features

### Unique Features

**1. Reading Progress Bar:**
- Fixed top of viewport
- Pink → Yellow gradient fill
- Animates based on scroll position
- CSS custom property `--reading-progress`

**2. Floating Share Panel (Desktop):**
- Fixed left side of viewport
- Glassmorphism background
- Social share buttons (Twitter, Facebook, LinkedIn, Copy link)
- Neon hover effects

**3. Reading Time Estimate:**
- Calculated from word count (200 words/min)
- Displayed with clock icon
- Helps set user expectations

**4. Centered Layout:**
- Header: 48rem max-width (centered)
- Content: 65ch optimal reading width
- Featured image: 56rem max-width

### Content Sections

**Header (Centered):**
- Category badges (gradient text)
- Post title (gradient in dark mode)
- Excerpt/lead paragraph
- Post meta (author, date, comments)
- Reading time estimate
- Mobile share buttons

**Featured Image:**
- 21:9 ultra-wide aspect ratio
- Pink neon shadow (dark mode)
- Rounded corners (XL radius)

**Content Area:**
- 65ch maximum width (optimal readability)
- HTML content rendering
- Pink links
- Generous line spacing

**Footer Elements:**
- Tag cloud (neon glow on hover)
- Post navigation (prev/next)
- Related posts (3-column grid)
- Comments section (glassmorphism form)

---

## Component Structure

### State Management

```tsx
const { slug } = useParams<{ slug: string }>();
const [post, setPost] = useState<ResolvedPost | null>(null);
const [loading, setLoading] = useState(true);
const [readingProgress, setReadingProgress] = useState(0);

// Load post data
useEffect(() => {
  setLoading(true);
  window.scrollTo(0, 0);
  const foundPost = getResolvedPostBySlug(slug || '') || null;
  setTimeout(() => {
    setPost(foundPost);
    setLoading(false);
  }, 300);
}, [slug]);

// Track reading progress
useEffect(() => {
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const trackLength = documentHeight - windowHeight;
    const progress = trackLength > 0 ? (scrollTop / trackLength) * 100 : 0;
    setReadingProgress(Math.min(progress, 100));
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Reading Time Calculation

```tsx
const wordCount = post.content.split(/\s+/).length;
const readingTime = Math.ceil(wordCount / 200);  // 200 words per minute
```

### Share URL Generation

```tsx
const shareUrl = `${window.location.origin}/blog/${post.slug}`;
const shareTitle = post.title;

const shareLinks = [
  { 
    href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
    label: 'Share on Twitter',
    icon: <Twitter size={18} />
  },
  {
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    label: 'Share on Facebook',
    icon: <Facebook size={18} />
  },
  {
    href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
    label: 'Share on LinkedIn',
    icon: <Linkedin size={18} />
  },
  {
    label: 'Copy link',
    icon: <Link2 size={18} />
  }
];
```

### JSX Hierarchy

```tsx
<Layout>
  {/* Reading Progress Bar (Fixed) */}
  <div className="single-post-fw__progress">
    <div className="single-post-fw__progress-bar" style={{ '--reading-progress': '50%' }} />
  </div>
  
  <Breadcrumbs />
  
  <article className="single-post-fw">
    
    {/* Header (Centered) */}
    <header className="single-post-fw__header">
      <div className="single-post-fw__categories">...</div>
      <h1 className="single-post-fw__title">...</h1>
      <p className="single-post-fw__excerpt">...</p>
      <div className="single-post-fw__meta-row">
        <PostMeta />
        <span className="single-post-fw__reading-time">
          <Clock /> {readingTime} min read
        </span>
      </div>
      <div className="single-post-fw__share-mobile">
        {/* Mobile share buttons */}
      </div>
    </header>
    
    {/* Featured Image */}
    <div className="single-post-fw__featured">
      <div className="single-post-fw__featured-image">
        <img />
      </div>
    </div>
    
    {/* Floating Share (Desktop) */}
    <div className="single-post-fw__share-floating">
      <div className="single-post-fw__share-group">
        <span className="single-post-fw__share-label">Share</span>
        {shareLinks.map(...)}
      </div>
    </div>
    
    {/* Content (65ch) */}
    <div className="single-post-fw__content">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
    
    {/* Tags */}
    <div className="single-post-fw__tags">...</div>
    
    {/* Post Navigation */}
    <div className="single-post-fw__nav">
      <PostNavigation />
    </div>
    
  </article>
  
  {/* Related Posts */}
  <Container>
    <RelatedPosts />
  </Container>
  
  {/* Comments */}
  <section className="blog-comments">
    {/* Comment list + form */}
  </section>
  
</Layout>
```

---

## BEM Class Hierarchy

```
single-post-fw                         /* Container + color identity */

single-post-fw__progress               /* Progress bar container (fixed) */
└── single-post-fw__progress-bar       /* Gradient bar (pink → yellow) */

single-post-fw__header                 /* Article header (centered) */
├── single-post-fw__categories         /* Category badges */
│   └── single-post-fw__category-link  /* Single category */
├── single-post-fw__title              /* h1 (gradient dark mode) */
├── single-post-fw__excerpt            /* Lead paragraph */
├── single-post-fw__meta-row           /* Meta info row */
│   └── single-post-fw__reading-time   /* Reading time estimate */
└── single-post-fw__share-mobile       /* Mobile share buttons */

single-post-fw__featured               /* Featured image container */
└── single-post-fw__featured-image     /* Image wrapper */

single-post-fw__share-floating         /* Floating share panel (desktop) */
└── single-post-fw__share-group        /* Glassmorphism panel */
    ├── single-post-fw__share-label    /* "Share" label */
    └── single-post-fw__share-btn      /* Share button */

single-post-fw__content                /* Article content (65ch) */

single-post-fw__tags                   /* Tag section */
├── single-post__tags-icon             /* Tag icon */
└── single-post__tag                   /* Tag link (shared) */

single-post-fw__nav                    /* Post navigation wrapper */
```

**Total BEM Classes:** 17

---

## Section Breakdown

### 1. Reading Progress Bar

```tsx
<div className="single-post-fw__progress">
  <div
    className="single-post-fw__progress-bar"
    style={{ '--reading-progress': `${readingProgress}%` } as React.CSSProperties}
  />
</div>
```

**CSS:**
```css
.single-post-fw__progress {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--wp--preset--color--border);
  z-index: 50;
}

.single-post-fw__progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--page-secondary), var(--page-accent));
  /* Pink (#ff00ff) → Yellow (#ffff00) */
  width: var(--reading-progress, 0%);
  transition: width 0.1s linear;
}
```

**Effect:** Fixed bar at top, fills left-to-right as user scrolls down.

### 2. Centered Header

```css
.single-post-fw__header {
  max-width: 48rem;  /* 768px */
  margin-inline: auto;
  padding-inline: var(--wp--preset--spacing--50);
  padding-block: var(--wp--preset--spacing--60);
  text-align: center;
}
```

**Layout:** All header content centered, max 768px wide.

### 3. Gradient Title (Dark Mode)

```css
.single-post-fw__title {
  font-family: var(--wp--preset--font-family--base);
  font-size: var(--wp--preset--font-size--800);  /* Largest size */
  font-weight: var(--wp--preset--font-weight--bold);
  letter-spacing: var(--wp--preset--letter-spacing--tight);
  line-height: var(--wp--preset--line-height--tight);
  color: var(--wp--preset--color--foreground);
  margin-block-end: var(--wp--preset--spacing--40);
}

.dark .single-post-fw__title {
  background: linear-gradient(135deg, #ffffff, var(--wp--preset--color--neon-pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

**Effect:** White → Pink gradient text in dark mode (same as sidebar variant).

### 4. Excerpt/Lead

```css
.single-post-fw__excerpt {
  font-family: var(--wp--preset--font-family--base);
  font-size: var(--wp--preset--font-size--400);  /* 1.5rem */
  color: var(--wp--preset--color--text-secondary);
  line-height: var(--wp--preset--line-height--relaxed);
  margin-block-end: var(--wp--preset--spacing--40);
}
```

**Purpose:** Summary paragraph above meta info.

### 5. Reading Time Estimate

```tsx
<span className="single-post-fw__reading-time">
  <Clock size={16} aria-hidden="true" />
  <small>{readingTime} min read</small>
</span>
```

**CSS:**
```css
.single-post-fw__reading-time {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  font-size: var(--wp--preset--font-size--200);
  color: var(--wp--preset--color--text-secondary);
}
```

### 6. Mobile Share Buttons

```css
.single-post-fw__share-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--wp--preset--spacing--20);
}

@media (min-width: 1024px) {
  .single-post-fw__share-mobile {
    display: none;  /* Hidden on desktop */
  }
}
```

### 7. Floating Share Panel (Desktop Only)

```css
.single-post-fw__share-floating {
  display: none;
}

@media (min-width: 1024px) {
  .single-post-fw__share-floating {
    display: block;
    position: fixed;
    left: var(--wp--preset--spacing--40);
    top: 50%;
    transform: translateY(-50%);
    z-index: 30;
  }
}
```

**Glassmorphism Panel:**
```css
.single-post-fw__share-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  padding: var(--wp--preset--spacing--30);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--wp--preset--border-radius--xl);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
```

**Share Buttons:**
```css
.single-post-fw__share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--wp--preset--color--text-secondary);
  cursor: pointer;
  transition: color var(--wp--preset--transition--base) ease,
              background var(--wp--preset--transition--base) ease;
}

.single-post-fw__share-btn:hover {
  background: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--neon-pink);
}

.dark .single-post-fw__share-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--wp--preset--color--neon-cyan);
}
```

**Accessibility:**
```css
.single-post-fw__share-btn:focus-visible {
  outline: 2px solid var(--wp--preset--color--neon-cyan);
  outline-offset: 2px;
}
```

### 8. Featured Image (21:9 Ultra-Wide)

```css
.single-post-fw__featured {
  max-width: 56rem;  /* 896px */
  margin-inline: auto;
  padding-inline: var(--wp--preset--spacing--50);
  margin-block-end: var(--wp--preset--spacing--60);
}

.single-post-fw__featured-image {
  border-radius: var(--wp--preset--border-radius--xl);
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  aspect-ratio: 21 / 9;  /* Ultra-wide cinematic ratio */
}

.dark .single-post-fw__featured-image {
  box-shadow: 0 8px 32px rgba(255, 0, 255, 0.12);  /* Pink neon glow */
}
```

**Image:**
```css
.single-post-fw__featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

### 9. Content Area (Optimal Reading Width)

```css
.single-post-fw__content {
  max-width: 65ch;  /* ~650px, optimal line length */
  margin-inline: auto;
  padding-inline: var(--wp--preset--spacing--50);
  font-family: var(--wp--preset--font-family--base);
  font-size: var(--wp--preset--font-size--300);
  line-height: var(--wp--preset--line-height--relaxed);
  color: var(--wp--preset--color--text-secondary);
  margin-block-end: var(--wp--preset--spacing--60);
}

.single-post-fw__content p {
  margin-block-end: var(--wp--preset--spacing--40);
}

.single-post-fw__content a {
  color: var(--wp--preset--color--neon-pink);
  text-decoration: underline;
}
```

**Typography Standard:** 65 characters per line for optimal readability.

### 10. Tags Section

```css
.single-post-fw__tags {
  max-width: 65ch;
  margin-inline: auto;
  padding-inline: var(--wp--preset--spacing--50);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--wp--preset--spacing--20);
  padding-block-start: var(--wp--preset--spacing--50);
  margin-block-end: var(--wp--preset--spacing--60);
  border-top: 1px solid var(--wp--preset--color--border);
}
```

---

## Responsive Behavior

### Mobile (< 1024px)

**Share Buttons:** Inline below meta info (horizontal row)  
**Floating Panel:** Hidden  
**Layout:** Single column, centered content

### Desktop (≥ 1024px)

**Share Buttons:** Fixed left sidebar (vertical)  
**Floating Panel:** Visible (glassmorphism)  
**Layout:** Wider content areas (48rem, 56rem, 65ch)

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Progress bar | Pink → Yellow gradient | Same (vibrant) |
| Title | Foreground color | White → Pink gradient |
| Floating panel | White glass | Dark glass |
| Share buttons hover | Pink | Cyan |
| Featured image shadow | Gray | Pink neon glow |
| Content links | Pink | Pink (same) |

---

## Accessibility

### ARIA Attributes

**Share Buttons:**
```tsx
<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  className="single-post-fw__share-btn"
  aria-label="Share on Twitter"
>
  <Twitter size={18} />
</a>

<button
  onClick={() => copyToClipboard(shareUrl)}
  className="single-post-fw__share-btn"
  aria-label="Copy link"
>
  <Link2 size={18} />
</button>
```

**Decorative Icons:**
```tsx
<Clock size={16} aria-hidden="true" />
<Tag size={18} aria-hidden="true" />
```

**Screen Reader Text:**
```tsx
<span className="sr-only">Tagged:</span>
```

**Comments Section:**
```tsx
<section id="comments" className="blog-comments" aria-labelledby="comments-heading-fw">
  <h3 id="comments-heading-fw">Comments ({commentCount})</h3>
</section>
```

### Keyboard Navigation

- ✅ Tab through category links
- ✅ Tab through share buttons
- ✅ Tab through content links
- ✅ Tab through tag links
- ✅ Tab through comment form
- ✅ Focus visible (cyan outline)

### Semantic HTML

- `<article>` for main content
- `<header>` for post header
- `<section>` for comments
- Proper heading hierarchy (h1 → h3 → h4)

---

## Usage

### Import and Render

```tsx
import { SinglePostFullWidth } from './templates/blog/SinglePostFullWidth';

// In router
{
  path: 'blog/:slug',
  element: <SinglePostFullWidth />
}
```

### Routes

- `/blog/:slug` — Single post full-width layout (default)
- Alternative: `/blog/:slug/fullwidth`

---

## Common Issues

### Issue: Progress bar not animating

**Cause:** Missing scroll event listener or CSS custom property

**Solution:** Verify both scroll tracking and CSS:
```tsx
// JS
style={{ '--reading-progress': `${readingProgress}%` }}

// CSS
.single-post-fw__progress-bar {
  width: var(--reading-progress, 0%);
}
```

### Issue: Floating share panel not visible on desktop

**Cause:** Missing media query or `display: none` not overridden

**Solution:** Ensure media query exists:
```css
@media (min-width: 1024px) {
  .single-post-fw__share-floating {
    display: block;
  }
}
```

### Issue: Content too wide on mobile

**Cause:** Missing padding or max-width not responsive

**Solution:** Verify padding:
```css
.single-post-fw__content {
  padding-inline: var(--wp--preset--spacing--50);  /* Mobile safe */
}
```

### Issue: Share buttons not working

**Cause:** Missing `copyToClipboard` utility or incorrect social URLs

**Solution:** Verify utility import:
```tsx
import { copyToClipboard } from '@/utils/clipboard';
```

---

## Testing Checklist

### Visual Testing
- [ ] Progress bar visible at top
- [ ] Title centered
- [ ] Excerpt visible
- [ ] Reading time displayed
- [ ] Featured image 21:9 ratio
- [ ] Content max-width 65ch
- [ ] Tags section visible

### Interaction Testing
- [ ] Progress bar fills on scroll
- [ ] Share buttons work (open new tabs)
- [ ] Copy link button works
- [ ] Category links navigate
- [ ] Tag links navigate
- [ ] Prev/next navigation works

### Responsive Testing
- [ ] Mobile: Share buttons inline
- [ ] Desktop: Floating share panel
- [ ] All widths: Content readable
- [ ] Featured image scales properly

### Dark Mode Testing
- [ ] Title gradient visible
- [ ] Progress bar gradient vibrant
- [ ] Floating panel glassmorphism
- [ ] Share buttons cyan on hover
- [ ] Featured image pink glow
- [ ] All text readable

### Accessibility Testing
- [ ] Share buttons have aria-label
- [ ] External links have noopener
- [ ] Tab order logical
- [ ] Focus visible
- [ ] Decorative icons hidden from SR

---

## Performance Considerations

### Scroll Event Optimization

**Current:** Throttling handled by browser (passive event listener recommended)

**Recommended Enhancement:**
```tsx
import { throttle } from '@/utils/performance';

useEffect(() => {
  const handleScroll = throttle(() => {
    // Progress calculation
  }, 100);  // Throttle to max 10 updates/second
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## Future Enhancements

### 1. Table of Contents

Generate from headings:
```tsx
<TableOfContents content={post.content} />
```

### 2. Sticky Share Panel

Make panel sticky on scroll:
```css
@media (min-width: 1024px) {
  .single-post-fw__share-floating {
    position: sticky;
    top: 100px;
  }
}
```

### 3. Print Styles

Optimize for printing:
```css
@media print {
  .single-post-fw__progress,
  .single-post-fw__share-floating,
  .single-post-fw__share-mobile {
    display: none;
  }
}
```

### 4. Estimated Time Remaining

Show time remaining instead of progress %:
```tsx
const timeRemaining = readingTime * (1 - readingProgress / 100);
```

### 5. Social Share Count

Display share count:
```tsx
<span>{shareCount} shares</span>
```

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After reading engagement metrics analysis
