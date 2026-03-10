import React from 'react';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as ButtonsModule from '../blocks/design/Buttons';
import { X, ShoppingCart, Heart } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as ImageFallbackModule from '../figma/ImageWithFallback';
import * as WishlistContextModule from '../../contexts/WishlistContext';
import * as CartContextModule from '../../contexts/CartContext';
import * as SonnerModule from 'sonner@2.0.3';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var Button = ButtonsModule.Button;
var Link = ReactRouterModule.Link;
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;
var useWishlist = WishlistContextModule.useWishlist;
var useCart = CartContextModule.useCart;
var toast = SonnerModule.toast;

/**
 * PageWishlist Template — Funky Redesign (Phase 10)
 * 
 * Wishlist page template displaying saved products with actions.
 * 
 * @template
 * @returns {JSX.Element} Complete wishlist page
 */

export function PageWishlist() {
  var wishlistCtx = useWishlist();
  var items = wishlistCtx.items;
  var removeFromWishlist = wishlistCtx.removeFromWishlist;
  var clearWishlist = wishlistCtx.clearWishlist;
  var getWishlistCount = wishlistCtx.getWishlistCount;
  var cartCtx = useCart();
  var addToCart = cartCtx.addToCart;

  function handleAddToCart(product) {
    addToCart(product, 1);
    toast.success(product.name + ' added to cart!');
  }

  function handleRemove(productId) {
    removeFromWishlist(productId);
    toast.info('Removed from wishlist');
  }

  function handleClearAll() {
    if (confirm('Are you sure you want to clear your entire wishlist?')) {
      clearWishlist();
      toast.success('Wishlist cleared');
    }
  }

  function handleMoveAllToCart() {
    items.forEach(function(product) {
      if (product.inStock !== false) {
        addToCart(product, 1);
      }
    });
    clearWishlist();
    toast.success(items.length + ' items moved to cart!');
  }

  if (items.length === 0) {
    return React.createElement(Layout, null,
      React.createElement(Container, { variant: "content" },
        React.createElement('div', { className: "wishlist-empty" },
          React.createElement('div', { className: "wishlist-empty__icon-wrapper" },
            React.createElement(Heart, { size: 48, weight: 'duotone', className: "wishlist-empty__icon" })
          ),

          React.createElement(Typography, { variant: "h2" }, "Your wishlist is empty"),
          React.createElement('p', { className: "wishlist-empty__text" },
            "Save items you love by clicking the heart icon on any product"
          ),

          React.createElement(Button, { variant: "primary", to: "/shop" },
            "Start Shopping"
          )
        )
      )
    );
  }

  return React.createElement(Layout, null,
    React.createElement(Container, { variant: "content" },
      React.createElement('div', { className: "wishlist-page" },
        /* Header */
        React.createElement('div', { className: "wishlist-page__header" },
          React.createElement('div', null,
            React.createElement(Typography, { variant: "h1" }, "Wishlist"),
            React.createElement('p', { className: "wishlist-page__count" },
              getWishlistCount(), " ", getWishlistCount() === 1 ? 'item' : 'items'
            )
          ),
          
          React.createElement('div', { className: "wishlist-page__actions" },
            React.createElement(Button, { 
              variant: "outline", 
              onClick: handleClearAll
            }, "Clear All"),
            React.createElement(Button, { 
              variant: "primary", 
              onClick: handleMoveAllToCart
            },
              React.createElement(ShoppingCart, { size: 18, weight: 'bold' }),
              "Move All to Cart"
            )
          )
        ),

        /* Wishlist Grid */
        React.createElement('div', { className: "wishlist-grid" },
          items.map(function(product) {
            var isSale = !!product.salePrice;
            var isOutOfStock = product.inStock === false;
            var price = product.salePrice || product.price;

            return React.createElement('div', { key: product.id, className: "wishlist-card funky-spring-hover" },
              /* Remove Button */
              React.createElement('button', {
                onClick: function() { handleRemove(product.id); },
                className: "wishlist-card__remove",
                'aria-label': "Remove from wishlist"
              },
                React.createElement(X, { size: 16, weight: 'bold' })
              ),

              /* Product Image */
              React.createElement(Link, { to: '/product/' + product.id, className: "wishlist-card__image-link" },
                React.createElement(ImageWithFallback, {
                  src: product.image, 
                  alt: product.name, 
                  className: 'wishlist-card__image' + (isOutOfStock ? ' wishlist-card__image--oos' : '')
                }),
                
                /* Badges */
                React.createElement('div', { className: "wishlist-card__badges" },
                  isSale && !isOutOfStock ? React.createElement('strong', { className: "wishlist-card__badge wishlist-card__badge--sale" }, "SALE") : null,
                  isOutOfStock ? React.createElement('strong', { className: "wishlist-card__badge wishlist-card__badge--oos" }, "OUT OF STOCK") : null
                )
              ),

              /* Product Info */
              React.createElement('div', { className: "wishlist-card__info" },
                /* Brand */
                product.brand ? React.createElement('small', { className: "wishlist-card__brand" }, product.brand) : null,

                /* Title */
                React.createElement('h3', { className: "wishlist-card__title" },
                  React.createElement(Link, { to: '/product/' + product.id, className: "wishlist-card__title-link" },
                    product.name
                  )
                ),

                /* Price */
                React.createElement('div', { className: "wishlist-card__price" },
                  isSale ? React.createElement('div', { className: "wishlist-card__price-row" },
                    React.createElement('span', { className: "wishlist-card__price--sale" }, "£" + price.toFixed(2)),
                    React.createElement('small', { className: "wishlist-card__price--original" }, "£" + product.price.toFixed(2))
                  ) : React.createElement('span', { className: "wishlist-card__price--current" }, "£" + price.toFixed(2))
                ),

                /* Add to Cart Button */
                React.createElement(Button, {
                  fullWidth: true,
                  variant: isOutOfStock ? 'outline' : 'primary',
                  disabled: isOutOfStock,
                  onClick: function() { handleAddToCart(product); }
                },
                  React.createElement(ShoppingCart, { size: 16, weight: 'bold' }),
                  isOutOfStock ? 'Out of Stock' : 'Add to Cart'
                )
              )
            );
          })
        )
      )
    )
  );
}