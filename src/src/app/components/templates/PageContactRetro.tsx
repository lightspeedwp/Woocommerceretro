/**
 * PageContactRetro
 *
 * "PlayPocket" FSE theme - Contact page.
 * WCAG AA 2.2 compliant.
 */

import { type FormEvent } from 'react';
import { EnvelopeSimple, MapPin, ChatText, ArrowRight } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

export const PageContactRetro = () => {
  const handleFormSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    alert('MESSAGE SENT! WE WILL RESPOND SHORTLY.');
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-contact-layout">
          {/* Title Banner */}
          <div className="retro-title-banner retro-contact-layout__banner">
            <h1 className="retro-font-display retro-bold retro-contact-layout__title">COMMUNICATIONS LINK</h1>
            <p className="retro-font-body retro-contact-layout__subtitle">
              Need help, have a question, or just want to talk games? Drop us a line.
            </p>
          </div>

          {/* Main Layout */}
          <div className="retro-contact-layout__grid">
            {/* Left Column - Contact Info */}
            <div className="retro-contact-layout__info">
              <h2 className="retro-font-display retro-bold retro-contact-layout__info-title">DIRECT CHANNELS</h2>

              <div className="retro-contact-layout__channels">
                <div className="retro-contact-layout__channel">
                  <div className="retro-contact-layout__channel-icon">
                    <EnvelopeSimple size={24} weight="fill" />
                  </div>
                  <div>
                    <h3 className="retro-font-display retro-bold retro-contact-layout__channel-title">EMAIL</h3>
                    <p className="retro-font-body retro-contact-layout__channel-text">support@playpocket.retro</p>
                    <p className="retro-font-body retro-contact-layout__channel-note">Expect a reply within 24 hours.</p>
                  </div>
                </div>

                <div className="retro-contact-layout__channel">
                  <div className="retro-contact-layout__channel-icon">
                    <ChatText size={24} weight="fill" />
                  </div>
                  <div>
                    <h3 className="retro-font-display retro-bold retro-contact-layout__channel-title">LIVE CHAT</h3>
                    <p className="retro-font-body retro-contact-layout__channel-text">Available Mon-Fri, 9AM-5PM EST.</p>
                    <button className="retro-button retro-button--secondary retro-font-display retro-bold retro-contact-layout__chat-btn">START CHAT</button>
                  </div>
                </div>

                <div className="retro-contact-layout__channel">
                  <div className="retro-contact-layout__channel-icon">
                    <MapPin size={24} weight="fill" />
                  </div>
                  <div>
                    <h3 className="retro-font-display retro-bold retro-contact-layout__channel-title">HQ (NO WALK-INS)</h3>
                    <p className="retro-font-body retro-contact-layout__channel-text">128 Bit Lane, Level 4</p>
                    <p className="retro-font-body retro-contact-layout__channel-text">Arcade City, AC 90210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="retro-contact-layout__form-card">
              <h2 className="retro-font-display retro-bold retro-contact-layout__form-title">SEND TRANSMISSION</h2>

              <form onSubmit={handleFormSubmit} className="retro-contact-layout__form">
                <div className="retro-contact-layout__form-row">
                  <div className="retro-contact-layout__field">
                    <label htmlFor="contactName" className="retro-font-display retro-bold retro-contact-layout__label">PLAYER NAME *</label>
                    <input id="contactName" type="text" required className="retro-font-body retro-contact-layout__input" />
                  </div>
                  <div className="retro-contact-layout__field">
                    <label htmlFor="contactEmail" className="retro-font-display retro-bold retro-contact-layout__label">EMAIL ADDRESS *</label>
                    <input id="contactEmail" type="email" required className="retro-font-body retro-contact-layout__input" />
                  </div>
                </div>

                <div className="retro-contact-layout__field">
                  <label htmlFor="contactSubject" className="retro-font-display retro-bold retro-contact-layout__label">SUBJECT</label>
                  <select id="contactSubject" className="retro-font-body retro-contact-layout__select">
                    <option value="support">Technical Support</option>
                    <option value="order">Order Issue</option>
                    <option value="collab">Partnerships / Collabs</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="retro-contact-layout__field">
                  <label htmlFor="contactMessage" className="retro-font-display retro-bold retro-contact-layout__label">MESSAGE *</label>
                  <textarea id="contactMessage" required rows={5} className="retro-font-body retro-contact-layout__textarea" />
                </div>

                <button type="submit" className="retro-button retro-button--primary retro-font-display retro-bold retro-contact-layout__submit">
                  SEND MESSAGE <ArrowRight weight="bold" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageContactRetro.displayName = 'PageContactRetro';