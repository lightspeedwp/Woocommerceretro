/**
 * Clipboard Utility
 *
 * Provides a cross-environment clipboard write function.
 * Falls back to the legacy `document.execCommand('copy')` technique
 * when the Clipboard API is unavailable or blocked by permissions policy
 * (e.g. inside sandboxed iframes).
 */

const fallbackCopy = (text: string): boolean => {
  try {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.select();

    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch (e) {
    return false;
  }
};

export const copyToClipboard = (text: string): Promise<boolean> => {
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    return navigator.clipboard.writeText(text)
      .then(() => true)
      .catch(() => fallbackCopy(text));
  }

  return Promise.resolve(fallbackCopy(text));
};
