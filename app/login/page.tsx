"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.5 } 
    },
  };

  if (!mounted) return null;

  return (
    // تم حذف dark:bg-slate-950 من هنا
    <div className="relative min-h-screen w-full flex flex-col bg-[#f0f9ff] overflow-hidden">
      
      {/* ===================== LOGIN SECTION ===================== */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-start pt-48 pb-20 overflow-y-auto bg-[#f0f9ff]
        /* إضافة الخلفية المنقطة */
        before:absolute before:inset-0 before:opacity-20 before:pointer-events-none 
        before:[background-image:radial-gradient(#000_1.5px,transparent_1.5px)] 
        before:[background-size:30px_30px]">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center text-center"
        >
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full max-w-5xl z-20">
            
            {/* كارت عالم الأطفال */}
            <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/kids" className="group relative block rounded-[2.5rem] border-[6px] border-black overflow-hidden shadow-[12px_12px_0_0_#000] transition-all bg-white">
                <div className="h-[240px] md:h-[280px] overflow-hidden relative border-b-[6px] border-black">
                  <img 
                    src="https://res.cloudinary.com/dmuuyiwtr/image/upload/v1775773530/Gemini_Generated_Image_bmv7yrbmv7yrbmv7_fuihqi.png" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt="Kids World" 
                  />
                </div>
                
                <div className="p-8 bg-white">
                  <h2 className="text-4xl font-black text-black mb-2 italic uppercase tracking-tight">عالم الأطفال</h2>
                  <p className="text-slate-600 font-bold mb-6 text-base">استعد لمغامرة مذهلة مليئة بالمرح!</p>
                  
                  <div className="flex items-center justify-center bg-emerald-400 border-[4px] border-black py-4 px-8 rounded-2xl shadow-[6px_6px_0_0_#000] group-hover:bg-emerald-300 transition-all text-2xl font-black text-black">
                    دخول الأبطال
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* كارت بوابة الآباء */}
            <motion.div whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.95 }}>
              <Link href="/parents" className="group relative block rounded-[2.5rem] border-[6px] border-black overflow-hidden shadow-[12px_12px_0_0_#000] transition-all bg-white">
                <div className="h-[240px] md:h-[280px] overflow-hidden relative border-b-[6px] border-black">
                  <img 
                    src="https://res.cloudinary.com/dmuuyiwtr/image/upload/v1775773549/Gemini_Generated_Image_dt0gf7dt0gf7dt0g_r1nfnx.png" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt="Parents Portal" 
                  />
                </div>
                
                <div className="p-8 bg-white">
                  <h2 className="text-4xl font-black text-black mb-2 italic uppercase tracking-tight">بوابة الآباء</h2>
                  <p className="text-slate-600 font-bold mb-6 text-base">أدوات تحكم ذكية لمتابعة رحلة طفلك</p>
                  
                  <div className="flex items-center justify-center bg-sky-400 border-[4px] border-black py-4 px-8 rounded-2xl shadow-[6px_6px_0_0_#000] group-hover:bg-sky-300 transition-all text-2xl font-black text-black">
                    لوحة التحكم
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          <motion.div className="mt-16 mb-10">
            <Link href="/" 
              className="group relative inline-flex items-center bg-yellow-400 border-[4px] border-black px-12 py-4 rounded-full shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <span 
                className="text-2xl font-black text-white"
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
                العودة للرئيسية
              </span>
            </Link>
          </motion.div>

        </motion.div>
      </section>
    </div>
  );
}