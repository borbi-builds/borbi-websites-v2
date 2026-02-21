'use client';

export interface TestimonialBlockProps {
  quote: string;
  author: string;
  title: string;
  company?: string;
  rating?: number;
  className?: string;
}

export function TestimonialBlock({
  quote,
  author,
  title,
  company,
  rating = 5,
  className = '',
}: TestimonialBlockProps) {
  return (
    <blockquote
      className={`relative bg-bg-surface border border-white/[0.04] rounded-borbi-xl p-borbi-8 lg:p-borbi-9 ${className}`}
    >
      {/* Decorative quote mark */}
      <span className="absolute top-6 left-8 text-[120px] leading-none font-display text-accent-primary/10 select-none">
        &ldquo;
      </span>

      <p className="relative z-10 text-body-lg text-text-primary italic mb-borbi-7 max-w-3xl">
        {quote}
      </p>

      <div className="flex items-center gap-borbi-4">
        {/* Avatar placeholder */}
        <div className="w-12 h-12 rounded-full bg-bg-elevated border border-white/[0.08] flex items-center justify-center text-text-muted text-small font-semibold">
          {author
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </div>
        <div>
          <div className="text-body font-semibold text-text-primary">{author}</div>
          <div className="text-small text-text-muted">
            {title}
            {company && `, ${company}`}
          </div>
        </div>
        {rating > 0 && (
          <div className="ml-auto text-accent-primary text-lg">
            {'★'.repeat(rating)}
          </div>
        )}
      </div>
    </blockquote>
  );
}
