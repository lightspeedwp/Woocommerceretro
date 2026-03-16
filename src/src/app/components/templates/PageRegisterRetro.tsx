/**
 * PageRegisterRetro
 *
 * "PlayPocket" FSE theme - Registration / Sign Up page.
 * Dedicated registration with password strength indicator.
 * WCAG AA 2.2 compliant.
 *
 * @route /register
 */

import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { UserPlus, Joystick as Gamepad } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { toast } from 'sonner@2.0.3';

export const PageRegisterRetro = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  // Google Fonts loading moved to RootLayout.

  const getStrength = (pw: string): number => {
    let score = 0;
    if (pw.length >= 6) score++;
    if (pw.length >= 10) score++;
    if (/[A-Z]/.test(pw)) score++;
    if (/[0-9]/.test(pw)) score++;
    if (/[^A-Za-z0-9]/.test(pw)) score++;
    return Math.min(score, 4);
  };

  const strength = getStrength(password);

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    toast.success('Account created! Welcome, Player!', { duration: 3000 });
    navigate('/account/dashboard');
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-register">
          <div className="retro-register__card">
            <div className="retro-register__header">
              <Gamepad size={48} weight="fill" className="retro-register__icon" aria-hidden="true" />
              <h1 className="retro-font-display retro-bold retro-register__title">
                NEW GAME
              </h1>
              <p className="retro-font-body retro-register__subtitle">
                Create your player profile to start your adventure.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="retro-register__form" noValidate>
              <div className="retro-register__row">
                <div className="retro-register__field">
                  <label htmlFor="reg-first" className="retro-font-display retro-bold retro-register__label">
                    FIRST NAME
                  </label>
                  <input id="reg-first" type="text" required className="retro-input retro-font-body" placeholder="Player" />
                </div>
                <div className="retro-register__field">
                  <label htmlFor="reg-last" className="retro-font-display retro-bold retro-register__label">
                    LAST NAME
                  </label>
                  <input id="reg-last" type="text" required className="retro-input retro-font-body" placeholder="One" />
                </div>
              </div>

              <div className="retro-register__field">
                <label htmlFor="reg-email" className="retro-font-display retro-bold retro-register__label">
                  EMAIL ADDRESS
                </label>
                <input id="reg-email" type="email" required className="retro-input retro-font-body" placeholder="player1@domain.com" />
              </div>

              <div className="retro-register__field">
                <label htmlFor="reg-username" className="retro-font-display retro-bold retro-register__label">
                  GAMERTAG (USERNAME)
                </label>
                <input id="reg-username" type="text" required className="retro-input retro-font-body" placeholder="PixelKing99" />
              </div>

              <div className="retro-register__field">
                <label htmlFor="reg-password" className="retro-font-display retro-bold retro-register__label">
                  SECRET CODE (PASSWORD)
                </label>
                <input
                  id="reg-password"
                  type="password"
                  required
                  minLength={6}
                  className="retro-input retro-font-body"
                  placeholder="Min 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {password.length > 0 && (
                  <div className="retro-register__strength" aria-label={`Password strength: ${strength} of 4`}>
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`retro-register__strength-bar ${
                          i < strength
                            ? strength <= 1
                              ? 'retro-register__strength-bar--weak'
                              : strength <= 2
                                ? 'retro-register__strength-bar--warn'
                                : 'retro-register__strength-bar--filled'
                            : ''
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="retro-register__field">
                <label htmlFor="reg-confirm" className="retro-font-display retro-bold retro-register__label">
                  CONFIRM SECRET CODE
                </label>
                <input id="reg-confirm" type="password" required className="retro-input retro-font-body" placeholder="Re-enter password" />
              </div>

              <div className="retro-register__checkbox-row">
                <input type="checkbox" id="reg-terms" required className="retro-register__checkbox" />
                <label htmlFor="reg-terms" className="retro-font-body retro-register__checkbox-label">
                  I agree to the <Link to="/terms-and-conditions">Terms</Link> and <Link to="/privacy-policy">Privacy Policy</Link>.
                </label>
              </div>

              <div className="retro-register__checkbox-row">
                <input type="checkbox" id="reg-newsletter" className="retro-register__checkbox" />
                <label htmlFor="reg-newsletter" className="retro-font-body retro-register__checkbox-label">
                  Subscribe to our newsletter for exclusive drops and deals.
                </label>
              </div>

              <button type="submit" className="retro-btn retro-btn--primary retro-font-display retro-bold">
                <UserPlus size={20} weight="bold" aria-hidden="true" />
                CREATE ACCOUNT
              </button>

              <div className="retro-register__footer">
                <span className="retro-font-body">Already have an account? </span>
                <Link to="/account/login" className="retro-font-display retro-bold">LOG IN</Link>
              </div>
            </form>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
};

PageRegisterRetro.displayName = 'PageRegisterRetro';