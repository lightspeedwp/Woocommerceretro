/**
 * CartFilled.tsx - Pattern
 * 
 * Full shopping cart display with item list, quantity controls, and order summary.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. No optional chaining
 * 5. Named functions
 * 6. ASCII only
 */

import React from 'react';
import { Bag as ShoppingBag } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as MutedSectionModule from './sections/MutedSection';
import * as ContentSectionModule from './sections/ContentSection';
import * as LayoutModule from '../parts/Layout';
import * as CartItemModule from '../blocks/cart/CartItem';
import * as CartTotalsModule from '../blocks/cart/CartTotals';

var Link = ReactRouterModule.Link;
var MutedSection = MutedSectionModule.MutedSection;
var ContentSection = ContentSectionModule.ContentSection;
var Layout = LayoutModule.Layout;
var CartItem = CartItemModule.CartItem;
var CartTotals = CartTotalsModule.CartTotals;

/*
 * CartFilledProps:
 *   items: CartItemType[]
 *   updateQuantity: (id: string, delta: number) => void
 *   removeItem: (id: string) => void
 */

export function CartFilled(props) {
  var items = props.items;
  var updateQuantity = props.updateQuantity;
  var removeItem = props.removeItem;

  var subtotal = 0;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    subtotal += item.price * item.quantity;
  }
  var tax = subtotal * 0.1;
  var total = subtotal + tax;

  var tableHeader = React.createElement('div', { key: 'table-header', className: "wp-cart-table-header" }, [
    React.createElement('span', { key: 'h-prod', className: "wp-cart-table-header__label" }, "Product"),
    React.createElement('span', { key: 'h-price', className: "wp-cart-table-header__label" }, "Price")
  ]);

  var itemsList = React.createElement('div', { key: 'items-list', className: "wp-cart-items-list" }, 
    items.map(function(item) {
      return React.createElement(CartItem, {
        key: item.id,
        item: item,
        updateQuantity: updateQuantity,
        removeItem: removeItem
      });
    })
  );

  var continueLink = React.createElement('div', { key: 'continue', className: "wp-cart-layout__continue" }, 
    React.createElement(Link, { to: "/shop", className: "wp-cart-layout__continue-link" }, [
      React.createElement(ShoppingBag, { key: 'icon', size: 16 }),
      " Continue Shopping"
    ])
  );

  var cartLayoutItems = React.createElement('div', { key: 'layout-items', className: "wp-cart-layout__items" }, [
    tableHeader,
    itemsList,
    continueLink
  ]);

  var cartLayoutSidebar = React.createElement('div', { key: 'layout-sidebar', className: "wp-cart-layout__sidebar" }, 
    React.createElement(CartTotals, { 
      subtotal: subtotal, 
      tax: tax, 
      total: total 
    })
  );

  var cartLayout = React.createElement('div', { className: "wp-cart-layout" }, [
    cartLayoutItems,
    cartLayoutSidebar
  ]);

  return React.createElement(Layout, null, [
    React.createElement(MutedSection, {
      key: 'header',
      className: "wp-cart-header",
      heading: "Shopping Cart",
      headingLevel: 1
    }),
    React.createElement(ContentSection, {
      key: 'content',
      content: cartLayout
    })
  ]);
}

CartFilled.displayName = 'CartFilled';