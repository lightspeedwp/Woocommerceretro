/**
 * ComparisonBar.tsx - Product Block
 * 
 * Floating sticky bar that shows products in comparison.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';
import { X } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';
var Link = ReactRouterModule.Link;
import * as ComparisonContextModule from '../../../contexts/ComparisonContext';
var useComparison = ComparisonContextModule.useComparison;
import * as CnModule from '../../../utils/cn';
var cn = CnModule.cn;

export function ComparisonBar() {
  var context = useComparison();
  var comparisonItems = context.comparisonItems;
  var removeFromComparison = context.removeFromComparison;
  var clearComparison = context.clearComparison;
  var comparisonCount = context.comparisonCount;
  
  if (comparisonCount === 0) {
    return null;
  }

  var items = comparisonItems.map(function(product) {
    var link = React.createElement(Link, {
      to: "/product/" + product.id,
      className: "wc-block-comparison-bar__link"
    }, React.createElement('img', {
      src: product.image,
      alt: product.name,
      className: "wc-block-comparison-bar__thumbnail-image"
    }));

    var removeBtn = React.createElement('button', {
      onClick: function() { removeFromComparison(product.id); },
      "aria-label": "Remove " + product.name + " from comparison",
      className: "wc-block-comparison-bar__thumbnail-remove"
    }, React.createElement(X, { size: 12 }));

    return React.createElement('div', {
      key: product.id,
      className: "wc-block-comparison-bar__thumbnail group"
    }, [link, removeBtn]);
  });

  var infoElement = React.createElement('div', { className: "wc-block-comparison-bar__info" },
    React.createElement('div', { className: "wc-block-comparison-bar__separator" }),
    React.createElement('div', { className: "wc-block-comparison-bar__count" },
      React.createElement('span', null, comparisonCount + " " + (comparisonCount === 1 ? 'Product' : 'Products'))
    )
  );

  var leftSide = React.createElement('div', { className: "wc-block-comparison-bar__items" },
    React.createElement('div', { className: "wc-block-comparison-bar__thumbnails" }, items),
    infoElement
  );

  var compareBtn = React.createElement(Link, {
    to: "/compare",
    className: "wc-block-compare-button wc-block-compare-button--primary wc-block-compare-button--md"
  }, React.createElement('span', null, 'Compare Products'));

  var rightSide = React.createElement('div', { className: "wc-block-comparison-bar__actions" },
    React.createElement('button', {
      onClick: clearComparison,
      "aria-label": "Clear all products from comparison",
      className: "wc-block-comparison-bar__clear"
    }, 'Clear All'),
    compareBtn
  );

  var content = React.createElement('div', { className: "wc-block-comparison-bar__content" }, [leftSide, rightSide]);
  var container = React.createElement('div', { className: "wc-block-comparison-bar__container" }, content);

  return React.createElement('div', {
    className: "wc-block-comparison-bar",
    role: "region",
    "aria-label": "Product comparison"
  }, container);
}