import { X } from '../../../utils/phosphor-compat';

interface Category {
  slug: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (slug: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
}

/**
 * CategoryFilter Block
 *
 * Displays category filter buttons with mobile sheet support.
 */
export const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  isOpenMobile,
  onCloseMobile,
}: CategoryFilterProps) => {
  const handleCategoryClick = (slug: string) => {
    onCategoryChange(slug);
    if (onCloseMobile) onCloseMobile();
  };

  const renderCategoryButtons = () => (
    <>
      <button
        onClick={() => handleCategoryClick('all')}
        className={`wp-button--filter ${selectedCategory === 'all' ? 'is-active' : ''}`}
      >
        All Posts
      </button>
      {categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => handleCategoryClick(category.slug)}
          className={`wp-button--filter ${selectedCategory === category.slug ? 'is-active' : ''}`}
        >
          {category.name}
        </button>
      ))}
    </>
  );

  return (
    <>
      <div className="wp-category-filter wp-category-filter--desktop">
        {renderCategoryButtons()}
      </div>
      {isOpenMobile && (
        <div className="wp-category-filter-mobile">
          <div
            className="wp-category-filter-mobile__backdrop"
            onClick={onCloseMobile}
            aria-hidden="true"
          />
          <div className="wp-category-filter-mobile__drawer">
            <div className="wp-category-filter-mobile__header">
              <h2 className="wp-category-filter-mobile__title">Filter by category</h2>
              <button
                onClick={onCloseMobile}
                className="wp-category-filter-mobile__close"
                aria-label="Close filter"
              >
                <X size={20} />
              </button>
            </div>
            <div className="wp-category-filter-mobile__content">
              {renderCategoryButtons()}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

CategoryFilter.displayName = 'CategoryFilter';