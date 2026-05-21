import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import ProductHero from "@/components/sections/ProductHero";

export const metadata: Metadata = {
  title: "AI Lead Generation Strategy Ebook — Full Details & Pricing",
  description:
    "Everything inside the AI Lead Generation Strategy ebook. 150+ pages, 40+ templates, automation blueprints. Plans starting from $17.",
};

export default function ProductPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProductHero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
