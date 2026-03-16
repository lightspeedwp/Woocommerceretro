import { X } from '../../../utils/phosphor-compat';
import { Button } from '../design/Buttons';
import { Typography } from '../../common/Typography';
import { FilterSidebar } from './FilterSidebar';

interface FiltersMobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: any;
  onFilterChange: (filters: any) => void;
  onClearAll: () => void;
  className?: string;
}

/**
 * FiltersMobileDrawer Component
 *
 * Mobile-optimized filter drawer overlay.
 */
export const FiltersMobileDrawer = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearAll,
  className = '',
}: FiltersMobileDrawerProps) => {
  if (!isOpen) return null;

  return (
    <div className={`wp-filters-mobile-drawer funky-mobile-drawer ${className}`}>
      <div className="wp-filters-mobile-drawer__backdrop" onClick={onClose} />
      <div className="wp-filters-mobile-drawer__panel animate-slide-in-right">
        <div className="wp-filters-mobile-drawer__header">
          <Typography variant="h4" className="wp-filters-mobile-drawer__title">
            Filters
          </Typography>
          <button
            onClick={onClose}
            className="wp-filters-mobile-drawer__close funky-close-btn"
            aria-label="Close filters"
          >
            <X className="wp-filters-mobile-drawer__close-icon" />
          </button>
        </div>
        <div className="wp-filters-mobile-drawer__content">
          <FilterSidebar
            filters={filters}
            onFilterChange={onFilterChange}
            onClearFilters={onClearAll}
          />
        </div>
        <div className="wp-filters-mobile-drawer__footer">
          <Button
            variant="primary"
            onClick={onClose}
            className="wp-filters-mobile-drawer__apply funky-primary-btn"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

FiltersMobileDrawer.displayName = 'FiltersMobileDrawer';