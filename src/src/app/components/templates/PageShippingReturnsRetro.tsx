/**
 * PageShippingReturnsRetro
 *
 * "PlayPocket" FSE theme - Shipping & Returns info.
 * WCAG AA 2.2 compliant.
 */

import { Truck, Package, Globe } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

interface ShippingRate {
  speed: string;
  time: string;
  cost: string;
}

const domesticRates: ShippingRate[] = [
  { speed: 'Standard (Free over $50)', time: '3-5 Business Days', cost: '$5.00' },
  { speed: 'Expedited', time: '2 Business Days', cost: '$12.00' },
  { speed: 'Next Day / Warp Speed', time: '1 Business Day', cost: '$25.00' },
];

export const PageShippingReturnsRetro = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-legal-layout">
          <div className="retro-legal-layout__header">
            <Truck size={64} weight="fill" color="var(--color-ink)" className="retro-legal-layout__icon" />
            <h1 className="retro-font-display retro-bold retro-legal-layout__title">SHIPPING &amp; LOGISTICS</h1>
            <p className="retro-font-body retro-legal-layout__subtitle">How we get your loot to your base.</p>
          </div>

          <div className="retro-font-body retro-legal-layout__content retro-legal-layout__content--wide-gap">
            <div>
              <h2 className="retro-font-display retro-bold retro-legal-layout__section-title retro-legal-layout__section-title--icon">
                <Package size={28} /> DOMESTIC SHIPPING (USA)
              </h2>
              <table className="retro-table">
                <thead className="retro-table__head">
                  <tr>
                    <th className="retro-table__th">SPEED</th>
                    <th className="retro-table__th">EST. TIME</th>
                    <th className="retro-table__th">COST</th>
                  </tr>
                </thead>
                <tbody>
                  {domesticRates.map((rate) => (
                    <tr key={rate.speed}>
                      <td className="retro-table__td">{rate.speed}</td>
                      <td className="retro-table__td">{rate.time}</td>
                      <td className="retro-table__td">{rate.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <h2 className="retro-font-display retro-bold retro-legal-layout__section-title retro-legal-layout__section-title--icon">
                <Globe size={28} /> INTERNATIONAL SHIPPING
              </h2>
              <p className="retro-legal-layout__section-text">
                We ship globally to most regions! International rates are calculated at checkout based on package
                weight and destination. Please note that customs duties and import taxes are the responsibility
                of the buyer (the final boss).
              </p>
            </div>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageShippingReturnsRetro.displayName = 'PageShippingReturnsRetro';