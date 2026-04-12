// components/ArabicText.tsx
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

  // إعدادات حاوية الكلمات (عشان تظهر كلمة بكلمة)
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  // إعدادات الدخول لكل كلمة (بلور وحركة لفوق ناعمة)
  const child = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.div
      variants={container}
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