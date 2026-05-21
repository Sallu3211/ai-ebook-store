import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using LeadGenPro products and services.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-2">Terms & Conditions</h1>
          <p className="text-sm text-slate-500 mb-12">Last updated: May 21, 2026</p>

          <div className="space-y-6">
            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-400 leading-relaxed">
                By purchasing or downloading any product from LeadGenPro, you agree to be bound by these Terms and Conditions.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">2. License & Usage</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                Upon purchase, you are granted a <strong className="text-white">non-exclusive, non-transferable, personal license</strong> for personal and business use.
              </p>
              <p className="text-slate-400 font-semibold mb-2 text-sm">You may NOT:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
                <li>Resell, redistribute, or share the ebook</li>
                <li>Claim authorship of the content</li>
                <li>Use the content to create competing products</li>
                <li>Share your download link publicly</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <p className="text-slate-400 leading-relaxed">
                All content within the ebook is the intellectual property of LeadGenPro and is protected by copyright law.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">4. Disclaimer</h2>
              <p className="text-slate-400 leading-relaxed">
                The ebook is provided &quot;as is.&quot; Results will vary based on individual effort, experience, and market conditions. We cannot guarantee specific business outcomes.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">5. Refund Policy</h2>
              <p className="text-slate-400 leading-relaxed">
                We offer a 30-day money-back guarantee. See our{" "}
                <a href="/refund-policy" className="text-indigo-400 hover:text-indigo-300">
                  Refund Policy
                </a>{" "}
                for details.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">6. Contact</h2>
              <p className="text-slate-400 leading-relaxed">
                <a href="mailto:info@aiproducts.online" className="text-indigo-400 hover:text-indigo-300">
                  info@aiproducts.online
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
