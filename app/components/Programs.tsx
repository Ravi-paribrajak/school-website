"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Academic Excellence",
    audience: "For Intellectual Growth",
    features: [
      "Smart Interactive Classrooms",
      "Advanced Science & Tech Labs",
      "Comprehensive Digital Library",
      "Personalized Mentorship",
    ],
    highlight: false,
    cta: "Explore Facilities",
  },
  {
    title: "Sports & Athletics",
    audience: "For Physical Well-being",
    features: [
      "Half-Olympic Swimming Pool",
      "FIFA-Standard Football Turf",
      "Indoor Badminton & Basketball",
      "Professional Coaching Staff",
    ],
    highlight: true,
    cta: "Explore Facilities",
  },
  {
    title: "Arts & Innovation",
    audience: "For Creative Expression",
    features: [
      "AI & Robotics Laboratory",
      "Music, Dance & Drama Studios",
      "Model United Nations (MUN)",
      "Fine Arts Exhibition Hall",
    ],
    highlight: false,
    cta: "Explore Facilities",
  },
];

export default function Programs() {
  return (
    <section id="academics" className="py-24 bg-slate-950 border-y border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Pillars of Holistic <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">Development</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Fostering intellectual, physical, and creative growth in every child.
          </motion.p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-300 hover:-translate-y-2 group ${
                program.highlight
                  ? "bg-slate-900 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
              }`}
            >
              {program.highlight && (
                <div className="absolute -top-4 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Signature Program
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
              <p className="text-slate-400 text-sm font-medium mb-8 pb-8 border-b border-white/5">
                {program.audience}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-green-500/10 border border-green-500/20 shrink-0">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#admissions"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 active:scale-[0.98] ${
                  program.highlight
                    ? "bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 shadow-xl shadow-amber-900/20 hover:shadow-amber-900/40"
                    : "bg-slate-800 text-white hover:bg-slate-700"
                }`}
              >
                {program.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
