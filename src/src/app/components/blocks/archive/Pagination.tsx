import { CaretLeft as ChevronLeft, CaretRight as ChevronRight } from '@phosphor-icons/react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * Pagination Component (Block)
 *
 * Page navigation for archive listings.
 */
export const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (totalPages <= 1) return null;

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <nav className="wp-block-query-pagination funky-pagination" aria-label="Pagination">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="wp-block-query-pagination__button wp-block-query-pagination__button--prev funky-pagination-btn"
        aria-label="Previous page"
      >
        <ChevronLeft className="wp-block-query-pagination__icon" />
      </button>
      <div className="wp-block-query-pagination__numbers funky-pagination-numbers">
        {pages.map((page) => {
          const isActive = currentPage === page;
          return (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`wp-block-query-pagination__page funky-pagination-item ${isActive ? 'wp-block-query-pagination__page--active funky-pagination-item--active' : ''}`}
              aria-label={`Page ${page}`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="wp-block-query-pagination__button wp-block-query-pagination__button--next funky-pagination-btn"
        aria-label="Next page"
      >
        <ChevronRight className="wp-block-query-pagination__icon" />
      </button>
    </nav>
  );
};

Pagination.displayName = 'Pagination';
