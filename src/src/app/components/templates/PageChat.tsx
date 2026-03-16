/**
 * PageChat Template — Funky Redesign (Phase 10)
 *
 * Live chat information and alternative contact methods.
 *
 * **CSS:** `/src/styles/sections/info-pages-funky.css`
 * **Dark Mode:** Complete support
 *
 * @route /chat
 */

import React from 'react';
import { Link } from 'react-router';
import { ChatCircle as MessageCircle, Clock, Phone, Envelope as Mail, ArrowRight } from '../../utils/phosphor-compat';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Heading } from '../common/Heading';
import { chatPopularTopics, chatContactOptions } from '../../data/chat';

const contactIcons: Record<string, React.ReactNode> = {
  'Mail': <Mail size={32} />,
  'Phone': <Phone size={32} />,
};

export const PageChat = () => {
  return (
    <Layout>
      {/* Page Header */}
      <section className="wp-page-intro-section">
        <Container className="wp-page-intro-content">
          <Typography variant="h1" className="wp-page-intro-title">Live Chat</Typography>
          <Typography variant="body" className="wp-page-intro-text">
            Chat with our support team in real time for quick answers to your questions.
          </Typography>
        </Container>
      </section>

      {/* Chat Widget Placeholder */}
      <section className="wp-content-section">
        <Container variant="content">
          <div className="wp-chat-placeholder">
            <MessageCircle size={48} className="wp-chat-placeholder__icon" />
            <Heading level="2">Start a Conversation</Heading>
            <Typography variant="body">
              Our chat team is available during business hours to help with orders, products, returns, and more.
            </Typography>
            <div className="wp-chat-placeholder__hours">
              <Clock size={18} />
              <Typography variant="body">
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM EST
              </Typography>
            </div>
            <button className="wp-button wp-button--primary wp-button--lg">
              <MessageCircle size={20} /> Start Chat
            </button>
            <Typography variant="caption" className="wp-chat-placeholder__note">
              Average response time: under 2 minutes
            </Typography>
          </div>
        </Container>
      </section>

      {/* Common Topics */}
      <section className="wp-content-section wp-content-section--alt">
        <Container variant="content">
          <Heading level="2">Popular Chat Topics</Heading>
          <div className="wp-topic-list">
            {chatPopularTopics.map((topic: string, index: number) => (
              <button key={index} className="wp-topic-button">
                <span>{topic}</span>
                <ArrowRight size={16} />
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Alternative Contact */}
      <section className="wp-content-section">
        <Container>
          <Heading level="2" align="center">Other Ways to Reach Us</Heading>
          <div className="wp-contact-options">
            {chatContactOptions.map((option: any, index: number) => (
              <div key={index} className="wp-contact-card">
                <div className="wp-contact-card__icon-wrapper">
                  {contactIcons[option.icon]}
                </div>
                <Heading level="4">{option.title}</Heading>
                <Typography variant="body">{option.value}</Typography>
                {option.type === 'phone' ? (
                  <a href={option.link} className="wp-button wp-button--secondary">{option.buttonText}</a>
                ) : (
                  <Link to={option.link} className="wp-button wp-button--secondary">{option.buttonText}</Link>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}