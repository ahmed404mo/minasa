"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sun, Moon, Play, Star, Trophy, Map, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { gamesData } from "@/src/data/gamesData"; 
import { countryData } from "@/src/data/countries"; 
import ExploreTab from "@/components/CountryTabs/ExploreTab";
import VideosTab from "@/components/CountryTabs/VideosTab";

// صور للألعاب
const gameImages: Record<string, string> = {
  default: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018584/background_yprel9.mp4",
  brazil: "https://res.cloudinary.com/dmuuyiwtr/image/upload/v1775773530/Gemini_Generated_Image_bmv7yrbmv7yrbmv7_fuihqi.png",
  japan: "https://res.cloudinary.com/dmuuyiwtr/image/upload/v1775773549/Gemini_Generated_Image_dt0gf7dt0gf7dt0g_r1nfnx.png",
  usa: "https://res.cloudinary.com/dmuuyiwtr/image/upload/v1775773530/Gemini_Generated_Image_bmv7yrbmv7yrbmv7_fuihqi.png",
  egypt: "https://res.cloudinary.com/dmuuyiwtr/image/upload/v1775773549/Gemini_Generated_Image_dt0gf7dt0gf7dt0g_r1nfnx.png",
  france: "https://res.cloudinary.com/dmuuyiwtr/image/upload/v1775773530/Gemini_Generated_Image_bmv7yrbmv7yrbmv7_fuihqi.png",
  australia: "https://res.cloudinary.com/dmuuyiwtr/image/upload/v1775773549/Gemini_Generated_Image_dt0gf7dt0gf7dt0g_r1nfnx.png",
  antarctica: "https://res.cloudinary.com/dmuuyiwtr/image/upload/v1775773530/Gemini_Generated_Image_bmv7yrbmv7yrbmv7_fuihqi.png",
};

