'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
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

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact', 'phone'),
      value: '+966 12 6145565',
      link: 'tel:+966126145565',
    },
    {
      icon: Mail,
      title: t('contact', 'email'),
      value: 'Crew@akeeligroup.com',
      link: 'mailto:Crew@akeeligroup.com',
    },
    {
      icon: MapPin,
      title: t('contact', 'address'),
      value: t('contact', 'addressText'),
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      dir={dir}
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl md:text-5xl  font-black mb-6">
            <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent drop-shadow-2xl">
              {t('contact', 'title')}
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400 rounded-full" />
            <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg shadow-yellow-400/50" />
            <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" style={{ animationDelay: '0.3s' }} />
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-yellow-400 to-yellow-400 rounded-full" />
          </div>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-semibold">
            {t('contact', 'subtitle')}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-yellow-400">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6 group-hover:from-yellow-400 group-hover:to-yellow-600 transition-all duration-500 shadow-xl transform group-hover:rotate-12 group-hover:scale-110">
                      <Icon className="w-10 h-10 text-white group-hover:text-blue-900 transition-colors duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-blue-900 mb-4">
                      {info.title}
                    </h3>

                    {/* Value */}
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-blue-700 hover:text-yellow-600 transition-colors duration-300 font-semibold text-lg"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-blue-700 font-semibold text-lg">{info.value}</p>
                    )}
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-yellow-400/0 group-hover:border-yellow-400 rounded-tr-3xl transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-blue-600/0 group-hover:border-blue-600 rounded-bl-3xl transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Map */}
        <div className={`max-w-3xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Map Container */}
            <div className="relative bg-white rounded-3xl p-4 shadow-2xl border-2 border-transparent group-hover:border-yellow-400 transition-all duration-500">
              <div className="aspect-video bg-blue-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.0859969147!2d39.034919!3d21.485811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-yellow-400/0 group-hover:border-yellow-400 rounded-tl-3xl transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-yellow-400/0 group-hover:border-yellow-400 rounded-br-3xl transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}