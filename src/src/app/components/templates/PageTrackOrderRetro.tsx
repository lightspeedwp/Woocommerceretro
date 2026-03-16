/**
 * PageTrackOrderRetro
 *
 * "PlayPocket" FSE theme - Track Order page.
 * All content driven from /data/trackOrderPage.ts.
 * WCAG AA 2.2 compliant.
 *
 * @route /track-order
 * @template
 */

import { useState, type FormEvent } from 'react';
import { Package, MagnifyingGlass, ArrowRight } from '../../utils/phosphor-compat';
import { Link } from 'react-router';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { trackOrderPageContent, trackOrderHelp } from '../../data/trackOrderPage';

export const PageTrackOrderRetro = () => {
  const [isTracking, setIsTracking] = useState(false);
  const { heroTitle, heroSubtitle, formLabels, successMessage, helpTitle } = trackOrderPageContent;

  const handleTrackSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setIsTracking(true);
    setTimeout(() => {
      setIsTracking(false);
      alert(successMessage);
    }, 2000);
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-track-order-layout">
          <div className="retro-track-order-layout__inner">
            {/* Hero */}
            <div className="retro-track-order-layout__header">
              <Package size={64} weight="fill" className="retro-track-order-layout__icon" />
              <h1 className="retro-font-display retro-bold retro-track-order-layout__title">{heroTitle}</h1>
              <p className="retro-font-body retro-track-order-layout__subtitle">{heroSubtitle}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleTrackSubmit} className="retro-track-order-layout__form">
              <div className="retro-track-order-layout__form-fields">
                <div className="retro-track-order-layout__field">
                  <label htmlFor="orderId" className="retro-font-display retro-bold">{formLabels.orderId}</label>
                  <input
                    id="orderId"
                    type="text"
                    required
                    placeholder={formLabels.orderIdPlaceholder}
                    className="retro-font-body retro-track-order-layout__input"
                  />
                </div>

                <div className="retro-track-order-layout__field">
                  <label htmlFor="billingEmail" className="retro-font-display retro-bold">{formLabels.email}</label>
                  <input
                    id="billingEmail"
                    type="email"
                    required
                    placeholder={formLabels.emailPlaceholder}
                    className="retro-font-body retro-track-order-layout__input"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isTracking}
                  className="retro-btn retro-btn--primary retro-font-display retro-bold retro-track-order-layout__submit"
                >
                  {isTracking ? formLabels.loading : formLabels.submit}
                  {!isTracking && <MagnifyingGlass weight="bold" />}
                </button>
              </div>
            </form>

            {/* Help Cards */}
            {trackOrderHelp.length > 0 && (
              <div className="retro-track-order-layout__help">
                <h2 className="retro-font-display retro-bold retro-track-order-layout__help-title">{helpTitle}</h2>
                <div className="retro-track-order-layout__help-grid">
                  {trackOrderHelp.map((card, idx) => (
                    <div key={idx} className="retro-track-order-layout__help-card">
                      <h3 className="retro-font-display retro-bold retro-track-order-layout__help-card-title">{card.title}</h3>
                      <p className="retro-font-body retro-track-order-layout__help-card-text">{card.text}</p>
                      <Link to={card.link} className="retro-track-order-layout__help-link retro-font-display retro-bold">
                        {card.linkText} <ArrowRight weight="bold" size={12} />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
};

PageTrackOrderRetro.displayName = 'PageTrackOrderRetro';