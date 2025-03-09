// Import site config from the JS file (not from TypeScript)
import siteConfigModule from './site-config.js';
const { siteConfig } = siteConfigModule;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports for GitHub Pages
  distDir: 'out',
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? siteConfig.basePath : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? siteConfig.basePath : '',
};

export default nextConfig;
