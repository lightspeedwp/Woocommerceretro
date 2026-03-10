import React from 'react';

var useState = React.useState;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as ProductCardModule from '../blocks/product/ProductCard';
import * as ShopFilterSidebarModule from '../patterns/ShopFilterSidebar';
import * as NewsletterModule from '../patterns/NewsletterCTA';
import * as ProductsDataModule from '../../data/products';
import { SquaresFour, List, Faders, X } from '@phosphor-icons/react';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var ProductCard = ProductCardModule.ProductCard;
var ShopFilterSidebar = ShopFilterSidebarModule.ShopFilterSidebar;
var NewsletterCTA = NewsletterModule.NewsletterCTA;
var products = ProductsDataModule.products;

/**
 * ShopWithSidebar Template — Funky Redesign (Phase 4)
 * 
 * Product archive with left sidebar filters — classic eCommerce layout.
 * Persistent filters on desktop, drawer on mobile.
 */
export function ShopWithSidebar() {
  var filtersState = useState({
    categories: [],
    priceRange: [0, 1000],
    ratings: [],
    brands: [],
    inStock: false
  });
  var filters = filtersState[0];
  var setFilters = filtersState[1];
  
  var viewState = useState('grid');
  var viewMode = viewState[0];
  var setViewMode = viewState[1];
  var sortState = useState('featured');
  var sortBy = sortState[0];
  var setSortBy = sortState[1];
  var mobileState = useState(false);
  var isMobileFiltersOpen = mobileState[0];
  var setIsMobileFiltersOpen = mobileState[1];

  var filteredProducts = products.filter(function(product) {
    if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
      return false;
    }
    if (filters.inStock && !product.inStock) {
      return false;
    }
    return true;
  });

  var sortedProducts = filteredProducts.concat([]).sort(function(a, b) {
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    } else if (sortBy === 'price-desc') {
      return b.price - a.price;
    } else if (sortBy === 'name-asc') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'name-desc') {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });

  return React.createElement(Layout, null,
    React.createElement(Container, null,
      React.createElement('div', { className: "shop-sidebar-page" },
        /* Page Header */
        React.createElement('div', { className: "shop-sidebar-page__header" },
          React.createElement(Typography, { variant: "h1" }, "Shop all products"),
          React.createElement('p', { className: "shop-sidebar-page__subtitle" },
            "Browse our complete collection of high-quality products"
          )
        ),

        /* Mobile Filter Toggle */
        React.createElement('div', { className: "shop-sidebar-page__mobile-toggle" },
          React.createElement('button', {
            onClick: function() { setIsMobileFiltersOpen(true); },
            className: "shop-sidebar-page__filter-btn"
          },
            React.createElement(Faders, { size: 20, weight: 'duotone' }),
            React.createElement('span', null, React.createElement('strong', null, "Filters & Sort"))
          )
        ),

        React.createElement('div', { className: "shop-sidebar-page__layout" },
          /* Left Sidebar - Filters (Desktop) */
          React.createElement('div', { className: "shop-sidebar-page__sidebar" },
            React.createElement('div', { className: "shop-sidebar-page__sidebar-sticky" },
              React.createElement(ShopFilterSidebar, { onFilterChange: setFilters })
            )
          ),

          /* Mobile Filter Drawer */
          isMobileFiltersOpen ? React.createElement(React.Fragment, null,
            React.createElement('div', {
              className: "shop-sidebar-page__overlay",
              onClick: function() { setIsMobileFiltersOpen(false); }
            }),
            React.createElement('div', { className: "shop-sidebar-page__drawer" },
              React.createElement('div', { className: "shop-sidebar-page__drawer-inner" },
                React.createElement('div', { className: "shop-sidebar-page__drawer-header" },
                  React.createElement('h3', null, "Filters"),
                  React.createElement('button', {
                    onClick: function() { setIsMobileFiltersOpen(false); },
                    className: "shop-sidebar-page__drawer-close",
                    'aria-label': "Close filters"
                  },
                    React.createElement(X, { size: 24, weight: 'bold' })
                  )
                ),
                React.createElement(ShopFilterSidebar, { onFilterChange: setFilters })
              )
            )
          ) : null,

          /* Main Content Area */
          React.createElement('div', { className: "shop-sidebar-page__content" },
            /* Toolbar */
            React.createElement('div', { className: "shop-sidebar-page__toolbar" },
              React.createElement('div', { className: "shop-sidebar-page__result-count" },
                React.createElement('small', null,
                  React.createElement('strong', null, sortedProducts.length), " products"
                )
              ),

              React.createElement('div', { className: "shop-sidebar-page__toolbar-actions" },
                React.createElement('div', { className: "shop-sidebar-page__sort" },
                  React.createElement('label', { htmlFor: "sort", className: "shop-sidebar-page__sort-label" },
                    React.createElement('small', null, "Sort:")
                  ),
                  React.createElement('select', {
                    id: "sort",
                    value: sortBy,
                    onChange: function(e) { setSortBy(e.target.value); },
                    className: "shop-sidebar-page__sort-select"
                  },
                    React.createElement('option', { value: "featured" }, "Featured"),
                    React.createElement('option', { value: "price-asc" }, "Price: Low to High"),
                    React.createElement('option', { value: "price-desc" }, "Price: High to Low"),
                    React.createElement('option', { value: "name-asc" }, "Name: A-Z"),
                    React.createElement('option', { value: "name-desc" }, "Name: Z-A")
                  )
                ),

                React.createElement('div', { className: "shop-sidebar-page__view-toggle" },
                  React.createElement('button', {
                    onClick: function() { setViewMode('grid'); },
                    className: "shop-sidebar-page__view-btn " + (viewMode === 'grid' ? 'shop-sidebar-page__view-btn--active' : ''),
                    'aria-label': "Grid view"
                  },
                    React.createElement(SquaresFour, { size: 18, weight: 'duotone' })
                  ),
                  React.createElement('button', {
                    onClick: function() { setViewMode('list'); },
                    className: "shop-sidebar-page__view-btn " + (viewMode === 'list' ? 'shop-sidebar-page__view-btn--active' : ''),
                    'aria-label': "List view"
                  },
                    React.createElement(List, { size: 18, weight: 'duotone' })
                  )
                )
              )
            ),

            /* Product Grid/List */
            sortedProducts.length === 0 ? React.createElement('div', { className: "shop-sidebar-page__empty" },
              React.createElement('div', { className: "shop-sidebar-page__empty-icon" },
                React.createElement(Faders, { size: 40, weight: 'duotone' })
              ),
              React.createElement(Typography, { variant: "h3" }, "No products found"),
              React.createElement('p', { className: "shop-sidebar-page__empty-text" },
                "Try adjusting your filters to find what you're looking for"
              ),
              React.createElement('button', {
                onClick: function() { 
                  setFilters({
                    categories: [],
                    priceRange: [0, 1000],
                    ratings: [],
                    brands: [],
                    inStock: false
                  });
                },
                className: "shop-sidebar-page__clear-btn"
              }, "Clear All Filters")
            ) : viewMode === 'grid' ? React.createElement('div', { className: "shop-sidebar-page__grid" },
              sortedProducts.map(function(product) {
                return React.createElement(ProductCard, { key: product.id, product: product });
              })
            ) : React.createElement('div', { className: "shop-sidebar-page__list" },
              sortedProducts.map(function(product) {
                return React.createElement('div', { key: product.id, className: "shop-sidebar-page__list-item" },
                  React.createElement('div', { className: "shop-sidebar-page__list-image" },
                    React.createElement('img', {
                      src: product.image,
                      alt: product.name,
                      className: "shop-sidebar-page__list-img"
                    })
                  ),
                  React.createElement('div', { className: "shop-sidebar-page__list-info" },
                    React.createElement('h3', { className: "shop-sidebar-page__list-title" }, product.name),
                    React.createElement('p', { className: "shop-sidebar-page__list-desc" },
                      React.createElement('small', null, product.description)
                    ),
                    React.createElement('div', { className: "shop-sidebar-page__list-footer" },
                      React.createElement('div', { className: "shop-sidebar-page__list-pricing" },
                        React.createElement('span', { className: "shop-sidebar-page__list-price" },
                          "$" + product.price.toFixed(2)
                        ),
                        product.salePrice && product.salePrice < product.price ? React.createElement('span', { className: "shop-sidebar-page__list-original" },
                          React.createElement('small', null, "$" + product.salePrice.toFixed(2))
                        ) : null
                      ),
                      React.createElement('button', { className: "shop-sidebar-page__list-cart-btn" },
                        React.createElement('small', null, React.createElement('strong', null, "Add to Cart"))
                      )
                    )
                  )
                );
              })
            ),

            /* Pagination */
            sortedProducts.length > 0 ? React.createElement('div', { className: "shop-sidebar-page__pagination" },
              React.createElement('button', { className: "shop-sidebar-page__page-btn", disabled: true }, "Previous"),
              React.createElement('button', { className: "shop-sidebar-page__page-btn shop-sidebar-page__page-btn--active" }, "1"),
              React.createElement('button', { className: "shop-sidebar-page__page-btn" }, "2"),
              React.createElement('button', { className: "shop-sidebar-page__page-btn" }, "3"),
              React.createElement('button', { className: "shop-sidebar-page__page-btn" }, "Next")
            ) : null
          )
        ),
        
        /* Newsletter Banner */
        React.createElement('div', { className: "shop-sidebar-page__newsletter", style: { marginTop: 'var(--wp--preset--spacing--80)' } },
          React.createElement(NewsletterCTA, { variant: "banner" })
        )
      )
    )
  );
}