import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import ProductDetail from "@/components/sections/ProductDetail";
import { getStoreProduct, STORE_PRODUCTS } from "@/lib/store";

export async function generateStaticParams() {
  return STORE_PRODUCTS.filter((p) => !p.comingSoon).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getStoreProduct(slug);
  if (!product) return {};
  const minPrice = Math.min(...product.plans.map((p) => p.price));
  return {
    title: `${product.name} — TrendingAI`,
    description: `${product.description} Plans from $${minPrice}.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getStoreProduct(slug);

  if (!product || product.comingSoon) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProductDetail product={product} />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyBar product={product} />
    </>
  );
}
