import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as LayoutModule from '../parts/Layout';
import * as DevToolsSubHeaderModule from '../parts/DevToolsSubHeader';
import * as DevToolsSubFooterModule from '../parts/DevToolsSubFooter';

var Outlet = ReactRouterModule.Outlet;
var Layout = LayoutModule.Layout;
var DevToolsSubHeader = DevToolsSubHeaderModule.DevToolsSubHeader;
var DevToolsSubFooter = DevToolsSubFooterModule.DevToolsSubFooter;

export function DevToolsLayout() {
  return React.createElement(Layout, null,
    React.createElement('div', { className: 'dev-tools-wrapper' },
      React.createElement(DevToolsSubHeader, null),
      React.createElement('main', { className: 'dev-tools-main' },
        React.createElement(Outlet, null)
      ),
      React.createElement(DevToolsSubFooter, null)
    )
  );
}

DevToolsLayout.displayName = 'DevToolsLayout';