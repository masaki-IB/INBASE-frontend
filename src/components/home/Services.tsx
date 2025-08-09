'use client';

import { motion } from 'framer-motion';
import { GiftIcon, MapPinIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'NFT配布ツール',
    desc: 'METAMASKなどのウェレット不要でNFT配布が可能。キャンペーンでの配布や来場記念としてのNFT配布など様々な用途でご利用頂けます。',
    icon: GiftIcon,
  },
  {
    title: 'ARスタンプラリー',
    desc: 'WebARを活用したスタンプラリーの企画立案支援。イベントの建築物や観光名所を活かしたARコンテンツを作成。',
    icon: MapPinIcon,
  },
  {
    title: 'プロモーショングッズ',
    desc: 'デジタルギフトやリアルグッズなどキャンペーンでの景品や企業オリジナルのブランディング支援。',
    icon: ShoppingBagIcon,
  },
];

export default function Services() {
  return (
    <section id="service" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SERVICE</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-text/80">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
