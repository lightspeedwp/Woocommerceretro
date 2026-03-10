/**
 * ProductComparison.tsx - Pattern
 * 
 * Side-by-side product comparison table with detailed attributes.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. No optional chaining (?.)
 * 5. Named functions
 * 6. ASCII only
 */

import React from 'react';
import { X, ShoppingCart, Heart, Eye, Check, Minus, WarningCircle } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
import * as ComparisonContextModule from '../../contexts/ComparisonContext';
import * as CartContextModule from '../../contexts/CartContext';
import * as WishlistContextModule from '../../contexts/WishlistContext';
import * as QuickViewContextModule from '../../contexts/QuickViewContext';
import * as ToastModule from 'sonner@2.0.3';

var Link = ReactRouterModule.Link;
var useComparison = ComparisonContextModule.useComparison;
var useCart = CartContextModule.useCart;
var useWishlist = WishlistContextModule.useWishlist;
var useQuickView = QuickViewContextModule.useQuickView;
var toast = ToastModule.toast;

export function ProductComparison() {
  var comparison = useComparison();
  var comparisonItems = comparison.comparisonItems;
  var removeFromComparison = comparison.removeFromComparison;

  var cart = useCart();
  var addItem = cart.addItem;

  var wishlist = useWishlist();
  var addToWishlist = wishlist.addToWishlist;
  var isInWishlist = wishlist.isInWishlist;
  var removeFromWishlist = wishlist.removeFromWishlist;

  var quickView = useQuickView();
  var openQuickView = quickView.openQuickView;

  var allFeatures = [];
  for (var i = 0; i < comparisonItems.length; i++) {
    var product = comparisonItems[i];
    if (product.features) {
      for (var j = 0; j < product.features.length; j++) {
        var feature = product.features[j];
        if (allFeatures.indexOf(feature) === -1) {
          allFeatures.push(feature);
        }
      }
    }
  }

  var allSpecKeys = [];
  for (var i = 0; i < comparisonItems.length; i++) {
    var product = comparisonItems[i];
    if (product.specifications) {
      var keys = Object.keys(product.specifications);
      for (var j = 0; j < keys.length; j++) {
        var key = keys[j];
        if (allSpecKeys.indexOf(key) === -1) {
          allSpecKeys.push(key);
        }
      }
    }
  }

  function handleRemoveProduct(productId) {
    removeFromComparison(productId);
  }

  function handleAddToCart(product) {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1
    });
    toast.success(product.name + ' added to cart!');
  }

  function handleAddToWishlist(product) {
    addToWishlist(product);
  }

  function handleQuickView(product) {
    openQuickView(product);
  }

  if (comparisonItems.length === 0) {
    return React.createElement('div', { className: "wc-block-product-comparison__empty" }, "No products to compare.");
  }

  var gridStyle = { 
    gridTemplateColumns: "repeat(" + comparisonItems.length + ", 1fr)" 
  };

  var headerRow = React.createElement('div', { 
    className: "wc-block-product-comparison__grid", 
    style: gridStyle 
  }, comparisonItems.map(function(product) {
    return React.createElement('div', { key: product.id, className: "wc-block-product-comparison__cell" }, [
      React.createElement('button', {
        onClick: function() { removeFromComparison(product.id); },
        "aria-label": "Remove " + product.name + " from comparison",
        className: "wc-block-product-comparison__remove-button"
      }, React.createElement(X, { size: 16 })),
      React.createElement(Link, {
        to: "/product/" + product.id,
        className: "wc-block-product-comparison__image"
      }, React.createElement('img', {
        src: product.image,
        alt: product.name,
        className: "wc-block-product-comparison__img"
      })),
      React.createElement(Link, {
        to: "/product/" + product.id,
        className: "wc-block-product-comparison__title"
      }, product.name),
      product.brand ? React.createElement('p', { className: "wc-block-product-comparison__brand" }, product.brand) : null
    ]);
  }));

  var priceRow = React.createElement('div', { 
    className: "wc-block-product-comparison__grid", 
    style: gridStyle 
  }, comparisonItems.map(function(product) {
    var currentPrice = product.salePrice ? product.salePrice.toFixed(2) : product.price.toFixed(2);
    var regularPrice = product.price.toFixed(2);
    
    return React.createElement('div', { key: product.id, className: "wc-block-product-comparison__cell wc-block-product-comparison__cell--bordered" }, [
      React.createElement('div', { className: "wc-block-product-comparison__label" }, "Price"),
      React.createElement('div', { className: "wc-block-product-comparison__price-row" }, 
        product.salePrice ? [
          React.createElement('span', { className: "wc-block-product-comparison__price-current wc-block-product-comparison__price-sale" }, "$" + currentPrice),
          React.createElement('span', { className: "wc-block-product-comparison__price-regular" }, "$" + regularPrice)
        ] : React.createElement('span', { className: "wc-block-product-comparison__price-current" }, "$" + currentPrice)
      )
    ]);
  }));

  var featureSections = [];
  if (allFeatures.length > 0) {
    featureSections.push(React.createElement('div', { key: "features-header", className: "wc-block-product-comparison__cell-header" }, 
      React.createElement('h3', { className: "wc-block-product-comparison__section-title" }, "Features")
    ));

    for (var i = 0; i < allFeatures.length; i++) {
      var feature = allFeatures[i];
      featureSections.push(React.createElement('div', { 
        key: "feature-" + i,
        className: "wc-block-product-comparison__grid", 
        style: gridStyle 
      }, comparisonItems.map(function(product) {
        var hasFeature = product.features && product.features.indexOf(feature) !== -1;
        return React.createElement('div', { key: product.id, className: "wc-block-product-comparison__cell wc-block-product-comparison__cell--bordered" }, 
          React.createElement('div', { className: "wc-block-product-comparison__feature-row" }, [
            hasFeature 
              ? React.createElement(Check, { size: 16, weight: "bold", className: "wc-block-product-comparison__icon--yes" })
              : React.createElement(Minus, { size: 16, weight: "bold", className: "wc-block-product-comparison__icon--no" }),
            React.createElement('span', { className: hasFeature ? "wc-block-product-comparison__feature-text" : "wc-block-product-comparison__feature-text--missing" }, feature)
          ])
        );
      })));
    }
  }

  var specSections = [];
  if (allSpecKeys.length > 0) {
    specSections.push(React.createElement('div', { key: "specs-header", className: "wc-block-product-comparison__cell-header" }, 
      React.createElement('h3', { className: "wc-block-product-comparison__section-title" }, "Specifications")
    ));

    for (var i = 0; i < allSpecKeys.length; i++) {
      var specKey = allSpecKeys[i];
      specSections.push(React.createElement('div', { 
        key: "spec-" + i,
        className: "wc-block-product-comparison__grid", 
        style: gridStyle 
      }, comparisonItems.map(function(product) {
        var specValue = product.specifications ? product.specifications[specKey] : null;
        return React.createElement('div', { key: product.id, className: "wc-block-product-comparison__cell wc-block-product-comparison__cell--bordered" }, [
          React.createElement('div', { className: "wc-block-product-comparison__spec-key" }, specKey),
          React.createElement('div', { className: "wc-block-product-comparison__spec-value" }, 
            specValue || React.createElement('span', { className: "wc-block-product-comparison__spec-empty" }, "-")
          )
        ]);
      })));
    }
  }

  var actionRow = React.createElement('div', { 
    className: "wc-block-product-comparison__grid", 
    style: gridStyle 
  }, comparisonItems.map(function(product) {
    var isWishlisted = isInWishlist(product.id);
    return React.createElement('div', { key: product.id, className: "wc-block-product-comparison__cell wc-block-product-comparison__cell--bordered" }, 
      React.createElement('div', { className: "wc-block-product-comparison__actions" }, [
        React.createElement('button', {
          onClick: function() { handleAddToCart(product); },
          disabled: !product.inStock,
          className: "wc-block-components-product-button wc-block-product-comparison__cart-btn funky-spring-hover"
        }, [
          React.createElement(ShoppingCart, { size: 18, weight: "bold" }),
          React.createElement('span', null, "Add to Cart")
        ]),
        React.createElement('div', { className: "wc-block-product-comparison__action-pair" }, [
          React.createElement('button', {
            onClick: function() { handleAddToWishlist(product); },
            "aria-label": "Add to wishlist",
            className: "wc-block-product-comparison__icon-btn funky-spring-hover" + (isWishlisted ? " wc-block-product-comparison__icon-btn--wishlisted" : "")
          }, React.createElement(Heart, { 
            size: 16, 
            weight: isWishlisted ? "fill" : "duotone",
            className: isWishlisted ? "wc-block-product-comparison__heart--active" : "" 
          })),
          React.createElement('button', {
            onClick: function() { handleQuickView(product); },
            "aria-label": "Quick view",
            className: "wc-block-product-comparison__icon-btn funky-spring-hover"
          }, React.createElement(Eye, { size: 16, weight: "duotone" }))
        ])
      ])
    );
  }));

  var mainContent = React.createElement('div', { className: "wc-block-product-comparison__table" }, [
    headerRow,
    priceRow,
    featureSections,
    specSections,
    actionRow
  ]);

  return React.createElement('div', { className: "wc-block-product-comparison" },
    React.createElement('div', { className: "wc-block-product-comparison__container" },
      mainContent
    )
  );
}

ProductComparison.displayName = 'ProductComparison';