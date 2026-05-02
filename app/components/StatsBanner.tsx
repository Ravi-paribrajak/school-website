"use client";

import { useEffect, useRef } from "react";
import { 
  motion, 
  useInView, 
  animate
} from "framer-motion";

const stats = [
  { num: 15, suffix: "+ Years", label: "Academic Excellence" },
  { num: 50, suffix: "+", label: "Expert Faculty" },
  { num: 100, suffix: "%", label: "Placement Assistance" },
  { num: 24, suffix: "/7", label: "Campus Support" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.round(latest) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return (
    <span
      ref={ref}
      className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 drop-shadow-sm"
    >
      0{suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 border-y border-white/5 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <AnimatedCounter value={stat.num} suffix={stat.suffix} />
              <p className="mt-4 text-slate-400 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                {stat.label}
              </p>
              {/* Subtle underline accent */}
              <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-20 group-hover:opacity-50 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
