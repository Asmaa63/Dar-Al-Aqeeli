// components/ContactSection.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const { language, t, dir } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert(language === 'ar' ? 'الرجاء ملء جميع الحقول' : 'Please fill all fields');
      return;
    }
    alert(language === 'ar' ? 'شكراً لتواصلك معنا! سنرد عليك قريباً' : 'Thank you for contacting us! We will reply soon');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: language === 'ar' ? 'اتصل بنا' : 'Call Us',
      info: '+966 50 123 4567',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      title: language === 'ar' ? 'راسلنا' : 'Email Us',
      info: 'info@daraqeeli.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: t('contact', 'address'),
      info: t('contact', 'addressText'),
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', name: 'Facebook' },
    { icon: Instagram, url: '#', name: 'Instagram' },
    { icon: Twitter, url: '#', name: 'Twitter' },
    { icon: Linkedin, url: '#', name: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('contact', 'title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            {t('contact', 'subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact', 'name')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder={language === 'ar' ? 'اسمك الكريم' : 'Your Name'}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact', 'email')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'your@email.com'}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact', 'phone')}
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="+966 50 123 4567"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  {t('contact', 'message')}
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={language === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How can we help you?'}
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-700 text-white px-8 py-4 rounded-xl font-bold hover:from-amber-600 hover:to-amber-800 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-3"
              >
                <span className={language === 'ar' ? 'ml-3' : ''}>{t('contact', 'send')}</span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 ${language === 'ar' ? 'ml-4' : ''}`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">{t('contact', 'followUs')}</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110 ${language === 'ar' ? 'ml-4' : ''}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm opacity-90">
                  {language === 'ar' 
                    ? 'ساعات العمل: الأحد - الخميس، 9 صباحاً - 6 مساءً'
                    : 'Working Hours: Sunday - Thursday, 9 AM - 6 PM'}
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200"></div>
              <div className="relative text-6xl">🗺️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}