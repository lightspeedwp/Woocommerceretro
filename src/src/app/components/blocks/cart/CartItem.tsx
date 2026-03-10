import React from 'react';
import { Trash as Trash2, Heart } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;

import * as CartContextModule from '../../../contexts/CartContext';
var useCart = CartContextModule.useCart;
import * as ImageFallbackModule from '../../figma/ImageWithFallback';
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;
import * as QuantitySelectorModule from '../forms/QuantitySelector';
var QuantitySelector = QuantitySelectorModule.QuantitySelector;

/**
 * CartItem Component
 * 
 * Optimized for Figma Make parser:
 * - Uses var instead of const/let
 * - Uses function declarations
 * - No TypeScript-specific syntax
 */
export function CartItem(props) {
  var item = props.item;
  var onUpdateQuantity = props.onUpdateQuantity;
  var onRemove = props.onRemove;
  var onMoveToWishlist = props.onMoveToWishlist;
  var className = props.className || '';

  var handleQuantityChange = function(newQuantity) {
    onUpdateQuantity(item.id, newQuantity);
  };

  var handleRemove = function() {
    onRemove(item.id);
  };

  var handleMoveToWishlist = function() {
    if (onMoveToWishlist) {
      onMoveToWishlist(item.id);
    }
  };

  var itemTotal = item.price * item.quantity;

  return React.createElement('div', { className: "woocommerce-cart-item funky-cart-item " + className },
    React.createElement(Link, { 
      to: "/product/" + item.slug,
      className: "woocommerce-cart-item__image-link"
    },
      React.createElement(ImageWithFallback, {
        src: item.image,
        alt: item.name,
        className: "woocommerce-cart-item__image funky-cart-image",
        loading: "lazy"
      })
    ),
    React.createElement('div', { className: "woocommerce-cart-item__details" },
      React.createElement('div', { className: "woocommerce-cart-item__header" },
        React.createElement(Link, { 
          to: "/product/" + item.slug,
          className: "woocommerce-cart-item__name funky-cart-name"
        }, item.name),
        React.createElement('button', {
          onClick: handleRemove,
          className: "woocommerce-cart-item__remove funky-remove-btn",
          'aria-label': "Remove " + item.name
        }, React.createElement(Trash2, { className: "woocommerce-cart-item__remove-icon" }))
      ),
      item.variant ? React.createElement('p', { className: "woocommerce-cart-item__variant" },
        item.variant
      ) : null,
      React.createElement('div', { className: "woocommerce-cart-item__meta" },
        React.createElement('span', { className: "woocommerce-cart-item__price" }, 
          "$" + item.price.toFixed(2)
        ),
        item.inStock 
          ? React.createElement('span', { className: "woocommerce-cart-item__stock woocommerce-cart-item__stock--in" }, 
              "In Stock"
            )
          : React.createElement('span', { className: "woocommerce-cart-item__stock woocommerce-cart-item__stock--out" }, 
              "Out of Stock"
            )
      )
    ),
    React.createElement('div', { className: "woocommerce-cart-item__actions" },
      React.createElement(QuantitySelector, {
        value: item.quantity,
        onChange: handleQuantityChange,
        min: 1,
        max: item.maxQuantity || 99,
        disabled: !item.inStock,
        className: "funky-quantity"
      }),
      React.createElement('div', { className: "woocommerce-cart-item__total" },
        React.createElement('span', { className: "woocommerce-cart-item__total-label" }, "Total:"),
        React.createElement('span', { className: "woocommerce-cart-item__total-price funky-total-price" }, 
          "$" + itemTotal.toFixed(2)
        )
      ),
      onMoveToWishlist ? React.createElement('button', {
        onClick: handleMoveToWishlist,
        className: "woocommerce-cart-item__wishlist funky-wishlist-btn",
        'aria-label': "Move to wishlist"
      },
        React.createElement(Heart, { className: "woocommerce-cart-item__wishlist-icon" }),
        "Save for later"
      ) : null
    )
  );
}

CartItem.displayName = 'CartItem';