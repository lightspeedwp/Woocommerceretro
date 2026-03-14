import React from 'react';
import { Heart, Users, Globe, ShieldCheck } from '@phosphor-icons/react';
import { Container } from '../common/Container';
import { Typography } from '../common/Typography';
import { Heading } from '../common/Heading';

interface ValueItem {
  icon: React.ComponentType<{ size?: number; 'aria-hidden'?: string }>;
  title: string;
  description: string;
}

interface ValuesGridSectionProps {
  heading?: string;
  description?: string;
  values?: ValueItem[];
  className?: string;
}

const defaultValues: ValueItem[] = [
  { icon: Heart, title: "Curated with Love", description: "Every item is hand-picked for quality and style." },
  { icon: Users, title: "Community First", description: "We listen to our customers and grow together." },
  { icon: Globe, title: "Sustainable Choices", description: "Committed to eco-friendly packaging and ethical sourcing." },
  { icon: ShieldCheck, title: "Trust & Security", description: "Your data and payments are always safe with us." },
];

/**
 * ValuesGridSection Pattern
 */
export const ValuesGridSection = ({
  heading = "Why Shop With Us?",
  description = "We take pride in offering more than just great products. Here is what sets us apart.",
  values = defaultValues,
  className = '',
}: ValuesGridSectionProps) => {
  return (
    <section className={`wp-about-values-section ${className}`}>
      <Container>
        <div className="wp-about-values-header">
          <Typography variant="h2" className="wp-about-values-title">{heading}</Typography>
          <Typography variant="body" className="wp-about-values-description">{description}</Typography>
        </div>
        <div className="wp-about-values-grid">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="wp-about-values-card funky-card-glow group">
                <div className="wp-about-values-card__inner funky-spring-hover">
                  <div className="wp-about-values-icon wp-about-values-icon--animated">
                    <Icon size={32} aria-hidden="true" />
                  </div>
                  <Heading level={3} className="wp-about-values-card-title wp-about-values-card-title--spaced funky-text-neon">
                    {item.title}
                  </Heading>
                  <Typography variant="small" className="wp-about-values-card-text">{item.description}</Typography>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}