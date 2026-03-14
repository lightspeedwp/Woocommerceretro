import { MagnifyingGlass as SearchX } from '@phosphor-icons/react';
import { Button } from '../design/Buttons';
import { Typography } from '../../common/Typography';

interface EmptyResultsProps {
  onReset: () => void;
  className?: string;
}

/**
 * EmptyResults Component
 *
 * Displayed when no products match the current filters.
 */
export const EmptyResults = ({ onReset, className = '' }: EmptyResultsProps) => {
  return (
    <div className={`wp-empty-results funky-empty-results ${className}`}>
      <div className="wp-empty-results__icon-wrapper">
        <SearchX className="wp-empty-results__icon funky-empty-icon" />
      </div>
      <Typography variant="h3" className="wp-empty-results__title">
        No products found
      </Typography>
      <Typography variant="body" className="wp-empty-results__description">
        Try adjusting your filters or search terms to find what you&apos;re looking for.
      </Typography>
      <div className="wp-empty-results__actions">
        <Button variant="primary" onClick={onReset} className="funky-primary-btn">
          Clear All Filters
        </Button>
      </div>
    </div>
  );
};

EmptyResults.displayName = 'EmptyResults';
