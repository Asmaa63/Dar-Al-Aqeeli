// components/ServicesSection.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Building2, Calendar, Music, Palette, TrendingUp, Lightbulb } from 'lucide-react';

export default function ServicesSection() {
  const { language, t, dir } = useLanguage();

  const services = [
    {
      icon: Building2,
      title: t('services', 'exhibitions').title,
      description: t('services', 'exhibitions').description,
      color: 'from-purple-500 to-indigo-500',
      image: '🏛️',
    },
    {
      icon: Calendar,
      title: t('services', 'events').title,
      description: t('services', 'events').description,
      color: 'from-blue-500 to-cyan-500',
      image: '📅',
    },
    {
      icon: Music,
      title: t('services', 'festivals').title,
      description: t('services', 'festivals').description,
      color: 'from-pink-500 to-rose-500',
      image: '🎪',
    },
    {
      icon: Palette,
      title: t('services', 'production').title,
      description: t('services', 'production').description,
      color: 'from-amber-500 to-orange-500',
      image: '🎨',
    },
    {
      icon: TrendingUp,
      title: t('services', 'marketing').title,
      description: t('services', 'marketing').description,
      color: 'from-green-500 to-emerald-500',
      image: '📊',
    },
    {
      icon: Lightbulb,
      title: t('services', 'consulting').title,
      description: t('services', 'consulting').description,
      color: 'from-yellow-500 to-amber-500',
      image: '💡',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('services', 'title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services', 'subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full -translate-y-16 ${language === 'ar' ? '-translate-x-16' : 'translate-x-16'} group-hover:scale-150 transition-transform duration-500`}></div>

              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 text-4xl">{service.image}</div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-700 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-0 h-1 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              {language === 'ar' ? 'هل لديك مشروع في ذهنك؟' : 'Have a project in mind?'}
            </h3>
            <p className="text-xl mb-8 opacity-90">
              {language === 'ar' 
                ? 'دعنا نساعدك في تحويل رؤيتك إلى واقع مذهل'
                : "Let us help you turn your vision into an amazing reality"}
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-amber-700 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              {language === 'ar' ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}