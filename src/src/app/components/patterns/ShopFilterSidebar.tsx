import React, { useState } from 'react';
import { CaretDown, CaretUp, X } from '../../utils/phosphor-compat';

/**
 * ShopFilterSidebar Pattern
 *
 * Left sidebar with collapsible filter sections for product archives.
 *
 * @pattern
 */

interface ShopFilterSidebarProps {
  onFilterChange?: (filters: any) => void;
  className?: string;
}

interface FilterState {
  categories: string[];
  priceRange: [number, number];
  ratings: number[];
  brands: string[];
  inStock: boolean;
}

export const ShopFilterSidebar = ({ onFilterChange, className = '' }: ShopFilterSidebarProps) => {
  const [openSections, setOpenSections] = useState<string[]>(['categories', 'price', 'rating']);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRange: [0, 1000],
    ratings: [],
    brands: [],
    inStock: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  const hasSection = (section: string) => openSections.includes(section);

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category];
    const newFilters = { ...filters, categories: newCategories };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleRatingToggle = (rating: number) => {
    const newRatings = filters.ratings.includes(rating)
      ? filters.ratings.filter((r) => r !== rating)
      : [...filters.ratings, rating];
    const newFilters = { ...filters, ratings: newRatings };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const handleBrandToggle = (brand: string) => {
    const newBrands = filters.brands.includes(brand)
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    const newFilters = { ...filters, brands: newBrands };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearAllFilters = () => {
    const newFilters: FilterState = {
      categories: [],
      priceRange: [0, 1000],
      ratings: [],
      brands: [],
      inStock: false,
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const activeFilterCount =
    filters.categories.length +
    filters.ratings.length +
    filters.brands.length +
    (filters.inStock ? 1 : 0);

  const categories = [
    { name: 'Electronics', slug: 'electronics', count: 45 },
    { name: 'Clothing', slug: 'clothing', count: 89 },
    { name: 'Home & Garden', slug: 'home-garden', count: 67 },
    { name: 'Sports & Outdoors', slug: 'sports', count: 34 },
    { name: 'Books', slug: 'books', count: 123 },
  ];

  const brands = [
    { name: 'Premium Brand', slug: 'premium', count: 23 },
    { name: 'TechCo', slug: 'techco', count: 18 },
    { name: 'StyleHouse', slug: 'stylehouse', count: 34 },
    { name: 'EcoWare', slug: 'ecoware', count: 12 },
  ];

  return (
    <aside className={`shop-filter ${className}`}>
      <div className="shop-filter__header">
        <div>
          <h3 className="shop-filter__title">Filters</h3>
          {activeFilterCount > 0 && (
            <p className="shop-filter__active-count">
              <small>{activeFilterCount} active</small>
            </p>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button onClick={clearAllFilters} className="shop-filter__clear-btn">
            <X size={14} />
            <small><strong>Clear all</strong></small>
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="shop-filter__section">
        <button onClick={() => toggleSection('categories')} className="shop-filter__section-trigger">
          <h4 className="shop-filter__section-title">Categories</h4>
          {hasSection('categories')
            ? <CaretUp size={18} className="shop-filter__chevron" />
            : <CaretDown size={18} className="shop-filter__chevron" />
          }
        </button>
        {hasSection('categories') && (
          <div className="shop-filter__options">
            {categories.map((category) => (
              <label key={category.slug} className="shop-filter__option">
                <div className="shop-filter__option-left">
                  <input
                    type="checkbox"
                    checked={filters.categories.includes(category.slug)}
                    onChange={() => handleCategoryToggle(category.slug)}
                    className="wp-block-checkbox shop-filter__checkbox"
                  />
                  <span className="shop-filter__option-label">
                    <small>{category.name}</small>
                  </span>
                </div>
                <span className="shop-filter__option-count">
                  <small>{category.count}</small>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="shop-filter__section">
        <button onClick={() => toggleSection('price')} className="shop-filter__section-trigger">
          <h4 className="shop-filter__section-title">Price</h4>
          {hasSection('price')
            ? <CaretUp size={18} className="shop-filter__chevron" />
            : <CaretDown size={18} className="shop-filter__chevron" />
          }
        </button>
        {hasSection('price') && (
          <div className="shop-filter__price-fields">
            <div className="shop-filter__price-row">
              <div className="shop-filter__price-field">
                <label className="wp-block-form-label shop-filter__price-label">
                  <small>Min</small>
                </label>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0;
                    const newFilters = { ...filters, priceRange: [val, filters.priceRange[1]] as [number, number] };
                    setFilters(newFilters);
                    onFilterChange?.(newFilters);
                  }}
                  className="wp-block-input funky-input-glow shop-filter__price-input"
                />
              </div>
              <span className="shop-filter__price-separator">-</span>
              <div className="shop-filter__price-field">
                <label className="wp-block-form-label shop-filter__price-label">
                  <small>Max</small>
                </label>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 1000;
                    const newFilters = { ...filters, priceRange: [filters.priceRange[0], val] as [number, number] };
                    setFilters(newFilters);
                    onFilterChange?.(newFilters);
                  }}
                  className="wp-block-input funky-input-glow shop-filter__price-input"
                />
              </div>
            </div>
            <div className="shop-filter__price-range-text">
              <small>£{filters.priceRange[0]}</small>
              <small>£{filters.priceRange[1]}</small>
            </div>
          </div>
        )}
      </div>

      {/* Rating */}
      <div className="shop-filter__section">
        <button onClick={() => toggleSection('rating')} className="shop-filter__section-trigger">
          <h4 className="shop-filter__section-title">Rating</h4>
          {hasSection('rating')
            ? <CaretUp size={18} className="shop-filter__chevron" />
            : <CaretDown size={18} className="shop-filter__chevron" />
          }
        </button>
        {hasSection('rating') && (
          <div className="shop-filter__options">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label key={rating} className="shop-filter__option">
                <div className="shop-filter__option-left">
                  <input
                    type="checkbox"
                    checked={filters.ratings.includes(rating)}
                    onChange={() => handleRatingToggle(rating)}
                    className="wp-block-checkbox shop-filter__checkbox"
                  />
                  <div className="shop-filter__stars">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className={i <= rating ? "shop-filter__star--filled" : "shop-filter__star--empty"}>★</span>
                    ))}
                  </div>
                </div>
                <span className="shop-filter__option-count">
                  <small>& up</small>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Brands */}
      <div className="shop-filter__section">
        <button onClick={() => toggleSection('brands')} className="shop-filter__section-trigger">
          <h4 className="shop-filter__section-title">Brands</h4>
          {hasSection('brands')
            ? <CaretUp size={18} className="shop-filter__chevron" />
            : <CaretDown size={18} className="shop-filter__chevron" />
          }
        </button>
        {hasSection('brands') && (
          <div className="shop-filter__options">
            {brands.map((brand) => (
              <label key={brand.slug} className="shop-filter__option">
                <div className="shop-filter__option-left">
                  <input
                    type="checkbox"
                    checked={filters.brands.includes(brand.slug)}
                    onChange={() => handleBrandToggle(brand.slug)}
                    className="wp-block-checkbox shop-filter__checkbox"
                  />
                  <span className="shop-filter__option-label">
                    <small>{brand.name}</small>
                  </span>
                </div>
                <span className="shop-filter__option-count">
                  <small>{brand.count}</small>
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* In Stock */}
      <div className="shop-filter__stock-toggle">
        <label className="shop-filter__option">
          <div className="shop-filter__option-left">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) => {
                const newFilters = { ...filters, inStock: e.target.checked };
                setFilters(newFilters);
                onFilterChange?.(newFilters);
              }}
              className="wp-block-checkbox shop-filter__checkbox"
            />
            <span className="shop-filter__option-label">
              <small><strong>In Stock Only</strong></small>
            </span>
          </div>
        </label>
      </div>
    </aside>
  );
};