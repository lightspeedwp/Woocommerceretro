import React from 'react';

// SkeletonProps structure
// - width?: string
// - height?: string
// - variant?: 'text' | 'circular' | 'rectangular' | 'rounded'
// - lines?: number
// - className?: string
// - noShimmer?: boolean

/**
 * Skeleton Component
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function Skeleton(props) {
  var width = props.width;
  var height = props.height;
  var variant = props.variant || 'text';
  var lines = props.lines || 1;
  var className = props.className || '';
  var noShimmer = props.noShimmer !== undefined ? props.noShimmer : false;

  var baseClass = 'wp-skeleton';
  var shimmerClass = noShimmer ? '' : 'wp-skeleton--shimmer';
  
  var variantMap = {
    text: 'wp-skeleton--text',
    circular: 'wp-skeleton--circular',
    rectangular: 'wp-skeleton--rectangular',
    rounded: 'wp-skeleton--rounded',
  };

  var skeletonClass = [
    baseClass,
    shimmerClass,
    variantMap[variant] || 'wp-skeleton--text',
    className,
    'funky-skeleton'
  ].filter(function(c) { return !!c; }).join(' ');

  if (variant === 'text' && lines > 1) {
    var renderLines = function() {
      var result = [];
      for (var i = 0; i < lines; i++) {
        var lineWidth = width || (i === lines - 1 ? '60%' : '100%');
        result.push(React.createElement('div', {
          key: i,
          className: skeletonClass,
          style: { width: lineWidth, height: height }
        }));
      }
      return result;
    };

    return React.createElement('div', { 
      className: "wp-skeleton__lines", 
      'aria-busy': "true", 
      'aria-label': "Loading content" 
    }, renderLines());
  }

  return React.createElement('div', {
    className: skeletonClass,
    style: { width: width, height: height },
    'aria-busy': "true",
    'aria-label': "Loading"
  });
}

Skeleton.displayName = 'Skeleton';

/**
 * ProductCardSkeleton Component
 */
export function ProductCardSkeleton(props) {
  var className = props.className || '';
  
  return React.createElement('div', { className: 'wp-skeleton-card ' + className + ' funky-skeleton-card' },
    React.createElement(Skeleton, { variant: "rectangular", height: "200px" }),
    React.createElement('div', { className: "wp-skeleton-card__body" },
      React.createElement(Skeleton, { variant: "text", width: "80%" }),
      React.createElement(Skeleton, { variant: "text", width: "50%", className: "wp-skeleton--h-sm" }),
      React.createElement(Skeleton, { variant: "text", width: "40%", className: "wp-skeleton--h-md" }),
      React.createElement(Skeleton, { variant: "rounded", height: "40px", className: "wp-skeleton--mt funky-btn-skeleton" })
    )
  );
}

ProductCardSkeleton.displayName = 'ProductCardSkeleton';

/**
 * BlogPostSkeleton Component
 */
export function BlogPostSkeleton(props) {
  var className = props.className || '';
  
  return React.createElement('div', { className: 'wp-skeleton-card ' + className + ' funky-skeleton-card' },
    React.createElement(Skeleton, { variant: "rectangular", height: "200px" }),
    React.createElement('div', { className: "wp-skeleton-card__body wp-skeleton-card__body--lg" },
      React.createElement(Skeleton, { variant: "rounded", width: "80px", height: "24px" }),
      React.createElement(Skeleton, { variant: "text", lines: 2 }),
      React.createElement(Skeleton, { variant: "text", lines: 3, className: "wp-skeleton--h-sm" }),
      React.createElement('div', { className: "wp-skeleton-card__meta" },
        React.createElement(Skeleton, { variant: "text", width: "100px", className: "wp-skeleton--h-sm" }),
        React.createElement(Skeleton, { variant: "text", width: "100px", className: "wp-skeleton--h-sm" })
      )
    )
  );
}

BlogPostSkeleton.displayName = 'BlogPostSkeleton';

/**
 * ListItemSkeleton Component
 */
export function ListItemSkeleton(props) {
  var className = props.className || '';
  
  return React.createElement('div', { className: 'wp-skeleton-list-item ' + className },
    React.createElement('div', { className: "wp-skeleton-list-item__row" },
      React.createElement(Skeleton, { variant: "circular", width: "48px", height: "48px" }),
      React.createElement('div', { className: "wp-skeleton-list-item__content" },
        React.createElement(Skeleton, { variant: "text", width: "200px" }),
        React.createElement(Skeleton, { variant: "text", width: "150px", className: "wp-skeleton--h-sm" })
      ),
      React.createElement(Skeleton, { variant: "rounded", width: "80px", height: "32px" })
    )
  );
}

ListItemSkeleton.displayName = 'ListItemSkeleton';

/**
 * TableSkeleton Component
 */
export function TableSkeleton(props) {
  var rows = props.rows || 5;
  var columns = props.columns || 4;
  var className = props.className || '';

  var renderHeader = function() {
    var result = [];
    for (var i = 0; i < columns; i++) {
      result.push(React.createElement(Skeleton, { key: 'header-' + i, variant: "text", width: "80%" }));
    }
    return result;
  };

  var renderRows = function() {
    var result = [];
    for (var i = 0; i < rows; i++) {
      var cells = [];
      for (var j = 0; j < columns; j++) {
        cells.push(React.createElement(Skeleton, { key: 'cell-' + i + '-' + j, variant: "text", width: "90%" }));
      }
      result.push(React.createElement('div', { key: 'row-' + i, className: "wp-skeleton-table__row" }, cells));
    }
    return result;
  };

  return React.createElement('div', { className: 'wp-skeleton-table ' + className },
    React.createElement('div', { className: "wp-skeleton-table__header" }, renderHeader()),
    renderRows()
  );
}

TableSkeleton.displayName = 'TableSkeleton';

/**
 * PageSkeleton Component
 */
export function PageSkeleton(props) {
  var className = props.className || '';
  
  return React.createElement('div', { className: 'wp-skeleton-page ' + className },
    React.createElement('div', { className: "wp-skeleton-page__section" },
      React.createElement(Skeleton, { variant: "text", width: "60%", className: "wp-skeleton--h-lg" }),
      React.createElement(Skeleton, { variant: "text", width: "40%", className: "wp-skeleton--h-base" })
    ),
    React.createElement('div', { className: "wp-skeleton-page__section" },
      React.createElement(Skeleton, { variant: "text", lines: 8 })
    ),
    React.createElement(Skeleton, { variant: "rounded", height: "300px" }),
    React.createElement('div', { className: "wp-skeleton-page__section" },
      React.createElement(Skeleton, { variant: "text", lines: 6 })
    )
  );
}

PageSkeleton.displayName = 'PageSkeleton';