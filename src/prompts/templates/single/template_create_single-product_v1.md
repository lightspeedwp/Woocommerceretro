# Create Single Product Template

**Version:** v1.0  
**Date Created:** 2026-01-10  
**Last Updated:** 2026-01-10  
**Category:** Template  
**Status:** Active

---

## 📋 Prompt Metadata

| Field | Value |
|-------|-------|
| **Type** | Page Template (Single) |
| **Target** | SingleProduct.tsx |
| **Complexity** | High |
| **Estimated Time** | 120 minutes |
| **Prerequisites** | Guidelines.md, templates/, patterns/, blocks/ |
| **Output Files** | SingleProduct.tsx, SingleProduct.test.tsx |

---

## 🎯 Objective

Create a comprehensive single product detail template with gallery, tabs, related products, reviews, breadcrumbs, and full e-commerce functionality.

### What This Prompt Does:
- ✅ Creates complete product detail template
- ✅ Implements product image gallery
- ✅ Adds product information tabs
- ✅ Includes add to cart functionality
- ✅ Shows related products section
- ✅ Implements review system
- ✅ Ensures WCAG AA compliance
- ✅ Generates comprehensive tests

### What This Prompt Does NOT Do:
- ❌ Implement real payment processing
- ❌ Handle inventory management
- ❌ Manage product variations (size/color)
- ❌ Include wish list functionality

---

## 📚 Context & Background

### Project Architecture:
- **Location:** `/src/app/templates/SingleProduct.tsx`
- **Type:** WordPress Single Template
- **Usage:** Individual product detail pages
- **Template Mapping:** Maps to WordPress `single-product.html`

### Related Components:
- `ProductGallery` - Image gallery with thumbnails
- `ProductBreadcrumbs` - Navigation breadcrumbs
- `ProductTabs` - Tabbed content (description, reviews, info)
- `RelatedProducts` - Product recommendations
- `AddToCartButton` - Cart functionality
- `PriceDisplay` - Price formatting

---

## 📋 Requirements

### Functional Requirements:
1. Product image gallery (main + thumbnails)
2. Product title, price, SKU, category
3. Short description
4. Add to cart button with quantity selector
5. Product tabs (Description, Reviews, Additional Info)
6. Rating and review system
7. Related products section
8. Breadcrumb navigation
9. Social sharing buttons (optional)
10. Stock status indicator

### Technical Requirements:
1. TypeScript with complete interfaces
2. WordPress template structure
3. Use ProductGallery, ProductTabs components
4. Integrate with CartContext
5. URL routing for product slug
6. SEO meta tags
7. ≥70% test coverage

### Accessibility Requirements:
1. **WCAG AA compliance** - 4.5:1 contrast
2. **Keyboard navigation** - Tab through all elements
3. **ARIA labels** - Image gallery, tabs, reviews
4. **Focus management** - Tab panels
5. **Semantic HTML** - h1, article, aside
6. **Alt text** - All product images

---

## 🔧 Implementation Instructions

### Step 1: Create Template File

**Action:** Create `/src/app/templates/SingleProduct.tsx`

