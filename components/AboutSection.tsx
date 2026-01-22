// components/AboutSection.tsx
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
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
<div
  className={`text-center mb-16 transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
  }`}
>

  {/* Title */}
  <h2 className="text-4xl md:text-6xl font-black mb-4">
    <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">
      {t('about', 'title')}
    </span>
  </h2>

  {/* Divider */}
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
  </div>

  {/* Subtitle */}
  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
    {t('about', 'subtitle')}
  </p>
</div>


        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Side - Image */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                alt="Event Management"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{t('hero', 'crew')}</h3>
                <p className="text-gray-200">تأسست 2020</p>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about', 'description')}
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              {t('about', 'description2')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('about', 'founded')}
            </p>
          </div>
        </div>

        {/* Vision & Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className={`bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white shadow-xl transition-all duration-1000 delay-700 hover:transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4">
              <Target className="w-12 h-12 mr-4" />
              <h3 className="text-2xl font-bold">{t('about', 'vision')}</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              {t('about', 'visionText')}
            </p>
          </div>

          {/* Values */}
          <div className={`bg-black rounded-2xl p-8 text-white shadow-xl transition-all duration-1000 delay-900 hover:transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4">
              <Award className="w-12 h-12 mr-4 text-red-600" />
              <h3 className="text-2xl font-bold">{t('about', 'values')}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t('about', 'valuesText')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}