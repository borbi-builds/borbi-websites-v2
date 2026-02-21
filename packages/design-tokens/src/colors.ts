/** Borbi Enterprises Design Tokens — Colors */

export const backgrounds = {
  void: '#08090E',
  surface: '#0F1117',
  elevated: '#161821',
  subtle: '#1C1F2B',
} as const;

export const accents = {
  primary: '#FF6B2C',
  secondary: '#5CEBDF',
  glow: 'rgba(255,107,44,0.15)',
  frost: 'rgba(92,235,223,0.08)',
} as const;

export const text = {
  primary: '#F0F0F3',
  secondary: '#9498A8',
  muted: '#5A5E6E',
} as const;

/** Per-arm accent color overrides */
export const armAccents = {
  marketing: '#FF6B2C',
  'web-services': '#A855F7',
  automation: '#22D3EE',
  'equity-research': '#10B981',
  training: '#F59E0B',
} as const;

export type ArmKey = keyof typeof armAccents;

/** Generate CSS custom properties for an arm */
export function getArmCSSVars(arm?: ArmKey): Record<string, string> {
  const base: Record<string, string> = {
    '--bg-void': backgrounds.void,
    '--bg-surface': backgrounds.surface,
    '--bg-elevated': backgrounds.elevated,
    '--bg-subtle': backgrounds.subtle,
    '--accent-primary': arm ? armAccents[arm] : accents.primary,
    '--accent-secondary': accents.secondary,
    '--accent-glow': accents.glow,
    '--accent-frost': accents.frost,
    '--text-primary': text.primary,
    '--text-secondary': text.secondary,
    '--text-muted': text.muted,
  };
  return base;
}
