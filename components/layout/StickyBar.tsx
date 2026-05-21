"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";

const popularPlan = PRODUCTS.find((p) => p.highlight) ?? PRODUCTS[1];
const cheapestPlan = PRODUCTS[0];

export default function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 inset-x-0 z-50"
        >
          {/* Top accent line */}
          <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500" />

          {/* Bar body */}
          <div className="bg-[#0a0a18] border-t border-indigo-500/20 shadow-2xl shadow-black">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">

              {/* Left: product info */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="hidden sm:flex w-9 h-9 flex-shrink-0 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 items-center justify-center text-sm">
                  📘
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-white truncate">
                    AI Lead Generation Strategy Ebook
                  </p>
                  <p className="text-xs text-slate-400 hidden sm:block">
                    Instant digital download · PDF + ePub
                  </p>
                </div>
              </div>

              {/* Right: price + CTA */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="text-right">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-white">${popularPlan.price}</span>
                    <span className="text-xs text-slate-500 line-through">${popularPlan.originalPrice}</span>
                  </div>
                  <p className="text-[10px] text-emerald-400 font-semibold hidden sm:block">
                    From ${cheapestPlan.price} · Save up to {Math.round(((PRODUCTS[PRODUCTS.length-1].originalPrice - PRODUCTS[PRODUCTS.length-1].price) / PRODUCTS[PRODUCTS.length-1].originalPrice) * 100)}%
                  </p>
                </div>
                <Link
                  href={`/checkout?plan=${popularPlan.id}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/30 whitespace-nowrap active:scale-95"
                >
                  Get Access
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
