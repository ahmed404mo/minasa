"use client";

import { motion } from "framer-motion";
import { Activity, BookOpen, Clock, Globe, Settings, LogOut, MessageCircleQuestion, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function ParentsDashboard() {
  const stats = [
    { title: "القارات المكتشفة", value: "3 / 7", color: "bg-sky-400" },
    { title: "ساعات التعلم", value: "12 ساعة", color: "bg-emerald-400" },
    { title: "المعلومات المقرءه", value: "5 العلومات", color: "bg-yellow-400" },
    { title: "مستوى النشاط", value: "ممتاز", color: "bg-rose-400" },
  ];

  const evaluationQuestions = [
    {
      q: "ما هو أكثر حيوان أعجبك في قارة أفريقيا ولماذا؟",
      tip: "يساعد هذا السؤال على قياس قوة الملاحظة والربط العاطفي."
    },
    {
      q: "هل يمكنك إخباري بكلمة واحدة تعلمتها اليوم بلغة مختلفة؟",
      tip: "يقيس مدى استيعاب الطفل للمفردات الجديدة."
    },
    {
      q: "لو كنت مستكشفاً، ما هي الأداة التي ستأخذها معك دائماً؟",
      tip: "يحفز الخيال والتفكير النقدي لدى الطفل."
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#f0f9ff] flex flex-col items-center pt-40 pb-20 px-6 overflow-y-auto">
      
      {/* الخلفية الموحدة */}
      <div className="absolute inset-0 w-full h-full z-0 fixed">
        <img src="/backk.png" alt="Background" className="w-full h-full object-cover opacity-60" />
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        
        {/* ===================== الهيدر الطفولي ===================== */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white border-[5px] border-black p-8 rounded-[2.5rem] shadow-[10px_10px_0_0_#000]">
          <div>
            <h1 className="text-4xl font-black text-black mb-2 italic">بوابة الأبطال (للآباء)</h1>
            <p className="text-slate-600 font-bold text-lg">تابع رحلة طفلك الاستكشافية بكل حب! </p>
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <button className="flex items-center gap-2 px-8 py-4 bg-rose-400 border-[4px] border-black text-black font-black text-xl rounded-2xl shadow-[5px_5px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                <LogOut className="w-6 h-6" /> خروج
              </button>
            </Link>
          </div>
        </header>

        {/* ===================== الإحصائيات الملونة ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-[5px] border-black p-6 rounded-[2rem] shadow-[8px_8px_0_0_#000] flex flex-col items-center text-center"
            >
              <div className={`w-full py-2 mb-4 ${stat.color} border-[3px] border-black rounded-xl font-black text-black shadow-[3px_3px_0_0_#000]`}>
                {stat.title}
              </div>
              <p className="text-4xl font-black text-black tracking-tighter">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* ===================== قسم أسئلة التقييم (جديد) ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* كارت الأسئلة الذكية */}
          <div className="lg:col-span-2 bg-white border-[5px] border-black p-8 rounded-[3rem] shadow-[12px_12px_0_0_#000]">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-yellow-400 p-3 rounded-2xl border-[3px] border-black shadow-[4px_4px_0_0_#000]">
                <MessageCircleQuestion className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-3xl font-black text-black italic">اسأل بطلنا الصغير! </h2>
            </div>
            
            <div className="space-y-6">
              {evaluationQuestions.map((item, i) => (
                <div key={i} className="bg-slate-50 border-[3px] border-black p-5 rounded-2xl relative overflow-hidden group">
                  <div className="absolute left-0 top-0 h-full w-2 bg-sky-400 group-hover:w-4 transition-all"></div>
                  <p className="text-xl font-black text-black mb-2 pr-4 italic">"{item.q}"</p>
                  <div className="flex items-center gap-2 pr-4">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-bold text-slate-500">{item.tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* كارت نصيحة اليوم */}
          <div className="bg-indigo-400 border-[5px] border-black p-8 rounded-[3rem] shadow-[12px_12px_0_0_#000] flex flex-col justify-center text-center relative overflow-hidden">
             {/* شكل جمالي خلفي */}
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
             
             <h3 className="text-3xl font-black text-white mb-6 underline decoration-black underline-offset-8">نصيحة اليوم </h3>
             <p className="text-white font-black text-xl leading-relaxed">
               "التعلم يبدأ بالفضول، شجع طفلك على طرح 'لماذا' دائماً ولا تقدم له الإجابة الجاهزة فوراً."
             </p>
             <button className="mt-8 bg-white border-[4px] border-black py-3 px-6 rounded-2xl font-black text-black shadow-[4px_4px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                مزيد من النصائح
             </button>
          </div>

        </div>

      </div>
    </div>
  );
}