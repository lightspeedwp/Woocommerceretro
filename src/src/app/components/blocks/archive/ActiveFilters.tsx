import { X } from '@phosphor-icons/react';

interface Filters {
  categories: string[];
  colors: string[];
  sizes: string[];
  rating: number | null;
  inStock: boolean;
  priceRange: [number, number];
}

interface ActiveFiltersProps {
  filters: Filters;
  onClear: (key: string, value: any) => void;
  onClearAll: () => void;
}

/**
 * ActiveFilters Block Component
 *
 * Displays active filter chips with remove and clear-all actions.
 */
export const ActiveFilters = ({ filters, onClear, onClearAll }: ActiveFiltersProps) => {
  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.colors.length > 0 ||
    filters.sizes.length > 0 ||
    filters.rating !== null ||
    filters.inStock ||
    filters.priceRange[0] > 0 || filters.priceRange[1] < 500;

  if (!hasActiveFilters) return null;

  const chips: JSX.Element[] = [];

  filters.categories.forEach((cat) => {
    chips.push(
      <span key={cat} className="wp-filter-chip funky-filter-chip">
        <span className="wp-filter-chip__text">{cat}</span>
        <button
          onClick={() => onClear('categories', cat)}
          className="wp-filter-chip__remove funky-chip-remove"
          aria-label={`Remove ${cat} filter`}
        >
          <X className="wp-filter-chip__icon" />
        </button>
      </span>
    );
  });

  filters.colors.forEach((color) => {
    chips.push(
      <span key={color} className="wp-filter-chip funky-filter-chip">
        <span className="wp-filter-chip__text">{color}</span>
        <button
          onClick={() => onClear('colors', color)}
          className="wp-filter-chip__remove funky-chip-remove"
          aria-label={`Remove ${color} filter`}
        >
          <X className="wp-filter-chip__icon" />
        </button>
      </span>
    );
  });

  filters.sizes.forEach((size) => {
    chips.push(
      <span key={size} className="wp-filter-chip funky-filter-chip">
        <span className="wp-filter-chip__text">{size}</span>
        <button
          onClick={() => onClear('sizes', size)}
          className="wp-filter-chip__remove funky-chip-remove"
          aria-label={`Remove ${size} filter`}
        >
          <X className="wp-filter-chip__icon" />
        </button>
      </span>
    );
  });

  if (filters.rating !== null) {
    chips.push(
      <span key="rating" className="wp-filter-chip funky-filter-chip">
        <span className="wp-filter-chip__text">{`${filters.rating}+ stars`}</span>
        <button
          onClick={() => onClear('rating', null)}
          className="wp-filter-chip__remove funky-chip-remove"
          aria-label="Remove rating filter"
        >
          <X className="wp-filter-chip__icon" />
        </button>
      </span>
    );
  }

  if (filters.inStock) {
    chips.push(
      <span key="inStock" className="wp-filter-chip funky-filter-chip">
        <span className="wp-filter-chip__text">In Stock</span>
        <button
          onClick={() => onClear('inStock', false)}
          className="wp-filter-chip__remove funky-chip-remove"
          aria-label="Remove in stock filter"
        >
          <X className="wp-filter-chip__icon" />
        </button>
      </span>
    );
  }

  if (filters.priceRange[0] > 0 || filters.priceRange[1] < 500) {
    chips.push(
      <span key="price" className="wp-filter-chip funky-filter-chip">
        <span className="wp-filter-chip__text">
          {`$${filters.priceRange[0]} - $${filters.priceRange[1]}`}
        </span>
        <button
          onClick={() => onClear('priceRange', [0, 500])}
          className="wp-filter-chip__remove funky-chip-remove"
          aria-label="Remove price filter"
        >
          <X className="wp-filter-chip__icon" />
        </button>
      </span>
    );
  }

  return (
    <div className="wp-active-filters funky-active-filters">
      <div className="wp-active-filters__header">
        <span className="wp-active-filters__label">Active Filters:</span>
        <button onClick={onClearAll} className="wp-active-filters__clear funky-clear-btn">
          Clear All
        </button>
      </div>
      <div className="wp-active-filters__chips">{chips}</div>
    </div>
  );
};

ActiveFilters.displayName = 'ActiveFilters';
