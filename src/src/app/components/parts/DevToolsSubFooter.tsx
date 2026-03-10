import React from 'react';
import * as ReactRouterModule from 'react-router';
import { BookOpen, GitCommit } from '@phosphor-icons/react';
import * as ContainerModule from '../common/Container';

var Link = ReactRouterModule.Link;
var Container = ContainerModule.Container;

export function DevToolsSubFooter() {
  return React.createElement('div', { className: 'dev-tools-footer' },
    React.createElement(Container, { className: 'dev-tools-footer__container' },
      React.createElement('div', { className: 'dev-tools-footer__inner' },
        React.createElement('div', { className: 'dev-tools-footer__left' },
          React.createElement('span', { className: 'dev-tools-footer__version' },
            React.createElement(GitCommit, { size: 16, weight: 'duotone' }),
            React.createElement('span', null, 'v2.8 - Funky Redesign')
          )
        ),
        React.createElement('div', { className: 'dev-tools-footer__right' },
          React.createElement('a', { 
            href: 'https://github.com/woocommerce',
            target: '_blank',
            rel: 'noopener noreferrer',
            className: 'dev-tools-footer__link' 
          },
            React.createElement(BookOpen, { size: 16, weight: 'duotone' }),
            React.createElement('span', null, 'Guidelines')
          )
        )
      )
    )
  );
}

DevToolsSubFooter.displayName = 'DevToolsSubFooter';