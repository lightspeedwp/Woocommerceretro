# PostMeta Pattern

**Category**: Pattern - Blog Components  
**Location**: `/components/patterns/PostMeta.tsx`  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Purpose

The PostMeta pattern displays blog post metadata (author, date, comments) in a responsive, mobile-friendly layout. It provides clickable links to author archives and comment sections.

This pattern maps to WordPress post meta display functionality found in theme templates.

---

## Usage

### Basic Usage

```tsx
import { PostMeta } from './components/patterns/PostMeta';

<PostMeta 
  author="Jane Smith"
  authorSlug="jane-smith"
  date="Dec 20, 2024"
  commentCount={12}
  postSlug="my-blog-post"
/>
```

### In SinglePost Template

```tsx
<header className="mb-8 text-center">
  <Typography variant="h1" className="mb-6">
    {post.title}
  </Typography>
  
  <PostMeta 
    author={post.author}
    authorSlug={post.author.toLowerCase().replace(/\s+/g, '-')}
    date={post.date}
    commentCount={post.comments?.length || 0}
    postSlug={post.slug}
    className="text-sm"
  />
</header>
```

---

## Props Interface

```tsx
interface PostMetaProps {
  /** Author display name */
  author: string;
  
  /** Author slug for archive link (optional) */
  authorSlug?: string;
  
  /** Formatted date string */
  date: string;
  
  /** Number of comments (optional, defaults to 0) */
  commentCount?: number;
  
  /** Post slug for comment link anchor (optional) */
  postSlug?: string;
  
  /** Additional CSS classes (optional) */
  className?: string;
}
```

### Prop Details

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `author` | `string` | Yes | - | Author display name |
| `authorSlug` | `string` | No | - | Author slug for `/blog/author/{slug}` link |
| `date` | `string` | Yes | - | Formatted date string |
| `commentCount` | `number` | No | `0` | Number of comments on post |
| `postSlug` | `string` | No | - | Post slug for `#comments` anchor link |
| `className` | `string` | No | `''` | Additional Tailwind classes |

---

## Responsive Behavior

### Mobile (< 640px)

**Layout**: Stacked vertical layout  
**Spacing**: 12px gap between items  
**Icons**: 16px size, left-aligned with text

```tsx
// Mobile renders as:
┌─────────────────┐
│ 👤 Jane Smith   │
│ 📅 Dec 20, 2024 │
│ 💬 12 Comments  │
└─────────────────┘
```

### Desktop (≥ 640px)

**Layout**: Horizontal inline layout  
**Spacing**: 24px gap between items  
**Centering**: Centered with `justify-center`

```tsx
// Desktop renders as:
┌───────────────────────────────────────────┐
│ 👤 Jane Smith  •  📅 Dec 20, 2024  •  💬 12 Comments │
└───────────────────────────────────────────┘
```

---

## Responsive Classes

```tsx
className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6"
```

**Breakdown**:
- `flex flex-col` - Mobile: vertical stack
- `sm:flex-row` - Desktop: horizontal row
- `sm:items-center` - Desktop: vertically center items
- `sm:justify-center` - Desktop: horizontally center container
- `gap-3 sm:gap-6` - Mobile: 12px gap, Desktop: 24px gap

---

## Link Behavior

### Author Link

**When `authorSlug` provided**:
- Links to `/blog/author/{authorSlug}`
- Hover effect: color change + underline
- Accessible label: "View posts by {author}"

**When `authorSlug` omitted**:
- Renders as plain text
- No hover effect

```tsx
{authorSlug ? (
  <Link 
    to={`/blog/author/${authorSlug}`}
    className="hover:text-gray-900 hover:underline"
    aria-label={`View posts by ${author}`}
  >
    {author}
  </Link>
) : (
  <span>{author}</span>
)}
```

---

### Comments Link

**When `postSlug` provided**:
- Links to `#comments` anchor on same page
- Uses native `<a>` tag (not React Router `<Link>`)
- Hover effect: color change + underline
- Accessible label: "N comment(s)"

**Example**:
```tsx
{postSlug ? (
  <a
    href="#comments"
    className="hover:text-gray-900 hover:underline"
    aria-label={`${commentCount} comment${commentCount !== 1 ? 's' : ''}`}
  >
    {commentCount} Comment{commentCount !== 1 ? 's' : ''}
  </a>
) : (
  <span>{commentCount} Comment{commentCount !== 1 ? 's' : ''}</span>
)}
```

**When no `postSlug`**:
- Displays as plain text
- No link behavior

---

## Date Display

The date uses semantic HTML `<time>` element:

```tsx
<time dateTime={date}>{date}</time>
```

**Best Practices**:
- Pass formatted display date (e.g., "Dec 20, 2024")
- For machine-readable dates, update `dateTime` attribute to ISO format

**Example with ISO date**:

```tsx
<PostMeta 
  date="Dec 20, 2024"
  // In component, update to:
  // <time dateTime="2024-12-20">{date}</time>
/>
```

---

## Icon System

Uses Phosphor Icons at 16px size:

```tsx
import { Calendar, User, ChatCircle as MessageCircle } from '@phosphor-icons/react';

<User size={16} className="flex-shrink-0" aria-hidden="true" />
<Calendar size={16} className="flex-shrink-0" aria-hidden="true" />
<MessageCircle size={16} className="flex-shrink-0" aria-hidden="true" />
```

