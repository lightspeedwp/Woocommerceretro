# Architecture Diagrams

**Last Updated:** 2026-03-06

---

## Component Hierarchy

```
App.tsx
  |
  +-- Providers (Cart, Theme, Wishlist, Comparison, QuickView)
  |     |
  |     +-- RouterProvider (react-router)
  |           |
  |           +-- Layout (Header + Footer wrapper)
  |                 |
  |                 +-- Templates (28 page templates)
  |                       |
  |                       +-- Parts (global regions)
  |                       |     Header, Footer, MiniCart, MobileMenu, SearchOverlay
  |                       |     Breadcrumbs, ShopSidebar, StoreNotices
  |                       |
  |                       +-- Patterns (reusable sections)
  |                       |     Hero, ProductGrid, FAQSection, NewsletterSignup
  |                       |     ArchiveHeader, ArchivePagination, TestimonialCarousel
  |                       |     CartFilled, CartEmptyState, CheckoutFormSection
  |                       |
  |                       +-- Blocks (functional units)
  |                             ProductCard, AddToCartButton, QuantitySelector
  |                             FilterSidebar, SearchAutocomplete, ProductGallery
  |                             CartItem, CartTotals, CheckoutStep, PaymentMethods
```

---

## Data Flow

```
localStorage <---> Contexts <---> Components
                      |
                      +-- CartContext     (items, coupons, shipping)
                      +-- ThemeContext    (style, mode)
                      +-- WishlistContext (wishlisted products)
                      +-- ComparisonContext (compared products, max 4)
                      +-- QuickViewContext  (modal state)
```

---

## CSS Architecture

```
/src/styles/globals.css (entry point)
  |
  +-- @import theme-variables.css    (70+ WordPress CSS variables)
  +-- @import wordpress-core.css     (WP block styles)
  +-- @import woocommerce-core.css   (WC block styles)
  +-- @import theme-light-mode.css   (light mode overrides)
  +-- @import theme-dark-mode.css    (dark mode overrides)
  |
  +-- /blocks/                       (component-specific CSS)
  |     +-- layout/    (footer, header, modal, sidebar, drawer)
  |     +-- theme/     (parts-funky, navigation)
  |     +-- commerce/  (product cards, cart, checkout)
  |     +-- design/    (buttons, forms, inputs)
  |
  +-- /sections/                     (template section CSS)
  |     +-- blog-funky.css
  |     +-- commerce-special-funky.css
  |     +-- account-auth-funky.css
  |     +-- info-pages-funky.css
  |
  +-- /animations/                   (Funky redesign animations)
        +-- glassmorphism, neon effects, transitions
```

---

## Route Structure

```
/                          FrontPage
/shop                     ProductArchive
/shop/category/:slug      ProductArchive (filtered)
/product/:slug            SingleProduct
/cart                     PageCart
/checkout                 PageCheckout
/order-confirmation       OrderConfirmation
/blog                     ArchiveBlog
/blog/:slug               SinglePost (Standard)
/blog/audio/:slug         SingleAudio
/blog/video/:slug         SingleVideo
/blog/gallery/:slug       SingleGallery
/blog/aside/:slug         SingleAside
/blog/category/:slug      ArchiveBlog (filtered)
/about                    PageAbout
/contact                  PageContact
/faq                      PageFAQ
/deals                    PageDeals
/chat                     PageChat
/account                  AccountDashboard
/account/orders           AccountOrders
/account/orders/:id       AccountOrderView
/account/addresses        AccountAddresses
/account/details          AccountDetails
/account/wishlist         AccountWishlist
/account/loyalty          AccountLoyalty
/login                    Login
/register                 Register
/search                   SearchResults
/subscription             SubscriptionLanding
/membership/:slug         SingleMembership
```

---

## File Organization

```
/src/app/
  components/
    blocks/        100+ functional blocks organized by type:
      ui/          Badge, Avatar, Skeleton, Input, Select
      design/      Button, Grid, Stack, Columns, Group
      theme/       Navigation, SiteLogo, SiteTitle, Search
      cart/         CartItem, CartTotals
      checkout/     CheckoutStep, PaymentMethods, ShippingAddress
      forms/        Textarea, Checkbox, RadioGroup, Switch, Label
      single-product/ ProductGallery, ProductBreadcrumbs, ProductTabs
      archive/      FilterSidebar, Pagination, ActiveFilters
      search/       SearchAutocomplete
      blog/         CategoryFilter
      order/        OrderDetails, OrderStatus
      feedback/     Alert, Toast
      overlay/      Modal, Drawer, Tooltip, Popover
      media/        AspectRatio, ImageWithFallback
      interactive/  Command, Resizable
      forms-advanced/ Calendar, InputOTP, Slider
      display/      Table, Separator, Accordion
      navigation/   Breadcrumb, Tabs
      product/      ProductCard, AddToCartButton, PriceDisplay, QuantitySelector
    patterns/      40+ reusable sections
      account/     Dashboard, Orders, Addresses, Wishlist
      sections/    AccentSection, DarkSection, HeroSection, etc.
      shop/        ShopHero, CategoryTiles, SupportStrip
    parts/         21 global template parts
    common/        18 utility components
  templates/       28 page templates
  contexts/        5 React contexts
  hooks/           7 custom hooks
  data/            14 mock data files
  types/           TypeScript type definitions
  utils/           7 utility functions
  services/        3 API services
```
