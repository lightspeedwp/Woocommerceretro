import React, { useState } from 'react';

interface Tab {
  label: string;
  content: React.ReactNode;
}

/**
 * ProductTabs Component
 *
 * Responsive tab/accordion component for product detail sections.
 */
export const ProductTabs = ({
  tabs,
}: {
  tabs: Tab[];
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  return (
    <div className="wc-product-tabs">
      {/* Desktop tabs */}
      <div className="wc-product-tabs__desktop">
        <nav className="wc-product-tabs__nav" aria-label="Tabs">
          {tabs.map((tab, index) => {
            const isActive = activeTabIndex === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTabIndex(index)}
                className={`wc-product-tabs__tab ${isActive ? 'wc-product-tabs__tab--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
        <div className="wc-product-tabs__panels">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`wc-product-tabs__panel ${activeTabIndex === index ? 'wc-product-tabs__panel--active' : ''}`}
              role="tabpanel"
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile accordion */}
      <div className="wc-product-tabs__mobile">
        {tabs.map((tab, index) => {
          const isActive = activeTabIndex === index;
          return (
            <div key={index} className="wc-product-tabs__accordion-item">
              <button
                onClick={() => setActiveTabIndex(isActive ? -1 : index)}
                className="wc-product-tabs__accordion-trigger"
                aria-expanded={isActive}
              >
                {tab.label}
                <span className={`wc-product-tabs__accordion-icon ${isActive ? 'wc-product-tabs__accordion-icon--expanded' : ''}`}>
                  &#9660;
                </span>
              </button>
              <div
                className={`wc-product-tabs__accordion-content ${isActive ? 'wc-product-tabs__accordion-content--active' : ''}`}
                role="region"
              >
                {tab.content}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ProductTabs.displayName = 'ProductTabs';
