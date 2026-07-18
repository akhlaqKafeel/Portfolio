import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-card/90 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_20px_50px_-24px_rgba(0,0,0,0.8)] transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
