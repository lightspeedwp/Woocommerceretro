import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Faders } from '@phosphor-icons/react';

var useState = React.useState;
var useEffect = React.useEffect;
var useParams = ReactRouterModule.useParams;
var useLocation = ReactRouterModule.useLocation;
var useSearchParams = ReactRouterModule.useSearchParams;
import * as LayoutModule from '../parts/Layout';
import * as FunkyHeroModule from '../parts/FunkyHero';
import * as ProductGridModule from '../patterns/ProductGrid';
import * as FilterSidebarModule from '../blocks/archive/FilterSidebar';
import * as ContainerModule from '../common/Container';
import * as ResultsCountModule from '../patterns/ResultsCount';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as StoreNoticesModule from '../parts/StoreNotices';
import * as ProductSkeletonModule from '../blocks/product/ProductSkeleton';
import * as EmptyResultsModule from '../blocks/archive/EmptyResults';
import * as PaginationModule from '../blocks/archive/Pagination';
import * as ArchiveCTAModule from '../patterns/ArchiveCTA';
import * as NewsletterModule from '../patterns/NewsletterCTA';
import * as CopyFilterLinkModule from '../blocks/archive/CopyFilterLink';
import * as ImageWithFallbackModule from '../figma/ImageWithFallback';
import * as ReducedMotionModule from '../../hooks/usePrefersReducedMotion';
import * as HeroDataModule from '../../data/heroData';
import * as ArchiveCTADataModule from '../../data/archiveCTA';
import * as ProductsDataModule from '../../data/products';

var Layout = LayoutModule.Layout;
var FunkyHero = FunkyHeroModule.FunkyHero;
var ProductGrid = ProductGridModule.ProductGrid;
var FilterSidebar = FilterSidebarModule.FilterSidebar;
var Container = ContainerModule.Container;
var ResultsCount = ResultsCountModule.ResultsCount;
var Button = ButtonsModule.Button;
var StoreNotices = StoreNoticesModule.StoreNotices;
var ProductSkeleton = ProductSkeletonModule.ProductSkeleton;
var EmptyResults = EmptyResultsModule.EmptyResults;
var Pagination = PaginationModule.Pagination;
var ArchiveCTA = ArchiveCTAModule.ArchiveCTA;
var NewsletterCTA = NewsletterModule.NewsletterCTA;
var CopyFilterLink = CopyFilterLinkModule.CopyFilterLink;
var ImageWithFallback = ImageWithFallbackModule.ImageWithFallback;
var usePrefersReducedMotion = ReducedMotionModule.usePrefersReducedMotion;
var shopHero = HeroDataModule.shopHero;
var productArchiveCTA = ArchiveCTADataModule.productArchiveCTA;
var categoryArchiveCTA = ArchiveCTADataModule.categoryArchiveCTA;
var PRODUCTS = ProductsDataModule.PRODUCTS;

/**
 * ArchiveProduct Template — Funky Redesign (Phase 4)
 *
 * WooCommerce product archive/shop page with funky treatments.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. Manual prop assignment
 * 4. No spread operators
 */
