import React from 'react';

/* ProductMetaProps: { sku: string, categories?: string[], tags?: string[] } */

/**
 * ProductMeta Component
 * 
 * Optimized for Figma Make parser:
 * 1. Standard function declaration
 * 2. No arrow functions
 * 3. No destructuring in parameters
 * 4. React.createElement for map results
 */
export function ProductMeta(props) {
  var sku = props.sku;
  var categories = props.categories;
  var tags = props.tags;

  var skuRow = React.createElement('div', { key: 'sku-row', className: "wc-product-meta__row" }, [
    React.createElement('span', { key: 'label', className: "wc-product-meta__label" }, "SKU:"),
    React.createElement('span', { key: 'value', className: "wc-product-meta__value" }, sku)
  ]);

  var categoryRow = null;
  if (categories && categories.length > 0) {
    var categoryLinks = categories.map(function(cat, i) {
      var link = React.createElement('span', { key: 'link', className: "wc-product-meta__link" }, cat);
      var separator = (i < categories.length - 1) ? ", " : null;
      return React.createElement(React.Fragment, { key: cat }, [link, separator]);
    });

    categoryRow = React.createElement('div', { key: 'cat-row', className: "wc-product-meta__row" }, [
      React.createElement('span', { key: 'label', className: "wc-product-meta__label" }, "Category:"),
      React.createElement('span', { key: 'value', className: "wc-product-meta__value" }, categoryLinks)
    ]);
  }

  var tagRow = null;
  if (tags && tags.length > 0) {
    var tagLinks = tags.map(function(tag, i) {
      var link = React.createElement('span', { key: 'link', className: "wc-product-meta__link" }, tag);
      var separator = (i < tags.length - 1) ? ", " : null;
      return React.createElement(React.Fragment, { key: tag }, [link, separator]);
    });

    tagRow = React.createElement('div', { key: 'tag-row', className: "wc-product-meta__row" }, [
      React.createElement('span', { key: 'label', className: "wc-product-meta__label" }, "Tags:"),
      React.createElement('span', { key: 'value', className: "wc-product-meta__value" }, tagLinks)
    ]);
  }

  return React.createElement('div', { className: "wc-product-meta" }, [
    skuRow,
    categoryRow,
    tagRow
  ]);
}