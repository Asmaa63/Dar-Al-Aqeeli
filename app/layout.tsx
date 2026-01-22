// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Cairo, Tajawal, Almarai } from 'next/font/google';

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '900'],
  variable: '--font-cairo'
});

const tajawal = Tajawal({ 
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-tajawal'
});
const almarai = Almarai({ 
  subsets: ['arabic'],
  weight: ['400', '700', '800'],
  variable: '--font-almarai'
});

export const metadata: Metadata = {
  title: 'دار العقيلي | Crew - للمعارض والفعاليات والمهرجانات',
  description: 'شركة سعودية رائدة في مجال إدارة وتنظيم وتجهيز المعارض والفعاليات في المملكة العربية السعودية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable} ${almarai.variable}`}>
      <body className="font-cairo">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}