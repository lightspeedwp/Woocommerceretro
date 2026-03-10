/**
 * Toast Notification System
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No arrow functions
 * 3. Manual object construction
 */

import * as SonnerModule from 'sonner@2.0.3';
import { Check, Info, Warning as AlertTriangle, WarningCircle as AlertCircle } from '@phosphor-icons/react';
import React from 'react';

var ToasterComponent = SonnerModule.Toaster;
var sonnerToast = SonnerModule.toast;

var SonnerToaster = ToasterComponent;


/**
 * Toaster Component
 * 
 * Renders the toast container.
 */
export function Toaster() {
  return React.createElement(SonnerToaster, {
    position: "bottom-right",
    expand: false,
    richColors: true,
    closeButton: true,
    toastOptions: {
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
    }
  });
}

Toaster.displayName = 'Toaster';

/**
 * Toast API
 */
export var toast = {
  success: function(message, options) {
    var opts = Object.assign({
      icon: React.createElement(Check, { className: "w-5 h-5 text-green-600 dark:text-green-400" })
    }, options || {});
    return sonnerToast.success(message, opts);
  },

  error: function(message, options) {
    var opts = Object.assign({
      icon: React.createElement(AlertCircle, { className: "w-5 h-5 text-red-600 dark:text-red-400" })
    }, options || {});
    return sonnerToast.error(message, opts);
  },

  warning: function(message, options) {
    var opts = Object.assign({
      icon: React.createElement(AlertTriangle, { className: "w-5 h-5 text-yellow-600 dark:text-yellow-400" })
    }, options || {});
    return sonnerToast.warning(message, opts);
  },

  info: function(message, options) {
    var opts = Object.assign({
      icon: React.createElement(Info, { className: "w-5 h-5 text-blue-600 dark:text-blue-400" })
    }, options || {});
    return sonnerToast.info(message, opts);
  },

  loading: function(message, options) {
    return sonnerToast.loading(message, options);
  },

  promise: sonnerToast.promise,
  custom: sonnerToast.custom,
  dismiss: sonnerToast.dismiss,
  dismissAll: function() {
    return sonnerToast.dismiss();
  }
};

/**
 * Common Toast Patterns
 */
export var toastPatterns = {
  cart: {
    added: function(productName, viewCartAction) {
      var options = { duration: 3000 };
      if (viewCartAction) {
        options.action = {
          label: 'View Cart',
          onClick: viewCartAction
        };
      }
      return toast.success(productName + ' added to cart', options);
    },
    removed: function(productName) {
      return toast.info(productName + ' removed from cart', { duration: 2000 });
    },
    updated: function() {
      return toast.success('Cart updated', { duration: 2000 });
    },
    error: function(message) {
      return toast.error(message || 'Failed to update cart', { duration: 4000 });
    }
  },

  form: {
    success: function(message) {
      return toast.success(message || 'Form submitted successfully', { duration: 3000 });
    },
    error: function(message) {
      return toast.error(message || 'Please check the form and try again', { duration: 4000 });
    },
    validation: function(message) {
      return toast.warning(message, { duration: 3000 });
    }
  },

  data: {
    loading: function(message) {
      return toast.loading(message || 'Loading...');
    },
    saved: function(message) {
      return toast.success(message || 'Changes saved', { duration: 2000 });
    },
    deleted: function(message, undoAction) {
      var options = { duration: 4000 };
      if (undoAction) {
        options.action = {
          label: 'Undo',
          onClick: undoAction
        };
      }
      return toast.success(message || 'Item deleted', options);
    },
    error: function(message) {
      return toast.error(message || 'An error occurred', { duration: 4000 });
    }
  },

  auth: {
    signedIn: function(username) {
      return toast.success(username ? 'Welcome back, ' + username + '!' : 'Signed in successfully', { duration: 3000 });
    },
    signedOut: function() {
      return toast.info('Signed out successfully', { duration: 2000 });
    },
    error: function(message) {
      return toast.error(message || 'Authentication failed', { duration: 4000 });
    }
  },

  network: {
    offline: function() {
      return toast.warning('You are offline. Some features may not work.', { duration: 5000 });
    },
    online: function() {
      return toast.success('Connection restored', { duration: 2000 });
    },
    timeout: function() {
      return toast.error('Request timed out. Please try again.', { duration: 4000 });
    }
  },

  file: {
    uploading: function(filename) {
      return toast.loading('Uploading ' + filename + '...');
    },
    uploaded: function(filename) {
      return toast.success(filename + ' uploaded successfully', { duration: 3000 });
    },
    error: function(filename, message) {
      return toast.error(filename + ': ' + (message || 'Upload failed'), { duration: 4000 });
    }
  },

  clipboard: {
    copied: function(label) {
      return toast.success(label || 'Copied to clipboard', { duration: 2000 });
    }
  }
};