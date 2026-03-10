# Container Component

**Category**: UI Component - Common Layout  
**Location**: `/components/common/Container.tsx`  
**Version**: 2.1  
**Last Updated**: December 2024

---

## Purpose

The Container component is a responsive layout wrapper that constrains content width and provides fluid horizontal padding. It ensures consistent max-width and spacing across all page sections.

---

## Usage

### Basic Usage

```tsx
import { Container } from './components/common/Container';

// Standard site container (1400px max-width)
<Container>
  <h1>Page Content</h1>
  <p>Your content here...</p>
</Container>
```

### Variants

```tsx
// Site container (1400px) - Default
<Container variant="site">
  <ProductGrid products={products} />
</Container>

// Content container (960px) - Narrower for readability
<Container variant="content">
  <BlogPost content={post.content} />
</Container>

// Wide container (1200px) - Between site and content
<Container variant="wide">
  <ImageGallery images={gallery} />
</Container>

// Full width (no max-width) - Edge-to-edge content
<Container variant="full">
  <HeroImage src={hero} />
</Container>
```

---

## Props Interface

```tsx
interface ContainerProps {
  variant?: 'site' | 'content' | 'wide' | 'full';
  className?: string;
  children: React.ReactNode;
}
```

### Prop Details

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'site' \| 'content' \| 'wide' \| 'full'` | `'site'` | Container width variant |
| `className` | `string` | `''` | Additional CSS classes |
| `children` | `React.ReactNode` | - | Container content |

---

## Variant Specifications

### Site Container (Default)

**Max Width**: 1400px  
**Padding**: `clamp(1rem, 3vw, 3rem)` (16px → 48px)  
**Use Cases**: Default page content, product grids, general layouts

```tsx
<Container variant="site">
  {/* 1400px max width */}
</Container>
```

**CSS Classes**:
```tsx
'max-w-[1400px] mx-auto px-[clamp(1rem,3vw,3rem)] w-full'
```

**Responsive Behavior**:
- Mobile (375px): 16px side padding
- Tablet (768px): ~24px side padding
- Desktop (1440px): 48px side padding
- Content: Centered with `mx-auto`

---

### Content Container

**Max Width**: 960px  
**Padding**: `clamp(1rem, 3vw, 3rem)` (16px → 48px)  
**Use Cases**: Blog posts, long-form content, reading-optimized layouts

```tsx
<Container variant="content">
  {/* 960px max width - optimal line length */}
</Container>
```

**CSS Classes**:
```tsx
'max-w-[960px] mx-auto px-[clamp(1rem,3vw,3rem)] w-full'
```

**Why 960px?**
- Optimal line length: ~65-75 characters
- Enhanced readability for text-heavy content
- Follows typographic best practices

---

### Wide Container

**Max Width**: 1200px  
**Padding**: `clamp(1rem, 3vw, 3rem)` (16px → 48px)  
**Use Cases**: Medium-width content, image galleries, between site and content

```tsx
<Container variant="wide">
  {/* 1200px max width */}
</Container>
```

**CSS Classes**:
```tsx
'max-w-[1200px] mx-auto px-[clamp(1rem,3vw,3rem)] w-full'
```

---

### Full Width

**Max Width**: None (100%)  
**Padding**: `clamp(1rem, 3vw, 3rem)` (16px → 48px)  
**Use Cases**: Hero images, full-width sliders, edge-to-edge content

```tsx
<Container variant="full">
  {/* No max-width constraint */}
</Container>
```

**CSS Classes**:
```tsx
'w-full ml-[calc(50%-50vw)]'
```

**Note**: Full-width breaks out of parent containers to fill viewport width.

---

## Fluid Padding System

All containers use `clamp()` for smooth responsive padding:

```css
px-[clamp(1rem, 3vw, 3rem)]
```

**Breakdown**:
- **Minimum**: `1rem` (16px) on smallest screens
- **Preferred**: `3vw` (3% of viewport width) - scales with viewport
- **Maximum**: `3rem` (48px) on largest screens

**Responsive Scale**:
| Viewport | Padding (each side) |
|----------|---------------------|
| 375px    | 16px                |
| 768px    | 23px                |
| 1024px   | 31px                |
| 1440px   | 43px                |
| 1920px   | 48px (max)          |

**Benefits**:
- No jarring jumps at breakpoints
- Smooth scaling across all viewport sizes
- Content never touches edges on mobile
- Optimal whitespace on desktop

---

## Usage Patterns

### Standard Page Section

```tsx
<section className="py-[clamp(3rem,8vw,6rem)] bg-background">
  <Container>
    <h2>Section Title</h2>
    <ProductGrid products={products} />
  </Container>
