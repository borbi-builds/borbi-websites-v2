'use client';

import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'text';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-semibold uppercase tracking-wide transition-all duration-fast ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/50';

  const variants: Record<string, string> = {
    primary:
      'bg-accent-primary text-bg-void rounded-full hover:scale-[1.03] hover:shadow-[0_0_30px_var(--accent-glow)] active:scale-[0.98]',
    secondary:
      'bg-transparent border border-bg-subtle text-text-primary rounded-full hover:border-accent-primary hover:text-accent-primary hover:shadow-[0_0_20px_var(--accent-glow)]',
    ghost:
      'bg-bg-surface/50 text-text-primary rounded-borbi-md hover:bg-bg-elevated',
    text: 'bg-transparent text-text-secondary hover:text-accent-primary group',
  };

  const sizes: Record<string, string> = {
    sm: 'px-5 py-2 text-xs',
    md: 'px-8 py-4 text-sm',
    lg: 'px-10 py-5 text-sm',
  };

  const classes = `${base} ${variants[variant]} ${variant !== 'text' ? sizes[size] : 'text-sm'} ${className}`;

  const content = (
    <>
      {children}
      {variant === 'text' && (
        <span className="ml-1 inline-block transition-transform duration-fast group-hover:translate-x-1">
          →
        </span>
      )}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
