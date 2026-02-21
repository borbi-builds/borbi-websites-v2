'use client';

import { AnimatedCounter } from './AnimatedCounter';

export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  decimals?: number;
}

export interface MetricsDisplayProps {
  metrics: Metric[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function MetricsDisplay({ metrics, columns = 4, className = '' }: MetricsDisplayProps) {
  const gridCols: Record<number, string> = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-borbi-5 ${className}`}>
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="bg-bg-surface border border-white/[0.04] rounded-borbi-lg p-borbi-6 text-center"
        >
          <div className="font-display text-h1 text-text-primary">
            <AnimatedCounter
              end={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              decimals={metric.decimals ?? 0}
            />
          </div>
          <div className="text-small uppercase tracking-wide text-text-muted mt-borbi-2">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
