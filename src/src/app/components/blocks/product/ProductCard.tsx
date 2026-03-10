import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Star, Heart, Eye, Scales as Scale } from '@phosphor-icons/react';
import * as ProductsData from '../../../data/products';
import * as CartContextModule from '../../../contexts/CartContext';
import * as WishlistContextModule from '../../../contexts/WishlistContext';
import * as QuickViewContextModule from '../../../contexts/QuickViewContext';
import * as ComparisonContextModule from '../../../contexts/ComparisonContext';
import * as SonnerModule from 'sonner@2.0.3';
import * as ImageFallbackModule from '../../figma/ImageWithFallback';
import * as ButtonsModule from '../design/Buttons';

var Link = ReactRouterModule.Link;
var useCart = CartContextModule.useCart;
var useWishlist = WishlistContextModule.useWishlist;
var useQuickView = QuickViewContextModule.useQuickView;
var useComparison = ComparisonContextModule.useComparison;
var toast = SonnerModule.toast;
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;
var Button = ButtonsModule.Button;

/**
 * ProductCard Component (Block)
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export var ProductCard = React.memo(function ProductCard(props) {
  var product = props.product;
  var cart = useCart();
  var wishlist = useWishlist();
  var quickViewContext = useQuickView();
  var comparison = useComparison();
  
  if (!cart || !cart.addToCart || !cart.isInCart) {
    return null;
  }
  
  var addToCart = cart.addToCart;
  var addToWishlist = wishlist.addToWishlist;
  var removeFromWishlist = wishlist.removeFromWishlist;
  var isInWishlist = wishlist.isInWishlist;
  var openQuickView = quickViewContext.openQuickView;
  var addToComparison = comparison.addToComparison;
  var removeFromComparison = comparison.removeFromComparison;
  var isInComparison = comparison.isInComparison;
  
  var isSale = !!product.salePrice || (product.badges && product.badges.indexOf('Sale') !== -1);
  var isOutOfStock = product.inStock === false;
  var inWishlist = isInWishlist(product.id);
  var inComparison = isInComparison(product.id);

  var handleAddToCart = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock) return;
    addToCart(product, 1);
    toast.success(product.name + ' added to cart!', {
      duration: 2000,
      position: 'bottom-right'
    });
  };

  var handleToggleWishlist = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.info('Removed from wishlist', {
        duration: 2000,
        position: 'bottom-right'
      });
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist!', {
        duration: 2000,
        position: 'bottom-right'
      });
    }
  };

  var handleQuickView = function(e) {
    e.preventDefault();
    e.stopPropagation();
    openQuickView(product);
  };

  var handleToggleComparison = function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (inComparison) {
      removeFromComparison(product.id);
      toast.info('Removed from comparison', {
        duration: 2000,
        position: 'bottom-right'
      });
    } else {
      addToComparison(product);
      toast.success('Added to comparison!', {
        duration: 2000,
        position: 'bottom-right'
      });
    }
  };

  var renderImageContainer = function() {
    return React.createElement(React.Fragment, null,
      React.createElement(ImageWithFallback, { 
        src: product.image, 
        alt: product.name, 
        className: 'wc-block-product-card__image funky-image-glow' 
      }),
      React.createElement('div', { className: 'wc-block-product-card__badge-container' },
        (isSale && !isOutOfStock) ? React.createElement('strong', { className: 'wp-badge wp-badge-sale' }, 'SALE') : null,
        isOutOfStock ? React.createElement('strong', { className: 'wp-badge wp-badge-out-of-stock' }, 'OUT OF STOCK') : null
      ),
      React.createElement('button', {
        onClick: handleToggleWishlist,
        className: 'wc-block-product-card__action-button wc-block-product-card__action-button--wishlist funky-spring-hover ' + (inWishlist ? 'wc-block-product-card__action-button--active' : ''),
        'aria-label': inWishlist ? 'Remove from wishlist' : 'Add to wishlist'
      },
        React.createElement(Heart, { 
          size: 18, 
          fill: inWishlist ? 'currentColor' : 'none',
          className: 'wc-block-product-card__icon'
        })
      ),
      React.createElement('button', {
        onClick: handleQuickView,
        className: 'wc-block-product-card__action-button wc-block-product-card__action-button--quickview funky-spring-hover',
        'aria-label': 'Quick view'
      },
        React.createElement(Eye, { size: 18, className: 'wc-block-product-card__icon' })
      )
    );
  };

  return React.createElement('div', { className: 'wc-block-product-card group funky-card-glow funky-spring-hover ' + (isOutOfStock ? 'wc-block-product-card--out-of-stock' : '') },
    React.createElement(Link, { to: '/product/' + product.id, className: 'wc-block-product-card__image-container' },
      renderImageContainer()
    ),
    React.createElement('div', { className: 'wc-block-product-card__content' },
      product.rating !== undefined ? React.createElement('div', { className: 'wp-star-rating' },
        React.createElement('div', { className: 'wc-block-product-card__rating-container' },
          [0, 1, 2, 3, 4].map(function(i) {
            var isFilled = i < Math.floor(product.rating || 0);
            return React.createElement(Star, { 
              key: i, 
              size: 14, 
              fill: isFilled ? 'currentColor' : 'none', 
              className: isFilled ? 'wp-star-rating__star--filled' : 'wp-star-rating__star--empty'
            });
          })
        ),
        React.createElement('small', { className: 'wp-star-rating__count' }, '(' + (product.reviewCount || 0) + ')')
      ) : null,
      React.createElement('h3', { className: 'wc-block-product-card__title funky-title' },
        React.createElement(Link, { to: '/product/' + product.id, className: 'wc-block-product-card__title-link' }, product.name)
      ),
      React.createElement('div', { className: 'wc-block-product-card__price-container' },
        (isSale && product.salePrice) ? React.createElement(React.Fragment, null,
          React.createElement('span', { className: 'wc-block-product-card__price wc-block-product-card__price--sale funky-text-pink' }, '£' + product.salePrice.toFixed(2)),
          React.createElement('small', { className: 'wc-block-product-card__price--original' }, '£' + product.price.toFixed(2))
        ) : React.createElement('span', { className: 'wc-block-product-card__price funky-text-cyan' }, '£' + product.price.toFixed(2))
      ),
      React.createElement(Button, { 
        fullWidth: true, 
        disabled: isOutOfStock,
        variant: isOutOfStock ? 'outline' : 'primary',
        className: (isOutOfStock ? 'wc-block-product-card__button--disabled' : '') + ' wp-glow funky-btn-neon',
        'aria-label': isOutOfStock ? 'Out of stock' : 'Add ' + product.name + ' to cart',
        onClick: handleAddToCart
      },
        React.createElement('span', { className: 'wc-block-product-card__button-content' },
          React.createElement(Scale, { size: 18 }),
          isOutOfStock ? 'Out of Stock' : 'Add to Cart'
        )
      )
    )
  );
});

ProductCard.displayName = 'ProductCard';