/**
 * FrontPageRetro
 *
 * FSE Theme "PlayPocket" - Home Page.
 * Composes Header, Footer, and Patterns into the retro front page layout.
 */

import { Link } from 'react-router';
import { MapTrifold, ArrowRight } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { CategoryRowRetro } from '../patterns/CategoryRowRetro';
import { FeaturedProductsRetro } from '../patterns/FeaturedProductsRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';

export const FrontPageRetro = () => {
  // Google Fonts loading moved to RootLayout (single load for all templates).

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />
        <main className="retro-main">
          <HeroRetro />
          <CategoryRowRetro />
          <FeaturedProductsRetro title="NEW ARRIVALS <<" linkText="FRESH DROPS! >" />
          <FeaturedProductsRetro title="BEST SELLERS <<" linkText="HOT ITEMS! >" />
          <BottomGridRetro />
          
          {/* Navigation Discovery Banner */}
          <div className="retro-sitemap-cta">
            <div className="retro-sitemap-cta__card">
              <MapTrifold size={40} weight="bold" className="retro-sitemap-cta__icon" />
              <div className="retro-sitemap-cta__content">
                <h2 className="retro-font-display retro-bold retro-sitemap-cta__title">
                  EXPLORE ALL PAGES
                </h2>
                <p className="retro-font-body retro-sitemap-cta__desc">
                  Looking for something specific? Browse our complete sitemap with 150+ pages organized by category.
                </p>
              </div>
              <Link to="/sitemap" className="retro-button retro-button--primary retro-font-display retro-bold retro-sitemap-cta__btn">
                VIEW SITEMAP <ArrowRight size={18} weight="bold" />
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

FrontPageRetro.displayName = 'FrontPageRetro';