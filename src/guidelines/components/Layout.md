# Layout Component

**Type**: Part (Global Region)  
**Location**: `/components/parts/Layout.tsx`  
**Category**: Page Structure

---

## Purpose

The Layout component is a wrapper that provides consistent page structure across the entire site. It handles header, footer, and main content area setup, ensuring every page has a unified appearance.

**Use Layout for:**
- All standard pages (homepage, shop, product pages, etc.)
- Blog posts and content pages
- Account pages
- Cart page

**Do NOT use Layout for:**
- Checkout pages (use CheckoutLayout instead)
- Authentication modals
- Standalone landing pages with custom structure
- Error pages (404, 500) that need custom layouts

---

## Component API

### Props Interface

```tsx
interface LayoutProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
  footerProps?: FooterProps;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
  showSearch?: boolean;
  showWishlist?: boolean;
}

interface FooterProps {
  showNewsletter?: boolean;
  showSocial?: boolean;
}
```

### Default Props

```tsx
const defaultProps = {
  showHeader: true,
  showFooter: true,
};
```

---

## Usage Examples

### Basic Layout

```tsx
import { Layout } from '@/components/parts/Layout';

function HomePage() {
  return (
    <Layout>
      <Hero />
      <ProductCollection title="Featured Products" products={products} />
      <CallToAction />
    </Layout>
  );
}
```

### Layout with Transparent Header

```tsx
function LandingPage() {
  return (
    <Layout headerProps={{ transparent: true }}>
      <Hero />
      {/* Rest of content */}
    </Layout>
  );
}
```

### Layout Without Footer

```tsx
function SpecialPage() {
  return (
    <Layout showFooter={false}>
      <SpecialContent />
    </Layout>
  );
}
```

### Layout with Custom Header Config

```tsx
function MinimalPage() {
  return (
    <Layout
      headerProps={{
        showSearch: false,
        showWishlist: false,
        sticky: false,
      }}
    >
      <PageContent />
    </Layout>
  );
}
```

---

## Implementation

### Full Component

```tsx
import { Header } from './Header';
import { Footer } from './Footer';

interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
  showSearch?: boolean;
  showWishlist?: boolean;
}

interface FooterProps {
  showNewsletter?: boolean;
  showSocial?: boolean;
}

interface LayoutProps {
  children: React.ReactNode;
  headerProps?: HeaderProps;
  footerProps?: FooterProps;
  showHeader?: boolean;
  showFooter?: boolean;
  className?: string;
}

export function Layout({
  children,
  headerProps = {},
  footerProps = {},
  showHeader = true,
  showFooter = true,
  className = '',
}: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      {showHeader && <Header {...headerProps} />}

      {/* Main Content */}
      <main className={`flex-1 ${className}`}>
        {children}
      </main>

      {/* Footer */}
      {showFooter && <Footer {...footerProps} />}
    </div>
  );
}
```

---

## Page Structure

### Visual Hierarchy

```
┌──────────────────────────────────┐
│          Header                  │  ← Fixed/sticky at top
├──────────────────────────────────┤
│                                  │
│                                  │
│          Main Content            │  ← Flexible height (flex-1)
│          (Page-specific)         │
│                                  │
│                                  │
├──────────────────────────────────┤
│          Footer                  │  ← Always at bottom
└──────────────────────────────────┘
```

### Flexbox Structure

```tsx
<div className="flex flex-col min-h-screen">
  <Header />                {/* Auto height */}
  <main className="flex-1">{children}</main>  {/* Grows to fill */}
  <Footer />                {/* Auto height */}
</div>
```

**Why `min-h-screen`?**
- Ensures footer is always at bottom, even with little content
- Main content (`flex-1`) grows to fill available space
- No awkward mid-page footers on short pages

---

## Layout Variants

### Standard Layout

```tsx
// Default: Header + Content + Footer
<Layout>
  <HomePage />
</Layout>
```

### Hero Layout (Transparent Header)

```tsx
// Header overlays hero image
<Layout headerProps={{ transparent: true }}>
  <Hero />
  <Content />
</Layout>
```

### Content-Only Layout

```tsx
// No header/footer (special pages)
<Layout showHeader={false} showFooter={false}>
  <FullPageContent />
</Layout>
```

### Minimal Header Layout

```tsx
// Simplified header
<Layout
  headerProps={{
    showSearch: false,
    showWishlist: false,
  }}
>
  <SimplePage />
</Layout>
```

---

## Common Page Patterns

### Pattern 1: Homepage

```tsx
function HomePage() {
  return (
    <Layout headerProps={{ transparent: true }}>
      <Hero
        title="Welcome to Our Store"
        image="hero.jpg"
        ctaText="Shop Now"
        ctaLink="/shop"
      />
      <ProductCollection
        title="Featured Products"
        products={featuredProducts}
      />
      <CallToAction
        title="Join Our Newsletter"
        description="Get exclusive deals"
      />
    </Layout>
  );
}
```

### Pattern 2: Product Archive Page

```tsx
function ShopPage() {
  return (
    <Layout>
      <Container className="py-8">
        <PageHeader
          title="Shop"
          description="Browse our entire collection"
        />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <ShopSidebar />
          </aside>
          <div className="lg:col-span-3">
            <ProductGrid products={products} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
```

### Pattern 3: Single Product Page

