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

// --- مكون كارد الألعاب ---
const GamesTab = ({ eduGame }: { eduGame: any[] }) => {
  const [selectedGame, setSelectedGame] = useState<any>(null);

  if (!eduGame || eduGame.length === 0) {
    return (
      <div className="flex items-center justify-center py-10 md:py-16 px-4">
        <div className="bg-white border-[4px] border-black p-8 md:p-10 rounded-[2rem] shadow-[8px_8px_0_0_#000] text-center">
          <div className="text-6xl mb-4">🎮</div>
          <p className="text-2xl md:text-3xl font-black text-black mb-2">قريباً ألعاب جديدة</p>
          <p className="text-base md:text-lg text-slate-600 font-bold">استعد للعب والتعلم!</p>
        </div>
      </div>
    );
  }

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
        {eduGame.map((game, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index * 0.1, 0.4) }}
            whileHover={{ y: -5 }}
            className="bg-white border-[4px] border-black rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-[8px_8px_0_0_#000] flex flex-col cursor-pointer transition-all duration-300 group"
            onClick={() => setSelectedGame(game)}
          >
            <div className="h-40 md:h-48 bg-gradient-to-br from-sky-300 to-sky-400 border-b-[4px] border-black relative flex items-center justify-center overflow-hidden">
              <img 
                src={getGameImage(game.riddle)} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt={game.riddle}
              />
              <div className="absolute top-2 right-2 bg-yellow-400 border-[3px] border-black p-1.5 md:p-2 rounded-full shadow-[3px_3px_0_0_#000]">
                <Star size={16} className="md:w-[20px] md:h-[20px] fill-black text-black" />
              </div>
              <div className="absolute bottom-2 left-2 bg-emerald-400 border-[3px] border-black px-2 py-1 rounded-full shadow-[3px_3px_0_0_#000]">
                <span className="text-black font-black text-xs md:text-sm">لعبة {index + 1}</span>
              </div>
            </div>

            <div className="p-4 md:p-5 flex flex-col items-center text-center gap-2">
              <h3 className="text-lg md:text-xl font-black text-black line-clamp-1">
                {game.riddle || "لعبة ممتعة"}
              </h3>
              <p className="text-xs md:text-sm font-bold text-slate-600 line-clamp-1">
                اضغط للعب واستمتع بالمرح
              </p>
              
              <div className="w-full flex gap-2 mt-2">
                <div className="flex-[3] bg-emerald-400 border-[3px] border-black py-2 rounded-xl shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all flex items-center justify-center gap-2">
                  <Play size={18} className="fill-black text-black" />
                  <span className="text-base md:text-lg font-black text-black">العب الآن</span>
                </div>
                <div className="flex-1 bg-rose-400 border-[3px] border-black rounded-xl shadow-[4px_4px_0_0_#000] flex items-center justify-center">
                  <Trophy size={18} className="text-black" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedGame(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.3 }}
              className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] bg-white border-[4px] md:border-[6px] border-black rounded-[2rem] overflow-hidden shadow-[15px_15px_0_0_#000]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-yellow-400 border-b-[4px] border-black p-3 md:p-4 flex justify-between items-center">
                <h3 className="text-base md:text-xl font-black text-black truncate pr-2">
                  {selectedGame.riddle}
                </h3>
                <button
                  onClick={() => setSelectedGame(null)}
                  className="p-1.5 md:p-2 bg-white border-[3px] border-black rounded-xl shadow-[3px_3px_0_0_#000] active:shadow-none active:translate-y-1 transition-all"
                >
                  <X size={20} className="text-black" />
                </button>
              </div>
              
              <iframe
                src={selectedGame.src}
                className="w-full h-[calc(85vh-60px)] md:h-[calc(80vh-68px)] bg-white"
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

  if (!data) return <div className="min-h-screen bg-white flex items-center justify-center text-black font-black text-2xl md:text-3xl">جاري التحميل...</div>;

  const nameMapper: Record<string, string> = {
    "us": "usa", "united-states": "usa", "america": "usa", "north-america": "usa", 
    "br": "brazil", "brazil-br": "brazil", "jp": "japan", "japan-jp": "japan",
  };

  if (nameMapper[gameId]) {
    gameId = nameMapper[gameId];
  }

  const gamesList = gamesData[gameId];

  return (
    <div className="relative min-h-screen bg-[#f0f9ff] text-black overflow-x-hidden transition-colors duration-500 selection:bg-yellow-200" dir="rtl">
      
      {/* --- طبقة الخلفية مع النقاط المنقطة --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* لون الخلفية المتدرج الخاص بالدولة */}
        <div className={`absolute inset-0 bg-gradient-to-br ${data.theme} opacity-15`} />
        
        {/* صورة الخلفية */}
        {/* <img src="/backk.png" className="w-full h-full object-cover opacity-20 mix-blend-multiply" alt="" /> */}
        
        {/* طبقة النقاط (Dotted Pattern) */}
        <div 
          className="absolute inset-0 opacity-[0.25]" 
          style={{ 
            backgroundImage: `radial-gradient(#000 1.5px, transparent 0)`, 
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>

      {mounted && (
        <button 
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} 
          className="fixed top-4 left-4 md:top-6 md:left-6 z-50 p-3 rounded-xl bg-white border-[3px] md:border-[4px] border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
        >
          {resolvedTheme === "dark" ? <Sun size={20} className="md:w-[24px] md:h-[24px] text-yellow-500" /> : <Moon size={20} className="md:w-[24px] md:h-[24px] text-sky-600" />}
        </button>
      )}

      <main className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-10">
        
        <header className="bg-white border-[4px] md:border-[6px] border-black rounded-[2.5rem] p-6 md:p-8 shadow-[10px_10px_0_0_#000] mb-8 flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="flex flex-col items-start text-right w-full md:w-2/3">
            <Link href="/kids">
              <motion.button 
                whileHover={{ x: 5 }} 
                className="flex items-center gap-2 bg-yellow-400 border-[3px] border-black px-4 py-2 rounded-xl font-black mb-6 shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-y-1 transition-all text-sm md:text-base text-black"
              >
                <ArrowRight size={18} className="rotate-180" /> العودة للخريطة
              </motion.button>
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-black mb-3 tracking-tighter italic uppercase text-black leading-none">
              {data.countryName}
            </h1>
            
            <div className="bg-sky-400 border-[3px] border-black px-4 md:px-5 py-1.5 md:py-2 rounded-xl shadow-[4px_4px_0_0_#000]">
              <p className="text-base md:text-xl font-black text-black">
                 استكشاف {data.continentName} 
              </p>
            </div>
          </div>
          
          <motion.img 
            src={data.img} 
            animate={{ y: [0, -8, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
            className="w-32 md:w-48 lg:w-56 drop-shadow-[8px_8px_0_rgba(0,0,0,0.15)] object-contain" 
          />
        </header>

        {activeTab === "games" && !gamesList && (
          <div className="bg-rose-400 border-[4px] border-black p-4 rounded-[1.5rem] text-black font-black mb-8 shadow-[6px_6px_0_0_#000] text-center text-sm md:text-lg">
            رسالة للمطور: الكود بيبحث عن [{gameId}] في ملف الألعاب
          </div>
        )}

        <nav className="flex justify-center mb-8 px-2">
          <div className="bg-white border-[4px] border-black p-2 rounded-[2rem] shadow-[8px_8px_0_0_#000] flex flex-wrap md:flex-nowrap gap-2 w-full max-w-2xl">
            {[
              { id: "explore", label: "اكتشف", color: "bg-emerald-400" },
              { id: "videos", label: "فيديوهات", color: "bg-sky-400" },
              { id: "games", label: "ألعاب", color: "bg-yellow-400" }
            ].map((tab) => (
              <button 
                key={tab.id} 
                onClick={() => { setActiveTab(tab.id as any); stopAllAudio(); }} 
                className={`relative flex-1 py-2.5 md:py-3 rounded-[1.2rem] font-black text-sm md:text-xl border-[3px] transition-all
                  ${activeTab === tab.id 
                    ? `${tab.color} border-black shadow-[4px_4px_0_0_#000] -translate-y-1 text-black` 
                    : "bg-transparent border-transparent text-slate-400 hover:text-black"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>

        <section className="relative z-20 bg-white border-[4px] md:border-[6px] border-black rounded-[2.5rem] p-6 md:p-8 shadow-[12px_12px_0_0_#000] min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              {activeTab === "explore" && <ExploreTab explore={data.explore}/>}
              {activeTab === "videos" && <VideosTab videosData={data.videos} />}
              {activeTab === "games" && <GamesTab eduGame={gamesList} />}
            </motion.div>
          </AnimatePresence>
        </section>

      </main>

      {/* لمسات إضافية من الألوان في الزوايا */}
      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-sky-300 opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -left-20 w-96 h-96 bg-emerald-300 opacity-20 blur-[120px] rounded-full pointer-events-none" />
      
    </div>
  );
}