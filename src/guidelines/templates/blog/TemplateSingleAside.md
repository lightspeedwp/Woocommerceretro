# TemplateSingleAside

**Component Type:** Template (Blog Single Post / Aside Format)  
**Location:** `/src/app/components/templates/TemplateSingleAside.tsx`  
**CSS:** `/src/styles/sections/blog-funky.css` (Section 15)  
**Route:** `/blog/:slug/aside`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Cyan `#00ffff` / Pink `#ff00ff` / Purple `#2d0059`

---

## Overview

TemplateSingleAside is a Twitter/status update style template featuring a centered glassmorphism card with gradient icon, large quote-style text, decorative background icon watermark, timestamp, and social action buttons (Like/Share).

**WordPress Mapping:** WordPress Aside Post Format  
**Post Format:** `aside`  
**Dark Mode:** ✅ Complete glassmorphism support  
**Layout:** Vertically centered card (60vh minimum)

---

## Key Features

### Visual Elements

**1. Centered Layout:**
- Minimum 60vh height
- Flexbox centering (vertical + horizontal)
- Neutral surface background

**2. Glassmorphism Card:**
- Semi-transparent background
- Subtle border
- Soft shadow (light mode) / Cyan glow (dark mode)
- Rounded corners (12px)

**3. Decorative Background Icon:**
- Large watermark icon (200px)
- Top-right overflow positioning
- Subtle opacity (50%)
- Surface color tint

**4. Gradient Icon Circle:**
- 64px circle
- Cyan → Pink gradient background
- Cyan icon color
- MessageSquare icon

**5. Quote-Style Text:**
- XX-large font size (1.5rem)
- Medium weight
- Relaxed line height
- Wrapped in curly quotes

**6. Footer:**
- Date + Time timestamp
- Like & Share buttons
- Top border separator
- Centered layout

### Funky Treatments

**Card Shadow:** Cyan glow in dark mode (`rgba(0,255,255,0.05)`)  
**Icon Circle:** Cyan → Pink gradient background  
**Icon Color:** Neon cyan  
**Action Buttons:** Cyan color on hover

---

## Component Structure

### Data Access

```tsx
const { slug } = useParams<{ slug: string }>();
const post = getPostBySlug(slug || '');
```

### JSX Hierarchy

```tsx
<Layout>
  <article className="single-aside">
    <Container>
      <div className="single-aside__card">
        
        {/* Decorative background icon */}
        <div className="single-aside__bg-icon" aria-hidden="true">
          <MessageSquare size={200} strokeWidth={0.5} />
        </div>
        
        <div className="single-aside__content">
          
          {/* Icon circle */}
          <div className="single-aside__icon-circle">
            <MessageSquare size={32} />
          </div>
          
          {/* Quote text */}
          <div className="single-aside__quote">
            &ldquo;{post.content.rendered.replace(/<[^>]*>/g, '')}&rdquo;
          </div>
          
          {/* Footer with timestamp + actions */}
          <div className="single-aside__footer">
            <span className="single-aside__date">
              {new Date(post.date).toLocaleDateString()} at{' '}
              {new Date(post.date).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
            <div className="single-aside__actions">
              <button className="single-aside__action-btn" aria-label="Like">
                <ThumbsUp size={20} />
              </button>
              <button className="single-aside__action-btn" aria-label="Share">
                <Share2 size={20} />
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </Container>
  </article>
</Layout>
```

---

## BEM Class Hierarchy

```
single-aside                           /* Outer wrapper (60vh min, flexbox center) */
└── single-aside__card                 /* Glassmorphism card */
    ├── single-aside__bg-icon          /* Decorative watermark icon */
    └── single-aside__content          /* Inner content wrapper */
        ├── single-aside__icon-circle  /* Gradient circle */
        ├── single-aside__quote        /* Quote text */
        └── single-aside__footer       /* Bottom section */
            ├── single-aside__date     /* Timestamp */
            └── single-aside__actions  /* Action buttons */
                └── single-aside__action-btn /* Like/Share button */
```

