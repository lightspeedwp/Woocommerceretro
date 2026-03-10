/**
 * Clipboard Utility
 *
 * Provides a cross-environment clipboard write function.
 * Falls back to the legacy `document.execCommand('copy')` technique
 * when the Clipboard API is unavailable or blocked by permissions policy
 * (e.g. inside sandboxed iframes).
 */

export function copyToClipboard(text) {
  // Try modern Clipboard API first
  if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
    return navigator.clipboard.writeText(text).then(function() {
      return true;
    }).catch(function() {
      // Clipboard API blocked — fall through to legacy approach
      return fallbackCopy(text);
    });
  }

  // Use legacy fallback directly
  return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text) {
  // Legacy fallback using a temporary textarea + execCommand
  try {
    var textarea = document.createElement('textarea');
    textarea.value = text;

    // Place off-screen to avoid visual flash
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    textarea.style.top = '-9999px';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.select();

    var success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch (e) {
    return false;
  }
}
