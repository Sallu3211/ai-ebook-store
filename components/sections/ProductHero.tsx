"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { PRODUCTS } from "@/lib/products";

const tableOfContents = [
  { ch: "01", title: "Building Your AI Lead Generation Foundation" },
  { ch: "02", title: "AI-Powered Ideal Customer Profile (ICP) Mapping" },
  { ch: "03", title: "Automated Prospect Discovery & Qualification" },
  { ch: "04", title: "Hyper-Personalized Outreach at Scale" },
  { ch: "05", title: "LinkedIn AI Domination Strategy" },
  { ch: "06", title: "Email Automation That Converts" },
  { ch: "07", title: "Content-Led Lead Generation with AI" },
  { ch: "08", title: "Building Your Automation Stack" },
  { ch: "09", title: "Funnel Optimization & A/B Testing with AI" },
  { ch: "10", title: "Analytics, Attribution & Scaling" },
];

export default function ProductHero() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const selected = PRODUCTS.find((p) => p.id === selectedPlan) ?? PRODUCTS[1];

  const handleBuy = () => {
    router.push(`/checkout?plan=${selectedPlan}`);
  };

  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-950/40 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-12 items-start">

          {/* ── LEFT: Book info + plan selector ─────────────────────────── */}
          <div className="flex-1 min-w-0 xl:sticky xl:top-24">

            <Badge variant="warning" className="mb-4">
              🔥 Limited Time — Up to 72% Off
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-3">
              AI Lead Generation{" "}
              <span className="gradient-text">Strategy Ebook</span>
            </h1>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-lg">
              The complete, battle-tested playbook for building an AI-powered lead
              generation machine. 150+ pages of actionable frameworks, real case
              studies, and plug-and-play templates.
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-semibold">4.9/5</span> · 2,400+ readers
              </p>
            </div>

            {/* ── Plan selector ── */}
            <div className="mb-5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Choose Your Plan
              </p>
              <div className="space-y-2">
                {PRODUCTS.map((plan) => {
                  const isSelected = selectedPlan === plan.id;
                  return (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-150 ${
                        isSelected
                          ? "bg-indigo-500/10 border-indigo-500/50 ring-1 ring-indigo-500/30"
                          : "bg-white/3 border-white/8 hover:border-white/16 hover:bg-white/5"
                      }`}
                    >
                      {/* Radio */}
                      <div className={`flex-shrink-0 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                        isSelected ? "border-indigo-500 bg-indigo-500" : "border-slate-600"
                      }`}>
                        {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-sm font-bold text-white">{plan.name}</span>
                          {plan.highlight && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 uppercase tracking-wide">
                              Most Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 truncate mt-0.5">{plan.description}</p>
                      </div>

                      {/* Price */}
                      <div className="text-right flex-shrink-0">
                        <p className="text-lg font-black text-white">${plan.price}</p>
                        <p className="text-xs text-slate-600 line-through">${plan.originalPrice}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected plan features */}
            <div className="bg-white/3 border border-white/8 rounded-xl p-4 mb-5">
              <p className="text-xs font-semibold text-slate-400 mb-2.5 uppercase tracking-wider">
                What&apos;s included in {selected.name}:
              </p>
              <ul className="space-y-1.5">
                {selected.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buy button */}
            <button
              onClick={handleBuy}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-xl shadow-indigo-500/25 active:scale-[0.99] mb-3"
            >
              Get {selected.name} — ${selected.price} →
            </button>

            <div className="flex flex-wrap gap-3 text-xs text-slate-500 justify-center">
              <span>🔒 Secure checkout</span>
              <span>⚡ Instant download</span>
              <span>↩️ 30-day guarantee</span>
            </div>

            {/* Trust badges */}
            <div className="mt-6 pt-6 border-t border-white/8 grid grid-cols-3 gap-3">
              {[
                { emoji: "🔒", label: "Secure Payment", sub: "SSL Encrypted" },
                { emoji: "↩️", label: "Money-Back", sub: "30 Day Guarantee" },
                { emoji: "⚡", label: "Instant Access", sub: "Digital Delivery" },
              ].map((b) => (
                <div key={b.label} className="text-center">
                  <p className="text-xl mb-1">{b.emoji}</p>
                  <p className="text-xs font-semibold text-white">{b.label}</p>
                  <p className="text-xs text-slate-500">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Table of contents + stats ─────────────────────────── */}
          <div className="flex-1 min-w-0 space-y-4">

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "150+", label: "Pages" },
                { value: "10", label: "Chapters" },
                { value: "40+", label: "Templates" },
                { value: "2,400+", label: "Readers" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-2xl font-black gradient-text">{s.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Table of contents */}
            <div className="glass rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border-b border-white/8 px-5 py-4">
                <h2 className="text-sm font-bold text-white">Table of Contents</h2>
                <p className="text-xs text-slate-400 mt-0.5">10 chapters · 150+ pages</p>
              </div>
              <div className="p-2">
                {tableOfContents.map((chapter, i) => (
                  <div
                    key={chapter.ch}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/4 transition-colors group"
                  >
                    <span className="text-xs font-mono font-bold text-indigo-400 w-6 flex-shrink-0">
                      {chapter.ch}
                    </span>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors leading-snug flex-1">
                      {chapter.title}
                    </span>
                    {i === 0 && (
                      <span className="text-[10px] text-emerald-400 font-semibold flex-shrink-0 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        Free Preview
                      </span>
                    )}
                    {selectedPlan === "essential" && i > 2 && (
                      <svg className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bonus box */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-teal-900/20" />
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
              <div className="relative p-5">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  🎁 Bonus — Included with Pro & Complete
                </p>
                <ul className="space-y-1.5">
                  {[
                    "40+ AI prompt templates (copy-paste ready)",
                    "12 automation workflow blueprints",
                    "AI tool stack guide & resource list",
                    "LinkedIn outreach script library",
                  ].map((item) => (
                    <li key={item} className="text-sm text-slate-300 flex items-center gap-2">
                      <span className="text-emerald-400">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
