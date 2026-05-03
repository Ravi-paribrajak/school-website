"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Campus", href: "#gallery" },
    { name: "Faculty", href: "#faculty" },
  ];

  return (
    <nav className={`sticky w-full py-4 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm text-slate-900' : 'bg-transparent text-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="#" className="font-serif text-2xl font-bold tracking-wide outline-none">
              Institute OS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative transition-colors text-base font-medium tracking-wide outline-none ${scrolled ? 'text-slate-600 hover:text-slate-900' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
                {/* Hover Underline */}
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500 origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
            <a 
              href="https://youtube.com/@letslearnwithaloksir2528?si=D2DSm9E9CD8WIMPE" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`transition-colors outline-none ${scrolled ? 'text-slate-600 hover:text-red-500' : 'text-slate-300 hover:text-red-500'}`}
            >
              <FaYoutube className="w-6 h-6"/>
            </a>
            <Link
              href="#register"
              className={`inline-flex h-10 items-center justify-center rounded-full px-6 text-sm font-medium transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${scrolled ? 'bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900' : 'bg-white text-slate-900 hover:bg-slate-100 focus:ring-white focus:ring-offset-slate-900'}`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${scrolled ? 'text-slate-900 focus:ring-slate-900' : 'text-white focus:ring-white'}`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Side Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[998] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              drag="x"
              dragConstraints={{ left: 0 }}
              dragElastic={{ left: 0, right: 0.5 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 100) setIsOpen(false);
              }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-sm bg-white shadow-2xl z-[999] flex flex-col md:hidden"
            >
              {/* Drawer Header */}
              <div className="flex justify-between items-center p-6 border-b border-slate-100">
                <span className="font-serif text-2xl font-bold text-slate-900">Institute OS</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="h-7 w-7" />
                </button>
              </div>

              {/* Drawer Links (Middle) */}
              <div className="flex-1 flex flex-col p-6 space-y-6 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Drawer Footer (Bottom) */}
              <div className="mt-auto p-6 border-t border-slate-100 flex flex-col space-y-4 bg-slate-50 pb-8">
                <a 
                  href="https://youtube.com/@letslearnwithaloksir2528?si=D2DSm9E9CD8WIMPE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-4 text-lg font-semibold text-slate-900 hover:text-red-600 transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-red-100 group-hover:bg-red-200 transition-colors">
                    <FaYoutube className="w-6 h-6 text-red-600"/>
                  </div>
                  <span>Watch Lectures</span>
                </a>
                <Link
                  href="#register"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full h-14 items-center justify-center rounded-2xl bg-slate-900 text-white text-lg font-bold hover:bg-slate-800 transition-all active:scale-[0.98] shadow-xl shadow-slate-200"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
