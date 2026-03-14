import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { MagnifyingGlass, CaretDown, User, Tote, EnvelopeSimple, Phone, Heart, Lightning, Tag, Gift, Percent } from '@phosphor-icons/react';

/**
 * MobileMenu Component (Template Part) — Funky Redesign (Phase 2)
 *
 * Full-screen mobile navigation with funky gradient overlay background,
 * neon-accented collapsible sections, and glow-on-hover quick links.
 *
 * @part
 */

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MobileMenu = ({ isOpen, onOpenChange }: MobileMenuProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop/search?q=${encodeURIComponent(searchQuery)}`);
      onOpenChange(false);
    }
  };

  const handleNavigate = (path: string) => {
    onOpenChange(false);
    navigate(path);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const renderLink = (to: string, children: React.ReactNode, className: string) => (
    <Link to={to} onClick={() => handleNavigate(to)} className={className}>
      {children}
    </Link>
  );

  if (!isOpen) return null;

  return (
    <div className="woocommerce-mobile-menu woocommerce-mobile-menu--funky">
      <div className="woocommerce-mobile-menu__inner">
        {/* Search */}
        <div className="woocommerce-mobile-menu__search">
          <form onSubmit={handleSearch} className="woocommerce-mobile-menu__search-form wp-block-search">
            <input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="wp-block-input wp-block-search__input woocommerce-mobile-menu__search-input funky-input-glow"
            />
            <MagnifyingGlass size={20} className="woocommerce-mobile-menu__search-icon" />
            <button type="submit" className="sr-only">Search</button>
          </form>
        </div>

        {/* Navigation */}
        <nav className="woocommerce-mobile-menu__nav">
          {/* Shop */}
          <div className="woocommerce-mobile-menu__nav-item">
            <button
              onClick={() => toggleSection('shop')}
              className="woocommerce-mobile-menu__nav-button funky-spring-hover"
              aria-expanded={expandedSections['shop']}
            >
              <span className="woocommerce-mobile-menu__nav-label--funky">Shop</span>
              <CaretDown size={20} className={`woocommerce-mobile-menu__chevron ${expandedSections['shop'] ? 'woocommerce-mobile-menu__chevron--open' : ''}`} />
            </button>
            {expandedSections['shop'] && (
              <div className="woocommerce-mobile-menu__submenu">
                {renderLink('/shop', 'All Products', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/new-arrivals', 'New Arrivals', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/best-sellers', 'Best Sellers', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/sale', 'Sale', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/shop/collections', 'Collections', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/subscriptions', 'Subscriptions', 'woocommerce-mobile-menu__submenu-link')}
              </div>
            )}
          </div>

          {/* Promotions */}
          <div className="woocommerce-mobile-menu__nav-item">
            <button
              onClick={() => toggleSection('promotions')}
              className="woocommerce-mobile-menu__nav-button funky-spring-hover"
              aria-expanded={expandedSections['promotions']}
            >
              <span className="woocommerce-mobile-menu__nav-label--funky">Promotions</span>
              <CaretDown size={20} className={`woocommerce-mobile-menu__chevron ${expandedSections['promotions'] ? 'woocommerce-mobile-menu__chevron--open' : ''}`} />
            </button>
            {expandedSections['promotions'] && (
              <div className="woocommerce-mobile-menu__submenu">
                {renderLink('/promotions', <span className="woocommerce-mobile-menu__submenu-icon-row"><Percent size={16} className="woocommerce-mobile-menu__submenu-icon" /> All Deals</span>, 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/promotions/flash-sale', <span className="woocommerce-mobile-menu__submenu-icon-row"><Lightning size={16} className="woocommerce-mobile-menu__submenu-icon" /> Flash Sale</span>, 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/promotions/seasonal', <span className="woocommerce-mobile-menu__submenu-icon-row"><Tag size={16} className="woocommerce-mobile-menu__submenu-icon" /> Seasonal Sale</span>, 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/promotions/bundles', <span className="woocommerce-mobile-menu__submenu-icon-row"><Gift size={16} className="woocommerce-mobile-menu__submenu-icon" /> Bundle Deals</span>, 'woocommerce-mobile-menu__submenu-link')}
              </div>
            )}
          </div>

          {/* Blog */}
          <div className="woocommerce-mobile-menu__nav-item">
            <button
              onClick={() => toggleSection('blog')}
              className="woocommerce-mobile-menu__nav-button funky-spring-hover"
              aria-expanded={expandedSections['blog']}
            >
              <span className="woocommerce-mobile-menu__nav-label--funky">Blog</span>
              <CaretDown size={20} className={`woocommerce-mobile-menu__chevron ${expandedSections['blog'] ? 'woocommerce-mobile-menu__chevron--open' : ''}`} />
            </button>
            {expandedSections['blog'] && (
              <div className="woocommerce-mobile-menu__submenu">
                {renderLink('/blog', 'All Posts', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/blog/format/audio', 'Podcasts', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/blog/format/video', 'Videos', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/blog/format/gallery', 'Galleries', 'woocommerce-mobile-menu__submenu-link')}
              </div>
            )}
          </div>

          {/* About */}
          <div className="woocommerce-mobile-menu__nav-item">
            <button
              onClick={() => toggleSection('about')}
              className="woocommerce-mobile-menu__nav-button funky-spring-hover"
              aria-expanded={expandedSections['about']}
            >
              <span className="woocommerce-mobile-menu__nav-label--funky">About</span>
              <CaretDown size={20} className={`woocommerce-mobile-menu__chevron ${expandedSections['about'] ? 'woocommerce-mobile-menu__chevron--open' : ''}`} />
            </button>
            {expandedSections['about'] && (
              <div className="woocommerce-mobile-menu__submenu">
                {renderLink('/about', 'About Us', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/about/our-story', 'Our Story', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/about/team', 'Team', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/about/careers', 'Careers', 'woocommerce-mobile-menu__submenu-link')}
                {renderLink('/stores', 'Store Locations', 'woocommerce-mobile-menu__submenu-link')}
              </div>
            )}
          </div>

          {/* Contact */}
          <div className="woocommerce-mobile-menu__nav-item">
            {renderLink('/contact', 'Contact', 'woocommerce-mobile-menu__nav-link')}
          </div>
        </nav>

        {/* Quick Links */}
        <div className="woocommerce-mobile-menu__quick-links woocommerce-mobile-menu__quick-links--funky">
          {renderLink('/account', <span className="woocommerce-mobile-menu__quick-link-content"><User size={24} className="woocommerce-mobile-menu__quick-link-icon" /><span className="woocommerce-mobile-menu__quick-link-label">Account</span></span>, 'woocommerce-mobile-menu__quick-link')}
          {renderLink('/cart', <span className="woocommerce-mobile-menu__quick-link-content"><Tote size={24} className="woocommerce-mobile-menu__quick-link-icon" /><span className="woocommerce-mobile-menu__quick-link-label">Cart</span></span>, 'woocommerce-mobile-menu__quick-link')}
          {renderLink('/wishlist', <span className="woocommerce-mobile-menu__quick-link-content"><Heart size={24} className="woocommerce-mobile-menu__quick-link-icon" /><span className="woocommerce-mobile-menu__quick-link-label">Wishlist</span></span>, 'woocommerce-mobile-menu__quick-link')}
        </div>

        {/* Contact Info */}
        <div className="woocommerce-mobile-menu__contact">
          <a href="mailto:support@example.com" className="woocommerce-mobile-menu__contact-link">
            <EnvelopeSimple size={18} />
            <span>support@example.com</span>
          </a>
          <a href="tel:+1234567890" className="woocommerce-mobile-menu__contact-link">
            <Phone size={18} />
            <span>(123) 456-7890</span>
          </a>
        </div>
      </div>
    </div>
  );
}