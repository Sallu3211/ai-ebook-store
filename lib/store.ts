export type ProductCategory = "ebook" | "template" | "course" | "tool";

export const CATEGORIES: { id: ProductCategory | "all"; label: string; emoji: string }[] = [
  { id: "all", label: "All Products", emoji: "✨" },
  { id: "ebook", label: "Ebooks", emoji: "📘" },
  { id: "template", label: "Templates", emoji: "📋" },
  { id: "course", label: "Courses", emoji: "🎓" },
  { id: "tool", label: "Tools", emoji: "⚡" },
];

export interface ProductPlan {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  badge: string;
  description: string;
  features: string[];
  highlight: boolean;
  paddlePriceId: string;
  downloadFile?: string;
}

export interface StoreProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  coverEmoji: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  plans: ProductPlan[];
  highlights: string[];
  tableOfContents?: { ch: string; title: string }[];
  bonuses?: string[];
  featured: boolean;
  comingSoon?: boolean;
}

export const STORE_PRODUCTS: StoreProduct[] = [
  {
    id: "ai-lead-generation",
    slug: "ai-lead-generation",
    name: "AI Lead Generation Strategy",
    tagline: "Generate 10x more qualified leads using AI — in 30 days or less",
    description:
      "The complete, battle-tested playbook for building an AI-powered lead generation machine. 150+ pages of step-by-step frameworks, real case studies, 40+ copy-paste prompt templates, and automation blueprints. Everything you need to fill your pipeline on autopilot.",
    category: "ebook",
    coverEmoji: "📘",
    badge: "Best Seller",
    rating: 4.9,
    reviewCount: 2400,
    plans: [
      {
        id: "standard",
        name: "Full PDF Guide",
        price: 17,
        originalPrice: 47,
        badge: "Instant Download",
        description: "The complete AI lead generation playbook — everything included.",
        features: [
          "Complete 10-chapter PDF guide (150+ pages)",
          "40+ AI prompt templates (copy-paste ready)",
          "LinkedIn outreach scripts & DM sequences",
          "Cold email templates that convert",
          "ICP mapping & targeting framework",
          "12 automation workflow blueprints",
          "AI tool stack guide & resource list",
          "Funnel optimization checklists",
          "3 months of free content updates",
          "Instant download — access in seconds",
        ],
        highlight: true,
        paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_ID ?? "",
        downloadFile: "ebook-pro.pdf",
      },
    ],
    highlights: [
      "150+ pages of actionable, no-fluff content",
      "10 chapters covering the complete AI lead gen funnel",
      "40+ copy-paste AI prompt templates included",
      "Real case studies with measurable results",
      "2,400+ marketers already using these strategies",
    ],
    tableOfContents: [
      { ch: "01", title: "Building Your AI Lead Generation Foundation" },
      { ch: "02", title: "AI-Powered Ideal Customer Profile (ICP) Mapping" },
      { ch: "03", title: "Automated Prospect Discovery & Qualification" },
      { ch: "04", title: "Hyper-Personalized Outreach at Scale" },
      { ch: "05", title: "LinkedIn AI Domination Strategy" },
      { ch: "06", title: "Cold Email Automation That Converts" },
      { ch: "07", title: "Content-Led Lead Generation with AI" },
      { ch: "08", title: "Building Your Automation Stack" },
      { ch: "09", title: "Funnel Optimization & A/B Testing with AI" },
      { ch: "10", title: "Analytics, Attribution & Scaling Your System" },
    ],
    bonuses: [
      "40+ AI prompt templates (copy-paste ready)",
      "12 automation workflow blueprints",
      "AI tool stack guide & resource list",
      "LinkedIn outreach script library",
    ],
    featured: true,
    comingSoon: false,
  },
  {
    id: "ai-email-templates",
    slug: "ai-email-templates",
    name: "AI Email Templates Library",
    tagline: "500+ battle-tested cold email templates powered by AI",
    description:
      "A massive collection of AI-crafted cold email templates sorted by industry, use case, and buyer persona. Copy, customise, and send.",
    category: "template",
    coverEmoji: "📧",
    badge: "Coming Soon",
    rating: 4.8,
    reviewCount: 0,
    plans: [],
    highlights: [
      "500+ cold email templates",
      "Organised by industry & persona",
      "Subject line swipe file included",
      "AI personalisation variables",
    ],
    featured: true,
    comingSoon: true,
  },
  {
    id: "chatgpt-prompt-pack",
    slug: "chatgpt-prompt-pack",
    name: "ChatGPT Prompt Pack Pro",
    tagline: "200+ curated prompts for marketers and sales teams",
    description:
      "Stop wasting time on weak prompts. This pack gives you 200+ proven prompts for lead gen, content, sales, and growth — ready to copy and use.",
    category: "template",
    coverEmoji: "⚡",
    badge: "Coming Soon",
    rating: 4.9,
    reviewCount: 0,
    plans: [],
    highlights: [
      "200+ proven AI prompts",
      "Covers sales, marketing & growth",
      "Organised by use case",
      "Works with ChatGPT, Claude & Gemini",
    ],
    featured: true,
    comingSoon: true,
  },
];

export function getStoreProduct(slug: string): StoreProduct | undefined {
  return STORE_PRODUCTS.find((p) => p.slug === slug);
}

export function getProductPlan(product: StoreProduct, planId: string): ProductPlan | undefined {
  return product.plans.find((p) => p.id === planId);
}

export function getFeaturedProducts(): StoreProduct[] {
  return STORE_PRODUCTS.filter((p) => p.featured);
}
