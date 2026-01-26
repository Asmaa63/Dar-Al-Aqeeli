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
      className="relative min-h-screen pt-32 md:pt-40 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-24 left-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-yellow-400 rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-40 w-4 h-4 bg-blue-300 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-yellow-300 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          {/* Title */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
              <span className="text-white drop-shadow-2xl">{t('hero', 'company')}</span>
              <span className="text-yellow-400 mx-4 animate-pulse">|</span>
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">{t('hero', 'crew')}</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <p className="text-xl md:text-3xl text-yellow-200 mb-8 font-bold drop-shadow-lg">
              {t('hero', 'subtitle')}
            </p>
          </div>

          {/* Description */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <p className="text-base md:text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('hero', 'description')}
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <button
              onClick={() => scrollToSection('#about')}
              className="relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 rounded-2xl font-black text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-400/70 hover:scale-110 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <span className="relative z-10">{t('hero', 'cta')}</span>
            </button>

            <button
              onClick={() => scrollToSection('#contact')}
              className="relative px-10 py-5 border-3 border-white text-white rounded-2xl font-black text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-2xl hover:scale-110 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <span className="relative z-10">{t('hero', 'cta2')}</span>
            </button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 delay-900 mb-5 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl p-4 border-2 border-yellow-400 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-3">{events}+</div>
                <div className="text-blue-800 font-bold text-lg">{t('hero', 'stats.eventsLabel')}</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-white via-yellow-50 to-white rounded-2xl p-4 border-2 border-blue-400 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-black bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent mb-3">{clients}+</div>
                <div className="text-blue-800 font-bold text-lg">{t('hero', 'stats.clientsLabel')}</div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative bg-gradient-to-br from-white via-blue-50 to-white rounded-2xl p-4 border-2 border-yellow-400 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                <div className="text-5xl font-black bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent mb-3">{years}+</div>
                <div className="text-blue-800 font-bold text-lg">{t('hero', 'stats.yearsLabel')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.5; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}