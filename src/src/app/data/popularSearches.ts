/**
 * Popular Searches Data
 * 
 * **Predefined list of trending and popular search terms.**
 * Displayed in search autocomplete dropdown when input is empty.
 * 
 * ---
 * 
 * ## Usage
 * 
 * ```tsx
 * import * as PopularSearchesModule from './data/popularSearches';
 * var POPULAR_SEARCHES = PopularSearchesModule.POPULAR_SEARCHES;
 * 
 * // Display popular searches
 * {POPULAR_SEARCHES.map(function(term) {
 *   return (
 *     <button onClick={function() { handleSearch(term); }}>
 *       {term}
 *     </button>
 *   );
 * })}
 * ```
 * 
 * ---
 * 
 * ## Search Term Categories
 * 
 * - **Product Types** - Clothing, Accessories, Shoes, etc.
 * - **Styles** - Casual, Formal, Vintage, etc.
 * - **Occasions** - Summer, Winter, Holiday, etc.
 * - **Brands** - Popular brand names
 * - **Colors** - Common color searches
 * 
 * ---
 * 
 * @constant
 */
export var POPULAR_SEARCHES: string[] = [
  // Product Categories
  'Clothing',
  'Shoes',
  'Accessories',
  'Bags',
  'Jewelry',
  'Watches',
  
  // Styles & Occasions
  'Summer Collection',
  'Winter Essentials',
  'Casual Wear',
  'Formal Attire',
  'Vintage Style',
  'Modern Minimalist',
  
  // Specific Items
  'T-Shirts',
  'Jeans',
  'Sneakers',
  'Dresses',
  'Jackets',
  'Sunglasses',
  
  // Colors & Materials
  'Black',
  'White',
  'Blue',
  'Leather',
  'Cotton',
  'Denim',
  
  // Trending Terms
  'Best Sellers',
  'New Arrivals',
  'Sale Items',
  'Limited Edition',
  'Eco-Friendly',
  'Sustainable Fashion',
];

/**
 * Get popular searches by category
 * 
 * @param category - Category to filter by
 * @returns Array of popular search terms for that category
 */
export function getPopularSearchesByCategory(category?: string): string[] {
  if (!category) {
    return POPULAR_SEARCHES;
  }
  
  // Return category-specific searches (can be expanded)
  var categoryMap: Record<string, string[]> = {
    clothing: ['T-Shirts', 'Jeans', 'Dresses', 'Jackets', 'Casual Wear', 'Formal Attire'],
    shoes: ['Sneakers', 'Boots', 'Sandals', 'Running Shoes', 'Dress Shoes'],
    accessories: ['Bags', 'Jewelry', 'Watches', 'Sunglasses', 'Belts', 'Hats'],
  };
  
  return categoryMap[category.toLowerCase()] || POPULAR_SEARCHES;
}