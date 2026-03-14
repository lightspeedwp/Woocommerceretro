import React, { useState } from 'react';
import { useLocation, Link } from 'react-router';
import { CaretDown, List, X } from '@phosphor-icons/react';
import { ShopMegaMenu } from '../../parts/ShopMegaMenu';
import { BlogMegaMenu } from '../../parts/BlogMegaMenu';
import { AboutMegaMenu } from '../../parts/AboutMegaMenu';
import { DealsMegaMenu } from '../../parts/DealsMegaMenu';
import { ContactMegaMenu } from '../../parts/ContactMegaMenu';

const MEGA_MENU_COMPONENTS: Record<string, React.ComponentType> = {
  shop: ShopMegaMenu,
  blog: BlogMegaMenu,
  about: AboutMegaMenu,
  deals: DealsMegaMenu,
  contact: ContactMegaMenu,
};

interface MenuItem {
  id: string | number;
  title: string;
  url: string;
  megaMenu?: string;
  children?: MenuItem[];
}

interface NavigationProps {
  menu: MenuItem[];
  orientation?: 'horizontal' | 'vertical';
  spacing?: string;
  align?: string;
  showMobileToggle?: boolean;
  enableMegaMenus?: boolean;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

export const Navigation = ({
  menu, orientation = 'horizontal', spacing = 'md', align = 'start',
  showMobileToggle = true, enableMegaMenus = false, className = '', style, ariaLabel = 'Main navigation',
}: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleSubmenu = (itemId: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const isActive = (url: string) => location.pathname === url;

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const active = isActive(item.url);
    const isSubmenuOpen = !!openSubmenus[String(item.id)];

    return (
      <li key={item.id} className={`wp-block-navigation-item ${level > 0 ? 'wp-block-navigation-item--nested' : ''}`}>
        <div>
          <Link
            to={item.url}
            className={`wp-block-navigation-item__link funky-link ${active ? 'wp-block-navigation-item__link--active funky-text-cyan' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            {item.title}
          </Link>
          {hasChildren && (
            <button
              onClick={() => toggleSubmenu(String(item.id))}
              aria-expanded={isSubmenuOpen}
              aria-label={`Toggle ${item.title} submenu`}
              className={`wp-block-navigation-item__submenu-toggle ${isSubmenuOpen ? 'wp-block-navigation-item__submenu-toggle--open' : ''}`}
            >
              <CaretDown size={16} />
            </button>
          )}
        </div>
        {hasChildren && isSubmenuOpen && (
          <ul
            className={[
              'wp-block-navigation-submenu funky-glass-panel',
              level === 0 ? 'wp-block-navigation-submenu--top-level' : '',
              level === 0 && orientation === 'horizontal' ? 'wp-block-navigation-submenu--horizontal' : '',
              level > 0 ? 'wp-block-navigation-submenu--nested' : '',
            ].filter(Boolean).join(' ')}
          >
            {item.children!.map((child) => renderMenuItem(child, level + 1))}
          </ul>
        )}
      </li>
    );
  };

  const renderMenu = () =>
    menu.map((item) => {
      if (enableMegaMenus && item.megaMenu && MEGA_MENU_COMPONENTS[item.megaMenu]) {
        const MegaMenuComponent = MEGA_MENU_COMPONENTS[item.megaMenu];
        return (
          <li key={item.id} className="wp-block-navigation-item wp-block-navigation-item--has-mega-menu">
            <MegaMenuComponent />
          </li>
        );
      }
      return renderMenuItem(item);
    });

  const containerClass = [
    'wp-block-navigation__container',
    `wp-block-navigation__container--spacing-${spacing}`,
    `wp-block-navigation__container--align-${align}`,
    orientation === 'horizontal' ? 'wp-block-navigation__container--horizontal' : '',
    orientation === 'vertical' ? 'wp-block-navigation__container--vertical' : '',
    showMobileToggle ? 'wp-block-navigation__container--with-toggle' : '',
    showMobileToggle && isMobileMenuOpen ? 'wp-block-navigation__container--mobile-open' : '',
  ].filter(Boolean).join(' ');

  return (
    <nav className={`wp-block-navigation ${className}`} style={style} aria-label={ariaLabel}>
      {showMobileToggle && (
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
          className="wp-block-navigation__mobile-toggle"
        >
          {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      )}
      <ul className={containerClass}>{renderMenu()}</ul>
    </nav>
  );
}