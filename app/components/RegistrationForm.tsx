"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Sparkles, Bus, GraduationCap, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Zod Schema
const grades = [
  "Pre-Primary (Nursery, LKG, UKG)",
  "Primary (Class 1 to 5)",
  "Middle School (Class 6 to 8)",
  "Senior School (Class 9 to 12)"
] as const;

const formSchema = z.object({
  fullName: z.string().min(2, "Parent's name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  grade: z.enum(grades, {
    message: "Please select the class for admission",
  }),
  transport: z.enum(["Yes", "No"], {
    message: "Please select whether transport is required",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...data,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toast.success("Tour Booked!");
        reset();
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please check your connection.");
    }
  };

  return (
    <section id="admissions" className="py-12 md:py-24 px-4 w-full bg-[#111] border-y border-white/5 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
        {/* Section Header */}
        {!isSuccess && (
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-amber-500 mb-2 md:mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>Limited Slots for 2026-27</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tight text-white"
            >
              Schedule a <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-yellow-600">Campus Tour</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Take the first step towards your child’s brilliant future. Admissions open for Academic Year 2026-27.
            </motion.p>
          </div>
        )}

        {/* Form / Success UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-[#18181b]/50 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-white/10 p-8 sm:p-12 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit(onSubmit)} 
                className="space-y-6 md:space-y-8"
              >
                {/* Full Name */}
                <div className="space-y-3">
                  <label htmlFor="fullName" className="text-sm font-bold text-slate-300 ml-1">
                    Parent's Name
                  </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Parent's Name"
                      {...register("fullName")}
                      className={`w-full px-5 py-4 rounded-xl md:rounded-2xl bg-slate-900/50 border text-white placeholder:text-slate-600 focus:outline-none transition-all shadow-inner ${
                        errors.fullName
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/50"
                          : "border-slate-800 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      }`}
                    />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1 ml-1">{errors.fullName.message}</p>}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-sm font-bold text-slate-300 ml-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@email.com"
                      {...register("email")}
                      className={`w-full px-5 py-4 rounded-xl md:rounded-2xl bg-slate-900/50 border text-white placeholder:text-slate-600 focus:outline-none transition-all shadow-inner ${
                        errors.email
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/50"
                          : "border-slate-800 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-300 ml-1">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile"
                      {...register("phone")}
                      className={`w-full px-5 py-4 rounded-xl md:rounded-2xl bg-slate-900/50 border text-white placeholder:text-slate-600 focus:outline-none transition-all shadow-inner ${
                        errors.phone
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/50"
                          : "border-slate-800 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Current Grade Dropdown */}
                <div className="space-y-3">
                  <label htmlFor="grade" className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-amber-500" />
                    Admission For (Class)
                  </label>
                  <div className="relative">
                    <select
                      id="grade"
                      defaultValue=""
                      {...register("grade")}
                      className={`w-full px-5 py-4 rounded-xl md:rounded-2xl bg-slate-900/50 border text-white focus:outline-none transition-all appearance-none shadow-inner cursor-pointer ${
                        errors.grade
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/50"
                          : "border-slate-800 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      }`}
                    >
                      <option value="" disabled className="bg-slate-950">Select the class</option>
                      {grades.map(grade => (
                        <option key={grade} value={grade} className="bg-slate-950">{grade}</option>
                      ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.grade && <p className="text-red-400 text-xs mt-1 ml-1">{errors.grade.message}</p>}
                </div>

                {/* Transport */}
                <div className="space-y-3 relative">
                  <label className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2">
                    <Bus className="w-4 h-4 text-amber-500" />
                    Transport Facility Required?
                  </label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      {...register("transport")}
                      className={`w-full px-5 py-4 rounded-xl md:rounded-2xl bg-slate-900/50 border text-white focus:outline-none transition-all appearance-none shadow-inner cursor-pointer ${
                        errors.transport
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/50"
                          : "border-slate-800 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                      }`}
                    >
                      <option value="" disabled className="bg-slate-950">Select Yes or No</option>
                      <option value="Yes" className="bg-slate-950">Yes</option>
                      <option value="No" className="bg-slate-950">No</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                  {errors.transport && <p className="text-red-400 text-xs mt-1 ml-1">{errors.transport.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative flex items-center justify-center py-4 md:py-5 px-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 font-black text-lg md:text-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <span className="flex items-center gap-2">
                      Book Campus Visit
                      <Sparkles className="w-5 h-5 text-slate-900" />
                    </span>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-black text-white">Application Received!</h3>
                <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
                  Thank you for your interest. Our admissions team will contact you within <span className="text-white font-bold">24 hours</span> to schedule your campus visit.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-amber-500 font-bold hover:text-amber-400 transition-colors text-sm uppercase tracking-widest pt-4"
                >
                  Back to Website
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
