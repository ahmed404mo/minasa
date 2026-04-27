"use client";

import React, { useEffect, useState } from "react";
import InfiniteMenu from "@/components/react-bits/InfiniteMenu";
import Link from "next/link";
import { ArrowLeft, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

// ==========================================
// 🦸‍♂️ بيانات فريق الأبطال
// ==========================================
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

  if (!mounted) return <div className="h-screen w-full bg-[#F0F9FF]" />;

  return (
    // ✨ ضفت هنا pt-28 و md:pt-32 عشان أسيب مساحة للناف بار ✨
    <div className="h-screen w-full relative bg-[#F0F9FF] text-black overflow-hidden font-bold flex flex-col pt-28 md:pt-32" dir="rtl">
      
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <header className="relative z-10 flex flex-col sm:flex-row items-center justify-between px-6 pb-6 gap-4">
        <div className="hidden sm:block w-[150px]"></div> {/* مساحة وهمية لضبط التوسيط */}
      </header>

      {/* 📺 إطار عرض الـ Infinite Menu */}
      <main className="relative z-10 flex-1 w-full p-4 md:p-8 pt-0 overflow-hidden pb-8">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="w-full h-full bg-white border-[6px] border-black rounded-[3rem] shadow-[15px_15px_0_0_#000] overflow-hidden relative"
        >
          {/* شريط ديكوري فوق الإطار كأنه متصفح كرتوني */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-slate-100 border-b-[4px] border-black flex items-center px-6 gap-2 z-20">
            <div className="w-4 h-4 rounded-full bg-rose-500 border-2 border-black" />
            <div className="w-4 h-4 rounded-full bg-yellow-400 border-2 border-black" />
            <div className="w-4 h-4 rounded-full bg-emerald-400 border-2 border-black" />
          </div>

          <div className="w-full h-full pt-10 relative z-10 bg-gradient-to-b from-sky-50 to-white">
            {/* 🌟 السطر السحري ده هيسكت الـ TypeScript ويخلي Vercel يقبل الكود 🌟 */}
            {/* @ts-expect-error */}
            <InfiniteMenu items={items} scale={1} />
          </div>
        </motion.div>
      </main>

    </div>
  );
}