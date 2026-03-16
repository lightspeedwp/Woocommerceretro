import React, { useState, useEffect } from 'react';
import { X, Cookie, GearSix as Settings } from '../../utils/phosphor-compat';
import { Link } from 'react-router';
import { Button } from '../blocks/design/Buttons';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

/**
 * CookieConsent Component
 *
 * GDPR-compliant cookie consent banner with granular controls.
 * Persists user preferences in localStorage.
 */
export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      try {
        setPreferences(JSON.parse(savedConsent));
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => savePreferences({ essential: true, analytics: true, marketing: true });
  const rejectAll = () => savePreferences({ essential: true, analytics: false, marketing: false });
  const saveCustom = () => savePreferences(preferences);

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner */}
      <div
        className="wp-cookie-banner"
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div className="wp-cookie-banner__inner">
          <div className="wp-cookie-banner__content">
            <div className="wp-cookie-banner__info">
              <div className="wp-cookie-banner__icon">
                <Cookie size={24} />
              </div>
              <div>
                <h3 id="cookie-banner-title" className="wp-cookie-banner__title">
                  We Use Cookies
                </h3>
                <p id="cookie-banner-description" className="wp-cookie-banner__description">
                  We use cookies to enhance your browsing experience, serve personalized content,
                  and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our
                  use of cookies. <Link to="/privacy" className="wp-link">Privacy Policy</Link>
                </p>
              </div>
            </div>
            <div className="wp-cookie-banner__actions">
              <Button onClick={() => setShowSettings(true)} variant="outline" size="sm" className="wp-cookie-banner__btn--customize">
                <Settings size={16} />
                Customize
              </Button>
              <Button onClick={rejectAll} variant="outline" size="sm">Reject All</Button>
              <Button onClick={acceptAll} variant="primary" size="sm">Accept All</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="wp-cookie-settings-overlay">
          <div className="wp-cookie-settings-modal" role="dialog" aria-labelledby="cookie-settings-title">
            <div className="wp-cookie-settings__header">
              <h2 id="cookie-settings-title" className="wp-cookie-settings__title">
                Cookie Preferences
              </h2>
              <button onClick={() => setShowSettings(false)} className="wp-cookie-settings__close" aria-label="Close settings">
                <X size={20} />
              </button>
            </div>

            <div className="wp-cookie-settings__content">
              <p className="wp-cookie-settings__section-description">
                We use different types of cookies to optimize your experience on our website. You can choose which types of cookies you want to allow.
              </p>

              {/* Essential */}
              <div className="wp-cookie-settings__section">
                <div className="wp-cookie-settings__section-header">
                  <div className="wp-cookie-settings__section-content">
                    <h3 className="wp-cookie-settings__section-title">Essential Cookies</h3>
                    <p className="wp-cookie-settings__section-description">
                      These cookies are necessary for the website to function and cannot be disabled.
                    </p>
                  </div>
                  <div className="wp-cookie-settings__badge">Always Active</div>
                </div>
              </div>

              {/* Analytics */}
              <div className="wp-cookie-settings__section">
                <div className="wp-cookie-settings__section-header">
                  <div className="wp-cookie-settings__section-content">
                    <h3 className="wp-cookie-settings__section-title">Analytics Cookies</h3>
                    <p className="wp-cookie-settings__section-description">
                      These cookies help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <label className="wp-block-switch">
                    <input type="checkbox" checked={preferences.analytics} onChange={() => togglePreference('analytics')} className="sr-only" />
                    <div className="wp-block-switch__slider" />
                  </label>
                </div>
              </div>

              {/* Marketing */}
              <div className="wp-cookie-settings__section">
                <div className="wp-cookie-settings__section-header">
                  <div className="wp-cookie-settings__section-content">
                    <h3 className="wp-cookie-settings__section-title">Marketing Cookies</h3>
                    <p className="wp-cookie-settings__section-description">
                      These cookies track your online activity to help deliver more relevant advertising.
                    </p>
                  </div>
                  <label className="wp-block-switch">
                    <input type="checkbox" checked={preferences.marketing} onChange={() => togglePreference('marketing')} className="sr-only" />
                    <div className="wp-block-switch__slider" />
                  </label>
                </div>
              </div>
            </div>

            <div className="wp-cookie-settings__footer">
              <Button onClick={rejectAll} variant="outline">Reject All</Button>
              <Button onClick={acceptAll} variant="outline">Accept All</Button>
              <Button onClick={saveCustom} variant="primary">Save Preferences</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}