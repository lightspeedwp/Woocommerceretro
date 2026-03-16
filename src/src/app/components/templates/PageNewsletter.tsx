/**
 * PageNewsletter — Retro-Styled Newsletter Signup
 *
 * Full-page newsletter signup with retro handheld gaming aesthetic.
 * Features hero section, email form, and benefits list.
 *
 * **Styling:** BEM classes (.retro-*) via retro-theme.css + retro-shared-patterns.css
 * **Dark Mode:** Automatic via retro theme tokens
 * **WCAG AA 2.2:** Semantic HTML, form labels, focus management
 *
 * @route /newsletter
 * @template
 */

import { type FormEvent, useState } from 'react';
import { Link } from 'react-router';
import { Envelope, PaperPlaneTilt, ArrowRight } from '../../utils/phosphor-compat';
import { CheckCircle2 } from 'lucide-react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { HeroRetro } from '../patterns/HeroRetro';
import { newsletterPageContent } from '../../data/newsletter';

const benefits = [
  { icon: '1UP', title: 'EXCLUSIVE DEALS', desc: 'Early access to sales and subscriber-only discount codes.' },
  { icon: 'NEW', title: 'NEW DROPS', desc: 'Be the first to know when new products and collections launch.' },
  { icon: 'XP+', title: 'BONUS CONTENT', desc: 'Behind-the-scenes looks, gaming tips, and community highlights.' },
];

export const PageNewsletter = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <HeaderRetro />
      <main className="retro-main">

        {/* Hero */}
        <HeroRetro
          titleLines={['LEVEL UP', 'YOUR']}
          highlight="INBOX!"
          description={newsletterPageContent.subheading}
        />

        {/* Signup Section */}
        <section className="retro-section" aria-labelledby="newsletter-form-heading">
          <div className="retro-container">
            <div className="retro-cta-card">
              <div className="retro-cta-icon">
                <Envelope size={56} weight="bold" className="retro-neon-icon" aria-hidden="true" />
              </div>

              {submitted ? (
                <>
                  <div className="retro-cta-icon">
                    <CheckCircle2 size={48} aria-hidden="true" />
                  </div>
                  <h2 id="newsletter-form-heading" className="retro-font-display retro-bold retro-cta-title">
                    {newsletterPageContent.successHeading?.toUpperCase() || 'SUBSCRIBED!'}
                  </h2>
                  <p className="retro-font-body retro-cta-desc">
                    {newsletterPageContent.successText || 'Check your inbox for a welcome email.'}
                  </p>
                  <button
                    type="button"
                    className="retro-btn retro-btn--primary retro-font-display"
                    onClick={() => setSubmitted(false)}
                  >
                    {(newsletterPageContent.successButton || 'SUBSCRIBE ANOTHER').toUpperCase()}
                  </button>
                </>
              ) : (
                <>
                  <h2 id="newsletter-form-heading" className="retro-font-display retro-bold retro-cta-title">
                    {newsletterPageContent.heading.toUpperCase()}
                  </h2>
                  <p className="retro-font-body retro-cta-desc">
                    {newsletterPageContent.subheading}
                  </p>
                  <form onSubmit={handleSubmit} className="retro-newsletter-form">
                    <label htmlFor="newsletter-email" className="retro-sr-only">
                      Email address
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      placeholder={newsletterPageContent.formPlaceholder}
                      className="retro-input retro-font-display retro-newsletter-form__input"
                      autoComplete="email"
                    />
                    <button
                      type="submit"
                      className="retro-btn retro-btn--primary retro-font-display retro-newsletter-form__btn"
                    >
                      <PaperPlaneTilt size={18} weight="bold" />{' '}
                      {newsletterPageContent.formButton.toUpperCase()}
                    </button>
                  </form>
                  <p className="retro-font-body retro-newsletter-form__privacy">
                    {newsletterPageContent.privacyText}
                  </p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="retro-section" aria-labelledby="newsletter-benefits-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h2 id="newsletter-benefits-heading" className="retro-font-display retro-bold retro-section-title">
                WHY SUBSCRIBE?
              </h2>
            </div>

            <div className="retro-grid-3">
              {benefits.map((b) => (
                <div key={b.title} className="retro-card retro-card--glow">
                  <span className="retro-font-display retro-bold retro-feature-badge" aria-hidden="true">
                    {b.icon}
                  </span>
                  <h3 className="retro-card__title retro-font-display retro-bold">{b.title}</h3>
                  <p className="retro-card__desc retro-font-body">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="retro-section retro-section--cta" aria-label="Browse newsletter archive">
          <div className="retro-container">
            <div className="retro-cta-card">
              <h2 className="retro-font-display retro-bold retro-cta-title">
                MISSED AN ISSUE?
              </h2>
              <p className="retro-font-body retro-cta-desc">
                Browse our archive of past newsletters for deals, stories, and more.
              </p>
              <Link to="/newsletter/archive" className="retro-btn retro-btn--primary retro-font-display">
                VIEW ARCHIVE <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <FooterRetro />
    </>
  );
};