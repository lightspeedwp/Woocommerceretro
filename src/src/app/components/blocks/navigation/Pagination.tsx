import React from "react";
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight, DotsThree as MoreHorizontal } from '@phosphor-icons/react';
import * as cnModule from "@/utils/cn";
import * as ButtonsModule from "../design/Buttons";

var cn = cnModule.cn;
var Button = ButtonsModule.Button;

function Pagination(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('nav', {
    id: id,
    style: style,
    role: 'navigation',
    'aria-label': 'pagination',
    className: cn("wp-block-pagination", className)
  }, children);
}

function PaginationContent(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('ul', {
    id: id,
    style: style,
    className: cn("wp-block-pagination__list", className)
  }, children);
}

function PaginationItem(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var children = props.children;

  return React.createElement('li', {
    id: id,
    style: style,
    className: cn("wp-block-pagination__item", className)
  }, children);
}

function PaginationLink(props) {
  var className = props.className;
  var isActive = props.isActive;
  var id = props.id;
  var style = props.style;
  var children = props.children;
  var href = props.href;
  var onClick = props.onClick;

  return React.createElement('a', {
    id: id,
    href: href,
    style: style,
    onClick: onClick,
    'aria-current': isActive ? "page" : undefined,
    className: cn(
      "wp-block-pagination__link",
      isActive && "wp-block-pagination__link--active",
      className
    )
  }, children);
}

function PaginationPrevious(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var href = props.href;
  var onClick = props.onClick;

  return React.createElement(PaginationLink, {
    id: id,
    style: style,
    href: href,
    onClick: onClick,
    'aria-label': 'Go to previous page',
    size: 'default',
    className: cn("wp-block-pagination__link--prev", className)
  },
    React.createElement(ChevronLeft, { size: 16 }),
    React.createElement('span', { className: "wp-block-pagination__label" }, "Previous")
  );
}

function PaginationNext(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var href = props.href;
  var onClick = props.onClick;

  return React.createElement(PaginationLink, {
    id: id,
    style: style,
    href: href,
    onClick: onClick,
    'aria-label': 'Go to next page',
    size: 'default',
    className: cn("wp-block-pagination__link--next", className)
  },
    React.createElement('span', { className: "wp-block-pagination__label" }, "Next"),
    React.createElement(ChevronRight, { size: 16 })
  );
}

function PaginationEllipsis(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;

  return React.createElement('span', {
    id: id,
    style: style,
    'aria-hidden': 'true',
    className: cn("wp-block-pagination__ellipsis", className)
  },
    React.createElement(MoreHorizontal, { size: 16 }),
    React.createElement('span', { className: "sr-only" }, "More pages")
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};