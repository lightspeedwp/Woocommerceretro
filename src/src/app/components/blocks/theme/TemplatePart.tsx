/**
 * TemplatePart.tsx - Theme Block
 * 
 * Represents a reusable structural part of a theme (header, footer, sidebar).
 * Optimized for Figma Make parser:
 * 1. No JSX (Uses React.createElement)
 * 2. No spread operators
 * 3. No template literals
 * 4. Named functions
 * 5. ASCII only
 */

import React from 'react';
import * as UtilsModule from '../ui/utils';

var cn = UtilsModule.cn;

export function TemplatePart(props) {
  var name = props.name;
  var Comp = props.as || 'div';
  var area = props.area;
  var children = props.children;
  var className = props.className;
  var style = props.style;

  var areaClass = area ? "wp-block-template-part--area-" + area : null;
  var nameClass = "wp-block-template-part--" + name;

  var fullClassName = cn(
    'wp-block-template-part',
    nameClass,
    areaClass,
    className
  );

  return React.createElement(Comp, {
    className: fullClassName,
    style: style,
    "data-template-part": name,
    "data-area": area
  }, children);
}

TemplatePart.displayName = 'TemplatePart';

export function HeaderTemplate(props) {
  var name = props.name || 'header-main';
  var children = props.children;
  var className = props.className;
  var style = props.style;

  return React.createElement(TemplatePart, {
    name: name,
    as: "header",
    area: "header",
    children: children,
    className: className,
    style: style
  });
}

HeaderTemplate.displayName = 'HeaderTemplate';

export function FooterTemplate(props) {
  var name = props.name || 'footer-primary';
  var children = props.children;
  var className = props.className;
  var style = props.style;

  return React.createElement(TemplatePart, {
    name: name,
    as: "footer",
    area: "footer",
    children: children,
    className: className,
    style: style
  });
}

FooterTemplate.displayName = 'FooterTemplate';

export function SidebarTemplate(props) {
  var name = props.name || 'sidebar-primary';
  var children = props.children;
  var className = props.className;
  var style = props.style;

  return React.createElement(TemplatePart, {
    name: name,
    as: "aside",
    area: "sidebar",
    children: children,
    className: className,
    style: style
  });
}

SidebarTemplate.displayName = 'SidebarTemplate';