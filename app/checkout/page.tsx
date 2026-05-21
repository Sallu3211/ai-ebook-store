"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { STORE_PRODUCTS, getStoreProduct, getProductPlan, type StoreProduct, type ProductPlan } from "@/lib/store";

function CheckoutForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productSlug = searchParams.get("product") ?? STORE_PRODUCTS[0].slug;
  const planId = searchParams.get("plan") ?? "pro";

  const [product, setProduct] = useState<StoreProduct>(
    getStoreProduct(productSlug) ?? STORE_PRODUCTS[0]
  );
  const [plan, setPlan] = useState<ProductPlan>(
    getProductPlan(product, planId) ?? product.plans[0]
  );
  const [step, setStep] = useState<"form" | "processing">("form");
  const [formData, setFormData] = useState({ name: "", email: "", card: "", expiry: "", cvc: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const p = getStoreProduct(productSlug) ?? STORE_PRODUCTS[0];
    setProduct(p);
    setPlan(getProductPlan(p, planId) ?? p.plans[0]);
  }, [productSlug, planId]);

  const formatCard = (v: string) =>
    v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const formatExpiry = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Valid email required";
    if (formData.card.replace(/\s/g, "").length !== 16) e.card = "16-digit card number";
    if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) e.expiry = "MM/YY";
    if (!/^\d{3,4}$/.test(formData.cvc)) e.cvc = "3–4 digits";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStep("processing");
    // ── PADDLE INTEGRATION POINT ──────────────────────────────────────────────
    // window.Paddle.Checkout.open({
    //   items: [{ priceId: plan.paddlePriceId, quantity: 1 }],
    //   customer: { email: formData.email },
    //   settings: {
    //     displayMode: "overlay",
    //     theme: "dark",
    //     successUrl: `${window.location.origin}/success?product=${product.slug}&plan=${plan.id}`,
    //   },
    // });
    // ─────────────────────────────────────────────────────────────────────────
    await new Promise((r) => setTimeout(r, 2500));
    router.push(`/success?product=${product.slug}&plan=${plan.id}`);
  };

  const inputBase =
    "w-full rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border transition-all bg-white/5";

  const field = (name: keyof typeof formData) =>
    errors[name]
      ? `${inputBase} border-red-500/50`
      : `${inputBase} border-white/10 focus:border-indigo-500/50`;

  const savings = plan ? plan.originalPrice - plan.price : 0;
  const savingsPercent = plan ? Math.round((savings / plan.originalPrice) * 100) : 0;

  return (
    <>
      {step === "processing" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030712]/80 backdrop-blur-sm">
          <div className="glass-strong rounded-2xl p-10 text-center max-w-xs mx-4">
            <div className="w-14 h-14 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin mx-auto mb-5" />
            <h2 className="text-lg font-bold text-white mb-1">Processing Payment…</h2>
            <p className="text-sm text-slate-400">Please don&apos;t close this window</p>
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left — form */}
        <div className="flex-1 w-full min-w-0">

          {/* Product summary header */}
          <div className="glass rounded-2xl p-4 mb-6 flex items-center gap-4">
            <div className="w-12 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-900 to-violet-900 border border-indigo-700/30 flex items-center justify-center text-xl">
              {product.coverEmoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">{product.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">{plan?.name} plan</p>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-xl font-black text-white">${plan?.price}</p>
              <p className="text-xs text-slate-500 line-through">${plan?.originalPrice}</p>
            </div>
          </div>

          <h1 className="text-2xl font-black text-white mb-1">Complete Your Order</h1>
          <p className="text-sm text-slate-400 mb-6">
            Secure checkout · 256-bit SSL ·{" "}
            <Link href={`/products/${product.slug}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Change plan
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Contact */}
            <div className="glass rounded-2xl p-5 space-y-4">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Contact Information
              </h2>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Smith"
                  className={field("name")}
                />
                {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@company.com"
                  className={field("email")}
                />
                {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                <p className="mt-1 text-xs text-slate-600">Download link will be sent here</p>
              </div>
            </div>

            {/* Payment */}
            <div className="glass rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  Payment Details
                </h2>
                <div className="flex gap-1">
                  {["VISA", "MC", "AMEX"].map((b) => (
                    <span key={b} className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/8 text-slate-400">
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">Card Number</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={formData.card}
                  onChange={(e) => setFormData({ ...formData, card: formatCard(e.target.value) })}
                  placeholder="1234 5678 9012 3456"
                  className={`${field("card")} font-mono tracking-wider`}
                  maxLength={19}
                />
                {errors.card && <p className="mt-1 text-xs text-red-400">{errors.card}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">Expiry</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={formData.expiry}
                    onChange={(e) => setFormData({ ...formData, expiry: formatExpiry(e.target.value) })}
                    placeholder="MM/YY"
                    className={`${field("expiry")} font-mono`}
                    maxLength={5}
                  />
                  {errors.expiry && <p className="mt-1 text-xs text-red-400">{errors.expiry}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1.5">CVC</label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={formData.cvc}
                    onChange={(e) =>
                      setFormData({ ...formData, cvc: e.target.value.replace(/\D/g, "").slice(0, 4) })
                    }
                    placeholder="123"
                    className={`${field("cvc")} font-mono`}
                    maxLength={4}
                  />
                  {errors.cvc && <p className="mt-1 text-xs text-red-400">{errors.cvc}</p>}
                </div>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={step === "processing"}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all shadow-xl shadow-indigo-500/25 disabled:opacity-60 active:scale-[0.99]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Pay ${plan?.price}.00 — Get Instant Access
            </button>

            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-600">
              <span>🔒 SSL Encrypted</span>
              <span>↩️ 30-Day Refund</span>
              <span>⚡ Instant Delivery</span>
            </div>
          </form>
        </div>

        {/* Right — order summary */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
          <div className="glass rounded-2xl overflow-hidden lg:sticky lg:top-24">
            <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border-b border-white/8 px-5 py-4">
              <p className="text-xs font-bold text-white uppercase tracking-wider">Order Summary</p>
            </div>
            <div className="p-5">
              {/* Savings badge */}
              {savings > 0 && (
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-3 py-2.5 mb-5">
                  <span className="text-emerald-400 text-sm">🎉</span>
                  <p className="text-xs font-semibold text-emerald-400">
                    You&apos;re saving ${savings}.00 ({savingsPercent}% off) today
                  </p>
                </div>
              )}

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">{product.name}</span>
                  <span className="text-white font-medium">{plan?.name}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Original price</span>
                  <span className="text-slate-500 line-through">${plan?.originalPrice}.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Discount</span>
                  <span className="text-emerald-400 font-medium">−${savings}.00</span>
                </div>
              </div>

              <div className="flex justify-between items-center border-t border-white/8 pt-4 mb-5">
                <span className="font-bold text-white">Total today</span>
                <span className="text-2xl font-black text-white">${plan?.price}.00</span>
              </div>

              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                What&apos;s included:
              </p>
              <ul className="space-y-2 mb-5">
                {plan?.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs">
                    <svg className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
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
                  <div key={g.text} className="flex items-center gap-2 text-xs text-slate-500">
                    <span>{g.icon}</span>
                    <span>{g.text}</span>
                  </div>
                ))}
              </div>

              <div className="text-center text-xs text-slate-600 border-t border-white/8 pt-4 mt-4">
                Questions?{" "}
                <a href="mailto:info@aiproducts.online" className="text-indigo-400 hover:text-indigo-300">
                  info@aiproducts.online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 rounded-full border-4 border-indigo-500/30 border-t-indigo-500 animate-spin" />
            </div>
          }>
            <CheckoutForm />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
