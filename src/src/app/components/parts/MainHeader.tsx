import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { List as Menu, MagnifyingGlass as Search, UserCircle as UserRound, X } from '@phosphor-icons/react';
import { Container } from '../common/Container';
import { MiniCart } from './MiniCart';
import { MobileMenu } from './MobileMenu';
import { ShopLogo } from '../common/Logo';
import { ThemeToggle } from '../blocks/theme/ThemeToggle';
import { Navigation } from '../blocks/theme/Navigation';
import { MAIN_MENU } from '../../data/navigation';

/**
 * MainHeader Component (Global Template Part) — Funky Redesign (Phase 2)
 */
export const MainHeader = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigationMenu = MAIN_MENU
    .map((item) => ({
      id: item.id,
      title: item.label,
      url: item.url,
      megaMenu: item.megaMenu ? item.id : undefined
    }))
    .filter((item) => item.id !== 'home');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    if (isSearchOpen) setIsSearchOpen(false);
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    if (isMenuOpen) setIsMenuOpen(false);
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="wp-site-header wp-site-header--funky">
      <a href="#main-content" className="sr-only wp-skip-link">Skip to main content</a>
      <Container variant="site">
        <div className="wp-site-header__inner">
          {/* MOBILE: Menu Toggle + Logo + Actions */}
          <div className="wp-header-mobile">
            <button
              type="button"
              className="wp-header-mobile__menu-toggle funky-spring-hover"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <div className="wp-header-mobile__logo">
              <Link to="/" aria-label="Home">
                <ShopLogo variant="current" className="wp-site-logo" />
              </Link>
            </div>
            <div className="wp-header-mobile__actions">
              <button
                type="button"
                className="wp-header-mobile__search-toggle funky-spring-hover"
                onClick={toggleSearch}
                aria-label="Toggle search"
              >
                {isSearchOpen ? <X size={24} /> : <Search size={24} />}
              </button>
              <div className="wp-header-mobile__cart">
                <MiniCart />
              </div>
            </div>
          </div>

          {/* DESKTOP: Logo + Nav + Actions */}
          <div className="wp-header-desktop">
            <div className="wp-header-desktop__logo">
              <Link to="/" aria-label="Home">
                <ShopLogo variant="current" className="wp-site-logo" />
              </Link>
            </div>
            <nav className="wp-header-desktop__nav">
              <Navigation
                menu={navigationMenu}
                orientation="horizontal"
                spacing="lg"
                align="center"
                showMobileToggle={false}
                enableMegaMenus={true}
                className="wp-header-desktop__navigation"
              />
            </nav>
            <div className="wp-header-desktop__actions wp-header-desktop__actions--icon-bar">
              {/* Search */}
              <div className="wp-header-desktop__search wp-header-desktop__action-item">
                {isSearchOpen && (
                  <div className="wp-header-desktop__search-form">
                    <form onSubmit={handleSearch}>
                      <input
                        type="search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="wp-header-desktop__search-input funky-input-glow"
                        autoFocus
                      />
                    </form>
                  </div>
                )}
                <button
                  type="button"
                  aria-label="Toggle search"
                  className="wp-header-desktop__action-button funky-spring-hover"
                  onClick={toggleSearch}
                >
                  {isSearchOpen ? <X size={20} /> : <Search size={20} />}
                </button>
              </div>
              {/* Account */}
              <div className="wp-header-desktop__action-item">
                <Link to="/account" className="wp-header-desktop__account funky-spring-hover" aria-label="My Account">
                  <UserRound size={20} />
                </Link>
              </div>
              {/* Theme Toggle */}
              <div className="wp-header-desktop__action-item">
                <ThemeToggle />
              </div>
              {/* Cart */}
              <div className="wp-header-desktop__action-item wp-header-desktop__cart funky-spring-hover">
                <MiniCart />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Mobile Search Panel */}
      {isSearchOpen && (
        <div className="wp-header-mobile__search-panel">
          <form onSubmit={handleSearch} className="wp-header-mobile__search-form">
            <div className="wp-header-mobile__search-wrapper">
              <Search size={18} className="wp-header-mobile__search-icon" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="wp-header-mobile__search-input funky-input-glow"
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  className="wp-header-mobile__search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </form>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      <MobileMenu isOpen={isMenuOpen} onOpenChange={setIsMenuOpen} />
    </header>
  );
}