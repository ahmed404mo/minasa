// app/map/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InteractiveMap() {
  // تصميم القارات كجزر عائمة
  const continents = [
    { id: "africa", name: "أفريقيا", icon: "🦁", color: "bg-orange-400", position: "top-[40%] left-[45%]", size: "w-40 h-40" },
    { id: "asia", name: "آسيا", icon: "🐼", color: "bg-red-400", position: "top-[20%] right-[15%]", size: "w-48 h-48" },
    { id: "europe", name: "أوروبا", icon: "🏰", color: "bg-blue-400", position: "top-[15%] left-[55%]", size: "w-32 h-32" },
    { id: "north-america", name: "أمريكا الشمالية", icon: "🦅", color: "bg-green-400", position: "top-[20%] left-[15%]", size: "w-44 h-44" },
    { id: "south-america", name: "أمريكا الجنوبية", icon: "🦥", color: "bg-pink-400", position: "top-[55%] left-[25%]", size: "w-36 h-36" },
    { id: "australia", name: "أستراليا", icon: "🦘", color: "bg-purple-400", position: "top-[65%] right-[20%]", size: "w-32 h-32" },
    { id: "antarctica", name: "أنتاركتيكا", icon: "🐧", color: "bg-cyan-200", position: "bottom-[5%] left-[30%]", size: "w-64 h-24 rounded-full" },
  ];

  return (
    <div className="min-h-screen bg-[#0077be] relative overflow-hidden touch-none selection:bg-transparent">
      
      {/* زرار الرجوع */}
      <Link href="/" className="absolute top-6 right-6 z-50">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="bg-white p-3 rounded-full shadow-lg">
          <ArrowRight className="w-8 h-8 text-sky-600" />
        </motion.div>
      </Link>

      {/* عنوان الخريطة */}
      <div className="absolute top-8 left-0 right-0 text-center z-40 pointer-events-none">
        <h1 className="text-4xl md:text-6xl font-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]" style={{ WebkitTextStroke: '2px #0369a1' }}>
          عالمنا الجميل 🌎
        </h1>
      </div>

      {/* أمواج البحر في الخلفية */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/waves.png')] animate-pulse"></div>

      {/* الجزر (القارات) */}
      <div className="relative w-full max-w-6xl h-[80vh] mx-auto mt-20">
        {continents.map((continent, i) => (
          <Link href={`/continents/${continent.id}`} key={continent.id}>
            <motion.div
              // أنيميشن الطفو (Floating)
              animate={{ y: [0, -15, 0], rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 3 + (i * 0.5), ease: "easeInOut" }}
              whileHover={{ scale: 1.15, zIndex: 50 }}
              whileTap={{ scale: 0.9 }}
              className={`absolute ${continent.position} ${continent.size} ${continent.color} rounded-[40%] border-8 border-white/50 shadow-[0_15px_30px_rgba(0,0,0,0.3)] cursor-pointer flex flex-col items-center justify-center backdrop-blur-sm group`}
            >
              <span className="text-5xl md:text-6xl drop-shadow-lg group-hover:scale-125 transition-transform">
                {continent.icon}
              </span>
              <span className="text-white font-black text-xl mt-2 drop-shadow-md bg-black/20 px-3 py-1 rounded-full">
                {continent.name}
              </span>
            </motion.div>
          </Link>
        ))}
      </div>

    </div>
  );
}