import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How LeadGenPro collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-12">Last updated: May 21, 2026</p>

          <div className="space-y-6">
            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-slate-400 leading-relaxed mb-3">
                We collect information you provide directly to us, such as when you make a purchase or contact us for support. This includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
                <li>Name and email address (for purchase and delivery)</li>
                <li>Payment information (processed securely by Paddle — we never store card details)</li>
                <li>Communications you send us</li>
                <li>Device and browser information (for analytics)</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-slate-400 text-sm">
                <li>Process and fulfill your purchase</li>
                <li>Send download links and purchase receipts</li>
                <li>Provide customer support</li>
                <li>Send product updates (you can unsubscribe anytime)</li>
                <li>Improve our products and website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">3. Payments & Third-Party Services</h2>
              <p className="text-slate-400 leading-relaxed">
                All payments are processed by <strong className="text-white">Paddle.com</strong>, our Merchant of Record. Paddle handles all payment processing, VAT/tax compliance, and fraud protection. We never receive or store your payment card details.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">4. Data Sharing</h2>
              <p className="text-slate-400 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties.
              </p>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="text-slate-400 leading-relaxed mb-3">You may have the right to access, correct, delete, or export your personal data. Contact us at:</p>
              <a href="mailto:info@aiproducts.online" className="text-indigo-400 hover:text-indigo-300">
                info@aiproducts.online
              </a>
            </section>

            <section className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-4">6. Contact</h2>
              <p className="text-slate-400 leading-relaxed">
                For privacy questions:{" "}
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
