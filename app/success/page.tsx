import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SuccessContent from "@/components/sections/SuccessContent";

export const metadata: Metadata = {
  title: "Thank You — Your Download is Ready",
  description: "Your purchase is complete. Your download is ready — instant access to your AI product.",
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={
            <div className="text-center py-20">
              <div className="w-10 h-10 rounded-full border-4 border-emerald-500/30 border-t-emerald-500 animate-spin mx-auto" />
            </div>
          }>
            <SuccessContent />
          </Suspense>
          <p className="text-center text-sm text-slate-500 mt-8">
            Need help?{" "}
            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              Contact support
            </Link>{" "}
            or email{" "}
            <a href="mailto:info@aiproducts.online" className="text-indigo-400 hover:text-indigo-300 transition-colors">
              info@aiproducts.online
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
