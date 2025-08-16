/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
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
  // 開発サーバー用の設定
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;