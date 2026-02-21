/** Borbi Enterprises Design Tokens — Colors
 * v2 Brand Identity (FINAL)
 */

// Primary colors
export const primary = {
  navy: '#0D1B2A',
  purple: '#2D1B69',
} as const;

// Secondary colors
export const secondary = {
  charcoal: '#1C1C1E',
  ivory: '#FAF8F5',
} as const;

// Extended palette
export const extended = {
  lightCharcoal: '#2C2C2E',
  midNavy: '#1B2D45',
  brightPurple: '#6C3CE0',
  warmGray: '#E8E4DF',
  softIvory: '#F5F2ED',
} as const;

export const backgrounds = {
  primary: primary.navy,
  secondary: primary.purple,
  tertiary: secondary.charcoal,
  surface: extended.lightCharcoal,
  elevated: extended.midNavy,
  light: secondary.ivory,
  subtle: extended.softIvory,
} as const;

export const accents = {
  primary: primary.purple,
  secondary: primary.navy,
  brightPurple: extended.brightPurple,
  glow: 'rgba(45, 27, 105, 0.15)', // Purple with transparency
  frost: 'rgba(250, 248, 245, 0.08)', // Ivory with transparency
} as const;

export const text = {
  primary: secondary.ivory,
  secondary: extended.warmGray,
  muted: extended.lightCharcoal,
  onDark: secondary.ivory,
  onLight: primary.navy,
} as const;

/** Per-arm accent color overrides */
export const armAccents = {
  marketing: extended.brightPurple,
  'web-services': extended.brightPurple,
  automation: extended.brightPurple,
  'equity-research': extended.brightPurple,
  training: extended.brightPurple,
} as const;

export type ArmKey = keyof typeof armAccents;

/** Generate CSS custom properties for an arm */
export function getArmCSSVars(arm?: ArmKey): Record<string, string> {
  const base: Record<string, string> = {
    '--bg-primary': backgrounds.primary,
    '--bg-secondary': backgrounds.secondary,
    '--bg-tertiary': backgrounds.tertiary,
    '--bg-surface': backgrounds.surface,
    '--bg-elevated': backgrounds.elevated,
    '--bg-light': backgrounds.light,
    '--bg-subtle': backgrounds.subtle,
    '--accent-primary': arm ? armAccents[arm] : accents.primary,
    '--accent-secondary': accents.secondary,
    '--accent-brightPurple': accents.brightPurple,
    '--accent-glow': accents.glow,
    '--accent-frost': accents.frost,
    '--text-primary': text.primary,
    '--text-secondary': text.secondary,
    '--text-muted': text.muted,
    '--text-onDark': text.onDark,
    '--text-onLight': text.onLight,
  };
  return base;
}
