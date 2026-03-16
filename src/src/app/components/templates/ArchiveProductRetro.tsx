/**
 * ArchiveProductRetro
 *
 * "PlayPocket" FSE theme - Product Archive / Shop page.
 * Route-aware: dynamically filters and titles products based on current path.
 * Supports: /shop, /deals, /sale, /new-arrivals, /best-sellers,
 *           /promotions/*, /category/:slug, /tag/:slug
 * WCAG AA 2.2 compliant.
 */

import { useMemo, type MouseEvent } from 'react';
import { useParams, useLocation, Link } from 'react-router';
import { Heart, Scales, Lightning, Tag, Clock, TrendUp, Fire, Gift, Percent, Star } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import {
  PRODUCTS,
  getProductsByCategory,
  getProductsByTag,
  getOnSaleProducts,
  getBestSellers,
  getNewArrivals,
  getFeaturedProducts,
} from '../../data/products';
import { productCategories } from '../../data/categories';
import { useCart } from '../../contexts/CartContext';
import { useComparison } from '../../contexts/ComparisonContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { toast } from 'sonner@2.0.3';

/* ─── Route Context Configuration ─────────────────────── */

interface RouteContext {
  title: string;
  subtitle: string;
  icon: typeof Lightning;
  accentClass: string;
  badgeText?: string;
}

const getRouteContext = (pathname: string): RouteContext | null => {
  const path = pathname.replace(/\/+$/, '');

  const routeMap: Record<string, RouteContext> = {
    '/promotions/flash-sale': {
      title: 'FLASH SALE',
      subtitle: 'Limited-time deals on select items. Grab them before the timer runs out!',
      icon: Lightning,
      accentClass: 'retro-archive-header--flash-sale',
      badgeText: 'UP TO 40% OFF',
    },
    '/deals': {
      title: 'DEALS & OFFERS',
      subtitle: 'All current deals, discounts, and special offers in one place.',
      icon: Tag,
      accentClass: 'retro-archive-header--deals',
      badgeText: 'HOT DEALS',
    },
    '/sale': {
      title: 'SALE',
      subtitle: 'Reduced prices across all categories. Shop the savings before they are gone.',
      icon: Percent,
      accentClass: 'retro-archive-header--sale',
      badgeText: 'SALE',
    },
    '/new-arrivals': {
      title: 'NEW ARRIVALS',
      subtitle: 'Just dropped! The latest additions to the PlayPocket collection.',
      icon: Clock,
      accentClass: 'retro-archive-header--new',
      badgeText: 'JUST IN',
    },
    '/best-sellers': {
      title: 'BEST SELLERS',
      subtitle: 'Fan favourites ranked by sales. These are the items players keep coming back for.',
      icon: TrendUp,
      accentClass: 'retro-archive-header--best',
      badgeText: 'TOP SELLERS',
    },
    '/promotions': {
      title: 'PROMOTIONS',
      subtitle: 'Browse all active promotions, bundles, and limited-time offers.',
      icon: Fire,
      accentClass: 'retro-archive-header--promo',
    },
    '/promotions/seasonal': {
      title: 'SEASONAL SALE',
      subtitle: 'Seasonal specials with exclusive markdowns across the store.',
      icon: Star,
      accentClass: 'retro-archive-header--sale',
      badgeText: 'SEASONAL',
    },
    '/promotions/bundles': {
      title: 'BUNDLE DEALS',
      subtitle: 'Curated product bundles at special combo prices.',
      icon: Gift,
      accentClass: 'retro-archive-header--deals',
      badgeText: 'BUNDLE & SAVE',
    },
    '/promotions/clearance': {
      title: 'CLEARANCE',
      subtitle: 'Final markdowns on last-chance items. Once they are gone, they are gone!',
      icon: Percent,
      accentClass: 'retro-archive-header--flash-sale',
      badgeText: 'FINAL SALE',
    },
    '/promotions/winter-clearance': {
      title: 'WINTER CLEARANCE',
      subtitle: 'End-of-season winter gear at deep discounts. Limited stock remaining.',
      icon: Percent,
      accentClass: 'retro-archive-header--flash-sale',
      badgeText: 'UP TO 50% OFF',
    },
    '/promotions/buy-2-get-1': {
      title: 'BUY 2 GET 1 FREE',
      subtitle: 'Add any 3 eligible items to your cart and the cheapest is free!',
      icon: Gift,
      accentClass: 'retro-archive-header--promo',
      badgeText: 'B2G1',
    },
  };

  return routeMap[path] || null;
};

/**
 * Filters and sorts products based on route pathname.
 */
const getFilteredProducts = (pathname: string, categorySlug?: string, tagSlug?: string) => {
  const path = pathname.replace(/\/+$/, '');

  // Category/tag routes
  if (categorySlug) return getProductsByCategory(categorySlug);
  if (tagSlug) return getProductsByTag(tagSlug);

  // Sale routes — only products with salePrice
  if (
    path === '/promotions/flash-sale' ||
    path === '/deals' ||
    path === '/sale' ||
    path === '/promotions/seasonal' ||
    path === '/promotions/clearance' ||
    path === '/promotions/winter-clearance'
  ) {
    return getOnSaleProducts();
  }

  // Best sellers
  if (path === '/best-sellers') {
    return getBestSellers(100);
  }

  // New arrivals
  if (path === '/new-arrivals') {
    return getNewArrivals(100);
  }

  // Promotions hub + bundles + buy-2-get-1 — featured + on sale
  if (
    path === '/promotions' ||
    path === '/promotions/bundles' ||
    path === '/promotions/buy-2-get-1'
  ) {
    const featured = getFeaturedProducts();
    const onSale = getOnSaleProducts();
    // Merge unique
    const seen = new Set<string>();
    const merged: any[] = [];
    const all = featured.concat(onSale);
    for (let i = 0; i < all.length; i++) {
      if (!seen.has(all[i].id)) {
        seen.add(all[i].id);
        merged.push(all[i]);
      }
    }
    return merged;
  }

  // Default: all products
  return PRODUCTS;
};

