"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";

const facultyMembers = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "HOD, Physics",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    experience: "15+ Years Experience",
    bio: "Pioneering research in Quantum Mechanics and dedicated to inspiring the next generation of physicists.",
  },
  {
    id: 2,
    name: "Prof. Ananya Desai",
    role: "Computer Science",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    experience: "12+ Years Experience",
    bio: "Expert in Artificial Intelligence and Machine Learning, leading our advanced tech incubation center.",
  },
  {
    id: 3,
    name: "Dr. Vikram Singh",
    role: "Mathematics",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    experience: "20+ Years Experience",
    bio: "Specializes in Applied Mathematics with a passion for solving complex real-world problems through numbers.",
  },
  {
    id: 4,
    name: "Prof. Meera Reddy",
    role: "Chemistry",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    experience: "10+ Years Experience",
    bio: "Award-winning researcher focused on sustainable green chemistry and innovative material sciences.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Faculty() {
  return (
    <section id="faculty" className="py-24 w-full bg-white overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-6 mb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-600 shadow-sm"
        >
          <GraduationCap className="w-4 h-4 text-blue-600" />
          <span>Academic Excellence</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
        >
          Meet Our <span className="text-blue-900">Expert Faculty</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl"
        >
          Learn from distinguished educators and industry experts committed to nurturing talent and driving academic success.
        </motion.p>
      </div>

      {/* Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-7xl mx-auto px-4"
      >
        {facultyMembers.map((faculty) => (
          <motion.div
            key={faculty.id}
            variants={cardVariants}
            className="relative group overflow-hidden rounded-2xl h-[400px] shadow-lg bg-slate-200 cursor-pointer min-w-[85vw] sm:min-w-[350px] md:min-w-0 shrink-0 snap-center"
          >
            {/* Background Image */}
            <img
              src={faculty.image}
              alt={faculty.name}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end transition-all duration-500">
              {/* Initially Visible Details */}
              <div className="p-6 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-4">
                <h3 className="text-2xl font-bold text-white mb-1">{faculty.name}</h3>
                <p className="text-blue-400 font-medium">{faculty.role}</p>
              </div>

              {/* Reveal Details (Hover) */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-sm text-zinc-300 font-semibold mb-2">{faculty.experience}</p>
                <p className="text-sm text-zinc-400 line-clamp-3">{faculty.bio}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
