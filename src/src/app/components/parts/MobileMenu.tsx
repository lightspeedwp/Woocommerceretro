import React from 'react';
import * as ReactRouterModule from 'react-router';
import { MagnifyingGlass, CaretDown, User, Tote, EnvelopeSimple, Phone, Heart, Lightning, Tag, Gift, Percent } from '@phosphor-icons/react';

var useState = React.useState;
var useEffect = React.useEffect;
var useNavigate = ReactRouterModule.useNavigate;
var Link = ReactRouterModule.Link;

/**
 * MobileMenu Component (Template Part) — Funky Redesign (Phase 2)
 * 
 * Full-screen mobile navigation with funky gradient overlay background,
 * neon-accented collapsible sections, and glow-on-hover quick links.
 * 
 * @part
 * @param {boolean} isOpen - Controls menu open/close state
 * @param {function} onOpenChange - Callback when open state changes
 */

export function MobileMenu(props) {
  var isOpen = props.isOpen;
  var onOpenChange = props.onOpenChange;

  var _sq = useState('');
  var searchQuery = _sq[0];
  var setSearchQuery = _sq[1];
  var _se = useState({});
  var expandedSections = _se[0];
  var setExpandedSections = _se[1];
  var navigate = useNavigate();
  
  var toggleSection = function(sectionId) {
    var nextState = Object.assign({}, expandedSections);
    nextState[sectionId] = !nextState[sectionId];
    setExpandedSections(nextState);
  };

  var handleSearch = function(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/shop/search?q=" + encodeURIComponent(searchQuery));
      onOpenChange(false);
    }
  };

  var handleNavigate = function(path) {
    onOpenChange(false);
    navigate(path);
  };

  useEffect(function() {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return function() {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  var renderLink = function(to, children, className) {
    return React.createElement(Link, {
      to: to,
      onClick: function() { handleNavigate(to); },
      className: className
    }, children);
  };

  if (!isOpen) return null;

  return React.createElement('div', { className: "woocommerce-mobile-menu woocommerce-mobile-menu--funky" },
    React.createElement('div', { className: "woocommerce-mobile-menu__inner" },
      React.createElement('div', { className: "woocommerce-mobile-menu__search" },
        React.createElement('form', { onSubmit: handleSearch, className: "woocommerce-mobile-menu__search-form wp-block-search" },
          React.createElement('input', {
            type: "search",
            placeholder: "Search products...",
            value: searchQuery,
            onChange: function(e) { setSearchQuery(e.target.value); },
            className: "wp-block-input wp-block-search__input woocommerce-mobile-menu__search-input funky-input-glow"
          }),
          React.createElement(MagnifyingGlass, { size: 20, className: "woocommerce-mobile-menu__search-icon" }),
          React.createElement('button', { type: "submit", className: "sr-only" }, "Search")
        )
      ),
      React.createElement('nav', { className: "woocommerce-mobile-menu__nav" },
        React.createElement('div', { className: "woocommerce-mobile-menu__nav-item" },
          React.createElement('button', {
            onClick: function() { toggleSection('shop'); },
            className: "woocommerce-mobile-menu__nav-button funky-spring-hover",
            'aria-expanded': expandedSections['shop']
          },
            React.createElement('span', { className: "woocommerce-mobile-menu__nav-label--funky" }, "Shop"),
            React.createElement(CaretDown, { size: 20, className: "woocommerce-mobile-menu__chevron " + (expandedSections['shop'] ? 'woocommerce-mobile-menu__chevron--open' : '') })
          ),
          expandedSections['shop'] ? React.createElement('div', { className: "woocommerce-mobile-menu__submenu" },
            renderLink("/shop", "All Products", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/new-arrivals", "New Arrivals", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/best-sellers", "Best Sellers", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/sale", "Sale", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/shop/collections", "Collections", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/subscriptions", "Subscriptions", "woocommerce-mobile-menu__submenu-link")
          ) : null
        ),
        React.createElement('div', { className: "woocommerce-mobile-menu__nav-item" },
          React.createElement('button', {
            onClick: function() { toggleSection('promotions'); },
            className: "woocommerce-mobile-menu__nav-button funky-spring-hover",
            'aria-expanded': expandedSections['promotions']
          },
            React.createElement('span', { className: "woocommerce-mobile-menu__nav-label--funky" }, "Promotions"),
            React.createElement(CaretDown, { size: 20, className: "woocommerce-mobile-menu__chevron " + (expandedSections['promotions'] ? 'woocommerce-mobile-menu__chevron--open' : '') })
          ),
          expandedSections['promotions'] ? React.createElement('div', { className: "woocommerce-mobile-menu__submenu" },
            renderLink("/promotions", React.createElement('span', { className: "woocommerce-mobile-menu__submenu-icon-row" }, React.createElement(Percent, { size: 16, className: "woocommerce-mobile-menu__submenu-icon" }), " All Deals"), "woocommerce-mobile-menu__submenu-link"),
            renderLink("/promotions/flash-sale", React.createElement('span', { className: "woocommerce-mobile-menu__submenu-icon-row" }, React.createElement(Lightning, { size: 16, className: "woocommerce-mobile-menu__submenu-icon" }), " Flash Sale"), "woocommerce-mobile-menu__submenu-link"),
            renderLink("/promotions/seasonal", React.createElement('span', { className: "woocommerce-mobile-menu__submenu-icon-row" }, React.createElement(Tag, { size: 16, className: "woocommerce-mobile-menu__submenu-icon" }), " Seasonal Sale"), "woocommerce-mobile-menu__submenu-link"),
            renderLink("/promotions/bundles", React.createElement('span', { className: "woocommerce-mobile-menu__submenu-icon-row" }, React.createElement(Gift, { size: 16, className: "woocommerce-mobile-menu__submenu-icon" }), " Bundle Deals"), "woocommerce-mobile-menu__submenu-link")
          ) : null
        ),
        React.createElement('div', { className: "woocommerce-mobile-menu__nav-item" },
          React.createElement('button', {
            onClick: function() { toggleSection('blog'); },
            className: "woocommerce-mobile-menu__nav-button funky-spring-hover",
            'aria-expanded': expandedSections['blog']
          },
            React.createElement('span', { className: "woocommerce-mobile-menu__nav-label--funky" }, "Blog"),
            React.createElement(CaretDown, { size: 20, className: "woocommerce-mobile-menu__chevron " + (expandedSections['blog'] ? 'woocommerce-mobile-menu__chevron--open' : '') })
          ),
          expandedSections['blog'] ? React.createElement('div', { className: "woocommerce-mobile-menu__submenu" },
            renderLink("/blog", "All Posts", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/blog/format/audio", "Podcasts", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/blog/format/video", "Videos", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/blog/format/gallery", "Galleries", "woocommerce-mobile-menu__submenu-link")
          ) : null
        ),
        React.createElement('div', { className: "woocommerce-mobile-menu__nav-item" },
          React.createElement('button', {
            onClick: function() { toggleSection('about'); },
            className: "woocommerce-mobile-menu__nav-button funky-spring-hover",
            'aria-expanded': expandedSections['about']
          },
            React.createElement('span', { className: "woocommerce-mobile-menu__nav-label--funky" }, "About"),
            React.createElement(CaretDown, { size: 20, className: "woocommerce-mobile-menu__chevron " + (expandedSections['about'] ? 'woocommerce-mobile-menu__chevron--open' : '') })
          ),
          expandedSections['about'] ? React.createElement('div', { className: "woocommerce-mobile-menu__submenu" },
            renderLink("/about", "About Us", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/about/our-story", "Our Story", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/about/team", "Team", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/about/careers", "Careers", "woocommerce-mobile-menu__submenu-link"),
            renderLink("/stores", "Store Locations", "woocommerce-mobile-menu__submenu-link")
          ) : null
        ),
        React.createElement('div', { className: "woocommerce-mobile-menu__nav-item" },
          renderLink("/contact", "Contact", "woocommerce-mobile-menu__nav-link")
        )
      ),
      React.createElement('div', { className: "woocommerce-mobile-menu__quick-links woocommerce-mobile-menu__quick-links--funky" },
        renderLink("/account", React.createElement('span', { className: "woocommerce-mobile-menu__quick-link-content" }, React.createElement(User, { size: 24, className: "woocommerce-mobile-menu__quick-link-icon" }), React.createElement('span', { className: "woocommerce-mobile-menu__quick-link-label" }, "Account")), "woocommerce-mobile-menu__quick-link"),
        renderLink("/cart", React.createElement('span', { className: "woocommerce-mobile-menu__quick-link-content" }, React.createElement(Tote, { size: 24, className: "woocommerce-mobile-menu__quick-link-icon" }), React.createElement('span', { className: "woocommerce-mobile-menu__quick-link-label" }, "Cart")), "woocommerce-mobile-menu__quick-link"),
        renderLink("/wishlist", React.createElement('span', { className: "woocommerce-mobile-menu__quick-link-content" }, React.createElement(Heart, { size: 24, className: "woocommerce-mobile-menu__quick-link-icon" }), React.createElement('span', { className: "woocommerce-mobile-menu__quick-link-label" }, "Wishlist")), "woocommerce-mobile-menu__quick-link")
      ),
      React.createElement('div', { className: "woocommerce-mobile-menu__contact" },
        React.createElement('a', { href: "mailto:support@example.com", className: "woocommerce-mobile-menu__contact-link" },
          React.createElement(EnvelopeSimple, { size: 18 }),
          React.createElement('span', null, "support@example.com")
        ),
        React.createElement('a', { href: "tel:+1234567890", className: "woocommerce-mobile-menu__contact-link" },
          React.createElement(Phone, { size: 18 }),
          React.createElement('span', null, "(123) 456-7890")
        )
      )
    )
  );
}