// --- مكون كارد الألعاب مع iframe وصور ---
const GamesTab = ({ eduGame }: { eduGame: any[] }) => {
  const [selectedGame, setSelectedGame] = useState<any>(null);

  if (!eduGame || eduGame.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 md:py-20 px-4">
        <div className="bg-white border-[4px] border-black p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-[8px_8px_0_0_#000] md:shadow-[10px_10px_0_0_#000] text-center">
          <div className="text-6xl md:text-8xl mb-4">🎮</div>
          <p className="text-2xl md:text-3xl font-black text-black mb-2">قريباً ألعاب جديدة</p>
          <p className="text-base md:text-xl text-slate-600 font-bold">استعد للعب والتعلم!</p>
        </div>
      </div>
    );
  }

  const openGame = (game: any) => {
    setSelectedGame(game);
  };

  const closeGame = () => {
    setSelectedGame(null);
  };

  // الحصول على صورة مناسبة للعبة
  const getGameImage = (riddle: string) => {
    if (riddle.includes("البرازيل") || riddle.includes("Brazil")) return gameImages.brazil;
    if (riddle.includes("اليابان") || riddle.includes("Japan")) return gameImages.japan;
    if (riddle.includes("أمريكا") || riddle.includes("America") || riddle.includes("الولايات")) return gameImages.usa;
    if (riddle.includes("مصر") || riddle.includes("Egypt")) return gameImages.egypt;
    if (riddle.includes("فرنسا") || riddle.includes("France")) return gameImages.france;
    if (riddle.includes("أستراليا") || riddle.includes("Australia")) return gameImages.australia;
    if (riddle.includes("أنتاركتيكا") || riddle.includes("Antarctica")) return gameImages.antarctica;
    return gameImages.default;
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 p-2">
        {eduGame.map((game, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index * 0.1, 0.5) }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="bg-white border-[4px] md:border-[6px] border-black rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[10px_10px_0_0_#000] md:shadow-[15px_15px_0_0_#000] flex flex-col cursor-pointer transition-all duration-300"
            onClick={() => openGame(game)}
          >
            {/* صورة اللعبة */}
            <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-sky-300 to-sky-400 border-b-[4px] md:border-b-[6px] border-black relative flex items-center justify-center p-3 md:p-4 overflow-hidden">
              <img 
                src={getGameImage(game.riddle)} 
                className="w-full h-full object-cover drop-shadow-xl transition-transform duration-500 hover:scale-110" 
                alt={game.riddle}
              />
              {/* شارة مميزة */}
              <div className="absolute -top-2 -right-2 bg-yellow-400 border-[3px] md:border-[4px] border-black p-2 md:p-3 rounded-full shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000]">
                <Star size={20} className="md:w-[30px] md:h-[30px] fill-black text-black" />
              </div>
              {/* شارة العدد */}
              <div className="absolute -bottom-2 -left-2 bg-emerald-400 border-[3px] md:border-[4px] border-black px-2 py-1 md:px-3 md:py-1.5 rounded-full shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000]">
                <span className="text-black font-black text-xs md:text-sm">لعبة {index + 1}</span>
              </div>
            </div>

            {/* محتوى الكارد */}
            <div className="p-4 md:p-8 flex flex-col items-center text-center gap-2 md:gap-4">
              <h3 className="text-xl md:text-4xl font-black text-black leading-tight">
                {game.riddle || "لعبة ممتعة"}
              </h3>
              <p className="text-sm md:text-xl font-bold text-slate-600 leading-tight">
                اضغط للعب واستمتع بالمرح
              </p>
              
              <div className="w-full flex gap-2 md:gap-3 mt-2 md:mt-4">
                <div className="flex-[3] bg-emerald-400 border-[3px] md:border-[4px] border-black py-3 md:py-5 rounded-[1.5rem] md:rounded-[2rem] shadow-[5px_5px_0_0_#000] md:shadow-[8px_8px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2 md:gap-3">
                  <Play size={20} className="md:w-[32px] md:h-[32px] fill-black text-black" />
                  <span className="text-lg md:text-3xl font-black text-black">العب الآن</span>
                </div>
                <div className="flex-1 bg-rose-400 border-[3px] md:border-[4px] border-black rounded-[1.5rem] md:rounded-[2rem] shadow-[5px_5px_0_0_#000] md:shadow-[8px_8px_0_0_#000] flex items-center justify-center">
                  <Trophy size={20} className="md:w-[32px] md:h-[32px] text-black" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* نافذة iframe منبثقة - متجاوبة مع الموبايل */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-2 md:p-4 bg-black/70 backdrop-blur-md"
            onClick={closeGame}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 50 }}
              transition={{ type: "spring", bounce: 0.4 }}
              className="relative w-full max-w-5xl h-[85vh] md:h-[80vh] bg-white border-[4px] md:border-[8px] border-black rounded-[1.5rem] md:rounded-[3rem] overflow-hidden shadow-[10px_10px_0_0_#000] md:shadow-[20px_20px_0_0_#000]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* رأس النافذة - متجاوب */}
              <div className="bg-yellow-400 border-b-[3px] md:border-b-[4px] border-black p-3 md:p-4 flex justify-between items-center">
                <h3 className="text-base md:text-2xl font-black text-black truncate max-w-[200px] md:max-w-none">
                  {selectedGame.riddle}
                </h3>
                <button
                  onClick={closeGame}
                  className="p-1.5 md:p-2 bg-white border-[2px] md:border-[3px] border-black rounded-lg md:rounded-xl shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-y-1 transition-all"
                >
                  <X size={18} className="md:w-[24px] md:h-[24px] text-black" />
                </button>
              </div>
              
              {/* الـ iframe الخاص باللعبة - متجاوب */}
              <iframe
                src={selectedGame.src}
                className="w-full h-[calc(85vh-70px)] md:h-[calc(80vh-80px)] bg-white"
                title={selectedGame.riddle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- المكون الرئيسي للصفحة ---
export default function CountryHub() {
  const params = useParams();
  const rawId = decodeURIComponent((params?.id as string) || "");
  let gameId = rawId.toLowerCase().trim(); 

  const data = countryData[params?.id as string] || countryData[rawId];

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"explore" | "videos" | "games">("explore");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => { 
    setMounted(true);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  const stopAllAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  if (!data) return <div className="min-h-screen bg-white flex items-center justify-center text-black font-black text-3xl">جاري التحميل...</div>;

  const nameMapper: Record<string, string> = {
    "us": "usa",
    "united-states": "usa", 
    "america": "usa",       
    "north-america": "usa", 
    "br": "brazil",
    "brazil-br": "brazil",
    "jp": "japan",
    "japan-jp": "japan",
  };

  if (nameMapper[gameId]) {
    gameId = nameMapper[gameId];
  }

  const gamesList = gamesData[gameId];

  return (
    <div className="relative min-h-screen bg-[#f0f9ff] text-black overflow-x-hidden transition-colors duration-500" dir="rtl">
      
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 bg-gradient-to-br ${data.theme} opacity-20`} />
        <img src="/backk.png" className="w-full h-full object-cover opacity-30" alt="" />
      </div>

      {mounted && (
        <button 
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} 
          className="fixed top-4 left-4 md:top-8 md:left-6 z-50 p-2 md:p-4 rounded-xl md:rounded-2xl bg-white border-[3px] md:border-[4px] border-black shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          {resolvedTheme === "dark" ? <Sun size={20} className="md:w-[28px] md:h-[28px] text-yellow-500" /> : <Moon size={20} className="md:w-[28px] md:h-[28px] text-sky-600" />}
        </button>
      )}

      <main className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        
        <header className="bg-white border-[4px] md:border-[6px] border-black rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-[10px_10px_0_0_#000] md:shadow-[15px_15px_0_0_#000] mb-8 md:mb-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          <div className="flex flex-col items-start text-right w-full md:w-3/5">
            <Link href="/kids">
              <motion.button 
                whileHover={{ x: 5 }} 
                className="flex items-center gap-2 bg-yellow-400 border-[2px] md:border-[3px] border-black px-4 md:px-6 py-1.5 md:py-2 rounded-lg md:rounded-xl font-black mb-4 md:mb-8 shadow-[3px_3px_0_0_#000] md:shadow-[4px_4px_0_0_#000] active:shadow-none transition-all text-sm md:text-base"
              >
                <ArrowRight size={16} className="md:w-[20px] md:h-[20px] rotate-180" /> العودة للخريطة
              </motion.button>
            </Link>
            
            <h1 className="text-3xl md:text-6xl lg:text-8xl font-black mb-2 md:mb-4 tracking-tighter italic uppercase text-black">
              {data.countryName}
            </h1>
            
            <div className="bg-sky-400 border-[3px] md:border-[4px] border-black px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-[4px_4px_0_0_#000] md:shadow-[6px_6px_0_0_#000]">
              <p className="text-base md:text-2xl font-black text-black">
                 استكشاف {data.continentName} 
              </p>
            </div>
          </div>
          
          <motion.img 
            src={data.img} 
            animate={{ y: [0, -10, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
            className="w-40 md:w-64 lg:w-[400px] drop-shadow-[5px_5px_0_rgba(0,0,0,0.1)] md:drop-shadow-[10px_10px_0_rgba(0,0,0,0.1)] object-contain" 
          />
        </header>

        {activeTab === "games" && !gamesList && (
          <div className="bg-rose-400 border-[3px] md:border-[4px] border-black p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-black font-black mb-6 md:mb-10 shadow-[5px_5px_0_0_#000] md:shadow-[8px_8px_0_0_#000] text-center text-base md:text-xl">
            رسالة للمطور: الكود بيبحث عن [{gameId}] في ملف الألعاب
          </div>
        )}

        <nav className="flex justify-center mb-8 md:mb-16 px-2">
          <div className="bg-white border-[3px] md:border-[5px] border-black p-2 md:p-3 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[6px_6px_0_0_#000] md:shadow-[10px_10px_0_0_#000] flex flex-wrap md:flex-nowrap gap-2 md:gap-4 w-full max-w-3xl">
            {[
              { id: "explore", label: "اكتشف", color: "bg-emerald-400" },
              { id: "videos", label: "فيديوهات", color: "bg-sky-400" },
              { id: "games", label: "ألعاب", color: "bg-yellow-400" }
            ].map((tab) => (
              <button 
                key={tab.id} 
                onClick={() => { setActiveTab(tab.id as any); stopAllAudio(); }} 
                className={`relative flex-1 py-2 md:py-4 rounded-[1rem] md:rounded-[1.5rem] font-black text-sm md:text-2xl border-[2px] md:border-[4px] transition-all
                  ${activeTab === tab.id 
                    ? `${tab.color} border-black shadow-[3px_3px_0_0_#000] md:shadow-[5px_5px_0_0_#000] -translate-y-0.5 md:-translate-y-1 text-black` 
                    : "bg-transparent border-transparent text-slate-400 hover:text-black"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <section className="relative z-20 bg-white border-[4px] md:border-[6px] border-black rounded-[2rem] md:rounded-[3.5rem] p-4 md:p-12 shadow-[10px_10px_0_0_#000] md:shadow-[15px_15px_0_0_#000] min-h-[400px] md:min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "explore" && <ExploreTab explore={data.explore}/>}
              {activeTab === "videos" && <VideosTab videosData={data.videos} />}
              {activeTab === "games" && <GamesTab eduGame={gamesList} />}
            </motion.div>
          </AnimatePresence>
        </section>

      </main>

      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-sky-300 opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -left-20 w-96 h-96 bg-emerald-300 opacity-20 blur-[120px] rounded-full pointer-events-none" />
      
    </div>
  );
}