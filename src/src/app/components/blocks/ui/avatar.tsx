"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

var AP = AvatarPrimitive && (AvatarPrimitive.default || AvatarPrimitive) || {};
var AvatarRoot = AP.Root || "div";
var AvatarImagePrimitive = AP.Image || "img";
var AvatarFallbackPrimitive = AP.Fallback || "span";

/**
 * Avatar Component
 * Displays a user profile image or initials fallback.
 *
 * Based on Radix UI Avatar.
 * No TypeScript syntax for parser compatibility.
 */

function Avatar(props) {
  var className = props.className || '';
  var children = props.children;
  var style = props.style;
  var id = props.id;

  return React.createElement(AvatarRoot, {
    id: id,
    style: style,
    'data-slot': 'avatar',
    className: ['wp-block-avatar', className].filter(Boolean).join(' ')
  }, children);
}

function AvatarImage(props) {
  var className = props.className || '';
  var src = props.src;
  var alt = props.alt;
  var style = props.style;
  var id = props.id;

  return React.createElement(AvatarImagePrimitive, {
    id: id,
    style: style,
    src: src,
    alt: alt,
    'data-slot': 'avatar-image',
    className: ['wp-block-avatar__image', className].filter(Boolean).join(' ')
  });
}

function AvatarFallback(props) {
  var className = props.className || '';
  var children = props.children;
  var style = props.style;
  var id = props.id;
  var delayMs = props.delayMs;

  return React.createElement(AvatarFallbackPrimitive, {
    id: id,
    style: style,
    delayMs: delayMs,
    'data-slot': 'avatar-fallback',
    className: ['wp-block-avatar__fallback', className].filter(Boolean).join(' ')
  }, children);
}

export { Avatar, AvatarImage, AvatarFallback };
