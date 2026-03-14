/**
 * QuickView.tsx - Quick View Pattern
 *
 * Modal for quick product viewing and interaction.
 */

import React, { useEffect, useState, useRef } from 'react';
import { useQuickView } from '../../contexts/QuickViewContext';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useNavigate } from 'react-router';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../blocks/design/Buttons';
import { VariantSelector } from '../blocks/product/VariantSelector';
import { useVariantSelection } from '../../hooks/useVariantSelection';
import { X, Heart, Star, ShoppingCart, ArrowSquareOut as ExternalLink, Minus, Plus, Check, WarningCircle as AlertCircle } from '@phosphor-icons/react';
import { toast } from 'sonner@2.0.3';

const EMPTY_VARIABLE_PRODUCT = { variations: [] as any[], attributes: [] as any[] };

export const QuickView = () => {
  const { product, isOpen, closeQuickView } = useQuickView();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isVariable = !!(product && product.type === 'variable');

  // Always call the hook (Rules of Hooks) — pass empty product when not variable.
  const variantSelection = useVariantSelection(
    isVariable && product ? product : EMPTY_VARIABLE_PRODUCT
  );

  const inWishlist = product ? isInWishlist(product.id) : false;

  useEffect(() => {
    if (product) {
      setQuantity(1);
      setActiveImage(0);
    }
  }, [product]);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeQuickView();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); };
  }, [isOpen, closeQuickView]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeQuickView();
    }
  };

  if (!isOpen || !product) return null;

  const images = product.images || [product.image];
  const currentImage = images[activeImage];

  const matchedVariation = variantSelection ? variantSelection.matchedVariation : null;
  const currentPrice = matchedVariation
    ? (matchedVariation.salePrice || matchedVariation.price)
    : (product.salePrice || product.price);
  const regularPrice = matchedVariation ? matchedVariation.price : product.price;
  const isOnSale = matchedVariation ? !!matchedVariation.salePrice : !!product.salePrice;

  const stockStatus = isVariable && variantSelection
    ? (variantSelection.matchedVariation
      ? (variantSelection.matchedVariation.inStock
        ? (variantSelection.matchedVariation.stock + ' in stock')
        : 'Out of stock')
      : 'Select options')
    : (product.inStock ? 'In stock' : 'Out of stock');

  const canAddToCart = isVariable && variantSelection ? variantSelection.canAddToCart : product.inStock;

  const handleQuantityChange = (delta: number) => {
    const maxStock = matchedVariation ? matchedVariation.stock : 99;
    setQuantity(Math.max(1, Math.min(quantity + delta, maxStock)));
  };

  const handleAddToCart = () => {
    if (!canAddToCart) {
      if (isVariable && variantSelection) {
        toast.error(variantSelection.errors[0] || 'Please select all options');
      }
      return;
    }

    let cartItem;
    if (isVariable && matchedVariation && variantSelection) {
      const selectedVals = Object.keys(variantSelection.selected).map(
        (key) => variantSelection.selected[key]
      );
      const variationName = selectedVals.join(', ');
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

  const handleToggleWishlist = () => {
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

  const handleViewFullProduct = () => {
    const productUrl = product.type === 'variable'
      ? '/variable-product/' + product.slug
      : '/product/' + product.id;
    closeQuickView();
    navigate(productUrl);
  };

  const starArray = [0, 1, 2, 3, 4];
  const priceMax = product.priceMax;

  const isInStockStatus = product.inStock || (variantSelection && variantSelection.matchedVariation && variantSelection.matchedVariation.inStock);

  return (
    <div
      className="qv-overlay funky-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-view-title"
    >
      <div ref={modalRef} className="qv-modal funky-modal">
        <button
          ref={closeButtonRef}
          onClick={closeQuickView}
          className="qv-close funky-modal-close"
          aria-label="Close quick view"
        >
          <X size={20} />
        </button>

        <div className="qv-scroll">
          <div className="qv-grid">
            {/* Gallery */}
            <div className="qv-gallery">
              {isOnSale && (
                <span className="qv-sale-badge wp-badge-sale">
                  <strong>Sale!</strong>
                </span>
              )}
              <div className="qv-main-image">
                <ImageWithFallback
                  src={currentImage}
                  alt={product.name}
                  className="qv-main-img funky-image-glow"
                />
              </div>
              {images.length > 1 && (
                <div className="qv-thumbs">
                  {images.map((img: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={'qv-thumb ' + (activeImage === index ? 'qv-thumb--active' : '')}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={product.name + ' ' + (index + 1)}
                        className="qv-thumb-img"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="qv-info">
              {product.category && (
                <div className="qv-category">
                  <small><strong className="funky-text-cyan">{product.category}</strong></small>
                </div>
              )}

              <h2 id="quick-view-title" className="qv-title funky-title">{product.name}</h2>

              {product.rating && (
                <div className="qv-rating">
                  <div className="qv-stars">
                    {starArray.map((i) => {
                      const isFilled = i < Math.floor(product.rating);
                      return (
                        <Star
                          key={i}
                          size={14}
                          fill={isFilled ? "currentColor" : "none"}
                          className={isFilled ? 'qv-star--filled' : 'qv-star--empty'}
                        />
                      );
                    })}
                  </div>
                  <small className="qv-review-count">({product.reviewCount} reviews)</small>
                </div>
              )}

              <div className="qv-price-block">
                {(isVariable && variantSelection && !variantSelection.isComplete) ? (
                  <span className="qv-price">
                    {'£' + product.price.toFixed(2) + ' - £' + (priceMax ? priceMax.toFixed(2) : product.price.toFixed(2))}
                  </span>
                ) : (
                  <div className="qv-price-row">
                    {isOnSale && <span className="qv-price--original">{'£' + regularPrice.toFixed(2)}</span>}
                    <span className="qv-price funky-text-pink">{'£' + currentPrice.toFixed(2)}</span>
                  </div>
                )}
              </div>

              {product.shortDescription && (
                <p className="qv-description">{product.shortDescription}</p>
              )}

              {isVariable && product.attributes && variantSelection && (
                <div className="qv-variants">
                  {product.attributes
                    .filter((attr: any) => attr.variation)
                    .map((attribute: any) => (
                      <VariantSelector
                        key={attribute.slug}
                        attribute={attribute}
                        selected={variantSelection.selected}
                        onChange={variantSelection.selectAttribute}
                      />
                    ))}
                </div>
              )}

              {isVariable && variantSelection && variantSelection.errors.length > 0 && (
                <div className="qv-errors">
                  {variantSelection.errors.map((error: string, index: number) => (
                    <div key={index} className="qv-error-item">
                      <AlertCircle size={16} className="qv-error-icon" />
                      <small>{error}</small>
                    </div>
                  ))}
                </div>
              )}

              <div className="qv-stock">
                {isInStockStatus
                  ? <Check size={16} className="qv-stock-icon--in" />
                  : <AlertCircle size={16} className="qv-stock-icon--out" />
                }
                <small className={isInStockStatus ? "qv-stock-text--in" : "qv-stock-text--out"}>
                  {stockStatus}
                </small>
              </div>

              <div className="qv-actions">
                <div className="qv-quantity-row">
                  <span className="qv-quantity-label">
                    <small><strong>Quantity:</strong></small>
                  </span>
                  <div className="qv-quantity-controls funky-input-glow">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="qv-qty-btn"
                      aria-label="Decrease quantity"
                      disabled={!canAddToCart}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qv-qty-value">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="qv-qty-btn"
                      aria-label="Increase quantity"
                      disabled={!canAddToCart}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  onClick={handleAddToCart}
                  disabled={!canAddToCart}
                  className="qv-add-to-cart funky-btn-neon"
                >
                  <ShoppingCart size={20} />
                  {canAddToCart ? 'Add to Cart' : 'Select Options'}
                </Button>

                <div className="qv-secondary-actions">
                  <button
                    onClick={handleToggleWishlist}
                    className={'qv-action-btn funky-spring-hover ' + (inWishlist ? 'qv-action-btn--wishlisted' : '')}
                  >
                    <Heart size={18} fill={inWishlist ? 'currentColor' : 'none'} />
                    <small><strong>Wishlist</strong></small>
                  </button>
                  <button
                    onClick={handleViewFullProduct}
                    className="qv-action-btn funky-spring-hover"
                  >
                    <ExternalLink size={18} />
                    <small><strong>Full Details</strong></small>
                  </button>
                </div>
              </div>

              {(matchedVariation ? matchedVariation.sku : product.sku) && (
                <div className="qv-sku">
                  <small>SKU: {matchedVariation ? matchedVariation.sku : product.sku}</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

QuickView.displayName = 'QuickView';