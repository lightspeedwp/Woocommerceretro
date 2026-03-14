import React from 'react';
import { Heading } from '../common/Heading';
import { Typography } from '../common/Typography';
import { Container } from '../common/Container';

interface HowItWorksStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon?: React.ComponentType<{ size?: number; 'aria-hidden'?: string }>;
}

interface HowItWorksSectionProps {
  heading?: string;
  description?: string;
  steps: HowItWorksStep[];
  columns?: 2 | 3 | 4;
  showConnectors?: boolean;
  showNumbers?: boolean;
  numberColor?: string;
  className?: string;
}

/**
 * HowItWorksSection Pattern Component
 */
export const HowItWorksSection = ({
  heading = 'How It Works',
  description,
  steps,
  columns = 3,
  showConnectors = true,
  showNumbers = true,
  className = '',
}: HowItWorksSectionProps) => {
  return (
    <section className={`wp-how-it-works ${className}`}>
      <Container>
        <div className="wp-how-it-works__content">
          {(heading || description) && (
            <div className="wp-how-it-works__header">
              {heading && <Heading level={2} className="wp-how-it-works__heading">{heading}</Heading>}
              {description && <Typography className="wp-how-it-works__description">{description}</Typography>}
            </div>
          )}
          <div className={`wp-how-it-works__grid wp-how-it-works__grid--cols-${columns}`}>
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isNotLast = index < steps.length - 1;

              return (
                <div key={item.id} className="wp-how-it-works__step">
                  <div className="funky-card-glow wp-how-it-works__card-glow">
                    <div className="wp-hero-section--relative wp-how-it-works__card funky-spring-hover">
                      <div className="wp-how-it-works__badge-wrapper">
                        {showNumbers ? (
                          <div className="wp-how-it-works__badge">{item.step}</div>
                        ) : Icon ? (
                          <div className="wp-how-it-works__badge wp-how-it-works__badge--animated">
                            <Icon size={40} aria-hidden="true" />
                          </div>
                        ) : null}
                      </div>
                      <Heading level={3} className="wp-how-it-works__title funky-text-neon">{item.title}</Heading>
                      <Typography className="wp-how-it-works__description">{item.description}</Typography>
                    </div>
                  </div>
                  {showConnectors && isNotLast && (
                    <div className="wp-how-it-works__connector" aria-hidden="true" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}