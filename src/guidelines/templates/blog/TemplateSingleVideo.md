# TemplateSingleVideo

**Component Type:** Template (Blog Single Post / Video Format)  
**Location:** `/src/app/components/templates/TemplateSingleVideo.tsx`  
**CSS:** `/src/styles/sections/blog-funky.css` (Section 12)  
**Route:** `/blog/:slug/video`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Red `#ff4444`

---

## Overview

TemplateSingleVideo is a YouTube-style video post template featuring a dark cinema background, 16:9 embedded video player, gradient subscribe button, and video description section.

**WordPress Mapping:** WordPress Video Post Format  
**Post Format:** `video`  
**Dark Mode:** ✅ Complete support (dark cinema design)  
**Video:** ✅ iframe embed support (YouTube, Vimeo, etc.)

---

## Key Features

### Visual Elements

**1. Dark Cinema Hero:**
- Pure dark background (`#030213`)
- White text on dark
- Cinema-style presentation

**2. Video Player:**
- 16:9 aspect ratio
- Rounded corners
- Deep shadow (cinematic)
- iframe embed support
- Placeholder state for missing videos

**3. Info Section:**
- Title + Meta (date, author)
- Action buttons (Subscribe, Share)
- Responsive two-column layout

**4. Action Buttons:**
- **Subscribe:** Pink → Red gradient with lift effect
- **Share:** Ghost button with cyan hover

### Funky Treatments

**Subscribe Button:** Pink → Red gradient + pink glow on hover  
**Share Button:** Cyan border/text on hover  
**Video Player:** Deep shadow for cinematic feel  
**Hero Background:** Pure dark cinema atmosphere

---

## Component Structure

### Data Access

```tsx
const { slug } = useParams<{ slug: string }>();
const post = getPostBySlug(slug || '');
const author = getUserById(post.author);
const authorName = author?.name || 'Unknown Author';
const videoUrl = post.format_data?.video_url;
```

**Format Data Fields:**
- `video_url` — YouTube/Vimeo embed URL
- Example: `https://www.youtube.com/embed/VIDEO_ID`

### JSX Hierarchy

```tsx
<Layout>
  <article className="single-video">
    
    {/* 1. Video Player Hero */}
    <section className="single-video__hero">
      <Container>
        <div className="single-video__wrapper">
          
          {/* Video Player */}
          <div className="single-video__player">
            {videoUrl ? (
              <iframe
                src={videoUrl}
                className="single-video__iframe"
                title={post.title.rendered}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="single-video__placeholder">
                <span>Video Placeholder</span>
              </div>
            )}
          </div>
          
          {/* Info Row */}
          <div className="single-video__info">
            <div className="single-video__info-left">
              <h1 className="single-video__title">...</h1>
              <div className="single-video__meta">
                <span className="single-video__meta-item">
                  <Calendar /> {date}
                </span>
                <span className="single-video__meta-item">
                  <User /> {author}
                </span>
              </div>
            </div>
            
            <div className="single-video__actions">
              <button className="single-video__subscribe-btn">
                Subscribe
              </button>
              <button className="single-video__share-btn">
                <Share2 /> Share
              </button>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
    
    {/* 2. Content/Description */}
    <section className="single-video__content">
      <Container>
        <div className="single-video__body"
             dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Container>
    </section>
    
  </article>
</Layout>
```

---

## BEM Class Hierarchy

```
single-video__hero                     /* Dark cinema section */
└── single-video__wrapper              /* Content wrapper */
    ├── single-video__player           /* Video container */
    │   ├── single-video__iframe       /* Embedded video */
    │   └── single-video__placeholder  /* Fallback state */
    └── single-video__info             /* Info row */
        ├── single-video__info-left    /* Title + Meta */
        │   ├── single-video__title    /* h1 title */
        │   └── single-video__meta     /* Date + Author */
        │       └── single-video__meta-item   /* Single meta item */
        └── single-video__actions      /* Action buttons */
            ├── single-video__subscribe-btn   /* Subscribe CTA */
            └── single-video__share-btn       /* Share button */

single-video__content                  /* Description section */
└── single-video__body                /* Content area */
```

