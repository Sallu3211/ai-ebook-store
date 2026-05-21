import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "TrendingAI's 30-day money-back guarantee and full refund policy.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-2">Refund Policy</h1>
          <p className="text-sm text-slate-500 mb-10">Last updated: May 22, 2026</p>

          {/* Guarantee hero */}
          <div className="relative mb-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl blur-sm opacity-20" />
            <div className="relative glass-strong rounded-2xl p-6 sm:p-8 border border-emerald-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center text-3xl flex-shrink-0">
                  🛡️
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">30-Day Money-Back Guarantee</h2>
                  <p className="text-sm text-emerald-400 font-medium">No questions asked · Full refund</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">
                We stand behind every product we sell 100%. If you are not completely satisfied with your purchase for any reason within 30 days of buying, we will issue you a full refund — no questions, no hassle. We want you to feel completely risk-free when buying from TrendingAI.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white mb-4">What Our Guarantee Covers</h2>
              <ul className="space-y-2">
                {[
                  "All digital products purchased from TrendingAI (ebooks, templates, prompt packs, tools)",
                  "All pricing plans — Starter, Standard, Advanced, and Complete",
                  "Purchases made within the last 30 calendar days",
                  "Any reason — we do not require you to explain or justify your refund request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white mb-4">How to Request a Refund</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                Simply send us an email and we will handle the rest. You do not need to return anything — digital products cannot be "returned."
              </p>
              <ol className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Email us",
                    desc: 'Send an email to info@aiproducts.online with the subject line "Refund Request"',
                  },
                  {
                    step: "2",
                    title: "Include your details",
                    desc: "Provide your full name, the email address used at purchase, and your order/transaction ID (found in your receipt email)",
                  },
                  {
                    step: "3",
                    title: "We process it",
                    desc: "We will confirm your refund by email and process it within 1–3 business days",
                  },
                  {
                    step: "4",
                    title: "Money returned",
                    desc: "Your refund will appear on your original payment method within 5–10 business days, depending on your bank or card issuer",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-xs font-bold text-indigo-400">
                      {item.step}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white mb-4">Refund Timeline</h2>
              <div className="space-y-3">
                {[
                  { label: "Refund confirmation email", time: "Within 24 hours" },
                  { label: "Refund is processed to your card", time: "1–3 business days" },
                  { label: "Appears on your statement", time: "5–10 business days" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-sm text-slate-400">{row.label}</span>
                    <span className="text-sm font-semibold text-white">{row.time}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white mb-4">After Your Refund</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Once a refund is processed, your access to the download links for that product will be revoked. You agree not to retain or distribute copies of any product for which you have received a refund, as outlined in our Terms &amp; Conditions.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-lg font-bold text-white mb-3">Still Have Questions?</h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                We&apos;re here to help. If you have any questions about your order or our refund policy, don&apos;t hesitate to reach out. We typically respond within 24 hours.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:info@aiproducts.online"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all"
                >
                  📧 Email Support
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 glass border border-white/10 hover:border-white/20 transition-all"
                >
                  Contact Form →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
