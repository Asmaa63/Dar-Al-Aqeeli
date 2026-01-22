// contexts/LanguageContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'ar' | 'en';

interface Translations {
  [key: string]: {
    [key: string]: string | { [key: string]: string };
  };
}

const translations: Record<Language, Translations> = {
  ar: {
    navbar: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      projects: 'مشاريعنا',
      gallery: 'معرض الصور',
      contact: 'تواصل معنا',
    },
    hero: {
      company: 'دار العقيلي',
      subtitle: 'للمعارض والفعاليات والمهرجانات',
      description: 'نصنع تجارب استثنائية لا تُنسى من خلال تنظيم المعارض والفعاليات والمهرجانات بأعلى معايير الجودة والاحترافية',
      cta: 'اكتشف خدماتنا',
      cta2: 'تواصل معنا',
      stats: {
        events: '500+',
        eventsLabel: 'فعالية منظمة',
        clients: '200+',
        clientsLabel: 'عميل راضٍ',
        years: '15+',
        yearsLabel: 'سنة خبرة',
        awards: '30+',
        awardsLabel: 'جائزة وتقدير',
      }
    },
    about: {
      title: 'من نحن',
      subtitle: 'رواد في صناعة الفعاليات',
      description: 'دار العقيلي هي شركة رائدة في مجال تنظيم المعارض والفعاليات والمهرجانات في المنطقة. نمتلك خبرة تمتد لأكثر من 15 عامًا في صناعة الفعاليات، حيث نجمع بين الإبداع والاحترافية لتقديم تجارب فريدة لا تُنسى.',
      mission: 'رسالتنا',
      missionText: 'نسعى لتقديم أفضل الخدمات في تنظيم الفعاليات والمعارض، مع الالتزام بأعلى معايير الجودة والابتكار',
      vision: 'رؤيتنا',
      visionText: 'أن نكون الخيار الأول والأمثل لتنظيم الفعاليات الاستثنائية في المنطقة والعالم العربي',
      values: 'قيمنا',
      valuesText: 'الاحترافية، الإبداع، الالتزام، والتميز في كل ما نقدمه',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'نقدم مجموعة متكاملة من الخدمات',
      exhibitions: {
        title: 'تنظيم المعارض',
        description: 'نصمم وننظم معارض احترافية بكافة أنواعها التجارية والفنية والصناعية بأعلى المعايير العالمية'
      },
      events: {
        title: 'إدارة الفعاليات',
        description: 'من المؤتمرات الكبرى إلى الفعاليات الخاصة، نضمن تنفيذ فعالياتك بكل تفاصيلها بشكل مثالي'
      },
      festivals: {
        title: 'المهرجانات',
        description: 'ننظم مهرجانات ثقافية وترفيهية وموسيقية تترك أثراً لا يُنسى لدى الجمهور'
      },
      production: {
        title: 'الإنتاج الإبداعي',
        description: 'نوفر حلول إنتاج متكاملة من التصميم والديكور إلى الإضاءة والصوتيات'
      },
      marketing: {
        title: 'التسويق والترويج',
        description: 'استراتيجيات تسويقية مبتكرة لضمان نجاح فعاليتك وتحقيق أهدافك'
      },
      consulting: {
        title: 'الاستشارات',
        description: 'نقدم استشارات متخصصة في التخطيط والتنفيذ لجميع أنواع الفعاليات'
      }
    },
    projects: {
      title: 'مشاريعنا',
      subtitle: 'نفخر بما أنجزناه',
      viewProject: 'عرض المشروع',
      allProjects: 'جميع المشاريع',
    },
    gallery: {
      title: 'معرض الصور',
      subtitle: 'لحظات من إبداعاتنا',
      viewAll: 'عرض الكل',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن هنا لمساعدتك',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      message: 'رسالتك',
      send: 'إرسال',
      address: 'العنوان',
      addressText: 'المملكة العربية السعودية، الرياض',
      followUs: 'تابعنا',
    },
    footer: {
      description: 'دار العقيلي - شريكك الموثوق في صناعة الفعاليات الاستثنائية',
      quickLinks: 'روابط سريعة',
      services: 'خدماتنا',
      rights: '© 2024 دار العقيلي. جميع الحقوق محفوظة.',
    }
  },
  en: {
    navbar: {
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      projects: 'Our Projects',
      gallery: 'Gallery',
      contact: 'Contact Us',
    },
    hero: {
      company: 'Dar Al-Aqeeli',
      subtitle: 'For Exhibitions, Events & Festivals',
      description: 'Creating exceptional and unforgettable experiences through organizing exhibitions, events and festivals with the highest standards of quality and professionalism',
      cta: 'Discover Our Services',
      cta2: 'Contact Us',
      stats: {
        events: '500+',
        eventsLabel: 'Events Organized',
        clients: '200+',
        clientsLabel: 'Happy Clients',
        years: '15+',
        yearsLabel: 'Years of Experience',
        awards: '30+',
        awardsLabel: 'Awards & Recognition',
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Pioneers in Event Management',
      description: 'Dar Al-Aqeeli is a leading company in organizing exhibitions, events and festivals in the region. We have over 15 years of experience in the events industry, combining creativity and professionalism to deliver unique and unforgettable experiences.',
      mission: 'Our Mission',
      missionText: 'We strive to provide the best services in event and exhibition management, committed to the highest standards of quality and innovation',
      vision: 'Our Vision',
      visionText: 'To be the first and best choice for organizing exceptional events in the region and the Arab world',
      values: 'Our Values',
      valuesText: 'Professionalism, creativity, commitment, and excellence in everything we deliver',
    },
    services: {
      title: 'Our Services',
      subtitle: 'We offer a complete range of services',
      exhibitions: {
        title: 'Exhibition Organization',
        description: 'We design and organize professional exhibitions of all types - commercial, artistic and industrial - to the highest international standards'
      },
      events: {
        title: 'Event Management',
        description: 'From major conferences to private events, we ensure your events are executed perfectly in every detail'
      },
      festivals: {
        title: 'Festivals',
        description: 'We organize cultural, entertainment and music festivals that leave an unforgettable impression on the audience'
      },
      production: {
        title: 'Creative Production',
        description: 'We provide comprehensive production solutions from design and decoration to lighting and sound'
      },
      marketing: {
        title: 'Marketing & Promotion',
        description: 'Innovative marketing strategies to ensure your event succeeds and achieves your goals'
      },
      consulting: {
        title: 'Consulting',
        description: 'We provide specialized consulting in planning and execution for all types of events'
      }
    },
    projects: {
      title: 'Our Projects',
      subtitle: 'Proud of what we have accomplished',
      viewProject: 'View Project',
      allProjects: 'All Projects',
    },
    gallery: {
      title: 'Gallery',
      subtitle: 'Moments from our creations',
      viewAll: 'View All',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you',
      name: 'Name',
      email: 'Email',
      phone: 'Phone Number',
      message: 'Your Message',
      send: 'Send',
      address: 'Address',
      addressText: 'Saudi Arabia, Riyadh',
      followUs: 'Follow Us',
    },
    footer: {
      description: 'Dar Al-Aqeeli - Your trusted partner in exceptional event management',
      quickLinks: 'Quick Links',
      services: 'Our Services',
      rights: '© 2024 Dar Al-Aqeeli. All rights reserved.',
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key: string) => any;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
      setLanguageState(savedLang);
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (section: string, key: string): any => {
    return translations[language]?.[section]?.[key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}