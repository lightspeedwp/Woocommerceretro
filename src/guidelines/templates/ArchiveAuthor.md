# ArchiveAuthor Template

**Category**: Template - Blog Archives  
**Location**: `/components/templates/ArchiveAuthor.tsx`  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Purpose

The ArchiveAuthor template displays a list of blog posts filtered by a specific author. It provides author information, post statistics, and a grid of posts written by that author.

This template maps to the WordPress `author.php` template.

---

## Route Configuration

### Route Pattern

```tsx
<Route path="/blog/author/:authorSlug" element={<ArchiveAuthor />} />
```

### Example URLs

- `/blog/author/alex-morgan` - Posts by Alex Morgan
- `/blog/author/emma-green` - Posts by Emma Green
- `/blog/author/david-chen` - Posts by David Chen

### URL Parameter

| Parameter | Type | Description | Example |
|-----------|------|-------------|---------|
| `authorSlug` | `string` | Lowercase, hyphenated author name | `alex-morgan` |

---

## Usage

### Basic Import

```tsx
import { ArchiveAuthor } from './components/templates/ArchiveAuthor';
```

### In Router

```tsx
import { ArchiveAuthor } from './components/templates/ArchiveAuthor';

<Routes>
  {/* Blog Routes */}
  <Route path="/blog" element={<BlogIndex />} />
  <Route path="/blog/author/:authorSlug" element={<ArchiveAuthor />} />
  <Route path="/blog/:slug" element={<SinglePost />} />
</Routes>
```

---

## Template Structure

### Component Hierarchy

```
ArchiveAuthor
├── Layout (Part)
│   ├── MainHeader (Part)
│   └── MainFooter (Part)
└── Container
    ├── Author Header
    │   ├── Avatar Icon
    │   ├── Author Name
    │   └── Post Statistics
    ├── Results Count
    ├── Post Grid
    │   └── PostCard (Block) × N
    └── Pagination Controls
```

### Code Structure

```tsx
<Layout>
  <Container className="py-12 lg:py-16">
    {/* Author Header */}
    <header className="mb-12 text-center max-w-3xl mx-auto">
      {/* Avatar */}
      {/* Author Name */}
      {/* Stats */}
    </header>

    {/* Results Count */}
    <div className="mb-6 text-center">
      Showing 1–9 of 15 articles
    </div>

    {/* Post Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
      {currentPosts.map(post => <PostCard key={post.id} post={post} />)}
    </div>

    {/* Pagination */}
    <nav aria-label="Author archive pagination">
      {/* Previous/Next buttons + page numbers */}
    </nav>
  </Container>
</Layout>
```

---

## State Management

### Pagination State

```tsx
const [currentPage, setCurrentPage] = useState(1);
const postsPerPage = 9;
```

**Default Settings**:
- Posts per page: 9 (matches 3-column grid)
- Initial page: 1
- Resets when author changes (via URL param)

---

## Data Flow

### URL Parameter Extraction

```tsx
const { authorSlug } = useParams<{ authorSlug: string }>();
// Example: authorSlug = "alex-morgan"
```

### Author Slug Matching

The template converts post author names to slugs for comparison:

```tsx
const posts = BLOG_POSTS.filter(post => {
  const postAuthorSlug = post.author.toLowerCase().replace(/\s+/g, '-');
  return postAuthorSlug === authorSlug;
});
```

**Conversion Examples**:
- `"Alex Morgan"` → `"alex-morgan"`
- `"Emma Green"` → `"emma-green"`
- `"David Chen"` → `"david-chen"`

### Author Name Display

```tsx
const authorName = posts.length > 0 
  ? posts[0].author  // Use actual author name from first post
  : authorSlug?.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  // Fallback: format slug as title case
```

**Fallback Example**: `"alex-morgan"` → `"Alex Morgan"`

---

## Author Header

### Avatar/Icon

Large circular gradient background with User icon:

```tsx
<div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
  <User size={40} className="lg:w-12 lg:h-12" aria-hidden="true" />
</div>
```

