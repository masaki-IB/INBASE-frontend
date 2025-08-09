'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Teamwork branding"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ABOUT US
                <span className="block w-16 h-1 bg-accent mt-4"></span>
              </h2>
              
              <div className="prose prose-lg text-text/90">
                <p className="mb-6">
                  INBASEは、価値あるモノ・コトを形にするブランディング特化型エージェンシー。
                </p>
                <p className="mb-6">
                  ロゴ入りプレミアムからサステナブルなエコバッグ、トレンドを捉えたアパレルまで、
                  御社の世界観を宿すオリジナルグッズを企画・製作し、ファンとのエンゲージメントを深化させます。
                </p>
                <p>
                  戦略設計から物流まで一気通貫でサポートし、貴社ブランドの価値を永続的に高めるパートナーです。
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-accent mb-2">2015</h4>
                  <p className="text-sm text-text/80">設立</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-2xl font-bold text-accent mb-2">500+</h4>
                  <p className="text-sm text-text/80">プロジェクト実績</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
