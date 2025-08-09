'use client';

import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Sample news data - in a real app, this would come from an API or CMS
const news = [
  {
    id: 1,
    title: '新規サービス「NFT配布ツール」の提供を開始しました',
    date: '2025-07-15',
    category: 'SERVICE',
  },
  {
    id: 2,
    title: 'WebARを活用したスタンプラリーの実証実験を実施',
    date: '2025-06-28',
    category: 'NEWS',
  },
  {
    id: 3,
    title: 'サステナブルなプロモーショングッズの取り組みを強化',
    date: '2025-05-10',
    category: 'TOPICS',
  },
];

export default function News() {
  // Format date to YYYY.MM.DD
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).replace(/\//g, '.');
  };

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">NEWS</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-text/80">
            最新のニュースやお知らせをお届けします
          </p>
        </div>

        {/* News List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {news.map((item, index) => (
              <motion.a
                key={item.id}
                href="#"
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center p-6 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="md:w-48 flex-shrink-0 mb-4 md:mb-0">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-text rounded-full">
                      {item.category}
                    </span>
                    <time className="block text-sm text-text/60 mt-1">
                      {formatDate(item.date)}
                    </time>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-4">
                    <span className="inline-flex items-center text-accent group-hover:translate-x-1 transition-transform">
                      続きを読む
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* View All Button */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 border border-text/20 rounded-full text-text hover:bg-gray-50 transition-colors"
            >
              すべてのニュースを見る
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
