# TemplateSingleAudio

**Component Type:** Template (Blog Single Post / Audio/Podcast Format)  
**Location:** `/src/app/components/templates/TemplateSingleAudio.tsx`  
**CSS:** `/src/styles/sections/blog-funky.css` (Section 11)  
**Route:** `/blog/:slug/audio`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Cyan `#00ffff`

---

## Overview

TemplateSingleAudio is a podcast/audio post template featuring a dark gradient hero, glassmorphism audio player with neon controls, gradient progress bar, and show notes section.

**WordPress Mapping:** WordPress Audio Post Format (Podcast)  
**Post Format:** `audio`  
**Dark Mode:** ✅ Complete support (dark hero design)  
**Player:** ✅ Glassmorphism card with transport controls

---

## Key Features

### Visual Elements

**1. Dark Gradient Hero:**
- Purple → Dark gradient background
- Cyan accent hint (8% opacity)
- Full-width section

**2. Glassmorphism Audio Player:**
- Semi-transparent card (5% white)
- Backdrop blur (12px)
- Subtle border (10% white)
- Album cover art (256px square)
- Transport controls with neon gradient
- Progress bar (pink → cyan gradient)

**3. Player Controls:**
- **Play Button:** Cyan → Lime gradient circle (48px)
- **Skip Buttons:** Transparent with white icons
- **Subscribe Button:** Outlined ghost button
- **Volume Control:** Icon button

**4. Show Notes Section:**
- Toolbar with Share/Download buttons
- Publish date
- Content area (48rem max-width)

### Funky Treatments

**Play Button:** Cyan → Lime gradient + cyan glow on hover  
**Progress Bar:** Pink → Cyan gradient fill  
**Episode Label:** Pink neon text  
**Subscribe Button:** Cyan border/text on hover  
**Action Buttons:** Cyan text + subtle background on hover

---

## Component Structure

### Data Access

```tsx
const { slug } = useParams<{ slug: string }>();
const post = getPostBySlug(slug || '');

const episodeNumber = post.format_data?.podcast_episode_number || 1;
const seasonNumber = post.format_data?.podcast_season || 1;
```

**Format Data Fields:**
- `podcast_episode_number` — Episode number
- `podcast_season` — Season number
- `audio_url` — MP3 file URL (for production)

### JSX Hierarchy

```tsx
<Layout>
  <article className="single-audio">
    
    {/* 1. Audio Player Hero */}
    <section className="single-audio__hero">
      <div className="single-audio__hero-bg" aria-hidden="true" />
      
      <Container>
        <div className="single-audio__player">
          
          {/* Cover Art */}
          <div className="single-audio__cover">
            <img className="single-audio__cover-img" />
          </div>
          
          {/* Player Controls */}
          <div className="single-audio__controls">
            
            {/* Meta Info */}
            <div className="single-audio__meta">
              <span className="single-audio__episode-label">
                Season {seasonNumber}, Episode {episodeNumber}
              </span>
              <h1 className="single-audio__title">...</h1>
              <p className="single-audio__excerpt">...</p>
            </div>
            
            {/* Progress Bar */}
            <div className="single-audio__progress">
              <div className="single-audio__progress-track">
                <div className="single-audio__progress-fill" />
              </div>
              <div className="single-audio__progress-times">
                <span>12:45</span>
                <span>45:30</span>
              </div>
            </div>
            
            {/* Transport Controls */}
            <div className="single-audio__buttons">
              <div className="single-audio__transport">
                <button className="single-audio__transport-btn">
                  <SkipBack />
                </button>
                <button className="single-audio__play-btn">
                  <Play />
                </button>
                <button className="single-audio__transport-btn">
                  <SkipForward />
                </button>
              </div>
              
              <div className="single-audio__actions">
                <button className="single-audio__transport-btn">
                  <Volume2 />
                </button>
                <button className="single-audio__subscribe-btn">
                  Subscribe
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </Container>
    </section>
    
    {/* 2. Show Notes */}
    <section className="single-audio__content">
      <Container>
        
        {/* Toolbar */}
        <div className="single-audio__toolbar">
          <div className="single-audio__toolbar-left">
            <button className="single-audio__action-btn">
              <Share2 /> Share
            </button>
            <button className="single-audio__action-btn">
              <Download /> Download MP3
            </button>
          </div>
          <span className="single-audio__date">
            Published {date}
          </span>
        </div>
        
        {/* Body */}
        <div className="single-audio__body">
          <h3>Show Notes</h3>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
        
      </Container>
    </section>
    
  </article>
</Layout>
```

