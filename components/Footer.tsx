"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  // إعدادات الأنيميشن للظهور التدريجي
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
      className="bg-white text-slate-800 pt-16 pb-8 border-t-8 border-dashed border-yellow-400 mt-auto overflow-hidden relative" 
      dir="rtl"
    >
      {/* خلفية منقطة خفيفة تعطي طابع كرتوني */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 2px, transparent 2px)`,
          backgroundSize: '32px 32px'
        }}>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto px-6 text-center relative z-10 flex flex-col items-center"
      >
        
        {/* اللوجو والاسم بالستايل الكرتوني */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
          <div className="bg-yellow-400 border-4 border-black p-3 rounded-2xl rotate-3 shadow-[5px_5px_0_0_#000]">
             <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
             </div>
          </div>
          <span className="text-4xl font-black text-black tracking-tight">المكتشف الصغير</span>
        </motion.div>

        {/* وصف سريع */}
        <motion.p variants={itemVariants} className="text-slate-600 leading-relaxed text-xl mb-10 max-w-lg font-bold">
          منصة تعليمية ترفيهية تجمع بين الخيال والتكنولوجيا، ليكتشف طفلك العالم بأمان ومرح.
        </motion.p>

        {/* روابط سريعة على شكل أزرار كرتونية */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
          {[
            { name: "الرئيسية", href: "/" },
            { name: "عن المنصة", href: "/about" },
            { name: "بوابة الدخول", href: "/login" }
          ].map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="bg-sky-100 border-4 border-black px-6 py-2 rounded-xl text-black font-black text-lg hover:bg-yellow-400 hover:-translate-y-1 transition-all shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-y-1"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>

        {/* حقوق الملكية بلمسة طفولية */}
        <motion.div variants={itemVariants} className="w-full border-t-4 border-black pt-8 flex flex-col items-center gap-4">
          <div className="bg-white border-2 border-black px-4 py-1 rounded-full font-black text-sm shadow-[3px_3px_0_0_#000]">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </div>
          <p className="text-slate-800 text-lg font-black bg-rose-200 px-6 py-2 rounded-2xl border-4 border-black -rotate-1 shadow-[5px_5px_0_0_#000]">
            صنع بكل حب من أجل مستقبل أطفالنا
          </p>
        </motion.div>

      </motion.div>
    </footer>
  );
}