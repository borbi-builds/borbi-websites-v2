import { type ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}

export function Container({ children, className = '', wide = false }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-borbi-5 lg:px-borbi-7 ${
        wide ? 'max-w-full-bleed' : 'max-w-content'
      } ${className}`}
    >
      {children}
    </div>
  );
}
