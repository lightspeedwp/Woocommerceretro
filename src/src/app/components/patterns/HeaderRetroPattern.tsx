/**
 * HeaderRetroPattern
 *
 * Streamlined retro-themed header with essential navigation links.
 * Features: direct navigation, search, theme toggle, account, wishlist, cart.
 * Mobile: clean slide-out menu with 5 main links.
 *
 * **Styling:** BEM (.retro-header__*, .retro-nav__*, .retro-mobile-menu__*)
 *   in /src/styles/sections/retro-mega-menu.css
 * **Theme tokens:** /src/styles/retro-theme.css
 *
 * WCAG AA 2.2: keyboard navigation, ARIA labels, focus states
 */

import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link } from 'react-router';
import {
  MagnifyingGlass, Heart, ShoppingCart, Sun, Moon, X, User
} from '@phosphor-icons/react';
import logoImg from 'figma:asset/f367e8ff057e1239dc88f32619b6a1f694c7db8d.png';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';

/* ─── Navigation Data ────────────────────────────────── */

interface NavItem {
  id: string;
  label: string;
  to: string;
}

const navItems: NavItem[] = [
  {
    id: 'shop',
    label: 'SHOP',
    to: '/shop',
  },
  {
    id: 'deals',
    label: 'DEALS',
    to: '/promotions/flash-sale',
  },
  {
    id: 'community',
    label: 'COMMUNITY',
    to: '/community',
  },
  {
    id: 'about',
    label: 'ABOUT',
    to: '/about',
  },
  {
    id: 'sitemap',
    label: 'ALL PAGES',
    to: '/sitemap',
  },
];

/* ─── Component ──────────────────────────────────────── */

export const HeaderRetroPattern = () => {
  const themeContext = useTheme();
  const cartContext = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const cartItemCount = cartContext.items.reduce((total, item) => total + item.quantity, 0);

  /* Close mobile menu on Escape */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  return (
    <div className="retro-header-wrapper">
      <header className="retro-header">
        {/* Logo */}
        <div className="retro-logo">
          <Link to="/">
            <img src={logoImg} alt="PlayPocket" className="retro-header__logo-img" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="retro-nav retro-font-display retro-bold" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              key={item.id}
              className="retro-nav__item"
            >
              <Link to={item.to} className="retro-nav__trigger">
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Actions */}
        <div className="retro-actions">
          {/* Search */}
          {isSearchOpen ? (
            <div className="retro-search-pill">
              <MagnifyingGlass size={16} weight="bold" className="retro-search-pill__icon" />
              <input
                type="text"
                placeholder="SEARCH..."
                autoFocus
                className="retro-font-display retro-bold retro-search-pill__input"
                aria-label="Search products"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="retro-search-pill__close"
                aria-label="Close search"
              >
                <X size={16} weight="bold" />
              </button>
            </div>
          ) : (
            <button
              className="retro-action-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <MagnifyingGlass size={22} weight="bold" />
            </button>
          )}

          {/* Theme Toggle */}
          {themeContext && (
            <button
              className="retro-action-btn"
              onClick={() => themeContext.setMode(themeContext.mode === 'light' ? 'dark' : 'light')}
              aria-label={themeContext.mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {themeContext.mode === 'light' ? <Moon size={22} weight="bold" /> : <Sun size={22} weight="bold" />}
            </button>
          )}

          {/* Account */}
          <Link to="/account" className="retro-action-btn" aria-label="My account">
            <User size={22} weight="bold" />
          </Link>

          {/* Wishlist */}
          <Link to="/wishlist" className="retro-action-btn" aria-label="Wishlist">
            <Heart size={22} weight="bold" />
          </Link>

          {/* Cart */}
          <button
            className="retro-action-btn retro-action-btn--cart"
            aria-label={`Cart, ${cartItemCount} items`}
            onClick={() => window.dispatchEvent(new Event('open-mini-cart'))}
          >
            <ShoppingCart size={22} weight="bold" />
            {cartItemCount > 0 && <span className="retro-badge retro-font-display">{cartItemCount}</span>}
          </button>

          {/* Mobile Hamburger */}
          <button
            className={`retro-hamburger${isMobileOpen ? ' retro-hamburger--open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileOpen}
          >
            <span className="retro-hamburger__line" />
            <span className="retro-hamburger__line" />
            <span className="retro-hamburger__line" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`retro-mobile-menu${isMobileOpen ? ' retro-mobile-menu--open' : ''}`} aria-hidden={!isMobileOpen}>
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.to || '/'}
            className="retro-mobile-menu__standalone"
            onClick={closeMobile}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

HeaderRetroPattern.displayName = 'HeaderRetroPattern';