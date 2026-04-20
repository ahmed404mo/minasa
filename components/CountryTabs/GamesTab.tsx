"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, X, PlayCircle, Sparkles } from "lucide-react";

// ألوان مبهجة للكروت عشان تتغير مع كل لعبة
const cardColors = [
  "from-rose-400 to-orange-400",
  "from-sky-400 to-blue-500",
  "from-emerald-400 to-teal-500",
  "from-purple-400 to-fuchsia-500",
  "from-amber-400 to-orange-500"
];

// =====================================
// Main Component (مكون إدارة الألعاب)
// =====================================
export default function GamesTab({ eduGame }: { eduGame: any[] }) {
  // حالة عشان نعرف إيه اللعبة المفتوحة حالياً جوه الـ Modal
  const [activeGame, setActiveGame] = useState<any | null>(null);

  // عشان نقفل الـ Scroll بتاع الصفحة لما اللعبة تفتح
  useEffect(() => {
    if (activeGame) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [activeGame]);

  // حماية من الأخطاء لو مفيش داتا أو الـ Array فاضي
  if (!eduGame || eduGame.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] bg-white/80 dark:bg-slate-800/80 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg text-center p-8">
        <span className="text-6xl mb-4">🚧</span>
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
          لسه بنجهز الألعاب هنا!
        </h3>
        <p className="text-slate-500 dark:text-slate-400">
          سيتم إضافة الألعاب قريباً.. عُد لاحقاً يا بطل 🚀
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 1. شبكة كروت الألعاب (Grid of Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {eduGame.map((game, index) => {
          // بنختار لون مختلف لكل كارت بناءً على ترتيبه
          const colorClass = cardColors[index % cardColors.length];

          return (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-lg border-4 border-transparent hover:border-sky-400 transition-all cursor-pointer flex flex-col"
              onClick={() => setActiveGame(game)}
            >
              {/* الجزء العلوي (صورة الكارت الملونة) */}
              <div className={`h-40 md:h-48 bg-gradient-to-br ${colorClass} w-full flex items-center justify-center relative overflow-hidden`}>
                {/* تأثير الدواير في الخلفية */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="8" fill="currentColor"></circle>
                      </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                  </svg>
                </div>
                
                {/* الأيقونة المركزية */}
                <div className="relative z-10 bg-white/30 backdrop-blur-md p-5 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-xl border border-white/40">
                  <Gamepad2 size={56} className="text-white drop-shadow-lg" />
                </div>
                
                {/* نجوم بتظهر لما تقف بالماوس */}
                <Sparkles className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" size={24} />
                <Sparkles className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-75" size={20} />
              </div>

              {/* الجزء السفلي (النص والزرار) */}
              <div className="p-6 flex flex-col items-center text-center flex-1 justify-between gap-6">
                <h3 className="text-xl md:text-2xl font-black text-slate-800 dark:text-white leading-tight">
                  {game.riddle}
                </h3>
                
                <button className="w-full py-3.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-white rounded-2xl font-bold transition-colors text-lg flex items-center justify-center gap-2 group-hover:bg-sky-500 group-hover:text-white shadow-sm border border-slate-200 dark:border-slate-600 group-hover:border-transparent">
                  <PlayCircle size={24} className="group-hover:animate-bounce" />
                  ابدأ التحدي
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 2. شاشة عرض اللعبة المنبثقة (Modal) */}
      <AnimatePresence>
        {activeGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white dark:bg-slate-900 w-full max-w-6xl h-[90vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border-4 border-sky-400 dark:border-sky-600"
            >
              {/* شريط التحكم (Header) */}
              <div className="flex items-center justify-between p-4 px-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg sm:text-2xl font-black text-slate-800 dark:text-white flex items-center gap-3">
                  <span className="bg-sky-100 dark:bg-sky-900 p-2 rounded-xl">
                    <Gamepad2 className="text-sky-600 dark:text-sky-400" size={28} />
                  </span>
                  {activeGame.riddle}
                </h3>
                
                {/* زرار الخروج */}
                <button
                  onClick={() => setActiveGame(null)}
                  className="px-5 py-2.5 bg-red-100 text-red-600 hover:bg-red-500 hover:text-white dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-600 dark:hover:text-white rounded-xl transition-colors flex items-center gap-2 font-black shadow-sm"
                >
                  <X size={24} strokeWidth={3} />
                  <span className="hidden sm:inline">إغلاق اللعبة</span>
                </button>
              </div>

              {/* حاوية اللعبة (Iframe) */}
              <div className="flex-1 w-full bg-slate-100 dark:bg-black relative">
                {activeGame.type === "iframe" ? (
                  <iframe
                    src={activeGame.src}
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-500 font-bold text-xl">
                    <p>هذه اللعبة غير مدعومة حالياً.</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}