"use client";

import { motion } from "framer-motion"; 
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, BookOpen, HeartPulse, Globe2, Users, UserPlus } from "lucide-react";
import CountUp from "@/components/react-bits/CountUp"; 

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // الستايل الكرتوني لضمان وضوح النص الأبيض والأصفر فوق أي خلفية
  const cartoonTextStyle = {
    textShadow: `
      3px 3px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000
    `,
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.6 } 
    },
  };

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-white transition-colors duration-500 overflow-hidden" dir="rtl">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-emerald-400/90
        before:absolute before:inset-0 before:opacity-20 before:pointer-events-none 
        before:[background-image:radial-gradient(#fff_1.5px,transparent_1.5px)] 
        before:[background-size:30px_30px]">
        
        {/* طبقة تدرج لوني خفيفة لعمق النقاط */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center text-center"
        >
          {/* العنوان الرئيسي */}
          <motion.div variants={{hidden: {scale: 0.8, opacity: 0}, visible: {scale: 1, opacity: 1, transition: {type: "spring", bounce: 0.5}}}}>
            <h1 
              className="text-6xl md:text-[100px] font-black text-white mb-6 tracking-tight leading-[1.1]"
              style={cartoonTextStyle}
            >
               <span className="text-white">منصة المكتشف</span> الصغير 
            </h1>
          </motion.div>
          
          {/* النص الوصفي */}
          <div className="mb-12 max-w-3xl">
            <p 
              className="text-2xl md:text-4xl text-white font-black leading-relaxed"
              style={cartoonTextStyle}
            >
              المنصة التعليمية الأولى المصممة خصيصاً لتنمية مهارات الأطفال واكتشاف العالم بأمان تام.
            </p>
          </div>

          {/* زر الانضمام */}
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center items-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
<Link 
  href="/login" 
  className="flex items-center gap-4 bg-yellow-400 border-[5px] border-black px-10 py-5 rounded-[2rem] shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all group"
>
  {/* إضافة فيلتر للأيقونة لعمل حدود سوداء حولها */}
  <UserPlus 
    className="w-10 h-10 text-white stroke-[3px]" 
    style={{ 
      filter: "drop-shadow(2px 2px 0px #000) drop-shadow(-1px -1px 0px #000)" 
    }} 
  />

  <span 
    className="text-3xl font-black text-white"
    style={{
      textShadow: `
        2px 2px 0 #000,
        -1px -1px 0 #000,  
         1px -1px 0 #000,
        -1px  1px 0 #000,
         1px  1px 0 #000
      `
    }}
  >
    انضم الآن 
  </span>

  {/* إضافة فيلتر لأيقونة السهم أيضاً */}
  <ArrowLeft 
    className="w-8 h-8 text-white stroke-[3px] group-hover:-translate-x-2 transition-transform" 
    style={{ 
      filter: "drop-shadow(2px 2px 0px #000) drop-shadow(-1px -1px 0px #000)" 
    }}
  />
</Link>
            </motion.div>
          </div>
        </motion.div>

        {/* سهم تلميح للنزول */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-10 h-16 border-[5px] border-black bg-white rounded-full flex justify-center pt-2 shadow-[4px_4px_0_0_#000]">
            <div className="w-3 h-3 bg-black rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* ===================== STATISTICS SECTION ===================== */}
      <section className="relative z-10 w-full bg-white py-24 border-t-8 border-dashed border-yellow-400 before:absolute before:inset-0 before:opacity-5 before:pointer-events-none before:[background-image:radial-gradient(#000_1.5px,transparent_1.5px)] before:[background-size:20px_20px]">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div 
              className="inline-block bg-yellow-400 text-white font-black px-10 py-4 rounded-3xl text-3xl mb-4 border-4 border-black -rotate-1 shadow-[8px_8px_0_0_#000]"
              style={cartoonTextStyle}
            >
               إحصائيات المكتشفين 
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "أب وأم", count: 5000, color: "bg-sky-400", icon: <Users className="w-10 h-10" /> },
              { label: "طفل سعيد", count: 12000, color: "bg-rose-400", icon: <HeartPulse className="w-10 h-10" /> },
              { label: "قصة ممتعة", count: 150, color: "bg-emerald-400", icon: <BookOpen className="w-10 h-10" /> },
              { label: "قارة", count: 7, color: "bg-orange-400", icon: <Globe2 className="w-10 h-10" /> }
            ].map((stat, i) => (
              <div key={i} className={`${stat.color} border-4 border-black p-8 rounded-[2.5rem] shadow-[10px_10px_0_0_#000] text-center transform hover:-translate-y-3 transition-all group`}>
                <div className="bg-white w-20 h-20 rounded-2xl border-4 border-black flex items-center justify-center mx-auto mb-6 -rotate-6 group-hover:rotate-6 transition-transform shadow-[5px_5px_0_0_#000]">
                  <div className="text-black">
                    {stat.icon}
                  </div>
                </div>
                <div 
                  className="text-5xl font-black text-white mb-2 flex justify-center items-center gap-1"
                  style={cartoonTextStyle}
                >
                  +<CountUp to={stat.count} duration={3} />
                </div>
                <p 
                  className="text-white font-black text-2xl"
                  style={cartoonTextStyle}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}