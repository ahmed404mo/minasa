// components/react-bits/CountUp.tsx
"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function CountUp({ 
  to, 
  duration = 2, 
  className = "" 
}: { 
  to: number, 
  duration?: number, 
  className?: string 
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  
  // الريف ده عشان نراقب العنصر
  const ref = useRef(null);
  // once: true عشان يشتغل مرة واحدة بس لما تنزل، margin: عشان يشتغل لما يظهر بوضوح
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    // الأنيميشن مش هيشتغل غير لو isInView قيمتها بقت true (يعني السكشن ظهر في الشاشة)
    if (isInView) {
      const animation = animate(count, to, { duration: duration, ease: "easeOut" });
      return animation.stop;
    }
  }, [count, to, duration, isInView]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}