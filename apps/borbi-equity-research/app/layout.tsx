import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Borbi Equity Research — The Terminal',
  description: 'Institutional-grade research. Startup-friendly speed.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ '--accent-primary': '#10B981' } as React.CSSProperties}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-void text-text-primary font-body antialiased">{children}</body>
    </html>
  );
}
