"use client";

import { useRouter } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { type StoreProduct } from "@/lib/store";

export default function ProductDetail({ product }: { product: StoreProduct }) {
  const router = useRouter();
  const plan = product.plans[0];

  const handleBuy = () => {
    router.push(`/checkout?product=${product.slug}&plan=${plan?.id ?? "standard"}`);
  };

  const savings = plan ? plan.originalPrice - plan.price : 0;
  const savingsPercent = plan ? Math.round((savings / plan.originalPrice) * 100) : 0;

  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-indigo-950/40 to-transparent" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
          <a href="/" className="hover:text-slate-300 transition-colors">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-slate-300 transition-colors">Products</a>
          <span>/</span>
          <span className="text-slate-300">{product.name}</span>
        </nav>

        <div className="flex flex-col xl:flex-row gap-12 items-start">
          {/* LEFT: Info + buy */}
          <div className="flex-1 min-w-0 xl:sticky xl:top-24">
            <Badge variant="warning" className="mb-4">
              🔥 Limited Time — Save {savingsPercent}%
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-3">
              {product.name.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">{product.name.split(" ").slice(-1)}</span>
            </h1>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-lg text-base">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-400">
                <span className="text-white font-semibold">{product.rating}/5</span>
                {product.reviewCount > 0 && (
                  <span className="text-slate-500"> · {product.reviewCount.toLocaleString()}+ verified buyers</span>
                )}
              </p>
            </div>

            {/* Price block */}
            {plan && (
              <div className="glass rounded-2xl p-6 mb-5">
                <div className="flex items-end gap-3 mb-1">
                  <span className="text-5xl font-black text-white">${plan.price}</span>
                  <div className="pb-1.5">
                    <span className="text-xl text-slate-500 line-through font-medium">${plan.originalPrice}</span>
                    <span className="ml-2 text-sm font-bold text-emerald-400">Save ${savings}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 mb-5">One-time payment · No subscription · Yours forever</p>

                <button
                  onClick={handleBuy}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-xl shadow-indigo-500/25 active:scale-[0.99] mb-3"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Get Instant Access — ${plan.price}
                </button>

                <div className="grid grid-cols-3 gap-2 text-center">
                  {[
                    { icon: "🔒", label: "Secure Checkout" },
                    { icon: "⚡", label: "Instant Download" },
                    { icon: "↩️", label: "30-Day Refund" },
                  ].map((b) => (
                    <div key={b.label} className="bg-white/3 rounded-lg py-2">
                      <p className="text-base mb-0.5">{b.icon}</p>
                      <p className="text-[10px] text-slate-500 font-medium">{b.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What's included */}
            {plan && (
              <div className="glass rounded-2xl p-5">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Everything Included:
                </p>
                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT: Stats + table of contents + bonus */}
          <div className="flex-1 min-w-0 space-y-4">
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "150+", label: "Pages" },
                { value: "10", label: "Chapters" },
                { value: "40+", label: "Templates" },
                { value: "2,400+", label: "Buyers" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-2xl font-black gradient-text">{s.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Table of contents */}
            {product.tableOfContents && (
              <div className="glass rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border-b border-white/8 px-5 py-4">
                  <h2 className="text-sm font-bold text-white">Table of Contents</h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {product.tableOfContents.length} chapters · 150+ pages
                  </p>
                </div>
                <div className="p-2">
                  {product.tableOfContents.map((chapter, i) => (
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
                          Preview
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bonus box */}
            {product.bonuses && product.bonuses.length > 0 && (
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-teal-900/20" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                <div className="relative p-5">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">
                    🎁 Included Bonuses
                  </p>
                  <ul className="space-y-2">
                    {product.bonuses.map((item) => (
                      <li key={item} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="text-emerald-400">→</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Buy again CTA (mobile sticky replacement) */}
            {plan && (
              <button
                onClick={handleBuy}
                className="xl:hidden w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-xl shadow-indigo-500/25 active:scale-[0.99]"
              >
                Get Instant Access — ${plan.price}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
