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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo/Company Logo Akeeli.png"
              alt="Company Logo"
              width={140}
              height={50}
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-red-600 transition-colors duration-300 font-medium whitespace-nowrap"
              >
                {t('navbar', item.key)}
              </button>
            ))}
          </div>

          {/* Language Toggle - Desktop */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 font-medium"
            >
              <Globe size={18} />
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded text-sm"
            >
              <Globe size={16} />
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-lg rounded-lg mb-4 overflow-hidden">
            <div className="flex flex-col gap-2 p-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-white hover:text-red-600 transition-colors duration-300 py-2 font-medium ${
                    dir === 'rtl' ? 'text-right' : 'text-left'
                  }`}
                >
                  {t('navbar', item.key)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
