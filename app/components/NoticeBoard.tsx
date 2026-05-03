"use client";

import { Bell, ArrowRight } from "lucide-react";

const announcements = [
  {
    id: 1,
    date: "May 15",
    text: "Summer Camp Registration closes next week. Please ensure all forms are submitted.",
  },
  {
    id: 2,
    date: "May 12",
    text: "Parent-Teacher Meeting for Middle School is scheduled for this Saturday.",
  },
  {
    id: 3,
    date: "May 10",
    text: "Congratulations to our Class 12 batch for achieving 100% board exam results.",
  },
];

export default function NoticeBoard() {
  return (
    <section className="relative w-full py-16 bg-slate-950 px-4 z-20">
      <div className="max-w-3xl mx-auto relative">
        {/* Deep Glow Effect */}
        <div className="absolute -inset-1 bg-amber-500/10 blur-[100px] rounded-3xl -z-10" />

        {/* Main Card */}
        <div className="bg-slate-950/50 backdrop-blur-xl rounded-2xl border border-amber-500/20 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="px-6 py-5 border-b border-amber-500/20 bg-slate-900/50 flex items-center gap-3">
            <Bell className="w-5 h-5 text-amber-500" />
            <h3 className="text-amber-500 font-bold text-lg tracking-wide uppercase">
              Latest Announcements
            </h3>
          </div>

          {/* List */}
          <div className="flex flex-col divide-y divide-slate-800">
            {announcements.map((item) => (
              <div 
                key={item.id} 
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 px-6 py-5 cursor-pointer hover:bg-amber-500/5 transition-colors duration-300"
              >
                <div className="shrink-0">
                  <span className="inline-flex items-center justify-center bg-amber-500/10 text-amber-500 font-bold uppercase tracking-wider text-xs px-3 py-1 rounded-md whitespace-nowrap">
                    {item.date}
                  </span>
                </div>
                <p className="text-slate-300 text-base leading-relaxed flex-1">
                  {item.text}
                </p>
                <div className="shrink-0 ml-auto hidden sm:block">
                  <ArrowRight className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
