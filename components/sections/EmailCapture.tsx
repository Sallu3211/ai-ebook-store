"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    // Simulate API call — replace with your email provider (Mailchimp, ConvertKit, etc.)
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-4xl mb-4">📩</p>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Get a{" "}
            <span className="gradient-text">Free Chapter</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Enter your email and we&apos;ll send you Chapter 1 — "Building Your AI Lead
            Generation Foundation" — completely free. No credit card required.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass rounded-2xl p-6 border border-emerald-500/20"
            >
              <p className="text-emerald-400 font-semibold text-lg mb-1">
                ✓ Check your inbox!
              </p>
              <p className="text-slate-400 text-sm">
                Your free chapter is on its way.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 glass rounded-xl px-5 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent border border-white/8 focus:border-indigo-500 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-indigo-500/25 disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Free Chapter →"
                )}
              </button>
            </form>
          )}

          <p className="text-xs text-slate-600 mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
