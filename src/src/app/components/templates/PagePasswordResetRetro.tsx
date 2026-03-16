/**
 * PagePasswordResetRetro
 *
 * "PlayPocket" FSE theme - Password Reset / Forgot Password page.
 * WCAG AA 2.2 compliant.
 *
 * @route /reset-password
 * @route /account/reset-password
 */

import { useState, type FormEvent } from 'react';
import { Link } from 'react-router';
import { Key, EnvelopeSimple, CheckCircle } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

export const PagePasswordResetRetro = () => {
  const [sent, setSent] = useState(false);

  // Google Fonts loading moved to RootLayout.

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    setSent(true);
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-reset">
          <div className="retro-reset__card">
            <div className="retro-reset__header">
              <Key size={48} weight="fill" aria-hidden="true" />
              <h1 className="retro-font-display retro-bold retro-reset__title">
                {sent ? 'CHECK YOUR INBOX' : 'FORGOT PASSWORD?'}
              </h1>
              {!sent && (
                <p className="retro-font-body retro-reset__subtitle">
                  Enter your email and we will send a recovery link.
                </p>
              )}
            </div>

            {sent ? (
              <div className="retro-reset__success">
                <span className="retro-reset__success-icon" aria-hidden="true">
                  <CheckCircle size={56} weight="fill" color="var(--color-success)" />
                </span>
                <h2 className="retro-font-display retro-bold retro-page-shell__title">
                  LINK SENT!
                </h2>
                <p className="retro-font-body retro-reset__success-text">
                  If an account exists with that email, you will receive a password reset link shortly.
                  Check your spam folder if you do not see it.
                </p>
                <Link to="/account/login" className="retro-btn retro-btn--primary retro-font-display retro-bold">
                  BACK TO LOGIN
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="retro-reset__form" noValidate>
                <div className="retro-reset__field">
                  <label htmlFor="reset-email" className="retro-font-display retro-bold retro-reset__label">
                    EMAIL ADDRESS
                  </label>
                  <input
                    id="reset-email"
                    type="email"
                    required
                    className="retro-input retro-font-body"
                    placeholder="player1@domain.com"
                    autoComplete="email"
                  />
                </div>

                <button type="submit" className="retro-btn retro-btn--primary retro-font-display retro-bold">
                  <EnvelopeSimple size={20} weight="bold" aria-hidden="true" />
                  SEND RESET LINK
                </button>

                <div className="retro-reset__footer">
                  <Link to="/account/login" className="retro-font-body">Back to Login</Link>
                </div>
              </form>
            )}
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
};

PagePasswordResetRetro.displayName = 'PagePasswordResetRetro';