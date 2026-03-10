import React from 'react';
import { Minus, Plus } from '@phosphor-icons/react';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as ReactRouterModule from 'react-router';

var useState = React.useState;
var useEffect = React.useEffect;
var Link = ReactRouterModule.Link;
var useParams = ReactRouterModule.useParams;
var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;

import * as ProductGalleryModule from '../blocks/single-product/ProductGallery';
import * as ProductTabsSectionModule from '../patterns/ProductTabsSection';
import * as RelatedProductsSectionModule from '../patterns/RelatedProductsSection';
import * as RecentlyViewedSectionModule from '../patterns/RecentlyViewedSection';
import * as NewsletterCTAModule from '../patterns/NewsletterCTA';
import * as RecentlyViewedHookModule from '../../hooks/useRecentlyViewed';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as ProductsDataModule from '../../data/products';
import * as ReviewsDataModule from '../../data/reviews';

var ProductGallery = ProductGalleryModule.ProductGallery;
var ProductTabsSection = ProductTabsSectionModule.ProductTabsSection;
var RelatedProductsSection = RelatedProductsSectionModule.RelatedProductsSection;
var RecentlyViewedSection = RecentlyViewedSectionModule.RecentlyViewedSection;
var NewsletterCTA = NewsletterCTAModule.NewsletterCTA;
var useRecentlyViewed = RecentlyViewedHookModule.useRecentlyViewed;
var Button = ButtonsModule.Button;
var getProductById = ProductsDataModule.getProductById;
var getRelatedProducts = ProductsDataModule.getRelatedProducts;
var PRODUCTS = ProductsDataModule.PRODUCTS;
var getReviewsByProductId = ReviewsDataModule.getReviewsByProductId;
var defaultReview = ReviewsDataModule.defaultReview;

/**
 * SingleProduct Template - Funky Redesign (Phase 4)
 *
 * WooCommerce single product detail page with funky treatments.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. Standard function declarations
 * 3. Manual prop assignment
 * 4. No spread operators
 */
