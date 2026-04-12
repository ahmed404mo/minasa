"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Gamepad2, ShieldCheck, BookOpen, HeartPulse, Globe2, Users } from "lucide-react";

import ShinyText from "@/components/react-bits/ShinyText";
import TiltedCard from "@/components/react-bits/TiltedCard";
import CountUp from "@/components/react-bits/CountUp"; 
import ArabicText from "@/components/ArabicText"; 

export default function LandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.3, delayChildren: 0.1 } 
    },
  };

  const textVariants: any = {
    hidden: { y: 25, opacity: 0, filter: "blur(10px)" },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)", 
      transition: { type: "spring", damping: 14, stiffness: 100 } 
    },
  };

  const card3DVariants: any = {
    hidden: { z: -500, rotateX: 45, opacity: 0, filter: "blur(15px)" },
    visible: { 
      z: 0, rotateX: 0, opacity: 1, filter: "blur(0px)", 
      transition: { type: "spring", damping: 15, stiffness: 80, duration: 1 } 
    },
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-background text-foreground transition-colors duration-500 perspective-[1500px]">
      <section ref={containerRef} className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-32 pb-24">
        <video ref={videoRef} autoPlay muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/back.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center text-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.h1 
            variants={textVariants} 
            className="text-5xl md:text-[80px] font-black text-white mb-6 leading-tight drop-shadow-xl"
            style={{ fontStyle: "normal", transform: "none" }}
          >
             <ShinyText text="منصة المكتشف الصغير " className="inline text-sky-500" />
          </motion.h1>
          
          <div className="mb-16 max-w-2xl" style={{ fontFamily: "var(--font-cairo)" }}>
            <ArabicText 
              text="المنصة التعليمية الأولى المصممة خصيصاً لتنمية مهارات الأطفال واكتشاف العالم بأمان تام."
              className="text-lg md:text-2xl text-slate-200 font-bold drop-shadow-md leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl z-20">
            <motion.div variants={card3DVariants} className="w-full">
              <TiltedCard className="w-full">
                <Link href="/login" className="block group w-full outline-none">
                  <div className="relative rounded-[2.5rem] shadow-lg transition-all duration-500 transform-gpu overflow-hidden h-[450px] flex flex-col border border-border hover:border-ring">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: "url('https://res.cloudinary.com/dmuuyiwtr/image/upload/q_auto/f_auto/v1775773530/Gemini_Generated_Image_bmv7yrbmv7yrbmv7_fuihqi.png')" }}></div>
                    <div className="absolute top-6 right-6 z-10 bg-white/20 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-white/30">
                      <Gamepad2 className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/95 dark:bg-slate-950/85 backdrop-blur-xl p-8 border-t border-slate-200 dark:border-white/10 flex flex-col text-right transition-colors duration-500">
                      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">عالم الأطفال</h2>
                      <p className="text-slate-600 dark:text-slate-300 font-medium mb-6 text-sm leading-relaxed">ألعاب، فيديوهات، وقصص سحرية حول قارات العالم!</p>
                      <button className="w-full bg-emerald-500 text-white text-lg font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all">
                        دخول الأبطال <ArrowLeft className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </Link>
              </TiltedCard>
            </motion.div>

            <motion.div variants={card3DVariants} className="w-full">
              <TiltedCard className="w-full">
                <Link href="/login" className="block group w-full outline-none">
                  <div className="relative rounded-[2.5rem] shadow-lg transition-all duration-500 transform-gpu overflow-hidden h-[450px] flex flex-col border border-border hover:border-ring">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: "url('https://res.cloudinary.com/dmuuyiwtr/image/upload/q_auto/f_auto/v1775773549/Gemini_Generated_Image_dt0gf7dt0gf7dt0g_r1nfnx.png')" }}></div>
                    <div className="absolute top-6 right-6 z-10 bg-white/20 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-white/30">
                      <ShieldCheck className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 bg-white/95 dark:bg-slate-950/85 backdrop-blur-xl p-8 border-t border-slate-200 dark:border-white/10 flex flex-col text-right transition-colors duration-500">
                      <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">بوابة الآباء</h2>
                      <p className="text-slate-600 dark:text-slate-300 font-medium mb-6 text-sm leading-relaxed">تابع تقدم طفلك، تحكم في وقت اللعب، واكتشف التقارير بسهولة.</p>
                      <button className="w-full bg-sky-500 text-white text-lg font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:bg-sky-400 transition-all">
                        دخول الآباء <ArrowLeft className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </Link>
              </TiltedCard>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="relative z-10 w-full bg-background py-24 border-t border-border overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
            <motion.div variants={textVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4 transition-colors">مجتمع <span className="text-sky-500">مكتشف العوالم</span></h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <Users />, color: "text-sky-500", label: "أب وأم يثقون بنا", count: 5000 },
                { icon: <HeartPulse />, color: "text-emerald-500", label: "طفل سعيد يتعلم", count: 12000 },
                { icon: <BookOpen />, color: "text-purple-500", label: "درس تفاعلي وقصة", count: 150 },
                { icon: <Globe2 />, color: "text-yellow-500", label: "قارات متاحة للاستكشاف", count: 7 }
              ].map((item, i) => (
                <motion.div key={i} variants={textVariants} className="flex flex-col items-center p-8 bg-card text-card-foreground border border-border rounded-3xl transition-all">
                   <div className={`p-4 rounded-2xl mb-4 ${item.color}`}>{item.icon}</div>
                   <div className="text-4xl font-black mb-2 flex items-center gap-1 transition-colors">
                     {item.count > 10 && <span>+</span>}
                     <CountUp to={item.count} duration={2} />
                   </div>
                   <p className="text-muted-foreground font-medium transition-colors">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}