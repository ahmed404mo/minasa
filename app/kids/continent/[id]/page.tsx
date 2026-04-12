"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Gamepad2, Tv, Sparkles, Trophy,
  MapPin, Utensils, Camera, CheckCircle2, X
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

// ==========================================
// 1. قاعدة البيانات 
// ==========================================
const countryData: Record<string, any> = {
  "north-america": {
    countryName: "الولايات المتحدة الأمريكية 🇺🇸",
    continentName: "أمريكا الشمالية",
    theme: "from-blue-900 via-indigo-900 to-violet-950",
    img: "/map/NorthAmerica.png",
    explore: [
      { icon: Camera, title: "تمثال الحرية", desc: "تمثال كبير أوي في نيويورك بيهدي الناس للسلام." },
      { icon: Utensils, title: "البرجر والهوت دوج", desc: "من أشهر الأكلات اللي بيحبوها وبياكلوها هناك!" },
      { icon: MapPin, title: "هوليوود", desc: "المكان اللي بيعملوا فيه أكبر وأحلى أفلام الكرتون والسينما." },
    ],
    videos: [
      { 
        title: "اكتشف الولايات المتحدة 🇺🇸", 
        url: "https://player.cloudinary.com/embed/?cloud_name=da52viu5e&public_id=%D8%A7%D9%84%D9%88%D9%84%D8%A7%D9%8A%D8%A7%D8%AA_%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9_%D8%A7%D9%84%D8%A7%D9%85%D8%B1%D9%8A%D9%83%D9%8A%D8%A9_dnzyrf",
      },
    ],
    eduGame: [
      {
        riddle: "أنا تمثال ضخم جداً، ماسك شعلة منورة في إيدي، وفرنسا أهدتني لأمريكا.. أنا مين؟",
        options: [
          { icon: "🗽", text: "تمثال الحرية" }, 
          { icon: "🗼", text: "برج إيفل" }, 
          { icon: "🗿", text: "جزيرة إيستر" }
        ],
        answer: "تمثال الحرية",
        fact: "المعلومة السحرية 🌟: تعرف إن تمثال الحرية لونه الأصلي كان نحاسي زي الكوينز؟ بس لونه قلب أخضر عشان الهوا والمطر!",
      },
    ],
  },
  "south-america": {
    countryName: "البرازيل 🇧🇷",
    continentName: "أمريكا الجنوبية",
    theme: "from-green-900 via-emerald-900 to-teal-950",
    img: "/map/SouthAmerica.png",
    explore: [
      { icon: Camera, title: "غابات الأمازون", desc: "أكبر غابة في العالم، مليانة حيوانات وطيور شكلها عجيب!" },
      { icon: Trophy, title: "كرة القدم", desc: "البرازيل أكتر دولة كسبت كاس العالم، وكلهم هناك حريفة كورة!" },
      { icon: MapPin, title: "نهر الأمازون", desc: "نهر ضخم جداً بيعيش فيه كائنات مذهلة ومفترسة." },
    ],
    videos: [
      { 
        title: "جمال البرازيل والأمازون 🇧🇷", 
        url: "https://player.cloudinary.com/embed/?cloud_name=dwxizyr3l&public_id=%D9%81%D9%8A%D8%AF_%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D8%B2%D9%8A%D9%84_oa4bvs",
      },
    ],
    eduGame: [
      {
        riddle: "أنا أكبر غابة استوائية على كوكب الأرض، وبدي الأكسجين للعالم كله.. أنا مين؟",
        options: [{ icon: "🌳", text: "غابات الأمازون" }, { icon: "🌵", text: "الصحراء الكبرى" }, { icon: "❄️", text: "الغابة الثلجية" }],
        answer: "غابات الأمازون",
        fact: "المعلومة السحرية 🌟: تعرف إن غابات الأمازون كبيرة جداً لدرجة إنهم بيسموها (رئة الأرض)!",
      },
    ],
  },
  "asia": {
    countryName: "اليابان 🇯🇵",
    continentName: "آسيا",
    theme: "from-rose-900 via-pink-900 to-red-950",
    img: "/map/asia.png",
    explore: [
      { icon: Camera, title: "جبل فوجي", desc: "جبل بركاني شكله تحفة والتلج مغطي قمته من فوق." },
      { icon: Sparkles, title: "الأنمي والتكنولوجيا", desc: "اليابان بتعمل أحلى مسلسلات كرتون وتكنولوجيا سابقة عصرها." },
      { icon: Utensils, title: "السوشي", desc: "أكلة صحية ومشهورة جداً بتتعمل من الرز والسمك الطازة." },
    ],
    videos: [
      { 
        title: "عالم اليابان المذهل 🇯🇵", 
        url: "https://player.cloudinary.com/embed/?cloud_name=da52viu5e&public_id=%D9%81%D9%8A%D8%AF%D9%8A%D9%88_%D8%A7%D9%84%D9%8A%D8%A7%D8%A8%D8%A7%D9%86_xkqzok",
      },
    ],
    eduGame: [
      {
        riddle: "أنا أكل ياباني صحي جداً، بتعمل من الرز والسمك وبيلفوني بأعشاب البحر.. اسمي إيه؟",
        options: [{ icon: "🍣", text: "السوشي" }, { icon: "🍜", text: "النودلز" }, { icon: "🌮", text: "التاكو" }],
        answer: "السوشي",
        fact: "المعلومة السحرية 🌟: تعرف إن اليابانيين بياكلوا السوشي بعصيان خشب اسمها (هاشي)!",
      },
    ],
  },
  "australia": {
    countryName: "أستراليا 🇦🇺",
    continentName: "أستراليا",
    theme: "from-teal-900 via-cyan-900 to-sky-950",
    img: "/map/australia.png",
    explore: [
      { icon: Camera, title: "دار الأوبرا بسيدني", desc: "مبنى شكله مميز جداً وعامل زي شراع المركب بالظبط." },
      { icon: Sparkles, title: "الكنغر والكوالا", desc: "حيوانات عجيبة مش بتعيش في أي حتة تانية في العالم غير هناك." },
      { icon: MapPin, title: "الحاجز المرجاني", desc: "أكبر مكان فيه شعاب مرجانية وأسماك ملونة تحت الماية." },
    ],
    videos: [
      { 
        title: "مغامرة في أستراليا 🇦🇺", 
        url: "https://player.cloudinary.com/embed/?cloud_name=dwxizyr3l&public_id=0401_m4rako",
      },
    ],
    eduGame: [
      {
        riddle: "أنا حيوان لطيف جداً، بنط عالي أوي، وبشيل طفلي الصغير في جيب في بطني.. أنا مين؟",
        options: [{ icon: "🦘", text: "الكنغر" }, { icon: "🐒", text: "القرد" }, { icon: "🐘", text: "الفيل" }],
        answer: "الكنغر",
        fact: "المعلومة السحرية 🌟: تعرف إن الكنغر مبيعرفش يمشي لورا أبداً؟ ده بسبب شكل رجليه الخلفية القوية!",
      },
    ],
  },
  "antarctica": {
    countryName: "أنتاركتيكا 🐧",
    continentName: "القارة القطبية",
    theme: "from-slate-800 via-sky-900 to-blue-950",
    img: "/map/antarctica.png",
    explore: [
      { icon: Camera, title: "الجبال الجليدية", desc: "جبال ضخمة جداً من التلج عايمة في الماية." },
      { icon: Sparkles, title: "البطريق الإمبراطور", desc: "أكبر أنواع البطاريق بيعيش هناك وبيستحمل البرد القارس." },
      { icon: MapPin, title: "محطات الأبحاث", desc: "مفيش مدن هناك، بس فيه علماء بيدرسوا التلج والطقس." },
    ],
    videos: [
      { 
        title: "عالم الجليد في أنتاركتيكا ❄️", 
        url: "https://player.cloudinary.com/embed/?cloud_name=da52viu5e&public_id=%D9%81%D9%8A%D8%AF%D9%8A%D9%88_%D8%B9%D9%86_%D9%82%D8%A7%D8%B1%D9%87_%D8%A7%D9%86%D8%AA%D8%B1%D9%83%D8%A7%D8%AA%D9%8A%D9%83%D8%A7_xl6kxm",
      },
    ],
    eduGame: [
      {
        riddle: "أنا طائر بس مش بطير، لابس بدلة سودة في أبيض، وبموت في العوم في التلج.. أنا مين؟",
        options: [{ icon: "🐧", text: "البطريق" }, { icon: "🦅", text: "النسر" }, { icon: "🦉", text: "البومة" }],
        answer: "البطريق",
        fact: "المعلومة السحرية 🌟: تعرف إن البطريق يقدر يكتم نفسه تحت الماية لمدة توصل لـ 20 دقيقة عشان يصطاد السمك!",
      },
    ],
  },
  "africa": {
    countryName: "مصر 🇪🇬",
    continentName: "أفريقيا",
    theme: "from-orange-900 via-amber-900 to-red-950",
    img: "/map/africa.png",
    explore: [
      { icon: Camera, title: "أهرامات الجيزة", desc: "من عجايب الدنيا السبع، بناها الفراعنة من آلاف السنين." },
      { icon: MapPin, title: "نهر النيل", desc: "أطول نهر في العالم، وهو شريان الحياة لكل المصريين." },
      { icon: Utensils, title: "الكشري", desc: "أكلة مصرية شعبية طعمها حكاية، فيها مكرونة ورز وعدس." },
    ],
    videos: [],
    eduGame: [
      {
        riddle: "أنا مقابر عملاقة بناها الفراعنة زمان على شكل مثلثات عشان أكون أعجوبة الزمن.. أنا مين؟",
        options: [{ icon: "🔺", text: "الأهرامات" }, { icon: "🏢", text: "ناطحات السحاب" }, { icon: "🏟️", text: "الملعب الروماني" }],
        answer: "الأهرامات",
        fact: "المعلومة السحرية 🌟: تعرف إن الهرم الأكبر متكون من أكتر من 2 مليون حجر عملاق!",
      },
    ],
  },
"europe": {
    countryName: "فرنسا 🇫🇷",
    continentName: "أوروبا",
    theme: "from-sky-900 via-cyan-900 to-blue-950",
    img: "/map/europe.png",
    explore: [
      { 
        icon: Camera, 
        title: "برج إيفل", 
        desc: "برج طويل أوي معمول من الحديد وواقف بشموخ في العاصمة باريس.",
        audio: "/audio-2/Europe/اكتشف/1.mp3" 
      },
      { 
        icon: Utensils, 
        title: "الكرواسون", 
        desc: "فرنسا بتعمل أحلى كرواسون ممكن تدوقه في حياتك!",
        audio: "/audio-2/Europe/اكتشف/2.mp3" 
      },
      { 
        icon: MapPin, 
        title: "متحف اللوفر", 
        desc: "متحف كبير جداً فيه لوحات مشهورة أوي زي لوحة الموناليزا.",
        audio: "/audio-2/Europe/اكتشف/3.mp3" 
      },
    ],
    videos: [
      { 
        title: "جولة ساحرة في فرنسا 🇫🇷", 
        url: "https://player.cloudinary.com/embed/?cloud_name=demnqufza&public_id=1775075909_merged_video_57070299_tfutff",
        thumb: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=800" 
      },
    ],
    eduGame: [
      {
        riddle: "أنا برج طويل جداً معمول من الحديد، وواقف منور في وسط باريس.. أنا مين؟",
        options: [
          { icon: "🗼", text: "برج إيفل" }, 
          { icon: "🗽", text: "تمثال الحرية" }, 
          { icon: "🏰", text: "قلعة لندن" }
        ],
        answer: "برج إيفل",
        fact: "المعلومة السحرية 🌟: تعرف إن برج إيفل بيطول حوالي 15 سنتيمتر في الصيف عشان الحديد بيتمدد مع الحرارة!",
      },
      {
        riddle: "أنا مخبوزات طعمها يجنن، شكلي عامل زي الهلال، وبدأت شهرتي من فرنسا.. اسمي إيه؟",
        options: [
          { icon: "🥐", text: "الكرواسون" }, 
          { icon: "🍕", text: "البيتزا" }, 
          { icon: "🍔", text: "البرجر" }
        ],
        answer: "الكرواسون",
        fact: "المعلومة السحرية 🌟: تعرف إن كلمة كرواسون بالفرنساوي معناها (الهلال) عشان هو واخد شكل القمر لما بيبقى هلال!",
      },
    ],
  },
};

