import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  transpilePackages: ['@borbi/components', '@borbi/design-tokens', '@borbi/data'],
};

export default nextConfig;
