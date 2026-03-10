# ArchiveHeader Pattern

**Version:** 1.0  
**Type:** Pattern (Archive Header Display)  
**WordPress Mapping:** Archive Title Block + Archive Description Block  
**File:** `/components/patterns/ArchiveHeader.tsx`

---

## Overview

The ArchiveHeader pattern provides a consistent, reusable header component for all archive templates. It displays the archive title, description, metadata, and optional icon/avatar with centered layout and responsive typography.

**Purpose:**
- Display archive page headers consistently
- Show archive type (category, author, tag)
- Provide context and metadata
- Maintain visual hierarchy
- Support dark mode

**WordPress Equivalent:**
- Archive Title Block
- Archive Description Block
- Post Author Avatar Block
- Category Description Block

---

## Component Structure

```
ArchiveHeader (Pattern)
└── Header Container
    ├── Icon/Avatar (optional)
    ├── Label/Badge (optional)
    ├── Title (h1)
    ├── Description
    ├── Metadata
    └── Custom Content (slot)
```

---

## Props Interface

```typescript
interface ArchiveHeaderProps {
  /**
   * Optional icon element
   */
  icon?: React.ReactNode;

  /**
   * Icon background color theme
   * @default 'purple'
   */
  iconColor?: 'purple' | 'blue' | 'green' | 'red' | 'gray';

  /**
   * Label text above title
   */
  label?: string;

  /**
   * Archive title (h1)
   */
  title: string;

  /**
   * Description/bio text
   */
  description?: string;

  /**
   * Metadata (post count, dates, etc.)
   */
  metadata?: string | React.ReactNode;

  /**
   * Custom content slot
   */
  children?: React.ReactNode;

  /**
   * Custom CSS classes
   */
  className?: string;
}
```

---

## Usage Examples

### Example 1: Blog Category Archive

```tsx
import { ArchiveHeader } from '@/components/patterns/ArchiveHeader';
import { Folder } from '@phosphor-icons/react';

<ArchiveHeader
  icon={<Folder size={40} />}
  iconColor="purple"
  label="Category"
  title="Lifestyle"
  description="Tips and insights for better living"
  metadata="24 articles"
/>
```

### Example 2: Author Archive

```tsx
import { User } from '@phosphor-icons/react';

<ArchiveHeader
  icon={<User size={40} />}
  iconColor="purple"
  label="Author Archive"
  title="Alex Morgan"
  description="Tech writer and developer advocate"
  metadata={
    <>
      <p>15 articles published</p>
      <p className="text-sm">Latest post: Nov 28, 2024</p>
    </>
  }
/>
```

### Example 3: Product Archive (No Icon)

```tsx
<ArchiveHeader
  title="Shop All"
  description="Browse our complete collection of high-quality products"
  metadata="248 products"
/>
```

### Example 4: Tag Archive

```tsx
import { Tag } from '@phosphor-icons/react';

<ArchiveHeader
  icon={<Tag size={40} />}
  iconColor="blue"
  label="Tag"
  title="Productivity"
  description="Articles tagged with productivity"
  metadata="12 articles"
/>
```

### Example 5: With Custom Content

```tsx
<ArchiveHeader
  title="New Arrivals"
  description="Latest products added this week"
  metadata="32 new products"
>
  <div className="mt-4 flex justify-center gap-3">
    <Button variant="primary">Shop Now</Button>
    <Button variant="outline">View Sale Items</Button>
  </div>
</ArchiveHeader>
```

---

## Features & Capabilities

### Visual Elements
- **Icon/Avatar:** Optional circular icon with gradient background
- **Label/Badge:** Small uppercase label above title
- **Title:** Large h1 heading with proper hierarchy
- **Description:** Supporting text in muted color
- **Metadata:** Additional info (counts, dates)
- **Custom Content:** Flexible slot for CTAs, etc.

