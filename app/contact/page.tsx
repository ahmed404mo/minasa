"use client";

import React, { useEffect, useState } from "react";
import InfiniteMenu from "@/components/react-bits/InfiniteMenu";
import { ThemeToggle } from "@/components/ThemeToggle"; // استيراد الزرار لو حابب تظهره هنا

// الداتا بتاعتك زي ما هي
const items = [
  {
    title: 'أشرقت نصر',
    description: 'ashrakatnasr45@gmail.com',
    link: 'mailto:ashrakatnasr45@gmail.com',
    image: 'https://res.cloudinary.com/dhvuw8yog/image/upload/v1775004406/2_lkdlpp.jpg'
  },
  {
    title: 'أسماء نصر',
    description: 'asmaashoaab@gmail.com',
    link: 'mailto:asmaashoaab@gmail.com',
    image: 'https://res.cloudinary.com/dhvuw8yog/image/upload/v1775004406/3_bnlron.jpg'
  },
  {
    title: 'أميرة أشرف',
    description: 'marmarkhalil71@gmail.com',
    link: 'mailto:marmarkhalil71@gmail.com',
    image: 'https://res.cloudinary.com/dhvuw8yog/image/upload/v1775004406/4_ftvqz8.jpg'
  },
  {
    title: 'أحمد مختار',
    description: 'mo879938@gmail.com',
    link: 'mailto:mo879938@gmail.com',
    image: 'https://res.cloudinary.com/dhvuw8yog/image/upload/v1772039113/1_r2kgbb.jpg'
  },
  {
    title: "آلاء أحمد شحات",
    description: "alaaahmed53290@gmail.com",
    link: "mailto:alaaahmed53290@gmail.com",
    image: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1775048851/WhatsApp_Image_2026-04-01_at_3.22.49_AM_uyisnv.jpg",
  },
  {
    title: "إسراء أبو بكر",
    description: "esraabakry248@gmail.com",
    link: "mailto:esraabakry248@gmail.com",
    image: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1775047813/WhatsApp_Image_2026-04-01_at_3.28.23_AM_z6yrvx.jpg",
  },
  {
    title: "أفنان سمير",
    description: "Afnan.samir87@gmail.com",
    link: "mailto:Afnan.samir87@gmail.com",
    image: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1775047813/WhatsApp_Image_2026-04-01_at_3.42.15_AM_pkz3zx.jpg",
  },
  {
    title: "أسماء حسام",
    description: "asmoahossam@gmail.com",
    link: "mailto:asmoahossam@gmail.com",
    image: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1775048772/WhatsApp_Image_2026-04-01_at_5.21.44_AM_mihtym.jpg",
  },
  {
    title: "أفنان عادل",
    description: "afnanadel444@gmail.com",
    link: "mailto:afnanadel444@gmail.com",
    image: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1775047813/WhatsApp_Image_2026-04-01_at_10.03.02_AM_eawevw.jpg",
  },
  {
    title: "الاء طلعت",
    description: "alaatallat9@gmail.com",
    link: "mailto:alaatallat9@gmail.com",
    image: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1775047813/WhatsApp_Image_2026-04-01_at_10.28.47_AM_ahvntf.jpg",
  },
  {
    title: "أميرة سيد",
    description: "Amirasayde09@gmail.com",
    link: "mailto:Amirasayde09@gmail.com",
    image: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1775047812/WhatsApp_Image_2026-04-01_at_1.33.23_PM_hg0a5g.jpg",
  },
  {
    title: 'أحمد وليد',
    description: 'mo879938@gmail.com',
    link: 'mailto:mo879938@gmail.com',
    image: 'https://res.cloudinary.com/dhvuw8yog/image/upload/v1775048956/8d743852-508b-44e7-a3df-2b26646adf72.png'
  }
];

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  // حل مشكلة الهيدريشن
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-screen w-full bg-background" />;

  return (
    <div className="h-screen w-full relative bg-sky-50 dark:bg-[#020617] transition-colors duration-500 overflow-hidden">
      
      {/* الـ Toggle لو محتاج تجربه في الصفحة دي تحديداً */}
      {/* <div className="absolute top-6 left-6 z-[999]">
        <ThemeToggle />
      </div> */}

      <InfiniteMenu items={items} scale={1} />
    </div>
  );
}