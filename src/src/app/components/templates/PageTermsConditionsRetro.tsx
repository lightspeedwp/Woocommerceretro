/**
 * PageTermsConditionsRetro
 *
 * "PlayPocket" FSE theme - Terms & Conditions.
 * WCAG AA 2.2 compliant.
 */

import { Handshake } from '../../utils/phosphor-compat';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';

interface TermsSection {
  title: string;
  content: string;
}

const sections: TermsSection[] = [
  { title: '1. AGREEMENT TO TERMS', content: 'By purchasing from PlayPocket, you agree to abide by these terms. If you use cheat codes or exploits to bypass our checkout system, your order will be cancelled and your account banned.' },
  { title: '2. PRODUCT DESCRIPTIONS', content: 'We strive to display our hardware as accurately as possible. However, due to the nature of retro displays, colors may vary slightly from what you see on your modern 4K monitor.' },
  { title: '3. RETURNS & REFUNDS', content: 'You have 30 days to initiate a return. Items must be in original condition. "Blowing in the cartridge slot" does not count as physical damage, but please do not drop the console in water.' },
  { title: '4. LIMITATION OF LIABILITY', content: 'PlayPocket is not responsible if you spend too many hours playing classic games and forget to do your homework or go to work.' },
];

export const PageTermsConditionsRetro = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-legal-layout">
          <div className="retro-legal-layout__header">
            <Handshake size={64} weight="fill" color="var(--color-ink)" className="retro-legal-layout__icon" />
            <h1 className="retro-font-display retro-bold retro-legal-layout__title">RULES OF PLAY (TERMS)</h1>
            <p className="retro-font-body retro-legal-layout__subtitle">Read the manual before you press start.</p>
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

PageTermsConditionsRetro.displayName = 'PageTermsConditionsRetro';