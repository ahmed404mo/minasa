// app/layout.tsx
import type { Metadata } from 'next';
import { Baloo_Bhaijaan_2, Geist } from 'next/font/google';
import './globals.css';
import ClickSpark from '@/components/react-bits/ClickSpark';
import LayoutWrapper from '@/components/LayoutWrapper';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import ChatBot from '@/components/ChatBot';

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
      <body suppressHydrationWarning className={`${baloo.className} bg-background text-foreground antialiased overflow-x-hidden flex flex-col min-h-screen transition-colors duration-500`}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClickSpark>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
            <ChatBot />
          </ClickSpark>
        </ThemeProvider>

      </body>
    </html>
  );
}