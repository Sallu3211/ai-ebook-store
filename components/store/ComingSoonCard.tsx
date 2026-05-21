import { type StoreProduct } from "@/lib/store";

const COVER_GRADIENTS: Record<string, string> = {
  ebook: "from-indigo-900 via-violet-900 to-[#030712]",
  template: "from-violet-900 via-purple-900 to-[#030712]",
  course: "from-cyan-900 via-teal-900 to-[#030712]",
  tool: "from-amber-900 via-orange-900 to-[#030712]",
};

const CATEGORY_COLORS: Record<string, string> = {
  ebook: "text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  template: "text-violet-300 bg-violet-500/10 border-violet-500/20",
  course: "text-cyan-300 bg-cyan-500/10 border-cyan-500/20",
  tool: "text-amber-300 bg-amber-500/10 border-amber-500/20",
};

export default function ComingSoonCard({ product }: { product: StoreProduct }) {
  const coverGradient = COVER_GRADIENTS[product.category] ?? COVER_GRADIENTS.template;
  const categoryColor = CATEGORY_COLORS[product.category] ?? CATEGORY_COLORS.template;

  return (
    <div className="relative flex flex-col rounded-2xl overflow-hidden ring-1 ring-white/6 bg-[#0a0a18] opacity-80">
      {/* Cover */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${coverGradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className={`text-[10px] font-bold px-2 py-1 rounded-full border uppercase tracking-widest ${categoryColor}`}>
            {product.category}
          </span>
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-slate-700/60 border border-slate-600/40 text-slate-300 uppercase tracking-widest">
            Coming Soon
          </span>
        </div>

        {/* Blurred emoji */}
        <span className="text-7xl blur-sm opacity-40">{product.coverEmoji}</span>

        {/* Lock icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a18]/30 backdrop-blur-[2px]">
          <div className="w-12 h-12 rounded-full bg-white/8 border border-white/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a18] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-base font-bold text-slate-400 leading-snug mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
          {product.tagline}
        </p>

        <ul className="space-y-1 mb-4">
          {product.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-slate-600">
              <span className="text-slate-700">—</span> {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <button
            disabled
            className="w-full py-2.5 rounded-xl text-sm font-bold text-slate-500 bg-white/4 border border-white/6 cursor-not-allowed"
          >
            Notify Me When Live
          </button>
        </div>
      </div>
    </div>
  );
}
