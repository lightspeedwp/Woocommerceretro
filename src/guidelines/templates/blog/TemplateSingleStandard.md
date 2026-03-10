# TemplateSingleStandard

**Component Type:** Template (Blog Single Post / Standard Format)  
**Location:** `/src/app/components/templates/TemplateSingleStandard.tsx`  
**CSS:** `/src/styles/sections/blog-funky.css` (Section 14)  
**Route:** `/blog/:slug/standard`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Yellow `#ffff00`

---

## Overview

TemplateSingleStandard is the default blog post format featuring a full-bleed hero with featured image, deep gradient overlay, neon gradient category badges, and centered content layout.

**WordPress Mapping:** WordPress Standard Post Format (Default)  
**Post Format:** `standard`  
**Dark Mode:** ✅ Complete support  
**Hero Treatment:** ✅ Full-bleed image with gradient overlay

---

## Key Features

### Visual Elements

**1. Full-Bleed Hero:**
- Featured image background (full viewport)
- Deep gradient overlay (bottom-to-top)
- White text on dark background
- Category badges (pink → cyan gradient)
- Title + Meta info
- 60vh minimum height

**2. Content Section:**
- Centered 48rem max-width
- Relaxed line-height for readability
- Standard WordPress content rendering

**3. Tag Pills:**
- Rounded pill design
- Neon pink glow on hover
- Border color transition

**4. Discussion Section:**
- Comments closed state
- Pink icon accent
- Empty state message

### Funky Treatments

**Category Badges:** Pink → Cyan gradient background  
**Tag Pills:** Pink neon border glow on hover  
**Discussion Icon:** Pink accent color  
**Hero Overlay:** Deep gradient (85% → 40% → transparent)

---

## Component Structure

### Data Access

```tsx
const { slug } = useParams<{ slug: string }>();
const post = getPostBySlug(slug || '');
const author = getUserById(post.author);
const authorName = author ? author.name : 'Unknown Author';
```

**Data Functions:**
- `getPostBySlug()` — Fetch post by slug
- `getMediaSource()` — Get featured image URL
- `getUserById()` — Get author details
- `postCategories` — Category metadata
- `tags` — Tag metadata

### JSX Hierarchy

```tsx
<Layout>
  <article>
    
    {/* 1. Hero Section */}
    {post.featured_media > 0 && (
      <div className="single-standard__hero">
        <img className="single-standard__hero-img" />
        <div className="single-standard__hero-overlay" />
        <Container>
          <div className="single-standard__hero-content">
            <div className="single-standard__categories">
              <span className="single-standard__category-badge">...</span>
            </div>
            <h1 className="single-standard__hero-title">...</h1>
            <div className="single-standard__hero-meta">
              <span className="single-standard__hero-meta-item">
                <User /> Author
              </span>
              <span className="single-standard__hero-meta-item">
                <Calendar /> Date
              </span>
            </div>
          </div>
        </Container>
      </div>
    )}
    
    {/* 2. Content Section */}
    <section className="single-standard__content">
      <Container>
        
        {/* Body */}
        <div className="single-standard__body" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="single-standard__tags">
            <div className="single-standard__tags-label">
              <Tag /> Tags
            </div>
            <div className="single-standard__tags-list">
              <span className="single-standard__tag">...</span>
            </div>
          </div>
        )}
        
        {/* Discussion */}
        <div className="single-standard__discussion">
          <div className="single-standard__discussion-header">
            <MessageSquare />
            <h3>Discussion</h3>
          </div>
          <div className="single-standard__discussion-empty">
            <p>Comments are closed for this post.</p>
          </div>
        </div>
        
      </Container>
    </section>
    
  </article>
</Layout>
```

---

## BEM Class Hierarchy

```
single-standard__hero                  /* Hero container (full-bleed) */
├── single-standard__hero-img          /* Background image */
├── single-standard__hero-overlay      /* Gradient overlay */
└── single-standard__hero-content      /* Content wrapper */
    ├── single-standard__categories    /* Category badges */
    │   └── single-standard__category-badge  /* Single badge */
    ├── single-standard__hero-title    /* h1 title */
    └── single-standard__hero-meta     /* Author + date */
        └── single-standard__hero-meta-item  /* Single meta item */

single-standard__content               /* Content section */
├── single-standard__body              /* Article content */
├── single-standard__tags              /* Tag section */
│   ├── single-standard__tags-label   /* "Tags" label */
│   ├── single-standard__tags-list    /* Tag list */
│   └── single-standard__tag          /* Single tag pill */
└── single-standard__discussion        /* Discussion section */
    ├── single-standard__discussion-header     /* Header */
    └── single-standard__discussion-empty      /* Empty state */
```

