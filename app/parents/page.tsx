// app/parents/page.tsx
"use client";

import { motion } from "framer-motion";
import { Activity, BookOpen, Clock, Globe, Settings, LogOut } from "lucide-react";
import ShinyText from "@/components/react-bits/ShinyText";
import TiltedCard from "@/components/react-bits/TiltedCard";
import Link from "next/link";

export default function ParentsDashboard() {
  const stats = [
    { title: "القارات المكتشفة", value: "3 / 7", icon: <Globe className="w-8 h-8 text-sky-500" /> },
    { title: "ساعات التعلم", value: "12 ساعة", icon: <Clock className="w-8 h-8 text-indigo-500" /> },
    { title: "القصص المقروءة", value: "5 قصص", icon: <BookOpen className="w-8 h-8 text-emerald-500" /> },
    { title: "مستوى النشاط", value: "ممتاز", icon: <Activity className="w-8 h-8 text-rose-500" /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        
        {/* الهيدر بتاع لوحة التحكم */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div>
            <h1 className="text-3xl font-black text-slate-800 mb-2">
              <ShinyText text="لوحة تحكم الآباء" />
            </h1>
            <p className="text-slate-500">مرحباً بك! تابع تقدم طفلك بسهولة.</p>
          </div>
          <div className="flex gap-4">
            <button className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-colors">
              <Settings className="w-6 h-6" />
            </button>
            <Link href="/">
              <button className="flex items-center gap-2 px-6 py-3 bg-rose-50 text-rose-600 font-bold rounded-xl hover:bg-rose-100 transition-colors">
                <LogOut className="w-5 h-5" /> تسجيل خروج
              </button>
            </Link>
          </div>
        </div>

        {/* الإحصائيات (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-6"
            >
              <div className="p-4 bg-slate-50 rounded-2xl">
                {stat.icon}
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold mb-1">{stat.title}</p>
                <p className="text-2xl font-black text-slate-800">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* تقرير سريع */}
        <TiltedCard>
          <div className="bg-gradient-to-r from-sky-600 to-indigo-700 p-8 rounded-3xl text-white flex flex-col md:flex-row justify-between items-center shadow-xl">
            <div>
              <h2 className="text-2xl font-bold mb-2">تقرير الأسبوع الجيد! 🌟</h2>
              <p className="text-sky-100 max-w-md">
                طفلك قضى وقت ممتع في استكشاف قارة أفريقيا وتعلم معلومات جديدة عن الحيوانات.
              </p>
            </div>
            <button className="mt-6 md:mt-0 px-8 py-3 bg-white text-indigo-700 font-bold rounded-xl shadow-md hover:scale-105 transition-transform">
              عرض التفاصيل
            </button>
          </div>
        </TiltedCard>

      </div>
    </div>
  );
}