/**
 * OrderSummary Block Component
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. ASCII only
 * 5. Manual prop assignment
 */

import React from 'react';
import * as CartContextModule from '../../../contexts/CartContext';
import * as ReactRouterModule from 'react-router';
import * as CouponInputModule from '../checkout/CouponInput';
import * as TypographyModule from '../../common/Typography';
import * as ButtonModule from '../design/Buttons';
import * as ImageFallbackModule from '../../figma/ImageWithFallback';

var useCart = CartContextModule.useCart;
var Link = ReactRouterModule.Link;
var CouponInput = CouponInputModule.CouponInput;
var Typography = TypographyModule.Typography;
var Button = ButtonModule.Button;
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;

export function OrderSummary() {
  var cart = useCart();
  var items = cart.items;
  var getCartTotal = cart.getCartTotal;
  var getShippingCost = cart.getShippingCost;
  var getDiscount = cart.getDiscount;
  var getFinalTotal = cart.getFinalTotal;
  var appliedCoupon = cart.appliedCoupon;

  var subtotal = getCartTotal();
  var shipping = getShippingCost();
  var discount = getDiscount();
  var tax = subtotal * 0.1;
  var total = getFinalTotal();

  if (items.length === 0) {
    return React.createElement('div', { className: "wp-order-summary wp-order-summary--empty funky-order-summary" }, [
      React.createElement(Typography, { key: 'title', variant: "h3", className: "wp-order-summary__title" }, "Your cart is empty"),
      React.createElement(Button, { key: 'btn', to: "/shop", variant: "primary", fullWidth: true }, "Return to Shop")
    ]);
  }

  var itemsElements = items.map(function(item) {
    var itemKey = item.product.id + "-" + item.product.name;
    var price = item.product.salePrice || item.product.price;
    
    var imageWrapper = React.createElement('div', { key: 'imgWrap', className: "wp-order-summary__item-image-wrapper" }, [
      React.createElement('div', { key: 'imgBox', className: "wp-order-summary__item-image" }, [
        React.createElement(ImageWithFallback, { 
          key: 'img',
          src: item.product.image, 
          alt: item.product.name 
        })
      ]),
      React.createElement('span', { key: 'qty', className: "wp-order-summary__item-quantity funky-badge" }, item.quantity)
    ]);

    var details = React.createElement('div', { key: 'details', className: "wp-order-summary__item-details" }, [
      React.createElement('div', { key: 'header', className: "wp-order-summary__item-header" }, [
        React.createElement('span', { key: 'name', className: "wp-order-summary__item-name" }, item.product.name),
        React.createElement('span', { key: 'price', className: "wp-order-summary__item-price" }, "GBP " + price.toFixed(2))
      ]),
      item.product.category ? React.createElement('p', { key: 'cat', className: "wp-order-summary__item-meta" }, item.product.category) : null
    ]);

    return React.createElement('div', { key: itemKey, className: "wp-order-summary__item funky-summary-item" }, [
      imageWrapper,
      details
    ]);
  });

  var totalsRows = [
    React.createElement('div', { key: 'subtotal', className: "wp-order-summary__row" }, [
      React.createElement('span', { key: 'l', className: "wp-order-summary__label" }, "Subtotal"),
      React.createElement('span', { key: 'v', className: "wp-order-summary__value" }, "GBP " + subtotal.toFixed(2))
    ])
  ];

  if (discount > 0) {
    totalsRows.push(React.createElement('div', { key: 'discount', className: "wp-order-summary__row wp-order-summary__row--discount" }, [
      React.createElement('span', { key: 'l', className: "wp-order-summary__label" }, "Discount " + (appliedCoupon ? "(" + appliedCoupon.code + ")" : "")),
      React.createElement('span', { key: 'v', className: "wp-order-summary__value" }, "-GBP " + discount.toFixed(2))
    ]));
  }

  totalsRows.push(React.createElement('div', { key: 'shipping', className: "wp-order-summary__row" }, [
    React.createElement('span', { key: 'l', className: "wp-order-summary__label" }, "Shipping"),
    React.createElement('span', { key: 'v', className: "wp-order-summary__value" }, shipping === 0 ? 'Free' : "GBP " + shipping.toFixed(2))
  ]));

  totalsRows.push(React.createElement('div', { key: 'tax', className: "wp-order-summary__row" }, [
    React.createElement('span', { key: 'l', className: "wp-order-summary__label" }, "Estimated taxes"),
    React.createElement('span', { key: 'v', className: "wp-order-summary__value" }, "GBP " + tax.toFixed(2))
  ]));

  totalsRows.push(React.createElement('div', { key: 'divider', className: "wp-order-summary__divider funky-divider" }));

  totalsRows.push(React.createElement('div', { key: 'total', className: "wp-order-summary__row wp-order-summary__row--total funky-total-row" }, [
    React.createElement('span', { key: 'l', className: "wp-order-summary__label" }, "Total"),
    React.createElement('span', { key: 'v', className: "wp-order-summary__value wp-order-summary__value--large funky-price" }, "GBP " + total.toFixed(2))
  ]));

  return React.createElement('div', { className: "wp-order-summary funky-order-summary" }, [
    React.createElement('div', { key: 'header', className: "wp-order-summary__header" }, [
      React.createElement(Typography, { key: 'title', variant: "h3", className: "wp-order-summary__title funky-title" }, "Order summary"),
      React.createElement(Link, { key: 'edit', to: "/cart", className: "wp-order-summary__edit-link funky-link" }, "Edit cart")
    ]),
    React.createElement('div', { key: 'items', className: "wp-order-summary__items" }, itemsElements),
    React.createElement('div', { key: 'totals', className: "wp-order-summary__totals funky-totals" }, totalsRows),
    React.createElement('div', { key: 'coupon', className: "wp-order-summary__coupon" }, [
      React.createElement(CouponInput, { key: 'input' })
    ])
  ]);
}

OrderSummary.displayName = 'OrderSummary';