/* ─── Component ──────────────────────────────────────── */

export const ArchiveProductRetro = () => {
  const params = useParams<{ slug?: string }>();
  const location = useLocation();
  const cartContext = useCart();
  const comparison = useComparison();
  const wishlist = useWishlist();

  // Determine if this is a category or tag route from the path
  const isCategoryRoute = location.pathname.startsWith('/category/');
  const isTagRoute = location.pathname.startsWith('/tag/');
  const categorySlug = isCategoryRoute ? params.slug : undefined;
  const tagSlug = isTagRoute ? params.slug : undefined;

  const displayProducts = useMemo(
    () => getFilteredProducts(location.pathname, categorySlug, tagSlug),
    [location.pathname, categorySlug, tagSlug]
  );

  const routeContext = useMemo(() => getRouteContext(location.pathname), [location.pathname]);

  const currentCategory = categorySlug
    ? productCategories.find((c) => c.slug === categorySlug)
    : null;

  const IconComponent = routeContext ? routeContext.icon : null;

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-archive-layout">
          <aside className="retro-sidebar-filters retro-font-display">
            <h3 className="retro-sidebar-title retro-bold">BROWSE</h3>
            <div className="retro-sidebar-group">
              <Link to="/shop" className={'retro-sidebar-item' + (!categorySlug && !routeContext ? ' retro-sidebar-item--active' : '')}>
                <span>ALL ITEMS</span><span>{PRODUCTS.length}</span>
              </Link>
              {productCategories.map((cat) => {
                return (
                  <Link
                    key={cat.id}
                    to={'/category/' + cat.slug}
                    className={'retro-sidebar-item' + (categorySlug === cat.slug ? ' retro-sidebar-item--active' : '')}
                  >
                    <span>{cat.name.toUpperCase()}</span><span>{cat.count}</span>
                  </Link>
                );
              })}
            </div>

            {/* Quick Filters */}
            <h3 className="retro-sidebar-title retro-bold" style={{ marginTop: 'var(--wp--preset--spacing--50)' }}>QUICK FILTERS</h3>
            <div className="retro-sidebar-group">
              <Link to="/sale" className={'retro-sidebar-item' + (location.pathname === '/sale' ? ' retro-sidebar-item--active' : '')}>
                <span>ON SALE</span><span>{getOnSaleProducts().length}</span>
              </Link>
              <Link to="/new-arrivals" className={'retro-sidebar-item' + (location.pathname === '/new-arrivals' ? ' retro-sidebar-item--active' : '')}>
                <span>NEW ARRIVALS</span><span>{getNewArrivals(100).length}</span>
              </Link>
              <Link to="/best-sellers" className={'retro-sidebar-item' + (location.pathname === '/best-sellers' ? ' retro-sidebar-item--active' : '')}>
                <span>BEST SELLERS</span><span>{getBestSellers(100).length}</span>
              </Link>
              <Link to="/promotions/flash-sale" className={'retro-sidebar-item' + (location.pathname === '/promotions/flash-sale' ? ' retro-sidebar-item--active' : '')}>
                <span>FLASH SALE</span><span><Lightning size={14} weight="fill" /></span>
              </Link>
            </div>
          </aside>

          <div className="retro-archive-content">
            {/* Route-specific header */}
            {routeContext && (
              <div className={'retro-archive-header ' + routeContext.accentClass}>
                <div className="retro-archive-header__top">
                  {IconComponent && <IconComponent size={32} weight="fill" className="retro-archive-header__icon" />}
                  <h1 className="retro-font-display retro-bold">{routeContext.title}</h1>
                  {routeContext.badgeText && (
                    <span className="retro-archive-header__badge retro-font-display retro-bold">
                      {routeContext.badgeText}
                    </span>
                  )}
                </div>
                <p className="retro-font-body">{routeContext.subtitle}</p>
              </div>
            )}

            {/* Category header */}
            {currentCategory && !routeContext && (
              <div className="retro-archive-header">
                <h1 className="retro-font-display retro-bold">{currentCategory.name.toUpperCase()}</h1>
                <p className="retro-font-body">{currentCategory.description}</p>
              </div>
            )}

            {/* Default shop header when no context */}
            {!routeContext && !currentCategory && !tagSlug && (
              <div className="retro-archive-header">
                <h1 className="retro-font-display retro-bold">ALL PRODUCTS</h1>
                <p className="retro-font-body">Browse the complete PlayPocket catalog.</p>
              </div>
            )}

            {/* Tag header */}
            {tagSlug && !routeContext && (
              <div className="retro-archive-header">
                <h1 className="retro-font-display retro-bold">TAG: {tagSlug.toUpperCase().replace(/-/g, ' ')}</h1>
                <p className="retro-font-body">Products tagged with "{tagSlug.replace(/-/g, ' ')}".</p>
              </div>
            )}

            <div className="retro-archive-count retro-font-display">
              {displayProducts.length} {displayProducts.length === 1 ? 'ITEM' : 'ITEMS'}
              {routeContext && displayProducts.length === 0 && (
                <span className="retro-archive-count__empty retro-font-body">
                  {' '}— No products match this filter right now. Check back soon!
                </span>
              )}
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
                  <Link key={item.id || i} to={'/product/' + (item.slug || item.id)} className="retro-card">
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