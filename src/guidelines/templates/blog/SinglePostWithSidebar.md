# SinglePostWithSidebar Template

**Component Type:** Template (Blog Single Post / Sidebar Layout)  
**Location:** `/src/app/components/templates/SinglePostWithSidebar.tsx`  
**CSS:** `/src/styles/sections/blog-funky.css`  
**Route:** `/blog/:slug/sidebar`  
**Status:** ✅ Production  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Color Identity:** Purple `#2d0059` / Pink `#ff00ff` / Yellow `#ffff00`

---

## Overview

SinglePostWithSidebar is a traditional blog post layout with main content (2/3 width) and sidebar (1/3 width). Features gradient title in dark mode, glassmorphism sidebar panels, neon tag badges, and comment system.

**WordPress Mapping:** WordPress Single Post Template with Sidebar  
**Dark Mode:** ✅ Complete support with gradient title treatment  
**Sidebar:** ✅ Glassmorphism panels via BlogSidebar pattern

---

## Key Features

### Layout Components

**1. Two-Column Grid:**
- Main content: 2/3 width (article)
- Sidebar: 1/3 width (BlogSidebar)
- Mobile: Stacked (1 column)

**2. Article Section:**
- Breadcrumbs navigation
- Category badges (gradient text)
- Post title (gradient in dark mode)
- Post meta (author, date, comments)
- Featured image (16:9, neon shadow dark mode)
- Post content (HTML rendering)
- Tag cloud (neon glow on hover)
- Post navigation (prev/next)

**3. Sidebar Section:**
- Recent posts
- Categories
- Popular tags
- Newsletter signup
- (via BlogSidebar pattern)

**4. Full-Width Sections:**
- Related posts (3-column grid)
- Comments list
- Comment form (glassmorphism)

### Funky Treatments

**Title:** Gradient text (white → pink) in dark mode  
**Featured Image:** Pink neon shadow in dark mode  
**Tags:** Neon border glow on hover  
**Comments Form:** Glassmorphism background + cyan focus states  
**Sidebar:** Glassmorphism panels (see BlogSidebar.md)

---

## Component Structure

### State Management

```tsx
const { slug } = useParams<{ slug: string }>();
const [post, setPost] = useState<ResolvedPost | null>(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
  setLoading(true);
  window.scrollTo(0, 0);
  const foundPost = getResolvedPostBySlug(slug || '') || null;
  setTimeout(() => {
    setPost(foundPost);
    setLoading(false);
  }, 300);
}, [slug]);
```

**Loading States:**
1. `loading === true` → Skeleton screen
2. `loading === false && !post` → 404 error screen
3. `loading === false && post` → Render content

### Data Types

**ResolvedPost:**
```tsx
interface ResolvedPost {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  author: string;
  authorSlug: string;
  date: string;
  categories: Array<{ name: string; slug: string }>;
  tags: Array<{ name: string; slug: string }>;
  comments?: Array<{
    id: number;
    author: string;
    date: string;
    content: string;
  }>;
}
```

### JSX Hierarchy

```tsx
<Layout>
  <Breadcrumbs />
  
  <div className="single-post-sb">
    <div className="single-post-sb__layout">
      
      {/* Article (2/3) */}
      <article>
        <header className="single-post-sb__article-header">
          <div className="single-post-sb__categories">...</div>
          <h1 className="single-post-sb__title">...</h1>
          <PostMeta />
        </header>
        
        <div className="single-post-sb__featured">
          <img />
        </div>
        
        <div className="single-post-sb__content">
          {/* HTML content */}
        </div>
        
        <div className="single-post-sb__tags">...</div>
        
        <PostNavigation />
      </article>
      
      {/* Sidebar (1/3) */}
      <BlogSidebar />
      
    </div>
    
    {/* Full Width Sections */}
    <Container>
      <RelatedPosts />
    </Container>
    
    <section className="blog-comments">
      {/* Comment list */}
      {/* Comment form */}
    </section>
    
  </div>
</Layout>
```

---

## BEM Class Hierarchy

```
single-post-sb                         /* Container + color identity */
├── single-post-sb__layout             /* Grid: article + sidebar */
│
├── single-post-sb__article-header     /* Article header */
│   ├── single-post-sb__categories     /* Category badges */
│   └── single-post-sb__title          /* h1 (gradient dark mode) */
│
├── single-post-sb__featured           /* Featured image */
│
├── single-post-sb__content            /* Post content */
│   ├── single-post-sb__content p      /* Paragraphs */
│   └── single-post-sb__content a      /* Links */
│
└── single-post-sb__tags               /* Tag section */
    ├── single-post-sb__tags-icon      /* Tag icon */
    └── single-post-sb__tags-list      /* Tag links */

blog-comments                          /* Comments section (shared) */
└── ... (see blog-funky.css)
```

