/** Borbi Tailwind CSS Preset — shared across all apps */
import { backgrounds, accents, text, armAccents } from './colors';
import { fontFamilies } from './typography';
import { spacing, radii } from './spacing';
import { easingCSS, durationsCSS } from './motion';

const preset = {
  theme: {
    extend: {
      colors: {
        bg: {
          void: backgrounds.void,
          surface: backgrounds.surface,
          elevated: backgrounds.elevated,
          subtle: backgrounds.subtle,
        },
        accent: {
          primary: 'var(--accent-primary, ' + accents.primary + ')',
          secondary: accents.secondary,
          glow: accents.glow,
          frost: accents.frost,
        },
        text: {
          primary: text.primary,
          secondary: text.secondary,
          muted: text.muted,
        },
        arm: armAccents,
      },
      fontFamily: {
        display: [fontFamilies.display],
        body: [fontFamilies.body],
        mono: [fontFamilies.mono],
      },
      fontSize: {
        display: ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h1: ['clamp(2.25rem, 4vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        h2: ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h3: ['1.25rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      spacing: {
        'borbi-1': spacing[1],
        'borbi-2': spacing[2],
        'borbi-3': spacing[3],
        'borbi-4': spacing[4],
        'borbi-5': spacing[5],
        'borbi-6': spacing[6],
        'borbi-7': spacing[7],
        'borbi-8': spacing[8],
        'borbi-9': spacing[9],
        'borbi-10': spacing[10],
        'borbi-11': spacing[11],
      },
      borderRadius: {
        'borbi-sm': radii.sm,
        'borbi-md': radii.md,
        'borbi-lg': radii.lg,
        'borbi-xl': radii.xl,
      },
      transitionTimingFunction: {
        'out-expo': easingCSS.outExpo,
        'in-out-quart': easingCSS.inOutQuart,
        spring: easingCSS.spring,
      },
      transitionDuration: {
        fast: durationsCSS.fast,
        base: durationsCSS.base,
        slow: durationsCSS.slow,
        hero: durationsCSS.hero,
      },
      maxWidth: {
        content: '1200px',
        'full-bleed': '1400px',
      },
    },
  },
};

export default preset;
