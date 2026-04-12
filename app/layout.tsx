// app/layout.tsx
import type { Metadata } from 'next';
import { Baloo_Bhaijaan_2, Geist } from 'next/font/google';
import './globals.css';
import ClickSpark from '@/components/react-bits/ClickSpark';
import LayoutWrapper from '@/components/LayoutWrapper';
import { cn } from "@/lib/utils";

// استيراد الـ Providers والزرار
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const baloo = Baloo_Bhaijaan_2({ 
  subsets: ['arabic'], 
  weight: ['400', '500', '600', '700', '800'] 
});

export const metadata: Metadata = {
  title: 'رحلتنا حول القارات 🌍',
  description: 'منصة تعليمية ممتعة وتفاعلية للأطفال لاستكشاف العالم!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      {/* 1. ضفنا suppressHydrationWarning للـ body كمان.
        2. غيرنا bg-sky-50 text-slate-800 لـ bg-background text-foreground عشان الألوان تتغير لوحدها.
      */}
      <body suppressHydrationWarning className={`${baloo.className} bg-background text-foreground antialiased overflow-x-hidden flex flex-col min-h-screen transition-colors duration-500`}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClickSpark>
            
            {/* حاوية الزرار الثابتة (Fixed) فوق على الشمال عشان ميتعارضش مع اللوجو اللي غالباً على اليمين */}
            {/* <div className="fixed top-4 left-4 z-[9999]">
              <ThemeToggle />
            </div> */}

            {/* الـ LayoutWrapper هو اللي هيقرر يظهر الـ Navbar والـ Footer ولا لأ */}
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
            
          </ClickSpark>
        </ThemeProvider>

      </body>
    </html>
  );
}