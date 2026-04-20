"use client";
import { ArrowRight, Sparkles, X, Sun, Moon, Map, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes"; 

export default function KidsContinentsHub() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (videoRef.current) videoRef.current.playbackRate = 0.5;

    return () => {
      if (activeAudioRef.current) {
        activeAudioRef.current.pause();
        activeAudioRef.current = null;
      }
    };
  }, []);

  const playSound = (src: string) => {
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
      activeAudioRef.current.currentTime = 0;
    }
    const audio = new Audio(src);
    activeAudioRef.current = audio;
    audio.play().catch(err => console.log("Audio play error:", err));
  };

  const closePopup = () => {
    setSelectedId(null);
    if (activeAudioRef.current) {
      activeAudioRef.current.pause();
    }
  };

  // 🌟 تم إضافة الروابط الصوتية الحقيقية الخاصة بك في clickAudio
  const continents = [
    { 
      id: "north-america", name: "أمريكا الشمالية", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018585/NorthAmerica_h8mzez.png", 
      top: "15%", left: "25%", size: "22rem",
      hoverAudio: "/audio/North America.mp3", 
      clickAudio: "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320051/amerca_vt1apb.mp3",
      detailsTitle: "قارة أمريكا الشمالية 🌍", 
      detailsDesc: "قارة ضخمة جداً، تتميز بوجود مساحات خضراء واسعة وجبال عالية، وتعتبر من أكثر الأماكن تطوراً في التكنولوجيا.",
      targetCountry: "تعالى نشوف أشهر بلد فيها.. أمريكا! 🇺🇸"
    },
    { 
      id: "south-america", name: "أمريكا الجنوبية", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018585/SouthAmerica_l5pwcq.png", 
      top: "45%", left: "28%", size: "24rem",
      hoverAudio: "/audio/South America.mp3", 
      clickAudio: "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320130/elbarazel_kcfuet.mp3",
      detailsTitle: "قارة أمريكا الجنوبية 🌍", 
      detailsDesc: "أرض الطبيعة الساحرة! موطن أكبر غابة في العالم (غابات الأمازون) اللي بنسميها رئة كوكب الأرض.",
      targetCountry: "تعالى نشوف أشهر بلد فيها.. البرازيل! 🇧🇷"
    },
    { 
      id: "europe", name: "أوروبا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018584/Europe_d71p0w.png", 
      top: "15%", left: "44%", size: "18rem",
      hoverAudio: "/audio/Europe.mp3", 
      clickAudio: "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320343/lahajati_______1776320312614_ilo9er.mp3",
      detailsTitle: "قارة أوروبا 🌍", 
      detailsDesc: "قارة الجمال والفن، مليانة قلاع تاريخية قديمة ومناظر طبيعية كأنها طالعة من القصص الخيالية.",
      targetCountry: "تعالى نشوف أشهر بلد فيها.. فرنسا! 🇫🇷"
    },
    { 
      id: "africa", name: "أفريقيا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018578/Africa_iewsja.png", 
      top: "42%", left: "58%", size: "28rem",
      hoverAudio: "/audio/Africa.mp3", 
      clickAudio: "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320439/lahajati_______1776320414712_nsicv4.mp3",
      detailsTitle: "قارة أفريقيا 🌍", 
      detailsDesc: "قارة الدفء والشمس! موطن الحيوانات البرية المدهشة زي الأسود، الزرافات، والأفيال، وفيها أطول أنهار العالم.",
      targetCountry: "تعالى نشوف أشهر بلد فيها.. مصر! 🇪🇬"
    },
    { 
      id: "asia", name: "آسيا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018579/Asia_j9qlby.png", 
      top: "15%", left: "68%", size: "35rem",
      hoverAudio: "/audio/Asia.mp3", 
      clickAudio: "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320517/lahajati_______1776320496740_tdn6d6.mp3",
      detailsTitle: "قارة آسيا 🌍", 
      detailsDesc: "أكبر قارة في العالم! فيها تنوع عجيب جداً، من أعلى قمة جبل في العالم لحد أذكى الروبوتات.",
      targetCountry: "تعالى نشوف أشهر بلد فيها.. اليابان! 🇯🇵"
    },
    { 
      id: "australia", name: "أستراليا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018581/Australia_ymjfsx.png", 
      top: "65%", left: "75%", size: "16rem",
      hoverAudio: "/audio/Australia.mp3", 
      clickAudio: "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320578/lahajati_______1776320557384_m89lgf.mp3",
      detailsTitle: "قارة أستراليا 🌍", 
      detailsDesc: "قارة عبارة عن جزيرة عملاقة، بتتميز بكائنات مدهشة مش موجودة في أي مكان تاني في العالم غير هناك.",
      targetCountry: "تعالى نشوف أشهر بلد فيها.. أستراليا! 🇦🇺"
    },
    { 
      id: "antarctica", name: "أنتاركتيكا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018579/Antarctica_lnoprt.png", 
      top: "75%", left: "50%", size: "38rem",
      hoverAudio: "/audio/Antarctica.mp3", 
      clickAudio: "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320646/lahajati_______1776320623692_vecbm0.mp3",
      detailsTitle: "القارة القطبية ❄️", 
      detailsDesc: "أبرد مكان على كوكب الأرض! كله تلج وجليد، ومفيش ناس بتعيش هناك بشكل دائم، بس مليانة حيوانات لطيفة.",
      targetCountry: "تعالى نشوف أشهر سكانها.. البطريق! 🐧"
    },
  ];

  const selectedContinent = continents.find(c => c.id === selectedId);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col items-center select-none bg-slate-50 dark:bg-black pb-20 lg:pb-0 transition-colors duration-500" dir="rtl">
      
      {/* الخلفية: فيديو متحرك */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dhvuw8yog/video/upload/v1776018584/background_yprel9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-100/60 dark:bg-[#020617]/60 transition-colors duration-500" />
      </div>

      {/* الهيدر: زر العودة + زر التبديل */}
      <div className="relative w-full max-w-7xl flex justify-between items-center py-8 px-6 z-20">
        <Link href="/">
          <button className="bg-white/60 dark:bg-white/10 backdrop-blur-2xl text-slate-800 dark:text-white/90 px-6 py-4 md:px-8 md:py-4 rounded-3xl border border-slate-300 dark:border-white/20 hover:bg-white dark:hover:bg-white hover:text-sky-600 dark:hover:text-black transition-all duration-500 font-black flex items-center gap-3 shadow-xl active:scale-95">
            <ArrowRight className="w-6 h-6 rotate-180" />
            العودة للرئيسية
          </button>
        </Link>

        {mounted && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-3 md:p-4 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-2xl border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white hover:scale-110 transition-all shadow-xl"
          >
            {resolvedTheme === "dark" ? <Sun size={26} className="text-sky-400" /> : <Moon size={26} className="text-sky-600" />}
          </button>
        )}
      </div>

      {/* 1. تصميم الموبايل */}
      <div className="flex lg:hidden flex-col items-center justify-center gap-24 w-full z-10 px-4 pt-10 pb-20">
        {continents.map((continent) => (
          <motion.div
            key={`mobile-${continent.id}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="relative flex flex-col items-center cursor-pointer active:scale-95 transition-transform"
            onClick={() => {
              playSound(continent.clickAudio);
              setSelectedId(continent.id);
            }}
          >
            <div className="absolute inset-0 bg-sky-500/20 blur-[60px] rounded-full -z-10" />
            <motion.img
              layoutId={`continent-img-${continent.id}`}
              src={continent.img}
              alt={continent.name}
              className="w-[280px] h-auto drop-shadow-[0_15px_30px_rgba(56,189,248,0.4)] filter brightness-110"
            />
            <div className="bg-white dark:bg-slate-800 px-10 py-4 rounded-[2rem] text-sky-700 dark:text-sky-300 font-black text-3xl shadow-2xl border-[5px] border-sky-400 dark:border-sky-600 absolute -bottom-10 z-20 whitespace-nowrap transition-colors duration-500">
              {continent.name}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 2. تصميم الكمبيوتر */}
      <div className="hidden lg:block relative flex-1 w-full max-w-[1400px] z-10">
        {continents.map((continent) => {
          const isHovered = hoveredId === continent.id;
          const isOthersHovered = hoveredId !== null && hoveredId !== continent.id;

          return (
            <div
              key={continent.id}
              className="absolute pointer-events-none" 
              style={{ 
                  top: continent.top, 
                  left: continent.left,
                  transform: 'translate(-50%, -50%)',
                  zIndex: isHovered ? 50 : 10 
              }}
            >
              <div className="relative flex flex-col items-center pointer-events-none">
                <motion.img 
                  layoutId={`continent-img-desktop-${continent.id}`}
                  src={continent.img} 
                  alt={continent.name}
                  className={`h-auto transition-all duration-500 pointer-events-none
                    ${isHovered ? "scale-110 drop-shadow-[0_0_40px_rgba(56,189,248,0.8)]" : "drop-shadow-2xl"} 
                    ${isOthersHovered ? "grayscale opacity-30 blur-[4px]" : ""} 
                  `}
                  style={{ width: continent.size }} 
                />
                
                <div 
                  className="absolute inset-0 z-30 rounded-full pointer-events-auto cursor-pointer"
                  onMouseEnter={() => {
                    setHoveredId(continent.id);
                    playSound(continent.hoverAudio); 
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => {
                    playSound(continent.clickAudio);
                    setSelectedId(continent.id); 
                  }}
                />

                <span 
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 px-8 py-3 rounded-2xl text-sky-700 dark:text-sky-300 font-black text-3xl transition-all duration-300 shadow-2xl border-4 border-sky-400 dark:border-sky-600 pointer-events-none whitespace-nowrap z-40
                    ${isHovered ? "opacity-100 scale-100 -translate-y-[80%]" : "opacity-0 scale-50"}
                  `}
                >
                  {continent.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* النافذة المنبثقة (Modal) */}
      <AnimatePresence mode="wait">
        {selectedId && selectedContinent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-20 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="fixed inset-0 bg-white/80 dark:bg-[#020617]/95 backdrop-blur-3xl cursor-pointer transition-colors duration-500"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10 my-auto py-10 md:py-0">
              <motion.div
                initial={{ opacity: 0, x: -100, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="w-full md:w-3/5 order-2 md:order-1 text-center md:text-right flex flex-col items-center md:items-start"
              >
                <div className="relative w-full max-w-2xl">
                  <div className="absolute -inset-10 bg-sky-500/10 blur-[120px] rounded-full -z-10 hidden md:block" />
                  <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
                    
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      className="px-6 py-2 bg-sky-100 dark:bg-sky-500/20 border border-sky-300 dark:border-sky-400/30 rounded-full backdrop-blur-md inline-block transition-colors"
                    >
                      <span className="text-sky-600 dark:text-sky-300 font-black tracking-widest text-sm md:text-base uppercase flex items-center justify-center gap-3">
                        <Map className="w-5 h-5 text-sky-500 dark:text-sky-400" /> وجهتك القادمة
                      </span>
                    </motion.div>
<div className="flex justify-center md:justify-start">
  <motion.button
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    onClick={() => playSound(selectedContinent.clickAudio)}
    // 🌟 تم تقليل الـ padding لـ p-3 والـ rounded لـ 2xl والـ border لـ 2
    className="p-3 md:p-4 bg-sky-500 hover:bg-sky-600 text-white rounded-2xl shadow-md shadow-sky-500/30 transition-all flex items-center justify-center border-2 border-white dark:border-slate-800 active:bg-sky-700"
    title="اسمع الحكاية"
  >
    {/* 🌟 تصغير الأيقونة لـ w-6 في الموبايل و w-8 في الديسكتوب */}
    <Volume2 className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
  </motion.button>
</div>
                    <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter drop-shadow-lg dark:drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-colors">
                      {selectedContinent.detailsTitle}
                    </h2>
                    
                    {/* 🌟 1. وصف القارة الأساسي */}
                    
                    <p className="text-xl md:text-2xl font-bold text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl transition-colors">
                      {selectedContinent.detailsDesc}
                    </p>

                    {/* 🌟 2. التمهيد للبلد المشهورة (Box مميز) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                      className="bg-sky-50 dark:bg-sky-900/30 border-r-8 border-sky-500 border-l border-t border-b border-sky-200 dark:border-sky-500/20 p-5 md:p-6 rounded-2xl w-full text-right shadow-sm mt-2"
                    >
                      <h3 className="text-xl md:text-3xl font-black text-sky-700 dark:text-sky-300 flex items-center gap-3">
                        
                        <Sparkles className="w-6 h-6 text-yellow-500" />
                        {selectedContinent.targetCountry}
                      </h3>
                    </motion.div>

{/* أزرار التحكم داخل الـ Modal */}
<div className="flex flex-col gap-6 w-full pt-6">
  
  {/* 🌟 زر السماعة الكبير */}


  {/* أزرار التنقل */}
  <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full">
    <Link href={`/kids/continent/${selectedContinent.id}`} className="group flex-1">
      <motion.button 
        onMouseEnter={() => playSound("https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320862/lahajati_______1776320833923_ixjjqa.mp3")}
        whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(14,165,233,0.4)" }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-sky-500 text-white px-8 py-5 md:px-12 md:py-6 rounded-3xl md:rounded-[2rem] font-black text-2xl md:text-3xl shadow-xl flex items-center justify-center gap-4 transition-all"
      >
        يلا نكتشف! 🚀
      </motion.button>
    </Link>

    <button 
      onClick={closePopup}
      onMouseEnter={() => playSound("https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320946/lahajati_______1776320928874_wppavz.mp3")}
      className="px-8 py-5 md:px-10 md:py-6 rounded-3xl md:rounded-[2rem] font-black text-xl text-slate-700 dark:text-white/60 bg-slate-200/50 dark:bg-transparent hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-white/10 transition-all border border-slate-300 dark:border-white/20 backdrop-blur-sm"
    >
      العودة للخريطة
    </button>
  </div>
</div>
                  </div>
                </div>
              </motion.div>

              <div className="w-full md:w-2/5 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-sky-400/20 blur-[150px] rounded-full" />
                  <motion.img
                    src={selectedContinent.img}
                    alt={selectedContinent.name}
                    className="w-[280px] md:w-[600px] lg:w-[750px] h-auto drop-shadow-[0_0_100px_rgba(56,189,248,0.6)] filter brightness-110 dark:brightness-125 transition-all"
                  />
                </motion.div>
              </div>
            </div>

            <button 
              onClick={closePopup}
              className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white/80 hover:text-white hover:bg-red-500 dark:hover:bg-red-500 rounded-full transition-all border border-slate-300 dark:border-white/20 z-50 backdrop-blur-md shadow-2xl"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}