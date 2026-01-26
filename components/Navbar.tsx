'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'projects', href: '#projects' },
    { key: 'certificates', href: '#certificates' },
    { key: 'partners', href: '#partners' },
    { key: 'contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      dir={dir}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-100' 
          : 'bg-gradient-to-r from-gray-50 via-gray-100 to-gray-300 backdrop-blur-md'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-20 blur transition duration-500" />
              <Image
                src="/logo/Company Logo Akeeli.png"
                alt="Company Logo"
                width={180}
                height={65}
                priority
                className="relative drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-blue-800 font-semibold transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 group-hover:text-blue-900 transition-colors duration-300">
                  {t('navbar', item.key)}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent group-hover:w-full group-hover:left-0 transition-all duration-500" />
              </button>
            ))}
          </div>

          {/* Language Toggle - Desktop */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 rounded-xl font-bold hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-yellow-400/50 hover:scale-105 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Globe size={20} className="relative z-10 group-hover:rotate-180 transition-transform duration-500" />
              <span className="relative z-10">{language === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 rounded-lg font-bold shadow-lg shadow-yellow-500/30"
            >
              <Globe size={18} />
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-2xl mb-4 overflow-hidden shadow-2xl border border-yellow-400/20">
            <div className="flex flex-col gap-1 p-4">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-white hover:text-yellow-300 hover:bg-white/5 transition-all duration-300 py-3 px-4 font-semibold rounded-lg ${
                    dir === 'rtl' ? 'text-right' : 'text-left'
                  }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'slideIn 0.3s ease-out forwards'
                  }}
                >
                  {t('navbar', item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}