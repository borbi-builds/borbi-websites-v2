/** Borbi Enterprises Design Tokens — Typography
 * v2 Brand Fonts (FINAL)
 */

export const fontFamilies = {
  display: '"Söhne", "Helvetica Neue", sans-serif',
  body: '"Freight Text Pro", Georgia, serif',
  mono: '"JetBrains Mono", monospace',
} as const;

export const fontSizes = {
  display: 'clamp(3rem, 6vw, 5.5rem)',
  h1: 'clamp(2.25rem, 4vw, 3.5rem)',
  h2: 'clamp(1.75rem, 3vw, 2.5rem)',
  h3: '1.25rem',
  'body-lg': '1.125rem',
  body: '1rem',
  small: '0.875rem',
  code: '0.875rem',
} as const;

export const fontWeights = {
  normal: '400',
  medium: '500',
  semibold: '600',
} as const;

export const lineHeights = {
  display: '1.05',
  heading: '1.2',
  body: '1.6',
  small: '1.4',
} as const;

export const letterSpacing = {
  tight: '-0.03em',
  heading: '-0.02em',
  normal: '0',
  wide: '0.04em',
} as const;

/** Google Fonts import URL */
export const googleFontsUrl =
  'https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap';
