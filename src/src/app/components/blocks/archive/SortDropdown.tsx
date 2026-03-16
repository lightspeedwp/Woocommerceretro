import { CaretDown as ChevronDown } from '../../../utils/phosphor-compat';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Rating' },
  { value: 'popularity', label: 'Popularity' },
];

/**
 * SortDropdown Component
 *
 * Dropdown for sorting product listings.
 */
export const SortDropdown = ({ value, onChange, className = '' }: SortDropdownProps) => {
  return (
    <div className={`wp-sort-dropdown funky-sort-dropdown ${className}`}>
      <label htmlFor="sort-select" className="wp-sort-dropdown__label">
        Sort by:
      </label>
      <div className="wp-sort-dropdown__wrapper">
        <select
          id="sort-select"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="wp-sort-dropdown__select funky-select"
        >
          {OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="wp-sort-dropdown__icon" />
      </div>
    </div>
  );
};

SortDropdown.displayName = 'SortDropdown';