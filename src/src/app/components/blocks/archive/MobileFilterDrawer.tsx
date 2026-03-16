import { useEffect } from 'react';
import { X, FadersHorizontal as SlidersHorizontal } from '../../../utils/phosphor-compat';
import { Button } from '../design/Buttons';
import { Typography } from '../../common/Typography';
import { FilterSidebar } from './FilterSidebar';

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: any;
  onFilterChange: (filters: any) => void;
  onClearFilters: () => void;
  resultCount?: number;
}

/**
 * MobileFilterDrawer Component
 *
 * Full-featured mobile filter drawer with result count and body scroll lock.
 */
export const MobileFilterDrawer = ({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onClearFilters,
  resultCount,
}: MobileFilterDrawerProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="woocommerce-mobile-filter-drawer">
      <div
        className="woocommerce-mobile-filter-drawer__backdrop"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="woocommerce-mobile-filter-drawer__content">
        <div className="woocommerce-mobile-filter-drawer__header">
          <div className="woocommerce-mobile-filter-drawer__header-title">
            <SlidersHorizontal size={20} className="woocommerce-mobile-filter-drawer__icon" aria-hidden="true" />
            <Typography className="woocommerce-mobile-filter-drawer__title">Filters &amp; Sort</Typography>
          </div>
          <button
            onClick={onClose}
            className="woocommerce-mobile-filter-drawer__close"
            aria-label="Close filters"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="woocommerce-mobile-filter-drawer__body">
          <div className="woocommerce-mobile-filter-drawer__body-inner">
            <FilterSidebar
              filters={filters}
              onFilterChange={onFilterChange}
              onClearFilters={onClearFilters}
              isMobileView={true}
            />
          </div>
        </div>

        <div className="woocommerce-mobile-filter-drawer__footer">
          {resultCount !== undefined && (
            <div className="woocommerce-mobile-filter-drawer__result-count">
              <Typography variant="caption" className="woocommerce-mobile-filter-drawer__result-text">
                {`${resultCount} ${resultCount === 1 ? 'result' : 'results'} found`}
              </Typography>
            </div>
          )}
          <div className="woocommerce-mobile-filter-drawer__actions">
            <Button
              variant="outline"
              onClick={() => onClearFilters()}
              className="woocommerce-mobile-filter-drawer__action-clear"
            >
              Clear All
            </Button>
            <Button
              onClick={onClose}
              className="woocommerce-mobile-filter-drawer__action-show"
            >
              <strong>Show Results</strong>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};