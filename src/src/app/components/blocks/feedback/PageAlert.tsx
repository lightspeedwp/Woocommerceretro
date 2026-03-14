import React from 'react';
import { CheckCircle, WarningCircle as AlertCircle, Info, X } from '@phosphor-icons/react';

const iconClass = "wp-block-page-alert__icon";
const icons: Record<string, React.ReactNode> = {
  success: <CheckCircle size={20} className={iconClass} />,
  error: <AlertCircle size={20} className={iconClass} />,
  info: <Info size={20} className={iconClass} />,
};

interface PageAlertProps {
  type: 'success' | 'error' | 'info';
  message: string;
  onDismiss?: () => void;
}

export const PageAlert = ({ type, message, onDismiss }: PageAlertProps) => {
  return (
    <div className={`wp-block-page-alert wp-block-page-alert--${type}`} role="alert">
      {icons[type]}
      <p className="wp-block-page-alert__message">{message}</p>
      {onDismiss && (
        <button onClick={onDismiss} className="wp-block-page-alert__dismiss" aria-label="Dismiss alert">
          <X size={16} />
        </button>
      )}
    </div>
  );
}