module.exports = {
  title: 'INBASE — ワンストップ販促ソリューション',
  description: 'INBASEは、デジタルマーケティングとプロモーション戦略の専門会社です。ブランドの成長をサポートする総合的なソリューションを提供します。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://in-base.jp',
    site_name: 'INBASE',
    title: 'INBASE — ワンストップ販促ソリューション',
    description: 'デジタルマーケティングとプロモーション戦略の専門会社',
    images: [
      {
        url: 'https://in-base.jp/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INBASE',
      },
    ],
  },
  twitter: {
    handle: '@inbase_jp',
    site: '@inbase_jp',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'theme-color',
      content: '#000000',
    },
    {
      name: 'format-detection',
      content: 'telephone=no',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};
