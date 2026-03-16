/**
 * ProductComparison.tsx - Pattern
 * 
 * Side-by-side product comparison table with detailed attributes.
 */

import React from 'react';
import { X, ShoppingCart, Heart, Eye, Check, Minus, WarningCircle } from '../../utils/phosphor-compat';
import { Link } from 'react-router';
import { useComparison } from '../../contexts/ComparisonContext';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useQuickView } from '../../contexts/QuickViewContext';
import { toast } from 'sonner@2.0.3';

export const ProductComparison = () => {
  const { comparisonItems, removeFromComparison } = useComparison();
  const { addItem } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const { openQuickView } = useQuickView();

  // Collect all unique features
  const allFeatures: string[] = [];
  comparisonItems.forEach((product) => {
    if (product.features) {
      product.features.forEach((feature) => {
        if (!allFeatures.includes(feature)) {
          allFeatures.push(feature);
        }
      });
    }
  });

  // Collect all unique spec keys
  const allSpecKeys: string[] = [];
  comparisonItems.forEach((product) => {
    if (product.specifications) {
      Object.keys(product.specifications).forEach((key) => {
        if (!allSpecKeys.includes(key)) {
          allSpecKeys.push(key);
        }
      });
    }
  });

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });
    toast.success(`${product.name} added to cart!`);
  };

  if (comparisonItems.length === 0) {
    return <div className="wc-block-product-comparison__empty">No products to compare.</div>;
  }

  const gridStyle = { gridTemplateColumns: `repeat(${comparisonItems.length}, 1fr)` };

  return (
    <div className="wc-block-product-comparison">
      <div className="wc-block-product-comparison__container">
        <div className="wc-block-product-comparison__table">
          {/* Header Row */}
          <div className="wc-block-product-comparison__grid" style={gridStyle}>
            {comparisonItems.map((product) => (
              <div key={product.id} className="wc-block-product-comparison__cell">
                <button
                  onClick={() => removeFromComparison(product.id)}
                  aria-label={`Remove ${product.name} from comparison`}
                  className="wc-block-product-comparison__remove-button"
                >
                  <X size={16} />
                </button>
                <Link to={`/product/${product.slug || product.id}`} className="wc-block-product-comparison__image">
                  <img src={product.image} alt={product.name} className="wc-block-product-comparison__img" />
                </Link>
                <Link to={`/product/${product.slug || product.id}`} className="wc-block-product-comparison__title">
                  {product.name}
                </Link>
                {product.brand && <p className="wc-block-product-comparison__brand">{product.brand}</p>}
              </div>
            ))}
          </div>

          {/* Price Row */}
          <div className="wc-block-product-comparison__grid" style={gridStyle}>
            {comparisonItems.map((product) => {
              const currentPrice = product.salePrice ? product.salePrice.toFixed(2) : product.price.toFixed(2);
              const regularPrice = product.price.toFixed(2);

              return (
                <div key={product.id} className="wc-block-product-comparison__cell wc-block-product-comparison__cell--bordered">
                  <div className="wc-block-product-comparison__label">Price</div>
                  <div className="wc-block-product-comparison__price-row">
                    {product.salePrice ? (
                      <>
                        <span className="wc-block-product-comparison__price-current wc-block-product-comparison__price-sale">${currentPrice}</span>
                        <span className="wc-block-product-comparison__price-regular">${regularPrice}</span>
                      </>
                    ) : (
                      <span className="wc-block-product-comparison__price-current">${currentPrice}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Features Section */}
          {allFeatures.length > 0 && (
            <>
              <div className="wc-block-product-comparison__cell-header">
                <h3 className="wc-block-product-comparison__section-title">Features</h3>
              </div>
              {allFeatures.map((feature, i) => (
                <div key={`feature-${i}`} className="wc-block-product-comparison__grid" style={gridStyle}>
                  {comparisonItems.map((product) => {
                    const hasFeature = product.features?.includes(feature);
                    return (
                      <div key={product.id} className="wc-block-product-comparison__cell wc-block-product-comparison__cell--bordered">
                        <div className="wc-block-product-comparison__feature-row">
                          {hasFeature
                            ? <Check size={16} weight="bold" className="wc-block-product-comparison__icon--yes" />
                            : <Minus size={16} weight="bold" className="wc-block-product-comparison__icon--no" />
                          }
                          <span className={hasFeature ? 'wc-block-product-comparison__feature-text' : 'wc-block-product-comparison__feature-text--missing'}>
                            {feature}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </>
          )}

          {/* Specifications Section */}
          {allSpecKeys.length > 0 && (
            <>
              <div className="wc-block-product-comparison__cell-header">
                <h3 className="wc-block-product-comparison__section-title">Specifications</h3>
              </div>
              {allSpecKeys.map((specKey, i) => (
                <div key={`spec-${i}`} className="wc-block-product-comparison__grid" style={gridStyle}>
                  {comparisonItems.map((product) => {
                    const specValue = product.specifications?.[specKey];
                    return (
                      <div key={product.id} className="wc-block-product-comparison__cell wc-block-product-comparison__cell--bordered">
                        <div className="wc-block-product-comparison__spec-key">{specKey}</div>
                        <div className="wc-block-product-comparison__spec-value">
                          {specValue || <span className="wc-block-product-comparison__spec-empty">-</span>}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </>
          )}

          {/* Action Row */}
          <div className="wc-block-product-comparison__grid" style={gridStyle}>
            {comparisonItems.map((product) => {
              const wishlisted = isInWishlist(product.id);
              return (
                <div key={product.id} className="wc-block-product-comparison__cell wc-block-product-comparison__cell--bordered">
                  <div className="wc-block-product-comparison__actions">
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className="wc-block-components-product-button wc-block-product-comparison__cart-btn funky-spring-hover"
                    >
                      <ShoppingCart size={18} weight="bold" />
                      <span>Add to Cart</span>
                    </button>
                    <div className="wc-block-product-comparison__action-pair">
                      <button
                        onClick={() => addToWishlist(product)}
                        aria-label="Add to wishlist"
                        className={`wc-block-product-comparison__icon-btn funky-spring-hover${wishlisted ? ' wc-block-product-comparison__icon-btn--wishlisted' : ''}`}
                      >
                        <Heart size={16} weight={wishlisted ? 'fill' : 'duotone'} className={wishlisted ? 'wc-block-product-comparison__heart--active' : ''} />
                      </button>
                      <button
                        onClick={() => openQuickView(product)}
                        aria-label="Quick view"
                        className="wc-block-product-comparison__icon-btn funky-spring-hover"
                      >
                        <Eye size={16} weight="duotone" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

ProductComparison.displayName = 'ProductComparison';