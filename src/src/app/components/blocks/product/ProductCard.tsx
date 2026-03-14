import React from 'react';
import { Link } from 'react-router';
import { Star, Heart, Eye, Scales as Scale } from '@phosphor-icons/react';
import { useCart } from '../../../contexts/CartContext';
import { useWishlist } from '../../../contexts/WishlistContext';
import { useQuickView } from '../../../contexts/QuickViewContext';
import { useComparison } from '../../../contexts/ComparisonContext';
import { toast } from 'sonner@2.0.3';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { Button } from '../design/Buttons';

/**
 * ProductCard Component (Block)
 *
 * Full-featured product card with wishlist, quick view, comparison,
 * and add-to-cart functionality.
 */
export const ProductCard = React.memo(({ product }: { product: any }) => {
  const cart = useCart();
  const wishlist = useWishlist();
  const quickViewContext = useQuickView();
  const comparison = useComparison();

  if (!cart || !cart.addToCart || !cart.isInCart) return null;

  const { addToCart } = cart;
  const { addToWishlist, removeFromWishlist, isInWishlist } = wishlist;
  const { openQuickView } = quickViewContext;
  const { addToComparison, removeFromComparison, isInComparison } = comparison;

  const isSale = !!product.salePrice || (product.badges && product.badges.indexOf('Sale') !== -1);
  const isOutOfStock = product.inStock === false;
  const inWishlist = isInWishlist(product.id);
  const inComparison = isInComparison(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock) return;
    addToCart(product, 1);
    toast.success(`${product.name} added to cart!`, { duration: 2000, position: 'bottom-right' });
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.info('Removed from wishlist', { duration: 2000, position: 'bottom-right' });
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist!', { duration: 2000, position: 'bottom-right' });
    }
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  const handleToggleComparison = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inComparison) {
      removeFromComparison(product.id);
      toast.info('Removed from comparison', { duration: 2000, position: 'bottom-right' });
    } else {
      addToComparison(product);
      toast.success('Added to comparison!', { duration: 2000, position: 'bottom-right' });
    }
  };

  return (
    <div className={`wc-block-product-card group funky-card-glow funky-spring-hover ${isOutOfStock ? 'wc-block-product-card--out-of-stock' : ''}`}>
      <Link to={`/product/${product.id}`} className="wc-block-product-card__image-container">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="wc-block-product-card__image funky-image-glow"
        />
        <div className="wc-block-product-card__badge-container">
          {isSale && !isOutOfStock && <strong className="wp-badge wp-badge-sale">SALE</strong>}
          {isOutOfStock && <strong className="wp-badge wp-badge-out-of-stock">OUT OF STOCK</strong>}
        </div>
        <button
          onClick={handleToggleWishlist}
          className={`wc-block-product-card__action-button wc-block-product-card__action-button--wishlist funky-spring-hover ${inWishlist ? 'wc-block-product-card__action-button--active' : ''}`}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} className="wc-block-product-card__icon" />
        </button>
        <button
          onClick={handleQuickView}
          className="wc-block-product-card__action-button wc-block-product-card__action-button--quickview funky-spring-hover"
          aria-label="Quick view"
        >
          <Eye size={18} className="wc-block-product-card__icon" />
        </button>
      </Link>

      <div className="wc-block-product-card__content">
        {product.rating !== undefined && (
          <div className="wp-star-rating">
            <div className="wc-block-product-card__rating-container">
              {[0, 1, 2, 3, 4].map((i) => {
                const isFilled = i < Math.floor(product.rating || 0);
                return (
                  <Star
                    key={i}
                    size={14}
                    fill={isFilled ? 'currentColor' : 'none'}
                    className={isFilled ? 'wp-star-rating__star--filled' : 'wp-star-rating__star--empty'}
                  />
                );
              })}
            </div>
            <small className="wp-star-rating__count">({product.reviewCount || 0})</small>
          </div>
        )}

        <h3 className="wc-block-product-card__title funky-title">
          <Link to={`/product/${product.id}`} className="wc-block-product-card__title-link">
            {product.name}
          </Link>
        </h3>

        <div className="wc-block-product-card__price-container">
          {isSale && product.salePrice ? (
            <>
              <span className="wc-block-product-card__price wc-block-product-card__price--sale funky-text-pink">
                &pound;{product.salePrice.toFixed(2)}
              </span>
              <small className="wc-block-product-card__price--original">
                &pound;{product.price.toFixed(2)}
              </small>
            </>
          ) : (
            <span className="wc-block-product-card__price funky-text-cyan">
              &pound;{product.price.toFixed(2)}
            </span>
          )}
        </div>

        <Button
          fullWidth
          disabled={isOutOfStock}
          variant={isOutOfStock ? 'outline' : 'primary'}
          className={`${isOutOfStock ? 'wc-block-product-card__button--disabled' : ''} wp-glow funky-btn-neon`}
          aria-label={isOutOfStock ? 'Out of stock' : `Add ${product.name} to cart`}
          onClick={handleAddToCart}
        >
          <span className="wc-block-product-card__button-content">
            <Scale size={18} />
            {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
          </span>
        </Button>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';