---

## BEM Class Hierarchy

```
single-audio__hero                     /* Hero section */
├── single-audio__hero-bg              /* Dark gradient background */
└── single-audio__player               /* Glassmorphism card */
    ├── single-audio__cover            /* Album cover container */
    │   └── single-audio__cover-img    /* Cover image */
    └── single-audio__controls         /* Player controls */
        ├── single-audio__meta         /* Episode info */
        │   ├── single-audio__episode-label   /* Season/Episode */
        │   ├── single-audio__title           /* h1 title */
        │   └── single-audio__excerpt         /* Description */
        ├── single-audio__progress            /* Progress section */
        │   ├── single-audio__progress-track  /* Track background */
        │   ├── single-audio__progress-fill   /* Gradient fill */
        │   └── single-audio__progress-times  /* Time labels */
        └── single-audio__buttons             /* Button row */
            ├── single-audio__transport       /* Transport controls */
            │   ├── single-audio__transport-btn   /* Skip buttons */
            │   └── single-audio__play-btn        /* Play button */
            └── single-audio__actions         /* Right actions */
                └── single-audio__subscribe-btn   /* Subscribe CTA */

single-audio__content                  /* Show notes section */
├── single-audio__toolbar              /* Actions toolbar */
│   ├── single-audio__toolbar-left    /* Left actions */
│   │   └── single-audio__action-btn  /* Action button */
│   └── single-audio__date            /* Publish date */
└── single-audio__body                /* Content area */
```

**Total BEM Classes:** 23

---

## Section Breakdown

### 1. Dark Gradient Hero

```css
.single-audio__hero {
  position: relative;
  overflow: hidden;
  padding-block: var(--wp--preset--spacing--80);
}

.single-audio__hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    160deg,
    #1a0533 0%,              /* Deep purple */
    #030213 50%,             /* Very dark */
    rgba(0,255,255,0.08) 100%  /* Cyan hint */
  );
}
```

**Effect:** Creates immersive dark environment with subtle cyan accent.

---

### 2. Glassmorphism Player Card

```css
.single-audio__player {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--50);
  align-items: center;
  max-width: 56rem;  /* 896px */
  margin-inline: auto;
  padding: var(--wp--preset--spacing--60);
  border-radius: var(--wp--preset--border-radius--lg, 12px);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (min-width: 768px) {
  .single-audio__player {
    flex-direction: row;  /* Horizontal layout on desktop */
  }
}
```

**Effect:** Semi-transparent glass card with blur effect.

---

### 3. Album Cover Art

```tsx
<div className="single-audio__cover">
  <img
    src={getMediaSource(post.featured_media)}
    alt={post.title.rendered}
    className="single-audio__cover-img"
  />
</div>
```

**CSS:**
```css
.single-audio__cover {
  width: 100%;
  max-width: 256px;
  aspect-ratio: 1;  /* Perfect square */
  border-radius: var(--wp--preset--border-radius--lg, 12px);
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}

.single-audio__cover-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

**Size:** 256×256px square with rounded corners and shadow.

---

### 4. Episode Metadata

```tsx
<div className="single-audio__meta">
  <span className="single-audio__episode-label">
    Season {seasonNumber}, Episode {episodeNumber}
  </span>
  <h1 className="single-audio__title">{post.title.rendered}</h1>
  <p className="single-audio__excerpt">
    {post.excerpt.rendered.replace(/<[^>]*>/g, '')}
  </p>
