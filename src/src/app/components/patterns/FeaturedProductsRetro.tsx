/**
 * FeaturedProductsRetro
 *
 * Product card grid with pixelated button styles matching the design reference.
 * Shows 4 products with heart wishlist button, badge support, and pixel ADD TO CART.
 *
 * **Styling:** BEM (.retro-card__*, .pp-pixel-btn) 
 * **WCAG:** 44px touch targets, aria-labels on icon buttons, alt text
 */

import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router';
import { getFeaturedProducts, getNewArrivals } from '../../data/products';
import { useCart } from '../../contexts/CartContext';

interface FeaturedProductsRetroProps {
  products?: any[];
  title?: string;
  linkText?: string;
}

export const FeaturedProductsRetro = ({
  products,
  title = 'FEATURED ITEMS',
  linkText = 'VIEW ALL',
}: FeaturedProductsRetroProps) => {
  const cartContext = useCart();

  let featured: any[];
  try {
    if (products && products.length > 0) {
      featured = products;
    } else if (title.includes('BEST')) {
      const fetched = getNewArrivals(4);
      featured = fetched && fetched.length > 0 ? fetched : [];
    } else {
      const fetched = getFeaturedProducts();
      featured = fetched && fetched.length > 0 ? fetched.slice(0, 4) : [];
    }
  } catch {
    featured = [];
  }

  if (featured.length === 0) return null;

  return (
    <section className="pp-featured" aria-labelledby={`featured-${title.replace(/\s/g, '-')}`}>
      <div className="pp-featured__header">
        <h2 id={`featured-${title.replace(/\s/g, '-')}`} className="pp-featured__title retro-font-display">
          {title}
        </h2>
        <Link to="/shop" className="pp-featured__viewall retro-font-display">
          {linkText} <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="pp-featured__grid">
        {featured.map((item, i) => {
          const primaryBadge = item.badges && item.badges[0] ? item.badges[0] : null;
          const itemPrice = typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price;
          const itemImg = item.image || item.img;

          return (
            <article key={item.id || i} className="pp-product-card">
              {primaryBadge && (
                <span className="pp-product-card__badge retro-font-display">{primaryBadge}</span>
              )}
              <button
                className="pp-product-card__heart"
                onClick={(ev) => ev.preventDefault()}
                aria-label={`Add ${item.name} to wishlist`}
              >
                <Heart size={16} strokeWidth={2.5} />
              </button>

              <Link to={`/product/${item.slug || item.id || ''}`} className="pp-product-card__img-link">
                <div className="pp-product-card__img-wrap">
                  {itemImg && (
                    <img src={itemImg} className="pp-product-card__img" alt={item.name} loading="lazy" />
                  )}
                </div>
              </Link>

              <div className="pp-product-card__info">
                <h3 className="pp-product-card__name retro-font-display">{item.name}</h3>
                <p className="pp-product-card__price retro-font-display">{itemPrice}</p>
              </div>

              <button
                className="pp-pixel-btn pp-pixel-btn--card pp-pixel-btn--accent retro-font-display"
                onClick={() => {
                  cartContext.addToCart(item, 1);
                }}
                aria-label={`Add ${item.name} to cart`}
              >
                ADD TO CART
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};

FeaturedProductsRetro.displayName = 'FeaturedProductsRetro';