/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/inbase-frontend' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  
  // Enable static HTML export
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  
  compiler: {
    styledComponents: true,
  },
  
  env: {
    SITE_URL: isProd 
      ? 'https://masaki-ib.github.io/inbase-frontend' 
      : 'http://localhost:3000',
    SITE_TITLE: 'INBASE — 開発中',
    SITE_DESCRIPTION: '開発中のサイトです',
  },
  
  // Base path configuration
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  
  // Disable server-side features for static export
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  }
};

module.exports = nextConfig;