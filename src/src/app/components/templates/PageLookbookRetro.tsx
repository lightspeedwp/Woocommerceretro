/**
 * PageLookbookRetro
 *
 * "PlayPocket" FSE theme - Lookbook / Visual Gallery page.
 * Editorial-style product showcases organized by collection.
 * WCAG AA 2.2 compliant.
 *
 * @route /lookbook
 */

import { Link } from 'react-router';
import { Camera, ArrowRight } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { MiniCartRetro } from '../parts/MiniCartRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';
import { LOOKBOOK_COLLECTIONS } from '../../data/newPages';

export const PageLookbookRetro = () => {
  // Google Fonts loading moved to RootLayout.

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-breadcrumb retro-font-display">
          <div className="retro-breadcrumb-dot" />
          <Link to="/" className="retro-breadcrumb-link">HOME</Link>
          <span className="retro-breadcrumb-sep">/</span>
          <span className="retro-breadcrumb-current">LOOKBOOK</span>
        </div>

        <div className="retro-page-shell">
          <div className="retro-page-shell__header">
            <Camera size={32} weight="bold" aria-hidden="true" />
            <div>
              <h1 className="retro-font-display retro-bold retro-page-shell__title">
                LOOKBOOK
              </h1>
              <p className="retro-font-body retro-page-shell__subtitle">
                Curated collections. Styled for players.
              </p>
            </div>
          </div>

          <div className="retro-lookbook__grid" role="list">
            {LOOKBOOK_COLLECTIONS.map((col) => (
              <Link
                key={col.id}
                to="/shop"
                className="retro-lookbook__card"
                role="listitem"
                aria-label={`${col.title} - ${col.subtitle}`}
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="retro-lookbook__card-image"
                  loading="lazy"
                />
                <div className="retro-lookbook__card-body">
                  <h2 className="retro-font-display retro-bold retro-lookbook__card-title">
                    {col.title}
                  </h2>
                  <p className="retro-font-display retro-lookbook__card-subtitle">
                    {col.subtitle} <ArrowRight size={14} weight="bold" aria-hidden="true" />
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <BottomGridRetro />
        </div>

        <FooterRetro />
        <MiniCartRetro />
      </div>
    </div>
  );
};

PageLookbookRetro.displayName = 'PageLookbookRetro';