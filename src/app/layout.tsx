import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import Script from 'next/script';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'INBASE — ワンストップ販促ソリューション',
  description: 'NFT・ARからプレミアムグッズまで、企画〜物流を一気通貫でサポートするブランディング特化型エージェンシー',
  keywords: ['INBASE', '販促', 'ブランディング', 'NFT', 'AR', 'プロモーション', 'グッズ制作'],
  authors: [{ name: 'INBASE' }],
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://masaki-ib.github.io' : 'http://localhost:3000'),
  
  // PWA Configuration
  applicationName: 'INBASE',
  generator: 'Next.js',
  manifest: '/inbase-frontend/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'INBASE',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title: 'INBASE — ワンストップ販促ソリューション',
    description: 'NFT・ARからプレミアムグッズまで、企画〜物流を一気通貫でサポートするブランディング特化型エージェンシー',
    url: process.env.NODE_ENV === 'production' ? 'https://masaki-ib.github.io/inbase-frontend' : 'http://localhost:3000',
    siteName: 'INBASE',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/inbase-frontend/images/ogp.jpg',
        width: 1200,
        height: 630,
        alt: 'INBASE — ワンストップ販促ソリューション',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'INBASE — ワンストップ販促ソリューション',
    description: 'NFT・ARからプレミアムグッズまで、企画〜物流を一気通貫でサポートするブランディング特化型エージェンシー',
    creator: '@inbase_jp',
    images: ['/images/ogp.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-white text-text">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}