import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "LeadGenPro 30-day money-back guarantee and refund policy.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-2">Refund Policy</h1>
          <p className="text-sm text-slate-500 mb-12">Last updated: May 21, 2026</p>

          {/* Guarantee callout */}
          <div className="relative mb-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur-sm opacity-20" />
            <div className="relative glass-strong rounded-2xl p-6 sm:p-8 border border-emerald-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-3xl flex-shrink-0">
                  🛡️
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">30-Day Money-Back Guarantee</h2>
                  <p className="text-sm text-emerald-400">No questions asked</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                We stand behind our ebook 100%. If you&apos;re not completely satisfied within 30 days of purchase, we&apos;ll issue a full refund — no questions asked.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">How to Request a Refund</h2>
              <ol className="list-decimal list-inside space-y-3 text-slate-400 text-sm">
                <li>
                  Email{" "}
                  <a href="mailto:info@aiproducts.online" className="text-indigo-400 hover:text-indigo-300">
                    info@aiproducts.online
                  </a>{" "}
                  with subject: &quot;Refund Request&quot;
                </li>
                <li>Include your name and purchase email address</li>
                <li>Include your order/transaction ID from your receipt email</li>
              </ol>
              <p className="text-slate-400 text-sm mt-4">
                Refunds are processed within 3–5 business days back to your original payment method.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">Refund Eligibility</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
                <li>Request is within 30 days of original purchase</li>
                <li>You have not resold or redistributed the ebook content</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">Questions?</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                We&apos;re here to help. Reach out anytime.
              </p>
              <Button href="/contact" variant="secondary" size="md">
                Contact Support →
              </Button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
