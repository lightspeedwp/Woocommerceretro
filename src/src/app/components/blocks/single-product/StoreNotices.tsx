import React from 'react';
import { WarningCircle, CheckCircle, Info } from '@phosphor-icons/react';

interface Notice {
  type: 'success' | 'error' | 'info';
  message: string;
}

/**
 * StoreNotices Block
 *
 * Displays global or context-specific store alerts
 * (e.g., "Added to cart", "Out of stock").
 */
export const StoreNotices = ({
  notices,
}: {
  notices: Notice[];
}) => {
  if (!notices || notices.length === 0) return null;

  const getIcon = (type: string) => {
    if (type === 'success') return <CheckCircle size={18} />;
    if (type === 'error') return <WarningCircle size={18} />;
    if (type === 'info') return <Info size={18} />;
    return null;
  };

  return (
    <div className="wc-store-notices">
      {notices.map((notice, index) => (
        <div key={index} className={`wc-store-notice wc-store-notice--${notice.type}`}>
          <div className="wc-store-notice__icon">{getIcon(notice.type)}</div>
          <span className="wc-store-notice__message">{notice.message}</span>
        </div>
      ))}
    </div>
  );
};