**Total BEM Classes:** 13

---

## Section Breakdown

### 1. Dark Cinema Hero

```css
.single-video__hero {
  padding-top: var(--wp--preset--spacing--80);
  padding-bottom: var(--wp--preset--spacing--60);
  background: #030213;  /* Pure dark */
  color: white;
}
```

**Effect:** Creates cinema-style dark environment for video viewing.

---

### 2. Wrapper Container

```css
.single-video__wrapper {
  max-width: 64rem;  /* 1024px */
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--50);
}
```

**Layout:** Vertical stack with generous gap between player and info.

---

### 3. Video Player (16:9 Aspect Ratio)

```tsx
<div className="single-video__player">
  {videoUrl ? (
    <iframe
      src={videoUrl}
      className="single-video__iframe"
      title={post.title.rendered}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  ) : (
    <div className="single-video__placeholder">
      <span>Video Placeholder</span>
    </div>
  )}
</div>
```

**Player Container:**
```css
.single-video__player {
  aspect-ratio: 16 / 9;
  border-radius: var(--wp--preset--border-radius--lg, 12px);
  overflow: hidden;
  background: #111;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.6);  /* Deep cinematic shadow */
}
```

**iframe:**
```css
.single-video__iframe {
  width: 100%;
  height: 100%;
  border: none;
}
```

**Placeholder (Fallback):**
```css
.single-video__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.3);
}
```

**Effect:** 16:9 ratio container that adapts to any width while maintaining proportions.

---

### 4. Info Section (Title + Meta + Actions)

```css
.single-video__info {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--40);
}

@media (min-width: 768px) {
  .single-video__info {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
}
```

**Mobile:** Vertical stack (title → meta → actions)  
**Desktop:** Horizontal (title/meta left, actions right)

---

### 5. Title & Meta

**Info Left Container:**
```css
.single-video__info-left {
  flex: 1;
}
```

**Title:**
```css
.single-video__title {
  color: white;
  margin: 0 0 var(--wp--preset--spacing--20) 0;
}
```

**Meta Row:**
```css
.single-video__meta {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--40);
  font-size: var(--wp--preset--font-size--small);
  color: rgba(255, 255, 255, 0.5);
}

.single-video__meta-item {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
}
```

**JSX:**
```tsx
<div className="single-video__meta">
  <span className="single-video__meta-item">
    <Calendar size={16} aria-hidden="true" />
    {new Date(post.date).toLocaleDateString()}
  </span>
  <span className="single-video__meta-item">
    <User size={16} aria-hidden="true" />
    {authorName}
  </span>
</div>
```

---

### 6. Action Buttons

**Container:**
```css
.single-video__actions {
  display: flex;
  gap: var(--wp--preset--spacing--20);
  flex-shrink: 0;
}
```

**Subscribe Button (Pink → Red Gradient):**
```css
.single-video__subscribe-btn {
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--40);
  border-radius: var(--wp--preset--border-radius--md, 8px);
  border: none;
  cursor: pointer;
  font-weight: var(--wp--preset--font-weight--semibold);
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-pink),
    #ff4444  /* Bright red */
  );
  color: white;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.single-video__subscribe-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(255, 0, 255, 0.3);  /* Pink glow */
}
```

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .single-video__subscribe-btn:hover {
    transform: none;
  }
}
```

**Effect:** Button lifts slightly with pink glow on hover.

---

**Share Button (Ghost with Cyan Hover):**
```css
.single-video__share-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--40);
  border-radius: var(--wp--preset--border-radius--md, 8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  font-weight: var(--wp--preset--font-weight--medium);
  transition: border-color 0.2s ease, color 0.2s ease;
}

