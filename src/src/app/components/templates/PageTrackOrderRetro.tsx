/**
 * PageTrackOrderRetro
 *
 * "PlayPocket" FSE theme - Track Order page.
 * WCAG AA 2.2 compliant.
 */

import { useState, type FormEvent } from 'react';
import { Package, MagnifyingGlass } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

export const PageTrackOrderRetro = () => {
  const [isTracking, setIsTracking] = useState(false);

  const handleTrackSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setIsTracking(true);
    setTimeout(() => {
      setIsTracking(false);
      alert('DATA RETRIEVED: Your package is currently en route to Level 4.');
    }, 2000);
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-track-order-layout">
          <div className="retro-track-order-layout__inner">
            <div className="retro-track-order-layout__header">
              <Package size={64} weight="fill" color="var(--color-ink)" className="retro-track-order-layout__icon" />
              <h1 className="retro-font-display retro-bold retro-track-order-layout__title">LOCATE CARGO</h1>
              <p className="retro-font-body retro-track-order-layout__subtitle">Enter your coordinates to find your loot.</p>
            </div>

            <form onSubmit={handleTrackSubmit} className="retro-track-order-layout__form">
              <div className="retro-track-order-layout__form-fields">
                <div className="retro-track-order-layout__field">
                  <label htmlFor="orderId" className="retro-font-display retro-bold">ORDER ID NUMBER *</label>
                  <input
                    id="orderId"
                    type="text"
                    required
                    placeholder="e.g., #9999"
                    className="retro-font-body retro-track-order-layout__input"
                  />
                </div>

                <div className="retro-track-order-layout__field">
                  <label htmlFor="billingEmail" className="retro-font-display retro-bold">BILLING EMAIL *</label>
                  <input
                    id="billingEmail"
                    type="email"
                    required
                    placeholder="player1@domain.com"
                    className="retro-font-body retro-track-order-layout__input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isTracking}
                  className="retro-button retro-button--primary retro-font-display retro-bold retro-track-order-layout__submit"
                >
                  {isTracking ? 'SCANNING SECTORS...' : 'TRACK PACKAGE'}
                  {!isTracking && <MagnifyingGlass weight="bold" />}
                </button>
              </div>
            </form>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageTrackOrderRetro.displayName = 'PageTrackOrderRetro';