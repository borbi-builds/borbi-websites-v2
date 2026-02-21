'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { easings, durations } from '@borbi/design-tokens';
import { Button } from './Button';

export interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  children?: ReactNode;
  className?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      delay,
      ease: easings.outExpo as unknown as number[],
    },
  }),
};

export function HeroSection({
  headline,
  subheadline,
  description,
  primaryCTA,
  secondaryCTA,
  children,
  className = '',
}: HeroSectionProps) {
  return (
    <section
      className={`relative min-h-screen flex flex-col items-center justify-center text-center px-borbi-5 overflow-hidden ${className}`}
    >
      {/* Background slot */}
      {children}

      {/* Content */}
      <div className="relative z-10 max-w-content">
        {subheadline && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
            className="text-small uppercase tracking-wide text-accent-primary mb-borbi-5"
          >
            {subheadline}
          </motion.p>
        )}

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="font-display text-display text-text-primary mb-borbi-5"
          dangerouslySetInnerHTML={{ __html: headline }}
        />

        {description && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="text-body-lg text-text-secondary max-w-2xl mx-auto mb-borbi-8"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
          className="flex flex-col sm:flex-row items-center justify-center gap-borbi-4"
        >
          {primaryCTA && (
            <Button variant="primary" size="lg" href={primaryCTA.href}>
              {primaryCTA.label}
            </Button>
          )}
          {secondaryCTA && (
            <Button variant="text" href={secondaryCTA.href}>
              {secondaryCTA.label}
            </Button>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-text-muted"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
