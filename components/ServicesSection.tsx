'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { Mic, Lightbulb, Users, Calendar, Building, Gamepad2, Store, Tent, Sparkles, Music, Video, ChevronLeft, ChevronRight, ArrowRight, Phone } from 'lucide-react';

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
    <div className="flex items-center justify-center gap-6 mt-10">
      <button
        onClick={onPrev}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:from-yellow-400 hover:to-yellow-600 hover:text-blue-900 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110"
        aria-label="Previous"
      >
        {dir === 'rtl' ? <ChevronRight className="w-7 h-7" /> : <ChevronLeft className="w-7 h-7" />}
      </button>
      
      <div className="flex gap-3">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-3 rounded-full transition-all duration-300 ${
              i === current ? 'w-12 bg-gradient-to-r from-yellow-400 to-yellow-600' : 'w-3 bg-blue-300'
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={onNext}
        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-white hover:from-yellow-400 hover:to-yellow-600 hover:text-blue-900 transition-all duration-300 flex items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-110"
        aria-label="Next"
      >
        {dir === 'rtl' ? <ChevronLeft className="w-7 h-7" /> : <ChevronRight className="w-7 h-7" />}
      </button>
    </div>
  );

  // Enhanced Card Style with Blue/Yellow theme
  const ServiceCard = ({ service, index, type }: any) => {
    const Icon = service.icon;
    return (
      <div
        className={`group relative h-full transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Card */}
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 h-full border-2 border-transparent hover:border-yellow-400">
          {/* Image Section */}
          <div className="relative h-64 overflow-hidden">
            <img
              src={service.image}
              alt={t(type, `items.${service.key}.title`)}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent"></div>
            
            {/* Icon Badge */}
            <div className="absolute top-6 left-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
              <Icon className="w-8 h-8 text-blue-900" />
            </div>
            
            {/* Emoji */}
            <div className="absolute top-6 right-6 text-5xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">
              {service.emoji}
            </div>

            {/* Title on Image */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-black text-white mb-2 drop-shadow-lg">
                {t(type, `items.${service.key}.title`)}
              </h3>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 bg-gradient-to-br from-white to-blue-50/50">
            <p className="text-blue-900 leading-relaxed font-medium">
              {t(type, `items.${service.key}.desc`)}
            </p>

            {/* Bottom Accent Bar */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex-1 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full" />
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
            </div>
          </div>

          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-yellow-400/20 to-transparent rounded-bl-3xl" />
        </div>
      </div>
    );
  };

  const SectionHeader = ({ title, subtitle, delay = 0 }: any) => (
    <div 
      className={`text-center mb-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative inline-block">
        <h2 className="text-5xl md:text-5xl  font-black mb-4">
          <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 bg-clip-text text-transparent drop-shadow-lg">
            {title}
          </span>
        </h2>
        
        {/* Decorative Lines */}
        <div className="absolute -left-16 top-1/2 w-12 h-1 bg-gradient-to-r from-transparent to-yellow-400 hidden lg:block" />
        <div className="absolute -right-16 top-1/2 w-12 h-1 bg-gradient-to-l from-transparent to-yellow-400 hidden lg:block" />
      </div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 my-8">
        <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-600 to-blue-600 rounded-full" />
        <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
        <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full animate-pulse shadow-lg shadow-blue-600/50" style={{ animationDelay: '0.3s' }} />
        <div className="w-16 h-1 bg-gradient-to-l from-transparent via-blue-600 to-blue-600 rounded-full" />
      </div>

      <p className="text-xl md:text-2xl text-blue-800 max-w-3xl mx-auto font-semibold">
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
      className="py-24 bg-gradient-to-br from-blue-50 via-white to-yellow-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Services */}
        <SectionHeader 
          title={t('services', 'title')}
          subtitle={t('services', 'subtitle')}
        />

        <div className="relative mb-24">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-8"
              style={{ 
                transform: `translateX(${dir === 'rtl' ? servicesSlide * (100 / cardsPerView) : -servicesSlide * (100 / cardsPerView)}%)`
              }}
            >
              {services.map((service, index) => (
                <div key={service.key} className="flex-shrink-0" style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 2 / cardsPerView}rem)` }}>
                  <ServiceCard service={service} index={index} type="services" />
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

        {/* Entertainment */}
        <SectionHeader 
          title={t('entertainment', 'title')}
          subtitle={t('entertainment', 'subtitle')}
          delay={200}
        />

        <div className="relative mb-24">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-8"
              style={{ 
                transform: `translateX(${dir === 'rtl' ? entertainmentSlide * (100 / cardsPerView) : -entertainmentSlide * (100 / cardsPerView)}%)`
              }}
            >
              {entertainment.map((item, index) => (
                <div key={item.key} className="flex-shrink-0" style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 2 / cardsPerView}rem)` }}>
                  <ServiceCard service={item} index={index} type="entertainment" />
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

        {/* Production */}
        <SectionHeader 
          title={t('production', 'title')}
          subtitle={t('production', 'subtitle')}
          delay={400}
        />

        <div className="relative mb-24">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out gap-8"
              style={{ 
                transform: `translateX(${dir === 'rtl' ? productionSlide * (100 / cardsPerView) : -productionSlide * (100 / cardsPerView)}%)`
              }}
            >
              {production.map((item, index) => (
                <div key={item.key} className="flex-shrink-0" style={{ width: `calc(${100 / cardsPerView}% - ${(cardsPerView - 1) * 2 / cardsPerView}rem)` }}>
                  <ServiceCard service={item} index={index} type="production" />
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
        <div className={`mt-24 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Background */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=400&fit=crop"
                alt="CTA Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-800/90 to-blue-900/95" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

            {/* Content */}
            <div className="relative px-8 py-20 md:py-24 text-center">
              <div className="max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full px-8 py-3 mb-8 shadow-2xl">
                
                  <span className="text-blue-900 font-black text-lg">
                    {language === 'ar' ? 'ابدأ الآن' : 'Start Now'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black text-white mb-6 drop-shadow-2xl">
                  {language === 'ar' ? 'جاهز لبدء مشروعك؟' : 'Ready to Start Your Project?'}
                </h3>
                
                {/* Description */}
                <p className="text-xl md:text-2xl text-yellow-200 mb-12 max-w-2xl mx-auto font-semibold">
                  {language === 'ar' 
                    ? 'دعنا نحول رؤيتك إلى واقع مذهل. فريقنا المحترف جاهز لخدمتك'
                    : "Let's turn your vision into an amazing reality. Our professional team is ready to serve you"}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                  <a
                    href="#contact"
                    className="group flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-blue-900 px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50"
                  >
                    <span>{language === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                  
                  <a
                    href="tel:+966501234567"
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-md hover:bg-white hover:text-blue-900 text-white border-2 border-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl"
                  >
                    <Phone className="w-6 h-6" />
                    <span>{language === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
                  </a>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-12 pt-12 border-t-2 border-yellow-400/30 max-w-3xl mx-auto">
                  <div className="group">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
                    <div className="text-white/80 font-semibold">{language === 'ar' ? 'مشروع ناجح' : 'Successful Projects'}</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">15+</div>
                    <div className="text-white/80 font-semibold">{language === 'ar' ? 'سنة خبرة' : 'Years Experience'}</div>
                  </div>
                  <div className="group">
                    <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">200+</div>
                    <div className="text-white/80 font-semibold">{language === 'ar' ? 'عميل سعيد' : 'Happy Clients'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}