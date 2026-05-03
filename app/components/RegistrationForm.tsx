"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2, Sparkles, Target, GraduationCap, ChevronDown, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 1. Zod Schema
const grades = ["Class 10", "Class 11", "Class 12", "Dropper"] as const;
const targetExamsOptions = ["JEE", "NEET", "Board Exams"] as const;

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  grade: z.enum(grades, {
    message: "Please select your current grade",
  }),
  targetExams: z.array(z.string()).min(1, "Please select at least one target exam"),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      targetExams: [],
    },
  });

  const selectedExams = watch("targetExams");

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
          targetExams: data.targetExams.join(", "), // Flatten array for email readability
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        toast.success("Consultation Booked!");
        reset();
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please check your connection.");
    }
  };

  const toggleExam = (exam: string) => {
    const current = [...selectedExams];
    if (current.includes(exam)) {
      setValue("targetExams", current.filter((e) => e !== exam), { shouldValidate: true });
    } else {
      setValue("targetExams", [...current, exam], { shouldValidate: true });
    }
  };

  return (
    <section id="register" className="py-12 md:py-24 px-4 w-full bg-[#111] border-y border-white/5 relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-4xl mx-auto space-y-10 md:space-y-16">
        {/* Section Header */}
        {!isSuccess && (
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-purple-400 mb-2 md:mb-4"
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
              Book a Free <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-300">Career Counseling</span> Session
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              Get a personalized roadmap from experts. Join 5000+ students who transformed their academic journey with our mentorship.
            </motion.p>
          </div>
        )}

        {/* SaaS-Style Form / Success UI */}
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
                    Full Name
                  </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      {...register("fullName")}
                      className={`w-full px-5 py-4 rounded-xl md:rounded-2xl bg-slate-900/50 border text-white placeholder:text-slate-600 focus:outline-none transition-all shadow-inner ${
                        errors.fullName
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/50"
                          : "border-slate-800 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
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
                          : "border-slate-800 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
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
                          : "border-slate-800 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
                      }`}
                    />
                    {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Current Grade Dropdown */}
                <div className="space-y-3">
                  <label htmlFor="grade" className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-purple-400" />
                    Current Grade
                  </label>
                  <div className="relative">
                    <select
                      id="grade"
                      defaultValue=""
                      {...register("grade")}
                      className={`w-full px-5 py-4 rounded-xl md:rounded-2xl bg-slate-900/50 border text-white focus:outline-none transition-all appearance-none shadow-inner cursor-pointer ${
                        errors.grade
                          ? "border-red-500 focus:ring-2 focus:ring-red-500/50"
                          : "border-slate-800 focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500"
                      }`}
                    >
                      <option value="" disabled className="bg-slate-950">Select your class</option>
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

                {/* Multi-Select Tag Input for Target Exams */}
                <div className="space-y-3 relative">
                  <label className="text-sm font-bold text-slate-300 ml-1 flex items-center gap-2">
                    <Target className="w-4 h-4 text-indigo-400" />
                    Target Exams
                  </label>
                  <div 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full min-h-[56px] px-4 py-2 rounded-xl md:rounded-2xl bg-slate-900/50 border transition-all cursor-pointer flex flex-wrap gap-2 items-center ${
                      errors.targetExams 
                        ? "border-red-500 ring-2 ring-red-500/50" 
                        : isDropdownOpen 
                          ? "border-purple-500 ring-2 ring-purple-500/50" 
                          : "border-slate-800"
                    }`}
                  >
                    {selectedExams.length === 0 && (
                      <span className="text-slate-600 ml-1">Select one or more exams</span>
                    )}
                    {selectedExams.map(exam => (
                      <span 
                        key={exam} 
                        className="flex items-center gap-1.5 px-3 py-1 bg-purple-600/20 border border-purple-500/30 text-purple-300 rounded-full text-xs font-bold"
                      >
                        {exam}
                        <button 
                          type="button" 
                          onClick={(e) => { e.stopPropagation(); toggleExam(exam); }}
                          className="hover:text-white transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                    <div className="ml-auto text-slate-600">
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute z-20 top-full left-0 w-full mt-2 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-2"
                      >
                        {targetExamsOptions.map(exam => (
                          <button
                            key={exam}
                            type="button"
                            onClick={() => { toggleExam(exam); setIsDropdownOpen(false); }}
                            className={`w-full text-left px-4 py-3 rounded-xl transition-colors text-sm font-bold ${selectedExams.includes(exam) ? 'bg-purple-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
                          >
                            {exam}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {errors.targetExams && <p className="text-red-400 text-xs mt-1 ml-1">{errors.targetExams.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative flex items-center justify-center py-4 md:py-5 px-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-lg md:text-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,51,234,0.4)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <span className="flex items-center gap-2">
                      Confirm Consultation
                      <Sparkles className="w-5 h-5" />
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
                  Thank you for your interest. Our senior counselors will analyze your profile and contact you within <span className="text-white font-bold">24 hours</span> to schedule your free session.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-purple-400 font-bold hover:text-purple-300 transition-colors text-sm uppercase tracking-widest pt-4"
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
