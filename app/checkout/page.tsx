"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  STORE_PRODUCTS,
  getStoreProduct,
  getProductPlan,
  type StoreProduct,
  type ProductPlan,
} from "@/lib/store";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Paddle?: any;
  }
}

function CheckoutForm() {
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product") ?? STORE_PRODUCTS[0].slug;
  const planId = searchParams.get("plan") ?? "standard";

  const [product] = useState<StoreProduct>(
    getStoreProduct(productSlug) ?? STORE_PRODUCTS[0]
  );
  const [plan] = useState<ProductPlan | undefined>(
    getProductPlan(product, planId) ?? product.plans[0]
  );

  const [isPaddleReady, setIsPaddleReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    script.async = true;
    script.onload = () => {
      if (!window.Paddle) return;
      if (process.env.NEXT_PUBLIC_PADDLE_ENV === "sandbox") {
        window.Paddle.Environment.set("sandbox");
      }
      window.Paddle.Initialize({
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
      });
      setIsPaddleReady(true);
    };
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, []);

  const handleCheckout = () => {
    const priceId = process.env.NEXT_PUBLIC_PADDLE_PRICE_ID;
    if (!window.Paddle || !isPaddleReady || !priceId) return;
    setIsLoading(true);
    window.Paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
      settings: {
        displayMode: "overlay",
        theme: "dark",
        successUrl: `${window.location.origin}/success?product=${product.slug}&plan=${plan?.id ?? "standard"}`,
      },
    });
    setIsLoading(false);
  };

  const savings = plan ? plan.originalPrice - plan.price : 0;
  const savingsPercent = plan
    ? Math.round((savings / plan.originalPrice) * 100)
    : 0;

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Left — product summary + pay button */}
      <div className="flex-1 w-full min-w-0">
        {/* Product header */}
        <div className="glass rounded-2xl p-5 mb-6 flex items-center gap-4">
          <div className="w-14 h-16 flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-900 to-violet-900 border border-indigo-700/30 flex items-center justify-center text-2xl">
            {product.coverEmoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-bold text-white truncate">
              {product.name}
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Instant PDF download · Yours forever
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <p className="text-2xl font-black text-white">${plan?.price}</p>
            <p className="text-xs text-slate-500 line-through">
              ${plan?.originalPrice}
            </p>
          </div>
        </div>

        <h1 className="text-2xl font-black text-white mb-1">
          Complete Your Order
        </h1>
        <p className="text-sm text-slate-400 mb-8">
          Secure checkout · 256-bit SSL ·{" "}
          <Link
            href={`/products/${product.slug}`}
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Back to product
          </Link>
        </p>

        {/* Pay button */}
        <button
          onClick={handleCheckout}
          disabled={!isPaddleReady || isLoading}
          className="w-full flex items-center justify-center gap-3 py-5 px-8 rounded-2xl text-lg font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-xl shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.99]"
        >
          {isLoading || !isPaddleReady ? (
            <>
              <svg
                className="w-5 h-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Loading…
            </>
          ) : (
            <>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Pay ${plan?.price}.00 — Get Instant Access
            </>
          )}
        </button>

        <div className="flex flex-wrap justify-center gap-5 text-xs text-slate-500 mt-5">
          <span>🔒 256-bit SSL Encrypted</span>
          <span>↩️ 30-Day Money-Back</span>
          <span>⚡ Instant Download</span>
        </div>

        {/* Accepted cards */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <span className="text-xs text-slate-600">We accept:</span>
          {["VISA", "Mastercard", "Amex", "PayPal"].map((c) => (
            <span
              key={c}
              className="text-[10px] font-bold px-2 py-1 rounded bg-white/6 border border-white/8 text-slate-400"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Right — order summary */}
      <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
        <div className="glass rounded-2xl overflow-hidden lg:sticky lg:top-24">
          <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border-b border-white/8 px-5 py-4">
            <p className="text-xs font-bold text-white uppercase tracking-wider">
              Order Summary
            </p>
          </div>
          <div className="p-5">
            {/* Savings */}
            {savings > 0 && (
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2.5 mb-5">
                <span className="text-emerald-400 text-sm">🎉</span>
                <p className="text-xs font-semibold text-emerald-400">
                  You&apos;re saving ${savings} ({savingsPercent}% off) today
                </p>
              </div>
            )}

            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">{product.name}</span>
                <span className="text-white font-medium">PDF Guide</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Original price</span>
                <span className="text-slate-500 line-through">
                  ${plan?.originalPrice}.00
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Discount</span>
                <span className="text-emerald-400 font-medium">
                  −${savings}.00
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-white/8 pt-4 mb-5">
              <span className="font-bold text-white">Total today</span>
              <span className="text-2xl font-black text-white">
                ${plan?.price}.00
              </span>
            </div>

            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              What&apos;s included:
            </p>
            <ul className="space-y-2 mb-5">
              {plan?.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs">
                  <svg
                    className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-400">{f}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/8 pt-4 space-y-2">
              {[
                { icon: "🔒", text: "Secure 256-bit SSL payment" },
                { icon: "⚡", text: "Instant download after payment" },
                { icon: "↩️", text: "30-day money-back guarantee" },
              ].map((g) => (
                <div
                  key={g.text}
                  className="flex items-center gap-2 text-xs text-slate-500"
                >
                  <span>{g.icon}</span>
                  <span>{g.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center text-xs text-slate-600 border-t border-white/8 pt-4 mt-4">
              Questions?{" "}
              <a
                href="mailto:info@aiproducts.online"
                className="text-indigo-400 hover:text-indigo-300"
              >
                info@aiproducts.online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Suspense
            fallback={
              <div className="flex items-center justify-center py-20">
                <div className="w-10 h-10 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin" />
              </div>
            }
          >
            <CheckoutForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