**Icon Guidelines**:
- ✅ `aria-hidden="true"` - Icons are decorative
- ✅ `flex-shrink-0` - Icons maintain size on narrow screens
- ✅ 16px size for compact display

---

## Color & Typography

### Default Colors

```tsx
// Container
className="text-gray-500"

// Hover states (when links active)
className="hover:text-gray-900 hover:underline"
```

### Custom Colors

Use the `className` prop to override:

```tsx
// Purple theme
<PostMeta 
  {...props}
  className="text-purple-600 [&_a:hover]:text-purple-900"
/>

// Dark theme
<PostMeta 
  {...props}
  className="text-gray-400 [&_a:hover]:text-white"
/>
```

---

## Accessibility

### Semantic HTML

- ✅ `<time>` element for date
- ✅ Proper link text (not "click here")
- ✅ ARIA labels for context

### Keyboard Navigation

- ✅ Links are keyboard accessible
- ✅ Focus states on interactive elements
- ✅ Logical tab order

### Screen Readers

```tsx
// Container label
aria-label="Post metadata"

// Author link label
aria-label="View posts by Jane Smith"

// Comments link label (implicit from text)
aria-label="12 comments"
```

---

## Usage Patterns

### Centered (Default)

```tsx
<PostMeta 
  author="Jane Smith"
  date="Dec 20, 2024"
  commentCount={5}
  className="text-sm"
/>
```

**Result**: Centered on desktop, left-aligned on mobile

---

### Left-Aligned

```tsx
<PostMeta 
  author="Jane Smith"
  date="Dec 20, 2024"
  commentCount={5}
  className="sm:justify-start"
/>
```

**Result**: Left-aligned on all screen sizes

---

### With Custom Styling

```tsx
<PostMeta 
  author="Jane Smith"
  date="Dec 20, 2024"
  commentCount={5}
  className="text-xs text-gray-400 italic"
/>
```

---

## WordPress Equivalent

In WordPress themes, post meta is typically displayed using:

```php
<!-- Author -->
<span class="author">
  By <?php the_author_posts_link(); ?>
</span>

<!-- Date -->
<time datetime="<?php echo get_the_date('c'); ?>">
  <?php echo get_the_date(); ?>
</time>

<!-- Comments -->
<a href="<?php comments_link(); ?>">
  <?php comments_number('0 Comments', '1 Comment', '% Comments'); ?>
</a>
```

The PostMeta component replicates this functionality in React.

---

## Common Patterns

### Blog Archive (Card)

```tsx
<article className="border rounded-lg p-6">
  <h2 className="text-2xl font-bold mb-3">
    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
  </h2>
  
  <PostMeta 
    author={post.author}
    authorSlug={post.authorSlug}
    date={post.date}
    commentCount={post.commentCount}
    className="text-sm mb-4 sm:justify-start"
  />
  
  <p className="text-gray-600">{post.excerpt}</p>
</article>
```

---

### Single Post Header

```tsx
<header className="text-center mb-12">
  <div className="text-sm text-purple-600 mb-2">
    {post.categories.map(cat => cat.name).join(', ')}
  </div>
  
  <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
  
  <PostMeta 
    author={post.author}
    authorSlug={post.authorSlug}
    date={post.date}
    commentCount={post.commentCount}
    postSlug={post.slug}
    className="text-sm"
  />
</header>
```

---

### Minimal Display (No Links)

```tsx
<PostMeta 
  author="Jane Smith"
  date="Dec 20, 2024"
  commentCount={12}
  // No authorSlug or postSlug = no links
/>
```

---

## Testing Checklist

- [ ] Mobile: Items stack vertically with proper spacing
- [ ] Desktop: Items display horizontally and centered
- [ ] Author link navigates to `/blog/author/{slug}` when provided
- [ ] Comments link scrolls to `#comments` anchor when provided
- [ ] Links show hover states (color + underline)
- [ ] Plain text renders when link props omitted
- [ ] Comment count pluralization works (0, 1, 2+ comments)
- [ ] Icons don't wrap or shrink on mobile
- [ ] Keyboard navigation works for all links
- [ ] Screen readers announce proper context

---

## Performance

The PostMeta component is lightweight and stateless:
- ✅ No state management
- ✅ No side effects
- ✅ Pure presentational component
- ✅ Minimal bundle size (~1KB)

---

## Related Components

- **SinglePost Template** - Primary usage location
- **BlogArchive Template** - Secondary usage location
- **Typography** - Text styling
- **Link** - Navigation component

---

## Related Guidelines

- [Patterns Overview](../overview-patterns.md) - Pattern architecture
- [Design Tokens: Spacing](../design-tokens/spacing.md) - Spacing system
- [Mobile: Spacing](../mobile/spacing.md) - Mobile spacing patterns
- [Typography Guidelines](../design-tokens/typography.md) - Text styling

---

## Summary

The PostMeta pattern provides a mobile-friendly, accessible way to display blog post metadata with:

- ✅ Responsive layout (stacks on mobile, horizontal on desktop)
- ✅ Optional author and comment links
- ✅ Semantic HTML with proper ARIA labels
- ✅ Hover states and keyboard navigation
- ✅ Customizable styling via className prop
- ✅ Automatic comment count pluralization
- ✅ Icon-enhanced visual design

Use PostMeta in blog templates to ensure consistent metadata display across your site.