'use client';

import { useState, useEffect } from 'react';
import { Button } from './Button';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavProps {
  brand?: string;
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  accentColor?: string;
}

export function Nav({
  brand = 'Borbi',
  links,
  ctaLabel = 'Book a Call',
  ctaHref = '#contact',
  accentColor,
}: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 h-[72px] flex items-center transition-all duration-base ${
          scrolled
            ? 'bg-bg-void/95 backdrop-blur-xl border-b border-white/[0.04]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-full-bleed px-borbi-5 lg:px-borbi-7 w-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-xl text-text-primary hover:rotate-3 transition-transform duration-fast"
            style={accentColor ? { color: accentColor } : undefined}
          >
            {brand}
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-borbi-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-small text-text-secondary hover:text-text-primary transition-colors duration-fast relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent-primary transition-all duration-base group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-borbi-4">
            <Button variant="primary" size="sm" href={ctaHref} className="hidden lg:inline-flex">
              {ctaLabel}
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-text-primary p-2"
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-bg-void/98 backdrop-blur-xl flex flex-col items-center justify-center gap-borbi-7 lg:hidden">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-h2 font-display text-text-primary hover:text-accent-primary transition-colors"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" href={ctaHref} className="mt-borbi-5">
            {ctaLabel}
          </Button>
        </div>
      )}

      {/* Scroll progress bar */}
      <ScrollProgress accentColor={accentColor} />
    </>
  );
}

function ScrollProgress({ accentColor }: { accentColor?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-0.5 z-[60] transition-all duration-fast"
      style={{
        width: `${progress}%`,
        backgroundColor: accentColor ?? 'var(--accent-primary)',
      }}
    />
  );
}
