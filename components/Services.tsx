'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { 
  Mic, Lightbulb, Users, Calendar, Building, Gamepad2, Store, 
  Tent, Sparkles, Music, Video, ChevronLeft, ChevronRight, 
  ArrowRight, Phone, Star, Zap, Award 
} from 'lucide-react';

// ==================== Slider Controls Component ====================
const SliderControls = ({ current, total, onPrev, onNext, dir }: any) => (
  <div className="flex items-center justify-center gap-6 mt-12">
    <button
      onClick={onPrev}
      className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:from-yellow-400 hover:to-yellow-600 hover:text-blue-900 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110 active:scale-95"
    >
      {dir === 'rtl' ? <ChevronRight className="w-8 h-8" /> : <ChevronLeft className="w-8 h-8" />}
    </button>
    
    <div className="flex gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-3 rounded-full transition-all duration-300 ${
            i === current ? 'w-12 bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg shadow-yellow-400/50' : 'w-3 bg-blue-300'
          }`}
        />
      ))}
    </div>
    
    <button
      onClick={onNext}
      className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:from-yellow-400 hover:to-yellow-600 hover:text-blue-900 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110 active:scale-95"
    >
      {dir === 'rtl' ? <ChevronLeft className="w-8 h-8" /> : <ChevronRight className="w-8 h-8" />}
    </button>
  </div>
);

// ==================== Section Header Component ====================
const SectionHeader = ({ title, subtitle, delay = 0, isVisible }: any) => (
  <div 
    className={`text-center mb-20 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="relative inline-block">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 relative">
        <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 bg-clip-text text-transparent drop-shadow-lg">
          {title}
        </span>
        <div className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50 blur-sm"></div>
      </h2>
      <div className="absolute -left-20 top-1/2 w-16 h-1 bg-gradient-to-r from-transparent to-yellow-400 hidden xl:block animate-pulse" />
      <div className="absolute -right-20 top-1/2 w-16 h-1 bg-gradient-to-l from-transparent to-yellow-400 hidden xl:block animate-pulse" />
    </div>
    <p className="text-lg md:text-2xl text-blue-800 max-w-3xl mx-auto font-semibold leading-relaxed px-4">{subtitle}</p>
  </div>
);

