/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
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
  // 本番環境でのみベースパスを設定
  ...(isProd ? {
    basePath: '/inbase-frontend',
    assetPrefix: '/inbase-frontend/',
  } : {}),
  // 静的エクスポート用の設定
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
    // 静的エクスポートの互換性を向上
    appDir: true,
  },
  // 静的エクスポート時に必要な設定
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
};

module.exports = nextConfig;