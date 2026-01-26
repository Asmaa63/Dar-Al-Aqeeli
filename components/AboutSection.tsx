'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { Target, Award, Users } from 'lucide-react';

export default function AboutSection() {
  const { t, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      dir={dir}
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231e3a8a' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          {/* Title */}
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 bg-clip-text text-transparent drop-shadow-lg">
              {t('about', 'title')}
            </span>
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full animate-pulse shadow-lg shadow-blue-600/50" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-blue-600 to-blue-600"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-800 max-w-3xl mx-auto font-semibold">
            {t('about', 'subtitle')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative h-full min-h-[450px] rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-600/20 z-10" />
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                alt="Event Management"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent z-20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white z-30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-1 bg-yellow-400"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="text-3xl font-black mb-3 drop-shadow-lg">{t('hero', 'crew')}</h3>
                <p className="text-yellow-200 font-bold text-lg">تأسست 2020</p>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <p className="text-lg text-blue-900 leading-relaxed font-medium bg-white/60 p-6 rounded-2xl shadow-lg border-l-4 border-yellow-400">
                {t('about', 'description')}
              </p>
              <p className="text-lg text-blue-900 leading-relaxed font-medium bg-white/60 p-6 rounded-2xl shadow-lg border-l-4 border-blue-600">
                {t('about', 'description2')}
              </p>
              <p className="text-lg text-blue-900 leading-relaxed font-medium bg-gradient-to-r from-yellow-100 to-blue-100 p-6 rounded-2xl shadow-lg border-l-4 border-yellow-600">
                {t('about', 'founded')}
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Vision */}
          <div className={`relative group transition-all duration-1000 delay-700 hover:transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-3xl p-10 shadow-2xl border-2 border-yellow-400/30">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-yellow-400 rounded-2xl mr-5 shadow-xl">
                  <Target className="w-10 h-10 text-blue-900" />
                </div>
                <h3 className="text-3xl font-black text-white">{t('about', 'vision')}</h3>
              </div>
              <p className="text-blue-100 leading-relaxed text-lg font-medium">
                {t('about', 'visionText')}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className={`relative group transition-all duration-1000 delay-900 hover:transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-10 shadow-2xl border-2 border-blue-800/30">
              <div className="flex items-center mb-6">
                <div className="p-4 bg-blue-900 rounded-2xl mr-5 shadow-xl">
                  <Award className="w-10 h-10 text-yellow-400" />
                </div>
                <h3 className="text-3xl font-black text-blue-900">{t('about', 'values')}</h3>
              </div>
              <p className="text-blue-900 leading-relaxed text-lg font-bold">
                {t('about', 'valuesText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}