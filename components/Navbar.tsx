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

  const whiteTextStyle = {
    textShadow: `
      2px 2px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
     -1px  1px 0 #000,
      1px  1px 0 #000
    `,
  };

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "عن المنصة", href: "/about" },
    { 
      name: "دليل المعلم", 
      href: "https://drive.google.com/file/d/19Vhvyt0CoCQ-MTzlVILDL6JkcmRFI-QU/view?usp=sharing",
      isExternal: true 
    },
    { name: "فريق العمل", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100]" dir="rtl">
      <div className="w-full">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="bg-white border-y-[5px] border-black px-6 md:px-10 py-4 flex items-center justify-between relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #fff 2px, transparent 2px)`,
              backgroundSize: '24px 24px'
            }}>
          </div>

          <Link href="/" className="flex items-center gap-3 group relative z-10">
            <div className="bg-yellow-400 border-4 border-black p-2 rounded-2xl group-hover:rotate-12 transition-transform shadow-[4px_4px_0_0_#000]">
               <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
               </div>
            </div>
            <span className="text-2xl md:text-3xl font-black text-white tracking-tight" style={whiteTextStyle}>
              المكتشف <span className="text-white/90">الصغير</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-4 relative z-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.href} 
                  href={link.href}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                  className={`px-6 py-2 text-3xl rounded-2xl font-black transition-all border-4 ${
                    isActive 
                      ? "bg-yellow-400 border-black text-white shadow-[4px_4px_0_0_#000] " 
                      : "border-transparent text-black hover:bg-yellow-400 hover:text-white"
                  }`}
                  style={isActive ? whiteTextStyle : {}}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-5 relative z-10">
            <Link href="/login">
              <button className="bg-green-500 text-white px-8 py-3 rounded-[1.5rem] font-black text-xl border-4 border-black shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all" style={whiteTextStyle}>
                دخول 
              </button>
            </Link>
          </div>

          <button 
            className="lg:hidden bg-orange-400 border-4 border-black p-2 rounded-xl shadow-[4px_4px_0_0_#000] active:translate-y-1 active:shadow-none transition-all relative z-10"
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
              className="fixed top-0 right-0 h-full w-[85%] bg-cyan-500 border-l-[10px] border-black z-[120] p-10"
            >
              <div className="flex flex-col gap-8 mt-16">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      target={link.isExternal ? "_blank" : "_self"}
                      className={`text-4xl font-black p-5 rounded-[2rem] border-[5px] transition-all ${
                        isActive 
                        ? "bg-orange-400 border-black text-white shadow-[8px_8px_0_0_#000]" 
                        : "border-transparent text-white"
                      }`}
                      style={whiteTextStyle}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                
                <div className="h-2 bg-white/30 rounded-full my-4" />

                <Link href="/login">
                  <button className="w-full bg-green-500 text-white py-6 rounded-[2.5rem] border-[5px] border-black font-black text-3xl shadow-[10px_10px_0_0_#000] active:shadow-none active:translate-y-2 transition-all" style={whiteTextStyle}>
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