"use client";

import React, { useContext, useId, useMemo, createContext } from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "../../../utils/cn";

const THEMES: Record<string, string> = { light: "", dark: ".dark" };

interface ChartConfig {
  [key: string]: {
    label?: string;
    icon?: React.ComponentType;
    theme?: Record<string, string>;
    color?: string;
  };
}

const ChartContext = createContext<{ config: ChartConfig } | null>(null);

const useChart = () => {
  const context = useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within a ChartContainer");
  return context;
};

const ChartContainer = ({ id, className, children, config }: {
  id?: string; className?: string; children: React.ReactNode; config: ChartConfig;
}) => {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div data-slot="chart" data-chart={chartId} className={cn("wp-block-chart", className)}>
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, v]) => v.theme || v.color);
  if (!colorConfig.length) return null;

  const styles = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const colors = colorConfig
        .map(([key, itemConfig]) => {
          const color = itemConfig.theme?.[theme] || itemConfig.color;
          return color ? `  --color-${key}: ${color};` : null;
        })
        .filter(Boolean)
        .join('\n');
      return `${prefix} [data-chart=${id}] {\n${colors}\n}`;
    })
    .join('\n');

  return <style dangerouslySetInnerHTML={{ __html: styles }} />;
}

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartTooltipContent = ({
  active, payload, className, indicator = 'dot', hideLabel = false, hideIndicator = false,
  label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey,
}: any) => {
  const { config } = useChart();

  const tooltipLabel = useMemo(() => {
    if (hideLabel || !payload?.length) return null;
    const item = payload[0];
    const key = String(labelKey || item.dataKey || item.name || "value");
    const itemConfig = getPayloadConfigFromPayload(config, item, key);
    const value = !labelKey && typeof label === "string"
      ? (config[label]?.label || label)
      : itemConfig?.label;

    if (labelFormatter) return <div className={cn("wp-block-chart-tooltip-label", labelClassName)}>{labelFormatter(value, payload)}</div>;
    if (!value) return null;
    return <div className={cn("wp-block-chart-tooltip-label", labelClassName)}>{value}</div>;
  }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

  if (!active || !payload?.length) return null;

  const nestLabel = payload.length === 1 && indicator !== "dot";

  return (
    <div className={cn("wp-block-chart-tooltip", className)}>
      {!nestLabel ? tooltipLabel : null}
      <div className="wp-block-chart-tooltip-grid">
        {payload.map((item: any, index: number) => {
          const key = String(nameKey || item.name || item.dataKey || "value");
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          const indicatorColor = color || item.payload?.fill || item.color;

          if (formatter && item.value !== undefined && item.name) {
            return (
              <div key={item.dataKey} className={cn("wp-block-chart-tooltip-item", indicator === "dot" ? "wp-block-chart-tooltip-item--dot" : "")}>
                {formatter(item.value, item.name, item, index, item.payload)}
              </div>
            );
          }

          return (
            <div key={item.dataKey} className={cn("wp-block-chart-tooltip-item", indicator === "dot" ? "wp-block-chart-tooltip-item--dot" : "")}>
              {itemConfig?.icon ? (
                <itemConfig.icon />
              ) : !hideIndicator ? (
                <div
                  className={cn(
                    "wp-block-chart-tooltip-indicator",
                    indicator === "dot" && "wp-block-chart-tooltip-indicator--dot",
                    indicator === "line" && "wp-block-chart-tooltip-indicator--line",
                    indicator === "dashed" && "wp-block-chart-tooltip-indicator--dashed",
                    nestLabel && indicator === "dashed" && "wp-block-chart-tooltip-indicator--nested-dashed",
                  )}
                  style={{ "--color-bg": indicatorColor, "--color-border": indicatorColor } as React.CSSProperties}
                />
              ) : null}
              <div className={cn("wp-block-chart-tooltip-value-row", nestLabel ? "wp-block-chart-tooltip-value-row--nested" : "wp-block-chart-tooltip-value-row--inline")}>
                <div className="wp-block-chart-tooltip-value-labels">
                  {nestLabel && tooltipLabel}
                  <span className="wp-block-chart-tooltip-value-name">{itemConfig?.label || item.name}</span>
                </div>
                {item.value != null && (
                  <span className="wp-block-chart-tooltip-value-number">{item.value.toLocaleString()}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend;

const ChartLegendContent = ({ className, hideIcon = false, payload, verticalAlign = 'bottom', nameKey }: any) => {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <div className={cn("wp-block-chart-legend", verticalAlign === "top" ? "wp-block-chart-legend--vertical" : "wp-block-chart-legend--bottom", className)}>
      {payload.map((item: any) => {
        const key = String(nameKey || item.dataKey || "value");
        const itemConfig = getPayloadConfigFromPayload(config, item, key);

        return (
          <div key={item.value} className="wp-block-chart-legend-item">
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div className="wp-block-chart-legend-indicator" style={{ backgroundColor: item.color }} />
            )}
            {itemConfig?.label}
          </div>
        );
      })}
    </div>
  );
}

const getPayloadConfigFromPayload = (config: ChartConfig, payload: any, key: string) => {
  if (typeof payload !== "object" || payload === null) return undefined;

  const payloadPayload = payload?.payload && typeof payload.payload === "object" ? payload.payload : undefined;
  let configLabelKey = key;

  if (key in payload && typeof payload[key] === "string") {
    configLabelKey = payload[key];
  } else if (payloadPayload && key in payloadPayload && typeof payloadPayload[key] === "string") {
    configLabelKey = payloadPayload[key];
  }

  return config[configLabelKey] || config[key];
}

export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle };