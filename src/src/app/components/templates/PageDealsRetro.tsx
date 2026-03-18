/**
 * PageDealsRetro - Retro-Styled Deals & Sales Page
 *
 * Sales and deals landing page with retro handheld gaming aesthetic.
 * Features flash sale banner, product grid with sale items, and CTA section.
 *
 * **Features:**
 * - Retro handheld gaming aesthetic (Game Boy inspired)
 * - Animated flash sale banner with fire icons
 * - Filtered product grid (sale items only)
 * - Empty state for no active deals
 * - CTA section to browse full catalog
 * - Full dark mode support
 * - WCAG AA 2.2 compliant
 * - Responsive layout (320px - 1920px)
 *
 * **Styling:** BEM classes (.retro-*) in /src/styles/sections/deals-retro.css
 * **Dark Mode:** Automatic via retro theme tokens
 *
 * @template
 */

import React from 'react';
import { Link } from 'react-router';
import { Fire, ArrowRight, Lightning } from '../../utils/phosphor-compat';
import { HeroRetro } from '../patterns/HeroRetro';
import { ProductCard } from '../blocks/product/ProductCard';
import { products } from '../../data/products';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export const PageDealsRetro = () => {
  const deals = products.filter(
    (product) => product.salePrice && product.salePrice < product.price
  );
  const prefersReduced = usePrefersReducedMotion();

  return (
    <>
      {/* Flash Sale Banner */}
      <div className="retro-flash-banner" role="status" aria-live="polite">
        <Fire size={18} weight="fill" className="retro-flash-icon" aria-hidden="true" />
        <span className="retro-flash-text retro-font-display">
          FLASH SALE - UP TO 50% OFF - ENDS SUNDAY!
        </span>
        <Fire size={18} weight="fill" className="retro-flash-icon" aria-hidden="true" />
      </div>

      {/* Hero Section */}
      <HeroRetro
        titleLines={['EXCLUSIVE', 'DEALS!']}
        highlight="LIMITED TIME"
        description="Shop our best offers and limited-time discounts on premium stationery, homewares, and lifestyle essentials."
      />

      <main className="retro-main">
        {/* Deals Grid Section */}
        <section id="deals-grid" className="retro-section retro-section--deals" aria-label="Current deals">
          <div className="retro-container">
            {deals.length > 0 ? (
              <>
                <div className="retro-section-header">
                  <h2 className="retro-font-display retro-bold retro-section-title">
                    {deals.length} DEAL{deals.length !== 1 ? 'S' : ''} LIVE NOW
                  </h2>
                  <div className="retro-deals-badge">
                    <Lightning size={20} weight="fill" className="retro-deals-badge-icon" aria-hidden="true" />
                    <span className="retro-font-body retro-uppercase">
                      SAVE UP TO 50%
                    </span>
                  </div>
                </div>

                <div className="retro-grid retro-grid-4">
                  {deals.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              <div className="retro-empty-state">
                <div className="retro-empty-icon">
                  <Fire size={64} weight="duotone" aria-hidden="true" />
                </div>
                <h3 className="retro-font-display retro-bold retro-empty-title">
                  NO DEALS ACTIVE RIGHT NOW
                </h3>
                <p className="retro-font-body retro-empty-desc">
                  Check back soon for great discounts!
                </p>
                <Link to="/shop" className="retro-btn retro-btn--primary retro-font-display">
                  BROWSE ALL PRODUCTS <ArrowRight size={20} weight="bold" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Explore more">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Fire size={64} weight="fill" className="retro-neon-icon" aria-hidden="true" />
              </div>
              <h2 className="retro-font-display retro-bold retro-cta-title">
                DON'T MISS OUT!
              </h2>
              <p className="retro-font-body retro-cta-desc">
                New deals drop every week. Browse our full collection to find your next favourite.
              </p>
              <Link to="/shop" className="retro-btn retro-btn--primary retro-font-display">
                SHOP ALL PRODUCTS <ArrowRight size={20} weight="bold" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PageDealsRetro;