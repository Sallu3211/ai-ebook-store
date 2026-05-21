"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { STORE_PRODUCTS, CATEGORIES, type ProductCategory } from "@/lib/store";
import ProductCard from "@/components/store/ProductCard";
import ComingSoonCard from "@/components/store/ComingSoonCard";

export default function FeaturedProducts() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  const filtered = activeCategory === "all"
    ? STORE_PRODUCTS.filter((p) => p.featured)
    : STORE_PRODUCTS.filter((p) => p.featured && p.category === activeCategory);

  return (
    <section id="products" className="py-20 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
            Products
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm">
            One-time payment. Instant download. More products launching soon.
          </p>
        </motion.div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-150 ${
                activeCategory === cat.id
                  ? "bg-indigo-500/15 border-indigo-500/40 text-white"
                  : "border-white/8 text-slate-400 hover:text-white hover:border-white/16 hover:bg-white/4"
              }`}
            >
              <span>{cat.emoji}</span> {cat.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                {product.comingSoon ? (
                  <ComingSoonCard product={product} />
                ) : (
                  <ProductCard product={product} />
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-slate-500">
            <p className="text-4xl mb-3">🔍</p>
            <p>No products in this category yet — check back soon.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10"
        >
          <p className="text-sm text-slate-500">
            More products dropping soon.{" "}
            <a href="#newsletter" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Get notified →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
