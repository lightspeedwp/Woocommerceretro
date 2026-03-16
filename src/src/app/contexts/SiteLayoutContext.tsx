/**
 * SiteLayoutContext
 *
 * Signals to HeaderRetro/FooterRetro that shared site chrome
 * is already being provided by SiteLayout.
 *
 * When `hasSharedChrome` is true, individual template-level
 * HeaderRetro/FooterRetro components render nothing (return null),
 * preventing duplicate headers and footers.
 *
 * This allows a zero-edit migration: templates can keep their
 * HeaderRetro/FooterRetro imports until they're gradually cleaned up.
 */

import { createContext, useContext } from 'react';

interface SiteLayoutContextValue {
  hasSharedChrome: boolean;
}

export const SiteLayoutContext = createContext<SiteLayoutContextValue>({
  hasSharedChrome: false,
});

export const useSiteLayout = () => useContext(SiteLayoutContext);