```tsx
function ProductPage() {
  return (
    <Layout>
      <Container className="py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductGallery images={product.images} />
          <ProductDetails product={product} />
        </div>
        
        {/* Tabs */}
        <ProductTabs product={product} />
        
        {/* Related Products */}
        <ProductCollection
          title="Related Products"
          products={relatedProducts}
        />
      </Container>
    </Layout>
  );
}
```

### Pattern 4: Cart Page

```tsx
function CartPage() {
  return (
    <Layout>
      <Container className="py-12">
        <h1 className="mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <CartTable />
          </div>
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </Container>
    </Layout>
  );
}
```

### Pattern 5: Blog Post

```tsx
function BlogPost() {
  return (
    <Layout>
      <article className="py-12">
        <Container className="max-w-prose">
          <PostHeader post={post} />
          <PostContent content={post.content} />
          <PostMeta post={post} />
        </Container>
      </article>
    </Layout>
  );
}
```

---

## Checkout Layout (Alternative)

For checkout pages, use a separate CheckoutLayout:

```tsx
// /components/parts/CheckoutLayout.tsx
export function CheckoutLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <CheckoutHeader />
      <main className="flex-1 bg-gray-50">
        {children}
      </main>
      <CheckoutFooter />
    </div>
  );
}

// Usage
function CheckoutPage() {
  return (
    <CheckoutLayout>
      <CheckoutSteps />
    </CheckoutLayout>
  );
}
```

---

## SEO & Meta Tags

### Adding Meta Tags to Layout

```tsx
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
  // ...other props
}

export function Layout({
  children,
  title,
  description,
  image,
  ...props
}: LayoutProps) {
  const siteTitle = title ? `${title} | StoreName` : 'StoreName';
  
  return (
    <>
      <Helmet>
        <title>{siteTitle}</title>
        {description && <meta name="description" content={description} />}
        {image && <meta property="og:image" content={image} />}
        <meta property="og:title" content={siteTitle} />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        {/* Layout structure */}
      </div>
    </>
  );
}

// Usage
<Layout
  title="Featured Products"
  description="Browse our handpicked selection of premium products"
>
  <ProductCollection />
</Layout>
```

---

## Scroll Restoration

### Auto Scroll to Top on Route Change

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function Layout({ children }) {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Layout structure */}
    </div>
  );
}
```

---

## Loading States

### Page-Level Loading

```tsx
export function Layout({ children, loading = false }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="animate-spin" size={48} />
          </div>
        ) : (
          children
        )}
      </main>
      <Footer />
    </div>
  );
}
```

---

## Accessibility Requirements

### Skip to Main Content Link

```tsx
export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purple-600 focus:text-white focus:rounded"
      >
        Skip to main content
      </a>
      
      <Header />
      
      <main id="main-content" className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
```

### Landmark Regions

```tsx
<div className="flex flex-col min-h-screen">
  <header role="banner">
    <Header />
  </header>
  
  <main role="main" id="main-content" className="flex-1">
    {children}
  </main>
  
  <footer role="contentinfo">
    <Footer />
  </footer>
</div>
```

---

## Global Providers

### Wrap Layout with Context Providers

```tsx
// /App.tsx
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={
              <Layout>
                <HomePage />
              </Layout>
            } />
          </Routes>
        </Router>
      </UserProvider>
    </CartProvider>
  );
}
```

---

## Performance Optimization

### Memoize Layout Component

```tsx
import { memo } from 'react';

export const Layout = memo(function Layout({ children, ...props }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header {...props.headerProps} />
      <main className="flex-1">{children}</main>
      <Footer {...props.footerProps} />
    </div>
  );
});
```

### Lazy Load Footer

```tsx
import { lazy, Suspense } from 'react';

const Footer = lazy(() => import('./Footer'));

export function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Suspense fallback={<div className="h-96 bg-gray-900" />}>
        <Footer />
      </Suspense>
    </div>
  );
}
```

---

## Related Components

- **Header**: Site navigation and branding
- **Footer**: Legal links, newsletter, social
- **CheckoutLayout**: Alternative layout for checkout flow
- **Container**: Content width wrapper (used within Layout)

---

## Common Mistakes

❌ Not using `min-h-screen` (footer floats mid-page)  
❌ Forgetting `flex-1` on main (footer doesn't stick to bottom)  
❌ Using Layout for checkout pages (use CheckoutLayout)  
❌ Not passing props to Header/Footer  
❌ Missing skip-to-content link for accessibility  
❌ No scroll restoration on route change  
❌ Hardcoding header/footer instead of making them optional  
❌ Not handling loading states  
❌ Missing semantic HTML5 elements  
❌ No meta tags for SEO

---

## Testing Checklist

- [ ] Header appears on all pages
- [ ] Footer appears on all pages
- [ ] Footer sticks to bottom even with little content
- [ ] Main content area grows to fill available space
- [ ] Transparent header works correctly
- [ ] Header can be hidden when needed
- [ ] Footer can be hidden when needed
- [ ] Skip-to-content link works
- [ ] Scroll restoration works on route change
- [ ] Loading state displays correctly
- [ ] Works with all page types (home, shop, product, cart)
- [ ] Responsive on all breakpoints
- [ ] Keyboard navigation works (skip link)
- [ ] Semantic HTML structure is correct
