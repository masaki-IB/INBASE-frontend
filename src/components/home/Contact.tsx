'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CONTACT</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">送信完了</h3>
                <p className="text-text/80 mb-6">
                  お問い合わせいただきありがとうございます。
                  内容を確認のうえ、3営業日以内にご返信いたします。
                </p>
                <button
                  onClick={() => setSubmitStatus(null)}
                  className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors"
                >
                  新しいメッセージを送信
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                    送信に失敗しました。しばらくしてからもう一度お試しください。
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-accent-dark transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPinIcon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-medium mb-1">所在地</h3>
            <p className="text-sm text-text/80">東京都板橋区小豆沢2-27-11</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-medium mb-1">電話番号</h3>
            <p className="text-sm text-text/80">03-1234-5678</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-medium mb-1">メール</h3>
            <p className="text-sm text-text/80">info@in-base.jp</p>
          </div>
        </div>
      </div>
    </section>
  );
}
