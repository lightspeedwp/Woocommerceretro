import React from "react";
import { CaretRight as ChevronRight, DotsThree as MoreHorizontal } from '@phosphor-icons/react';
import * as cnModule from "@/utils/cn";

var cn = cnModule.cn;

function Breadcrumb(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('nav', {
    id: id,
    style: style,
    'aria-label': 'breadcrumb',
    className: cn("wp-block-breadcrumb", className)
  }, children);
}

function BreadcrumbList(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('ol', {
    id: id,
    style: style,
    className: cn("wp-block-breadcrumb__list", className)
  }, children);
}

function BreadcrumbItem(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('li', {
    id: id,
    style: style,
    className: cn("wp-block-breadcrumb__item", className)
  }, children);
}

function BreadcrumbLink(props) {
  var asChild = props.asChild;
  var className = props.className;
  var children = props.children;
  var href = props.href;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  if (asChild && React.isValidElement(children)) {
    var child = children;
    return React.cloneElement(child, {
      className: cn("wp-block-breadcrumb__link", className, child.props.className),
      id: id,
      style: style,
      onClick: onClick
    });
  }

  return React.createElement('a', {
    id: id,
    href: href,
    style: style,
    onClick: onClick,
    className: cn("wp-block-breadcrumb__link", className)
  }, children);
}

function BreadcrumbPage(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('span', {
    id: id,
    style: style,
    role: 'link',
    'aria-disabled': 'true',
    'aria-current': 'page',
    className: cn("wp-block-breadcrumb__page", className)
  }, children);
}

function BreadcrumbSeparator(props) {
  var children = props.children;
  var className = props.className;
  var id = props.id;
  var style = props.style;

  return React.createElement('li', {
    id: id,
    style: style,
    role: 'presentation',
    'aria-hidden': 'true',
    className: cn("wp-block-breadcrumb__separator", className)
  }, children === undefined ? React.createElement(ChevronRight, { size: 14 }) : children);
}

function BreadcrumbEllipsis(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;

  return React.createElement('span', {
    id: id,
    style: style,
    role: 'presentation',
    'aria-hidden': 'true',
    className: cn("wp-block-breadcrumb__item", className)
  },
    React.createElement(MoreHorizontal, { className: "wp-block-breadcrumb__ellipsis-icon" }),
    React.createElement('span', { className: "sr-only" }, "More")
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};