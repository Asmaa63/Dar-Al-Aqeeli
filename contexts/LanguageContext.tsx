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
      projects: 'أعمالنا',
      certificates: 'الشهادات',
      partners: 'شركاء النجاح',
      contact: 'تواصل معنا',
    },
    hero: {
      company: 'دار العقيلي',
      crew: 'Crew',
      subtitle: 'للمعارض والفعاليات والمهرجانات',
      description: 'شركة Crew إحدى مجموعات شركة دار العقيلي. وهي شركة سعودية رائدة في مجال إدارة وتنظيم وتجهيز المعارض والفعاليات في المملكة العربية السعودية',
      cta: 'اكتشف المزيد',
      cta2: 'تواصل معنا',
      stats: {
        events: '500+',
        eventsLabel: 'فعالية منظمة',
        clients: '300+',
        clientsLabel: 'عميل راضي',
        years: '4+',
        yearsLabel: 'سنوات خبرة',
      }
    },
    about: {
      title: 'من نحن',
      subtitle: 'شركة رائدة في صناعة الفعاليات',
      description: 'شركة Crew إحدى مجموعات شركة دار العقيلي. وهي شركة سعودية رائدة في مجال إدارة وتنظيم وتجهيز المعارض والفعاليات في المملكة العربية السعودية.',
      description2: 'تقدم مختلف خدمات إدارة الفعاليات بشتى أنواعها من خلال الكوادر والخبرات ذات الكفاءة العالية لتحقيق مستويات جودة عالمية.',
      founded: 'تأسست عام 2020م بقيادة فريق عمل من شباب وشابات طموحين لديهم الخبرات الكافية لتنظيم وإدارة الفعاليات الترفيهية والإبداعية المؤثرة في تحقيق أهداف العملاء.',
      vision: 'رؤيتنا',
      visionText: 'تقديم مجموعة من الحلول والخدمات الخاصة بإدارة وإنتاج الفعاليات لعملائنا بطريقة محترفة ومبتكرة تترك أثراً يتحدث عنه الآخرون لسنوات قادمة.',
      values: 'القيم',
      valuesText: 'نسعى للتعامل مع عملائنا بالاحترام ودمجه بالصدق وأخلاقيات الأعمال التجارية في جميع جوانب أداء الأعمال لدينا.',
    },
    services: {
      title: 'خدماتنا',
      subtitle: 'نقدم مجموعة متكاملة من الخدمات الاحترافية',
      items: {
        equipment: {
          title: 'معدات الصوت والإضاءة',
          desc: 'أحدث معدات الصوت والإضاءة والمسارح والشاشات العملاقة'
        },
        openings: {
          title: 'حملات الافتتاح',
          desc: 'إعداد حملات الافتتاح وتوزيع الجوائز'
        },
        characters: {
          title: 'الشخصيات الكرتونية',
          desc: 'تصميم وتصنيع الشخصيات الكرتونية'
        },
        events: {
          title: 'إدارة الفعاليات',
          desc: 'إدارة وتنظيم الفعاليات والمهرجانات وتوريد العروض العالمية'
        },
        exhibitions: {
          title: 'تنظيم المعارض',
          desc: 'التنظيم والتنفيذ الكامل للمعارض'
        },
        games: {
          title: 'ألعاب الإثارة',
          desc: 'ألعاب الإثارة والتحدي تستهدف شرائح عمرية مختلفة'
        },
        booths: {
          title: 'تصميم البوثات',
          desc: 'تصميم بوثات الفعاليات والمهرجانات بطريقة احترافية'
        },
        carnival: {
          title: 'ألعاب الكرنفال',
          desc: 'تصميم حديث يلبي احتياجات الزوار'
        }
      }
    },
    entertainment: {
      title: 'العروض الترفيهية',
      subtitle: 'تجارب استثنائية لا تُنسى',
      items: {
        lights: {
          title: 'النور والظلال',
          desc: 'حركة بصرية ممتعة تنقل الجمهور إلى عوالم من السحر والألوان باستخدام تقنية الأضواء السوداء'
        },
        pantomime: {
          title: 'عروض البانتومايم',
          desc: 'فن التمثيل الصامت بطريقة إيحائية غاية في الإتقان'
        },
        vr: {
          title: 'الواقع الافتراضي',
          desc: 'أحدث المعدات لألعاب الواقع الافتراضي المليئة بالمغامرات'
        },
        carnival: {
          title: 'القافلات الكرنفالية',
          desc: 'قوافل احترافية تضم عروض الفولكلور والشخصيات الكرتونية ولاعبي النار'
        },
        heritage: {
          title: 'القرية التراثية',
          desc: 'تجسيد المناطق التراثية للمملكة العربية السعودية'
        },
        circus: {
          title: 'عرض السيرك المصغر',
          desc: 'فقرات شيقة ومثيرة تعتمد على الابتكار البصري والحركات الرائعة'
        },
        facePainting: {
          title: 'رسام المكياج',
          desc: 'رسم الوجوه بطريقة احترافية ومبتكرة'
        },
        balloons: {
          title: 'رسام البالونات',
          desc: 'شخصيات مهرجة تصنع تصاميم مميزة من البالونات'
        },
        magic: {
          title: 'عروض الماجيك',
          desc: 'عروض سحرية مثيرة ومشوقة مع أفضل الساحرين'
        }
      }
    },
    production: {
      title: 'الإنتاج والتجهيز',
      subtitle: 'حلول متكاملة للإنتاج',
      items: {
        sound: {
          title: 'أنظمة صوتية',
          desc: 'تجهيز الأنظمة الصوتية والإضاءة والمسارح والتصوير'
        },
        stage: {
          title: 'تجهيز المسرح',
          desc: 'أحدث التجهيزات للمسارح والأنظمة الصوتية والإضاءة'
        },
        media: {
          title: 'الإنتاج الإعلامي',
          desc: 'تصميم وإنتاج الإعلانات التلفزيونية بفريق محترف'
        }
      }
    },
    projects: {
      title: 'بعض من أعمالنا',
      subtitle: 'مشاريع نفخر بها',
      items: {
        aramco: 'يوم الموظف - أرامكو',
        eidFitr: 'عيد الفطر',
        eidAdha: 'عيد الأضحى',
        family: 'يوم عائلة ياسرف',
        blackLight: 'عرض الضوء الأسود',
        festival: 'مهرجان الصيف'
      }
    },
    certificates: {
      title: 'الشهادات والتراخيص',
      subtitle: 'معتمدون ومرخصون',
    },
    partners: {
      title: 'شركاء النجاح',
      subtitle: 'نفخر بشراكتنا مع',
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نسعد بتواصلكم',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      address: 'العنوان',
      addressText: 'جدة، المملكة العربية السعودية',
    },
    footer: {
      description: 'شركة سعودية رائدة في مجال إدارة وتنظيم المعارض والفعاليات',
      rights: 'جميع الحقوق محفوظة',
      quickLinks: 'روابط سريعة',
    }
  },
  en: {
    navbar: {
      home: 'Home',
      about: 'About Us',
      services: 'Our Services',
      projects: 'Our Work',
      certificates: 'Certificates',
      partners: 'Partners',
      contact: 'Contact Us',
    },
    hero: {
      company: 'Dar Al-Akeeli',
      crew: 'Crew',
      subtitle: 'For Exhibitions, Events & Festivals',
      description: 'Crew Company is one of Dar Al-Akeeli Group companies. A leading Saudi company in managing, organizing and equipping exhibitions and events in the Kingdom of Saudi Arabia',
      cta: 'Discover More',
      cta2: 'Contact Us',
      stats: {
        events: '500+',
        eventsLabel: 'Events Organized',
        clients: '300+',
        clientsLabel: 'Happy Clients',
        years: '4+',
        yearsLabel: 'Years of Experience',
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Leading Company in Events Industry',
      description: 'Crew Company is one of Dar Al-Akeeli Group companies. A leading Saudi company in managing, organizing and equipping exhibitions and events in the Kingdom of Saudi Arabia.',
      description2: 'We provide various event management services through highly qualified teams and expertise to achieve world-class quality standards.',
      founded: 'Founded in 2020, led by a team of ambitious young professionals with sufficient experience to organize and manage creative entertainment events that achieve client goals.',
      vision: 'Our Vision',
      visionText: 'To provide a range of solutions and services for managing and producing events for our clients in a professional and innovative way that leaves a lasting impact for years to come.',
      values: 'Values',
      valuesText: 'We strive to treat our clients with respect and integrity, combining honesty and business ethics in all aspects of our business performance.',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Complete Range of Professional Services',
      items: {
        equipment: {
          title: 'Sound & Lighting Equipment',
          desc: 'Latest sound, lighting, stage and giant screen equipment'
        },
        openings: {
          title: 'Opening Campaigns',
          desc: 'Preparing opening campaigns and prize distribution'
        },
        characters: {
          title: 'Cartoon Characters',
          desc: 'Design and manufacture of cartoon characters'
        },
        events: {
          title: 'Event Management',
          desc: 'Managing events, festivals and supplying international shows'
        },
        exhibitions: {
          title: 'Exhibition Organization',
          desc: 'Complete organization and execution of exhibitions'
        },
        games: {
          title: 'Thrill Games',
          desc: 'Exciting and challenging games targeting different age groups'
        },
        booths: {
          title: 'Booth Design',
          desc: 'Professional event and festival booth design'
        },
        carnival: {
          title: 'Carnival Games',
          desc: 'Modern design meeting visitor needs'
        }
      }
    },
    entertainment: {
      title: 'Entertainment Shows',
      subtitle: 'Exceptional Unforgettable Experiences',
      items: {
        lights: {
          title: 'Light & Shadow',
          desc: 'Visual spectacle transporting audiences to worlds of magic and colors using black light technology'
        },
        pantomime: {
          title: 'Pantomime Shows',
          desc: 'Silent acting art performed with perfect suggestive technique'
        },
        vr: {
          title: 'Virtual Reality',
          desc: 'Latest VR equipment full of adventures'
        },
        carnival: {
          title: 'Carnival Caravans',
          desc: 'Professional caravans featuring folklore, cartoon characters and fire performers'
        },
        heritage: {
          title: 'Heritage Village',
          desc: 'Embodying Saudi Arabia\'s heritage areas'
        },
        circus: {
          title: 'Mini Circus Show',
          desc: 'Exciting acts based on visual innovation and spectacular movements'
        },
        facePainting: {
          title: 'Face Painting',
          desc: 'Professional and innovative face painting'
        },
        balloons: {
          title: 'Balloon Artist',
          desc: 'Clown characters creating unique balloon designs'
        },
        magic: {
          title: 'Magic Shows',
          desc: 'Exciting magical shows with top magicians'
        }
      }
    },
    production: {
      title: 'Production & Setup',
      subtitle: 'Complete Production Solutions',
      items: {
        sound: {
          title: 'Sound Systems',
          desc: 'Setup of sound, lighting, stages and photography systems'
        },
        stage: {
          title: 'Stage Setup',
          desc: 'Latest equipment for stages, sound and lighting systems'
        },
        media: {
          title: 'Media Production',
          desc: 'Design and production of TV commercials with professional team'
        }
      }
    },
    projects: {
      title: 'Some of Our Work',
      subtitle: 'Projects We\'re Proud Of',
      items: {
        aramco: 'Employee Day - Aramco',
        eidFitr: 'Eid Al-Fitr',
        eidAdha: 'Eid Al-Adha',
        family: 'Yasref Family Day',
        blackLight: 'Black Light Show',
        festival: 'Summer Festival'
      }
    },
    certificates: {
      title: 'Certificates & Licenses',
      subtitle: 'Certified & Licensed',
    },
    partners: {
      title: 'Success Partners',
      subtitle: 'Proud to Partner With',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d Love to Hear From You',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      addressText: 'Jeddah, Kingdom of Saudi Arabia',
    },
    footer: {
      description: 'A leading Saudi company in managing and organizing exhibitions and events',
      rights: 'All Rights Reserved',
      quickLinks: 'Quick Links',
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key: string) => string;
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

  const t = (section: string, key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language]?.[section];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === 'string' ? value : key;
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