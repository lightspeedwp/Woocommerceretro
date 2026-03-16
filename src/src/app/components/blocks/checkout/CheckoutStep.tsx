import React from 'react';
import { Typography } from '../../common/Typography';
import { CaretDown as ChevronDown, CheckCircle } from '../../../utils/phosphor-compat';

/**
 * CheckoutStep Component (Block)
 *
 * Layout wrapper for individual steps in multi-step checkout flow.
 */
export const CheckoutStep = ({
  number,
  title,
  children,
  isLast = false,
  headerRight,
  isOpen = true,
  isCompleted = false,
  onToggle,
  className = '',
}: {
  number?: number;
  title: string;
  children?: React.ReactNode;
  isLast?: boolean;
  headerRight?: React.ReactNode;
  isOpen?: boolean;
  isCompleted?: boolean;
  onToggle?: () => void;
  className?: string;
}) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onToggle && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onToggle();
    }
  };

  const stepClasses = [
    'wp-checkout-step',
    isLast ? 'wp-checkout-step--last' : '',
    isOpen ? 'wp-checkout-step--open' : '',
    isCompleted ? 'wp-checkout-step--completed' : '',
    className,
    'funky-checkout-step',
  ].filter(Boolean).join(' ');

  const headerClasses = [
    'wp-checkout-step__header',
    onToggle ? 'wp-checkout-step__header--clickable' : '',
    'funky-step-header',
  ].filter(Boolean).join(' ');

  const circleClasses = [
    'wp-checkout-step__circle',
    isCompleted ? 'wp-checkout-step__circle--completed' : '',
    'funky-step-circle',
  ].filter(Boolean).join(' ');

  return (
    <div className={stepClasses}>
      <div className="wp-checkout-step__indicator">
        <div className={circleClasses}>
          {isCompleted ? (
            <CheckCircle size={20} className="wp-checkout-step__check-icon" />
          ) : (
            <Typography variant="h3" className="wp-checkout-step__number">{number}</Typography>
          )}
        </div>
        {!isLast && <div className="wp-checkout-step__connector funky-step-connector" />}
      </div>

      <div className="wp-checkout-step__body">
        <div
          className={headerClasses}
          onClick={onToggle}
          role={onToggle ? 'button' : undefined}
          tabIndex={onToggle ? 0 : undefined}
          onKeyDown={handleKeyDown}
        >
          <div className="wp-checkout-step__header-main">
            <Typography variant="h3" className="wp-checkout-step__title funky-step-title">{title}</Typography>
            {isCompleted && !isOpen && (
              <span className="wp-checkout-step__summary-text">Completed</span>
            )}
          </div>

          <div className="wp-checkout-step__header-actions">
            {headerRight}
            {onToggle && (
              <ChevronDown
                size={20}
                className={`wp-checkout-step__chevron ${isOpen ? 'wp-checkout-step__chevron--open' : ''}`}
              />
            )}
          </div>
        </div>

        <div className={`wp-checkout-step__content ${isOpen ? 'wp-checkout-step__content--open' : 'wp-checkout-step__content--closed'}`}>
          <div className="wp-checkout-step__content-inner">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

CheckoutStep.displayName = 'CheckoutStep';