**Total BEM Classes:** 8

---

## Section Breakdown

### 1. Outer Wrapper (Centered Layout)

**Container:**
```css
.single-aside {
  min-height: 60vh;
  min-height: 60dvh;  /* Dynamic viewport height for mobile */
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: var(--wp--preset--spacing--80);
  background: var(--wp--preset--color--surface);
}

.dark .single-aside {
  background: var(--wp--preset--color--background);
}
```

**Effect:** Card vertically centered in 60% of viewport height.

---

### 2. Glassmorphism Card

**Card Container:**
```css
.single-aside__card {
  position: relative;
  overflow: hidden;
  padding: var(--wp--preset--spacing--60) var(--wp--preset--spacing--70);
  border-radius: var(--wp--preset--border-radius--lg, 12px);
  text-align: center;
  background: var(--wp--preset--color--background);
  border: 1px solid var(--wp--preset--color--border-light);
  box-shadow: 0 4px 40px rgba(0, 0, 0, 0.06);  /* Soft shadow in light mode */
}

.dark .single-aside__card {
  background: rgba(255, 255, 255, 0.04);  /* Semi-transparent glassmorphism */
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 40px rgba(0, 255, 255, 0.05);  /* Cyan glow in dark mode */
}
```

**Key Features:**
- **Light mode:** White background with soft shadow
- **Dark mode:** Glassmorphism (4% white) with cyan glow
- **Overflow hidden:** Clips decorative background icon
- **Relative positioning:** For absolute background icon

---

### 3. Decorative Background Icon

**Watermark Icon:**
```css
.single-aside__bg-icon {
  position: absolute;
  top: -40px;
  right: -40px;
  color: var(--wp--preset--color--surface);
  opacity: 0.5;
  pointer-events: none;
}

.dark .single-aside__bg-icon {
  color: rgba(255, 255, 255, 0.03);  /* Extremely subtle in dark mode */
}
```

**JSX:**
```tsx
<div className="single-aside__bg-icon" aria-hidden="true">
  <MessageSquare size={200} strokeWidth={0.5} />
</div>
```

**Effect:** Large icon partially overflowing top-right, creating a subtle branded watermark.

---

### 4. Content Wrapper

**Z-Index Layer:**
```css
.single-aside__content {
  position: relative;
  z-index: 1;  /* Above background icon */
}
```

**Purpose:** Ensures text content appears above watermark.

---

### 5. Icon Circle (Gradient)

**Circle Container:**
```css
.single-aside__icon-circle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: var(--wp--preset--spacing--50);
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.1),  /* Cyan */
    rgba(255, 0, 255, 0.1)   /* Pink */
  );
  color: var(--wp--preset--color--neon-cyan);
}

.dark .single-aside__icon-circle {
  background: linear-gradient(
    135deg,
    rgba(0, 255, 255, 0.15),  /* Slightly brighter in dark mode */
    rgba(255, 0, 255, 0.15)
  );
}
```

**JSX:**
```tsx
<div className="single-aside__icon-circle">
  <MessageSquare size={32} />
</div>
```

**Effect:** 64px circle with cyan → pink gradient, cyan MessageSquare icon.

---

### 6. Quote Text

**Large Quote:**
```css
.single-aside__quote {
  font-size: var(--wp--preset--font-size--xx-large, 1.5rem);
  font-weight: var(--wp--preset--font-weight--medium);
  color: var(--wp--preset--color--foreground);
  line-height: var(--wp--preset--line-height--relaxed);
  margin-bottom: var(--wp--preset--spacing--50);
}

.dark .single-aside__quote {
  color: rgba(255, 255, 255, 0.95);  /* Near-white in dark mode */
}
```

**JSX:**
```tsx
<div className="single-aside__quote">
  &ldquo;{post.content.rendered.replace(/<[^>]*>/g, '')}&rdquo;
</div>
```

