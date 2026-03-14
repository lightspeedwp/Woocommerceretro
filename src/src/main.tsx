import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from '../App';
// FIGMA MAKE FIX: Only 5 critical CSS imports to prevent IframeMessageAbortError
// Full 280-import version preserved at /styles/globals.css for production
import '../styles/globals-minimal.css';

/**
 * Main Entry Point
 * 
 * StrictMode temporarily disabled to reduce initial render overhead
 * and help with Figma Make iframe initialization timeout.
 */

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Failed to find the root element.');
}

// Temporarily disable StrictMode to reduce initialization overhead
createRoot(rootElement).render(<App />);