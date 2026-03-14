import { useState, type ReactNode } from 'react';
import { X, Star, Check, CaretUp as ChevronUp, CaretDown as ChevronDown } from '@phosphor-icons/react';
import { ActiveFilters } from './ActiveFilters';
import { Typography } from '../../common/Typography';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose, DrawerDescription } from '../layout/Drawer';

interface Filters {
  categories: string[];
  colors: string[];
  sizes: string[];
  rating: number | null;
  inStock: boolean;
  priceRange: [number, number];
  [key: string]: any;
}

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
  onClearFilters: () => void;
  isOpenMobile?: boolean;
  onCloseMobile?: (open: boolean) => void;
  isMobileView?: boolean;
}

interface FilterSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

const FilterSection = ({ title, children, defaultOpen = true }: FilterSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="wp-filter-section funky-filter-section">
      <button onClick={() => setIsOpen(!isOpen)} className="wp-filter-section__trigger funky-filter-trigger">
        <span className="funky-filter-title">{title}</span>
        {isOpen
          ? <ChevronUp size={16} className="wp-filter-section__icon" />
          : <ChevronDown size={16} className="wp-filter-section__icon" />
        }
      </button>
      {isOpen && <div className="wp-filter-section__content funky-filter-content">{children}</div>}
    </div>
  );
};

/**
 * FilterSidebar Component (Block)
 *
 * Product filter sidebar with categories, price, color, size, and rating filters.
 */
