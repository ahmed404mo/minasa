"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function ExploreTab({ explore }: { explore: any[] }) {
  // 🌟 مرجع لحفظ الصوت اللي شغال حالياً عشان نقدر نتحكم فيه
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  // 🌟 دالة لإيقاف أي صوت شغال
  const stopAudio = () => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }
  };

  // 🌟 إيقاف الصوت لو المستخدم خرج من التاب ده
  useEffect(() => {
    return () => stopAudio();
  }, []);

  // التحقق من وجود بيانات
  if (!explore || explore.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 opacity-50">
        <span className="text-6xl mb-4">🔍</span>
        <h3 className="text-2xl font-bold text-slate-500">مفيش صور هنا لسه يا بطل!</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 w-full max-w-7xl mx-auto py-10 px-4">
      {explore.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
          // 🌟 إضافة أحداث الماوس للتشغيل والإيقاف التلقائي
          onMouseEnter={() => {
            stopAudio(); // اقفل أي حاجة شغالة الأول
            if (item.audio) {
              const audio = new Audio(item.audio);
              currentAudioRef.current = audio;
              audio.play().catch(err => console.log("الصوت محتاج تفاعل مباشر الأول", err));
            }
          }}
          onMouseLeave={() => {
            stopAudio(); // اقفل الصوت لما الماوس يبعد
          }}
          // 🌟 إضافة cursor-pointer عشان يبان إنه تفاعلي
          className="relative group w-full h-[400px] md:h-[600px] overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white dark:border-slate-800 cursor-pointer"
        >
          {/* 🖼️ الصورة الكرتونية - بتملى الكارد بالكامل */}
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />

          {/* 🌫️ Overlay: تدرج أسود عشان الكلام يظهر بوضوح فوق الصورة */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16 text-right">
            <motion.h3 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-7xl font-black text-white mb-4 drop-shadow-2xl"
            >
              {item.title}
            </motion.h3>
            
            <motion.p 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-3xl font-bold text-sky-100 max-w-3xl leading-relaxed drop-shadow-md"
            >
              {item.desc}
            </motion.p>
          </div>

          {/* 🔊 مؤشر الصوت (بديل الزرار القديم) بيظهر لما تعمل Hover */}
          {item.audio && (
            <div className="absolute top-8 left-8 bg-white/20 backdrop-blur-xl p-5 rounded-full border-2 border-white/40 z-20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300">
              <span className="text-3xl">🔊</span>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}