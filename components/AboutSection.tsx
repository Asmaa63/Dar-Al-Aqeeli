// components/AboutSection.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Eye, Heart, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const { language, t, dir } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t('about', 'mission'),
      description: t('about', 'missionText'),
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: Eye,
      title: t('about', 'vision'),
      description: t('about', 'visionText'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: t('about', 'values'),
      description: t('about', 'valuesText'),
      color: 'from-rose-500 to-pink-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('about', 'title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-amber-600 font-semibold mb-4">
            {t('about', 'subtitle')}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about', 'description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className={`absolute top-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-20 h-20 bg-gradient-to-br ${feature.color} opacity-10 rounded-bl-full`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                {language === 'ar' ? 'لماذا تختار دار العقيلي؟' : 'Why Choose Dar Al-Aqeeli?'}
              </h3>
              <div className="space-y-4">
                {[
                  language === 'ar' ? 'خبرة تمتد لأكثر من 15 عامًا في المجال' : 'Over 15 years of industry experience',
                  language === 'ar' ? 'فريق محترف ومبدع من الخبراء' : 'Professional and creative team of experts',
                  language === 'ar' ? 'أحدث التقنيات والمعدات' : 'Latest technologies and equipment',
                  language === 'ar' ? 'التزام بالمواعيد والجودة' : 'Commitment to deadlines and quality',
                  language === 'ar' ? 'حلول مبتكرة ومخصصة لكل عميل' : 'Innovative and customized solutions',
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className={`w-6 h-6 flex-shrink-0 ${language === 'ar' ? 'ml-3' : ''}`} />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/20">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-6xl font-bold mb-4">500+</div>
                  <p className="text-xl mb-6">
                    {language === 'ar' ? 'فعالية ناجحة' : 'Successful Events'}
                  </p>
                  <div className="text-6xl font-bold mb-4">200+</div>
                  <p className="text-xl">
                    {language === 'ar' ? 'شريك راضٍ' : 'Satisfied Partners'}
                  </p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/20 rounded-full"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}