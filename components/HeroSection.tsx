'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

function useCountUp(target: number, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
}

export default function HeroSection() {
  const { t, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const events = useCountUp(120);
  const clients = useCountUp(85);
  const years = useCountUp(6);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      dir={dir}
      className="relative min-h-screen pt-28 md:pt-32 flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-red-950"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Title */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">{t('hero', 'company')}</span>
              <span className="text-red-600 mx-3">|</span>
              <span className="text-red-600">{t('hero', 'crew')}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <p className="text-lg md:text-2xl text-gray-300 mb-6">
              {t('hero', 'subtitle')}
            </p>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <p className="text-sm md:text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              {t('hero', 'description')}
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => scrollToSection('#about')}
              className="px-8 py-4 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300"
            >
              {t('hero', 'cta')}
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              {t('hero', 'cta2')}
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-400 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="text-4xl font-bold text-red-600 mb-2">{events}+</div>
              <div className="text-gray-300">{t('hero', 'stats.eventsLabel')}</div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="text-4xl font-bold text-red-600 mb-2">{clients}+</div>
              <div className="text-gray-300">{t('hero', 'stats.clientsLabel')}</div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <div className="text-4xl font-bold text-red-600 mb-2">{years}+</div>
              <div className="text-gray-300">{t('hero', 'stats.yearsLabel')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