.single-video__share-btn:hover {
  border-color: var(--wp--preset--color--neon-cyan);
  color: var(--wp--preset--color--neon-cyan);
}
```

**Effect:** Outlined button that turns cyan on hover.

---

### 7. Content/Description Section

```tsx
<section className="single-video__content">
  <Container>
    <div
      className="single-video__body"
      dangerouslySetInnerHTML={{ __html: post.content.rendered }}
    />
  </Container>
</section>
```

**Section:**
```css
.single-video__content {
  padding-block: var(--wp--preset--spacing--70);
  background: var(--wp--preset--color--background);
}
```

**Body:**
```css
.single-video__body {
  max-width: 48rem;
  margin-inline: auto;
  color: var(--wp--preset--color--text-secondary);
  line-height: var(--wp--preset--line-height--relaxed);
}

.dark .single-video__body {
  color: rgba(255, 255, 255, 0.7);
}
```

---

## Responsive Behavior

### Mobile (< 768px)

**Info Layout:** Vertical stack
- Title + Meta (full width)
- Action buttons below (horizontal row)

**Video Player:** Full width (maintains 16:9)

### Desktop (≥ 768px)

**Info Layout:** Horizontal
- Title + Meta (flex-grow left)
- Action buttons (fixed width right)

**Video Player:** Max 1024px centered

---

## Dark Mode

**Note:** This template is designed for dark mode by default (dark cinema hero). Content section adapts to theme:

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Hero background | Dark (`#030213`) | Same |
| Text on hero | White | White |
| Content bg | `--background` | `--background` |
| Content text | `--text-secondary` | `rgba(255,255,255,0.7)` |

---

## Accessibility

### ARIA Attributes

**iframe:**
```tsx
<iframe
  src={videoUrl}
  className="single-video__iframe"
  title={post.title.rendered}  // Descriptive title
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

**Decorative Icons:**
```tsx
<Calendar size={16} aria-hidden="true" />
<User size={16} aria-hidden="true" />
<Share2 size={18} aria-hidden="true" />
```

### Keyboard Navigation

- ✅ Video player keyboard controls (native iframe)
- ✅ Subscribe button focusable
- ✅ Share button focusable
- ✅ Tab order: Video → Subscribe → Share
- ✅ Focus visible (browser default)

### Semantic HTML

```tsx
<article className="single-video">
  <section className="single-video__hero">
    <h1>...</h1>
  </section>
  <section className="single-video__content">
    {/* Description */}
  </section>
</article>
```

---

## Video Embed Support

### YouTube Embed

```tsx
const videoUrl = `https://www.youtube.com/embed/${videoId}`;

// With autoplay and controls
const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`;
```

### Vimeo Embed

```tsx
const videoUrl = `https://player.vimeo.com/video/${videoId}`;

// With autoplay
const videoUrl = `https://player.vimeo.com/video/${videoId}?autoplay=1`;
```

### Self-Hosted Video

For self-hosted videos, use HTML5 `<video>` instead of iframe:

```tsx
{videoUrl ? (
  <video
    src={videoUrl}
    className="single-video__iframe"
    controls
    poster={post.featured_media}
  >
    Your browser does not support the video tag.
  </video>
) : (
  <div className="single-video__placeholder">
    <span>Video Placeholder</span>
  </div>
)}
```

---

## Production Enhancements

### 1. Video Thumbnails

Add custom thumbnail for non-autoplay:

```tsx
<div className="single-video__player">
  {!isPlaying && (
    <button onClick={() => setIsPlaying(true)} className="video-play-overlay">
      <PlayCircle size={64} />
    </button>
  )}
  {isPlaying && <iframe src={videoUrl} />}
</div>
```

### 2. Video Duration

Display video length:

```tsx
<div className="single-video__meta">
  <span className="single-video__duration">
    <Clock size={16} />
    {formatDuration(post.format_data?.video_duration)}
  </span>
</div>
```

### 3. Related Videos

Add related videos section:

```tsx
<section className="single-video__related">
  <h2>Related Videos</h2>
  <VideoGrid posts={relatedVideos} />
