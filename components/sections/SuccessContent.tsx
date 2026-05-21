"use client";

import { useSearchParams } from "next/navigation";
import { getStoreProduct, getProductPlan, STORE_PRODUCTS } from "@/lib/store";

export default function SuccessContent() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product") ?? STORE_PRODUCTS[0].slug;
  const planId = searchParams.get("plan") ?? "pro";

  const product = getStoreProduct(productSlug) ?? STORE_PRODUCTS[0];
  const plan = getProductPlan(product, planId) ?? product.plans[0];
  const pdfUrl = plan?.downloadFile ? `/downloads/${plan.downloadFile}` : null;

  const downloads = [
    {
      label: "Download PDF",
      icon: "📄",
      href: pdfUrl,
      color: "text-indigo-400",
      description: "Best for desktop & printing",
      hidden: !pdfUrl,
    },
  ].filter((d) => !d.hidden);

  return (
    <div className="text-center">
      {/* Success icon */}
      <div className="relative mb-8 inline-block">
        <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-2xl" />
        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/30">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
        You&apos;re All Set! 🎉
      </h1>
      <p className="text-slate-400 mb-2">
        Thank you for purchasing the{" "}
        <span className="text-white font-semibold">{plan?.name}</span>{" "}
        — {product.name}.
      </p>
      <p className="text-sm text-slate-500 mb-10">
        Receipt and download links have been sent to your email.
      </p>

      {/* Download card */}
      <div className="glass-strong rounded-2xl p-6 sm:p-8 mb-6 border border-emerald-500/10 text-left">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-900 to-violet-900 border border-indigo-700/30 flex items-center justify-center text-2xl">
            {product.coverEmoji}
          </div>
          <div>
            <h2 className="text-base font-bold text-white">{product.name}</h2>
            <p className="text-sm text-slate-400 mt-0.5">{plan?.name} · Instant Download</p>
          </div>
        </div>

        {downloads.length > 0 ? (
          <div className={`grid gap-3 ${downloads.length > 1 ? "sm:grid-cols-2" : "grid-cols-1"}`}>
            {downloads.map((dl) => (
              <a
                key={dl.label}
                href={dl.href ?? "#"}
                download
                className="flex items-center gap-3 glass rounded-xl px-5 py-4 text-sm font-semibold text-white hover:bg-white/8 transition-colors border border-white/10 group"
              >
                <span className="text-xl">{dl.icon}</span>
                <div className="text-left">
                  <p className={`font-bold ${dl.color} group-hover:underline`}>{dl.label}</p>
                  <p className="text-xs text-slate-500">{dl.description}</p>
                </div>
                <svg className="w-4 h-4 text-slate-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-400">Your download link will arrive via email shortly.</p>
        )}

      </div>

      {/* What to do next */}
      <div className="glass rounded-2xl p-6 text-left mb-6">
        <h3 className="text-sm font-bold text-white mb-4">What to do next:</h3>
        <ol className="space-y-3">
          {[
            "Click the download button above to save your file",
            "Open the product and start with the quick-start section",
            planId === "complete" || planId === "advanced"
              ? "Check your email for your private community invite link"
              : "Implement one strategy from the first section this week",
            "Bookmark this page — your download link is always available here",
          ].map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-xs font-bold text-indigo-400 mt-0.5">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      {/* Browse more */}
      <div className="text-center">
        <a
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
        >
          Browse more AI products →
        </a>
      </div>
    </div>
  );
}
