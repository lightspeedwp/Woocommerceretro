/**
 * PageOrderConfirmationRetro
 *
 * "PlayPocket" FSE theme - Order Success Page.
 * WCAG AA 2.2 compliant.
 */

import { Link } from 'react-router';
import { CheckCircle, Package, MapPin } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { BottomGridRetro } from '../patterns/BottomGridRetro';

export const PageOrderConfirmationRetro = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-order-confirm-layout">
          <CheckCircle size={80} weight="fill" color="var(--color-success, #00ff00)" className="retro-order-confirm-layout__check" />
          <h1 className="retro-font-display retro-bold retro-order-confirm-layout__title">LEVEL CLEARED!</h1>
          <p className="retro-font-body retro-order-confirm-layout__subtitle">Order #987-6543-21 has been placed successfully.</p>

          <div className="retro-font-body retro-order-confirm-layout__summary">
            <h2 className="retro-font-display retro-bold retro-order-confirm-layout__summary-title">MISSION SUMMARY</h2>

            <div className="retro-order-confirm-layout__summary-grid">
              <div className="retro-order-confirm-layout__summary-col">
                <div className="retro-order-confirm-layout__summary-label">
                  <Package size={24} />
                  <strong>SHIPPING TO</strong>
                </div>
                <div>Player One</div>
                <div>123 Pixel Lane</div>
                <div>Retro City, 16BIT 8080</div>
              </div>
              <div className="retro-order-confirm-layout__summary-col">
                <div className="retro-order-confirm-layout__summary-label">
                  <MapPin size={24} />
                  <strong>TRACKING</strong>
                </div>
                <p className="retro-order-confirm-layout__summary-text">
                  We will send a raven (or an email) when your package ships.
                </p>
              </div>
            </div>
          </div>

          <div className="retro-order-confirm-layout__actions">
            <Link to="/shop" className="retro-button retro-font-display retro-bold">CONTINUE SHOPPING</Link>
            <Link to="/track-order" className="retro-button retro-button--secondary retro-font-display retro-bold">TRACK ORDER</Link>
          </div>
        </div>

        <BottomGridRetro />
        <FooterRetro />
      </div>
    </div>
  );
}

PageOrderConfirmationRetro.displayName = 'PageOrderConfirmationRetro';