// ==========================================
// 2. المكون الرئيسي
// ==========================================
export default function CountryHub() {
  const params = useParams();
  const id = params?.id as string;
  const data = countryData[id];

  const [activeTab, setActiveTab] = useState<"explore" | "videos" | "games">("explore");
  
  // States للعبة
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFactBoard, setShowFactBoard] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  
  const [playingVideo, setPlayingVideo] = useState<any | null>(null);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => { return () => stopAllAudio(); }, []);

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

  // 🌟 دالة تشغيل أصوات الإجابة الصح والخطأ
  const playFeedbackSound = (type: "correct" | "wrong") => {
    const url = type === "correct" 
      ? "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776009411/u_y6jn4lst7i-benar-494211__cut_1sec_bsp1ld.mp3" 
      : "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776009641/mrstokes302-nooo-boy-sfx-451535__cut_1sec_xi9wjz.mp3";
    
    const audio = new Audio(url);
    audio.play().catch(e => console.error("Audio error:", e));
  };

  // معالجة الإجابات في اللعبة
  const handleAnswer = (selectedText: string) => {
    if (!data?.eduGame) return;
    
    if (selectedText === data.eduGame[currentQuestionIndex].answer) {
      playFeedbackSound("correct"); // 🌟 تشغيل صوت الإجابة الصح
      setShowFactBoard(true);
    } else {
      playFeedbackSound("wrong"); // 🌟 تشغيل صوت الإجابة الخطأ
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 500);
    }
  };

  const nextQuestion = () => {
    setShowFactBoard(false);
    if (currentQuestionIndex + 1 < data.eduGame.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  if (!data) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">جاري التحميل...</div>;

  return (
    <div className={`relative min-h-screen bg-[#020617] text-white overflow-hidden`} dir="rtl">
      
      {/* 🌟 نافذة الفيديو المنبثقة (Modal) السينمائية 🌟 */}
      <AnimatePresence>
        {playingVideo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[9999] flex items-center justify-center"
          >
            {/* خلفية مغلوشة بنفس ألوان صورة الفيديو */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${playingVideo.thumb})` }}
            >
              {/* طبقة تعتيم وبلوور قوية عشان الفيديو يبرز */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-3xl"></div>
            </div>

            {/* زرار القفل */}
            <button 
              onClick={() => setPlayingVideo(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 bg-white/10 hover:bg-red-600 text-white p-4 rounded-full backdrop-blur-md transition-all border border-white/20 hover:scale-110 z-10 shadow-2xl"
            >
              <X size={32} />
            </button>

            {/* حاوية الـ iframe */}
            <motion.div 
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="relative w-[95%] md:w-[85%] max-w-6xl aspect-video bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/20"
            >
              <iframe 
                src={playingVideo.url} 
                className="w-full h-full" 
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture" 
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`fixed inset-0 bg-gradient-to-br ${data.theme} opacity-70 z-0`} />
      <div className="fixed inset-0 bg-black/40 z-0" /> 

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        
        {/* Header */}
        <header className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16 pt-20">
          <div className="flex flex-col items-start text-right">
            <Link href="/kids">
              <motion.button whileHover={{ x: 5 }} className="flex items-center gap-2 text-white font-black mb-8 bg-black/40 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/20 shadow-xl">
                <ArrowRight size={22} className="rotate-180" /> العودة للخريطة
              </motion.button>
            </Link>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-4 tracking-tighter text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)] leading-tight">
              {data.countryName}
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-sky-300 drop-shadow-md bg-black/30 px-6 py-2 rounded-2xl inline-block border border-white/5">
               استكشاف {data.continentName} 🚀
            </p>
          </div>
          <motion.img src={data.img} animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="w-64 md:w-[450px] drop-shadow-2xl" />
        </header>

        {/* Tabs */}
        <nav className="flex justify-center mb-16">
          <div className="bg-slate-950/80 backdrop-blur-3xl p-3 rounded-[3rem] border border-white/10 flex gap-4 w-full max-w-3xl shadow-2xl">
            {["explore", "videos", "games"].map((tab) => (
              <button key={tab} onClick={() => { setActiveTab(tab as any); stopAllAudio(); }} className={`relative flex-1 flex items-center justify-center gap-3 py-5 rounded-[2.5rem] font-black text-2xl transition-all ${activeTab === tab ? "text-white" : "text-slate-400 hover:text-slate-200"}`}>
                {activeTab === tab && <motion.div layoutId="navTabActive" className="absolute inset-0 bg-gradient-to-r from-sky-600 to-indigo-700 rounded-[2.5rem] -z-10 shadow-lg border border-white/20" />}
                <span className="capitalize">{tab === "explore" ? "اكتشف" : tab === "videos" ? "فيديوهات" : "ألعاب"}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Content Area */}
        <section className="min-h-[600px] mb-20">
          <AnimatePresence mode="wait">
            
            {/* 🌍 قسم اكتشف */}
            {activeTab === "explore" && (
              <motion.div key="explore" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.explore.map((item: any, i: number) => (
                  <motion.div key={i} onMouseEnter={() => playInteractiveAudio(item.audio)} className="bg-slate-900/60 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 hover:border-sky-400 transition-all cursor-pointer">
                    <div className="w-20 h-20 bg-sky-500/20 rounded-2xl flex items-center justify-center mb-8"><item.icon size={40} className="text-sky-400" /></div>
                    <h3 className="text-3xl font-black text-white mb-4">{item.title}</h3>
                    <p className="text-xl font-bold text-slate-300 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* 📺 قسم الفيديوهات */}
            {activeTab === "videos" && (
              <motion.div key="videos" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {data.videos && data.videos.length > 0 ? (
                  data.videos.map((vid: any, i: number) => (
                    <div key={i} className="flex flex-col gap-4">
                      {/* حاوية الـ iframe المباشرة */}
                      <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-black">
                        <iframe 
                          src={vid.url} 
                          className="absolute top-0 left-0 w-full h-full" 
                          allow="autoplay; fullscreen; encrypted-media; picture-in-picture" 
                          allowFullScreen
                          frameBorder="0"
                        ></iframe>
                      </div>
                      <h3 className="text-2xl font-black text-white px-2">{vid.title}</h3>
                    </div>
                  ))
                ) : (
                  <div className="col-span-1 md:col-span-2 text-center py-20">
                    <Tv className="w-20 h-20 text-slate-500 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-slate-400">قريباً فيديوهات ممتعة لهذه القارة!</h3>
                  </div>
                )}
              </motion.div>
            )}

            {/* 🎮 قسم الألعاب */}
            {activeTab === "games" && data.eduGame && data.eduGame.length > 0 && (
              <motion.div key="games" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center">
                 {!gameOver ? (
                    <div className="bg-slate-900/80 backdrop-blur-3xl rounded-[4rem] p-12 border border-white/10 w-full max-w-4xl text-center shadow-2xl">
                       
                       {/* عرض المعلومة لو جاوب صح */}
                       {showFactBoard ? (
                         <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                           <CheckCircle2 className="w-24 h-24 text-emerald-400 mx-auto mb-6" />
                           <h3 className="text-4xl font-black text-emerald-400 mb-6">إجابة صحيحة! 🌟</h3>
                           <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] mb-8">
                             <p className="text-2xl font-bold text-white leading-relaxed">{data.eduGame[currentQuestionIndex].fact}</p>
                           </div>
                           <button onClick={nextQuestion} className="bg-sky-500 hover:bg-sky-400 text-white px-12 py-4 rounded-full font-black text-2xl transition-all">
                             {currentQuestionIndex + 1 < data.eduGame.length ? "السؤال اللي بعده ➡️" : "إنهاء اللعبة 🏆"}
                           </button>
                         </motion.div>
                       ) : (
                         // عرض السؤال والاختيارات
                         <>
                           <div className="bg-sky-500/20 text-sky-400 font-black py-2 px-6 rounded-full inline-block mb-8 border border-sky-500/30">
                             لغز {currentQuestionIndex + 1} من {data.eduGame.length}
                           </div>
                           <h2 className="text-3xl md:text-5xl font-black mb-12 text-white leading-tight">
                             {data.eduGame[currentQuestionIndex].riddle}
                           </h2>
                           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {data.eduGame[currentQuestionIndex].options.map((opt: any, i: number) => (
                                <button 
                                  key={i} 
                                  onClick={() => handleAnswer(opt.text)} 
                                  className={`bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-sky-500 hover:border-sky-400 transition-all font-bold text-xl group ${isWrong ? 'animate-shake border-red-500/50' : ''}`}
                                >
                                  <span className="block text-6xl mb-4 group-hover:scale-110 transition-transform">{opt.icon}</span>
                                  {opt.text}
                                </button>
                              ))}
                           </div>
                         </>
                       )}
                    </div>
                 ) : (
                   // شاشة الفوز
                   <div className="text-center bg-emerald-500/20 p-20 rounded-[4rem] border border-emerald-500/30 w-full max-w-4xl shadow-2xl">
                      <Trophy size={120} className="text-yellow-400 mx-auto mb-10" />
                      <h2 className="text-6xl font-black mb-6">أنت بطل رائع! 🏆</h2>
                      <p className="text-2xl text-emerald-100 mb-10">لقد أكملت جميع الألغاز بنجاح.</p>
                      <button onClick={() => { setGameOver(false); setCurrentQuestionIndex(0); }} className="bg-white text-emerald-900 px-12 py-5 rounded-full font-black text-2xl hover:scale-105 transition-all">
                        العب مجدداً 🔄
                      </button>
                   </div>
                 )}
              </motion.div>
            )}
            
            {/* في حالة عدم وجود ألعاب للقارة */}
            {activeTab === "games" && (!data.eduGame || data.eduGame.length === 0) && (
              <div className="text-center py-20">
                <Gamepad2 className="w-20 h-20 text-slate-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-slate-400">قريباً ألعاب ممتعة لهذه القارة!</h3>
              </div>
            )}

          </AnimatePresence>
        </section>
      </main>

      {/* المؤثرات الضوئية */}
      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-1/4 -left-20 w-96 h-96 bg-purple-500/10 blur-[180px] rounded-full pointer-events-none" />
      
      {/* ستايل الهزة (Shake) للإجابة الغلط */}
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
}