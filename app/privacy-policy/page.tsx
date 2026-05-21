import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TrendingAI collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "1. Introduction",
    content: `TrendingAI ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights regarding that data. By using our website and purchasing our products, you agree to the practices described in this policy.`,
  },
  {
    title: "2. Information We Collect",
    content: `We collect the following types of information:`,
    list: [
      "Name and email address — provided when you make a purchase or sign up for our newsletter",
      "Payment information — processed securely via SSL encryption; we never store card details",
      "Order and transaction history — to manage your purchases and provide download access",
      "Communications — any messages you send us via email or our contact form",
      "Usage data — pages visited, browser type, device type, and IP address for analytics purposes",
    ],
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect solely to:`,
    list: [
      "Process and fulfil your purchase and deliver your digital products",
      "Send you purchase receipts, download links, and order confirmations",
      "Provide customer support and respond to your enquiries",
      "Send product updates, new releases, and exclusive offers (you can unsubscribe at any time)",
      "Improve our website, products, and customer experience",
      "Comply with applicable legal and regulatory obligations",
    ],
  },
  {
    title: "4. Payment Processing",
    content: `All payments are processed via 256-bit SSL encrypted connections. We use industry-standard security to handle payment processing, fraud prevention, and order fulfilment. We never receive, see, or store your full card details.`,
  },
  {
    title: "5. Data Sharing",
    content: `We do not sell, rent, or trade your personal information to any third party. We may share your data only in the following limited circumstances:`,
    list: [
      "With our secure payment processor, as required to complete your purchase",
      "With analytics providers (e.g. Google Analytics) in aggregated, anonymised form only",
      "If required by law, court order, or government authority",
    ],
  },
  {
    title: "6. Data Retention",
    content: `We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law. Purchase records are retained for a minimum of 7 years for accounting and tax compliance purposes. You may request deletion of your data at any time (see Your Rights below).`,
  },
  {
    title: "7. Cookies",
    content: `Our website uses essential cookies to function correctly, and optional analytics cookies to understand how visitors use our site. You can disable non-essential cookies in your browser settings. We do not use cookies for advertising or tracking across third-party websites.`,
  },
  {
    title: "8. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal data:`,
    list: [
      "Access — request a copy of the personal data we hold about you",
      "Correction — request that we correct inaccurate or incomplete data",
      "Deletion — request that we delete your personal data (subject to legal retention requirements)",
      "Portability — request that we transfer your data to another provider",
      "Objection — object to our processing of your data for marketing purposes",
      "Unsubscribe — opt out of marketing emails at any time via the unsubscribe link",
    ],
    footer: "To exercise any of these rights, contact us at info@aiproducts.online. We will respond within 30 days.",
  },
  {
    title: "9. Security",
    content: `We implement industry-standard technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "10. Children's Privacy",
    content: `Our products and website are intended for users aged 18 and over. We do not knowingly collect personal information from children under 16. If you believe a child has provided us with personal data, please contact us and we will delete it immediately.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of our website after changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "12. Contact Us",
    content: `For any privacy-related questions, requests, or complaints, please contact us at:`,
    contact: true,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-slate-500 mb-12">Last updated: May 22, 2026</p>

          <div className="space-y-4">
            {sections.map((s) => (
              <section key={s.title} className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-lg font-bold text-white mb-3">{s.title}</h2>
                {s.content && (
                  <p className="text-slate-400 leading-relaxed text-sm mb-3">{s.content}</p>
                )}
                {s.list && (
                  <ul className="space-y-2 mb-3">
                    {s.list.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-indigo-400 flex-shrink-0 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.footer && (
                  <p className="text-slate-400 text-sm leading-relaxed mt-2">{s.footer}</p>
                )}
                {s.contact && (
                  <div className="mt-1">
                    <p className="text-sm text-slate-400 mb-1">TrendingAI</p>
                    <a
                      href="mailto:info@aiproducts.online"
                      className="text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                    >
                      info@aiproducts.online
                    </a>
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