</div>
```

**Episode Label (Pink Neon):**
```css
.single-audio__episode-label {
  color: var(--wp--preset--color--neon-pink);
  font-size: var(--wp--preset--font-size--small);
  font-weight: var(--wp--preset--font-weight--medium);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

**Title:**
```css
.single-audio__title {
  color: white;
  margin: 0;
}
```

**Excerpt (2-line clamp):**
```css
.single-audio__excerpt {
  color: rgba(255, 255, 255, 0.6);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

### 5. Progress Bar (Gradient)

```tsx
<div className="single-audio__progress">
  <div className="single-audio__progress-track">
    <div className="single-audio__progress-fill" />
  </div>
  <div className="single-audio__progress-times">
    <span>12:45</span>
    <span>45:30</span>
  </div>
</div>
```

**Track:**
```css
.single-audio__progress-track {
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
}
```

**Fill (Pink → Cyan Gradient):**
```css
.single-audio__progress-fill {
  height: 100%;
  width: 28%;  /* Static demo - would be dynamic */
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    var(--wp--preset--color--neon-pink),
    var(--wp--preset--color--neon-cyan)
  );
}
```

**Times:**
```css
.single-audio__progress-times {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
}
```

**Production:** Replace `width: 28%` with dynamic `currentTime / duration * 100`.

---

### 6. Transport Controls

**Container:**
```css
.single-audio__transport {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--30);
}
```

**Skip Buttons:**
```css
.single-audio__transport-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.2s ease;
  padding: var(--wp--preset--spacing--10);
}

.single-audio__transport-btn:hover {
  color: white;
}
```

**Play Button (Cyan → Lime Gradient):**
```css
.single-audio__play-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    var(--wp--preset--color--neon-cyan),
    var(--wp--preset--color--neon-lime, #ccff00)
  );
  color: #030213;  /* Dark text on bright gradient */
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.single-audio__play-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);  /* Cyan glow */
}
```

**Reduced Motion:**
```css
@media (prefers-reduced-motion: reduce) {
  .single-audio__play-btn:hover {
    transform: none;
  }
}
```

---

### 7. Subscribe Button

```tsx
<button className="single-audio__subscribe-btn">Subscribe</button>
```

**CSS:**
```css
.single-audio__subscribe-btn {
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--40);
  border-radius: var(--wp--preset--border-radius--md, 8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  font-weight: var(--wp--preset--font-weight--medium);
  font-size: var(--wp--preset--font-size--small);
  transition: border-color 0.2s ease, color 0.2s ease;
}

.single-audio__subscribe-btn:hover {
  border-color: var(--wp--preset--color--neon-cyan);
  color: var(--wp--preset--color--neon-cyan);
}
```

**Effect:** Ghost button that turns cyan on hover.

---

### 8. Show Notes Toolbar

```tsx
<div className="single-audio__toolbar">
  <div className="single-audio__toolbar-left">
    <button className="single-audio__action-btn">
      <Share2 size={16} aria-hidden="true" />
      Share
    </button>
    <button className="single-audio__action-btn">
      <Download size={16} aria-hidden="true" />
      Download MP3
    </button>
  </div>
  <span className="single-audio__date">
    Published {new Date(post.date).toLocaleDateString()}
  </span>
</div>
```

**Toolbar:**
```css
.single-audio__toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--wp--preset--spacing--30);
  padding-bottom: var(--wp--preset--spacing--50);
  margin-bottom: var(--wp--preset--spacing--50);
  border-bottom: 1px solid var(--wp--preset--color--border-light);
  max-width: 48rem;
  margin-inline: auto;
}

