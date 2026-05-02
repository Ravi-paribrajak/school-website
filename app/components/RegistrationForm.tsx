"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

// 1. Zod Schema for Validation
const courses = ["Computer Science", "Physics", "Mathematics", "Chemistry"] as const;

const formSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  course: z.enum(courses).refine((value) => value, {
    message: "Please select a valid course",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  // 2. The 'Fake-Out' Submission
  const onSubmit = async (data: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Registration successful! We will contact you shortly.");
    reset();
  };

  return (
    <section id="register" className="py-24 px-4 w-full bg-slate-100">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900"
          >
            Join the <span className="text-blue-900">Next Generation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Secure your spot in our upcoming academic programs and take the first step towards a brilliant future.
          </motion.p>
        </div>

        {/* 3. High-End Form UI */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-slate-900">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="John Doe"
                {...register("fullName")}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-400 shadow-sm"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-900">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-400 shadow-sm"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-slate-900">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="9876543210"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all placeholder:text-slate-400 shadow-sm"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="course" className="text-sm font-medium text-slate-900">
                Interested Course
              </label>
              <select
                id="course"
                defaultValue=""
                {...register("course")}
                className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition-all appearance-none shadow-sm"
              >
                <option value="" disabled>Select a course</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Physics">Physics</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Chemistry">Chemistry</option>
              </select>
              {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full relative flex items-center justify-center py-4 px-8 rounded-xl bg-slate-900 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Processing...
                </>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
