"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Lightbulb, CheckCircle2 } from "lucide-react";

// 🎵 مشغل الصوت المحلي (Local Audio Player) 🎵
export let currentLocalAudio: HTMLAudioElement | null = null;

export const playLocalAudio = (src?: string) => {
  if (!src) return; // لو مفيش مسار للصوت، متعملش حاجة
  
  if (currentLocalAudio) {
    currentLocalAudio.pause();
    currentLocalAudio.currentTime = 0;
  }
  
  currentLocalAudio = new Audio(src);
  currentLocalAudio.play().catch(e => console.log("Audio error (Play/Interact first):", e));
};

export const stopLocalAudio = () => {
  if (currentLocalAudio) {
    currentLocalAudio.pause();
    currentLocalAudio = null;
  }
};

// 🎹 أدوات الصوت المشتركة للألعاب (نجاح / خطأ) 🎹
export const playSynthSound = (type: "correct" | "win" | "wrong") => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();
  if (ctx.state === "suspended") ctx.resume();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain); gain.connect(ctx.destination);

  if (type === "correct") {
    osc.type = "sine"; osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.3, ctx.currentTime); gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.start(); osc.stop(ctx.currentTime + 0.5);
  } else if (type === "win") {
    osc.type = "triangle"; osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.setValueAtTime(600, ctx.currentTime + 0.1); osc.frequency.setValueAtTime(800, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.3, ctx.currentTime); gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.6);
    osc.start(); osc.stop(ctx.currentTime + 0.6);
  } else if (type === "wrong") {
    osc.type = "sawtooth"; osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.2, ctx.currentTime); gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
    osc.start(); osc.stop(ctx.currentTime + 0.3);
  }
};

