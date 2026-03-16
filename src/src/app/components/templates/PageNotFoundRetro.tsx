/**
 * PageNotFoundRetro
 *
 * "PlayPocket" FSE theme - 404 Error page.
 * WCAG AA 2.2 compliant with prominent sitemap discovery.
 */

import { Link } from 'react-router';
import { Ghost, ArrowLeft, Map, ArrowRight } from 'lucide-react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';

export const PageNotFoundRetro = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <main className="retro-main">
          <div className="retro-not-found-layout">
            <Ghost size={120} className="retro-not-found-layout__icon" />
            <h1 className="retro-font-display retro-bold retro-not-found-layout__title">GAME OVER</h1>
            <h2 className="retro-font-display retro-bold retro-not-found-layout__subtitle">ERROR 404: LEVEL NOT FOUND</h2>
            <p className="retro-font-body retro-not-found-layout__desc">
              The cartridge might need blowing into, or this link is completely broken.
              Either way, the requested coordinate does not exist.
            </p>

            <div className="retro-not-found-layout__actions">
              <Link to="/" className="retro-button retro-button--primary retro-font-display retro-bold retro-not-found-layout__link">
                <ArrowLeft />
                RETURN TO START
              </Link>
              <Link to="/shop" className="retro-button retro-button--secondary retro-font-display retro-bold retro-not-found-layout__link">
                BROWSE INVENTORY
              </Link>
            </div>
          </div>

          {/* Sitemap Discovery Banner */}
          <div className="retro-sitemap-cta">
            <div className="retro-sitemap-cta__card">
              <Map size={40} className="retro-sitemap-cta__icon" />
              <div className="retro-sitemap-cta__content">
                <h2 className="retro-font-display retro-bold retro-sitemap-cta__title">
                  LOST? CHECK THE MAP!
                </h2>
                <p className="retro-font-body retro-sitemap-cta__desc">
                  Browse all 150+ pages organized by category. Use search to find exactly what you need.
                </p>
              </div>
              <Link to="/sitemap" className="retro-button retro-button--primary retro-font-display retro-bold retro-sitemap-cta__btn">
                VIEW SITEMAP <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </main>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
}

PageNotFoundRetro.displayName = 'PageNotFoundRetro';
