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

  const continents = [
    { 
      id: "north-america", name: "أمريكا الشمالية", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018585/NorthAmerica_h8mzez.png", 
      top: "15%", left: "25%", size: "22rem",
      hoverAudio: "/audio/North America.mp3", 
      clickAudio: "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320051/amerca_vt1apb.mp3",
      detailsTitle: "قارة أمريكا الشمالية", 
      detailsDesc: "قارة ضخمة جداً، تتميز بوجود مساحات خضراء واسعة وجبال عالية، وتعتبر من أكثر الأماكن تطوراً في التكنولوجيا.",
      targetCountry: "أمريكا"
    },
    { 
      id: "south-america", name: "أمريكا الجنوبية", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018585/SouthAmerica_l5pwcq.png", 
      top: "45%", left: "28%", size: "24rem",
      hoverAudio: "/audio/South America.mp3", 
      clickAudio: "https://res.cloudinary.com/dj1tvn1or/video/upload/v1777386506/WhatsApp_Audio_2026-04-28_at_5.26.50_PM_bgfdin.ogg",
      detailsTitle: "قارة أمريكا الجنوبية", 
      detailsDesc: "أرض الطبيعة الساحرة! موطن أكبر غابة في العالم (غابات الأمازون) اللي بنسميها رئة كوكب الأرض.",
      targetCountry: "البرازيل"
    },
    { 
      id: "europe", name: "أوروبا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018584/Europe_d71p0w.png", 
      top: "15%", left: "44%", size: "18rem",
      hoverAudio: "/audio/Europe.mp3", 
      clickAudio: "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776320343/lahajati_______1776320312614_ilo9er.mp3",
      detailsTitle: "قارة أوروبا", 
      detailsDesc: "قارة الجمال والفن، مليانة قلاع تاريخية قديمة ومناظر طبيعية كأنها طالعة من القصص الخيالية.",
      targetCountry: "فرنسا"
    },
    { 
      id: "africa", name: "أفريقيا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018578/Africa_iewsja.png", 
      top: "42%", left: "58%", size: "28rem",
      hoverAudio: "/audio/Africa.mp3", 
      clickAudio: "https://res.cloudinary.com/djzqacydq/video/upload/v1777824492/WhatsApp_Audio_2026-05-03_at_7.03.46_PM_wzkyfj.ogg",
      detailsTitle: "قارة أفريقيا", 
      detailsDesc: "قارة الدفء والشمس! موطن الحيوانات البرية المدهشة زي الأسود، الزرافات، والأفيال، وفيها أطول أنهار العالم.",
      targetCountry: "مصر"
    },
    { 
      id: "asia", name: "آسيا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018579/Asia_j9qlby.png", 
      top: "15%", left: "68%", size: "35rem",
      hoverAudio: "/audio/Asia.mp3", 
      clickAudio: "https://res.cloudinary.com/dj1tvn1or/video/upload/v1777386893/WhatsApp_Audio_2026-04-28_at_4.51.49_PM_tspajy.ogg",
      detailsTitle: "قارة آسيا", 
      detailsDesc: "أكبر قارة في العالم! فيها تنوع عجيب جداً، من أعلى قمة جبل في العالم لحد أذكى الروبوتات.",
      targetCountry: "اليابان"
    },
    { 
      id: "australia", name: "أستراليا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018581/Australia_ymjfsx.png", 
      top: "65%", left: "75%", size: "16rem",
      hoverAudio: "/audio/Australia.mp3", 
      clickAudio: "https://res.cloudinary.com/djzqacydq/video/upload/v1777813926/WhatsApp_Audio_2026-05-03_at_4.05.06_PM_mtwqyn.ogg",
      detailsTitle: "قارة أستراليا", 
      detailsDesc: "قارة عبارة عن جزيرة عملاقة، بتتميز بكائنات مدهشة مش موجودة في أي مكان تاني في العالم غير هناك.",
      targetCountry: "أستراليا"
    },
    { 
      id: "antarctica", name: "أنتاركتيكا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018579/Antarctica_lnoprt.png", 
      top: "75%", left: "50%", size: "38rem",
      hoverAudio: "/audio/Antarctica.mp3", 
      clickAudio: "https://res.cloudinary.com/dj1tvn1or/video/upload/v1777481553/WhatsApp_Audio_2026-04-29_at_7.36.34_PM_firqmp.ogg",
      detailsTitle: "القارة القطبية", 
      detailsDesc: "أبرد مكان على كوكب الأرض! كله تلج وجليد، ومفيش ناس بتعيش هناك بشكل دائم، بس مليانة حيوانات لطيفة.",
      targetCountry: "البطريق"
    },
  ];

  const selectedContinent = continents.find(c => c.id === selectedId);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col items-center select-none bg-slate-50 dark:bg-black transition-colors duration-500" dir="rtl">
      
      {/* الخلفية: فيديو متحرك */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80">
          <source src="https://res.cloudinary.com/dhvuw8yog/video/upload/v1776018584/background_yprel9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-sky-100/40 dark:bg-[#020617]/70" />
      </div>

      {/* الهيدر: زر العودة (نمط طفولي حاد) */}
      <div className="relative w-full max-w-7xl flex justify-between items-center py-8 px-6 z-20">
        <Link href="/">
          <button className="bg-white border-[4px] border-black text-black px-8 py-3 rounded-2xl font-black flex items-center gap-3 shadow-[6px_6px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95">
            <ArrowRight className="w-6 h-6 rotate-180" />
            الرئيسية
          </button>
        </Link>

        {mounted && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-3 rounded-2xl bg-white border-[4px] border-black shadow-[6px_6px_0_0_#000] text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            {resolvedTheme === "dark" ? <Sun size={26} /> : <Moon size={26} />}
          </button>
        )}
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
                    ${isHovered ? "scale-110 brightness-110 drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]" : ""} 
                    ${isOthersHovered ? "grayscale opacity-20 blur-[2px]" : ""} 
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

                {/* اسم القارة بتصميم الكارتون الأبيض */}
                <span 
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-[4px] border-black px-8 py-3 rounded-2xl text-black font-black text-3xl transition-all duration-300 shadow-[8px_8px_0_0_#000] pointer-events-none whitespace-nowrap z-40
                    ${isHovered ? "opacity-100 scale-100 -translate-y-[120%]" : "opacity-0 scale-50"}
                  `}
                >
                  {continent.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* النافذة المنبثقة (Modal) بتصميم طفولي حاد */}
      <AnimatePresence mode="wait">
        {selectedId && selectedContinent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="fixed inset-0 bg-sky-200/60 backdrop-blur-md cursor-pointer"
            />

            <motion.div 
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 100, opacity: 0 }}
              className="relative z-10 w-full max-w-6xl bg-white border-[8px] border-black rounded-[3rem] shadow-[20px_20px_0_0_#000] overflow-hidden flex flex-col md:flex-row"
            >
              {/* صورة القارة في اليمين */}
              <div className="w-full md:w-1/2 bg-sky-100 p-10 flex items-center justify-center border-b-[8px] md:border-b-0 md:border-l-[8px] border-black">
                <img
                  src={selectedContinent.img}
                  alt={selectedContinent.name}
                  className="w-full h-auto drop-shadow-[10px_10px_0_rgba(0,0,0,0.1)]"
                />
              </div>

              {/* تفاصيل القارة في اليسار */}
              <div className="w-full md:w-1/2 p-10 flex flex-col justify-center text-right">
                <div className="flex items-center gap-4 mb-4">
                   <div className="bg-yellow-400 border-[4px] border-black p-3 rounded-2xl shadow-[4px_4px_0_0_#000]">
                      <Map className="w-8 h-8 text-black" />
                   </div>
                   <h2 className="text-5xl font-black text-black italic leading-none uppercase">
                    {selectedContinent.detailsTitle}
                  </h2>
                </div>

                <p className="text-2xl font-bold text-slate-800 leading-relaxed mb-8">
                  {selectedContinent.detailsDesc}
                </p>

                {/* زر الدولة المستهدفة */}
                <div className="bg-emerald-400 border-[4px] border-black p-5 rounded-[2rem] shadow-[8px_8px_0_0_#000] mb-10 inline-block self-start">
                   <span className="text-3xl font-black text-black">{selectedContinent.targetCountry}</span>
                </div>

                <div className="flex flex-col sm:flex-row gap-6">
                  <Link href={`/kids/continent/${selectedContinent.id}`} className="flex-1">
                    <button 
                      className="w-full bg-sky-400 border-[5px] border-black text-black py-5 rounded-[1.5rem] font-black text-3xl shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    >
                      استكشاف
                    </button>
                  </Link>

                  <button 
                    onClick={() => playSound(selectedContinent.clickAudio)}
                    className="p-5 bg-yellow-400 border-[5px] border-black rounded-[1.5rem] shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                  >
                    <Volume2 className="w-10 h-10 text-black" />
                  </button>
                </div>
              </div>

              {/* زر الإغلاق */}
              <button 
                onClick={closePopup}
                className="absolute top-6 left-6 p-2 bg-white border-[4px] border-black rounded-xl hover:bg-rose-500 transition-colors"
              >
                <X className="w-8 h-8 text-black" />
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}