"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <>
      <section className="py-24 w-full bg-slate-50 overflow-hidden">
        <div className="flex flex-col items-center text-center space-y-6 mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Get in <span className="text-blue-900">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl"
          >
            We'd love to hear from you. Reach out to our admissions office or visit our campus.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4">
          {/* Left Column: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Block 1 */}
            <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-500/30">
              <div className="flex-shrink-0 p-4 rounded-full bg-blue-100 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Campus Address</h3>
                <p className="text-slate-600 leading-relaxed">
                  Main Highway Road, Near University Campus,<br />
                  Darbhanga, Bihar 846004, India
                </p>
              </div>
            </div>

            {/* Block 2 */}
            <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-purple-500/30">
              <div className="flex-shrink-0 p-4 rounded-full bg-purple-100 text-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                <Phone className="w-6 h-6" />
              </div>
              <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                <p className="text-slate-600 leading-relaxed">
                  +91 98765 43210<br />
                  Mon-Fri, 9am to 6pm
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="group flex items-start space-x-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-pink-500/30">
              <div className="flex-shrink-0 p-4 rounded-full bg-pink-100 text-pink-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                <Mail className="w-6 h-6" />
              </div>
              <div className="transform transition-transform duration-300 group-hover:translate-x-2">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-600 leading-relaxed">
                  admissions@institute.com<br />
                  info@institute.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dark Mode Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-[300px] lg:h-full overflow-hidden rounded-2xl shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.53925916665!2d85.8263614!3d26.1521622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edb8380d64c125%3A0xcf9cc34e7afabcc3!2sDarbhanga%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp CTA */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center justify-center">
        <div className="absolute w-14 h-14 bg-green-500 rounded-full animate-ping opacity-75"></div>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          <FaWhatsapp className="w-8 h-8 text-white" />
        </a>
      </div>
    </>
  );
}