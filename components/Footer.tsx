"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Heart } from "lucide-react";

export default function Footer() {
  // إعدادات الأنيميشن (العناصر تظهر ورا بعض بالترتيب)
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer 
      // تم تغيير لون الخلفية والحدود عشان تتجاوب مع الثيم
      className="bg-white dark:bg-[#020617] text-slate-600 dark:text-slate-300 pt-12 pb-6 border-t border-slate-200 dark:border-white/10 mt-auto overflow-hidden relative transition-colors duration-500" 
      dir="rtl"
    >
      
      {/* إضاءة خفيفة في الأرضية بتدي شكل فخم (دي مناسبة للوضعين) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none" />

      {/* whileInView بتخلي الأنيميشن يشتغل أول ما الفوتر يظهر في الشاشة */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center"
      >
        
        {/* اللوجو والاسم */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
          <div className="bg-gradient-to-br from-sky-400 to-indigo-500 p-2.5 rounded-2xl shadow-lg shadow-sky-500/20">
            <Rocket className="w-7 h-7 text-white" />
          </div>
          {/* لون النص أسود في النهاري وأبيض في الليلي */}
          <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight transition-colors">مكتشف العوالم</span>
        </motion.div>

        {/* وصف سريع */}
        <motion.p variants={itemVariants} className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8 max-w-lg font-medium transition-colors">
          منصة تعليمية ترفيهية بتجمع بين الخيال والتكنولوجيا، عشان طفلك يكتشف العالم بأمان.
        </motion.p>

        {/* روابط سريعة */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 font-bold transition-colors">الرئيسية</Link>
          <Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 font-bold transition-colors">عن المنصة</Link>
          <Link href="/login" className="text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 font-bold transition-colors">بوابة الدخول</Link>
        </motion.div>

        {/* حقوق الملكية */}
        <motion.div variants={itemVariants} className="w-full border-t border-slate-200 dark:border-white/10 pt-6 flex flex-col items-center gap-3 transition-colors">
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} منصة مكتشف العوالم. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm font-bold transition-colors">
            صُنع بحب من أجل مستقبل أطفالنا <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
          </p>
        </motion.div>

      </motion.div>
    </footer>
  );
}