/**
 * QuickView.tsx - Quick View Pattern
 * 
 * Modal for quick product viewing and interaction.
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. No optional chaining (?.)
 * 5. Named functions
 * 6. ASCII only
 */

import React from 'react';
var useEffect = React.useEffect;
var useState = React.useState;
var useRef = React.useRef;
import * as QuickViewContextModule from '../../contexts/QuickViewContext';
var useQuickView = QuickViewContextModule.useQuickView;
import * as CartContextModule from '../../contexts/CartContext';
var useCart = CartContextModule.useCart;
import * as WishlistContextModule from '../../contexts/WishlistContext';
var useWishlist = WishlistContextModule.useWishlist;
import * as ReactRouterModule from 'react-router';
var useNavigate = ReactRouterModule.useNavigate;
import * as ImageFallbackModule from '../figma/ImageWithFallback';
var ImageWithFallback = ImageFallbackModule.ImageWithFallback;
import * as ButtonsModule from '../blocks/design/Buttons';
var Button = ButtonsModule.Button;
import * as VariantSelectorModule from '../blocks/product/VariantSelector';
var VariantSelector = VariantSelectorModule.VariantSelector;
import * as VariantHookModule from '../../hooks/useVariantSelection';
var useVariantSelection = VariantHookModule.useVariantSelection;
import { X, Heart, Star, ShoppingCart, ArrowSquareOut as ExternalLink, Minus, Plus, Check, WarningCircle as AlertCircle } from '@phosphor-icons/react';
import * as SonnerModule from 'sonner@2.0.3';
var toast = SonnerModule.toast;

