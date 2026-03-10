import React from "react";
import * as DrawerModule from "../blocks/layout/Drawer";
import * as ButtonsModule from "../blocks/design/Buttons";
import * as TypographyModule from "../common/Typography";
import { Bag as ShoppingBag, X, Minus, Plus } from '@phosphor-icons/react';
import * as ReactRouterModule from "react-router";
import * as ImageFallbackModule from "../figma/ImageWithFallback";
import * as CartContextModule from "../../contexts/CartContext";

var useState = React.useState;
var Drawer = DrawerModule.Drawer;
var DrawerContent = DrawerModule.DrawerContent;
var DrawerHeader = DrawerModule.DrawerHeader;
var DrawerTitle = DrawerModule.DrawerTitle;
var DrawerDescription = DrawerModule.DrawerDescription;
var DrawerClose = DrawerModule.DrawerClose;
var DrawerTrigger = DrawerModule.DrawerTrigger;
var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;
var Link = ReactRouterModule.Link;
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;
var useCart = CartContextModule.useCart;

// Safe icon fallbacks
var IconShoppingBag = ShoppingBag || (function() { return React.createElement('span', { 'aria-hidden': 'true' }, '🛍️'); });
var IconX = X || (function() { return React.createElement('span', { 'aria-hidden': 'true' }, '✕'); });
var IconMinus = Minus || (function() { return React.createElement('span', { 'aria-hidden': 'true' }, '-'); });
var IconPlus = Plus || (function() { return React.createElement('span', { 'aria-hidden': 'true' }, '+'); });

/**
 * MiniCart Component (Global Template Part) — Funky Redesign (Phase 2)
 */
