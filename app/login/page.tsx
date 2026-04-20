"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { UserCog, Baby, ArrowRight, Lock, Mail, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import TiltedCard from "@/components/react-bits/TiltedCard";
import ShinyText from "@/components/react-bits/ShinyText";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<"kids" | "parents">("kids");
  const router = useRouter();

  const handleKidsLogin = () => {
    router.push("/kids");
  };

  const handleParentsLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/parents");
  };

  return (
    <div className="relative min-h-screen w-full flex justify-center pt-24 pb-12 px-4 sm:px-6 overflow-hidden transition-colors duration-500" dir="rtl">
      
      {/* 🎬 فيديو الخلفية (الخريطة) 🎬 */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 scale-105"
      >
        <source src="/back.mp4" type="video/mp4" />
      </video>

      {/* 🌟 تعديل: طبقة شفافة تتجاوب مع الوضعين */}
      <div className="absolute inset-0 bg-white/20 dark:bg-slate-950/70 backdrop-blur-md z-0 transition-colors duration-500"></div>

      {/* 📝 كارت تسجيل الدخول الاحترافي 📝 */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
        // 🌟 تعديل: لون الكارت الرئيسي
        className="relative z-10 max-w-[1100px] w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row border border-white/50 dark:border-slate-700 min-h-[650px] transition-colors duration-500"
      >
        
        {/* ========================================== */}
        {/* القائمة الجانبية (Sidebar) - هتحتفظ بشكلها الغامق */}
        {/* ========================================== */}
        <div className="w-full md:w-[35%] bg-gradient-to-br from-sky-950 via-indigo-950 to-slate-900 p-10 flex flex-col justify-center gap-6 relative overflow-hidden">
          
          <div className="absolute -right-24 -top-24 w-72 h-72 bg-sky-500 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-pulse"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
          
          <div className="z-10 mb-8">
            <h2 className="text-4xl font-black text-white drop-shadow-md mb-2 flex items-center gap-3">
              بوابة الدخول <Sparkles className="w-6 h-6 text-sky-400" />
            </h2>
            <p className="text-sky-200/80 font-medium">اختار مسارك عشان تبدأ الرحلة</p>
          </div>
          
          <div className="flex flex-col gap-4 z-10">
            <motion.button 
              whileHover={{ scale: 1.03, x: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab("kids")}
              // 🌟 تعديل: شكل الزرار النشط في الوضع المظلم
              className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 border-2 ${
                activeTab === "kids" 
                ? 'bg-white dark:bg-slate-800 text-sky-950 dark:text-white border-white dark:border-sky-500 shadow-xl' 
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className={`p-2 rounded-xl ${activeTab === "kids" ? 'bg-sky-100 dark:bg-sky-500/20' : 'bg-slate-800'}`}>
                <Baby className={`w-8 h-8 ${activeTab === "kids" ? 'dark:text-sky-400' : ''}`} />
              </div>
              <span className="text-2xl font-black tracking-tight">دخول الأبطال</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03, x: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab("parents")}
              className={`flex items-center gap-4 p-5 rounded-2xl transition-all duration-300 border-2 ${
                activeTab === "parents" 
                ? 'bg-white dark:bg-slate-800 text-sky-950 dark:text-white border-white dark:border-sky-500 shadow-xl' 
                : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className={`p-2 rounded-xl ${activeTab === "parents" ? 'bg-sky-100 dark:bg-sky-500/20' : 'bg-slate-800'}`}>
                <UserCog className={`w-8 h-8 ${activeTab === "parents" ? 'dark:text-sky-400' : ''}`} />
              </div>
              <span className="text-2xl font-black tracking-tight">دخول الآباء</span>
            </motion.button>
          </div>
        </div>

        {/* ========================================== */}
        {/* مساحة الفورم (Right Content Area) */}
        {/* ========================================== */}
        {/* 🌟 تعديل: خلفية الفورم */}
        <div className="w-full md:w-[65%] p-10 md:p-16 flex items-center justify-center relative bg-white/40 dark:bg-slate-950/40 transition-colors duration-500">
          <AnimatePresence mode="wait">
            
            {activeTab === "kids" ? (
              // 🧒 === فورم دخول الأطفال === 🧒
              <motion.div 
                key="kids-form" 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="text-center w-full max-w-md"
              >
                {/* 🌟 تعديل: الأيقونة */}
                <div className="bg-emerald-50 dark:bg-emerald-900/30 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner border-[6px] border-white dark:border-slate-800 transition-colors duration-500">
                  <ShieldCheck className="w-16 h-16 text-emerald-500 dark:text-emerald-400 drop-shadow-sm" />
                </div>
                {/* 🌟 تعديل: النصوص */}
                <h3 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-4 tracking-tight transition-colors duration-500">جاهز للمغامرة؟ </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-12 text-xl font-medium leading-relaxed transition-colors duration-500">
                  عالم مليان ألعاب وفيديوهات ومفاجآت مستنيك تكتشفه!
                </p>
                
                <TiltedCard>
                  <button 
                    onClick={handleKidsLogin}
                    className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white text-3xl font-black py-6 px-10 rounded-[2rem] shadow-[0_10px_0_rgb(13,148,136)] dark:shadow-[0_10px_0_rgb(15,118,110)] active:shadow-none active:translate-y-[10px] transition-all flex items-center justify-center gap-4 group border-4 border-white/50 dark:border-white/10"
                  >
                    <PlayCircle className="w-10 h-10 group-hover:scale-110 transition-transform" />
                    يلا بينا!
                  </button>
                </TiltedCard>
              </motion.div>

            ) : (
              // 👨‍👩‍👧 === فورم دخول الآباء === 👨‍👩‍👧
              <motion.div 
                key="parents-form" 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="w-full max-w-md"
              >
                <div className="mb-10">
                  {/* 🌟 تعديل: النصوص */}
                  <h3 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-3 tracking-tight transition-colors duration-500">مرحباً بك مجدداً</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-lg transition-colors duration-500">سجل دخولك لمتابعة رحلة طفلك التعليمية.</p>
                </div>
                
                <form onSubmit={handleParentsLogin} className="space-y-6">
                  <div className="space-y-2">
                    {/* 🌟 تعديل: الـ Labels */}
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 px-1 transition-colors duration-500">
                      <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400"/> البريد الإلكتروني
                    </label>
                    {/* 🌟 تعديل: حقل الإدخال */}
                    <input 
                      type="email" 
                      required 
                      placeholder="name@example.com"
                      className="w-full px-5 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 transition-all text-lg text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2 px-1 transition-colors duration-500">
                      <Lock className="w-4 h-4 text-sky-600 dark:text-sky-400"/> كلمة المرور
                    </label>
                    <input 
                      type="password" 
                      required 
                      placeholder="••••••••"
                      className="w-full px-5 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border-2 border-slate-200 dark:border-slate-700 focus:outline-none focus:border-sky-500 dark:focus:border-sky-400 focus:ring-4 focus:ring-sky-500/10 transition-all text-lg text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" 
                    />
                  </div>

                  <div className="flex justify-end px-1">
                    <a href="#" className="text-sm font-bold text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors">نسيت كلمة المرور؟</a>
                  </div>

                  {/* 🌟 تعديل: زر تسجيل الدخول */}
                  <button 
                    type="submit" 
                    className="w-full bg-slate-900 dark:bg-sky-600 hover:bg-sky-950 dark:hover:bg-sky-500 text-white text-xl font-bold py-5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex justify-center items-center gap-3 group mt-4 border border-slate-700 dark:border-sky-500"
                  >
                    تسجيل الدخول <ArrowRight className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
}