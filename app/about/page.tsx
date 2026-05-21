import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LeadGenPro and our mission to help businesses grow with AI-powered lead generation strategies.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
              About{" "}
              <span className="gradient-text">LeadGenPro</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We create practical, no-fluff resources that help businesses leverage
              AI to grow faster and smarter.
            </p>
          </div>

          {/* Mission */}
          <div className="glass rounded-2xl p-8 sm:p-12 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              At LeadGenPro, we believe every business — regardless of size or
              budget — deserves access to world-class AI strategies. The AI
              revolution is happening now, and businesses that don&apos;t adapt will
              be left behind.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We distill complex AI concepts into actionable playbooks that real
              marketers, founders, and growth leaders can implement immediately.
              No PhD required. No enterprise budget needed. Just results.
            </p>
          </div>

          {/* Values */}
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                emoji: "🎯",
                title: "Actionable First",
                desc: "Every page of our content is designed to be implemented, not just read.",
              },
              {
                emoji: "🔬",
                title: "Research-Backed",
                desc: "Our strategies are tested, measured, and proven before we publish them.",
              },
              {
                emoji: "🤝",
                title: "Community-Driven",
                desc: "We build with our community — their feedback shapes every update.",
              },
            ].map((val) => (
              <div key={val.title} className="glass rounded-xl p-6 text-center">
                <p className="text-3xl mb-3">{val.emoji}</p>
                <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="glass rounded-2xl p-8 mb-8 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Get in Touch</h2>
            <p className="text-slate-400 mb-4">
              Questions? We&apos;re always happy to help.
            </p>
            <a
              href="mailto:info@aiproducts.online"
              className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
            >
              info@aiproducts.online
            </a>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-slate-400 mb-6">
              Ready to transform your lead generation with AI?
            </p>
            <Button href="/checkout" size="lg">
              See Pricing &amp; Plans →
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