</section>
```

---

### Blog Post Layout

```tsx
<article className="py-12">
  <Container variant="content">
    <h1>Blog Post Title</h1>
    <PostMeta author={author} date={date} />
    <div className="prose">
      {content}
    </div>
  </Container>
</article>
```

---

### Full-Width Hero with Inner Container

```tsx
<section className="relative min-h-[80vh] bg-gray-900">
  {/* Background image - full width */}
  <div className="absolute inset-0">
    <img src={heroImage} className="w-full h-full object-cover" />
  </div>
  
  {/* Content - constrained */}
  <Container className="relative z-10 py-20 text-white">
    <h1>Welcome to Our Store</h1>
    <p>Discover amazing products</p>
    <Button>Shop Now</Button>
  </Container>
</section>
```

---

### Multiple Containers (Different Widths)

```tsx
<section className="py-16">
  {/* Narrow heading */}
  <Container variant="content" className="text-center mb-12">
    <h2>Featured Products</h2>
    <p>Curated selections just for you</p>
  </Container>
  
  {/* Wide product grid */}
  <Container variant="wide">
    <ProductGrid products={featured} columns={4} />
  </Container>
</section>
```

---

### Nested Sections (Avoid)

❌ **DON'T**: Nest containers

```tsx
// WRONG - nested containers
<Container>
  <div>
    <Container>  {/* ❌ Nested */}
      <p>Content</p>
    </Container>
  </div>
</Container>
```

✅ **DO**: Use a single container per section

```tsx
// CORRECT - one container per section
<section>
  <Container>
    <p>Content</p>
  </Container>
</section>

<section>
  <Container>
    <p>More content</p>
  </Container>
</section>
```

---

## Responsive Behavior

### Mobile (< 768px)

- **Padding**: 16px minimum (prevents edge touching)
- **Width**: Full width minus padding
- **Max Width**: Applied but not restrictive

```tsx
// At 375px viewport:
// Container = 375px - 32px (padding) = 343px content width
```

---

### Tablet (768px - 1024px)

- **Padding**: ~24-31px (scales with viewport)
- **Width**: Full width until max-width reached
- **Max Width**: Starts constraining at larger sizes

```tsx
// At 768px viewport:
// Site container (1400px max) = full width (not yet constrained)
// Content container (960px max) = 960px (constrained, centered)
```

---

### Desktop (≥ 1024px)

- **Padding**: ~31-48px (scales to maximum)
- **Width**: Constrained by max-width
- **Centering**: `mx-auto` centers content

```tsx
// At 1440px viewport:
// Site container = 1400px (constrained, centered)
// Content container = 960px (constrained, centered)
// Wide container = 1200px (constrained, centered)
```

---

## Breakout Pattern (Full-Width)

Sometimes you need content to break out of a container:

```tsx
<Container>
  <h2>Regular Content</h2>
  
  {/* Break out to full width */}
  <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
    <FullWidthImage src={image} />
  </div>
  
  <p>Back to contained content</p>
</Container>
```

Or use the `full` variant:

```tsx
<Container>
  <h2>Regular Content</h2>
</Container>

<Container variant="full">
  <FullWidthSlider images={images} />
</Container>

<Container>
  <p>Back to regular width</p>
</Container>
```

---

## With Section Styles

Containers work seamlessly with section styles:

```tsx
// Default section + site container
<section className="section-default py-[clamp(3rem,8vw,6rem)] bg-background">
  <Container>
    <ProductCollection products={products} />
  </Container>
</section>

// Dark section + content container
<section className="section-dark py-[clamp(4rem,10vw,8rem)] bg-gray-900 text-white">
  <Container variant="content" className="text-center">
    <h2>Join Our Newsletter</h2>
    <NewsletterForm />
  </Container>
</section>

// Hero section + full container
<section className="section-hero relative min-h-[80vh]">
  <Container className="flex items-center h-full">
    <HeroContent />
  </Container>
</section>
```

---

## Adding Custom Classes

The Container accepts additional classes:

```tsx
// Add text alignment
<Container className="text-center">
  <h1>Centered Content</h1>
</Container>

// Add background (usually done on section, not container)
<Container className="bg-white rounded-lg shadow-lg p-8">
  <CardContent />
</Container>

