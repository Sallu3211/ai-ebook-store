import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import FloatingPopup from "@/components/ui/FloatingPopup";
import StoreHero from "@/components/sections/StoreHero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Testimonials from "@/components/sections/Testimonials";
import EmailCapture from "@/components/sections/EmailCapture";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "TrendingAI — Premium AI Tools, Ebooks & Templates",
  description:
    "Your unfair advantage. Browse premium AI products — ebooks, templates, and tools built for marketers, founders, and growth leaders. Instant download.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <StoreHero />
        <FeaturedProducts />
        <Testimonials />
        <div id="newsletter">
          <EmailCapture />
        </div>
        <FAQ />
      </main>
      <Footer />
      <StickyBar />
      <FloatingPopup />
    </>
  );
}
