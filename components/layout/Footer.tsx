import Link from "next/link";

const footerLinks = {
  Product: [
    { label: "Overview", href: "/product" },
    { label: "Pricing", href: "/product#pricing" },
    { label: "What's Inside", href: "/product#features" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/8 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                LeadGen<span className="text-indigo-400">Pro</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
              Helping businesses grow with AI-powered lead generation strategies.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} LeadGenPro. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-600">
            <a href="mailto:info@aiproducts.online" className="hover:text-slate-400 transition-colors">
              info@aiproducts.online
            </a>
            <span>·</span>
            <span>Secure payments powered by Paddle</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