export function QuickView() {
  var quickView = useQuickView();
  var product = quickView.product;
  var isOpen = quickView.isOpen;
  var closeQuickView = quickView.closeQuickView;
  
  var cart = useCart();
  var addToCart = cart.addToCart;
  
  var wishlist = useWishlist();
  var addToWishlist = wishlist.addToWishlist;
  var removeFromWishlist = wishlist.removeFromWishlist;
  var isInWishlist = wishlist.isInWishlist;
  
  var navigate = useNavigate();
  
  var _q = useState(1);
  var quantity = _q[0];
  var setQuantity = _q[1];
  var _ai = useState(0);
  var activeImage = _ai[0];
  var setActiveImage = _ai[1];
  var modalRef = useRef(null);
  var closeButtonRef = useRef(null);

  var isVariable = product && product.type === 'variable';
  var variantSelection = isVariable ? useVariantSelection(product) : null;
  var inWishlist = product ? isInWishlist(product.id) : false;

  useEffect(function() {
    if (product) {
      setQuantity(1);
      setActiveImage(0);
    }
  }, [product]);

  useEffect(function() {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  useEffect(function() {
    var handleKeyDown = function(e) {
      if (e.key === 'Escape' && isOpen) {
        closeQuickView();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return function() { document.removeEventListener('keydown', handleKeyDown); };
  }, [isOpen, closeQuickView]);

  var handleBackdropClick = function(e) {
    if (e.target === e.currentTarget) {
      closeQuickView();
    }
  };

  if (!isOpen || !product) return null;

  var images = product.images || [product.image];
  var currentImage = images[activeImage];

  var matchedVariation = variantSelection ? variantSelection.matchedVariation : null;
  var currentPrice = matchedVariation 
    ? (matchedVariation.salePrice || matchedVariation.price)
    : (product.salePrice || product.price);
  var regularPrice = matchedVariation ? matchedVariation.price : product.price;
  var isOnSale = matchedVariation ? !!matchedVariation.salePrice : !!product.salePrice;

  var stockStatus = isVariable && variantSelection
    ? (variantSelection.matchedVariation
      ? (variantSelection.matchedVariation.inStock
        ? (variantSelection.matchedVariation.stock + ' in stock')
        : 'Out of stock')
      : 'Select options')
    : (product.inStock ? 'In stock' : 'Out of stock');

  var canAddToCart = isVariable && variantSelection ? variantSelection.canAddToCart : product.inStock;

  var handleQuantityChange = function(delta) {
    var maxStock = matchedVariation ? matchedVariation.stock : 99;
    setQuantity(Math.max(1, Math.min(quantity + delta, maxStock)));
  };

  var handleAddToCart = function() {
    if (!canAddToCart) {
      if (isVariable && variantSelection) {
        toast.error(variantSelection.errors[0] || 'Please select all options');
      }
      return;
    }

    var cartItem;
    if (isVariable && matchedVariation && variantSelection) {
      var selectedVals = [];
      var keys = Object.keys(variantSelection.selected);
      for (var i = 0; i < keys.length; i++) {
        selectedVals.push(variantSelection.selected[keys[i]]);
      }
      var variationName = selectedVals.join(', ');
      cartItem = {
        id: matchedVariation.id,
        name: product.name + ' - ' + variationName,
        price: matchedVariation.price,
        salePrice: matchedVariation.salePrice,
        image: product.image,
        inStock: matchedVariation.inStock,
      };
    } else {
      cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        salePrice: product.salePrice,
        image: product.image,
        inStock: product.inStock,
      };
    }

    addToCart(cartItem, quantity);
    toast.success('Added to cart!', { duration: 2000 });
    closeQuickView();
  };

  var handleToggleWishlist = function() {
    if (inWishlist) {
      removeFromWishlist(product.id);
      toast.info('Removed from wishlist');
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        inStock: product.inStock,
      });
      toast.success('Added to wishlist!');
    }
  };

  var handleViewFullProduct = function() {
    var productUrl = product.type === 'variable' 
      ? '/variable-product/' + product.slug
      : '/product/' + product.id;
    closeQuickView();
    navigate(productUrl);
  };

  var handleDecrement = function() { handleQuantityChange(-1); };
  var handleIncrement = function() { handleQuantityChange(1); };

  var starArray = [0, 1, 2, 3, 4];

  /* UI Parts */
  var closeButton = React.createElement('button', {
    ref: closeButtonRef,
    onClick: closeQuickView,
    className: "qv-close funky-modal-close",
    'aria-label': "Close quick view"
  }, React.createElement(X, { size: 20 }));

  var saleBadge = isOnSale ? React.createElement('span', { className: "qv-sale-badge wp-badge-sale" }, 
    React.createElement('strong', null, 'Sale!')
  ) : null;

  var mainImage = React.createElement('div', { className: "qv-main-image" },
    React.createElement(ImageWithFallback, {
      src: currentImage,
      alt: product.name,
      className: "qv-main-img funky-image-glow"
    })
  );

  var thumbnails = images.length > 1 ? React.createElement('div', { className: "qv-thumbs" },
    images.map(function(img, index) {
      var isThumbActive = activeImage === index;
      var handleThumbClick = function() { setActiveImage(index); };
      return React.createElement('button', {
        key: index,
        onClick: handleThumbClick,
        className: 'qv-thumb ' + (isThumbActive ? 'qv-thumb--active' : '')
      },
        React.createElement(ImageWithFallback, {
          src: img,
          alt: product.name + ' ' + (index + 1),
          className: "qv-thumb-img"
        })
      );
    })
  ) : null;

  var gallery = React.createElement('div', { className: "qv-gallery" }, [saleBadge, mainImage, thumbnails]);

  var category = product.category ? React.createElement('div', { className: "qv-category" },
    React.createElement('small', null, React.createElement('strong', { className: "funky-text-cyan" }, product.category))
  ) : null;

  var title = React.createElement('h2', { id: "quick-view-title", className: "qv-title funky-title" }, product.name);

  var rating = product.rating ? React.createElement('div', { className: "qv-rating" },
    React.createElement('div', { className: "qv-stars" },
      starArray.map(function(i) {
        var isFilled = i < Math.floor(product.rating);
        return React.createElement(Star, {
          key: i,
          size: 14,
          fill: isFilled ? "currentColor" : "none",
          className: isFilled ? 'qv-star--filled' : 'qv-star--empty'
        });
      })
    ),
    React.createElement('small', { className: "qv-review-count" }, '(' + product.reviewCount + ' reviews)')
  ) : null;

  var priceMax = product.priceMax;
  var priceBlock = React.createElement('div', { className: "qv-price-block" },
    (isVariable && variantSelection && !variantSelection.isComplete) ? React.createElement('span', { className: "qv-price" },
      '£' + product.price.toFixed(2) + ' - £' + (priceMax ? priceMax.toFixed(2) : product.price.toFixed(2))
    ) : React.createElement('div', { className: "qv-price-row" }, [
      isOnSale ? React.createElement('span', { className: "qv-price--original" }, '£' + regularPrice.toFixed(2)) : null,
      React.createElement('span', { className: "qv-price funky-text-pink" }, '£' + currentPrice.toFixed(2))
    ])
  );

  var description = product.shortDescription ? React.createElement('p', { className: "qv-description" }, product.shortDescription) : null;

  var variants = (isVariable && product.attributes && variantSelection) ? React.createElement('div', { className: "qv-variants" },
    product.attributes
      .filter(function(attr) { return attr.variation; })
      .map(function(attribute) {
        return React.createElement(VariantSelector, {
          key: attribute.slug,
          attribute: attribute,
          selected: variantSelection.selected,
          onChange: variantSelection.selectAttribute
        });
      })
  ) : null;

  var errors = (isVariable && variantSelection && variantSelection.errors.length > 0) ? React.createElement('div', { className: "qv-errors" },
    variantSelection.errors.map(function(error, index) {
      return React.createElement('div', { key: index, className: "qv-error-item" }, [
        React.createElement(AlertCircle, { size: 16, className: "qv-error-icon" }),
        React.createElement('small', null, error)
      ]);
    })
  ) : null;

  var stockIcon = (product.inStock || (variantSelection && variantSelection.matchedVariation && variantSelection.matchedVariation.inStock)) 
    ? React.createElement(Check, { size: 16, className: "qv-stock-icon--in" })
    : React.createElement(AlertCircle, { size: 16, className: "qv-stock-icon--out" });
  
  var stockTextClass = (product.inStock || (variantSelection && variantSelection.matchedVariation && variantSelection.matchedVariation.inStock))
    ? "qv-stock-text--in"
    : "qv-stock-text--out";

  var stock = React.createElement('div', { className: "qv-stock" }, [
    stockIcon,
    React.createElement('small', { className: stockTextClass }, stockStatus)
  ]);

  var quantityRow = React.createElement('div', { className: "qv-quantity-row" }, [
    React.createElement('span', { className: "qv-quantity-label" },
      React.createElement('small', null, React.createElement('strong', null, 'Quantity:'))
    ),
    React.createElement('div', { className: "qv-quantity-controls funky-input-glow" }, [
      React.createElement('button', {
        onClick: handleDecrement,
        className: "qv-qty-btn",
        'aria-label': "Decrease quantity",
        disabled: !canAddToCart
      }, React.createElement(Minus, { size: 16 })),
      React.createElement('span', { className: "qv-qty-value" }, quantity),
      React.createElement('button', {
        onClick: handleIncrement,
        className: "qv-qty-btn",
        'aria-label': "Increase quantity",
        disabled: !canAddToCart
      }, React.createElement(Plus, { size: 16 }))
    ])
  ]);

  var addToCartBtn = React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: handleAddToCart,
    disabled: !canAddToCart,
    className: "qv-add-to-cart funky-btn-neon"
  }, [
    React.createElement(ShoppingCart, { size: 20 }),
    canAddToCart ? 'Add to Cart' : 'Select Options'
  ]);

  var secondaryActions = React.createElement('div', { className: "qv-secondary-actions" }, [
    React.createElement('button', {
      onClick: handleToggleWishlist,
      className: 'qv-action-btn funky-spring-hover ' + (inWishlist ? 'qv-action-btn--wishlisted' : '')
    }, [
      React.createElement(Heart, { size: 18, fill: inWishlist ? 'currentColor' : 'none' }),
      React.createElement('small', null, React.createElement('strong', null, 'Wishlist'))
    ]),
    React.createElement('button', {
      onClick: handleViewFullProduct,
      className: "qv-action-btn funky-spring-hover"
    }, [
      React.createElement(ExternalLink, { size: 18 }),
      React.createElement('small', null, React.createElement('strong', null, 'Full Details'))
    ])
  ]);

  var actions = React.createElement('div', { className: "qv-actions" }, [quantityRow, addToCartBtn, secondaryActions]);

  var skuVal = matchedVariation ? matchedVariation.sku : product.sku;
  var sku = skuVal ? React.createElement('div', { className: "qv-sku" },
    React.createElement('small', null, 'SKU: ' + skuVal)
  ) : null;

  var info = React.createElement('div', { className: "qv-info" }, [
    category,
    title,
    rating,
    priceBlock,
    description,
    variants,
    errors,
    stock,
    actions,
    sku
  ]);

  var grid = React.createElement('div', { className: "qv-grid" }, [gallery, info]);
  var scroll = React.createElement('div', { className: "qv-scroll" }, grid);
  var modal = React.createElement('div', { ref: modalRef, className: "qv-modal funky-modal" }, [closeButton, scroll]);

  return React.createElement('div', {
    className: "qv-overlay funky-overlay",
    onClick: handleBackdropClick,
    role: "dialog",
    'aria-modal': "true",
    'aria-labelledby': "quick-view-title"
  }, modal);
}

QuickView.displayName = 'QuickView';