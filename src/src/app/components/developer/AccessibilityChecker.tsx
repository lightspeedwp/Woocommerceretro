/**
 * AccessibilityChecker Component
 *
 * Developer tool that runs basic accessibility audits on the current page.
 * Checks for missing alt text, button labels, heading hierarchy, and landmarks.
 */

import { useState, useEffect, type ReactNode } from 'react';
import {
  Warning as AlertTriangle, CheckCircle, XCircle, Info, Eye,
  Keyboard, Cursor as MousePointer, SpeakerHigh as Volume2,
  CircleHalf as Contrast
} from '@phosphor-icons/react';

interface A11yIssue {
  type: 'error' | 'warning';
  category: string;
  message: string;
  element?: string;
  wcagCriterion?: string;
}

const categoryIcons: Record<string, ReactNode> = {
  contrast: <Contrast size={16} />,
  keyboard: <Keyboard size={16} />,
  aria: <Volume2 size={16} />,
  semantic: <Eye size={16} />,
  focus: <MousePointer size={16} />,
};

export const AccessibilityChecker = () => {
  const [issues, setIssues] = useState<A11yIssue[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const runAccessibilityAudit = () => {
    const foundIssues: A11yIssue[] = [];

    const images = document.querySelectorAll('img');
    images.forEach((img, i) => {
      if (!img.hasAttribute('alt')) {
        foundIssues.push({
          type: 'error',
          category: 'aria',
          message: `Image #${i + 1} is missing alt text`,
          element: img.src,
          wcagCriterion: 'WCAG 1.1.1 (Level A)',
        });
      }
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach((btn, i) => {
      const hasText = btn.textContent?.trim();
      const hasAriaLabel = btn.hasAttribute('aria-label');
      if (!hasText && !hasAriaLabel) {
        foundIssues.push({
          type: 'error',
          category: 'aria',
          message: `Button #${i + 1} has no accessible name`,
          wcagCriterion: 'WCAG 4.1.2 (Level A)',
        });
      }
    });

    const h1s = document.querySelectorAll('h1');
    if (h1s.length > 1) {
      foundIssues.push({
        type: 'warning',
        category: 'semantic',
        message: `Page has ${h1s.length} H1 elements - should have only one`,
        wcagCriterion: 'WCAG 1.3.1 (Level A)',
      });
    }

    if (!document.querySelector('main')) {
      foundIssues.push({
        type: 'error',
        category: 'semantic',
        message: 'Page is missing <main> landmark',
        wcagCriterion: 'WCAG 1.3.1 (Level A)',
      });
    }

    setIssues(foundIssues);
  };

  useEffect(() => {
    if (isOpen) runAccessibilityAudit();
  }, [isOpen]);

  const getCategoryIcon = (category: string) =>
    categoryIcons[category] || <Info size={16} />;

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="wp-dev-checker__toggle"
        aria-label="Open accessibility checker"
      >
        <Eye size={24} />
      </button>
    );
  }

  return (
    <div className="wp-dev-checker__panel">
      {/* Header */}
      <div className="wp-dev-checker__header">
        <div className="wp-dev-checker__header-row">
          <div className="wp-dev-checker__title-group">
            <Eye size={20} className="wp-dev-checker__title-icon" />
            <h3 className="wp-dev-checker__title">Accessibility Checker</h3>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="wp-dev-checker__close"
          >
            X
          </button>
        </div>
        <div className="wp-dev-checker__tabs">
          <button
            onClick={() => setActiveTab('all')}
            className={`wp-dev-checker__tab ${activeTab === 'all' ? 'wp-dev-checker__tab--active' : ''}`}
          >
            All
          </button>
        </div>
      </div>

      {/* Issues List */}
      <div className="wp-dev-checker__issues">
        {issues.length === 0 ? (
          'No issues found!'
        ) : (
          issues.map((issue, index) => (
            <div
              key={index}
              className={`wp-dev-checker__issue wp-dev-checker__issue--${issue.type}`}
            >
              <div className="wp-dev-checker__issue-content">
                {getCategoryIcon(issue.category)}
                <div>
                  <p className="wp-dev-checker__issue-message">{issue.message}</p>
                  {issue.element && <p className="wp-dev-checker__issue-element">{issue.element}</p>}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="wp-dev-checker__footer">
        <button onClick={runAccessibilityAudit} className="wp-dev-checker__action">
          Re-run Audit
        </button>
      </div>
    </div>
  );
}