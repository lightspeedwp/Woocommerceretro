/**
 * PagePrivacyPolicyRetro
 *
 * "PlayPocket" FSE theme - Privacy Policy.
 * WCAG AA 2.2 compliant.
 */

import { Scroll } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

interface PolicySection {
  title: string;
  content: string;
}

const sections: PolicySection[] = [
  { title: '1. DATA WE COLLECT', content: 'We collect basic player stats including your name, email (Player ID), shipping address (Save Location), and purchase history (Loot Drops). We do not collect your high scores, but we assume they are very good.' },
  { title: '2. HOW WE USE IT', content: 'Your data is strictly used to deliver your items, process payments, and send occasional newsletters (if you opted in). We do not sell your data to Bowser, Eggman, or any third-party villains.' },
  { title: '3. COOKIES (NOT THE 8-BIT KIND)', content: 'We use cookies to keep you logged in and save your cart contents. If you disable cookies, your session will reset like a console without a battery backup.' },
  { title: '4. SECURING YOUR SAVE FILE', content: 'All transactions are encrypted using industry-standard SSL. We treat your personal information with the same care as a legendary drop.' },
];

export const PagePrivacyPolicyRetro = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-legal-layout">
          <div className="retro-legal-layout__header">
            <Scroll size={64} weight="fill" color="var(--color-ink)" className="retro-legal-layout__icon" />
            <h1 className="retro-font-display retro-bold retro-legal-layout__title">PRIVACY POLICY</h1>
            <p className="retro-font-body retro-legal-layout__subtitle">Last Updated: October 24, 1999 (Okay, 2026)</p>
          </div>

          <div className="retro-font-body retro-legal-layout__content">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="retro-font-display retro-bold retro-legal-layout__section-title">{section.title}</h2>
                <p className="retro-legal-layout__section-text">{section.content}</p>
              </div>
            ))}
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PagePrivacyPolicyRetro.displayName = 'PagePrivacyPolicyRetro';