### Layout
- Centered text alignment
- Max-width constraint (3xl - ~48rem)
- Consistent spacing
- Responsive sizing

### Styling Options
- **Icon Colors:** purple, blue, green, red, gray
- **Gradients:** from-{color}-600 to-{color}-800
- **Dark Mode:** All elements adapt to dark theme

---

## WordPress FSE Mapping

```html
<!-- wp:group {"className":"archive-header"} -->
<div class="wp-block-group archive-header">
  
  <!-- wp:avatar -->
  <div class="wp-block-avatar">
    <img src="avatar.jpg" alt="Author Name" />
  </div>
  <!-- /wp:avatar -->
  
  <!-- wp:post-terms {"term":"category"} -->
  <div class="wp-block-post-terms">Category</div>
  <!-- /wp:post-terms -->
  
  <!-- wp:query-title {"type":"archive"} -->
  <h1 class="wp-block-query-title">Lifestyle</h1>
  <!-- /wp:query-title -->
  
  <!-- wp:term-description -->
  <div class="wp-block-term-description">
    <p>Tips and insights for better living</p>
  </div>
  <!-- /wp:term-description -->
  
  <!-- wp:paragraph -->
  <p>24 articles</p>
  <!-- /wp:paragraph -->
  
</div>
<!-- /wp:group -->
```

---

## Used In

### Templates
- **ArchiveProduct:** Product shop archive
- **ArchiveCategory:** Blog category archive
- **ArchiveAuthor:** Author post archive
- **TagArchive:** Tag post archive
- **BlogIndex:** Main blog landing

