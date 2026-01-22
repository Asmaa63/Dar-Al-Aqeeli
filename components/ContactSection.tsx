// components/ContactSection.tsx
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
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-950 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-800/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact', 'title')}
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('contact', 'subtitle')}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className={`group bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-red-600/50 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-600 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-red-600 transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Map or Additional Info */}
        <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.0859969147!2d39.034919!3d21.485811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}