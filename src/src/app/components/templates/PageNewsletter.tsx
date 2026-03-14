import React from 'react';
import { Layout } from '../parts/Layout';
import { Container } from '../common/Container';
import { NewsletterCTA } from '../patterns/NewsletterCTA';
import { newsletterPageContent } from '../../data/newsletter';

/**
 * PageNewsletter Template — Funky Redesign
 *
 * Full-page newsletter signup using the new NewsletterCTA component.
 *
 * @route /newsletter
 * @template
 */
export const PageNewsletter = () => {
  return (
    <Layout>
      <div
        className="newsletter-page"
        style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Container>
          <NewsletterCTA
            variant="full"
            heading={newsletterPageContent.heading}
            description={newsletterPageContent.subheading}
            buttonText={newsletterPageContent.formButton}
            placeholder={newsletterPageContent.formPlaceholder}
          />
        </Container>
      </div>
    </Layout>
  );
}