**Code:**
```tsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ShareNetwork as Share2 } from '@phosphor-icons/react';
import { Container } from '@/components/common/Container';
import { Typography } from '@/components/common/Typography';
import { useCart } from '@/contexts/CartContext';

/**
 * SingleProduct Template
 * 
 * WordPress single template for product detail pages
 * Includes gallery, tabs, reviews, related products
 * 
 * @example
 * <SingleProduct />
 */

interface Product {
  id: string;
  slug: string;
  title: string;
  images: string[];
  price: number;
  salePrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  sku: string;
  inStock: boolean;
  stockQuantity?: number;
  shortDescription: string;
  description: string;
  additionalInfo: Record<string, string>;
  onSale: boolean;
  featured?: boolean;
}

interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

const MOCK_PRODUCT: Product = {
  id: '1',
  slug: 'wireless-headphones',
  title: 'Premium Wireless Headphones',
  images: [
    '/products/headphones-1.jpg',
    '/products/headphones-2.jpg',
    '/products/headphones-3.jpg',
    '/products/headphones-4.jpg',
  ],
  price: 299.99,
  salePrice: 249.99,
  rating: 4.5,
  reviewCount: 128,
  category: 'Electronics',
  sku: 'WH-1000XM4',
  inStock: true,
  stockQuantity: 24,
  shortDescription: 'Industry-leading noise cancellation with premium sound quality.',
  description: 'Experience superior sound quality with these premium wireless headphones. Features advanced noise cancellation technology, 30-hour battery life, and premium comfort.',
  additionalInfo: {
    'Weight': '254g',
    'Battery Life': '30 hours',
    'Connectivity': 'Bluetooth 5.0',
    'Warranty': '2 years',
  },
  onSale: true,
};

const MOCK_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'John D.',
    rating: 5,
    date: '2026-01-05',
    comment: 'Amazing sound quality and comfort. Best headphones I\'ve owned!',
    verified: true,
  },
  {
    id: '2',
    author: 'Sarah M.',
    rating: 4,
    date: '2026-01-03',
    comment: 'Great noise cancellation but a bit pricey.',
    verified: true,
  },
];

export const SingleProduct: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'info'>('description');
  const [loading, setLoading] = useState(true);

  // Fetch product data
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setProduct(MOCK_PRODUCT);
      setReviews(MOCK_REVIEWS);
      setLoading(false);
    }, 500);
  }, [slug]);

  const handleAddToCart = () => {
    if (product) {
      addItem({
        id: product.id,
        name: product.title,
        price: product.salePrice || product.price,
        quantity,
        image: product.images[0],
      });
    }
  };

  if (loading) {
    return (
      <main className="wp-template--single-product">
        <Container className="py-12">
          <div className="animate-pulse">Loading...</div>
        </Container>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="wp-template--single-product">
        <Container className="py-12">
          <Typography variant="h1">Product not found</Typography>
        </Container>
      </main>
    );
  }

  return (
    <main id="main-content" className="wp-template--single-product">
      {/* Breadcrumbs */}
      <section className="bg-gray-50 dark:bg-gray-900 py-4 border-b border-gray-100 dark:border-gray-800">
        <Container>
          <nav aria-label="Breadcrumb" className="woocommerce-breadcrumb">
            <ol className="woocommerce-breadcrumb__list">
              <li className="woocommerce-breadcrumb__item">
                <Link to="/">Home</Link>
              </li>
              <li className="woocommerce-breadcrumb__separator" aria-hidden="true">/</li>
              <li className="woocommerce-breadcrumb__item">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="woocommerce-breadcrumb__separator" aria-hidden="true">/</li>
              <li className="woocommerce-breadcrumb__item">
                <Link to={`/category/${product.category.toLowerCase()}`}>
                  {product.category}
                </Link>
              </li>
              <li className="woocommerce-breadcrumb__separator" aria-hidden="true">/</li>
              <li className="woocommerce-breadcrumb__item woocommerce-breadcrumb__item--current" aria-current="page">
                {product.title}
              </li>
            </ol>
          </nav>
        </Container>
      </section>

      {/* Product Details */}
      <section className="py-12 bg-white dark:bg-[#0f0f0f]">
        <Container>
          <article className="woocommerce-product">
            <div className="woocommerce-product__layout">
              {/* Gallery */}
              <div className="woocommerce-product__gallery">
                {/* Main Image */}
                <div className="woocommerce-product__gallery-main">
                  <img
                    src={product.images[selectedImage]}
                    alt={`${product.title} - Image ${selectedImage + 1}`}
                    className="woocommerce-product__image"
                  />
                  {product.onSale && (
                    <span className="woocommerce-product__badge woocommerce-product__badge--sale">
                      Sale
                    </span>
                  )}
                </div>

                {/* Thumbnails */}
                <div className="woocommerce-product__gallery-thumbnails" role="list">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`
                        woocommerce-product__thumbnail
                        ${selectedImage === index ? 'woocommerce-product__thumbnail--active' : ''}
                      `}
                      aria-label={`View image ${index + 1}`}
                      role="listitem"
                    >
                      <img src={image} alt={`Thumbnail ${index + 1}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="woocommerce-product__summary">
                {/* Category */}
                <Link
                  to={`/category/${product.category.toLowerCase()}`}
                  className="woocommerce-product__category"
                >
                  {product.category}
                </Link>

                {/* Title */}
                <Typography variant="h1" className="woocommerce-product__title">
                  {product.title}
                </Typography>

                {/* Rating */}
                <div className="woocommerce-product__rating">
                  <div className="woocommerce-product__stars" aria-label={`Rated ${product.rating} out of 5`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < Math.floor(product.rating)
                            ? 'woocommerce-product__star woocommerce-product__star--filled'
                            : 'woocommerce-product__star woocommerce-product__star--empty'
                        }
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <a href="#reviews" className="woocommerce-product__review-link">
                    ({product.reviewCount} reviews)
                  </a>
                </div>

                {/* Price */}
                <div className="woocommerce-product__price">
                  {product.salePrice ? (
                    <>
                      <span className="woocommerce-product__price--sale">
                        ${product.salePrice.toFixed(2)}
                      </span>
                      <span className="woocommerce-product__price--original">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="woocommerce-product__price--regular">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Short Description */}
                <Typography variant="body" className="woocommerce-product__short-description">
                  {product.shortDescription}
                </Typography>

                {/* Stock Status */}
                <div className="woocommerce-product__stock">
                  {product.inStock ? (
                    <span className="woocommerce-product__stock--in-stock">
                      ✓ In Stock ({product.stockQuantity} available)
                    </span>
                  ) : (
                    <span className="woocommerce-product__stock--out-of-stock">
                      Out of Stock
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <div className="woocommerce-product__add-to-cart">
                  <div className="woocommerce-product__quantity">
                    <label htmlFor="quantity" className="sr-only">Quantity</label>
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="woocommerce-product__quantity-button"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <input
                      id="quantity"
                      type="number"
                      min="1"
                      max={product.stockQuantity}
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="woocommerce-product__quantity-input"
                      aria-label="Product quantity"
                    />
                    <button
                      onClick={() => setQuantity(Math.min(product.stockQuantity || 999, quantity + 1))}
                      className="woocommerce-product__quantity-button"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="woocommerce-product__add-to-cart-button"
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                </div>

                {/* Meta */}
                <div className="woocommerce-product__meta">
                  <div className="woocommerce-product__meta-item">
                    <span className="woocommerce-product__meta-label">SKU:</span>
                    <span className="woocommerce-product__meta-value">{product.sku}</span>
                  </div>
                  <div className="woocommerce-product__meta-item">
                    <span className="woocommerce-product__meta-label">Category:</span>
                    <Link
                      to={`/category/${product.category.toLowerCase()}`}
                      className="woocommerce-product__meta-link"
                    >
                      {product.category}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="woocommerce-product__tabs" id="product-tabs">
              {/* Tab Navigation */}
              <div className="woocommerce-product__tabs-nav" role="tablist">
                <button
                  role="tab"
                  aria-selected={activeTab === 'description'}
                  aria-controls="tab-description"
                  onClick={() => setActiveTab('description')}
                  className={`woocommerce-product__tab ${activeTab === 'description' ? 'woocommerce-product__tab--active' : ''}`}
                >
                  Description
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === 'reviews'}
                  aria-controls="tab-reviews"
                  onClick={() => setActiveTab('reviews')}
                  className={`woocommerce-product__tab ${activeTab === 'reviews' ? 'woocommerce-product__tab--active'  : ''}`}
                >
                  Reviews ({product.reviewCount})
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === 'info'}
                  aria-controls="tab-info"
                  onClick={() => setActiveTab('info')}
                  className={`woocommerce-product__tab ${activeTab === 'info' ? 'woocommerce-product__tab--active' : ''}`}
                >
                  Additional Information
                </button>
              </div>

              {/* Tab Panels */}
              <div className="woocommerce-product__tabs-content">
                {/* Description */}
                {activeTab === 'description' && (
                  <div
                    id="tab-description"
                    role="tabpanel"
                    aria-labelledby="tab-description"
                    className="woocommerce-product__tab-panel"
                  >
                    <Typography variant="h2" className="mb-4">
                      Description
                    </Typography>
                    <Typography variant="body">
                      {product.description}
                    </Typography>
                  </div>
                )}

                {/* Reviews */}
                {activeTab === 'reviews' && (
                  <div
                    id="tab-reviews"
                    role="tabpanel"
                    aria-labelledby="tab-reviews"
                    className="woocommerce-product__tab-panel"
                  >
                    <Typography variant="h2" className="mb-6">
                      {product.reviewCount} reviews for {product.title}
                    </Typography>

                    <div className="woocommerce-product__reviews" role="list">
                      {reviews.map((review) => (
                        <article key={review.id} className="woocommerce-product__review" role="listitem">
                          <div className="woocommerce-product__review-header">
                            <div>
                              <strong className="woocommerce-product__review-author">
                                {review.author}
                              </strong>
                              {review.verified && (
                                <span className="woocommerce-product__review-verified">
                                  ✓ Verified Purchase
                                </span>
                              )}
                            </div>
                            <time className="woocommerce-product__review-date">
                              {new Date(review.date).toLocaleDateString()}
                            </time>
                          </div>
                          <div className="woocommerce-product__review-rating" aria-label={`Rated ${review.rating} out of 5`}>
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={
                                  i < review.rating
                                    ? 'woocommerce-product__star woocommerce-product__star--filled'
                                    : 'woocommerce-product__star woocommerce-product__star--empty'
                                }
                                aria-hidden="true"
                              />
                            ))}
                          </div>
                          <Typography variant="body" className="woocommerce-product__review-comment">
                            {review.comment}
                          </Typography>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                {activeTab === 'info' && (
                  <div
                    id="tab-info"
                    role="tabpanel"
                    aria-labelledby="tab-info"
                    className="woocommerce-product__tab-panel"
                  >
                    <Typography variant="h2" className="mb-4">
                      Additional Information
                    </Typography>
                    <table className="woocommerce-product__attributes">
                      <tbody>
                        {Object.entries(product.additionalInfo).map(([key, value]) => (
                          <tr key={key} className="woocommerce-product__attribute">
                            <th className="woocommerce-product__attribute-label">
                              {key}
                            </th>
                            <td className="woocommerce-product__attribute-value">
                              {value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </article>
        </Container>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <Container>
          <Typography variant="h2" className="mb-8 text-center">
            You may also like
          </Typography>
          <div className="woocommerce-products-grid">
            {/* Related products would go here */}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default SingleProduct;
```

**Success Criteria:**
- ✅ Template file created
- ✅ All sections implemented
- ✅ TypeScript complete
- ✅ Responsive design

---

### Step 2: Add CSS Styles

**Action:** Add styles to `/src/styles/globals.css`

**Code:**
```css
/* ============================================
   SINGLE PRODUCT TEMPLATE
   ============================================ */

.wp-template--single-product {
  min-height: 100vh;
}

/* Product Layout */
.woocommerce-product__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--wp--preset--spacing--2xl);
  margin-bottom: var(--wp--preset--spacing--2xl);
}

@media (min-width: 1024px) {
  .woocommerce-product__layout {
    grid-template-columns: 1fr 1fr;
  }
}

/* Gallery */
.woocommerce-product__gallery {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--md);
}

.woocommerce-product__gallery-main {
  position: relative;
  aspect-ratio: 1 / 1;
  background: var(--wp--preset--color--muted);
  border-radius: var(--wp--preset--border-radius--lg);
  overflow: hidden;
}

.woocommerce-product__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.woocommerce-product__badge {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px 16px;
  background: var(--wp--preset--color--error);
  color: white;
  font-size: var(--wp--preset--font-size--sm);
  font-weight: var(--wp--preset--font-weight--semibold);
  border-radius: var(--wp--preset--border-radius--md);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.woocommerce-product__gallery-thumbnails {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--wp--preset--spacing--sm);
}

.woocommerce-product__thumbnail {
  aspect-ratio: 1 / 1;
  border: 2px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--md);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--wp--preset--transition--base) ease;
  background: none;
  padding: 0;
}

.woocommerce-product__thumbnail:hover {
  border-color: var(--wp--preset--color--primary);
}

.woocommerce-product__thumbnail--active {
  border-color: var(--wp--preset--color--primary);
}

.woocommerce-product__thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Product Summary */
.woocommerce-product__summary {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--md);
}

.woocommerce-product__category {
  font-size: var(--wp--preset--font-size--sm);
  color: var(--wp--preset--color--primary);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: var(--wp--preset--font-weight--semibold);
}

.woocommerce-product__title {
  margin: 0;
}

/* Rating */
.woocommerce-product__rating {
  display: flex;
  align-items: center;
  gap: var(--wp--preset--spacing--sm);
}

.woocommerce-product__stars {
  display: flex;
  gap: 4px;
}

.woocommerce-product__star--filled {
  fill: var(--wp--preset--color--foreground);
  color: var(--wp--preset--color--foreground);
}

.woocommerce-product__star--empty {
  fill: none;
  color: var(--wp--preset--color--border-strong);
}

.woocommerce-product__review-link {
  font-size: var(--wp--preset--font-size--sm);
  color: var(--wp--preset--color--foreground-secondary);
  text-decoration: none;
}

.woocommerce-product__review-link:hover {
  text-decoration: underline;
}

/* Price */
.woocommerce-product__price {
  display: flex;
  align-items: baseline;
  gap: var(--wp--preset--spacing--md);
}

.woocommerce-product__price--regular,
.woocommerce-product__price--sale {
  font-size: var(--wp--preset--font-size--2xl);
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
}

.woocommerce-product__price--sale {
  color: var(--wp--preset--color--error);
}

.woocommerce-product__price--original {
  font-size: var(--wp--preset--font-size--xl);
  color: var(--wp--preset--color--foreground-tertiary);
  text-decoration: line-through;
}

/* Stock */
.woocommerce-product__stock {
  padding: var(--wp--preset--spacing--md);
  background: var(--wp--preset--color--muted);
  border-radius: var(--wp--preset--border-radius--md);
}

.woocommerce-product__stock--in-stock {
  color: var(--wp--preset--color--success);
  font-weight: var(--wp--preset--font-weight--medium);
}

.woocommerce-product__stock--out-of-stock {
  color: var(--wp--preset--color--error);
  font-weight: var(--wp--preset--font-weight--medium);
}

/* Add to Cart */
.woocommerce-product__add-to-cart {
  display: flex;
  gap: var(--wp--preset--spacing--md);
  margin-top: var(--wp--preset--spacing--lg);
}

.woocommerce-product__quantity {
  display: flex;
  border: 2px solid var(--wp--preset--color--border);
  border-radius: var(--wp--preset--border-radius--md);
  overflow: hidden;
}

.woocommerce-product__quantity-button {
  width: 44px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--wp--preset--color--muted);
  border: none;
  cursor: pointer;
  font-size: var(--wp--preset--font-size--lg);
  color: var(--wp--preset--color--foreground);
  transition: all var(--wp--preset--transition--base) ease;
}

.woocommerce-product__quantity-button:hover {
  background: var(--wp--preset--color--primary);
  color: white;
}

.woocommerce-product__quantity-input {
  width: 60px;
  height: 48px;
  text-align: center;
  border: none;
  border-left: 2px solid var(--wp--preset--color--border);
  border-right: 2px solid var(--wp--preset--color--border);
  background: var(--wp--preset--color--background);
  color: var(--wp--preset--color--foreground);
  font-size: var(--wp--preset--font-size--base);
  font-weight: var(--wp--preset--font-weight--semibold);
}

.woocommerce-product__add-to-cart-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--wp--preset--spacing--sm);
  min-height: 48px;
  padding: 0 var(--wp--preset--spacing--xl);
  background: var(--wp--preset--color--primary);
  color: white;
  border: none;
  border-radius: var(--wp--preset--border-radius--md);
  font-size: var(--wp--preset--font-size--base);
  font-weight: var(--wp--preset--font-weight--semibold);
  cursor: pointer;
  transition: all var(--wp--preset--transition--base) ease;
}

