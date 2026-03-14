import React from 'react';
import { Container } from '../common/Container';
import { Code } from '@phosphor-icons/react';

/**
 * PageComponentAPI Template — Funky Redesign
 *
 * Placeholder for comprehensive API reference for all React components.
 *
 * @template
 * @route /dev-tools/api
 */
const PageComponentAPI = () => {
  return (
    <>
      <div className="page-rewards">
        <section className="wp-page-intro-section">
          <Container>
            <div className="wp-page-intro-content">
              <div className="wp-badge-pill">
                <Code size={16} weight="duotone" />
                <span className="wp-badge-pill__text">API Reference</span>
              </div>
              <h1>Component API Reference</h1>
              <p className="wp-page-intro-text">
                Comprehensive documentation for all components in the design system. Searchable component documentation with props, examples, and usage guidelines.
              </p>
            </div>
          </Container>
        </section>

        <section className="reward-section">
          <Container>
            <div className="dev-placeholder funky-glass-panel">
              <Code size={48} weight="duotone" className="dev-placeholder__icon" />
              <p className="dev-placeholder__text">
                Full component API documentation coming soon
              </p>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default PageComponentAPI;