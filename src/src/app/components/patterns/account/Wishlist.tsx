import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Heart, Trash as Trash2, ShoppingCart, ShareNetwork as Share2 } from '@phosphor-icons/react';

var useState = React.useState;
var Link = ReactRouterModule.Link;

import * as CartContextModule from '../../../contexts/CartContext';
import * as ImageWithFallbackModule from '../../figma/ImageWithFallback';
import * as WishlistDataModule from '../../../data/wishlist';
import * as ClipboardModule from '../../../utils/clipboard';

var useCart = CartContextModule.useCart;
var ImageWithFallback = ImageWithFallbackModule.ImageWithFallback;
var mockWishlistItems = WishlistDataModule.mockWishlistItems;
var copyToClipboard = ClipboardModule.copyToClipboard;

/**
 * Wishlist Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No template literals
 * 4. No destructuring in parameters
 */
export function WishlistPattern() {
  var wishlistState = useState(mockWishlistItems);
  var wishlistItems = wishlistState[0];
  var setWishlistItems = wishlistState[1];
  
  var cartContext = useCart();
  var addToCart = cartContext.addToCart;

  function handleRemoveItem(productId) {
    setWishlistItems(function(items) {
      return items.filter(function(item) { return item.id !== productId; });
    });
  }

  function handleAddToCart(product) {
    addToCart(product, 1);
  }

  function handleShareWishlist() {
    copyToClipboard(window.location.href);
  }

  function handleClearWishlist() {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      setWishlistItems([]);
    }
  }

  if (wishlistItems.length === 0) {
    return React.createElement('div', { className: "account-wish__empty" }, [
      React.createElement(Heart, { key: 'i', size: 64, className: "account-wish__empty-icon" }),
      React.createElement('h2', { key: 't', className: "account-wish__empty-title" }, "Your wishlist is empty"),
      React.createElement('p', { key: 'd', className: "account-wish__empty-desc" }, "Save your favorite items here so you can easily find them later."),
      React.createElement(Link, { key: 'c', to: "/shop", className: "account-wish__empty-cta" }, "Start shopping")
    ]);
  }

  var items = wishlistItems.map(function(item) {
    var removeBtn = React.createElement('button', {
      key: 'rem',
      onClick: function() { handleRemoveItem(item.id); },
      className: "account-wish__card-remove",
      'aria-label': "Remove from wishlist"
    }, React.createElement(Trash2, { size: 14 }));

    var oosOverlay = !item.inStock ? React.createElement('div', { key: 'oos', className: "account-wish__oos-overlay" }, 
      React.createElement('span', { className: "account-wish__oos-badge" }, "Out of stock")
    ) : null;

    var image = React.createElement(Link, { key: 'img-link', to: "/product/" + item.slug }, 
      React.createElement('div', { className: "account-wish__card-image" }, [
        React.createElement(ImageWithFallback, { key: 'img', src: item.image, alt: item.name }),
        oosOverlay
      ])
    );

    var prices = item.salePrice ? React.createElement('div', { key: 'p-wrap', className: "account-wish__card-prices" }, [
      React.createElement('span', { key: 'old', className: "account-wish__card-price--old" }, "$" + item.price.toFixed(2)),
      React.createElement('span', { key: 'sale', className: "account-wish__card-price account-wish__card-price--sale" }, "$" + item.salePrice.toFixed(2))
    ]) : React.createElement('span', { key: 'p', className: "account-wish__card-price" }, "$" + item.price.toFixed(2));

    var atcBtn = React.createElement('button', {
      key: 'atc',
      onClick: function() { if (item.inStock) handleAddToCart(item); },
      disabled: !item.inStock,
      className: "account-wish__card-atc"
    }, [
      React.createElement(ShoppingCart, { key: 'i', size: 16, 'aria-hidden': "true" }),
      (item.inStock ? 'Add to cart' : 'Out of stock')
    ]);

    var body = React.createElement('div', { key: 'body', className: "account-wish__card-body" }, [
      React.createElement('p', { key: 'cat', className: "account-wish__card-category" }, item.category),
      React.createElement(Link, { key: 'name', to: "/product/" + item.slug, className: "account-wish__card-name" }, item.name),
      prices,
      atcBtn
    ]);

    return React.createElement('div', { key: item.id, className: "account-wish__card" }, [
      removeBtn,
      image,
      body
    ]);
  });

  var header = React.createElement('div', { key: 'header', className: "account-wish__header" }, [
    React.createElement('div', { key: 'title-wrap' }, [
      React.createElement('h2', { key: 't', className: "account-wish__title" }, "My wishlist"),
      React.createElement('p', { key: 'c', className: "account-wish__count" }, 
        wishlistItems.length + " " + (wishlistItems.length === 1 ? 'item' : 'items') + " saved"
      )
    ]),
    React.createElement('div', { key: 'actions', className: "account-wish__actions" }, [
      React.createElement('button', { key: 'share', onClick: handleShareWishlist, className: "account-wish__action-btn" }, [
        React.createElement(Share2, { key: 'i', size: 16, 'aria-hidden': "true" }),
        React.createElement('span', { key: 's' }, "Share")
      ]),
      React.createElement('button', { key: 'clear', onClick: handleClearWishlist, className: "account-wish__action-btn account-wish__action-btn--danger" }, [
        React.createElement(Trash2, { key: 'i', size: 16, 'aria-hidden': "true" }),
        React.createElement('span', { key: 's' }, "Clear all")
      ])
    ])
  ]);

  var grid = React.createElement('div', { key: 'grid', className: "account-wish__grid" }, items);

  var footer = React.createElement('div', { key: 'footer', className: "account-wish__footer" }, 
    React.createElement(Link, { to: "/shop", className: "account-wish__footer-link" }, "Continue shopping ->")
  );

  return React.createElement('div', { className: "account-wish" }, [
    header,
    grid,
    footer
  ]);
}

export default WishlistPattern;