**Total BEM Classes:** 11 (single-post-sb specific)

**Additional Patterns Used:**
- `Breadcrumbs` (site-wide pattern)
- `PostMeta` (author/date pattern)
- `PostNavigation` (prev/next pattern)
- `BlogSidebar` (sidebar pattern)
- `RelatedPosts` (related content pattern)
- `blog-comments` (comment system)

---

## Section Breakdown

### 1. Loading State (Skeleton)

```tsx
{loading && (
  <Layout>
    <div className="blog-skeleton">
      <div className="blog-skeleton__bar blog-skeleton__bar--title" />
      <div className="blog-skeleton__bar blog-skeleton__bar--subtitle" />
      <div className="blog-skeleton__bar blog-skeleton__bar--image" />
      <div className="blog-skeleton__bar blog-skeleton__bar--text" />
      <div className="blog-skeleton__bar blog-skeleton__bar--text" />
    </div>
  </Layout>
)}
```

### 2. Error State (404)

```tsx
{!loading && !post && (
  <Layout>
    <div className="blog-archive__empty">
      <h2>Post not found</h2>
      <p>The article you are looking for does not exist.</p>
      <Link to="/blog" className="blog-archive__empty-cta">
        Return to Blog
      </Link>
    </div>
  </Layout>
)}
```

### 3. Two-Column Layout

```css
.single-post-sb__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--50);
  max-width: var(--wp--preset--layout--wide-size);
  margin-inline: auto;
  padding-inline: var(--wp--preset--spacing--40);
  padding-block: var(--wp--preset--spacing--60);
}

@media (min-width: 1024px) {
  .single-post-sb__layout {
    grid-template-columns: 2fr 1fr;  /* 2/3 article, 1/3 sidebar */
    gap: var(--wp--preset--spacing--60);
  }
}
```

**Mobile:** 1 column (article → sidebar)  
**Desktop:** 2 columns (article left, sidebar right)

### 4. Gradient Title (Dark Mode)

```css
.single-post-sb__title {
  font-family: var(--wp--preset--font-family--base);
  font-size: var(--wp--preset--font-size--700);
  font-weight: var(--wp--preset--font-weight--bold);
  letter-spacing: var(--wp--preset--letter-spacing--tight);
  line-height: var(--wp--preset--line-height--tight);
  color: var(--wp--preset--color--foreground);
  margin-block-end: var(--wp--preset--spacing--40);
}

.dark .single-post-sb__title {
  background: linear-gradient(135deg, #ffffff, var(--wp--preset--color--neon-pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
```

**Effect:** In dark mode, title has white-to-pink gradient text fill.

### 5. Featured Image (Neon Shadow)

```css
.single-post-sb__featured {
  border-radius: var(--wp--preset--border-radius--lg);
  overflow: hidden;
  margin-block-end: var(--wp--preset--spacing--50);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  aspect-ratio: 16 / 9;
}

.dark .single-post-sb__featured {
  box-shadow: 0 4px 16px rgba(255, 0, 255, 0.1);  /* Pink neon shadow */
}
```

### 6. Post Content

```css
.single-post-sb__content {
  font-family: var(--wp--preset--font-family--base);
  font-size: var(--wp--preset--font-size--300);
  line-height: var(--wp--preset--line-height--relaxed);
  color: var(--wp--preset--color--text-secondary);
}

.single-post-sb__content p {
  margin-block-end: var(--wp--preset--spacing--40);
}

.single-post-sb__content a {
  color: var(--wp--preset--color--neon-pink);
  text-decoration: underline;
}
```

**HTML Rendering:**
```tsx
<div 
  className="single-post-sb__content"
  dangerouslySetInnerHTML={{ __html: post.content }}
/>
```

### 7. Tags Section

```tsx
{post.tags.length > 0 && (
  <div className="single-post-sb__tags">
    <Tag size={18} className="single-post-sb__tags-icon" />
    <span className="sr-only">Tags:</span>
    <div className="single-post-sb__tags-list">
      {post.tags.map(tag => (
        <Link 
          key={tag.slug} 
          to={`/blog/tag/${tag.slug}`} 
          className="single-post__tag"
        >
          {tag.name}
        </Link>
      ))}
    </div>
  </div>
)}
```

**Styling:**
```css
.single-post-sb__tags {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--20);
  flex-wrap: wrap;
  padding-block-start: var(--wp--preset--spacing--50);
  border-top: 1px solid var(--wp--preset--color--border);
}

.single-post__tag {
  /* Shared tag styling (see blog-funky.css) */
  /* Includes neon glow hover effect */
}
```

---

## Responsive Behavior

### Mobile (< 1024px)

