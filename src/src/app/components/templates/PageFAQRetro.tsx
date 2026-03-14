/**
 * PageFAQRetro
 *
 * "PlayPocket" FSE theme - FAQ page with accordion.
 * WCAG AA 2.2 compliant.
 */

import { useState, type ComponentType } from 'react';
import { CaretDown, ChatCircle, Question, ShieldCheck } from '@phosphor-icons/react';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { faqCategories } from '../../data/faq';

export const PageFAQRetro = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (catIndex: number, itemIndex: number) => {
    const key = `${catIndex}-${itemIndex}`;
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const getCategoryIcon = (title: string): ComponentType<any> => {
    if (title.includes('Order')) return ChatCircle;
    if (title.includes('Shipping')) return ShieldCheck;
    return Question;
  };

  return (
    <div className="retro-home theme-retro">
      <div className="retro-container">
        <HeaderRetro />

        <div className="retro-faq-layout">
          {/* Title Banner */}
          <div className="retro-title-banner retro-faq-layout__banner">
            <h1 className="retro-font-display retro-bold retro-faq-layout__title">GAME GUIDE (FAQ)</h1>
            <p className="retro-font-body retro-faq-layout__subtitle">
              Stuck on a level? Check the manual below for answers to common questions.
            </p>
          </div>

          {/* FAQ Content */}
          <div className="retro-faq-content">
            {faqCategories.map((category, catIdx) => {
              const Icon = getCategoryIcon(category.title);

              return (
                <div key={catIdx} className="retro-faq-content__category">
                  {/* Category Header */}
                  <div className="retro-faq-content__category-header">
                    <div className="retro-faq-content__category-icon">
                      <Icon size={24} weight="fill" />
                    </div>
                    <h2 className="retro-font-display retro-bold retro-faq-content__category-title">
                      {category.title.toUpperCase()}
                    </h2>
                  </div>

                  {/* Category Items */}
                  <div className="retro-faq-content__items">
                    {category.items.map((item, itemIdx) => {
                      const isOpen = !!openItems[`${catIdx}-${itemIdx}`];

                      return (
                        <div
                          key={itemIdx}
                          className={`retro-faq-content__item ${isOpen ? 'retro-faq-content__item--open' : ''}`}
                        >
                          <button
                            onClick={() => toggleItem(catIdx, itemIdx)}
                            className="retro-faq-content__trigger"
                            aria-expanded={isOpen}
                          >
                            <span className="retro-font-display retro-bold retro-faq-content__question">
                              Q: {item.question}
                            </span>
                            <div className={`retro-faq-content__caret ${isOpen ? 'retro-faq-content__caret--open' : ''}`}>
                              <CaretDown size={20} weight="bold" />
                            </div>
                          </button>

                          {isOpen && (
                            <div className="retro-faq-content__answer">
                              <p className="retro-font-body">{item.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <FooterRetro />
      </div>
    </div>
  );
}

PageFAQRetro.displayName = 'PageFAQRetro';