/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    // 静的エクスポートでは画像最適化は無効化
    unoptimized: true,
    // 外部画像ソースを指定
    domains: ['images.unsplash.com'],
    // 画像のパスに basePath を含める
    path: process.env.NODE_ENV === 'production' ? '/inbase-frontend/_next/image' : '/_next/image',
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
  // ベースパスとアセットプレフィックスの設定
  basePath: isProd ? '/inbase-frontend' : '',
  assetPrefix: isProd ? '/inbase-frontend/' : '',
  // 静的エクスポート用の設定
  experimental: {
    // 静的エクスポートでは serverActions は使用できません
    // 必要に応じて、API ルートを使用してください
  }
};

module.exports = nextConfig;