**Total BEM Classes:** 15

---

## Section Breakdown

### 1. Full-Bleed Hero

```tsx
<div className="single-standard__hero">
  <img
    src={getMediaSource(post.featured_media)}
    alt={post.title.rendered}
    className="single-standard__hero-img"
  />
  <div className="single-standard__hero-overlay" aria-hidden="true" />
  <Container>
    <div className="single-standard__hero-content">...</div>
  </Container>
</div>
```

#### Hero Layout

```css
.single-standard__hero {
  position: relative;
  min-height: 60vh;        /* Minimum 60% viewport height */
  min-height: 60dvh;       /* Use dynamic viewport height */
  display: flex;
  align-items: flex-end;   /* Content at bottom */
  overflow: hidden;
}
```

**Purpose:** Creates full-bleed hero that fills at least 60% of viewport, with content anchored to bottom.

#### Background Image

```css
.single-standard__hero-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
```

**Effect:** Image fills entire hero area, cropped to fit.

#### Gradient Overlay

```css
.single-standard__hero-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    to top,
    rgba(3, 2, 19, 0.85) 0%,      /* Deep dark at bottom */
    rgba(3, 2, 19, 0.4) 50%,      /* Lighter in middle */
    transparent 100%              /* Transparent at top */
  );
}
```

**Effect:** Creates readable dark area at bottom for white text, while allowing image to show through at top.

#### Hero Content

```css
.single-standard__hero-content {
  position: relative;
  z-index: 2;
  padding-bottom: var(--wp--preset--spacing--70);
  color: white;
}
```

**Layout:** Content sits above overlay, white text, generous bottom padding.

---

### 2. Category Badges (Neon Gradient)

```tsx
<div className="single-standard__categories">
  {post.categories.map((catId) => {
    const category = postCategories.find((c) => c.id === catId);
    return category ? (
      <span key={catId} className="single-standard__category-badge">
        {category.name}
      </span>
    ) : null;
  })}
</div>
```

**Container:**
```css
.single-standard__categories {
  display: flex;
  gap: var(--wp--preset--spacing--20);
  margin-bottom: var(--wp--preset--spacing--30);
}
```

**Badge Styling:**
```css
.single-standard__category-badge {
  padding: var(--wp--preset--spacing--10) var(--wp--preset--spacing--30);
  border-radius: 999px;
  font-size: var(--wp--preset--font-size--small);
  font-weight: var(--wp--preset--font-weight--semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-pink),
    var(--wp--preset--color--neon-cyan)
  );
  color: #030213;  /* Dark text on bright gradient */
}
```

**Effect:** Vibrant pink → cyan gradient pills with dark text for maximum contrast.

---

### 3. Hero Title & Meta

**Title:**
```css
.single-standard__hero-title {
  color: white;
  max-width: 52rem;
  margin-bottom: var(--wp--preset--spacing--30);
}
```

**Meta Row:**
```css
.single-standard__hero-meta {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--40);
  font-size: var(--wp--preset--font-size--small);
  font-weight: var(--wp--preset--font-weight--medium);
  color: rgba(255, 255, 255, 0.8);  /* Slightly transparent white */
}

.single-standard__hero-meta-item {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
}
```

**JSX:**
```tsx
<div className="single-standard__hero-meta">
  <span className="single-standard__hero-meta-item">
    <User size={16} aria-hidden="true" />
    {authorName}
  </span>
  <span className="single-standard__hero-meta-item">
    <Calendar size={16} aria-hidden="true" />
    {new Date(post.date).toLocaleDateString()}
  </span>
</div>
```

---

### 4. Content Section

```css
.single-standard__content {
  padding-block: var(--wp--preset--spacing--80);
  background: var(--wp--preset--color--background);
}
```

**Body Content:**
```css
.single-standard__body {
  max-width: 48rem;  /* 768px centered */
  margin-inline: auto;
  line-height: var(--wp--preset--line-height--relaxed);
  color: var(--wp--preset--color--text-secondary);
}

.dark .single-standard__body {
  color: rgba(255, 255, 255, 0.7);
}
```

**HTML Rendering:**
```tsx
<div
  className="single-standard__body"
  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
/>
```

---

### 5. Tag Pills (Neon Glow Hover)

```tsx
<div className="single-standard__tags">
  <div className="single-standard__tags-label">
    <Tag size={16} aria-hidden="true" />
    <span>Tags</span>
  </div>
  <div className="single-standard__tags-list">
    {post.tags.map((tagId) => {
      const tag = tags.find((t) => t.id === tagId);
      return tag ? (
        <span key={tagId} className="single-standard__tag">
          {tag.name}
        </span>
      ) : null;
    })}
  </div>
</div>
```

