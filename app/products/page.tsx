import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FeaturedProducts from "@/components/sections/FeaturedProducts";

export const metadata: Metadata = {
  title: "All Products — TrendingAI",
  description:
    "Browse all AI tools, ebooks, and templates. One-time payment, instant download, 30-day money-back guarantee.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Page header */}
        <div className="relative py-14 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-indigo-950/30 to-transparent" />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-3">
              Store
            </p>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
              All <span className="gradient-text">Products</span>
            </h1>
            <p className="text-slate-400 max-w-lg mx-auto">
              One-time payment · Instant download · 30-day money-back guarantee
            </p>
          </div>
        </div>

        <FeaturedProducts />
      </main>
      <Footer />
    </>
  );
}
