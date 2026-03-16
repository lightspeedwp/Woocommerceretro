import React from 'react';
import { FooterRetroPattern } from '../patterns/FooterRetroPattern';
import { useSiteLayout } from '../../contexts/SiteLayoutContext';

export const FooterRetro = () => {
  const { hasSharedChrome } = useSiteLayout();

  // SiteLayout already renders the footer — skip to prevent duplicates
  if (hasSharedChrome) return null;

  return <FooterRetroPattern />;
}

FooterRetro.displayName = 'FooterRetro';
