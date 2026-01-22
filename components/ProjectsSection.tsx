// components/ProjectsSection.tsx
'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ProjectsSection() {
  const { language, t, dir } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: language === 'ar' ? 'الكل' : 'All' },
    { id: 'exhibitions', name: language === 'ar' ? 'معارض' : 'Exhibitions' },
    { id: 'events', name: language === 'ar' ? 'فعاليات' : 'Events' },
    { id: 'festivals', name: language === 'ar' ? 'مهرجانات' : 'Festivals' },
  ];

  const projects = [
    {
      id: 1,
      title: language === 'ar' ? 'معرض الرياض الدولي للكتاب' : 'Riyadh International Book Fair',
      category: 'exhibitions',
      image: '📚',
      description: language === 'ar' ? 'أكبر معرض للكتب في المنطقة' : 'Largest book fair in the region',
      stats: { visitors: '2M+', days: '10', booths: '500+' },
    },
    {
      id: 2,
      title: language === 'ar' ? 'مؤتمر التكنولوجيا السعودي' : 'Saudi Technology Conference',
      category: 'events',
      image: '💻',
      description: language === 'ar' ? 'مؤتمر تقني عالمي المستوى' : 'World-class tech conference',
      stats: { visitors: '5K+', days: '3', booths: '100+' },
    },
    {
      id: 3,
      title: language === 'ar' ? 'مهرجان الرياض للموسيقى' : 'Riyadh Music Festival',
      category: 'festivals',
      image: '🎵',
      description: language === 'ar' ? 'احتفال موسيقي استثنائي' : 'Exceptional music celebration',
      stats: { visitors: '50K+', days: '5', booths: '30+' },
    },
    {
      id: 4,
      title: language === 'ar' ? 'معرض الصناعات الوطنية' : 'National Industries Exhibition',
      category: 'exhibitions',
      image: '🏭',
      description: language === 'ar' ? 'عرض للصناعات المحلية' : 'Showcase of local industries',
      stats: { visitors: '100K+', days: '7', booths: '200+' },
    },
    {
      id: 5,
      title: language === 'ar' ? 'حفل إطلاق المنتج' : 'Product Launch Event',
      category: 'events',
      image: '🚀',
      description: language === 'ar' ? 'إطلاق منتجات مبتكرة' : 'Launch of innovative products',
      stats: { visitors: '1K+', days: '1', booths: '20+' },
    },
    {
      id: 6,
      title: language === 'ar' ? 'مهرجان الطعام العالمي' : 'World Food Festival',
      category: 'festivals',
      image: '🍽️',
      description: language === 'ar' ? 'تجربة طعام عالمية' : 'Global culinary experience',
      stats: { visitors: '80K+', days: '4', booths: '150+' },
    },
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('projects', 'title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            {t('projects', 'subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-64 bg-gradient-to-br from-amber-400 to-amber-600 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-amber-700 px-6 py-3 rounded-full font-semibold flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="w-5 h-5" />
                    <span className={language === 'ar' ? 'mr-2' : 'ml-2'}>{t('projects', 'viewProject')}</span>
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-amber-700">
                  {categories.find(c => c.id === project.category)?.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-600">{project.stats.visitors}</div>
                    <div className="text-xs text-gray-500">{language === 'ar' ? 'زائر' : 'Visitors'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-600">{project.stats.days}</div>
                    <div className="text-xs text-gray-500">{language === 'ar' ? 'أيام' : 'Days'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-amber-600">{project.stats.booths}</div>
                    <div className="text-xs text-gray-500">{language === 'ar' ? 'جناح' : 'Booths'}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center space-x-3 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span className={language === 'ar' ? 'ml-3' : ''}>{t('projects', 'allProjects')}</span>
            {language === 'ar' ? (
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            ) : (
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}