/**
 * SiteLayout — Shared Site Chrome
 *
 * WordPress FSE parity: this is the equivalent of a theme's
 * `templates/index.html` block template that includes `header.html`
 * and `footer.html` as Template Parts around the page content.
 *
 * Every route inside this layout automatically receives the
 * shared HeaderRetro, SiteBreadcrumb, and FooterRetro. Individual
 * page templates that still import HeaderRetro/FooterRetro will
 * render nothing (they detect the SiteLayoutContext and return null).
 *
 * **Styling:** Inherits retro theme tokens from :root
 * **Dark Mode:** Automatic — header/footer/breadcrumbs use CSS variables
 * **WCAG AA 2.2:** Skip-to-content link, landmark structure, breadcrumb nav
 *
 * @layout
 */

import { Outlet } from 'react-router';
import { HeaderRetroPattern } from '../patterns/HeaderRetroPattern';
import { FooterRetroPattern } from '../patterns/FooterRetroPattern';
import { SiteBreadcrumb } from '../common/SiteBreadcrumb';
import { SiteLayoutContext } from '../../contexts/SiteLayoutContext';
import { FloatingInvaders } from '../patterns/FloatingInvaders';

export const SiteLayout = () => {
  return (
    <SiteLayoutContext.Provider value={{ hasSharedChrome: true }}>
      <FloatingInvaders />
      <HeaderRetroPattern />
      <SiteBreadcrumb />
      <Outlet />
      <FooterRetroPattern />
    </SiteLayoutContext.Provider>
  );
};

SiteLayout.displayName = 'SiteLayout';