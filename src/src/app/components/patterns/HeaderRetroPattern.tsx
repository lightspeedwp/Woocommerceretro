/**
 * HeaderRetroPattern
 *
 * Retro-themed header with full mega menu navigation for all top-level items.
 * Desktop: hover/keyboard-triggered dropdown mega panels.
 * Mobile: full-screen overlay with accordion sections.
 *
 * Menus: Shop, Deals, Memberships, Community, About
 *
 * **Styling:** BEM (.retro-header__*, .retro-nav__*, .retro-mega-menu__*)
 *   in /src/styles/sections/retro-mega-menu.css
 * **Data:** /src/app/data/megaMenuData.ts
 *
 * WCAG AA 2.2: keyboard nav, ARIA, focus management, 44px touch targets
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router';
import {
  MagnifyingGlass, Heart, ShoppingCart, Sun, Moon, X, User, CaretDown
} from '../../utils/phosphor-compat';
import { useTheme } from '../../contexts/ThemeContext';
import { useCart } from '../../contexts/CartContext';
import { allMenus } from '../../data/megaMenuData';
import { DesktopMegaPanel, MobileSection } from './MegaMenuPanel';
import { PlayPocketLogo } from './PlayPocketLogo';

/* ─── Main Header Component ──────────────────────── */

export const HeaderRetroPattern = () => {
  const themeContext = useTheme();
  const cartContext = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);

  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cartItemCount = cartContext.items.reduce(
    (total, item) => total + item.quantity, 0
  );

  /* ── Timer helpers ── */
  const clearClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    clearClose();
    closeTimerRef.current = setTimeout(() => setOpenDesktopMenu(null), 200);
  }, [clearClose]);

  /* ── Keyboard: Escape closes everything ── */
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileOpen(false);
        setOpenDesktopMenu(null);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  /* ── Body scroll lock for mobile ── */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  /* ── Cleanup timers ── */
  useEffect(() => () => clearClose(), [clearClose]);

  const closeMobile = useCallback(() => setIsMobileOpen(false), []);

  /* ── Desktop nav item handlers ── */
  const handleItemEnter = (id: string) => {
    clearClose();
    setOpenDesktopMenu(id);
  };

  const handleItemLeave = () => {
    scheduleClose();
  };

  const handleTriggerKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      if (e.key !== 'Enter') e.preventDefault();
      setOpenDesktopMenu(id);
    }
    if (e.key === 'Escape') {
      setOpenDesktopMenu(null);
    }
  };

  return (
    <div className="retro-header-wrapper">
      <header className="retro-header">
        <div className="retro-header__inner alignwide">
        {/* Logo */}
        <div className="retro-logo">
          <PlayPocketLogo />
        </div>

        {/* Desktop Navigation with Mega Menus */}
        <nav
          className="retro-nav retro-font-display retro-bold"
          aria-label="Main navigation"
        >
          {allMenus.map((menu) => (
            <div
              key={menu.id}
              className={`retro-nav__item${openDesktopMenu === menu.id ? ' retro-nav__item--open' : ''}`}
              onMouseEnter={() => handleItemEnter(menu.id)}
              onMouseLeave={handleItemLeave}
              onFocus={() => handleItemEnter(menu.id)}
              onBlur={(e) => {
                const wrapper = e.currentTarget;
                requestAnimationFrame(() => {
                  if (!wrapper.contains(document.activeElement)) {
                    setOpenDesktopMenu(null);
                  }
                });
              }}
            >
              <Link
                to={menu.href}
                className="retro-nav__trigger"
                aria-expanded={openDesktopMenu === menu.id}
                aria-haspopup="true"
                onKeyDown={(e) => handleTriggerKeyDown(e, menu.id)}
              >
                {menu.label}
                <CaretDown size={12} className="retro-nav__caret" />
              </Link>
              <DesktopMegaPanel menu={menu} />
            </div>
          ))}

          {/* Sitemap standalone link */}
          <div className="retro-nav__item">
            <Link to="/sitemap" className="retro-nav__trigger">ALL PAGES</Link>
          </div>
        </nav>

        {/* Actions */}
        <div className="retro-actions">
          {isSearchOpen ? (
            <div className="retro-search-pill">
              <MagnifyingGlass size={16} strokeWidth={2.5} className="retro-search-pill__icon" />
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
                <X size={16} strokeWidth={2.5} />
              </button>
            </div>
          ) : (
            <button
              id="search"
              className="retro-action-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <MagnifyingGlass size={22} strokeWidth={2.5} />
            </button>
          )}

          {themeContext && (
            <button
              className="retro-action-btn"
              onClick={() => themeContext.setMode(themeContext.mode === 'light' ? 'dark' : 'light')}
              aria-label={themeContext.mode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {themeContext.mode === 'light'
                ? <Moon size={22} strokeWidth={2.5} />
                : <Sun size={22} strokeWidth={2.5} />}
            </button>
          )}

          <Link to="/account" className="retro-action-btn" aria-label="My account">
            <User size={22} strokeWidth={2.5} />
          </Link>

          <Link to="/wishlist" className="retro-action-btn" aria-label="Wishlist">
            <Heart size={22} strokeWidth={2.5} />
          </Link>

          <button
            className="retro-action-btn retro-action-btn--cart"
            aria-label={`Cart, ${cartItemCount} items`}
            onClick={() => window.dispatchEvent(new Event('open-mini-cart'))}
          >
            <ShoppingCart size={22} strokeWidth={2.5} />
            {cartItemCount > 0 && (
              <span className="retro-badge retro-font-display">{cartItemCount}</span>
            )}
          </button>

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
        </div>
      </header>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`retro-mobile-menu${isMobileOpen ? ' retro-mobile-menu--open' : ''}`}
        aria-hidden={!isMobileOpen}
      >
        {allMenus.map((menu) => (
          <MobileSection
            key={menu.id}
            menu={menu}
            isOpen={openMobileSection === menu.id}
            onToggle={() =>
              setOpenMobileSection(openMobileSection === menu.id ? null : menu.id)
            }
            onLinkClick={closeMobile}
          />
        ))}
        <Link to="/sitemap" className="retro-mobile-menu__standalone" onClick={closeMobile}>
          ALL PAGES
        </Link>
      </div>
    </div>
  );
};

HeaderRetroPattern.displayName = 'HeaderRetroPattern';