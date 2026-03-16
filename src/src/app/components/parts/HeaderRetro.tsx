import React from 'react';
import { HeaderRetroPattern } from '../patterns/HeaderRetroPattern';
import { useSiteLayout } from '../../contexts/SiteLayoutContext';

export const HeaderRetro = () => {
  const { hasSharedChrome } = useSiteLayout();

  // SiteLayout already renders the header — skip to prevent duplicates
  if (hasSharedChrome) return null;

  return <HeaderRetroPattern />;
}

HeaderRetro.displayName = 'HeaderRetro';
