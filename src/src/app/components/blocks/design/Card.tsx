import React from "react";
import * as cnModule from "../../../utils/cn";
var cn = cnModule.cn;

/**
 * Card Components (Design Block)
 * 
 * Optimized for Figma Make parser:
 * 1. No spread operators
 * 2. No rest parameters
 * 3. Manual prop assignment
 * 4. No TypeScript syntax (no generics, no interfaces, no type annotations)
 */
export function Card(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var onClick = props.onClick;
  var style = props.style;

  return React.createElement('div', {
    'data-slot': 'card',
    className: cn([
      "wp-block-card",
      className
    ]),
    id: id,
    onClick: onClick,
    style: style
  }, children);
}

export function CardHeader(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    'data-slot': 'card-header',
    className: cn([
      "wp-block-card__header",
      className
    ]),
    id: id,
    style: style
  }, children);
}

export function CardTitle(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('h4', {
    'data-slot': 'card-title',
    className: cn(["wp-block-card__title", className]),
    id: id,
    style: style
  }, children);
}

export function CardDescription(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('p', {
    'data-slot': 'card-description',
    className: cn(["wp-block-card__description", className]),
    id: id,
    style: style
  }, children);
}

export function CardAction(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    'data-slot': 'card-action',
    className: cn([
      "wp-block-card__action",
      className
    ]),
    id: id,
    style: style
  }, children);
}

export function CardContent(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    'data-slot': 'card-content',
    className: cn(["wp-block-card__content", className]),
    id: id,
    style: style
  }, children);
}

export function CardFooter(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    'data-slot': 'card-footer',
    className: cn(["wp-block-card__footer", className]),
    id: id,
    style: style
  }, children);
}