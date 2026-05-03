"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh & Smita Verma",
    role: "Parents of Class 8 Student",
    text: "Finding a school that balances modern tech-labs with strong cultural values was our priority. The teachers here don't just teach; they mentor. We've seen incredible growth in our son.",
  },
  {
    name: "Dr. Anjali Singh",
    role: "Mother of Class 4 Student",
    text: "The safety and security protocols on this campus are outstanding. As working parents, we are completely stress-free knowing our daughter is in a highly secure, nurturing environment.",
  },
  {
    name: "Vikram Chaudhary",
    role: "Father of Class 11 Student",
    text: "The focus isn't just on board exams, but on overall personality development. The sports facilities and extracurricular clubs have given my child a confidence I never expected.",
  },
];

// Duplicate the array for seamless looping
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="overflow-hidden w-full py-24 bg-slate-50 border-y border-slate-200">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Trusted by <span className="text-amber-600">Parents</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl">
          Hear from our community about their child’s journey of growth and excellence.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap"
        >
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[85vw] sm:w-[400px] shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mx-4 flex flex-col justify-between"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-amber-200 mb-4" />
                <p className="text-slate-700 font-medium leading-relaxed whitespace-normal italic">
                  "{item.text}"
                </p>
              </div>
              <div className="flex flex-col border-t border-slate-50 pt-4">
                <span className="text-slate-900 font-bold text-lg">{item.name}</span>
                <span className="text-amber-600 text-sm font-semibold uppercase tracking-wider">
                  {item.role}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient Fades for Depth */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
      </div>
    </section>
  );
}
