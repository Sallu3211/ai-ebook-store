export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  badge: string;
  description: string;
  features: string[];
  highlight: boolean;
  paddlePriceId: string;
  pdfFile: string; // filename inside /public/downloads/
}

export const PRODUCTS: Product[] = [
  {
    id: "essential",
    name: "Essential Guide",
    price: 17,
    originalPrice: 69,
    badge: "Best for beginners",
    description: "Master the fundamentals with Chapters 1–3 and get your AI lead gen foundation right.",
    features: [
      "Chapters 1–3 (PDF only)",
      "AI lead gen foundation framework",
      "ICP mapping template",
      "10 starter AI prompts",
      "Instant download",
    ],
    highlight: false,
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_ESSENTIAL ?? "",
    pdfFile: "ebook-essential.pdf",
  },
  {
    id: "pro",
    name: "Pro Playbook",
    price: 27,
    originalPrice: 97,
    badge: "Most popular",
    description: "The full 10-chapter ebook with 40+ prompt templates and outreach scripts.",
    features: [
      "All 10 chapters (PDF + ePub)",
      "40+ AI prompt templates",
      "LinkedIn outreach scripts",
      "Email sequence templates",
      "Funnel optimization guide",
      "Instant download",
    ],
    highlight: true,
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_PRO ?? "",
    pdfFile: "ebook-pro.pdf",
  },
  {
    id: "advanced",
    name: "Advanced Suite",
    price: 47,
    originalPrice: 147,
    badge: "Best for teams",
    description: "Everything in Pro plus 12 automation blueprints, AI tool stack guide, and 1 year updates.",
    features: [
      "Everything in Pro Playbook",
      "12 automation workflow blueprints",
      "AI tool stack guide & resource list",
      "Make.com workflow recipes",
      "LinkedIn AI domination playbook",
      "1 year of free updates",
      "Instant download",
    ],
    highlight: false,
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_ADVANCED ?? "",
    pdfFile: "ebook-advanced.pdf",
  },
  {
    id: "complete",
    name: "Complete Mastery",
    price: 97,
    originalPrice: 297,
    badge: "Best value",
    description: "The full package — every resource plus private community and lifetime updates.",
    features: [
      "Everything in Advanced Suite",
      "Private community access",
      "Lifetime updates (new chapters added)",
      "Priority email support",
      "Scaling & ABM playbook",
      "30-day money-back guarantee",
      "Instant download",
    ],
    highlight: false,
    paddlePriceId: process.env.NEXT_PUBLIC_PADDLE_PRICE_COMPLETE ?? "",
    pdfFile: "ebook-complete.pdf",
  },
];

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
