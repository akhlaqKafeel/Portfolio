import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border-subtle bg-card/90 p-6 shadow-[0_0_0_1px_color-mix(in_srgb,var(--heading)_3%,transparent),0_20px_50px_-24px_var(--shadow-color)] transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
