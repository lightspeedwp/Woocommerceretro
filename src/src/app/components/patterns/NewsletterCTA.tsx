import React from 'react';
import { PaperPlaneRight, EnvelopeSimple, CheckCircle, WarningCircle, Spinner } from '@phosphor-icons/react';
import * as TypographyModule from '../common/Typography';
import * as ButtonsModule from '../blocks/design/Buttons';

var useState = React.useState;

var Typography = TypographyModule.Typography;
var Button = ButtonsModule.Button;

export function NewsletterCTA(props) {
  var variant = props.variant !== undefined ? props.variant : 'full'; // 'full', 'compact', 'banner'
  var heading = props.heading !== undefined ? props.heading : 'Join the Club';
  var description = props.description !== undefined ? props.description : 'Get exclusive deals and funky updates.';
  var buttonText = props.buttonText !== undefined ? props.buttonText : 'Subscribe';
  var placeholder = props.placeholder !== undefined ? props.placeholder : 'Enter your email...';
  var className = props.className || '';

  var _e = useState('');
  var email = _e[0];
  var setEmail = _e[1];
  
  var _s = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  var status = _s[0];
  var setStatus = _s[1];
  
  var _m = useState('');
  var message = _m[0];
  var setMessage = _m[1];

  function handleSubmit(e) {
    e.preventDefault();
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    // Mock submission with 1.5s delay
    setTimeout(function() {
      setStatus('success');
      setMessage('You\'re in! Check your inbox soon.');
      setEmail('');
    }, 1500);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  }

  // Common inner content
  var iconEl = status === 'success' 
    ? React.createElement(CheckCircle, { size: 24, weight: 'duotone', className: 'funky-newsletter__status-icon funky-newsletter__status-icon--success' })
    : status === 'error'
      ? React.createElement(WarningCircle, { size: 24, weight: 'duotone', className: 'funky-newsletter__status-icon funky-newsletter__status-icon--error' })
      : React.createElement(EnvelopeSimple, { size: 32, weight: 'duotone', className: 'funky-newsletter__icon' });

  var headingEl = React.createElement(Typography, {
    variant: variant === 'banner' ? 'h4' : 'h2',
    className: 'funky-newsletter__heading'
  }, heading);

  var descriptionEl = description ? React.createElement(Typography, {
    variant: variant === 'banner' ? 'small' : 'body',
    className: 'funky-newsletter__description'
  }, description) : null;

  var inputWrapper = React.createElement('div', { className: 'funky-newsletter__input-group' },
    React.createElement('label', { htmlFor: 'newsletter-email', className: 'screen-reader-text' }, 'Email Address'),
    React.createElement('input', {
      id: 'newsletter-email',
      type: 'email',
      className: 'funky-newsletter__input funky-input-glow',
      placeholder: placeholder,
      value: email,
      onChange: handleEmailChange,
      disabled: status === 'loading' || status === 'success',
      'aria-invalid': status === 'error' ? 'true' : 'false',
      'aria-describedby': message ? 'newsletter-message' : undefined
    }),
    React.createElement('button', {
      type: 'submit',
      className: 'funky-newsletter__submit',
      disabled: status === 'loading' || status === 'success' || !email
    }, 
      status === 'loading'
        ? React.createElement(Spinner, { size: 20, weight: 'duotone', className: 'funky-newsletter__spinner' })
        : React.createElement('span', { className: 'funky-newsletter__submit-inner' },
            React.createElement('span', null, buttonText),
            React.createElement(PaperPlaneRight, { size: 18, weight: 'duotone' })
          )
    )
  );

  var messageEl = message ? React.createElement('div', {
    id: 'newsletter-message',
    className: 'funky-newsletter__message funky-newsletter__message--' + status,
    role: status === 'error' ? 'alert' : 'status',
    'aria-live': 'polite'
  }, message) : null;

  var contentWrapper = React.createElement('div', { className: 'funky-newsletter__content' },
    variant !== 'banner' ? iconEl : null,
    React.createElement('div', { className: 'funky-newsletter__text' },
      headingEl,
      descriptionEl
    ),
    React.createElement('form', { 
      className: 'funky-newsletter__form',
      onSubmit: handleSubmit,
      noValidate: true
    },
      inputWrapper,
      messageEl
    )
  );

  // Background orbs for full variant
  var orbs = variant === 'full' ? React.createElement(React.Fragment, null,
    React.createElement('div', { className: 'funky-orb funky-orb--1 funky-animate-float' }),
    React.createElement('div', { className: 'funky-orb funky-orb--2 funky-animate-float' })
  ) : null;

  return React.createElement('section', { 
    className: 'funky-newsletter funky-newsletter--' + variant + ' ' + className 
  },
    orbs,
    React.createElement('div', { className: 'funky-newsletter__inner funky-glass-panel' },
      contentWrapper
    )
  );
}