// ==================== Service Card Styles (1, 2, 3) ====================
const ServiceCardStyle1 = ({ service, index, type, t }: any) => {
  const Icon = service.icon;
  return (
    <div className="group relative h-full transition-all duration-700" style={{ transitionDelay: `${index * 100}ms` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full border-2 border-transparent hover:border-yellow-400">
        <div className="relative h-64 overflow-hidden">
          <img src={service.image} alt="" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent"></div>
          <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500"><Icon className="w-8 h-8 text-blue-900" /></div>
          <div className="absolute top-6 right-6 text-5xl transform group-hover:scale-125 transition-all duration-500">{service.emoji}</div>
          <div className="absolute bottom-6 left-6 right-6"><h3 className="text-2xl font-black text-white">{t(type, `items.${service.key}.title`)}</h3></div>
        </div>
        <div className="p-8"><p className="text-blue-900 font-medium">{t(type, `items.${service.key}.desc`)}</p></div>
      </div>
    </div>
  );
};

const ServiceCardStyle2 = ({ service, index, type, t }: any) => {
  const Icon = service.icon;
  return (
    <div className="group relative h-full transition-all duration-500">
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl h-full border-2 border-blue-100 hover:border-blue-400">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-1/3 bg-blue-800 p-8 flex flex-col items-center justify-center relative">
            <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-4"><Icon className="w-10 h-10 text-blue-900" /></div>
            <div className="text-5xl">{service.emoji}</div>
          </div>
          <div className="md:w-2/3 p-8">
            <h3 className="text-2xl font-black text-blue-900 mb-4">{t(type, `items.${service.key}.title`)}</h3>
            <p className="text-blue-800">{t(type, `items.${service.key}.desc`)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCardStyle3 = ({ service, index, type, t }: any) => {
  const Icon = service.icon;
  return (
    <div className="group relative h-full bg-white rounded-3xl p-8 shadow-lg border border-blue-100 hover:border-yellow-400 transition-all">
      <div className="flex justify-between mb-6">
        <div className="p-4 bg-blue-50 rounded-xl"><Icon className="text-blue-600" /></div>
        <div className="text-4xl">{service.emoji}</div>
      </div>
      <h3 className="text-xl font-bold mb-4">{t(type, `items.${service.key}.title`)}</h3>
      <p className="text-gray-600 mb-6">{t(type, `items.${service.key}.desc`)}</p>
      <img src={service.image} className="rounded-xl h-32 w-full object-cover" alt="" />
    </div>
  );
};

// ==================== المطور CTA Section ====================
const CTASection = ({ isVisible, language, dir }: any) => (
  <div className={`mt-32 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
    <div className="relative max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80" alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/80 to-indigo-900/95" />
      </div>

      <div className="relative px-6 py-20 md:py-28 text-center z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 animate-bounce-slow">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-bold text-sm uppercase">{language === 'ar' ? 'ابدأ رحلتك معنا' : 'Start Your Journey'}</span>
          </div>

          <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            {language === 'ar' ? (
              <>جاهز لبدء <span className="text-yellow-400">مشروعك</span> القادم؟</>
            ) : (
              <>Ready to Start Your Next <span className="text-yellow-400">Project</span>?</>
            )}
          </h3>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <a href="#contact" className="group relative flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-blue-950 px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <span>{language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}</span>
              <ArrowRight className={`w-6 h-6 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/40 opacity-40 group-hover:animate-shine" />
            </a>
            <a href="tel:+123" className="flex items-center gap-3 bg-white/5 backdrop-blur-lg text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-blue-900 transition-all">
              <Phone className="w-5 h-5" /> <span>{language === 'ar' ? 'طلب مكالمة' : 'Request a Call'}</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10 max-w-3xl mx-auto">
            {[
              { label: language === 'ar' ? 'مشروع ناجح' : 'Projects', val: '500+', icon: Zap },
              { label: language === 'ar' ? 'سنة خبرة' : 'Experience', val: '15+', icon: Award },
              { label: language === 'ar' ? 'عميل سعيد' : 'Happy Clients', val: '200+', icon: Star },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-yellow-400" />
                  <span className="text-3xl font-black text-white">{stat.val}</span>
                </div>
                <span className="text-blue-200/60 font-medium text-xs uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ==================== Main Section ====================
export default function ServicesSection() {
  const { language, t, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  
  const [servicesSlide, setServicesSlide] = useState(0);
  const [entertainmentSlide, setEntertainmentSlide] = useState(0);
  const [productionSlide, setProductionSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const services = [
    { icon: Mic, key: 'equipment', emoji: '🎤', image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400' },
    { icon: Calendar, key: 'openings', emoji: '🎊', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400' },
    { icon: Users, key: 'characters', emoji: '🎭', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400' },
    { icon: Sparkles, key: 'events', emoji: '✨', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400' },
  ];

  const entertainment = [
    { icon: Lightbulb, key: 'lights', emoji: '💡', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400' },
    { icon: Music, key: 'carnival', emoji: '🎵', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400' },
  ];

  const production = [
    { icon: Mic, key: 'sound', emoji: '🔊', image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400' },
    { icon: Video, key: 'media', emoji: '📹', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400' },
  ];

  const renderSlider = (items: any[], currentSlide: number, setSlide: any, CardComponent: any, type: string) => {
    const totalSlides = Math.ceil(items.length / cardsPerView);
    return (
      <div className="relative mb-32">
        <div className="overflow-hidden px-2">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(${dir === 'rtl' ? currentSlide * (100 / cardsPerView) : -currentSlide * (100 / cardsPerView)}%)` }}
          >
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 1.5 / cardsPerView}rem)` }}>
                <CardComponent service={item} index={index} type={type} t={t} />
              </div>
            ))}
          </div>
        </div>
        {totalSlides > 1 && (
          <SliderControls 
            current={currentSlide} total={totalSlides} 
            onPrev={() => setSlide((p: number) => Math.max(0, p - 1))}
            onNext={() => setSlide((p: number) => Math.min(totalSlides - 1, p + 1))}
            dir={dir}
          />
        )}
      </div>
    );
  };

  return (
    <section id="services" ref={sectionRef} dir={dir} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader title={t('services', 'title')} subtitle={t('services', 'subtitle')} isVisible={isVisible} />
        {renderSlider(services, servicesSlide, setServicesSlide, ServiceCardStyle1, 'services')}

        <SectionHeader title={t('entertainment', 'title')} subtitle={t('entertainment', 'subtitle')} delay={200} isVisible={isVisible} />
        {renderSlider(entertainment, entertainmentSlide, setEntertainmentSlide, ServiceCardStyle2, 'entertainment')}

        <SectionHeader title={t('production', 'title')} subtitle={t('production', 'subtitle')} delay={400} isVisible={isVisible} />
        {renderSlider(production, productionSlide, setProductionSlide, ServiceCardStyle3, 'production')}

        <CTASection isVisible={isVisible} language={language} dir={dir} />
      </div>
      
      <style jsx global>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes shine { 100% { left: 125%; } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-shine { animation: shine 0.8s forwards; }
        .animate-bounce-slow { animation: bounce-slow 3s infinite; }
      `}</style>
    </section>
  );
}