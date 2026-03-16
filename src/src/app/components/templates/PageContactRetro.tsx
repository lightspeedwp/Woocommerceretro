/**
 * PageContactRetro
 *
 * "PlayPocket" FSE theme - Contact page.
 * All content driven from /data/contactPage.ts.
 * WCAG AA 2.2 compliant.
 *
 * @route /contact
 * @template
 */

import { type FormEvent } from 'react';
import { EnvelopeSimple, MapPin, ChatText, ArrowRight } from '../../utils/phosphor-compat';
import { contactPageContent, contactChannels, contactSubjects } from '../../data/contactPage';

const iconMap: Record<string, any> = {
  EnvelopeSimple,
  ChatText,
  MapPin,
};

export const PageContactRetro = () => {
  const { heroTitle, heroSubtitle, infoTitle, formTitle, formLabels, successMessage } = contactPageContent;

  const handleFormSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    alert(successMessage);
  };

  return (
    <>
      <main className="retro-main">

        {/* Title Banner */}
        <section className="retro-section" aria-labelledby="contact-heading">
          <div className="retro-container">
            <div className="retro-section-header">
              <h1 id="contact-heading" className="retro-font-display retro-bold retro-section-title">{heroTitle}</h1>
              <p className="retro-font-body retro-section-desc">{heroSubtitle}</p>
            </div>
          </div>
        </section>

        {/* Main Layout */}
        <section className="retro-section" aria-label="Contact information and form">
          <div className="retro-container">
            <div className="retro-contact-layout__grid">
              {/* Left Column - Contact Info */}
              <div className="retro-contact-layout__info">
                <h2 className="retro-font-display retro-bold retro-contact-layout__info-title">{infoTitle}</h2>

                <div className="retro-contact-layout__channels">
                  {contactChannels.map((channel) => {
                    const Icon = iconMap[channel.icon] || EnvelopeSimple;
                    return (
                      <div key={channel.id} className="retro-contact-layout__channel">
                        <div className="retro-contact-layout__channel-icon">
                          <Icon size={24} weight="fill" />
                        </div>
                        <div>
                          <h3 className="retro-font-display retro-bold retro-contact-layout__channel-title">{channel.title}</h3>
                          {channel.lines.map((line, idx) => (
                            <p key={idx} className="retro-font-body retro-contact-layout__channel-text">{line}</p>
                          ))}
                          {channel.note && (
                            <p className="retro-font-body retro-contact-layout__channel-note">{channel.note}</p>
                          )}
                          {channel.ctaText && (
                            <button className="retro-btn retro-btn--secondary retro-font-display retro-bold retro-contact-layout__chat-btn">
                              {channel.ctaText}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="retro-contact-layout__form-card">
                <h2 className="retro-font-display retro-bold retro-contact-layout__form-title">{formTitle}</h2>

                <form onSubmit={handleFormSubmit} className="retro-contact-layout__form">
                  <div className="retro-contact-layout__form-row">
                    <div className="retro-contact-layout__field">
                      <label htmlFor="contactName" className="retro-font-display retro-bold retro-contact-layout__label">
                        {formLabels.name}
                      </label>
                      <input id="contactName" type="text" required className="retro-font-body retro-contact-layout__input" />
                    </div>
                    <div className="retro-contact-layout__field">
                      <label htmlFor="contactEmail" className="retro-font-display retro-bold retro-contact-layout__label">
                        {formLabels.email}
                      </label>
                      <input id="contactEmail" type="email" required className="retro-font-body retro-contact-layout__input" />
                    </div>
                  </div>

                  <div className="retro-contact-layout__field">
                    <label htmlFor="contactSubject" className="retro-font-display retro-bold retro-contact-layout__label">
                      {formLabels.subject}
                    </label>
                    <select id="contactSubject" className="retro-font-body retro-contact-layout__select">
                      {contactSubjects.map((subj) => (
                        <option key={subj.value} value={subj.value}>{subj.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="retro-contact-layout__field">
                    <label htmlFor="contactMessage" className="retro-font-display retro-bold retro-contact-layout__label">
                      {formLabels.message}
                    </label>
                    <textarea id="contactMessage" required rows={5} className="retro-font-body retro-contact-layout__textarea" />
                  </div>

                  <button type="submit" className="retro-btn retro-btn--primary retro-font-display retro-bold retro-contact-layout__submit">
                    {formLabels.submit} <ArrowRight weight="bold" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

PageContactRetro.displayName = 'PageContactRetro';