/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const isVercel = process.env.VERCEL === '1';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isVercel ? '' : (isProd ? '/inbase-frontend' : ''));

const nextConfig = {
  reactStrictMode: true,
  // VercelではSSRを使用、GitHub Pagesでは静的エクスポート
  output: isVercel ? undefined : 'export',
  distDir: isVercel ? '.next' : 'out',
  basePath: basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  
  // 画像最適化の設定
  images: {
    // Vercelでは最適化を有効に、GitHub Pagesでは無効化
    unoptimized: !isVercel,
    domains: ['images.unsplash.com'],
  },
  
  compiler: {
    styledComponents: true,
  },
  
  env: {
    SITE_URL: isVercel 
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || 'your-vercel-app.vercel.app'}`
      : isProd 
        ? 'https://masaki-ib.github.io/inbase-frontend' 
        : 'http://localhost:3000',
    SITE_TITLE: 'INBASE — 開発中',
    SITE_DESCRIPTION: '開発中のサイトです',
  },
  
  // ベースパスの設定
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  
  // 静的エクスポート用の設定
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // `fs`モジュールに依存するnpmパッケージの修正
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
  
  // Vercelで静的エクスポート時に必要な設定
  experimental: isVercel ? {} : {
    // 静的エクスポート固有の設定
    outputFileTracingRoot: undefined,
  },
  
  // ESLintの設定
  eslint: {
    ignoreDuringBuilds: true, // ビルド時のESLintエラーを無視
  },
  
  // TypeScriptの設定
  typescript: {
    ignoreBuildErrors: true, // ビルド時のTypeScriptエラーを無視
  }
};

module.exports = nextConfig;