import React from 'react';
import { CaretDown, CaretUp, X } from '@phosphor-icons/react';

var useState = React.useState;

/**
 * ShopFilterSidebar Pattern
 * 
 * Left sidebar with collapsible filter sections for product archives.
 * 
 * @pattern
 */

export function ShopFilterSidebar(props) {
  var onFilterChange = props.onFilterChange;
  var className = props.className === undefined ? '' : props.className;

  var stateResult = useState(['categories', 'price', 'rating']);
  var openSections = stateResult[0];
  var setOpenSections = stateResult[1];
  
  var filterStateResult = useState({
    categories: [],
    priceRange: [0, 1000],
    ratings: [],
    brands: [],
    inStock: false
  });
  var filters = filterStateResult[0];
  var setFilters = filterStateResult[1];

  var toggleSection = function(section) {
    var index = openSections.indexOf(section);
    if (index !== -1) {
      setOpenSections(openSections.filter(function(s) { return s !== section; }));
    } else {
      setOpenSections(openSections.concat([section]));
    }
  };

  var hasSection = function(section) {
    return openSections.indexOf(section) !== -1;
  };

  var handleCategoryToggle = function(category) {
    var isIncluded = filters.categories.indexOf(category) !== -1;
    var newCategories = isIncluded
      ? filters.categories.filter(function(c) { return c !== category; })
      : filters.categories.concat([category]);
    var newFilters = Object.assign({}, filters, { categories: newCategories });
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  var handleRatingToggle = function(rating) {
    var isIncluded = filters.ratings.indexOf(rating) !== -1;
    var newRatings = isIncluded
      ? filters.ratings.filter(function(r) { return r !== rating; })
      : filters.ratings.concat([rating]);
    var newFilters = Object.assign({}, filters, { ratings: newRatings });
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  var handleBrandToggle = function(brand) {
    var isIncluded = filters.brands.indexOf(brand) !== -1;
    var newBrands = isIncluded
      ? filters.brands.filter(function(b) { return b !== brand; })
      : filters.brands.concat([brand]);
    var newFilters = Object.assign({}, filters, { brands: newBrands });
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  var clearAllFilters = function() {
    var newFilters = {
      categories: [],
      priceRange: [0, 1000],
      ratings: [],
      brands: [],
      inStock: false
    };
    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  var activeFilterCount = 
    filters.categories.length + 
    filters.ratings.length + 
    filters.brands.length + 
    (filters.inStock ? 1 : 0);

  var categories = [
    { name: 'Electronics', slug: 'electronics', count: 45 },
    { name: 'Clothing', slug: 'clothing', count: 89 },
    { name: 'Home & Garden', slug: 'home-garden', count: 67 },
    { name: 'Sports & Outdoors', slug: 'sports', count: 34 },
    { name: 'Books', slug: 'books', count: 123 },
  ];

  var brands = [
    { name: 'Premium Brand', slug: 'premium', count: 23 },
    { name: 'TechCo', slug: 'techco', count: 18 },
    { name: 'StyleHouse', slug: 'stylehouse', count: 34 },
    { name: 'EcoWare', slug: 'ecoware', count: 12 },
  ];

  return React.createElement('aside', { className: "shop-filter " + className },
    React.createElement('div', { className: "shop-filter__header" },
      React.createElement('div', null,
        React.createElement('h3', { className: "shop-filter__title" }, "Filters"),
        activeFilterCount > 0 ? React.createElement('p', { className: "shop-filter__active-count" },
          React.createElement('small', null, activeFilterCount + " active")
        ) : null
      ),
      activeFilterCount > 0 ? React.createElement('button', { onClick: clearAllFilters, className: "shop-filter__clear-btn" },
        React.createElement(X, { size: 14 }),
        React.createElement('small', null, React.createElement('strong', null, "Clear all"))
      ) : null
    ),

    React.createElement('div', { className: "shop-filter__section" },
      React.createElement('button', { onClick: function() { toggleSection('categories'); }, className: "shop-filter__section-trigger" },
        React.createElement('h4', { className: "shop-filter__section-title" }, "Categories"),
        hasSection('categories') ? React.createElement(CaretUp, { size: 18, className: "shop-filter__chevron" }) : React.createElement(CaretDown, { size: 18, className: "shop-filter__chevron" })
      ),
      hasSection('categories') ? React.createElement('div', { className: "shop-filter__options" },
        categories.map(function(category) {
          return React.createElement('label', { key: category.slug, className: "shop-filter__option" },
            React.createElement('div', { className: "shop-filter__option-left" },
              React.createElement('input', {
                type: "checkbox",
                checked: filters.categories.indexOf(category.slug) !== -1,
                onChange: function() { handleCategoryToggle(category.slug); },
                className: "wp-block-checkbox shop-filter__checkbox"
              }),
              React.createElement('span', { className: "shop-filter__option-label" },
                React.createElement('small', null, category.name)
              )
            ),
            React.createElement('span', { className: "shop-filter__option-count" },
              React.createElement('small', null, category.count)
            )
          );
        })
      ) : null
    ),

    React.createElement('div', { className: "shop-filter__section" },
      React.createElement('button', { onClick: function() { toggleSection('price'); }, className: "shop-filter__section-trigger" },
        React.createElement('h4', { className: "shop-filter__section-title" }, "Price"),
        hasSection('price') ? React.createElement(CaretUp, { size: 18, className: "shop-filter__chevron" }) : React.createElement(CaretDown, { size: 18, className: "shop-filter__chevron" })
      ),
      hasSection('price') ? React.createElement('div', { className: "shop-filter__price-fields" },
        React.createElement('div', { className: "shop-filter__price-row" },
          React.createElement('div', { className: "shop-filter__price-field" },
            React.createElement('label', { className: "wp-block-form-label shop-filter__price-label" },
              React.createElement('small', null, "Min")
            ),
            React.createElement('input', {
              type: "number",
              value: filters.priceRange[0],
              onChange: function(e) {
                var val = parseInt(e.target.value) || 0;
                var newFilters = Object.assign({}, filters, { priceRange: [val, filters.priceRange[1]] });
                setFilters(newFilters);
                if (onFilterChange) onFilterChange(newFilters);
              },
              className: "wp-block-input funky-input-glow shop-filter__price-input"
            })
          ),
          React.createElement('span', { className: "shop-filter__price-separator" }, "-"),
          React.createElement('div', { className: "shop-filter__price-field" },
            React.createElement('label', { className: "wp-block-form-label shop-filter__price-label" },
              React.createElement('small', null, "Max")
            ),
            React.createElement('input', {
              type: "number",
              value: filters.priceRange[1],
              onChange: function(e) {
                var val = parseInt(e.target.value) || 1000;
                var newFilters = Object.assign({}, filters, { priceRange: [filters.priceRange[0], val] });
                setFilters(newFilters);
                if (onFilterChange) onFilterChange(newFilters);
              },
              className: "wp-block-input funky-input-glow shop-filter__price-input"
            })
          )
        ),
        React.createElement('div', { className: "shop-filter__price-range-text" },
          React.createElement('small', null, "£" + filters.priceRange[0]),
          React.createElement('small', null, "£" + filters.priceRange[1])
        )
      ) : null
    ),

    React.createElement('div', { className: "shop-filter__section" },
      React.createElement('button', { onClick: function() { toggleSection('rating'); }, className: "shop-filter__section-trigger" },
        React.createElement('h4', { className: "shop-filter__section-title" }, "Rating"),
        hasSection('rating') ? React.createElement(CaretUp, { size: 18, className: "shop-filter__chevron" }) : React.createElement(CaretDown, { size: 18, className: "shop-filter__chevron" })
      ),
      hasSection('rating') ? React.createElement('div', { className: "shop-filter__options" },
        [5, 4, 3, 2, 1].map(function(rating) {
          return React.createElement('label', { key: rating, className: "shop-filter__option" },
            React.createElement('div', { className: "shop-filter__option-left" },
              React.createElement('input', {
                type: "checkbox",
                checked: filters.ratings.indexOf(rating) !== -1,
                onChange: function() { handleRatingToggle(rating); },
                className: "wp-block-checkbox shop-filter__checkbox"
              }),
              React.createElement('div', { className: "shop-filter__stars" },
                [1, 2, 3, 4, 5].map(function(i) {
                  return React.createElement('span', { key: i, className: i <= rating ? "shop-filter__star--filled" : "shop-filter__star--empty" }, "★");
                })
              )
            ),
            React.createElement('span', { className: "shop-filter__option-count" },
              React.createElement('small', null, "& up")
            )
          );
        })
      ) : null
    ),

    React.createElement('div', { className: "shop-filter__section" },
      React.createElement('button', { onClick: function() { toggleSection('brands'); }, className: "shop-filter__section-trigger" },
        React.createElement('h4', { className: "shop-filter__section-title" }, "Brands"),
        hasSection('brands') ? React.createElement(CaretUp, { size: 18, className: "shop-filter__chevron" }) : React.createElement(CaretDown, { size: 18, className: "shop-filter__chevron" })
      ),
      hasSection('brands') ? React.createElement('div', { className: "shop-filter__options" },
        brands.map(function(brand) {
          return React.createElement('label', { key: brand.slug, className: "shop-filter__option" },
            React.createElement('div', { className: "shop-filter__option-left" },
              React.createElement('input', {
                type: "checkbox",
                checked: filters.brands.indexOf(brand.slug) !== -1,
                onChange: function() { handleBrandToggle(brand.slug); },
                className: "wp-block-checkbox shop-filter__checkbox"
              }),
              React.createElement('span', { className: "shop-filter__option-label" },
                React.createElement('small', null, brand.name)
              )
            ),
            React.createElement('span', { className: "shop-filter__option-count" },
              React.createElement('small', null, brand.count)
            )
          );
        })
      ) : null
    ),

    React.createElement('div', { className: "shop-filter__stock-toggle" },
      React.createElement('label', { className: "shop-filter__option" },
        React.createElement('div', { className: "shop-filter__option-left" },
          React.createElement('input', {
            type: "checkbox",
            checked: filters.inStock,
            onChange: function(e) {
              var newFilters = Object.assign({}, filters, { inStock: e.target.checked });
              setFilters(newFilters);
              if (onFilterChange) onFilterChange(newFilters);
            },
            className: "wp-block-checkbox shop-filter__checkbox"
          }),
          React.createElement('span', { className: "shop-filter__option-label" },
            React.createElement('small', null, React.createElement('strong', null, "In Stock Only"))
          )
        )
      )
    )
  );
}