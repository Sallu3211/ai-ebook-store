"use client";

import Link from "next/link";
import { type StoreProduct } from "@/lib/store";

const CATEGORY_COLORS: Record<string, string> = {
  ebook: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  template: "text-violet-300 bg-violet-500/10 border-violet-500/20",
  course: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
  tool: "text-amber-300 bg-amber-500/10 border-amber-500/20",
};

const COVER_GRADIENTS: Record<string, string> = {
  ebook: "from-indigo-900 via-violet-900 to-[#030712]",
  template: "from-violet-900 via-purple-900 to-[#030712]",
  course: "from-cyan-900 via-teal-900 to-[#030712]",
  tool: "from-amber-900 via-orange-900 to-[#030712]",
};

export default function ProductCard({ product }: { product: StoreProduct }) {
  const minPrice = Math.min(...product.plans.map((p) => p.price));
  const categoryColor = CATEGORY_COLORS[product.category] ?? CATEGORY_COLORS.ebook;
  const coverGradient = COVER_GRADIENTS[product.category] ?? COVER_GRADIENTS.ebook;

  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden ring-1 ring-white/8 hover:ring-indigo-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 bg-[#0a0a18]">
      {/* Cover */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${coverGradient} flex items-center justify-center overflow-hidden`}>
        {/* Badge row */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={`text-[10px] font-bold px-2 py-1 rounded-full border uppercase tracking-widest ${categoryColor}`}>
            {product.category}
          </span>
          {product.badge && (
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-500/15 border border-amber-500/25 text-amber-300 uppercase tracking-widest">
              ⭐ {product.badge}
            </span>
          )}
        </div>

        {/* Emoji + glow */}
        <div className="relative">
          <div className="absolute inset-0 blur-2xl opacity-30 scale-150 text-6xl flex items-center justify-center">
            {product.coverEmoji}
          </div>
          <span className="relative text-7xl">{product.coverEmoji}</span>
        </div>

        {/* Shine */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a18] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-white leading-snug mb-1 group-hover:text-indigo-200 transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">
          {product.tagline}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-slate-400">
            <span className="text-white font-semibold">{product.rating}</span>
            {product.reviewCount > 0 && ` · ${product.reviewCount.toLocaleString()}+ reviews`}
          </span>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-slate-500 mb-0.5">One-time price</p>
            <p className="text-2xl font-black text-white">${minPrice}</p>
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-lg shadow-indigo-500/20 active:scale-[0.97] whitespace-nowrap"
          >
            View Product
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
