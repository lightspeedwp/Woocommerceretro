import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as ButtonsModule from '../../blocks/design/Buttons';
import * as ContainerModule from '../../common/Container';

var Link = ReactRouterModule.Link;
var Button = ButtonsModule.Button;
var Container = ContainerModule.Container;

export function SupportStrip() {
  return React.createElement('section', { className: 'wp-shop-support-strip' },
    React.createElement(Container, null,
      React.createElement('div', { className: 'wp-shop-support-strip__card' },
        React.createElement('div', null,
          React.createElement('h3', { className: 'wp-shop-support-strip__heading' }, 'Need help choosing?'),
          React.createElement('p', { className: 'wp-shop-support-strip__description' }, 'Our style experts are here to help you find exactly what fits your needs and budget.')
        ),
        React.createElement('div', { className: 'wp-shop-support-strip__actions' },
          React.createElement(Link, { to: '/contact' },
            React.createElement(Button, { className: 'wp-shop-support-strip__btn--primary' }, 'Contact Support')
          ),
          React.createElement(Link, { to: '/faq' },
            React.createElement(Button, { variant: 'outline', className: 'wp-shop-support-strip__btn--outline' }, 'Read FAQ')
          )
        )
      )
    )
  );
}