.dark .single-audio__toolbar {
  border-color: rgba(255, 255, 255, 0.08);
}
```

**Action Buttons:**
```css
.single-audio__action-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--wp--preset--spacing--10);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--wp--preset--color--text-secondary);
  font-size: var(--wp--preset--font-size--small);
  padding: var(--wp--preset--spacing--20) var(--wp--preset--spacing--30);
  border-radius: var(--wp--preset--border-radius--md, 8px);
  transition: color 0.2s ease, background 0.2s ease;
}

.single-audio__action-btn:hover {
  color: var(--wp--preset--color--neon-cyan);
  background: rgba(0, 255, 255, 0.05);
}
```

---

### 9. Show Notes Body

```tsx
<div className="single-audio__body">
  <h3>Show Notes</h3>
  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
</div>
```

**CSS:**
```css
.single-audio__body {
  max-width: 48rem;
  margin-inline: auto;
  color: var(--wp--preset--color--text-secondary);
  line-height: var(--wp--preset--line-height--relaxed);
}

.dark .single-audio__body {
  color: rgba(255, 255, 255, 0.7);
}

.single-audio__body h3 {
  color: var(--wp--preset--color--foreground);
  margin-bottom: var(--wp--preset--spacing--40);
}

.dark .single-audio__body h3 {
  color: rgba(255, 255, 255, 0.95);
}
```

---

## Responsive Behavior

### Mobile (< 768px)

**Player Layout:** Vertical (cover top, controls below)  
**Cover Art:** Full width up to 256px  
**Controls:** Full width stack

### Desktop (≥ 768px)

**Player Layout:** Horizontal (cover left, controls right)  
**Cover Art:** Fixed 256px square  
**Controls:** Flex-grow to fill remaining space

---

## Dark Mode

**Note:** This template is designed for dark mode by default (dark gradient hero). The player and controls work in both light and dark modes:

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Hero background | Dark gradient (always) | Same |
| Player card | White 5% glass | Same |
| Text on hero | White | White |
| Show notes bg | `--background` | `--background` |
| Show notes text | `--text-secondary` | `rgba(255,255,255,0.7)` |
| Toolbar border | `--border-light` | `rgba(255,255,255,0.08)` |

---

## Accessibility

### ARIA Attributes

**Buttons:**
```tsx
<button className="single-audio__transport-btn" aria-label="Skip back">
  <SkipBack size={24} />
</button>

<button className="single-audio__play-btn" aria-label="Play">
  <Play size={24} />
</button>

<button className="single-audio__transport-btn" aria-label="Volume">
  <Volume2 size={20} />
</button>
```

**Decorative Elements:**
```tsx
<div className="single-audio__hero-bg" aria-hidden="true" />

<Share2 size={16} aria-hidden="true" />
<Download size={16} aria-hidden="true" />
```

### Keyboard Navigation

- ✅ All buttons focusable
- ✅ Tab order: Skip back → Play → Skip forward → Volume → Subscribe
- ✅ Focus visible (browser default)
- ✅ Toolbar buttons reachable

### Semantic HTML

```tsx
<article className="single-audio">
  <section className="single-audio__hero">
    <h1>...</h1>
  </section>
  <section className="single-audio__content">
    <h3>Show Notes</h3>
  </section>
</article>
```

---

## Production Enhancements

### 1. Real Audio Playback

Replace static demo with HTML5 audio:

```tsx
const [isPlaying, setIsPlaying] = useState(false);
const [currentTime, setCurrentTime] = useState(0);
const [duration, setDuration] = useState(0);
const audioRef = useRef<HTMLAudioElement>(null);

const togglePlay = () => {
  if (audioRef.current) {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }
};

