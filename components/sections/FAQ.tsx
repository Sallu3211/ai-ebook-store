"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "@/components/ui/Badge";

const faqs = [
  {
    question: "How are products delivered after purchase?",
    answer:
      "After your payment is confirmed, you'll be redirected to a success page with instant download links. All digital products are delivered as high-quality PDF files, accessible on any device — desktop, tablet, and mobile.",
  },
  {
    question: "What if I'm not satisfied with my purchase?",
    answer:
      "We offer a 30-day, no-questions-asked money-back guarantee. If you're not completely satisfied, simply email us within 30 days of purchase for a full refund. See our Refund Policy for details.",
  },
  {
    question: "Are these products suitable for beginners?",
    answer:
      "Yes. All our products are structured from fundamentals to advanced strategies, making them perfect for beginners while still delivering deep value for experienced practitioners.",
  },
  {
    question: "Do I need specific AI tools or paid subscriptions?",
    answer:
      "No mandatory subscriptions required. Our products cover both free and paid AI tools, with recommendations for different budgets. You can start implementing strategies using free tools like ChatGPT's free tier.",
  },
  {
    question: "How often is the content updated?",
    answer:
      "Your purchase includes 3 months of free content updates. The AI landscape evolves fast and we're committed to keeping everything current. Update notifications are sent to your email.",
  },
  {
    question: "Can I use these products for my clients or team?",
    answer:
      "The license covers personal use. For team or agency licenses (3+ people), please contact us for discounted pricing. This supports the continued development of new products.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex). All payments are processed with 256-bit SSL encryption. Your card details are never stored on our servers.",
  },
];

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="glass rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/4 transition-colors"
      >
        <span className="text-sm font-semibold text-white pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-slate-400"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 border-t border-white/8">
              <p className="text-sm text-slate-400 leading-relaxed pt-4">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">FAQ</Badge>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-400">
            Everything you need to know before you buy.
          </p>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} {...faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
