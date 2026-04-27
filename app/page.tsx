"use client";

import { motion } from "framer-motion"; 
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, Gamepad2, ShieldCheck, BookOpen, HeartPulse, Globe2, Users, Stars, UserPlus, Eye } from "lucide-react";

import CountUp from "@/components/react-bits/CountUp"; 

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartoonTextStyle = {
    textShadow: `
      4px 4px 0 #000,
      -1px -1px 0 #000,  
       1px -1px 0 #000,
      -1px  1px 0 #000,
       1px  1px 0 #000,
       0px 10px 20px rgba(0,0,0,0.3)
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
    <div className="relative min-h-screen w-full flex flex-col bg-[#f0f9ff] dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="/backk.png" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center text-center"
        >
          {/* العنوان الرئيسي */}
          <motion.div variants={{hidden: {scale: 0.8, opacity: 0}, visible: {scale: 1, opacity: 1, transition: {type: "spring", bounce: 0.5}}}}>
            <h1 
              className="text-6xl md:text-[110px] font-black text-white mb-6 tracking-tight leading-[1.1]"
              style={cartoonTextStyle}
            >
              منصة <span className="text-yellow-400">المكتشف</span> الصغير
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

          {/* ===================== BUTTONS SECTION ===================== */}
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-center items-center">
            {/* زر تسجيل جديد */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/login" className="flex items-center gap-3 bg-yellow-400 border-[5px] border-black px-10 py-5 rounded-full shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                <UserPlus className="w-8 h-8 text-black" />
                <span className="text-3xl font-black text-black">انضم الآن مجاناً</span>
                <ArrowLeft className="w-6 h-6 text-black" />
              </Link>
            </motion.div>

            {/* زر معاينة المنصة */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/kids" className="flex items-center gap-3 bg-white border-[5px] border-black px-10 py-5 rounded-full shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                <Eye className="w-8 h-8 text-sky-600" />
                <span className="text-3xl font-black text-slate-800">جولة سريعة</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* سهم تلميح للنزول لتحت */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
        >
          <div className="w-8 h-12 border-4 border-black rounded-full flex justify-center pt-2">
            <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* ===================== STATISTICS SECTION ===================== */}
      <section className="relative z-10 w-full bg-white py-24 border-t-8 border-dashed border-yellow-300 before:absolute before:inset-0 before:opacity-10 before:pointer-events-none before:[background-image:radial-gradient(#000_1.5px,transparent_1.5px)] before:[background-size:20px_20px]">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-yellow-400 text-black font-black px-8 py-3 rounded-full text-2xl mb-4 border-4 border-black rotate-2 shadow-[5px_5px_0_0_#000]">
               إحصائيات المكتشفين 
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: "أب وأم", count: 5000, color: "bg-sky-400", icon: <Users className="w-8 h-8" /> },
              { label: "طفل سعيد", count: 12000, color: "bg-rose-400", icon: <HeartPulse className="w-8 h-8" /> },
              { label: "قصة ممتعة", count: 150, color: "bg-emerald-400", icon: <BookOpen className="w-8 h-8" /> },
              { label: "قارة", count: 7, color: "bg-orange-400", icon: <Globe2 className="w-8 h-8" /> }
            ].map((stat, i) => (
              <div key={i} className={`${stat.color} border-4 border-black p-8 rounded-[2rem] shadow-[8px_8px_0_0_#000] text-center transform hover:-translate-y-2 transition-transform`}>
                <div className="bg-white w-16 h-16 rounded-2xl border-4 border-black flex items-center justify-center mx-auto mb-4 -rotate-6 shadow-[4px_4px_0_0_#000]">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-black mb-1 flex justify-center items-center gap-1">
                  +<CountUp to={stat.count} duration={3} />
                </div>
                <p className="text-black font-black text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}