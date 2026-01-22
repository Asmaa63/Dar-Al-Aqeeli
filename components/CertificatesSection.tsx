// components/CertificatesSection.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { Award, FileCheck, Shield, Medal, CheckCircle, Star } from 'lucide-react';

export default function CertificatesSection() {
  const { language, t, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
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

  const certificates = [
    {
      icon: Award,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=600&fit=crop',
      title: language === 'ar' ? 'شهادة الجودة ISO 9001' : 'ISO 9001 Quality Certificate',
      year: '2023',
      issuer: language === 'ar' ? 'المنظمة الدولية للمعايير' : 'International Organization for Standardization',
    },
    {
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=600&fit=crop',
      title: language === 'ar' ? 'شهادة السلامة والصحة المهنية' : 'Occupational Health & Safety Certificate',
      year: '2023',
      issuer: language === 'ar' ? 'وزارة العمل' : 'Ministry of Labor',
    },
    {
      icon: FileCheck,
      image: 'https://images.unsplash.com/photo-1554224311-beee460c201a?w=400&h=600&fit=crop',
      title: language === 'ar' ? 'ترخيص الهيئة العامة للترفيه' : 'General Entertainment Authority License',
      year: '2024',
      issuer: language === 'ar' ? 'هيئة الترفيه السعودية' : 'Saudi Entertainment Authority',
    },
    {
      icon: Medal,
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=600&fit=crop',
      title: language === 'ar' ? 'جائزة التميز في الفعاليات' : 'Excellence in Events Award',
      year: '2023',
      issuer: language === 'ar' ? 'جمعية المنظمين المحترفين' : 'Professional Organizers Association',
    },
    {
      icon: CheckCircle,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=600&fit=crop',
      title: language === 'ar' ? 'شهادة الامتثال البيئي' : 'Environmental Compliance Certificate',
      year: '2024',
      issuer: language === 'ar' ? 'الهيئة العامة للبيئة' : 'General Authority for Environment',
    },
    {
      icon: Star,
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=600&fit=crop',
      title: language === 'ar' ? 'شهادة التسجيل التجاري' : 'Commercial Registration Certificate',
      year: '2020',
      issuer: language === 'ar' ? 'وزارة التجارة' : 'Ministry of Commerce',
    },
  ];

  return (
    <section
      id="certificates"
      ref={sectionRef}
      dir={dir}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-black rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          {/* <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-6 py-2 mb-6">
            <Award className="w-5 h-5 text-red-600" />
            <span className="text-red-600 font-semibold text-sm">
              {language === 'ar' ? 'معتمدون ومرخصون' : 'Certified & Licensed'}
            </span>
          </div> */}

          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">
              {t('certificates', 'title')}
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('certificates', 'subtitle')}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedCert(selectedCert === index ? null : index)}
                className={`group cursor-pointer relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 ${
                  selectedCert === index ? 'scale-105 shadow-2xl' : 'hover:-translate-y-2'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Certificate Image - Portrait */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      selectedCert === index ? 'scale-110 brightness-75' : 'group-hover:scale-110'
                    }`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  Year Badge
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-lg px-4 py-2">
                      <span className="text-white font-bold text-lg">{cert.year}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-white/80 text-sm flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Hover Effect Lines */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
                </div>

                {/* Verified Badge */}
                <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                  selectedCert === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    {language === 'ar' ? 'معتمد' : 'Verified'}
                  </div>
                </div>

                {/* Border Animation */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 transition-all duration-500 rounded-2xl pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-block bg-gradient-to-r from-red-50 via-white to-red-50 border border-red-100 rounded-2xl px-8 py-6">
            <p className="text-gray-700 font-medium flex items-center gap-3 justify-center flex-wrap">
              <Shield className="w-6 h-6 text-red-600" />
              <span>
                {language === 'ar' 
                  ? 'جميع شهاداتنا معتمدة وسارية المفعول من الجهات الرسمية'
                  : 'All our certificates are accredited and valid by official authorities'}
              </span>
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}