import React from 'react';
import { Envelope as Mail, Check, WarningCircle as AlertCircle } from '@phosphor-icons/react';
import * as ButtonsModule from '../blocks/design/Buttons';
import * as TypographyModule from '../common/Typography';

var useState = React.useState;
var Button = ButtonsModule.Button;
var Typography = TypographyModule.Typography;

// NewsletterSignupProps structure
// - heading?: string
// - description?: string
// - placeholder?: string
// - buttonText?: string
// - successMessage?: string
// - errorMessage?: string
// - layout?: 'inline' | 'stacked'
// - onSubmit?: (email: string) => Promise<void>
// - className?: string

/**
 * NewsletterSignup Pattern Component
 */
export function NewsletterSignup(props) {
  var heading = props.heading !== undefined ? props.heading : 'Subscribe to Our Newsletter';
  var description = props.description !== undefined ? props.description : 'Get the latest updates, exclusive offers, and insider tips delivered straight to your inbox.';
  var placeholder = props.placeholder !== undefined ? props.placeholder : 'Enter your email';
  var buttonText = props.buttonText !== undefined ? props.buttonText : 'Subscribe';
  var successMessage = props.successMessage !== undefined ? props.successMessage : 'Thank you for subscribing!';
  var errorMessage = props.errorMessage !== undefined ? props.errorMessage : 'Please enter a valid email address.';
  var layout = props.layout !== undefined ? props.layout : 'inline';
  var onSubmit = props.onSubmit;
  var className = props.className || '';

  var _e = useState('');
  var email = _e[0];
  var setEmail = _e[1];
  var _s = useState('idle');
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
      setMessage(errorMessage);
      return;
    }

    setStatus('loading');
    setMessage('');

    if (onSubmit) {
      onSubmit(email)
        .then(function() {
          setStatus('success');
          setMessage(successMessage);
          setEmail('');
        })
        .catch(function(err) {
          setStatus('error');
          setMessage(err.message || errorMessage);
        });
    } else {
      setTimeout(function() {
        setStatus('success');
        setMessage(successMessage);
        setEmail('');
      }, 1000);
    }
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  }

  var layoutClass = layout === 'inline' ? 'wp-newsletter--inline' : 'wp-newsletter--stacked';
  var statusClass = status !== 'idle' ? ' wp-newsletter--' + status : '';

  var headingElement = heading ? React.createElement(Typography, {
    key: 'heading',
    variant: 'h2',
    className: 'wp-newsletter__heading'
  }, heading) : null;

  var descriptionElement = description ? React.createElement(Typography, {
    key: 'description',
    variant: 'p',
    className: 'wp-newsletter__description'
  }, description) : null;

  var iconWrapper = React.createElement('div', {
    key: 'icon',
    className: 'wp-newsletter__input-icon'
  }, React.createElement(Mail, { size: 18, 'aria-hidden': 'true' }));

  var input = React.createElement('input', {
    key: 'input',
    type: 'email',
    value: email,
    onChange: handleEmailChange,
    placeholder: placeholder,
    required: true,
    disabled: status === 'loading' || status === 'success',
    className: 'wp-newsletter__input',
    'aria-label': 'Email address',
    'aria-invalid': status === 'error'
  });

  var inputGroup = React.createElement('div', {
    key: 'input-group',
    className: 'wp-newsletter__input-group'
  }, [iconWrapper, input]);

  var button = React.createElement(Button, {
    key: 'button',
    type: 'submit',
    variant: 'primary',
    size: 'default',
    disabled: status === 'loading' || status === 'success',
    className: 'wp-newsletter__button'
  }, status === 'loading' ? 'Subscribing...' : buttonText);

  var form = React.createElement('form', {
    key: 'form',
    onSubmit: handleSubmit,
    className: 'wp-newsletter__form'
  }, [inputGroup, button]);

  var statusIcon = status === 'success' 
    ? React.createElement(Check, { key: 'icon', size: 16, 'aria-hidden': 'true' })
    : React.createElement(AlertCircle, { key: 'icon', size: 16, 'aria-hidden': 'true' });

  var messageElement = message ? React.createElement('div', {
    key: 'message',
    className: 'wp-newsletter__message wp-newsletter__message--' + status,
    role: status === 'error' ? 'alert' : 'status',
    'aria-live': 'polite'
  }, [statusIcon, React.createElement('span', { key: 'text' }, message)]) : null;

  return React.createElement('div', {
    className: 'wp-newsletter ' + layoutClass + statusClass + ' ' + className
  }, [
    headingElement,
    descriptionElement,
    form,
    messageElement
  ]);
}