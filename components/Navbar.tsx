// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar', 'home'), href: '#home' },
    { name: t('navbar', 'about'), href: '#about' },
    { name: t('navbar', 'services'), href: '#services' },
    { name: t('navbar', 'projects'), href: '#projects' },
    { name: t('navbar', 'gallery'), href: '#gallery' },
    { name: t('navbar', 'contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'ar' ? 'en' : 'ar');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">دع</span>
              </div> */}
              <div className={`${language === 'en' ? 'ml-3' : 'mr-3'}`}>
                <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                  {t('hero', 'company')}
                </h1>
                <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-white/90'}`}>
                  {language === 'ar' ? 'للمعارض والفعاليات' : 'Events & Exhibitions'}
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-amber-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                } ${language === 'ar' ? 'mr-8' : ''}`}
              >
                {link.name}
              </a>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                scrolled
                  ? 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  : 'border-white/30 text-white hover:bg-white/10'
              } ${language === 'ar' ? 'mr-8' : ''}`}
            >
              <Globe className="w-4 h-4" />
              <span className={`text-sm font-medium ${language === 'ar' ? 'mr-2' : 'ml-2'}`}>
                {language === 'ar' ? 'EN' : 'عربي'}
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className={`p-2 rounded-lg ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-lg">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-lg transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}