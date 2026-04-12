"use client";

import Navbar from "./Navbar"; 
import Footer from "./Footer"; 
import { usePathname } from "next/navigation";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // فحص إذا كان المسار الحالي يبدأ بـ /kids
  const isKidsPage = pathname.startsWith("/kids");

  // لو إحنا في صفحات الأطفال، هنرجع المحتوى فقط بدون Navbar أو Footer
  if (isKidsPage) {
    return (
      <main className="flex-grow">
        {children}
      </main>
    );
  }

  // في باقي الصفحات، يظهر الناف بار والفوتر بشكل طبيعي
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}