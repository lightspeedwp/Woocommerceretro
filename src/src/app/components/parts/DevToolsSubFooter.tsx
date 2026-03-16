/**
 * DevToolsSubFooter
 *
 * Compact footer bar for dev tools section.
 * BEM styling in /src/styles/blocks/ui/dev-tools-layout.css
 */

import React from 'react';
import { BookOpen, GitCommit } from '../../utils/phosphor-compat';

export const DevToolsSubFooter = () => {
  return (
    <div className="retro-devtools-subfooter">
      <div className="retro-devtools-subfooter__inner">
        <span className="retro-font-display retro-devtools-subfooter__version">
          <GitCommit size={16} weight="bold" aria-hidden="true" />
          <span>v3.0 — RETRO REDESIGN</span>
        </span>
        <a
          href="https://github.com/woocommerce"
          target="_blank"
          rel="noopener noreferrer"
          className="retro-font-display retro-bold retro-devtools-subfooter__link"
        >
          <BookOpen size={16} weight="bold" aria-hidden="true" />
          <span>GUIDELINES</span>
        </a>
      </div>
    </div>
  );
}

DevToolsSubFooter.displayName = 'DevToolsSubFooter';