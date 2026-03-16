import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Star, Heart, ShareNetwork, Check, Truck, ArrowsClockwise, ShieldCheck, Plus, Minus } from '../../utils/phosphor-compat';

import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { RelatedProductsSection } from '../patterns/RelatedProductsSection';
import { products } from '../../data/products';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

/**
 * SingleProductSticky Template — Funky Redesign (Phase 4)
 * 
 * Product detail page with sticky add-to-cart sidebar.
 *
 * @template
 */
export const SingleProductSticky = () => {
  const { slug } = useParams();
  const { addItem } = useCart();
  const { addItem: addToWishlist, isInWishlist } = useWishlist();
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const product = products[0];

  if (!product) {
    return (
      <Layout>
        <Container>
          <div className="sp-sticky__not-found">
            <Typography variant="h2">Product not found</Typography>
          </div>
        </Container>
      </Layout>
    );
  }

  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const handleAddToWishlist = () => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <Layout>
      <Container>
        <div className="sp-sticky">
          <div className="sp-sticky__layout">
            {/* Left: Image Gallery */}
            <div className="sp-sticky__gallery">
              <div className="sp-sticky__main-image">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="sp-sticky__main-img"
                />
              </div>

              <div className="sp-sticky__thumbs">
                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`sp-sticky__thumb${selectedImage === index ? ' sp-sticky__thumb--active' : ''}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="sp-sticky__thumb-img"
                    />
                  </button>
                ))}
              </div>

              {/* Desktop Accordions */}
              <div className="sp-sticky__details sp-sticky__details--desktop">
                <details className="sp-sticky__accordion">
                  <summary className="sp-sticky__accordion-trigger">
                    <span>Product Description</span>
                    <Plus className="sp-sticky__accordion-icon--closed" size={20} />
                    <Minus className="sp-sticky__accordion-icon--open" size={20} />
                  </summary>
                  <div className="sp-sticky__accordion-content">
                    <p className="sp-sticky__accordion-text">{product.description}</p>
                    <p className="sp-sticky__accordion-text">
                      This premium product features high-quality materials and expert craftsmanship. Perfect for daily use, it combines functionality with style.
                    </p>
                  </div>
                </details>

                <details className="sp-sticky__accordion">
                  <summary className="sp-sticky__accordion-trigger">
                    <span>Specifications</span>
                    <Plus className="sp-sticky__accordion-icon--closed" size={20} />
                    <Minus className="sp-sticky__accordion-icon--open" size={20} />
                  </summary>
                  <div className="sp-sticky__accordion-content">
                    <dl className="sp-sticky__specs">
                      <div className="sp-sticky__spec-row">
                        <dt className="sp-sticky__spec-label">Material:</dt>
                        <dd className="sp-sticky__spec-value">Premium Quality</dd>
                      </div>
                      <div className="sp-sticky__spec-row">
                        <dt className="sp-sticky__spec-label">Color:</dt>
                        <dd className="sp-sticky__spec-value">Multiple Options</dd>
                      </div>
                      <div className="sp-sticky__spec-row">
                        <dt className="sp-sticky__spec-label">Warranty:</dt>
                        <dd className="sp-sticky__spec-value">1 Year</dd>
                      </div>
                    </dl>
                  </div>
                </details>

                <details className="sp-sticky__accordion">
                  <summary className="sp-sticky__accordion-trigger">
                    <span>Shipping & Returns</span>
                    <Plus className="sp-sticky__accordion-icon--closed" size={20} />
                    <Minus className="sp-sticky__accordion-icon--open" size={20} />
                  </summary>
                  <div className="sp-sticky__accordion-content">
                    <p className="sp-sticky__accordion-text">
                      Free shipping on orders over $50. Standard delivery in 3-5 business days.
                    </p>
                    <p className="sp-sticky__accordion-text">
                      30-day returns policy. Items must be unused and in original packaging.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Right: Sticky Purchase Panel */}
            <div className="sp-sticky__sidebar">
              <div className="sp-sticky__sidebar-sticky">
                <div className="sp-sticky__panel">
                  <div className="sp-sticky__info">
                    {product.badge && <span className="sp-sticky__badge">{product.badge}</span>}
                    <Typography variant="h2">{product.name}</Typography>

                    {/* Rating */}
                    <div className="sp-sticky__rating">
                      <div className="sp-sticky__stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={18}
                            weight={star <= 4 ? 'fill' : 'regular'}
                            className={star <= 4 ? 'sp-sticky__star--filled' : 'sp-sticky__star--empty'}
                          />
                        ))}
                      </div>
                      <span className="sp-sticky__review-count">
                        <small>(4.0) 128 reviews</small>
                      </span>
                    </div>

                    {/* Price */}
                    <div className="sp-sticky__price-block">
                      <div className="sp-sticky__price-row">
                        <span className="sp-sticky__price">{`$${product.salePrice || product.price}`}</span>
                        {product.salePrice && product.salePrice < product.price && (
                          <span className="sp-sticky__price--original">{`$${product.price}`}</span>
                        )}
                      </div>
                      {product.salePrice && product.salePrice < product.price && (
                        <p className="sp-sticky__savings">
                          <small><strong>{`Save $${(product.price - product.salePrice).toFixed(2)}`}</strong></small>
                        </p>
                      )}
                    </div>

                    {/* Stock */}
                    <div className="sp-sticky__stock">
                      {product.inStock ? (
                        <>
                          <Check size={18} weight="bold" className="sp-sticky__stock-icon--in" />
                          <span className="sp-sticky__stock-text--in">
                            <small><strong>In Stock</strong></small>
                          </span>
                        </>
                      ) : (
                        <span className="sp-sticky__stock-text--out">
                          <small><strong>Out of Stock</strong></small>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="sp-sticky__quantity">
                    <label className="sp-sticky__quantity-label">
                      <small><strong>Quantity</strong></small>
                    </label>
                    <div className="sp-sticky__quantity-controls">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="sp-sticky__qty-btn"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={18} />
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="sp-sticky__qty-input"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="sp-sticky__qty-btn"
                        aria-label="Increase quantity"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="sp-sticky__actions">
                    <button
                      onClick={handleAddToCart}
                      disabled={!product.inStock}
                      className="sp-sticky__add-to-cart"
                    >
                      {isAddedToCart ? (
                        <>
                          <Check size={20} weight="bold" />
                          <span><strong>Added to Cart!</strong></span>
                        </>
                      ) : (
                        <span><strong>Add to Cart</strong></span>
                      )}
                    </button>

                    <div className="sp-sticky__secondary-actions">
                      <button
                        onClick={handleAddToWishlist}
                        className="sp-sticky__action-btn"
                      >
                        <Heart
                          size={18}
                          weight={isInWishlist(product.id) ? 'fill' : 'regular'}
                          className={isInWishlist(product.id) ? 'sp-sticky__heart--active' : ''}
                        />
                        <span><small>Wishlist</small></span>
                      </button>
                      <button className="sp-sticky__action-btn">
                        <ShareNetwork size={18} />
                        <span><small>Share</small></span>
                      </button>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="sp-sticky__trust">
                    <div className="sp-sticky__trust-item">
                      <Truck size={20} weight="duotone" className="sp-sticky__trust-icon" />
                      <div>
                        <p className="sp-sticky__trust-title"><small>Free Shipping</small></p>
                        <p className="sp-sticky__trust-desc"><small>On orders over $50</small></p>
                      </div>
                    </div>
                    <div className="sp-sticky__trust-item">
                      <ArrowsClockwise size={20} weight="duotone" className="sp-sticky__trust-icon" />
                      <div>
                        <p className="sp-sticky__trust-title"><small>Easy Returns</small></p>
                        <p className="sp-sticky__trust-desc"><small>30-day return policy</small></p>
                      </div>
                    </div>
                    <div className="sp-sticky__trust-item">
                      <ShieldCheck size={20} weight="duotone" className="sp-sticky__trust-icon" />
                      <div>
                        <p className="sp-sticky__trust-title"><small>Secure Payment</small></p>
                        <p className="sp-sticky__trust-desc"><small>SSL encrypted checkout</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Details */}
          <div className="sp-sticky__details sp-sticky__details--mobile">
            <details className="sp-sticky__accordion">
              <summary className="sp-sticky__accordion-trigger">
                <span>Product Description</span>
                <Plus className="sp-sticky__accordion-icon--closed" size={20} />
                <Minus className="sp-sticky__accordion-icon--open" size={20} />
              </summary>
              <div className="sp-sticky__accordion-content">
                <p className="sp-sticky__accordion-text">{product.description}</p>
              </div>
            </details>
          </div>

          {/* Related Products */}
          <div className="sp-sticky__related">
            <RelatedProductsSection currentProductId={product.id} />
          </div>
        </div>
      </Container>
    </Layout>
  );
}