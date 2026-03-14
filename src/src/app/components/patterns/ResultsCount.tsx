import React from 'react';

interface ResultsCountProps {
  start: number;
  end: number;
  total: number;
  itemType?: string;
  className?: string;
}

/**
 * ResultsCount Pattern
 */
export const ResultsCount = ({
  start,
  end,
  total,
  itemType = 'item',
  className = '',
}: ResultsCountProps) => {
  const pluralizedType = total === 1 ? itemType : `${itemType}s`;

  if (total === 0) {
    return (
      <div className={`wp-block-results-count ${className}`} role="status" aria-live="polite">
        No {pluralizedType} found
      </div>
    );
  }

  return (
    <div className={`wp-block-results-count ${className}`} role="status" aria-live="polite">
      Showing {start}&ndash;{end} of {total} {pluralizedType}
    </div>
  );
}