**Tags Container:**
```css
.single-standard__tags {
  margin-top: var(--wp--preset--spacing--70);
  padding-top: var(--wp--preset--spacing--50);
  border-top: 1px solid var(--wp--preset--color--border-light);
  max-width: 48rem;
  margin-inline: auto;
}

.dark .single-standard__tags {
  border-color: rgba(255, 255, 255, 0.1);
}
```

**Tags Label:**
```css
.single-standard__tags-label {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  font-size: var(--wp--preset--font-size--small);
  font-weight: var(--wp--preset--font-weight--semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--wp--preset--color--text-secondary);
  margin-bottom: var(--wp--preset--spacing--30);
}
```

**Tags List:**
```css
.single-standard__tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--wp--preset--spacing--20);
}
```

**Individual Tag (With Neon Glow):**
```css
.single-standard__tag {
  padding: var(--wp--preset--spacing--10) var(--wp--preset--spacing--30);
  border-radius: 999px;
  font-size: var(--wp--preset--font-size--small);
  background: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--text-secondary);
  border: 1px solid transparent;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.dark .single-standard__tag {
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.6);
}

.single-standard__tag:hover {
  border-color: var(--wp--preset--color--neon-pink);
  color: var(--wp--preset--color--neon-pink);
}
```

**Effect:** On hover, pink border appears and text turns pink.

---

### 6. Discussion Section (Closed State)

```tsx
<div className="single-standard__discussion">
  <div className="single-standard__discussion-header">
    <MessageSquare size={20} />
    <h3>Discussion</h3>
  </div>
  <div className="single-standard__discussion-empty">
    <p>Comments are closed for this post.</p>
  </div>
</div>
```

**Discussion Container:**
```css
.single-standard__discussion {
  margin-top: var(--wp--preset--spacing--80);
  padding-top: var(--wp--preset--spacing--60);
  border-top: 1px solid var(--wp--preset--color--border-light);
  max-width: 48rem;
  margin-inline: auto;
}

.dark .single-standard__discussion {
  border-color: rgba(255, 255, 255, 0.1);
}
```

**Header:**
```css
.single-standard__discussion-header {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  margin-bottom: var(--wp--preset--spacing--50);
}

.single-standard__discussion-header svg {
  color: var(--wp--preset--color--neon-pink);
}
```

**Empty State:**
```css
.single-standard__discussion-empty {
  padding: var(--wp--preset--spacing--50);
  border-radius: var(--wp--preset--border-radius--lg, 12px);
  text-align: center;
  background: var(--wp--preset--color--surface);
  color: var(--wp--preset--color--text-secondary);
}

.dark .single-standard__discussion-empty {
  background: rgba(255, 255, 255, 0.03);
  color: rgba(255, 255, 255, 0.5);
}
```

---

## Responsive Behavior

### Mobile & Desktop

**Hero:** Full-bleed on all sizes (60vh minimum)  
**Content:** Centered 48rem width with padding  
**Tags:** Wrap to multiple rows as needed  
**Categories:** Horizontal scroll if many badges

**Note:** No significant breakpoint changes. Layout is inherently responsive due to centered max-width containers.

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Body text | `--text-secondary` | `rgba(255,255,255,0.7)` |
| Tag pills bg | `--surface` | `rgba(255,255,255,0.05)` |
| Tag pills text | `--text-secondary` | `rgba(255,255,255,0.6)` |
| Borders | `--border-light` | `rgba(255,255,255,0.1)` |
| Discussion empty | `--surface` | `rgba(255,255,255,0.03)` |

**Note:** Hero gradient and category badges are the same in both modes (already designed for dark overlay).

---

## Accessibility

### ARIA Attributes

**Decorative Elements:**
```tsx
<div className="single-standard__hero-overlay" aria-hidden="true" />

<Tag size={16} aria-hidden="true" />
<User size={16} aria-hidden="true" />
<Calendar size={16} aria-hidden="true" />
<MessageSquare size={20} />  {/* Not hidden - semantic icon */}
```

**Alt Text:**
```tsx
<img
  src={getMediaSource(post.featured_media)}
  alt={post.title.rendered}
  className="single-standard__hero-img"
/>
```

### Semantic HTML

```tsx
<article>
  <div className="single-standard__hero">
    <h1>...</h1>
  </div>
  <section className="single-standard__content">
    <div className="single-standard__body">...</div>
  </section>
</article>
```

### Keyboard Navigation

