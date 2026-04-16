"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, CheckCircle2, Trophy, RotateCcw } from "lucide-react";

// =====================================
// 1. لعبة الاختيارات المتعددة (Quiz) - أفريقيا
// =====================================
const QuizGame = ({ question, onWin, onWrong }: any) => (
  <>
    <h2 className="text-2xl md:text-3xl font-black mb-8 text-slate-900 dark:text-white leading-tight">{question.riddle}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {question.options.map((opt: any, i: number) => (
        <button 
          key={i} 
          onClick={() => opt.text === question.answer ? onWin() : onWrong()} 
          className="bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 p-2 rounded-[2rem] hover:border-sky-500 dark:hover:border-sky-500 transition-all group overflow-hidden shadow-lg"
        >
          <img src={opt.img} alt={opt.text} className="w-full h-40 md:h-48 object-cover rounded-[1.5rem] mb-3 group-hover:scale-105 transition-transform duration-500" />
          <span className="block text-xl font-bold pb-2 text-slate-800 dark:text-white">{opt.text}</span>
        </button>
      ))}
    </div>
  </>
);

// =====================================
// 2. لعبة التوصيل (Match) - أمريكا الجنوبية
// =====================================
const MatchGame = ({ question, onWin, onWrong }: any) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [leftItems, setLeftItems] = useState<any[]>([]);
  const [rightItems, setRightItems] = useState<any[]>([]);

  useEffect(() => {
    setLeftItems([...question.pairs].sort(() => Math.random() - 0.5));
    setRightItems([...question.pairs].sort(() => Math.random() - 0.5));
  }, [question]);

  const handleLeftClick = (item: string) => { if (!matchedPairs.includes(item)) setSelectedItem(item); };
  const handleRightClick = (match: string) => {
    if (!selectedItem || matchedPairs.includes(match)) return;
    const correctPair = question.pairs.find((p: any) => p.item === selectedItem);
    if (correctPair && correctPair.match === match) {
      const newMatched = [...matchedPairs, selectedItem, match];
      setMatchedPairs(newMatched);
      setSelectedItem(null);
      if (newMatched.length === question.pairs.length * 2) setTimeout(() => onWin(), 500);
    } else {
      onWrong(); setSelectedItem(null);
    }
  };

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black mb-8 text-slate-900 dark:text-white leading-tight">{question.riddle}</h2>
      <div className="grid grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
        {/* العمود الأول: الصور */}
        <div className="flex flex-col gap-4">
          {leftItems.map((p, i) => (
            <button 
              key={`L-${i}`} 
              onClick={() => handleLeftClick(p.item)} 
              disabled={matchedPairs.includes(p.item)} 
              className={`h-32 md:h-40 rounded-3xl p-0 overflow-hidden border-4 transition-all shadow-md ${matchedPairs.includes(p.item) ? 'border-emerald-400 opacity-50' : selectedItem === p.item ? 'border-sky-500 scale-105 shadow-sky-500/50' : 'border-white dark:border-slate-700'}`}
            >
              <img src={p.img} alt={p.item} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
        {/* العمود الثاني: النصوص */}
        <div className="flex flex-col gap-4">
          {rightItems.map((p, i) => (
            <button 
              key={`R-${i}`} 
              onClick={() => handleRightClick(p.match)} 
              disabled={matchedPairs.includes(p.match)} 
              className={`h-32 md:h-40 rounded-3xl font-bold text-xl md:text-2xl border-4 transition-all shadow-md flex items-center justify-center p-4 ${matchedPairs.includes(p.match) ? 'bg-emerald-500 text-white border-emerald-400 opacity-50' : 'bg-white dark:bg-slate-800 border-white dark:border-slate-700 text-slate-800 dark:text-white hover:bg-sky-50 dark:hover:bg-sky-900/30 hover:border-sky-300'}`}
            >
              {p.match}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

// =====================================
// 3. لعبة الذاكرة (Memory) - أوروبا
// =====================================
const MemoryGame = ({ question, onWin, onWrong }: any) => {
  const [cards, setCards] = useState<any[]>([]);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [matchedTypes, setMatchedTypes] = useState<string[]>([]);

  useEffect(() => { setCards([...question.cards].sort(() => Math.random() - 0.5)); }, [question]);

  const handleCardClick = (id: number, type: string) => {
    if (flippedIds.length === 2 || flippedIds.includes(id) || matchedTypes.includes(type)) return;
    const newFlipped = [...flippedIds, id];
    setFlippedIds(newFlipped);
    if (newFlipped.length === 2) {
      const card1 = cards.find(c => c.id === newFlipped[0]);
      const card2 = cards.find(c => c.id === newFlipped[1]);
      if (card1.type === card2.type) {
        setMatchedTypes([...matchedTypes, card1.type]); setFlippedIds([]);
        if (matchedTypes.length + 1 === question.cards.length / 2) setTimeout(() => onWin(), 500);
      } else {
        onWrong(); setTimeout(() => setFlippedIds([]), 1000);
      }
    }
  };

  return (
    <>
      <h2 className="text-xl md:text-2xl font-black mb-8 text-slate-900 dark:text-white leading-tight">{question.riddle}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {cards.map((card) => {
          const isFlipped = flippedIds.includes(card.id) || matchedTypes.includes(card.type);
          return (
            <div key={card.id} onClick={() => handleCardClick(card.id, card.type)} className="aspect-square relative cursor-pointer perspective-1000 w-full">
              <motion.div className="w-full h-full absolute inset-0 preserve-3d" animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.4 }}>
                {/* ظهر الكارت */}
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-2xl backface-hidden flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-xl">
                  <Gamepad2 size={40} className="text-white opacity-80" />
                </div>
                {/* وش الكارت (صورة أو نص) */}
                <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-2xl backface-hidden rotate-y-180 flex items-center justify-center border-4 border-sky-400 shadow-xl overflow-hidden">
                  {card.content.startsWith('http') ? (
                    <img src={card.content} className="w-full h-full object-cover" alt="memory card" />
                  ) : (
                    <span className={`font-black ${card.content.length > 5 ? 'text-lg md:text-xl' : 'text-2xl md:text-4xl'} text-slate-800 dark:text-white px-2 text-center`}>
                      {card.content}
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
};

// =====================================
// 4. لعبة صح أم خطأ (True/False) - أنتاركتيكا
// =====================================
const TrueFalseGame = ({ question, onWin, onWrong }: any) => (
  <>
    <h2 className="text-2xl md:text-3xl font-black mb-12 text-slate-900 dark:text-white leading-tight">{question.riddle}</h2>
    <div className="flex gap-6 justify-center">
      <button onClick={() => question.isTrue ? onWin() : onWrong()} className="bg-emerald-500 hover:bg-emerald-600 text-white font-black text-2xl md:text-3xl px-8 md:px-12 py-4 md:py-6 rounded-3xl shadow-lg hover:scale-105 transition-all">صح ✅</button>
      <button onClick={() => !question.isTrue ? onWin() : onWrong()} className="bg-rose-500 hover:bg-rose-600 text-white font-black text-2xl md:text-3xl px-8 md:px-12 py-4 md:py-6 rounded-3xl shadow-lg hover:scale-105 transition-all">خطأ ❌</button>
    </div>
  </>
);

// =====================================
// 5. لعبة اكتشف المختلف (Odd One Out) - أستراليا
// =====================================
const OddOneOutGame = ({ question, onWin, onWrong }: any) => (
  <>
    <h2 className="text-2xl md:text-3xl font-black mb-8 text-slate-900 dark:text-white leading-tight">{question.riddle}</h2>
    <div className="grid grid-cols-2 gap-4 md:gap-6">
      {question.options.map((opt: any, i: number) => (
        <button 
          key={i} 
          onClick={() => opt.isOdd ? onWin() : onWrong()} 
          className="bg-white dark:bg-slate-800 border-4 border-slate-100 dark:border-slate-700 p-2 md:p-3 rounded-3xl hover:border-sky-400 hover:scale-105 transition-all font-black text-lg md:text-xl text-slate-800 dark:text-white shadow-sm flex flex-col items-center justify-center overflow-hidden"
        >
          <img src={opt.img} alt={opt.text} className="w-full h-28 md:h-40 object-cover rounded-[1.5rem] mb-2" />
          {opt.text}
        </button>
      ))}
    </div>
  </>
);

// =====================================
// 6. لعبة ترتيب الحروف (Scramble) - آسيا
// =====================================
const WordScrambleGame = ({ question, onWin, onWrong }: any) => {
  const [guess, setGuess] = useState("");
  const handleLetter = (letter: string) => {
    const newGuess = guess + letter;
    setGuess(newGuess);
    if (newGuess === question.answer) setTimeout(() => onWin(), 300);
    else if (!question.answer.startsWith(newGuess)) { onWrong(); setTimeout(() => setGuess(""), 400); }
  };
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-black mb-8 text-slate-900 dark:text-white leading-tight">{question.riddle}</h2>
      <div className="bg-slate-100 dark:bg-slate-800 h-20 rounded-2xl mb-8 flex items-center justify-center text-4xl font-black tracking-widest text-sky-600 border-2 border-dashed border-slate-300 dark:border-slate-700">{guess}</div>
      <div className="flex flex-wrap justify-center gap-4">
        {question.letters.map((l: string, i: number) => (
          <button key={i} onClick={() => handleLetter(l)} className="bg-sky-500 hover:bg-sky-600 text-white w-14 h-14 md:w-16 md:h-16 rounded-2xl text-2xl md:text-3xl font-black shadow-md hover:scale-110 transition-all active:scale-95">{l}</button>
        ))}
      </div>
    </>
  );
};

// =====================================
// 7. لعبة اختار الصورة (Select Image) - أمريكا الشمالية
// =====================================
const SelectImageGame = ({ question, onWin, onWrong }: any) => (
  <>
    <h2 className="text-2xl md:text-3xl font-black mb-8 text-slate-900 dark:text-white leading-tight">{question.riddle}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {question.options.map((opt: any, i: number) => (
        <img 
          key={i} 
          src={opt.img} 
          alt="option" 
          onClick={() => opt.isCorrect ? onWin() : onWrong()} 
          className="w-full h-48 object-cover rounded-3xl border-4 border-slate-200 dark:border-slate-700 cursor-pointer hover:border-sky-500 hover:scale-105 transition-all shadow-md" 
        />
      ))}
    </div>
  </>
);

// =====================================
// Main Component (مكون إدارة الألعاب)
// =====================================
export default function GamesTab({ eduGame }: { eduGame: any[] }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFactBoard, setShowFactBoard] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // حماية من الأخطاء لو مفيش داتا
  if (!eduGame || eduGame.length === 0) {
    return (
      <div className="text-center py-20">
        <Gamepad2 className="w-20 h-20 text-slate-400 dark:text-slate-500 mx-auto mb-4" />
        <h3 className="text-3xl font-bold text-slate-500 dark:text-slate-400">قريباً ألعاب ممتعة لهذه القارة!</h3>
      </div>
    );
  }

  const currentQuestion = eduGame[currentQuestionIndex];

  const playFeedbackSound = (type: "correct" | "wrong") => {
    const url = type === "correct" 
      ? "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776009411/u_y6jn4lst7i-benar-494211__cut_1sec_bsp1ld.mp3" 
      : "https://res.cloudinary.com/dhvuw8yog/video/upload/v1776009641/mrstokes302-nooo-boy-sfx-451535__cut_1sec_xi9wjz.mp3";
    new Audio(url).play().catch(e => console.error("Audio error:", e));
  };

  const handleWin = () => {
    playFeedbackSound("correct"); 
    setShowFactBoard(true);
  };

  const handleWrong = () => {
    playFeedbackSound("wrong"); 
    setIsWrong(true);
    setTimeout(() => setIsWrong(false), 500);
  };

  const nextQuestion = () => {
    setShowFactBoard(false);
    if (currentQuestionIndex + 1 < eduGame.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center w-full">
      {!gameOver ? (
        <div className={`bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-slate-200 dark:border-white/10 w-full max-w-4xl text-center shadow-xl transition-all ${isWrong ? 'animate-shake border-red-500/50' : ''}`}>
          {showFactBoard ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
              <CheckCircle2 className="w-16 h-16 text-emerald-500 dark:text-emerald-400 mx-auto mb-4" />
              <h3 className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mb-4">أحسنت يا بطل! 🌟</h3>
              <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 p-6 rounded-2xl mb-6 transition-colors">
                <p className="text-xl font-bold text-slate-800 dark:text-white leading-relaxed">{currentQuestion.fact}</p>
              </div>
              <button onClick={nextQuestion} className="bg-sky-500 hover:bg-sky-600 dark:hover:bg-sky-400 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-md">
                {currentQuestionIndex + 1 < eduGame.length ? "التحدي اللي بعده ➡️" : "إنهاء اللعبة 🏆"}
              </button>
            </motion.div>
          ) : (
            <>
              <div className="bg-sky-100 dark:bg-sky-500/20 text-sky-600 dark:text-sky-400 font-bold text-sm py-1.5 px-4 rounded-full inline-block mb-6 border border-sky-200 dark:border-sky-500/30 transition-colors">
                تحدي {currentQuestionIndex + 1} من {eduGame.length}
              </div>
              
              {/* الرندر الديناميكي لنوع اللعبة */}
              <div className="w-full">
                {(!currentQuestion.type || currentQuestion.type === "quiz") && <QuizGame question={currentQuestion} onWin={handleWin} onWrong={handleWrong} />}
                {currentQuestion.type === "dragDrop" && <MatchGame question={currentQuestion} onWin={handleWin} onWrong={handleWrong} />}
                {currentQuestion.type === "memory" && <MemoryGame question={currentQuestion} onWin={handleWin} onWrong={handleWrong} />}
                {currentQuestion.type === "trueFalse" && <TrueFalseGame question={currentQuestion} onWin={handleWin} onWrong={handleWrong} />}
                {currentQuestion.type === "oddOneOut" && <OddOneOutGame question={currentQuestion} onWin={handleWin} onWrong={handleWrong} />}
                {currentQuestion.type === "scramble" && <WordScrambleGame question={currentQuestion} onWin={handleWin} onWrong={handleWrong} />}
                {currentQuestion.type === "selectImage" && <SelectImageGame question={currentQuestion} onWin={handleWin} onWrong={handleWrong} />}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="text-center bg-emerald-50 dark:bg-emerald-900/20 p-12 rounded-3xl border border-emerald-200 dark:border-emerald-800/30 w-full max-w-2xl shadow-lg transition-colors">
          <Trophy size={80} className="text-yellow-500 dark:text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl font-black mb-4 text-emerald-800 dark:text-emerald-300">أنت مكتشف عبقري! 🏆</h2>
          <p className="text-lg text-emerald-700 dark:text-emerald-100 mb-8">لقد أكملت جميع التحديات في هذه القارة بنجاح.</p>
          <button onClick={() => { setGameOver(false); setCurrentQuestionIndex(0); }} className="flex items-center justify-center gap-2 mx-auto bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-md">
            <RotateCcw size={20} /> العب مجدداً
          </button>
        </div>
      )}

      {/* Tailwind classes required for 3D flip and Shake */}
      <style jsx global>{`
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </motion.div>
  );
}