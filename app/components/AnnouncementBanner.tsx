"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AnimatePresence initial={false}>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative w-full z-[1001] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden shadow-[0_0_20px_rgba(79,70,229,0.4)]"
        >
          {/* Subtle Glow Pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)]" />

          <div className="max-w-7xl mx-auto px-4 py-3 flex items-start sm:items-center justify-between relative gap-4">
            <div className="flex-1 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 md:gap-4 text-center">
              <span className="text-sm md:text-base font-bold tracking-tight leading-snug text-balance">
                🚨 Admissions Open for Target Batch 2026-27 | Limited Seats Available
              </span>
              <a
                href="#register"
                className="group inline-flex items-center gap-1 text-xs sm:text-sm font-black uppercase tracking-widest text-white hover:text-blue-200 transition-colors whitespace-nowrap"
              >
                <span className="relative">
                  Register Now
                  <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-white group-hover:bg-blue-200 transition-transform origin-left scale-x-100 group-hover:scale-x-110" />
                </span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors shrink-0"
              aria-label="Dismiss announcement"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
