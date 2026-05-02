"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aditya Narayan",
    role: "JEE Main 2024 Scorer",
    text: "The faculty here doesn't just teach; they mentor. The personalized attention I received for my doubts was the turning point in my preparation. Highly recommended for serious aspirants.",
  },
  {
    name: "Sunita Devi",
    role: "Parent",
    text: "Watching my daughter grow in confidence and knowledge has been a blessing. The disciplined environment and regular progress reports keep us informed and satisfied.",
  },
  {
    name: "Rohan Jha",
    role: "Class 12th Student",
    text: "The study material is exceptionally well-structured. It simplifies complex concepts in Physics and Math, making it much easier to handle the pressure of board exams.",
  },
  {
    name: "Anjali Kumari",
    role: "NEET Aspirant",
    text: "The labs and regular mock tests simulate the real exam environment perfectly. I feel much more prepared and less anxious about the upcoming medical entrance.",
  },
  {
    name: "Vikram Kumar",
    role: "Alumni (IIT Delhi)",
    text: "I owe my success to the foundation laid at this institute. The core concepts taught here are still helping me in my higher engineering studies.",
  },
  {
    name: "Priya Singh",
    role: "Class 10th Student",
    text: "Learning is actually fun here! The teachers use real-world examples that make even the toughest topics interesting and easy to remember.",
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
          What Our <span className="text-blue-900">Students Say</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl">
          Hear directly from our students and parents about their journey towards academic excellence.
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
              className="w-[400px] shrink-0 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mx-4 flex flex-col justify-between"
            >
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-100 mb-4" />
                <p className="text-slate-700 font-medium leading-relaxed whitespace-normal italic">
                  "{item.text}"
                </p>
              </div>
              <div className="flex flex-col border-t border-slate-50 pt-4">
                <span className="text-slate-900 font-bold text-lg">{item.name}</span>
                <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
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
