import React from 'react';
import * as ReactRouterModule from 'react-router';
import { ChatCircle as MessageCircle, Clock, Phone, Envelope as Mail, ArrowRight } from '@phosphor-icons/react';

var Link = ReactRouterModule.Link;

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as TypographyModule from '../common/Typography';
import * as HeadingModule from '../common/Heading';
import * as ChatDataModule from '../../data/chat';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Typography = TypographyModule.Typography;
var Heading = HeadingModule.Heading;
var chatPopularTopics = ChatDataModule.chatPopularTopics;
var chatContactOptions = ChatDataModule.chatContactOptions;

/**
 * PageChat Template — Funky Redesign (Phase 10)
 * 
 * Live chat information and alternative contact methods.
 * 
 * Funky treatments (inherited from info-pages-funky.css):
 *   Hero:           Gradient overlay with orbs
 *   Topic cards:    Glassmorphism with neon hover glow
 *   Contact cards:  Glass panels with gradient icon circles
 *   Chat button:    Neon glow CTA
 * 
 * **CSS:** `/src/styles/sections/info-pages-funky.css`
 * **Dark Mode:** ✅ Complete support
 *
 * @route /chat
 * @template
 */

var contactIcons = {
  'Mail': React.createElement(Mail, { size: 32 }),
  'Phone': React.createElement(Phone, { size: 32 }),
};

export function PageChat() {
  return (
    React.createElement(Layout, null,
      /* Page Header */
      React.createElement('section', { className: "wp-page-intro-section" },
        React.createElement(Container, { className: "wp-page-intro-content" },
          React.createElement(Typography, { variant: "h1", className: "wp-page-intro-title" }, "Live Chat"),
          React.createElement(Typography, { variant: "body", className: "wp-page-intro-text" },
            "Chat with our support team in real time for quick answers to your questions."
          )
        )
      ),

      /* Chat Widget Placeholder */
      React.createElement('section', { className: "wp-content-section" },
        React.createElement(Container, { variant: "content" },
          React.createElement('div', { className: "wp-chat-placeholder" },
            React.createElement(MessageCircle, { size: 48, className: "wp-chat-placeholder__icon" }),
            React.createElement(Heading, { level: "2" }, "Start a Conversation"),
            React.createElement(Typography, { variant: "body" },
              "Our chat team is available during business hours to help with orders, products, returns, and more."
            ),
            React.createElement('div', { className: "wp-chat-placeholder__hours" },
              React.createElement(Clock, { size: 18 }),
              React.createElement(Typography, { variant: "body" },
                React.createElement('strong', null, "Hours:"), " Monday - Friday, 9:00 AM - 6:00 PM EST"
              )
            ),
            React.createElement('button', { className: "wp-button wp-button--primary wp-button--lg" },
              React.createElement(MessageCircle, { size: 20 }), " Start Chat"
            ),
            React.createElement(Typography, { variant: "caption", className: "wp-chat-placeholder__note" },
              "Average response time: under 2 minutes"
            )
          )
        )
      ),

      /* Common Topics */
      React.createElement('section', { className: "wp-content-section wp-content-section--alt" },
        React.createElement(Container, { variant: "content" },
          React.createElement(Heading, { level: "2" }, "Popular Chat Topics"),
          React.createElement('div', { className: "wp-topic-list" },
            chatPopularTopics.map(function(topic, index) { return (
              React.createElement('button', { key: index, className: "wp-topic-button" },
                React.createElement('span', null, topic),
                React.createElement(ArrowRight, { size: 16 })
              )
            )})
          )
        )
      ),

      /* Alternative Contact */
      React.createElement('section', { className: "wp-content-section" },
        React.createElement(Container, null,
          React.createElement(Heading, { level: "2", align: "center" }, "Other Ways to Reach Us"),
          React.createElement('div', { className: "wp-contact-options" },
            chatContactOptions.map(function(option, index) { return (
              React.createElement('div', { key: index, className: "wp-contact-card" },
                React.createElement('div', { className: "wp-contact-card__icon-wrapper" },
                  contactIcons[option.icon]
                ),
                React.createElement(Heading, { level: "4" }, option.title),
                React.createElement(Typography, { variant: "body" }, option.value),
                option.type === 'phone'
                  ? React.createElement('a', { href: option.link, className: "wp-button wp-button--secondary" }, option.buttonText)
                  : React.createElement(Link, { to: option.link, className: "wp-button wp-button--secondary" }, option.buttonText)
              )
            )})
          )
        )
      )
    )
  );
}