**Responsive Sizes**:
- Mobile: 80px × 80px (User icon: 40px)
- Desktop: 96px × 96px (User icon: 48px)

**Styling**:
- Gradient: `purple-600` → `purple-800`
- Shadow: `shadow-lg`
- Centered: `mx-auto`

---

### Label

```tsx
<div className="text-sm font-bold text-purple-600 uppercase tracking-wider mb-2">
  Author Archive
</div>
```

---

### Author Name

```tsx
<Typography variant="h1" className="mb-4">
  {authorName}
</Typography>
```

---

### Statistics

When posts exist:

```tsx
<div className="text-gray-600 space-y-2">
  <p className="text-lg">
    {postCount} {postCount === 1 ? 'Article' : 'Articles'} published
  </p>
  <p className="text-sm">
    Latest post: {latestPostDate}
  </p>
</div>
```

When no posts exist:

```tsx
<div className="text-gray-600 space-y-2">
  <p className="text-lg">
    No posts found by this author.
  </p>
</div>
```

---

## Post Grid

### Grid Layout

```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
  {currentPosts.map(post => (
    <PostCard key={post.id} post={post} />
  ))}\n</div>
```

**Responsive Grid**:

| Breakpoint | Columns | Gap |
|------------|---------|-----|
| Mobile (< 768px) | 1 column | 24px |
| Tablet (768px - 1024px) | 2 columns | 24px |
| Desktop (≥ 1024px) | 3 columns | 32px |

---

## Pagination

### Overview

The ArchiveAuthor template includes full pagination support for authors with more than 9 posts. The pagination UI matches the BlogIndex template for consistency.

### Configuration

```tsx
const postsPerPage = 9; // Matches 3-column × 3-row grid
```

**Default Settings**:
- **Posts per page**: 9
- **Hides when**: Total posts ≤ 9 (single page)
- **Shows when**: Total posts > 9 (multiple pages)

### Pagination Logic

```tsx
const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
const totalPages = Math.ceil(posts.length / postsPerPage);
```

**Example with 15 posts**:
- Page 1: Posts 1-9 (indices 0-8)
- Page 2: Posts 10-15 (indices 9-14)
- Total pages: 2

---

### Results Count Display

Shows current range before post grid:

```tsx
<div className="mb-6 text-center text-gray-600">
  Showing {indexOfFirstPost + 1}–{Math.min(indexOfLastPost, posts.length)} of {postCount} {postCount === 1 ? 'article' : 'articles'}
</div>
```

**Example Outputs**:
- Page 1 of 2: "Showing 1–9 of 15 articles"
- Page 2 of 2: "Showing 10–15 of 15 articles"
- Single post: "Showing 1–1 of 1 article"

---

### Pagination Controls

```tsx
<nav aria-label="Author archive pagination" className="flex flex-wrap justify-center items-center gap-2">
  <button aria-label="Previous page">Previous</button>
  {/* Page numbers */}
  <button aria-label="Next page">Next</button>
</nav>
```

**Control Breakdown**:

| Control | Type | Appearance | Behavior |
|---------|------|------------|----------|
| **Previous** | Button | `<ChevronLeft />` + "Previous" (hidden on mobile) | Navigates to `currentPage - 1` |
| **Page Numbers** | Buttons | Numbers 1, 2, 3... | Direct page navigation |
| **Ellipsis** | Span | `...` | Visual separator (not clickable) |
| **Next** | Button | "Next" (hidden on mobile) + `<ChevronRight />` | Navigates to `currentPage + 1` |

---

### Page Number Display Logic

The template uses smart ellipsis for large page counts:

