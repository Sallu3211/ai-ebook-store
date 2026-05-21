"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="info" className="mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                New Release — 2025 Edition
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6"
            >
              Generate{" "}
              <span className="gradient-text">10x More Leads</span>
              <br />
              with{" "}
              <span className="gradient-text-cyan">AI Strategy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              The complete playbook top-performing marketers use to leverage AI
              for consistent, scalable lead generation. 150+ pages of actionable
              strategies — no fluff, pure results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
            >
              <Button href="/checkout?plan=pro" size="xl">
                Get Instant Access — from $17
              </Button>
              <Button href="/product#features" size="xl" variant="secondary">
                See What&apos;s Inside
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8 flex items-center gap-6 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#030712] bg-gradient-to-br from-indigo-400 to-violet-600"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  <span className="text-white font-semibold">4.9/5</span> from 2,400+ readers
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — ebook mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Glow behind book */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-violet-600/20 blur-[60px] rounded-3xl scale-90" />

              {/* Book cover */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/50 glow-indigo">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-violet-900 to-[#030712]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-500 flex items-center justify-center mb-6 shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent mb-4" />
                  <p className="text-xs text-indigo-300 font-semibold tracking-[0.2em] uppercase mb-3">
                    The Complete Guide
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-4">
                    AI Lead Generation Strategy
                  </h2>
                  <p className="text-sm text-indigo-200/70 leading-relaxed">
                    150+ Pages · Actionable Frameworks · Real Case Studies
                  </p>
                  <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
                </div>
                {/* Spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-indigo-800 to-transparent opacity-50" />
                {/* Shine */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              </div>

              {/* Page shadow */}
              <div className="absolute -right-2 top-2 bottom-2 w-2 bg-gradient-to-b from-slate-700 to-slate-800 rounded-r-sm opacity-60" />
              <div className="absolute -right-3.5 top-4 bottom-4 w-1.5 bg-gradient-to-b from-slate-700 to-slate-900 rounded-r-sm opacity-40" />

              {/* Simple badges — no animation */}
              <div className="absolute -left-4 top-6 glass rounded-xl px-3 py-2 border border-white/10 shadow-xl">
                <p className="text-xs text-slate-300 font-medium">⚡ Instant Download</p>
              </div>
              <div className="absolute -right-4 bottom-14 glass rounded-xl px-3 py-2 border border-white/10 shadow-xl">
                <p className="text-xs text-emerald-300 font-medium">✓ 30-Day Guarantee</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
