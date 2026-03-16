/**
 * ShopMegaMenu - Funky Redesign
 * 3-column: browse links | categories | featured cards
 * Glassmorphism panel with neon accents, Phosphor icons.
 */
import React from 'react';
import { Link } from 'react-router';
import { Storefront, Tag, Star, Lightning, Sparkle, Gift, Percent, TShirt, Watch, Desktop, Package, Couch, ArrowRight } from '../../utils/phosphor-compat';
import { MegaMenuWrapper } from './MegaMenuWrapper';

interface ShopLink {
  title: string;
  href: string;
  Icon: React.ElementType;
  badge?: string;
}

const browseLinks: ShopLink[] = [
  { title: 'All Products', href: '/shop', Icon: Storefront },
  { title: 'New arrivals', href: '/new-arrivals', Icon: Sparkle, badge: 'new' },
  { title: 'Best sellers', href: '/best-sellers', Icon: Star },
  { title: 'Deals', href: '/deals', Icon: Lightning },
  { title: 'Gift Cards', href: '/gift-cards', Icon: Gift },
  { title: 'Sale', href: '/sale', Icon: Percent, badge: 'hot' }
];

const categoryLinks: ShopLink[] = [
  { title: 'Apparel', href: '/category/apparel', Icon: TShirt },
  { title: 'Accessories', href: '/category/accessories', Icon: Watch },
  { title: 'Games', href: '/category/games', Icon: Desktop },
  { title: 'Posters', href: '/category/posters', Icon: Package },
  { title: 'Collectibles', href: '/category/collectibles', Icon: Couch }
];

const featuredCards = [
  {
    title: 'Retro Apparel',
    subtitle: 'Fresh pixel-perfect styles',
    href: '/category/apparel',
    overlay: 'pink',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Collectibles',
    subtitle: 'Limited-run treasures',
    href: '/category/collectibles',
    overlay: 'purple',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop'
  }
];

export const ShopMegaMenu = () => {
  const renderContent = (closeMenu: () => void) => (
    <div className="wp-mega-menu__content">
      <div className="funky-mega__orb funky-mega__orb--pink funky-mega__orb--shop-pink" />
      <div className="funky-mega__orb funky-mega__orb--cyan funky-mega__orb--shop-cyan" />
      <div className="funky-mega__inner funky-mega__inner--shop">
        {/* Browse column */}
        <div className="funky-mega__column funky-mega__column--bordered">
          <h4 className="funky-mega__title">Browse</h4>
          <div>
            {browseLinks.map((link) => (
              <Link key={link.title} to={link.href} className="funky-mega__link">
                <span className="funky-mega__link-icon">
                  <link.Icon size={16} weight="duotone" />
                </span>
                <span className="funky-mega__link-label">{link.title}</span>
                {link.badge && (
                  <span className={`funky-mega__badge funky-mega__badge--${link.badge}`}>
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Categories column */}
        <div className="funky-mega__column funky-mega__column--bordered">
          <h4 className="funky-mega__title">Categories</h4>
          <div>
            {categoryLinks.map((link) => (
              <Link key={link.title} to={link.href} className="funky-mega__link">
                <span className="funky-mega__link-icon">
                  <link.Icon size={16} weight="duotone" />
                </span>
                <span className="funky-mega__link-label">{link.title}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Featured column */}
        <div className="funky-mega__column">
          <h4 className="funky-mega__title">Featured</h4>
          <div className="funky-mega__cards-grid funky-mega__cards-grid--vertical">
            {featuredCards.map((card) => (
              <Link key={card.title} to={card.href} className="funky-mega__card">
                <img
                  src={card.image}
                  alt={card.title}
                  className="funky-mega__card-bg"
                  loading="lazy"
                />
                <div className={`funky-mega__card-overlay funky-mega__card-overlay--${card.overlay}`} />
                <div className="funky-mega__card-body">
                  <span className="funky-mega__card-title">{card.title}</span>
                  <span className="funky-mega__card-subtitle">{card.subtitle}</span>
                  <span className="funky-mega__card-cta">
                    <span>Shop now</span>
                    <ArrowRight size={12} weight="bold" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="funky-mega__footer">
        <Link to="/shop" className="funky-mega__footer-link" onClick={closeMenu}>
          <span>View all products</span>
          <ArrowRight size={14} weight="bold" />
        </Link>
        <Link to="/sale" className="funky-mega__footer-link" onClick={closeMenu}>
          <span>Sale</span>
          <span className="funky-mega__badge funky-mega__badge--hot">Hot</span>
        </Link>
      </div>
    </div>
  );

  return (
    <MegaMenuWrapper
      triggerLabel="Shop"
      triggerHref="/shop"
      renderContent={renderContent}
    />
  );
}

ShopMegaMenu.displayName = 'ShopMegaMenu';