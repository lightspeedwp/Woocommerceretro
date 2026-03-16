import React, { useState } from 'react';
import { Envelope as Mail, Check, WarningCircle as AlertCircle } from '../../utils/phosphor-compat';
import { Button } from '../blocks/design/Buttons';
import { Typography } from '../common/Typography';

interface NewsletterSignupProps {
  heading?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  successMessage?: string;
  errorMessage?: string;
  layout?: 'inline' | 'stacked';
  onSubmit?: (email: string) => Promise<void>;
  className?: string;
}

/**
 * NewsletterSignup Pattern Component
 */
export const NewsletterSignup = ({
  heading = 'Subscribe to Our Newsletter',
  description = 'Get the latest updates, exclusive offers, and insider tips delivered straight to your inbox.',
  placeholder = 'Enter your email',
  buttonText = 'Subscribe',
  successMessage = 'Thank you for subscribing!',
  errorMessage = 'Please enter a valid email address.',
  layout = 'inline',
  onSubmit,
  className = '',
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setMessage(errorMessage);
      return;
    }

    setStatus('loading');
    setMessage('');

    if (onSubmit) {
      onSubmit(email)
        .then(() => {
          setStatus('success');
          setMessage(successMessage);
          setEmail('');
        })
        .catch((err) => {
          setStatus('error');
          setMessage(err.message || errorMessage);
        });
    } else {
      setTimeout(() => {
        setStatus('success');
        setMessage(successMessage);
        setEmail('');
      }, 1000);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  };

  const layoutClass = layout === 'inline' ? 'wp-newsletter--inline' : 'wp-newsletter--stacked';
  const statusClass = status !== 'idle' ? ` wp-newsletter--${status}` : '';

  return (
    <div className={`wp-newsletter ${layoutClass}${statusClass} ${className}`}>
      {heading && (
        <Typography variant="h2" className="wp-newsletter__heading">
          {heading}
        </Typography>
      )}
      {description && (
        <Typography variant="p" className="wp-newsletter__description">
          {description}
        </Typography>
      )}
      <form onSubmit={handleSubmit} className="wp-newsletter__form">
        <div className="wp-newsletter__input-group">
          <div className="wp-newsletter__input-icon">
            <Mail size={18} aria-hidden="true" />
          </div>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={placeholder}
            required
            disabled={status === 'loading' || status === 'success'}
            className="wp-newsletter__input"
            aria-label="Email address"
            aria-invalid={status === 'error'}
          />
        </div>
        <Button
          type="submit"
          variant="primary"
          size="default"
          disabled={status === 'loading' || status === 'success'}
          className="wp-newsletter__button"
        >
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </Button>
      </form>
      {message && (
        <div
          className={`wp-newsletter__message wp-newsletter__message--${status}`}
          role={status === 'error' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {status === 'success' ? (
            <Check size={16} aria-hidden="true" />
          ) : (
            <AlertCircle size={16} aria-hidden="true" />
          )}
          <span>{message}</span>
        </div>
      )}
    </div>
  );
}