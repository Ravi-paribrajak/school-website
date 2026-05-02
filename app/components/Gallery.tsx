"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

const galleryItems = [
  { id: 1, url: "https://picsum.photos/seed/1/800/600", title: "Advanced Robotics Lab", category: "Facilities" },
  { id: 2, url: "https://picsum.photos/seed/2/600/800", title: "Central Library", category: "Academics" },
  { id: 3, url: "https://picsum.photos/seed/3/800/800", title: "Sports Complex", category: "Athletics" },
  { id: 4, url: "https://picsum.photos/seed/4/700/900", title: "Student Center", category: "Campus Life" },
  { id: 5, url: "https://picsum.photos/seed/5/1000/700", title: "Innovation Hub", category: "Research" },
  { id: 6, url: "https://picsum.photos/seed/6/1200/900", title: "Lecture Hall A", category: "Academics" },
  { id: 7, url: "https://picsum.photos/seed/7/1100/800", title: "Outdoor Amphitheater", category: "Events" },
  { id: 8, url: "https://picsum.photos/seed/8/900/1200", title: "Greenhouse", category: "Research" },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 w-full bg-slate-50 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-6 mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-slate-700" />
          <span>Visual Journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
        >
          Discover Our <span className="text-slate-700">Campus</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl"
        >
          Explore our state-of-the-art facilities, vibrant student spaces, and environments designed to foster innovation and academic excellence.
        </motion.p>
      </div>

      {/* Gallery Layout */}
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 md:px-8 max-w-7xl mx-auto">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-[85vw] sm:w-[350px] md:w-full shrink-0 snap-center relative group overflow-hidden rounded-2xl shadow-lg bg-white aspect-[4/3] md:h-[400px] md:aspect-auto"
          >
            <img
              src={item.url}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-1">
                {item.category}
              </span>
              <h3 className="text-white text-xl font-bold">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