```tsx
const getPageNumbers = () => {
  const pages: (number | string)[] = [];
  const maxVisible = 5;
  
  if (totalPages <= maxVisible) {
    // Show all pages: [1] [2] [3] [4] [5]
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    // Show with ellipsis logic
    if (currentPage <= 3) {
      // [1] [2] [3] [4] ... [10]
      for (let i = 1; i <= 4; i++) pages.push(i);
      pages.push('ellipsis');
      pages.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      // [1] ... [7] [8] [9] [10]
      pages.push(1);
      pages.push('ellipsis');
      for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
    } else {
      // [1] ... [4] [5] [6] ... [10]
      pages.push(1);
      pages.push('ellipsis');
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push('ellipsis');
      pages.push(totalPages);
    }
  }
  
  return pages;
};
```

**Example Displays**:

| Total Pages | Current Page | Display |
|-------------|--------------|---------|
| 3 | 1 | `[1]` `2` `3` |
| 10 | 1 | `[1]` `2` `3` `4` `...` `10` |
| 10 | 5 | `1` `...` `4` `[5]` `6` `...` `10` |
| 10 | 10 | `1` `...` `7` `8` `9` `[10]` |

---

### Page Change Handler

```tsx
const handlePageChange = (page: number) => {
  setCurrentPage(page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
```

**Behavior**:
- ✅ Updates current page state
- ✅ Smoothly scrolls to top of page
- ✅ Recalculates `currentPosts` slice
- ✅ Maintains URL (page not in URL for simplicity)

---

### Button Styling

#### Previous/Next Buttons

```tsx
className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white flex items-center gap-2 font-medium text-gray-700"
```

**States**:
- Default: White background, gray border
- Hover: Light gray background
- Disabled: 50% opacity, no hover effect, not-allowed cursor

**Responsive**:
- Mobile: Icon only (`<ChevronLeft />`)
- Desktop: Icon + "Previous"/"Next" text

---

#### Page Number Buttons

```tsx
className={`min-w-[44px] h-[44px] flex items-center justify-center border rounded font-medium transition-colors ${
  currentPage === page 
    ? 'bg-purple-600 text-white border-purple-600' 
    : 'border-gray-300 hover:bg-gray-50 text-gray-700'
}`}
```

**Active Page**:
- Background: Purple (`purple-600`)
- Text: White
- Border: Purple

**Inactive Pages**:
- Background: White
- Text: Gray (`gray-700`)
- Border: Gray (`gray-300`)
- Hover: Light gray background

**Touch Target**: Minimum 44×44px (accessibility)

---

### Pagination Accessibility

#### ARIA Labels

```tsx
<nav aria-label="Author archive pagination">
  <button aria-label="Previous page" />
  <button aria-current="page" aria-label="Go to page 2" />
  <button aria-label="Next page" />
</nav>
```

**Attributes**:
- `aria-label="Author archive pagination"` - Identifies pagination region
- `aria-current="page"` - Marks active page
- `aria-label="Go to page N"` - Provides context for each page button
- `aria-label="Previous/Next page"` - Labels navigation buttons

---

#### Keyboard Navigation

- ✅ All buttons are keyboard accessible
- ✅ Tab order follows visual left-to-right order
- ✅ Focus visible on all interactive elements
- ✅ Disabled buttons are not in tab order

---

#### Screen Reader Announcements

When navigating pagination:
1. "Author archive pagination, navigation"
2. "Previous page, button, disabled" (on first page)
3. "Go to page 2, button"
4. "Page 3, current page" (active page)
5. "Next page, button" (enabled)

---

### Mobile Responsiveness

#### Mobile (< 640px)

**Text Labels**: Hidden (icon only)

```tsx
<ChevronLeft size={16} />
<span className="hidden sm:inline">Previous</span>
```

**Layout**: Wraps if too many pages

```tsx
className="flex flex-wrap justify-center items-center gap-2"
```

#### Desktop (≥ 640px)

**Text Labels**: Visible

```tsx
<span className="hidden sm:inline">Previous</span>
```

---

### Pagination Edge Cases

#### No Posts

Pagination doesn't render:

```tsx
{totalPages > 1 && (
  <nav aria-label="Author archive pagination">
    {/* Pagination controls */}
  </nav>
)}
```

