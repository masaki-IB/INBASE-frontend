# INBASE コーポレートサイト

INBASEの公式コーポレートサイトです。ワンストップ販促ソリューションを提供するブランディング特化型エージェンシーとしての情報を発信しています。

## 主な機能

- レスポンシブデザイン
- プログレッシブウェブアプリ（PWA）対応
- SEO最適化
- お問い合わせフォーム（Formspree連携）

## 開発環境のセットアップ

### 必要なもの

- Node.js 18.x 以降
- npm または yarn

### インストール

```bash
# 依存パッケージをインストール
npm install
# または
yarn install
```

### 開発サーバーの起動

```bash
npm run dev
# または
yarn dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

## 本番環境へのデプロイ

### GitHub Pages へのデプロイ

1. リポジトリの設定で GitHub Pages を有効にし、ソースを `gh-pages` ブランチに設定します。
2. メインブランチにプッシュすると、GitHub Actions が自動的にビルドとデプロイを実行します。

### カスタムドメインの設定

`in-base.jp` ドメインを使用する場合のDNS設定は以下の通りです：

#### Aレコード
```
in-base.jp.    A     185.199.108.153
in-base.jp.    A     185.199.109.153
in-base.jp.    A     185.199.110.153
in-base.jp.    A     185.199.111.153
```

#### CNAMEレコード
```
www.in-base.jp.    CNAME    your-github-username.github.io.
```

#### 注意点
- DNSの変更が反映されるまで最大48時間かかる場合があります。
- GitHub Pagesの設定で「Enforce HTTPS」を有効にしてください。

## 環境変数

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```
# Formspree フォームのID
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id

# 本番環境のURL
NEXT_PUBLIC_SITE_URL=https://in-base.jp
```

## ビルド

```bash
# 本番用ビルド
npm run build
# または
yarn build

# ビルドの確認
npm run start
# または
yarn start
```

## 技術スタック

- [Next.js](https://nextjs.org/) - React フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全なJavaScript
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファーストなCSSフレームワーク
- [Framer Motion](https://www.framer.com/motion/) - アニメーションライブラリ
- [Heroicons](https://heroicons.com/) - アイコンライブラリ
- [next-pwa](https://github.com/shadowwalker/next-pwa) - PWAサポート

## ライセンス

このプロジェクトはプライベートライセンスです。

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
