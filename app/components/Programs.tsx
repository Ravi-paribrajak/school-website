"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";

const programs = [
  {
    title: "Foundation Batch",
    audience: "For Class 9 & 10 Students",
    features: [
      "School Exam Excellence",
      "Olympiad & NTSE Prep",
      "Daily Practice Papers (DPP)",
      "Weekly Concept Reinforcement",
      "Monthly Parent-Teacher Meet",
    ],
    highlight: false,
    cta: "Claim Scholarship",
  },
  {
    title: "Target Batch",
    audience: "For Class 11, 12 & Droppers",
    features: [
      "JEE / NEET Focused Prep",
      "Advanced Study Material",
      "AITS (All India Test Series)",
      "24/7 Priority Doubt Counter",
      "Personalized Career Roadmap",
    ],
    highlight: true,
    cta: "Enroll Now",
  },
  {
    title: "Crash Course",
    audience: "Short-term Intensive Prep",
    features: [
      "Rapid Syllabus Revision",
      "Last 10 Year Paper Solving",
      "Exam-Day Strategy Tips",
      "Full Syllabus Mock Tests",
      "Doubt Clearing Marathons",
    ],
    highlight: false,
    cta: "Secure Seat",
  },
];

export default function Programs() {
  return (
    <section className="py-24 bg-slate-950 border-y border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Our Academic <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">Programs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Structured learning pathways designed by experts to help you ace competitive exams and board finals.
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
                  ? "bg-slate-900 border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                  : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
              }`}
            >
              {program.highlight && (
                <div className="absolute -top-4 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
              <p className="text-slate-400 text-sm font-medium mb-8 pb-8 border-b border-white/5">
                {program.audience}
              </p>

              <ul className="space-y-4 mb-10 flex-1">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="mt-1 p-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#register"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 active:scale-[0.98] ${
                  program.highlight
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl shadow-purple-900/20 hover:shadow-purple-900/40"
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
