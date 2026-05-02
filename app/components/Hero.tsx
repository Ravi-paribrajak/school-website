"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const words = ['Leaders', 'Innovators', 'Visionaries', 'Engineers'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants for smooth staggered rendering
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section 
      className="relative w-full min-h-screen pt-32 flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086")' }}
    >
      {/* Authoritative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent z-0" />

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left space-y-8 max-w-3xl"
        >
          {/* Frosted Glass Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium text-white shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Elevating Education in Darbhanga</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
              Empowering the Next <br className="hidden md:block" />
              Generation of{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="inline-block text-blue-400"
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p variants={itemVariants} className="text-slate-300 text-xl max-w-xl leading-relaxed">
            A premier institution dedicated to academic excellence, state-of-the-art facilities, and shaping brilliant minds for a dynamic future.
          </motion.p>

          {/* Trust-Building Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Link
              href="#register"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-slate-100 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span className="mr-2">Enroll Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#gallery"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-transparent px-8 font-medium text-white transition-all hover:bg-white/10 hover:scale-105 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore Campus
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}