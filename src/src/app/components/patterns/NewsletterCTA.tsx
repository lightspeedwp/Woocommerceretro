import React, { useState } from 'react';
import { PaperPlaneRight, EnvelopeSimple, CheckCircle, WarningCircle, Spinner } from '@phosphor-icons/react';
import { Typography } from '../common/Typography';
import { Button } from '../blocks/design/Buttons';

interface NewsletterCTAProps {
  variant?: 'full' | 'compact' | 'banner';
  heading?: string;
  description?: string;
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

export const NewsletterCTA = ({
  variant = 'full',
  heading = 'Join the Club',
  description = 'Get exclusive deals and funky updates.',
  buttonText = 'Subscribe',
  placeholder = 'Enter your email...',
  className = '',
}: NewsletterCTAProps) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    setTimeout(() => {
      setStatus('success');
      setMessage("You're in! Check your inbox soon.");
      setEmail('');
    }, 1500);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (status !== 'idle') {
      setStatus('idle');
      setMessage('');
    }
  };

  const iconEl = status === 'success'
    ? <CheckCircle size={24} weight="duotone" className="funky-newsletter__status-icon funky-newsletter__status-icon--success" />
    : status === 'error'
      ? <WarningCircle size={24} weight="duotone" className="funky-newsletter__status-icon funky-newsletter__status-icon--error" />
      : <EnvelopeSimple size={32} weight="duotone" className="funky-newsletter__icon" />;

  return (
    <section className={`funky-newsletter funky-newsletter--${variant} ${className}`}>
      {variant === 'full' && (
        <>
          <div className="funky-orb funky-orb--1 funky-animate-float" />
          <div className="funky-orb funky-orb--2 funky-animate-float" />
        </>
      )}
      <div className="funky-newsletter__inner funky-glass-panel">
        <div className="funky-newsletter__content">
          {variant !== 'banner' && iconEl}
          <div className="funky-newsletter__text">
            <Typography variant={variant === 'banner' ? 'h4' : 'h2'} className="funky-newsletter__heading">
              {heading}
            </Typography>
            {description && (
              <Typography variant={variant === 'banner' ? 'small' : 'body'} className="funky-newsletter__description">
                {description}
              </Typography>
            )}
          </div>
          <form className="funky-newsletter__form" onSubmit={handleSubmit} noValidate>
            <div className="funky-newsletter__input-group">
              <label htmlFor="newsletter-email" className="screen-reader-text">Email Address</label>
              <input
                id="newsletter-email"
                type="email"
                className="funky-newsletter__input funky-input-glow"
                placeholder={placeholder}
                value={email}
                onChange={handleEmailChange}
                disabled={status === 'loading' || status === 'success'}
                aria-invalid={status === 'error' ? 'true' : 'false'}
                aria-describedby={message ? 'newsletter-message' : undefined}
              />
              <button
                type="submit"
                className="funky-newsletter__submit"
                disabled={status === 'loading' || status === 'success' || !email}
              >
                {status === 'loading' ? (
                  <Spinner size={20} weight="duotone" className="funky-newsletter__spinner" />
                ) : (
                  <span className="funky-newsletter__submit-inner">
                    <span>{buttonText}</span>
                    <PaperPlaneRight size={18} weight="duotone" />
                  </span>
                )}
              </button>
            </div>
            {message && (
              <div
                id="newsletter-message"
                className={`funky-newsletter__message funky-newsletter__message--${status}`}
                role={status === 'error' ? 'alert' : 'status'}
                aria-live="polite"
              >
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}