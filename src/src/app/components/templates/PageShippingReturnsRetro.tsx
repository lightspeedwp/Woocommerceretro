/**
 * PageShippingReturnsRetro
 *
 * "PlayPocket" FSE theme - Shipping & Returns info.
 * All content driven from /data/shippingPage.ts.
 * WCAG AA 2.2 compliant.
 *
 * @route /shipping, /shipping-returns
 * @template
 */

import { Truck, Package, Globe, Info } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { shippingPageContent, shippingSections, shippingPolicies } from '../../data/shippingPage';

const iconMap: Record<string, any> = { Truck, Package, Globe };

export const PageShippingReturnsRetro = () => {
  const { heroTitle, heroSubtitle, heroIcon } = shippingPageContent;
  const HeroIcon = iconMap[heroIcon] || Truck;

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-legal-layout">
          {/* Hero */}
          <div className="retro-legal-layout__header">
            <HeroIcon size={64} weight="fill" className="retro-legal-layout__icon" />
            <h1 className="retro-font-display retro-bold retro-legal-layout__title">{heroTitle}</h1>
            <p className="retro-font-body retro-legal-layout__subtitle">{heroSubtitle}</p>
          </div>

          <div className="retro-font-body retro-legal-layout__content retro-legal-layout__content--wide-gap">
            {/* Shipping Sections */}
            {shippingSections.map((section, idx) => {
              const SectionIcon = iconMap[section.icon] || Package;
              return (
                <div key={idx}>
                  <h2 className="retro-font-display retro-bold retro-legal-layout__section-title retro-legal-layout__section-title--icon">
                    <SectionIcon size={28} /> {section.title}
                  </h2>

                  {section.rates && (
                    <table className="retro-table">
                      <thead className="retro-table__head">
                        <tr>
                          <th className="retro-table__th">SPEED</th>
                          <th className="retro-table__th">EST. TIME</th>
                          <th className="retro-table__th">COST</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.rates.map((rate) => (
                          <tr key={rate.speed}>
                            <td className="retro-table__td">{rate.speed}</td>
                            <td className="retro-table__td">{rate.time}</td>
                            <td className="retro-table__td">{rate.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}

                  {section.content && (
                    <p className="retro-legal-layout__section-text">{section.content}</p>
                  )}
                </div>
              );
            })}

            {/* Policies */}
            <div className="retro-shipping-policies">
              <h2 className="retro-font-display retro-bold retro-legal-layout__section-title retro-legal-layout__section-title--icon">
                <Info size={28} /> SHIPPING POLICIES
              </h2>
              <div className="retro-shipping-policies__grid">
                {shippingPolicies.map((policy, idx) => (
                  <div key={idx} className="retro-shipping-policies__card">
                    <h3 className="retro-font-display retro-bold retro-shipping-policies__card-title">{policy.title}</h3>
                    <p className="retro-font-body retro-shipping-policies__card-text">{policy.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
};

PageShippingReturnsRetro.displayName = 'PageShippingReturnsRetro';
