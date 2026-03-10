import React from 'react';
import * as ReactRouterModule from 'react-router';

var useState = React.useState;
var useNavigate = ReactRouterModule.useNavigate;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TrustBandModule from '../patterns/TrustBand';
import * as TrustFeaturesDataModule from '../../data/trustFeatures';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var TrustBand = TrustBandModule.TrustBand;
var loginTrustFeatures = TrustFeaturesDataModule.loginTrustFeatures;

/**
 * LoginRegister Template
 *
 * Combined login and registration page with glassmorphism card,
 * floating neon orbs, and neon cyan focus states.
 *
 * **Route:** /account/login
 * **WordPress Mapping:** page-login.php
 * **Styling:** BEM (.account-login) in /src/styles/sections/account-auth-funky.css
 * **Dark Mode:** Full support via CSS variables
 */
export function LoginRegister() {
  var navigate = useNavigate();
  var _state = useState(true);
  var isLogin = _state[0];
  var setIsLogin = _state[1];

  function handleSubmit(e) {
    e.preventDefault();
    navigate('/account/dashboard');
  }

  return React.createElement(Layout, null,
    React.createElement('div', { className: "account-login" },
      /* Floating orbs */
      React.createElement('div', { className: "funky-orb funky-animate-float account-login__orb--1" }),
      React.createElement('div', { className: "funky-orb funky-animate-float account-login__orb--2" }),

      React.createElement(Container, null,
        React.createElement('div', { className: "account-login__card funky-glass-panel" },
          React.createElement('h1', { className: "account-login__title funky-section__heading--gradient" },
            isLogin ? 'Sign In' : 'Create Account'
          ),

          React.createElement('form', { className: "account-login__form", onSubmit: handleSubmit },
            !isLogin && React.createElement('div', { className: "wp-block-form-item" },
              React.createElement('label', { htmlFor: "name", className: "wp-block-form-label" }, "Full Name"),
              React.createElement('input', {
                type: "text",
                id: "name",
                className: "wp-block-input funky-input-glow",
                placeholder: "John Doe",
                required: true
              })
            ),

            React.createElement('div', { className: "wp-block-form-item" },
              React.createElement('label', { htmlFor: "email", className: "wp-block-form-label" }, "Email Address"),
              React.createElement('input', {
                type: "email",
                id: "email",
                className: "wp-block-input funky-input-glow",
                placeholder: "you@example.com",
                required: true
              })
            ),

            React.createElement('div', { className: "wp-block-form-item" },
              React.createElement('label', { htmlFor: "password", className: "wp-block-form-label" }, "Password"),
              React.createElement('input', {
                type: "password",
                id: "password",
                className: "wp-block-input funky-input-glow",
                placeholder: "••••••••",
                required: true
              })
            ),

            React.createElement('button', { type: "submit", className: "wp-block-button__link wp-element-button account-login__submit funky-spring-hover" },
              isLogin ? 'Sign In' : 'Create Account'
            )
          ),

          React.createElement('p', { className: "account-login__toggle" },
            isLogin ? "Don't have an account? " : 'Already have an account? ',
            React.createElement('button', {
              onClick: function(e) { e.preventDefault(); setIsLogin(!isLogin); },
              className: "account-login__toggle-btn funky-text-glow"
            }, isLogin ? 'Register now' : 'Sign in')
          )
        ),

        /* Trust Band */
        React.createElement('div', { className: "account-login__trust" },
          React.createElement(TrustBand, {
            features: loginTrustFeatures,
            layout: "grid",
            compact: true
          })
        )
      )
    )
  );
}