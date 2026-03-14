import React from 'react';
import { Check, X } from '@phosphor-icons/react';
import { Typography } from '../common/Typography';

interface ComparisonPlan {
  id: string;
  name: string;
  popular?: boolean;
}

interface ComparisonFeature {
  name: string;
  description?: string;
  values: (boolean | string)[];
}

interface FeaturesComparisonTableProps {
  plans: ComparisonPlan[];
  features: ComparisonFeature[];
  heading?: string;
  className?: string;
}

/**
 * FeaturesComparisonTable Pattern Component
 */
export const FeaturesComparisonTable = ({
  plans,
  features,
  heading = 'Compare Plans',
  className = '',
}: FeaturesComparisonTableProps) => {
  return (
    <div className={`wp-comparison-table ${className}`}>
      {heading && (
        <Typography variant="h2" align="center" className="wp-comparison-table__heading">
          {heading}
        </Typography>
      )}
      <div className="wp-comparison-table__scroll">
        <table className="wp-comparison-table__table">
          <thead>
            <tr className="wp-comparison-table__header-row">
              <th className="wp-comparison-table__header-cell wp-comparison-table__header-cell--features">
                <strong>Features</strong>
              </th>
              {plans.map((plan) => (
                <th key={plan.id} className="wp-comparison-table__header-cell wp-comparison-table__header-cell--plan">
                  <div className={plan.popular ? 'wp-comparison-table__plan-name--popular' : 'wp-comparison-table__plan-name'}>
                    <strong>{plan.name}</strong>
                    {plan.popular && (
                      <div className="wp-comparison-table__plan-badge">
                        <small><strong>Most Popular</strong></small>
                      </div>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="wp-comparison-table__row">
                <td className="wp-comparison-table__cell wp-comparison-table__cell--feature">
                  <div className="wp-comparison-table__feature-name"><strong>{feature.name}</strong></div>
                  {feature.description && (
                    <div className="wp-comparison-table__feature-desc"><small>{feature.description}</small></div>
                  )}
                </td>
                {feature.values.map((value, i) => (
                  <td key={i} className="wp-comparison-table__cell wp-comparison-table__cell--value">
                    {typeof value === 'boolean' ? (
                      value
                        ? <Check size={24} className="wp-comparison-table__icon--check" />
                        : <X size={24} className="wp-comparison-table__icon--cross" />
                    ) : (
                      <span className="wp-comparison-table__text-value">{value}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}