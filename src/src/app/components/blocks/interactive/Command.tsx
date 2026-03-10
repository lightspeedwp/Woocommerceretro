"use client";

import * as React from "react";
import * as CmdkModule from "cmdk";
import { MagnifyingGlass as SearchIcon } from '@phosphor-icons/react';
import * as cnModule from "@/utils/cn";
import * as ModalModule from "../layout/Modal";

var CommandPrimitive = CmdkModule.Command;
var cn = cnModule.cn;
var Modal = ModalModule.Modal;
var ModalContent = ModalModule.ModalContent;
var ModalDescription = ModalModule.ModalDescription;
var ModalHeader = ModalModule.ModalHeader;
var ModalTitle = ModalModule.ModalTitle;

/**
 * @typedef {Object} CommandProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 */

function Command(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement(CommandPrimitive, {
    id: id,
    style: style,
    "data-slot": "command",
    className: cn("wp-block-command", className)
  }, children);
}

/**
 * @typedef {Object} CommandDialogProps
 * @property {string} [title]
 * @property {string} [description]
 * @property {React.ReactNode} [children]
 * @property {boolean} [open]
 * @property {Function} [onOpenChange]
 */

function CommandDialog(props) {
  var title = props.title || "Command Palette";
  var description = props.description || "Search for a command to run...";
  var children = props.children;
  var open = props.open;
  var onOpenChange = props.onOpenChange;

  return React.createElement(Modal, { open: open, onOpenChange: onOpenChange },
    React.createElement(ModalContent, { className: "wp-block-command-dialog-content" },
      React.createElement(ModalHeader, { className: "sr-only" },
        React.createElement(ModalTitle, null, title),
        React.createElement(ModalDescription, null, description)
      ),
      React.createElement(Command, null, children)
    )
  );
}

/**
 * @typedef {Object} CommandInputProps
 * @property {string} [className]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 * @property {string} [value]
 * @property {Function} [onValueChange]
 */

function CommandInput(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var value = props.value;
  var onValueChange = props.onValueChange;

  return React.createElement('div', {
    "data-slot": "command-input-wrapper",
    className: "wp-block-command-input-wrapper"
  },
    React.createElement(SearchIcon, { className: "wp-block-command-input-icon" }),
    React.createElement(CommandPrimitive.Input, {
      id: id,
      style: style,
      "data-slot": "command-input",
      className: cn("wp-block-command-input", className),
      value: value,
      onValueChange: onValueChange
    })
  );
}

/**
 * @typedef {Object} CommandListProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 */

function CommandList(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement(CommandPrimitive.List, {
    id: id,
    style: style,
    "data-slot": "command-list",
    className: cn("wp-block-command-list", className)
  }, children);
}

/**
 * @typedef {Object} CommandEmptyProps
 * @property {React.ReactNode} [children]
 * @property {string} [className]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 */

function CommandEmpty(props) {
  var children = props.children;
  var className = props.className;
  var id = props.id;
  var style = props.style;

  return React.createElement(CommandPrimitive.Empty, {
    id: id,
    style: style,
    "data-slot": "command-empty",
    className: cn("wp-block-command-empty", className)
  }, children);
}

/**
 * @typedef {Object} CommandGroupProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 * @property {string} [heading]
 */

function CommandGroup(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var heading = props.heading;

  return React.createElement(CommandPrimitive.Group, {
    id: id,
    style: style,
    heading: heading,
    "data-slot": "command-group",
    className: cn("wp-block-command-group", className)
  }, children);
}

/**
 * @typedef {Object} CommandSeparatorProps
 * @property {string} [className]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 */

function CommandSeparator(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;

  return React.createElement(CommandPrimitive.Separator, {
    id: id,
    style: style,
    "data-slot": "command-separator",
    className: cn("wp-block-command-separator", className)
  });
}

/**
 * @typedef {Object} CommandItemProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 * @property {Function} [onSelect]
 * @property {string} [value]
 * @property {boolean} [disabled]
 */

function CommandItem(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onSelect = props.onSelect;
  var value = props.value;
  var disabled = props.disabled;

  return React.createElement(CommandPrimitive.Item, {
    id: id,
    style: style,
    onSelect: onSelect,
    value: value,
    disabled: disabled,
    "data-slot": "command-item",
    className: cn("wp-block-command-item", className)
  }, children);
}

/**
 * @typedef {Object} CommandShortcutProps
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 * @property {string} [id]
 * @property {React.CSSProperties} [style]
 */

function CommandShortcut(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('span', {
    id: id,
    style: style,
    "data-slot": "command-shortcut",
    className: cn("wp-block-command-shortcut", className)
  }, children);
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};