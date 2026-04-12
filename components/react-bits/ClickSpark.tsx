// components/react-bits/ClickSpark.tsx
"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: number;
  x: number;
  y: number;
}

export default function ClickSpark({ children }: { children: React.ReactNode }) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  // الألوان اللي هتطلع مع كل ضغطة (ألوان مبهجة للأطفال)
  const colors = ["#f87171", "#fbbf24", "#34d399", "#38bdf8", "#a78bfa", "#f472b6"];

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // بناخد مكان الماوس على الشاشة
    const { clientX, clientY } = e;
    const newSpark = { id: Date.now(), x: clientX, y: clientY };
    
    setSparks((current) => [...current, newSpark]);

    // نمسح التأثير بعد نص ثانية عشان مياكلش ميموري
    setTimeout(() => {
      setSparks((current) => current.filter((s) => s.id !== newSpark.id));
    }, 500);
  }, []);

  return (
    <div onClick={handleClick} className="relative w-full h-full cursor-pointer">
      {/* محتوى الموقع الأساسي */}
      {children}

      {/* تأثير الشرار اللي بيطلع فوق كل حاجة */}
      <AnimatePresence>
        {sparks.map((spark) => (
          <div
            key={spark.id}
            className="pointer-events-none fixed z-[9999]"
            style={{ left: spark.x, top: spark.y }}
          >
            {/* بنعمل 8 جزيئات يطيروا في اتجاهات مختلفة */}
            {Array.from({ length: 8 }).map((_, i) => {
              const angle = (i * 360) / 8; // توزيع دائري
              const distance = 40; // مسافة طيران الجزيء
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * distance;
              const y = Math.sin(rad) * distance;

              return (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{ x, y, opacity: 0, scale: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute w-3 h-3 rounded-full shadow-sm"
                  style={{
                    backgroundColor: colors[i % colors.length],
                    marginLeft: "-6px", // عشان يكون السنتر بالظبط تحت الماوس
                    marginTop: "-6px",
                  }}
                />
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}