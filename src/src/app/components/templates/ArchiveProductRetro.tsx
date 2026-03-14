/**
 * ArchiveProductRetro
 *
 * "PlayPocket" FSE theme - Product Archive / Shop page.
 * Features: hover image swap, category filtering, comparison support.
 * WCAG AA 2.2 compliant.
 */

import { type MouseEvent } from 'react';
import { useParams, Link } from 'react-router';
import { Heart, Scales } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { PRODUCTS, getProductsByCategory, getProductsByTag } from '../../data/products';
import { productCategories } from '../../data/categories';
import { useCart } from '../../contexts/CartContext';
import { useComparison } from '../../contexts/ComparisonContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { toast } from 'sonner@2.0.3';

export const ArchiveProductRetro = () => {
  const params = useParams<{ categorySlug?: string; tagSlug?: string }>();
  const cartContext = useCart();
  const comparison = useComparison();
  const wishlist = useWishlist();

  const displayProducts = params.categorySlug
    ? getProductsByCategory(params.categorySlug)
    : params.tagSlug
      ? getProductsByTag(params.tagSlug)
      : PRODUCTS;

  const currentCategory = params.categorySlug
    ? productCategories.find((c) => c.slug === params.categorySlug)
    : null;

  // Google Fonts loading moved to RootLayout (single load for all templates).

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-archive-layout">
          <aside className="retro-sidebar-filters retro-font-display">
            <h3 className="retro-sidebar-title retro-bold">BROWSE</h3>
            <div className="retro-sidebar-group">
              <Link to="/shop" className={`retro-sidebar-item ${!params.categorySlug ? 'retro-sidebar-item--active' : ''}`}>
                <span>ALL ITEMS</span><span>{PRODUCTS.length}</span>
              </Link>
              {productCategories.map((cat) => {
                return (
                  <Link
                    key={cat.id}
                    to={'/shop/category/' + cat.slug}
                    className={`retro-sidebar-item ${params.categorySlug === cat.slug ? 'retro-sidebar-item--active' : ''}`}
                  >
                    <span>{cat.name.toUpperCase()}</span><span>{cat.count}</span>
                  </Link>
                );
              })}
            </div>
          </aside>

          <div className="retro-archive-content">
            {currentCategory && (
              <div className="retro-archive-header">
                <h1 className="retro-font-display retro-bold">{currentCategory.name.toUpperCase()}</h1>
                <p className="retro-font-body">{currentCategory.description}</p>
              </div>
            )}
            <div className="retro-archive-count retro-font-display">
              {displayProducts.length} {displayProducts.length === 1 ? 'ITEM' : 'ITEMS'}
            </div>
            <div className="retro-grid">
              {displayProducts.map((item, i) => {
                const primaryBadge = item.badges && item.badges.length > 0 ? item.badges[0] : null;
                const btnClass = primaryBadge ? 'retro-card-btn--yellow' : 'retro-card-btn--white';
                const itemPrice = typeof item.price === 'number' ? '$' + item.price.toFixed(2) : item.price;
                const itemImg = item.image || (item as any).img;
                const hoverImg = item.hoverImage || itemImg;
                const inComparison = comparison.isInComparison(item.id);
                const inWishlist = wishlist.isInWishlist(item.id);

                return (
                  <Link key={item.id || i} to={'/product/' + item.id} className="retro-card">
                    {primaryBadge && <span className="retro-card-badge retro-font-display">{primaryBadge}</span>}
                    <button
                      className={'retro-heart-btn' + (inWishlist ? ' retro-heart-btn--active' : '')}
                      onClick={(ev: MouseEvent) => {
                        ev.preventDefault();
                        if (inWishlist) {
                          wishlist.removeFromWishlist(item.id);
                        } else {
                          wishlist.addToWishlist(item);
                          toast.success(item.name + ' added to wishlist!', { duration: 2000 });
                        }
                      }}
                      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                    >
                      <Heart size={16} weight={inWishlist ? 'fill' : 'bold'} />
                    </button>
                    <button
                      className={'retro-compare-btn' + (inComparison ? ' retro-compare-btn--active' : '')}
                      onClick={(ev: MouseEvent) => {
                        ev.preventDefault();
                        if (inComparison) {
                          comparison.removeFromComparison(item.id);
                        } else {
                          comparison.addToComparison(item);
                        }
                      }}
                      aria-label={inComparison ? 'Remove from comparison' : 'Add to comparison'}
                    >
                      <Scales size={14} weight="bold" />
                    </button>
                    <div className="retro-card-img-wrap">
                      <img src={itemImg} className="retro-card-img retro-card-img--primary" alt={item.name} />
                      <img src={hoverImg} className="retro-card-img retro-card-img--hover" alt={item.name + ' alternate view'} />
                    </div>
                    {item.salePrice && (
                      <span className="retro-card-sale-price retro-font-display retro-bold">
                        {'$' + item.salePrice.toFixed(2)}
                      </span>
                    )}
                    <h3 className="retro-card-title retro-font-display retro-bold">{item.name}</h3>
                    <p className="retro-card-price retro-font-display retro-bold">
                      {item.salePrice ? (
                        <>
                          <span className="retro-card-price--original">{itemPrice}</span>
                          <span className="retro-card-price--sale">{'$' + item.salePrice.toFixed(2)}</span>
                        </>
                      ) : itemPrice}
                    </p>
                    <button
                      className={'retro-card-btn retro-font-display retro-bold ' + btnClass}
                      onClick={(ev: MouseEvent) => {
                        ev.preventDefault();
                        cartContext.addToCart(item, 1);
                        toast.success(item.name + ' added to cart!', { duration: 2000, position: 'bottom-right' });
                      }}
                    >
                      ADD TO CART
                    </button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
}

ArchiveProductRetro.displayName = 'ArchiveProductRetro';