export function MiniCart() {
  var cartContext = useCart();
  var _so = useState(false);
  var isOpen = _so[0];
  var setIsOpen = _so[1];

  if (!cartContext) return null;

  var items = cartContext.items;
  var updateQuantity = cartContext.updateQuantity;
  var removeFromCart = cartContext.removeFromCart;
  var getCartTotal = cartContext.getCartTotal;
  var getCartCount = cartContext.getCartCount;
  
  var total = getCartTotal();
  var itemCount = getCartCount();

  var handleSetIsOpenFalse = function() {
    setIsOpen(false);
  };

  var renderProductLink = function(item) {
    return React.createElement(Link, { 
      to: '/product/' + item.product.id, 
      onClick: handleSetIsOpenFalse 
    }, item.product.name);
  };

  return React.createElement(Drawer, { open: isOpen, onOpenChange: setIsOpen },
    React.createElement(DrawerTrigger, { asChild: true },
      React.createElement('button', {
        className: 'woocommerce-mini-cart__trigger funky-spring-hover',
        'aria-label': 'Cart'
      },
        React.createElement(IconShoppingBag, { size: 24 }),
        itemCount > 0 ? React.createElement('strong', { className: 'woocommerce-mini-cart__badge woocommerce-mini-cart__badge--funky' },
          React.createElement('small', null, itemCount)
        ) : null
      )
    ),
    React.createElement(DrawerContent, {
      side: 'right',
      className: 'woocommerce-mini-cart woocommerce-mini-cart--funky'
    },
      React.createElement(DrawerHeader, { className: 'woocommerce-mini-cart__header woocommerce-mini-cart__header--funky ' + (items.length > 0 ? 'woocommerce-mini-cart__header--has-items' : 'woocommerce-mini-cart__header--empty') },
        React.createElement(DrawerTitle, { className: 'woocommerce-mini-cart__title ' + (items.length === 0 ? 'sr-only' : '') },
          items.length > 0 ? 'Cart (' + itemCount + ')' : 'Cart'
        ),
        React.createElement(DrawerClose, { asChild: true },
          React.createElement('button', { className: 'woocommerce-mini-cart__close', 'aria-label': 'Close cart' },
            React.createElement(IconX, { size: 24, 'aria-hidden': 'true' })
          )
        ),
        React.createElement(DrawerDescription, { className: 'sr-only' }, 'Review your items.')
      ),

      React.createElement('div', { className: 'woocommerce-mini-cart__content' },
        items.length === 0 ? React.createElement('div', { className: 'woocommerce-mini-cart__empty' },
          React.createElement(Typography, { variant: 'body', className: 'woocommerce-mini-cart__empty-message' }, 'Your cart is currently empty'),
          React.createElement(Button, {
            onClick: handleSetIsOpenFalse,
            className: 'woocommerce-mini-cart__empty-cta funky-spring-hover'
          }, 'Start shopping')
        ) : items.map(function(item) {
          var price = item.product.salePrice || item.product.price;
          
          return React.createElement('div', { key: item.product.id, className: 'woocommerce-mini-cart-item' },
            React.createElement('div', { className: 'woocommerce-mini-cart-item__image woocommerce-mini-cart-item__image--funky' },
              React.createElement(ImageWithFallback, {
                src: item.product.image,
                alt: item.product.name,
                className: 'woocommerce-mini-cart-item__img'
              })
            ),
            React.createElement('div', { className: 'woocommerce-mini-cart-item__details' },
              React.createElement('div', null,
                React.createElement('div', { className: 'woocommerce-mini-cart-item__header' },
                  React.createElement('h4', { className: 'woocommerce-mini-cart-item__name' },
                    renderProductLink(item)
                  ),
                  React.createElement('span', { className: 'woocommerce-mini-cart-item__price' }, '£' + price.toFixed(2))
                ),
                item.product.brand ? React.createElement('small', { className: 'woocommerce-mini-cart-item__brand' }, item.product.brand) : null
              ),
              React.createElement('div', { className: 'woocommerce-mini-cart-item__footer' },
                React.createElement('div', { className: 'woocommerce-quantity-selector' },
                  React.createElement('button', {
                    onClick: function() { updateQuantity(item.product.id, item.quantity - 1); },
                    'aria-label': 'Decrease quantity of ' + item.product.name,
                    className: 'woocommerce-quantity-selector__button'
                  }, React.createElement(IconMinus, { size: 12 })),
                  React.createElement('span', { className: 'woocommerce-quantity-selector__value' },
                    React.createElement('small', null, item.quantity)
                  ),
                  React.createElement('button', {
                    onClick: function() { updateQuantity(item.product.id, item.quantity + 1); },
                    'aria-label': 'Increase quantity of ' + item.product.name,
                    className: 'woocommerce-quantity-selector__button'
                  }, React.createElement(IconPlus, { size: 12 }))
                ),
                React.createElement('button', {
                  onClick: function() { removeFromCart(item.product.id); },
                  'aria-label': 'Remove ' + item.product.name + ' from cart',
                  className: 'woocommerce-mini-cart-item__remove funky-spring-hover'
                }, React.createElement('small', null, 'Remove'))
              )
            )
          );
        })
      ),

      items.length > 0 ? React.createElement('div', { className: 'woocommerce-mini-cart__footer woocommerce-mini-cart__footer--funky' },
        React.createElement('div', { className: 'woocommerce-mini-cart__totals' },
          React.createElement('span', { className: 'woocommerce-mini-cart__subtotal-label' }, 'Subtotal'),
          React.createElement('span', { className: 'woocommerce-mini-cart__subtotal-amount woocommerce-mini-cart__subtotal-amount--funky' }, '£' + total.toFixed(2))
        ),
        React.createElement('p', { className: 'woocommerce-mini-cart__notice' }, 'Shipping and taxes calculated at checkout.'),
        React.createElement('div', { className: 'woocommerce-mini-cart__actions' },
          React.createElement(Button, { fullWidth: true, variant: 'outline', size: 'lg', to: '/cart', onClick: handleSetIsOpenFalse, className: 'funky-spring-hover' }, 'View cart'),
          React.createElement(Button, { fullWidth: true, variant: 'primary', size: 'lg', to: '/checkout', onClick: handleSetIsOpenFalse, className: 'funky-spring-hover' }, 'Checkout')
        )
      ) : null
    )
  );
}