"use client";

import * as React from "react";
import { CaretLeft as ChevronLeft, CaretRight as ChevronRight } from '@phosphor-icons/react';

import * as DayPickerModule from "react-day-picker";
import * as cnModule from "@/utils/cn";

var DayPicker = DayPickerModule.DayPicker;
var cn = cnModule.cn;

/**
 * Calendar Component
 * Uses react-day-picker.
 * 
 * Refactored to use BEM classes defined in /src/styles/blocks/widgets/calendar.css
 * 
 * @typedef {Object} CalendarProps
 * @property {string} [className]
 * @property {Object} [classNames]
 * @property {boolean} [showOutsideDays]
 * @property {string} [mode]
 * @property {any} [selected]
 * @property {Function} [onSelect]
 * @property {any} [disabled]
 * @property {boolean} [initialFocus]
 * @property {Date} [fromDate]
 * @property {Date} [toDate]
 * @property {Date} [fromMonth]
 * @property {Date} [toMonth]
 * @property {number} [fromYear]
 * @property {number} [toYear]
 * @property {Object} [components]
 */

function Calendar(props) {
  var className = props.className;
  var classNames = props.classNames;
  var showOutsideDays = props.showOutsideDays === undefined ? true : props.showOutsideDays;
  var mode = props.mode;
  var selected = props.selected;
  var onSelect = props.onSelect;
  var disabled = props.disabled;
  var initialFocus = props.initialFocus;
  var fromDate = props.fromDate;
  var toDate = props.toDate;
  var fromMonth = props.fromMonth;
  var toMonth = props.toMonth;
  var fromYear = props.fromYear;
  var toYear = props.toYear;
  var components = props.components;

  var mergedClassNames = {
    months: "wp-block-calendar__months",
    month: "wp-block-calendar__month",
    caption: "wp-block-calendar__caption",
    caption_label: "wp-block-calendar__caption-label",
    nav: "wp-block-calendar__nav",
    nav_button: "wp-block-calendar__nav-button",
    nav_button_previous: "wp-block-calendar__nav-button--previous",
    nav_button_next: "wp-block-calendar__nav-button--next",
    table: "wp-block-calendar__table",
    head_row: "wp-block-calendar__head-row",
    head_cell: "wp-block-calendar__head-cell",
    row: "wp-block-calendar__row",
    cell: "wp-block-calendar__cell",
    day: "wp-block-calendar__day",
    day_range_start: "day-range-start",
    day_range_end: "day-range-end",
    day_selected: "day-selected",
    day_today: "day-today",
    day_outside: "day-outside",
    day_disabled: "day-disabled",
    day_range_middle: "day-range-middle",
    day_hidden: "day-hidden",
  };

  if (classNames) {
    var keys = Object.keys(classNames);
    for (var i = 0; i < keys.length; i++) {
      mergedClassNames[keys[i]] = classNames[keys[i]];
    }
  }

  var mergedComponents = {
    IconLeft: function(iconProps) {
      return React.createElement(ChevronLeft, {
        className: cn("wp-block-calendar__nav-icon", iconProps.className)
      });
    },
    IconRight: function(iconProps) {
      return React.createElement(ChevronRight, {
        className: cn("wp-block-calendar__nav-icon", iconProps.className)
      });
    },
  };

  if (components) {
    var componentKeys = Object.keys(components);
    for (var j = 0; j < componentKeys.length; j++) {
      mergedComponents[componentKeys[j]] = components[componentKeys[j]];
    }
  }

  return React.createElement(DayPicker, {
    showOutsideDays: showOutsideDays,
    className: cn("wp-block-calendar__picker", className),
    classNames: mergedClassNames,
    components: mergedComponents,
    mode: mode,
    selected: selected,
    onSelect: onSelect,
    disabled: disabled,
    initialFocus: initialFocus,
    fromDate: fromDate,
    toDate: toDate,
    fromMonth: fromMonth,
    toMonth: toMonth,
    fromYear: fromYear,
    toYear: toYear
  });
}

export { Calendar };