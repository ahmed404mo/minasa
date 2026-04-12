// components/react-bits/ShinyText.tsx
"use client";
import { motion } from "framer-motion";

export default function ShinyText({ text, className = "" }: { text: string, className?: string }) {
  return (
    <motion.span
      className={`relative inline-block overflow-hidden ${className}`}
      initial={{ backgroundPosition: "200% center" }}
      animate={{ backgroundPosition: "-200% center" }}
      transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      style={{
        backgroundImage: "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        color: "inherit",
      }}
    >
      {text}
    </motion.span>
  );
}