</section>
```

### 4. Chapters/Timestamps

Add chapter navigation:

```tsx
<div className="single-video__chapters">
  {chapters.map(chapter => (
    <button onClick={() => seekToTime(chapter.time)}>
      {formatTime(chapter.time)} - {chapter.title}
    </button>
  ))}
</div>
```

### 5. View Count & Stats

Display video statistics:

```tsx
<div className="single-video__stats">
  <span>{viewCount.toLocaleString()} views</span>
  <span>{likeCount.toLocaleString()} likes</span>
</div>
```

---

## Testing Checklist

### Visual Testing
- [ ] Dark hero background visible
- [ ] Video player 16:9 ratio
- [ ] Video player rounded corners
- [ ] Deep shadow visible
- [ ] Subscribe button gradient (pink → red)
- [ ] Share button outlined
- [ ] Title white on dark
- [ ] Meta text subtle (50% opacity)

### Interaction Testing
- [ ] Video plays in iframe
- [ ] Video fullscreen works
- [ ] Subscribe button clickable
- [ ] Share button clickable
- [ ] Subscribe button lifts on hover
- [ ] Subscribe button has pink glow
- [ ] Share button turns cyan on hover

### Responsive Testing
- [ ] Mobile: Info stack vertical
- [ ] Desktop: Info horizontal layout
- [ ] Video maintains 16:9 all sizes
- [ ] Actions wrap on small screens
- [ ] Player max-width 1024px

### Dark Mode Testing
- [ ] Hero always dark
- [ ] White text readable
- [ ] Content section theme-aware
- [ ] Description text visible in both modes

### Accessibility Testing
- [ ] iframe has descriptive title
- [ ] Decorative icons hidden from SR
- [ ] Tab order logical
- [ ] Focus visible
- [ ] Reduced motion respected
- [ ] Video keyboard controls work

---

## Common Issues

### Issue: Video not embedding

**Cause:** Incorrect embed URL format

**Solution:** Verify embed URL:
```tsx
// YouTube
https://www.youtube.com/embed/VIDEO_ID

// Vimeo
https://player.vimeo.com/video/VIDEO_ID

// NOT watch URLs
https://www.youtube.com/watch?v=VIDEO_ID  // ❌ Wrong
```

### Issue: Video aspect ratio broken on mobile

**Cause:** Missing `aspect-ratio` support

**Solution:** Add fallback padding-top:
```css
.single-video__player {
  aspect-ratio: 16 / 9;
  
  /* Fallback for older browsers */
  @supports not (aspect-ratio: 16 / 9) {
    padding-top: 56.25%;  /* 9/16 = 0.5625 */
    position: relative;
  }
}

.single-video__player iframe {
  @supports not (aspect-ratio: 16 / 9) {
    position: absolute;
    top: 0;
    left: 0;
  }
}
```

### Issue: Subscribe button lift too subtle

**Cause:** Small transform value

**Solution:** Increase lift:
```css
.single-video__subscribe-btn:hover {
  transform: translateY(-2px);  /* Was -1px */
}
```

### Issue: Share button icon misaligned

**Cause:** Missing `align-items: center`

**Solution:** Verify flexbox alignment:
```css
.single-video__share-btn {
  display: inline-flex;
  align-items: center;  /* Ensure this is present */
  gap: var(--wp--preset--spacing--10);
}
```

---

## Related Templates

- **TemplateSingleAudio** (`/src/app/components/templates/TemplateSingleAudio.tsx`) — Audio/podcast format
- **ArchiveVideo** (`/src/app/components/templates/blog/ArchiveVideo.tsx`) — Video archive grid
- **TemplateSingleGallery** (`/src/app/components/templates/TemplateSingleGallery.tsx`) — Gallery format
- **TemplateSingleStandard** (`/src/app/components/templates/TemplateSingleStandard.tsx`) — Standard format

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After video analytics integration
