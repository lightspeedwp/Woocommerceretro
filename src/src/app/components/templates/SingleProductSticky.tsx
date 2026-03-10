import React from 'react';
import * as ReactRouterModule from 'react-router';
import { Star, Heart, ShareNetwork, Check, Truck, ArrowsClockwise, ShieldCheck, Plus, Minus } from '@phosphor-icons/react';

var useParams = ReactRouterModule.useParams;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as RelatedProductsSectionModule from '../patterns/RelatedProductsSection';
import * as ProductsDataModule from '../../data/products';
import * as CartContextModule from '../../contexts/CartContext';
import * as WishlistContextModule from '../../contexts/WishlistContext';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var RelatedProductsSection = RelatedProductsSectionModule.RelatedProductsSection;
var products = ProductsDataModule.products;
var useCart = CartContextModule.useCart;
var useWishlist = WishlistContextModule.useWishlist;

/**
 * SingleProductSticky Template — Funky Redesign (Phase 4)
 * 
 * Product detail page with sticky add-to-cart sidebar.
 *
 * @template
 */
export function SingleProductSticky() {
  var params = useParams();
  var slug = params.slug;
  var cartCtx = useCart();
  var addItem = cartCtx.addItem;
  var wishlistCtx = useWishlist();
  var addToWishlist = wishlistCtx.addItem;
  var isInWishlist = wishlistCtx.isInWishlist;
  
  var imgState = React.useState(0);
  var selectedImage = imgState[0];
  var setSelectedImage = imgState[1];
  var qtyState = React.useState(1);
  var quantity = qtyState[0];
  var setQuantity = qtyState[1];
  var addedState = React.useState(false);
  var isAddedToCart = addedState[0];
  var setIsAddedToCart = addedState[1];

  var product = products[0];

  if (!product) {
    return React.createElement(Layout, null,
      React.createElement(Container, null,
        React.createElement('div', { className: "sp-sticky__not-found" },
          React.createElement(Typography, { variant: "h2" }, "Product not found")
        )
      )
    );
  }

  var productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  function handleAddToCart() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
    setIsAddedToCart(true);
    setTimeout(function() { setIsAddedToCart(false); }, 2000);
  }

  function handleAddToWishlist() {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  }

  return React.createElement(Layout, null,
    React.createElement(Container, null,
      React.createElement('div', { className: "sp-sticky" },
        React.createElement('div', { className: "sp-sticky__layout" },
          /* Left: Image Gallery */
          React.createElement('div', { className: "sp-sticky__gallery" },
            React.createElement('div', { className: "sp-sticky__main-image" },
              React.createElement('img', {
                src: productImages[selectedImage],
                alt: product.name,
                className: "sp-sticky__main-img"
              })
            ),

            React.createElement('div', { className: "sp-sticky__thumbs" },
              productImages.map(function(image, index) {
                return React.createElement('button', {
                  key: index,
                  onClick: function() { setSelectedImage(index); },
                  className: 'sp-sticky__thumb' + (selectedImage === index ? ' sp-sticky__thumb--active' : '')
                },
                  React.createElement('img', {
                    src: image,
                    alt: product.name + ' view ' + (index + 1),
                    className: "sp-sticky__thumb-img"
                  })
                );
              })
            ),

            /* Desktop Accordions */
            React.createElement('div', { className: "sp-sticky__details sp-sticky__details--desktop" },
              React.createElement('details', { className: "sp-sticky__accordion" },
                React.createElement('summary', { className: "sp-sticky__accordion-trigger" },
                  React.createElement('span', null, "Product Description"),
                  React.createElement(Plus, { className: "sp-sticky__accordion-icon--closed", size: 20 }),
                  React.createElement(Minus, { className: "sp-sticky__accordion-icon--open", size: 20 })
                ),
                React.createElement('div', { className: "sp-sticky__accordion-content" },
                  React.createElement('p', { className: "sp-sticky__accordion-text" }, product.description),
                  React.createElement('p', { className: "sp-sticky__accordion-text" },
                    "This premium product features high-quality materials and expert craftsmanship. Perfect for daily use, it combines functionality with style."
                  )
                )
              ),

              React.createElement('details', { className: "sp-sticky__accordion" },
                React.createElement('summary', { className: "sp-sticky__accordion-trigger" },
                  React.createElement('span', null, "Specifications"),
                  React.createElement(Plus, { className: "sp-sticky__accordion-icon--closed", size: 20 }),
                  React.createElement(Minus, { className: "sp-sticky__accordion-icon--open", size: 20 })
                ),
                React.createElement('div', { className: "sp-sticky__accordion-content" },
                  React.createElement('dl', { className: "sp-sticky__specs" },
                    React.createElement('div', { className: "sp-sticky__spec-row" },
                      React.createElement('dt', { className: "sp-sticky__spec-label" }, "Material:"),
                      React.createElement('dd', { className: "sp-sticky__spec-value" }, "Premium Quality")
                    ),
                    React.createElement('div', { className: "sp-sticky__spec-row" },
                      React.createElement('dt', { className: "sp-sticky__spec-label" }, "Color:"),
                      React.createElement('dd', { className: "sp-sticky__spec-value" }, "Multiple Options")
                    ),
                    React.createElement('div', { className: "sp-sticky__spec-row" },
                      React.createElement('dt', { className: "sp-sticky__spec-label" }, "Warranty:"),
                      React.createElement('dd', { className: "sp-sticky__spec-value" }, "1 Year")
                    )
                  )
                )
              ),

              React.createElement('details', { className: "sp-sticky__accordion" },
                React.createElement('summary', { className: "sp-sticky__accordion-trigger" },
                  React.createElement('span', null, "Shipping & Returns"),
                  React.createElement(Plus, { className: "sp-sticky__accordion-icon--closed", size: 20 }),
                  React.createElement(Minus, { className: "sp-sticky__accordion-icon--open", size: 20 })
                ),
                React.createElement('div', { className: "sp-sticky__accordion-content" },
                  React.createElement('p', { className: "sp-sticky__accordion-text" },
                    "Free shipping on orders over $50. Standard delivery in 3-5 business days."
                  ),
                  React.createElement('p', { className: "sp-sticky__accordion-text" },
                    "30-day returns policy. Items must be unused and in original packaging."
                  )
                )
              )
            )
          ),

          /* Right: Sticky Purchase Panel */
          React.createElement('div', { className: "sp-sticky__sidebar" },
            React.createElement('div', { className: "sp-sticky__sidebar-sticky" },
              React.createElement('div', { className: "sp-sticky__panel" },
                React.createElement('div', { className: "sp-sticky__info" },
                  product.badge ? React.createElement('span', { className: "sp-sticky__badge" }, product.badge) : null,
                  React.createElement(Typography, { variant: "h2" }, product.name),

                  /* Rating */
                  React.createElement('div', { className: "sp-sticky__rating" },
                    React.createElement('div', { className: "sp-sticky__stars" },
                      [1, 2, 3, 4, 5].map(function(star) {
                        return React.createElement(Star, {
                          key: star,
                          size: 18,
                          weight: star <= 4 ? 'fill' : 'regular',
                          className: star <= 4 ? 'sp-sticky__star--filled' : 'sp-sticky__star--empty'
                        });
                      })
                    ),
                    React.createElement('span', { className: "sp-sticky__review-count" },
                      React.createElement('small', null, "(4.0) 128 reviews")
                    )
                  ),

                  /* Price */
                  React.createElement('div', { className: "sp-sticky__price-block" },
                    React.createElement('div', { className: "sp-sticky__price-row" },
                      React.createElement('span', { className: "sp-sticky__price" }, "$" + (product.salePrice || product.price)),
                      product.salePrice && product.salePrice < product.price ? React.createElement('span', { className: "sp-sticky__price--original" }, "$" + product.price) : null
                    ),
                    product.salePrice && product.salePrice < product.price ? React.createElement('p', { className: "sp-sticky__savings" },
                      React.createElement('small', null, React.createElement('strong', null, "Save $" + (product.price - product.salePrice).toFixed(2)))
                    ) : null
                  ),

                  /* Stock */
                  React.createElement('div', { className: "sp-sticky__stock" },
                    product.inStock ? React.createElement(React.Fragment, null,
                      React.createElement(Check, { size: 18, weight: 'bold', className: "sp-sticky__stock-icon--in" }),
                      React.createElement('span', { className: "sp-sticky__stock-text--in" },
                        React.createElement('small', null, React.createElement('strong', null, "In Stock"))
                      )
                    ) : React.createElement('span', { className: "sp-sticky__stock-text--out" },
                      React.createElement('small', null, React.createElement('strong', null, "Out of Stock"))
                    )
                  )
                ),

                /* Quantity */
                React.createElement('div', { className: "sp-sticky__quantity" },
                  React.createElement('label', { className: "sp-sticky__quantity-label" },
                    React.createElement('small', null, React.createElement('strong', null, "Quantity"))
                  ),
                  React.createElement('div', { className: "sp-sticky__quantity-controls" },
                    React.createElement('button', {
                      onClick: function() { setQuantity(Math.max(1, quantity - 1)); },
                      className: "sp-sticky__qty-btn",
                      'aria-label': "Decrease quantity"
                    }, React.createElement(Minus, { size: 18 })),
                    React.createElement('input', {
                      type: "number",
                      value: quantity,
                      onChange: function(e) { setQuantity(Math.max(1, parseInt(e.target.value) || 1)); },
                      className: "sp-sticky__qty-input"
                    }),
                    React.createElement('button', {
                      onClick: function() { setQuantity(quantity + 1); },
                      className: "sp-sticky__qty-btn",
                      'aria-label': "Increase quantity"
                    }, React.createElement(Plus, { size: 18 }))
                  )
                ),

                /* Actions */
                React.createElement('div', { className: "sp-sticky__actions" },
                  React.createElement('button', {
                    onClick: handleAddToCart,
                    disabled: !product.inStock,
                    className: "sp-sticky__add-to-cart"
                  },
                    isAddedToCart ? React.createElement(React.Fragment, null,
                      React.createElement(Check, { size: 20, weight: 'bold' }),
                      React.createElement('span', null, React.createElement('strong', null, "Added to Cart!"))
                    ) : React.createElement('span', null, React.createElement('strong', null, "Add to Cart"))
                  ),

                  React.createElement('div', { className: "sp-sticky__secondary-actions" },
                    React.createElement('button', {
                      onClick: handleAddToWishlist,
                      className: "sp-sticky__action-btn"
                    },
                      React.createElement(Heart, {
                        size: 18,
                        weight: isInWishlist(product.id) ? 'fill' : 'regular',
                        className: isInWishlist(product.id) ? 'sp-sticky__heart--active' : ''
                      }),
                      React.createElement('span', null, React.createElement('small', null, "Wishlist"))
                    ),
                    React.createElement('button', { className: "sp-sticky__action-btn" },
                      React.createElement(ShareNetwork, { size: 18 }),
                      React.createElement('span', null, React.createElement('small', null, "Share"))
                    )
                  )
                ),

                /* Trust Badges */
                React.createElement('div', { className: "sp-sticky__trust" },
                  React.createElement('div', { className: "sp-sticky__trust-item" },
                    React.createElement(Truck, { size: 20, weight: 'duotone', className: "sp-sticky__trust-icon" }),
                    React.createElement('div', null,
                      React.createElement('p', { className: "sp-sticky__trust-title" }, React.createElement('small', null, "Free Shipping")),
                      React.createElement('p', { className: "sp-sticky__trust-desc" }, React.createElement('small', null, "On orders over $50"))
                    )
                  ),
                  React.createElement('div', { className: "sp-sticky__trust-item" },
                    React.createElement(ArrowsClockwise, { size: 20, weight: 'duotone', className: "sp-sticky__trust-icon" }),
                    React.createElement('div', null,
                      React.createElement('p', { className: "sp-sticky__trust-title" }, React.createElement('small', null, "Easy Returns")),
                      React.createElement('p', { className: "sp-sticky__trust-desc" }, React.createElement('small', null, "30-day return policy"))
                    )
                  ),
                  React.createElement('div', { className: "sp-sticky__trust-item" },
                    React.createElement(ShieldCheck, { size: 20, weight: 'duotone', className: "sp-sticky__trust-icon" }),
                    React.createElement('div', null,
                      React.createElement('p', { className: "sp-sticky__trust-title" }, React.createElement('small', null, "Secure Payment")),
                      React.createElement('p', { className: "sp-sticky__trust-desc" }, React.createElement('small', null, "SSL encrypted checkout"))
                    )
                  )
                )
              )
            )
          )
        ),

        /* Mobile Details */
        React.createElement('div', { className: "sp-sticky__details sp-sticky__details--mobile" },
          React.createElement('details', { className: "sp-sticky__accordion" },
            React.createElement('summary', { className: "sp-sticky__accordion-trigger" },
              React.createElement('span', null, "Product Description"),
              React.createElement(Plus, { className: "sp-sticky__accordion-icon--closed", size: 20 }),
              React.createElement(Minus, { className: "sp-sticky__accordion-icon--open", size: 20 })
            ),
            React.createElement('div', { className: "sp-sticky__accordion-content" },
              React.createElement('p', { className: "sp-sticky__accordion-text" }, product.description)
            )
          )
        ),

        /* Related Products */
        React.createElement('div', { className: "sp-sticky__related" },
          React.createElement(RelatedProductsSection, { currentProductId: product.id })
        )
      )
    )
  );
}