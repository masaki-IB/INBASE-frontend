'use client';

import Link from 'next/link';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SERVICE', href: '#service' },
  { name: 'NEWS', href: '#news' },
  { name: 'COMPANY', href: '#company' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">INBASE</h3>
            <p className="text-gray-300 mb-4">
              価値あるモノ・コトを形にするブランディング特化型エージェンシー
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPinIcon className="h-5 w-5" />
                <span>東京都板橋区小豆沢2-27-11</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <PhoneIcon className="h-5 w-5" />
                <span>03-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <EnvelopeIcon className="h-5 w-5" />
                <span>info@in-base.jp</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">メニュー</h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="md:col-span-3 pt-8 mt-8 border-t border-gray-800">
            <p className="text-center text-gray-400">
              © 2025 INBASE, Inc. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