- ✅ Category badges are `<span>` (non-interactive, display only)
- ✅ Tag pills are `<span>` (could be links in production)
- ✅ Focus visible on all interactive elements

---

## Data Integration

### Post Object Structure

```tsx
interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  format: 'standard';  // Standard format
}
```

### Category & Tag Lookup

```tsx
// Categories
const category = postCategories.find((c) => c.id === catId);

// Tags
const tag = tags.find((t) => t.id === tagId);
```

**Production:** Replace with REST API calls:
```tsx
const category = await fetch(`/wp-json/wp/v2/categories/${catId}`);
const tag = await fetch(`/wp-json/wp/v2/tags/${tagId}`);
```

---

## Usage

### Import and Render

```tsx
import { TemplateSingleStandard } from './templates/TemplateSingleStandard';

// In router
{
  path: 'blog/:slug/standard',
  element: <TemplateSingleStandard />
}
```

### Routes

- `/blog/:slug/standard` — Standard post format (explicit)
- `/blog/:slug` — Default post route (could use this template)

---

## Common Issues

### Issue: Hero not full-bleed (has padding)

**Cause:** Container wrapper outside hero

**Solution:** Hero should be outside Container:
```tsx
<div className="single-standard__hero">
  {/* Full-bleed image */}
  <Container>
    {/* Content inside container */}
  </Container>
</div>
```

### Issue: Category badges text not readable

**Cause:** Missing dark text color on gradient

**Solution:** Verify dark text color:
```css
.single-standard__category-badge {
  color: #030213;  /* Dark text required for bright gradient */
}
```

### Issue: Hero too short on mobile

**Cause:** `60vh` too small on short viewports

**Solution:** Add min-height in pixels as fallback:
```css
.single-standard__hero {
  min-height: 400px;  /* Fallback */
  min-height: 60dvh;  /* Preferred */
}
```

### Issue: Tags not wrapping

**Cause:** Missing `flex-wrap`

**Solution:** Ensure flex-wrap is set:
```css
.single-standard__tags-list {
  flex-wrap: wrap;
}
```

---

## Testing Checklist

### Visual Testing
- [ ] Hero full-bleed (no side gaps)
- [ ] Hero min 60vh height
- [ ] Gradient overlay visible
- [ ] Category badges gradient (pink → cyan)
- [ ] White text readable on hero
- [ ] Content centered 48rem
- [ ] Tags section visible

### Interaction Testing
- [ ] Category badges display correctly
- [ ] Tag pills show pink border on hover
- [ ] Tag pills text turns pink on hover
- [ ] Discussion icon is pink

### Responsive Testing
- [ ] Hero full-width on all sizes
- [ ] Content padding on mobile
- [ ] Tags wrap on small screens
- [ ] Category badges readable

### Dark Mode Testing
- [ ] Body text lighter in dark mode
- [ ] Tag pills subtle background
- [ ] Borders visible (but subtle)
- [ ] Discussion empty state readable

### Accessibility Testing
- [ ] Hero image has alt text
- [ ] Decorative icons hidden from SR
- [ ] Proper heading hierarchy
- [ ] Semantic HTML structure

---

## Production Enhancements

### 1. Add Comments System

Replace closed state with actual comments:
```tsx
{post.comments && post.comments.length > 0 ? (
  <CommentList comments={post.comments} />
) : (
  <div className="single-standard__discussion-empty">...</div>
)}
```

### 2. Make Tags Clickable

Convert to links:
```tsx
<Link to={`/blog/tag/${tag.slug}`} className="single-standard__tag">
  {tag.name}
</Link>
```

### 3. Add Share Buttons

Insert before content:
```tsx
<SocialShare url={post.link} title={post.title.rendered} />
```

### 4. Add Reading Progress

Track scroll position:
```tsx
<ReadingProgress />
```

### 5. Add Author Bio

After content:
```tsx
<AuthorBio author={author} />
```

---

## Related Templates

- **SinglePostFullWidth** (`/src/app/components/templates/blog/SinglePostFullWidth.tsx`) — Full-width variant with progress bar
- **SinglePostWithSidebar** (`/src/app/components/templates/blog/SinglePostWithSidebar.tsx`) — Sidebar variant
- **TemplateSingleAudio** (`/src/app/components/templates/TemplateSingleAudio.tsx`) — Audio/podcast format
- **TemplateSingleVideo** (`/src/app/components/templates/TemplateSingleVideo.tsx`) — Video format
- **TemplateSingleGallery** (`/src/app/components/templates/TemplateSingleGallery.tsx`) — Gallery format

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After comment system integration
