/**
 * PageReturnsPortalRetro
 *
 * "PlayPocket" FSE theme - Returns Portal.
 * WCAG AA 2.2 compliant.
 */

import { type FormEvent } from 'react';
import { Link } from 'react-router';
import { ArrowUUpLeft, MagicWand, Warning } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

export const PageReturnsPortalRetro = () => {
  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    alert('Return request submitted! Please check your email for the return label.');
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-legal-layout">
          <div className="retro-legal-layout__header">
            <ArrowUUpLeft size={64} weight="fill" color="var(--color-ink)" className="retro-legal-layout__icon" />
            <h1 className="retro-font-display retro-bold retro-legal-layout__title">RETURNS PORTAL</h1>
            <p className="retro-font-body retro-legal-layout__subtitle">Need a mulligan? Initiate your return below.</p>
          </div>

          <div className="retro-returns-portal__grid">
            {/* Form Side */}
            <div className="retro-font-body retro-returns-portal__form-card">
              <h2 className="retro-font-display retro-bold retro-returns-portal__form-title">LOOKUP ORDER</h2>

              <form onSubmit={handleSubmit} className="retro-returns-portal__form">
                <div>
                  <label htmlFor="orderNumber" className="retro-bold retro-returns-portal__label">ORDER ID (#)</label>
                  <input type="text" id="orderNumber" className="retro-input" placeholder="e.g. 987-6543-21" required />
                </div>
                <div>
                  <label htmlFor="email" className="retro-bold retro-returns-portal__label">EMAIL (PLAYER ID)</label>
                  <input type="email" id="email" className="retro-input" placeholder="player1@example.com" required />
                </div>
                <button type="submit" className="retro-button retro-font-display retro-bold retro-returns-portal__submit">START RETURN</button>
              </form>
            </div>

            {/* Info Side */}
            <div className="retro-font-body retro-returns-portal__info-card">
              <div>
                <h3 className="retro-font-display retro-bold retro-returns-portal__info-title">
                  <MagicWand size={24} /> 30-DAY WINDOW
                </h3>
                <p className="retro-returns-portal__info-text">
                  You have 30 days from the date of delivery to return your items for a full refund.
                </p>
              </div>
              <div>
                <h3 className="retro-font-display retro-bold retro-returns-portal__info-title">
                  <Warning size={24} /> CONDITIONS
                </h3>
                <ul className="retro-returns-portal__conditions-list">
                  <li>Must be in original packaging</li>
                  <li>No physical damage</li>
                  <li>Include all cables and manuals</li>
                </ul>
              </div>
              <div className="retro-returns-portal__info-link-wrapper">
                <Link to="/faq" className="retro-returns-portal__info-link">Read Full Return Policy &rarr;</Link>
              </div>
            </div>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageReturnsPortalRetro.displayName = 'PageReturnsPortalRetro';