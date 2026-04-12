"use client";

import { motion } from "framer-motion";

export default function ArabicText({ 
  text, 
  className = "" 
}: { 
  text: string; 
  className?: string; 
}) {
  const words = text.split(" ");

  // إعدادات حاوية الكلمات
  // استخدمنا (as any) لقفل نقاش TypeScript نهائياً في الـ Build
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  } as any;

  // إعدادات الدخول لكل كلمة
  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { 
        type: "spring" as const, // إضافة as const للضمان
        damping: 12, 
        stiffness: 100 
      },
    },
  } as any;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap justify-center gap-[6px] md:gap-[8px] ${className}`}
      dir="rtl"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}