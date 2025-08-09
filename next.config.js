/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    SITE_URL: 'http://localhost:3000',
    SITE_TITLE: 'INBASE — 開発中',
    SITE_DESCRIPTION: '開発中のサイトです',
  }
};

module.exports = nextConfig;