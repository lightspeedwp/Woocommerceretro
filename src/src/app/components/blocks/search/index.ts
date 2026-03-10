/**
 * Search Blocks - WordPress Block Library Components
 * 
 * Optimized for Figma Make parser:
 * 1. No modern export-from syntax
 * 2. Named imports/exports
 */

import * as SearchAutocompleteModule from './SearchAutocomplete';
import * as ProductSearchModule from './ProductSearch';

export var SearchAutocomplete = SearchAutocompleteModule.SearchAutocomplete;
export var ProductSearch = ProductSearchModule.ProductSearch;
