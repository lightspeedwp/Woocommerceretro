import React from "react";
import { Check, CaretRight as ChevronRight, Circle } from '@phosphor-icons/react';
import * as cnModule from "@/utils/cn";

var cn = cnModule.cn;

function Menubar(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-menubar", className)
  }, children);
}

function MenubarMenu(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-menubar__menu", className)
  }, children);
}

function MenubarTrigger(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  return React.createElement('div', {
    id: id,
    style: style,
    onClick: onClick,
    className: cn("wp-block-menubar__trigger", className)
  }, children);
}

function MenubarContent(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-menubar__content", className)
  }, children);
}

function MenubarItem(props) {
  var className = props.className;
  var inset = props.inset;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  return React.createElement('div', {
    id: id,
    style: style,
    onClick: onClick,
    className: cn("wp-block-menubar__item", inset && "wp-block-menubar__item--inset", className)
  }, children);
}

function MenubarSeparator(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-menubar__separator", className)
  });
}

function MenubarLabel(props) {
  var className = props.className;
  var inset = props.inset;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-menubar__label", inset && "wp-block-menubar__label--inset", className)
  }, children);
}

function MenubarCheckboxItem(props) {
  var className = props.className;
  var children = props.children;
  var checked = props.checked;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  return React.createElement('div', {
    id: id,
    style: style,
    onClick: onClick,
    className: cn("wp-block-menubar__checkbox-item", className)
  },
    React.createElement('span', { className: "wp-block-menubar__item-indicator" },
      checked ? React.createElement(Check, { size: 16 }) : null
    ),
    children
  );
}

function MenubarRadioItem(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  return React.createElement('div', {
    id: id,
    style: style,
    onClick: onClick,
    className: cn("wp-block-menubar__radio-item", className)
  },
    React.createElement('span', { className: "wp-block-menubar__item-indicator" },
      React.createElement(Circle, { size: 8, fill: "currentColor" })
    ),
    children
  );
}

function MenubarRadioGroup(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-menubar__radio-group", className)
  }, children);
}

function MenubarPortal(props) {
  return React.createElement(React.Fragment, null, props.children);
}

function MenubarGroup(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-menubar__group", className)
  }, children);
}

function MenubarShortcut(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('span', {
    id: id,
    style: style,
    className: cn("wp-block-menubar__shortcut", className)
  }, children);
}

function MenubarSub(props) {
  return React.createElement(React.Fragment, null, props.children);
}

function MenubarSubTrigger(props) {
  var className = props.className;
  var inset = props.inset;
  var children = props.children;
  var id = props.id;
  var style = props.style;
  var onClick = props.onClick;

  return React.createElement('div', {
    id: id,
    style: style,
    onClick: onClick,
    className: cn("wp-block-menubar__sub-trigger", inset && "wp-block-menubar__sub-trigger--inset", className)
  },
    children,
    React.createElement(ChevronRight, { size: 16, className: "wp-block-menubar__chevron" })
  );
}

function MenubarSubContent(props) {
  var className = props.className;
  var children = props.children;
  var id = props.id;
  var style = props.style;

  return React.createElement('div', {
    id: id,
    style: style,
    className: cn("wp-block-menubar__sub-content", className)
  }, children);
}

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarGroup,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent
};