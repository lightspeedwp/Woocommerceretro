import React from 'react';
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight } from '../../utils/phosphor-compat';

interface ArchivePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  scrollToTop?: boolean;
  ariaLabel?: string;
  maxVisible?: number;
  className?: string;
}

/**
 * ArchivePagination Pattern
 */
export const ArchivePagination = ({
  currentPage,
  totalPages,
  onPageChange,
  scrollToTop = true,
  ariaLabel = 'Pagination',
  maxVisible = 5,
  className = '',
}: ArchivePaginationProps) => {
  if (totalPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    onPageChange(page);
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = (): (number | 'ellipsis')[] => {
    const pages: (number | 'ellipsis')[] = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
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

  const pageNumbers = getPageNumbers();

  return (
    <nav aria-label={ariaLabel} className={`wp-archive-pagination ${className}`}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="wp-archive-pagination__button wp-archive-pagination__button--prev"
      >
        <ChevronLeft size={16} aria-hidden="true" />
        <span className="wp-archive-pagination__button-text">Previous</span>
      </button>

      {pageNumbers.map((page, index) => {
        if (page === 'ellipsis') {
          return (
            <span
              key={`ellipsis-${index}`}
              className="wp-archive-pagination__ellipsis"
              aria-hidden="true"
            >
              {'\u2026'}
            </span>
          );
        }

        const isCurrent = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            aria-current={isCurrent ? 'page' : undefined}
            aria-label={isCurrent ? `Current page, page ${page}` : `Go to page ${page}`}
            className={`wp-archive-pagination__page${isCurrent ? ' wp-archive-pagination__page--active' : ''}`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="wp-archive-pagination__button wp-archive-pagination__button--next"
      >
        <span className="wp-archive-pagination__button-text">Next</span>
        <ChevronRight size={16} aria-hidden="true" />
      </button>
    </nav>
  );
}