#### Single Page (≤ 9 posts)

Pagination hidden, no controls shown.

#### Exactly 10 Posts

- Page 1: Posts 1-9
- Page 2: Posts 10

Pagination shows: `[1]` `2`

---

### WordPress Equivalent

In WordPress, pagination uses the `paginate_links()` function:

```php
<?php
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

$author_id = get_queried_object_id();
$args = array(
  'author' => $author_id,
  'posts_per_page' => 9,
  'paged' => $paged
);

$author_query = new WP_Query($args);

if ($author_query->have_posts()) :
  // Display posts
  
  // Pagination
  echo paginate_links(array(
    'total' => $author_query->max_num_pages,
    'current' => $paged,
    'prev_text' => '&laquo; Previous',
    'next_text' => 'Next &raquo;'
  ));
endif;
?>
```

The React template replicates this pagination behavior.

---

## Empty State

When no posts are found:

```tsx
<div className="text-center py-12">
  <p className="text-gray-500 mb-6">
    This author hasn't published any articles yet.
  </p>
  <Link to="/blog">
    <Button>View All Posts</Button>
  </Link>
</div>
```

**Features**:
- Centered content
- Vertical padding: 48px
- Fallback link to blog index

---

## Responsive Behavior

### Mobile (< 768px)

**Layout**:
- Avatar: 80px
- Single column post grid
- Centered header content

**Spacing**:
- Container padding: 48px vertical
- Grid gap: 24px
- Header margin-bottom: 48px

---

### Tablet (768px - 1024px)

**Layout**:
- Avatar: 80px
- 2-column post grid
- Centered header content

**Spacing**:
- Grid gap: 24px

---

### Desktop (≥ 1024px)

**Layout**:
- Avatar: 96px
- 3-column post grid
- Centered header content

**Spacing**:
- Container padding: 64px vertical
- Grid gap: 32px
- Header margin-bottom: 48px

---

## Styling Guidelines

### Container

```tsx
className="py-12 lg:py-16"
```

- Mobile: 48px vertical padding
- Desktop: 64px vertical padding

---

### Header Section

```tsx
className="mb-12 text-center max-w-3xl mx-auto"
```

- Max-width: 768px
- Centered: `mx-auto`
- Text alignment: center
- Bottom margin: 48px

---

### Typography

| Element | Variant | Size | Weight |
|---------|---------|------|--------|
| Label | - | `text-sm` | `font-bold` |
| Author Name | `h1` | Fluid (32px-56px) | Bold |
| Post Count | - | `text-lg` | Regular |
| Latest Date | - | `text-sm` | Regular |

---

## Accessibility

### Semantic HTML

```tsx
<header className="mb-12 text-center max-w-3xl mx-auto">
  {/* Header content */}
</header>
```

Uses semantic `<header>` element for author information.

---

### Icon Accessibility

```tsx
<User size={40} aria-hidden="true" />
```

The User icon is decorative and hidden from screen readers.

---

### Keyboard Navigation

- ✅ All PostCard links are keyboard accessible
- ✅ "View All Posts" button is focusable
- ✅ Focus states visible on interactive elements

---

### Screen Reader Experience

Screen readers will announce:
1. "Author Archive"
2. Author name (e.g., "Alex Morgan")
3. Post statistics (e.g., "5 Articles published")
4. Latest post date
5. Each PostCard in the grid

---

## SEO Considerations

### Page Title

Should be set dynamically (not implemented in prototype):

```tsx
// In production, use Helmet or similar
<Helmet>
  <title>{authorName} - Blog Author Archive</title>
  <meta name="description" content={`Read articles by ${authorName}. ${postCount} articles published.`} />
</Helmet>
```

---

### Structured Data

For production, add author structured data:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Person",
    "name": "Alex Morgan",
    "url": "https://example.com/blog/author/alex-morgan"
  }
}
```

---

## Integration with PostMeta

The ArchiveAuthor template works seamlessly with the PostMeta pattern:

```tsx
// In PostMeta.tsx
<Link to={`/blog/author/${authorSlug}`}>
  {author}