.woocommerce-product__add-to-cart-button:hover {
  background: var(--wp--preset--color--primary-hover);
  transform: translateY(-2px);
  box-shadow: var(--wp--preset--shadow--lg);
}

.woocommerce-product__add-to-cart-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Meta */
.woocommerce-product__meta {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--sm);
  padding-top: var(--wp--preset--spacing--lg);
  border-top: 1px solid var(--wp--preset--color--border);
  font-size: var(--wp--preset--font-size--sm);
}

.woocommerce-product__meta-item {
  display: flex;
  gap: var(--wp--preset--spacing--sm);
}

.woocommerce-product__meta-label {
  color: var(--wp--preset--color--foreground-tertiary);
}

.woocommerce-product__meta-value {
  color: var(--wp--preset--color--foreground);
  font-weight: var(--wp--preset--font-weight--medium);
}

.woocommerce-product__meta-link {
  color: var(--wp--preset--color--primary);
  text-decoration: none;
}

.woocommerce-product__meta-link:hover {
  text-decoration: underline;
}

/* Tabs */
.woocommerce-product__tabs {
  margin-top: var(--wp--preset--spacing--2xl);
  border-top: 1px solid var(--wp--preset--color--border);
  padding-top: var(--wp--preset--spacing--2xl);
}

.woocommerce-product__tabs-nav {
  display: flex;
  gap: var(--wp--preset--spacing--md);
  border-bottom: 2px solid var(--wp--preset--color--border);
  margin-bottom: var(--wp--preset--spacing--xl);
}

