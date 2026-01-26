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
      className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-40 left-1/4 w-3 h-3 bg-yellow-400/60 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute top-60 right-1/3 w-2 h-2 bg-yellow-300/60 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-blue-300/60 rounded-full animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-5xl  font-black mb-6">
            <span className="bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent drop-shadow-2xl">
              {t('projects', 'title')}
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 my-8">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
            <div className="w-4 h-4 bg-white rounded-full animate-pulse shadow-lg shadow-white/50" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent via-yellow-400 to-yellow-400 rounded-full"></div>
          </div>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto font-semibold">
            {t('projects', 'subtitle')}
          </p>
        </div>

        {/* Projects Slider */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-8 overflow-x-scroll scrollbar-hide snap-x snap-mandatory pb-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <div
                key={project.key}
                className={`flex-shrink-0 w-[calc(100%-2rem)] md:w-[calc(33.333%-1.5rem)] snap-start group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:-translate-y-4 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-blue-600/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Card */}
                <div className="relative h-[450px] overflow-hidden bg-white border-2 border-transparent group-hover:border-yellow-400 rounded-3xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-full">
                    <img
                      src={project.image}
                      alt={t('projects', `items.${project.key}`) || ''}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/60 to-transparent"></div>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/0 group-hover:from-yellow-400/20 group-hover:via-blue-500/10 group-hover:to-yellow-400/20 transition-all duration-700"></div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-4 drop-shadow-2xl">
                        {t('projects', `items.${project.key}`)}
                      </h3>
                      
                      {/* Animated line */}
                      <div className="relative w-32 h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-white/0 group-hover:border-yellow-400 transition-all duration-500 rounded-tl-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-white/0 group-hover:border-yellow-400 transition-all duration-500 rounded-br-3xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scrollToIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gradient-to-br from-yellow-400 to-yellow-600 text-blue-900 p-5 rounded-2xl shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-400/70 hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed ${dir === 'rtl' ? 'rotate-180' : ''}`}
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(projects.length - 1, currentIndex + 1))}
            disabled={currentIndex >= projects.length - itemsPerPage}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gradient-to-br from-yellow-400 to-yellow-600 text-blue-900 p-5 rounded-2xl shadow-2xl shadow-yellow-500/50 hover:shadow-yellow-400/70 hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed ${dir === 'rtl' ? 'rotate-180' : ''}`}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-4 mt-12">
          {Array.from({ length: totalPages }).map((_, pageIndex) => {
            const isActive = Math.floor(currentIndex / itemsPerPage) === pageIndex;
            return (
              <button
                key={pageIndex}
                onClick={() => goToPage(pageIndex)}
                className={`transition-all duration-500 rounded-full ${
                  isActive 
                    ? 'w-16 h-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg shadow-yellow-500/50' 
                    : 'w-4 h-4 bg-white/30 hover:bg-white/60 hover:scale-110'
                }`}
                aria-label={`Go to page ${pageIndex + 1}`}
              />
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}