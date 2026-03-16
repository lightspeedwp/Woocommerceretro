/**
 * PageReturnsPortalRetro
 *
 * "PlayPocket" FSE theme - Returns Portal.
 * All content driven from /data/returnsPage.ts.
 * WCAG AA 2.2 compliant.
 *
 * @route /returns
 * @template
 */

import { type FormEvent } from 'react';
import { Link } from 'react-router';
import { ArrowUUpLeft, MagicWand, Warning } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { returnsPageContent, returnsPolicies, returnsSteps } from '../../data/returnsPage';

const policyIcons: Record<string, any> = { MagicWand, Warning };

export const PageReturnsPortalRetro = () => {
  const { heroTitle, heroSubtitle, formTitle, formLabels, successMessage, stepsTitle, policyLinkText, policyLinkUrl } = returnsPageContent;

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    alert(successMessage);
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-legal-layout">
          <div className="retro-legal-layout__header">
            <ArrowUUpLeft size={64} weight="fill" className="retro-legal-layout__icon" />
            <h1 className="retro-font-display retro-bold retro-legal-layout__title">{heroTitle}</h1>
            <p className="retro-font-body retro-legal-layout__subtitle">{heroSubtitle}</p>
          </div>

          <div className="retro-returns-portal__grid">
            {/* Form Side */}
            <div className="retro-font-body retro-returns-portal__form-card">
              <h2 className="retro-font-display retro-bold retro-returns-portal__form-title">{formTitle}</h2>

              <form onSubmit={handleSubmit} className="retro-returns-portal__form">
                <div>
                  <label htmlFor="orderNumber" className="retro-bold retro-returns-portal__label">{formLabels.orderId}</label>
                  <input type="text" id="orderNumber" className="retro-input" placeholder={formLabels.orderIdPlaceholder} required />
                </div>
                <div>
                  <label htmlFor="email" className="retro-bold retro-returns-portal__label">{formLabels.email}</label>
                  <input type="email" id="email" className="retro-input" placeholder={formLabels.emailPlaceholder} required />
                </div>
                <button type="submit" className="retro-btn retro-btn--primary retro-font-display retro-bold retro-returns-portal__submit">{formLabels.submit}</button>
              </form>

              {/* Steps */}
              <div className="retro-returns-portal__steps">
                <h3 className="retro-font-display retro-bold retro-returns-portal__steps-title">{stepsTitle}</h3>
                {returnsSteps.map((step) => (
                  <div key={step.step} className="retro-returns-portal__step">
                    <span className="retro-returns-portal__step-number retro-font-display retro-bold">{step.step}</span>
                    <div>
                      <span className="retro-font-display retro-bold retro-returns-portal__step-title">{step.title}</span>
                      <p className="retro-font-body retro-returns-portal__step-text">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Side */}
            <div className="retro-font-body retro-returns-portal__info-card">
              {returnsPolicies.map((policy, idx) => {
                const Icon = policyIcons[policy.icon] || MagicWand;
                return (
                  <div key={idx}>
                    <h3 className="retro-font-display retro-bold retro-returns-portal__info-title">
                      <Icon size={24} /> {policy.title}
                    </h3>
                    {policy.text && (
                      <p className="retro-returns-portal__info-text">{policy.text}</p>
                    )}
                    {policy.conditions && (
                      <ul className="retro-returns-portal__conditions-list">
                        {policy.conditions.map((c, i) => (
                          <li key={i}>{c}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
              <div className="retro-returns-portal__info-link-wrapper">
                <Link to={policyLinkUrl} className="retro-returns-portal__info-link">{policyLinkText} &rarr;</Link>
              </div>
            </div>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
};

PageReturnsPortalRetro.displayName = 'PageReturnsPortalRetro';