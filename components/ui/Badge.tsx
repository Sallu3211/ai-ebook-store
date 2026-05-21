interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  className?: string;
}

const variantStyles = {
  default:
    "bg-indigo-500/10 border border-indigo-500/20 text-indigo-300",
  success:
    "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300",
  warning:
    "bg-amber-500/10 border border-amber-500/20 text-amber-300",
  info:
    "bg-cyan-500/10 border border-cyan-500/20 text-cyan-300",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
