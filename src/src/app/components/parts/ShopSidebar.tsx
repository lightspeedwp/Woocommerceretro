import React, { useState } from 'react';
import { Typography } from '../common/Typography';
import { X, Star } from '../../utils/phosphor-compat';
import { Checkbox } from '../blocks/forms/Checkbox';
import { SHOP_FILTERS } from '../../data/filters';

/**
 * FilterGroup Component
 */
interface FilterGroupProps {
  title: string;
  children: React.ReactNode;
}

const FilterGroup = ({ title, children }: FilterGroupProps) => {
  return (
    <div className="wp-filter-section funky-filter-section">
      <Typography variant="h4" className="wp-filter-section__trigger funky-filter-trigger">
        {title}
      </Typography>
      <div className="wp-filter-section__content funky-filter-content">
        {children}
      </div>
    </div>
  );
}

interface ActiveFilter {
  type: string;
  value: string;
}

/**
 * ShopSidebar Component
 *
 * Product filter sidebar with categories, brands, price, rating,
 * color, and status filters.
 */
export const ShopSidebar = () => {
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([
    { type: 'Category', value: 'Tshirts' }
  ]);

  const removeFilter = (value: string) => {
    setActiveFilters(activeFilters.filter((f) => f.value !== value));
  };

  const handleCheckboxChange = (type: string, value: string, checked: boolean) => {
    if (checked) {
      setActiveFilters([...activeFilters, { type, value }]);
    } else {
      setActiveFilters(activeFilters.filter((f) => f.value !== value));
    }
  };

  const handleClearAll = () => {
    setActiveFilters([]);
  };

  const renderActiveFilters = () => {
    if (activeFilters.length === 0) return null;

    return (
      <div className="wp-active-filters funky-active-filters-panel">
        <div className="wp-active-filters__list">
          {activeFilters.map((filter, idx) => (
            <div key={idx} className="wp-filter-chip funky-filter-chip">
              <span>{`${filter.type}: ${filter.value}`}</span>
              <button
                onClick={() => removeFilter(filter.value)}
                className="wp-filter-chip__remove"
                aria-label={`Remove filter ${filter.value}`}
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
        <button className="wp-active-filters__clear-all funky-clear-all-btn" onClick={handleClearAll}>
          Clear filters
        </button>
      </div>
    );
  };

  const renderBrands = () =>
    SHOP_FILTERS.brands.map((brand) => {
      const isChecked = activeFilters.some((f) => f.value === brand);
      return (
        <label key={brand} className="wp-filter-checkbox funky-filter-checkbox">
          <Checkbox checked={isChecked} onCheckedChange={(checked) => handleCheckboxChange('Brand', brand, !!checked)} />
          <span className="wp-filter-checkbox__label">{brand}</span>
        </label>
      );
    });

  const renderRatings = () => {
    const isChecked = activeFilters.some((f) => f.type === 'Rating' && f.value === '5 Stars');
    return (
      <label className="wp-filter-checkbox funky-filter-checkbox">
        <Checkbox checked={isChecked} onCheckedChange={(checked) => handleCheckboxChange('Rating', '5 Stars', !!checked)} />
        <div className="wp-filter-rating-stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={16} className="wp-filter-rating-star funky-star-icon" />
          ))}
        </div>
      </label>
    );
  };

  const renderColors = () =>
    SHOP_FILTERS.colors.map((color) => {
      const isChecked = activeFilters.some((f) => f.value === color);
      return (
        <label key={color} className="wp-filter-checkbox funky-filter-checkbox">
          <Checkbox checked={isChecked} onCheckedChange={(checked) => handleCheckboxChange('Color', color, !!checked)} />
          <span className="wp-filter-checkbox__label">{color}</span>
        </label>
      );
    });

  const renderCategories = () =>
    SHOP_FILTERS.categories.map((cat) => {
      const isChecked = activeFilters.some((f) => f.value === cat);
      return (
        <label key={cat} className="wp-filter-checkbox funky-filter-checkbox">
          <Checkbox checked={isChecked} onCheckedChange={(checked) => handleCheckboxChange('Category', cat, !!checked)} />
          <span className="wp-filter-checkbox__label">{cat}</span>
        </label>
      );
    });

  const renderStatuses = () =>
    SHOP_FILTERS.statuses.map((status) => {
      const isChecked = activeFilters.some((f) => f.value === status.value);
      return (
        <label key={status.value} className="wp-filter-checkbox funky-filter-checkbox">
          <Checkbox checked={isChecked} onCheckedChange={(checked) => handleCheckboxChange('Status', status.value, !!checked)} />
          <span className="wp-filter-checkbox__label">{status.label}</span>
        </label>
      );
    });

  return (
    <div className="wp-filter-sidebar funky-shop-sidebar">
      <div className="wp-active-filters__header">
        <Typography variant="h3" className="wp-filter-sidebar__title funky-sidebar-title">
          Filters
        </Typography>
        {renderActiveFilters()}
      </div>

      <FilterGroup title="Brands">{renderBrands()}</FilterGroup>

      <FilterGroup title="Price">
        <div className="wp-filter-price funky-price-filter">
          <div className="wp-filter-price__slider funky-visual-slider" />
          <div className="wp-filter-price__labels">
            <div>&pound;0</div>
            <div>&pound;5000</div>
          </div>
        </div>
      </FilterGroup>

      <FilterGroup title="Rating">{renderRatings()}</FilterGroup>
      <FilterGroup title="Color">{renderColors()}</FilterGroup>
      <FilterGroup title="Category">{renderCategories()}</FilterGroup>

      <FilterGroup title="Status">
        <div className="wp-filter-status-list">{renderStatuses()}</div>
      </FilterGroup>
    </div>
  );
}

ShopSidebar.displayName = 'ShopSidebar';