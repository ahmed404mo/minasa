import { motion } from "framer-motion";
import { Tv } from "lucide-react";

export default function VideosTab({ videosData }: { videosData: any[] }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className={`w-full grid grid-cols-1 gap-10 ${videosData?.length === 1 ? 'max-w-4xl mx-auto' : 'lg:grid-cols-2'}`}>
      {videosData && videosData.length > 0 ? (
        videosData.map((vid: any, i: number) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="relative aspect-video w-full rounded-[2rem] overflow-hidden border-2 border-slate-200 dark:border-white/10 shadow-2xl bg-slate-100 dark:bg-black transition-colors">
              <iframe src={vid.url} className="absolute top-0 left-0 w-full h-full" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowFullScreen frameBorder="0"></iframe>
            </div>
            <h3 className={`font-black text-slate-900 dark:text-white px-2 transition-colors ${videosData.length === 1 ? 'text-3xl text-center mt-2' : 'text-2xl'}`}>{vid.title}</h3>
          </div>
        ))
      ) : (
        <div className="col-span-1 lg:col-span-2 text-center py-16">
          <Tv className="w-20 h-20 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-500 dark:text-slate-400">قريباً فيديوهات ممتعة لهذه القارة!</h3>
        </div>
      )}
    </motion.div>
  );
}