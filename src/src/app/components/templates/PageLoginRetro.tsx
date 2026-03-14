/**
 * PageLoginRetro
 *
 * "PlayPocket" FSE theme - Login & Register page.
 * WCAG AA 2.2 compliant.
 */

import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router';
import { User, Key, Joystick as Gamepad, SignIn, UserPlus } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

type AuthView = 'login' | 'register';

export const PageLoginRetro = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<AuthView>('login');

  const handleSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    navigate('/account/dashboard');
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-login-layout">
          <div className="retro-login-layout__card">
            {/* Header / Tabs */}
            <div className="retro-login-layout__tabs">
              <button
                onClick={() => setView('login')}
                className={`retro-font-display retro-bold retro-login-layout__tab ${view === 'login' ? 'retro-login-layout__tab--active' : ''}`}
              >
                LOGIN
              </button>
              <button
                onClick={() => setView('register')}
                className={`retro-font-display retro-bold retro-login-layout__tab retro-login-layout__tab--right ${view === 'register' ? 'retro-login-layout__tab--active' : ''}`}
              >
                REGISTER
              </button>
            </div>

            <div className="retro-login-layout__header">
              <Gamepad size={48} weight="fill" color="var(--color-ink)" />
              <h1 className="retro-font-display retro-bold retro-login-layout__title">
                {view === 'login' ? 'LOAD GAME' : 'NEW GAME'}
              </h1>
              <p className="retro-font-body">
                {view === 'login' ? 'Enter your credentials to continue.' : 'Create a new player profile.'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="retro-login-layout__form">
              <div className="retro-login-layout__field">
                <label htmlFor="email" className="retro-font-display retro-bold">PLAYER ID (EMAIL)</label>
                <div className="retro-login-layout__input-group">
                  <div className="retro-login-layout__input-icon">
                    <User size={24} color="var(--color-ink)" weight="bold" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    required
                    className="retro-font-body retro-login-layout__input"
                    placeholder="player1@domain.com"
                  />
                </div>
              </div>

              <div className="retro-login-layout__field">
                <label htmlFor="password" className="retro-font-display retro-bold">SECRET CODE (PASSWORD)</label>
                <div className="retro-login-layout__input-group">
                  <div className="retro-login-layout__input-icon">
                    <Key size={24} color="var(--color-ink)" weight="bold" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    className="retro-font-body retro-login-layout__input"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {view === 'register' && (
                <div className="retro-login-layout__newsletter">
                  <input type="checkbox" id="newsletter" className="retro-login-layout__checkbox" />
                  <label htmlFor="newsletter" className="retro-font-body">Subscribe to Nintendo Power... err, our newsletter.</label>
                </div>
              )}

              <button type="submit" className="retro-button retro-button--primary retro-font-display retro-bold retro-login-layout__submit">
                {view === 'login' ? <SignIn size={24} weight="bold" /> : <UserPlus size={24} weight="bold" />}
                {view === 'login' ? 'START' : 'CREATE ACCOUNT'}
              </button>

              {view === 'login' && (
                <div className="retro-login-layout__forgot">
                  <Link to="/account/reset-password" className="retro-link retro-font-body">Forgot Password?</Link>
                </div>
              )}
            </form>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageLoginRetro.displayName = 'PageLoginRetro';