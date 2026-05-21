import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using TrendingAI products and services.",
};

const sections = [
  {
    title: "1. Agreement to Terms",
    content: `By accessing or purchasing from TrendingAI ("we", "us", or "our"), you confirm that you are at least 18 years of age and agree to be legally bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or purchase our products.`,
  },
  {
    title: "2. Products & Digital Delivery",
    content: `TrendingAI sells digital products including ebooks, templates, prompt packs, and tools. All products are delivered digitally as downloadable files. Upon successful payment, you will receive access to your purchased product via a download link on the success page and by email. There are no physical goods shipped. Digital products are non-returnable except under our 30-day money-back guarantee.`,
  },
  {
    title: "3. Licence & Permitted Use",
    content: `Upon purchase, you are granted a non-exclusive, non-transferable, personal licence to use the digital product for your own personal or internal business purposes. This licence permits you to:`,
    list: [
      "Download and use the product on your personal devices",
      "Implement the strategies and frameworks within the product for your own business",
      "Print a copy for personal reference",
    ],
    extra: `You may NOT:`,
    prohibited: [
      "Resell, redistribute, sublicense, or share the product with others",
      "Upload the product to any public or shared platform",
      "Claim authorship or ownership of the content",
      "Use the product to create competing or derivative products for commercial sale",
      "Strip, modify, or remove any copyright notices within the product",
    ],
  },
  {
    title: "4. Intellectual Property",
    content: `All content, materials, and products sold on TrendingAI — including but not limited to text, graphics, frameworks, and templates — are the intellectual property of TrendingAI and are protected by applicable copyright, trademark, and other intellectual property laws. Unauthorised use is strictly prohibited and may result in legal action.`,
  },
  {
    title: "5. Payment & Pricing",
    content: `All prices are displayed in US dollars (USD) and are subject to change without notice. All applicable taxes are calculated and included at checkout where required. Payment is processed securely via 256-bit SSL encryption. By completing a purchase, you authorise the charge to your selected payment method for the amount shown at checkout.`,
  },
  {
    title: "6. Refund Policy",
    content: `We offer a 30-day money-back guarantee on all products. If you are not satisfied with your purchase for any reason, you may request a full refund within 30 days of the original purchase date by contacting us at info@aiproducts.online. Refunds are processed within 5–10 business days to your original payment method. For full details, see our Refund Policy page.`,
  },
  {
    title: "7. Disclaimer of Warranties",
    content: `Our products are provided "as is" without warranties of any kind, express or implied. While we make every effort to ensure accuracy and quality, we do not guarantee that our products will meet your specific requirements or produce particular results. Business outcomes depend on many factors outside our control, including your individual effort, experience, market conditions, and external circumstances.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by applicable law, TrendingAI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or in connection with your use of our products. Our total liability to you for any claim arising under these terms shall not exceed the amount you paid for the product in question.`,
  },
  {
    title: "9. Indemnification",
    content: `You agree to indemnify, defend, and hold harmless TrendingAI and its affiliates, officers, and employees from any claims, damages, losses, or expenses (including reasonable legal fees) arising out of your breach of these Terms, your use of our products, or your violation of any third-party rights.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms and Conditions are governed by and construed in accordance with applicable law. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of the applicable jurisdiction. If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.`,
  },
  {
    title: "11. Changes to Terms",
    content: `We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective upon posting to this page with an updated "Last updated" date. Your continued use of our website or products after any changes constitutes your acceptance of the revised Terms.`,
  },
  {
    title: "12. Contact",
    content: `For any questions regarding these Terms and Conditions, please contact us at:`,
    contact: true,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-black text-white mb-2">Terms &amp; Conditions</h1>
          <p className="text-sm text-slate-500 mb-12">Last updated: May 22, 2026</p>

          <div className="space-y-4">
            {sections.map((s) => (
              <section key={s.title} className="glass rounded-2xl p-6 sm:p-8">
                <h2 className="text-lg font-bold text-white mb-3">{s.title}</h2>
                {s.content && (
                  <p className="text-slate-400 leading-relaxed text-sm mb-3">{s.content}</p>
                )}
                {s.list && (
                  <>
                    <ul className="space-y-2 mb-3">
                      {s.list.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {s.extra && (
                  <p className="text-sm font-semibold text-slate-300 mb-2 mt-4">{s.extra}</p>
                )}
                {s.prohibited && (
                  <ul className="space-y-2">
                    {s.prohibited.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <span className="text-red-400 flex-shrink-0 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
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
