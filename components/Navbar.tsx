"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "عن المنصة", href: "/about" },
    { name: "فريق العمل", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] px-4 pt-6" dir="rtl">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="bg-white border-[5px] border-black rounded-[2.5rem] shadow-[0_10px_0_0_#000] px-6 md:px-10 py-4 flex items-center justify-between relative overflow-hidden"
        >
          {/* نقش خلفية خفيف جداً */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #000 2px, transparent 2px)`,
              backgroundSize: '24px 24px'
            }}>
          </div>

          {/* لوجو الموقع */}
          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="bg-yellow-400 border-4 border-black p-2 rounded-2xl group-hover:rotate-12 transition-transform shadow-[4px_4px_0_0_#000]">
               <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
               </div>
            </div>
            <span className="text-2xl md:text-3xl font-black text-black tracking-tight">
              المكتشف <span className="text-yellow-500">الصغير</span>
            </span>
          </Link>

          {/* روابط الديسكتوب */}
          <div className="hidden lg:flex items-center gap-4 relative z-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`px-6 py-2 rounded-2xl text-lg font-black transition-all border-4 ${
                    isActive 
                      ? "bg-yellow-400 border-black text-black shadow-[4px_4px_0_0_#000]" 
                      : "border-transparent text-slate-600 hover:text-black hover:bg-yellow-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-5 relative z-10">
            <Link href="/login">
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-[1.5rem] font-black text-xl border-4 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                دخول 
              </button>
            </Link>
          </div>

          {/* زر الموبايل */}
          <button 
            className="lg:hidden bg-yellow-400 border-4 border-black p-2 rounded-xl shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none transition-all relative z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-8 h-8 flex flex-col justify-around items-center p-1">
              <div className={`w-full h-1.5 bg-black rounded transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <div className={`w-full h-1.5 bg-black rounded transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-1.5 bg-black rounded transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </motion.div>
      </div>

      {/* منيو الموبايل */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] bg-white border-l-[10px] border-black z-[120] p-10"
            >
              <div className="flex flex-col gap-8 mt-16">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={`text-4xl font-black p-5 rounded-[2rem] border-[5px] transition-all ${
                        isActive 
                        ? "bg-yellow-400 border-black text-black shadow-[8px_8px_0_0_#000]" 
                        : "border-transparent text-slate-700 hover:bg-yellow-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                
                <div className="h-2 bg-black/5 rounded-full my-4" />

                <Link href="/login">
                  <button className="w-full bg-yellow-400 text-black py-6 rounded-[2.5rem] border-[5px] border-black font-black text-3xl shadow-[10px_10px_0_0_#000] active:shadow-none active:translate-y-2 transition-all">
                    بوابة الدخول
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}