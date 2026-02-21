import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Borbi Enterprises — AI-Powered Business at Scale',
  description:
    'AI-powered consulting across marketing, web, automation, research & training. Five specialized arms. One integrated system. Ready to scale your business.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
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
