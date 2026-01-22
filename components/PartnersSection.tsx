// components/PartnersSection.tsx
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

  // Auto-scroll animation
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

  // شركات سعودية كبيرة
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
    {
      name: 'Saudi Airlines',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Saudia_Logo.svg/200px-Saudia_Logo.svg.png',
      category: language === 'ar' ? 'طيران' : 'Aviation'
    },
    {
      name: 'NCB',
      logo: 'https://upload.wikimedia.org/wikipedia/ar/thumb/8/8a/Ncb_logo.svg/200px-Ncb_logo.svg.png',
      category: language === 'ar' ? 'بنوك' : 'Banking'
    },
    {
      name: 'Mobily',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mobily_Logo.svg/200px-Mobily_Logo.svg.png',
      category: language === 'ar' ? 'اتصالات' : 'Telecom'
    },
    {
      name: 'Al Rajhi Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Al_Rajhi_Bank_Logo.svg/200px-Al_Rajhi_Bank_Logo.svg.png',
      category: language === 'ar' ? 'بنوك' : 'Banking'
    },
  ];

  // Duplicate for infinite scroll effect
  const allPartners = [...partners, ...partners];

  return (
    <section
      id="partners"
      ref={sectionRef}
      dir={dir}
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          {/* <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-6 py-2 mb-6">
            <Handshake className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-semibold text-sm">
              {language === 'ar' ? 'شركاء النجاح' : 'Success Partners'}
            </span>
          </div> */}

          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">
              {t('partners', 'title')}
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('partners', 'subtitle')}
          </p>
        </div>

        {/* Partners Grid - Static Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-gray-100 hover:border-red-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Logo Container */}
              <div className="relative h-20 flex items-center justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<div class="text-2xl font-bold text-gray-800">${partner.name}</div>`;
                    }
                  }}
                />
              </div>

              {/* Category Badge */}
              <div className="text-center">
                <span className="inline-block bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {partner.category}
                </span>
              </div>

              {/* Hover Border Animation */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 transition-all duration-500 rounded-2xl pointer-events-none"></div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-600/0 group-hover:border-red-600/50 rounded-tr-2xl transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-600/0 group-hover:border-red-600/50 rounded-bl-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Infinite Scroll Section */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl p-8 border-2 border-gray-100 overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-12 overflow-hidden"
              style={{ scrollBehavior: 'auto' }}
            >
              {allPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 flex items-center justify-center group border border-gray-100"
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
                        parent.innerHTML = `<div class="text-sm font-bold text-gray-800 text-center">${partner.name}</div>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-100">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-black mb-2">200+</div>
            <div className="text-gray-600 font-medium">
              {language === 'ar' ? 'شريك استراتيجي' : 'Strategic Partners'}
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-black to-gray-800 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-gray-200 font-medium">
              {language === 'ar' ? 'مشروع مشترك' : 'Joint Projects'}
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-red-50 to-white rounded-2xl p-8 border border-red-100">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-black mb-2">15+</div>
            <div className="text-gray-600 font-medium">
              {language === 'ar' ? 'سنة من الشراكات' : 'Years of Partnerships'}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1000ms' }}>
          <div className="inline-block bg-gradient-to-r from-black via-red-600 to-black p-[2px] rounded-2xl">
            <div className="bg-white rounded-2xl px-8 py-4">
              <p className="text-gray-700 font-medium">
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