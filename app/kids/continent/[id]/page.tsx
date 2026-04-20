"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sun, Moon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { gamesData } from "@/src/data/gamesData"; 
import { countryData } from "@/src/data/countries"; 
import ExploreTab from "@/components/CountryTabs/ExploreTab";
import VideosTab from "@/components/CountryTabs/VideosTab";
import GamesTab from "@/components/CountryTabs/GamesTab";

export default function CountryHub() {
  const params = useParams();
  
  // 1. فك تشفير الرابط تحسباً لو فيه مسافات أو رموز، وتحويله لحروف صغيرة، ومسح أي مسافات زيادة
  const rawId = decodeURIComponent((params?.id as string) || "");
  let gameId = rawId.toLowerCase().trim(); 

  const data = countryData[params?.id as string] || countryData[rawId];

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"explore" | "videos" | "games">("explore");
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => { 
    setMounted(true);
    return () => stopAllAudio(); 
  }, []);

  const stopAllAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const playInteractiveAudio = (audioPath?: string) => {
    stopAllAudio();
    if (audioPath) {
      audioRef.current = new Audio(encodeURI(audioPath));
      audioRef.current.play().catch(e => console.error(e));
    }
  };

  if (!data) return <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center text-slate-900 dark:text-white">جاري التحميل...</div>;

  // ==========================================
  // القاموس
  // ==========================================
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
  // ==========================================

  return (
    <div className={`relative min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-white overflow-hidden transition-colors duration-500`} dir="rtl">
      
      <div className={`fixed inset-0 bg-gradient-to-br ${data.theme} opacity-10 dark:opacity-70 z-0 transition-opacity duration-500`} />
      <div className="fixed inset-0 bg-white/40 dark:bg-black/40 z-0 transition-colors duration-500" /> 

      {mounted && (
        <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} className="absolute top-8 left-6 z-50 p-3 rounded-full bg-white/50 dark:bg-black/40 backdrop-blur-md border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:scale-110 transition-all shadow-lg">
          {resolvedTheme === "dark" ? <Sun size={24} className="text-sky-400" /> : <Moon size={24} className="text-sky-600" />}
        </button>
      )}

      <main className="relative z-10 max-w-6xl mx-auto px-6 py-8">
        
        <header className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12 pt-10">
          <div className="flex flex-col items-start text-right w-full md:w-1/2">
            <Link href="/kids">
              <motion.button whileHover={{ x: 5 }} className="flex items-center gap-2 text-slate-800 dark:text-white font-bold mb-6 bg-white/50 dark:bg-black/40 backdrop-blur-xl px-5 py-2.5 rounded-xl border border-slate-300 dark:border-white/20 shadow-md transition-colors text-sm">
                <ArrowRight size={18} className="rotate-180" /> العودة للخريطة
              </motion.button>
            </Link>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-3 tracking-tighter text-slate-900 dark:text-white drop-shadow-lg dark:drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)] leading-tight transition-colors">
              {data.countryName}
            </h1>
            
            <p className="text-xl font-bold text-sky-600 dark:text-sky-300 drop-shadow-sm bg-white/50 dark:bg-black/30 px-5 py-2 rounded-xl inline-block border border-slate-300 dark:border-white/5 transition-colors mt-4">
               استكشاف {data.continentName} 🚀
            </p>
          </div>
          
          <motion.img src={data.img} animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="w-64 md:w-80 lg:w-[450px] drop-shadow-2xl object-contain" />
        </header>

        {/* 🚨 جهاز كشف الأعطال: هيظهر صندوق أحمر لو الاسم مش متطابق 🚨 */}
        {activeTab === "games" && !gamesData[gameId] && (
          <div className="bg-red-100 border-2 border-red-500 text-red-800 p-4 rounded-xl text-center font-black mb-6 shadow-md text-lg">
            رسالة للمطور 🚨: الكود بيبحث في الألعاب عن اسم: [{gameId}]<br/>
            (لو الكلمة اللي بين القوسين مش موجودة في ملف gamesData، ضيفها في القاموس!)
          </div>
        )}
{/* 🔍 جهاز الأشعة الدائم 🔍
        <div className="bg-sky-50 border-4 border-sky-400 text-sky-900 p-4 rounded-xl text-center font-bold mb-6 shadow-md text-xl" dir="ltr">
          <p>1. URL ID: <span className="text-red-600">{params?.id}</span></p>
          <p>2. Mapped ID: <span className="text-red-600">{gameId}</span></p>
          <p>3. Games Found: <span className="text-red-600">{gamesData[gameId] ? gamesData[gameId].length : "NONE (Not Found)"}</span></p>
        </div> */}
        <nav className="flex justify-center mb-12">
          <div className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-3xl p-2 rounded-full border border-slate-300 dark:border-white/10 flex gap-2 w-full max-w-2xl shadow-xl transition-colors">
            {["explore", "videos", "games"].map((tab) => (
              <button key={tab} onClick={() => { setActiveTab(tab as any); stopAllAudio(); }} className={`relative flex-1 flex items-center justify-center gap-2 py-3 rounded-full font-bold text-lg transition-all ${activeTab === tab ? "text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}>
                {activeTab === tab && <motion.div layoutId="navTabActive" className="absolute inset-0 bg-gradient-to-r from-sky-500 to-indigo-600 dark:from-sky-600 dark:to-indigo-700 rounded-full -z-10 shadow-md border border-white/20" />}
                <span className="capitalize">{tab === "explore" ? "اكتشف" : tab === "videos" ? "فيديوهات" : "ألعاب"}</span>
              </button>
            ))}
          </div>
        </nav>

        <section className="min-h-[400px] mb-12 relative z-20">
          <AnimatePresence mode="wait">
            {activeTab === "explore" && <ExploreTab key="explore" explore={data.explore}/>}
            {activeTab === "videos" && <VideosTab key="videos" videosData={data.videos} />}
            {activeTab === "games" && <GamesTab key="games" eduGame={gamesData[gameId]} />}
          </AnimatePresence>
        </section>

      </main>

      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-sky-400/20 dark:bg-sky-500/10 blur-[150px] rounded-full pointer-events-none transition-colors" />
      <div className="fixed bottom-1/4 -left-20 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/10 blur-[180px] rounded-full pointer-events-none transition-colors" />
      
    </div>
  );
}