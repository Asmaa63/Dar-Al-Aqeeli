'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { Handshake, Building2, Sparkles } from 'lucide-react';

export default function PartnersSection() {
  const { language, t, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isVisible) return;

    let scrollAmount = 0;
    const scroll = () => {
      scrollAmount += 0.5;
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollAmount;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);
    return () => clearInterval(intervalId);
  }, [isVisible]);

  const partners = [
    {
      name: 'Saudi Aramco',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/19/Aramco_logo.svg/200px-Aramco_logo.svg.png',
      category: language === 'ar' ? 'طاقة' : 'Energy'
    },
    {
      name: 'SABIC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/SABIC_logo.svg/200px-SABIC_logo.svg.png',
      category: language === 'ar' ? 'صناعة' : 'Industry'
    },
    {
      name: 'STC',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/STC_Logo.svg/200px-STC_Logo.svg.png',
      category: language === 'ar' ? 'اتصالات' : 'Telecom'
    },
    {
      name: 'Almarai',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Almarai_logo.svg/200px-Almarai_logo.svg.png',
      category: language === 'ar' ? 'غذاء' : 'Food'
    },
  ];

  const allPartners = [...partners, ...partners];

  return (
    <section
      id="partners"
      ref={sectionRef}
      dir={dir}
      className="py-24 bg-gradient-to-br from-white via-yellow-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl md:text-5xl  font-black mb-6">
            <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 bg-clip-text text-transparent drop-shadow-lg">
              {t('partners', 'title')}
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 rounded-full" />
            <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
            <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full animate-pulse shadow-lg shadow-blue-600/50" style={{ animationDelay: '0.3s' }} />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-blue-600 to-blue-600 rounded-full" />
          </div>

          <p className="text-xl md:text-2xl text-blue-800 max-w-3xl mx-auto font-semibold">
            {t('partners', 'subtitle')}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-yellow-400">
                {/* Logo Container */}
                <div className="relative h-24 flex items-center justify-center mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-2xl font-bold text-blue-900">${partner.name}</div>`;
                      }
                    }}
                  />
                </div>

                {/* Category Badge */}
                <div className="text-center">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    {partner.category}
                  </span>
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-yellow-400/0 group-hover:border-yellow-400 rounded-tr-3xl transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-blue-600/0 group-hover:border-blue-600 rounded-bl-3xl transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll */}
        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-blue-100 via-white to-yellow-100 rounded-3xl p-10 border-2 border-blue-200 overflow-hidden shadow-xl">
            <div 
              ref={scrollRef}
              className="flex gap-16 overflow-hidden"
              style={{ scrollBehavior: 'auto' }}
            >
              {allPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center group border-2 border-transparent hover:border-yellow-400"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `<div class="text-sm font-bold text-blue-900 text-center">${partner.name}</div>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid md:grid-cols-3 gap-10 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative text-center bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Building2 className="w-10 h-10 text-blue-900" />
              </div>
              <div className="text-5xl font-black text-white mb-3">200+</div>
              <div className="text-blue-100 font-semibold text-lg">
                {language === 'ar' ? 'شريك استراتيجي' : 'Strategic Partners'}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative text-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Sparkles className="w-10 h-10 text-yellow-400" />
              </div>
              <div className="text-5xl font-black text-blue-900 mb-3">500+</div>
              <div className="text-blue-900 font-bold text-lg">
                {language === 'ar' ? 'مشروع مشترك' : 'Joint Projects'}
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            <div className="relative text-center bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-3xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Handshake className="w-10 h-10 text-blue-900" />
              </div>
              <div className="text-5xl font-black text-white mb-3">15+</div>
              <div className="text-blue-100 font-semibold text-lg">
                {language === 'ar' ? 'سنة من الشراكات' : 'Years of Partnerships'}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="inline-block bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 p-[3px] rounded-3xl shadow-2xl">
            <div className="bg-white rounded-3xl px-10 py-6">
              <p className="text-blue-900 font-bold text-lg">
                {language === 'ar' 
                  ? 'وغيرهم الكثير من الشركات والجهات الرائدة في المملكة والعالم'
                  : 'And many more leading companies and organizations in the Kingdom and worldwide'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}