"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  // بنستخدم resolvedTheme عشان لو المستخدم مختار system نعرف هو فاتح ولا غامق
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      // حجم متوسط ومتناسق (w-24 h-12)
      className={`relative flex items-center w-24 h-12 rounded-full p-1 cursor-pointer transition-colors duration-500 shadow-inner overflow-hidden border ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-sky-200 border-sky-300"
      }`}
    >
      {/* أيقونات الخلفية متسنترة صح */}
      <span className="absolute left-3 text-slate-500 z-0">
        <Moon className="w-5 h-5" />
      </span>
      <span className="absolute right-3 text-yellow-600 z-0">
        <Sun className="w-5 h-5" />
      </span>

      {/* الدايرة اللي بتتحرك:
        حجم الدائرة: w-10 h-10
        عشان نحرك الدايرة للشمال بنستخدم قيمة سالبة (-48) متناسبة مع الحجم الجديد.
      */}
      <motion.div
        initial={false}
        animate={{ x: isDark ? -48 : 0 }} 
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className={`z-10 flex items-center justify-center w-10 h-10 rounded-full shadow-md ${
          isDark ? "bg-slate-900" : "bg-white"
        }`}
      >
        {isDark ? (
          <Moon className="w-6 h-6 text-sky-400" />
        ) : (
          <Sun className="w-6 h-6 text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
}