**Processing:**
- Strips HTML tags from `post.content.rendered`
- Wraps in curly quotes (`&ldquo;` and `&rdquo;`)

**Effect:** Large, prominent quote-style text with relaxed line height.

---

### 7. Footer Section

**Footer Container:**
```css
.single-aside__footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--wp--preset--spacing--40);
  padding-top: var(--wp--preset--spacing--40);
  border-top: 1px solid var(--wp--preset--color--border-light);
}

.dark .single-aside__footer {
  border-color: rgba(255, 255, 255, 0.1);
}
```

**Layout:** Flexbox row with 40px gap between date and actions.

---

**Date/Timestamp:**
```css
.single-aside__date {
  font-size: var(--wp--preset--font-size--small);
  color: var(--wp--preset--color--text-secondary);
  font-weight: var(--wp--preset--font-weight--medium);
}

.dark .single-aside__date {
  color: rgba(255, 255, 255, 0.5);
}
```

**JSX:**
```tsx
<span className="single-aside__date">
  {new Date(post.date).toLocaleDateString()} at{' '}
  {new Date(post.date).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })}
</span>
```

**Format:** "2/23/2026 at 3:45 PM"

---

### 8. Action Buttons (Like/Share)

**Actions Container:**
```css
.single-aside__actions {
  display: flex;
  gap: var(--wp--preset--spacing--20);
}
```

**Button:**
```css
.single-aside__action-btn {
  background: none;
  border: none;
  color: var(--wp--preset--color--text-secondary);
  cursor: pointer;
  padding: var(--wp--preset--spacing--10);
  border-radius: var(--wp--preset--border-radius--md, 8px);
  transition: color 0.2s ease;
}

.single-aside__action-btn:hover {
  color: var(--wp--preset--color--neon-cyan);  /* Cyan on hover */
}
```

**JSX:**
```tsx
<div className="single-aside__actions">
  <button className="single-aside__action-btn" aria-label="Like">
    <ThumbsUp size={20} />
  </button>
  <button className="single-aside__action-btn" aria-label="Share">
    <Share2 size={20} />
  </button>
</div>
```

**Effect:** Icon buttons that turn cyan on hover.

---

## Responsive Behavior

### Mobile (< 640px)

**Card:**
- Full width with side padding from Container
- Text remains centered
- Icon circle 64px
- Quote text scales down (responsive font size)

**Footer:**
- Flexbox wraps if needed
- Gap reduces to maintain spacing

### Tablet (640px - 1023px)

**Card:**
- Max-width constraint from Container
- All elements centered
- Comfortable padding

### Desktop (≥ 1024px)

**Card:**
- Max-width constraint from Container
- Generous padding (60px / 70px)
- All elements centered

**Consistent across all sizes:**
- Card always centered vertically in viewport
- Text always centered horizontally
- Icon circle always 64px

---

## Dark Mode

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Wrapper bg | `--surface` | `--background` |
| Card bg | `--background` (white) | `rgba(255,255,255,0.04)` |
| Card border | `--border-light` | `rgba(255,255,255,0.1)` |
| Card shadow | `rgba(0,0,0,0.06)` | `rgba(0,255,255,0.05)` ← Cyan glow |
| BG icon | `--surface` 50% opacity | `rgba(255,255,255,0.03)` |
| Icon circle gradient | Cyan/Pink 10% | Cyan/Pink 15% |
| Icon color | Neon cyan | Neon cyan |
| Quote text | `--foreground` | `rgba(255,255,255,0.95)` |
| Date | `--text-secondary` | `rgba(255,255,255,0.5)` |
| Action buttons | `--text-secondary` | `--text-secondary` |
| Action hover | Neon cyan | Neon cyan |

**Key Dark Mode Feature:** **Cyan glow shadow** creates glassmorphism effect.

---

## Accessibility

### ARIA Attributes

