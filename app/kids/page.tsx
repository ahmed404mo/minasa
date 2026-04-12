"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function KidsContinentsHub() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const activeAudioRef = useRef<HTMLAudioElement | null>(null);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // إعدادات الفيديو
  useEffect(() => {
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

  // المصفوفة المحدثة بلينكات Cloudinary
  const continents = [
    { 
      id: "north-america", name: "أمريكا الشمالية", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018585/NorthAmerica_h8mzez.png", 
      top: "15%", left: "25%", size: "22rem",
      hoverAudio: "/audio/North America.mp3", clickAudio: "/audio/details/NorthAmericaDetails.mp3",
      detailsTitle: "أمريكا الشمالية 🇺🇸", detailsDesc: "موطن ناطحات السحاب العملاقة، التكنولوجيا المتطورة، وأكبر المتنزهات الترفيهية في العالم!"
    },
    { 
      id: "south-america", name: "أمريكا الجنوبية", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018585/SouthAmerica_l5pwcq.png", 
      top: "45%", left: "28%", size: "24rem",
      hoverAudio: "/audio/South America.mp3", clickAudio: "/audio/details/SouthAmericaDetails.mp3",
      detailsTitle: "أمريكا الجنوبية 🇧🇷", detailsDesc: "أرض غابات الأمازون السحرية، والرقصات الملونة، وأمهر لاعبي كرة القدم المحترفين."
    },
    { 
      id: "europe", name: "أوروبا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018584/Europe_d71p0w.png", 
      top: "15%", left: "44%", size: "18rem",
      hoverAudio: "/audio/Europe.mp3", clickAudio: "/audio/details/EuropeDetails.mp3",
      detailsTitle: "قارة أوروبا 🇫🇷", detailsDesc: "تشتهر ببرج إيفل الرائع، القلاع التاريخية القديمة، وألذ أنواع الشوكولاتة والمخبوزات."
    },
    { 
      id: "africa", name: "أفريقيا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018578/Africa_iewsja.png", 
      top: "42%", left: "58%", size: "28rem",
      hoverAudio: "/audio/Africa.mp3", clickAudio: "/audio/details/AfricaDetails.mp3",
      detailsTitle: "أفريقيا العظيمة 🇪🇬", detailsDesc: "أرض الأهرامات الشامخة، الغابات الواسعة المليئة بالأسود والزرافات، ونهر النيل الطويل."
    },
    { 
      id: "asia", name: "آسيا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018579/Asia_j9qlby.png", 
      top: "15%", left: "68%", size: "35rem",
      hoverAudio: "/audio/Asia.mp3", clickAudio: "/audio/details/AsiaDetails.mp3",
      detailsTitle: "قارة آسيا 🇯🇵", detailsDesc: "أكبر قارات العالم، موطن سور الصين العظيم، الروبوتات الذكية، وجبال الهيمالايا العالية."
    },
    { 
      id: "australia", name: "أستراليا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018581/Australia_ymjfsx.png", 
      top: "65%", left: "75%", size: "16rem",
      hoverAudio: "/audio/Australia.mp3", clickAudio: "/audio/details/AustraliaDetails.mp3",
      detailsTitle: "أستراليا الممتعة 🇦🇺", detailsDesc: "القارة الجزيرة، حيث يمكنك رؤية حيوان الكنغر يقفز بحرية واكتشاف الشعاب المرجانية الملونة."
    },
    { 
      id: "antarctica", name: "أنتاركتيكا", 
      img: "https://res.cloudinary.com/dhvuw8yog/image/upload/v1776018579/Antarctica_lnoprt.png", 
      top: "75%", left: "50%", size: "38rem",
      hoverAudio: "/audio/Antarctica.mp3", clickAudio: "/audio/details/AntarcticaDetails.mp3",
      detailsTitle: "مملكة الجليد 🐧", detailsDesc: "أبرد مكان على وجه الأرض، مغطاة بالجليد الأبيض تماماً، وهي البيت المفضل لطيور البطريق."
    },
  ];

  const selectedContinent = continents.find(c => c.id === selectedId);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col items-center select-none bg-black pb-20 lg:pb-0" dir="rtl">
      
      {/* الخلفية: فيديو متحرك مع رابط Cloudinary */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dhvuw8yog/video/upload/v1776018584/background_yprel9.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#020617]/50" />
      </div>

      {/* زر العودة العلوي */}
      <div className="relative w-full max-w-7xl flex justify-start py-8 px-6 z-20">
        <Link href="/">
          <button className="bg-white/10 backdrop-blur-2xl text-white/90 px-6 py-4 md:px-8 md:py-4 rounded-3xl border border-white/20 hover:bg-white hover:text-black transition-all duration-500 font-black flex items-center gap-3 shadow-xl active:scale-95">
            <ArrowRight className="w-6 h-6 rotate-180" />
            العودة للرئيسية
          </button>
        </Link>
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
            <div className="bg-white px-10 py-4 rounded-[2rem] text-sky-900 font-black text-3xl shadow-2xl border-[5px] border-sky-400 absolute -bottom-10 z-20 whitespace-nowrap">
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
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-3 rounded-2xl text-sky-900 font-black text-3xl transition-all duration-300 shadow-2xl border-4 border-sky-400 pointer-events-none whitespace-nowrap z-40
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

      {/* Modal Popup */}
      <AnimatePresence mode="wait">
        {selectedId && selectedContinent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-20 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePopup}
              className="fixed inset-0 bg-[#020617]/95 backdrop-blur-3xl cursor-pointer"
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
                  <div className="flex flex-col items-center md:items-start space-y-6 md:space-y-8">
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }}
                      className="px-6 py-2 bg-sky-500/20 border border-sky-400/30 rounded-full backdrop-blur-md inline-block"
                    >
                      <span className="text-sky-300 font-black tracking-widest text-sm md:text-base uppercase flex items-center justify-center gap-3">
                        <Sparkles className="w-5 h-5 text-yellow-400" /> وجهتك القادمة
                      </span>
                    </motion.div>

                    <h2 className="text-5xl md:text-8xl font-black text-white leading-tight tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                      {selectedContinent.detailsTitle}
                    </h2>
                    
                    <p className="text-xl md:text-3xl font-bold text-slate-200 leading-relaxed max-w-2xl border-t-4 md:border-t-0 md:border-r-8 border-sky-500 pt-4 md:pt-0 md:pr-8">
                      {selectedContinent.detailsDesc}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full pt-8">
                      <Link href={`/kids/continent/${selectedContinent.id}`} className="group flex-1">
                        <motion.button 
                          whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(14,165,233,0.4)" }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-sky-500 text-white px-8 py-5 md:px-12 md:py-6 rounded-3xl md:rounded-[2rem] font-black text-2xl md:text-3xl shadow-xl flex items-center justify-center gap-4 transition-all"
                        >
                          يالا نستكشف! 🚀
                        </motion.button>
                      </Link>

                      <button 
                        onClick={closePopup}
                        className="px-8 py-5 md:px-10 md:py-6 rounded-3xl md:rounded-[2rem] font-black text-xl text-white/60 hover:text-white hover:bg-white/10 transition-all border border-white/20 backdrop-blur-sm"
                      >
                        العودة للخريطة
                      </button>
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
                    className="w-[280px] md:w-[600px] lg:w-[750px] h-auto drop-shadow-[0_0_100px_rgba(56,189,248,0.6)] filter brightness-125 transition-all"
                  />
                </motion.div>
              </div>
            </div>

            <button 
              onClick={closePopup}
              className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 bg-white/10 text-white/80 hover:text-white hover:bg-red-500 rounded-full transition-all border border-white/20 z-50 backdrop-blur-md shadow-2xl"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </button>
          </div>
        )}
      </AnimatePresence>
      
    </div>
  );
}