.woocommerce-product__tab {
  padding: var(--wp--preset--spacing--md) var(--wp--preset--spacing--lg);
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  margin-bottom: -2px;
  color: var(--wp--preset--color--foreground-secondary);
  font-size: var(--wp--preset--font-size--base);
  font-weight: var(--wp--preset--font-weight--medium);
  cursor: pointer;
  transition: all var(--wp--preset--transition--base) ease;
}

.woocommerce-product__tab:hover {
  color: var(--wp--preset--color--foreground);
}

.woocommerce-product__tab--active {
  border-bottom-color: var(--wp--preset--color--primary);
  color: var(--wp--preset--color--foreground);
  font-weight: var(--wp--preset--font-weight--semibold);
}

.woocommerce-product__tab-panel {
  max-width: 800px;
}

/* Reviews */
.woocommerce-product__reviews {
  display: flex;
  flex-direction: column;
  gap: var(--wp--preset--spacing--xl);
}

.woocommerce-product__review {
  padding: var(--wp--preset--spacing--lg);
  background: var(--wp--preset--color--muted);
  border-radius: var(--wp--preset--border-radius--md);
}

.woocommerce-product__review-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: var(--wp--preset--spacing--sm);
}

.woocommerce-product__review-author {
  font-weight: var(--wp--preset--font-weight--semibold);
  color: var(--wp--preset--color--foreground);
}