export function ArchiveProduct() {
  var params = useParams();
  var categorySlug = params.categorySlug;
  var tagSlug = params.tagSlug;

  var searchParamsTuple = useSearchParams();
  var searchParams = searchParamsTuple[0];
  var setSearchParams = searchParamsTuple[1];

  var isLoadingState = useState(true);
  var isLoading = isLoadingState[0];
  var setIsLoading = isLoadingState[1];
  
  var prefersReduced = usePrefersReducedMotion();

  // Initialize filters from URL params
  function getInitialFilters() {
    var categoriesStr = searchParams.get('categories');
    var urlCategories = categoriesStr ? categoriesStr.split(',').filter(Boolean) : [];
    
    var colorsStr = searchParams.get('colors');
    var urlColors = colorsStr ? colorsStr.split(',').filter(Boolean) : [];
    
    var sizesStr = searchParams.get('sizes');
    var urlSizes = sizesStr ? sizesStr.split(',').filter(Boolean) : [];
    
    var urlMinPrice = parseInt(searchParams.get('minPrice') || '0');
    var urlMaxPrice = parseInt(searchParams.get('maxPrice') || '500');
    var urlRating = searchParams.get('rating') ? parseInt(searchParams.get('rating')!) : null;
    var urlInStock = searchParams.get('inStock') === 'true';

    return {
      priceRange: [urlMinPrice, urlMaxPrice],
      categories: urlCategories,
      colors: urlColors,
      sizes: urlSizes,
      rating: urlRating,
      inStock: urlInStock
    };
  }

  var filtersState = useState(getInitialFilters);
  var filters = filtersState[0];
  var setFilters = filtersState[1];
  
  var isMobileFiltersOpenState = useState(false);
  var isMobileFiltersOpen = isMobileFiltersOpenState[0];
  var setIsMobileFiltersOpen = isMobileFiltersOpenState[1];
  
  var currentPage = parseInt(searchParams.get('page') || '1');

  function handleFilterChange(newFilters) {
    setFilters(newFilters);

    var params = new URLSearchParams(searchParams);

    if (newFilters.categories.length > 0) {
      params.set('categories', newFilters.categories.join(','));
    } else {
      params.delete('categories');
    }

    if (newFilters.colors.length > 0) {
      params.set('colors', newFilters.colors.join(','));
    } else {
      params.delete('colors');
    }

    if (newFilters.sizes.length > 0) {
      params.set('sizes', newFilters.sizes.join(','));
    } else {
      params.delete('sizes');
    }

    if (newFilters.priceRange[0] !== 0 || newFilters.priceRange[1] !== 500) {
      params.set('minPrice', newFilters.priceRange[0].toString());
      params.set('maxPrice', newFilters.priceRange[1].toString());
    } else {
      params.delete('minPrice');
      params.delete('maxPrice');
    }

    if (newFilters.rating !== null) {
      params.set('rating', newFilters.rating.toString());
    } else {
      params.delete('rating');
    }

    if (newFilters.inStock) {
      params.set('inStock', 'true');
    } else {
      params.delete('inStock');
    }

    params.delete('page');
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handlePageChange(page) {
    var params = new URLSearchParams(searchParams);

    if (page > 1) {
      params.set('page', page.toString());
    } else {
      params.delete('page');
    }

    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleClearFilters() {
    var clearedFilters = {
      priceRange: [0, 500],
      categories: [],
      colors: [],
      sizes: [],
      rating: null,
      inStock: false
    };

    setFilters(clearedFilters);
    setSearchParams({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(function() {
    setIsLoading(true);
    var timer = setTimeout(function() { setIsLoading(false); }, 800);
    return function() { clearTimeout(timer); };
  }, [categorySlug, tagSlug, filters, currentPage]);

  // Page context
  var pageTitle = 'Shop All';
  var pageDescription = 'Browse our complete collection of high-quality products.';
  var productCount = PRODUCTS.length;

  if (categorySlug) {
    var words = categorySlug.split('-');
    var title = '';
    for (var i = 0; i < words.length; i++) {
      title += words[i].charAt(0).toUpperCase() + words[i].slice(1) + (i < words.length - 1 ? ' ' : '');
    }
    pageTitle = title;
    pageDescription = 'Discover our range of ' + title.toLowerCase() + '.';
  } else if (tagSlug) {
    var words = tagSlug.split('-');
    var title = '';
    for (var i = 0; i < words.length; i++) {
      title += words[i].charAt(0).toUpperCase() + words[i].slice(1) + (i < words.length - 1 ? ' ' : '');
    }
    pageTitle = 'Tag: ' + title;
    pageDescription = 'Products tagged with "' + title + '".';
  }

  // Filter logic (mock)
  var filteredProducts = PRODUCTS.filter(function(product) {
    if (filters.inStock && !product.inStock) return false;
    return true;
  });

  var isEmpty = filteredProducts.length === 0;
  var indexOfLastProduct = currentPage * 12;
  var indexOfFirstProduct = indexOfLastProduct - 12;

  var skeletonArray = [];
  for (var i = 0; i < 6; i++) {
    skeletonArray.push(i);
  }

  return React.createElement('div', { className: "archive-product" },
    React.createElement(StoreNotices, null),
    React.createElement(Layout, null,
      /* ── HERO (shared FunkyHero) ── */
      React.createElement(FunkyHero, { config: shopHero }),

      /* ── Gradient divider ────────────────────────────────── */
      React.createElement('hr', { className: "archive-product__divider", "aria-hidden": "true" }),

      /* ── MAIN CONTENT AREA ──────────────────────────────── */
      React.createElement(Container, { className: "archive-product__main" },
        React.createElement('div', { className: "archive-product__layout" },
          /* Mobile Filter Toggle */
          React.createElement('div', { className: "archive-product__mobile-filter" },
            React.createElement('button', {
              type: "button",
              onClick: function() { setIsMobileFiltersOpen(true); },
              className: "archive-product__mobile-filter-btn"
            },
              React.createElement(Faders, { size: 20, weight: 'duotone' }),
              "Filter & Sort"
            )
          ),

          /* Filters Sidebar */
          React.createElement('div', { className: "archive-product__sidebar" },
            React.createElement(FilterSidebar, {
              filters: filters,
              onFilterChange: handleFilterChange,
              onClearFilters: handleClearFilters,
              isOpenMobile: isMobileFiltersOpen,
              onCloseMobile: function() { setIsMobileFiltersOpen(false); }
            })
          ),

          /* Main Content */
          React.createElement('div', { className: "archive-product__content" },
            !isLoading && !isEmpty && React.createElement('div', { className: "archive-product__results-bar" },
              React.createElement(ResultsCount, {
                start: indexOfFirstProduct + 1,
                end: Math.min(indexOfLastProduct, filteredProducts.length),
                total: filteredProducts.length,
                itemType: "product"
              }),
              React.createElement(CopyFilterLink, null)
            ),

            isLoading ? React.createElement('div', { className: "archive-product__grid-loading" },
              skeletonArray.map(function(i) {
                return React.createElement(ProductSkeleton, { key: "skel-" + i });
              })
            ) : (isEmpty ? React.createElement(EmptyResults, {
              onClearFilters: handleClearFilters
            }) : React.createElement(React.Fragment, null,
              React.createElement(ProductGrid, {
                products: filteredProducts
              }),
              React.createElement(Pagination, {
                currentPage: currentPage,
                totalPages: 3,
                onPageChange: handlePageChange
              })
            ))
          )
        )
      ),

      /* ── Gradient divider ────────────────────────────────── */
      React.createElement('hr', { className: "archive-product__divider", "aria-hidden": "true" }),

      /* ── Newsletter CTA ──────────────────────────────────── */
      React.createElement(NewsletterCTA, { variant: 'banner' }),

      /* ── Archive CTA Section ────────────────────────────── */
      React.createElement(ArchiveCTA, {
        content: categorySlug ? categoryArchiveCTA : productArchiveCTA,
        variant: "gradient"
      })
    )
  );
}

export default ArchiveProduct;