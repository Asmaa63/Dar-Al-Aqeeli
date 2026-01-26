'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionHeader from './SectionHeader';
import ServicesSlider from './ServicesSlider';


export default function ServicesSection() {
  const { t, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    sectionRef.current && observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      dir={dir}
      className="py-24 bg-blue-50"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          title={t('services', 'title')}
          subtitle={t('services', 'subtitle')}
          isVisible={isVisible}
        />

        <ServicesSlider
          items={[]}
          type="services"
          t={t}
          dir={dir}
          isVisible={isVisible}
          cardsPerView={cardsPerView}
        />

        <SectionHeader
          title={t('entertainment', 'title')}
          subtitle={t('entertainment', 'subtitle')}
          isVisible={isVisible}
          delay={200}
        />

        <ServicesSlider
          items={[]}
          type="entertainment"
          t={t}
          dir={dir}
          isVisible={isVisible}
          cardsPerView={cardsPerView}
        />
      </div>
    </section>
  );
}