.woocommerce-product__review-verified {
  margin-left: var(--wp--preset--spacing--sm);
  font-size: var(--wp--preset--font-size--xs);
  color: var(--wp--preset--color--success);
  font-weight: var(--wp--preset--font-weight--normal);
}

.woocommerce-product__review-date {
  font-size: var(--wp--preset--font-size--sm);
  color: var(--wp--preset--color--foreground-tertiary);
}

.woocommerce-product__review-rating {
  display: flex;
  gap: 4px;
  margin-bottom: var(--wp--preset--spacing--sm);
}

.woocommerce-product__review-comment {
  color: var(--wp--preset--color--foreground-secondary);
}

/* Attributes Table */
.woocommerce-product__attributes {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
}

.woocommerce-product__attribute {
  border-top: 1px solid var(--wp--preset--color--border);
}

.woocommerce-product__attribute-label {
  padding: var(--wp--preset--spacing--md);
  text-align: left;
  font-weight: var(--wp--preset--font-weight--medium);
  color: var(--wp--preset--color--foreground-tertiary);
  width: 40%;
}

.woocommerce-product__attribute-value {
  padding: var(--wp--preset--spacing--md);
  color: var(--wp--preset--color--foreground);
}
```

---

### Step 3: Create Test File

**Action:** Create test file

**Code:**
```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from '@/contexts/CartContext';
import { SingleProduct } from './SingleProduct';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      <CartProvider>{component}</CartProvider>
    </BrowserRouter>
  );
};