// ==========================================
// 1. 🧩 لعبة الألغاز (Quiz Game)
// ==========================================
export function QuizGame({ data, onWin, playAudio, stopAudio }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFact, setShowFact] = useState(false);
  const [isWrong, setIsWrong] = useState(false);

  const currentQ = data[currentIndex];

  const handleAnswer = (text: string) => {
    if (text === currentQ.answer) {
      playSynthSound("correct");
      setShowFact(true);
      if (currentQ.factAudio) playAudio(currentQ.factAudio);
    } else {
      playSynthSound("wrong");
      setIsWrong(true);
      setTimeout(() => setIsWrong(false), 500);
    }
  };

  const handleNext = () => {
    setShowFact(false);
    stopAudio();
    if (currentIndex + 1 < data.length) setCurrentIndex(currentIndex + 1);
    else onWin();
  };

  return (
    <div className="w-full flex flex-col items-center">
      {showFact ? (
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-center w-full">
          <CheckCircle2 className="w-24 h-24 text-emerald-500 mx-auto mb-6" />
          <h3 className="text-4xl font-black text-emerald-600 mb-8">إجابة صحيحة!</h3>
          <div 
            onMouseEnter={() => playAudio(currentQ.factAudio)} 
            className="bg-sky-50 border-[4px] border-sky-100 p-8 rounded-[2rem] mb-8 cursor-pointer"
          >
            <Lightbulb className="w-10 h-10 text-yellow-500 mb-4 mx-auto" />
            <p className="text-2xl font-bold text-sky-900 leading-relaxed">{currentQ.fact}</p>
          </div>
          <button onClick={handleNext} className="bg-sky-500 text-white px-10 py-4 rounded-full font-black text-2xl hover:scale-105 transition-transform shadow-lg">
            السؤال التالي ➡️
          </button>
        </motion.div>
      ) : (
        <motion.div animate={isWrong ? { x: [-10, 10, -10, 10, 0] } : {}} className="w-full text-center">
          <p 
            onMouseEnter={() => playAudio(currentQ.riddleAudio)} 
            className="text-3xl font-black text-slate-700 mb-10 cursor-pointer"
          >
            {currentQ.riddle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentQ.options.map((opt: any, i: number) => (
              <button 
                key={i} 
                onMouseEnter={() => playAudio(opt.audio)} 
                onClick={() => handleAnswer(opt.text)} 
                className="bg-white border-[4px] border-sky-100 hover:bg-sky-50 rounded-[2rem] p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform shadow-lg"
              >
                <span className="text-6xl">{opt.icon}</span>
                <span className="text-2xl font-black text-sky-900">{opt.text}</span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

// ==========================================
// 2. 🧠 لعبة الذاكرة (Memory Game)
// ==========================================
export function MemoryGame({ items, onWin }: any) {
  const [cards, setCards] = useState<any[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number>(0);

  useEffect(() => {
    const shuffled = [...items, ...items].sort(() => Math.random() - 0.5).map((item, i) => ({ id: i, content: item, isFlipped: false, isMatched: false }));
    setCards(shuffled);
  }, [items]);

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;
    
    const newCards = [...cards];
    newCards[index].isFlipped = true;
    setCards(newCards);
    
    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      if (newCards[newFlipped[0]].content === newCards[newFlipped[1]].content) {
        setTimeout(() => {
          playSynthSound("correct");
          newCards[newFlipped[0]].isMatched = true; newCards[newFlipped[1]].isMatched = true;
          setCards(newCards); setFlipped([]);
          const newMatched = matched + 1;
          setMatched(newMatched);
          if (newMatched === items.length) onWin();
        }, 500);
      } else {
        setTimeout(() => {
          playSynthSound("wrong");
          newCards[newFlipped[0]].isFlipped = false; newCards[newFlipped[1]].isFlipped = false;
          setCards(newCards); setFlipped([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="grid grid-cols-4 gap-4 justify-items-center perspective-1000 w-full max-w-2xl mx-auto">
      {cards.map((card, i) => (
        <motion.div key={i} onClick={() => handleCardClick(i)} className="relative w-20 h-24 md:w-28 md:h-32 cursor-pointer preserve-3d" animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute inset-0 bg-sky-500 rounded-2xl flex items-center justify-center shadow-lg backface-hidden border-4 border-white">
            <span className="text-4xl text-white opacity-50">?</span>
          </div>
          <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center shadow-lg backface-hidden border-4 border-sky-200" style={{ transform: "rotateY(180deg)" }}>
            <span className="text-4xl md:text-6xl drop-shadow-md">{card.content}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ==========================================
// 3. ✋ لعبة السحب والإفلات (Drag & Drop)
// ==========================================
export function DragDropGame({ pairs, onWin, playAudio }: any) {
  const [matched, setMatched] = useState<string[]>([]);
  const [draggables, setDraggables] = useState<any[]>([]);
  const [dropzones, setDropzones] = useState<any[]>([]);

  useEffect(() => {
    setDraggables([...pairs].sort(() => Math.random() - 0.5));
    setDropzones([...pairs].sort(() => Math.random() - 0.5));
  }, [pairs]);

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData("text/plain");
    
    if (draggedId === targetId) {
      playSynthSound("correct");
      const newMatched = [...matched, draggedId];
      setMatched(newMatched);
      if (newMatched.length === pairs.length) {
        setTimeout(onWin, 500);
      }
    } else {
      playSynthSound("wrong");
    }
  };

  return (
    <div className="w-full flex flex-col gap-12">
      <p className="text-2xl font-bold text-slate-600 text-center mb-4">اسحب الصورة وحطها في الصندوق الصح!</p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {dropzones.map((item, i) => (
          <div 
            key={i} 
            onDragOver={(e) => e.preventDefault()} 
            onDrop={(e) => handleDrop(e, item.id)}
            onMouseEnter={() => playAudio(item.audio)}
            className={`h-32 border-4 border-dashed rounded-3xl flex flex-col items-center justify-center transition-all ${matched.includes(item.id) ? "bg-emerald-100 border-emerald-400" : "bg-sky-50 border-sky-300"}`}
          >
            {matched.includes(item.id) ? (
              <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-6xl drop-shadow-md">{item.emoji}</motion.span>
            ) : (
              <span className="text-2xl font-black text-sky-800">{item.name}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6 bg-white/50 rounded-[3rem] border-4 border-white/60">
        {draggables.map((item, i) => {
          if (matched.includes(item.id)) return <div key={i} className="w-20 h-20 opacity-0" />;
          return (
            <motion.div
              key={i}
              draggable
              onDragStart={(e: any) => handleDragStart(e, item.id)}
              whileHover={{ scale: 1.1, cursor: "grab" }}
              whileTap={{ scale: 0.9, cursor: "grabbing" }}
              className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl shadow-lg border-4 border-sky-100 flex items-center justify-center text-5xl md:text-6xl select-none"
            >
              {item.emoji}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}