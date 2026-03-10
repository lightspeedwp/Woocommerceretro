import React from 'react';
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight } from '@phosphor-icons/react';

/*
 * ArchivePaginationProps:
 *   currentPage: number
 *   totalPages: number
 *   onPageChange: (page: number) => void
 *   scrollToTop?: boolean
 *   ariaLabel?: string
 *   maxVisible?: number
 *   className?: string
 */

/**
 * ArchivePagination Pattern
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 */
export function ArchivePagination(props) {
  var currentPage = props.currentPage;
  var totalPages = props.totalPages;
  var onPageChange = props.onPageChange;
  var scrollToTop = props.scrollToTop !== undefined ? props.scrollToTop : true;
  var ariaLabel = props.ariaLabel || 'Pagination';
  var maxVisible = props.maxVisible || 5;
  var className = props.className || '';

  if (totalPages <= 1) {
    return null;
  }

  var handlePageChange = function(page) {
    onPageChange(page);
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  var getPageNumbers = function() {
    var pages = [];

    if (totalPages <= maxVisible) {
      for (var i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (var i = 1; i <= 4; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (var i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('ellipsis');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  var pageNumbers = getPageNumbers();

  var prevButton = React.createElement('button', {
    onClick: function() { handlePageChange(currentPage - 1); },
    disabled: currentPage === 1,
    'aria-label': 'Previous page',
    className: 'wp-archive-pagination__button wp-archive-pagination__button--prev'
  },
    React.createElement(ChevronLeft, { size: 16, 'aria-hidden': 'true' }),
    React.createElement('span', { className: 'wp-archive-pagination__button-text' }, 'Previous')
  );

  var pageElements = pageNumbers.map(function(page, index) {
    if (page === 'ellipsis') {
      return React.createElement('span', { 
        key: 'ellipsis-' + index, 
        className: 'wp-archive-pagination__ellipsis',
        'aria-hidden': 'true'
      }, '\u2026');
    }
    
    var isCurrent = currentPage === page;
    return React.createElement('button', {
      key: page,
      onClick: function() { handlePageChange(page); },
      'aria-current': isCurrent ? 'page' : undefined,
      'aria-label': isCurrent ? 'Current page, page ' + page : 'Go to page ' + page,
      className: 'wp-archive-pagination__page' + (isCurrent ? ' wp-archive-pagination__page--active' : '')
    }, page);
  });

  var nextButton = React.createElement('button', {
    onClick: function() { handlePageChange(currentPage + 1); },
    disabled: currentPage === totalPages,
    'aria-label': 'Next page',
    className: 'wp-archive-pagination__button wp-archive-pagination__button--next'
  },
    React.createElement('span', { className: 'wp-archive-pagination__button-text' }, 'Next'),
    React.createElement(ChevronRight, { size: 16, 'aria-hidden': 'true' })
  );

  return React.createElement('nav', {
    'aria-label': ariaLabel,
    className: 'wp-archive-pagination ' + className
  },
    prevButton,
    pageElements,
    nextButton
  );
}