**Layout:** 1 column (stacked)
```
┌─────────────┐
│   Article   │
├─────────────┤
│   Sidebar   │
├─────────────┤
│   Related   │
├─────────────┤
│  Comments   │
└─────────────┘
```

### Desktop (≥ 1024px)

**Layout:** 2/3 + 1/3 grid
```
┌──────────────┬──────┐
│   Article    │ Side │
│              │ bar  │
├──────────────┴──────┤
│   Related Posts     │
├─────────────────────┤
│      Comments       │
└─────────────────────┘
```

---

## Dark Mode

### Color Adjustments

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Title | Foreground color | White → Pink gradient |
| Featured image shadow | Gray | Pink neon glow |
| Content links | Pink | Pink (same) |
| Sidebar panels | White | Glassmorphism (see BlogSidebar) |
| Comment form | White | Glassmorphism |

---

## Related Patterns

**Used in this template:**
1. **Breadcrumbs** (`/src/app/components/parts/Breadcrumbs.tsx`) — Site navigation
2. **PostMeta** (`/src/app/components/patterns/PostMeta.tsx`) — Author/date/comments
3. **PostNavigation** (`/src/app/components/patterns/PostNavigation.tsx`) — Prev/next links
4. **BlogSidebar** (`/src/app/components/patterns/BlogSidebar.tsx`) — Sidebar widgets
5. **RelatedPosts** (`/src/app/components/patterns/RelatedPosts.tsx`) — Related content

**See:** Pattern guidelines for detailed documentation.

---

## Accessibility

### ARIA Attributes

**Comments Section:**
```tsx
<section id="comments" className="blog-comments" aria-labelledby="comments-heading-sb">
  <h3 id="comments-heading-sb">Comments ({commentCount})</h3>
</section>
```

**Screen Reader Text:**
```tsx
<span className="sr-only">Tags:</span>
```

### Semantic HTML

- `<article>` for main post content
- `<header>` for post header
- `<section>` for comments
- Proper heading hierarchy (h1 → h3 → h4)

### Keyboard Navigation

- ✅ Tab through category links
- ✅ Tab through content links
- ✅ Tab through tag links
- ✅ Tab through sidebar links
- ✅ Tab through comment form fields
- ✅ Focus visible on all elements

---

## Usage

### Import and Render

```tsx
import { SinglePostWithSidebar } from './templates/blog/SinglePostWithSidebar';

// In router
{
  path: 'blog/:slug/sidebar',
  element: <SinglePostWithSidebar />
}
```

### Routes

- `/blog/:slug/sidebar` — Single post with sidebar layout
- Alternative: `/blog/:slug` (default layout)

---

## Common Issues

### Issue: Sidebar appears below content on desktop

**Cause:** Missing media query breakpoint

**Solution:** Verify CSS grid columns:
```css
@media (min-width: 1024px) {
  .single-post-sb__layout {
    grid-template-columns: 2fr 1fr;
  }
}
```

### Issue: Gradient title not showing

**Cause:** Missing dark mode class or WebKit prefix

**Solution:** Ensure both prefixes:
```css
.dark .single-post-sb__title {
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

---

## Testing Checklist

### Visual Testing
- [ ] Two-column layout on desktop
- [ ] Stacked layout on mobile
- [ ] Gradient title in dark mode
- [ ] Pink shadow on featured image (dark)
- [ ] Sidebar glassmorphism panels
- [ ] Comment form visible

### Interaction Testing
- [ ] Category links navigate
- [ ] Tag links navigate
- [ ] Prev/next navigation works
- [ ] Comment form submits
- [ ] Sidebar widgets functional

### Responsive Testing
- [ ] Mobile: 1 column
- [ ] Desktop: 2/3 + 1/3 grid
- [ ] Sidebar order correct

### Dark Mode Testing
- [ ] Title gradient visible
- [ ] Featured image neon shadow
- [ ] Sidebar glassmorphism works
- [ ] All text readable

---

## Future Enhancements

### 1. Table of Contents

Generate from headings:
```tsx
<TableOfContents content={post.content} />
```

### 2. Reading Progress Bar

Show scroll progress:
```tsx
<ReadingProgress />
```

### 3. Social Sharing

Add share buttons:
```tsx
<SocialShare url={post.link} title={post.title} />
```

### 4. Author Bio Box

Display author information:
```tsx
<AuthorBio author={post.author} />
```

### 5. Sticky Sidebar

Make sidebar stick on scroll:
```css
@media (min-width: 1024px) {
  .blog-sidebar {
    position: sticky;
    top: 80px;
  }
}
```

---

**Status:** ✅ Production-ready  
**Last Updated:** February 23, 2026  
**Version:** 2.6 (Funky Redesign - Phase 6)  
**Next Review:** After reading engagement metrics
