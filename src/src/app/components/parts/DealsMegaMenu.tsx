import React from 'react';
import { Link } from 'react-router';
import { Lightning, TagSimple, Gift, Percent, Trophy, Ticket, ArrowRight, Fire, Timer, CreditCard } from '../../utils/phosphor-compat';
import { MegaMenuWrapper } from './MegaMenuWrapper';

/**
 * DealsMegaMenu - Funky Redesign
 * 3-column layout: deals list | featured deal cards | promo highlight
 * Glassmorphism, neon gradients, pulsing badges.
 */

interface DealLink {
  title: string;
  href: string;
  Icon: React.ElementType;
  desc: string;
  badge?: string;
}

const dealLinks: DealLink[] = [
  { title: 'All Deals', href: '/promotions', Icon: TagSimple, desc: 'View all offers' },
  { title: 'Flash Sale', href: '/promotions/flash-sale', Icon: Lightning, desc: 'Limited time only', badge: 'hot' },
  { title: 'Seasonal Sale', href: '/promotions/seasonal', Icon: Percent, desc: 'Winter collection', badge: 'sale' },
  { title: 'Bundle Deals', href: '/promotions/bundles', Icon: Gift, desc: 'Save on sets' },
  { title: 'Clearance', href: '/promotions/clearance', Icon: Ticket, desc: 'Final markdown', badge: 'sale' },
  { title: 'Loyalty Rewards', href: '/loyalty', Icon: Trophy, desc: 'Earn & redeem points', badge: 'new' },
  { title: 'Gift Cards', href: '/gift-cards', Icon: CreditCard, desc: 'Give the gift of choice' }
];

const featuredDeals = [
  {
    title: 'Winter Clearance',
    subtitle: 'Up to 70% off selected items',
    href: '/promotions/winter-clearance',
    overlay: 'cyan',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Flash Sale',
    subtitle: "24 hours only - don't miss out",
    href: '/promotions/flash-sale',
    overlay: 'orange',
    image: 'https://images.unsplash.com/photo-1722718467706-a2be2503d791?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Buy 2 Get 1 Free',
    subtitle: 'On all accessories & more',
    href: '/promotions/buy-2-get-1',
    overlay: 'purple',
    image: 'https://images.unsplash.com/photo-1637590957181-8893af2a8344?q=80&w=600&auto=format&fit=crop'
  }
];

export const DealsMegaMenu = () => {
  const renderContent = (closeMenu: () => void) => (
    <div className="wp-mega-menu__content">
      <div className="funky-mega__orb funky-mega__orb--pink" style={{ top: '-60px', left: '-80px' }} />
      <div className="funky-mega__orb funky-mega__orb--cyan" style={{ bottom: '-50px', right: '-50px' }} />
      <div className="funky-mega__inner funky-mega__inner--deals">
        {/* Deals list column */}
        <div className="funky-mega__column funky-mega__column--bordered">
          <h4 className="funky-mega__title">Deals &amp; Offers</h4>
          <div>
            {dealLinks.map((link) => (
              <Link key={link.title} to={link.href} className="funky-mega__link">
                <span className="funky-mega__link-icon">
                  <link.Icon size={16} weight="duotone" />
                </span>
                <span className="funky-mega__link-text">
                  <span className="funky-mega__link-label">{link.title}</span>
                  <span className="funky-mega__link-desc">{link.desc}</span>
                </span>
                {link.badge && (
                  <span className={`funky-mega__badge funky-mega__badge--${link.badge}`}>
                    {link.badge === 'hot' ? 'Hot' : link.badge === 'new' ? 'New' : 'Sale'}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Featured deals column */}
        <div className="funky-mega__column funky-mega__column--bordered">
          <h4 className="funky-mega__title">Featured Deals</h4>
          <div className="funky-mega__cards-grid funky-mega__cards-grid--vertical">
            {featuredDeals.map((deal) => (
              <Link key={deal.title} to={deal.href} className="funky-mega__card">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="funky-mega__card-bg"
                  loading="lazy"
                />
                <div className={`funky-mega__card-overlay funky-mega__card-overlay--${deal.overlay}`} />
                <div className="funky-mega__card-body">
                  <span className="funky-mega__card-title">{deal.title}</span>
                  <span className="funky-mega__card-subtitle">{deal.subtitle}</span>
                  <span className="funky-mega__card-cta">
                    <span>Shop now</span>
                    <ArrowRight size={12} weight="bold" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Promo highlight panel */}
        <div className="funky-mega__column funky-mega__promo-panel">
          <div className="funky-mega__promo-icon">
            <Fire size={24} weight="fill" />
          </div>
          <span className="funky-mega__promo-label">Limited time</span>
          <span className="funky-mega__promo-value">Up to 70% Off</span>
          <span className="funky-mega__link-desc" style={{ textAlign: 'center' }}>
            Seasonal clearance on hundreds of items. Don&apos;t miss out!
          </span>
          <Link to="/sale" className="funky-mega__promo-cta funky-spring-hover">
            <span>Shop Sale</span>
            <ArrowRight size={14} weight="bold" />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="funky-mega__footer">
        <Link to="/promotions" className="funky-mega__footer-link" onClick={closeMenu}>
          <span>View all deals</span>
          <ArrowRight size={14} weight="bold" />
        </Link>
        <Link to="/loyalty" className="funky-mega__footer-link" onClick={closeMenu}>
          <Trophy size={14} weight="duotone" />
          <span>Loyalty Rewards</span>
        </Link>
      </div>
    </div>
  );

  return (
    <MegaMenuWrapper
      triggerLabel="Deals"
      triggerHref="/deals"
      renderContent={renderContent}
    />
  );
}