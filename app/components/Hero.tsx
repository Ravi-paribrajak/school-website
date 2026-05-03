"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
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
      id="home"
      className="relative w-full min-h-screen -mt-[72px] pt-[72px] flex items-start md:items-center overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/campus-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-slate-950/80 -z-10" />

      <div className="container relative z-20 mx-auto px-6 md:px-12 pt-32 md:pt-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
        >
          {/* Frosted Glass Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-white shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Elevating Education in Darbhanga</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
              Building Bright Futures.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-amber-500">
              A Foundation for Excellence.
            </h2>
          </motion.div>

          {/* Subheadline/Paragraph */}
          <motion.p variants={itemVariants} className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            A premier school dedicated to holistic development, academic rigor, and shaping brilliant minds in a safe, dynamic environment.
          </motion.p>

          {/* Trust-Building Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <Link
              href="#admissions"
              className="group relative inline-flex h-12 w-full sm:w-auto items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-8 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <span className="mr-2">Book Campus Tour</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#academics"
              className="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-full border border-slate-600 bg-transparent px-8 font-medium text-white transition-all hover:border-amber-500 hover:text-amber-500 hover:scale-105 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore Curriculum
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}