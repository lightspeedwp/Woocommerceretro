/**
 * Toast Notification System
 *
 * Wraps sonner's toast library with WordPress-aligned styling
 * and pre-built toast patterns for common actions.
 */

import React from 'react';
import { Toaster as SonnerToaster, toast as sonnerToast } from 'sonner@2.0.3';
import { Check, Info, Warning as AlertTriangle, WarningCircle as AlertCircle } from '../../utils/phosphor-compat';

/**
 * Toaster Component - Renders the toast container.
 */
export const Toaster = () => {
  return (
    <SonnerToaster
      position="bottom-right"
      expand={false}
      richColors
      closeButton
      toastOptions={{
        className: 'retro-toast',
        classNames: {
          title: 'retro-toast__title',
          description: 'retro-toast__description',
          actionButton: 'retro-toast__action-btn',
          cancelButton: 'retro-toast__cancel-btn',
          closeButton: 'retro-toast__close-btn',
          success: 'retro-toast--success',
          error: 'retro-toast--error',
          warning: 'retro-toast--warning',
          info: 'retro-toast--info',
        },
      }}
    />
  );
}

Toaster.displayName = 'Toaster';

/**
 * Toast API
 */
export const toast = {
  success: (message: string, options?: any) =>
    sonnerToast.success(message, {
      icon: <Check className="retro-toast__icon retro-toast__icon--success" />,
      ...options,
    }),

  error: (message: string, options?: any) =>
    sonnerToast.error(message, {
      icon: <AlertCircle className="retro-toast__icon retro-toast__icon--error" />,
      ...options,
    }),

  warning: (message: string, options?: any) =>
    sonnerToast.warning(message, {
      icon: <AlertTriangle className="retro-toast__icon retro-toast__icon--warning" />,
      ...options,
    }),

  info: (message: string, options?: any) =>
    sonnerToast.info(message, {
      icon: <Info className="retro-toast__icon retro-toast__icon--info" />,
      ...options,
    }),

  loading: (message: string, options?: any) => sonnerToast.loading(message, options),
  promise: sonnerToast.promise,
  custom: sonnerToast.custom,
  dismiss: sonnerToast.dismiss,
  dismissAll: () => sonnerToast.dismiss(),
};

/**
 * Common Toast Patterns
 */
export const toastPatterns = {
  cart: {
    added: (productName: string, viewCartAction?: () => void) =>
      toast.success(`${productName} added to cart`, {
        duration: 3000,
        ...(viewCartAction ? { action: { label: 'View Cart', onClick: viewCartAction } } : {}),
      }),
    removed: (productName: string) =>
      toast.info(`${productName} removed from cart`, { duration: 2000 }),
    updated: () => toast.success('Cart updated', { duration: 2000 }),
    error: (message?: string) =>
      toast.error(message || 'Failed to update cart', { duration: 4000 }),
  },

  form: {
    success: (message?: string) =>
      toast.success(message || 'Form submitted successfully', { duration: 3000 }),
    error: (message?: string) =>
      toast.error(message || 'Please check the form and try again', { duration: 4000 }),
    validation: (message: string) => toast.warning(message, { duration: 3000 }),
  },

  data: {
    loading: (message?: string) => toast.loading(message || 'Loading...'),
    saved: (message?: string) =>
      toast.success(message || 'Changes saved', { duration: 2000 }),
    deleted: (message?: string, undoAction?: () => void) =>
      toast.success(message || 'Item deleted', {
        duration: 4000,
        ...(undoAction ? { action: { label: 'Undo', onClick: undoAction } } : {}),
      }),
    error: (message?: string) =>
      toast.error(message || 'An error occurred', { duration: 4000 }),
  },

  auth: {
    signedIn: (username?: string) =>
      toast.success(username ? `Welcome back, ${username}!` : 'Signed in successfully', { duration: 3000 }),
    signedOut: () => toast.info('Signed out successfully', { duration: 2000 }),
    error: (message?: string) =>
      toast.error(message || 'Authentication failed', { duration: 4000 }),
  },

  network: {
    offline: () =>
      toast.warning('You are offline. Some features may not work.', { duration: 5000 }),
    online: () => toast.success('Connection restored', { duration: 2000 }),
    timeout: () =>
      toast.error('Request timed out. Please try again.', { duration: 4000 }),
  },

  file: {
    uploading: (filename: string) => toast.loading(`Uploading ${filename}...`),
    uploaded: (filename: string) =>
      toast.success(`${filename} uploaded successfully`, { duration: 3000 }),
    error: (filename: string, message?: string) =>
      toast.error(`${filename}: ${message || 'Upload failed'}`, { duration: 4000 }),
  },

  clipboard: {
    copied: (label?: string) =>
      toast.success(label || 'Copied to clipboard', { duration: 2000 }),
  },
};