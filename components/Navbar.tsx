"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Menu, X, Home, Info, Mail, LogIn } from "lucide-react";

import GlassSurface from "@/components/react-bits/GlassSurface";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // قفل القائمة أوتوماتيكياً لما نغير الصفحة
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // منع السكرول لما القائمة تكون مفتوحة في الموبايل
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "الرئيسية", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "عن المنصة", href: "/about", icon: <Info className="w-5 h-5" /> },
    { name: "فريق العمل", href: "/contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-3 md:px-10 pt-4" dir="rtl">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <GlassSurface 
            className="rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl w-full bg-slate-900/40 dark:bg-slate-950/40"
          >
            <div className="px-4 md:px-10 py-3 md:py-5 flex items-center justify-between w-full">
              
              {/* 🚀 اللوجو */}
              <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0 relative z-[110]">
                <div className="bg-sky-500 p-2 md:p-2.5 rounded-xl md:rounded-2xl shadow-[0_0_20px_rgba(14,165,233,0.5)] group-hover:rotate-12 transition-transform">
                  <Rocket className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <span className="text-lg md:text-2xl font-black text-white tracking-tight drop-shadow-md">
                  المكتشف <span className="text-sky-400">الصغير</span>
                </span>
              </Link>

              {/* 💻 الروابط - للشاشات الكبيرة */}
              <div className="hidden lg:flex items-center gap-1 bg-black/20 p-1.5 rounded-2xl border border-white/10">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={`relative px-6 py-2.5 rounded-xl text-base font-bold transition-all duration-300 flex items-center gap-2 ${
                        isActive ? "text-sky-400" : "text-slate-200 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          layoutId="activePill"
                          className="absolute inset-0 bg-sky-500/15 border border-sky-500/30 rounded-xl -z-10"
                        />
                      )}
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* 🔒 اليمين (دخول + توجل) للشاشات الكبيرة */}
              <div className="hidden md:flex items-center gap-3 lg:gap-5">
                <ThemeToggle />
                <Link href="/login">
                  <button className="bg-white text-slate-950 px-6 lg:px-10 py-2.5 rounded-xl font-black text-base hover:bg-sky-500 hover:text-white transition-all shadow-lg active:scale-95 flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    دخول
                  </button>
                </Link>
              </div>

              {/* 📱 أدوات الموبايل */}
              <div className="flex lg:hidden items-center gap-2 md:gap-3 relative z-[110]">
                <div className="scale-90 md:scale-100">
                  <ThemeToggle />
                </div>
                <button 
                  className="text-white p-2 bg-white/10 rounded-xl border border-white/20 active:scale-90 transition-transform"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle Menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

            </div>
          </GlassSurface>
        </motion.div>
      </div>

      {/* 📱 Mobile Menu Overlay - تم التعديل هنا */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[85px] left-4 right-4 lg:hidden z-[90]"
          >
            {/* استبدلنا GlassSurface بـ div عادي مع تأثيرات Tailwind */}
            <div className="rounded-[2rem] border border-white/20 shadow-2xl p-6 bg-slate-900/90 dark:bg-slate-950/90 backdrop-blur-xl w-full">
              <div className="flex flex-col gap-3">
                {navLinks.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        className={`flex items-center gap-4 p-4 rounded-2xl text-xl font-bold transition-all ${
                          isActive 
                            ? "bg-sky-500/20 text-sky-400 border border-sky-500/30" 
                            : "text-slate-200 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <span className="p-3 bg-white/10 rounded-xl">{link.icon}</span>
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                
                <hr className="my-4 border-white/10" />
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link href="/login">
                    <button className="w-full bg-sky-500 text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-xl shadow-sky-500/20 active:scale-[0.98]">
                      <LogIn className="w-6 h-6" />
                      بوابة الدخول للأبطال
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}