// Add flex layout
<Container className="flex items-center justify-between">
  <Logo />
  <Navigation />
</Container>

// Add grid layout
<Container className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div>Left Column</div>
  <div>Right Column</div>
</Container>
```

---

## Accessibility

### Semantic Structure

Containers should be inside semantic elements:

```tsx
// ✅ CORRECT
<main>
  <Container>
    <h1>Main Content</h1>
  </Container>
</main>

<section>
  <Container>
    <h2>Section Content</h2>
  </Container>
</section>

// ❌ WRONG - container as semantic element
<Container as="main">  {/* Not supported */}
  <h1>Content</h1>
</Container>
```

### Reading Width

For text-heavy content, use `content` variant:

```tsx
<Container variant="content">
  {/* Optimal 65-75 character line length */}
  <article className="prose">
    {longFormContent}
  </article>
</Container>
```

---

## Performance Considerations

### CSS Optimization

Containers use Tailwind utilities that compile to minimal CSS:

```css
/* Compiled CSS is optimized */
.max-w-\[1400px\] { max-width: 1400px; }
.mx-auto { margin-left: auto; margin-right: auto; }
.px-\[clamp\(1rem\2c 3vw\2c 3rem\)\] { 
  padding-left: clamp(1rem, 3vw, 3rem);
  padding-right: clamp(1rem, 3vw, 3rem);
}
```

### Avoiding Re-renders

Container is a simple presentational component with no internal state:

```tsx
// No memoization needed - purely presentational
export const Container = ({ variant, className, children }) => (
  <div className={`${CONTAINER[variant]} ${className}`}>
    {children}
  </div>
);
```

---

## Common Mistakes

### ❌ Hardcoding padding instead of using Container

```tsx
// WRONG
<div className="max-w-7xl mx-auto px-4">
  <Content />
</div>
```

```tsx
// CORRECT
<Container>
  <Content />
</Container>
```

### ❌ Applying padding to both section and container

```tsx
// WRONG - double padding
<section className="px-4">
  <Container>  {/* Already has padding */}
    <Content />
  </Container>
</section>
```

```tsx
// CORRECT - padding only on container
<section className="py-12">
  <Container>
    <Content />
  </Container>
</section>
```

### ❌ Using container for every div

```tsx
// WRONG - container abuse
<Container>
  <Container>  {/* Nested */}
    <div>
      <Container>  {/* Too many */}
        <p>Text</p>
      </Container>
    </div>
  </Container>
</Container>
```

```tsx
// CORRECT - one container per section
<section>
  <Container>
    <div>
      <p>Text</p>
    </div>
  </Container>
</section>
```

---

## Related Components

- **Section Styles** - Work together with containers
- **Layout** - Uses Container internally
- **Grid/Flex Wrappers** - Can be used inside containers

---

## Related Guidelines

- [Sections Overview](../overview-sections.md) - Section styling
- [Design Tokens: Spacing](../design-tokens/spacing.md) - Spacing system
- [Mobile: Spacing](../mobile/spacing.md) - Mobile spacing patterns

---

## WordPress Equivalent

In WordPress block themes, containers are created using the `core/group` block with max-width settings:

```html
<!-- wp:group {"layout":{"type":"constrained","contentSize":"1400px"}} -->
<div class="wp-block-group">
  <!-- Inner content -->
</div>
<!-- /wp:group -->
```

The Container component's variants map to WordPress layout settings:
- `site` → `contentSize: "1400px"`
- `content` → `contentSize: "960px"`
- `wide` → `wideSize: "1200px"`
- `full` → `alignfull`

---

## Testing Checklist

- [ ] Container max-width constrains content appropriately
- [ ] Padding scales smoothly across viewports (no jumps)
- [ ] Content doesn't touch edges on mobile (16px minimum)
- [ ] Content is centered on desktop
- [ ] Full-width variant actually spans full viewport
- [ ] No nested containers (causes layout issues)
- [ ] Works with all section styles
- [ ] Text content uses appropriate variant for readability

---

## Summary

The Container component is a fundamental layout primitive that:
- ✅ Provides consistent max-width constraints (960px, 1200px, 1400px)
- ✅ Uses fluid padding that scales smoothly (16px → 48px)
- ✅ Centers content automatically with `mx-auto`
- ✅ Supports 4 variants for different content types
- ✅ Follows mobile-first responsive principles
- ✅ Maps to WordPress core/group block

Use Container as the primary width-constraining element in all page sections to ensure consistent layout and spacing across the entire application.