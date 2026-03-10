import React from 'react';
import * as ReactRouterModule from 'react-router';
import * as LayoutModule from '../parts/Layout';
import * as ContainerModule from '../common/Container';
import * as HeadingModule from '../common/Heading';

var Layout = LayoutModule.Layout;
var Container = ContainerModule.Container;
var Heading = HeadingModule.Heading;

export function VariableProduct() {
  return React.createElement(Layout, null,
    React.createElement(Container, null,
      React.createElement(Heading, { level: "1" }, "Variable Product")
    )
  );
}

export default VariableProduct;