// components/HeroSection.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, ArrowLeft, Sparkles, Users, Award, Calendar } from 'lucide-react';

export default function HeroSection() {
  const { language, t, dir } = useLanguage();

  const stats = [
    {
      icon: Calendar,
      number: t('hero', 'stats').events,
      label: t('hero', 'stats').eventsLabel,
    },
    {
      icon: Users,
      number: t('hero', 'stats').clients,
      label: t('hero', 'stats').clientsLabel,
    },
    {
      icon: Sparkles,
      number: t('hero', 'stats').years,
      label: t('hero', 'stats').yearsLabel,
    },
    {
      icon: Award,
      number: t('hero', 'stats').awards,
      label: t('hero', 'stats').awardsLabel,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={dir}
    >
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-40 right-40 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 animate-fade-in">
          
          <span className={`text-white font-medium ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
            {language === 'ar' ? 'رواد صناعة الفعاليات' : 'Event Management Pioneers'}
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          {t('hero', 'company')}
          <span className="block text-3xl md:text-5xl text-amber-300 mt-4 font-normal">
            {t('hero', 'subtitle')}
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-200">
          {t('hero', 'description')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in-up delay-300">
          <a
            href="#services"
            className="group flex items-center space-x-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            <span className={language === 'ar' ? 'ml-3' : ''}>{t('hero', 'cta')}</span>
            {language === 'ar' ? (
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </a>
          <a
            href="#contact"
            className="flex items-center space-x-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <span className={language === 'ar' ? 'ml-3' : ''}>{t('hero', 'cta2')}</span>
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up delay-500">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <stat.icon className="w-8 h-8 text-amber-300 mb-3 mx-auto" />
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: backwards;
        }

        .delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: backwards;
        }

        .delay-500 {
          animation-delay: 0.5s;
          animation-fill-mode: backwards;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}