function SingleProduct() {
  var quantityState = useState(1);
  var quantity = quantityState[0];
  var setQuantity = quantityState[1];
  var tabState = useState('description');
  var activeTab = tabState[0];
  var setActiveTab = tabState[1];
  var ratingState = useState(0);
  var reviewRating = ratingState[0];
  var setReviewRating = ratingState[1];
  var textState = useState('');
  var reviewText = textState[0];
  var setReviewText = textState[1];
  
  var recentlyViewed = useRecentlyViewed();
  var addRecentlyViewed = recentlyViewed.addRecentlyViewed;
  
  var params = useParams();
  var id = params.id;

  // Look up product from centralised data; fall back to first product
  var PRODUCT = (id ? getProductById(id) : undefined) || PRODUCTS[0];

  // Map reviews from centralised data
  var productReviews = getReviewsByProductId(PRODUCT.id);
  
  var displayReviews = [];
  if (productReviews.length > 0) {
    for (var i = 0; i < productReviews.length; i++) {
      var r = productReviews[i];
      displayReviews.push({ 
        id: r.id, 
        author: r.author, 
        date: r.date, 
        rating: r.rating, 
        comment: r.content 
      });
    }
  } else {
    displayReviews.push({ 
      id: defaultReview.id, 
      author: defaultReview.author, 
      date: defaultReview.date, 
      rating: defaultReview.rating, 
      comment: defaultReview.content 
    });
  }

  // Related products from same category
  var relatedProducts = getRelatedProducts(PRODUCT.id, 4);
  
  var relatedProductsMapped = [];
  for (var i = 0; i < relatedProducts.length; i++) {
    var p = relatedProducts[i];
    relatedProductsMapped.push({
      id: p.id,
      name: p.name,
      price: p.price,
      salePrice: p.salePrice,
      image: p.image,
      badges: p.onSale ? ['Sale'] : [],
      inStock: true
    });
  }

  // Recently viewed mock (manual slice for compatibility)
  var recentlyViewedProducts = [];
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id !== PRODUCT.id && recentlyViewedProducts.length < 3) {
      var p = PRODUCTS[i];
      recentlyViewedProducts.push({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        inStock: true
      });
    }
  }

  function handleQuantityChange(delta) {
    setQuantity(Math.max(1, quantity + delta));
  }

  function handleAddToCart() {
    /* logic */
  }

  function handleReviewSubmit(e) {
    e.preventDefault();
  }

  var badges = [];

  // Track this product as recently viewed
  useEffect(function() {
    addRecentlyViewed({
      id: PRODUCT.id,
      name: PRODUCT.name,
      price: PRODUCT.price,
      salePrice: PRODUCT.salePrice,
      image: PRODUCT.image,
      inStock: PRODUCT.inStock
    });
  }, [PRODUCT.id, addRecentlyViewed]);

  var attributes = [
    { 
      name: 'Weight', 
      options: [PRODUCT.weight ? PRODUCT.weight + ' kg' : 'N/A'] 
    },
    {
      name: 'Dimensions',
      options: [PRODUCT.dimensions
        ? PRODUCT.dimensions.length + ' x ' + PRODUCT.dimensions.width + ' x ' + PRODUCT.dimensions.height + ' cm'
        : 'N/A']
    }
  ];

  var galleryImages = PRODUCT.images || [PRODUCT.image];

  return React.createElement(Layout, null,
    React.createElement('div', { className: "single-product" },
      React.createElement(Container, null,
        React.createElement('div', { className: "single-product__wrapper" },
          
          /* -- BREADCRUMBS ------------------------------------ */
          React.createElement('nav', { 
            className: "single-product__breadcrumb", 
            "aria-label": "Breadcrumb" 
          },
            React.createElement('ol', { className: "single-product__breadcrumb-list" },
              React.createElement('li', null,
                React.createElement(Link, { 
                  to: "/", 
                  className: "single-product__breadcrumb-link" 
                }, "Home")
              ),
              React.createElement('li', { 
                className: "single-product__breadcrumb-separator", 
                "aria-hidden": "true" 
              }, "/"),
              React.createElement('li', null,
                React.createElement(Link, { 
                  to: "/shop", 
                  className: "single-product__breadcrumb-link" 
                }, "Shop")
              ),
              React.createElement('li', { 
                className: "single-product__breadcrumb-separator", 
                "aria-hidden": "true" 
              }, "/"),
              React.createElement('li', null,
                React.createElement(Link, { 
                  to: "/shop/category/" + PRODUCT.categorySlug, 
                  className: "single-product__breadcrumb-link" 
                }, PRODUCT.category)
              ),
              React.createElement('li', { 
                className: "single-product__breadcrumb-separator", 
                "aria-hidden": "true" 
              }, "/"),
              React.createElement('li', { 
                className: "single-product__breadcrumb-current" 
              }, PRODUCT.name)
            )
          ),

          /* -- PRODUCT MAIN SECTION --------------------------- */
          React.createElement('div', { className: "single-product__main" },
            
            /* Gallery with glow frame */
            React.createElement('div', { className: "single-product__gallery" },
              React.createElement('div', { className: "single-product__gallery-frame" },
                PRODUCT.onSale && React.createElement('span', { className: "single-product__sale-badge" }, "Sale"),
                React.createElement(ProductGallery, {
                  images: galleryImages,
                  productName: PRODUCT.name
                })
              )
            ),

            /* Details panel */
            React.createElement('div', { className: "single-product__details" },
              
              /* Title */
              React.createElement('h1', { className: "single-product__title" }, PRODUCT.name),

              /* Price */
              React.createElement('div', { className: "single-product__price-wrapper" },
                PRODUCT.salePrice ? React.createElement('div', { className: "single-product__price-sale" },
                  React.createElement('span', { className: "single-product__price-original" }, "$" + PRODUCT.price.toFixed(2)),
                  React.createElement('span', { className: "single-product__price-current" }, "$" + PRODUCT.salePrice.toFixed(2))
                ) : React.createElement('span', { className: "single-product__price-current" }, "$" + PRODUCT.price.toFixed(2))
              ),

              /* Short Description */
              React.createElement('p', { className: "single-product__description" }, PRODUCT.shortDescription),

              /* Quantity & Add to Cart */
              React.createElement('div', { className: "single-product__cart-actions" },
                React.createElement('div', { className: "single-product__quantity" },
                  React.createElement('button', {
                    type: "button",
                    onClick: function() { handleQuantityChange(-1); },
                    className: "single-product__quantity-btn",
                    disabled: quantity <= 1,
                    "aria-label": "Decrease quantity"
                  }, React.createElement(Minus, { size: 16 })),
                  React.createElement('input', {
                    type: "number",
                    value: quantity,
                    onChange: function(e) { 
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1)); 
                    },
                    className: "single-product__quantity-input",
                    min: "1",
                    "aria-label": "Product quantity"
                  }),
                  React.createElement('button', {
                    type: "button",
                    onClick: function() { handleQuantityChange(1); },
                    className: "single-product__quantity-btn",
                    "aria-label": "Increase quantity"
                  }, React.createElement(Plus, { size: 16 }))
                ),

                React.createElement('div', { className: "single-product__add-to-cart" },
                  React.createElement(Button, {
                    onClick: handleAddToCart,
                    variant: "primary",
                    size: "lg",
                    fullWidth: true,
                    className: "funky-spring-hover"
                  }, "Add to cart")
                )
              ),

              /* Meta Information */
              React.createElement('div', { className: "single-product__meta" },
                React.createElement('div', { className: "single-product__meta-item" },
                  React.createElement('span', { className: "single-product__meta-label" }, "SKU:"),
                  React.createElement('span', { className: "single-product__meta-value" }, PRODUCT.sku)
                ),
                React.createElement('div', { className: "single-product__meta-item" },
                  React.createElement('span', { className: "single-product__meta-label" }, "Category:"),
                  React.createElement(Link, { 
                    to: "/shop/category/" + PRODUCT.categorySlug, 
                    className: "single-product__meta-link" 
                  }, PRODUCT.category)
                )
              )
            )
          ),

          /* -- TABS ------------------------------------------- */
          React.createElement('div', { className: "single-product__tabs" },
            React.createElement('hr', { className: "single-product__tabs-divider", "aria-hidden": "true" }),
            React.createElement(ProductTabsSection, {
              activeTab: activeTab,
              setActiveTab: setActiveTab,
              description: PRODUCT.description,
              reviews: displayReviews,
              reviewRating: reviewRating,
              setReviewRating: setReviewRating,
              reviewText: reviewText,
              setReviewText: setReviewText,
              handleReviewSubmit: handleReviewSubmit,
              attributes: attributes
            })
          ),

          /* -- RELATED PRODUCTS ------------------------------- */
          React.createElement('div', { className: "single-product__related" },
            React.createElement(RelatedProductsSection, {
              products: relatedProductsMapped,
              heading: "Related products"
            })
          ),

          /* -- NEWSLETTER ------------------------------------- */
          React.createElement('div', { className: "single-product__newsletter", style: { margin: 'var(--wp--preset--spacing--80) 0' } },
            React.createElement(NewsletterCTA, { variant: 'banner' })
          ),

          /* -- RECENTLY VIEWED -------------------------------- */
          React.createElement('div', { className: "single-product__recently-viewed" },
            React.createElement(RecentlyViewedSection, {
              products: recentlyViewedProducts
            })
          )
        )
      )
    )
  );
}

export default SingleProduct;