"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  const inputClass =
    "w-full glass rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-white/8 transition-all";

  return (
    <>
      <Navbar />
      <main className="flex-1 pt-28 pb-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-slate-400 leading-relaxed">
              Questions about the ebook? Need support? We&apos;ll get back to you
              within 24 hours.
            </p>
          </div>

          {/* Contact info */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "📧", label: "Email", value: "info@aiproducts.online" },
              { icon: "⏱️", label: "Response Time", value: "Within 24 hours" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-5 flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="glass rounded-2xl p-6 sm:p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <p className="text-4xl mb-4">✅</p>
                <h2 className="text-xl font-bold text-white mb-2">Message Sent!</h2>
                <p className="text-slate-400">
                  We&apos;ll get back to you at info@aiproducts.online within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us more..."
                    rows={5}
                    required
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 transition-all duration-200 shadow-lg shadow-indigo-500/25 disabled:opacity-60 active:scale-95"
                >
                  {status === "loading" ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
