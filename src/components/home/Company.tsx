'use client';

import { motion } from 'framer-motion';
import { BuildingOfficeIcon, MapPinIcon, EnvelopeIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/outline';

const companyInfo = [
  { icon: BuildingOfficeIcon, label: '名称', value: '株式会社INBASE' },
  { icon: CalendarIcon, label: '設立', value: '2023年7月' },
  { 
    icon: MapPinIcon, 
    label: '所在地', 
    value: '東京都板橋区小豆沢2-27-11',
  },
  { icon: PhoneIcon, label: 'TEL', value: '03-1234-5678' },
  { 
    icon: EnvelopeIcon, 
    label: 'MAIL', 
    value: 'info@in-base.jp',
  },
];

const businessActivities = [
  '各種デジタルコンテンツの企画・制作・販売及びコンサルティング',
  'マーケティング、プロモーションの企画立案、実施',
  'ブランディング戦略の立案・コンサルティング',
];

export default function Company() {
  return (
    <section id="company" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">COMPANY</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">
                会社概要
              </h3>
              <div className="space-y-4">
                {companyInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex">
                      <div className="w-32 flex-shrink-0 flex items-start">
                        <Icon className="h-5 w-5 text-accent mr-2 mt-0.5" />
                        <span className="text-text/70">{item.label}</span>
                      </div>
                      <div className="flex-1">
                        <span>{item.value}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 pb-4 border-b border-gray-100">
                事業内容
              </h3>
              <ul className="space-y-3">
                {businessActivities.map((activity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-2">■</span>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