return (
  <>
    <audio
      ref={audioRef}
      src={post.format_data?.audio_url}
      onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
    />
    
    <button onClick={togglePlay}>
      {isPlaying ? <Pause /> : <Play />}
    </button>
    
    <div className="single-audio__progress-fill"
         style={{ width: `${(currentTime / duration) * 100}%` }} />
  </>
);
```

### 2. Podcast RSS Feed

Generate RSS feed for podcast clients:
```tsx
<link rel="alternate" type="application/rss+xml" href="/podcast-feed.xml" />
```

### 3. Chapters/Timestamps

Add chapter navigation:
```tsx
<div className="single-audio__chapters">
  {chapters.map(chapter => (
    <button onClick={() => seekTo(chapter.time)}>
      {chapter.title} ({formatTime(chapter.time)})
    </button>
  ))}
</div>
```

### 4. Playback Speed Control

Add speed selector:
```tsx
<select onChange={(e) => audioRef.current.playbackRate = parseFloat(e.target.value)}>
  <option value="0.5">0.5×</option>
  <option value="1" selected>1×</option>
  <option value="1.5">1.5×</option>
  <option value="2">2×</option>
</select>
```

### 5. Download Actual MP3

Replace demo button:
```tsx
<a
  href={post.format_data?.audio_url}
  download
  className="single-audio__action-btn"
>
  <Download /> Download MP3
</a>
```

---

## Testing Checklist

### Visual Testing
- [ ] Dark gradient hero visible
- [ ] Player card glassmorphism effect
- [ ] Cover art square (256px)
- [ ] Progress bar gradient (pink → cyan)
- [ ] Play button gradient (cyan → lime)
- [ ] Episode label pink
- [ ] Subscribe button outlined

### Interaction Testing
- [ ] Skip back button clickable
- [ ] Play button clickable
- [ ] Skip forward button clickable
- [ ] Volume button clickable
- [ ] Subscribe button clickable
- [ ] Share button clickable
- [ ] Download button clickable
- [ ] Play button scales on hover
- [ ] Play button has cyan glow

### Responsive Testing
- [ ] Mobile: Vertical player layout
- [ ] Desktop: Horizontal player layout
- [ ] Cover art responsive
- [ ] Controls stack properly
- [ ] Toolbar wraps on small screens

### Dark Mode Testing
- [ ] Hero gradient always dark
- [ ] Player glass effect visible
- [ ] White text readable
- [ ] Show notes text visible
- [ ] Toolbar border subtle

### Accessibility Testing
- [ ] All buttons have aria-label
- [ ] Cover image has alt text
- [ ] Tab order logical
- [ ] Focus visible
- [ ] Reduced motion respected
- [ ] Semantic HTML structure

---

## Common Issues

### Issue: Glassmorphism not visible

**Cause:** Missing `backdrop-filter` support

**Solution:** Add fallback background:
```css
.single-audio__player {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  
  /* Fallback for Safari */
  -webkit-backdrop-filter: blur(12px);
  
  /* Fallback for unsupported browsers */
  @supports not (backdrop-filter: blur(12px)) {
    background: rgba(255, 255, 255, 0.15);
  }
}
```

### Issue: Play button too small on mobile

**Cause:** Fixed 48px size

**Solution:** Increase on mobile:
```css
@media (max-width: 767px) {
  .single-audio__play-btn {
    width: 56px;
    height: 56px;
  }
}
```

### Issue: Progress bar not updating

**Cause:** Static width (demo mode)

**Solution:** Use dynamic width from audio element:
```tsx
style={{ width: `${(currentTime / duration) * 100}%` }}
```

---

## Related Templates

- **TemplateSingleVideo** (`/src/app/components/templates/TemplateSingleVideo.tsx`) — Video format
- **ArchiveAudio** (`/src/app/components/templates/blog/ArchiveAudio.tsx`) — Podcast archive grid
- **SinglePostFullWidth** (`/src/app/components/templates/blog/SinglePostFullWidth.tsx`) — Full-width variant
- **TemplateSingleStandard** (`/src/app/components/templates/TemplateSingleStandard.tsx`) — Standard format

---

**Status:** ✅ Production-ready (requires audio URL integration)  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After audio player implementation
