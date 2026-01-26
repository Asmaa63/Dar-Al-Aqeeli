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
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl md:text-5xl  font-black mb-6">
            <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 bg-clip-text text-transparent drop-shadow-lg">
              {t('certificates', 'title')}
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 rounded-full" />
            <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
            <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full animate-pulse shadow-lg shadow-blue-600/50" style={{ animationDelay: '0.3s' }} />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-blue-600 to-blue-600 rounded-full" />
          </div>

          <p className="text-xl md:text-2xl text-blue-800 max-w-3xl mx-auto font-semibold">
            {t('certificates', 'subtitle')}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                onClick={() => setSelectedCert(selectedCert === index ? null : index)}
                className={`group cursor-pointer relative transition-all duration-700 ${
                  selectedCert === index ? 'scale-105' : 'hover:-translate-y-3'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-yellow-400 transition-all duration-500">
                  {/* Certificate Image */}
                  <div className="relative h-96 overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${
                        selectedCert === index ? 'scale-110 brightness-75' : 'group-hover:scale-110'
                      }`}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                        <Icon className="w-8 h-8 text-blue-900" />
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/20 backdrop-blur-md border-2 border-white/40 rounded-xl px-5 py-2">
                        <span className="text-white font-black text-xl">{cert.year}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-yellow-300 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-white/90 font-semibold flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-yellow-400" />
                        {cert.issuer}
                      </p>
                    </div>

                    {/* Hover Lines */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                  </div>

                  {/* Verified Badge */}
                  <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                    selectedCert === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-black shadow-2xl flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      {language === 'ar' ? 'معتمد' : 'Verified'}
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-400/0 group-hover:border-yellow-400 rounded-tl-3xl transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-blue-600/0 group-hover:border-blue-600 rounded-br-3xl transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className={`text-center mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="inline-block bg-gradient-to-r from-blue-600 via-blue-800 to-blue-600 p-[3px] rounded-3xl shadow-2xl">
            <div className="bg-white rounded-3xl px-10 py-6">
              <p className="text-blue-900 font-bold text-lg flex items-center gap-4 justify-center flex-wrap">
                <Shield className="w-8 h-8 text-yellow-500" />
                <span>
                  {language === 'ar' 
                    ? 'جميع شهاداتنا معتمدة وسارية المفعول من الجهات الرسمية'
                    : 'All our certificates are accredited and valid by official authorities'}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}