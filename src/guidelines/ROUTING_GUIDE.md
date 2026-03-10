# Complete Routing Guide - WooCommerce Prototype

**Last Updated:** January 13, 2026  
**File:** `/src/app/App.tsx`  
**Total Routes:** 100+

---

## 📋 Table of Contents

1. [Core Routes](#core-routes)
2. [Shop Routes](#shop-routes)
3. [Account Routes](#account-routes)
4. [Blog Routes](#blog-routes)
5. [About Routes](#about-routes)
6. [Promotions Routes](#promotions-routes)
7. [Support & Help Routes](#support--help-routes)
8. [Legal & Compliance Routes](#legal--compliance-routes)
9. [Error Pages](#error-pages)
10. [Development Tools](#development-tools)
11. [Route Validation](#route-validation)

---

## Core Routes

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/` | FrontPage | `FrontPage.tsx` | Homepage |
| `/newsletter` | PageNewsletter | `PageNewsletter.tsx` | Newsletter subscription |
| `/search` | Search | `pages/shop/Search.tsx` | Global search |
| `/contact` | PageContact | `PageContact.tsx` | Contact form |
| `/faq` | FAQ | `pages/FAQ.tsx` | FAQ page |

---

## Shop Routes

### **Main Shop Pages**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/shop` | ArchiveProduct | `ArchiveProduct.tsx` | Main shop archive |
| `/shop/all` | ArchiveProduct | `ArchiveProduct.tsx` | All products archive |
| `/shop/all-products` | AllProducts | `pages/shop/AllProducts.tsx` | All products list |
| `/shop/collections` | Collections | `pages/shop/Collections.tsx` | Product collections |
| `/shop/filtered` | ShopWithSidebar | `ShopWithSidebar.tsx` | Shop with filter sidebar |

### **Category & Tag Archives**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/shop/category/:categorySlug` | ArchiveProduct | `ArchiveProduct.tsx` | Category archive (dynamic) |
| `/shop/category/clothing` | ArchiveProduct | `ArchiveProduct.tsx` | Clothing category |
| `/shop/category/accessories` | ArchiveProduct | `ArchiveProduct.tsx` | Accessories category |
| `/shop/category/home` | ArchiveProduct | `ArchiveProduct.tsx` | Home & Living category |
| `/shop/tag/:tagSlug` | ArchiveProduct | `ArchiveProduct.tsx` | Tag archive (dynamic) |

### **Single Product Pages**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/product/:id` | SingleProduct | `SingleProduct.tsx` | Single product page |
| `/product/:id/sticky` | SingleProductSticky | `SingleProductSticky.tsx` | Product with sticky buy panel |
| `/variable-product/:id` | VariableProduct | `VariableProduct.tsx` | Variable product (sizes/colors) |

### **Special Shop Pages**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/new-arrivals` | NewArrivals | `pages/NewArrivals.tsx` | New arrivals page |
| `/best-sellers` | BestSellers | `pages/shop/BestSellers.tsx` | Best selling products |
| `/sale` | Sale | `pages/shop/Sale.tsx` | Sale products |
| `/gift-cards` | GiftCards | `pages/shop/GiftCards.tsx` | Gift cards page |
| `/compare` | Compare | `pages/shop/Compare.tsx` | Product comparison |
| `/shop/search` | ProductSearchResults | `pages/shop/ProductSearchResults.tsx` | Product search results |

---

## Account Routes

### **Authentication**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/account/login` | LoginRegister | `PageLogin.tsx` | Login/Register page |
| `/account/reset-password` | ResetPassword | `pages/account/ResetPassword.tsx` | Password reset |

### **Account Dashboard (Nested Routes)**

Base route: `/account`  
Layout: `AccountLayout.tsx`

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/account` | AccountLayout | `AccountLayout.tsx` | Base account layout (redirects to /dashboard) |
| `/account/dashboard` | Dashboard | `patterns/account/Dashboard.tsx` | Account dashboard |
| `/account/orders` | Orders | `patterns/account/Orders.tsx` | Order history |
| `/account/orders/:orderId` | OrderViewPattern | `patterns/account/OrderView.tsx` | Single order view |
| `/account/wishlist` | WishlistPattern | `patterns/account/Wishlist.tsx` | Account wishlist |
| `/account/addresses` | Addresses | `patterns/account/Addresses.tsx` | Saved addresses |
| `/account/details` | AccountDetails | `patterns/account/AccountDetails.tsx` | Account settings |
| `/account/dashboard-widgets` | AccountDashboardWidgets | `AccountDashboardWidgets.tsx` | Enhanced dashboard |

### **Legacy Redirects**

| Route | Redirects To | Description |
|-------|--------------|-------------|
| `/my-account` | `/account` | Legacy account URL |
| `/account/*` (invalid) | `/account/dashboard` | Fallback for invalid account routes |

### **Wishlist**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/wishlist` | Wishlist | `PageWishlist.tsx` | Standalone wishlist page |

---

## Cart & Checkout Routes

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/cart` | Cart | `pages/shop/Cart.tsx` | Shopping cart |
| `/checkout` | PageCheckout | `PageCheckout.tsx` | Checkout page |
| `/order-confirmation` | OrderConfirmation | `pages/shop/OrderConfirmation.tsx` | Order confirmation |
| `/track-order` | TrackOrder | `pages/shop/TrackOrder.tsx` | Order tracking |

---

## Blog Routes

### **Main Blog Pages**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/blog` | BlogIndex | `BlogIndex.tsx` | Blog homepage |

### **Category & Tag Archives**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/blog/category/:categorySlug` | ArchiveCategory | `ArchiveCategory.tsx` | Blog category archive |
| `/blog/author/:authorSlug` | ArchiveAuthor | `ArchiveAuthor.tsx` | Author archive |
| `/blog/tag/:tagSlug` | TagArchive | `blog/TagArchive.tsx` | Tag archive |

### **Single Post Pages**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/blog/:slug` | SinglePost | `SinglePost.tsx` | Single blog post (default) |
| `/blog/:slug/sidebar` | SinglePostWithSidebar | `SinglePostWithSidebar.tsx` | Post with sidebar |
| `/blog/:slug/fullwidth` | SinglePostFullWidth | `SinglePostFullWidth.tsx` | Full-width post |

---

## About Routes

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/about` | PageAbout | `PageAbout.tsx` | Main about page |
| `/about/our-story` | OurStory | `pages/about/OurStory.tsx` | Brand story |
| `/about/team` | Team | `pages/about/Team.tsx` | Team page |
| `/about/sustainability` | Sustainability | `pages/about/Sustainability.tsx` | Sustainability practices |
| `/about/careers` | Careers | `pages/about/Careers.tsx` | Careers page |
| `/stores` | Stores | `pages/Stores.tsx` | Physical store locations |

---

## Promotions Routes

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/promotions` | Promotions | `pages/Promotions.tsx` | Promotions hub |
| `/promotions/flash-sale` | FlashSale | `pages/promotions/FlashSale.tsx` | Flash sale page |
| `/promotions/seasonal` | SeasonalSale | `pages/promotions/SeasonalSale.tsx` | Seasonal sale |
| `/promotions/bundles` | Bundles | `pages/promotions/Bundles.tsx` | Product bundles |
| `/promotions/clearance` | Clearance | `pages/promotions/Clearance.tsx` | Clearance sale |
| `/promotions/winter-clearance` | Clearance | `pages/promotions/Clearance.tsx` | Winter clearance (alias) |
| `/promotions/buy-2-get-1` | Bundles | `pages/promotions/Bundles.tsx` | Buy 2 get 1 promotion |
| `/loyalty` | Loyalty | `pages/promotions/Loyalty.tsx` | Loyalty program |

---

## Support & Help Routes

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/help` | HelpCenter | `pages/content/HelpCenter.tsx` | Help center hub |
| `/shipping-returns` | ShippingReturns | `pages/ShippingReturns.tsx` | Shipping & returns info |
| `/returns` | ReturnsPortal | `pages/customer-service/ReturnsPortal.tsx` | Returns portal |
| `/refunds` | ReturnsPortal | `pages/customer-service/ReturnsPortal.tsx` | Refunds portal (alias) |
| `/size-guide` | SizeGuide | `pages/content/SizeGuide.tsx` | Size guide |
| `/chat` | Chat | `pages/Chat.tsx` | Live chat support |

---

## Legal & Compliance Routes

### **Primary Legal Pages**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/privacy-policy` | PrivacyPolicy | `pages/legal/PrivacyPolicy.tsx` | Privacy policy |
| `/legal/privacy-policy` | PrivacyPolicy | `pages/legal/PrivacyPolicy.tsx` | Privacy policy (legal path) |
| `/privacy` | Privacy | `pages/Legal.tsx` | Privacy (legacy) |
| `/terms-and-conditions` | TermsConditions | `pages/legal/TermsConditions.tsx` | Terms & conditions |
| `/legal/terms-conditions` | TermsConditions | `pages/legal/TermsConditions.tsx` | Terms (legal path) |
| `/terms` | Terms | `pages/Legal.tsx` | Terms (legacy) |

### **Other Legal**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/legal/privacy` | Privacy | `pages/Legal.tsx` | Privacy (legal path legacy) |
| `/legal/terms` | Terms | `pages/Legal.tsx` | Terms (legal path legacy) |
| `/policies` | Privacy | `pages/Legal.tsx` | Policies hub |

---

## Error Pages

### **Production Error Pages**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `*` (fallback) | NotFound | `pages/NotFound.tsx` | 404 Not Found (catch-all) |

### **Testing/Demo Error Pages**

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/error/404` | NotFound404 | `pages/errors/NotFound404.tsx` | 404 demonstration |
| `/error/500` | ServerError500 | `pages/errors/ServerError500.tsx` | 500 Server Error demo |
| `/error/503` | Maintenance503 | `pages/errors/Maintenance503.tsx` | 503 Maintenance demo |
| `/error/network` | NetworkError | `pages/errors/NetworkError.tsx` | Network error demo |

---

## Development Tools

| Route | Component | Template | Description |
|-------|-----------|----------|-------------|
| `/template-tester` | TemplateTester | `pages/TemplateTester.tsx` | Template testing page |
| `/campaign/product-launch` | LongFormSalesPage | `LongFormSalesPage.tsx` | Long-form sales page demo |

---

## Route Validation

### **Dynamic Routes (With Parameters)**

#### **Shop Routes:**
- `/shop/category/:categorySlug` - Example: `/shop/category/clothing`
- `/shop/tag/:tagSlug` - Example: `/shop/tag/summer`
- `/product/:id` - Example: `/product/prod-001`
- `/product/:id/sticky` - Example: `/product/prod-001/sticky`
- `/variable-product/:id` - Example: `/variable-product/prod-002`

#### **Blog Routes:**
- `/blog/category/:categorySlug` - Example: `/blog/category/fashion`
- `/blog/author/:authorSlug` - Example: `/blog/author/jane-smith`
- `/blog/tag/:tagSlug` - Example: `/blog/tag/style-tips`
- `/blog/:slug` - Example: `/blog/latest-trends-2026`
- `/blog/:slug/sidebar` - Example: `/blog/latest-trends-2026/sidebar`
- `/blog/:slug/fullwidth` - Example: `/blog/latest-trends-2026/fullwidth`

#### **Account Routes:**
- `/account/orders/:orderId` - Example: `/account/orders/ORD-12345`

### **Redirects**

| From | To | Type |
|------|----|----|
| `/my-account` | `/account` | Permanent redirect |
| `/account` (index) | `/account/dashboard` | Navigate redirect |
| `/account/*` (invalid paths) | `/account/dashboard` | Fallback redirect |

---

## Navigation Menu Links

### **Primary Header Navigation (MainHeader.tsx)**

Current menu items (lines 51-58):

```typescript
const navigationMenu: MenuItem[] = [
  { id: 'shop', title: 'Shop', url: '/shop', megaMenu: 'shop' },
  { id: 'blog', title: 'Blog', url: '/blog', megaMenu: 'blog' },
  { id: 'about', title: 'About', url: '/about', megaMenu: 'about' },
  { id: 'promotions', title: 'Promotions', url: '/promotions', megaMenu: 'promotions' },
  { id: 'contact', title: 'Contact', url: '/contact', megaMenu: 'contact' },
  { id: 'faq', title: 'FAQ', url: '/faq' },
];
```

**Status:** ✅ All routes are valid

---

### **Shop Mega Menu (ShopMegaMenu.tsx)**

**Categories Section:**

| Link Text | Route | Status |
|-----------|-------|--------|
| All Products | `/shop` | ✅ Valid |
| New Arrivals | `/new-arrivals` | ✅ Valid |
| Best Sellers | `/best-sellers` | ✅ Valid |
| Sale | `/sale` | ✅ Valid |
| Gift Cards | `/gift-cards` | ✅ Valid |
| Collections | `/shop/collections` | ✅ Valid |

**Featured Categories:**

| Link Text | Route | Status |
|-----------|-------|--------|
| Clothing | `/shop/category/clothing` | ✅ Valid (dynamic route) |
| Accessories | `/shop/category/accessories` | ✅ Valid (dynamic route) |
| Home & Living | `/shop/category/home` | ✅ Valid (dynamic route) |

---

### **Blog Mega Menu (BlogMegaMenu.tsx)**

To be audited in next section...

---

### **About Mega Menu (AboutMegaMenu.tsx)**

To be audited in next section...

---

### **Promotions Mega Menu (PromotionsMegaMenu.tsx)**

To be audited in next section...

---

### **Contact Mega Menu (ContactMegaMenu.tsx)**

To be audited in next section...

---

## Common Navigation Patterns

### **Footer Navigation (Typical Links)**

**Common footer links that should be included:**

**Shop:**
- All Products → `/shop`
- New Arrivals → `/new-arrivals`
- Sale → `/sale`
- Gift Cards → `/gift-cards`

**About:**
- Our Story → `/about/our-story`
- Team → `/about/team`
- Careers → `/about/careers`
- Stores → `/stores`

**Support:**
- FAQ → `/faq`
- Help Center → `/help`
- Shipping & Returns → `/shipping-returns`
- Size Guide → `/size-guide`
- Contact → `/contact`

**Legal:**
- Privacy Policy → `/privacy-policy`
- Terms & Conditions → `/terms-and-conditions`

**Account:**
- My Account → `/account`
- Orders → `/account/orders`
- Wishlist → `/wishlist`

---

## Mobile Menu Structure

**Recommended mobile menu structure:**

```typescript
const mobileMenuItems = [
  { title: 'Home', url: '/' },
  { 
    title: 'Shop', 
    url: '/shop',
    submenu: [
      { title: 'All Products', url: '/shop' },
      { title: 'New Arrivals', url: '/new-arrivals' },
      { title: 'Best Sellers', url: '/best-sellers' },
      { title: 'Sale', url: '/sale' },
    ]
  },
  { 
    title: 'Blog', 
    url: '/blog',
    submenu: [
      { title: 'All Posts', url: '/blog' },
      { title: 'Fashion', url: '/blog/category/fashion' },
      { title: 'Lifestyle', url: '/blog/category/lifestyle' },
    ]
  },
  { title: 'About', url: '/about' },
  { title: 'Contact', url: '/contact' },
  { title: 'FAQ', url: '/faq' },
];
```

---

## Route Testing Checklist

### **For Each Route:**

- [ ] Route exists in `/src/app/App.tsx`
- [ ] Component file exists
- [ ] Template file exists
- [ ] Link is used in navigation
- [ ] Link is accessible via UI
- [ ] Link has proper accessibility (aria-label if needed)
- [ ] Link works in both light and dark mode
- [ ] Link has hover state
- [ ] Link has active/current state
- [ ] Dynamic routes handle parameters correctly

---

## Next Steps

1. **Audit all mega menus** - Verify all links in BlogMegaMenu, AboutMegaMenu, PromotionsMegaMenu, ContactMegaMenu
2. **Audit footer navigation** - Verify all footer links
3. **Audit mobile menu** - Verify mobile menu structure
4. **Create sitemap page** - Visual sitemap for testing all routes
5. **Add dev tools link** - Add sitemap to dev-tools landing page

---

**END OF ROUTING GUIDE**
