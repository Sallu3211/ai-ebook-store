"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";

const features = [
  {
    icon: "🤖",
    title: "AI-Powered Prospecting",
    description:
      "Learn to use ChatGPT, Claude, and Gemini to identify and qualify high-value prospects 10x faster than manual methods.",
  },
  {
    icon: "🎯",
    title: "Hyper-Targeted Outreach",
    description:
      "Build AI-driven ICP profiles and automate personalized outreach sequences that convert at 3x industry average.",
  },
  {
    icon: "⚡",
    title: "Automation Frameworks",
    description:
      "Step-by-step automation blueprints using Make, Zapier, and n8n to run your lead gen engine on autopilot.",
  },
  {
    icon: "📊",
    title: "Data-Driven Funnels",
    description:
      "Master AI-assisted funnel optimization — from landing pages to follow-up sequences that maximize conversion.",
  },
  {
    icon: "🔗",
    title: "Multi-Channel Playbooks",
    description:
      "LinkedIn, email, cold outreach, and content marketing strategies unified into one coherent AI-led system.",
  },
  {
    icon: "📈",
    title: "ROI Measurement",
    description:
      "Track, measure, and optimize every touchpoint with AI analytics dashboards and reporting frameworks.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4">What You'll Learn</Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Everything inside the{" "}
            <span className="gradient-text">Ebook</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            150+ pages of battle-tested frameworks, real case studies, and
            step-by-step playbooks — not theory.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 group cursor-default"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass rounded-2xl p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Pages of Content" },
              { value: "40+", label: "Actionable Frameworks" },
              { value: "12", label: "AI Tool Guides" },
              { value: "2,400+", label: "Happy Readers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-black gradient-text mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