**Background Icon:**
```tsx
<div className="single-aside__bg-icon" aria-hidden="true">
  <MessageSquare size={200} strokeWidth={0.5} />
</div>
```

**Action Buttons:**
```tsx
<button className="single-aside__action-btn" aria-label="Like">
  <ThumbsUp size={20} />
</button>
<button className="single-aside__action-btn" aria-label="Share">
  <Share2 size={20} />
</button>
```

**Purpose:** Icon-only buttons must have aria-label.

### Semantic HTML

```tsx
<article className="single-aside">
  <div className="single-aside__quote">
    {/* Quote text */}
  </div>
  <button aria-label="Like">...</button>
  <button aria-label="Share">...</button>
</article>
```

**Structure:**
- `<article>` for post format
- Semantic buttons for actions
- Proper ARIA labels

### Keyboard Navigation

**Action Buttons:**
- ✅ Tab to focus
- ✅ Enter or Space to activate
- ✅ Visual focus indicator (browser default)
- ✅ Color change on hover (cyan)

---

## Production Enhancements

### 1. Functional Like Button

Add like state and handler:

```tsx
const [liked, setLiked] = useState(false);
const [likeCount, setLikeCount] = useState(post.likes || 0);

const handleLike = () => {
  setLiked(!liked);
  setLikeCount(prev => liked ? prev - 1 : prev + 1);
  // API call to persist like
};

<button
  className={`single-aside__action-btn ${liked ? 'single-aside__action-btn--active' : ''}`}
  aria-label={liked ? 'Unlike' : 'Like'}
  aria-pressed={liked}
  onClick={handleLike}
>
  <ThumbsUp size={20} fill={liked ? 'currentColor' : 'none'} />
  {likeCount > 0 && <span>{likeCount}</span>}
</button>
```

**CSS:**
```css
.single-aside__action-btn--active {
  color: var(--wp--preset--color--neon-cyan);
}
```

### 2. Share Functionality

Add native share API:

```tsx
const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: post.title.rendered,
        text: post.content.rendered.replace(/<[^>]*>/g, ''),
        url: window.location.href,
      });
    } catch (err) {
      console.error('Share failed:', err);
    }
  } else {
    // Fallback: Copy to clipboard
    navigator.clipboard.writeText(window.location.href);
    // Show toast notification
  }
};

<button
  className="single-aside__action-btn"
  aria-label="Share"
  onClick={handleShare}
>
  <Share2 size={20} />
</button>
```

### 3. Character Count Limit

Add visual indicator for long quotes:

```tsx
const maxChars = 280;  // Twitter-style limit
const content = post.content.rendered.replace(/<[^>]*>/g, '');
const truncated = content.length > maxChars
  ? content.substring(0, maxChars) + '…'
  : content;

<div className="single-aside__quote">
  &ldquo;{truncated}&rdquo;
</div>
```

### 4. Author Attribution

Add optional author display:

```tsx
{post.author && (
  <div className="single-aside__author">
    <img
      src={post.author.avatar}
      alt={post.author.name}
      className="single-aside__avatar"
    />
    <span className="single-aside__author-name">
      {post.author.name}
    </span>
  </div>
)}
```

**CSS:**
```css
.single-aside__author {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  margin-bottom: var(--wp--preset--spacing--40);
}

.single-aside__avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.single-aside__author-name {
  font-size: var(--wp--preset--font-size--small);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--text-primary);
}
```

### 5. Reply/Comment Thread

Add comment functionality:

```tsx
const [showComments, setShowComments] = useState(false);

<button
  className="single-aside__action-btn"
  aria-label="Comments"
  onClick={() => setShowComments(!showComments)}
>
  <MessageSquare size={20} />
  {post.comment_count > 0 && <span>{post.comment_count}</span>}
</button>

{showComments && (
  <div className="single-aside__comments">
    {/* Comment thread component */}
  </div>
)}
```

---

## Testing Checklist

