import React from 'react';
import { X, Cookie, GearSix as Settings } from '@phosphor-icons/react';
import * as ReactRouterModule from 'react-router';

var Link = ReactRouterModule.Link;
import * as ButtonsModule from '../blocks/design/Buttons';

var Button = ButtonsModule.Button;

// CookiePreferences structure
// - essential: boolean
// - analytics: boolean
// - marketing: boolean

/**
 * CookieConsent Component
 * 
 * GDPR-compliant cookie consent banner with granular controls.
 * Persists user preferences in localStorage.
 * 
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No arrow functions
 * 4. No template literals
 * 5. No TypeScript type annotations
 */

export function CookieConsent() {
  var useState = React.useState;
  var useEffect = React.useEffect;
  
  var showBannerState = useState(false);
  var showBanner = showBannerState[0];
  var setShowBanner = showBannerState[1];
  
  var showSettingsState = useState(false);
  var showSettings = showSettingsState[0];
  var setShowSettings = showSettingsState[1];
  
  var preferencesState = useState({
    essential: true,
    analytics: false,
    marketing: false
  });
  var preferences = preferencesState[0];
  var setPreferences = preferencesState[1];

  useEffect(function() {
    // Check if user has already made a choice
    var savedConsent = localStorage.getItem('cookieConsent');
    if (!savedConsent) {
      // Show banner after 1 second delay
      setTimeout(function() { setShowBanner(true); }, 1000);
    } else {
      // Load saved preferences
      try {
        var saved = JSON.parse(savedConsent);
        setPreferences(saved);
      } catch (e) {
        // Invalid saved data, show banner
        setShowBanner(true);
      }
    }
  }, []);

  var savePreferences = function(prefs) {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  var acceptAll = function() {
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true
    });
  };

  var rejectAll = function() {
    savePreferences({
      essential: true, // Essential always true
      analytics: false,
      marketing: false
    });
  };

  var saveCustom = function() {
    savePreferences(preferences);
  };

  var togglePreference = function(key) {
    if (key === 'essential') return; // Essential can't be toggled
    var nextPrefs = Object.assign({}, preferences);
    nextPrefs[key] = !nextPrefs[key];
    setPreferences(nextPrefs);
  };

  var renderPrivacyLink = function() {
    return React.createElement(Link, {
      to: '/privacy',
      className: 'wp-link'
    }, 'Privacy Policy');
  };

  if (!showBanner) return null;

  var bannerInfo = React.createElement('div', { className: 'wp-cookie-banner__info' },
    React.createElement('div', { className: 'wp-cookie-banner__icon' },
      React.createElement(Cookie, { size: 24 })
    ),
    React.createElement('div', null,
      React.createElement('h3', {
        id: 'cookie-banner-title',
        className: 'wp-cookie-banner__title'
      }, 'We Use Cookies'),
      React.createElement('p', {
        id: 'cookie-banner-description',
        className: 'wp-cookie-banner__description'
      },
        'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. ',
        renderPrivacyLink()
      )
    )
  );

  var bannerActions = React.createElement('div', { className: 'wp-cookie-banner__actions' },
    React.createElement(Button, {
      onClick: function() { setShowSettings(true); },
      variant: 'outline',
      size: 'sm',
      className: 'wp-cookie-banner__btn--customize'
    },
      React.createElement(Settings, { size: 16 }),
      'Customize'
    ),
    React.createElement(Button, {
      onClick: rejectAll,
      variant: 'outline',
      size: 'sm'
    }, 'Reject All'),
    React.createElement(Button, {
      onClick: acceptAll,
      variant: 'primary',
      size: 'sm'
    }, 'Accept All')
  );

  var bannerContent = React.createElement('div', { className: 'wp-cookie-banner__content' },
    bannerInfo,
    bannerActions
  );

  var banner = React.createElement('div', {
    className: 'wp-cookie-banner',
    role: 'dialog',
    'aria-labelledby': 'cookie-banner-title',
    'aria-describedby': 'cookie-banner-description'
  },
    React.createElement('div', { className: 'wp-cookie-banner__inner' },
      bannerContent
    )
  );

  var settingsHeader = React.createElement('div', { className: 'wp-cookie-settings__header' },
    React.createElement('h2', {
      id: 'cookie-settings-title',
      className: 'wp-cookie-settings__title'
    }, 'Cookie Preferences'),
    React.createElement('button', {
      onClick: function() { setShowSettings(false); },
      className: 'wp-cookie-settings__close',
      'aria-label': 'Close settings'
    },
      React.createElement(X, { size: 20 })
    )
  );

  var settingsIntro = React.createElement('p', {
    className: 'wp-cookie-settings__section-description'
  }, 'We use different types of cookies to optimize your experience on our website. You can choose which types of cookies you want to allow.');

  var essentialSection = React.createElement('div', { className: 'wp-cookie-settings__section' },
    React.createElement('div', { className: 'wp-cookie-settings__section-header' },
      React.createElement('div', { className: 'flex-1' },
        React.createElement('h3', { className: 'wp-cookie-settings__section-title' }, 'Essential Cookies'),
        React.createElement('p', { className: 'wp-cookie-settings__section-description' },
          'These cookies are necessary for the website to function and cannot be disabled. They are usually set in response to actions like logging in or filling in forms.'
        )
      ),
      React.createElement('div', { className: 'wp-cookie-settings__badge' }, 'Always Active')
    )
  );

  var analyticsSection = React.createElement('div', { className: 'wp-cookie-settings__section' },
    React.createElement('div', { className: 'wp-cookie-settings__section-header' },
      React.createElement('div', { className: 'flex-1' },
        React.createElement('h3', { className: 'wp-cookie-settings__section-title' }, 'Analytics Cookies'),
        React.createElement('p', { className: 'wp-cookie-settings__section-description' },
          'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.'
        )
      ),
      React.createElement('label', { className: 'wp-block-switch' },
        React.createElement('input', {
          type: 'checkbox',
          checked: preferences.analytics,
          onChange: function() { togglePreference('analytics'); },
          className: 'sr-only'
        }),
        React.createElement('div', { className: 'wp-block-switch__slider' })
      )
    )
  );

  var marketingSection = React.createElement('div', { className: 'wp-cookie-settings__section' },
    React.createElement('div', { className: 'wp-cookie-settings__section-header' },
      React.createElement('div', { className: 'flex-1' },
        React.createElement('h3', { className: 'wp-cookie-settings__section-title' }, 'Marketing Cookies'),
        React.createElement('p', { className: 'wp-cookie-settings__section-description' },
          'These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.'
        )
      ),
      React.createElement('label', { className: 'wp-block-switch' },
        React.createElement('input', {
          type: 'checkbox',
          checked: preferences.marketing,
          onChange: function() { togglePreference('marketing'); },
          className: 'sr-only'
        }),
        React.createElement('div', { className: 'wp-block-switch__slider' })
      )
    )
  );

  var settingsContent = React.createElement('div', { className: 'wp-cookie-settings__content' },
    settingsIntro,
    essentialSection,
    analyticsSection,
    marketingSection
  );

  var settingsFooter = React.createElement('div', { className: 'wp-cookie-settings__footer' },
    React.createElement(Button, {
      onClick: rejectAll,
      variant: 'outline'
    }, 'Reject All'),
    React.createElement(Button, {
      onClick: acceptAll,
      variant: 'outline'
    }, 'Accept All'),
    React.createElement(Button, {
      onClick: saveCustom,
      variant: 'primary'
    }, 'Save Preferences')
  );

  var settingsModal = showSettings ? React.createElement('div', { className: 'wp-cookie-settings-overlay' },
    React.createElement('div', {
      className: 'wp-cookie-settings-modal',
      role: 'dialog',
      'aria-labelledby': 'cookie-settings-title'
    },
      settingsHeader,
      settingsContent,
      settingsFooter
    )
  ) : null;

  return React.createElement(React.Fragment, null,
    banner,
    settingsModal
  );
}