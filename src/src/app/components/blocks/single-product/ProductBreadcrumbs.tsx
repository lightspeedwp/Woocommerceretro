import React from 'react';
import * as ReactRouterModule from 'react-router';
import { CaretRight as ChevronRight } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

/* BreadcrumbItem: { label: string, href?: string } */
/* ProductBreadcrumbsProps: { items: BreadcrumbItem[] } */

/**
 * ProductBreadcrumbs Component
 */
export function ProductBreadcrumbs(props) {
  var items = props.items;

  var renderItem = function(item, index) {
    var key = index;
    var content = item.href ? React.createElement(Link, { to: item.href, className: "wc-product-breadcrumbs__link" }, item.label) : React.createElement('span', { className: "wc-product-breadcrumbs__current" }, item.label);

    return React.createElement(React.Fragment, { key: key },
      React.createElement(ChevronRight, { size: 14, className: "wc-product-breadcrumbs__separator" }),
      content
    );
  };

  return React.createElement('nav', { className: "wc-product-breadcrumbs" },
    React.createElement(Link, { to: "/", className: "wc-product-breadcrumbs__link" }, "Home"),
    items.map(renderItem)
  );
}

ProductBreadcrumbs.displayName = 'ProductBreadcrumbs';