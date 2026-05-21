"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";

const testimonials = [
  {
    quote:
      "This ebook completely transformed how I approach lead generation. Within 30 days of implementing the AI frameworks, our pipeline grew by 340%. Absolutely worth every penny.",
    author: "Sarah Mitchell",
    role: "Head of Growth, TechScale",
    avatar: "SM",
    rating: 5,
  },
  {
    quote:
      "I've read dozens of marketing books, but none came close to the practical depth of this ebook. The automation blueprints alone saved me 20+ hours per week.",
    author: "James Rodriguez",
    role: "Founder, LeadLab Agency",
    avatar: "JR",
    rating: 5,
  },
  {
    quote:
      "As a solopreneur, I needed an edge. This ebook gave me a complete AI-powered system that's generating more qualified leads than my previous 5-person team.",
    author: "Priya Sharma",
    role: "B2B Consultant",
    avatar: "PS",
    rating: 5,
  },
  {
    quote:
      "The LinkedIn AI strategies in chapter 7 alone paid for this ebook 100x over. We booked 12 enterprise demos in the first week of implementation.",
    author: "Marcus Chen",
    role: "VP Sales, Propel SaaS",
    avatar: "MC",
    rating: 5,
  },
  {
    quote:
      "Concise, actionable, and incredibly up-to-date. The AI tool stack recommendations are exactly what modern marketers need. I recommend this to every client.",
    author: "Emma Thompson",
    role: "Digital Marketing Strategist",
    avatar: "ET",
    rating: 5,
  },
  {
    quote:
      "Skeptical at first, but the results speak for themselves. Cost per lead dropped from $180 to $23 using just the AI prospecting framework in chapter 3.",
    author: "David Park",
    role: "Performance Marketing Lead",
    avatar: "DP",
    rating: 5,
  },
];

const avatarColors = [
  "from-indigo-500 to-violet-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-emerald-500 to-teal-600",
];

export default function Testimonials() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="success" className="mb-4">
            ⭐ 2,400+ Five-Star Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Trusted by{" "}
            <span className="gradient-text">Growth Leaders</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From solo consultants to enterprise teams — real results from real people.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/6 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-300 leading-relaxed flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${avatarColors[i]} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white text-xs font-bold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
