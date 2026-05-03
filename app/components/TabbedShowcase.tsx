"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Camera, Star } from "lucide-react";

const achievers = [
  { id: 1, name: "Amit Kumar", result: "Rank 152", exam: "JEE Advanced 2024", image: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 2, name: "Sneha Jha", result: "98.4%", exam: "CBSE Boards 2024", image: "https://randomuser.me/api/portraits/women/45.jpg" },
  { id: 3, name: "Rahul Singh", result: "685/720", exam: "NEET 2024", image: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 4, name: "Priya Sharma", result: "Rank 450", exam: "JEE Main 2024", image: "https://randomuser.me/api/portraits/women/33.jpg" },
];

const campusPhotos = [
  { id: 1, title: "Advanced Physics Lab", url: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070" },
  { id: 2, title: "Modern Library", url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070" },
  { id: 3, title: "Smart Classroom", url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104" },
  { id: 4, title: "Sports Complex", url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2000" },
];

export default function TabbedShowcase() {
  const [activeTab, setActiveTab] = useState("achievers");

  return (
    <section className="py-24 bg-white overflow-hidden h-auto min-h-fit transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4">
        {/* Toggle Menu */}
        <div className="flex justify-center mb-16">
          <div className="relative p-1.5 bg-slate-100 rounded-full flex items-center shadow-inner">
            <motion.div
              className="absolute h-[calc(100%-12px)] bg-slate-900 rounded-full shadow-lg"
              initial={false}
              animate={{
                x: activeTab === "achievers" ? 0 : "100%",
                width: activeTab === "achievers" ? "160px" : "160px",
              }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
            <button
              onClick={() => setActiveTab("achievers")}
              className={`relative z-10 w-40 py-2.5 text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${
                activeTab === "achievers" ? "text-white" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Award className="w-4 h-4" />
              Our Achievers
            </button>
            <button
              onClick={() => setActiveTab("campus")}
              className={`relative z-10 w-40 py-2.5 text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2 ${
                activeTab === "campus" ? "text-white" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <Camera className="w-4 h-4" />
              Campus Tour
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === "achievers" ? (
              <motion.div
                key="achievers"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory py-8 -my-8 px-4 -mx-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden md:overflow-visible md:snap-none md:p-0 md:m-0"
              >
                {achievers.map((student) => (
                  <div
                    key={student.id}
                    className="group bg-slate-50 rounded-2xl p-6 border border-slate-200 transition-all hover:shadow-xl hover:border-blue-500/30 min-w-[85vw] sm:min-w-[60vw] shrink-0 snap-center md:min-w-0 md:shrink"
                  >
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-md transition-transform group-hover:scale-105"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white p-1.5 rounded-full shadow-lg">
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{student.name}</h3>
                      <p className="text-blue-600 font-black text-2xl mb-1">{student.result}</p>
                      <p className="text-slate-500 text-sm font-medium">{student.exam}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className="relative group/carousel">
                {/* Horizontal Scroll Hint Shadows */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden opacity-0 group-hover/carousel:opacity-100 transition-opacity" />
                
                <motion.div
                  key="campus"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                >
                  {campusPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="w-[85vw] sm:w-[400px] md:w-full shrink-0 snap-center relative group rounded-2xl overflow-hidden aspect-video shadow-lg"
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                        <h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform">
                          {photo.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
