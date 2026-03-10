"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";
import * as cnModule from "@/utils/cn";

var cn = cnModule.cn;

// Format: { THEME_NAME: CSS_SELECTOR }
var THEMES = { light: "", dark: ".dark" };

var ChartContext = React.createContext(null);

function useChart() {
  var context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a ChartContainer");
  }

  return context;
}

function ChartContainer(props) {
  var id = props.id;
  var className = props.className;
  var children = props.children;
  var config = props.config;

  var uniqueId = React.useId();
  var chartId = "chart-" + (id || uniqueId.replace(/:/g, ""));

  return (
    React.createElement(ChartContext.Provider, { value: { config: config } },
      React.createElement('div', {
        'data-slot': "chart",
        'data-chart': chartId,
        className: cn(
          "wp-block-chart",
          className
        )
      },
        React.createElement(ChartStyle, { id: chartId, config: config }),
        React.createElement(RechartsPrimitive.ResponsiveContainer, null, children)
      )
    )
  );
}

function ChartStyle(props) {
  var id = props.id;
  var config = props.config;

  var colorConfig = Object.entries(config).filter(
    function(entry) {
      var configValue = entry[1];
      return configValue.theme || configValue.color;
    }
  );

  if (!colorConfig.length) {
    return null;
  }

  var themesEntries = Object.entries(THEMES);
  var styles = themesEntries.map(
    function(entry) {
      var theme = entry[0];
      var prefix = entry[1];
      
      var colors = colorConfig.map(function(colorEntry) {
        var key = colorEntry[0];
        var itemConfig = colorEntry[1];
        var color = (itemConfig.theme && itemConfig.theme[theme]) || itemConfig.color;
        return color ? '  --color-' + key + ': ' + color + ';' : null;
      }).filter(Boolean).join('\n');

      return prefix + ' [data-chart=' + id + '] {\n' + colors + '\n}';
    }
  ).join('\n');

  return (
    React.createElement('style', {
      dangerouslySetInnerHTML: {
        __html: styles
      }
    })
  );
}

var ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent(props) {
  var active = props.active;
  var payload = props.payload;
  var className = props.className;
  var indicator = props.indicator || "dot";
  var hideLabel = props.hideLabel || false;
  var hideIndicator = props.hideIndicator || false;
  var label = props.label;
  var labelFormatter = props.labelFormatter;
  var labelClassName = props.labelClassName;
  var formatter = props.formatter;
  var color = props.color;
  var nameKey = props.nameKey;
  var labelKey = props.labelKey;

  var chartContext = useChart();
  var config = chartContext.config;

  var tooltipLabel = React.useMemo(function() {
    if (hideLabel || !payload || payload.length === 0) {
      return null;
    }

    var item = payload[0];
    var key = String(labelKey || item.dataKey || item.name || "value");
    var itemConfig = getPayloadConfigFromPayload(config, item, key);
    var value =
      !labelKey && typeof label === "string"
        ? (config[label] ? config[label].label : label)
        : (itemConfig ? itemConfig.label : null);

    if (labelFormatter) {
      return React.createElement('div', { className: cn("wp-block-chart-tooltip-label", labelClassName) },
        labelFormatter(value, payload)
      );
    }

    if (!value) {
      return null;
    }

    return React.createElement('div', { className: cn("wp-block-chart-tooltip-label", labelClassName) }, value);
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ]);

  if (!active || !payload || payload.length === 0) {
    return null;
  }

  var nestLabel = payload.length === 1 && indicator !== "dot";

  return React.createElement('div', {
    className: cn(
      "wp-block-chart-tooltip",
      className
    )
  },
    !nestLabel ? tooltipLabel : null,
    React.createElement('div', { className: "wp-block-chart-tooltip-grid" },
      payload.map(function(item, index) {
        var key = String(nameKey || item.name || item.dataKey || "value");
        var itemConfig = getPayloadConfigFromPayload(config, item, key);
        var indicatorColor = color || item.payload.fill || item.color;

        var children = [];

        if (formatter && item.value !== undefined && item.name) {
          children.push(formatter(item.value, item.name, item, index, item.payload));
        } else {
          var valueRowChildren = [];
          
          var valueLabelsChildren = [];
          if (nestLabel) {
            valueLabelsChildren.push(tooltipLabel);
          }
          valueLabelsChildren.push(React.createElement('span', { className: "wp-block-chart-tooltip-value-name" },
            (itemConfig ? itemConfig.label : null) || item.name
          ));

          valueRowChildren.push(React.createElement('div', { className: "wp-block-chart-tooltip-value-labels" }, valueLabelsChildren));
          
          if (item.value !== undefined && item.value !== null) {
            valueRowChildren.push(React.createElement('span', { className: "wp-block-chart-tooltip-value-number" },
              item.value.toLocaleString()
            ));
          }

          if (itemConfig && itemConfig.icon) {
            children.push(React.createElement(itemConfig.icon));
          } else if (!hideIndicator) {
            children.push(React.createElement('div', {
              className: cn("wp-block-chart-tooltip-indicator",
                indicator === "dot" && "wp-block-chart-tooltip-indicator--dot",
                indicator === "line" && "wp-block-chart-tooltip-indicator--line",
                indicator === "dashed" && "wp-block-chart-tooltip-indicator--dashed",
                nestLabel && indicator === "dashed" && "wp-block-chart-tooltip-indicator--nested-dashed"
              ),
              style: {
                "--color-bg": indicatorColor,
                "--color-border": indicatorColor,
              }
            }));
          }

          children.push(React.createElement('div', {
            className: cn(
              "wp-block-chart-tooltip-value-row",
              nestLabel ? "wp-block-chart-tooltip-value-row--nested" : "wp-block-chart-tooltip-value-row--inline"
            )
          }, valueRowChildren));
        }

        return React.createElement('div', {
          key: item.dataKey,
          className: cn(
            "wp-block-chart-tooltip-item",
            indicator === "dot" ? "wp-block-chart-tooltip-item--dot" : ""
          )
        }, children);
      })
    )
  );
}

var ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent(props) {
  var className = props.className;
  var hideIcon = props.hideIcon || false;
  var payload = props.payload;
  var verticalAlign = props.verticalAlign || "bottom";
  var nameKey = props.nameKey;

  var chartContext = useChart();
  var config = chartContext.config;

  if (!payload || payload.length === 0) {
    return null;
  }

  return React.createElement('div', {
    className: cn(
      "wp-block-chart-legend",
      verticalAlign === "top" ? "wp-block-chart-legend--vertical" : "wp-block-chart-legend--bottom",
      className
    )
  },
    payload.map(function(item) {
      var key = String(nameKey || item.dataKey || "value");
      var itemConfig = getPayloadConfigFromPayload(config, item, key);

      var itemChildren = [];
      if (itemConfig && itemConfig.icon && !hideIcon) {
        itemChildren.push(React.createElement(itemConfig.icon));
      } else {
        itemChildren.push(React.createElement('div', {
          className: "wp-block-chart-legend-indicator",
          style: {
            backgroundColor: item.color
          }
        }));
      }
      itemChildren.push(itemConfig ? itemConfig.label : null);

      return React.createElement('div', {
        key: item.value,
        className: cn("wp-block-chart-legend-item")
      }, itemChildren);
    })
  );
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(config, payload, key) {
  if (typeof payload !== "object" || payload === null) {
    return undefined;
  }

  var payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined;

  var configLabelKey = key;

  if (
    key in payload &&
    typeof payload[key] === "string"
  ) {
    configLabelKey = payload[key];
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key] === "string"
  ) {
    configLabelKey = payloadPayload[key];
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
