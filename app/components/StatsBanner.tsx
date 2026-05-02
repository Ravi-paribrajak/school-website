"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "15+ Years", label: "Academic Excellence" },
  { value: "50+", label: "Expert Faculty" },
  { value: "100%", label: "Placement Assistance" },
  { value: "24/7", label: "Modern Campus Facilities" },
];

export default function StatsBanner() {
  return (
    <section className="bg-blue-900 text-white py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <h3 className="text-3xl md:text-5xl font-black mb-2">{stat.value}</h3>
            <p className="text-blue-200 text-sm uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}