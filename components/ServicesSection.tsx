// components/ServicesSection.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { Mic, Lightbulb, Users, Calendar, Building, Gamepad2, Store, Tent, Sparkles, Music, Video, ChevronLeft, ChevronRight, ArrowRight, Phone, Mail } from 'lucide-react';

export default function ServicesSection() {
  const { language, t, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [servicesSlide, setServicesSlide] = useState(0);
  const [entertainmentSlide, setEntertainmentSlide] = useState(0);
  const [productionSlide, setProductionSlide] = useState(0);

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

  const services = [
    { icon: Mic, key: 'equipment', emoji: '🎤', image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=600&fit=crop' },
    { icon: Calendar, key: 'openings', emoji: '🎊', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop' },
    { icon: Users, key: 'characters', emoji: '🎭', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop' },
    { icon: Sparkles, key: 'events', emoji: '✨', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop' },
    { icon: Building, key: 'exhibitions', emoji: '🏛️', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop' },
    { icon: Gamepad2, key: 'games', emoji: '🎮', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop' },
    { icon: Store, key: 'booths', emoji: '🏪', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop' },
    { icon: Tent, key: 'carnival', emoji: '🎪', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop' },
  ];

  const entertainment = [
    { icon: Lightbulb, key: 'lights', emoji: '💡', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop' },
    { icon: Users, key: 'pantomime', emoji: '🤹', image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&h=600&fit=crop' },
    { icon: Gamepad2, key: 'vr', emoji: '🥽', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=800&h=600&fit=crop' },
    { icon: Music, key: 'carnival', emoji: '🎵', image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop' },
    { icon: Building, key: 'heritage', emoji: '🕌', image: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop' },
    { icon: Sparkles, key: 'circus', emoji: '🎪', image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop' },
  ];

  const production = [
    { icon: Mic, key: 'sound', emoji: '🔊', image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=600&fit=crop' },
    { icon: Lightbulb, key: 'stage', emoji: '🎬', image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop' },
    { icon: Video, key: 'media', emoji: '📹', image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop' },
  ];

  const SliderControls = ({ current, total, onPrev, onNext }: any) => (
    <div className="flex items-center justify-center gap-4 mt-8">
      <button
        onClick={onPrev}
        className="w-12 h-12 rounded-full bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110"
        aria-label="Previous"
      >
        {dir === 'rtl' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
      </button>
      
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-red-600' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={onNext}
        className="w-12 h-12 rounded-full bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110"
        aria-label="Next"
      >
        {dir === 'rtl' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
      </button>
    </div>
  );

  // Style 1: Image Top with Overlay
  const ServiceCardStyle1 = ({ service, index, type }: any) => {
    const Icon = service.icon;
    return (
      <div
        className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={service.image}
            alt={t(type, `items.${service.key}.title`)}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          
          {/* Icon on Image */}
          <div className="absolute top-4 left-4 w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
            <Icon className="w-7 h-7 text-white" />
          </div>
          
          {/* Emoji */}
          <div className="absolute top-4 right-4 text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
            {service.emoji}
          </div>

          {/* Title on Image */}
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t(type, `items.${service.key}.title`)}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 leading-relaxed">
            {t(type, `items.${service.key}.desc`)}
          </p>
        </div>

        {/* Red Accent Line */}
        <div className="absolute bottom-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>
      </div>
    );
  };

  // Style 2: Side Image with Content
  const ServiceCardStyle2 = ({ service, index, type }: any) => {
    const Icon = service.icon;
    return (
      <div
        className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Side */}
          <div className="relative md:w-2/5 h-48 md:h-auto overflow-hidden">
            <img
              src={service.image}
              alt={t(type, `items.${service.key}.title`)}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30"></div>
            
            {/* Floating Emoji */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
              {service.emoji}
            </div>
          </div>

          {/* Content Side */}
          <div className="md:w-3/5 p-6 flex flex-col justify-center relative">
            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-red-50 to-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-red-600 group-hover:to-black transition-all duration-500">
              <Icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-500" />
            </div>

            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-black to-red-600 bg-clip-text text-transparent">
              {t(type, `items.${service.key}.title`)}
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-sm">
              {t(type, `items.${service.key}.desc`)}
            </p>

            {/* Corner Decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-600/20 rounded-tr-2xl"></div>
          </div>
        </div>
      </div>
    );
  };

  // Style 3: Centered with Big Image Background
  const ServiceCardStyle3 = ({ service, index, type }: any) => {
    const Icon = service.icon;
    return (
      <div
        className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={t(type, `items.${service.key}.title`)}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 group-hover:from-red-900/80 group-hover:via-black/70 group-hover:to-black/95 transition-all duration-500"></div>
        </div>

        {/* Content */}
        <div className="relative p-8 h-full flex flex-col justify-between min-h-[400px]">
          {/* Top Section */}
          <div>
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 group-hover:bg-red-600 transition-all duration-500">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                {service.emoji}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              {t(type, `items.${service.key}.title`)}
            </h3>
          </div>

          {/* Bottom Section */}
          <div>
            <p className="text-white/90 leading-relaxed">
              {t(type, `items.${service.key}.desc`)}
            </p>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 border-2 border-white/0 group-hover:border-red-600 transition-all duration-500 rounded-2xl pointer-events-none"></div>
      </div>
    );
  };

  const SectionHeader = ({ title, subtitle, delay = 0 }: any) => (
    <div 
      className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative inline-block">
        <h2 className="text-4xl md:text-6xl font-black relative">
          <span className="absolute inset-0 bg-gradient-to-r from-red-200 to-gray-200 bg-clip-text text-transparent blur-sm">
            {title}
          </span>
          <span className="relative bg-gradient-to-r from-black via-red-600 to-black bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
        
        <div className="absolute -left-12 top-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent to-red-600 hidden md:block"></div>
        <div className="absolute -right-12 top-1/2 w-8 h-0.5 bg-gradient-to-l from-transparent to-red-600 hidden md:block"></div>
      </div>

      <div className="flex items-center justify-center gap-3 my-6">
        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
      </div>

      <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
        {subtitle}
      </p>
    </div>
  );

  const cardsPerView = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  return (
    <section
      id="services"
      ref={sectionRef}
      dir={dir}
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-black rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Services - Style 1 */}
        <SectionHeader 
          title={t('services', 'title')}
          subtitle={t('services', 'subtitle')}
        />

        <div className="relative mb-20">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ 
                transform: `translateX(${dir === 'rtl' ? servicesSlide * (100 / cardsPerView) : -servicesSlide * (100 / cardsPerView)}%)`
              }}
            >
              {services.map((service, index) => (
                <div key={service.key} className="flex-shrink-0" style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 1.5 / cardsPerView}rem)` }}>
                  <ServiceCardStyle1 service={service} index={index} type="services" />
                </div>
              ))}
            </div>
          </div>
          
          <SliderControls
            current={servicesSlide}
            total={Math.ceil(services.length / cardsPerView)}
            onPrev={() => setServicesSlide(prev => Math.max(0, prev - 1))}
            onNext={() => setServicesSlide(prev => Math.min(Math.ceil(services.length / cardsPerView) - 1, prev + 1))}
          />
        </div>

        {/* Entertainment - Style 2 */}
        <SectionHeader 
          title={t('entertainment', 'title')}
          subtitle={t('entertainment', 'subtitle')}
          delay={200}
        />

        <div className="relative mb-20">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ 
                transform: `translateX(${dir === 'rtl' ? entertainmentSlide * (100 / cardsPerView) : -entertainmentSlide * (100 / cardsPerView)}%)`
              }}
            >
              {entertainment.map((item, index) => (
                <div key={item.key} className="flex-shrink-0" style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 1.5 / cardsPerView}rem)` }}>
                  <ServiceCardStyle2 service={item} index={index} type="entertainment" />
                </div>
              ))}
            </div>
          </div>
          
          <SliderControls
            current={entertainmentSlide}
            total={Math.ceil(entertainment.length / cardsPerView)}
            onPrev={() => setEntertainmentSlide(prev => Math.max(0, prev - 1))}
            onNext={() => setEntertainmentSlide(prev => Math.min(Math.ceil(entertainment.length / cardsPerView) - 1, prev + 1))}
          />
        </div>

        {/* Production - Style 3 */}
        <SectionHeader 
          title={t('production', 'title')}
          subtitle={t('production', 'subtitle')}
          delay={400}
        />

        <div className="relative mb-20">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6"
              style={{ 
                transform: `translateX(${dir === 'rtl' ? productionSlide * (100 / cardsPerView) : -productionSlide * (100 / cardsPerView)}%)`
              }}
            >
              {production.map((item, index) => (
                <div key={item.key} className="flex-shrink-0" style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 1.5 / cardsPerView}rem)` }}>
                  <ServiceCardStyle3 service={item} index={index} type="production" />
                </div>
              ))}
            </div>
          </div>
          
          <SliderControls
            current={productionSlide}
            total={Math.ceil(production.length / cardsPerView)}
            onPrev={() => setProductionSlide(prev => Math.max(0, prev - 1))}
            onNext={() => setProductionSlide(prev => Math.min(Math.ceil(production.length / cardsPerView) - 1, prev + 1))}
          />
        </div>

        {/* Enhanced CTA Section */}
        <div className={`mt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=400&fit=crop"
                alt="CTA Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-red-900/90 to-black/95"></div>
            </div>

            {/* Content */}
            <div className="relative px-8 py-16 md:py-20 text-center">
              <div className="max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6">
                  <Sparkles className="w-5 h-5 text-red-500" />
                  <span className="text-white font-medium">
                    {language === 'ar' ? 'ابدأ الآن' : 'Start Now'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
                  {language === 'ar' ? 'جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
                </h3>
                
                {/* Description */}
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  {language === 'ar' 
                    ? 'دعنا نحول رؤيتك إلى واقع مذهل. فريقنا المحترف جاهز لخدمتك'
                    : "Let's turn your vision into an amazing reality. Our professional team is ready to serve you"}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#contact"
                    className="group flex items-center gap-3 bg-red-600 hover:bg-white text-white hover:text-red-600 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl"
                  >
                    <span>{language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a
                    href="tel:+966501234567"
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{language === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-white/20 max-w-2xl mx-auto">
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">500+</div>
                    <div className="text-white/70 text-sm">{language === 'ar' ? 'مشروع ناجح' : 'Successful Projects'}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">15+</div>
                    <div className="text-white/70 text-sm">{language === 'ar' ? 'سنة خبرة' : 'Years Experience'}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-500 mb-2">200+</div>
                    <div className="text-white/70 text-sm">{language === 'ar' ? 'عميل سعيد' : 'Happy Clients'}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}