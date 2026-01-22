// components/Footer.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const { language, t, dir } = useLanguage();

  const quickLinks = [
    { name: t('navbar', 'home'), href: '#home' },
    { name: t('navbar', 'about'), href: '#about' },
    { name: t('navbar', 'services'), href: '#services' },
    { name: t('navbar', 'projects'), href: '#projects' },
  ];

  const services = [
    { name: t('services', 'exhibitions').title, href: '#services' },
    { name: t('services', 'events').title, href: '#services' },
    { name: t('services', 'festivals').title, href: '#services' },
    { name: t('services', 'consulting').title, href: '#services' },
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', name: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, url: '#', name: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Twitter, url: '#', name: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Linkedin, url: '#', name: 'LinkedIn', color: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" dir={dir}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">دع</span>
              </div> */}
              <div className={language === 'ar' ? 'mr-3' : ''}>
                <h3 className="text-2xl font-bold">{t('hero', 'company')}</h3>
                <p className="text-sm text-gray-400">
                  {language === 'ar' ? 'للمعارض والفعاليات' : 'Events & Exhibitions'}
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              {t('footer', 'description')}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className={`w-5 h-5 text-amber-500 ${language === 'ar' ? 'ml-3' : ''}`} />
                <span className="text-gray-300">+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`w-5 h-5 text-amber-500 ${language === 'ar' ? 'ml-3' : ''}`} />
                <span className="text-gray-300">info@daraqeeli.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className={`w-5 h-5 text-amber-500 ${language === 'ar' ? 'ml-3' : ''}`} />
                <span className="text-gray-300">{t('contact', 'addressText')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              {t('footer', 'quickLinks')}
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-amber-500"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className={`w-1.5 h-1.5 bg-amber-500 rounded-full ${language === 'ar' ? 'ml-2' : ''}`}></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              {t('footer', 'services')}
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-amber-500"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className={`w-1.5 h-1.5 bg-amber-500 rounded-full ${language === 'ar' ? 'ml-2' : ''}`}></span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-12 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center ${social.color} transition-all duration-300 transform hover:scale-110 ${language === 'ar' ? 'ml-4' : ''}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-2 text-gray-400">
              <span>{language === 'ar' ? 'صنع بكل' : 'Made with'}</span>
              <Heart className={`w-5 h-5 text-red-500 ${language === 'ar' ? 'mx-1' : ''}`} />
              <span>{language === 'ar' ? 'في السعودية' : 'in Saudi Arabia'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            {t('footer', 'rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}