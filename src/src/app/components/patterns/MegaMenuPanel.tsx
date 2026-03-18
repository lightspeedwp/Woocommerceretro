/**
 * MegaMenuPanel — Desktop & Mobile mega menu sub-components
 *
 * Used by HeaderRetroPattern. Extracted to comply with 300-line limit.
 *
 * **Styling:** BEM (.retro-mega-menu__*, .retro-mobile-menu__*)
 *   in /src/styles/sections/retro-mega-menu.css
 */

import { Link } from 'react-router';
import { CaretDown } from '../../utils/phosphor-compat';
import type { MegaMenuData, MegaColumn, MegaLink } from '../../data/megaMenuData';

/* ─── Badge ─────────────────────────────────────── */

const RetroMenuBadge = ({ badge }: { badge: MegaLink['badge'] }) => {
  if (!badge) return null;
  const map: Record<string, string> = {
    new: 'NEW', hot: 'HOT', sale: 'SALE', live: 'LIVE',
  };
  return (
    <span className={`retro-mega-menu__badge retro-mega-menu__badge--${badge}`}>
      {map[badge] || badge}
    </span>
  );
};

/* ─── Desktop Mega Panel ─────────────────────────── */

export const DesktopMegaPanel = ({ menu }: { menu: MegaMenuData }) => {
  const colClass = menu.columns.length >= 3
    ? 'retro-mega-menu__grid--3col'
    : '';

  return (
    <div
      className={`retro-mega-menu${menu.wide ? ' retro-mega-menu--wide' : ''}`}
      role="region"
      aria-label={`${menu.label} menu`}
    >
      <div className={`retro-mega-menu__grid ${colClass}`}>
        {menu.columns.map((col: MegaColumn) => (
          <div key={col.heading} className="retro-mega-menu__col">
            <div className="retro-mega-menu__heading">{col.heading}</div>
            {col.links.map((link: MegaLink) => (
              <Link
                key={link.href + link.title}
                to={link.href}
                className="retro-mega-menu__link"
              >
                <span className="retro-mega-menu__link-text">
                  <span className="retro-mega-menu__link-title">{link.title}</span>
                  {link.desc && (
                    <span className="retro-mega-menu__link-desc">{link.desc}</span>
                  )}
                </span>
                <RetroMenuBadge badge={link.badge} />
              </Link>
            ))}
          </div>
        ))}
      </div>
      {menu.ctaLabel && menu.ctaHref && (
        <div className="retro-mega-menu__cta">
          <Link to={menu.ctaHref} className="retro-mega-menu__cta-link">
            {menu.ctaLabel} →
          </Link>
        </div>
      )}
    </div>
  );
};

DesktopMegaPanel.displayName = 'DesktopMegaPanel';

/* ─── Mobile Accordion Section ───────────────────── */

export const MobileSection = ({
  menu,
  isOpen,
  onToggle,
  onLinkClick,
}: {
  menu: MegaMenuData;
  isOpen: boolean;
  onToggle: () => void;
  onLinkClick: () => void;
}) => (
  <div className="retro-mobile-menu__section">
    <button
      className="retro-mobile-menu__trigger"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span>{menu.label}</span>
      <CaretDown
        size={16}
        strokeWidth={2.5}
        className="retro-mobile-menu__trigger-caret"
      />
    </button>
    <div className={`retro-mobile-menu__panel${isOpen ? ' retro-mobile-menu__panel--open' : ''}`}>
      {menu.columns.map((col) => (
        <div key={col.heading}>
          <div className="retro-mobile-menu__subheading">{col.heading}</div>
          {col.links.map((link) => (
            <Link
              key={link.href + link.title}
              to={link.href}
              className="retro-mobile-menu__link"
              onClick={onLinkClick}
            >
              <span>{link.title}</span>
              {link.badge && <RetroMenuBadge badge={link.badge} />}
            </Link>
          ))}
        </div>
      ))}
    </div>
  </div>
);

MobileSection.displayName = 'MobileSection';