"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2, Bot, Trash2, Eraser, Sparkles } from "lucide-react";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  
  // 🌟 1. فصلنا الرسالة الترحيبية عشان نقدر نستخدمها في كذا مكان
  const defaultMessage = { role: "bot", content: "أهلاً بك يا بطل! أنا مساعدك الذكي، تحب تسأل عن إيه النهاردة؟" };
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([defaultMessage]);
  
  // 🌟 2. حالة جديدة عشان نتأكد إننا على المتصفح مش السيرفر (Next.js SSR Fix)
  const [isMounted, setIsMounted] = useState(false); 
  
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // 🌟 3. تحميل المحادثة من الـ LocalStorage أول ما الصفحة تفتح
  useEffect(() => {
    setIsMounted(true);
    const savedChat = localStorage.getItem("chatHistory");
    if (savedChat) {
      try {
        setMessages(JSON.parse(savedChat));
      } catch (error) {
        console.error("خطأ في قراءة المحادثة السابقة:", error);
      }
    }
  }, []);

  // 🌟 4. حفظ المحادثة في الـ LocalStorage مع كل رسالة جديدة
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("chatHistory", JSON.stringify(messages));
    }
  }, [messages, isMounted]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://server-chat-gray.vercel.app/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: userMessage }), 
      });
      
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      
      const botReply = data.answer || "عذراً يا بطل، مش قادر أرد دلوقتي!"; 
      setMessages((prev) => [...prev, { role: "bot", content: botReply }]);      
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [...prev, { role: "bot", content: "معلش يا بطل، حصلت مشكلة في الاتصال بالسيرفر. حاول تاني كمان شوية!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    // 🌟 5. لما يمسح المحادثة، هترجع للرسالة الترحيبية (والـ useEffect هيحفظ التغيير دا تلقائياً)
    setMessages([defaultMessage]);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end" dir="rtl">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50, x: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50, x: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="mb-4 w-[calc(100vw-2rem)] md:w-[400px] max-h-[80vh] md:max-h-[600px] h-[550px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden transition-all duration-300 ring-1 ring-black/5"
          >
            {/* Header - Modern Gradient */}
            <div className="p-4 md:p-5 bg-gradient-to-l from-sky-500 via-sky-600 to-indigo-600 text-white flex justify-between items-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mt-16 blur-2xl" />
              
              <div className="flex items-center gap-3 z-10">
                <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md border border-white/30 shadow-inner">
                  <Bot size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-black text-base md:text-lg leading-none mb-1">مساعد المستكشف</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] md:text-xs text-sky-100 font-medium">ذكي ومستعد للرد</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1 md:gap-2 z-10">
                <button 
                   onClick={clearChat} 
                   className="p-2 hover:bg-white/10 rounded-xl transition-colors group"
                   title="مسح المحادثة"
                >
                  <Eraser size={18} className="group-active:scale-90 transition-transform" />
                </button>
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef} 
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-950/20 transition-colors custom-scrollbar"
            >
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] px-4 py-3 rounded-[1.5rem] text-sm md:text-base leading-relaxed shadow-sm font-bold ${
                    msg.role === "user" 
                    ? "bg-gradient-to-br from-sky-500 to-sky-600 text-white rounded-br-none" 
                    : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-none border border-slate-200 dark:border-slate-700"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-bl-none border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-2">
                    <Loader2 className="animate-spin text-sky-500" size={18} />
                    <span className="text-xs md:text-sm font-bold text-slate-400 animate-pulse">بيفكر...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 md:p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex gap-2 items-center">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="اسألني أي شيء..."
                  className="w-full bg-slate-100 dark:bg-slate-800/50 text-slate-900 dark:text-white px-5 py-2.5 md:py-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all font-bold text-sm md:text-base placeholder:text-slate-400"
                  dir="rtl"
                />
              </div>
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-sky-500 hover:bg-sky-600 disabled:opacity-40 disabled:grayscale text-white p-2.5 md:p-3 rounded-xl shadow-lg active:scale-90 transition-all flex-shrink-0 flex items-center justify-center"
              >
                <Send size={20} className="transform scale-x-[-1]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button - AI Theme */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-br from-indigo-600 via-sky-500 to-emerald-400 text-white p-4 md:p-5 rounded-[1.8rem] shadow-[0_0_30px_rgba(99,102,241,0.4)] flex items-center justify-center transition-all border-4 border-white dark:border-slate-800 relative group overflow-hidden ring-1 ring-sky-500/20"
      >
        <motion.div 
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        />

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <X size={28} className="md:w-8 md:h-8 relative z-10" />
            </motion.div>
          ) : (
            <motion.div 
              key="ai-icon" 
              initial={{ scale: 0.5, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative z-10"
            >
              <div className="relative">
                <Bot size={32} className="md:w-9 md:h-9" />
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute -top-1 -right-1 text-yellow-300"
                >
                  <Sparkles size={16} fill="currentColor" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(14, 165, 233, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(14, 165, 233, 0.4);
        }
      `}</style>
    </div>
  );
}