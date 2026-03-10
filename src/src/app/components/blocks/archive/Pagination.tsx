import React from 'react';
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight } from '@phosphor-icons/react';

/**
 * Pagination Component (Block)
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. No destructuring in parameters
 */
export function Pagination(props) {
  var currentPage = props.currentPage;
  var totalPages = props.totalPages;
  var onPageChange = props.onPageChange;

  if (totalPages <= 1) {
    return null;
  }

  var handlePrev = function() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  var handleNext = function() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  var renderPageNumbers = function() {
    var pages = [];
    for (var i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages.map(function(page) {
      var isActive = currentPage === page;
      var handleClick = function() {
        onPageChange(page);
      };

      return React.createElement('button', {
        key: page,
        onClick: handleClick,
        className: 'wp-block-query-pagination__page funky-pagination-item ' + (isActive ? 'wp-block-query-pagination__page--active funky-pagination-item--active' : ''),
        'aria-label': 'Page ' + page,
        'aria-current': isActive ? 'page' : undefined
      }, page);
    });
  };

  return React.createElement('nav', { 
    className: 'wp-block-query-pagination funky-pagination', 
    'aria-label': 'Pagination' 
  },
    React.createElement('button', {
      onClick: handlePrev,
      disabled: currentPage === 1,
      className: 'wp-block-query-pagination__button wp-block-query-pagination__button--prev funky-pagination-btn',
      'aria-label': 'Previous page'
    },
      React.createElement(ChevronLeft, { className: 'wp-block-query-pagination__icon' })
    ),
    React.createElement('div', { className: 'wp-block-query-pagination__numbers funky-pagination-numbers' },
      renderPageNumbers()
    ),
    React.createElement('button', {
      onClick: handleNext,
      disabled: currentPage === totalPages,
      className: 'wp-block-query-pagination__button wp-block-query-pagination__button--next funky-pagination-btn',
      'aria-label': 'Next page'
    },
      React.createElement(ChevronRight, { className: 'wp-block-query-pagination__icon' })
    )
  );
}

Pagination.displayName = 'Pagination';