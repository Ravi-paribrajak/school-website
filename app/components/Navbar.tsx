"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Campus", href: "#gallery" },
    { name: "Faculty", href: "#faculty" },
  ];

  return (
    <nav className={`fixed w-full py-4 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm text-slate-900' : 'bg-transparent text-white'}`}>
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

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-xl flex flex-col p-6 space-y-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#register"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full h-12 mt-4 items-center justify-center rounded-xl bg-slate-900 text-white text-lg font-semibold hover:bg-slate-800 transition-colors shadow-md"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}