### Pages
- **/shop:** Main shop page
- **/shop/category/*:** Product categories
- **/blog:** Blog landing
- **/blog/category/*:** Blog categories
- **/blog/author/*:** Author pages
- **/blog/tag/*:** Tag pages

---

## Styling & Design Tokens

### Container
```css
.archive-header {
  margin-bottom: 3rem; /* mb-12 */
  text-align: center;
  max-width: 48rem; /* max-w-3xl */
  margin-left: auto;
  margin-right: auto;
}
```

### Icon/Avatar
```css
.archive-header-icon {
  width: 5rem; /* w-20 */
  height: 5rem; /* h-20 */
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

@media (min-width: 1024px) {
  .archive-header-icon {
    width: 6rem; /* lg:w-24 */
    height: 6rem; /* lg:h-24 */
  }
}
```

### Label
```css
.archive-header-label {
  font-size: 0.875rem; /* text-sm */
  font-weight: 700; /* font-bold */
  text-transform: uppercase;
  letter-spacing: 0.05em; /* tracking-wider */
  margin-bottom: 0.5rem; /* mb-2 */
}
```

### Dark Mode
```css
.dark .archive-header-description {
  color: var(--color-text-secondary-dark);
}

.dark .archive-header-label.purple {
  color: var(--color-purple-400);
}
```

---

## Responsive Behavior

### Mobile (< 640px)
- Icon: 80px (w-20 h-20)
- Smaller title text
- Compact spacing

### Desktop (> 1024px)
- Icon: 96px (lg:w-24 lg:h-24)
- Larger title text
- Generous spacing

---

## Dark Mode Support

All text colors automatically adapt:
- Title: gray-900 → gray-50
- Description: gray-600 → gray-400
- Label: {color}-600 → {color}-400

Icon gradients remain vibrant in dark mode.

---

## Accessibility

### Semantic HTML
```tsx
<header>
  <div aria-hidden="true">{/* Icon decorative */}</div>
  <div>{/* Label */}</div>
  <h1>{title}</h1>
  <p>{description}</p>
  <div>{metadata}</div>
</header>
```

### Icon
- Uses `aria-hidden="true"` (decorative)
- Not keyboard focusable
- Not announced to screen readers

### Heading Hierarchy
- Always uses h1 for archive title
- Proper document outline

---

## Testing

```typescript
describe('ArchiveHeader', () => {
  it('renders title', () => {
    render(<ArchiveHeader title="Test Archive" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Archive');
  });

  it('renders optional icon', () => {
    const { container } = render(
      <ArchiveHeader 
        title="Test"
        icon={<div data-testid="test-icon" />}
      />
    );
    expect(container.querySelector('[data-testid="test-icon"]')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<ArchiveHeader title="Test" label="Category" />);
    expect(screen.getByText('Category')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(
      <ArchiveHeader 
        title="Test"
        description="Test description"
      />
    );
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders metadata', () => {
    render(
      <ArchiveHeader 
        title="Test"
        metadata="24 articles"
      />
    );
    expect(screen.getByText('24 articles')).toBeInTheDocument();
  });

  it('applies correct icon color class', () => {
    const { container } = render(
      <ArchiveHeader 
        title="Test"
        icon={<div />}
        iconColor="blue"
      />
    );
    const iconContainer = container.querySelector('.from-blue-600');
    expect(iconContainer).toBeInTheDocument();
  });
});
```

---

## Performance Considerations

### Lightweight
- No external dependencies
- Minimal DOM nodes
- CSS-only gradients (no images)

### Static Content
- No state management
- Pure presentation component
- Fast render

---

## Common Patterns

### Blog Category
```tsx
<ArchiveHeader
  icon={<Folder size={40} />}
  iconColor="purple"
  label="Category"
  title={categoryName}
  description={categoryDescription}
  metadata={`${postCount} ${postCount === 1 ? 'article' : 'articles'}`}
/>
```

### Author Bio
```tsx
<ArchiveHeader
  icon={<User size={40} />}
  iconColor="purple"
  label="Author Archive"
  title={authorName}
  metadata={
    <>
      <p>{postCount} articles published</p>
      {latestPostDate && <p className="text-sm">Latest post: {latestPostDate}</p>}
    </>
  }
/>
```

### Product Category
```tsx
<ArchiveHeader
  title={categoryTitle}
  description={categoryDescription}
  metadata={`${productCount} products`}
/>
```

---

## Related Components

- **ArchivePagination:** Pagination for archives
- **ResultsCount:** Results count display
- **PostGrid:** Post listing grid
- **ProductGrid:** Product listing grid
- **Typography:** Title rendering

---

## Best Practices

### Do's ✅
- ✅ Always provide title (required)
- ✅ Use semantic icon colors
- ✅ Keep descriptions concise (1-2 lines)
- ✅ Use label to clarify archive type
- ✅ Provide metadata for context

### Don'ts ❌
- ❌ Don't skip the title
- ❌ Don't use overly long descriptions
- ❌ Don't use decorative icons without aria-hidden
- ❌ Don't nest headings inside
- ❌ Don't use multiple h1 elements on page

---

## FAQ

### Q: When should I use an icon?
**A:** Use icons for author archives (User), category/tag archives (Folder/Tag), or when visual distinction helps. Skip for generic archives.

### Q: What icon colors are available?
**A:** purple (default), blue, green, red, gray. Choose based on archive type or brand guidelines.

### Q: How do I center the header?
**A:** It's centered by default with max-w-3xl. For full-width, pass className="max-w-none".

### Q: Can I use custom metadata formatting?
**A:** Yes, pass React node instead of string for complex layouts.

### Q: Should I use label on all archives?
**A:** Not required, but helps clarify context (e.g., "Category", "Author Archive", "Tag").

---

## Version History

### Version 1.0 (December 2024)
- Initial implementation
- Icon/avatar support
- Label/badge support
- Metadata support
- Dark mode support
- Multiple color themes

---

## See Also

- [ArchivePagination Pattern](/guidelines/patterns/ArchivePagination.md)
- [ResultsCount Pattern](/guidelines/patterns/ResultsCount.md)
- [PostGrid Pattern](/guidelines/components/PostGrid.md)
- [Typography Component](/guidelines/components/Typography.md)