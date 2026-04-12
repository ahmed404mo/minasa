"use client";

// import { motion } from "framer-motion";
import Link from "next/link";
import { 
  ShieldCheck, 
  Sparkles, 
  BrainCircuit, 
  HeartHandshake, 
  Globe2,
  ArrowLeft
} from "lucide-react";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import LightRays from "@/components/react-bits/LightRays";

// ==========================================
// 🚀 إعدادات الأنيميشن
// ==========================================
const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
    }
  }
};

const cardVariants :Variants= {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 }
  }
};

// ==========================================
// 🪄 المكون السحري (بعد توضيح الصور) 🪄
// ==========================================
interface BentoCardProps {
  className?: string;
  children: ReactNode;
  glowColor?: string;
  bgImage?: string;
}

const MagicBentoCard = ({ className = "", children, glowColor = "from-sky-500 to-indigo-500", bgImage }: BentoCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      className={`h-full ${className}`}
    >
      <div className="relative h-full w-full group/card rounded-[2.5rem] p-[2px] overflow-hidden transition-all duration-500 group-hover/bento:grayscale group-hover/bento:opacity-50 hover:!grayscale-0 hover:!opacity-100 hover:scale-[1.03] hover:z-10">
        
        <div className={`absolute inset-0 bg-gradient-to-br ${glowColor} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-[2.5rem] z-0`} />
        
        {/* خلينا الخلفية الأساسية أشف شوية (bg-opacity-80) عشان تدي مساحة للصورة */}
        <div className="relative h-full w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.4rem] p-8 border border-slate-200 dark:border-white/10 group-hover/card:border-transparent transition-colors duration-500 overflow-hidden flex flex-col z-10">
          
          {bgImage && (
            <>
              {/* 1. رفعنا وضوح الصورة لـ 60% في العادي و 100% في الـ Hover */}
              <img 
                src={bgImage} 
                alt="background" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-70 group-hover/card:opacity-100 transition-opacity duration-500 z-0"
              />
              {/* 2. خلينا التدرج شفاف من فوق عشان تفاصيل الصورة تبان، وموجود بس تحت عشان يحمي قراءة النص */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent dark:from-slate-950/95 dark:via-slate-900/50 dark:to-transparent z-0 transition-colors duration-500" />
            </>
          )}

          <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${glowColor} rounded-full blur-[80px] opacity-20 group-hover/card:opacity-40 transition-opacity duration-700 z-0`} />
          
          <div className="relative z-10 flex-1 flex flex-col">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// 📄 صفحة "عن المنصة" (About Us) 📄
// ==========================================
export default function AboutPage() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-x-hidden selection:bg-sky-500/30 transition-colors duration-500" dir="rtl">
      
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50 dark:opacity-80 transition-opacity duration-500">
        <LightRays />
      </div>

      <div className="fixed top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-24 md:py-32">
        
        {/* الهيدر */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 mb-6 shadow-lg backdrop-blur-md transition-colors duration-500"
          >
            <Sparkles className="w-5 h-5 text-sky-500 dark:text-sky-400" />
            <span className="text-sm font-bold text-slate-700 dark:text-sky-200 tracking-wider transition-colors">مكتشف العوالم</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 drop-shadow-lg leading-tight text-slate-900 dark:text-white transition-colors"
          >
            إحنا بنبني <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-sky-400 dark:to-indigo-400">المستقبل</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed drop-shadow-md transition-colors"
          >
            منصة تعليمية ترفيهية بتجمع بين الخيال والتكنولوجيا، عشان نخلق بيئة آمنة وذكية لطفلك يكتشف فيها العالم وهو بيلعب.
          </motion.p>
        </div>

        {/* 🍱 شبكة الكروت 🍱 */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-6 max-w-6xl mx-auto group/bento"
        >
          
          <MagicBentoCard 
            className="md:col-span-2 md:row-span-2" 
            glowColor="from-sky-400 to-blue-600" 
            bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="bg-sky-100 dark:bg-sky-500/30 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-sky-200 dark:border-sky-400/50 shadow-inner transition-colors">
                <Globe2 className="w-8 h-8 text-sky-600 dark:text-sky-300" />
              </div>
              <div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 drop-shadow-md transition-colors">العالم بين إيديهم</h2>
                <p className="text-slate-700 dark:text-slate-200 text-lg md:text-xl leading-loose font-medium max-w-md drop-shadow-md transition-colors">
                  مهمتنا مش بس إننا نعلم الأطفال الجغرافيا والتاريخ، إحنا بناخدهم في رحلة سحرية لكل قارة، يشوفوا معالمها، يلعبوا بألعابها، ويعرفوا ثقافتها كأنهم سافروا بجد. بنكسر حدود التعليم التقليدي!
                </p>
              </div>
            </div>
          </MagicBentoCard>

          <MagicBentoCard 
            className="md:col-span-1 md:row-span-2" 
            glowColor="from-emerald-400 to-teal-500" 
            bgImage="https://static.sayidaty.net/2026-01/471936.jpg?VersionId=nN1xqpTDaVOtkIEvLP8Uu0doqijk.QJw"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="bg-emerald-100 dark:bg-emerald-500/30 backdrop-blur-md w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-emerald-200 dark:border-emerald-400/50 shadow-inner transition-colors">
                <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-300" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 drop-shadow-md transition-colors">أمان 100%</h2>
                <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed font-medium drop-shadow-md transition-colors">
                  بيئة مقفولة تماماً خالية من الإعلانات والمحتوى المزعج. بوابة خاصة للآباء لمتابعة كل خطوة بيخطيها البطل الصغير.
                </p>
              </div>
            </div>
          </MagicBentoCard>

          <MagicBentoCard 
            className="md:col-span-1 md:row-span-1" 
            glowColor="from-purple-400 to-fuchsia-500" 
            bgImage="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"
          >
            <div className="flex flex-col justify-center h-full">
              <div className="bg-purple-100 dark:bg-purple-500/30 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-purple-200 dark:border-purple-400/50 transition-colors">
                <BrainCircuit className="w-6 h-6 text-purple-600 dark:text-purple-300" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 drop-shadow-md transition-colors">تعليم ذكي</h3>
              <p className="text-slate-700 dark:text-slate-200 font-medium drop-shadow-sm transition-colors">تكنولوجيا بتفهم الطفل وبتتفاعل معاه.</p>
            </div>
          </MagicBentoCard>

          <MagicBentoCard 
            className="md:col-span-1 md:row-span-1" 
            glowColor="from-rose-400 to-orange-500" 
            bgImage="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=800&auto=format&fit=crop"
          >
            <div className="flex flex-col justify-center h-full">
              <div className="bg-rose-100 dark:bg-rose-500/30 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4 border border-rose-200 dark:border-rose-400/50 transition-colors">
                <HeartHandshake className="w-6 h-6 text-rose-600 dark:text-rose-300" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 drop-shadow-md transition-colors">ثقة الآباء</h3>
              <p className="text-slate-700 dark:text-slate-200 font-medium drop-shadow-sm transition-colors">تقارير لحظية عشان تفرح بنجاحات طفلك.</p>
            </div>
          </MagicBentoCard>

          <MagicBentoCard 
            className="md:col-span-2 md:row-span-1" 
            glowColor="from-yellow-400 to-amber-500" 
          >
            <div className="h-full flex items-center justify-around text-center">
              <div>
                <div className="text-4xl md:text-6xl font-black text-amber-500 dark:text-yellow-400 mb-2 drop-shadow-md transition-colors">7</div>
                <div className="text-slate-600 dark:text-slate-200 font-bold text-lg transition-colors">قارات للاستكشاف</div>
              </div>
              <div className="w-px h-20 bg-slate-200 dark:bg-white/10 transition-colors" />
              <div>
                <div className="text-4xl md:text-6xl font-black text-amber-500 dark:text-yellow-400 mb-2 drop-shadow-md transition-colors">+50</div>
                <div className="text-slate-600 dark:text-slate-200 font-bold text-lg transition-colors">لعبة تفاعلية</div>
              </div>
              <div className="w-px h-20 bg-slate-200 dark:bg-white/10 hidden sm:block transition-colors" />
              <div className="hidden sm:block">
                <div className="text-4xl md:text-6xl font-black text-amber-500 dark:text-yellow-400 mb-2 drop-shadow-md transition-colors">100%</div>
                <div className="text-slate-600 dark:text-slate-200 font-bold text-lg transition-colors">متعة وتعليم</div>
              </div>
            </div>
          </MagicBentoCard>

          <MagicBentoCard 
            className="md:col-span-2 md:row-span-1" 
            glowColor="from-indigo-500 to-cyan-400" 
          >
            <div className="h-full flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-3 drop-shadow-md transition-colors">جاهز تبدأ الرحلة؟ 🚀</h2>
                <p className="text-slate-600 dark:text-sky-100 font-medium text-lg transition-colors">خلي طفلك ينضم لآلاف الأبطال المكتشفين.</p>
              </div>
              <Link href="/login" className="shrink-0">
                <button className="bg-indigo-600 text-white dark:bg-white dark:text-indigo-950 px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-[0_0_30px_rgba(99,102,241,0.4)] dark:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                  يالا بينا <ArrowLeft className="w-6 h-6" />
                </button>
              </Link>
            </div>
          </MagicBentoCard>

        </motion.div>
      </div>
    </div>
  );
}