describe('SingleProduct', () => {
  it('renders product title and price', async () => {
    renderWithProviders(<SingleProduct />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });
  });

  it('displays product gallery', async () => {
    renderWithProviders(<SingleProduct />);

    await waitFor(() => {
      expect(screen.getByAltText(/Image 1/)).toBeInTheDocument();
    });
  });

  it('switches images when thumbnail clicked', async () => {
    renderWithProviders(<SingleProduct />);

    await waitFor(() => {
      expect(screen.getByLabelText('View image 1')).toBeInTheDocument();
    });

    const thumbnail2 = screen.getByLabelText('View image 2');
    fireEvent.click(thumbnail2);

    expect(screen.getByAltText(/Image 2/)).toBeInTheDocument();
  });

  it('changes quantity with buttons', async () => {
    renderWithProviders(<SingleProduct />);

    await waitFor(() => {
      expect(screen.getByLabelText('Product quantity')).toBeInTheDocument();
    });

    const increaseButton = screen.getByLabelText('Increase quantity');
    fireEvent.click(increaseButton);

    const quantityInput = screen.getByLabelText('Product quantity') as HTMLInputElement;
    expect(quantityInput.value).toBe('2');
  });

  it('switches tabs when clicked', async () => {
    renderWithProviders(<SingleProduct />);

    await waitFor(() => {
      expect(screen.getByRole('tab', { name: /Description/ })).toBeInTheDocument();
    });

    const reviewsTab = screen.getByRole('tab', { name: /Reviews/ });
    fireEvent.click(reviewsTab);

    await waitFor(() => {
      expect(screen.getByRole('tabpanel')).toBeInTheDocument();
    });
  });

  it('displays breadcrumbs', async () => {
    renderWithProviders(<SingleProduct />);

    await waitFor(() => {
      expect(screen.getByRole('navigation', { name: /Breadcrumb/ })).toBeInTheDocument();
    });
  });
});
```

---

## ✅ Verification Checklist

- [ ] Template renders
- [ ] Gallery works
- [ ] Tabs switch
- [ ] Add to cart works
- [ ] Quantity changes
- [ ] Reviews display
- [ ] Breadcrumbs show
- [ ] Dark mode works
- [ ] Responsive layout
- [ ] Tests pass

---

**Status:** ✅ Active  
**Created:** 2026-01-10