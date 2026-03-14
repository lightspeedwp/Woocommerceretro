/**
 * PageWishlistRetro
 *
 * "PlayPocket" FSE theme - Wishlist page.
 * Uses WishlistContext for dynamic wishlist data.
 * WCAG AA 2.2 compliant.
 */

import { Link } from 'react-router';
import { Heart, Trash, ShoppingCart, ArrowRight } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { useWishlist } from '../../contexts/WishlistContext';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'sonner@2.0.3';

export const PageWishlistRetro = () => {
  const wishlist = useWishlist();
  const cart = useCart();

  // Google Fonts loading moved to RootLayout.

  const itemCount = wishlist.getWishlistCount();

  const handleAddToCart = (item: any) => {
    cart.addToCart(item, 1);
    toast.success(`${item.name} added to cart!`, { duration: 2000, position: 'bottom-right' });
    window.dispatchEvent(new Event('open-mini-cart'));
  };

  const handleRemove = (item: any) => {
    wishlist.removeFromWishlist(item.id);
    toast.success(`${item.name} removed from wishlist`, { duration: 2000 });
  };

  const handleMoveAllToCart = () => {
    wishlist.items.forEach((item) => {
      cart.addToCart(item, 1);
    });
    wishlist.clearWishlist();
    toast.success('All items moved to cart!', { duration: 2000, position: 'bottom-right' });
    window.dispatchEvent(new Event('open-mini-cart'));
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        {/* Breadcrumb */}
        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <span className="retro-breadcrumb-current">WISHLIST</span>
        </div>

        <div className="retro-wishlist-layout">
          {/* Title Banner */}
          <div className="retro-title-banner retro-wishlist-layout__banner">
            <Heart size={32} weight="fill" aria-hidden="true" />
            <h1 className="retro-font-display retro-bold retro-wishlist-layout__title">
              SAVED ITEMS ({itemCount})
            </h1>
          </div>

          {/* Wishlist Content */}
          {itemCount === 0 ? (
            <div className="retro-wishlist-layout__empty">
              <Heart size={64} weight="thin" aria-hidden="true" />
              <p className="retro-font-display retro-bold retro-wishlist-layout__empty-heading">
                NO SAVED ITEMS
              </p>
              <p className="retro-font-body retro-wishlist-layout__empty-text">
                Browse the shop and tap the heart icon to save items for later.
              </p>
              <Link
                to="/shop"
                className="retro-button retro-button--secondary retro-font-display retro-bold"
              >
                EXPLORE SHOP <ArrowRight weight="bold" />
              </Link>
            </div>
          ) : (
            <>
              {/* Action Bar */}
              <div className="retro-wishlist-layout__actions">
                <button
                  className="retro-button retro-button--secondary retro-font-display retro-bold"
                  onClick={handleMoveAllToCart}
                >
                  <ShoppingCart size={16} weight="bold" /> MOVE ALL TO CART
                </button>
                <button
                  className="retro-button retro-button--secondary retro-font-display retro-bold"
                  onClick={() => {
                    wishlist.clearWishlist();
                    toast.success('Wishlist cleared', { duration: 2000 });
                  }}
                >
                  <Trash size={16} weight="bold" /> CLEAR ALL
                </button>
              </div>

              <div className="retro-wishlist-layout__grid">
                {wishlist.items.map((item) => {
                  const itemPrice = typeof item.price === 'number' ? item.price : 0;
                  const itemSalePrice = item.salePrice;
                  const itemImg = item.image || '';
                  const hoverImg = item.hoverImage || itemImg;
                  const inCart = cart.isInCart(item.id);

                  return (
                    <div key={item.id} className="retro-card retro-wishlist-layout__card">
                      {/* Heart badge */}
                      <button
                        className="retro-heart-btn retro-heart-btn--active"
                        onClick={() => handleRemove(item)}
                        aria-label={`Remove ${item.name} from wishlist`}
                      >
                        <Heart size={16} weight="fill" />
                      </button>

                      {/* Image */}
                      <Link to={`/product/${item.id}`} className="retro-card-img-wrap">
                        <img
                          src={itemImg}
                          alt={item.name || 'Product'}
                          className="retro-card-img retro-card-img--primary"
                        />
                        {hoverImg !== itemImg && (
                          <img
                            src={hoverImg}
                            alt={`${item.name} alternate view`}
                            className="retro-card-img retro-card-img--hover"
                          />
                        )}
                      </Link>

                      {/* Details */}
                      <Link to={`/product/${item.id}`}>
                        <h3 className="retro-card-title retro-font-display retro-bold">{item.name}</h3>
                      </Link>
                      <p className="retro-card-price retro-font-display retro-bold">
                        {itemSalePrice ? (
                          <>
                            <span className="retro-card-price--original">${itemPrice.toFixed(2)}</span>
                            <span className="retro-card-price--sale">${itemSalePrice.toFixed(2)}</span>
                          </>
                        ) : (
                          `$${itemPrice.toFixed(2)}`
                        )}
                      </p>

                      {/* Actions */}
                      <div className="retro-wishlist-layout__card-actions">
                        <button
                          className={`retro-card-btn retro-font-display retro-bold ${inCart ? 'retro-card-btn--disabled' : 'retro-card-btn--white'}`}
                          onClick={() => {
                            if (!inCart) handleAddToCart(item);
                          }}
                          disabled={inCart}
                        >
                          <ShoppingCart size={14} weight="bold" />
                          {inCart ? 'IN CART' : 'ADD TO CART'}
                        </button>
                        <button
                          className="retro-wishlist-layout__remove-btn"
                          onClick={() => handleRemove(item)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash size={18} weight="bold" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        <BottomGridRetro />
        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
}

PageWishlistRetro.displayName = 'PageWishlistRetro';