import { type ReactNode } from 'react';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullBleed?: boolean;
}

export function Section({ children, className = '', id, fullBleed = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-borbi-10 lg:py-borbi-11 ${className}`}
    >
      {fullBleed ? children : (
        <div className="mx-auto max-w-content px-borbi-5 lg:px-borbi-7">
          {children}
        </div>
      )}
    </section>
  );
}
