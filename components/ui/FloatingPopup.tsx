"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function FloatingPopup() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    sessionStorage.setItem("popup_dismissed", "1");
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem("popup_dismissed")) return;

    // Show after 20 seconds
    const timer = setTimeout(() => setIsVisible(true), 20000);

    // Exit-intent on desktop
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("popup_dismissed")) {
        setIsVisible(true);
        clearTimeout(timer);
      }
    };

    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your email provider API call here
    setSubmitted(true);
    setTimeout(dismiss, 2000);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[70] max-w-md mx-auto"
          >
            <div className="relative glass-strong rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
              {/* Top accent */}
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />

              {/* Close button */}
              <button
                onClick={dismiss}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/8 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-7">
                {submitted ? (
                  <div className="text-center py-4">
                    <p className="text-3xl mb-3">🎉</p>
                    <h3 className="text-lg font-bold text-white mb-1">You&apos;re in!</h3>
                    <p className="text-sm text-slate-400">Check your inbox for the free chapter.</p>
                  </div>
                ) : (
                  <>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-3 py-1 mb-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-xs font-semibold text-amber-300">Wait — Special Offer</span>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-2 leading-tight">
                      Get Chapter 1{" "}
                      <span className="gradient-text">Completely Free</span>
                    </h2>
                    <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                      Enter your email and we&apos;ll send you &ldquo;Building Your AI Lead Generation Foundation&rdquo; instantly — no credit card needed.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3 mb-4">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-white/8 transition-all"
                      />
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/25 active:scale-[0.99]"
                      >
                        Send Me the Free Chapter →
                      </button>
                    </form>

                    <div className="border-t border-white/8 pt-4 flex items-center justify-between">
                      <p className="text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
                      <button
                        onClick={() => { dismiss(); router.push("/checkout?plan=pro"); }}
                        className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                      >
                        Skip — Buy now ($27) →
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
