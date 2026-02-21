'use client';

import { type ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-borbi-7 ${
        hover
          ? 'transition-all duration-base ease-out-expo hover:-translate-y-0.5 hover:border-white/[0.08] hover:shadow-[0_0_40px_var(--accent-glow)]'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

export interface StatCardProps {
  value: string;
  label: string;
  accentColor?: string;
  className?: string;
}

export function StatCard({ value, label, accentColor, className = '' }: StatCardProps) {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      {accentColor && (
        <div
          className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
      )}
      <div className="pl-3">
        <div className="font-display text-h2 text-text-primary">{value}</div>
        <div className="text-small uppercase tracking-wide text-text-muted mt-borbi-2">
          {label}
        </div>
      </div>
    </Card>
  );
}

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <Card className={`flex gap-borbi-5 items-start group ${className}`}>
      <div className="text-accent-primary text-3xl shrink-0 transition-colors duration-base">
        {icon}
      </div>
      <div>
        <h3 className="font-body font-semibold text-h3 text-text-primary mb-borbi-2">
          {title}
        </h3>
        <p className="text-body text-text-secondary">{description}</p>
      </div>
    </Card>
  );
}
