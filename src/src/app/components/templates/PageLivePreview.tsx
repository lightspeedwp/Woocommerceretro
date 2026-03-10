import React from 'react';
import * as ContainerModule from '../common/Container';
import { Play, Code, Eye, Gear, Copy, Check, ArrowsClockwise, CaretDown, CaretRight } from '@phosphor-icons/react';

var Container = ContainerModule.Container;

import * as ButtonsModule from '../blocks/design/Buttons';
import * as BadgeModule from '../blocks/ui/badge';

var Button = ButtonsModule.Button;
var Badge = BadgeModule.Badge;

// Import documented blocks for live preview
import * as PageAlertModule from '../blocks/feedback/PageAlert';
import * as ProductSearchModule from '../blocks/search/ProductSearch';
import * as ProductSkeletonModule from '../blocks/product/ProductSkeleton';
import * as PaginationModule from '../blocks/archive/Pagination';
import * as CheckoutStepModule from '../blocks/checkout/CheckoutStep';
import * as ProductAddToCartModule from '../blocks/single-product/ProductAddToCart';
import * as ProductPriceModule from '../blocks/single-product/ProductPrice';
import * as ProductRatingModule from '../blocks/single-product/ProductRating';
import * as CartItemModule from '../blocks/cart/CartItem';
import * as CartTotalsModule from '../blocks/cart/CartTotals';
import * as ThemeToggleModule from '../blocks/theme/ThemeToggle';

var PageAlert = PageAlertModule.PageAlert;
var ProductSearch = ProductSearchModule.ProductSearch;
var ProductSkeleton = ProductSkeletonModule.ProductSkeleton;
var Pagination = PaginationModule.Pagination;
var CheckoutStep = CheckoutStepModule.CheckoutStep;
var ProductAddToCart = ProductAddToCartModule.ProductAddToCart;
var ProductPrice = ProductPriceModule.ProductPrice;
var ProductRating = ProductRatingModule.ProductRating;
var CartLineItem = CartItemModule.CartItem;
var CartTotals = CartTotalsModule.CartTotals;
var ThemeToggle = ThemeToggleModule.ThemeToggle;

/**
 * PageLivePreview Template — Funky Redesign (Phase 10, Dev Tool)
 * 
 * Interactive component showcase with live prop editing and real-time preview.
 * 
 * @template
 */

export default function PageLivePreview() {
  var compState = React.useState('button');
  var selectedComponent = compState[0];
  var setSelectedComponent = compState[1];
  
  var viewState = React.useState('both');
  var viewMode = viewState[0];
  var setViewMode = viewState[1];

  var components = [
    { id: 'button', name: 'Button', category: 'UI' },
    { id: 'badge', name: 'Badge', category: 'UI' },
    { id: 'alert', name: 'PageAlert', category: 'Block' },
    { id: 'search', name: 'ProductSearch', category: 'Block' },
    { id: 'pagination', name: 'Pagination', category: 'Block' },
  ];

  return React.createElement(React.Fragment, null,
    React.createElement(Container, { className: "wp-live-preview" },
      /* Page Header */
      React.createElement('div', { className: "wp-live-preview__header" },
        React.createElement('div', { className: "wp-live-preview__badge" },
          React.createElement(Play, { size: 16, weight: 'duotone' }),
          React.createElement('span', { className: "wp-live-preview__badge-text" }, "Live Preview")
        ),
        React.createElement('h1', null, "Component Playground"),
        React.createElement('p', { className: "wp-live-preview__description" },
          "Interactive component preview with real-time prop editing and code generation."
        )
      ),

      React.createElement('div', { className: "wp-live-preview__layout" },
        /* Component List Sidebar */
        React.createElement('div', { className: "wp-live-preview__sidebar" },
          React.createElement('div', { className: "wp-live-preview__sidebar-panel funky-glass-panel" },
            React.createElement('h3', { className: "wp-live-preview__sidebar-title" }, "Components"),
            React.createElement('div', { className: "wp-live-preview__component-list" },
              components.map(function(comp) {
                return React.createElement('button', {
                  key: comp.id,
                  onClick: function() { setSelectedComponent(comp.id); },
                  className: 'wp-live-preview__component-item' + (selectedComponent === comp.id ? ' wp-live-preview__component-item--active' : '')
                },
                  React.createElement('div', { className: "wp-live-preview__component-name" }, comp.name),
                  React.createElement('div', { className: "wp-live-preview__component-category" }, comp.category)
                );
              })
            )
          )
        ),

        /* Preview Area */
        React.createElement('div', { className: "wp-live-preview__main" },
          /* Toolbar */
          React.createElement('div', { className: "wp-live-preview__toolbar funky-glass-panel" },
            React.createElement('div', { className: "wp-live-preview__toolbar-group" },
              React.createElement('button', {
                onClick: function() { setViewMode('preview'); },
                className: 'wp-live-preview__toolbar-btn' + (viewMode === 'preview' ? ' wp-live-preview__toolbar-btn--active' : ''),
                title: "Show Preview Only"
              }, React.createElement(Eye, { size: 16, weight: 'duotone' }), "Preview"),
              React.createElement('button', {
                onClick: function() { setViewMode('code'); },
                className: 'wp-live-preview__toolbar-btn' + (viewMode === 'code' ? ' wp-live-preview__toolbar-btn--active' : ''),
                title: "Show Code Only"
              }, React.createElement(Code, { size: 16, weight: 'duotone' }), "Code"),
              React.createElement('button', {
                onClick: function() { setViewMode('both'); },
                className: 'wp-live-preview__toolbar-btn' + (viewMode === 'both' ? ' wp-live-preview__toolbar-btn--active' : ''),
                title: "Show Both"
              }, React.createElement(Gear, { size: 16, weight: 'duotone' }), "Split")
            ),
            React.createElement('div', { className: "wp-live-preview__toolbar-group" },
              React.createElement('button', {
                className: "wp-live-preview__toolbar-btn"
              }, React.createElement(ArrowsClockwise, { size: 16, weight: 'duotone' }), "Reset")
            )
          ),

          /* Workspace */
          React.createElement('div', { className: "wp-live-preview__workspace" },
            (viewMode === 'preview' || viewMode === 'both') && React.createElement('div', { className: "wp-live-preview__canvas funky-glass-panel" },
              React.createElement('div', { className: "wp-live-preview__canvas-inner" },
                selectedComponent === 'button' && React.createElement(Button, null, "Click Me"),
                selectedComponent === 'badge' && React.createElement(Badge, null, "New Label"),
                selectedComponent === 'alert' && React.createElement(PageAlert, { title: "Heads up!", message: "This is a preview alert." }),
                selectedComponent === 'search' && React.createElement(ProductSearch, null),
                selectedComponent === 'pagination' && React.createElement(Pagination, { currentPage: 1, totalPages: 5, onPageChange: function(){} })
              )
            ),
            (viewMode === 'code' || viewMode === 'both') && React.createElement('div', { className: "wp-live-preview__code-panel funky-glass-panel" },
              React.createElement('div', { className: "wp-live-preview__code-header" },
                React.createElement('span', { className: "wp-live-preview__code-title" }, "React Code"),
                React.createElement('button', { className: "wp-live-preview__code-copy" },
                  React.createElement(Copy, { size: 14, weight: 'duotone' })
                )
              ),
              React.createElement('pre', { className: "wp-live-preview__code-block" },
                React.createElement('code', null, "<" + components.find(function(c){return c.id === selectedComponent}).name + " />")
              )
            )
          )
        )
      )
    )
  );
}