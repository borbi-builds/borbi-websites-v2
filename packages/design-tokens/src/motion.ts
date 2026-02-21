/** Borbi Enterprises Design Tokens — Motion */

export const easings = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOutQuart: [0.76, 0, 0.24, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
} as const;

export const easingCSS = {
  outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  inOutQuart: 'cubic-bezier(0.76, 0, 0.24, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

export const durations = {
  fast: 0.15,
  base: 0.3,
  slow: 0.5,
  hero: 1.0,
} as const;

export const durationsCSS = {
  fast: '150ms',
  base: '300ms',
  slow: '500ms',
  hero: '1000ms',
} as const;

/** Framer Motion transition presets */
export const transitions = {
  default: {
    duration: durations.base,
    ease: easings.outExpo as unknown as number[],
  },
  slow: {
    duration: durations.slow,
    ease: easings.outExpo as unknown as number[],
  },
  spring: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 25,
  },
} as const;

/** Stagger children config */
export const stagger = {
  default: 0.06,
  fast: 0.04,
  slow: 0.08,
} as const;

/** Scroll reveal animation variants */
export const scrollReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.outExpo as unknown as number[],
    },
  },
} as const;
