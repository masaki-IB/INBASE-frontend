'use client'

import Link from 'next/link'
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">INBASE</h3>
            <p className="text-gray-400">
              テクノロジーで新たな価値を創造し、社会に貢献します。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#service" className="text-gray-400 hover:text-white transition-colors">
                  NFT配布ツール
                </Link>
              </li>
              <li>
                <Link href="#service" className="text-gray-400 hover:text-white transition-colors">
                  ARスタンプラリー
                </Link>
              </li>
              <li>
                <Link href="#service" className="text-gray-400 hover:text-white transition-colors">
                  プロモーショングッズ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-gray-400 hover:text-white transition-colors">
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">フォローする</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} INBASE Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                プライバシーポリシー
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