</Link>

// Clicking author name navigates to:
// /blog/author/alex-morgan
// ↓
// ArchiveAuthor template renders
```

**Flow**:
1. User clicks author name in PostMeta
2. Router navigates to `/blog/author/{authorSlug}`
3. ArchiveAuthor template receives `authorSlug` param
4. Template filters BLOG_POSTS by matching author
5. Displays author header + filtered posts

---

## URL Slug Generation

### From Author Name to Slug

The PostMeta component generates author slugs:

```tsx
// In SinglePost.tsx
<PostMeta 
  author={post.author}
  authorSlug={post.author.toLowerCase().replace(/\s+/g, '-')}
/>
```

### From Slug to Display Name

The ArchiveAuthor template converts slug back to display name:

```tsx
const authorName = authorSlug
  ?.replace(/-/g, ' ')
  .replace(/\b\w/g, char => char.toUpperCase());
```

**Example Transformations**:

| Original Author | Slug | Display Fallback |
|----------------|------|------------------|
| Alex Morgan | `alex-morgan` | Alex Morgan |
| Emma Green | `emma-green` | Emma Green |
| Dr. Jane Smith | `dr.-jane-smith` | Dr. Jane Smith |

---

## Common Use Cases

### Linking from PostMeta

```tsx
<PostMeta 
  author="Alex Morgan"
  authorSlug="alex-morgan"
  // ... other props
/>
```

User clicks "Alex Morgan" → Navigates to `/blog/author/alex-morgan`

---

### Linking from PostCard

```tsx
<PostCard post={post}>
  {/* Inside PostCard component */}
  <Link to={`/blog/author/${post.author.toLowerCase().replace(/\s+/g, '-')}`}>
    {post.author}
  </Link>
</PostCard>
```

---

### Direct Navigation

```tsx
<Link to="/blog/author/emma-green">
  View Emma's Articles
</Link>
```

---

## Testing Checklist

- [ ] Author archive loads with correct author name
- [ ] Posts are correctly filtered by author
- [ ] Post count displays accurate number
- [ ] Latest post date displays correctly
- [ ] Results count displays correctly ("Showing X–Y of Z articles")
- [ ] Empty state shows when author has no posts
- [ ] Avatar renders with correct size on mobile/desktop
- [ ] Post grid uses correct responsive columns
- [ ] PostCard links navigate correctly
- [ ] "View All Posts" button works in empty state
- [ ] Author slug matching handles spaces and special characters
- [ ] Fallback author name formatting works when no posts exist
- [ ] Page scrolls to top on route change
- [ ] **Pagination - General**:
  - [ ] Pagination shows only when > 9 posts
  - [ ] Pagination hides when ≤ 9 posts
  - [ ] Page numbers display correctly with smart ellipsis
  - [ ] Active page is visually highlighted (purple background)
  - [ ] Previous button disabled on page 1
  - [ ] Next button disabled on last page
- [ ] **Pagination - Functionality**:
  - [ ] Clicking page number navigates correctly
  - [ ] Previous/Next buttons navigate correctly
  - [ ] Page change scrolls to top smoothly
  - [ ] Current page state updates correctly
  - [ ] Posts slice updates correctly for each page
- [ ] **Pagination - Accessibility**:
  - [ ] ARIA labels present on all controls
  - [ ] `aria-current="page"` on active page
  - [ ] Keyboard navigation works for all buttons
  - [ ] Disabled buttons not in tab order
  - [ ] Screen readers announce pagination context
- [ ] **Pagination - Mobile**:
  - [ ] Previous/Next show icon only on mobile
  - [ ] Previous/Next show icon + text on desktop
  - [ ] Pagination wraps correctly on narrow screens
  - [ ] Touch targets are 44×44px minimum

---

## Performance

The ArchiveAuthor template is lightweight:
- ✅ No state management (only URL params)
- ✅ No API calls (filters static data)
- ✅ No heavy computations
- ✅ Leverages PostCard component reuse

**Bundle Impact**: Minimal (~2KB)

---

## WordPress Equivalent

In WordPress, the author archive template is typically:

```php
// author.php
<?php get_header(); ?>

