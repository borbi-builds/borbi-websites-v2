import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Borbi Training & Agents — The Academy',
  description: 'Learn to build AI agents that think. Training for the next era.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ '--accent-primary': '#6C3CE0' } as React.CSSProperties}>
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
