'use client';

import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { scrollReveal, stagger as staggerTokens } from '@borbi/design-tokens';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
}

export function ScrollReveal({ children, className = '', delay = 0, stagger = false }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={
        stagger
          ? {
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: staggerTokens.default,
                  delayChildren: delay,
                },
              },
            }
          : {
              hidden: scrollReveal.hidden,
              visible: {
                ...scrollReveal.visible,
                transition: {
                  ...scrollReveal.visible.transition,
                  delay,
                },
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealItem({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={scrollReveal} className={className}>
      {children}
    </motion.div>
  );
}
