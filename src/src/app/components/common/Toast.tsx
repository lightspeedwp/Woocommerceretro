/**
 * Toast Notification System
 *
 * Wraps sonner's toast library with WordPress-aligned styling
 * and pre-built toast patterns for common actions.
 */

import React from 'react';
import { Toaster as SonnerToaster, toast as sonnerToast } from 'sonner@2.0.3';
import { Check, Info, Warning as AlertTriangle, WarningCircle as AlertCircle } from '@phosphor-icons/react';

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
        className: 'bg-white dark:bg-surface-panel border border-gray-200 dark:border-gray-700 funky-toast',
        classNames: {
          title: 'text-gray-900 dark:text-gray-50 font-medium',
          description: 'text-gray-600 dark:text-gray-400',
          actionButton: 'bg-purple-600 dark:bg-purple-500 text-white hover:bg-purple-700 dark:hover:bg-purple-600',
          cancelButton: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700',
          closeButton: 'bg-white dark:bg-surface-panel border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-50',
          success: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950',
          error: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950',
          warning: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950',
          info: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950',
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
      icon: <Check className="w-5 h-5 text-green-600 dark:text-green-400" />,
      ...options,
    }),

  error: (message: string, options?: any) =>
    sonnerToast.error(message, {
      icon: <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />,
      ...options,
    }),

  warning: (message: string, options?: any) =>
    sonnerToast.warning(message, {
      icon: <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
      ...options,
    }),

  info: (message: string, options?: any) =>
    sonnerToast.info(message, {
      icon: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
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