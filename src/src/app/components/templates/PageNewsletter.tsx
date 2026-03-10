import React from 'react';

import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as NewsletterCTAModule from '../patterns/NewsletterCTA';
import * as NewsletterDataModule from '../../data/newsletter';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var NewsletterCTA = NewsletterCTAModule.NewsletterCTA;
var newsletterPageContent = NewsletterDataModule.newsletterPageContent;

/**
 * PageNewsletter Template — Funky Redesign
 *
 * Full-page newsletter signup using the new NewsletterCTA component.
 *
 * @route /newsletter
 * @template
 */
export function PageNewsletter() {
  return React.createElement(Layout, null,
    React.createElement('div', { 
      className: 'newsletter-page',
      style: { minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }
    },
      React.createElement(Container, null,
        React.createElement(NewsletterCTA, {
          variant: 'full',
          heading: newsletterPageContent.heading,
          description: newsletterPageContent.subheading,
          buttonText: newsletterPageContent.formButton,
          placeholder: newsletterPageContent.formPlaceholder
        })
      )
    )
  );
}