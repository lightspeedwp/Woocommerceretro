/**
 * Single Product Blocks - WordPress Block Library Components
 * 
 * Optimized for Figma Make parser:
 * 1. No modern export-from syntax
 * 2. Named imports/exports
 */

import * as ProductAddToCartModule from './ProductAddToCart';
import * as ProductBreadcrumbsModule from './ProductBreadcrumbs';
import * as ProductGalleryModule from './ProductGallery';
import * as ProductInfoModule from './ProductInfo';
import * as ProductMetaModule from './ProductMeta';
import * as ProductPriceModule from './ProductPrice';
import * as ProductRatingModule from './ProductRating';
import * as ProductSummaryModule from './ProductSummary';
import * as ProductTabsModule from './ProductTabs';
import * as ProductTitleModule from './ProductTitle';
import * as RelatedProductsModule from './RelatedProducts';
import * as ReviewsTabModule from './ReviewsTab';
import * as StoreNoticesModule from './StoreNotices';

export var ProductAddToCart = ProductAddToCartModule.ProductAddToCart;
export var ProductBreadcrumbs = ProductBreadcrumbsModule.ProductBreadcrumbs;
export var ProductGallery = ProductGalleryModule.ProductGallery;
export var ProductInfo = ProductInfoModule.ProductInfo;
export var ProductMeta = ProductMetaModule.ProductMeta;
export var ProductPrice = ProductPriceModule.ProductPrice;
export var ProductRating = ProductRatingModule.ProductRating;
export var ProductSummary = ProductSummaryModule.ProductSummary;
export var ProductTabs = ProductTabsModule.ProductTabs;
export var ProductTitle = ProductTitleModule.ProductTitle;
export var RelatedProducts = RelatedProductsModule.RelatedProducts;
export var ReviewsTab = ReviewsTabModule.ReviewsTab;
export var StoreNotices = StoreNoticesModule.StoreNotices;
