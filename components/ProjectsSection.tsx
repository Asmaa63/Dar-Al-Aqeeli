// components/ProjectsSection.tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsSection() {
  const { t, dir } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  const projects = [
    {
      key: 'aramco',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
      key: 'eidFitr',
      image: 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?w=800&h=600&fit=crop',
    },
    {
      key: 'eidAdha',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    },
    {
      key: 'family',
      image: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop',
    },
    {
      key: 'blackLight',
      image: 'https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=800&h=600&fit=crop',
    },
    {
      key: 'festival',
      image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop',
    },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
      }
      setCurrentIndex(index);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cards = Array.from(container.children) as HTMLElement[];
      const containerLeft = container.scrollLeft;
      const containerCenter = containerLeft + container.clientWidth / 2;
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      
      setCurrentIndex(closestIndex);
    }
  };

  const goToPage = (pageIndex: number) => {
    const targetIndex = pageIndex * itemsPerPage;
    scrollToIndex(targetIndex);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      dir={dir}
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Red glowing orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-red-700/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
        
        {/* Floating red particles */}
        <div className="absolute top-40 left-1/4 w-3 h-3 bg-red-500/40 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-red-400/40 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-red-600/40 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/20 rounded-full animate-bounce" style={{ animationDuration: '6s', animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Title with Animation */}
        {/* Header */}
<div
  className={`text-center mb-16 transition-all duration-1000 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
  }`}
>

  {/* Title */}
  <h2 className="text-4xl md:text-6xl font-black mb-4">
    <span className="bg-gradient-to-r from-white via-red-600 to-white bg-clip-text text-transparent">
      {t('projects', 'title')}
    </span>
  </h2>

  {/* Divider */}
  <div className="flex items-center justify-center gap-3 my-6">
    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
  </div>

  {/* Subtitle */}
  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
    {t('projects', 'subtitle')}
  </p>
</div>


        {/* Projects Slider */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-scroll scrollbar-hide snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.key}
                className={`flex-shrink-0 w-[calc(100%-2rem)] md:w-[calc(33.333%-1rem)] snap-start group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-red-600/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-96 overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={t('projects', `items.${project.key}`) || ''}
                    className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-1000 opacity-80 group-hover:opacity-90"
                  />
                  {/* Red overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Animated red glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-500/0 to-red-600/0 group-hover:from-red-600/20 group-hover:via-red-500/10 group-hover:to-red-600/20 transition-all duration-700"></div>
                </div>

                {/* Content - Centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transform group-hover:scale-105 transition-transform duration-500">
                  <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-4 drop-shadow-2xl font-cairo tracking-wide">
                    {t('projects', `items.${project.key}`)}
                  </h3>
                  
                  {/* Animated line */}
                  <div className="relative w-28 h-1.5 bg-white rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white/0 group-hover:border-white/50 transition-all duration-500 rounded-tl-2xl"></div>
                <div className="absolute bottom-0 righF<style jsx>t-0 w-16 h-16 border-b-4 border-r-4 border-white/0 group-hover:border-white/50 transition-all duration-500 rounded-br-2xl"></div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-br from-red-600 to-red-800 text-white p-4 rounded-full shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 hover:from-red-500 hover:to-red-700 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed border-2 border-white/20 ${dir === 'rtl' ? 'rotate-180' : ''}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(projects.length - 1, currentIndex + 1))}
            disabled={currentIndex >= projects.length - itemsPerPage}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-br from-red-600 to-red-800 text-white p-4 rounded-full shadow-2xl shadow-red-500/50 hover:shadow-red-500/70 hover:from-red-500 hover:to-red-700 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed border-2 border-white/20 ${dir === 'rtl' ? 'rotate-180' : ''}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slideshow Indicators */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            const isActive = Math.floor(currentIndex / itemsPerPage) === pageIndex;
            return (
              <button
                key={pageIndex}
                onClick={() => goToPage(pageIndex)}
                className={`transition-all duration-500 rounded-full border-2 ${
                  isActive 
                    ? 'w-14 h-4 bg-gradient-to-r from-red-600 via-red-500 to-red-600 border-white/50 shadow-lg shadow-red-500/50' 
                    : 'w-4 h-4 bg-white/20 border-white/30 hover:bg-white/40 hover:border-white/50 hover:scale-110'
                }`}
                aria-label={`Go to page ${pageIndex + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}
    </section>
  );
}