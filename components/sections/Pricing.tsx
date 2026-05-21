"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { PRODUCTS, type Product } from "@/lib/products";

function PricingCard({ product, isSelected, onSelect }: {
  product: Product;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      onClick={onSelect}
      className={`relative rounded-2xl cursor-pointer transition-all duration-200 overflow-hidden ${
        product.highlight
          ? "ring-2 ring-indigo-500 shadow-xl shadow-indigo-500/20"
          : isSelected
          ? "ring-2 ring-violet-500/60"
          : "ring-1 ring-white/8 hover:ring-white/20"
      }`}
    >
      {product.highlight && (
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-center py-2">
          <p className="text-xs font-bold text-white tracking-wide">⭐ MOST POPULAR</p>
        </div>
      )}

      <div className="glass p-6">
        {/* Badge */}
        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 mb-4">
          {product.badge}
        </span>

        <h3 className="text-lg font-bold text-white mb-1">{product.name}</h3>
        <p className="text-sm text-slate-400 mb-5 leading-relaxed">{product.description}</p>

        {/* Price */}
        <div className="flex items-end gap-2 mb-6">
          <span className="text-4xl font-black text-white">${product.price}</span>
          <div className="pb-1">
            <p className="text-slate-500 line-through text-sm">${product.originalPrice}</p>
            <p className="text-emerald-400 text-xs font-semibold">
              Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onSelect}
          className={`w-full py-3 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95 mb-5 ${
            product.highlight || isSelected
              ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white shadow-lg shadow-indigo-500/20"
              : "bg-white/8 text-white hover:bg-white/12 border border-white/10"
          }`}
        >
          {isSelected ? "✓ Selected — Go to Checkout" : `Get ${product.name} — $${product.price}`}
        </button>

        {/* Features */}
        <ul className="space-y-2.5">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <svg className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Pricing() {
  const router = useRouter();
  const [selected, setSelected] = useState("pro");

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(() => {
      router.push(`/checkout?plan=${id}`);
    }, 150);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-600/8 to-transparent -translate-x-1/2 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="warning" className="mb-4">🔥 Limited Time Pricing</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            One-time payment. No subscription. Instant access after checkout.
          </p>
        </motion.div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
          {PRODUCTS.map((product) => (
            <PricingCard
              key={product.id}
              product={product}
              isSelected={selected === product.id}
              onSelect={() => handleSelect(product.id)}
            />
          ))}
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span>🔒 Secure checkout</span>
          <span>↩️ 30-day money-back guarantee</span>
          <span>⚡ Instant download after payment</span>
          <span>📧 info@aiproducts.online</span>
        </div>
      </div>
    </section>
  );
}
