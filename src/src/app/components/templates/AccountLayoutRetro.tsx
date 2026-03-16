/**
 * AccountLayoutRetro
 *
 * "PlayPocket" FSE theme - My Account wrapper with sidebar navigation.
 * WCAG AA 2.2 compliant.
 */

import { Link, Outlet, useLocation } from 'react-router';
import { UserCircle, Package, MapPin, SignOut, Star } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

interface MenuItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ size?: number; weight?: string }>;
}

const MENU_ITEMS: MenuItem[] = [
  { path: '/account/dashboard', label: 'STATUS', icon: UserCircle },
  { path: '/account/orders', label: 'INVENTORY', icon: Package },
  { path: '/account/addresses', label: 'SAVE FILES', icon: MapPin },
  { path: '/account/loyalty', label: 'ACHIEVEMENTS', icon: Star },
];

export const AccountLayoutRetro = () => {
  const location = useLocation();

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-account-layout">
          {/* Page Title */}
          <div className="retro-account-layout__header">
            <h1 className="retro-font-display retro-bold retro-account-layout__title">
              PLAYER HUB
            </h1>
          </div>

          <div className="retro-account-layout__content">
            {/* Sidebar Navigation */}
            <nav
              className="retro-account-layout__sidebar"
              aria-label="Account Navigation"
            >
              <div className="retro-account-layout__nav-list">
                {MENU_ITEMS.map((item) => {
                  const isActive = location.pathname.includes(item.path);
                  const IconComponent = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`retro-font-display retro-bold retro-account-layout__nav-link ${
                        isActive ? 'retro-account-layout__nav-link--active' : ''
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <IconComponent size={24} weight={isActive ? 'fill' : 'bold'} />
                      {item.label}
                    </Link>
                  );
                })}

                <hr className="retro-account-layout__nav-divider" />

                <Link
                  to="/account/login"
                  className="retro-font-display retro-bold retro-account-layout__nav-link retro-account-layout__nav-link--logout"
                >
                  <SignOut size={24} weight="bold" />
                  QUIT GAME
                </Link>
              </div>
            </nav>

            {/* Main Content Area */}
            <main className="retro-account-layout__main">
              <Outlet />
            </main>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

AccountLayoutRetro.displayName = 'AccountLayoutRetro';