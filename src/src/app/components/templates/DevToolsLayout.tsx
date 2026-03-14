/**
 * DevToolsLayout
 *
 * Wrapper layout for all /dev-tools/* routes.
 * Provides retro header/footer with dev tools sub-navigation.
 *
 * Width constraints:
 * - Shell (header/footer): max 1440px
 * - Content area: max 1440px (site-wide)
 * - Responsive breakpoints: 320px → 1440px
 *
 * @route /dev-tools/*
 */

import React from 'react';
import { Outlet } from 'react-router';
import { HeaderRetro } from '../parts/HeaderRetro';
import { FooterRetro } from '../parts/FooterRetro';
import { DevToolsSubHeader } from '../parts/DevToolsSubHeader';
import { DevToolsSubFooter } from '../parts/DevToolsSubFooter';

export const DevToolsLayout = () => {
  return (
    <div className="retro-home theme-retro">
      <div className="retro-devtools-shell">
        <HeaderRetro />
        <DevToolsSubHeader />

        <main
          id="main-content"
          className="retro-devtools-content"
          role="main"
          aria-label="Developer tools content"
        >
          <Outlet />
        </main>

        <DevToolsSubFooter />
        <FooterRetro />
      </div>
    </div>
  );
}

DevToolsLayout.displayName = 'DevToolsLayout';