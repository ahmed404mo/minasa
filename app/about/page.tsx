"use client";

import Link from "next/link";
import { 
  ShieldCheck, 
  Sparkles, 
  BrainCircuit, 
  HeartHandshake, 
  Globe2,
  ArrowLeft,
  Star,
  Rocket,
  Trophy,
  Palette,
  Music
} from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

// ==========================================
// إعدادات الأنيميشن
// ==========================================
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5, y: 50 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

// ==========================================
// المكون الكرتوني مع الخلفية المنقطة داخل الكرت
// ==========================================
interface BentoCardProps {
  className?: string;
  children: ReactNode;
  bgColor?: string;
}

const CartoonBentoCard = ({ className = "", children, bgColor = "bg-white" }: BentoCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10, rotate: 1, scale: 1.02 }}
      className={`h-full ${className}`}
    >
      <div className={`relative h-full w-full rounded-[3rem] border-[6px] border-black shadow-[15px_15px_0_0_#000] overflow-hidden ${bgColor} transition-all duration-300`}>
        
        {/* النقاط المنقطة الداخلية للكارت (Polka Dots) */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#000 2px, transparent 2px)`,
            backgroundSize: '20px 20px'
          }}
        />

        <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const [floatingStars, setFloatingStars] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    // نجوم عائمة
    const stars = Array.from({ length: 20 }, () => ({
      id: Math.random(),
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
      size: 6 + Math.random() * 15
    }));
    setFloatingStars(stars);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full bg-[#F0F9FF] text-black overflow-x-hidden font-bold" dir="rtl">
      
      {/* نجوم متحركة */}
      {floatingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute pointer-events-none z-0"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <Star className="w-full h-full text-yellow-300 fill-yellow-300" />
        </motion.div>
      ))}

      {/* دوائر خلفية */}
      <div className="fixed inset-0 z-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#000 1.5px, transparent 1.5px)`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="fixed top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full border-4 border-black -z-10 opacity-40 blur-xl" />
      <div className="fixed bottom-20 right-10 w-48 h-48 bg-pink-300 rounded-full border-4 border-black -z-10 opacity-40 blur-xl" />
      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-sky-300 rounded-full border-4 border-black -z-10 opacity-30 blur-xl" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-44 pb-20">
        
        {/* الهيدر - نزل لتحت */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <header className="bg-white border-[6px] border-black rounded-[3.5rem] p-10 md:p-14 shadow-[20px_20px_0_0_#000] mb-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-right w-full md:w-3/5">
              <div className="inline-flex items-center gap-2 bg-yellow-400 border-[3px] border-black px-4 py-1 rounded-full mb-6 shadow-[4px_4px_0_0_#000]">
                <Sparkles className="w-5 h-5 text-black" />
                <span className="text-sm font-black text-black">مرحباً يا بطل</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black mb-6 italic leading-none drop-shadow-[5px_5px_0_#38bdf8]">
                حكاية <span className="text-black">منصتنا</span>
              </h1>
              <p className="text-xl md:text-2xl font-black text-black/70 leading-tight">
                إحنا مش بس موقع، إحنا <span className="bg-emerald-300 px-3 border-2 border-black rounded-lg text-black shadow-[3px_3px_0_0_#000]">مغامرة</span> لكل بطل صغير
              </p>
            </div>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
              <img src="/backk.png" className="w-56 md:w-72 object-contain opacity-20 contrast-200" alt="background" />
            </motion.div>
          </header>
        </motion.div>

        {/* شبكة الكروت المنقطة */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          
          {/* كارد العالم - كبير */}
          <div className="md:col-span-8">
            <CartoonBentoCard bgColor="bg-gradient-to-br from-sky-400 to-blue-500">
              <div className="bg-white border-[4px] border-black w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-[8px_8px_0_0_#000]">
                <Globe2 className="w-10 h-10 text-sky-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">العالم بين إيديهم</h2>
              <p className="text-xl md:text-2xl font-bold text-white/90 leading-relaxed">
                مهمتنا إننا ناخد طفلك في رحلة سحرية لكل قارة، يشوف معالمها ويلعب ألعابها ويعرف ثقافتها كأنه سافر بجد
              </p>
              <div className="mt-4">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
                  <Rocket className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-black">7 قارات سحرية</span>
                </div>
              </div>
            </CartoonBentoCard>
          </div>

          {/* كارد الأمان */}
          <div className="md:col-span-4">
            <CartoonBentoCard bgColor="bg-gradient-to-br from-emerald-400 to-green-500">
              <div className="bg-white border-[4px] border-black w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-[6px_6px_0_0_#000]">
                <ShieldCheck className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-black mb-3 text-white">أمان تام</h2>
              <p className="text-base font-bold text-white/90 leading-relaxed">
                بيئة مقفولة وآمنة تماماً خالية من أي إعلانات مزعجة
              </p>
              <div className="mt-auto pt-4">
                <div className="flex items-center gap-1 text-white/80 text-sm">
                  <Star className="w-3 h-3 fill-white" />
                  <span>ثقة الآباء</span>
                </div>
              </div>
            </CartoonBentoCard>
          </div>

          {/* كارد تعليم ذكي */}
          <div className="md:col-span-4">
            <CartoonBentoCard bgColor="bg-gradient-to-br from-purple-400 to-purple-600">
              <div className="bg-white border-[4px] border-black w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-[6px_6px_0_0_#000]">
                <BrainCircuit className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">تعليم ذكي</h3>
              <p className="text-sm md:text-base font-bold text-white/80">ألعاب بتفهم طفلك وبتنمي ذكاءه وهو بيستمتع</p>
            </CartoonBentoCard>
          </div>

          {/* كارد ثقة الآباء */}
          <div className="md:col-span-4">
            <CartoonBentoCard bgColor="bg-gradient-to-br from-rose-400 to-rose-600">
              <div className="bg-white border-[4px] border-black w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-[6px_6px_0_0_#000]">
                <HeartHandshake className="w-7 h-7 text-rose-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">ثقة الآباء</h3>
              <p className="text-sm md:text-base font-bold text-white/80">تقارير سهلة عشان تتابع تطور البطل الصغير لحظة بلحظة</p>
            </CartoonBentoCard>
          </div>

          {/* كارد التحديات والجوائز */}
          <div className="md:col-span-4">
            <CartoonBentoCard bgColor="bg-gradient-to-r from-yellow-400 to-orange-500">
              <div className="bg-white border-[4px] border-black w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-[6px_6px_0_0_#000]">
                <Trophy className="w-7 h-7 text-yellow-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-black">تحديات وجوائز</h3>
              <p className="text-sm md:text-base font-bold text-black/80">كل إنجاز بيعمله الطفل ليه مكافأة تشجعه يكمل</p>
            </CartoonBentoCard>
          </div>

          {/* كارد الإبداع */}
          <div className="md:col-span-4">
            <CartoonBentoCard bgColor="bg-gradient-to-br from-indigo-400 to-indigo-600">
              <div className="bg-white border-[4px] border-black w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-[6px_6px_0_0_#000]">
                <Palette className="w-7 h-7 text-indigo-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">إبداع بلا حدود</h3>
              <p className="text-sm md:text-base font-bold text-white/80">رسم، تلوين، وقصص تفاعلية تنمي خيال الطفل</p>
            </CartoonBentoCard>
          </div>

          {/* كارد المرح */}
          <div className="md:col-span-4">
            <CartoonBentoCard bgColor="bg-gradient-to-br from-pink-400 to-pink-600">
              <div className="bg-white border-[4px] border-black w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-[6px_6px_0_0_#000]">
                <Music className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">أغاني ومرح</h3>
              <p className="text-sm md:text-base font-bold text-white/80">أغاني تعليمية وأناشيد ممتعة يحبها الأطفال</p>
            </CartoonBentoCard>
          </div>

          {/* كارد البداية - كبير */}
          <div className="md:col-span-12">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-black border-[6px] border-black rounded-[3rem] p-1 text-white shadow-[20px_20px_0_0_#fbbf24]"
            >
              <div className="bg-gradient-to-r from-black to-slate-800 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-right">
                  <motion.div
                    animate={{ y: [0, -10, 0], rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block mb-4"
                  >
                    <Rocket className="w-16 h-16 text-yellow-400" />
                  </motion.div>
                  <h2 className="text-4xl md:text-5xl font-black italic mb-3 text-white">جاهز تبدأ الرحلة؟</h2>
                  <p className="text-xl md:text-2xl font-bold text-white/70">انضم لعيلة المكتشفين الصغار دلوقتي</p>
                </div>
                <Link href="/login">
                  <motion.button 
                    whileHover={{ scale: 1.08, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-[4px] border-black px-10 md:px-14 py-5 md:py-6 rounded-[2rem] text-2xl md:text-3xl font-black shadow-[10px_10px_0_0_#fff] flex items-center gap-3 transition-all"
                  >
                    يالا بينا <ArrowLeft size={32} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* نص سفلي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-black font-black transition-colors">
            <ArrowLeft className="w-5 h-5" />
            العودة للصفحة الرئيسية
          </Link>
        </motion.div>

      </main>
    </div>
  );
}