"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2, Bot, Eraser, Sparkles } from "lucide-react";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  
  const defaultMessage: Message = { 
    role: "bot", 
    content: "أهلاً بك يا بطل! أنا مساعدك الذكي، تحب تسأل عن إيه النهاردة؟" 
  };
  
  const [messages, setMessages] = useState<Message[]>([defaultMessage]);
  const [isMounted, setIsMounted] = useState(false); 
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const savedChat = localStorage.getItem("chatHistory");
    if (savedChat) {
      try {
        setMessages(JSON.parse(savedChat));
      } catch (error) {
        console.error("Error reading history:", error);
      }
    }
  }, []);

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
      setMessages((prev) => [...prev, { role: "bot", content: "معلش يا بطل، حصلت مشكلة. حاول تاني كمان شوية!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => setMessages([defaultMessage]);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-black" dir="rtl">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            className="mb-6 w-[calc(100vw-2rem)] md:w-[420px] h-[600px] bg-white border-[6px] border-black rounded-[3rem] shadow-[10px_10px_0_0_#000] flex flex-col overflow-hidden"
          >
            {/* Header - الكرتوني الأصفر */}
            <div className="p-5 bg-yellow-400 border-b-[6px] border-black flex justify-between items-center relative">
              <div className="flex items-center gap-3">
                <div className="bg-white border-4 border-black p-2 rounded-2xl shadow-[4px_4px_0_0_#000] -rotate-3">
                  <Bot size={28} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl text-black">مساعد المستكشف</h3>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full border-2 border-black" />
                    <span className="text-xs text-black/70">جاهز للمغامرة!</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={clearChat} className="p-2 bg-white border-2 border-black rounded-xl hover:bg-rose-100 shadow-[3px_3px_0_0_#000] active:shadow-none active:translate-y-1 transition-all">
                  <Eraser size={20} />
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-white border-2 border-black rounded-xl hover:bg-rose-100 shadow-[3px_3px_0_0_#000] active:shadow-none active:translate-y-1 transition-all">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef} 
              className="flex-1 overflow-y-auto p-4 space-y-6 bg-sky-50 custom-scrollbar"
              style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #cbd5e1 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
            >
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ x: msg.role === "user" ? 20 : -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  key={i} 
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] px-5 py-3 border-[4px] border-black text-lg shadow-[5px_5px_0_0_#000] relative ${
                    msg.role === "user" 
                    ? "bg-yellow-400 text-black rounded-[2rem] rounded-br-none" 
                    : "bg-white text-black rounded-[2rem] rounded-bl-none"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border-4 border-black px-5 py-2 rounded-[2rem] rounded-bl-none shadow-[5px_5px_0_0_#000] flex items-center gap-2">
                    <Loader2 className="animate-spin text-sky-500" size={24} />
                    <span className="text-lg">بيفكر...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-5 bg-white border-t-[6px] border-black flex gap-3 items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اسألني أي شيء يا بطل..."
                className="flex-1 text-black bg-slate-100 border-[4px] border-black px-5 py-3 rounded-2xl focus:bg-white focus:outline-none transition-all text-lg placeholder:text-slate-400"
              />
              <button 
                type="submit" 
                disabled={isLoading || !input.trim()}
                className="bg-yellow-400 border-[4px] border-black p-4 rounded-2xl shadow-[5px_5px_0_0_#000] active:shadow-none active:translate-y-1 disabled:opacity-50 transition-all"
              >
                <Send size={24} className="transform scale-x-[-1]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* زر البوت العائم */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-400 border-[6px] border-black p-5 rounded-[2.5rem] shadow-[8px_8px_0_0_#000] relative group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12" />
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X size={35} key="close" />
          ) : (
            <div className="relative" key="bot">
              <Bot size={40} />
              <motion.div
                animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-3 -right-3 text-white"
              >
                <Sparkles size={24} fill="white" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.button>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f0f9ff; }
        .custom-scrollbar::-webkit-scrollbar-thumb { 
          background: #000; 
          border-radius: 10px;
          border: 2px solid #f0f9ff;
        }
      `}</style>
    </div>
  );
}