<div class="author-archive">
  <header class="author-header">
    <?php echo get_avatar(get_the_author_meta('ID'), 96); ?>
    <h1><?php the_author(); ?></h1>
    <p><?php the_author_meta('description'); ?></p>
    <p><?php echo count_user_posts(get_the_author_meta('ID')); ?> articles</p>
  </header>

  <?php if (have_posts()) : ?>
    <div class="post-grid">
      <?php while (have_posts()) : the_post(); ?>
        <?php get_template_part('template-parts/content', 'card'); ?>
      <?php endwhile; ?>
    </div>
  <?php else : ?>
    <p>No posts found.</p>
  <?php endif; ?>
</div>

<?php get_footer(); ?>
```

The React template replicates this functionality.

---

## Related Components

- **PostCard** - Displays individual post in grid
- **PostMeta** - Links to author archive
- **Layout** - Provides header/footer
- **Container** - Provides max-width and padding
- **Typography** - Text styling
- **Button** - CTA in empty state

---

## Related Templates

- **ArchiveCategory** - Similar structure for category archives
- **TagArchive** - Similar structure for tag archives
- **BlogIndex** - Shows all posts
- **SinglePost** - Individual post view

---

## Related Guidelines

- [Templates Overview](../../Guidelines.md#3-architecture--component-organization)
- [Design Tokens: Spacing](../design-tokens/spacing.md)
- [Design Tokens: Typography](../design-tokens/typography.md)
- [PostMeta Pattern](./PostMeta.md)

---

## Future Enhancements

### Author Bio

Add author biography support:

```tsx
interface Author {
  name: string;
  slug: string;
  bio: string;
  avatar?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
  };
}
```

---

### Author Avatar Images

Replace icon with actual author photos:

```tsx
{author.avatar ? (
  <img 
    src={author.avatar} 
    alt={authorName}
    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full"
  />
) : (
  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full">
    <User size={40} />
  </div>
)}
```

---

### Pagination

Add pagination for authors with many posts:

```tsx
import { Pagination } from '../patterns/Pagination';

<Pagination 
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={handlePageChange}
/>
```

---

### Social Links

Add social media links to author header:

```tsx
<div className="flex gap-4 justify-center mt-4">
  {author.twitter && (
    <a href={author.twitter} aria-label="Twitter">
      <Twitter size={20} />
    </a>
  )}
  {author.linkedin && (
    <a href={author.linkedin} aria-label="LinkedIn">
      <Linkedin size={20} />
    </a>
  )}
</div>
```

---

## Summary

The ArchiveAuthor template provides a dedicated page for browsing posts by a specific author, featuring:

- ✅ Large, prominent author avatar/icon
- ✅ Author statistics (post count, latest post date)
- ✅ Responsive 3-column post grid (1 col mobile, 2 col tablet, 3 col desktop)
- ✅ Full pagination support (9 posts per page with smart ellipsis)
- ✅ Results count display ("Showing 1–9 of 15 articles")
- ✅ Empty state with fallback link
- ✅ Automatic author slug matching and conversion
- ✅ Semantic HTML and accessibility features
- ✅ Integration with PostMeta and PostCard components
- ✅ Clean, professional design with purple accent color
- ✅ Smooth scroll to top on page change

Use this template to provide users with an easy way to discover all content from their favorite authors.

---

## Related Guidelines

**CSS Optimization & Performance:**
- [CSS Optimization Guidelines](../development/css-optimization-guidelines.md) - Comprehensive CSS optimization strategies for memory reduction
- [CSS Optimization Quick Reference](../development/css-optimization-quick-reference.md) - Quick start guide for CSS optimization

---

## Back to Overview

[← Templates Overview](../overview-templates.md)