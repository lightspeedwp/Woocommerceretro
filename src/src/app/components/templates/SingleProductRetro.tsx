/**
 * SingleProductRetro
 *
 * "PlayPocket" FSE theme - Single Product page.
 * Features: image gallery with thumbnail strip, tabbed content,
 * related products section, and MiniCart integration.
 * WCAG AA 2.2 compliant.
 */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import { Star, Plus, ArrowRight, Heart, Scales, Truck, ShieldCheck, ArrowsClockwise } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { getProductById, getRelatedProducts } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { useComparison } from '../../contexts/ComparisonContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { toast } from 'sonner@2.0.3';

interface SingleProductRetroProps {
  product?: any;
}

const FALLBACK_PRODUCT = {
  name: 'Product Not Found',
  price: 0,
  image: '',
  category: 'UNKNOWN',
  description: 'We could not find the product you were looking for.',
  images: [],
  tags: [],
};

const TAB_KEYS = ['description', 'details', 'shipping'] as const;
type TabKey = typeof TAB_KEYS[number];

const TAB_LABELS: Record<TabKey, string> = {
  description: 'DESCRIPTION',
  details: 'DETAILS',
  shipping: 'SHIPPING',
};

export const SingleProductRetro = (props: SingleProductRetroProps) => {
  const params = useParams<{ id: string }>();
  const cartContext = useCart();
  const comparison = useComparison();
  const wishlist = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabKey>('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const foundProduct = getProductById(params.id || '');
  const product = props?.product || foundProduct || FALLBACK_PRODUCT;
  const displayPrice = typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price;
  const salePrice = product.salePrice ? `$${product.salePrice.toFixed(2)}` : null;

  const galleryImages: string[] = product.images && product.images.length > 0
    ? product.images
    : product.image ? [product.image] : [];

  const relatedProducts = getRelatedProducts(product.id, 4);
  const inComparison = comparison.isInComparison(product.id);
  const inWishlist = wishlist.isInWishlist(product.id);

  // Google Fonts loading moved to RootLayout.

  /* Reset image index when product changes */
  useEffect(() => {
    setActiveImageIndex(0);
    setQuantity(1);
    setActiveTab('description');
  }, [product.id]);

  const handleAddToCart = () => {
    cartContext.addToCart(product, quantity);
    toast.success(`${product.name} added to cart!`, { duration: 2000, position: 'bottom-right' });
    window.dispatchEvent(new Event('open-mini-cart'));
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        {/* Breadcrumb */}
        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <Link to="/shop" className="retro-breadcrumb-link">SHOP</Link>
          <span className="retro-breadcrumb-sep">/</span>
          {product.categorySlug && (
            <>
              <Link to={`/shop/category/${product.categorySlug}`} className="retro-breadcrumb-link">
                {(product.category || 'CATEGORY').toUpperCase()}
              </Link>
              <span className="retro-breadcrumb-sep">/</span>
            </>
          )}
          <span className="retro-breadcrumb-current">{product.name}</span>
        </div>

        {/* Main Product Area */}
        <div className="retro-sp-layout">
          {/* LEFT COLUMN: Gallery */}
          <div className="retro-sp-gallery">
            <div className="retro-sp-gallery-inner">
              <div className="retro-sp-decal retro-sp-decal-1"><Plus size={40} weight="bold" /></div>
              <div className="retro-sp-decal retro-sp-decal-2" />
              <div className="retro-sp-decal retro-sp-decal-3" />
              <div className="retro-sp-decal retro-sp-decal-4" />
              {product.onSale && (
                <span className="retro-sp-sale-badge retro-font-display retro-bold">SALE</span>
              )}
              <img
                src={galleryImages[activeImageIndex] || product.image}
                className="retro-sp-img"
                alt={product.name}
              />
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="retro-sp-thumbnails" role="listbox" aria-label="Product image gallery">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    className={`retro-sp-thumb${idx === activeImageIndex ? ' retro-sp-thumb--active' : ''}`}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`View image ${idx + 1} of ${galleryImages.length}`}
                    aria-selected={idx === activeImageIndex}
                    role="option"
                  >
                    <img src={img} alt="" className="retro-sp-thumb__img" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Details & Actions */}
          <div className="retro-sp-details">
            {/* Badges */}
            {product.badges && product.badges.length > 0 && (
              <div className="retro-sp-badges">
                {product.badges.map((badge: string) => (
                  <span key={badge} className="retro-sp-badge retro-font-display retro-bold">{badge}</span>
                ))}
              </div>
            )}

            <h1 className="retro-sp-title retro-font-body retro-bold">{product.name}</h1>

            {product.brand && (
              <span className="retro-sp-brand retro-font-body">{product.brand}</span>
            )}

            <div className="retro-sp-reviews">
              <div className="retro-sp-stars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    weight={i <= Math.round(product.rating || 0) ? 'fill' : 'regular'}
                    size={18}
                  />
                ))}
              </div>
              <span className="retro-sp-review-count retro-font-body retro-bold">
                {product.rating || 0} ({product.reviewCount || 0} Reviews)
              </span>
            </div>

            <div className="retro-sp-price-row">
              {salePrice ? (
                <>
                  <span className="retro-sp-price retro-sp-price--sale retro-font-body retro-bold">{salePrice}</span>
                  <span className="retro-sp-price retro-sp-price--original retro-font-body">{displayPrice}</span>
                </>
              ) : (
                <span className="retro-sp-price retro-font-body retro-bold">{displayPrice}</span>
              )}
            </div>

            {product.shortDescription && (
              <p className="retro-sp-short-desc retro-font-body">{product.shortDescription}</p>
            )}

            {/* Add to Cart Row */}
            <div className="retro-sp-actions">
              <div className="retro-qty">
                <button
                  className="retro-qty-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <div className="retro-qty-val retro-font-body retro-bold">{quantity}</div>
                <button
                  className="retro-qty-btn"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                className="retro-button retro-button--secondary retro-font-display retro-bold retro-sp-add"
                onClick={handleAddToCart}
              >
                ADD TO CART <ArrowRight weight="bold" />
              </button>
            </div>

            {/* Buy Now */}
            <Link
              to="/checkout"
              className="retro-button retro-font-display retro-bold retro-sp-buy"
              onClick={() => cartContext.addToCart(product, quantity)}
            >
              BUY NOW
            </Link>

            {/* Secondary Actions */}
            <div className="retro-sp-secondary-actions">
              <button
                className={`retro-sp-action-link retro-font-body${inWishlist ? ' retro-sp-action-link--active' : ''}`}
                onClick={() => {
                  if (inWishlist) {
                    wishlist.removeFromWishlist(product.id);
                    toast.success('Removed from wishlist', { duration: 2000 });
                  } else {
                    wishlist.addToWishlist(product);
                    toast.success('Added to wishlist!', { duration: 2000 });
                  }
                }}
              >
                <Heart size={18} weight={inWishlist ? 'fill' : 'bold'} />
                {inWishlist ? 'In Wishlist' : 'Add to Wishlist'}
              </button>
              <button
                className={`retro-sp-action-link retro-font-body${inComparison ? ' retro-sp-action-link--active' : ''}`}
                onClick={() => {
                  if (inComparison) {
                    comparison.removeFromComparison(product.id);
                  } else {
                    comparison.addToComparison(product);
                  }
                }}
              >
                <Scales size={18} weight="bold" />
                {inComparison ? 'In Comparison' : 'Compare'}
              </button>
            </div>

            {/* Trust Signals */}
            <div className="retro-sp-trust">
              <div className="retro-sp-trust__item retro-font-body">
                <Truck size={20} weight="bold" /> Free shipping over $75
              </div>
              <div className="retro-sp-trust__item retro-font-body">
                <ArrowsClockwise size={20} weight="bold" /> 30-day returns
              </div>
              <div className="retro-sp-trust__item retro-font-body">
                <ShieldCheck size={20} weight="bold" /> Secure checkout
              </div>
            </div>

            {/* Tabs */}
            <div className="retro-sp-tabs retro-font-display retro-bold" role="tablist">
              {TAB_KEYS.map((key) => (
                <button
                  key={key}
                  className={`retro-sp-tab${activeTab === key ? ' active' : ''}`}
                  onClick={() => setActiveTab(key)}
                  role="tab"
                  aria-selected={activeTab === key}
                  id={`tab-${key}`}
                  aria-controls={`panel-${key}`}
                >
                  {TAB_LABELS[key]}
                </button>
              ))}
            </div>

            <div
              className="retro-sp-tab-content"
              role="tabpanel"
              id={`panel-${activeTab}`}
              aria-labelledby={`tab-${activeTab}`}
            >
              {activeTab === 'description' && (
                <>
                  <h3 className="retro-font-body retro-bold">Product Details</h3>
                  <p className="retro-font-body">{product.description || product.desc}</p>
                </>
              )}

              {activeTab === 'details' && (
                <>
                  <h3 className="retro-font-body retro-bold">Additional Information</h3>
                  <table className="retro-sp-info-table retro-font-body">
                    <tbody>
                      {product.sku && (
                        <tr>
                          <td className="retro-sp-info-table__label retro-bold">SKU</td>
                          <td>{product.sku}</td>
                        </tr>
                      )}
                      {product.category && (
                        <tr>
                          <td className="retro-sp-info-table__label retro-bold">Category</td>
                          <td>{product.category}</td>
                        </tr>
                      )}
                      {product.brand && (
                        <tr>
                          <td className="retro-sp-info-table__label retro-bold">Brand</td>
                          <td>{product.brand}</td>
                        </tr>
                      )}
                      {product.weight && (
                        <tr>
                          <td className="retro-sp-info-table__label retro-bold">Weight</td>
                          <td>{product.weight} kg</td>
                        </tr>
                      )}
                      {product.tags && product.tags.length > 0 && (
                        <tr>
                          <td className="retro-sp-info-table__label retro-bold">Tags</td>
                          <td>
                            <div className="retro-sp-tag-list">
                              {product.tags.map((tag: string) => (
                                <Link key={tag} to={`/shop/tag/${tag}`} className="retro-sp-tag retro-font-display">
                                  {tag}
                                </Link>
                              ))}
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </>
              )}

              {activeTab === 'shipping' && (
                <>
                  <h3 className="retro-font-body retro-bold">Shipping & Returns</h3>
                  <p className="retro-font-body">
                    Free standard shipping on orders over $75. Express shipping available at checkout.
                    All items are shipped within 1-2 business days.
                  </p>
                  <p className="retro-font-body">
                    Not happy with your purchase? Return any item within 30 days for a full refund.
                    Items must be unused and in original packaging.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="retro-sp-related">
            <h2 className="retro-sp-related__heading retro-font-display retro-bold">
              YOU MAY ALSO LIKE
            </h2>
            <div className="retro-grid retro-grid--4">
              {relatedProducts.map((item: any) => {
                const itemPrice = typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price;
                const itemImg = item.image || item.img;
                const hoverImg = item.hoverImage || itemImg;
                const primaryBadge = item.badges && item.badges.length > 0 ? item.badges[0] : null;

                return (
                  <Link key={item.id} to={`/product/${item.id}`} className="retro-card">
                    {primaryBadge && (
                      <span className="retro-card-badge retro-font-display">{primaryBadge}</span>
                    )}
                    <div className="retro-card-img-wrap">
                      <img src={itemImg} className="retro-card-img retro-card-img--primary" alt={item.name} />
                      <img src={hoverImg} className="retro-card-img retro-card-img--hover" alt={`${item.name} alternate view`} />
                    </div>
                    <h3 className="retro-card-title retro-font-display retro-bold">{item.name}</h3>
                    <p className="retro-card-price retro-font-display retro-bold">
                      {item.salePrice ? (
                        <>
                          <span className="retro-card-price--original">{itemPrice}</span>
                          <span className="retro-card-price--sale">${item.salePrice.toFixed(2)}</span>
                        </>
                      ) : itemPrice}
                    </p>
                    <button
                      className="retro-card-btn retro-font-display retro-bold retro-card-btn--white"
                      onClick={(ev) => {
                        ev.preventDefault();
                        cartContext.addToCart(item, 1);
                        toast.success(`${item.name} added to cart!`, { duration: 2000, position: 'bottom-right' });
                      }}
                    >
                      ADD TO CART
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        <BottomGridRetro />
        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};

SingleProductRetro.displayName = 'SingleProductRetro';