### Visual Testing
- [ ] Card centered vertically and horizontally
- [ ] Glassmorphism background visible
- [ ] Decorative icon watermark visible (top-right)
- [ ] Icon circle gradient (cyan → pink)
- [ ] Icon circle has cyan MessageSquare icon
- [ ] Quote text large and prominent
- [ ] Curly quotes around text
- [ ] Footer has top border
- [ ] Date timestamp formatted correctly
- [ ] Action buttons visible

### Interaction Testing
- [ ] Like button clickable
- [ ] Share button clickable
- [ ] Action buttons turn cyan on hover
- [ ] (Production) Like button toggles state
- [ ] (Production) Share opens native share dialog

### Responsive Testing
- [ ] Mobile: Card full width with padding
- [ ] Tablet: Card constrained by Container
- [ ] Desktop: Card centered, generous padding
- [ ] All sizes: Vertically centered in viewport
- [ ] All sizes: Text centered horizontally
- [ ] Quote text responsive (font size)

### Dark Mode Testing
- [ ] Card has glassmorphism background (4% white)
- [ ] Card has cyan glow shadow
- [ ] Background icon extremely subtle
- [ ] Icon circle gradient brighter
- [ ] Quote text near-white (95%)
- [ ] Date text 50% white
- [ ] Footer border visible
- [ ] Action buttons cyan on hover

### Accessibility Testing
- [ ] Background icon has aria-hidden
- [ ] Action buttons have aria-label
- [ ] Like button has aria-label
- [ ] Share button has aria-label
- [ ] Tab order logical (icon → like → share)
- [ ] Focus visible on buttons
- [ ] Enter/Space activates buttons
- [ ] (Production) aria-pressed on like button

---

## Common Issues

### Issue: Background icon too prominent

**Cause:** 50% opacity too high

**Solution:** Reduce opacity:
```css
.single-aside__bg-icon {
  opacity: 0.3;  /* Was 0.5 */
}
```

### Issue: Quote text too small on mobile

**Cause:** Fixed font size doesn't scale

**Solution:** Use responsive clamp:
```css
.single-aside__quote {
  font-size: clamp(1.25rem, 3vw, 1.5rem);  /* 20px → 24px */
}
```

### Issue: Cyan glow not visible in dark mode

**Cause:** 5% opacity too subtle

**Solution:** Increase opacity:
```css
.dark .single-aside__card {
  box-shadow: 0 4px 40px rgba(0, 255, 255, 0.12);  /* Was 0.05 */
}
```

### Issue: Card not vertically centered on short screens

**Cause:** Content exceeds 60vh

**Solution:** Remove min-height constraint:
```css
.single-aside {
  min-height: auto;  /* Allow natural height */
  padding-block: var(--wp--preset--spacing--100);  /* Increase padding */
}
```

### Issue: Footer wraps on narrow screens

**Cause:** Flex container too wide

**Solution:** Add flex-wrap:
```css
.single-aside__footer {
  flex-wrap: wrap;
}
```

---

## Related Templates

- **ArchiveAside** (`/src/app/components/templates/blog/ArchiveAside.tsx`) — Aside archive grid
- **TemplateSingleStandard** (`/src/app/components/templates/TemplateSingleStandard.tsx`) — Standard post format
- **TemplateSingleAudio** (`/src/app/components/templates/TemplateSingleAudio.tsx`) — Audio/podcast format
- **TemplateSingleVideo** (`/src/app/components/templates/TemplateSingleVideo.tsx`) — Video format
- **TemplateSingleGallery** (`/src/app/components/templates/TemplateSingleGallery.tsx`) — Gallery format

---

## Design Inspiration

**Twitter/X Status Updates:**
- Centered card layout
- Quote-style text
- Timestamp + action buttons
- Minimal, focused design

**Key Differences:**
- Glassmorphism background (not flat white)
- Gradient icon circle (brand identity)
- Decorative watermark icon
- Cyan glow in dark mode

---

**Status:** ✅ Production-ready (functional like/share recommended)  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After social action implementation