export const FilterSidebar = ({
  filters,
  onFilterChange,
  onClearFilters,
  isOpenMobile,
  onCloseMobile,
  isMobileView,
}: FilterSidebarProps) => {
  const toggleArrayFilter = (key: string, value: string) => {
    const current = filters[key] as string[];
    const updated = current.indexOf(value) !== -1
      ? current.filter((item: string) => item !== value)
      : [...current, value];
    onFilterChange({ ...filters, [key]: updated });
  };

  const handleClear = (key: string, value: any) => {
    if (key === 'price') {
      onFilterChange({ ...filters, priceRange: [0, 500] });
    } else if (key === 'rating') {
      onFilterChange({ ...filters, rating: null });
    } else if (key === 'inStock') {
      onFilterChange({ ...filters, inStock: false });
    } else if (key === 'categories' || key === 'colors' || key === 'sizes') {
      toggleArrayFilter(key, value);
    }
  };

  const categories = ['Clothing', 'Accessories', 'Shoes', 'Home', 'Gifts'];
  const colors = ['Black', 'White', 'Blue', 'Red', 'Green', 'Beige'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const ratings = [4, 3, 2, 1];

  const contentElement = (
    <div className="wp-filter-container funky-filter-container">
      <ActiveFilters filters={filters} onClear={handleClear} onClearAll={onClearFilters} />

      <FilterSection title="Availability">
        <label className="wp-filter-checkbox funky-filter-checkbox">
          <div className={filters.inStock ? 'wp-filter-checkbox__box wp-filter-checkbox__box--checked funky-checkbox--active' : 'wp-filter-checkbox__box'}>
            {filters.inStock && <Check size={12} className="wp-color-text-inverse" />}
          </div>
          <input
            type="checkbox"
            className="wp-filter-checkbox__input"
            checked={filters.inStock}
            onChange={(e) => onFilterChange({ ...filters, inStock: e.target.checked })}
          />
          <span className="wp-filter-checkbox__label">In Stock Only</span>
        </label>
      </FilterSection>

      <FilterSection title="Categories">
        {categories.map((cat) => {
          const isChecked = filters.categories.indexOf(cat) !== -1;
          return (
            <label key={cat} className="wp-filter-checkbox funky-filter-checkbox">
              <div className={isChecked ? 'wp-filter-checkbox__box wp-filter-checkbox__box--checked funky-checkbox--active' : 'wp-filter-checkbox__box'}>
                {isChecked && <Check size={10} className="wp-color-text-inverse" />}
              </div>
              <input
                type="checkbox"
                className="wp-filter-checkbox__input"
                onChange={() => toggleArrayFilter('categories', cat)}
                checked={isChecked}
              />
              <span className="wp-filter-checkbox__label">{cat}</span>
            </label>
          );
        })}
      </FilterSection>

      <FilterSection title="Price">
        <div className="wp-filter-price funky-price-filter">
          <input
            type="range"
            min="0"
            max="500"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange({ ...filters, priceRange: [0, parseInt(e.target.value)] })}
            className="wp-filter-price__slider funky-range-slider"
          />
          <div className="wp-filter-price__labels">
            <small>{'\u00A3'}0</small>
            <small>{`\u00A3${filters.priceRange[1]}+`}</small>
          </div>
        </div>
      </FilterSection>

      <FilterSection title="Color">
        <div className="wp-filter-colors">
          {colors.map((color) => {
            const isSelected = filters.colors.indexOf(color) !== -1;
            return (
              <button
                key={color}
                onClick={() => toggleArrayFilter('colors', color)}
                className={`${isSelected ? 'wp-filter-color-swatch wp-filter-color-swatch--selected funky-color-swatch--active' : 'wp-filter-color-swatch'} funky-color-swatch`}
                data-color={color}
                aria-label={`Filter by ${color}`}
                title={color}
              >
                {color === 'White' && <span className="sr-only">White</span>}
              </button>
            );
          })}
        </div>
      </FilterSection>

      <FilterSection title="Size">
        <div className="wp-filter-sizes">
          {sizes.map((size) => {
            const isSelected = filters.sizes.indexOf(size) !== -1;
            return (
              <button
                key={size}
                onClick={() => toggleArrayFilter('sizes', size)}
                className={`${isSelected ? 'wp-filter-size-button wp-filter-size-button--selected funky-size-btn--active' : 'wp-filter-size-button'} funky-size-btn`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </FilterSection>

      <FilterSection title="Rating">
        <div className="wp-filter-ratings">
          {ratings.map((stars) => {
            const isSelected = filters.rating === stars;
            return (
              <button
                key={stars}
                onClick={() => onFilterChange({ ...filters, rating: isSelected ? null : stars })}
                className={`${isSelected ? 'wp-filter-rating-button wp-filter-rating-button--selected funky-rating-btn--active' : 'wp-filter-rating-button'} funky-rating-btn`}
              >
                <div className="wp-filter-rating-stars">
                  {[0, 1, 2, 3, 4].map((i) => {
                    const isFilled = i < stars;
                    return (
                      <Star
                        key={i}
                        size={14}
                        fill={isFilled ? 'currentColor' : 'none'}
                        className={isFilled ? 'wp-filter-rating__star--filled' : 'wp-filter-rating__star--empty'}
                      />
                    );
                  })}
                </div>
                <span><small>&amp; Up</small></span>
              </button>
            );
          })}
        </div>
      </FilterSection>
    </div>
  );

  return (
    <>
      {!isMobileView && (
        <aside className="wp-filter-sidebar funky-filter-sidebar">
          <Typography variant="h3" className="wp-filter-sidebar__title">Filters</Typography>
          {contentElement}
        </aside>
      )}
      <Drawer open={isOpenMobile} onOpenChange={onCloseMobile}>
        <DrawerContent side="left" className="wp-filter-sheet__content funky-filter-drawer">
          <DrawerHeader className="wp-filter-sheet__header">
            <div className="wp-filter-sheet__header-row">
              <DrawerTitle>Filter Products</DrawerTitle>
              <DrawerClose className="wp-filter-sheet__close">
                <X className="wp-filter-sheet__icon" />
                <span className="sr-only">Close</span>
              </DrawerClose>
            </div>
            <DrawerDescription className="sr-only">
              Refine your product search by price, category, color, size, rating, and availability.
            </DrawerDescription>
          </DrawerHeader>
          {contentElement}
        </DrawerContent>
      </Drawer>
    </>
  );
};

FilterSidebar.displayName = 'FilterSidebar';
